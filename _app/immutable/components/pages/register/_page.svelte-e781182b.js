import{S as ue,i as fe,s as pe,k as p,q as b,a as N,e as ne,l as _,m as P,r as v,h as i,c as L,n as u,b as B,G as t,T as C,M as $,U as _e,B as x,N as me,u as he}from"../../../chunks/index-3b0df29e.js";function de(y){let a,m,o,e,f,s,n,h;return{c(){a=p("h3"),m=b("Please fill out the form"),o=N(),e=p("p"),f=b("Have an account? "),s=p("a"),n=b("Log in"),h=b(">"),this.h()},l(d){a=_(d,"H3",{});var E=P(a);m=v(E,"Please fill out the form"),E.forEach(i),o=L(d),e=_(d,"P",{});var U=P(e);f=v(U,"Have an account? "),s=_(U,"A",{href:!0});var A=P(s);n=v(A,"Log in"),A.forEach(i),h=v(U,">"),U.forEach(i),this.h()},h(){u(s,"href","/login")},m(d,E){B(d,a,E),t(a,m),B(d,o,E),B(d,e,E),t(e,f),t(e,s),t(s,n),t(e,h)},p:x,d(d){d&&i(a),d&&i(o),d&&i(e)}}}function ce(y){let a,m,o=y[0]+" "+y[1],e,f;return{c(){a=p("h3"),m=b("Thank you "),e=b(o),f=b(" for registering")},l(s){a=_(s,"H3",{});var n=P(a);m=v(n,"Thank you "),e=v(n,o),f=v(n," for registering"),n.forEach(i)},m(s,n){B(s,a,n),t(a,m),t(a,e),t(a,f)},p(s,n){n&3&&o!==(o=s[0]+" "+s[1])&&he(e,o)},d(s){s&&i(a)}}}function be(y){let a,m,o,e,f,s,n,h,d,E,U,A,k,G,F,j,z,S,D,w,J,K,g,Q,H,V,W,q,X,I,Y,M,R,Z,ee;function te(l,c){return l[2]?ce:de}let O=te(y),T=O(y);return{c(){a=p("h1"),m=b("Registration Form"),o=N(),e=p("form"),f=p("label"),s=b("First Name:"),n=N(),h=p("input"),d=N(),E=p("label"),U=b("Last Name:"),A=N(),k=p("input"),G=N(),F=p("label"),j=b("Email:"),z=N(),S=p("input"),D=N(),w=p("label"),J=b("Password:"),K=N(),g=p("input"),Q=N(),H=p("label"),V=b("Birth date"),W=N(),q=p("input"),X=N(),I=p("button"),Y=b("Register"),M=N(),T.c(),R=ne(),this.h()},l(l){a=_(l,"H1",{});var c=P(a);m=v(c,"Registration Form"),c.forEach(i),o=L(l),e=_(l,"FORM",{class:!0});var r=P(e);f=_(r,"LABEL",{for:!0});var le=P(f);s=v(le,"First Name:"),le.forEach(i),n=L(r),h=_(r,"INPUT",{id:!0,type:!0}),d=L(r),E=_(r,"LABEL",{for:!0});var ae=P(E);U=v(ae,"Last Name:"),ae.forEach(i),A=L(r),k=_(r,"INPUT",{id:!0,type:!0}),G=L(r),F=_(r,"LABEL",{for:!0});var re=P(F);j=v(re,"Email:"),re.forEach(i),z=L(r),S=_(r,"INPUT",{id:!0,type:!0}),D=L(r),w=_(r,"LABEL",{for:!0});var se=P(w);J=v(se,"Password:"),se.forEach(i),K=L(r),g=_(r,"INPUT",{id:!0,type:!0}),Q=L(r),H=_(r,"LABEL",{for:!0});var ie=P(H);V=v(ie,"Birth date"),ie.forEach(i),W=L(r),q=_(r,"INPUT",{id:!0,type:!0}),X=L(r),I=_(r,"BUTTON",{type:!0});var oe=P(I);Y=v(oe,"Register"),oe.forEach(i),r.forEach(i),M=L(l),T.l(l),R=ne(),this.h()},h(){u(f,"for","firstName"),u(h,"id","firstName"),u(h,"type","text"),u(E,"for","lastName"),u(k,"id","lastName"),u(k,"type","text"),u(F,"for","email"),u(S,"id","email"),u(S,"type","email"),u(w,"for","password"),u(g,"id","password"),u(g,"type","password"),u(H,"for","birthdate"),u(q,"id","birthdate"),u(q,"type","date"),u(I,"type","submit"),u(e,"class","svelte-1rnyc9c")},m(l,c){B(l,a,c),t(a,m),B(l,o,c),B(l,e,c),t(e,f),t(f,s),t(e,n),t(e,h),C(h,y[0]),t(e,d),t(e,E),t(E,U),t(e,A),t(e,k),C(k,y[1]),t(e,G),t(e,F),t(F,j),t(e,z),t(e,S),t(e,D),t(e,w),t(w,J),t(e,K),t(e,g),t(e,Q),t(e,H),t(H,V),t(e,W),t(e,q),t(e,X),t(e,I),t(I,Y),B(l,M,c),T.m(l,c),B(l,R,c),Z||(ee=[$(h,"input",y[4]),$(k,"input",y[5]),$(e,"submit",_e(y[3]))],Z=!0)},p(l,[c]){c&1&&h.value!==l[0]&&C(h,l[0]),c&2&&k.value!==l[1]&&C(k,l[1]),O===(O=te(l))&&T?T.p(l,c):(T.d(1),T=O(l),T&&(T.c(),T.m(R.parentNode,R)))},i:x,o:x,d(l){l&&i(a),l&&i(o),l&&i(e),l&&i(M),T.d(l),l&&i(R),Z=!1,me(ee)}}}function ve(y,a,m){let o="",e="",f=!1;function s(){m(2,f=!0),console.log("Form submitted!")}function n(){o=this.value,m(0,o)}function h(){e=this.value,m(1,e)}return[o,e,f,s,n,h]}class Ee extends ue{constructor(a){super(),fe(this,a,ve,be,pe,{})}}export{Ee as default};