(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"9mWc":function(e,t,r){"use strict";r.d(t,"a",function(){return i});var o=r("XEBs"),n=r("fXoL");let i=(()=>{class e extends o.m{constructor(e,t){super(e,t),this.kind="overlayPanels"}}return e.\u0275fac=function(t){return new(t||e)(n.Sb(n.Q),n.Sb(o.o))},e.\u0275dir=n.Nb({type:e,selectors:[["","pblNgridOverlayPanelDef",""]],inputs:{name:["pblNgridOverlayPanelDef","name"]},features:[n.Db]}),e})()},B7z5:function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"d",function(){return a}),r.d(t,"b",function(){return h}),r.d(t,"c",function(){return m});var o=r("XEBs");class n extends o.l{constructor(e,t,r,o){super(),this.component=t,this.cfr=r,this.injector=o,this.kind="overlayPanels",this.projectContent=!1,this.name=e}getFactory(e){return this.cfr.resolveComponentFactory(this.component)}onCreated(e,t){t.changeDetectorRef.markForCheck(),t.changeDetectorRef.detectChanges()}}var i=r("XNiG"),s=r("VRyK"),c=r("1G5W");class a{constructor(e,t){this.overlayRef=e,this.data=t,this._closed$=new i.a,this.closed=this._closed$.asObservable(),this._closingActions(this,e).pipe(Object(c.a)(this.closed)).subscribe(()=>this.close())}close(){if(this._closed$){const e=this._closed$;this._closed$=void 0,e.next(),e.complete(),this.overlayRef.detach(),this.overlayRef.dispose()}}_closingActions(e,t){const r=t.backdropClick(),o=t.detachments();return Object(s.a)(r,o,e.closed)}}var l=r("fXoL"),d=r("rDax"),u=r("+rOU"),f=r("cH1L");const p={hasBackdrop:!1,xPos:"center",yPos:"center",insetPos:!1};let h=(()=>{class e{constructor(e,t,r){this._overlay=e,this._dir=t,this.zone=r}create(e){return new b(this._overlay,this._dir,this.zone,e)}}return e.\u0275fac=function(t){return new(t||e)(l.cc(d.c),l.cc(f.c),l.cc(l.E))},e.\u0275prov=l.Ob({token:e,factory:e.\u0275fac}),e})();class b{constructor(e,t,r,n){this._overlay=e,this._dir=t,this.zone=r,this.grid=n;const i=o.n.find(n);this.injector=i.injector,this.vcRef=i.injector.get(l.U),this._scrollStrategy=()=>e.scrollStrategies.reposition()}openGridCell(e,t,r,o,n){const i=this.grid.columnApi.findColumn(t);if(!i)throw new Error("Could not find the column "+t);let s,c=0;switch(r){case"header":case"footer":s=r;break;default:"number"==typeof r&&(s="table",c=r)}if(!s)throw new Error('Invalid "rowRenderPosition" provided, use "header", "footer" or any number >= 0.');const a=i&&i.columnDef.queryCellElements(s)[c];if(!a)throw new Error(`Could not find a cell for the column ${t} at render index ${c}`);return this.open(e,new l.m(a),o,n)}open(e,t,r,n){r=Object.assign(Object.assign({},p),r||{});const i=this.findNamesExtension(e);if(!i)throw new Error("Could not find the overlay panel with the name "+e);return this.zone.run(()=>{const e=this._createOverlay(t,r),s=new a(e,n);if(this._setPosition(e.getConfig().positionStrategy,r),i instanceof o.m){const t=this._getTemplatePortal(i.tRef,s),r=e.attach(t);r.markForCheck(),r.detectChanges()}else{const t=this._getComponentPortal(s,i),r=e.attach(t);i.onCreated(null,r)}return e.updatePosition(),s})}_createOverlay(e,t){const r=this._getOverlayConfig(e,t),o=this._overlay.create(r);return o.getConfig().hasBackdrop=!!t.hasBackdrop,o.keydownEvents().subscribe(),o}_getOverlayConfig(e,t){const r=this._overlay.position().flexibleConnectedTo(e).withLockedPosition();return new d.d({positionStrategy:r,backdropClass:t.backdropClass||"cdk-overlay-transparent-backdrop",scrollStrategy:this._scrollStrategy(),direction:this._dir})}_getTemplatePortal(e,t){return new u.h(e,this.vcRef,{grid:this.grid,ref:t})}_getComponentPortal(e,t){const r=l.v.create({providers:[{provide:a,useValue:e}],parent:t.injector||this.injector});return new u.d(t.component,this.vcRef,r,t.cfr||null)}_setPosition(e,t){let[r,o]="center"===t.xPos?["center","center"]:"before"===t.xPos?["end","start"]:["start","end"],[n,i]="center"===t.yPos?["center","center"]:"above"===t.yPos?["bottom","top"]:["top","bottom"],[s,c]=[n,i],[a,l]=[r,o];t.insetPos||("center"!==n&&(s="top"===n?"bottom":"top"),"center"!==i&&(c="top"===i?"bottom":"top")),e.withPositions([{originX:r,originY:s,overlayX:a,overlayY:n,offsetY:0},{originX:o,originY:s,overlayX:l,overlayY:n,offsetY:0},{originX:r,originY:c,overlayX:a,overlayY:i,offsetY:-0},{originX:o,originY:c,overlayX:l,overlayY:i,offsetY:-0}])}findNamesExtension(e){let t;return this.grid.registry.forMulti("overlayPanels",r=>{for(const o of r)if(o.name===e)return t=o,!0}),t}}r("9mWc");var y=r("ofXK");let m=(()=>{class e{}return e.\u0275mod=l.Qb({type:e}),e.\u0275inj=l.Pb({factory:function(t){return new(t||e)},providers:[h],imports:[[y.c,d.f,f.a]]}),e})()},WPM6:function(e,t,r){"use strict";r.d(t,"a",function(){return c});var o=r("XiUz"),n=r("znSr"),i=r("YT2F"),s=r("fXoL");let c=(()=>{class e{}return e.\u0275mod=s.Qb({type:e}),e.\u0275inj=s.Pb({factory:function(t){return new(t||e)},imports:[[o.i,n.e,i.l],o.i,n.e,i.l]}),e})()},abrj:function(e,t,r){"use strict";r.r(t),r.d(t,"OverlayPanelExampleModule",function(){return m});var o=r("mrSG"),n=r("ofXK"),i=r("bTqV"),s=r("XEBs"),c=r("B7z5"),a=r("YT2F"),l=r("WPM6"),d=r("fluT"),u=r("fXoL"),f=r("XiUz"),p=r("XkVd"),h=r("9mWc");function b(e,t){1&e&&(u.Yb(0,"div"),u.Yb(1,"h1"),u.Lc(2,"I Am a panel"),u.Xb(),u.Xb())}let y=(()=>{let e=class{constructor(e,t){this.datasource=e,this.overlayPanelFactory=t,this.columns=Object(s.s)().table({prop:"id",sort:!0,width:"40px",wontBudge:!0},{prop:"name",sort:!0},{prop:"email",minWidth:250,width:"250px"},{prop:"address"},{prop:"rating",type:"starRatings",width:"120px"}).build(),this.ds=Object(s.t)().onTrigger(()=>this.datasource.getSellers(0,100)).create()}show(){this.overlayPanelFactory.create(this.ngrid).openGridCell("myUniquePanelName","name","header",{hasBackdrop:!0,xPos:"after",yPos:"below"})}};return e.\u0275fac=function(t){return new(t||e)(u.Sb(d.a),u.Sb(c.b))},e.\u0275cmp=u.Mb({type:e,selectors:[["pbl-overlay-panel-example"]],viewQuery:function(e,t){if(1&e&&u.Ec(s.g,!0),2&e){let e;u.vc(e=u.hc())&&(t.ngrid=e.first)}},decls:6,vars:3,consts:[["fxLayout","row","fxLayoutGap","16px",2,"padding","8px"],["fxFlex","noshrink","mat-stroked-button","","color","accent",3,"click"],["fxFlex","*"],[1,"pbl-ngrid-cell-ellipsis",3,"dataSource","columns"],[4,"pblNgridOverlayPanelDef"]],template:function(e,t){1&e&&(u.Yb(0,"div",0),u.Yb(1,"button",1),u.gc("click",function(){return t.show()}),u.Lc(2,"Show Panel"),u.Xb(),u.Tb(3,"div",2),u.Xb(),u.Yb(4,"pbl-ngrid",3),u.Jc(5,b,3,0,"div",4),u.Xb()),2&e&&(u.Gb(4),u.rc("dataSource",t.ds)("columns",t.columns),u.Gb(1),u.rc("pblNgridOverlayPanelDef","myUniquePanelName"))},directives:[f.f,f.g,i.b,f.b,p.a,h.a],styles:[""],encapsulation:2,changeDetection:0}),e=Object(o.a)([Object(a.e)("pbl-overlay-panel-example",{title:"Overlay Panel"}),Object(o.b)("design:paramtypes",[d.a,c.b])],e),e})(),m=(()=>{let e=class{};return e.\u0275mod=u.Qb({type:e}),e.\u0275inj=u.Pb({factory:function(t){return new(t||e)},imports:[[n.c,i.c,l.a,s.k,c.c]]}),e=Object(o.a)([Object(a.a)(y)],e),e})()},mrSG:function(e,t,r){"use strict";function o(e,t,r,o){var n,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(s=(i<3?n(s):i>3?n(t,r,s):n(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s}function n(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}r.d(t,"a",function(){return o}),r.d(t,"b",function(){return n})}}]);