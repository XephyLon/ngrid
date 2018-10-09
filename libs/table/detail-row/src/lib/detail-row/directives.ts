// tslint:disable:use-host-property-decorator
import {
  Component,
  Directive,
  IterableDiffers,
  OnInit,
  OnDestroy,
  TemplateRef,
} from '@angular/core';
import { CdkRowDef, RowContext } from '@angular/cdk/table';

import { SgTableComponent, SgTableRegistryService, SgTableSingleTemplateRegistryDirective } from '@sac/table';

declare module '@sac/table/lib/table/table-registry.service' {
  interface SgTableSingleRegistryMap {
    detailRowParent?: SgTableDetailRowParentRefDirective<any>;
    detailRow?: SgTableDetailRowDefDirective;
  }
}

export interface SgTableDetailRowContext<T> extends RowContext<T> {
  table: SgTableComponent<T>;
}

/**
 * Marks the element as the display element for the detail row itself.
 */
@Directive({ selector: '[sgTableDetailRowDef]' })
export class SgTableDetailRowDefDirective extends SgTableSingleTemplateRegistryDirective<{ $implicit: any }, 'detailRow'> {
  readonly kind: 'detailRow' = 'detailRow';
  constructor(tRef: TemplateRef<{ $implicit: any }>, registry: SgTableRegistryService) { super(tRef, registry); }
}

@Directive({
  selector: '[sgTableDetailRowParentRef]',
  inputs: ['columns: sgTableDetailRowParentRef', 'when: sgTableDetailRowParentRefWhen'],
})
export class SgTableDetailRowParentRefDirective<T> extends CdkRowDef<T> implements OnInit, OnDestroy {

  constructor(template: TemplateRef<SgTableDetailRowContext<T>>, _differs: IterableDiffers, protected registry: SgTableRegistryService) {
    super(template, _differs);
  }

  clone(): SgTableDetailRowParentRefDirective<T> {
    const clone = Object.create(this);
    this._columnsDiffer = this.columns = undefined;
    return clone;
  }

  ngOnInit(): void {
    this.registry.setSingle('detailRowParent', this as any);
  }

  ngOnDestroy(): void {
    this.registry.setSingle('detailRowParent',  undefined);
  }
}

/**
 * Use to set the a default `sgTableDetailRowParentRef` if the user did not set one.
 * @internal
 */
@Component({
  selector: 'sg-table-default-detail-row-parent',
  template: `<sg-table-row *sgTableDetailRowParentRef="let row; table as table" [detailRow]="row" [table]="table"></sg-table-row>`,
})
export class SgTableDefaultDetailRowParentComponent { }