import{S as pe,i as _e,s as me,k as _,q as c,a as y,e as fe,l as m,m as N,r as b,h as i,c as E,n,b as A,D as e,P as M,Q as ee,R as de,B as te,T as he,u as ce}from"../../../chunks/index-89dc8d39.js";function be(v){let r,d,f,a,t,s,p,k;return{c(){r=_("h3"),d=c("Please fill out the form"),f=y(),a=_("p"),t=c("Dont have an account? "),s=_("a"),p=c("Register"),k=c(">"),this.h()},l(o){r=m(o,"H3",{});var T=N(r);d=b(T,"Please fill out the form"),T.forEach(i),f=E(o),a=m(o,"P",{});var L=N(a);t=b(L,"Dont have an account? "),s=m(L,"A",{href:!0});var I=N(s);p=b(I,"Register"),I.forEach(i),k=b(L,">"),L.forEach(i),this.h()},h(){n(s,"href","/register")},m(o,T){A(o,r,T),e(r,d),A(o,f,T),A(o,a,T),e(a,t),e(a,s),e(s,p),e(a,k)},p:te,d(o){o&&i(r),o&&i(f),o&&i(a)}}}function ve(v){let r,d,f=v[0]+" "+v[1],a,t;return{c(){r=_("h3"),d=c("Thank you "),a=c(f),t=c(" for registering")},l(s){r=m(s,"H3",{});var p=N(r);d=b(p,"Thank you "),a=b(p,f),t=b(p," for registering"),p.forEach(i)},m(s,p){A(s,r,p),e(r,d),e(r,a),e(r,t)},p(s,p){p&3&&f!==(f=s[0]+" "+s[1])&&ce(a,f)},d(s){s&&i(r)}}}function ye(v){let r,d,f,a,t,s,p,k,o,T,L,I,Q,B,V,R,j,z,D,G,U,J,K,H,W,g,X,Y,S,Z,F,$,q,w,x,le;function ae(l,h){return l[2]?ve:be}let O=ae(v),P=O(v);return{c(){r=_("h1"),d=c("Registration Form"),f=y(),a=_("form"),t=_("div"),s=_("label"),p=c("First Name:"),k=y(),o=_("input"),T=y(),L=_("label"),I=c("Last Name:"),Q=y(),B=_("input"),V=y(),R=_("label"),j=c("Email:"),z=y(),D=_("input"),G=y(),U=_("label"),J=c("Password:"),K=y(),H=_("input"),W=y(),g=_("label"),X=c("Birth date"),Y=y(),S=_("input"),Z=y(),F=_("button"),$=c("Login"),q=y(),P.c(),w=fe(),this.h()},l(l){r=m(l,"H1",{});var h=N(r);d=b(h,"Registration Form"),h.forEach(i),f=E(l),a=m(l,"FORM",{class:!0});var C=N(a);t=m(C,"DIV",{class:!0});var u=N(t);s=m(u,"LABEL",{for:!0});var re=N(s);p=b(re,"First Name:"),re.forEach(i),k=E(u),o=m(u,"INPUT",{id:!0,type:!0}),T=E(u),L=m(u,"LABEL",{for:!0});var se=N(L);I=b(se,"Last Name:"),se.forEach(i),Q=E(u),B=m(u,"INPUT",{id:!0,type:!0}),V=E(u),R=m(u,"LABEL",{for:!0});var ie=N(R);j=b(ie,"Email:"),ie.forEach(i),z=E(u),D=m(u,"INPUT",{id:!0,type:!0}),G=E(u),U=m(u,"LABEL",{for:!0});var oe=N(U);J=b(oe,"Password:"),oe.forEach(i),K=E(u),H=m(u,"INPUT",{id:!0,type:!0}),W=E(u),g=m(u,"LABEL",{for:!0});var ue=N(g);X=b(ue,"Birth date"),ue.forEach(i),Y=E(u),S=m(u,"INPUT",{id:!0,type:!0}),u.forEach(i),Z=E(C),F=m(C,"BUTTON",{type:!0,class:!0});var ne=N(F);$=b(ne,"Login"),ne.forEach(i),C.forEach(i),q=E(l),P.l(l),w=fe(),this.h()},h(){n(s,"for","firstName"),n(o,"id","firstName"),n(o,"type","text"),n(L,"for","lastName"),n(B,"id","lastName"),n(B,"type","text"),n(R,"for","email"),n(D,"id","email"),n(D,"type","email"),n(U,"for","password"),n(H,"id","password"),n(H,"type","password"),n(g,"for","birthdate"),n(S,"id","birthdate"),n(S,"type","date"),n(t,"class","svelte-xr46gt"),n(F,"type","submit"),n(F,"class","svelte-xr46gt"),n(a,"class","svelte-xr46gt")},m(l,h){A(l,r,h),e(r,d),A(l,f,h),A(l,a,h),e(a,t),e(t,s),e(s,p),e(t,k),e(t,o),M(o,v[0]),e(t,T),e(t,L),e(L,I),e(t,Q),e(t,B),M(B,v[1]),e(t,V),e(t,R),e(R,j),e(t,z),e(t,D),e(t,G),e(t,U),e(U,J),e(t,K),e(t,H),e(t,W),e(t,g),e(g,X),e(t,Y),e(t,S),e(a,Z),e(a,F),e(F,$),A(l,q,h),P.m(l,h),A(l,w,h),x||(le=[ee(o,"input",v[4]),ee(B,"input",v[5]),ee(a,"submit",de(v[3]))],x=!0)},p(l,[h]){h&1&&o.value!==l[0]&&M(o,l[0]),h&2&&B.value!==l[1]&&M(B,l[1]),O===(O=ae(l))&&P?P.p(l,h):(P.d(1),P=O(l),P&&(P.c(),P.m(w.parentNode,w)))},i:te,o:te,d(l){l&&i(r),l&&i(f),l&&i(a),l&&i(q),P.d(l),l&&i(w),x=!1,he(le)}}}function Ee(v,r,d){let f="",a="",t=!1;function s(){d(2,t=!0),console.log("Form submitted!")}function p(){f=this.value,d(0,f)}function k(){a=this.value,d(1,a)}return[f,a,t,s,p,k]}class Le extends pe{constructor(r){super(),_e(this,r,Ee,ye,me,{})}}export{Le as default};