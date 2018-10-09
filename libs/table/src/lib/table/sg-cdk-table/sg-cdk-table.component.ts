import { Observable, Subject } from 'rxjs';

import {
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  ElementRef,
  EmbeddedViewRef,
  IterableDiffers,
  OnDestroy,
  Optional,
  ViewEncapsulation,
  ViewContainerRef,
  Injector,
  NgZone,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { Platform } from '@angular/cdk/platform';
import { CDK_TABLE_TEMPLATE, CdkTable, DataRowOutlet, CdkHeaderRowDef, CdkFooterRowDef } from '@angular/cdk/table';
import { Directionality } from '@angular/cdk/bidi';

import { SgTableComponent } from '../table.component';

import { SgVirtualScrollForOf } from '../features/virtual-scroll/virtual-scroll-for-of';
import { SgCdkVirtualScrollViewportComponent } from '../features/virtual-scroll/virtual-scroll-viewport.component';

/**
 * Wrapper for the CdkTable that extends it's functionality to support various table features.
 * This wrapper also applies Material Design table styles (i.e. `MatTable` styles).
 *
 * Most of the extensions are done using mixins, this is mostly for clarity and separation of the features added.
 * This approach will allow easy removal when a feature is no longer required/implemented natively.
 */
@Component({
  selector: 'sg-cdk-table',
  exportAs: 'sgCdkTable',
  template: CDK_TABLE_TEMPLATE,
  styleUrls: ['./sg-cdk-table.component.scss'],
  host: {
    'class': 'sg-cdk-table',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SgCdkTableComponent<T> extends CdkTable<T> implements OnDestroy {

  protected get _element(): HTMLElement { return this._elementRef.nativeElement; }

  get onRenderRows(): Observable<DataRowOutlet> {
    if (!this.onRenderRows$) {
      this.onRenderRows$ = new Subject<DataRowOutlet>();
    }
    return this.onRenderRows$.asObservable();
  }

  set minWidth(value: string) {
    this._element.style.minWidth = value;
  }

  private onRenderRows$: Subject<DataRowOutlet>;

  constructor(_differs: IterableDiffers,
              _changeDetectorRef: ChangeDetectorRef,
              _elementRef: ElementRef,
              @Attribute('role') role: string,
              @Optional() _dir: Directionality,
              protected injector: Injector,
              protected table: SgTableComponent<T>,
              @Inject(DOCUMENT) _document?: any,
              platform?: Platform) {
    super(_differs, _changeDetectorRef, _elementRef, role, _dir, document, platform);
    this.table._cdkTable = this;
    this.trackBy = this.table.trackBy;
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    if (this.onRenderRows$) {
      this.onRenderRows$.complete();
    }
    this.virtualScrollDestroy();
  }

  //#region CLEAR-ROW-DEFS

  // TODO: remove if https://github.com/angular/material2/pull/13000 is pushed
  private _cachedRowDefs = { header: new Set<CdkHeaderRowDef>(), footer: new Set<CdkFooterRowDef>() }; //tslint:disable-line

  // TODO: remove if https://github.com/angular/material2/pull/13000 is pushed
  addHeaderRowDef(headerRowDef: CdkHeaderRowDef): void {
    super.addHeaderRowDef(headerRowDef);
    this._cachedRowDefs.header.add(headerRowDef);
  }

  // TODO: remove if https://github.com/angular/material2/pull/13000 is pushed
  clearHeaderRowDefs(): void {
    const { header } = this._cachedRowDefs;
    for (const rowDef of Array.from(header.values())) {
      this.removeHeaderRowDef(rowDef);
    }
    header.clear();
  }

  // TODO: remove if https://github.com/angular/material2/pull/13000 is pushed
  addFooterRowDef(footerRowDef: CdkFooterRowDef): void {
    super.addFooterRowDef(footerRowDef);
    this._cachedRowDefs.footer.add(footerRowDef);
  }

  // TODO: remove if https://github.com/angular/material2/pull/13000 is pushed
  clearFooterRowDefs(): void {
    const { footer } = this._cachedRowDefs;
    for (const rowDef of Array.from(footer.values())) {
      this.removeFooterRowDef(rowDef);
    }
    footer.clear();
  }
  //#endregion CLEAR-ROW-DEFS

  //#region CSS-CLASS-CONTROL
  addClass(cssClassName: string): void {
    this._element.classList.add(cssClassName);
  }

  removeClass(cssClassName: string): void {
    this._element.classList.remove(cssClassName);
  }
  //#endregion CSS-CLASS-CONTROL

  //#region VIRTUAL-SCROLL
  private forOf: SgVirtualScrollForOf<T>; //tslint:disable-line

  updateStickyHeaderRowStyles(): void {
    super.updateStickyHeaderRowStyles();
    // if attached
    if (this.forOf) {
      // TODO: suggest exposing `_headerRowDefs` in material repp or try to get it's value (hint: clear-row-defs mixin)
      this.forOf.setMetaRows(
        this._getRenderedRows(this._headerRowOutlet),
        (this as any)._headerRowDefs.map(def => def.sticky),
        'top',
      );
    }
  }

  updateStickyFooterRowStyles(): void {
    super.updateStickyFooterRowStyles();
    // if attached
    if (this.forOf) {
      // TODO: suggest exposing `_footerRowDefs` in material repp or try to get it's value (hint: clear-row-defs mixin)
      this.forOf.setMetaRows(
        this._getRenderedRows(this._footerRowOutlet),
        (this as any)._footerRowDefs.map(def => def.sticky),
        'bottom',
      );
    }
  }

  attachViewPort(viewport: SgCdkVirtualScrollViewportComponent): void {
    this.detachViewPort();
    this.forOf = new SgVirtualScrollForOf<T>(this.table, this as any, viewport, this.injector.get(NgZone));
  }

  detachViewPort(): void {
    if (this.forOf) {
      this.forOf.destroy();
      this.forOf = undefined;
    }
  }

  private virtualScrollDestroy(): void {
    super.ngOnDestroy();
    this.detachViewPort();
  }
  //#endregion VIRTUAL-SCROLL

  /**
   * An alias for `_cacheRowDefs()`
   */
  updateRowDefCache(): void {
    (this as any)._cacheRowDefs();
  }

  renderRows(): void {
    super.renderRows();
    if (this.onRenderRows$) {
      this.onRenderRows$.next(this._rowOutlet);
    }
  }

  /**
   * Force run change detection for rows.
   * You can run it for specific groups or for all rows.
   */
  syncRows(rowTypes?: Array<'header' | 'table' | 'footer'>): void {
    if (!rowTypes) {
      rowTypes = [ 'header', 'table', 'footer'];
    }

    const arr: ViewContainerRef[] = rowTypes.map( t => {
      switch(t) {
        case 'header':
          return this._headerRowOutlet.viewContainer;
        case 'table':
          return this._rowOutlet.viewContainer;
        case 'footer':
          return this._footerRowOutlet.viewContainer;
      }
    });

    for (const vcRef of arr) {
      for (let renderIndex = 0, count = vcRef.length; renderIndex < count; renderIndex++) {
        const viewRef = vcRef.get(renderIndex) as EmbeddedViewRef<any>;
        viewRef.markForCheck();
        viewRef.detectChanges();
      }
    }
  }
}