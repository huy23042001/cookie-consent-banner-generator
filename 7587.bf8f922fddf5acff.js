"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[7587],{7587:(M,c,s)=>{s.r(c),s.d(c,{HistoryModule:()=>H});var d=s(9808),a=s(4521),m=s(9391),f=s(5439),p=s.n(f),t=s(5e3),v=s(529),y=s(8391);const C=[{path:"",component:(()=>{class e extends m.H{constructor(o,i){super(o),this.accountService=i,this.columns=[{columnDef:"domainWeb",header:"Domain Web"},{columnDef:"ipClient",header:"IP Client"},{columnDef:"statusConsent",header:"Consent Status",cellRenderer:n=>0==n.statusConsent?'<div class="flex"><div class="px-2 py-1 rounded bg-[#86f372ee]">Accept All</div></div>':1==n.statusConsent?'<div class="flex"><div class="px-2 py-1 rounded bg-[#86f372ee]">Accept Customize</div></div>':'<div class="flex"><div class="px-2 py-1 rounded bg-[#ff527aee]">Declined</div></div>'},{columnDef:"cookieConfig",header:"Cookie Config",cellRenderer:n=>{if(2!=n.statusConsent){let u="";try{const l=JSON.parse(n.config);u=Object.keys(l).filter(D=>!l[D].disabled).join(", ")}catch(l){console.log(l)}return u}return""}},{columnDef:"timestamp",header:"Time",cellRenderer:n=>n.timestamp?p()(n.timestamp).format("DD/MM/YYYY HH:mm:ss"):"<div></div>"}],this.rows=[]}ngOnInit(){this.accountService.getListConsent().subscribe(o=>{this.rows=o.reverse()})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(t.zs3),t.Y36(v.B))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-history"]],features:[t.qOj],decls:4,vars:3,consts:[[1,"p-6","bg-card","w-full"],[1,"text-3xl","font-bold"],[3,"paginate","columns","rows"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2,"CONSENT HISTORY"),t.qZA(),t._UZ(3,"app-data-table",2),t.qZA()),2&o&&(t.xp6(3),t.Q6J("paginate",!1)("columns",i.columns)("rows",i.rows))},directives:[y.Q],styles:[""]}),e})()}];let g=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[a.Bz.forChild(C)],a.Bz]}),e})();var h=s(9260);let H=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[d.ez,g,h.t]]}),e})()}}]);