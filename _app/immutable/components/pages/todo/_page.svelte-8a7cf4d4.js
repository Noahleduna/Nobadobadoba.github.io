import{S as ue,i as de,s as _e,k as v,q as U,a as I,l as g,m,r as B,h,c as L,n as p,p as P,b as Y,D as n,P as se,Q as J,B as ae,J as ne,T as fe,u as he}from"../../../chunks/index-89dc8d39.js";function oe(c,e,s){const o=c.slice();return o[7]=e[s],o}function ce(c,e,s){const o=c.slice();return o[7]=e[s],o[11]=s,o}function re(c){let e,s=c[7]+"",o,r,a,T,E,N,S;function b(){return c[5](c[11],c[7])}return{c(){e=v("li"),o=U(s),r=I(),a=v("button"),T=U("done"),E=I(),this.h()},l(i){e=g(i,"LI",{class:!0});var u=m(e);o=B(u,s),r=L(u),a=g(u,"BUTTON",{class:!0});var H=m(a);T=B(H,"done"),H.forEach(h),E=L(u),u.forEach(h),this.h()},h(){p(a,"class","svelte-4dg6l4"),p(e,"class","svelte-4dg6l4")},m(i,u){Y(i,e,u),n(e,o),n(e,r),n(e,a),n(a,T),n(e,E),N||(S=J(a,"click",b),N=!0)},p(i,u){c=i,u&2&&s!==(s=c[7]+"")&&he(o,s)},d(i){i&&h(e),N=!1,S()}}}function ie(c){let e,s=c[7]+"",o;return{c(){e=v("li"),o=U(s),this.h()},l(r){e=g(r,"LI",{style:!0,class:!0});var a=m(e);o=B(a,s),a.forEach(h),this.h()},h(){P(e,"margin","4px"),p(e,"class","svelte-4dg6l4")},m(r,a){Y(r,e,a),n(e,o)},p(r,a){a&4&&s!==(s=r[7]+"")&&he(o,s)},d(r){r&&h(e)}}}function ve(c){let e,s,o,r,a,T,E,N,S,b,i,u,H,Q,y,z,k,q,F,G,O,K,D,R,X,Z,w=c[1],d=[];for(let t=0;t<w.length;t+=1)d[t]=re(ce(c,w,t));let A=c[2],_=[];for(let t=0;t<A.length;t+=1)_[t]=ie(oe(c,A,t));return{c(){e=v("div"),s=v("h1"),o=U("TODO LIST"),r=I(),a=v("input"),T=I(),E=v("button"),N=U("Add to the list"),S=I(),b=v("div"),i=v("div"),u=v("h1"),H=U("NEW"),Q=I(),y=v("ol");for(let t=0;t<d.length;t+=1)d[t].c();z=I(),k=v("div"),q=v("h1"),F=U("COMPLETED"),G=I(),O=v("ul");for(let t=0;t<_.length;t+=1)_[t].c();K=I(),D=v("button"),R=U("Clear"),this.h()},l(t){e=g(t,"DIV",{class:!0});var f=m(e);s=g(f,"H1",{class:!0});var l=m(s);o=B(l,"TODO LIST"),l.forEach(h),r=L(f),a=g(f,"INPUT",{class:!0}),T=L(f),E=g(f,"BUTTON",{class:!0});var C=m(E);N=B(C,"Add to the list"),C.forEach(h),S=L(f),b=g(f,"DIV",{class:!0});var W=m(b);i=g(W,"DIV",{class:!0});var j=m(i);u=g(j,"H1",{class:!0});var x=m(u);H=B(x,"NEW"),x.forEach(h),Q=L(j),y=g(j,"OL",{style:!0,class:!0});var $=m(y);for(let V=0;V<d.length;V+=1)d[V].l($);$.forEach(h),j.forEach(h),z=L(W),k=g(W,"DIV",{style:!0,class:!0});var M=m(k);q=g(M,"H1",{class:!0});var ee=m(q);F=B(ee,"COMPLETED"),ee.forEach(h),G=L(M),O=g(M,"UL",{style:!0,class:!0});var le=m(O);for(let V=0;V<_.length;V+=1)_[V].l(le);le.forEach(h),K=L(M),D=g(M,"BUTTON",{style:!0,class:!0});var te=m(D);R=B(te,"Clear"),te.forEach(h),M.forEach(h),W.forEach(h),f.forEach(h),this.h()},h(){p(s,"class","svelte-4dg6l4"),p(a,"class","svelte-4dg6l4"),p(E,"class","svelte-4dg6l4"),p(u,"class","svelte-4dg6l4"),P(y,"height","300px"),P(y,"overflow-y","scroll"),p(y,"class","svelte-4dg6l4"),p(i,"class","svelte-4dg6l4"),p(q,"class","svelte-4dg6l4"),P(O,"height","300px"),P(O,"overflow-y","scroll"),p(O,"class","svelte-4dg6l4"),P(D,"position","absolute"),P(D,"right","5%"),p(D,"class","svelte-4dg6l4"),P(k,"position","relative"),p(k,"class","svelte-4dg6l4"),p(b,"class","layout svelte-4dg6l4"),p(e,"class","container svelte-4dg6l4")},m(t,f){Y(t,e,f),n(e,s),n(s,o),n(e,r),n(e,a),se(a,c[0]),n(e,T),n(e,E),n(E,N),n(e,S),n(e,b),n(b,i),n(i,u),n(u,H),n(i,Q),n(i,y);for(let l=0;l<d.length;l+=1)d[l].m(y,null);n(b,z),n(b,k),n(k,q),n(q,F),n(k,G),n(k,O);for(let l=0;l<_.length;l+=1)_[l].m(O,null);n(k,K),n(k,D),n(D,R),X||(Z=[J(a,"input",c[3]),J(E,"click",c[4]),J(D,"click",c[6])],X=!0)},p(t,[f]){if(f&1&&a.value!==t[0]&&se(a,t[0]),f&6){w=t[1];let l;for(l=0;l<w.length;l+=1){const C=ce(t,w,l);d[l]?d[l].p(C,f):(d[l]=re(C),d[l].c(),d[l].m(y,null))}for(;l<d.length;l+=1)d[l].d(1);d.length=w.length}if(f&4){A=t[2];let l;for(l=0;l<A.length;l+=1){const C=oe(t,A,l);_[l]?_[l].p(C,f):(_[l]=ie(C),_[l].c(),_[l].m(O,null))}for(;l<_.length;l+=1)_[l].d(1);_.length=A.length}},i:ae,o:ae,d(t){t&&h(e),ne(d,t),ne(_,t),X=!1,fe(Z)}}}function ge(c,e,s){let o="",r=["hej","på","dig"],a=[];function T(){o=this.value,s(0,o)}return[o,r,a,T,()=>{r.push(o),s(1,r)},(b,i)=>{r.splice(b,1),a.push(i),s(1,r),s(2,a)},()=>{s(2,a=[]),s(2,a)}]}class me extends ue{constructor(e){super(),de(this,e,ge,ve,_e,{})}}export{me as default};