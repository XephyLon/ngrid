(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"4DA5":function(e,t,i){"use strict";i.d(t,"a",function(){return n}),i.d(t,"b",function(){return s});var r=i("7+OI"),l=i("8LU1"),o=i("XEBs"),c=i("fXoL");const n="blockUi";let s=(()=>{class e{constructor(e,t){this.grid=e,this._blockInProgress=!1,this._removePlugin=t.setPlugin(n,this),e.registry.changes.subscribe(e=>{for(const t of e)switch(t.type){case"blocker":this.setupBlocker()}}),t.onInit().subscribe(e=>{e&&this._blockUi&&"boolean"==typeof this._blockUi&&this.setupBlocker()}),t.events.subscribe(e=>{if("onDataSource"===e.kind){const{prev:t,curr:i}=e;t&&o.x.unrx.kill(this,t),i.onSourceChanging.pipe(o.x.unrx(this,i)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!0,this.setupBlocker())}),i.onSourceChanged.pipe(o.x.unrx(this,i)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!1,this.setupBlocker())})}})}get blockUi(){return this._blockUi}set blockUi(e){let t=Object(l.c)(e);!t||"auto"!==e&&""!==e||(t="auto"),Object(r.a)(e)&&this._blockUi!==e?(Object(r.a)(this._blockUi)&&o.x.unrx.kill(this,this._blockUi),this._blockUi=e,e.pipe(o.x.unrx(this,this._blockUi)).subscribe(e=>{this._blockInProgress=e,this.setupBlocker()})):this._blockUi!==t&&(this._blockUi=t,"auto"!==t&&(this._blockInProgress=t,this.setupBlocker()))}ngOnDestroy(){o.x.unrx.kill(this),this._removePlugin(this.grid)}setupBlocker(){if(this.grid.isInit)if(this._blockInProgress){if(!this._blockerEmbeddedVRef){const e=this.grid.registry.getSingle("blocker");e&&(this._blockerEmbeddedVRef=this.grid.createView("afterContent",e.tRef,{$implicit:this.grid}),this._blockerEmbeddedVRef.detectChanges())}}else this._blockerEmbeddedVRef&&(this.grid.removeView(this._blockerEmbeddedVRef,"afterContent"),this._blockerEmbeddedVRef=void 0)}}return e.\u0275fac=function(t){return new(t||e)(c.Rb(o.g),c.Rb(o.n))},e.\u0275dir=c.Mb({type:e,selectors:[["pbl-ngrid","blockUi",""]],inputs:{blockUi:"blockUi"},exportAs:["blockUi"]}),e})()},"6JOf":function(e,t,i){"use strict";i.d(t,"a",function(){return s});var r=i("ofXK"),l=i("f6nW"),o=i("XEBs"),c=i("4DA5"),n=i("fXoL");let s=(()=>{class e{}return e.NGRID_PLUGIN=Object(o.v)({id:c.a},c.b),e.\u0275mod=n.Pb({type:e}),e.\u0275inj=n.Ob({factory:function(t){return new(t||e)},imports:[[r.c,l.r,o.k]]}),e})()},WPM6:function(e,t,i){"use strict";i.d(t,"a",function(){return n});var r=i("XiUz"),l=i("znSr"),o=i("YT2F"),c=i("fXoL");let n=(()=>{class e{}return e.\u0275mod=c.Pb({type:e}),e.\u0275inj=c.Ob({factory:function(t){return new(t||e)},imports:[[r.i,l.e,o.l],r.i,l.e,o.l]}),e})()},xzhj:function(e,t,i){"use strict";i.r(t),i.d(t,"GridFillerExampleModule",function(){return w});var r=i("mrSG"),l=i("ofXK"),o=i("XEBs"),c=i("6JOf"),n=i("YT2F"),s=i("WPM6"),a=i("fluT"),b=i("fXoL"),d=i("XkVd"),p=i("4DA5"),u=i("7WRX"),h=i("kvXS");let g=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(o.s)().table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"},{prop:"email",minWidth:250,width:"250px"},{prop:"language",headerType:"language"}).build(),this.ds=Object(o.t)().onTrigger(()=>this.datasource.getPeople(0,3)).create()}};return e.\u0275fac=function(t){return new(t||e)(b.Rb(a.a))},e.\u0275cmp=b.Lb({type:e,selectors:[["pbl-grid-filler-example"]],decls:3,vars:2,consts:[[1,"filler-table-container"],["blockUi","","vScrollAuto","",3,"dataSource","columns"],["filter",""]],template:function(e,t){1&e&&(b.Xb(0,"div",0),b.Xb(1,"pbl-ngrid",1),b.Sb(2,"pbl-demo-action-row",2),b.Wb(),b.Wb()),2&e&&(b.Fb(1),b.qc("dataSource",t.ds)("columns",t.columns))},directives:[d.a,p.b,u.a,h.a],styles:[".filler-table-container{padding:16px;height:400px;background:#90ee90}.filler-table-container pbl-ngrid{height:100%}.filler-table-container .pbl-ngrid-space-fill{background:#add8e6}"],encapsulation:2,changeDetection:0}),e=Object(r.a)([Object(n.e)("pbl-grid-filler-example",{title:"Grid Filler (Virtual Scroll Auto)"}),Object(r.b)("design:paramtypes",[a.a])],e),e})();var f=i("yNqP");let m=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(o.s)().table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"},{prop:"email",minWidth:250,width:"250px"},{prop:"language",headerType:"language"}).build(),this.ds=Object(o.t)().onTrigger(()=>this.datasource.getPeople(0,3)).create()}};return e.\u0275fac=function(t){return new(t||e)(b.Rb(a.a))},e.\u0275cmp=b.Lb({type:e,selectors:[["pbl-grid-filler-fixed-virtual-scroll-example"]],decls:3,vars:2,consts:[[1,"filler-table-container"],["blockUi","","vScrollFixed","",3,"dataSource","columns"],["filter",""]],template:function(e,t){1&e&&(b.Xb(0,"div",0),b.Xb(1,"pbl-ngrid",1),b.Sb(2,"pbl-demo-action-row",2),b.Wb(),b.Wb()),2&e&&(b.Fb(1),b.qc("dataSource",t.ds)("columns",t.columns))},directives:[d.a,p.b,f.a,h.a],styles:[".filler-table-container{padding:16px;height:400px;background:#90ee90}.filler-table-container pbl-ngrid{height:100%}.filler-table-container .pbl-ngrid-space-fill{background:#add8e6}"],encapsulation:2,changeDetection:0}),e=Object(r.a)([Object(n.e)("pbl-grid-filler-fixed-virtual-scroll-example",{title:"Grid Filler (Virtual Scroll Fixed)"}),Object(r.b)("design:paramtypes",[a.a])],e),e})(),k=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(o.s)().table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"},{prop:"email",minWidth:250,width:"250px"},{prop:"language",headerType:"language"}).build(),this.ds=Object(o.t)().onTrigger(()=>this.datasource.getPeople(0,3)).create()}};return e.\u0275fac=function(t){return new(t||e)(b.Rb(a.a))},e.\u0275cmp=b.Lb({type:e,selectors:[["pbl-grid-filler-disabled-example"]],decls:3,vars:2,consts:[[1,"filler-table-container"],["blockUi","","noFiller","",3,"dataSource","columns"],["filter",""]],template:function(e,t){1&e&&(b.Xb(0,"div",0),b.Xb(1,"pbl-ngrid",1),b.Sb(2,"pbl-demo-action-row",2),b.Wb(),b.Wb()),2&e&&(b.Fb(1),b.qc("dataSource",t.ds)("columns",t.columns))},directives:[d.a,p.b,h.a],styles:[".filler-table-container{padding:16px;height:400px;background:#90ee90}.filler-table-container pbl-ngrid{height:100%}.filler-table-container .pbl-ngrid-space-fill{background:#add8e6}"],encapsulation:2,changeDetection:0}),e=Object(r.a)([Object(n.e)("pbl-grid-filler-disabled-example",{title:"Grid Filler Disabled"}),Object(r.b)("design:paramtypes",[a.a])],e),e})();var x=i("z6lm");let v=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(o.s)().table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"},{prop:"email",minWidth:250,width:"250px"},{prop:"language",headerType:"language"}).build(),this.ds=Object(o.t)().onTrigger(()=>this.datasource.getPeople(0,3)).create()}};return e.\u0275fac=function(t){return new(t||e)(b.Rb(a.a))},e.\u0275cmp=b.Lb({type:e,selectors:[["pbl-grid-filler-no-virtual-scroll-example"]],decls:3,vars:2,consts:[[1,"filler-table-container"],["blockUi","","vScrollNone","",3,"dataSource","columns"],["filter",""]],template:function(e,t){1&e&&(b.Xb(0,"div",0),b.Xb(1,"pbl-ngrid",1),b.Sb(2,"pbl-demo-action-row",2),b.Wb(),b.Wb()),2&e&&(b.Fb(1),b.qc("dataSource",t.ds)("columns",t.columns))},directives:[d.a,p.b,x.a,h.a],styles:[".filler-table-container{padding:16px;height:400px;background:#90ee90}.filler-table-container pbl-ngrid{height:100%}.filler-table-container .pbl-ngrid-space-fill{background:#add8e6}"],encapsulation:2,changeDetection:0}),e=Object(r.a)([Object(n.e)("pbl-grid-filler-no-virtual-scroll-example",{title:"Grid Filler No Virtual Scroll"}),Object(r.b)("design:paramtypes",[a.a])],e),e})(),w=(()=>{let e=class{};return e.\u0275mod=b.Pb({type:e}),e.\u0275inj=b.Ob({factory:function(t){return new(t||e)},imports:[[l.c,s.a,o.k,c.a]]}),e=Object(r.a)([Object(n.a)(g,m,k,v)],e),e})()}}]);