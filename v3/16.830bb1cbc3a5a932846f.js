(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"+9h+":function(t,e,i){"use strict";i.d(e,"a",function(){return u});var r=i("cGur"),n=i("ofXK"),o=i("Dh3D"),c=i("bTqV"),s=i("XEBs");class a extends s.l{constructor(t){super(),this.cfr=t,this.name="sortContainer",this.kind="dataHeaderExtensions",this.projectContent=!0}shouldRender(t){return!!t.col.sort&&!!t.injector.get(o.a,!1)}getFactory(t){return this.cfr.resolveComponentFactory(o.b)}onCreated(t,e){this.deregisterId(t,e.instance.id=t.col.id),e.changeDetectorRef.markForCheck()}deregisterId(t,e){const i=t.injector.get(o.a),r=i.sortables.get(e);r&&i.deregister(r)}}var l=i("fXoL");let u=(()=>{class t{constructor(t,e){this.registry=t,t.addMulti("dataHeaderExtensions",new a(e))}}return t.NGRID_PLUGIN=Object(s.v)({id:r.a},r.b),t.\u0275mod=l.Pb({type:t}),t.\u0275inj=l.Ob({factory:function(e){return new(e||t)(l.bc(s.o),l.bc(l.j))},imports:[[n.c,c.c,o.c,s.k],o.c]}),t})()},"4DA5":function(t,e,i){"use strict";i.d(e,"a",function(){return s}),i.d(e,"b",function(){return a});var r=i("7+OI"),n=i("8LU1"),o=i("XEBs"),c=i("fXoL");const s="blockUi";let a=(()=>{class t{constructor(t,e){this.grid=t,this._blockInProgress=!1,this._removePlugin=e.setPlugin(s,this),t.registry.changes.subscribe(t=>{for(const e of t)switch(e.type){case"blocker":this.setupBlocker()}}),e.onInit().subscribe(t=>{t&&this._blockUi&&"boolean"==typeof this._blockUi&&this.setupBlocker()}),e.events.subscribe(t=>{if("onDataSource"===t.kind){const{prev:e,curr:i}=t;e&&o.x.unrx.kill(this,e),i.onSourceChanging.pipe(o.x.unrx(this,i)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!0,this.setupBlocker())}),i.onSourceChanged.pipe(o.x.unrx(this,i)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!1,this.setupBlocker())})}})}get blockUi(){return this._blockUi}set blockUi(t){let e=Object(n.c)(t);!e||"auto"!==t&&""!==t||(e="auto"),Object(r.a)(t)&&this._blockUi!==t?(Object(r.a)(this._blockUi)&&o.x.unrx.kill(this,this._blockUi),this._blockUi=t,t.pipe(o.x.unrx(this,this._blockUi)).subscribe(t=>{this._blockInProgress=t,this.setupBlocker()})):this._blockUi!==e&&(this._blockUi=e,"auto"!==e&&(this._blockInProgress=e,this.setupBlocker()))}ngOnDestroy(){o.x.unrx.kill(this),this._removePlugin(this.grid)}setupBlocker(){if(this.grid.isInit)if(this._blockInProgress){if(!this._blockerEmbeddedVRef){const t=this.grid.registry.getSingle("blocker");t&&(this._blockerEmbeddedVRef=this.grid.createView("afterContent",t.tRef,{$implicit:this.grid}),this._blockerEmbeddedVRef.detectChanges())}}else this._blockerEmbeddedVRef&&(this.grid.removeView(this._blockerEmbeddedVRef,"afterContent"),this._blockerEmbeddedVRef=void 0)}}return t.\u0275fac=function(e){return new(e||t)(c.Rb(o.g),c.Rb(o.n))},t.\u0275dir=c.Mb({type:t,selectors:[["pbl-ngrid","blockUi",""]],inputs:{blockUi:"blockUi"},exportAs:["blockUi"]}),t})()},"6JOf":function(t,e,i){"use strict";i.d(e,"a",function(){return a});var r=i("ofXK"),n=i("f6nW"),o=i("XEBs"),c=i("4DA5"),s=i("fXoL");let a=(()=>{class t{}return t.NGRID_PLUGIN=Object(o.v)({id:c.a},c.b),t.\u0275mod=s.Pb({type:t}),t.\u0275inj=s.Ob({factory:function(e){return new(e||t)},imports:[[r.c,n.r,o.k]]}),t})()},PdhC:function(t,e,i){"use strict";i.r(e),i.d(e,"ColumnHeaderMenuExampleModule",function(){return T});var r=i("mrSG"),n=i("ofXK"),o=i("STbY"),c=i("NFeN"),s=i("XEBs"),a=i("6JOf"),l=i("+9h+"),u=i("YT2F"),b=i("WPM6"),d=i("fluT"),h=i("fXoL"),p=i("XkVd"),m=i("4DA5"),g=i("cGur"),f=i("Dh3D"),k=i("aR4q"),v=i("ntJ3"),y=i("tQNW"),x=i("XiUz");const X=function(t){return{background:t}};function _(t,e){if(1&t&&(h.Xb(0,"div",7),h.Lc(1),h.kc(2,"number"),h.Wb()),2&t){const t=e.value,i=e.col;h.qc("ngridCellStyle",h.sc(5,X,t<0?i.type.data.neg:i.type.data.pos)),h.Fb(1),h.Mc(h.mc(2,2,t,i.type.data.format))}}function D(t,e){if(1&t&&(h.Xb(0,"div",8),h.Xb(1,"mat-icon",9),h.Lc(2,"more_vert"),h.Wb(),h.Wb()),2&t){const t=e.$implicit;h.jc();const i=h.vc(4);h.qc("matMenuTriggerFor",i)("matMenuTriggerData",t)}}function M(t,e){if(1&t&&(h.Xb(0,"button",10),h.fc("click",function(){const t=e.$implicit;return t.table.columnApi.autoSizeColumn(t.col)}),h.Lc(1,"Auto Fit"),h.Wb(),h.Xb(2,"button",11),h.Lc(3,"Sort"),h.Wb(),h.Xb(4,"button",12),h.Lc(5,"Pin"),h.Wb()),2&t){const t=e.$implicit;h.jc();const i=h.vc(7),r=h.vc(10);h.Fb(2),h.qc("matMenuTriggerFor",i)("matMenuTriggerData",t)("disabled",!t.col.sort),h.Fb(2),h.qc("matMenuTriggerFor",r)("matMenuTriggerData",t)}}function S(t,e){1&t&&(h.Xb(0,"button",10),h.fc("click",function(){return e.$implicit.table.ds.setSort()}),h.Lc(1,"None"),h.Wb(),h.Xb(2,"button",10),h.fc("click",function(){const t=e.$implicit;return t.table.ds.setSort(t.col,{order:"asc"})}),h.Lc(3,"Asc"),h.Wb(),h.Xb(4,"button",10),h.fc("click",function(){const t=e.$implicit;return t.table.ds.setSort(t.col,{order:"desc"})}),h.Lc(5,"Desc"),h.Wb())}function C(t,e){1&t&&(h.Xb(0,"button",10),h.fc("click",function(){return e.$implicit.col.columnDef.updatePin()}),h.Lc(1,"Unpin"),h.Wb(),h.Xb(2,"button",10),h.fc("click",function(){return e.$implicit.col.columnDef.updatePin("start")}),h.Lc(3,"Pin Start"),h.Wb(),h.Xb(4,"button",10),h.fc("click",function(){return e.$implicit.col.columnDef.updatePin("end")}),h.Lc(5,"Pin End"),h.Wb())}const P={name:"accountBalance",data:{neg:"rgba(255, 0, 0, 0.33)",pos:"rgba(0, 128, 0, 0.33)",format:"1.0-2"}};let U=(()=>{let t=class{constructor(t){this.datasource=t,this.columns=Object(s.s)().default({minWidth:100,resize:!0}).table({prop:"id",width:"40px"},{prop:"name",sort:!0,reorder:!0},{prop:"jobTitle"},{prop:"accountId"},{prop:"accountType",reorder:!0},{prop:"primeAccount",type:"visualBool",width:"24px"},{prop:"creditScore",type:"starRatings",width:"50px"},{prop:"balance",type:P,sort:!0},...Array.from(new Array(12)).map((t,e)=>({prop:`monthlyBalance.${e}`,type:P,sort:!0}))).build(),this.ds=Object(s.t)().onTrigger(()=>this.datasource.getCustomers(500)).create()}};return t.\u0275fac=function(e){return new(e||t)(h.Rb(d.a))},t.\u0275cmp=h.Lb({type:t,selectors:[["pbl-column-header-menu-example"]],decls:12,vars:3,consts:[["blockUi","","matSort","",1,"pbl-ngrid-cell-ellipsis","pbl-ngrid-header-cell-ellipsis",3,"dataSource","columns"],[3,"ngridCellStyle",4,"pblNgridCellTypeDef"],["style","position: absolute; right: 0; height: 100%; cursor: pointer; margin-right: 12px;","fxLayoutAlign","center center",3,"matMenuTriggerFor","matMenuTriggerData",4,"pblNgridHeaderExtensionRef"],["columnMenu","matMenu"],["matMenuContent",""],["columnSortMenu","matMenu"],["columnPinMenu","matMenu"],[3,"ngridCellStyle"],["fxLayoutAlign","center center",2,"position","absolute","right","0","height","100%","cursor","pointer","margin-right","12px",3,"matMenuTriggerFor","matMenuTriggerData"],[2,"height","16px","width","16px","font-size","16px","line-height","16px"],["mat-menu-item","",3,"click"],["mat-menu-item","",3,"matMenuTriggerFor","matMenuTriggerData","disabled"],["mat-menu-item","",3,"matMenuTriggerFor","matMenuTriggerData"]],template:function(t,e){1&t&&(h.Xb(0,"pbl-ngrid",0),h.Jc(1,_,3,7,"div",1),h.Jc(2,D,3,2,"div",2),h.Xb(3,"mat-menu",null,3),h.Jc(5,M,6,5,"ng-template",4),h.Wb(),h.Xb(6,"mat-menu",null,5),h.Jc(8,S,6,0,"ng-template",4),h.Wb(),h.Xb(9,"mat-menu",null,6),h.Jc(11,C,6,0,"ng-template",4),h.Wb(),h.Wb()),2&t&&(h.qc("dataSource",e.ds)("columns",e.columns),h.Fb(1),h.qc("pblNgridCellTypeDef","accountBalance"))},directives:[p.a,m.b,g.b,f.a,k.a,v.b,o.a,o.b,y.a,x.e,o.e,c.a,o.c],pipes:[n.g],styles:[""],encapsulation:2,changeDetection:0}),t=Object(r.a)([Object(u.e)("pbl-column-header-menu-example",{title:"Column Header Menu"}),Object(r.b)("design:paramtypes",[d.a])],t),t})(),T=(()=>{let t=class{};return t.\u0275mod=h.Pb({type:t}),t.\u0275inj=h.Ob({factory:function(e){return new(e||t)},imports:[[n.c,c.b,o.d,b.a,s.k,a.a,l.a]]}),t=Object(r.a)([Object(u.a)(U)],t),t})()},WPM6:function(t,e,i){"use strict";i.d(e,"a",function(){return s});var r=i("XiUz"),n=i("znSr"),o=i("YT2F"),c=i("fXoL");let s=(()=>{class t{}return t.\u0275mod=c.Pb({type:t}),t.\u0275inj=c.Ob({factory:function(e){return new(e||t)},imports:[[r.i,n.e,o.l],r.i,n.e,o.l]}),t})()},cGur:function(t,e,i){"use strict";i.d(e,"a",function(){return c}),i.d(e,"b",function(){return s});var r=i("XEBs"),n=i("fXoL"),o=i("Dh3D");const c="matSort";let s=(()=>{class t{constructor(t,e,i){this.table=t,this.pluginCtrl=e,this.sort=i,this._removePlugin=e.setPlugin(c,this);let n="click";this.sort.sortChange.pipe(r.x.unrx(this)).subscribe(t=>{this.onSort(t,n),n="click"});const o=t=>{const{column:e}=t,i=t.sort?t.sort.order:void 0;if(this.sort&&e){if(this.sort.active===e.id&&this.sort.direction===(i||""))return;const t=this.sort.sortables.get(e.id);t&&(n="ds",this.sort.active=void 0,t.start=i||"asc",t._handleClick())}else if(this.sort.active){const t=this.sort.sortables.get(this.sort.active);if(t){if(!t.disableClear){let e;for(;e=this.sort.getNextSortDirection(t);)this.sort.direction=e}n="ds",t._handleClick()}}};e.events.subscribe(e=>{if("onInvalidateHeaders"===e.kind){const e=this.sort&&this.sort.active;t.ds&&t.ds.sort&&(!t.ds.sort.column&&e?this.onSort({active:this.sort.active,direction:this.sort.direction||"asc"},n):t.ds.sort.column&&!e&&setTimeout(()=>o(t.ds.sort)))}"onDataSource"===e.kind&&(r.x.unrx.kill(this,e.prev),this.sort&&this.sort.active&&this.onSort({active:this.sort.active,direction:this.sort.direction||"asc"},n),t.ds.sortChange.pipe(r.x.unrx(this,e.curr)).subscribe(t=>{o(t)}))})}ngOnDestroy(){this._removePlugin(this.table),r.x.unrx.kill(this)}onSort(t,e){const i=this.table,r=i.columnApi.visibleColumns.find(e=>e.id===t.active);if("click"===e&&r&&r.sort){const e={},n="function"==typeof r.sort&&r.sort;t.direction&&(e.order=t.direction),n&&(e.sortFn=n);const o=i.ds.sort;if(r===o.column&&e.order===(o.sort||{}).order)return;i.ds.setSort(r,e)}}}return t.\u0275fac=function(e){return new(e||t)(n.Rb(r.g),n.Rb(r.n),n.Rb(o.a))},t.\u0275dir=n.Mb({type:t,selectors:[["pbl-ngrid","matSort",""]],exportAs:["pblMatSort"]}),t})()}}]);