import{d as e,u as a,b as t,e as s,f as l,o as i,c as o,g as r,h as n,t as c,_ as v,p as u,i as d,F as f,r as m,w as p,j as h,k}from"./app.8efcc44e.js";u("data-v-1d68b262");const x={key:0,class:"home-hero"},y={key:0,class:"figure"},g={key:1,id:"main-title",class:"title"},b={key:2,class:"description"};d();var $=e({expose:[],setup(e){const u=a(),d=t(),f=s((()=>d.value.heroImage||m.value||h.value||$.value)),m=s((()=>null!==d.value.heroText)),p=s((()=>d.value.heroText||u.value.title)),h=s((()=>null!==d.value.tagline)),k=s((()=>d.value.tagline||u.value.description)),$=s((()=>d.value.actionLink&&d.value.actionText)),_=s((()=>d.value.altActionLink&&d.value.altActionText));return(e,a)=>l(f)?(i(),o("header",x,[e.$frontmatter.heroImage?(i(),o("figure",y,[r("img",{class:"image",src:e.$withBase(e.$frontmatter.heroImage),alt:e.$frontmatter.heroAlt},null,8,["src","alt"])])):n("v-if",!0),l(m)?(i(),o("h1",g,c(l(p)),1)):n("v-if",!0),l(h)?(i(),o("p",b,c(l(k)),1)):n("v-if",!0),l($)?(i(),o(v,{key:3,item:{link:l(d).actionLink,text:l(d).actionText},class:"action"},null,8,["item"])):n("v-if",!0),l(_)?(i(),o(v,{key:4,item:{link:l(d).altActionLink,text:l(d).altActionText},class:"action alt"},null,8,["item"])):n("v-if",!0)])):n("v-if",!0)}});$.__scopeId="data-v-1d68b262",u("data-v-b6f3c2e6");const _={key:0,class:"home-features"},I={class:"wrapper"},T={class:"container"},A={class:"features"},L={key:0,class:"title"},w={key:1,class:"details"};d();var j=e({expose:[],setup(e){const a=t(),v=s((()=>a.value.features&&a.value.features.length>0)),u=s((()=>a.value.features?a.value.features:[]));return(e,a)=>l(v)?(i(),o("div",_,[r("div",I,[r("div",T,[r("div",A,[(i(!0),o(f,null,m(l(u),((e,a)=>(i(),o("section",{key:a,class:"feature"},[e.title?(i(),o("h2",L,c(e.title),1)):n("v-if",!0),e.details?(i(),o("p",w,c(e.details),1)):n("v-if",!0)])))),128))])])])])):n("v-if",!0)}});j.__scopeId="data-v-b6f3c2e6";const B={},C=p();u("data-v-93d3e3da");const F={key:0,class:"footer"},q={class:"container"},z={class:"text"};d();const D=C(((e,a)=>e.$frontmatter.footer?(i(),o("footer",F,[r("div",q,[r("p",z,c(e.$frontmatter.footer),1)])])):n("v-if",!0)));B.render=D,B.__scopeId="data-v-93d3e3da",u("data-v-6e1bdf43");const E={class:"home","aria-labelledby":"main-title"},G={class:"home-content"};d();var H=e({expose:[],setup:e=>(e,a)=>{const t=h("Content");return i(),o("main",E,[r($),k(e.$slots,"hero",{},void 0,!0),r(j),r("div",G,[r(t)]),k(e.$slots,"features",{},void 0,!0),r(B),k(e.$slots,"footer",{},void 0,!0)])}});H.__scopeId="data-v-6e1bdf43";export default H;
