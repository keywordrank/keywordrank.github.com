(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"Pa+Z":function(e,t,i){"use strict";i.r(t),i.d(t,"IndexPageModule",function(){return oe});var r=i("zaZD"),n=i("ofXK"),o=i("3Pt+"),c=i("TEn/"),s=i("tyNb"),a=i("mrSG"),h=i("GYP7");class l{static commaNum(e,t){return null==e?"":e.toFixed(t).replace(/\B(?=(\d{3})+(?!\d))/g,",")}static autoUnitNum(e,t){if(null==e)return"";let i="",r=e;return r>=1e3&&(r/=1e3,i="k"),r>=1e3&&(r/=1e3,i="M"),r>=1e3&&(r/=1e3,i="G"),r>=1e3&&(r/=1e3,i="T"),`${r.toFixed(t)}${i}`}}var d=i("84RD"),b=i("fXoL"),g=i("0ZK0"),m=i("GFY0"),u=i("ZrNk"),f=i("/3Ws"),w=i("JKXI"),p=i("AytR"),v=i("tk/3");let y=(()=>{class e{constructor(e,t){this.httpClient=e,this.locationService=t,this.weather=new k,this.tmpWeather=new k}update(){return Object(a.a)(this,void 0,void 0,function*(){if(!this.locationService.location.isInit)return;let e=yield this.httpClient.post(`${p.a.url}/api/weather?zone=${this.locationService.location.zone}`,{}).toPromise();if(e&&e.length>0){if(this.weather.set(e[0]),-999==this.weather.tmn)for(let t=1;t<e.length;++t){let i=e[t];if(-999!=i.tmn){this.weather.tmn=i.tmn;break}}if(-999==this.weather.tmx)for(let t=1;t<e.length;++t){let i=e[t];if(-999!=i.tmx){this.weather.tmx=i.tmx;break}}}})}}return e.\u0275fac=function(t){return new(t||e)(b.Sb(v.a),b.Sb(w.a))},e.\u0275prov=b.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();class k{constructor(){this.clear()}clear(){this.tm=0,this.zone="",this.hour=0,this.day=0,this.pop=0,this.pty=0,this.r06=0,this.r12=0,this.reh=0,this.s06=0,this.s12=0,this.sky=0,this.temp=0,this.tmn=0,this.tmx=0,this.wd=0,this.wdEn="",this.wdKor="",this.wfEn="",this.wfKor="",this.ws=0,this.image="",this.isInit=!1}updateImage(){this.image="/assets/image/partly_cloudy.png","Clear"==this.wfEn?this.image="/assets/image/clear.svg":"Partly Cloudy"==this.wfEn?this.image="/assets/image/partly_cloudy.svg":"Mostly Cloudy"==this.wfEn||"Cloudy"==this.wfEn?this.image="/assets/image/cloudy.svg":"Rain"==this.wfEn||"Snow/Rain"==this.wfEn?this.image="/assets/image/rain.svg":"Snow"==this.wfEn&&(this.image="/assets/image/snow.svg")}set(e){this.tm=e.tm,this.zone=e.zone,this.hour=e.hour,this.day=e.day,this.pop=e.pop,this.pty=e.pty,this.r06=e.r06,this.r12=e.r12,this.reh=e.reh,this.s06=e.s06,this.s12=e.s12,this.sky=e.sky,this.temp=e.temp,this.tmn=e.tmn,this.tmx=e.tmx,this.wd=e.wd,this.wdEn=e.wdEn,this.wdKor=e.wdKor,this.wfEn=e.wfEn,this.wfKor=e.wfKor,this.ws=e.ws,this.updateImage(),this.isInit=!0}toObj(){return{tm:this.tm,zone:this.zone,hour:this.hour,day:this.day,pop:this.pop,pty:this.pty,r06:this.r06,r12:this.r12,reh:this.reh,s06:this.s06,s12:this.s12,sky:this.sky,temp:this.temp,tmn:this.tmn,tmx:this.tmx,wd:this.wd,wdEn:this.wdEn,wdKor:this.wdKor,wfEn:this.wfEn,wfKor:this.wfKor,ws:this.ws,isInit:this.isInit}}setObj(e){this.tm=e.tm,this.zone=e.zone,this.hour=e.hour,this.day=e.day,this.pop=e.pop,this.pty=e.pty,this.r06=e.r06,this.r12=e.r12,this.reh=e.reh,this.s06=e.s06,this.s12=e.s12,this.sky=e.sky,this.temp=e.temp,this.tmn=e.tmn,this.tmx=e.tmx,this.wd=e.wd,this.wdEn=e.wdEn,this.wdKor=e.wdKor,this.wfEn=e.wfEn,this.wfKor=e.wfKor,this.ws=e.ws,this.updateImage(),this.isInit=e.isInit}copy(e){this.tm=e.tm,this.zone=e.zone,this.hour=e.hour,this.day=e.day,this.pop=e.pop,this.pty=e.pty,this.r06=e.r06,this.r12=e.r12,this.reh=e.reh,this.s06=e.s06,this.s12=e.s12,this.sky=e.sky,this.temp=e.temp,this.tmn=e.tmn,this.tmx=e.tmx,this.wd=e.wd,this.wdEn=e.wdEn,this.wdKor=e.wdKor,this.wfEn=e.wfEn,this.wfKor=e.wfKor,this.ws=e.ws,this.updateImage(),this.isInit=e.isInit}}var S=i("k12l"),O=i("XNiG"),E=i("pLZG"),I=i("zx2A");class N{constructor(e){this.notifier=e}call(e,t){const i=new K(e),r=Object(I.c)(this.notifier,new I.a(i));return r&&!i.seenValue?(i.add(r),t.subscribe(i)):i}}class K extends I.b{constructor(e){super(e),this.seenValue=!1}notifyNext(){this.seenValue=!0,this.complete()}notifyComplete(){}}const x={BOTH:"both",VERTICAL:"vertical",HORIZONTAL:"horizontal"};let z=(()=>{class e{constructor(t){this._rootMargin="0px 0px 0px 0px",this._threshold=[...e.DEFAULT_THRESHOLD],this._partial=!0,this._direction=x.BOTH,"[object Object]"===Object.prototype.toString.call(t)&&["root","rootMargin","threshold","partial","direction","checkFn"].forEach(e=>{t.hasOwnProperty(e)&&(this[e]=t[e])}),this._hash=e.hash({rootMargin:this.rootMargin,threshold:this.threshold,partial:this.partial,direction:this.direction,checkFn:String(this.checkFn)})}static stringify(t){if(Array.isArray(t)){const i=[];for(let r=0;r<t.length;r++)i.push(e.stringify(t[r]));return`[${i.join(",")}]`}if("object"==typeof t&&null!==t){const i=[],r=Object.keys(t).sort();for(const n of r){const r=e.stringify(t[n]);i.push(`${n}:${r}`)}return i.join(e.STRINGIFY_DELIMITER)}return String(t)}static hash(t){return function(e){return function(){try{return"undefined"!=typeof window&&this===window}catch(e){return!1}}()?function(e){try{return"undefined"!=typeof window&&window.btoa(e)}catch(t){return e}}(e):function(e){try{return"undefined"!=typeof global&&global.Buffer.from(e).toString("base64")}catch(t){return e}}(e)}(e.stringify(t))}get root(){return this._root}set root(e){this._root=e&&1===e.nodeType?e:void 0}get rootMargin(){return this._rootMargin}set rootMargin(e){if(e&&"string"==typeof e){const t=(e||"0px").split(new RegExp("\\s+")).map(e=>{const t=/^(-?\d*\.?\d+)(px|%)$/.exec(e);if(!t)throw new TypeError("rootMargin must be specified in pixels or percent");return`${t[1]}${t[2]}`});t[1]=t[1]||t[0],t[2]=t[2]||t[0],t[3]=t[3]||t[1],this._rootMargin=t.join(" ")}else this._rootMargin="0px 0px 0px 0px"}get threshold(){return this._threshold}set threshold(t){let i=[];const r=e=>"number"==typeof e&&e>=0&&e<=1;r(t)?i=[t]:Array.isArray(t)&&t.length&&(i=t.filter(e=>r(e))),0===i.length&&(i=[...e.DEFAULT_THRESHOLD]),this._threshold=i}get partial(){return this._partial}set partial(e){this._partial=!!e}get direction(){return this._direction}set direction(e){this._direction=[x.BOTH,x.HORIZONTAL,x.VERTICAL].indexOf(e)>=0?e:x.BOTH}get hash(){return this._hash}get checkFn(){return this._checkFn}set checkFn(e){this._checkFn=e}}return e.DEFAULT_THRESHOLD=[0,1],e.STRINGIFY_DELIMITER="|",e})(),T=(()=>{class e{constructor(e){this.ngZone=e,this.trigger$=new O.a,this.registry=[]}emitTrigger(e){Array.isArray(e)&&e.length&&e.forEach(e=>this.trigger$.next(e))}getRootElement(e){return e&&e.nodeType===Node.ELEMENT_NODE?e:null}findEntry(e,t){return this.registry.find(i=>i.root===this.getRootElement(e)&&i.configHash===t)}register(e,t){this.ngZone.runOutsideAngular(()=>{const i=this.findEntry(t.root,t.hash);if(i&&!i.targets.has(e))i.targets.add(e),i.observer.observe(e);else{const i=this.getRootElement(t.root),r={root:null!==i?i:void 0,rootMargin:t.rootMargin,threshold:t.threshold},n={root:i,configHash:t.hash,targets:new Set([e]),observer:new IntersectionObserver(e=>this.ngZone.run(()=>this.emitTrigger(e)),r)};n.observer.observe(e),this.registry=[...this.registry,n]}})}unregister(e,t){this.ngZone.runOutsideAngular(()=>{const i=this.findEntry(t.root,t.hash);if(i){const{observer:t,targets:r}=i;r.has(e)&&(t.unobserve(e),r.delete(e)),0===r.size&&(t.disconnect(),this.registry=this.registry.filter(e=>e!==i))}})}}return e.\u0275fac=function(t){return new(t||e)(b.Sb(b.A))},e.\u0275prov=b.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e.ngInjectableDef=Object(b.S)({factory:function(){return new e(Object(b.V)(b.A))},token:e,providedIn:"root"}),e})();const C=Symbol("InViewportMetadata");let M=(()=>{class e{constructor(e,t,i){this.platformId=e,this.elementRef=t,this.inViewport=i,this.config=new z,this.destroyed$=new O.a,this.inViewportAction=new b.o}set options(e){this.config=new z(e)}ngAfterViewInit(){var e;Object(n.n)(this.platformId)?(this.inViewport.register(this.elementRef.nativeElement,this.config),this.inViewport.trigger$.pipe(Object(E.a)(e=>e&&e.target===this.elementRef.nativeElement),(e=this.destroyed$,t=>t.lift(new N(e)))).subscribe(e=>{this.emitAction(e,!1)})):this.emitAction(void 0,!0)}ngOnDestroy(){this.destroyed$.next(),this.destroyed$.complete(),Object(n.n)(this.platformId)&&this.inViewport.unregister(this.elementRef.nativeElement,this.config)}check(e,t){const i=t||!e||(()=>this.config.partial?e.isIntersecting||e.intersectionRatio>0:e.intersectionRatio>=1)();return{[C]:{entry:e},target:this.elementRef.nativeElement,visible:i}}emitAction(e,t){const i=this.config.checkFn?this.config.checkFn(e,{force:t,config:this.config}):this.check(e,t);this.inViewportAction.emit(i)}}return e.\u0275fac=function(t){return new(t||e)(b.Jb(b.C),b.Jb(b.m),b.Jb(T))},e.\u0275dir=b.Eb({type:e,selectors:[["","inViewport",""]],inputs:{options:["inViewportOptions","options"]},outputs:{inViewportAction:"inViewportAction"}}),e})(),A=(()=>{class e{}return e.\u0275mod=b.Hb({type:e}),e.\u0275inj=b.Gb({factory:function(t){return new(t||e)},imports:[[n.b]]}),e})();const F=["searchInput"];function L(e,t){if(1&e){const e=b.Pb();b.Ob(0,"ion-icon",23),b.Wb("click",function(){b.hc(e);const t=b.ac();return t.isShowEngineSelector=!t.isShowEngineSelector}),b.Nb()}if(2&e){const e=b.ac();b.kc("color",e.searchEngineService.getMeta().color)}}function R(e,t){if(1&e){const e=b.Pb();b.Ob(0,"ion-icon",24),b.Wb("click",function(){b.hc(e);const t=b.ac();return t.isShowEngineSelector=!t.isShowEngineSelector}),b.Nb()}if(2&e){const e=b.ac();b.kc("color",e.searchEngineService.getMeta().color)}}function _(e,t){if(1&e){const e=b.Pb();b.Ob(0,"ion-icon",25),b.Wb("click",function(){return b.hc(e),b.ac().clearKeyword()}),b.Nb()}}function V(e,t){1&e&&b.Kb(0,"ion-icon",44)}function $(e,t){if(1&e&&b.Kb(0,"ion-icon",45),2&e){const e=b.ac(3);b.kc("color",e.searchEngineService.getMeta().color)}}const j=function(e){return{selected:e}};function D(e,t){if(1&e){const e=b.Pb();b.Ob(0,"li",40),b.Wb("click",function(){b.hc(e);const i=t.$implicit,r=b.ac(2);return r.searchEngineService.setKey(i.key),r.isShowEngineSelector=!1}),b.Kb(1,"img",34),b.Ob(2,"div",41),b.mc(3),b.Nb(),b.Kb(4,"div",30),b.lc(5,V,1,0,"ion-icon",42),b.lc(6,$,1,2,"ion-icon",43),b.Nb()}if(2&e){const e=t.$implicit,i=b.ac(2);b.zb(1),b.Ab("src",e.image,b.ic),b.zb(1),b.dc("ngClass",b.fc(5,j,e.key==i.searchEngineService.key)),b.zb(1),b.oc(" ",e.name," "),b.zb(2),b.dc("ngIf",e.key!=i.searchEngineService.key),b.zb(1),b.dc("ngIf",e.key==i.searchEngineService.key)}}function H(e,t){1&e&&b.Kb(0,"ion-icon",46)}function P(e,t){1&e&&b.Kb(0,"ion-icon",47)}function W(e,t){1&e&&(b.Mb(0),b.mc(1,"\ud654\uc774\ud2b8\ubaa8\ub4dc\ub85c"),b.Lb())}function B(e,t){1&e&&(b.Mb(0),b.mc(1,"\ub2e4\ud06c\ubaa8\ub4dc\ub85c"),b.Lb())}function Z(e,t){if(1&e){const e=b.Pb();b.Ob(0,"div",26),b.Ob(1,"div",27),b.Kb(2,"ion-icon",28),b.Ob(3,"div",29),b.mc(4," \uac80\uc0c9\uc5d4\uc9c4\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694. "),b.Nb(),b.Kb(5,"div",30),b.Ob(6,"div",31),b.Wb("click",function(){return b.hc(e),b.ac().isShowEngineSelector=!1}),b.mc(7," \ub2eb\uae30 "),b.Nb(),b.Nb(),b.Ob(8,"ul"),b.lc(9,D,7,7,"li",32),b.Ob(10,"li",33),b.Wb("click",function(){b.hc(e);const t=b.ac();return t.globalService.setDarkMode(!t.globalService.darkMode),t.isShowEngineSelector=!1}),b.Ob(11,"div",34),b.lc(12,H,1,0,"ion-icon",35),b.lc(13,P,1,0,"ion-icon",36),b.Nb(),b.Ob(14,"div",37),b.lc(15,W,2,0,"ng-container",38),b.lc(16,B,2,0,"ng-container",38),b.Nb(),b.Kb(17,"div",30),b.Kb(18,"ion-icon",39),b.Nb(),b.Nb(),b.Nb()}if(2&e){const e=b.ac();b.zb(9),b.dc("ngForOf",e.searchEngineService.metas)("ngForTrackBy",e.globalService.trackByFn),b.zb(3),b.dc("ngIf",e.globalService.darkMode),b.zb(1),b.dc("ngIf",!e.globalService.darkMode),b.zb(2),b.dc("ngIf",e.globalService.darkMode),b.zb(1),b.dc("ngIf",!e.globalService.darkMode)}}function U(e,t){1&e&&b.Kb(0,"img",48),2&e&&b.Ab("src",t.$implicit.image,b.ic)}function J(e,t){if(1&e){const e=b.Pb();b.Ob(0,"div",58),b.Wb("click",function(){b.hc(e);const i=t.$implicit,r=b.ac(2);return r.searchKeywordService.setKey(i.key),r.searchKeywordService.getKeywords(),r.rollingIdx=-1}),b.Kb(1,"img"),b.Nb()}if(2&e){const e=t.$implicit,i=b.ac(2);b.dc("ngClass",b.fc(2,j,i.searchKeywordService.key==e.key)),b.zb(1),b.Ab("src",e.image,b.ic)}}const G=function(e){return{on:e}};function q(e,t){if(1&e){const e=b.Pb();b.Ob(0,"li",59),b.Wb("click",function(){b.hc(e);const i=t.$implicit;return b.ac(2).search(i.keyword)}),b.Ob(1,"div",60),b.Ob(2,"div",61),b.mc(3),b.Nb(),b.Ob(4,"div",62),b.mc(5),b.Nb(),b.Kb(6,"ion-icon",63),b.Nb(),b.Nb()}if(2&e){const e=t.$implicit,i=b.ac(2);b.dc("ngClass",b.fc(5,G,i.rollingIdx+1==e.rank)),b.zb(2),b.kc("color",i.searchKeywordService.getMeta().color),b.zb(1),b.oc(" ",e.rank," "),b.zb(2),b.oc(" ",e.keyword," ")}}function X(e,t){if(1&e){const e=b.Pb();b.Ob(0,"div",49),b.Ob(1,"div",50),b.Ob(2,"div",51),b.mc(3," \uc778\uae30 \uac80\uc0c9 \ud0a4\uc6cc\ub4dc "),b.Nb(),b.Kb(4,"div",30),b.Ob(5,"ion-icon",52),b.Wb("click",function(){return b.hc(e),b.ac().searchKeywordService.getKeywords()}),b.Nb(),b.Ob(6,"div",53),b.Wb("click",function(){return b.hc(e),b.ac().searchKeywordService.getKeywords()}),b.mc(7),b.Nb(),b.Nb(),b.Ob(8,"div",54),b.lc(9,J,2,4,"div",55),b.Nb(),b.Ob(10,"ul",56),b.lc(11,q,7,7,"li",57),b.Nb(),b.Nb()}if(2&e){const e=b.ac();b.zb(7),b.oc(" ",e.searchKeywordService.displayTime," "),b.zb(2),b.dc("ngForOf",e.searchKeywordService.metas)("ngForTrackBy",e.globalService.trackByFn),b.zb(2),b.dc("ngForOf",e.searchKeywordService.keywords)("ngForTrackBy",e.globalService.trackByFn)}}function Y(e,t){if(1&e){const e=b.Pb();b.Ob(0,"div",64),b.Ob(1,"div",65),b.Ob(2,"div",66),b.mc(3," \uc624\ub298\uc758 \ub0a0\uc528 "),b.Nb(),b.Ob(4,"div",67),b.Wb("click",function(){return b.hc(e),b.ac().updateLocation()}),b.Ob(5,"div",68),b.Kb(6,"ion-icon",69),b.Ob(7,"div",70),b.mc(8),b.Nb(),b.Nb(),b.Nb(),b.Nb(),b.Ob(9,"div",71),b.Wb("click",function(){return b.hc(e),b.ac().globalService.link("https://weather.naver.com")}),b.Ob(10,"div",72),b.Kb(11,"img",73),b.Nb(),b.Ob(12,"div",74),b.mc(13),b.Nb(),b.Ob(14,"div",75),b.mc(15," \ucd5c\uc800 "),b.Nb(),b.Ob(16,"div",76),b.mc(17),b.Nb(),b.Ob(18,"div",77),b.mc(19," / "),b.Nb(),b.Ob(20,"div",78),b.mc(21," \ucd5c\uace0 "),b.Nb(),b.Ob(22,"div",79),b.mc(23),b.Nb(),b.Nb(),b.Nb()}if(2&e){const e=b.ac();b.zb(8),b.oc(" ",e.locationService.location.displayRegion," "),b.zb(3),b.Ab("src",e.weatherService.weather.image,b.ic),b.zb(2),b.pc(" ",e.weatherService.weather.temp,"\u2103 ",e.weatherService.weather.wfKor," "),b.zb(4),b.oc(" ",e.weatherService.weather.tmn,"\u2103 "),b.zb(6),b.oc(" ",e.weatherService.weather.tmx,"\u2103 ")}}function Q(e,t){if(1&e){const e=b.Pb();b.Ob(0,"div",80),b.Ob(1,"div",81),b.Ob(2,"div",82),b.mc(3," \ucf54\ub85c\ub09819 \uc2e0\uaddc \ud655\uc9c4\uc790 \uc218 "),b.Nb(),b.Ob(4,"div",83),b.mc(5),b.Nb(),b.Nb(),b.Ob(6,"div",84),b.Wb("click",function(){return b.hc(e),b.ac().globalService.link("https://m.news.naver.com/covid19/index.nhn")}),b.Ob(7,"div",85),b.Zb(),b.Ob(8,"svg",86),b.Kb(9,"path",87),b.Kb(10,"circle",88),b.Kb(11,"ellipse",89),b.Kb(12,"ellipse",90),b.Kb(13,"path",91),b.Kb(14,"circle",92),b.Kb(15,"path",93),b.Kb(16,"path",94),b.Kb(17,"ellipse",95),b.Nb(),b.Nb(),b.Yb(),b.Ob(18,"div",96),b.mc(19," \uc804\uad6d "),b.Nb(),b.Ob(20,"div",97),b.mc(21),b.Nb(),b.Ob(22,"div",98),b.mc(23," \uba85 "),b.Nb(),b.Ob(24,"div",99),b.mc(25),b.Nb(),b.Ob(26,"div",100),b.Kb(27,"div",101),b.Nb(),b.Ob(28,"div",96),b.mc(29),b.Nb(),b.Ob(30,"div",97),b.mc(31),b.Nb(),b.Ob(32,"div",98),b.mc(33," \uba85 "),b.Nb(),b.Ob(34,"div",99),b.mc(35),b.Nb(),b.Nb(),b.Nb()}if(2&e){const e=b.ac();b.zb(5),b.oc(" ",e.coronaService.displayTime," "),b.zb(16),b.oc(" ",e.unitUtil.commaNum(e.coronaService.cityToCorona[e.coronaService.sumCity].sum)," "),b.zb(4),b.oc(" ",e.coronaService.cityToCorona[e.coronaService.sumCity].sumDiff," "),b.zb(4),b.oc(" ",e.locationService.location.city," "),b.zb(2),b.oc(" ",e.unitUtil.commaNum(e.coronaService.cityToCorona[e.locationService.location.city].sum)," "),b.zb(4),b.oc(" ",e.coronaService.cityToCorona[e.locationService.location.city].sumDiff," ")}}const ee=function(){return[10]},te=function(e){return{threshold:e}};function ie(e,t){if(1&e){const e=b.Pb();b.Ob(0,"div",102),b.Wb("click",function(){b.hc(e);const t=b.ac();return t.adService.move(t.globalService.isMobile,t.adService.ad)})("inViewportAction",function(t){return b.hc(e),b.ac().onIntersection(t)}),b.Kb(1,"img",103),b.Nb()}if(2&e){const e=b.ac();b.dc("inViewportOptions",b.fc(3,te,b.ec(2,ee))),b.zb(1),b.Ab("src",e.globalService.isMobile?e.adService.ad.imageMobile:e.adService.ad.imagePc,b.ic)}}const re=[{path:"",component:(()=>{class e{constructor(e,t,i,r,n,o,c){this.globalService=e,this.searchEngineService=t,this.searchKeywordService=i,this.coronaService=r,this.locationService=n,this.weatherService=o,this.adService=c,this.timeUtil=h.a,this.unitUtil=l,this.keyword="",this.isDisplayAd=!1,this.adTimer=null,this.rollingTimer=null,this.rollingIdx=-1,this.isShowEngineSelector=!1,this.requestLock=new d.a,this.searchKeywordService.getKeywords(),this.coronaService.getCityToCorona(),this.weatherService.update().then(()=>{this.updateLocation()}),this.repeatUpdateAd(),this.repeatRollingKeywordIdx()}onIntersection({visible:e}){this.adService.isInit||(this.adService.isInit=!0,this.adService.update().then(()=>{this.adService.pickUp()})),this.isDisplayAd=!!e}ngOnDestroy(){this.rollingTimer&&(clearTimeout(this.rollingTimer),this.rollingTimer=null)}repeatUpdateAd(){this.adTimer&&(clearTimeout(this.adTimer),this.adTimer=null),this.adTimer=setTimeout(()=>{this.isDisplayAd&&this.adService.pickUp(),this.repeatUpdateAd()},2e4)}repeatRollingKeywordIdx(){this.rollingTimer&&(clearTimeout(this.rollingTimer),this.rollingTimer=null),this.rollingTimer=setTimeout(()=>{this.rollingIdx+=1,this.rollingIdx>9&&(this.rollingIdx=0),this.repeatRollingKeywordIdx()},2e3)}keyup(e){"Enter"==e.key&&this.search(this.keyword)}search(e){""!=e&&window.open(`${this.searchEngineService.getSearchURL()}${e}`,"_blank")}clearKeyword(){this.keyword="",this.searchInput.nativeElement.focus()}updateLocation(){return Object(a.a)(this,void 0,void 0,function*(){this.requestLock.isLock||(this.requestLock.lock(),(yield this.locationService.update())&&(yield this.weatherService.update()),this.requestLock.unlock())})}}return e.\u0275fac=function(t){return new(t||e)(b.Jb(g.a),b.Jb(m.a),b.Jb(u.a),b.Jb(f.a),b.Jb(w.a),b.Jb(y),b.Jb(S.a))},e.\u0275cmp=b.Db({type:e,selectors:[["route-index"]],viewQuery:function(e,t){if(1&e&&b.qc(F,!0),2&e){let e;b.gc(e=b.Xb())&&(t.searchInput=e.first)}},decls:28,vars:17,consts:[[1,"search"],[1,"search-image",3,"click"],["class","search-caret","name","caret-down-sharp",3,"color","click",4,"ngIf"],["class","search-caret","name","caret-up-sharp",3,"color","click",4,"ngIf"],[1,"search-input-wrap"],["type","text","autocomplete","false","spellcheck","false","placeholder","\uac80\uc0c9\ud560 \ud0a4\uc6cc\ub4dc\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",1,"search-input",3,"ngModel","ngModelChange","keyup"],["searchInput",""],["class","search-close","name","close-circle-sharp",3,"click",4,"ngIf"],["name","search-sharp",1,"search-icon",3,"click"],["class","sselector",4,"ngIf"],["class","hide",4,"ngFor","ngForOf"],["name","contrast-sharp",1,"hide"],["name","moon-sharp",1,"hide"],["name","ellipse-outline",1,"hide"],["name","checkmark-circle",1,"hide"],[1,"container"],["class","skeyword",4,"ngIf"],["class","weather",4,"ngIf"],["class","corona",4,"ngIf"],["class","ad","inViewport","",3,"inViewportOptions","click","inViewportAction",4,"ngIf"],[1,"footer"],[1,"divider"],[1,"footer-ad"],["name","caret-down-sharp",1,"search-caret",3,"click"],["name","caret-up-sharp",1,"search-caret",3,"click"],["name","close-circle-sharp",1,"search-close",3,"click"],[1,"sselector"],[1,"sselector-header"],["name","information-circle-outline",1,"sselector-header-icon"],[1,"sselector-header-info"],[2,"flex-grow","1"],[1,"sselector-header-close",3,"click"],["class","sselector-item",3,"click",4,"ngFor","ngForOf","ngForTrackBy"],[1,"dselector",3,"click"],[1,"sselector-item-image"],["class","dselector-icon","name","contrast-sharp",4,"ngIf"],["class","dselector-icon","name","moon-sharp",4,"ngIf"],[1,"dselector-name"],[4,"ngIf"],["name","toggle-sharp",1,"dselector-toggle"],[1,"sselector-item",3,"click"],[1,"sselector-item-name",3,"ngClass"],["name","ellipse-outline","class","sselector-item-uncheck",4,"ngIf"],["name","checkmark-circle","class","sselector-item-check",3,"color",4,"ngIf"],["name","ellipse-outline",1,"sselector-item-uncheck"],["name","checkmark-circle",1,"sselector-item-check"],["name","contrast-sharp",1,"dselector-icon"],["name","moon-sharp",1,"dselector-icon"],[1,"hide"],[1,"skeyword"],[1,"skeyword-header"],[1,"skeyword-header-title"],["name","refresh",1,"skeyword-header-refresh",3,"click"],[1,"skeyword-header-time",3,"click"],[1,"skeyword-engine-container"],["class","skeyword-engine",3,"ngClass","click",4,"ngFor","ngForOf","ngForTrackBy"],[1,"skeyword-keyword-container"],["class","skeyword-keyword-wrap",3,"ngClass","click",4,"ngFor","ngForOf","ngForTrackBy"],[1,"skeyword-engine",3,"ngClass","click"],[1,"skeyword-keyword-wrap",3,"ngClass","click"],[1,"skeyword-keyword"],[1,"skeyword-keyword-rank"],[1,"skeyword-keyword-keyword"],["name","chevron-forward-sharp",1,"skeyword-keyword-forward"],[1,"weather"],[1,"weather-header"],[1,"weather-header-title"],[1,"weather-header-location-container",3,"click"],[1,"weather-header-location"],["name","navigate",1,"weather-header-navigate"],[1,"weather-header-region"],[1,"weather-content",3,"click"],[1,"weather-image"],[2,"width","100%"],[1,"weather-current-temp"],[1,"weather-min-max-name","blue"],[1,"weather-min-max-temp","blue"],[1,"weather-divider"],[1,"weather-min-max-name","red"],[1,"weather-min-max-temp","red"],[1,"corona"],[1,"corona-header"],[1,"corona-header-title"],[1,"corona-header-time"],[1,"corona-content",3,"click"],[1,"corona-image"],["width","30","height","30","viewBox","0 0 30 30","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M14.4827 22.7586C9.91205 22.7586 6.20682 19.0534 6.20682 14.4828C6.20682 9.91214 9.91205 6.20691 14.4827 6.20691C19.0533 6.20691 22.7585 9.91214 22.7585 14.4828C22.7585 19.0534 19.0533 22.7586 14.4827 22.7586Z",1,"corona-svg"],["cx","2.34375","cy","19.2188","r","2.34375","transform","rotate(90 2.34375 19.2188)",1,"corona-svg"],["cx","9.84375","cy","26.7188","rx","3.28125","ry","3.28125","transform","rotate(90 9.84375 26.7188)",1,"corona-svg"],["cx","26.7188","cy","11.7188","rx","3.28125","ry","3.28125","transform","rotate(90 26.7188 11.7188)",1,"corona-svg"],["d","M18.75 5.625C17.1967 5.625 15.9375 4.3658 15.9375 2.8125C15.9375 1.2592 17.1967 -1.00276e-07 18.75 -6.45992e-08C20.3033 -2.8922e-08 21.5625 1.2592 21.5625 2.8125C21.5625 4.3658 20.3033 5.625 18.75 5.625Z",1,"corona-svg"],["cx","4.21875","cy","4.21875","r","4.21875","transform","rotate(90 4.21875 4.21875)",1,"corona-svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M17.8378 13.3195L10.8923 27.2418L8.79507 26.1955L13.3167 17.1318L2.68222 20.3406L2.00518 18.0968L17.8378 13.3195Z",1,"corona-svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M19.0271 2.14264C19.656 2.29568 20.0417 2.92954 19.8886 3.55839L18.1878 10.5469H26.25C26.8972 10.5469 27.4219 11.0716 27.4219 11.7188C27.4219 12.366 26.8972 12.8907 26.25 12.8907H17.6174L17.0854 15.0766L24.7935 22.7847C25.2511 23.2423 25.2511 23.9843 24.7935 24.4419C24.3358 24.8996 23.5938 24.8996 23.1362 24.4419L14.969 16.2748L3.87229 5.52939C3.40735 5.07916 3.39541 4.33727 3.84564 3.87232C4.29587 3.40737 5.03776 3.39544 5.50271 3.84567L15.1362 13.1742L17.6114 3.00416C17.7644 2.37531 18.3983 1.98959 19.0271 2.14264Z",1,"corona-svg"],["cx","24.8438","cy","24.8438","rx","5.15625","ry","5.15625","transform","rotate(90 24.8438 24.8438)",1,"corona-svg"],[1,"corona-city"],[1,"corona-confirm"],[1,"corona-myung"],[1,"corona-diff"],[1,"corona-divider-container"],[1,"corona-divider"],["inViewport","",1,"ad",3,"inViewportOptions","click","inViewportAction"],[1,"ad-image"]],template:function(e,t){1&e&&(b.Ob(0,"div",0),b.Ob(1,"img",1),b.Wb("click",function(){return t.isShowEngineSelector=!t.isShowEngineSelector}),b.Nb(),b.lc(2,L,1,2,"ion-icon",2),b.lc(3,R,1,2,"ion-icon",3),b.Ob(4,"div",4),b.Ob(5,"input",5,6),b.Wb("ngModelChange",function(e){return t.keyword=e})("keyup",function(e){return t.keyup(e)}),b.Nb(),b.Nb(),b.lc(7,_,1,0,"ion-icon",7),b.Ob(8,"ion-icon",8),b.Wb("click",function(){return t.search(t.keyword)}),b.Nb(),b.Nb(),b.lc(9,Z,19,6,"div",9),b.lc(10,U,1,1,"img",10),b.Kb(11,"ion-icon",11),b.Kb(12,"ion-icon",12),b.Kb(13,"ion-icon",13),b.Kb(14,"ion-icon",14),b.Ob(15,"div",15),b.lc(16,X,12,5,"div",16),b.lc(17,Y,24,6,"div",17),b.lc(18,Q,36,6,"div",18),b.lc(19,ie,2,5,"div",19),b.Ob(20,"div",20),b.Ob(21,"span"),b.mc(22),b.Nb(),b.Kb(23,"div",21),b.Ob(24,"span",22),b.mc(25,"\uad11\uace0\uc13c\ud130"),b.Nb(),b.Kb(26,"div",21),b.mc(27),b.Nb(),b.Nb()),2&e&&(b.kc("border-bottom","solid 1px "+t.searchEngineService.getMeta().color),b.zb(1),b.Ab("src",t.searchEngineService.getMeta().image,b.ic),b.zb(1),b.dc("ngIf",!t.isShowEngineSelector),b.zb(1),b.dc("ngIf",t.isShowEngineSelector),b.zb(2),b.dc("ngModel",t.keyword),b.zb(2),b.dc("ngIf",t.keyword&&t.keyword.length>0),b.zb(1),b.kc("color",t.searchEngineService.getMeta().color),b.zb(1),b.dc("ngIf",t.isShowEngineSelector),b.zb(1),b.dc("ngForOf",t.searchEngineService.metas),b.zb(6),b.dc("ngIf",t.searchKeywordService.keywords.length>0),b.zb(1),b.dc("ngIf",t.locationService.location.isInit&&t.weatherService.weather.isInit),b.zb(1),b.dc("ngIf",t.coronaService.cityToCorona[t.coronaService.sumCity]),b.zb(1),b.dc("ngIf",t.adService.ad),b.zb(3),b.nc(t.globalService.engName),b.zb(5),b.oc(" \u24d2 ",t.globalService.corpEngName," "))},directives:[n.j,o.b,o.f,o.g,c.a,n.i,n.h,M],encapsulation:2}),e})()}];let ne=(()=>{class e{}return e.\u0275mod=b.Hb({type:e}),e.\u0275inj=b.Gb({factory:function(t){return new(t||e)},imports:[[s.j.forChild(re)],s.j]}),e})(),oe=(()=>{class e{}return e.\u0275mod=b.Hb({type:e}),e.\u0275inj=b.Gb({factory:function(t){return new(t||e)},imports:[[r.a,n.b,o.c,c.b,ne,A]]}),e})()}}]);