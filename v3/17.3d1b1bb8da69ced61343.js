(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"4DA5":function(e,t,i){"use strict";i.d(t,"a",function(){return n}),i.d(t,"b",function(){return l});var c=i("7+OI"),r=i("8LU1"),o=i("XEBs"),s=i("fXoL");const n="blockUi";let l=(()=>{class e{constructor(e,t){this.grid=e,this._blockInProgress=!1,this._removePlugin=t.setPlugin(n,this),e.registry.changes.subscribe(e=>{for(const t of e)switch(t.type){case"blocker":this.setupBlocker()}}),t.onInit().subscribe(e=>{e&&this._blockUi&&"boolean"==typeof this._blockUi&&this.setupBlocker()}),t.events.subscribe(e=>{if("onDataSource"===e.kind){const{prev:t,curr:i}=e;t&&o.x.unrx.kill(this,t),i.onSourceChanging.pipe(o.x.unrx(this,i)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!0,this.setupBlocker())}),i.onSourceChanged.pipe(o.x.unrx(this,i)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!1,this.setupBlocker())})}})}get blockUi(){return this._blockUi}set blockUi(e){let t=Object(r.c)(e);!t||"auto"!==e&&""!==e||(t="auto"),Object(c.a)(e)&&this._blockUi!==e?(Object(c.a)(this._blockUi)&&o.x.unrx.kill(this,this._blockUi),this._blockUi=e,e.pipe(o.x.unrx(this,this._blockUi)).subscribe(e=>{this._blockInProgress=e,this.setupBlocker()})):this._blockUi!==t&&(this._blockUi=t,"auto"!==t&&(this._blockInProgress=t,this.setupBlocker()))}ngOnDestroy(){o.x.unrx.kill(this),this._removePlugin(this.grid)}setupBlocker(){if(this.grid.isInit)if(this._blockInProgress){if(!this._blockerEmbeddedVRef){const e=this.grid.registry.getSingle("blocker");e&&(this._blockerEmbeddedVRef=this.grid.createView("afterContent",e.tRef,{$implicit:this.grid}),this._blockerEmbeddedVRef.detectChanges())}}else this._blockerEmbeddedVRef&&(this.grid.removeView(this._blockerEmbeddedVRef,"afterContent"),this._blockerEmbeddedVRef=void 0)}}return e.\u0275fac=function(t){return new(t||e)(s.Sb(o.g),s.Sb(o.n))},e.\u0275dir=s.Nb({type:e,selectors:[["pbl-ngrid","blockUi",""]],inputs:{blockUi:"blockUi"},exportAs:["blockUi"]}),e})()},"6JOf":function(e,t,i){"use strict";i.d(t,"a",function(){return l});var c=i("ofXK"),r=i("f6nW"),o=i("XEBs"),s=i("4DA5"),n=i("fXoL");let l=(()=>{class e{}return e.NGRID_PLUGIN=Object(o.v)({id:s.a},s.b),e.\u0275mod=n.Qb({type:e}),e.\u0275inj=n.Pb({factory:function(t){return new(t||e)},imports:[[c.c,r.r,o.k]]}),e})()},"R+S/":function(e,t,i){"use strict";i.d(t,"a",function(){return o});var c=i("XEBs"),r=i("fXoL");let o=(()=>{class e extends c.r{constructor(e,t){super(e,t),this.kind="blocker"}}return e.\u0275fac=function(t){return new(t||e)(r.Sb(r.Q),r.Sb(c.o))},e.\u0275dir=r.Nb({type:e,selectors:[["","pblNgridBlockUiDef",""]],features:[r.Db]}),e})()},WPM6:function(e,t,i){"use strict";i.d(t,"a",function(){return n});var c=i("XiUz"),r=i("znSr"),o=i("YT2F"),s=i("fXoL");let n=(()=>{class e{}return e.\u0275mod=s.Qb({type:e}),e.\u0275inj=s.Pb({factory:function(t){return new(t||e)},imports:[[c.i,r.e,o.l],c.i,r.e,o.l]}),e})()},j2ri:function(e,t,i){"use strict";i.r(t),i.d(t,"BlockUiExampleModule",function(){return y});var c=i("mrSG"),r=i("ofXK"),o=i("bTqV"),s=i("Xa2L"),n=i("bv9b"),l=i("XEBs"),b=i("6JOf"),u=i("YT2F"),a=i("WPM6"),d=i("fluT"),f=i("fXoL"),p=i("R+S/"),k=i("XkVd"),h=i("4DA5");function g(e,t){1&e&&(f.Yb(0,"div",3),f.Tb(1,"mat-progress-bar",4),f.Xb())}let m=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(l.s)().default({minWidth:200}).table({prop:"id"},{prop:"name"}).build(),this.ds=Object(l.t)().onTrigger(()=>this.datasource.getPeople(1e3)).create()}refresh(){this.ds.refresh()}};return e.\u0275fac=function(t){return new(t||e)(f.Sb(d.a))},e.\u0275cmp=f.Mb({type:e,selectors:[["pbl-block-ui-example"]],decls:4,vars:2,consts:[["class","pbl-ngrid-ui-block",4,"pblNgridBlockUiDef"],["blockUi","",3,"dataSource","columns"],["mat-button","",3,"click"],[1,"pbl-ngrid-ui-block"],["mode","indeterminate"]],template:function(e,t){1&e&&(f.Jc(0,g,2,0,"div",0),f.Tb(1,"pbl-ngrid",1),f.Yb(2,"button",2),f.gc("click",function(){return t.refresh()}),f.Lc(3,"Refresh"),f.Xb()),2&e&&(f.Gb(1),f.rc("dataSource",t.ds)("columns",t.columns))},directives:[p.a,k.a,h.b,o.b,n.a],styles:[""],encapsulation:2,changeDetection:0}),e=Object(c.a)([Object(u.e)("pbl-block-ui-example",{title:"Block UI: Automatic"}),Object(c.b)("design:paramtypes",[d.a])],e),e})();function U(e,t){1&e&&(f.Yb(0,"div",4),f.Tb(1,"mat-spinner"),f.Xb())}let _=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(l.s)().default({minWidth:200}).table({prop:"id"},{prop:"name"}).build(),this.ds=Object(l.t)().onTrigger(()=>this.datasource.getPeople(1e3)).create()}};return e.\u0275fac=function(t){return new(t||e)(f.Sb(d.a))},e.\u0275cmp=f.Mb({type:e,selectors:[["pbl-manual-example"]],decls:5,vars:2,consts:[["blockUi","false",3,"dataSource","columns"],["blockUi","blockUi"],["class","pbl-ngrid-ui-block",4,"pblNgridBlockUiDef"],["mat-button","",3,"click"],[1,"pbl-ngrid-ui-block"]],template:function(e,t){if(1&e){const e=f.Zb();f.Yb(0,"pbl-ngrid",0,1),f.Jc(2,U,2,0,"div",2),f.Xb(),f.Yb(3,"button",3),f.gc("click",function(){f.zc(e);const t=f.wc(1);return t.blockUi=!t.blockUi}),f.Lc(4,"Toggle Block UI (plugin instance)"),f.Xb()}2&e&&f.rc("dataSource",t.ds)("columns",t.columns)},directives:[k.a,h.b,p.a,o.b,s.c],styles:[""],encapsulation:2,changeDetection:0}),e=Object(c.a)([Object(u.e)("pbl-manual-example",{title:"Block UI: Manual"}),Object(c.b)("design:paramtypes",[d.a])],e),e})(),y=(()=>{let e=class{};return e.\u0275mod=f.Qb({type:e}),e.\u0275inj=f.Pb({factory:function(t){return new(t||e)},imports:[[r.c,o.c,s.b,n.b,a.a,l.k,b.a]]}),e=Object(c.a)([Object(u.a)(m,_)],e),e})()},mrSG:function(e,t,i){"use strict";function c(e,t,i,c){var r,o=arguments.length,s=o<3?t:null===c?c=Object.getOwnPropertyDescriptor(t,i):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,c);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s}function r(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}i.d(t,"a",function(){return c}),i.d(t,"b",function(){return r})}}]);