"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[2917],{2917:(B,d,o)=>{o.r(d),o.d(d,{AuthSignInModule:()=>k});var u=o(4521),g=o(7423),f=o(7446),m=o(7322),p=o(5245),h=o(7531),I=o(773),v=o(6236),A=o(7775),x=o(4466),a=o(3075),Z=o(8288),t=o(5e3),y=o(1355),F=o(9808),C=o(2494);const S=["signInNgForm"];function E(n,r){if(1&n&&(t.TgZ(0,"fuse-alert",31),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.Q6J("appearance","outline")("showIcon",!1)("type",e.alert.type)("@shake","error"===e.alert.type),t.xp6(1),t.hij(" ",e.alert.message," ")}}function T(n,r){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," This Field is required "),t.qZA())}function w(n,r){1&n&&t._UZ(0,"mat-icon",32),2&n&&t.Q6J("svgIcon","heroicons_solid:eye")}function b(n,r){1&n&&t._UZ(0,"mat-icon",32),2&n&&t.Q6J("svgIcon","heroicons_solid:eye-off")}function U(n,r){1&n&&(t.TgZ(0,"span"),t._uU(1," Sign in "),t.qZA())}function J(n,r){1&n&&t._UZ(0,"mat-progress-spinner",33),2&n&&t.Q6J("diameter",24)("mode","indeterminate")}const N=function(){return["/forgot-password"]},Q=[{path:"",component:(()=>{class n{constructor(e,i,s,l){this._activatedRoute=e,this._authService=i,this._formBuilder=s,this._router=l,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.signInForm=this._formBuilder.group({username:["",[a.kI.required]],password:["",a.kI.required],rememberMe:[""]})}signIn(){if(this.signInForm.invalid)return;this.signInForm.disable(),this.showAlert=!1;const e=Object.assign(Object.assign({},this.signInForm.value),{password:this.b64EncodeUnicode(this.signInForm.value.password),tokenDevice:"test_1",deviceName:"device_test1",sso:!1,ticket:""});this._authService.signIn(e).subscribe(()=>{const i=this._activatedRoute.snapshot.queryParamMap.get("redirectURL")||"/signed-in-redirect";this._router.navigateByUrl(i)},i=>{this.signInForm.enable(),this.signInNgForm.resetForm(),this.alert={type:"error",message:"Wrong email or password"},this.showAlert=!0})}b64EncodeUnicode(e){return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,function(i,s){return String.fromCharCode(parseInt(s,16))}))}signInBySSO(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.gz),t.Y36(y.e),t.Y36(a.qu),t.Y36(u.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["auth-sign-in"]],viewQuery:function(e,i){if(1&e&&t.Gf(S,5),2&e){let s;t.iGM(s=t.CRH())&&(i.signInNgForm=s.first)}},decls:51,vars:15,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"relative","hidden","md:flex","flex-wrap","justify-center","w-2/3","h-full","p-16","lg:px-28","overflow-hidden","dark:border-l","sign-in-background"],[1,"w-full","flex","items-center","justify-center"],["src","../../../../assets/images/logo/logo1.svg",1,"w-60"],[1,"z-10","relative","w-full","max-w-2xl"],[1,"text-7xl","font-bold","text-center","leading-none","text-gray-100"],[1,"mt-6","text-lg","tracking-tight","text-center","leading-6","text-gray-300"],[1,"md:flex","md:items-center","w-full","md:justify-center","sm:w-auto","md:h-full","md:w-1/3","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],["class","mt-8 -mb-4",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["signInNgForm","ngForm"],[1,"w-full"],["id","email","matInput","",3,"formControlName"],[4,"ngIf"],["id","password","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],[1,"inline-flex","items-end","justify-between","w-full","mt-1.5"],[3,"color","formControlName"],[1,"text-md","font-medium","text-primary-500","hover:underline",3,"routerLink"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-6",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"flex","items-center","mt-8"],[1,"flex-auto","mt-px","border-t"],[1,"mx-2","text-secondary"],[1,"flex","items-center","mt-8","space-x-4"],["type","button","mat-stroked-button","",1,"flex-auto",3,"click"],["src","assets/icons/logo_SSO.png","alt",""],[1,"mt-8","-mb-4",3,"appearance","showIcon","type"],[1,"icon-size-5",3,"svgIcon"],[3,"diameter","mode"]],template:function(e,i){if(1&e){const s=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"div",4)(5,"div",5)(6,"div"),t._uU(7,"Viettel Data Platform"),t.qZA(),t.TgZ(8,"div"),t._uU(9,"Web Portal"),t.qZA()(),t.TgZ(10,"div",6),t._uU(11," H\u1ec7 th\u1ed1ng qu\u1ea3n l\xfd v\xe0 v\u1eadn h\xe0nh Datalake \u0111\u01b0\u1ee3c x\xe2y d\u1ef1ng b\u1edbi Ph\xf2ng Thi\u1ebft k\u1ebf ki\u1ebfn tr\xfac d\u1eef li\u1ec7u - Ban Qu\u1ea3n tr\u1ecb D\u1eef li\u1ec7u - T\u1eadp \u0111o\xe0n Viettel "),t.qZA()()(),t.TgZ(12,"div",7)(13,"div",8)(14,"div",9),t._uU(15,"\u0110\u0103ng nh\u1eadp"),t.qZA(),t.YNc(16,E,2,5,"fuse-alert",10),t.TgZ(17,"form",11,12)(19,"mat-form-field",13)(20,"mat-label"),t._uU(21,"T\xean \u0111\u0103ng nh\u1eadp"),t.qZA(),t._UZ(22,"input",14),t.YNc(23,T,2,0,"mat-error",15),t.qZA(),t.TgZ(24,"mat-form-field",13)(25,"mat-label"),t._uU(26,"M\u1eadt kh\u1ea9u"),t.qZA(),t._UZ(27,"input",16,17),t.TgZ(29,"button",18),t.NdJ("click",function(){t.CHM(s);const c=t.MAs(28);return c.type="password"===c.type?"text":"password"}),t.YNc(30,w,1,1,"mat-icon",19),t.YNc(31,b,1,1,"mat-icon",19),t.qZA(),t.TgZ(32,"mat-error"),t._uU(33," This Field is required "),t.qZA()(),t.TgZ(34,"div",20)(35,"mat-checkbox",21),t._uU(36," Remember me "),t.qZA(),t.TgZ(37,"a",22),t._uU(38,"Forgot password? "),t.qZA()(),t.TgZ(39,"button",23),t.NdJ("click",function(){return i.signIn()}),t.YNc(40,U,2,0,"span",15),t.YNc(41,J,1,2,"mat-progress-spinner",24),t.qZA(),t.TgZ(42,"div",25),t._UZ(43,"div",26),t.TgZ(44,"div",27),t._uU(45,"Or"),t.qZA(),t._UZ(46,"div",26),t.qZA(),t.TgZ(47,"div",28)(48,"button",29),t.NdJ("click",function(){return i.signInBySSO()}),t._UZ(49,"img",30),t._uU(50," Login With SSO Account "),t.qZA()()()()()()}if(2&e){const s=t.MAs(28);t.xp6(16),t.Q6J("ngIf",i.showAlert),t.xp6(1),t.Q6J("formGroup",i.signInForm),t.xp6(5),t.Q6J("formControlName","username"),t.xp6(1),t.Q6J("ngIf",i.signInForm.get("username").hasError("required")),t.xp6(4),t.Q6J("formControlName","password"),t.xp6(3),t.Q6J("ngIf","password"===s.type),t.xp6(1),t.Q6J("ngIf","text"===s.type),t.xp6(4),t.Q6J("color","primary")("formControlName","rememberMe"),t.xp6(2),t.Q6J("routerLink",t.DdM(14,N)),t.xp6(2),t.Q6J("color","primary")("disabled",i.signInForm.disabled),t.xp6(1),t.Q6J("ngIf",!i.signInForm.disabled),t.xp6(1),t.Q6J("ngIf",i.signInForm.disabled)}},directives:[F.O5,C.W,a._Y,a.JL,a.sg,m.KE,m.hX,h.Nt,a.Fj,a.JJ,a.u,m.TO,g.lW,m.R9,p.Hw,f.oG,u.yS,I.Ou],encapsulation:2,data:{animation:Z.L}}),n})()}];let k=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[u.Bz.forChild(Q),g.ot,f.p9,m.lN,p.Ps,h.c,I.Cq,v.J,A.fC,x.m]]}),n})()}}]);