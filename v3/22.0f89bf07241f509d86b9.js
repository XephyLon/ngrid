(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"4DA5":function(e,t,s){"use strict";s.d(t,"a",function(){return n}),s.d(t,"b",function(){return a});var c=s("7+OI"),i=s("8LU1"),o=s("XEBs"),r=s("fXoL");const n="blockUi";let a=(()=>{class e{constructor(e,t){this.grid=e,this._blockInProgress=!1,this._removePlugin=t.setPlugin(n,this),e.registry.changes.subscribe(e=>{for(const t of e)switch(t.type){case"blocker":this.setupBlocker()}}),t.onInit().subscribe(e=>{e&&this._blockUi&&"boolean"==typeof this._blockUi&&this.setupBlocker()}),t.events.subscribe(e=>{if("onDataSource"===e.kind){const{prev:t,curr:s}=e;t&&o.x.unrx.kill(this,t),s.onSourceChanging.pipe(o.x.unrx(this,s)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!0,this.setupBlocker())}),s.onSourceChanged.pipe(o.x.unrx(this,s)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!1,this.setupBlocker())})}})}get blockUi(){return this._blockUi}set blockUi(e){let t=Object(i.c)(e);!t||"auto"!==e&&""!==e||(t="auto"),Object(c.a)(e)&&this._blockUi!==e?(Object(c.a)(this._blockUi)&&o.x.unrx.kill(this,this._blockUi),this._blockUi=e,e.pipe(o.x.unrx(this,this._blockUi)).subscribe(e=>{this._blockInProgress=e,this.setupBlocker()})):this._blockUi!==t&&(this._blockUi=t,"auto"!==t&&(this._blockInProgress=t,this.setupBlocker()))}ngOnDestroy(){o.x.unrx.kill(this),this._removePlugin(this.grid)}setupBlocker(){if(this.grid.isInit)if(this._blockInProgress){if(!this._blockerEmbeddedVRef){const e=this.grid.registry.getSingle("blocker");e&&(this._blockerEmbeddedVRef=this.grid.createView("afterContent",e.tRef,{$implicit:this.grid}),this._blockerEmbeddedVRef.detectChanges())}}else this._blockerEmbeddedVRef&&(this.grid.removeView(this._blockerEmbeddedVRef,"afterContent"),this._blockerEmbeddedVRef=void 0)}}return e.\u0275fac=function(t){return new(t||e)(r.Rb(o.g),r.Rb(o.n))},e.\u0275dir=r.Mb({type:e,selectors:[["pbl-ngrid","blockUi",""]],inputs:{blockUi:"blockUi"},exportAs:["blockUi"]}),e})()},"6JOf":function(e,t,s){"use strict";s.d(t,"a",function(){return a});var c=s("ofXK"),i=s("f6nW"),o=s("XEBs"),r=s("4DA5"),n=s("fXoL");let a=(()=>{class e{}return e.NGRID_PLUGIN=Object(o.v)({id:r.a},r.b),e.\u0275mod=n.Pb({type:e}),e.\u0275inj=n.Ob({factory:function(t){return new(t||e)},imports:[[c.c,i.r,o.k]]}),e})()},WPM6:function(e,t,s){"use strict";s.d(t,"a",function(){return n});var c=s("XiUz"),i=s("znSr"),o=s("YT2F"),r=s("fXoL");let n=(()=>{class e{}return e.\u0275mod=r.Pb({type:e}),e.\u0275inj=r.Ob({factory:function(t){return new(t||e)},imports:[[c.i,i.e,o.l],c.i,i.e,o.l]}),e})()},pqON:function(e,t,s){"use strict";s.r(t),s.d(t,"EmptyCollectionTemplateExampleModule",function(){return k});var c=s("mrSG"),i=s("ofXK"),o=s("QibW"),r=s("XEBs"),n=s("6JOf"),a=s("YT2F"),l=s("WPM6"),u=s("fXoL"),b=s("XkVd"),p=s("4DA5");let d=(()=>{let e=class{constructor(){this.columns=Object(r.s)().default({minWidth:200}).table({prop:"id"},{prop:"name"}).build(),this.ds=Object(r.t)().onTrigger(()=>[]).create()}};return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u.Lb({type:e,selectors:[["pbl-empty-collection-template-example"]],decls:1,vars:2,consts:[["blockUi","",3,"dataSource","columns"]],template:function(e,t){1&e&&u.Sb(0,"pbl-ngrid",0),2&e&&u.qc("dataSource",t.ds)("columns",t.columns)},directives:[b.a,p.b],styles:[""],encapsulation:2,changeDetection:0}),e=Object(c.a)([Object(a.e)("pbl-empty-collection-template-example",{title:"Synchronous (immediate) Empty set"})],e),e})();var h=s("fluT");let m=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(r.s)().default({minWidth:200}).table({prop:"id"},{prop:"name"}).build(),this.ds=Object(r.t)().onTrigger(()=>this.datasource.getPeople(1e3,0)).create()}};return e.\u0275fac=function(t){return new(t||e)(u.Rb(h.a))},e.\u0275cmp=u.Lb({type:e,selectors:[["pbl-asynchronous-empty-set-example"]],decls:1,vars:2,consts:[["blockUi","",3,"dataSource","columns"]],template:function(e,t){1&e&&u.Sb(0,"pbl-ngrid",0),2&e&&u.qc("dataSource",t.ds)("columns",t.columns)},directives:[b.a,p.b],styles:[""],encapsulation:2,changeDetection:0}),e=Object(c.a)([Object(a.e)("pbl-asynchronous-empty-set-example",{title:"Asynchronous Empty Set"}),Object(c.b)("design:paramtypes",[h.a])],e),e})();function g(e,t){if(1&e&&(u.Xb(0,"mat-radio-button",3),u.Lc(1),u.Wb()),2&e){const e=t.$implicit;u.qc("value",t.index),u.Fb(1),u.Mc(e)}}let f=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(r.s)().default({minWidth:200}).table({prop:"id"},{prop:"name"}).build(),this.ds=Object(r.t)().onTrigger(()=>[]).create(),this.dynamicSteps=["Sync -> No Data","Async (1 sec) -> Data","Async (1 sec) -> No Data","Sync -> Data"],this.currentDynamicStep=0}moveToStep(e){switch(this.currentDynamicStep=e,e){case 0:this.ds=Object(r.t)().onTrigger(()=>[]).create();break;case 1:this.ds=Object(r.t)().onTrigger(()=>this.datasource.getPeople(1e3,5)).create();break;case 2:this.ds=Object(r.t)().onTrigger(()=>this.datasource.getPeople(1e3,0)).create();break;case 3:this.ds=Object(r.t)().onTrigger(()=>this.datasource.getPeople(0,5)).create()}}};return e.\u0275fac=function(t){return new(t||e)(u.Rb(h.a))},e.\u0275cmp=u.Lb({type:e,selectors:[["pbl-dynamic-set-example"]],decls:3,vars:4,consts:[[1,"example-radio-group",3,"value","change"],["class","example-radio-button",3,"value",4,"ngFor","ngForOf"],["showFooter","","blockUi","",3,"dataSource","columns"],[1,"example-radio-button",3,"value"]],template:function(e,t){1&e&&(u.Xb(0,"mat-radio-group",0),u.fc("change",function(e){return t.moveToStep(e.value)}),u.Jc(1,g,2,2,"mat-radio-button",1),u.Wb(),u.Sb(2,"pbl-ngrid",2)),2&e&&(u.qc("value",t.currentDynamicStep),u.Fb(1),u.qc("ngForOf",t.dynamicSteps),u.Fb(1),u.qc("dataSource",t.ds)("columns",t.columns))},directives:[o.b,i.s,b.a,p.b,o.a],styles:[".example-radio-group{display:inline-flex;flex-direction:column}.example-radio-button{margin:5px}"],encapsulation:2,changeDetection:0}),e=Object(c.a)([Object(a.e)("pbl-dynamic-set-example",{title:"Dynamic Set"}),Object(c.b)("design:paramtypes",[h.a])],e),e})(),k=(()=>{let e=class{};return e.\u0275mod=u.Pb({type:e}),e.\u0275inj=u.Ob({factory:function(t){return new(t||e)},imports:[[i.c,o.c,l.a,r.k,n.a]]}),e=Object(c.a)([Object(a.a)(d,m,f)],e),e})()}}]);