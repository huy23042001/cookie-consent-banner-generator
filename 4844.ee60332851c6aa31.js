"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[4844],{9228:(R,T,s)=>{s.d(T,{W:()=>y});var n=s(9391),e=s(5e3),h=s(3075),b=s(1125),r=s(7322),M=s(7531),C=s(9808),w=s(7423),O=s(5245);function D(a,m){if(1&a){const d=e.EpF();e.TgZ(0,"button",5),e.NdJ("click",function(){return e.CHM(d),e.oxw().add()}),e._uU(1,"Add Cookie"),e.qZA()}}function B(a,m){if(1&a){const d=e.EpF();e.TgZ(0,"mat-icon",12),e.NdJ("click",function(){e.CHM(d);const f=e.oxw().index;return e.oxw().delete(f)}),e.qZA()}2&a&&e.Q6J("svgIcon","heroicons_solid:trash")}function A(a,m){if(1&a&&(e.ynx(0),e.TgZ(1,"div",6)(2,"div",7)(3,"mat-form-field",8)(4,"mat-label"),e._uU(5,"Cookie Name"),e.qZA(),e._UZ(6,"input",9),e.qZA()(),e.TgZ(7,"div",7)(8,"mat-form-field",8)(9,"mat-label"),e._uU(10,"Cookie Value"),e.qZA(),e._UZ(11,"input",10),e.qZA()(),e.YNc(12,B,1,1,"mat-icon",11),e.qZA(),e.BQk()),2&a){const d=m.$implicit,c=e.oxw();e.xp6(1),e.Q6J("formGroup",d),e.xp6(5),e.Q6J("readonly",c.readonly),e.xp6(5),e.Q6J("readonly",c.readonly),e.xp6(1),e.Q6J("ngIf",!c.readonly)}}let E=(()=>{class a extends n.H{constructor(d){super(d),this.readonly=!1}ngOnInit(){}add(){const d=this.fb.group({name:[""],value:[""]});this.formArray.push(d)}delete(d){this.formArray.removeAt(d)}}return a.\u0275fac=function(d){return new(d||a)(e.Y36(e.zs3))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-category"]],inputs:{formArray:"formArray",readonly:"readonly",categoryName:"categoryName"},features:[e.qOj],decls:6,vars:3,consts:[[1,"py-4"],[1,"flex","justify-between","w-full","mb-2"],[1,"text-lg","font-bold"],["mat-stroked-button","","color","primary",3,"click",4,"ngIf"],[4,"ngFor","ngForOf"],["mat-stroked-button","","color","primary",3,"click"],[1,"flex","w-full","gap-2","items-center","mb-2",3,"formGroup"],[1,"w-full"],["appearance","fill",1,"w-full"],["matInput","","formControlName","name","placeholder","Cookie Name",1,"w-full",3,"readonly"],["matInput","","formControlName","value","placeholder","Cookie value",1,"w-full",3,"readonly"],["class","icon-size-5 cursor-pointer",3,"svgIcon","click",4,"ngIf"],[1,"icon-size-5","cursor-pointer",3,"svgIcon","click"]],template:function(d,c){1&d&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3),e.qZA(),e.YNc(4,D,2,0,"button",3),e.qZA(),e.YNc(5,A,13,4,"ng-container",4),e.qZA()),2&d&&(e.xp6(3),e.Oqu(c.categoryName),e.xp6(1),e.Q6J("ngIf",!c.readonly),e.xp6(1),e.Q6J("ngForOf",c.formArray.controls))},directives:[C.O5,w.lW,C.sg,h.JL,h.sg,r.KE,r.hX,M.Nt,h.Fj,h.JJ,h.u,O.Hw],styles:[""]}),a})();const N=["necessaryComponent"],I=["preferencesComponent"],P=["statisticsComponent"],p=["marketingComponent"];let y=(()=>{class a extends n.H{constructor(d){super(d),this.readonly=!1,this.formGroup=this.fb.group({webConfig:[""],cookieBannerTitle:["Cookies Policy"],cookieBannerContent:["B\u1eb1ng c\xe1ch nh\u1ea5p v\xe0o \u201cAccept all cookies\u201d, b\u1ea1n ch\u1ea5p nh\u1eadn ch\xfang t\xf4i l\u01b0u tr\u1eef cookie tr\xean thi\u1ebft b\u1ecb c\u1ee7a m\xecnh v\xe0 s\u1eed d\u1ee5ng cookie \u0111\u1ec3 c\xe1 nh\xe2n h\xf3a n\u1ed9i dung v\xe0 qu\u1ea3ng c\xe1o, \u0111\u1ec3 cung c\u1ea5p c\xe1c t\xednh n\u0103ng truy\u1ec1n th\xf4ng x\xe3 h\u1ed9i v\xe0 ph\xe2n t\xedch l\u01b0u l\u01b0\u1ee3ng truy c\u1eadp c\u1ee7a ch\xfang t\xf4i. Ch\xfang t\xf4i c\u0169ng chia s\u1ebb th\xf4ng tin v\u1ec1 vi\u1ec7c b\u1ea1n s\u1eed d\u1ee5ng trang web c\u1ee7a ch\xfang t\xf4i v\u1edbi c\xe1c \u0111\u1ed1i t\xe1c truy\u1ec1n th\xf4ng x\xe3 h\u1ed9i, qu\u1ea3ng c\xe1o v\xe0 ph\xe2n t\xedch, nh\u1eefng ng\u01b0\u1eddi c\xf3 th\u1ec3 k\u1ebft h\u1ee3p n\xf3 v\u1edbi th\xf4ng tin kh\xe1c m\xe0 b\u1ea1n \u0111\xe3 cung c\u1ea5p cho h\u1ecd ho\u1eb7c h\u1ecd \u0111\xe3 thu th\u1eadp \u0111\u01b0\u1ee3c t\u1eeb vi\u1ec7c b\u1ea1n s\u1eed d\u1ee5ng d\u1ecbch v\u1ee5 c\u1ee7a h\u1ecd."],adsBannerTitle:["Ti\xeau \u0111\u1ec1 Banner"],adsBannerContent:["N\u1ed9i dung Banner"],adsBannerLink:["http://www.google.com"],necessary:this.fb.array([]),preferences:this.fb.array([]),statistics:this.fb.array([]),marketing:this.fb.array([])})}ngOnInit(){}fillValue(d){d.necessary.length&&d.necessary.forEach(c=>{this.necessaryComponent.add()}),d.preferences.length&&d.preferences.forEach(c=>{this.preferencesComponent.add()}),d.marketing.length&&d.marketing.forEach(c=>{this.marketingComponent.add()}),d.statistics.length&&d.statistics.forEach(c=>{this.statisticsComponent.add()}),this.formGroup.patchValue(d)}}return a.\u0275fac=function(d){return new(d||a)(e.Y36(e.zs3))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-add-or-edit"]],viewQuery:function(d,c){if(1&d&&(e.Gf(N,5),e.Gf(I,5),e.Gf(P,5),e.Gf(p,5)),2&d){let f;e.iGM(f=e.CRH())&&(c.necessaryComponent=f.first),e.iGM(f=e.CRH())&&(c.preferencesComponent=f.first),e.iGM(f=e.CRH())&&(c.statisticsComponent=f.first),e.iGM(f=e.CRH())&&(c.marketingComponent=f.first)}},inputs:{readonly:"readonly"},features:[e.qOj],decls:56,vars:22,consts:[[1,"mb-4",3,"formGroup"],[3,"expanded"],[1,"flex","w-full","gap-2"],[1,"w-full"],[1,"w-full","mb-2"],["appearance","fill",1,"w-full"],["matInput","","formControlName","webConfig","placeholder","Web Client Link",1,"w-full",3,"readonly"],[1,"mb-4"],[1,"font-bold","text-lg","text-center","mb-4"],["matInput","","formControlName","cookieBannerTitle","placeholder","Cookie Title",1,"w-full",3,"readonly"],["matInput","","rows","6","formControlName","cookieBannerContent","placeholder","Cookie Content",1,"w-full",3,"readonly"],["matInput","","formControlName","adsBannerTitle","placeholder","Ads Title",1,"w-full",3,"readonly"],["matInput","","rows","6","formControlName","adsBannerContent","placeholder","Ads Content",1,"w-full",3,"readonly"],["matInput","","formControlName","adsBannerLink","placeholder","Ads Link",1,"w-full",3,"readonly"],[3,"categoryName","readonly","formArray"],["necessaryComponent",""],["preferencesComponent",""],["statisticsComponent",""],["marketingComponent",""]],template:function(d,c){1&d&&(e.TgZ(0,"div",0)(1,"mat-accordion")(2,"mat-expansion-panel",1)(3,"mat-expansion-panel-header")(4,"mat-panel-title")(5,"strong"),e._uU(6,"WEB CLIENT CONFIG"),e.qZA()()(),e.TgZ(7,"div",2)(8,"div",3)(9,"div",4)(10,"mat-form-field",5),e._UZ(11,"input",6),e.qZA()()()()()(),e._UZ(12,"div",7),e.TgZ(13,"mat-accordion")(14,"mat-expansion-panel",1)(15,"mat-expansion-panel-header")(16,"mat-panel-title")(17,"strong"),e._uU(18,"LAYOUT CONFIG"),e.qZA()()(),e.TgZ(19,"div",2)(20,"div",3)(21,"div",8),e._uU(22,"Cookie Banner"),e.qZA(),e.TgZ(23,"div",4)(24,"mat-form-field",5),e._UZ(25,"input",9),e.qZA()(),e.TgZ(26,"div",4)(27,"mat-form-field",5),e._UZ(28,"textarea",10),e.qZA()()(),e.TgZ(29,"div",3)(30,"div",8),e._uU(31,"Ads Banner"),e.qZA(),e.TgZ(32,"div",4)(33,"mat-form-field",5),e._UZ(34,"input",11),e.qZA()(),e.TgZ(35,"div",4)(36,"mat-form-field",5),e._UZ(37,"textarea",12),e.qZA()(),e.TgZ(38,"div",4)(39,"mat-form-field",5),e._UZ(40,"input",13),e.qZA()()()()()(),e._UZ(41,"div",7),e.TgZ(42,"mat-accordion")(43,"mat-expansion-panel",1)(44,"mat-expansion-panel-header")(45,"mat-panel-title")(46,"strong"),e._uU(47,"COOKIE CONFIG"),e.qZA()()(),e._UZ(48,"app-category",14,15)(50,"app-category",14,16)(52,"app-category",14,17)(54,"app-category",14,18),e.qZA()()()),2&d&&(e.Q6J("formGroup",c.formGroup),e.xp6(2),e.Q6J("expanded",!0),e.xp6(9),e.Q6J("readonly",c.readonly),e.xp6(3),e.Q6J("expanded",!0),e.xp6(11),e.Q6J("readonly",c.readonly),e.xp6(3),e.Q6J("readonly",c.readonly),e.xp6(6),e.Q6J("readonly",c.readonly),e.xp6(3),e.Q6J("readonly",c.readonly),e.xp6(3),e.Q6J("readonly",c.readonly),e.xp6(3),e.Q6J("expanded",!0),e.xp6(5),e.Q6J("categoryName","Necessary Cookies")("readonly",c.readonly)("formArray",c.formGroup.get("necessary")),e.xp6(2),e.Q6J("categoryName","Preferences Cookies")("readonly",c.readonly)("formArray",c.formGroup.get("preferences")),e.xp6(2),e.Q6J("categoryName","Statistics Cookies")("readonly",c.readonly)("formArray",c.formGroup.get("statistics")),e.xp6(2),e.Q6J("categoryName","Marketing Cookies")("readonly",c.readonly)("formArray",c.formGroup.get("marketing")))},directives:[h.JL,h.sg,b.pp,b.ib,b.yz,b.yK,r.KE,M.Nt,h.Fj,h.JJ,h.u,E],styles:[""]}),a})()},4844:(R,T,s)=>{s.r(T),s.d(T,{DashboardsModule:()=>P});var n=s(9808),e=s(4521),h=s(9391),b=s(2340),r=s(5e3),M=s(529),C=s(9228),w=s(7423);function O(p,y){if(1&p&&(r.TgZ(0,"div",5)(1,"div",6),r._uU(2,"Javascript:"),r.qZA(),r.TgZ(3,"div",7)(4,"code"),r._uU(5),r.qZA()()()),2&p){const a=r.oxw();r.xp6(5),r.Oqu(a.script)}}const B=[{path:"",component:(()=>{class p extends h.H{constructor(a,m){super(a),this.accountService=m,this.generated=!1,this.defaultScript='!function(){let e=".cookie-consent-banner{position:fixed;bottom:20px;left:20px;z-index:2147483645;box-sizing:border-box;width:600px;padding:12px;background-color:#f1f6f4}.cookie-consent-banner__copy{margin-bottom:16px}.cookie-consent-banner__header{margin-bottom:8px;font-family:CeraPRO-Bold,sans-serif,arial;font-weight:400;font-size:16px;line-height:24px}.cookie-consent-banner__cta,.cookie-consent-banner__description{font-family:CeraPRO-Regular,sans-serif,arial;font-weight:400;font-size:16px}.cookie-consent-banner__description{color:#838f93;line-height:24px}.cookie-consent-banner__cta{box-sizing:border-box;cursor:pointer;display:inline-block;min-width:164px;padding:11px 13px;border-radius:2px;background-color:#2ce080;color:#fff;text-decoration:none;text-align:center;line-height:20px;margin-left:6px}.cookie-consent-banner__cta--secondary{padding:9px 13px;border:2px solid #3a4649;background-color:transparent;color:#2ce080}.cookie-consent-banner__cta:hover{background-color:#20ba68}.cookie-consent-banner__cta--secondary:hover{border-color:#838f93;background-color:transparent;color:#22c870}.consent-detail-modal{display:none;position:fixed;z-index:1001;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,.4)}.consent-detail-modal-content{background-color:#fefefe;margin:15% auto;padding:20px;border:1px solid #888;width:80%;max-width:400px;border-radius:10px;text-align:center}.consent-detail-modal-content .settings{display:flex;flex-direction:column;padding:12px 20px;margin-bottom:20px}.consent-detail-modal-content .setting-item{display:flex;justify-content:space-between}.consent-detail-modal .close{color:#aaa;float:right;font-size:28px;font-weight:700}.consent-detail-modal .close:focus,.consent-detail-modal .close:hover{color:#000;text-decoration:none;cursor:pointer}",n=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");n.appendChild(t),t.type="text/css",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e));let o={},i=e=>{let n=document.createElement("div");n.innerHTML=e;let t=n.firstElementChild;return document.body.appendChild(t),t},c=(e,n,t)=>{var o="";if(t){var i=new Date;i.setTime(i.getTime()+864e5*t),o="; expires="+i.toUTCString()}document.cookie=e+"="+(n||"")+o+"; path=/"},a=`<div class="cookie-consent-banner">\n          <div class="cookie-consent-banner__inner">\n            <div class="cookie-consent-banner__copy">\n              <h2 class="cookie-consent-banner__header">COOKIE_BANNER_TITLE</h2>\n              <div class="cookie-consent-banner__description">COOKIE_BANNER_CONTENT</div>\n            </div>\n\n            <div class="cookie-consent-banner__actions">\n              <div class="cookie-consent-banner__cta" id="accept-btn">\n                Accept all cookies\n              </div>\n                <div class="cookie-consent-banner__cta" id="customize-btn">\n                Customize Settings\n              </div>\n              <div id="decline-btn" class="cookie-consent-banner__cta cookie-consent-banner__cta--secondary">\n                Decline\n              </div>\n            </div>\n          </div>\n        </div>`,s=`<div id="cookie-settings-modal" class="consent-detail-modal">\n        <div class="consent-detail-modal-content">\n            <span id="close-modal" class="close">&times;</span>\n            <h2 style="margin: 5px 0">Customize Settings</h2>\n            <div class="settings">\n                <div class="setting-item">\n                    <span>Necessary Cookies</span>\n                    <input type="checkbox" name="cookie-setting" value="necessary" checked disabled>\n                </div>\n                <div class="setting-item">\n                                    <span>Preferences Cookies</span>\n                    <input type="checkbox" name="cookie-setting" value="preferences" checked>\n                </div>\n                <div class="setting-item">\n                                    <span>Statistics Cookies</span>\n                    <input type="checkbox" name="cookie-setting" value="statistics" checked>\n                </div>\n                <div class="setting-item">\n                                    <span>Marketing Cookies</span>\n                    <input type="checkbox" name="cookie-setting" value="marketing" checked>\n                </div>\n            </div>\n            <div class="cookie-consent-banner__actions">\n               <div class="cookie-consent-banner__cta" id="accept-customize">\n                Accept\n              </div>\n              <div class="cookie-consent-banner__cta" id="accept-all">\n                Accept all cookies\n              </a>\n            </div>\n        </div>\n    </div>`,d=`<div id="ads-modal" class="consent-detail-modal">\n        <div class="consent-detail-modal-content">\n            <span id="close-ads-modal" class="close">&times;</span>\n            <h2 style="margin: 5px 0">ADS_BANNER_TITLE</h2>\n            <div class="settings">\n                ADS_BANNER_CONTENT\n            </div>\n            <div class="cookie-consent-banner__actions">\n               <div class="cookie-consent-banner__cta" id="ads-accept">\n                Accept\n              </div>\n            </div>\n        </div>\n    </div>`;if(function e(n){let t=`; ${document.cookie}`,o=t.split(`; ${n}=`);if(2===o.length)return o.pop().split(";").shift()}("consent")){let l=i(d);l.style.display="block",document.getElementById("ads-accept").addEventListener("click",function(){l.style.display="none",l.remove(),window.open("ADS_BANNER_LINK","_blank")}),document.getElementById("close-ads-modal").addEventListener("click",function(){l.style.display="none",l.remove()});return} let ip = "";$.getJSON("https://ipinfo.io",function (response) {return ip=response.ip;}, "jsonp");let r=i(a),p=i(s),m=e=>{let n=new Headers;n.append("Content-Type","application/json");let t={statusConsent:e,domainWeb:window.location.host,config:JSON.stringify(o),ip_client: ip};fetch("API_URL/consent",{method:"POST",body:JSON.stringify(t),headers:n}).then(e=>e.json()).then(e=>console.log(e))},v=()=>{Object.keys(o).forEach(e=>{o[e]?.data?.forEach(e=>{c(e.name,e.value)})}),c("consent","true"),new Headers,m(0)},k=()=>{Object.keys(o).forEach(e=>{o[e]?.disabled||o[e]?.data?.forEach(e=>{c(e.name,e.value)})}),c("consent","true");let e=Object.keys(o).every(e=>!o[e].disabled);m(e?0:1)};document.getElementById("accept-btn").addEventListener("click",function(){v(),r.remove()}),document.getElementById("decline-btn").addEventListener("click",function(){m(2),r.remove()}),document.getElementById("customize-btn").addEventListener("click",function(){r.style.display="none",p.style.display="block"}),document.getElementById("close-modal").addEventListener("click",function(){p.style.display="none",r.style.display="block"}),document.getElementById("accept-customize").addEventListener("click",function(){Array.from(p.querySelectorAll("[name=\'cookie-setting\']")).forEach(e=>{o[e.value]&&(o[e.value].disabled=!e.checked)}),console.log(o),k(),r.remove(),p.remove()}),document.getElementById("accept-all").addEventListener("click",function(){v(),r.remove(),p.remove()})}();',this.script=this.defaultScript}ngOnInit(){}generateScript(a){const m={necessary:{disabled:!1,data:a.necessary},preferences:{disabled:!1,data:a.preferences},statistics:{disabled:!1,data:a.statistics},marketing:{disabled:!1,data:a.marketing}};console.log(m),this.script=this.defaultScript,this.script=this.script.replace("let o={}","let o="+JSON.stringify(m)),this.script=this.script.replace("COOKIE_BANNER_TITLE",a.cookieBannerTitle),this.script=this.script.replace("COOKIE_BANNER_CONTENT",a.cookieBannerContent),this.script=this.script.replace("ADS_BANNER_TITLE",a.adsBannerTitle),this.script=this.script.replace("ADS_BANNER_CONTENT",a.adsBannerContent),this.script=this.script.replace("ADS_BANNER_LINK",a.adsBannerLink),this.script=this.script.replace("API_URL",b.N.apiUrl),this.generated=!0;const d={cookieBannerTitle:a.cookieBannerTitle,cookieBannerContent:a.cookieBannerContent,adsBannerTitle:a.adsBannerTitle,adsBannerContent:a.adsBannerContent,adsLink:a.adsBannerLink,cookie:JSON.stringify(m),script:this.script,webConfig:a.webConfig};this.accountService.createScript(d).subscribe(c=>{console.log(c)})}}return p.\u0275fac=function(a){return new(a||p)(r.Y36(r.zs3),r.Y36(M.B))},p.\u0275cmp=r.Xpm({type:p,selectors:[["app-dashboards"]],features:[r.qOj],decls:8,vars:1,consts:[[1,"p-6","bg-card","w-full","h-full"],[1,"text-3xl","font-bold","mb-4"],["addOrEditComponent",""],["mat-raised-button","","color","primary",3,"click"],["class","mt-4",4,"ngIf"],[1,"mt-4"],[1,"mb-2","font-bold"],[1,"p-2","border","rounded"]],template:function(a,m){if(1&a){const d=r.EpF();r.TgZ(0,"div",0)(1,"div",1),r._uU(2,"COOKIE CONSENT BANNER GENERATOR"),r.qZA(),r._UZ(3,"app-add-or-edit",null,2),r.TgZ(5,"button",3),r.NdJ("click",function(){r.CHM(d);const f=r.MAs(4);return m.generateScript(f.formGroup.value)}),r._uU(6,"Generate Script"),r.qZA(),r.YNc(7,O,6,1,"div",4),r.qZA()}2&a&&(r.xp6(7),r.Q6J("ngIf",m.generated))},directives:[C.W,w.lW,n.O5],styles:[""]}),p})()}];let A=(()=>{class p{}return p.\u0275fac=function(a){return new(a||p)},p.\u0275mod=r.oAB({type:p}),p.\u0275inj=r.cJS({imports:[[e.Bz.forChild(B)],e.Bz]}),p})();var E=s(4466),N=s(8704),I=s(1125);let P=(()=>{class p{}return p.\u0275fac=function(a){return new(a||p)},p.\u0275mod=r.oAB({type:p}),p.\u0275inj=r.cJS({imports:[[n.ez,E.m,A,w.ot,N.nm,I.To]]}),p})()},1125:(R,T,s)=>{s.d(T,{pp:()=>te,To:()=>oe,ib:()=>L,yz:()=>Q,yK:()=>ne});var n=s(5e3),e=s(3191),h=s(7579),b=s(727),r=s(449);let M=0;const C=new n.OlP("CdkAccordion");let w=(()=>{class o{constructor(){this._stateChanges=new h.x,this._openCloseAllActions=new h.x,this.id="cdk-accordion-"+M++,this._multi=!1}get multi(){return this._multi}set multi(t){this._multi=(0,e.Ig)(t)}openAll(){this._multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(t){this._stateChanges.next(t)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275dir=n.lG2({type:o,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:"multi"},exportAs:["cdkAccordion"],features:[n._Bn([{provide:C,useExisting:o}]),n.TTD]}),o})(),O=0,D=(()=>{class o{constructor(t,i,g){this.accordion=t,this._changeDetectorRef=i,this._expansionDispatcher=g,this._openCloseAllSubscription=b.w0.EMPTY,this.closed=new n.vpe,this.opened=new n.vpe,this.destroyed=new n.vpe,this.expandedChange=new n.vpe,this.id="cdk-accordion-child-"+O++,this._expanded=!1,this._disabled=!1,this._removeUniqueSelectionListener=()=>{},this._removeUniqueSelectionListener=g.listen((x,k)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===k&&this.id!==x&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}get expanded(){return this._expanded}set expanded(t){t=(0,e.Ig)(t),this._expanded!==t&&(this._expanded=t,this.expandedChange.emit(t),t?(this.opened.emit(),this._expansionDispatcher.notify(this.id,this.accordion?this.accordion.id:this.id)):this.closed.emit(),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled}set disabled(t){this._disabled=(0,e.Ig)(t)}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(t=>{this.disabled||(this.expanded=t)})}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(C,12),n.Y36(n.sBO),n.Y36(r.A8))},o.\u0275dir=n.lG2({type:o,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:"expanded",disabled:"disabled"},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[n._Bn([{provide:C,useValue:void 0}])]}),o})(),B=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({}),o})();var A=s(7429),E=s(9808),N=s(508),I=s(5664),P=s(1884),p=s(8675),y=s(9300),a=s(5698),m=s(1159),d=s(6360),c=s(515),f=s(6451),u=s(1777);const z=["body"];function Y(o,l){}const j=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],G=["mat-expansion-panel-header","*","mat-action-row"];function K(o,l){if(1&o&&n._UZ(0,"span",2),2&o){const t=n.oxw();n.Q6J("@indicatorRotate",t._getExpandedState())}}const $=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],X=["mat-panel-title","mat-panel-description","*"],H=new n.OlP("MAT_ACCORDION"),J="225ms cubic-bezier(0.4,0.0,0.2,1)",F={indicatorRotate:(0,u.X$)("indicatorRotate",[(0,u.SB)("collapsed, void",(0,u.oB)({transform:"rotate(0deg)"})),(0,u.SB)("expanded",(0,u.oB)({transform:"rotate(180deg)"})),(0,u.eR)("expanded <=> collapsed, void => collapsed",(0,u.jt)(J))]),bodyExpansion:(0,u.X$)("bodyExpansion",[(0,u.SB)("collapsed, void",(0,u.oB)({height:"0px",visibility:"hidden"})),(0,u.SB)("expanded",(0,u.oB)({height:"*",visibility:"visible"})),(0,u.eR)("expanded <=> collapsed, void => collapsed",(0,u.jt)(J))])};let W=(()=>{class o{constructor(t){this._template=t}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(n.Rgc))},o.\u0275dir=n.lG2({type:o,selectors:[["ng-template","matExpansionPanelContent",""]]}),o})(),q=0;const U=new n.OlP("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS");let L=(()=>{class o extends D{constructor(t,i,g,x,k,Z,S){super(t,i,g),this._viewContainerRef=x,this._animationMode=Z,this._hideToggle=!1,this.afterExpand=new n.vpe,this.afterCollapse=new n.vpe,this._inputChanges=new h.x,this._headerId="mat-expansion-panel-header-"+q++,this._bodyAnimationDone=new h.x,this.accordion=t,this._document=k,this._bodyAnimationDone.pipe((0,P.x)((_,v)=>_.fromState===v.fromState&&_.toState===v.toState)).subscribe(_=>{"void"!==_.fromState&&("expanded"===_.toState?this.afterExpand.emit():"collapsed"===_.toState&&this.afterCollapse.emit())}),S&&(this.hideToggle=S.hideToggle)}get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(t){this._hideToggle=(0,e.Ig)(t)}get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(t){this._togglePosition=t}_hasSpacing(){return!!this.accordion&&this.expanded&&"default"===this.accordion.displayMode}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this.opened.pipe((0,p.O)(null),(0,y.h)(()=>this.expanded&&!this._portal),(0,a.q)(1)).subscribe(()=>{this._portal=new A.UE(this._lazyContent._template,this._viewContainerRef)})}ngOnChanges(t){this._inputChanges.next(t)}ngOnDestroy(){super.ngOnDestroy(),this._bodyAnimationDone.complete(),this._inputChanges.complete()}_containsFocus(){if(this._body){const t=this._document.activeElement,i=this._body.nativeElement;return t===i||i.contains(t)}return!1}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(H,12),n.Y36(n.sBO),n.Y36(r.A8),n.Y36(n.s_b),n.Y36(E.K0),n.Y36(d.Qb,8),n.Y36(U,8))},o.\u0275cmp=n.Xpm({type:o,selectors:[["mat-expansion-panel"]],contentQueries:function(t,i,g){if(1&t&&n.Suo(g,W,5),2&t){let x;n.iGM(x=n.CRH())&&(i._lazyContent=x.first)}},viewQuery:function(t,i){if(1&t&&n.Gf(z,5),2&t){let g;n.iGM(g=n.CRH())&&(i._body=g.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:6,hostBindings:function(t,i){2&t&&n.ekj("mat-expanded",i.expanded)("_mat-animation-noopable","NoopAnimations"===i._animationMode)("mat-expansion-panel-spacing",i._hasSpacing())},inputs:{disabled:"disabled",expanded:"expanded",hideToggle:"hideToggle",togglePosition:"togglePosition"},outputs:{opened:"opened",closed:"closed",expandedChange:"expandedChange",afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[n._Bn([{provide:H,useValue:void 0}]),n.qOj,n.TTD],ngContentSelectors:G,decls:7,vars:4,consts:[["role","region",1,"mat-expansion-panel-content",3,"id"],["body",""],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(t,i){1&t&&(n.F$t(j),n.Hsn(0),n.TgZ(1,"div",0,1),n.NdJ("@bodyExpansion.done",function(x){return i._bodyAnimationDone.next(x)}),n.TgZ(3,"div",2),n.Hsn(4,1),n.YNc(5,Y,0,0,"ng-template",3),n.qZA(),n.Hsn(6,2),n.qZA()),2&t&&(n.xp6(1),n.Q6J("@bodyExpansion",i._getExpandedState())("id",i.id),n.uIk("aria-labelledby",i._headerId),n.xp6(4),n.Q6J("cdkPortalOutlet",i._portal))},directives:[A.Pl],styles:[".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button-base,.mat-action-row button.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button-base,[dir=rtl] .mat-action-row button.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],encapsulation:2,data:{animation:[F.bodyExpansion]},changeDetection:0}),o})();class V{}const ee=(0,N.sb)(V);let Q=(()=>{class o extends ee{constructor(t,i,g,x,k,Z,S){super(),this.panel=t,this._element=i,this._focusMonitor=g,this._changeDetectorRef=x,this._animationMode=Z,this._parentChangeSubscription=b.w0.EMPTY;const _=t.accordion?t.accordion._stateChanges.pipe((0,y.h)(v=>!(!v.hideToggle&&!v.togglePosition))):c.E;this.tabIndex=parseInt(S||"")||0,this._parentChangeSubscription=(0,f.T)(t.opened,t.closed,_,t._inputChanges.pipe((0,y.h)(v=>!!(v.hideToggle||v.disabled||v.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),t.closed.pipe((0,y.h)(()=>t._containsFocus())).subscribe(()=>g.focusVia(i,"program")),k&&(this.expandedHeight=k.expandedHeight,this.collapsedHeight=k.collapsedHeight)}get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){const t=this._isExpanded();return t&&this.expandedHeight?this.expandedHeight:!t&&this.collapsedHeight?this.collapsedHeight:null}_keydown(t){switch(t.keyCode){case m.L_:case m.K5:(0,m.Vb)(t)||(t.preventDefault(),this._toggle());break;default:return void(this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(t))}}focus(t,i){t?this._focusMonitor.focusVia(this._element,t,i):this._element.nativeElement.focus(i)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(t=>{t&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(L,1),n.Y36(n.SBq),n.Y36(I.tE),n.Y36(n.sBO),n.Y36(U,8),n.Y36(d.Qb,8),n.$8M("tabindex"))},o.\u0275cmp=n.Xpm({type:o,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:15,hostBindings:function(t,i){1&t&&n.NdJ("click",function(){return i._toggle()})("keydown",function(x){return i._keydown(x)}),2&t&&(n.uIk("id",i.panel._headerId)("tabindex",i.tabIndex)("aria-controls",i._getPanelId())("aria-expanded",i._isExpanded())("aria-disabled",i.panel.disabled),n.Udp("height",i._getHeaderHeight()),n.ekj("mat-expanded",i._isExpanded())("mat-expansion-toggle-indicator-after","after"===i._getTogglePosition())("mat-expansion-toggle-indicator-before","before"===i._getTogglePosition())("_mat-animation-noopable","NoopAnimations"===i._animationMode))},inputs:{tabIndex:"tabIndex",expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight"},features:[n.qOj],ngContentSelectors:X,decls:5,vars:1,consts:[[1,"mat-content"],["class","mat-expansion-indicator",4,"ngIf"],[1,"mat-expansion-indicator"]],template:function(t,i){1&t&&(n.F$t($),n.TgZ(0,"span",0),n.Hsn(1),n.Hsn(2,1),n.Hsn(3,2),n.qZA(),n.YNc(4,K,1,1,"span",1)),2&t&&(n.xp6(4),n.Q6J("ngIf",i._showToggle()))},directives:[E.O5],styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-keyboard-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel .mat-expansion-panel-header.cdk-program-focused:not([aria-disabled=true])::before,.cdk-high-contrast-active .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled=true])::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;border:3px solid;border-radius:4px;content:""}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}\n'],encapsulation:2,data:{animation:[F.indicatorRotate]},changeDetection:0}),o})(),ne=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275dir=n.lG2({type:o,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]}),o})(),te=(()=>{class o extends w{constructor(){super(...arguments),this._ownHeaders=new n.n_E,this._hideToggle=!1,this.displayMode="default",this.togglePosition="after"}get hideToggle(){return this._hideToggle}set hideToggle(t){this._hideToggle=(0,e.Ig)(t)}ngAfterContentInit(){this._headers.changes.pipe((0,p.O)(this._headers)).subscribe(t=>{this._ownHeaders.reset(t.filter(i=>i.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new I.Em(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(t){this._keyManager.onKeydown(t)}_handleHeaderFocus(t){this._keyManager.updateActiveItem(t)}ngOnDestroy(){super.ngOnDestroy(),this._ownHeaders.destroy()}}return o.\u0275fac=function(){let l;return function(i){return(l||(l=n.n5z(o)))(i||o)}}(),o.\u0275dir=n.lG2({type:o,selectors:[["mat-accordion"]],contentQueries:function(t,i,g){if(1&t&&n.Suo(g,Q,5),2&t){let x;n.iGM(x=n.CRH())&&(i._headers=x)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(t,i){2&t&&n.ekj("mat-accordion-multi",i.multi)},inputs:{multi:"multi",hideToggle:"hideToggle",displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[n._Bn([{provide:H,useExisting:o}]),n.qOj]}),o})(),oe=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[E.ez,N.BQ,B,A.eL]]}),o})()}}]);