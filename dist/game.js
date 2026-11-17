(()=>{var ln=(i,e,t)=>()=>{if(t)throw t[0];try{return i&&(e=i(i=0)),e}catch(n){throw t=[n],n}};var n_=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};function i_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function s_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Eo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zm(){let i=Eo("canvas");return i.style.display="block",i}function va(...i){let e="THREE."+i.shift();To?To("log",e,...i):console.log(e,...i)}function Jm(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ne(...i){i=Jm(i);let e="THREE."+i.shift();if(To)To("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ve(...i){i=Jm(i);let e="THREE."+i.shift();if(To)To("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function wr(...i){let e=i.join(" ");e in Rp||(Rp[e]=!0,Ne(...i))}function jm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function as(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(In[i&255]+In[i>>8&255]+In[i>>16&255]+In[i>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[t&63|128]+In[t>>8&255]+"-"+In[t>>16&255]+In[t>>24&255]+In[n&255]+In[n>>8&255]+In[n>>16&255]+In[n>>24&255]).toLowerCase()}function ot(i,e,t){return Math.max(e,Math.min(t,i))}function xf(i,e){return(i%e+e)%e}function r_(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function o_(i,e,t){return i!==e?(t-i)/(e-i):0}function xa(i,e,t){return(1-t)*i+t*e}function a_(i,e,t,n){return xa(i,e,1-Math.exp(-t*n))}function l_(i,e=1){return e-Math.abs(xf(i,e*2)-e)}function c_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function h_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function u_(i,e){return i+Math.floor(Math.random()*(e-i+1))}function f_(i,e){return i+Math.random()*(e-i)}function d_(i){return i*(.5-Math.random())}function p_(i){i!==void 0&&(Cp=i);let e=Cp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function m_(i){return i*ga}function g_(i){return i*Cr}function x_(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function __(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function _f(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function y_(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*h,a*c);break;default:Ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gh(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function yf(i,e){if(e.constructor===Float32Array)return i;let t=gh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function vf(i,e){if(e.constructor===Float32Array)return i;let t=gh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}function v_(){let i={enabled:!0,workingColorSpace:Gn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Mt&&(s.r=Ts(s.r),s.g=Ts(s.g),s.b=Ts(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Mt&&(s.r=vo(s.r),s.g=vo(s.g),s.b=vo(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Us?ya:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Gn]:{primaries:e,whitePoint:n,transfer:ya,toXYZ:Pp,fromXYZ:Lp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dt},outputColorSpaceConfig:{drawingBufferColorSpace:Dt}},[Dt]:{primaries:e,whitePoint:n,transfer:Mt,toXYZ:Pp,fromXYZ:Lp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dt}}}),i}function Ts(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function du(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?lc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}function gu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Eu(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Mr.fromArray(i,r);let a=s.x*Math.abs(Mr.x)+s.y*Math.abs(Mr.y)+s.z*Math.abs(Mr.z),l=e.dot(Mr),c=t.dot(Mr),h=n.dot(Mr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function Hp(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=as()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}function U_(i,e,t,n,s,r,o,a){let l;if(e.side===En?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===rs,a),l===null)return null;Gl.copy(a),Gl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Gl);return c<t.near||c>t.far?null:{distance:c,point:Gl.clone(),object:i}}function Vl(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Bl),i.getVertexPosition(l,zl),i.getVertexPosition(c,kl);let h=U_(i,e,t,n,Bl,zl,kl,Wp);if(h){let u=new N;nr.getBarycoord(Wp,Bl,zl,kl,u),s&&(h.uv=nr.getInterpolatedAttribute(s,a,l,c,u,new Ye)),r&&(h.uv1=nr.getInterpolatedAttribute(r,a,l,c,u,new Ye)),o&&(h.normal=nr.getInterpolatedAttribute(o,a,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new N,materialIndex:0};nr.getNormal(Bl,zl,kl,d.normal),h.face=d,h.barycoord=u}return h}function Kl(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(fc.fromBufferAttribute(a,s),dc.fromBufferAttribute(a,r),t.distanceSqToSegment(fc,dc,Lu,em)>n)return;Lu.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Lu);if(!(c<e.near||c>e.far))return{distance:c,point:em.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}function sm(i,e,t,n,s,r,o){let a=Ou.distanceSqToPoint(i);if(a<t){let l=new N;Ou.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}function qr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(rm(s))s.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(rm(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Dn(i){let e={};for(let t=0;t<i.length;t++){let n=qr(i[t]);for(let s in n)e[s]=n[s]}return e}function rm(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function H_(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Mf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}function tr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ma(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function W_(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function om(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function X_(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}function n0(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function q_(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Y_(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=n0(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=q_(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}function am(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function lm(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}function K_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ps;case"vector":case"vector2":case"vector3":case"vector4":return or;case"color":return Na;case"quaternion":return Ls;case"bool":case"boolean":return Is;case"string":return Ds}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function $_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=K_(i.type);if(i.times===void 0){let n=[],s=[];X_(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),ma(i.settings)&&(t.settings={inTangents:tr(i.settings.inTangents,Float32Array),outTangents:tr(i.settings.outTangents,Float32Array)}),t}function cm(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}function Ef(i,e,t,n){let s=ry(n);switch(t){case cf:return i*e;case Nc:return i*e/s.components*s.byteLength;case Uc:return i*e/s.components*s.byteLength;case ar:return i*e*2/s.components*s.byteLength;case Oc:return i*e*2/s.components*s.byteLength;case hf:return i*e*3/s.components*s.byteLength;case Ai:return i*e*4/s.components*s.byteLength;case Bc:return i*e*4/s.components*s.byteLength;case Ga:case Va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Wa:case Xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kc:case Gc:return Math.max(i,16)*Math.max(e,8)/4;case zc:case Hc:return Math.max(i,8)*Math.max(e,8)/2;case Vc:case Wc:case qc:case Yc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Xc:case qa:case Kc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $c:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Jc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case jc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Qc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case eh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case th:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case nh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ih:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case sh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case rh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case oh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ah:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case lh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ch:case hh:case uh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case fh:case dh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ya:case ph:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ry(i){switch(i){case Qn:case rf:return{byteLength:1,components:1};case Ho:case of:case qi:return{byteLength:2,components:1};case Dc:case Fc:return{byteLength:2,components:4};case Xi:case Lc:case ci:return{byteLength:4,components:1};case af:case lf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}var pm,Wu,mm,Ha,gm,Oo,rs,En,bt,Hr,Bo,Xu,qu,Yu,xm,Gr,_m,ym,vm,Mm,bm,Sm,Em,Tm,Ku,$u,wm,Am,Rm,Cm,Im,Pm,Lm,Dm,Fm,tc,nc,ic,Mo,sc,rc,oc,ac,Rc,Nm,Um,os,Zu,Ju,ju,Qu,ef,tf,nf,Nu,Om,sf,Vr,zo,Cc,Ic,ir,bi,bo,Jt,Pc,Wr,hn,ko,wi,Qn,rf,of,Ho,Lc,Xi,ci,qi,Dc,Fc,Xr,af,lf,cf,hf,Ai,ws,Ns,Nc,Uc,ar,Oc,Bc,Ga,Va,Wa,Xa,zc,kc,Hc,Gc,Vc,Wc,Xc,qc,Yc,qa,Kc,$c,Zc,Jc,jc,Qc,eh,th,nh,ih,sh,rh,oh,ah,lh,ch,hh,uh,fh,dh,Ya,ph,Bm,zm,km,Ar,Rr,Ql,Uu,Er,Tr,_a,mh,Hm,uf,Ka,Go,Gm,$a,Vm,Us,Dt,Gn,ya,Mt,ec,Wm,Xm,qm,Ym,ff,Km,$m,df,pf,mf,Os,gf,Si,So,Rp,To,Qm,Gi,In,Cp,ga,Cr,xh,Tf,Ye,vn,wf,N,uu,Ip,Af,Ke,fu,Pp,Lp,it,ro,lc,M_,wo,b_,pu,un,Rf,At,cc,oi,Ma,hc,Ac,We,oo,zi,S_,E_,Zs,Rl,si,Dp,Fp,Ei,ba,T_,Np,ao,ys,Cl,aa,w_,A_,Up,Op,Bp,zp,R_,lo,mu,yt,Bt,C_,Ao,e0,Js,Il,Te,Pn,Sa,Ea,ki,vs,xu,Ms,co,ho,kp,_u,yu,vu,Mu,bu,Su,nr,Vn,bs,Hi,Pl,uo,fo,po,js,Qs,vr,la,Ll,Dl,Mr,sn,Fl,I_,It,Ta,wa,ut,P_,ca,Tu,Jn,L_,Mi,wu,mo,ri,ha,yn,Ft,Ro,Hn,Co,Au,D_,F_,Ln,N_,Wn,Ss,Ru,Nl,Ul,Ir,rt,Gp,br,Ol,Vp,Bl,zl,kl,Cu,Hl,Wp,Gl,Be,ua,Xp,qp,O_,Yp,Wl,Iu,Kp,Pu,Aa,Io,Po,$p,B_,Ra,As,go,Zp,Xl,Jp,z_,fa,da,ai,Sr,k_,ql,sr,jp,uc,rr,fc,dc,Qp,pa,Yl,Lu,em,Pr,tm,nm,Lr,Ca,Lo,im,Ou,$l,Zl,Dr,Ia,li,Rs,Pa,La,Sn,Da,ns,qt,Vi,pc,Xn,Fr,Cs,Gt,Wi,t0,G_,V_,Ti,mc,Nr,qn,Yt,gc,xc,is,_c,Fa,yc,vc,jn,Is,Na,Ps,Mc,Ls,Ds,or,Ur,ts,bc,i0,ss,Es,Bu,Do,xo,Sc,Ua,Or,Oa,Du,hm,um,Fo,Jl,jl,es,Ba,er,fm,dm,cn,zu,za,ku,Br,zr,Hu,kr,Fs,Fu,ka,_o,yo,No,Ec,Tc,bf,Z_,Sf,J_,j_,Q_,ey,ty,ny,iy,Gu,Ct,wc,sy,Uo,Cf,Vu,If=ln(()=>{pm=0,Wu=1,mm=2,Ha=1,gm=2,Oo=3,rs=0,En=1,bt=2,Hr=0,Bo=1,Xu=2,qu=3,Yu=4,xm=5,Gr=100,_m=101,ym=102,vm=103,Mm=104,bm=200,Sm=201,Em=202,Tm=203,Ku=204,$u=205,wm=206,Am=207,Rm=208,Cm=209,Im=210,Pm=211,Lm=212,Dm=213,Fm=214,tc=0,nc=1,ic=2,Mo=3,sc=4,rc=5,oc=6,ac=7,Rc=0,Nm=1,Um=2,os=0,Zu=1,Ju=2,ju=3,Qu=4,ef=5,tf=6,nf=7,Nu="attached",Om="detached",sf=300,Vr=301,zo=302,Cc=303,Ic=304,ir=1e3,bi=1001,bo=1002,Jt=1003,Pc=1004,Wr=1005,hn=1006,ko=1007,wi=1008,Qn=1009,rf=1010,of=1011,Ho=1012,Lc=1013,Xi=1014,ci=1015,qi=1016,Dc=1017,Fc=1018,Xr=1020,af=35902,lf=35899,cf=1021,hf=1022,Ai=1023,ws=1026,Ns=1027,Nc=1028,Uc=1029,ar=1030,Oc=1031,Bc=1033,Ga=33776,Va=33777,Wa=33778,Xa=33779,zc=35840,kc=35841,Hc=35842,Gc=35843,Vc=36196,Wc=37492,Xc=37496,qc=37488,Yc=37489,qa=37490,Kc=37491,$c=37808,Zc=37809,Jc=37810,jc=37811,Qc=37812,eh=37813,th=37814,nh=37815,ih=37816,sh=37817,rh=37818,oh=37819,ah=37820,lh=37821,ch=36492,hh=36494,uh=36495,fh=36283,dh=36284,Ya=36285,ph=36286,Bm=2200,zm=2201,km=2202,Ar=2300,Rr=2301,Ql=2302,Uu=2303,Er=2400,Tr=2401,_a=2402,mh=2500,Hm=2501,uf=0,Ka=1,Go=2,Gm=3200,$a=0,Vm=1,Us="",Dt="srgb",Gn="srgb-linear",ya="linear",Mt="srgb",ec=7680,Wm=519,Xm=512,qm=513,Ym=514,ff=515,Km=516,$m=517,df=518,pf=519,mf=35044,Os=35048,gf="300 es",Si=2e3,So=2001;Rp={},To=null;Qm={[tc]:tc,[ic]:oc,[sc]:sc,[Mo]:rc,[nc]:nc,[oc]:ic,[ac]:ac,[rc]:Mo},Gi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cp=1234567,ga=Math.PI/180,Cr=180/Math.PI;xh={DEG2RAD:ga,RAD2DEG:Cr,generateUUID:as,clamp:ot,euclideanModulo:xf,mapLinear:r_,inverseLerp:o_,lerp:xa,damp:a_,pingpong:l_,smoothstep:c_,smootherstep:h_,randInt:u_,randFloat:f_,randFloatSpread:d_,seededRandom:p_,degToRad:m_,radToDeg:g_,isPowerOfTwo:x_,ceilPowerOfTwo:__,floorPowerOfTwo:_f,setQuaternionFromProperEuler:y_,normalize:vf,denormalize:yf},Tf=class Tf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Tf.prototype.isVector2=!0;Ye=Tf,vn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],p=r[o+2],_=r[o+3];if(u!==_||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*_;m<0&&(d=-d,f=-f,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){let M=Math.acos(m),E=Math.sin(M);g=Math.sin(g*M)/E,a=Math.sin(a*M)/E,l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+_*a}else{l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+_*a;let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-a*f,e[t+2]=c*p+h*f+a*d-l*u,e[t+3]=h*p-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},wf=class wf{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ip.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ip.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return uu.copy(this).projectOnVector(e),this.sub(uu)}reflect(e){return this.sub(uu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};wf.prototype.isVector3=!0;N=wf,uu=new N,Ip=new vn,Af=class Af{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],_=s[0],m=s[3],g=s[6],M=s[1],E=s[4],b=s[7],w=s[2],R=s[5],y=s[8];return r[0]=o*_+a*M+l*w,r[3]=o*m+a*E+l*R,r[6]=o*g+a*b+l*y,r[1]=c*_+h*M+u*w,r[4]=c*m+h*E+u*R,r[7]=c*g+h*b+u*y,r[2]=d*_+f*M+p*w,r[5]=d*m+f*E+p*R,r[8]=d*g+f*b+p*y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=t*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=u*_,e[1]=(s*c-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return wr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fu.makeScale(e,t)),this}rotate(e){return wr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fu.makeRotation(-e)),this}translate(e,t){return wr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Af.prototype.isMatrix3=!0;Ke=Af,fu=new Ke,Pp=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lp=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);it=v_();lc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ro===void 0&&(ro=Eo("canvas")),ro.width=e.width,ro.height=e.height;let s=ro.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ro}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Eo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ts(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ts(t[n]/255)*255):t[n]=Ts(t[n]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},M_=0,wo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=as(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(du(s[o].image)):r.push(du(s[o]))}else r=du(s);n.url=r}return t||(e.images[this.uuid]=n),n}};b_=0,pu=new N,un=class i extends Gi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=bi,s=bi,r=hn,o=wi,a=Ai,l=Qn,c=i.DEFAULT_ANISOTROPY,h=Us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=as(),this.name="",this.source=new wo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(pu).x}get height(){return this.source.getSize(pu).y}get depth(){return this.source.getSize(pu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ir:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ir:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=sf;un.DEFAULT_ANISOTROPY=1;Rf=class Rf{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,b=(f+1)/2,w=(g+1)/2,R=(h+d)/4,y=(u+_)/4,A=(p+m)/4;return E>b&&E>w?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=R/n,r=y/n):b>w?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=R/s,r=A/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=y/r,s=A/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-p)*(m-p)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-p)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Rf.prototype.isVector4=!0;At=Rf,cc=class extends Gi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new un({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new wo(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},oi=class extends cc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ma=class extends un{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},hc=class extends un{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Ac=class Ac{constructor(e,t,n,s,r,o,a,l,c,h,u,d,f,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,d,f,p,_,m)}set(e,t,n,s,r,o,a,l,c,h,u,d,f,p,_,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ac().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/oo.setFromMatrixColumn(e,0).length(),r=1/oo.setFromMatrixColumn(e,1).length(),o=1/oo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,p=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,p=c*h,_=c*u;t[0]=d+_*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,p=c*h,_=c*u;t[0]=d-_*a,t[4]=-o*u,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,p=a*h,_=a*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,p=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=p*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-_*u}else if(e.order==="XZY"){let d=o*l,f=o*c,p=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(S_,e,E_)}lookAt(e,t,n){let s=this.elements;return si.subVectors(e,t),si.lengthSq()===0&&(si.z=1),si.normalize(),Zs.crossVectors(n,si),Zs.lengthSq()===0&&(Math.abs(n.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Zs.crossVectors(n,si)),Zs.normalize(),Rl.crossVectors(si,Zs),s[0]=Zs.x,s[4]=Rl.x,s[8]=si.x,s[1]=Zs.y,s[5]=Rl.y,s[9]=si.y,s[2]=Zs.z,s[6]=Rl.z,s[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],_=n[6],m=n[10],g=n[14],M=n[3],E=n[7],b=n[11],w=n[15],R=s[0],y=s[4],A=s[8],F=s[12],C=s[1],P=s[5],O=s[9],z=s[13],L=s[2],W=s[6],Z=s[10],q=s[14],re=s[3],$=s[7],ne=s[11],se=s[15];return r[0]=o*R+a*C+l*L+c*re,r[4]=o*y+a*P+l*W+c*$,r[8]=o*A+a*O+l*Z+c*ne,r[12]=o*F+a*z+l*q+c*se,r[1]=h*R+u*C+d*L+f*re,r[5]=h*y+u*P+d*W+f*$,r[9]=h*A+u*O+d*Z+f*ne,r[13]=h*F+u*z+d*q+f*se,r[2]=p*R+_*C+m*L+g*re,r[6]=p*y+_*P+m*W+g*$,r[10]=p*A+_*O+m*Z+g*ne,r[14]=p*F+_*z+m*q+g*se,r[3]=M*R+E*C+b*L+w*re,r[7]=M*y+E*P+b*W+w*$,r[11]=M*A+E*O+b*Z+w*ne,r[15]=M*F+E*z+b*q+w*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],_=e[7],m=e[11],g=e[15],M=l*f-c*d,E=a*f-c*u,b=a*d-l*u,w=o*f-c*h,R=o*d-l*h,y=o*u-a*h;return t*(_*M-m*E+g*b)-n*(p*M-m*w+g*R)+s*(p*E-_*w+g*y)-r*(p*b-_*R+m*y)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],_=e[13],m=e[14],g=e[15],M=t*a-n*o,E=t*l-s*o,b=t*c-r*o,w=n*l-s*a,R=n*c-r*a,y=s*c-r*l,A=h*_-u*p,F=h*m-d*p,C=h*g-f*p,P=u*m-d*_,O=u*g-f*_,z=d*g-f*m,L=M*z-E*O+b*P+w*C-R*F+y*A;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/L;return e[0]=(a*z-l*O+c*P)*W,e[1]=(s*O-n*z-r*P)*W,e[2]=(_*y-m*R+g*w)*W,e[3]=(d*R-u*y-f*w)*W,e[4]=(l*C-o*z-c*F)*W,e[5]=(t*z-s*C+r*F)*W,e[6]=(m*b-p*y-g*E)*W,e[7]=(h*y-d*b+f*E)*W,e[8]=(o*O-a*C+c*A)*W,e[9]=(n*C-t*O-r*A)*W,e[10]=(p*R-_*b+g*M)*W,e[11]=(u*b-h*R-f*M)*W,e[12]=(a*F-o*P-l*A)*W,e[13]=(t*P-n*F+s*A)*W,e[14]=(_*E-p*w-m*M)*W,e[15]=(h*w-u*E+d*M)*W,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,_=o*h,m=o*u,g=a*u,M=l*c,E=l*h,b=l*u,w=n.x,R=n.y,y=n.z;return s[0]=(1-(_+g))*w,s[1]=(f+b)*w,s[2]=(p-E)*w,s[3]=0,s[4]=(f-b)*R,s[5]=(1-(d+g))*R,s[6]=(m+M)*R,s[7]=0,s[8]=(p+E)*y,s[9]=(m-M)*y,s[10]=(1-(d+_))*y,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=oo.set(s[0],s[1],s[2]).length(),a=oo.set(s[4],s[5],s[6]).length(),l=oo.set(s[8],s[9],s[10]).length();r<0&&(o=-o),zi.copy(this);let c=1/o,h=1/a,u=1/l;return zi.elements[0]*=c,zi.elements[1]*=c,zi.elements[2]*=c,zi.elements[4]*=h,zi.elements[5]*=h,zi.elements[6]*=h,zi.elements[8]*=u,zi.elements[9]*=u,zi.elements[10]*=u,t.setFromRotationMatrix(zi),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=Si,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),p,_;if(l)p=r/(o-r),_=o*r/(o-r);else if(a===Si)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===So)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Si,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),p,_;if(l)p=1/(o-r),_=o/(o-r);else if(a===Si)p=-2/(o-r),_=-(o+r)/(o-r);else if(a===So)p=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ac.prototype.isMatrix4=!0;We=Ac,oo=new N,zi=new We,S_=new N(0,0,0),E_=new N(1,1,1),Zs=new N,Rl=new N,si=new N,Dp=new We,Fp=new vn,Ei=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Dp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fp.setFromEuler(this),this.setFromQuaternion(Fp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ei.DEFAULT_ORDER="XYZ";ba=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},T_=0,Np=new N,ao=new vn,ys=new We,Cl=new N,aa=new N,w_=new N,A_=new vn,Up=new N(1,0,0),Op=new N(0,1,0),Bp=new N(0,0,1),zp={type:"added"},R_={type:"removed"},lo={type:"childadded",child:null},mu={type:"childremoved",child:null},yt=class i extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:T_++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new N,t=new Ei,n=new vn,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new We},normalMatrix:{value:new Ke}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ao.setFromAxisAngle(e,t),this.quaternion.multiply(ao),this}rotateOnWorldAxis(e,t){return ao.setFromAxisAngle(e,t),this.quaternion.premultiply(ao),this}rotateX(e){return this.rotateOnAxis(Up,e)}rotateY(e){return this.rotateOnAxis(Op,e)}rotateZ(e){return this.rotateOnAxis(Bp,e)}translateOnAxis(e,t){return Np.copy(e).applyQuaternion(this.quaternion),this.position.add(Np.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Up,e)}translateY(e){return this.translateOnAxis(Op,e)}translateZ(e){return this.translateOnAxis(Bp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ys.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Cl.copy(e):Cl.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ys.lookAt(aa,Cl,this.up):ys.lookAt(Cl,aa,this.up),this.quaternion.setFromRotationMatrix(ys),s&&(ys.extractRotation(s.matrixWorld),ao.setFromRotationMatrix(ys),this.quaternion.premultiply(ao.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zp),lo.child=e,this.dispatchEvent(lo),lo.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(R_),mu.child=e,this.dispatchEvent(mu),mu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ys.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ys.multiply(e.parent.matrixWorld)),e.applyMatrix4(ys),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zp),lo.child=e,this.dispatchEvent(lo),lo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,e,w_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,A_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};yt.DEFAULT_UP=new N(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Bt=class extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},C_={type:"move"},Ao=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(C_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Bt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},e0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Js={h:0,s:0,l:0},Il={h:0,s:0,l:0};Te=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=it.workingColorSpace){if(e=xf(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=gu(o,r,e+1/3),this.g=gu(o,r,e),this.b=gu(o,r,e-1/3)}return it.colorSpaceToWorking(this,s),this}setStyle(e,t=Dt){function n(r){r!==void 0&&parseFloat(r)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){let n=e0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}copyLinearToSRGB(e){return this.r=vo(e.r),this.g=vo(e.g),this.b=vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return it.workingToColorSpace(Pn.copy(this),e),Math.round(ot(Pn.r*255,0,255))*65536+Math.round(ot(Pn.g*255,0,255))*256+Math.round(ot(Pn.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Pn.copy(this),t);let n=Pn.r,s=Pn.g,r=Pn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Pn.copy(this),t),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=Dt){it.workingToColorSpace(Pn.copy(this),e);let t=Pn.r,n=Pn.g,s=Pn.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Js),this.setHSL(Js.h+e,Js.s+t,Js.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Js),e.getHSL(Il);let n=xa(Js.h,Il.h,t),s=xa(Js.s,Il.s,t),r=xa(Js.l,Il.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pn=new Te;Te.NAMES=e0;Sa=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Te(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ea=class extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ki=new N,vs=new N,xu=new N,Ms=new N,co=new N,ho=new N,kp=new N,_u=new N,yu=new N,vu=new N,Mu=new At,bu=new At,Su=new At,nr=class i{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ki.subVectors(e,t),s.cross(ki);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ki.subVectors(s,t),vs.subVectors(n,t),xu.subVectors(e,t);let o=ki.dot(ki),a=ki.dot(vs),l=ki.dot(xu),c=vs.dot(vs),h=vs.dot(xu),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ms)===null?!1:Ms.x>=0&&Ms.y>=0&&Ms.x+Ms.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Ms)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ms.x),l.addScaledVector(o,Ms.y),l.addScaledVector(a,Ms.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Mu.setScalar(0),bu.setScalar(0),Su.setScalar(0),Mu.fromBufferAttribute(e,t),bu.fromBufferAttribute(e,n),Su.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Mu,r.x),o.addScaledVector(bu,r.y),o.addScaledVector(Su,r.z),o}static isFrontFacing(e,t,n,s){return ki.subVectors(n,t),vs.subVectors(e,t),ki.cross(vs).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ki.subVectors(this.c,this.b),vs.subVectors(this.a,this.b),ki.cross(vs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;co.subVectors(s,n),ho.subVectors(r,n),_u.subVectors(e,n);let l=co.dot(_u),c=ho.dot(_u);if(l<=0&&c<=0)return t.copy(n);yu.subVectors(e,s);let h=co.dot(yu),u=ho.dot(yu);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(n).addScaledVector(co,o);vu.subVectors(e,r);let f=co.dot(vu),p=ho.dot(vu);if(p>=0&&f<=p)return t.copy(r);let _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(ho,a);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return kp.subVectors(r,s),a=(u-h)/(u-h+(f-p)),t.copy(s).addScaledVector(kp,a);let g=1/(m+_+d);return o=_*g,a=d*g,t.copy(n).addScaledVector(co,o).addScaledVector(ho,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Vn=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hi):Hi.fromBufferAttribute(r,o),Hi.applyMatrix4(e.matrixWorld),this.expandByPoint(Hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pl.copy(n.boundingBox)),Pl.applyMatrix4(e.matrixWorld),this.union(Pl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hi),Hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(la),Ll.subVectors(this.max,la),uo.subVectors(e.a,la),fo.subVectors(e.b,la),po.subVectors(e.c,la),js.subVectors(fo,uo),Qs.subVectors(po,fo),vr.subVectors(uo,po);let t=[0,-js.z,js.y,0,-Qs.z,Qs.y,0,-vr.z,vr.y,js.z,0,-js.x,Qs.z,0,-Qs.x,vr.z,0,-vr.x,-js.y,js.x,0,-Qs.y,Qs.x,0,-vr.y,vr.x,0];return!Eu(t,uo,fo,po,Ll)||(t=[1,0,0,0,1,0,0,0,1],!Eu(t,uo,fo,po,Ll))?!1:(Dl.crossVectors(js,Qs),t=[Dl.x,Dl.y,Dl.z],Eu(t,uo,fo,po,Ll))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},bs=[new N,new N,new N,new N,new N,new N,new N,new N],Hi=new N,Pl=new Vn,uo=new N,fo=new N,po=new N,js=new N,Qs=new N,vr=new N,la=new N,Ll=new N,Dl=new N,Mr=new N;sn=new N,Fl=new Ye,I_=0,It=class extends Gi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:I_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=mf,this.updateRanges=[],this.gpuType=ci,this.version=0,this._normalizationScale=e!==void 0?gh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fl.fromBufferAttribute(this,t),Fl.applyMatrix3(e),this.setXY(t,Fl.x,Fl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):yf(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):vf(e,this.array)}},Ta=class extends It{constructor(e,t,n){super(new Uint16Array(e),t,n)}},wa=class extends It{constructor(e,t,n){super(new Uint32Array(e),t,n)}},ut=class extends It{constructor(e,t,n){super(new Float32Array(e),t,n)}},P_=new Vn,ca=new N,Tu=new N,Jn=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):P_.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ca.subVectors(e,this.center);let t=ca.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ca,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ca.copy(e.center).add(Tu)),this.expandByPoint(ca.copy(e.center).sub(Tu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},L_=0,Mi=new We,wu=new yt,mo=new N,ri=new Vn,ha=new Vn,yn=new N,Ft=class i extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:L_++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(i_(e)?wa:Ta)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Mi.makeRotationFromQuaternion(e),this.applyMatrix4(Mi),this}rotateX(e){return Mi.makeRotationX(e),this.applyMatrix4(Mi),this}rotateY(e){return Mi.makeRotationY(e),this.applyMatrix4(Mi),this}rotateZ(e){return Mi.makeRotationZ(e),this.applyMatrix4(Mi),this}translate(e,t,n){return Mi.makeTranslation(e,t,n),this.applyMatrix4(Mi),this}scale(e,t,n){return Mi.makeScale(e,t,n),this.applyMatrix4(Mi),this}lookAt(e){return wu.lookAt(e),wu.updateMatrix(),this.applyMatrix4(wu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mo).negate(),this.translate(mo.x,mo.y,mo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ut(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];ri.setFromBufferAttribute(r),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ha.setFromBufferAttribute(a),this.morphTargetsRelative?(yn.addVectors(ri.min,ha.min),ri.expandByPoint(yn),yn.addVectors(ri.max,ha.max),ri.expandByPoint(yn)):(ri.expandByPoint(ha.min),ri.expandByPoint(ha.max))}ri.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)yn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(yn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)yn.fromBufferAttribute(a,c),l&&(mo.fromBufferAttribute(e,c),yn.add(mo)),s=Math.max(s,n.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new It(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let F=0;F<n.count;F++)a[F]=new N,l[F]=new N;let h=new N,u=new N,d=new N,f=new Ye,p=new Ye,_=new Ye,m=new N,g=new N;function M(F,C,P){c[F]=c[C]=c[P]=1,h.fromBufferAttribute(n,F),u.fromBufferAttribute(n,C),d.fromBufferAttribute(n,P),f.fromBufferAttribute(r,F),p.fromBufferAttribute(r,C),_.fromBufferAttribute(r,P),u.sub(h),d.sub(h),p.sub(f),_.sub(f);let O=1/(p.x*_.y-_.x*p.y);isFinite(O)&&(m.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(O),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(O),a[F].add(m),a[C].add(m),a[P].add(m),l[F].add(g),l[C].add(g),l[P].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let F=0,C=E.length;F<C;++F){let P=E[F],O=P.start,z=P.count;for(let L=O,W=O+z;L<W;L+=3)M(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let b=new N,w=new N,R=new N,y=new N;function A(F){R.fromBufferAttribute(s,F),y.copy(R);let C=a[F];b.copy(C),b.sub(R.multiplyScalar(R.dot(C))).normalize(),w.crossVectors(y,C);let O=w.dot(l[F])<0?-1:1;o.setXYZW(F,b.x,b.y,b.z,O)}for(let F=0,C=n.count;F<C;++F)c[F]&&A(F);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new It(d,h,u)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ro=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=mf,this.updateRanges=[],this.version=0,this.uuid=as()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Hp(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Hp(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};Hn=new N,Co=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?gh(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.applyMatrix4(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.applyNormalMatrix(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.transformDirection(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){va("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new It(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){va("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):yf(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):vf(e,this.data.array)}},Au=new N,D_=new N,F_=new Ke,Ln=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Au.subVectors(n,t).cross(D_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Au),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||F_.getNormalMatrix(e),s=this.coplanarPoint(Au).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},N_=0,Wn=class extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=as(),this.name="",this.type="Material",this.blending=Bo,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ku,this.blendDst=$u,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ec,this.stencilZFail=ec,this.stencilZPass=ec,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Te().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ln().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ye().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ye().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ss=new N,Ru=new N,Nl=new N,Ul=new N,Ir=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ss)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ss.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ss.copy(this.origin).addScaledVector(this.direction,t),Ss.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ru.copy(e).add(t).multiplyScalar(.5),Nl.copy(t).sub(e).normalize(),Ul.copy(this.origin).sub(Ru);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Nl),a=Ul.dot(this.direction),l=-Ul.dot(Nl),c=Ul.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ru).addScaledVector(Nl,d),f}intersectSphere(e,t){if(e.radius<0)return null;Ss.subVectors(e.center,this.origin);let n=Ss.dot(this.direction),s=Ss.dot(Ss)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ss)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=e.x-o.x,d=e.y-o.y,f=e.z-o.z,p=t.x-o.x,_=t.y-o.y,m=t.z-o.z,g=n.x-o.x,M=n.y-o.y,E=n.z-o.z,b=Math.abs(l),w=Math.abs(c),R=Math.abs(h),y,A,F,C,P,O,z,L,W,Z,q,re;if(b>=w&&b>=R?(F=l,O=u,W=p,re=g,l>=0?(y=c,A=h,C=d,P=f,z=_,L=m,Z=M,q=E):(y=h,A=c,C=f,P=d,z=m,L=_,Z=E,q=M)):w>=R?(F=c,O=d,W=_,re=M,c>=0?(y=h,A=l,C=f,P=u,z=m,L=p,Z=E,q=g):(y=l,A=h,C=u,P=f,z=p,L=m,Z=g,q=E)):(F=h,O=f,W=m,re=E,h>=0?(y=l,A=c,C=u,P=d,z=p,L=_,Z=g,q=M):(y=c,A=l,C=d,P=u,z=_,L=p,Z=M,q=g)),F===0)return null;let $=y/F,ne=A/F,se=1/F,De=C-$*O,Ze=P-ne*O,Q=z-$*W,be=L-ne*W,Ie=Z-$*re,ze=q-ne*re,Se=Ie*be-ze*Q,je=De*ze-Ze*Ie,tn=Q*Ze-be*De;if(s){if(Se<0||je<0||tn<0)return null}else if((Se<0||je<0||tn<0)&&(Se>0||je>0||tn>0))return null;let Ge=Se+je+tn;if(Ge===0)return null;let Tt=se*(Se*O+je*W+tn*re);return(Ge>0?Tt<0:Tt>0)?null:this.at(Tt/Ge,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},rt=class extends Wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Gp=new We,br=new Ir,Ol=new Jn,Vp=new N,Bl=new N,zl=new N,kl=new N,Cu=new N,Hl=new N,Wp=new N,Gl=new N,Be=class extends yt{constructor(e=new Ft,t=new rt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Hl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Cu.fromBufferAttribute(u,e),o?Hl.addScaledVector(Cu,h):Hl.addScaledVector(Cu.sub(t),h))}t.add(Hl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ol.copy(n.boundingSphere),Ol.applyMatrix4(r),br.copy(e.ray).recast(e.near),!(Ol.containsPoint(br.origin)===!1&&(br.intersectSphere(Ol,Vp)===null||br.origin.distanceToSquared(Vp)>(e.far-e.near)**2))&&(Gp.copy(r).invert(),br.copy(e.ray).applyMatrix4(Gp),!(n.boundingBox!==null&&br.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,br)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){let m=d[p],g=o[m.materialIndex],M=Math.max(m.start,f.start),E=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let b=M,w=E;b<w;b+=3){let R=a.getX(b),y=a.getX(b+1),A=a.getX(b+2);s=Vl(this,g,e,n,c,h,u,R,y,A),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let M=a.getX(m),E=a.getX(m+1),b=a.getX(m+2);s=Vl(this,o,e,n,c,h,u,M,E,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){let m=d[p],g=o[m.materialIndex],M=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=M,w=E;b<w;b+=3){let R=b,y=b+1,A=b+2;s=Vl(this,g,e,n,c,h,u,R,y,A),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let M=m,E=m+1,b=m+2;s=Vl(this,o,e,n,c,h,u,M,E,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};ua=new At,Xp=new At,qp=new At,O_=new At,Yp=new We,Wl=new N,Iu=new Jn,Kp=new We,Pu=new Ir,Aa=class extends Be{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Nu,this.bindMatrix=new We,this.bindMatrixInverse=new We,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Wl),this.boundingBox.expandByPoint(Wl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Jn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Wl),this.boundingSphere.expandByPoint(Wl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Iu.copy(this.boundingSphere),Iu.applyMatrix4(s),e.ray.intersectsSphere(Iu)!==!1&&(Kp.copy(s).invert(),Pu.copy(e.ray).applyMatrix4(Kp),!(this.boundingBox!==null&&Pu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Pu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new At,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Nu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Om?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ne("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Xp.fromBufferAttribute(s.attributes.skinIndex,e),qp.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(ua.copy(t),t.set(0,0,0,0)):(ua.set(t.x,t.y,t.z,1),t.set(0,0,0)),ua.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=qp.getComponent(r);if(o!==0){let a=Xp.getComponent(r);Yp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(O_.copy(ua).applyMatrix4(Yp),o)}}return t.isVector4&&(t.w=ua.w),t.applyMatrix4(this.bindMatrixInverse)}},Io=class extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Po=class extends un{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Jt,h=Jt,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},$p=new We,B_=new We,Ra=class i{constructor(e=[],t=[]){this.uuid=as(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ne("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new We)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new We;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:B_;$p.multiplyMatrices(a,t[r]),$p.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Po(t,e,e,Ai,ci);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(Ne("Skeleton: No bone found with UUID:",r),o=new Io),this.bones.push(o),this.boneInverses.push(new We().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},As=class extends It{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},go=new We,Zp=new We,Xl=[],Jp=new Vn,z_=new We,fa=new Be,da=new Jn,ai=class extends Be{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new As(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,z_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,go),Jp.copy(e.boundingBox).applyMatrix4(go),this.boundingBox.union(Jp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,go),da.copy(e.boundingSphere).applyMatrix4(go),this.boundingSphere.union(da)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(fa.geometry=this.geometry,fa.material=this.material,fa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),da.copy(this.boundingSphere),da.applyMatrix4(n),e.ray.intersectsSphere(da)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,go),Zp.multiplyMatrices(n,go),fa.matrixWorld=Zp,fa.raycast(e,Xl);for(let o=0,a=Xl.length;o<a;o++){let l=Xl[o];l.instanceId=r,l.object=this,t.push(l)}Xl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new As(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Po(new Float32Array(s*this.count),s,this.count,Nc,ci));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Sr=new Jn,k_=new Ye(.5,.5),ql=new N,sr=class{constructor(e=new Ln,t=new Ln,n=new Ln,s=new Ln,r=new Ln,o=new Ln){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Si,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],_=r[9],m=r[10],g=r[11],M=r[12],E=r[13],b=r[14],w=r[15];if(s[0].setComponents(c-o,f-h,g-p,w-M).normalize(),s[1].setComponents(c+o,f+h,g+p,w+M).normalize(),s[2].setComponents(c+a,f+u,g+_,w+E).normalize(),s[3].setComponents(c-a,f-u,g-_,w-E).normalize(),n)s[4].setComponents(l,d,m,b).normalize(),s[5].setComponents(c-l,f-d,g-m,w-b).normalize();else if(s[4].setComponents(c-l,f-d,g-m,w-b).normalize(),t===Si)s[5].setComponents(c+l,f+d,g+m,w+b).normalize();else if(t===So)s[5].setComponents(l,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(e){Sr.center.set(0,0,0);let t=k_.distanceTo(e.center);return Sr.radius=.7071067811865476+t,Sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ql.x=s.normal.x>0?e.max.x:e.min.x,ql.y=s.normal.y>0?e.max.y:e.min.y,ql.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ql)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},jp=new We,uc=class i{constructor(){this.coordinateSystem=Si,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];jp.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new sr),n[s].setFromProjectionMatrix(jp,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new sr),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}},rr=class extends Wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},fc=new N,dc=new N,Qp=new We,pa=new Ir,Yl=new Jn,Lu=new N,em=new N,Pr=class extends yt{constructor(e=new Ft,t=new rr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)fc.fromBufferAttribute(t,s-1),dc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=fc.distanceTo(dc);e.setAttribute("lineDistance",new ut(n,1))}else Ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yl.copy(n.boundingSphere),Yl.applyMatrix4(s),Yl.radius+=r,e.ray.intersectsSphere(Yl)===!1)return;Qp.copy(s).invert(),pa.copy(e.ray).applyMatrix4(Qp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=f,m=p-1;_<m;_+=c){let g=h.getX(_),M=h.getX(_+1),E=Kl(this,e,pa,l,g,M,_);E&&t.push(E)}if(this.isLineLoop){let _=h.getX(p-1),m=h.getX(f),g=Kl(this,e,pa,l,_,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=f,m=p-1;_<m;_+=c){let g=Kl(this,e,pa,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){let _=Kl(this,e,pa,l,p-1,f,p-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};tm=new N,nm=new N,Lr=class extends Pr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)tm.fromBufferAttribute(t,s),nm.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+tm.distanceTo(nm);e.setAttribute("lineDistance",new ut(n,1))}else Ne("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ca=class extends Pr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Lo=class extends Wn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},im=new We,Ou=new Ir,$l=new Jn,Zl=new N,Dr=class extends yt{constructor(e=new Ft,t=new Lo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$l.copy(n.boundingSphere),$l.applyMatrix4(s),$l.radius+=r,e.ray.intersectsSphere($l)===!1)return;im.copy(s).invert(),Ou.copy(e.ray).applyMatrix4(im);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,_=f;p<_;p++){let m=c.getX(p);Zl.fromBufferAttribute(u,m),sm(Zl,m,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,_=f;p<_;p++)Zl.fromBufferAttribute(u,p),sm(Zl,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};Ia=class extends un{constructor(e=[],t=Vr,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},li=class extends un{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Rs=class extends un{constructor(e,t,n=Xi,s,r,o,a=Jt,l=Jt,c,h=ws,u=1){if(h!==ws&&h!==Ns)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Pa=class extends Rs{constructor(e,t=Xi,n=Vr,s,r,o=Jt,a=Jt,l,c=ws){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},La=class extends un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Sn=class i extends Ft{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(u,2));function p(_,m,g,M,E,b,w,R,y,A,F){let C=b/y,P=w/A,O=b/2,z=w/2,L=R/2,W=y+1,Z=A+1,q=0,re=0,$=new N;for(let ne=0;ne<Z;ne++){let se=ne*P-z;for(let De=0;De<W;De++){let Ze=De*C-O;$[_]=Ze*M,$[m]=se*E,$[g]=L,c.push($.x,$.y,$.z),$[_]=0,$[m]=0,$[g]=R>0?1:-1,h.push($.x,$.y,$.z),u.push(De/y),u.push(1-ne/A),q+=1}}for(let ne=0;ne<A;ne++)for(let se=0;se<y;se++){let De=d+se+W*ne,Ze=d+se+W*(ne+1),Q=d+(se+1)+W*(ne+1),be=d+(se+1)+W*ne;l.push(De,Ze,be),l.push(Ze,Q,be),re+=6}a.addGroup(f,re,F),f+=re,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Da=class i extends Ft{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+r,_=s+1,m=new N,g=new N;for(let M=0;M<=p;M++){let E=0,b=0,w=0,R=0;if(M<=n){let F=M/n,C=F*Math.PI/2;b=-h-e*Math.cos(C),w=e*Math.sin(C),R=-e*Math.cos(C),E=F*u}else if(M<=n+r){let F=(M-n)/r;b=-h+F*t,w=e,R=0,E=u+F*d}else{let F=(M-n-r)/n,C=F*Math.PI/2;b=h+e*Math.sin(C),w=e*Math.cos(C),R=e*Math.sin(C),E=u+d+F*u}let y=Math.max(0,Math.min(1,E/f)),A=0;M===0?A=.5/s:M===p&&(A=-.5/s);for(let F=0;F<=s;F++){let C=F/s,P=C*Math.PI*2,O=Math.sin(P),z=Math.cos(P);g.x=-w*z,g.y=b,g.z=w*O,a.push(g.x,g.y,g.z),m.set(-w*z,R,w*O),m.normalize(),l.push(m.x,m.y,m.z),c.push(C+A,y)}if(M>0){let F=(M-1)*_;for(let C=0;C<s;C++){let P=F+C,O=F+C+1,z=M*_+C,L=M*_+C+1;o.push(P,O,z),o.push(O,L,z)}}}this.setIndex(o),this.setAttribute("position",new ut(a,3)),this.setAttribute("normal",new ut(l,3)),this.setAttribute("uv",new ut(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},ns=class i extends Ft{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new N,h=new Ye;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ut(o,3)),this.setAttribute("normal",new ut(a,3)),this.setAttribute("uv",new ut(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},qt=class i extends Ft{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,_=[],m=n/2,g=0;M(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new ut(u,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(f,2));function M(){let b=new N,w=new N,R=0,y=(t-e)/n;for(let A=0;A<=r;A++){let F=[],C=A/r,P=C*(t-e)+e;for(let O=0;O<=s;O++){let z=O/s,L=z*l+a,W=Math.sin(L),Z=Math.cos(L);w.x=P*W,w.y=-C*n+m,w.z=P*Z,u.push(w.x,w.y,w.z),b.set(W,y,Z).normalize(),d.push(b.x,b.y,b.z),f.push(z,1-C),F.push(p++)}_.push(F)}for(let A=0;A<s;A++)for(let F=0;F<r;F++){let C=_[F][A],P=_[F+1][A],O=_[F+1][A+1],z=_[F][A+1];(e>0||F!==0)&&(h.push(C,P,z),R+=3),(t>0||F!==r-1)&&(h.push(P,O,z),R+=3)}c.addGroup(g,R,0),g+=R}function E(b){let w=p,R=new Ye,y=new N,A=0,F=b===!0?e:t,C=b===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*C,0),d.push(0,C,0),f.push(.5,.5),p++;let P=p;for(let O=0;O<=s;O++){let L=O/s*l+a,W=Math.cos(L),Z=Math.sin(L);y.x=F*Z,y.y=m*C,y.z=F*W,u.push(y.x,y.y,y.z),d.push(0,C,0),R.x=W*.5+.5,R.y=Z*.5*C+.5,f.push(R.x,R.y),p++}for(let O=0;O<s;O++){let z=w+O,L=P+O;b===!0?h.push(L,L+1,z):h.push(L+1,L,z),A+=3}c.addGroup(g,A,b===!0?1:2),g+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Vi=class i extends qt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},pc=class i extends Ft{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new ut(r,3)),this.setAttribute("normal",new ut(r.slice(),3)),this.setAttribute("uv",new ut(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let E=new N,b=new N,w=new N;for(let R=0;R<t.length;R+=3)f(t[R+0],E),f(t[R+1],b),f(t[R+2],w),l(E,b,w,M)}function l(M,E,b,w){let R=w+1,y=[];for(let A=0;A<=R;A++){y[A]=[];let F=M.clone().lerp(b,A/R),C=E.clone().lerp(b,A/R),P=R-A;for(let O=0;O<=P;O++)O===0&&A===R?y[A][O]=F:y[A][O]=F.clone().lerp(C,O/P)}for(let A=0;A<R;A++)for(let F=0;F<2*(R-A)-1;F++){let C=Math.floor(F/2);F%2===0?(d(y[A][C+1]),d(y[A+1][C]),d(y[A][C])):(d(y[A][C+1]),d(y[A+1][C+1]),d(y[A+1][C]))}}function c(M){let E=new N;for(let b=0;b<r.length;b+=3)E.x=r[b+0],E.y=r[b+1],E.z=r[b+2],E.normalize().multiplyScalar(M),r[b+0]=E.x,r[b+1]=E.y,r[b+2]=E.z}function h(){let M=new N;for(let E=0;E<r.length;E+=3){M.x=r[E+0],M.y=r[E+1],M.z=r[E+2];let b=m(M)/2/Math.PI+.5,w=g(M)/Math.PI+.5;o.push(b,1-w)}p(),u()}function u(){for(let M=0;M<o.length;M+=6){let E=o[M+0],b=o[M+2],w=o[M+4],R=Math.max(E,b,w),y=Math.min(E,b,w);R>.9&&y<.1&&(E<.2&&(o[M+0]+=1),b<.2&&(o[M+2]+=1),w<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,E){let b=M*3;E.x=e[b+0],E.y=e[b+1],E.z=e[b+2]}function p(){let M=new N,E=new N,b=new N,w=new N,R=new Ye,y=new Ye,A=new Ye;for(let F=0,C=0;F<r.length;F+=9,C+=6){M.set(r[F+0],r[F+1],r[F+2]),E.set(r[F+3],r[F+4],r[F+5]),b.set(r[F+6],r[F+7],r[F+8]),R.set(o[C+0],o[C+1]),y.set(o[C+2],o[C+3]),A.set(o[C+4],o[C+5]),w.copy(M).add(E).add(b).divideScalar(3);let P=m(w);_(R,C+0,M,P),_(y,C+2,E,P),_(A,C+4,b,P)}}function _(M,E,b,w){w<0&&M.x===1&&(o[E]=M.x-1),b.x===0&&b.z===0&&(o[E]=w/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},Xn=class i extends pc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Fr=class i extends Ft{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],p=[],_=[],m=[];for(let g=0;g<h;g++){let M=g*d-o;for(let E=0;E<c;E++){let b=E*u-r;p.push(b,-M,0),_.push(0,0,1),m.push(E/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<a;M++){let E=M+c*g,b=M+c*(g+1),w=M+1+c*(g+1),R=M+1+c*g;f.push(E,b,R),f.push(b,w,R)}this.setIndex(f),this.setAttribute("position",new ut(p,3)),this.setAttribute("normal",new ut(_,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Cs=class i extends Ft{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new N,p=new Ye;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let g=r+m/n*o;f.x=u*Math.cos(g),f.y=u*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}u+=d}for(let _=0;_<s;_++){let m=_*(n+1);for(let g=0;g<n;g++){let M=g+m,E=M,b=M+n+1,w=M+n+2,R=M+1;a.push(E,b,R),a.push(b,w,R)}}this.setIndex(a),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(c,3)),this.setAttribute("uv",new ut(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Gt=class i extends Ft{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new N,d=new N,f=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){let M=[],E=g/n,b=o+E*a,w=e*Math.cos(b),R=Math.sqrt(e*e-w*w),y=0;g===0&&o===0?y=.5/t:g===n&&l===Math.PI&&(y=-.5/t);for(let A=0;A<=t;A++){let F=A/t,C=s+F*r;u.x=-R*Math.cos(C),u.y=w,u.z=R*Math.sin(C),p.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(F+y,1-E),M.push(c++)}h.push(M)}for(let g=0;g<n;g++)for(let M=0;M<t;M++){let E=h[g][M+1],b=h[g][M],w=h[g+1][M],R=h[g+1][M+1];(g!==0||o>0)&&f.push(E,b,R),(g!==n-1||l<Math.PI)&&f.push(b,w,R)}this.setIndex(f),this.setAttribute("position",new ut(p,3)),this.setAttribute("normal",new ut(_,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Wi=class i extends Ft{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new N,f=new N,p=new N;for(let _=0;_<=n;_++){let m=o+_/n*a;for(let g=0;g<=s;g++){let M=g/s*r;f.x=(e+t*Math.cos(m))*Math.cos(M),f.y=(e+t*Math.cos(m))*Math.sin(M),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),u.push(g/s),u.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=s;m++){let g=(s+1)*_+m-1,M=(s+1)*(_-1)+m-1,E=(s+1)*(_-1)+m,b=(s+1)*_+m;l.push(g,M,b),l.push(M,E,b)}this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};t0={clone:qr,merge:Dn},G_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,V_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ti=class extends Wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=G_,this.fragmentShader=V_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qr(e.uniforms),this.uniformsGroups=H_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Te().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ye().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new At().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ke().fromArray(s.value);break;case"m4":this.uniforms[n].value=new We().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},mc=class extends Ti{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Nr=class extends Wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$a,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},qn=class extends Nr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ye(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return wr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){wr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Yt=class extends Wn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$a,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=Rc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},gc=class extends Wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},xc=class extends Wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};is=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},_c=class extends is{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Er,endingEnd:Er}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Tr:r=e,a=2*t-n;break;case _a:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Tr:o=e,l=2*n-t;break;case _a:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),_=p*p,m=_*p,g=-d*m+2*d*_-d*p,M=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*p+1,E=(-1-f)*m+(1.5+f)*_+.5*p,b=f*m-f*_;for(let w=0;w!==a;++w)r[w]=g*o[h+w]+M*o[c+w]+E*o[l+w]+b*o[u+w];return r}},Fa=class extends is{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},yc=class extends is{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},vc=class extends is{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-t)/(s-t),_=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*_+o[l+m]*p;return r}let d=a*2,f=e-1;for(let p=0;p!==a;++p){let _=o[c+p],m=o[l+p],g=f*d+p*2,M=u[g],E=u[g+1],b=e*d+p*2,w=h[b],R=h[b+1],y=Y_(n,t,M,w,s);r[p]=n0(y,_,E,R,m)}return r}};jn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=tr(t,this.TimeBufferType),this.values=tr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:tr(e.times,Array),values:tr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),ma(e.settings)&&(n.settings={inTangents:tr(e.settings.inTangents,Array),outTangents:tr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new yc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _c(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new vc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ar:t=this.InterpolantFactoryMethodDiscrete;break;case Rr:t=this.InterpolantFactoryMethodLinear;break;case Ql:t=this.InterpolantFactoryMethodSmooth;break;case Uu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ne("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ar;case this.InterpolantFactoryMethodLinear:return Rr;case this.InterpolantFactoryMethodSmooth:return Ql;case this.InterpolantFactoryMethodBezier:return Uu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;ma(this.settings)&&(am(this.settings.inTangents,e),am(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;ma(this.settings)&&(lm(this.settings.inTangents,e),lm(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ve("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ve("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&s_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ve("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ql,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let _=t[u+p];if(_!==t[d+p]||_!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,ma(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};jn.prototype.ValueTypeName="";jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=Rr;Is=class extends jn{constructor(e,t,n){super(e,t,n)}};Is.prototype.ValueTypeName="bool";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=Ar;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;Na=class extends jn{constructor(e,t,n,s){super(e,t,n,s)}};Na.prototype.ValueTypeName="color";Ps=class extends jn{constructor(e,t,n,s){super(e,t,n,s)}};Ps.prototype.ValueTypeName="number";Mc=class extends is{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)vn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ls=class extends jn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Mc(this.times,this.values,this.getValueSize(),e)}};Ls.prototype.ValueTypeName="quaternion";Ls.prototype.InterpolantFactoryMethodSmooth=void 0;Ds=class extends jn{constructor(e,t,n){super(e,t,n)}};Ds.prototype.ValueTypeName="string";Ds.prototype.ValueBufferType=Array;Ds.prototype.DefaultInterpolation=Ar;Ds.prototype.InterpolantFactoryMethodLinear=void 0;Ds.prototype.InterpolantFactoryMethodSmooth=void 0;or=class extends jn{constructor(e,t,n,s){super(e,t,n,s)}};or.prototype.ValueTypeName="vector";Ur=class{constructor(e="",t=-1,n=[],s=mh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=as(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push($_(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(jn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=W_(l);l=om(l,1,h),c=om(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ps(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};ts={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(cm(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!cm(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};bc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},i0=new bc,ss=class{constructor(e){this.manager=e!==void 0?e:i0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};ss.DEFAULT_MATERIAL_NAME="__DEFAULT";Es={},Bu=class extends Error{constructor(e,t){super(e),this.response=t}},Do=class extends ss{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ts.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Es[e]!==void 0){Es[e].push({onLoad:t,onProgress:n,onError:s});return}Es[e]=[],Es[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ne("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Es[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,_=0,m=new ReadableStream({start(g){M();function M(){u.read().then(({done:E,value:b})=>{if(E)g.close();else{_+=b.byteLength;let w=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let R=0,y=h.length;R<y;R++){let A=h[R];A.onProgress&&A.onProgress(w)}g.enqueue(b),M()}},E=>{g.error(E)})}}});return new Response(m)}else throw new Bu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{ts.add(`file:${e}`,c);let h=Es[e];delete Es[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Es[e];if(h===void 0)throw this.manager.itemError(e),c;delete Es[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},xo=new WeakMap,Sc=class extends ss{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ts.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=xo.get(o);u===void 0&&(u=[],xo.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=Eo("img");function l(){h(),t&&t(this);let u=xo.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}xo.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),ts.remove(`image:${e}`);let d=xo.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(u)}xo.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ts.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}},Ua=class extends ss{constructor(e){super(e)}load(e,t,n,s){let r=new un,o=new Sc(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Or=class extends yt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Oa=class extends Or{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Du=new We,hm=new N,um=new N,Fo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.mapType=Qn,this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sr,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;hm.setFromMatrixPosition(e.matrixWorld),t.position.copy(hm),um.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(um),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Du.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Du,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===So||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Du)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Jl=new N,jl=new vn,es=new N,Ba=class extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=Si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Jl,jl,es),es.x===1&&es.y===1&&es.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jl,jl,es.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Jl,jl,es),es.x===1&&es.y===1&&es.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jl,jl,es.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},er=new N,fm=new Ye,dm=new Ye,cn=class extends Ba{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ga*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(er.x,er.y).multiplyScalar(-e/er.z),er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(er.x,er.y).multiplyScalar(-e/er.z)}getViewSize(e,t){return this.getViewBounds(e,fm,dm),t.subVectors(dm,fm)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ga*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},zu=class extends Fo{constructor(){super(new cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Cr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},za=class extends Or{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new zu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},ku=class extends Fo{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0}},Br=class extends Or{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ku}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},zr=class extends Ba{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Hu=class extends Fo{constructor(){super(new zr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},kr=class extends Or{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new Hu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Fs=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Fu=new WeakMap,ka=class extends ss{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ne("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ne("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ts.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{Fu.has(o)===!0?(s&&s(Fu.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ts.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Fu.set(l,c),ts.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ts.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},_o=-90,yo=1,No=class extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new cn(_o,yo,e,t);s.layers=this.layers,this.add(s);let r=new cn(_o,yo,e,t);r.layers=this.layers,this.add(r);let o=new cn(_o,yo,e,t);o.layers=this.layers,this.add(o);let a=new cn(_o,yo,e,t);a.layers=this.layers,this.add(a);let l=new cn(_o,yo,e,t);l.layers=this.layers,this.add(l);let c=new cn(_o,yo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===So)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ec=class extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Tc=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){vn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;vn.multiplyQuaternionsFlat(e,o,e,t,e,n),vn.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*s}}},bf="\\[\\]\\.:\\/",Z_=new RegExp("["+bf+"]","g"),Sf="[^"+bf+"]",J_="[^"+bf.replace("\\.","")+"]",j_=/((?:WC+[\/:])*)/.source.replace("WC",Sf),Q_=/(WCOD+)?/.source.replace("WCOD",J_),ey=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sf),ty=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sf),ny=new RegExp("^"+j_+Q_+ey+ty+"$"),iy=["material","materials","bones","map"],Gu=class{constructor(e,t,n){let s=n||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ct=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Z_,"")}static parseTrackName(e){let t=ny.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);iy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ne("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=Gu;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];wc=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Er,endingEnd:Er};for(let c=0;c!==o;++c){let h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=zm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Hm:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case mh:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===km;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===Bm){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=Tr,s.endingEnd=Tr):(e?s.endingStart=this.zeroSlopeAtStart?Tr:Er:s.endingStart=_a,t?s.endingEnd=this.zeroSlopeAtEnd?Tr:Er:s.endingEnd=_a)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},sy=new Float32Array(1),Uo=class extends Gi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let d=s[u],f=d.name,p=h[f];if(p!==void 0)++p.referenceCount,o[u]=p;else{if(p=o[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}let _=t&&t._propertyBindings[u].binding.parsedPath;p=new Tc(Ct.create(n,f,_),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),o[u]=p}a[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Fa(new Float32Array(2),new Float32Array(2),1,sy),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?Ur.findByName(s,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=mh),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new wc(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?Ur.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},Cf=class Cf{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Cf.prototype.isMatrix2=!0;Vu=Cf;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187")});function T0(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ay(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],_=u[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}function GM(i,e,t,n,s,r){let o=new Te(0),a=s===!0?0:1,l,c,h=null,u=0,d=null;function f(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){let b=M.backgroundBlurriness>0;E=e.get(E,b)}return E}function p(M){let E=!1,b=f(M);b===null?m(o,a):b&&b.isColor&&(m(b,1),E=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(M,E){let b=f(E);b&&b.isCubeTexture?(c===void 0&&(c=new Be(new Sn(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:qr(cs.backgroundCube.uniforms),vertexShader:cs.backgroundCube.vertexShader,fragmentShader:cs.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,R,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(HM.makeRotationFromEuler(E.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(w0),c.material.toneMapped=it.getTransfer(b.colorSpace)!==Mt,(h!==b||u!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Be(new Fr(2,2),new Ti({name:"BackgroundMaterial",uniforms:qr(cs.background.uniforms),vertexShader:cs.background.vertexShader,fragmentShader:cs.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=it.getTransfer(b.colorSpace)!==Mt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,u=b.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,E){M.getRGB(_h,Mf(i)),t.buffers.color.setClear(_h.r,_h.g,_h.b,E,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,E=1){o.set(M),a=E,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:p,addToRenderList:_,dispose:g}}function VM(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(P,O,z,L,W){let Z=!1,q=u(P,L,z,O);r!==q&&(r=q,c(r.object)),Z=f(P,L,z,W),Z&&p(P,L,z,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,b(P,O,z,L),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function u(P,O,z,L){let W=L.wireframe===!0,Z=n[O.id];Z===void 0&&(Z={},n[O.id]=Z);let q=P.isInstancedMesh===!0?P.id:0,re=Z[q];re===void 0&&(re={},Z[q]=re);let $=re[z.id];$===void 0&&($={},re[z.id]=$);let ne=$[W];return ne===void 0&&(ne=d(l()),$[W]=ne),ne}function d(P){let O=[],z=[],L=[];for(let W=0;W<t;W++)O[W]=0,z[W]=0,L[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:z,attributeDivisors:L,object:P,attributes:{},index:null}}function f(P,O,z,L){let W=r.attributes,Z=O.attributes,q=0,re=z.getAttributes();for(let $ in re)if(re[$].location>=0){let se=W[$],De=Z[$];if(De===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(De=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(De=P.instanceColor)),se===void 0||se.attribute!==De||De&&se.data!==De.data)return!0;q++}return r.attributesNum!==q||r.index!==L}function p(P,O,z,L){let W={},Z=O.attributes,q=0,re=z.getAttributes();for(let $ in re)if(re[$].location>=0){let se=Z[$];se===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(se=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(se=P.instanceColor));let De={};De.attribute=se,se&&se.data&&(De.data=se.data),W[$]=De,q++}r.attributes=W,r.attributesNum=q,r.index=L}function _(){let P=r.newAttributes;for(let O=0,z=P.length;O<z;O++)P[O]=0}function m(P){g(P,0)}function g(P,O){let z=r.newAttributes,L=r.enabledAttributes,W=r.attributeDivisors;z[P]=1,L[P]===0&&(i.enableVertexAttribArray(P),L[P]=1),W[P]!==O&&(i.vertexAttribDivisor(P,O),W[P]=O)}function M(){let P=r.newAttributes,O=r.enabledAttributes;for(let z=0,L=O.length;z<L;z++)O[z]!==P[z]&&(i.disableVertexAttribArray(z),O[z]=0)}function E(P,O,z,L,W,Z,q){q===!0?i.vertexAttribIPointer(P,O,z,W,Z):i.vertexAttribPointer(P,O,z,L,W,Z)}function b(P,O,z,L){_();let W=L.attributes,Z=z.getAttributes(),q=O.defaultAttributeValues;for(let re in Z){let $=Z[re];if($.location>=0){let ne=W[re];if(ne===void 0&&(re==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),re==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor)),ne!==void 0){let se=ne.normalized,De=ne.itemSize,Ze=e.get(ne);if(Ze===void 0)continue;let Q=Ze.buffer,be=Ze.type,Ie=Ze.bytesPerElement,ze=be===i.INT||be===i.UNSIGNED_INT||ne.gpuType===Lc;if(ne.isInterleavedBufferAttribute){let Se=ne.data,je=Se.isInterleavedBuffer===!0?Se.stride:Se.itemSize,tn=ne.offset;if(Se.isInstancedInterleavedBuffer||Se.isInstancedBufferAttribute){for(let Ge=0;Ge<$.locationSize;Ge++)g($.location+Ge,Se.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ge=0;Ge<$.locationSize;Ge++)m($.location+Ge);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let Ge=0;Ge<$.locationSize;Ge++)E($.location+Ge,De/$.locationSize,be,se,je*Ie,(tn+De/$.locationSize*Ge)*Ie,ze)}else{if(ne.isInstancedBufferAttribute){for(let Se=0;Se<$.locationSize;Se++)g($.location+Se,ne.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Se=0;Se<$.locationSize;Se++)m($.location+Se);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let Se=0;Se<$.locationSize;Se++)E($.location+Se,De/$.locationSize,be,se,De*Ie,De/$.locationSize*Se*Ie,ze)}}else if(q!==void 0){let se=q[re];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv($.location,se);break;case 3:i.vertexAttrib3fv($.location,se);break;case 4:i.vertexAttrib4fv($.location,se);break;default:i.vertexAttrib1fv($.location,se)}}}}M()}function w(){F();for(let P in n){let O=n[P];for(let z in O){let L=O[z];for(let W in L){let Z=L[W];for(let q in Z)h(Z[q].object),delete Z[q];delete L[W]}}delete n[P]}}function R(P){if(n[P.id]===void 0)return;let O=n[P.id];for(let z in O){let L=O[z];for(let W in L){let Z=L[W];for(let q in Z)h(Z[q].object),delete Z[q];delete L[W]}}delete n[P.id]}function y(P){for(let O in n){let z=n[O];for(let L in z){let W=z[L];if(W[P.id]===void 0)continue;let Z=W[P.id];for(let q in Z)h(Z[q].object),delete Z[q];delete W[P.id]}}}function A(P){for(let O in n){let z=n[O],L=P.isInstancedMesh===!0?P.id:0,W=z[L];if(W!==void 0){for(let Z in W){let q=W[Z];for(let re in q)h(q[re].object),delete q[re];delete W[Z]}delete z[L],Object.keys(z).length===0&&delete n[O]}}}function F(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfObject:A,releaseStatesOfProgram:y,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function WM(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function XM(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let y=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(y){return!(y!==Ai&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){let A=y===qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==Qn&&y!==ci&&!A&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ne("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Ne("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:b,maxSamples:w,samples:R}}function qM(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Ln,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,E=M*4,b=g.clippingState||null;l.value=b,b=h(p,d,E,f);for(let w=0;w!==E;++w)b[w]=t[w];g.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let g=f+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<g)&&(m=new Float32Array(g));for(let E=0,b=f;E!==_;++E,b+=4)o.copy(u[E]).applyMatrix4(M,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function r0(i,e,t){return new ja(i,{minFilter:wi,generateMipmaps:e,type:qi,colorSpace:Gn,depthBuffer:t})}function Qa(i,e,t){return new Ti({name:i,uniforms:e,vertexShader:nt.cube_vert,fragmentShader:t,side:En,blending:Hr,depthTest:!1,depthWrite:!1})}function jM(){return Qa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${A0}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function QM(){return Qa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:R0}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function e1(){return Qa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${KM}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function o0(){return Qa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function a0(){return Qa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function t1(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Cc||f===Ic)if(e.has(d)){let p=e.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let _=new ja(p.height);return _.fromEquirectangularTexture(i,d),e.set(d,_),d.addEventListener("dispose",c),a(_.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===Cc||f===Ic,_=f===Vr||f===zo;if(p||_){let m=t.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new vh(i)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let M=d.image;return p&&M&&M.height>0||_&&M&&l(M)?(n===null&&(n=new vh(i)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===Cc?d.mapping=Vr:f===Ic&&(d.mapping=zo),d}function l(d){let f=0,p=6;for(let _=0;_<p;_++)d[_]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function n1(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&wr("WebGLRenderer: "+n+" extension not supported."),s}}}function i1(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let _=r.get(p);_&&(e.remove(_),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,_){return s[_.id]!==void 0||(_.addEventListener("dispose",a),s[_.id]=new WeakRef(_),o.register(_,_.id,_),t.memory.geometries++),_}function h(p){let _=p.attributes;for(let m in _)e.update(_[m],i.ARRAY_BUFFER)}function u(p){let _=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let M=_!==null?_.array.length:m.array.length/3-1,E=m.count>=65535?wa:Ta,b=new E(Math.ceil(M/3)*6,1),w=b.array;if(_!==null){let y=_.array;g=_.version;for(let A=0,F=0;A<M;A+=3){let C=y[A+0],P=y[A+1],O=y[A+2];w[F++]=C,w[F++]=P,w[F++]=P,w[F++]=O,w[F++]=O,w[F++]=C}}else{g=m.version;for(let y=0,A=0;y<M;y+=3){let F=y+0,C=y+1,P=y+2;w[A++]=F,w[A++]=C,w[A++]=C,w[A++]=P,w[A++]=P,w[A++]=F}}b.version=g;let R=r.get(p);R&&e.remove(R),r.set(p,b)}function d(p){let _=r.get(p);if(_){let m=p.index;m!==null&&_.version<m.version&&u(p)}else u(p);return r.get(p)}function f(){for(let p in s){let _=s[p].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function s1(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*o),t.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let _=0;for(let m=0;m<f;m++)_+=d[m];t.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function r1(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Ve("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function o1(i,e,t){let n=new WeakMap,s=new At;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let F=function(){y.dispose(),n.delete(a),a.removeEventListener("dispose",F)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],E=0;f===!0&&(E=1),p===!0&&(E=2),_===!0&&(E=3);let b=a.attributes.position.count*E,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let R=new Float32Array(b*w*4*u),y=new Ma(R,b,w,u);y.type=ci,y.needsUpdate=!0;let A=E*4;for(let C=0;C<u;C++){let P=m[C],O=g[C],z=M[C],L=b*w*4*C;for(let W=0;W<P.count;W++){let Z=W*A;f===!0&&(s.fromBufferAttribute(P,W),R[L+Z+0]=s.x,R[L+Z+1]=s.y,R[L+Z+2]=s.z,R[L+Z+3]=0),p===!0&&(s.fromBufferAttribute(O,W),R[L+Z+4]=s.x,R[L+Z+5]=s.y,R[L+Z+6]=s.z,R[L+Z+7]=0),_===!0&&(s.fromBufferAttribute(z,W),R[L+Z+8]=s.x,R[L+Z+9]=s.y,R[L+Z+10]=s.z,R[L+Z+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:y,size:new Ye(b,w)},n.set(a,d),a.addEventListener("dispose",F)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function a1(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}function c1(i,e,t,n,s,r){let o=new oi(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Ft;h.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ut([0,2,0,0,2,0],2));let u=new mc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Be(h,u),f=new zr(-1,1,1,-1,0,1),p=null,_=null,m=!1,g,M=null,E=[],b=!1;this.setSize=function(w,R){o.setSize(w,R),a!==null&&a.setSize(w,R),l!==null&&l.setSize(w,R);for(let y=0;y<E.length;y++){let A=E[y];A.setSize&&A.setSize(w,R)}},this.setEffects=function(w){E=w,b=E.length>0&&E[0].isRenderPass===!0;let R=o.width,y=o.height;E.length>0&&a===null&&(a=new oi(R,y,{type:qi,depthBuffer:!1,stencilBuffer:!1}),l=new oi(R,y,{type:qi,depthBuffer:!1,stencilBuffer:!1}));let A=s===!0&&E.some(F=>F.needsDepthTexture===!0);A!==(o.depthTexture!==null)&&(A===!0&&c===null&&(c=new Rs(R,y),r===!0&&(c.format=Ns,c.type=Xr)),o.dispose(),o.depthTexture=A?c:null,o.resolveDepthBuffer=A,o.storeMultisampledDepthBuffer=A);for(let F=0;F<E.length;F++){let C=E[F];C.setSize&&C.setSize(R,y),A&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(w,R){if(m||w.toneMapping===os&&E.length===0)return!1;if(M=R,R!==null){let y=R.width,A=R.height;(o.width!==y||o.height!==A)&&this.setSize(y,A)}return b===!1&&w.setRenderTarget(o),g=w.toneMapping,w.toneMapping=os,!0},this.hasRenderPass=function(){return b},this.end=function(w,R){w.toneMapping=g,m=!0;let y=o,A=a;for(let F=0;F<E.length;F++){let C=E[F];C.enabled!==!1&&(C.render(w,A,y,R),C.needsSwap!==!1&&(y=A,A=A===a?l:a))}if(p!==w.outputColorSpace||_!==w.toneMapping){p=w.outputColorSpace,_=w.toneMapping,u.defines={},it.getTransfer(p)===Mt&&(u.defines.SRGB_TRANSFER="");let F=l1[_];F&&(u.defines[F]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=y.texture,w.setRenderTarget(M),w.render(d,f),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}function Wo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=l0[s];if(r===void 0&&(r=new Float32Array(s),l0[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function fn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function dn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function bh(i,e){let t=c0[e];t===void 0&&(t=new Int32Array(e),c0[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function h1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function u1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;i.uniform2fv(this.addr,e),dn(t,e)}}function f1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;i.uniform3fv(this.addr,e),dn(t,e)}}function d1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;i.uniform4fv(this.addr,e),dn(t,e)}}function p1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,n))return;f0.set(n),i.uniformMatrix2fv(this.addr,!1,f0),dn(t,n)}}function m1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,n))return;u0.set(n),i.uniformMatrix3fv(this.addr,!1,u0),dn(t,n)}}function g1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,n))return;h0.set(n),i.uniformMatrix4fv(this.addr,!1,h0),dn(t,n)}}function x1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function _1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;i.uniform2iv(this.addr,e),dn(t,e)}}function y1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;i.uniform3iv(this.addr,e),dn(t,e)}}function v1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;i.uniform4iv(this.addr,e),dn(t,e)}}function M1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function b1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;i.uniform2uiv(this.addr,e),dn(t,e)}}function S1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;i.uniform3uiv(this.addr,e),dn(t,e)}}function E1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;i.uniform4uiv(this.addr,e),dn(t,e)}}function Sh(i){return i.version===0&&(i.compareFunction=pf,i.needsUpdate=!0),i}function T1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Sh(I0):r=C0,t.setTexture2D(e||r,s)}function w1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||D0,s)}function A1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Sh(P0):r=F0,t.setTextureCube(e||r,s)}function R1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||L0,s)}function C1(i){switch(i){case 5126:return h1;case 35664:return u1;case 35665:return f1;case 35666:return d1;case 35674:return p1;case 35675:return m1;case 35676:return g1;case 5124:case 35670:return x1;case 35667:case 35671:return _1;case 35668:case 35672:return y1;case 35669:case 35673:return v1;case 5125:return M1;case 36294:return b1;case 36295:return S1;case 36296:return E1;case 35678:case 36198:case 36298:case 36306:case 35682:return T1;case 35679:case 36299:case 36307:return w1;case 35680:case 36300:case 36308:case 36293:return A1;case 36289:case 36303:case 36311:case 36292:return R1}}function I1(i,e){i.uniform1fv(this.addr,e)}function P1(i,e){let t=Wo(e,this.size,2);i.uniform2fv(this.addr,t)}function L1(i,e){let t=Wo(e,this.size,3);i.uniform3fv(this.addr,t)}function D1(i,e){let t=Wo(e,this.size,4);i.uniform4fv(this.addr,t)}function F1(i,e){let t=Wo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function N1(i,e){let t=Wo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function U1(i,e){let t=Wo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function O1(i,e){i.uniform1iv(this.addr,e)}function B1(i,e){i.uniform2iv(this.addr,e)}function z1(i,e){i.uniform3iv(this.addr,e)}function k1(i,e){i.uniform4iv(this.addr,e)}function H1(i,e){i.uniform1uiv(this.addr,e)}function G1(i,e){i.uniform2uiv(this.addr,e)}function V1(i,e){i.uniform3uiv(this.addr,e)}function W1(i,e){i.uniform4uiv(this.addr,e)}function X1(i,e,t){let n=this.cache,s=e.length,r=bh(t,s);fn(n,r)||(i.uniform1iv(this.addr,r),dn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Sh(I0):o=C0;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function q1(i,e,t){let n=this.cache,s=e.length,r=bh(t,s);fn(n,r)||(i.uniform1iv(this.addr,r),dn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||D0,r[o])}function Y1(i,e,t){let n=this.cache,s=e.length,r=bh(t,s);fn(n,r)||(i.uniform1iv(this.addr,r),dn(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Sh(P0):o=F0;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function K1(i,e,t){let n=this.cache,s=e.length,r=bh(t,s);fn(n,r)||(i.uniform1iv(this.addr,r),dn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||L0,r[o])}function $1(i){switch(i){case 5126:return I1;case 35664:return P1;case 35665:return L1;case 35666:return D1;case 35674:return F1;case 35675:return N1;case 35676:return U1;case 5124:case 35670:return O1;case 35667:case 35671:return B1;case 35668:case 35672:return z1;case 35669:case 35673:return k1;case 5125:return H1;case 36294:return G1;case 36295:return V1;case 36296:return W1;case 35678:case 36198:case 36298:case 36306:case 35682:return X1;case 35679:case 36299:case 36307:return q1;case 35680:case 36300:case 36308:case 36293:return Y1;case 36289:case 36303:case 36311:case 36292:return K1}}function d0(i,e){i.seq.push(e),i.map[e.id]=e}function Z1(i,e,t){let n=i.name,s=n.length;for(Pf.lastIndex=0;;){let r=Pf.exec(n),o=Pf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){d0(t,c===void 0?new Df(a,i,e):new Ff(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Nf(a),d0(t,u)),t=u}}}function p0(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function Q1(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function eb(i){it._getMatrix(m0,it.workingColorSpace,i);let e=`mat3( ${m0.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(i)){case ya:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function g0(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Q1(i.getShaderSource(e),a)}else return r}function tb(i,e){let t=eb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function ib(i,e){let t=nb[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function sb(){it.getLuminanceCoefficients(yh);let i=yh.x.toFixed(4),e=yh.y.toFixed(4),t=yh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ja).join(`
`)}function ob(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ab(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ja(i){return i!==""}function x0(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function _0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Uf(i){return i.replace(lb,cb)}function cb(i,e){let t=nt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Uf(t)}function y0(i){return i.replace(hb,ub)}function ub(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function v0(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function db(i){return fb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function mb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":pb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}function xb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":gb[i.combine]||"ENVMAP_BLENDING_NONE"}function _b(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=db(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=mb(t),u=xb(t),d=rb(t),f=ob(r),p=s.createProgram(),_,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ja).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ja).join(`
`),m.length>0&&(m+=`
`)):(_=[v0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ja).join(`
`),m=[v0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==os?"#define TONE_MAPPING":"",t.toneMapping!==os?nt.tonemapping_pars_fragment:"",t.toneMapping!==os?ib("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,tb("linearToOutputTexel",t.outputColorSpace),sb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ja).join(`
`)),o=Uf(o),o=x0(o,t),o=_0(o,t),a=Uf(a),a=x0(a,t),a=_0(a,t),o=y0(o),a=y0(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===gf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=g+_+o,E=g+m+a,b=p0(s,s.VERTEX_SHADER,M),w=p0(s,s.FRAGMENT_SHADER,E);s.attachShader(p,b),s.attachShader(p,w),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function R(C){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(p)||"",O=s.getShaderInfoLog(b)||"",z=s.getShaderInfoLog(w)||"",L=P.trim(),W=O.trim(),Z=z.trim(),q=!0,re=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,b,w);else{let $=g0(s,b,"vertex"),ne=g0(s,w,"fragment");Ve("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+$+`
`+ne)}else L!==""?Ne("WebGLProgram: Program Info Log:",L):(W===""||Z==="")&&(re=!1);re&&(C.diagnostics={runnable:q,programLog:L,vertexShader:{log:W,prefix:_},fragmentShader:{log:Z,prefix:m}})}s.deleteShader(b),s.deleteShader(w),y=new Vo(s,p),A=ab(s,p)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(p,J1)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=j1++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=w,this}function vb(i){return i===ar||i===qa||i===Ya}function Mb(i,e,t,n,s,r){let o=new ba,a=new Of,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,A,F,C,P,O){let z=C.fog,L=P.geometry,W=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?C.environment:null,Z=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,q=e.get(y.envMap||W,Z),re=d[y.type],$=n.precision;y.precision!==null&&($=n.getMaxPrecision(y.precision),$!==y.precision&&Ne("WebGLProgram.getParameters:",y.precision,"not supported, using",$,"instead."));let ne=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,se=ne!==void 0?ne.length:0,De=0;L.morphAttributes.position!==void 0&&(De=1),L.morphAttributes.normal!==void 0&&(De=2),L.morphAttributes.color!==void 0&&(De=3);let Ze,Q,be,Ie;if(re){let ve=cs[re];Ze=ve.vertexShader,Q=ve.fragmentShader}else{Ze=y.vertexShader,Q=y.fragmentShader;let ve=a.getVertexShaderStage(y),wt=a.getFragmentShaderStage(y);a.update(y,ve,wt),be=ve.id,Ie=wt.id}let ze=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),je=P.isInstancedMesh===!0,tn=P.isBatchedMesh===!0,Ge=!!y.map,Tt=!!y.matcap,Pt=!!q,lt=Pt&&q.isPMREMTexture===!0,Mn=!!y.aoMap,on=!!y.lightMap,Zn=!!y.bumpMap&&y.wireframe===!1,Wt=!!y.normalMap,Qi=!!y.displacementMap,gn=!!y.emissiveMap,xi=!!y.metalnessMap,_i=!!y.roughnessMap,yi=y.anisotropy>0,B=y.clearcoat>0,vi=y.diffuseRoughness>0,kt=y.dispersion>0,Ht=y.retroreflectivity>0,xe=y.iridescence>0,an=y.sheen>0,ke=y.transmission>0,$e=yi&&!!y.anisotropyMap,I=B&&!!y.clearcoatMap,S=B&&!!y.clearcoatNormalMap,H=B&&!!y.clearcoatRoughnessMap,oe=vi&&!!y.diffuseRoughnessMap,te=xe&&!!y.iridescenceMap,he=xe&&!!y.iridescenceThicknessMap,me=an&&!!y.sheenColorMap,J=an&&!!y.sheenRoughnessMap,j=!!y.specularMap,fe=!!y.specularColorMap,D=!!y.specularIntensityMap,ee=ke&&!!y.transmissionMap,K=ke&&!!y.thicknessMap,de=!!y.gradientMap,ce=!!y.alphaMap,ue=y.alphaTest>0,Ue=!!y.alphaHash,tt=!!y.extensions,le=os;y.toneMapped&&(ze===null||ze.isXRRenderTarget===!0)&&(le=i.toneMapping);let Oe=lt?q.isCompressedCubeTexture?q.image[0].mipmaps:q.mipmaps:null,et={shaderID:re,shaderType:y.type,shaderName:y.name,vertexShader:Ze,fragmentShader:Q,defines:y.defines,customVertexShaderID:be,customFragmentShaderID:Ie,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:$,batching:tn,batchingColor:tn&&P._colorsTexture!==null,instancing:je,instancingColor:je&&P.instanceColor!==null,instancingMorph:je&&P.morphTexture!==null,outputColorSpace:ze===null?i.outputColorSpace:ze.isXRRenderTarget===!0?ze.texture.colorSpace:it.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ge,matcap:Tt,envMap:Pt,envMapMode:Pt&&q.mapping,envMapPMREM:lt,envMapMaxLod:lt?Oe.length-1:null,envMapSize:lt?Oe[0].width:null,aoMap:Mn,lightMap:on,bumpMap:Zn,normalMap:Wt,displacementMap:Qi,emissiveMap:gn,normalMapObjectSpace:Wt&&y.normalMapType===Vm,normalMapTangentSpace:Wt&&y.normalMapType===$a,packedNormalMap:Wt&&y.normalMapType===$a&&vb(y.normalMap.format),metalnessMap:xi,roughnessMap:_i,anisotropy:yi,anisotropyMap:$e,clearcoat:B,clearcoatMap:I,clearcoatNormalMap:S,clearcoatRoughnessMap:H,diffuseRoughness:vi,diffuseRoughnessMap:oe,dispersion:kt,retroreflection:Ht,iridescence:xe,iridescenceMap:te,iridescenceThicknessMap:he,sheen:an,sheenColorMap:me,sheenRoughnessMap:J,specularMap:j,specularColorMap:fe,specularIntensityMap:D,transmission:ke,transmissionMap:ee,thicknessMap:K,gradientMap:de,opaque:y.transparent===!1&&y.blending===Bo&&y.alphaToCoverage===!1,alphaMap:ce,alphaTest:ue,alphaHash:Ue,combine:y.combine,mapUv:Ge&&f(y.map.channel),aoMapUv:Mn&&f(y.aoMap.channel),lightMapUv:on&&f(y.lightMap.channel),bumpMapUv:Zn&&f(y.bumpMap.channel),normalMapUv:Wt&&f(y.normalMap.channel),displacementMapUv:Qi&&f(y.displacementMap.channel),emissiveMapUv:gn&&f(y.emissiveMap.channel),metalnessMapUv:xi&&f(y.metalnessMap.channel),roughnessMapUv:_i&&f(y.roughnessMap.channel),anisotropyMapUv:$e&&f(y.anisotropyMap.channel),clearcoatMapUv:I&&f(y.clearcoatMap.channel),clearcoatNormalMapUv:S&&f(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&f(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:oe&&f(y.diffuseRoughnessMap.channel),iridescenceMapUv:te&&f(y.iridescenceMap.channel),iridescenceThicknessMapUv:he&&f(y.iridescenceThicknessMap.channel),sheenColorMapUv:me&&f(y.sheenColorMap.channel),sheenRoughnessMapUv:J&&f(y.sheenRoughnessMap.channel),specularMapUv:j&&f(y.specularMap.channel),specularColorMapUv:fe&&f(y.specularColorMap.channel),specularIntensityMapUv:D&&f(y.specularIntensityMap.channel),transmissionMapUv:ee&&f(y.transmissionMap.channel),thicknessMapUv:K&&f(y.thicknessMap.channel),alphaMapUv:ce&&f(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Wt||yi),vertexNormals:!!L.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!L.attributes.uv&&(Ge||ce),fog:!!z,useFog:y.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||L.attributes.normal===void 0&&Wt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Se,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:De,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:O.filter(ve=>ve.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:Ge&&y.map.isVideoTexture===!0&&it.getTransfer(y.map.colorSpace)===Mt,decodeVideoTextureEmissive:gn&&y.emissiveMap.isVideoTexture===!0&&it.getTransfer(y.emissiveMap.colorSpace)===Mt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===bt,flipSided:y.side===En,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:tt&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&y.extensions.multiDraw===!0||tn)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return et.vertexUv1s=l.has(1),et.vertexUv2s=l.has(2),et.vertexUv3s=l.has(3),l.clear(),et}function _(y){let A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(let F in y.defines)A.push(F),A.push(y.defines[F]);return y.isRawShaderMaterial===!1&&(m(A,y),g(A,y),A.push(i.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function m(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapPMREM),y.push(A.envMapMaxLod),y.push(A.envMapSize),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.diffuseRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.numSunLights),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numSunLightShadows),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.numLightProbeGrids),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function g(y,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.retroreflection&&o.enable(24),A.diffuseRoughness&&o.enable(25),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function M(y){let A=d[y.type],F;if(A){let C=cs[A];F=t0.clone(C.uniforms)}else F=y.uniforms;return F}function E(y,A){let F=h.get(A);return F!==void 0?++F.usedTimes:(F=new _b(i,A,y,s),c.push(F),h.set(A,F)),F}function b(y){if(--y.usedTimes===0){let A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function w(y){a.remove(y)}function R(){a.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:M,acquireProgram:E,releaseProgram:b,releaseShaderCache:w,programs:c,dispose:R}}function bb(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Sb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function M0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function b0(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,_,m,g){let M=i[e];return M===void 0?(M={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:_,renderOrder:d.renderOrder,z:m,group:g},i[e]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=p,M.materialVariant=o(d),M.groupOrder=_,M.renderOrder=d.renderOrder,M.z=m,M.group=g),e++,M}function l(d,f,p,_,m,g,M){M.reversedDepth===!0&&(m=-m);let E=a(d,f,p,_,m,g);p.transmission>0?n.push(E):p.transparent===!0?s.push(E):t.push(E)}function c(d,f,p,_,m,g){let M=a(d,f,p,_,m,g);p.transmission>0?n.unshift(M):p.transparent===!0?s.unshift(M):t.unshift(M)}function h(d,f){t.length>1&&t.sort(d||Sb),n.length>1&&n.sort(f||M0),s.length>1&&s.sort(f||M0)}function u(){for(let d=e,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function Eb(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new b0,i.set(n,[o])):s>=r.length?(o=new b0,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Tb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new Te};break;case"SpotLight":t={position:new N,direction:new N,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function wb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function Rb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Cb(i){let e=new Tb,t=wb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new We,o=new We;function a(c){let h=0,u=0,d=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,p=0,_=0,m=0,g=0,M=0,E=0,b=0,w=0,R=0,y=0,A=0,F=0,C=0;c.sort(Rb);for(let O=0,z=c.length;O<z;O++){let L=c[O],W=L.color,Z=L.intensity,q=L.distance,re=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ar?re=L.shadow.map.texture:re=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=W.r*Z,u+=W.g*Z,d+=W.b*Z;else if(L.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(L.sh.coefficients[$],Z);C++}else if(L.isSunLight){let $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ne=L.shadow,se=t.get(L);se.shadowIntensity=ne.intensity,se.shadowBias=ne.bias,se.shadowNormalBias=ne.normalBias,se.shadowRadius=ne.radius,se.shadowMapSize.copy(ne.mapSize).multiply(ne.getFrameExtents()),n.sunShadow[p]=se,n.sunShadowMap[p]=re;let De=ne.getViewportCount();for(let Ze=0;Ze<De;Ze++)n.sunShadowMatrix[_+Ze]=ne.getMatrix(Ze),n.sunShadowCascade[_+Ze]=ne._cascadeData[Ze];_+=De,p++}n.sun[f]=$,f++}else if(L.isDirectionalLight){let $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ne=L.shadow,se=t.get(L);se.shadowIntensity=ne.intensity,se.shadowBias=ne.bias,se.shadowNormalBias=ne.normalBias,se.shadowRadius=ne.radius,se.shadowMapSize=ne.mapSize,n.directionalShadow[m]=se,n.directionalShadowMap[m]=re,n.directionalShadowMatrix[m]=L.shadow.matrix,w++}n.directional[m]=$,m++}else if(L.isSpotLight){let $=e.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(W).multiplyScalar(Z),$.distance=q,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,n.spot[M]=$;let ne=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,ne.updateMatrices(L),L.castShadow&&F++),n.spotLightMatrix[M]=ne.matrix,L.castShadow){let se=t.get(L);se.shadowIntensity=ne.intensity,se.shadowBias=ne.bias,se.shadowNormalBias=ne.normalBias,se.shadowRadius=ne.radius,se.shadowMapSize=ne.mapSize,n.spotShadow[M]=se,n.spotShadowMap[M]=re,y++}M++}else if(L.isRectAreaLight){let $=e.get(L);$.color.copy(W).multiplyScalar(Z),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),n.rectArea[E]=$,E++}else if(L.isPointLight){let $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),$.distance=L.distance,$.decay=L.decay,L.castShadow){let ne=L.shadow,se=t.get(L);se.shadowIntensity=ne.intensity,se.shadowBias=ne.bias,se.shadowNormalBias=ne.normalBias,se.shadowRadius=ne.radius,se.shadowMapSize=ne.mapSize,se.shadowCameraNear=ne.camera.near,se.shadowCameraFar=ne.camera.far,n.pointShadow[g]=se,n.pointShadowMap[g]=re,n.pointShadowMatrix[g]=L.shadow.matrix,R++}n.point[g]=$,g++}else if(L.isHemisphereLight){let $=e.get(L);$.skyColor.copy(L.color).multiplyScalar(Z),$.groundColor.copy(L.groundColor).multiplyScalar(Z),n.hemi[b]=$,b++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.sunLength!==f||P.directionalLength!==m||P.pointLength!==g||P.spotLength!==M||P.rectAreaLength!==E||P.hemiLength!==b||P.numSunShadows!==p||P.numDirectionalShadows!==w||P.numPointShadows!==R||P.numSpotShadows!==y||P.numSpotMaps!==A||P.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=M,n.rectArea.length=E,n.point.length=g,n.hemi.length=b,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=R,n.pointShadowMap.length=R,n.pointShadowMatrix.length=R,n.spotShadow.length=y,n.spotShadowMap.length=y,n.spotLightMatrix.length=y+A-F,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=C,P.sunLength=f,P.directionalLength=m,P.pointLength=g,P.spotLength=M,P.rectAreaLength=E,P.hemiLength=b,P.numSunShadows=p,P.numDirectionalShadows=w,P.numPointShadows=R,P.numSpotShadows=y,P.numSpotMaps=A,P.numLightProbes=C,n.version=Ab++)}function l(c,h){let u=0,d=0,f=0,p=0,_=0,m=0,g=h.matrixWorldInverse;for(let M=0,E=c.length;M<E;M++){let b=c[M];if(b.isSunLight){let w=n.sun[u];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(g),u++}else if(b.isDirectionalLight){let w=n.directional[d];w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),d++}else if(b.isSpotLight){let w=n.spot[p];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),p++}else if(b.isRectAreaLight){let w=n.rectArea[_];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(g),f++}else if(b.isHemisphereLight){let w=n.hemi[m];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function S0(i){let e=new Cb(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):t.push(u)}function a(u){n.push(u)}function l(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Ib(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new S0(i),e.set(s,[a])):r>=o.length?(a=new S0(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function Nb(i,e,t){let n=new sr,s=new Ye,r=new Ye,o=new At,a=new gc,l=new xc,c={},h=t.maxTextureSize,u={[rs]:En,[En]:rs,[bt]:bt},d=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:Pb,fragmentShader:Lb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ft;p.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Be(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ha;let g=this.type;this.render=function(R,y,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;this.type===gm&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ha);let F=i.getRenderTarget(),C=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Hr),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let z=g!==this.type;z&&y.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(W=>W.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,W=R.length;L<W;L++){let Z=R[L],q=Z.shadow;if(q===void 0){Ne("WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let re=q.getFrameExtents();s.multiply(re),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/re.x),s.x=r.x*re.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/re.y),s.y=r.y*re.y,q.mapSize.y=r.y));let $=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=$,q.map===null||z===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Oo){if(Z.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new oi(s.x,s.y,{format:ar,type:qi,minFilter:hn,magFilter:hn,generateMipmaps:!1}),q.map.texture.name=Z.name+".shadowMap",q.map.depthTexture=new Rs(s.x,s.y,ci),q.map.depthTexture.name=Z.name+".shadowMapDepth",q.map.depthTexture.format=ws,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Jt,q.map.depthTexture.magFilter=Jt}else Z.isPointLight?(q.map=new ja(s.x),q.map.depthTexture=new Pa(s.x,Xi)):(q.map=new oi(s.x,s.y),q.map.depthTexture=new Rs(s.x,s.y,Xi)),q.map.depthTexture.name=Z.name+".shadowMap",q.map.depthTexture.format=ws,this.type===Ha?(q.map.depthTexture.compareFunction=$?df:ff,q.map.depthTexture.minFilter=hn,q.map.depthTexture.magFilter=hn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Jt,q.map.depthTexture.magFilter=Jt);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let ne=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();Z.isPointLight!==!0&&q.updateMatrices(Z,A);let se=(q.camera.layers.mask&4294967294)!==0?q.camera.layers:A.layers;for(let De=0;De<ne;De++){let Ze=q.getCamera(De);if(Z.isPointLight){let Q=q.camera,be=q.matrix,Ie=Z.distance||Q.far;Ie!==Q.far&&(Q.far=Ie,Q.updateProjectionMatrix()),Za.setFromMatrixPosition(Z.matrixWorld),Q.position.copy(Za),Lf.copy(Q.position),Lf.add(Db[De]),Q.up.copy(Fb[De]),Q.lookAt(Lf),Q.updateMatrixWorld(),be.makeTranslation(-Za.x,-Za.y,-Za.z),E0.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),q._frustum.setFromProjectionMatrix(E0,Q.coordinateSystem,Q.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,De),i.clear();else{De===0&&(i.setRenderTarget(q.map),i.clear());let Q=q.getViewport(De);o.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),O.viewport(o)}n=q.getFrustum(De),b(y,A,Ze,Z,se,this.type)}q.isPointLightShadow!==!0&&this.type===Oo&&M(q,A),q.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(F,C,P)};function M(R,y){let A=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null?R.mapPass=new oi(s.x,s.y,{format:ar,type:qi}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value.set(R.map.width,R.map.height),d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(y,null,A,d,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value.set(R.map.width,R.map.height),f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(y,null,A,f,_,null)}function E(R,y,A,F){let C=null,P=A.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)C=P;else if(C=A.isPointLight===!0?l:a,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let O=C.uuid,z=y.uuid,L=c[O];L===void 0&&(L={},c[O]=L);let W=L[z];W===void 0&&(W=C.clone(),L[z]=W,y.addEventListener("dispose",w)),C=W}if(C.visible=y.visible,C.wireframe=y.wireframe,F===Oo?C.side=y.shadowSide!==null?y.shadowSide:y.side:C.side=y.shadowSide!==null?y.shadowSide:u[y.side],C.alphaMap=y.alphaMap,C.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,C.map=y.map,C.clipShadows=y.clipShadows,C.clippingPlanes=y.clippingPlanes,C.clipIntersection=y.clipIntersection,C.displacementMap=y.displacementMap,C.displacementScale=y.displacementScale,C.displacementBias=y.displacementBias,C.wireframeLinewidth=y.wireframeLinewidth,C.linewidth=y.linewidth,A.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let O=i.properties.get(C);O.light=A}return C}function b(R,y,A,F,C,P){if(R.visible===!1)return;if(R.layers.test(C)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&P===Oo)&&(!R.frustumCulled||R.intersectsFrustum(n))){R.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,R.matrixWorld);let L=e.update(R),W=R.material;if(Array.isArray(W)){let Z=L.groups;for(let q=0,re=Z.length;q<re;q++){let $=Z[q],ne=W[$.materialIndex];if(ne&&ne.visible){let se=E(R,ne,F,P);R.onBeforeShadow(i,R,y,A,L,se,$),i.renderBufferDirect(A,null,L,se,R,$),R.onAfterShadow(i,R,y,A,L,se,$)}}}else if(W.visible){let Z=E(R,W,F,P);R.onBeforeShadow(i,R,y,A,L,Z,null),i.renderBufferDirect(A,null,L,Z,R,null),R.onAfterShadow(i,R,y,A,L,Z,null)}}let z=R.children;for(let L=0,W=z.length;L<W;L++)b(z[L],y,A,F,C,P)}function w(R){R.target.removeEventListener("dispose",w);for(let A in c){let F=c[A],C=R.target.uuid;C in F&&(F[C].dispose(),delete F[C])}}}function Ub(i,e){function t(){let D=!1,ee=new At,K=null,de=new At(0,0,0,0);return{setMask:function(ce){K!==ce&&!D&&(i.colorMask(ce,ce,ce,ce),K=ce)},setLocked:function(ce){D=ce},setClear:function(ce,ue,Ue,tt,le){le===!0&&(ce*=tt,ue*=tt,Ue*=tt),ee.set(ce,ue,Ue,tt),de.equals(ee)===!1&&(i.clearColor(ce,ue,Ue,tt),de.copy(ee))},reset:function(){D=!1,K=null,de.set(-1,0,0,0)}}}function n(){let D=!1,ee=!1,K=null,de=null,ce=null;return{setReversed:function(ue){if(ee!==ue){let Ue=e.get("EXT_clip_control");ue?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),ee=ue;let tt=ce;ce=null,this.setClear(tt)}},getReversed:function(){return ee},setTest:function(ue){ue?Se(i.DEPTH_TEST):je(i.DEPTH_TEST)},setMask:function(ue){K!==ue&&!D&&(i.depthMask(ue),K=ue)},setFunc:function(ue){if(ee&&(ue=Qm[ue]),de!==ue){switch(ue){case tc:i.depthFunc(i.NEVER);break;case nc:i.depthFunc(i.ALWAYS);break;case ic:i.depthFunc(i.LESS);break;case Mo:i.depthFunc(i.LEQUAL);break;case sc:i.depthFunc(i.EQUAL);break;case rc:i.depthFunc(i.GEQUAL);break;case oc:i.depthFunc(i.GREATER);break;case ac:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=ue}},setLocked:function(ue){D=ue},setClear:function(ue){ce!==ue&&(ce=ue,ee&&(ue=1-ue),i.clearDepth(ue))},reset:function(){D=!1,K=null,de=null,ce=null,ee=!1}}}function s(){let D=!1,ee=null,K=null,de=null,ce=null,ue=null,Ue=null,tt=null,le=null;return{setTest:function(Oe){D||(Oe?Se(i.STENCIL_TEST):je(i.STENCIL_TEST))},setMask:function(Oe){ee!==Oe&&!D&&(i.stencilMask(Oe),ee=Oe)},setFunc:function(Oe,et,ve){(K!==Oe||de!==et||ce!==ve)&&(i.stencilFunc(Oe,et,ve),K=Oe,de=et,ce=ve)},setOp:function(Oe,et,ve){(ue!==Oe||Ue!==et||tt!==ve)&&(i.stencilOp(Oe,et,ve),ue=Oe,Ue=et,tt=ve)},setLocked:function(Oe){D=Oe},setClear:function(Oe){le!==Oe&&(i.clearStencil(Oe),le=Oe)},reset:function(){D=!1,ee=null,K=null,de=null,ce=null,ue=null,Ue=null,tt=null,le=null}}}let r=new t,o=new n,a=new s,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],_=null,m=!1,g=null,M=null,E=null,b=null,w=null,R=null,y=null,A=new Te(0,0,0),F=0,C=!1,P=null,O=null,z=null,L=null,W=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,re=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec($)[1]),q=re>=1):$.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),q=re>=2);let ne=null,se={},De=i.getParameter(i.SCISSOR_BOX),Ze=i.getParameter(i.VIEWPORT),Q=new At().fromArray(De),be=new At().fromArray(Ze);function Ie(D,ee,K,de){let ce=new Uint8Array(4),ue=i.createTexture();i.bindTexture(D,ue),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ue=0;Ue<K;Ue++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ee,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,ce):i.texImage2D(ee+Ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ce);return ue}let ze={};ze[i.TEXTURE_2D]=Ie(i.TEXTURE_2D,i.TEXTURE_2D,1),ze[i.TEXTURE_CUBE_MAP]=Ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ze[i.TEXTURE_2D_ARRAY]=Ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ze[i.TEXTURE_3D]=Ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Se(i.DEPTH_TEST),o.setFunc(Mo),Zn(!1),Wt(Wu),Se(i.CULL_FACE),Mn(Hr);function Se(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function je(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function tn(D,ee){return d[D]!==ee?(i.bindFramebuffer(D,ee),d[D]=ee,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ee),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ee),!0):!1}function Ge(D,ee){let K=p,de=!1;if(D){K=f.get(ee),K===void 0&&(K=[],f.set(ee,K));let ce=D.textures;if(K.length!==ce.length||K[0]!==i.COLOR_ATTACHMENT0){for(let ue=0,Ue=ce.length;ue<Ue;ue++)K[ue]=i.COLOR_ATTACHMENT0+ue;K.length=ce.length,de=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,de=!0);de&&i.drawBuffers(K)}function Tt(D){return _!==D?(i.useProgram(D),_=D,!0):!1}let Pt={[Gr]:i.FUNC_ADD,[_m]:i.FUNC_SUBTRACT,[ym]:i.FUNC_REVERSE_SUBTRACT};Pt[vm]=i.MIN,Pt[Mm]=i.MAX;let lt={[bm]:i.ZERO,[Sm]:i.ONE,[Em]:i.SRC_COLOR,[Ku]:i.SRC_ALPHA,[Im]:i.SRC_ALPHA_SATURATE,[Rm]:i.DST_COLOR,[wm]:i.DST_ALPHA,[Tm]:i.ONE_MINUS_SRC_COLOR,[$u]:i.ONE_MINUS_SRC_ALPHA,[Cm]:i.ONE_MINUS_DST_COLOR,[Am]:i.ONE_MINUS_DST_ALPHA,[Pm]:i.CONSTANT_COLOR,[Lm]:i.ONE_MINUS_CONSTANT_COLOR,[Dm]:i.CONSTANT_ALPHA,[Fm]:i.ONE_MINUS_CONSTANT_ALPHA};function Mn(D,ee,K,de,ce,ue,Ue,tt,le,Oe){if(D===Hr){m===!0&&(je(i.BLEND),m=!1);return}if(m===!1&&(Se(i.BLEND),m=!0),D!==xm){if(D!==g||Oe!==C){if((M!==Gr||w!==Gr)&&(i.blendEquation(i.FUNC_ADD),M=Gr,w=Gr),Oe)switch(D){case Bo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xu:i.blendFunc(i.ONE,i.ONE);break;case qu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ve("WebGLState: Invalid blending: ",D);break}else switch(D){case Bo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case qu:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yu:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",D);break}E=null,b=null,R=null,y=null,A.set(0,0,0),F=0,g=D,C=Oe}return}ce=ce||ee,ue=ue||K,Ue=Ue||de,(ee!==M||ce!==w)&&(i.blendEquationSeparate(Pt[ee],Pt[ce]),M=ee,w=ce),(K!==E||de!==b||ue!==R||Ue!==y)&&(i.blendFuncSeparate(lt[K],lt[de],lt[ue],lt[Ue]),E=K,b=de,R=ue,y=Ue),(tt.equals(A)===!1||le!==F)&&(i.blendColor(tt.r,tt.g,tt.b,le),A.copy(tt),F=le),g=D,C=!1}function on(D,ee){D.side===bt?je(i.CULL_FACE):Se(i.CULL_FACE);let K=D.side===En;ee&&(K=!K),Zn(K),D.blending===Bo&&D.transparent===!1?Mn(Hr):Mn(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let de=D.stencilWrite;a.setTest(de),de&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),gn(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Se(i.SAMPLE_ALPHA_TO_COVERAGE):je(i.SAMPLE_ALPHA_TO_COVERAGE)}function Zn(D){P!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),P=D)}function Wt(D){D!==pm?(Se(i.CULL_FACE),D!==O&&(D===Wu?i.cullFace(i.BACK):D===mm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):je(i.CULL_FACE),O=D}function Qi(D){D!==z&&(q&&i.lineWidth(D),z=D)}function gn(D,ee,K){D?(Se(i.POLYGON_OFFSET_FILL),(L!==ee||W!==K)&&(L=ee,W=K,o.getReversed()&&(ee=-ee,K=-K),i.polygonOffset(ee,K))):je(i.POLYGON_OFFSET_FILL)}function xi(D){D?Se(i.SCISSOR_TEST):je(i.SCISSOR_TEST)}function _i(D){D===void 0&&(D=i.TEXTURE0+Z-1),ne!==D&&(i.activeTexture(D),ne=D)}function yi(D,ee,K){K===void 0&&(ne===null?K=i.TEXTURE0+Z-1:K=ne);let de=se[K];de===void 0&&(de={type:void 0,texture:void 0},se[K]=de),(de.type!==D||de.texture!==ee)&&(ne!==K&&(i.activeTexture(K),ne=K),i.bindTexture(D,ee||ze[D]),de.type=D,de.texture=ee)}function B(){let D=se[ne];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function vi(){try{i.compressedTexImage2D(...arguments)}catch(D){Ve("WebGLState:",D)}}function kt(){try{i.compressedTexImage3D(...arguments)}catch(D){Ve("WebGLState:",D)}}function Ht(){try{i.texSubImage2D(...arguments)}catch(D){Ve("WebGLState:",D)}}function xe(){try{i.texSubImage3D(...arguments)}catch(D){Ve("WebGLState:",D)}}function an(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Ve("WebGLState:",D)}}function ke(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Ve("WebGLState:",D)}}function $e(){try{i.texStorage2D(...arguments)}catch(D){Ve("WebGLState:",D)}}function I(){try{i.texStorage3D(...arguments)}catch(D){Ve("WebGLState:",D)}}function S(){try{i.texImage2D(...arguments)}catch(D){Ve("WebGLState:",D)}}function H(){try{i.texImage3D(...arguments)}catch(D){Ve("WebGLState:",D)}}function oe(D){return u[D]!==void 0?u[D]:i.getParameter(D)}function te(D,ee){u[D]!==ee&&(i.pixelStorei(D,ee),u[D]=ee)}function he(D){Q.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Q.copy(D))}function me(D){be.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),be.copy(D))}function J(D,ee){let K=c.get(ee);K===void 0&&(K=new WeakMap,c.set(ee,K));let de=K.get(D);de===void 0&&(de=i.getUniformBlockIndex(ee,D.name),i.uniformBlockBinding(ee,de,de),K.set(D,de))}function j(D,ee,K){let ce=c.get(ee).get(D);l[ce]!==K&&(i.bindBufferBase(i.UNIFORM_BUFFER,ce,K),l[ce]=K)}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},ne=null,se={},d={},l={},f=new WeakMap,p=[],_=null,m=!1,g=null,M=null,E=null,b=null,w=null,R=null,y=null,A=new Te(0,0,0),F=0,C=!1,P=null,O=null,z=null,L=null,W=null,Q.set(0,0,i.canvas.width,i.canvas.height),be.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Se,disable:je,bindFramebuffer:tn,drawBuffers:Ge,useProgram:Tt,setBlending:Mn,setMaterial:on,setFlipSided:Zn,setCullFace:Wt,setLineWidth:Qi,setPolygonOffset:gn,setScissorTest:xi,activeTexture:_i,bindTexture:yi,unbindTexture:B,compressedTexImage2D:vi,compressedTexImage3D:kt,texImage2D:S,texImage3D:H,pixelStorei:te,getParameter:oe,updateUBOMapping:J,uniformBlockBinding:j,texStorage2D:$e,texStorage3D:I,texSubImage2D:Ht,texSubImage3D:xe,compressedTexSubImage2D:an,compressedTexSubImage3D:ke,scissor:he,viewport:me,reset:fe}}function Ob(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ye,h=new WeakMap,u=new Set,d,f=new WeakMap,p=new Set,_=new FinalizationRegistry(I=>p.delete(I)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,S){return m?new OffscreenCanvas(I,S):Eo("canvas")}function M(I,S,H){let oe=1,te=$e(I);if((te.width>H||te.height>H)&&(oe=H/Math.max(te.width,te.height)),oe<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let he=Math.floor(oe*te.width),me=Math.floor(oe*te.height);d===void 0&&(d=g(he,me));let J=S?g(he,me):d;return J.width=he,J.height=me,J.getContext("2d").drawImage(I,0,0,he,me),Ne("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+he+"x"+me+")."),J}else return"data"in I&&Ne("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),I;return I}function E(I){return I.generateMipmaps}function b(I){i.generateMipmap(I)}function w(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(I,S,H,oe,te,he=!1){if(I!==null){if(i[I]!==void 0)return i[I];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let me;oe&&(me=e.get("EXT_texture_norm16"),me||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=S;if(S===i.RED&&(H===i.FLOAT&&(J=i.R32F),H===i.HALF_FLOAT&&(J=i.R16F),H===i.UNSIGNED_BYTE&&(J=i.R8),H===i.UNSIGNED_SHORT&&me&&(J=me.R16_EXT),H===i.SHORT&&me&&(J=me.R16_SNORM_EXT)),S===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.R8UI),H===i.UNSIGNED_SHORT&&(J=i.R16UI),H===i.UNSIGNED_INT&&(J=i.R32UI),H===i.BYTE&&(J=i.R8I),H===i.SHORT&&(J=i.R16I),H===i.INT&&(J=i.R32I)),S===i.RG&&(H===i.FLOAT&&(J=i.RG32F),H===i.HALF_FLOAT&&(J=i.RG16F),H===i.UNSIGNED_BYTE&&(J=i.RG8),H===i.UNSIGNED_SHORT&&me&&(J=me.RG16_EXT),H===i.SHORT&&me&&(J=me.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RG8UI),H===i.UNSIGNED_SHORT&&(J=i.RG16UI),H===i.UNSIGNED_INT&&(J=i.RG32UI),H===i.BYTE&&(J=i.RG8I),H===i.SHORT&&(J=i.RG16I),H===i.INT&&(J=i.RG32I)),S===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RGB8UI),H===i.UNSIGNED_SHORT&&(J=i.RGB16UI),H===i.UNSIGNED_INT&&(J=i.RGB32UI),H===i.BYTE&&(J=i.RGB8I),H===i.SHORT&&(J=i.RGB16I),H===i.INT&&(J=i.RGB32I)),S===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),H===i.UNSIGNED_INT&&(J=i.RGBA32UI),H===i.BYTE&&(J=i.RGBA8I),H===i.SHORT&&(J=i.RGBA16I),H===i.INT&&(J=i.RGBA32I)),S===i.RGB&&(H===i.UNSIGNED_SHORT&&me&&(J=me.RGB16_EXT),H===i.SHORT&&me&&(J=me.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),S===i.RGBA){let j=he?ya:it.getTransfer(te);H===i.FLOAT&&(J=i.RGBA32F),H===i.HALF_FLOAT&&(J=i.RGBA16F),H===i.UNSIGNED_BYTE&&(J=j===Mt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&me&&(J=me.RGBA16_EXT),H===i.SHORT&&me&&(J=me.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function y(I,S){let H;return I?S===null||S===Xi||S===Xr?H=i.DEPTH24_STENCIL8:S===ci?H=i.DEPTH32F_STENCIL8:S===Ho&&(H=i.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Xi||S===Xr?H=i.DEPTH_COMPONENT24:S===ci?H=i.DEPTH_COMPONENT32F:S===Ho&&(H=i.DEPTH_COMPONENT16),H}function A(I,S){return E(I)===!0||I.isFramebufferTexture&&I.minFilter!==Jt&&I.minFilter!==hn?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function F(I){let S=new WeakRef(I);n.get(I).__ref=S,p.add(S),_.register(I,S,S)}function C(I){let S=n.get(I).__ref;S!==void 0&&(p.delete(S),_.unregister(S))}function P(I){z(I.target)}function O(I){L(I.target)}function z(I){I.removeEventListener("dispose",P),C(I),Z(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&u.delete(I)}function L(I){I.removeEventListener("dispose",O),C(I),re(I)}function W(){for(let I of p){let S=I.deref();S!==void 0&&(S.isRenderTarget===!0?L(S):z(S))}p.clear(),u.clear()}function Z(I){let S=n.get(I);if(S.__webglInit===void 0)return;let H=I.source,oe=f.get(H);if(oe){let te=oe[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&q(I),Object.keys(oe).length===0&&f.delete(H)}n.remove(I)}function q(I){let S=n.get(I);i.deleteTexture(S.__webglTexture);let H=I.source,oe=f.get(H);delete oe[S.__cacheKey],o.memory.textures--}function re(I){let S=n.get(I);S.__depthDisposeCallback&&S.__depthDisposeCallback();let H=I.depthTexture;if(H&&H.renderTarget===I&&z(H),I.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(S.__webglFramebuffer[te]))for(let he=0;he<S.__webglFramebuffer[te].length;he++)i.deleteFramebuffer(S.__webglFramebuffer[te][he]);else i.deleteFramebuffer(S.__webglFramebuffer[te]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[te])}else{if(Array.isArray(S.__webglFramebuffer))for(let te=0;te<S.__webglFramebuffer.length;te++)i.deleteFramebuffer(S.__webglFramebuffer[te]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let te=0;te<S.__webglColorRenderbuffer.length;te++)S.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[te]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let oe=I.textures;for(let te=0,he=oe.length;te<he;te++){let me=n.get(oe[te]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),o.memory.textures--),n.remove(oe[te])}n.remove(I)}let $=0;function ne(){$=0}function se(){return $}function De(I){$=I}function Ze(){let I=$;return I>=s.maxTextures&&Ne("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),$+=1,I}function Q(I){let S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.mipmapsAutoUpdate),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function be(I,S){let H=n.get(I);if(I.isVideoTexture&&an(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&H.__version!==I.version){let oe=I.image;if(oe===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{on(H,I,S);return}}else I.isExternalTexture&&(H.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+S)}function Ie(I,S){let H=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){on(H,I,S);return}else I.isExternalTexture&&(H.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+S)}function ze(I,S){let H=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){on(H,I,S);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+S)}function Se(I,S){let H=n.get(I);if(I.version>0&&H.__version!==I.version){Zn(H,I,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+S)}let je={[ir]:i.REPEAT,[bi]:i.CLAMP_TO_EDGE,[bo]:i.MIRRORED_REPEAT},tn={[Jt]:i.NEAREST,[Pc]:i.NEAREST_MIPMAP_NEAREST,[Wr]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[ko]:i.LINEAR_MIPMAP_NEAREST,[wi]:i.LINEAR_MIPMAP_LINEAR},Ge={[Xm]:i.NEVER,[pf]:i.ALWAYS,[qm]:i.LESS,[ff]:i.LEQUAL,[Ym]:i.EQUAL,[df]:i.GEQUAL,[Km]:i.GREATER,[$m]:i.NOTEQUAL};function Tt(I,S){if(S.type===ci&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===hn||S.magFilter===ko||S.magFilter===Wr||S.magFilter===wi||S.minFilter===hn||S.minFilter===ko||S.minFilter===Wr||S.minFilter===wi)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,je[S.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,je[S.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,je[S.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,tn[S.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,tn[S.minFilter]),S.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Ge[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Jt||S.minFilter!==Wr&&S.minFilter!==wi||S.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Pt(I,S){let H=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",P),F(S));let oe=S.source,te=f.get(oe);te===void 0&&(te={},f.set(oe,te));let he=Q(S);if(he!==I.__cacheKey){te[he]===void 0&&(te[he]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),te[he].usedTimes++;let me=te[I.__cacheKey];me!==void 0&&(te[I.__cacheKey].usedTimes--,me.usedTimes===0&&q(S)),I.__cacheKey=he,I.__webglTexture=te[he].texture}return H}function lt(I,S,H){return Math.floor(Math.floor(I/H)/S)}function Mn(I,S,H,oe){let he=I.updateRanges;if(he.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,H,oe,S.data);else{he.sort((D,ee)=>D.start-ee.start);let me=0;for(let D=1;D<he.length;D++){let ee=he[me],K=he[D],de=ee.start+ee.count,ce=lt(K.start,S.width,4),ue=lt(ee.start,S.width,4);K.start<=de+1&&ce===ue&&lt(K.start+K.count-1,S.width,4)===ce?ee.count=Math.max(ee.count,K.start+K.count-ee.start):(++me,he[me]=K)}he.length=me+1;let J=t.getParameter(i.UNPACK_ROW_LENGTH),j=t.getParameter(i.UNPACK_SKIP_PIXELS),fe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let D=0,ee=he.length;D<ee;D++){let K=he[D],de=Math.floor(K.start/4),ce=Math.ceil(K.count/4),ue=de%S.width,Ue=Math.floor(de/S.width),tt=ce,le=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ue),t.texSubImage2D(i.TEXTURE_2D,0,ue,Ue,tt,le,H,oe,S.data)}I.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,j),t.pixelStorei(i.UNPACK_SKIP_ROWS,fe)}}function on(I,S,H){let oe=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(oe=i.TEXTURE_3D);let te=Pt(I,S),he=S.source;t.bindTexture(oe,I.__webglTexture,i.TEXTURE0+H);let me=n.get(he);if(he.version!==me.__version||te===!0){if(t.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let le=it.getPrimaries(it.workingColorSpace),Oe=S.colorSpace===Us?null:it.getPrimaries(S.colorSpace),et=S.colorSpace===Us||le===Oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let j=M(S.image,!1,s.maxTextureSize);j=ke(S,j);let fe=r.convert(S.format,S.colorSpace),D=r.convert(S.type),ee=R(S.internalFormat,fe,D,S.normalized,S.colorSpace,S.isVideoTexture);Tt(oe,S);let K,de=S.mipmaps,ce=S.isVideoTexture!==!0,ue=me.__version===void 0||te===!0,Ue=he.dataReady,tt=A(S,j);if(S.isDepthTexture)ee=y(S.format===Ns,S.type),ue&&(ce?t.texStorage2D(i.TEXTURE_2D,1,ee,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,ee,j.width,j.height,0,fe,D,null));else if(S.isDataTexture)if(de.length>0){ce&&ue&&t.texStorage2D(i.TEXTURE_2D,tt,ee,de[0].width,de[0].height);for(let le=0,Oe=de.length;le<Oe;le++)K=de[le],ce?Ue&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,K.width,K.height,fe,D,K.data):t.texImage2D(i.TEXTURE_2D,le,ee,K.width,K.height,0,fe,D,K.data);S.generateMipmaps=!1}else ce?(ue&&t.texStorage2D(i.TEXTURE_2D,tt,ee,j.width,j.height),Ue&&Mn(S,j,fe,D)):t.texImage2D(i.TEXTURE_2D,0,ee,j.width,j.height,0,fe,D,j.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ce&&ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,tt,ee,de[0].width,de[0].height,j.depth);for(let le=0,Oe=de.length;le<Oe;le++)if(K=de[le],S.format!==Ai)if(fe!==null)if(ce){if(Ue)if(S.layerUpdates.size>0){let et=Ef(K.width,K.height,S.format,S.type);for(let ve of S.layerUpdates){let wt=K.data.subarray(ve*et/K.data.BYTES_PER_ELEMENT,(ve+1)*et/K.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,ve,K.width,K.height,1,fe,wt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,K.width,K.height,j.depth,fe,K.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,le,ee,K.width,K.height,j.depth,0,K.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?Ue&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,K.width,K.height,j.depth,fe,D,K.data):t.texImage3D(i.TEXTURE_2D_ARRAY,le,ee,K.width,K.height,j.depth,0,fe,D,K.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{ce&&ue&&t.texStorage2D(i.TEXTURE_2D,tt,ee,de[0].width,de[0].height);for(let le=0,Oe=de.length;le<Oe;le++)K=de[le],S.format!==Ai?fe!==null?ce?Ue&&t.compressedTexSubImage2D(i.TEXTURE_2D,le,0,0,K.width,K.height,fe,K.data):t.compressedTexImage2D(i.TEXTURE_2D,le,ee,K.width,K.height,0,K.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?Ue&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,K.width,K.height,fe,D,K.data):t.texImage2D(i.TEXTURE_2D,le,ee,K.width,K.height,0,fe,D,K.data)}else if(S.isDataArrayTexture)if(ce){if(ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,tt,ee,j.width,j.height,j.depth),Ue)if(S.layerUpdates.size>0){let le=Ef(j.width,j.height,S.format,S.type);for(let Oe of S.layerUpdates){let et=j.data.subarray(Oe*le/j.data.BYTES_PER_ELEMENT,(Oe+1)*le/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Oe,j.width,j.height,1,fe,D,et)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,fe,D,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ee,j.width,j.height,j.depth,0,fe,D,j.data);else if(S.isData3DTexture)ce?(ue&&t.texStorage3D(i.TEXTURE_3D,tt,ee,j.width,j.height,j.depth),Ue&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,fe,D,j.data)):t.texImage3D(i.TEXTURE_3D,0,ee,j.width,j.height,j.depth,0,fe,D,j.data);else if(S.isFramebufferTexture){if(ue)if(ce)t.texStorage2D(i.TEXTURE_2D,tt,ee,j.width,j.height);else{let le=j.width,Oe=j.height;for(let et=0;et<tt;et++)t.texImage2D(i.TEXTURE_2D,et,ee,le,Oe,0,fe,D,null),le>>=1,Oe>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let le=i.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),j.parentNode!==le){le.appendChild(j),u.add(S),le.onpaint=Oe=>{let et=Oe.changedElements;for(let ve of u)et.includes(ve.image)&&(ve.needsUpdate=!0)},le.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let et=i.RGBA,ve=i.RGBA,wt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,et,ve,wt,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(de.length>0){if(ce&&ue){let le=$e(de[0]);t.texStorage2D(i.TEXTURE_2D,tt,ee,le.width,le.height)}for(let le=0,Oe=de.length;le<Oe;le++)K=de[le],ce?Ue&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,fe,D,K):t.texImage2D(i.TEXTURE_2D,le,ee,fe,D,K);S.generateMipmaps=!1}else if(ce){if(ue){let le=$e(j);t.texStorage2D(i.TEXTURE_2D,tt,ee,le.width,le.height)}Ue&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,D,j)}else t.texImage2D(i.TEXTURE_2D,0,ee,fe,D,j);E(S)&&S.mipmapsAutoUpdate===!0&&b(oe),me.__version=he.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function Zn(I,S,H){if(S.image.length!==6)return;let oe=Pt(I,S),te=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+H);let he=n.get(te);if(te.version!==he.__version||oe===!0){t.activeTexture(i.TEXTURE0+H);let me=it.getPrimaries(it.workingColorSpace),J=S.colorSpace===Us?null:it.getPrimaries(S.colorSpace),j=S.colorSpace===Us||me===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let fe=S.isCompressedTexture||S.image[0].isCompressedTexture,D=S.image[0]&&S.image[0].isDataTexture,ee=[];for(let ve=0;ve<6;ve++)!fe&&!D?ee[ve]=M(S.image[ve],!0,s.maxCubemapSize):ee[ve]=D?S.image[ve].image:S.image[ve],ee[ve]=ke(S,ee[ve]);let K=ee[0],de=r.convert(S.format,S.colorSpace),ce=r.convert(S.type),ue=R(S.internalFormat,de,ce,S.normalized,S.colorSpace),Ue=S.isVideoTexture!==!0,tt=he.__version===void 0||oe===!0,le=te.dataReady,Oe=A(S,K);Tt(i.TEXTURE_CUBE_MAP,S);let et;if(S.isDepthTexture){if(ue=y(S.format===Ns,S.type),tt)if(Ue)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,ue,K.width,K.height);else for(let ve=0;ve<6;ve++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ue,K.width,K.height,0,de,ce,null)}else if(fe){Ue&&tt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Oe,ue,K.width,K.height);for(let ve=0;ve<6;ve++){et=ee[ve].mipmaps;for(let wt=0;wt<et.length;wt++){let xn=et[wt];S.format!==Ai?de!==null?Ue?le&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,wt,0,0,xn.width,xn.height,de,xn.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,wt,ue,xn.width,xn.height,0,xn.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,wt,0,0,xn.width,xn.height,de,ce,xn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,wt,ue,xn.width,xn.height,0,de,ce,xn.data)}}}else{if(et=S.mipmaps,Ue&&tt){et.length>0&&Oe++;let ve=$e(ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Oe,ue,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(D){Ue?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,ee[ve].width,ee[ve].height,de,ce,ee[ve].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ue,ee[ve].width,ee[ve].height,0,de,ce,ee[ve].data);for(let wt=0;wt<et.length;wt++){let Ks=et[wt].image[ve].image;Ue?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,wt+1,0,0,Ks.width,Ks.height,de,ce,Ks.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,wt+1,ue,Ks.width,Ks.height,0,de,ce,Ks.data)}}else{Ue?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,de,ce,ee[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ue,de,ce,ee[ve]);for(let wt=0;wt<et.length;wt++){let xn=et[wt];Ue?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,wt+1,0,0,de,ce,xn.image[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,wt+1,ue,de,ce,xn.image[ve])}}}E(S)&&S.mipmapsAutoUpdate===!0&&b(i.TEXTURE_CUBE_MAP),he.__version=te.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function Wt(I,S,H,oe,te,he){let me=r.convert(H.format,H.colorSpace),J=r.convert(H.type),j=R(H.internalFormat,me,J,H.normalized,H.colorSpace),fe=n.get(S),D=n.get(H);if(D.__renderTarget=S,!fe.__hasExternalTextures){let ee=Math.max(1,S.width>>he),K=Math.max(1,S.height>>he);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,he,j,ee,K,S.depth,0,me,J,null):t.texImage2D(te,he,j,ee,K,0,me,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),xe(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,te,D.__webglTexture,0,Ht(S)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,te,D.__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qi(I,S,H){if(i.bindRenderbuffer(i.RENDERBUFFER,I),S.depthBuffer){let oe=S.depthTexture,te=oe&&oe.isDepthTexture?oe.type:null,he=y(S.stencilBuffer,te),me=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;xe(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ht(S),he,S.width,S.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht(S),he,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,he,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,I)}else{let oe=S.textures;for(let te=0;te<oe.length;te++){let he=oe[te],me=r.convert(he.format,he.colorSpace),J=r.convert(he.type),j=R(he.internalFormat,me,J,he.normalized,he.colorSpace);xe(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ht(S),j,S.width,S.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht(S),j,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,j,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function gn(I,S,H){let oe=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let te=n.get(S.depthTexture);te.__renderTarget=S;let he=oe?S.depthTexture.image[0]:S.depthTexture.image;(!te.__webglTexture||he.width!==S.width||he.height!==S.height)&&(he.width=S.width,he.height=S.height,S.depthTexture.needsUpdate=!0),oe?Se(S.depthTexture,0):be(S.depthTexture,0);let me=te.__webglTexture,J=Ht(S),j=oe?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,fe=S.depthTexture.format===Ns?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===ws)xe(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,j,me,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,fe,j,me,0);else if(S.depthTexture.format===Ns)xe(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,j,me,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,fe,j,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function xi(I){let S=n.get(I),H=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){let oe=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),oe){let te=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,oe.removeEventListener("dispose",te)};oe.addEventListener("dispose",te),S.__depthDisposeCallback=te}S.__boundDepthTexture=oe}if(I.depthTexture&&!S.__autoAllocateDepthBuffer)if(H)for(let oe=0;oe<6;oe++)gn(S.__webglFramebuffer[oe],I,oe);else I.texture.mipmaps.length>0?gn(S.__webglFramebuffer[0],I,0):gn(S.__webglFramebuffer,I,0);else if(H){S.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[oe]),S.__webglDepthbuffer[oe]===void 0)S.__webglDepthbuffer[oe]=i.createRenderbuffer(),Qi(S.__webglDepthbuffer[oe],I,!1);else{let te=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=S.__webglDepthbuffer[oe];i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,he)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Qi(S.__webglDepthbuffer,I,!1);else{let te=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,he)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function _i(I,S,H){let oe=n.get(I);S!==void 0&&Wt(oe.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&xi(I)}function yi(I){let S=I.texture,H=n.get(I),oe=n.get(S);I.addEventListener("dispose",O),F(I);let te=I.textures,he=I.isWebGLCubeRenderTarget===!0,me=te.length>1;if(me||(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=S.version,o.memory.textures++),he){H.__webglFramebuffer=[];for(let J=0;J<6;J++)if(S.mipmaps.length>0){H.__webglFramebuffer[J]=[];for(let j=0;j<S.mipmaps.length;j++)H.__webglFramebuffer[J][j]=i.createFramebuffer()}else H.__webglFramebuffer[J]=i.createFramebuffer()}else{if(S.mipmaps.length>0){H.__webglFramebuffer=[];for(let J=0;J<S.mipmaps.length;J++)H.__webglFramebuffer[J]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(me)for(let J=0,j=te.length;J<j;J++){let fe=n.get(te[J]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&xe(I)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let J=0;J<te.length;J++){let j=te[J];H.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[J]);let fe=r.convert(j.format,j.colorSpace),D=r.convert(j.type),ee=R(j.internalFormat,fe,D,j.normalized,j.colorSpace,I.isXRRenderTarget===!0),K=Ht(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,K,ee,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,H.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Qi(H.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),Tt(i.TEXTURE_CUBE_MAP,S);for(let J=0;J<6;J++)if(S.mipmaps.length>0)for(let j=0;j<S.mipmaps.length;j++)Wt(H.__webglFramebuffer[J][j],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,j);else Wt(H.__webglFramebuffer[J],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);E(S)?b(i.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(me){for(let J=0,j=te.length;J<j;J++){let fe=te[J],D=n.get(fe),ee=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ee=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,D.__webglTexture),Tt(ee,fe),Wt(H.__webglFramebuffer,I,fe,i.COLOR_ATTACHMENT0+J,ee,0),E(fe)&&b(ee)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(J=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,oe.__webglTexture),Tt(J,S),S.mipmaps.length>0)for(let j=0;j<S.mipmaps.length;j++)Wt(H.__webglFramebuffer[j],I,S,i.COLOR_ATTACHMENT0,J,j);else Wt(H.__webglFramebuffer,I,S,i.COLOR_ATTACHMENT0,J,0);E(S)?b(J):S.mipmaps.length>0&&i.texParameteri(J,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&xi(I)}function B(I){let S=I.textures;for(let H=0,oe=S.length;H<oe;H++){let te=S[H];if(E(te)&&te.mipmapsAutoUpdate===!0){let he=w(I),me=n.get(te).__webglTexture;t.bindTexture(he,me),b(he),t.unbindTexture()}}}let vi=[];function kt(I){if(I.samples>0){if(xe(I)===!1){let S=I.textures,H=I.width,oe=I.height,te=i.COLOR_BUFFER_BIT,he=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=n.get(I),J=S.length>1;if(J)for(let fe=0;fe<S.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let fe=0;fe<S.length;fe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,me.__webglColorRenderbuffer[fe]);let D=n.get(S[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,H,oe,0,0,H,oe,te,i.NEAREST),l===!0&&(vi.length=0,vi.push(i.COLOR_ATTACHMENT0+fe),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&vi.push(he),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,vi))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let fe=0;fe<S.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,me.__webglColorRenderbuffer[fe]);let D=n.get(S[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,D,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let S=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Ht(I){return Math.min(s.maxSamples,I.samples)}function xe(I){let S=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function an(I){let S=o.render.frame;h.get(I)!==S&&(h.set(I,S),I.update())}function ke(I,S){let H=I.colorSpace,oe=I.format,te=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||H!==Gn&&H!==Us&&(it.getTransfer(H)===Mt?(oe!==Ai||te!==Qn)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",H)),S}function $e(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=Ze,this.resetTextureUnits=ne,this.getTextureUnits=se,this.setTextureUnits=De,this.setTexture2D=be,this.setTexture2DArray=Ie,this.setTexture3D=ze,this.setTextureCube=Se,this.rebindTextures=_i,this.setupRenderTarget=yi,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=xi,this.setupFrameBufferTexture=Wt,this.useMultisampledRTT=xe,this.dispose=W}function Bb(i,e){function t(n,s=Us){let r,o=it.getTransfer(s);if(n===Qn)return i.UNSIGNED_BYTE;if(n===Dc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===af)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===lf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===rf)return i.BYTE;if(n===of)return i.SHORT;if(n===Ho)return i.UNSIGNED_SHORT;if(n===Lc)return i.INT;if(n===Xi)return i.UNSIGNED_INT;if(n===ci)return i.FLOAT;if(n===qi)return i.HALF_FLOAT;if(n===cf)return i.ALPHA;if(n===hf)return i.RGB;if(n===Ai)return i.RGBA;if(n===ws)return i.DEPTH_COMPONENT;if(n===Ns)return i.DEPTH_STENCIL;if(n===Nc)return i.RED;if(n===Uc)return i.RED_INTEGER;if(n===ar)return i.RG;if(n===Oc)return i.RG_INTEGER;if(n===Bc)return i.RGBA_INTEGER;if(n===Ga||n===Va||n===Wa||n===Xa)if(o===Mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zc||n===kc||n===Hc||n===Gc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===zc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===kc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Hc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Gc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vc||n===Wc||n===Xc||n===qc||n===Yc||n===qa||n===Kc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Vc||n===Wc)return o===Mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===qc)return r.COMPRESSED_R11_EAC;if(n===Yc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===qa)return r.COMPRESSED_RG11_EAC;if(n===Kc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===$c||n===Zc||n===Jc||n===jc||n===Qc||n===eh||n===th||n===nh||n===ih||n===sh||n===rh||n===oh||n===ah||n===lh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$c)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===eh)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===th)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===nh)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ih)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sh)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===rh)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===oh)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ah)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===lh)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ch||n===hh||n===uh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ch)return o===Mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===uh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fh||n===dh||n===Ya||n===ph)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===fh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===dh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ya)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ph)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}function Gb(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Mf(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,M,E,b){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,b)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,M,E):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===En&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===En&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let M=e.get(g),E=M.envMap,b=M.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(Hb.makeRotationFromEuler(b)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(N0),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,M,E){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*M,m.scale.value=E*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,M){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===En&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let M=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vb(i,e,t,n){let s={},r={};function o(M,E){let b=E.program;n.uniformBlockBinding(M,b,s[M.id])}function a(M,E){let b=s[M.id];b===void 0&&(p(M),b=l(M),s[M.id]=b,M.addEventListener("dispose",m));let w=E.program;n.updateUBOMapping(M,w);let R=e.render.frame;r[M.id]!==R&&(c(M),r[M.id]=R)}function l(M){let E=i.createBuffer(),b=M.__size,w=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,b,w),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function c(M){let E=s[M.id],b=M.uniforms,w=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let R=0,y=b.length;R<y;R++){let A=b[R];if(Array.isArray(A))for(let F=0,C=A.length;F<C;F++)h(A[F],R,F,w);else h(A,R,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,E,b,w){if(d(M,E,b,w)===!0){let R=M.__offset,y=M.value;if(Array.isArray(y)){let A=0;for(let F=0;F<y.length;F++){let C=y[F],P=_(C,!0);u(C,M.__data,A),A+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else u(y,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,R,M.__data)}}function u(M,E,b){typeof M=="number"||typeof M=="boolean"?E[b]=M:M.isMatrix3?(E[b]=M.elements[0],E[b+1]=M.elements[1],E[b+2]=M.elements[2],E[b+3]=0,E[b+4]=M.elements[3],E[b+5]=M.elements[4],E[b+6]=M.elements[5],E[b+7]=0,E[b+8]=M.elements[6],E[b+9]=M.elements[7],E[b+10]=M.elements[8],E[b+11]=0):ArrayBuffer.isView(M)?E.set(M.subarray(0,E.length-b),b):M.toArray(E,b)}function d(M,E,b,w){let R=M.value,y=E+"_"+b;if(Array.isArray(R)){w[y]===void 0&&(w[y]=[]);let A=w[y],F=!1;for(let C=0;C<R.length;C++)f(R[C],A,C)===!0&&(F=!0);return F}return f(R,w,y)}function f(M,E,b){if(E[b]===void 0)return typeof M=="number"||typeof M=="boolean"?E[b]=M:ArrayBuffer.isView(M)?E[b]=M.slice():E[b]=M.clone(),!0;{let w=E[b];if(typeof M=="number"||typeof M=="boolean"){if(w!==M)return E[b]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(w.equals(M)===!1)return w.copy(M),!0}}return!1}function p(M){let E=M.uniforms,b=0,w=16;for(let y=0,A=E.length;y<A;y++){let F=Array.isArray(E[y])?E[y]:[E[y]];for(let C=0,P=F.length;C<P;C++){let O=F[C],z=Array.isArray(O.value)?O.value:[O.value],L=Array.isArray(E[y])||Array.isArray(O.value),W=b;for(let q=0,re=z.length;q<re;q++){let $=z[q],ne=_($,L),se=b%w,De=se%ne.boundary,Ze=se+De;b+=De,Ze!==0&&w-Ze<ne.storage&&(b+=w-Ze),q===0&&(W=b),b+=ne.storage}let Z=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new Z((b-W)/Float32Array.BYTES_PER_ELEMENT),O.__offset=W}}let R=b%w;return R>0&&(b+=w-R),M.__size=b,M.__cache={},this}function _(M,E){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=16,b.storage=48):M.isMatrix4?(b.boundary=16,b.storage=64):M.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",M),E===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function m(M){let E=M.target;E.removeEventListener("dispose",m),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function g(){for(let M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:o,update:a,dispose:g}}function Xb(){return ls===null&&(ls=new Po(Wb,16,16,ar,qi),ls.name="DFG_LUT",ls.minFilter=hn,ls.magFilter=hn,ls.wrapS=bi,ls.wrapT=bi,ls.generateMipmaps=!1,ls.needsUpdate=!0),ls}var ly,cy,hy,uy,fy,dy,py,my,gy,xy,_y,yy,vy,My,by,Sy,Ey,Ty,wy,Ay,Ry,Cy,Iy,Py,Ly,Dy,Fy,Ny,Uy,Oy,By,zy,ky,Hy,Gy,Vy,Wy,Xy,qy,Yy,Ky,$y,Zy,Jy,jy,Qy,ev,tv,nv,iv,sv,rv,ov,av,lv,cv,hv,uv,fv,dv,pv,mv,gv,xv,_v,yv,vv,Mv,bv,Sv,Ev,Tv,wv,Av,Rv,Cv,Iv,Pv,Lv,Dv,Fv,Nv,Uv,Ov,Bv,zv,kv,Hv,Gv,Vv,Wv,Xv,qv,Yv,Kv,$v,Zv,Jv,jv,Qv,eM,tM,nM,iM,sM,rM,oM,aM,lM,cM,hM,uM,fM,dM,pM,mM,gM,xM,_M,yM,vM,MM,bM,SM,EM,TM,wM,AM,RM,CM,IM,PM,LM,DM,FM,NM,UM,OM,BM,zM,kM,nt,Me,cs,_h,HM,w0,ja,s0,YM,KM,A0,R0,$M,ZM,JM,vh,l1,C0,I0,P0,L0,D0,F0,l0,c0,h0,u0,f0,Df,Ff,Nf,Pf,Vo,J1,j1,m0,nb,yh,lb,hb,fb,pb,gb,yb,Of,Bf,Ab,Pb,Lb,Db,Fb,E0,Za,Lf,zb,kb,zf,kf,Hb,N0,Wb,ls,Mh,hi=ln(()=>{If();If();ly=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,py=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,my=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,xy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_y=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,My=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,by=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Sy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ey=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ty=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ay=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ry=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Cy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Iy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Py=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ly=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Dy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ny=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Oy="gl_FragColor = linearToOutputTexel( gl_FragColor );",By=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ky=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Hy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ky=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$y=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Qy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ev=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ov=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,av=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cv=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,hv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_v=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mv=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ev=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Av=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Iv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Pv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ov=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Wv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$v=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,iM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,oM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,aM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hM=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,xM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_M=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,RM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,CM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,LM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,UM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:ly,alphahash_pars_fragment:cy,alphamap_fragment:hy,alphamap_pars_fragment:uy,alphatest_fragment:fy,alphatest_pars_fragment:dy,aomap_fragment:py,aomap_pars_fragment:my,batching_pars_vertex:gy,batching_vertex:xy,begin_vertex:_y,beginnormal_vertex:yy,bsdfs:vy,iridescence_fragment:My,bumpmap_pars_fragment:by,clipping_planes_fragment:Sy,clipping_planes_pars_fragment:Ey,clipping_planes_pars_vertex:Ty,clipping_planes_vertex:wy,color_fragment:Ay,color_pars_fragment:Ry,color_pars_vertex:Cy,color_vertex:Iy,common:Py,defaultnormal_vertex:Ly,displacementmap_pars_vertex:Dy,displacementmap_vertex:Fy,emissivemap_fragment:Ny,emissivemap_pars_fragment:Uy,colorspace_fragment:Oy,colorspace_pars_fragment:By,envmap_fragment:zy,envmap_common_pars_fragment:ky,envmap_pars_fragment:Hy,envmap_pars_vertex:Gy,envmap_physical_pars_fragment:Qy,envmap_vertex:Vy,fog_vertex:Wy,fog_pars_vertex:Xy,fog_fragment:qy,fog_pars_fragment:Yy,gradientmap_pars_fragment:Ky,lightmap_pars_fragment:$y,lights_lambert_fragment:Zy,lights_lambert_pars_fragment:Jy,lights_pars_begin:jy,lights_toon_fragment:ev,lights_toon_pars_fragment:tv,lights_phong_fragment:nv,lights_phong_pars_fragment:iv,lights_physical_fragment:sv,lights_physical_pars_fragment:rv,lights_fragment_begin:ov,lights_fragment_maps:av,lights_fragment_end:lv,lightprobes_pars_fragment:cv,logdepthbuf_fragment:hv,logdepthbuf_pars_fragment:uv,logdepthbuf_pars_vertex:fv,logdepthbuf_vertex:dv,map_fragment:pv,map_pars_fragment:mv,map_particle_fragment:gv,map_particle_pars_fragment:xv,metalnessmap_fragment:_v,metalnessmap_pars_fragment:yv,morphinstance_vertex:vv,morphcolor_vertex:Mv,morphnormal_vertex:bv,morphtarget_pars_vertex:Sv,morphtarget_vertex:Ev,normal_fragment_begin:Tv,normal_fragment_maps:wv,normal_pars_fragment:Av,normal_pars_vertex:Rv,normal_vertex:Cv,normalmap_pars_fragment:Iv,clearcoat_normal_fragment_begin:Pv,clearcoat_normal_fragment_maps:Lv,clearcoat_pars_fragment:Dv,iridescence_pars_fragment:Fv,opaque_fragment:Nv,packing:Uv,premultiplied_alpha_fragment:Ov,project_vertex:Bv,dithering_fragment:zv,dithering_pars_fragment:kv,roughnessmap_fragment:Hv,roughnessmap_pars_fragment:Gv,shadowmap_pars_fragment:Vv,shadowmap_pars_vertex:Wv,shadowmap_vertex:Xv,shadowmask_pars_fragment:qv,skinbase_vertex:Yv,skinning_pars_vertex:Kv,skinning_vertex:$v,skinnormal_vertex:Zv,specularmap_fragment:Jv,specularmap_pars_fragment:jv,tonemapping_fragment:Qv,tonemapping_pars_fragment:eM,transmission_fragment:tM,transmission_pars_fragment:nM,uv_pars_fragment:iM,uv_pars_vertex:sM,uv_vertex:rM,worldpos_vertex:oM,background_vert:aM,background_frag:lM,backgroundCube_vert:cM,backgroundCube_frag:hM,cube_vert:uM,cube_frag:fM,depth_vert:dM,depth_frag:pM,distance_vert:mM,distance_frag:gM,equirect_vert:xM,equirect_frag:_M,linedashed_vert:yM,linedashed_frag:vM,meshbasic_vert:MM,meshbasic_frag:bM,meshlambert_vert:SM,meshlambert_frag:EM,meshmatcap_vert:TM,meshmatcap_frag:wM,meshnormal_vert:AM,meshnormal_frag:RM,meshphong_vert:CM,meshphong_frag:IM,meshphysical_vert:PM,meshphysical_frag:LM,meshtoon_vert:DM,meshtoon_frag:FM,points_vert:NM,points_frag:UM,shadow_vert:OM,shadow_frag:BM,sprite_vert:zM,sprite_frag:kM},Me={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},cs={basic:{uniforms:Dn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:Dn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Te(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:Dn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:Dn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:Dn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Te(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:Dn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:Dn([Me.points,Me.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:Dn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:Dn([Me.common,Me.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:Dn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:Dn([Me.sprite,Me.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:Dn([Me.common,Me.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:Dn([Me.lights,Me.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};cs.physical={uniforms:Dn([cs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};_h={r:0,b:0,g:0},HM=new We,w0=new Ke;w0.set(-1,0,0,0,1,0,0,0,1);ja=class extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ia(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Sn(5,5,5),r=new Ti({name:"CubemapFromEquirect",uniforms:qr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:En,blending:Hr});r.uniforms.tEquirect.value=t;let o=new Be(s,r),a=t.minFilter;return t.minFilter===wi&&(t.minFilter=hn),new No(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},s0=256,YM=3,KM=20,A0=256,R0=16,$M=3,ZM=new N,JM=new Te,vh=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new No(1,10,null),this._boxMesh=new Be(new Sn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=ZM}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(JM));let m=new No(n,s,h);return m.position.copy(a),m.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=a0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=o0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(s0,_f(e))}_fromTexture(e,t){e.mapping===Vr||e.mapping===zo?this._setSize(e.image.length===0?s0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=r0(e,!1,!1),n=Math.log2(e)-YM;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=r0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Vr||e.mapping===zo?(this._cubemapMaterial===null&&(this._cubemapMaterial=a0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=o0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=jM(),this._integrationMaterial=QM());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/R0);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-$M)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(A0*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=e1());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};l1={[Zu]:"LINEAR_TONE_MAPPING",[Ju]:"REINHARD_TONE_MAPPING",[ju]:"CINEON_TONE_MAPPING",[Qu]:"ACES_FILMIC_TONE_MAPPING",[tf]:"AGX_TONE_MAPPING",[nf]:"NEUTRAL_TONE_MAPPING",[ef]:"CUSTOM_TONE_MAPPING"};C0=new un,I0=new Rs(1,1),P0=new Pa(1),L0=new Ma,D0=new hc,F0=new Ia,l0=[],c0=[],h0=new Float32Array(16),u0=new Float32Array(9),f0=new Float32Array(4);Df=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=C1(t.type)}},Ff=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$1(t.type)}},Nf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Pf=/(\w+)(\])?(\[|\.)?/g;Vo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Z1(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};J1=37297,j1=0;m0=new Ke;nb={[Zu]:"Linear",[Ju]:"Reinhard",[ju]:"Cineon",[Qu]:"ACESFilmic",[tf]:"AgX",[nf]:"Neutral",[ef]:"Custom"};yh=new N;lb=/^[ \t]*#include +<([\w\d./]+)>/gm;hb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;fb={[Ha]:"SHADOWMAP_TYPE_PCF",[Oo]:"SHADOWMAP_TYPE_VSM"};pb={[zo]:"ENVMAP_MODE_REFRACTION"};gb={[Rc]:"ENVMAP_BLENDING_MULTIPLY",[Nm]:"ENVMAP_BLENDING_MIX",[Um]:"ENVMAP_BLENDING_ADD"};yb=0,Of=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Bf(e),t.set(e,n)),n}},Bf=class{constructor(e){this.id=yb++,this.code=e,this.usedTimes=0}};Ab=0;Pb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Db=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],Fb=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],E0=new We,Za=new N,Lf=new N;zb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,zf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new La(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ti({vertexShader:zb,fragmentShader:kb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Be(new Fr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},kf=class extends Gi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,_=typeof XRWebGLBinding<"u",m=new zf,g={},M=t.getContextAttributes(),E=null,b=null,w=[],R=[],y=new Ye,A=null,F=null,C=new cn;C.viewport=new At;let P=new cn;P.viewport=new At;let O=[C,P],z=new Ec,L=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let be=w[Q];return be===void 0&&(be=new Ao,w[Q]=be),be.getTargetRaySpace()},this.getControllerGrip=function(Q){let be=w[Q];return be===void 0&&(be=new Ao,w[Q]=be),be.getGripSpace()},this.getHand=function(Q){let be=w[Q];return be===void 0&&(be=new Ao,w[Q]=be),be.getHandSpace()};function Z(Q){let be=R.indexOf(Q.inputSource);if(be===-1)return;let Ie=w[be];Ie!==void 0&&(Ie.update(Q.inputSource,Q.frame,c||o),Ie.dispatchEvent({type:Q.type,data:Q.inputSource}))}function q(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",re);for(let Q=0;Q<w.length;Q++){let be=R[Q];be!==null&&(R[Q]=null,w[Q].disconnect(be))}L=null,W=null,m.reset();for(let Q in g)delete g[Q];if(e.setRenderTarget(E),f=null,d=null,u=null,s=null,b=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(y.width,y.height,!1),F!==null){let Q=F.camera;Q.fov=F.fov,Q.zoom=F.zoom,Q.updateProjectionMatrix(),F=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",q),s.addEventListener("inputsourceschange",re),M.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(y),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ie=null,ze=null,Se=null;M.depth&&(Se=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ie=M.stencil?Ns:ws,ze=M.stencil?Xr:Xi);let je={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(je),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new oi(d.textureWidth,d.textureHeight,{format:Ai,type:Qn,depthTexture:new Rs(d.textureWidth,d.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,Ie),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Ie={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Ie),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new oi(f.framebufferWidth,f.framebufferHeight,{format:Ai,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ze.setContext(s),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function re(Q){for(let be=0;be<Q.removed.length;be++){let Ie=Q.removed[be],ze=R.indexOf(Ie);ze>=0&&(R[ze]=null,w[ze].disconnect(Ie))}for(let be=0;be<Q.added.length;be++){let Ie=Q.added[be],ze=R.indexOf(Ie);if(ze===-1){for(let je=0;je<w.length;je++)if(je>=R.length){R.push(Ie),ze=je;break}else if(R[je]===null){R[je]=Ie,ze=je;break}if(ze===-1)break}let Se=w[ze];Se&&Se.connect(Ie)}}function $(Q,be){be===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(be.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let be=Q.near,Ie=Q.far;m.texture!==null&&(m.depthNear>0&&(be=m.depthNear),m.depthFar>0&&(Ie=m.depthFar)),z.near=P.near=C.near=be,z.far=P.far=C.far=Ie,(L!==z.near||W!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),L=z.near,W=z.far),z.layers.mask=Q.layers.mask|6,C.layers.mask=z.layers.mask&-5,P.layers.mask=z.layers.mask&-3;let ze=Q.parent,Se=z.cameras;$(z,ze);for(let je=0;je<Se.length;je++)$(Se[je],ze);z.projectionMatrix.copy(C.projectionMatrix),z.projectionMatrixInverse.copy(C.projectionMatrixInverse),F===null&&Q.isPerspectiveCamera&&(F={camera:Q,fov:Q.fov,zoom:Q.zoom}),ne(Q,z,ze)};function ne(Q,be,Ie){Ie===null?Q.matrix.copy(be.matrixWorld):(Q.matrix.copy(Ie.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(be.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(be.projectionMatrix),Q.projectionMatrixInverse.copy(be.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Cr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(Q){return g[Q]};let se=null;function De(Q,be){if(h=be.getViewerPose(c||o),p=be,h!==null){let Ie=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let ze=!1;Ie.length!==z.cameras.length&&(z.cameras.length=0,ze=!0);for(let Ge=0;Ge<Ie.length;Ge++){let Tt=Ie[Ge],Pt=null;if(f!==null)Pt=f.getViewport(Tt);else{let Mn=u.getViewSubImage(d,Tt);Pt=Mn.viewport,Ge===0&&(e.setRenderTargetTextures(b,Mn.colorTexture,Mn.depthStencilTexture),e.setRenderTarget(b))}let lt=O[Ge];lt===void 0&&(lt=new cn,lt.layers.enable(Ge),lt.viewport=new At,O[Ge]=lt),lt.matrix.fromArray(Tt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(Tt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),Ge===0&&(z.matrix.copy(lt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),ze===!0&&z.cameras.push(lt)}let Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let Ge=u.getDepthInformation(Ie[0]);Ge&&Ge.isValid&&Ge.texture&&m.init(Ge,s.renderState)}if(Se&&Se.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let Ge=0;Ge<Ie.length;Ge++){let Tt=Ie[Ge].camera;if(Tt){let Pt=g[Tt];Pt||(Pt=new La,g[Tt]=Pt);let lt=u.getCameraImage(Tt);Pt.sourceTexture=lt}}}}for(let Ie=0;Ie<w.length;Ie++){let ze=R[Ie],Se=w[Ie];ze!==null&&Se!==void 0&&Se.update(ze,be,c||o)}se&&se(Q,be),be.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:be}),p=null}let Ze=new T0;Ze.setAnimationLoop(De),this.setAnimationLoop=function(Q){se=Q},this.dispose=function(){}}},Hb=new We,N0=new Ke;N0.set(-1,0,0,0,1,0,0,0,1);Wb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ls=null;Mh=class{constructor(e={}){let{canvas:t=Zm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Qn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=f,m=new Set([Bc,Oc,Uc]),g=new Set([Qn,Xi,Ho,Xr,Dc,Fc]),M=new Uint32Array(4),E=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},w=null,R=null,y=[],A=[],F=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=os,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,P=!1,O=null,z=null,L=null,W=null;this._outputColorSpace=Dt;let Z=0,q=0,re=null,$=-1,ne=null,se=new At,De=new At,Ze=null,Q=new Te(0),be=0,Ie=t.width,ze=t.height,Se=1,je=null,tn=null,Ge=new At(0,0,Ie,ze),Tt=new At(0,0,Ie,ze),Pt=!1,lt=new sr,Mn=new uc,on=!1,Zn=!1,Wt=new We,Qi=new N,gn=new At,xi={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_i=!1;function yi(){return re===null?Se:1}let B=n;function vi(T,U){return t.getContext(T,U)}let kt,Ht,xe,an,ke,$e,I,S,H,oe,te,he,me,J,j,fe,D,ee,K,de,ce,ue,Ue;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Oe,!1),t.addEventListener("webglcontextrestored",et,!1),t.addEventListener("webglcontextcreationerror",ve,!1),B===null){let U="webgl2";if(B=vi(U,T),B===null)throw vi(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}tt()}catch(T){throw t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Ve("WebGLRenderer: "+T.message),T}function tt(){kt=new n1(B),kt.init(),ce=new Bb(B,kt),Ht=new XM(B,kt,e,ce),xe=new Ub(B,kt),Ht.reversedDepthBuffer&&d&&xe.buffers.depth.setReversed(!0),z=B.createFramebuffer(),L=B.createFramebuffer(),W=B.createFramebuffer(),an=new r1(B),ke=new bb,$e=new Ob(B,kt,xe,ke,Ht,ce,an),I=new t1(C),S=new ay(B),ue=new VM(B,S),H=new i1(B,S,an,ue),oe=new a1(B,H,S,ue,an),ee=new o1(B,Ht,$e),j=new qM(ke),te=new Mb(C,I,kt,Ht,ue,j),he=new Gb(C,ke),me=new Eb,J=new Ib(kt),D=new GM(C,I,xe,oe,p,l),fe=new Nb(C,oe,Ht),Ue=new Vb(B,an,Ht,xe),K=new WM(B,kt,an),de=new s1(B,kt,an),an.programs=te.programs,C.capabilities=Ht,C.extensions=kt,C.properties=ke,C.renderLists=me,C.shadowMap=fe,C.state=xe,C.info=an}_!==Qn&&(F=new c1(_,t.width,t.height,a,s,r));let le=new kf(C,B);this.xr=le,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let T=kt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=kt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(T){T!==void 0&&(Se=T,this.setSize(Ie,ze,!1))},this.getSize=function(T){return T.set(Ie,ze)},this.setSize=function(T,U,X=!0){if(le.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}Ie=T,ze=U,t.width=Math.floor(T*Se),t.height=Math.floor(U*Se),X===!0&&(t.style.width=T+"px",t.style.height=U+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(Ie*Se,ze*Se).floor()},this.setDrawingBufferSize=function(T,U,X){Ie=T,ze=U,Se=X,t.width=Math.floor(T*X),t.height=Math.floor(U*X),this.setViewport(0,0,T,U)},this.setEffects=function(T){if(_===Qn){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let U=0;U<T.length;U++)if(T[U].isOutputPass===!0){Ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(se)},this.getViewport=function(T){return T.copy(Ge)},this.setViewport=function(T,U,X,k){T.isVector4?Ge.set(T.x,T.y,T.z,T.w):Ge.set(T,U,X,k),xe.viewport(se.copy(Ge).multiplyScalar(yi()).round())},this.getScissor=function(T){return T.copy(Tt)},this.setScissor=function(T,U,X,k){T.isVector4?Tt.set(T.x,T.y,T.z,T.w):Tt.set(T,U,X,k),xe.scissor(De.copy(Tt).multiplyScalar(yi()).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(T){xe.setScissorTest(Pt=T)},this.setOpaqueSort=function(T){je=T},this.setTransparentSort=function(T){tn=T},this.getClearColor=function(T){return T.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,X=!0){let k=0;if(T){let G=!1;if(re!==null){let ge=re.texture.format;G=m.has(ge)}if(G){let ge=re.texture.type,Ce=g.has(ge),pe=D.getClearColor(),Ee=D.getClearAlpha(),Fe=pe.r,Je=pe.g,ct=pe.b;Ce?(M[0]=Fe,M[1]=Je,M[2]=ct,M[3]=Ee,B.clearBufferuiv(B.COLOR,0,M)):(E[0]=Fe,E[1]=Je,E[2]=ct,E[3]=Ee,B.clearBufferiv(B.COLOR,0,E))}else k|=B.COLOR_BUFFER_BIT}U&&(k|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(k|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&B.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),O=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),D.dispose(),me.dispose(),J.dispose(),$e.dispose(),ke.dispose(),I.dispose(),oe.dispose(),H.dispose(),ue.dispose(),Ue.dispose(),te.dispose(),le.dispose(),le.removeEventListener("sessionstart",_p),le.removeEventListener("sessionend",yp),xr.stop()};function Oe(T){T.preventDefault(),va("WebGLRenderer: Context Lost."),P=!0}function et(){va("WebGLRenderer: Context Restored."),P=!1;let T=an.autoReset,U=fe.enabled,X=fe.autoUpdate,k=fe.needsUpdate,G=fe.type;tt(),an.autoReset=T,fe.enabled=U,fe.autoUpdate=X,fe.needsUpdate=k,fe.type=G}function ve(T){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function wt(T){let U=T.target;U.removeEventListener("dispose",wt),xn(U)}function xn(T){Ks(T),ke.remove(T)}function Ks(T){let U=ke.get(T).programs;U!==void 0&&(U.forEach(function(X){te.releaseProgram(X)}),T.isShaderMaterial&&te.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,X,k,G,ge){U===null&&(U=xi);let Ce=G.isMesh&&G.matrixWorld.determinantAffine()<0,pe=Qx(T,U,X,k,G);xe.setMaterial(k,Ce);let Ee=X.index,Fe=1;if(k.wireframe===!0){if(Ee=H.getWireframeAttribute(X),Ee===void 0)return;Fe=2}let Je=X.drawRange,ct=X.attributes.position,Pe=Je.start*Fe,ht=(Je.start+Je.count)*Fe;ge!==null&&(Pe=Math.max(Pe,ge.start*Fe),ht=Math.min(ht,(ge.start+ge.count)*Fe)),Ee!==null?(Pe=Math.max(Pe,0),ht=Math.min(ht,Ee.count)):ct!=null&&(Pe=Math.max(Pe,0),ht=Math.min(ht,ct.count));let nn=ht-Pe;if(nn<0||nn===1/0)return;ue.setup(G,k,pe,X,Ee);let Nt,Lt=K;if(Ee!==null&&(Nt=S.get(Ee),Lt=de,Lt.setIndex(Nt)),G.isMesh)k.wireframe===!0?(xe.setLineWidth(k.wireframeLinewidth*yi()),Lt.setMode(B.LINES)):Lt.setMode(B.TRIANGLES);else if(G.isLine){let Rn=k.linewidth;Rn===void 0&&(Rn=1),xe.setLineWidth(Rn*yi()),G.isLineSegments?Lt.setMode(B.LINES):G.isLineLoop?Lt.setMode(B.LINE_LOOP):Lt.setMode(B.LINE_STRIP)}else G.isPoints?Lt.setMode(B.POINTS):G.isSprite&&Lt.setMode(B.TRIANGLES);if(G.isBatchedMesh)if(kt.get("WEBGL_multi_draw"))Lt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Rn=G._multiDrawStarts,Le=G._multiDrawCounts,kn=G._multiDrawCount,_t=Ee?S.get(Ee).bytesPerElement:1,_r=ke.get(k).currentProgram.getUniforms();for(let Cn=0;Cn<kn;Cn++)_r.setValue(B,"_gl_DrawID",Cn),Lt.render(Rn[Cn]/_t,Le[Cn])}else if(G.isInstancedMesh)Lt.renderInstances(Pe,nn,G.count);else if(X.isInstancedBufferGeometry){let Rn=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Le=Math.min(X.instanceCount,Rn);Lt.renderInstances(Pe,nn,Le)}else Lt.render(Pe,nn)};function xp(T,U,X,k){O!==null&&T.isNodeMaterial&&O.setObject(k,T),on===!0&&j.setState(T,X,!1),T.transparent===!0&&T.side===bt&&T.forceSinglePass===!1?(T.side=En,T.needsUpdate=!0,oa(T,U,k),T.side=rs,T.needsUpdate=!0,oa(T,U,k),T.side=bt):oa(T,U,k)}this.compile=function(T,U,X=null){X===null&&(X=T),O!==null&&O.renderStart(T,U,X),R=J.get(X),R.init(U),A.push(R),X.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(R.pushLight(G),G.castShadow&&R.pushShadow(G))}),T!==X&&T.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(R.pushLight(G),G.castShadow&&R.pushShadow(G))}),R.setupLights(),O!==null&&O.updateLights(R.state.lightsArray),Zn=this.localClippingEnabled,on=j.init(this.clippingPlanes,Zn),on===!0&&j.setGlobalState(this.clippingPlanes,U),O!==null&&fe.render(R.state.shadowsArray,X,U);let k=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let ge=G.material;if(ge)if(Array.isArray(ge))for(let Ce=0;Ce<ge.length;Ce++){let pe=ge[Ce];xp(pe,X,U,G),k.add(pe)}else xp(ge,X,U,G),k.add(ge)}),R=A.pop(),O!==null&&O.renderEnd(),k},this.compileAsync=function(T,U,X=null){let k=this.compile(T,U,X);return new Promise(G=>{function ge(){if(k.forEach(function(Ce){let Ee=ke.get(Ce).currentProgram;(Ee===void 0||Ee.isReady())&&k.delete(Ce)}),k.size===0){G(T);return}setTimeout(ge,10)}kt.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let cu=null;function Jx(T){cu&&cu(T)}function _p(){xr.stop()}function yp(){xr.start()}let xr=new T0;xr.setAnimationLoop(Jx),typeof self<"u"&&xr.setContext(self),this.setAnimationLoop=function(T){cu=T,le.setAnimationLoop(T),T===null?xr.stop():xr.start()},le.addEventListener("sessionstart",_p),le.addEventListener("sessionend",yp),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;O!==null&&O.renderStart(T,U);let X=le.enabled===!0&&le.isPresenting===!0,k=F!==null&&(re===null||X)&&F.begin(C,re);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(U),U=le.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,U,re),R=J.get(T,A.length),R.init(U),R.state.textureUnits=$e.getTextureUnits(),A.push(R),Wt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?Mn.setFromArrayCamera(U):lt.setFromProjectionMatrix(Wt,Si,U.reversedDepth),Zn=this.localClippingEnabled,on=j.init(this.clippingPlanes,Zn),w=me.get(T,y.length),w.init(),y.push(w),this.info.render.frame++,le.enabled===!0&&le.isPresenting===!0){let Ce=C.xr.getDepthSensingMesh();Ce!==null&&hu(Ce,U,-1/0,C.sortObjects)}hu(T,U,0,C.sortObjects),w.finish(),O!==null&&O.updateLights(R.state.lightsArray),C.sortObjects===!0&&w.sort(je,tn),_i=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,_i&&D.addToRenderList(w,T),this.info.autoReset===!0&&this.info.reset(),on===!0&&j.beginShadows();let G=R.state.shadowsArray;if(fe.render(G,T,U),on===!0&&j.endShadows(),(k&&F.hasRenderPass())===!1){let Ce=w.opaque,pe=w.transmissive;if(R.setupLights(),U.isArrayCamera){let Ee=U.cameras;if(pe.length>0)for(let Fe=0,Je=Ee.length;Fe<Je;Fe++){let ct=Ee[Fe];Mp(Ce,pe,T,ct)}_i&&D.render(T);for(let Fe=0,Je=Ee.length;Fe<Je;Fe++){let ct=Ee[Fe];vp(w,T,ct,ct.viewport)}}else pe.length>0&&Mp(Ce,pe,T,U),_i&&D.render(T),vp(w,T,U)}re!==null&&q===0&&($e.updateMultisampleRenderTarget(re),$e.updateRenderTargetMipmap(re)),k&&F.end(C),T.isScene===!0&&T.onAfterRender(C,T,U),ue.resetDefaultState(),$=-1,ne=null,A.pop(),A.length>0?(R=A[A.length-1],$e.setTextureUnits(R.state.textureUnits),on===!0&&j.setGlobalState(C.clippingPlanes,R.state.camera)):R=null,y.pop(),y.length>0?w=y[y.length-1]:w=null,O!==null&&O.renderEnd()};function hu(T,U,X,k){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)R.pushLight(T),T.castShadow&&R.pushShadow(T);else if(T.isSprite){let Ce=U.isArrayCamera?Mn:lt;if(!T.frustumCulled||T.intersectsFrustum(Ce)){k&&gn.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Wt);let pe=oe.update(T),Ee=T.material;Ee.visible&&w.push(T,pe,Ee,X,gn.z,null,U)}}else if(T.isMesh||T.isLine||T.isPoints){let Ce=U.isArrayCamera?Mn:lt;if(!T.frustumCulled||T.intersectsFrustum(Ce)){let pe=oe.update(T),Ee=T.material;if(k&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),gn.copy(T.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),gn.copy(pe.boundingSphere.center)),gn.applyMatrix4(T.matrixWorld).applyMatrix4(Wt)),Array.isArray(Ee)){let Fe=pe.groups;for(let Je=0,ct=Fe.length;Je<ct;Je++){let Pe=Fe[Je],ht=Ee[Pe.materialIndex];ht&&ht.visible&&w.push(T,pe,ht,X,gn.z,Pe,U)}}else Ee.visible&&w.push(T,pe,Ee,X,gn.z,null,U)}}}let ge=T.children;for(let Ce=0,pe=ge.length;Ce<pe;Ce++)hu(ge[Ce],U,X,k)}function vp(T,U,X,k){let{opaque:G,transmissive:ge,transparent:Ce}=T;R.setupLightsView(X),on===!0&&j.setGlobalState(C.clippingPlanes,X),k&&xe.viewport(se.copy(k)),G.length>0&&wl(G,U,X),ge.length>0&&wl(ge,U,X),Ce.length>0&&wl(Ce,U,X),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Mp(T,U,X,k){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[k.id]===void 0){let Pe=kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[k.id]=new oi(1,1,{generateMipmaps:!0,type:Pe?qi:Qn,minFilter:wi,samples:Math.max(4,Ht.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:it.workingColorSpace})}let ge=R.state.transmissionRenderTarget[k.id],Ce=k.viewport||se;ge.setSize(Ce.z*C.transmissionResolutionScale,Ce.w*C.transmissionResolutionScale);let pe=C.getRenderTarget(),Ee=C.getActiveCubeFace(),Fe=C.getActiveMipmapLevel();C.setRenderTarget(ge),C.getClearColor(Q),be=C.getClearAlpha(),be<1&&C.setClearColor(16777215,.5),C.clear(),_i&&D.render(X);let Je=C.toneMapping;C.toneMapping=os;let ct=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),R.setupLightsView(k),on===!0&&j.setGlobalState(C.clippingPlanes,k),wl(T,X,k),$e.updateMultisampleRenderTarget(ge),$e.updateRenderTargetMipmap(ge),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let ht=0,nn=U.length;ht<nn;ht++){let Nt=U[ht],{object:Lt,geometry:Rn,material:Le,group:kn}=Nt;if(Le.side===bt&&Lt.layers.test(k.layers)){let _t=Le.side;Le.side=En,Le.needsUpdate=!0,bp(Lt,X,k,Rn,Le,kn),Le.side=_t,Le.needsUpdate=!0,Pe=!0}}Pe===!0&&($e.updateMultisampleRenderTarget(ge),$e.updateRenderTargetMipmap(ge))}C.setRenderTarget(pe,Ee,Fe),C.setClearColor(Q,be),ct!==void 0&&(k.viewport=ct),C.toneMapping=Je}function wl(T,U,X){let k=U.isScene===!0?U.overrideMaterial:null;for(let G=0,ge=T.length;G<ge;G++){let Ce=T[G],{object:pe,geometry:Ee,group:Fe}=Ce,Je=Ce.material;Je.allowOverride===!0&&k!==null&&(Je=k),pe.layers.test(X.layers)&&bp(pe,U,X,Ee,Je,Fe)}}function bp(T,U,X,k,G,ge){O!==null&&G.isNodeMaterial&&O.setObject(T,G),T.onBeforeRender(C,U,X,k,G,ge),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(C,U,X,k,T,ge),G.transparent===!0&&G.side===bt&&G.forceSinglePass===!1?(G.side=En,G.needsUpdate=!0,C.renderBufferDirect(X,U,k,G,T,ge),G.side=rs,G.needsUpdate=!0,C.renderBufferDirect(X,U,k,G,T,ge),G.side=bt):C.renderBufferDirect(X,U,k,G,T,ge),T.onAfterRender(C,U,X,k,G,ge)}function Sp(T){let U=0;for(let X of T)X.texture!==null&&U++;return U}function oa(T,U,X){U.isScene!==!0&&(U=xi);let k=ke.get(T),G=R.state.lights,ge=R.state.shadowsArray,Ce=G.state.version,pe=te.getParameters(T,G.state,ge,U,X,R.state.lightProbeGridArray),Ee=te.getProgramCacheKey(pe),Fe=k.programs;k.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?U.environment:null,k.fog=U.fog;let Je=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;k.envMap=I.get(T.envMap||k.environment,Je),k.envMapRotation=k.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Fe===void 0&&(T.addEventListener("dispose",wt),Fe=new Map,k.programs=Fe,k.programVariants=new Map);let ct=Fe.get(Ee);if(ct!==void 0){if(k.currentProgram===ct&&k.lightsStateVersion===Ce)return Tp(T,pe),ct}else pe.uniforms=te.getUniforms(T),O!==null&&T.isNodeMaterial&&O.build(T,X,pe),T.onBeforeCompile(pe,C),ct=te.acquireProgram(pe,Ee),Fe.set(Ee,ct),k.uniforms=pe.uniforms;let Pe=k.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pe.clippingPlanes=j.uniform),Tp(T,pe),k.needsLights=t_(T),k.lightsStateVersion=Ce,k.needsLights&&(Pe.ambientLightColor.value=G.state.ambient,Pe.lightProbe.value=G.state.probe,Pe.sunLights.value=G.state.sun,Pe.sunLightShadows.value=G.state.sunShadow,Pe.directionalLights.value=G.state.directional,Pe.directionalLightShadows.value=G.state.directionalShadow,Pe.spotLights.value=G.state.spot,Pe.spotLightShadows.value=G.state.spotShadow,Pe.rectAreaLights.value=G.state.rectArea,Pe.ltc_1.value=G.state.rectAreaLTC1,Pe.ltc_2.value=G.state.rectAreaLTC2,Pe.pointLights.value=G.state.point,Pe.pointLightShadows.value=G.state.pointShadow,Pe.hemisphereLights.value=G.state.hemi,Pe.sunShadowMatrix.value=G.state.sunShadowMatrix,Pe.sunShadowCascade.value=G.state.sunShadowCascade,Pe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Pe.spotLightMatrix.value=G.state.spotLightMatrix,Pe.spotLightMap.value=G.state.spotLightMap,Pe.pointShadowMatrix.value=G.state.pointShadowMatrix),k.numLightProbeGrids=Sp(R.state.lightProbeGridArray),k.currentProgram=ct,k.uniformsList=null,ct}function jx(T,U,X,k,G){let ge=ke.get(T),Ce=ge.currentProgram.id+","+k+","+G,pe=ge.programVariants.get(Ce);return pe===void 0?(pe=oa(T,U,X),ge.programVariants.set(Ce,pe)):(ge.currentProgram=pe,ge.uniformsList=null,ge.outputColorSpace=k,ge.toneMapping=G),pe}function Ep(T){if(T.uniformsList===null){let U=T.currentProgram.getUniforms();T.uniformsList=Vo.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Tp(T,U){let X=ke.get(T);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function Qx(T,U,X,k,G){U.isScene!==!0&&(U=xi),$e.resetTextureUnits();let ge=U.fog,Ce=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?U.environment:null,pe=re===null?C.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:it.workingColorSpace,Ee=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Fe=I.get(k.envMap||Ce,Ee),Je=k.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ct=!!X.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Pe=!!X.morphAttributes.position,ht=!!X.morphAttributes.normal,nn=!!X.morphAttributes.color,Nt=os;k.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Nt=C.toneMapping);let Lt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Rn=Lt!==void 0?Lt.length:0,Le=ke.get(k),kn=R.state.lights;if(on===!0&&(Zn===!0||T!==ne)){let Xt=T===ne&&k.id===$;j.setState(k,T,Xt)}let _t=!1,_r=!1;k.version===Le.__version?Le.needsLights&&Le.lightsStateVersion!==kn.state.version||G.isBatchedMesh&&Le.batching===!1||!G.isBatchedMesh&&Le.batching===!0||G.isBatchedMesh&&Le.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Le.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Le.instancing===!1||!G.isInstancedMesh&&Le.instancing===!0||G.isSkinnedMesh&&Le.skinning===!1||!G.isSkinnedMesh&&Le.skinning===!0||G.isInstancedMesh&&Le.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Le.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Le.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Le.instancingMorph===!1&&G.morphTexture!==null||Le.envMap!==Fe||k.fog===!0&&Le.fog!==ge||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==j.numPlanes||Le.numIntersection!==j.numIntersection)||Le.vertexAlphas!==Je||Le.vertexTangents!==ct||Le.morphTargets!==Pe||Le.morphNormals!==ht||Le.morphColors!==nn||Le.morphTargetsCount!==Rn||Le.numLightProbeGrids!==Sp(R.state.lightProbeGridArray)?_t=!0:(Le.outputColorSpace!==pe||Le.toneMapping!==Nt)&&(_r=!0):(_t=!0,Le.__version=k.version);let Cn=Le.currentProgram;(_t===!0||_r===!0)&&(Cn=_r===!0?jx(k,U,G,pe,Nt):oa(k,U,G),O&&k.isNodeMaterial&&O.onUpdateProgram(k,Cn,Le));let Al=!1,$s=!1,yr=!1,xt=Cn.getUniforms(),bn=Le.uniforms;if(xe.useProgram(Cn.program)&&(Al=!0,$s=!0,yr=!0),k.id!==$&&($=k.id,$s=!0),Al||ne!==T){xe.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),xt.setValue(B,"projectionMatrix",T.projectionMatrix),xt.setValue(B,"viewMatrix",T.matrixWorldInverse);let _n=xt.map.cameraPosition;_n!==void 0&&_n.setValue(B,Qi.setFromMatrixPosition(T.matrixWorld)),Ht.logarithmicDepthBuffer&&xt.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&xt.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),ne!==T&&(ne=T,$s=!0,yr=!0)}if(Le.needsLights&&(kn.state.sunShadowMap.length>0&&xt.setValue(B,"sunShadowMap",kn.state.sunShadowMap,$e),kn.state.directionalShadowMap.length>0&&xt.setValue(B,"directionalShadowMap",kn.state.directionalShadowMap,$e),kn.state.spotShadowMap.length>0&&xt.setValue(B,"spotShadowMap",kn.state.spotShadowMap,$e),kn.state.pointShadowMap.length>0&&xt.setValue(B,"pointShadowMap",kn.state.pointShadowMap,$e)),G.isSkinnedMesh){xt.setOptional(B,G,"bindMatrix"),xt.setOptional(B,G,"bindMatrixInverse");let Xt=G.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),xt.setValue(B,"boneTexture",Xt.boneTexture,$e))}G.isBatchedMesh&&(xt.setOptional(B,G,"batchingTexture"),xt.setValue(B,"batchingTexture",G._matricesTexture,$e),xt.setOptional(B,G,"batchingIdTexture"),xt.setValue(B,"batchingIdTexture",G._indirectTexture,$e),xt.setOptional(B,G,"batchingColorTexture"),G._colorsTexture!==null&&xt.setValue(B,"batchingColorTexture",G._colorsTexture,$e));let Bi=X.morphAttributes;if((Bi.position!==void 0||Bi.normal!==void 0||Bi.color!==void 0)&&ee.update(G,X,Cn),($s||Le.receiveShadow!==G.receiveShadow)&&(Le.receiveShadow=G.receiveShadow,xt.setValue(B,"receiveShadow",G.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&U.environment!==null&&(bn.envMapIntensity.value=U.environmentIntensity),bn.dfgLUT!==void 0&&(bn.dfgLUT.value=Xb()),$s){if(xt.setValue(B,"toneMappingExposure",C.toneMappingExposure),Le.needsLights&&e_(bn,yr),ge&&k.fog===!0&&he.refreshFogUniforms(bn,ge),he.refreshMaterialUniforms(bn,k,Se,ze,R.state.transmissionRenderTarget[T.id]),Le.needsLights&&Le.numLightProbeGrids>0){let Xt=b,_n=0;for(let _s of R.state.lightProbeGridArray)_s.texture!==null&&(Xt.textures[_n]=_s.texture,Xt.min[_n]=_s.boundingBox.min,Xt.max[_n]=_s.boundingBox.max,Xt.resolution[_n]=_s.resolution,_n++);for(let _s in Xt)Xt[_s].length=_n;bn.probesSH.value=Xt.textures,bn.probesMin.value=Xt.min,bn.probesMax.value=Xt.max,bn.probesResolution.value=Xt.resolution}Vo.upload(B,Ep(Le),bn,$e)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Vo.upload(B,Ep(Le),bn,$e),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&xt.setValue(B,"center",G.center),xt.setValue(B,"modelViewMatrix",G.modelViewMatrix),xt.setValue(B,"normalMatrix",G.normalMatrix),xt.setValue(B,"modelMatrix",G.matrixWorld),k.uniformsGroups!==void 0){let Xt=k.uniformsGroups;for(let _n=0,_s=Xt.length;_n<_s;_n++){let Ap=Xt[_n];Ue.update(Ap,Cn),Ue.bind(Ap,Cn)}}return Cn}function e_(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.sunLights.needsUpdate=U,T.sunLightShadows.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function t_(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(T,U,X){let k=ke.get(T);k.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),ke.get(T.texture).__webglTexture=U,ke.get(T.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:X,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){let X=ke.get(T);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,X=0){re=T,Z=U,q=X;let k=null,G=!1,ge=!1;if(T){let pe=ke.get(T);if(pe.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(B.FRAMEBUFFER,pe.__webglFramebuffer),se.copy(T.viewport),De.copy(T.scissor),Ze=T.scissorTest,xe.viewport(se),xe.scissor(De),xe.setScissorTest(Ze),$=-1;return}else if(pe.__webglFramebuffer===void 0)$e.setupRenderTarget(T);else if(pe.__hasExternalTextures)$e.rebindTextures(T,ke.get(T.texture).__webglTexture,ke.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Je=T.depthTexture;if(pe.__boundDepthTexture!==Je){if(Je!==null&&ke.has(Je)&&(T.width!==Je.image.width||T.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$e.setupDepthRenderbuffer(T)}}let Ee=T.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ge=!0);let Fe=ke.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Fe[U])?k=Fe[U][X]:k=Fe[U],G=!0):T.samples>0&&$e.useMultisampledRTT(T)===!1?k=ke.get(T).__webglMultisampledFramebuffer:Array.isArray(Fe)?k=Fe[X]:k=Fe,se.copy(T.viewport),De.copy(T.scissor),Ze=T.scissorTest}else se.copy(Ge).multiplyScalar(Se).floor(),De.copy(Tt).multiplyScalar(Se).floor(),Ze=Pt;if(X!==0&&(k=z),xe.bindFramebuffer(B.FRAMEBUFFER,k)&&xe.drawBuffers(T,k),xe.viewport(se),xe.scissor(De),xe.setScissorTest(Ze),G){let pe=ke.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,pe.__webglTexture,X)}else if(ge){let pe=U;for(let Ee=0;Ee<T.textures.length;Ee++){let Fe=ke.get(T.textures[Ee]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ee,Fe.__webglTexture,X,pe)}}else if(T!==null&&X!==0){let pe=ke.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,pe.__webglTexture,X)}$=-1};function wp(T){let U=ke.get(T);return(U.__readFormat!==T.format||U.__readType!==T.type)&&(U.__readFormat=T.format,U.__readType=T.type,U.__formatReadable=Ht.textureFormatReadable(T.format),U.__typeReadable=Ht.textureTypeReadable(T.type)),U}this.readRenderTargetPixels=function(T,U,X,k,G,ge,Ce,pe=0){if(!(T&&T.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=ke.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ee=Ee[Ce],Array.isArray(Ee)&&(Ee=Ee[0])),Ee){xe.bindFramebuffer(B.FRAMEBUFFER,Ee);try{let Fe=T.textures[pe],Je=Fe.format,ct=Fe.type;T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+pe);let Pe=wp(Fe);if(Pe.__formatReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-k&&X>=0&&X<=T.height-G&&B.readPixels(U,X,k,G,ce.convert(Je),ce.convert(ct),ge)}finally{let Fe=re!==null?ke.get(re).__webglFramebuffer:null;xe.bindFramebuffer(B.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(T,U,X,k,G,ge,Ce,pe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=ke.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ee=Ee[Ce],Array.isArray(Ee)&&(Ee=Ee[0])),Ee)if(U>=0&&U<=T.width-k&&X>=0&&X<=T.height-G){xe.bindFramebuffer(B.FRAMEBUFFER,Ee);let Fe=T.textures[pe],Je=Fe.format,ct=Fe.type;T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+pe);let Pe=wp(Fe);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ht=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ht),B.bufferData(B.PIXEL_PACK_BUFFER,ge.byteLength,B.STREAM_READ),B.readPixels(U,X,k,G,ce.convert(Je),ce.convert(ct),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let nn=re!==null?ke.get(re).__webglFramebuffer:null;xe.bindFramebuffer(B.FRAMEBUFFER,nn);let Nt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await jm(B,Nt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ht),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ge),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(ht),B.deleteSync(Nt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,X=0){let k=Math.pow(2,-X),G=Math.floor(T.image.width*k),ge=Math.floor(T.image.height*k),Ce=U!==null?U.x:0,pe=U!==null?U.y:0;$e.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,X,0,0,Ce,pe,G,ge),xe.unbindTexture()},this.copyTextureToTexture=function(T,U,X=null,k=null,G=0,ge=0){let Ce,pe,Ee,Fe,Je,ct,Pe,ht,nn,Nt=T.isCompressedTexture?T.mipmaps[ge]:T.image;if(X!==null)Ce=X.max.x-X.min.x,pe=X.max.y-X.min.y,Ee=X.isBox3?X.max.z-X.min.z:1,Fe=X.min.x,Je=X.min.y,ct=X.isBox3?X.min.z:0;else{let xt=Math.pow(2,-G);Ce=Math.floor(Nt.width*xt),pe=Math.floor(Nt.height*xt),T.isDataArrayTexture?Ee=Nt.depth:T.isData3DTexture?Ee=Math.floor(Nt.depth*xt):Ee=1,Fe=0,Je=0,ct=0}k!==null?(Pe=k.x,ht=k.y,nn=k.z):(Pe=0,ht=0,nn=0);let Lt=ce.convert(U.format),Rn=ce.convert(U.type),Le;U.isData3DTexture?($e.setTexture3D(U,0),Le=B.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?($e.setTexture2DArray(U,0),Le=B.TEXTURE_2D_ARRAY):($e.setTexture2D(U,0),Le=B.TEXTURE_2D),xe.activeTexture(B.TEXTURE0),xe.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,U.flipY),xe.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),xe.pixelStorei(B.UNPACK_ALIGNMENT,U.unpackAlignment);let kn=xe.getParameter(B.UNPACK_ROW_LENGTH),_t=xe.getParameter(B.UNPACK_IMAGE_HEIGHT),_r=xe.getParameter(B.UNPACK_SKIP_PIXELS),Cn=xe.getParameter(B.UNPACK_SKIP_ROWS),Al=xe.getParameter(B.UNPACK_SKIP_IMAGES);xe.pixelStorei(B.UNPACK_ROW_LENGTH,Nt.width),xe.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Nt.height),xe.pixelStorei(B.UNPACK_SKIP_PIXELS,Fe),xe.pixelStorei(B.UNPACK_SKIP_ROWS,Je),xe.pixelStorei(B.UNPACK_SKIP_IMAGES,ct);let $s=T.isDataArrayTexture||T.isData3DTexture,yr=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){let xt=ke.get(T),bn=ke.get(U),Bi=ke.get(xt.__renderTarget),Xt=ke.get(bn.__renderTarget);xe.bindFramebuffer(B.READ_FRAMEBUFFER,Bi.__webglFramebuffer),xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let _n=0;_n<Ee;_n++)$s&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ke.get(T).__webglTexture,G,ct+_n),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ke.get(U).__webglTexture,ge,nn+_n)),B.blitFramebuffer(Fe,Je,Fe+Ce,Je+pe,Pe,ht,Pe+Ce,ht+pe,B.DEPTH_BUFFER_BIT,B.NEAREST);xe.bindFramebuffer(B.READ_FRAMEBUFFER,null),xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(G!==0||T.isRenderTargetTexture||ke.has(T)){let xt=ke.get(T),bn=ke.get(U);xe.bindFramebuffer(B.READ_FRAMEBUFFER,L),xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,W);for(let Bi=0;Bi<Ee;Bi++)$s?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,xt.__webglTexture,G,ct+Bi):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,xt.__webglTexture,G),yr?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,bn.__webglTexture,ge,nn+Bi):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,bn.__webglTexture,ge),G!==0?B.blitFramebuffer(Fe,Je,Fe+Ce,Je+pe,Pe,ht,Pe+Ce,ht+pe,B.COLOR_BUFFER_BIT,B.NEAREST):yr?B.copyTexSubImage3D(Le,ge,Pe,ht,nn+Bi,Fe,Je,Ce,pe):B.copyTexSubImage2D(Le,ge,Pe,ht,Fe,Je,Ce,pe);xe.bindFramebuffer(B.READ_FRAMEBUFFER,null),xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else yr?T.isDataTexture||T.isData3DTexture?B.texSubImage3D(Le,ge,Pe,ht,nn,Ce,pe,Ee,Lt,Rn,Nt.data):U.isCompressedArrayTexture?B.compressedTexSubImage3D(Le,ge,Pe,ht,nn,Ce,pe,Ee,Lt,Nt.data):B.texSubImage3D(Le,ge,Pe,ht,nn,Ce,pe,Ee,Lt,Rn,Nt):T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ge,Pe,ht,Ce,pe,Lt,Rn,Nt.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ge,Pe,ht,Nt.width,Nt.height,Lt,Nt.data):B.texSubImage2D(B.TEXTURE_2D,ge,Pe,ht,Ce,pe,Lt,Rn,Nt);xe.pixelStorei(B.UNPACK_ROW_LENGTH,kn),xe.pixelStorei(B.UNPACK_IMAGE_HEIGHT,_t),xe.pixelStorei(B.UNPACK_SKIP_PIXELS,_r),xe.pixelStorei(B.UNPACK_SKIP_ROWS,Cn),xe.pixelStorei(B.UNPACK_SKIP_IMAGES,Al),ge===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&B.generateMipmap(Le),xe.unbindTexture()},this.initRenderTarget=function(T){ke.get(T).__webglFramebuffer===void 0&&$e.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?$e.setTextureCube(T,0):T.isData3DTexture?$e.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?$e.setTexture2DArray(T,0):$e.setTexture2D(T,0),xe.unbindTexture()},this.resetState=function(){Z=0,q=0,re=null,xe.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}});var x,ft,Fn,Hf,v,Re,ui,Bs,ae,jt,Yi=ln(()=>{hi();x={scene:null,camera:null,renderer:null,t:0,wdt:0,slow:1,hitstop:0,slowmoT:0,trauma:0,mode:"menu",paused:!1,player:null,input:null,animals:[],obstacles:[],barrels:[],timers:[],score:0,kills:0,combo:0,comboT:0,bestCombo:0,rage:0,rageOn:0,timeLeft:0,elapsed:0,boss:null,stats:null,onKill:null,onMulti:null,wx:{rain:0,storm:0},buff:{},eyeK:1,env:null,override:null,spMul:1,fovAdd:0,ult:0},ft=72,Fn=[14099998,12720135,11735564,14826286],Hf=[1710614,2763298,1118481],v=(i=1,e)=>e===void 0?Math.random()*i:i+Math.random()*(e-i),Re=i=>i[Math.random()*i.length|0],ui=(i,e,t)=>Math.max(e,Math.min(t,i)),Bs=(i,e,t)=>i+(e-i)*t,ae=(i=0,e=0,t=0)=>new N(i,e,t),jt=(i,e)=>x.timers.push({t:i,fn:e})});function Xf(){if(ye){ye.resume();return}let i=window.AudioContext||window.webkitAudioContext;if(!i)return;ye=new i,Yr=ye.createGain(),Yr.gain.value=.85;let e=ye.createDynamicsCompressor();e.threshold.value=-14,e.ratio.value=6,Yr.connect(e),e.connect(ye.destination),zs=ye.createGain(),zs.gain.value=.9,zs.connect(Yr),qo=ye.createGain(),qo.gain.value=.16,qo.connect(Yr),Kr=ye.createBuffer(1,ye.sampleRate*2,ye.sampleRate);let t=Kr.getChannelData(0);for(let n=0;n<t.length;n++)t[n]=Math.random()*2-1;Zb()}function B0(i){Ut.muted=i,Yr&&(Yr.gain.value=i?0:.85)}function Qe(i,e,t,n,s,r=0,o=zs){if(!ye)return;let a=ye.currentTime+r,l=ye.createOscillator(),c=ye.createGain();l.type=i,l.frequency.setValueAtTime(e,a),t&&l.frequency.exponentialRampToValueAtTime(Math.max(1,t),a+n),c.gain.setValueAtTime(1e-4,a),c.gain.exponentialRampToValueAtTime(s,a+.008),c.gain.exponentialRampToValueAtTime(1e-4,a+n),l.connect(c),c.connect(o),l.start(a),l.stop(a+n+.05)}function pt(i,e,t,n,s="lowpass",r=0,o=.7,a=zs){if(!ye)return;let l=ye.currentTime+r,c=ye.createBufferSource();c.buffer=Kr,c.loop=!0;let h=ye.createBiquadFilter();h.type=s,h.Q.value=o,h.frequency.setValueAtTime(t,l),n&&h.frequency.exponentialRampToValueAtTime(Math.max(20,n),l+i);let u=ye.createGain();u.gain.setValueAtTime(e,l),u.gain.exponentialRampToValueAtTime(1e-4,l+i),c.connect(h),h.connect(u),u.connect(a),c.start(l,Math.random()*1.5),c.stop(l+i+.05)}function U0(i,e,t={}){if(!ye||Vf>=7)return;Vf++,setTimeout(()=>Vf--,(e+(t.delay||0))*1e3+80);let n=ye.currentTime+(t.delay||0),s=t.vol||.5,r=t.f0,o=t.form||1,a=ye.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(r*i[0][1],n);for(let d=1;d<i.length;d++)a.frequency.exponentialRampToValueAtTime(r*i[d][1],n+e*i[d][0]);let l=ye.createOscillator(),c=ye.createGain();l.frequency.value=t.vib||9,c.gain.setValueAtTime(r*.01,n),c.gain.linearRampToValueAtTime(r*(t.vibAmt===void 0?.06:t.vibAmt),n+e),l.connect(c),c.connect(a.frequency);let h=ye.createGain();h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(s,n+.02),h.gain.setValueAtTime(s,n+e*(t.hold||.7)),h.gain.exponentialRampToValueAtTime(1e-4,n+e),[[850,1,5],[1350,.7,7],[2800,.35,8]].forEach(([d,f,p])=>{let _=ye.createBiquadFilter();_.type="bandpass",_.frequency.value=d*o,_.Q.value=p;let m=ye.createGain();m.gain.value=f,a.connect(_),_.connect(m),m.connect(h)});let u=[a,l];if(t.trem){let d=ye.createGain();d.gain.value=.55;let f=ye.createOscillator();f.type="square",f.frequency.value=t.trem;let p=ye.createGain();p.gain.value=.45,f.connect(p),p.connect(d.gain),h.connect(d),d.connect(zs),f.start(n),u.push(f)}else h.connect(zs);a.start(n),l.start(n),u.forEach(d=>d.stop(n+e+.05)),pt(e*.8,s*.22,2500*o,1800*o,"bandpass",t.delay||0,1.5)}function Tn(i,e,t=0){if(!ye)return;let n=Th[i];if(e&&!n&&(n=Th[i]={g:ye.createGain()},n.g.gain.value=1e-4,n.g.connect(zs),n.g.gain.setTargetAtTime(1,ye.currentTime,.03),qb[i](n)),e&&n&&n.set(t),!e&&n){n.g.gain.setTargetAtTime(1e-4,ye.currentTime,.04);let s=n.stop,r=n.g;setTimeout(()=>{s.forEach(o=>{try{o.stop()}catch{}}),r.disconnect()},250),Th[i]=null}}function lr(){Object.keys(Th).forEach(i=>Tn(i,!1))}function Wf(i,e,t,n,s){let r=ye.createOscillator(),o=ye.createGain();r.type=i,r.frequency.value=$b(e),o.gain.setValueAtTime(1e-4,t),o.gain.exponentialRampToValueAtTime(s,t+.01),o.gain.exponentialRampToValueAtTime(1e-4,t+n),r.connect(o),o.connect(qo),r.start(t),r.stop(t+n+.03)}function Zb(){Xo=ye.currentTime+.1,setInterval(()=>{if(!(!ye||ye.state!=="running"))for(Xo<ye.currentTime&&(Xo=ye.currentTime+.05);Xo<ye.currentTime+.25;){let i=60/(132*Ut.tempo)/2,e=(Eh>>3)%8,t=Eh%8,n=Yb[e],s=Xo;if(t%2===0){Wf("triangle",t%4===0?n[0]:n[0]+7,s,i*1.6,.9);let o=ye.createOscillator(),a=ye.createGain();o.frequency.setValueAtTime(130,s),o.frequency.exponentialRampToValueAtTime(40,s+.1),a.gain.setValueAtTime(.7,s),a.gain.exponentialRampToValueAtTime(1e-4,s+.12),o.connect(a),a.connect(qo),o.start(s),o.stop(s+.15)}else{for(let o=1;o<4;o++)Wf("triangle",n[o]+12,s+o*.008,i*.7,.28);pt(.04,.25,8e3,6e3,"highpass",s-ye.currentTime,.7,qo)}let r=Kb[Eh%64];r&&Wf("sine",r+12,s,i*1.7,.5),Eh++,Xo+=i}},60)}var ye,Yr,zs,qo,Kr,Gf,Ut,Vf,Nn,Y,O0,Th,qb,Yb,Kb,$b,Eh,Xo,cr=ln(()=>{Yi();ye=null,Gf={},Ut={muted:!1,tempo:1,wail:!0},Vf=0;Nn=(i,e)=>{if(!ye)return!1;let t=performance.now();return Gf[i]&&t-Gf[i]<e?!1:(Gf[i]=t,!0)};Y={smg(){pt(.08,.32,3800,700),Qe("square",190,60,.07,.16)},shotgun(){pt(.4,.8,2600,180),Qe("sine",130,32,.32,.7),pt(.07,.22,5e3,2500,"highpass",.34),pt(.07,.22,4e3,2e3,"highpass",.46)},swing(i){pt(i?.3:.16,i?.35:.22,i?300:700,i?1500:2800,"bandpass",0,2)},slice(){pt(.1,.35,6e3,2e3,"highpass"),Y.squish(.02)},squish(i=0){Nn("sq",45)&&(pt(.22,.5,950,140,"lowpass",i,3),Qe("sine",170,48,.18,.3,i))},splat(){Nn("sp",45)&&(pt(.32,.6,1300,90,"lowpass",0,2),Qe("sine",115,38,.26,.5))},boom(i=1){Nn("boom",60)&&(pt(1,.9*i,1900,55),Qe("sine",95,26,.75,.9*i),pt(.14,.35*i,8e3,2e3,"highpass"))},slam(){pt(.5,.9,700,50),Qe("sine",70,24,.55,1),Qe("triangle",220,60,.12,.4)},crack(){Qe("square",900,200,.06,.5),pt(.08,.6,3e3,800,"bandpass",0,1.5),Qe("sine",180,60,.15,.5)},kick(){pt(.12,.5,500,120),Qe("sine",150,55,.14,.5)},thud(){Nn("thud",60)&&(pt(.14,.35,380,90),Qe("sine",110,50,.12,.3))},clank(){Nn("clank",50)&&(Qe("square",v(700,1200),300,.08,.22),Qe("triangle",v(1800,2600),900,.12,.16),pt(.1,.3,5e3,1500,"bandpass",0,4))},pop(){Qe("sine",500,1500,.07,.4),pt(.1,.3,2e3,500)},whoosh(){pt(.5,.3,500,3500,"bandpass",0,1.2)},missile(){Nn("mis",40)&&(pt(.6,.3,900,3e3,"bandpass",0,1.5),Qe("sawtooth",160,420,.4,.12))},sling(){Qe("triangle",220,700,.12,.35),pt(.12,.2,1500,4e3,"bandpass",0,2)},stretch(i){Nn("str",90)&&Qe("triangle",140+i*260,150+i*280,.09,.08)},ding(){Qe("sine",1760,1760,.5,.25),Qe("sine",2637,2637,.6,.18,.06)},lock(){Nn("lock",70)&&Qe("square",1400,1400,.04,.08)},hole(){Qe("sine",300,30,1,.6),pt(1,.3,3e3,100)},ignite(){Nn("ign",120)&&pt(.3,.3,800,3e3,"bandpass",0,1)},splash(){pt(.5,.5,3e3,500,"bandpass",0,.8)},ui(){Qe("triangle",660,880,.08,.2)},rage(){Qe("sawtooth",110,440,.5,.35),Qe("sawtooth",165,660,.5,.25),pt(.6,.3,500,6e3,"bandpass",0,1)},announce(i){let e=523*Math.pow(1.06,Math.min(i,12));[0,4,7,12].forEach((t,n)=>Qe("square",e*Math.pow(2,t/12),0,.14,.13,n*.06))},end(){[0,4,7,12,16].forEach((i,e)=>Qe("triangle",392*Math.pow(2,i/12),0,.3,.25,e*.12))},scream(i=1,e=!1){if(!Nn("scr",e?10:70))return;let t=ye.currentTime,n=e?1.5:v(.25,.45),s=v(850,1300)*i,r=ye.createOscillator(),o=ye.createGain(),a=ye.createOscillator(),l=ye.createGain();r.type="triangle",r.frequency.setValueAtTime(s,t),r.frequency.linearRampToValueAtTime(s*1.6,t+.07),r.frequency.exponentialRampToValueAtTime(s*(e?.3:.75),t+n),a.frequency.value=26,l.gain.value=s*.07,a.connect(l),l.connect(r.frequency),o.gain.setValueAtTime(1e-4,t),o.gain.exponentialRampToValueAtTime(.2,t+.02),o.gain.exponentialRampToValueAtTime(1e-4,t+n),r.connect(o),o.connect(zs),r.start(t),a.start(t),r.stop(t+n+.05),a.stop(t+n+.05)}};O0={yelp:()=>[[[0,1],[.25,1.7],[1,1.2]],v(.22,.34),{}],long:()=>[[[0,1],[.08,1.8],[.5,1.65],[1,1.25]],v(1,1.5),{vibAmt:.09,vib:11}],fall:()=>[[[0,1.2],[.1,2],[1,.55]],v(1.3,1.8),{vibAmt:.05}],rise:()=>[[[0,.9],[1,2.6]],1.1,{vibAmt:.1,vib:14}],cut:()=>[[[0,1.3],[.5,2],[1,1.9]],.2,{hold:.95}],gurgle:()=>[[[0,1.3],[.2,1],[1,.5]],v(.7,1),{trem:17,vibAmt:.02}],squeak:()=>[[[0,2.2],[1,3.2]],.09,{hold:.9}],roar:()=>[[[0,.8],[.15,1.3],[1,.6]],2.2,{vibAmt:.12,vib:7,vol:.75}]};Y.wail=(i,e=1,t=!1)=>{if(!ye||!Nn("wl"+i,i==="yelp"||i==="squeak"?60:110))return;if(t){let o=i==="yelp"||i==="squeak"||i==="cut"?2:6;for(let a=0;a<o;a++)Qe("square",(950-a*110)*v(.9,1.1),700-a*100,.07,.16,a*.075);pt(.3,.2,4e3,800,"bandpass",0,6);return}let n=(O0[i]||O0.yelp)(),s=520*e*v(.92,1.1),r=.8+e*.35;U0(n[0],n[1],Object.assign({f0:s,form:r},n[2])),i==="cut"&&U0([[0,1.2],[1,.5]],.6,{f0:s*.8,form:r,trem:19,delay:.22,vol:.3})};Y.cry=(i,e=1,t=!1,n=!0)=>{Ut.wail?Y.wail(i,e,t):n&&Y.scream(e,i!=="yelp")};Y.thunder=(i=!0)=>{Nn("thun",250)&&(i&&(pt(.2,.9,7e3,1200,"highpass"),Qe("square",1400,90,.12,.4)),pt(2.6,i?.9:.45,420,40),Qe("sine",72,22,1.8,i?.8:.4),pt(1.6,.35,220,50,"lowpass",.6))};Y.zap=()=>{Nn("zap",50)&&(Qe("sawtooth",1900,180,.12,.28),pt(.14,.45,7e3,3e3,"highpass"))};Y.pickup=()=>{[0,4,7,12,16,19].forEach((i,e)=>Qe("triangle",587*Math.pow(2,i/12),0,.16,.24,e*.055))};Y.siren=()=>{for(let i=0;i<6;i++)Qe("sawtooth",420,860,.46,.22,i*.5)};Y.tick=()=>{Qe("square",1200,1200,.03,.12)};Y.honk=()=>{Nn("honk",200)&&(Qe("square",392,392,.3,.2),Qe("square",494,494,.3,.2))};Y.ice=()=>{Nn("ice",60)&&(Qe("sine",2600,1700,.12,.2),Qe("triangle",3400,2200,.16,.14,.03),pt(.18,.3,9e3,4e3,"highpass"))};Y.boing=()=>{Nn("boing",90)&&Qe("sine",180,520,.16,.4)};Y.cannon=(i=0)=>{Qe("square",900-i*400,160,.14+i*.2,.25+i*.2),pt(.12+i*.3,.3+i*.3,3e3,400)};Y.beam=(i=2.6)=>{Qe("sawtooth",180,720,i,.22),Qe("sine",90,60,i,.5),pt(i,.5,700,3200,"bandpass",0,.8)};Y.rise=()=>{Qe("triangle",220,880,.5,.25),pt(.5,.2,400,4e3,"bandpass",0,1)};Th={},qb={saw(i){let e=ye.createOscillator();e.type="sawtooth",e.frequency.value=58;let t=ye.createOscillator();t.frequency.value=23;let n=ye.createGain();n.gain.value=14,t.connect(n),n.connect(e.frequency);let s=ye.createGain();s.gain.value=.3,e.connect(s),s.connect(i.g);let r=ye.createBufferSource();r.buffer=Kr,r.loop=!0;let o=ye.createBiquadFilter();o.type="bandpass",o.frequency.value=1700,o.Q.value=1.2;let a=ye.createGain();a.gain.value=.1,r.connect(o),o.connect(a),a.connect(i.g),e.start(),t.start(),r.start(),i.stop=[e,t,r],i.set=l=>{e.frequency.setTargetAtTime(58+l*55,ye.currentTime,.05),a.gain.setTargetAtTime(.1+l*.35,ye.currentTime,.05)}},flame(i){let e=ye.createBufferSource();e.buffer=Kr,e.loop=!0;let t=ye.createBiquadFilter();t.type="bandpass",t.frequency.value=600,t.Q.value=.4;let n=ye.createGain();n.gain.value=.5,e.connect(t),t.connect(n),n.connect(i.g),e.start(),i.stop=[e],i.set=()=>{}},hole(i){let e=ye.createOscillator(),t=ye.createOscillator();e.frequency.value=48,t.frequency.value=52.5,t.type="triangle";let n=ye.createGain();n.gain.value=.55,e.connect(n),t.connect(n),n.connect(i.g);let s=ye.createBufferSource();s.buffer=Kr,s.loop=!0;let r=ye.createBiquadFilter();r.type="bandpass",r.frequency.value=300,r.Q.value=3;let o=ye.createGain();o.gain.value=.25,s.connect(r),r.connect(o),o.connect(i.g),e.start(),t.start(),s.start(),i.stop=[e,t,s],i.set=()=>{}},rain(i){let e=ye.createBufferSource();e.buffer=Kr,e.loop=!0;let t=ye.createBiquadFilter();t.type="highpass",t.frequency.value=1400;let n=ye.createBiquadFilter();n.type="lowpass",n.frequency.value=7500;let s=ye.createGain();s.gain.value=.05,e.connect(t),t.connect(n),n.connect(s),s.connect(i.g),e.start(),i.stop=[e],i.set=r=>{s.gain.setTargetAtTime(.04+r*.3,ye.currentTime,.3)}}};Yb=[[48,60,64,67],[53,65,69,72],[55,67,71,74],[48,60,64,67],[45,57,60,64],[53,65,69,72],[55,67,71,74],[48,60,64,67]],Kb=[76,79,76,72,74,76,0,0,77,81,77,72,74,77,0,0,79,83,79,74,77,79,0,0,76,79,84,79,76,72,0,0,76,81,76,72,69,72,0,0,77,81,84,81,77,72,0,0,79,77,74,71,74,79,0,0,72,76,79,84,0,84,0,0],$b=i=>440*Math.pow(2,(i-69)/12),Eh=0,Xo=0});function Jb(){let i=document.createElement("canvas");i.width=i.height=256;let e=i.getContext("2d");e.fillStyle="#fff",e.beginPath();let t=14;for(let n=0;n<=t;n++){let s=n/t*Math.PI*2,r=62+Math.sin(n*2.7)*14+Math.random()*16,o=128+Math.cos(s)*r,a=128+Math.sin(s)*r;n===0?e.moveTo(o,a):e.quadraticCurveTo(128+Math.cos(s-.22)*(r+22),128+Math.sin(s-.22)*(r+22),o,a)}e.fill();for(let n=0;n<16;n++){let s=Math.random()*6.28,r=84+Math.random()*34,o=3+Math.random()*10;e.beginPath(),e.arc(128+Math.cos(s)*r,128+Math.sin(s)*r,o,0,6.28),e.fill()}return new li(i)}function k0(){let i=new rt({color:16777215}),e=new Yt({color:16777215,flatShading:!0});ie.decals=new qf(700),ie.blood=new hr(new Xn(.5,0),i,3200,{g:24,drag:.4,die:!0,onGround:(o,a,l,c)=>{Math.random()<.34&&ie.decals.add(o,a,c*v(3.5,8),ie._bc||Re(Fn),!0)}}),ie.oil=new hr(new Xn(.5,0),i,300,{g:24,drag:.4,die:!0,onGround:(o,a,l,c)=>{Math.random()<.4&&ie.decals.add(o,a,c*v(3.5,8),Re(Hf),!0)}}),ie.meat=new hr(new Xn(.5,0),e,320,{bounce:.42,onGround:(o,a,l,c)=>{l<-3&&(ie.decals.add(o,a,c*v(2,4),Re(Fn),!0),Y.squish())}}),ie.scrap=new hr(new Sn(1,.6,.8),e,260,{bounce:.5,onGround:(o,a,l)=>{l<-6&&Y.clank()}}),ie.bone=new hr(new Da(.22,.9,2,6),new Yt({color:16052712}),90,{bounce:.5});let t=document.createElement("canvas");t.width=64,t.height=32;let n=t.getContext("2d");n.fillStyle="#F8F4E6",n.fillRect(0,0,64,32),n.fillStyle="#1B1B14",n.beginPath(),n.arc(32,16,8,0,6.28),n.fill(),n.fillStyle="#F8F4E6",n.beginPath(),n.arc(35,13,2.4,0,6.28),n.fill();let s=new li(t);s.colorSpace=Dt,ie.eye=new hr(new Gt(.5,12,8),new rt({map:s}),80,{bounce:.72,drag:.05}),ie.puffs=new Yf(1500);for(let o=0;o<14;o++){let a=new Be(new Cs(.82,1,40).rotateX(-Math.PI/2),new rt({color:16777215,transparent:!0,depthWrite:!1,side:bt}));a.visible=!1,x.scene.add(a),wh.push({m:a,t:0,life:0,r0:0,r1:1})}let r=new Sn(1,1,1);for(let o=0;o<48;o++){let a=new Be(r,new rt({color:16770442}));a.visible=!1,x.scene.add(a),Ah.push({m:a,life:0})}ks=new Br(16760928,0,40,1.4),x.scene.add(ks),z0=document.getElementById("labels"),el=document.getElementById("gore"),Kf()}function Kf(){if(!ie.puffs)return;let i=x.renderer.domElement.height;ie.puffs.mat.uniforms.scale.value=i/(2*Math.tan(x.camera.fov*Math.PI/360)),ie.puffs.mat.uniforms.maxPx.value=i*.26}function H0(){["blood","oil","meat","scrap","bone","eye","puffs","decals"].forEach(i=>ie[i].clear()),ur.forEach(i=>i.el.remove()),ur.length=0,el.innerHTML=""}function $f(i,e){ie.blood.update(i),ie.oil.update(i),ie.meat.update(i),ie.scrap.update(i),ie.bone.update(i),ie.eye.update(i),ie.puffs.update(i),ie.decals.update(i);for(let t of wh){if(t.life<=0)continue;t.t+=i;let n=t.t/t.life;if(n>=1){t.life=0,t.m.visible=!1;continue}let s=1-(1-n)*(1-n);t.m.scale.setScalar(t.r0+(t.r1-t.r0)*s),t.m.material.opacity=1-n}for(let t of Ah)t.life>0&&(t.life-=e,t.life<=0&&(t.m.visible=!1));ks.intensity>0&&(ks.intensity=Math.max(0,ks.intensity-e*900)),x.trauma=Math.max(0,x.trauma-e*1.7),jb(e)}function at(i){x.trauma=Math.min(1,x.trauma+i)}function Ko(i,e,t=45){let n=$r.copy(i).sub(x.camera.position).length();n<t&&at(e*(1-n/t))}function Kt(i,e,t,n,s=16579056){let r=wh.find(o=>o.life<=0)||wh[0];r.m.position.set(i.x,Math.max(.08,i.y),i.z),r.m.material.color.set(s),r.m.visible=!0,r.t=0,r.life=n,r.r0=e,r.r1=t,r.m.scale.setScalar(e)}function ei(i,e,t=16770442,n=.035,s=.055){let r=Ah.find(a=>a.life<=0)||Ah[0],o=i.distanceTo(e);r.m.position.copy(i).add(e).multiplyScalar(.5),r.m.lookAt(e),r.m.scale.set(n,n,o),r.m.material.color.set(t),r.m.visible=!0,r.life=s}function ti(i,e,t,n,s,r,o,a,l=!1,c=.65){o=Math.round(o*2.2),a*=1.15;let h=l?ie.oil:ie.blood,u=l?Hf:Fn;for(let d=0;d<o;d++){let f=a*v(.35,1.1);h.spawn(i+v(-.15,.15),e+v(-.15,.15),t+v(-.15,.15),n*f+v(-1,1)*a*c,s*f+v(-.4,1)*a*c,r*f+v(-1,1)*a*c,v(.07,.2),v(1.5,3),Re(u))}}function Zf(i,e,t,n=6,s=!1){for(let r=0;r<n;r++)ie.puffs.spawn(i+v(-.3,.3),e+v(-.3,.3),t+v(-.3,.3),v(-2.5,2.5),v(0,3),v(-2.5,2.5),.3,v(.7,1.5),v(.3,.6),s?3815984:14826286,s?1381650:9310732,0,3)}function Qt(i,e,t,n=8,s=1,r=15260085){for(let o=0;o<n;o++){let a=v(6.28),l=v(1.5,5)*s;ie.puffs.spawn(i,e+.2,t,Math.cos(a)*l,v(.5,2.5),Math.sin(a)*l,.3*s,v(.8,1.6)*s,v(.4,.8),r,16249308,.5,3)}}function tl(i,e=6,t=1){let n=i.x,s=Math.max(.4,i.y),r=i.z,o=e/6;for(let a=0;a<16;a++){let l=v(6.28),c=v(-.2,1.2),h=v(2,9)*o;ie.puffs.spawn(n,s,r,Math.cos(l)*Math.cos(c)*h,Math.sin(c)*h+2,Math.sin(l)*Math.cos(c)*h,.8*o,v(1.8,3.4)*o,v(.35,.65),16773808,15234090,1,2.5)}for(let a=0;a<10;a++){let l=v(6.28),c=v(1,5)*o;ie.puffs.spawn(n,s+.5,r,Math.cos(l)*c,v(2,6)*o,Math.sin(l)*c,.8*o,v(2,3.6)*o,v(.8,1.5),7038037,3025439,1.5,1.6)}for(let a=0;a<12;a++){let l=v(6.28),c=v(.1,1.3),h=v(10,22)*o;ie.puffs.spawn(n,s,r,Math.cos(l)*Math.cos(c)*h,Math.sin(c)*h,Math.sin(l)*Math.cos(c)*h,.25,.3,v(.3,.6),16773808,15911244,-14,.5)}for(let a=0;a<6;a++){let l=v(6.28);ie.scrap.spawn(n,s,r,Math.cos(l)*v(4,10),v(6,12),Math.sin(l)*v(4,10),v(.12,.25),v(2,4),Re([4864792,3025439,7038037]))}Kt(i,.5,e*1.25,.4),ie.decals.add(n,r,e*v(.9,1.2),2367770,!0),ks.position.set(n,s+1.5,r),ks.intensity=260*o,Ko(i,.75*t,60),Y.boom(t)}function en(i,e,t,n=6){for(let s=0;s<n;s++)ie.puffs.spawn(i,e,t,v(-6,6),v(1,8),v(-6,6),.14,.18,v(.2,.45),16773808,15911244,-16,.5)}function Rh(i,e=80){ks.position.copy(i),ks.intensity=e}function Un(i,e,t="",n=1.1,s=1.8){ur.length>46&&ur.shift().el.remove();let r=document.createElement("div");r.className="pop "+t,r.textContent=e,z0.appendChild(r);let o={el:r,pos:i.clone(),life:n,max:n,rise:s,follow:null};return ur.push(o),o}function Hs(i,e,t=2){i.label&&(i.label.life=0);let n=Un(i.root.position,e,"bubble",t,0);return n.follow=i,i.label=n,n}function jb(i){let e=innerWidth,t=innerHeight,n=x.camera;for(let s=ur.length-1;s>=0;s--){let r=ur[s];if(r.life-=i,r.life<=0||r.follow&&r.follow.dead){r.el.remove(),r.follow&&r.follow.label===r&&(r.follow.label=null),ur.splice(s,1);continue}r.follow?(r.pos.copy(r.follow.root.position),r.pos.y+=r.follow.H+.45):r.pos.y+=r.rise*i,$r.copy(r.pos).project(n);let o=r.pos.distanceTo(n.position);if($r.z>1||Math.abs($r.x)>1.2||Math.abs($r.y)>1.2||r.follow&&o>45){r.el.style.display="none";continue}let a=ui(11/o,.5,1.25);r.el.style.display="",r.el.style.opacity=Math.min(1,r.life/.25),r.el.style.transform=`translate(-50%,-50%) translate(${($r.x+1)/2*e}px,${(1-$r.y)/2*t}px) scale(${a.toFixed(2)})`}}function $o(i=2,e=!1){for(let t=0;t<i;t++){el.childElementCount>16&&el.firstChild.remove();let n=document.createElement("i"),s=Math.random()<.7,r=s?v(90,240):v(40,110),o=s?Re([v(-3,18),v(80,98)]):v(15,85),a=v(5,85);n.style.cssText=`left:${o}%;top:${a}%;width:${r}px;height:${r*v(.8,1.3)}px;border-radius:${v(40,60)}% ${v(40,60)}% ${v(40,60)}% ${v(40,60)}%;transform:rotate(${v(360)}deg);background:${e?"#1e1e19":Re(["#C21807","#B3120C","#D7261E"])}`,el.appendChild(n),setTimeout(()=>n.remove(),2600)}}var us,Ri,$r,Yo,ie,hr,qf,Yf,wh,Ah,ks,z0,el,ur,Zr=ln(()=>{hi();Yi();cr();us=new yt,Ri=new Te,$r=new N,Yo=new We().makeScale(0,0,0),ie={},hr=class{constructor(e,t,n,s={}){this.max=n,this.cur=0,this.o=Object.assign({g:26,bounce:.45,drag:.15,die:!1,onGround:null},s),this.mesh=new ai(e,t,n),this.mesh.frustumCulled=!1,this.mesh.instanceMatrix.setUsage(Os);for(let r=0;r<n;r++)this.mesh.setMatrixAt(r,Yo),this.mesh.setColorAt(r,Ri.set(16777215));this.p=new Float32Array(n*3),this.v=new Float32Array(n*3),this.r=new Float32Array(n*3),this.av=new Float32Array(n*3),this.life=new Float32Array(n),this.size=new Float32Array(n),this.rest=new Uint8Array(n),x.scene.add(this.mesh)}spawn(e,t,n,s,r,o,a,l,c){let h=this.cur;this.cur=(this.cur+1)%this.max;let u=h*3;return this.p[u]=e,this.p[u+1]=t,this.p[u+2]=n,this.v[u]=s,this.v[u+1]=r,this.v[u+2]=o,this.r[u]=v(6.28),this.r[u+1]=v(6.28),this.r[u+2]=v(6.28),this.av[u]=v(-12,12),this.av[u+1]=v(-12,12),this.av[u+2]=v(-12,12),this.life[h]=l,this.size[h]=a,this.rest[h]=0,c!==void 0&&(this.mesh.setColorAt(h,Ri.set(c)),this.mesh.instanceColor.needsUpdate=!0),h}clear(){this.life.fill(0);for(let e=0;e<this.max;e++)this.mesh.setMatrixAt(e,Yo);this.mesh.instanceMatrix.needsUpdate=!0}update(e){let{p:t,v:n,r:s,av:r,life:o,size:a,rest:l,o:c,mesh:h}=this,u=!1;for(let d=0;d<this.max;d++){if(o[d]<=0)continue;if(u=!0,o[d]-=e,o[d]<=0){h.setMatrixAt(d,Yo);continue}let f=d*3,p=a[d]*.5;if(l[d]){if(o[d]>.4)continue}else{n[f+1]-=c.g*e;let _=1-c.drag*e;if(n[f]*=_,n[f+2]*=_,t[f]+=n[f]*e,t[f+1]+=n[f+1]*e,t[f+2]+=n[f+2]*e,s[f]+=r[f]*e,s[f+1]+=r[f+1]*e,s[f+2]+=r[f+2]*e,t[f+1]<p){if(t[f+1]=p,c.onGround&&c.onGround(t[f],t[f+2],n[f+1],a[d],d,this),c.die){o[d]=0,h.setMatrixAt(d,Yo);continue}n[f+1]<-2.5?(n[f+1]=-n[f+1]*c.bounce,n[f]*=.7,n[f+2]*=.7,r[f]*=.6,r[f+1]*=.6,r[f+2]*=.6):(n[f+1]=0,n[f]*=.6,n[f+2]*=.6,Math.abs(n[f])+Math.abs(n[f+2])<.4&&(l[d]=1))}}us.position.set(t[f],t[f+1],t[f+2]),us.rotation.set(s[f],s[f+1],s[f+2]),us.scale.setScalar(a[d]*Math.min(1,o[d]/.4)),us.updateMatrix(),h.setMatrixAt(d,us.matrix)}u&&(h.instanceMatrix.needsUpdate=!0)}};qf=class{constructor(e){this.max=e,this.cur=0;let t=new Fr(1,1).rotateX(-Math.PI/2),n=new rt({map:Jb(),alphaTest:.5,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3});this.mesh=new ai(t,n,e),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1;for(let s=0;s<e;s++)this.mesh.setMatrixAt(s,Yo),this.mesh.setColorAt(s,Ri.set(16777215));this.d=new Float32Array(e*5),this.grow=new Set,x.scene.add(this.mesh)}add(e,t,n,s,r){if(e*e+t*t>(ft+7)*(ft+7))return;let o=this.cur;this.cur=(this.cur+1)%this.max;let a=o*5;this.d[a]=e,this.d[a+1]=t,this.d[a+2]=v(6.28),this.d[a+3]=r?n:n*.25,this.d[a+4]=n,this.mesh.setColorAt(o,Ri.set(s)),this.mesh.instanceColor.needsUpdate=!0,this.grow.add(o),this.set(o)}set(e){let t=e*5;us.position.set(this.d[t],.03+e%40*6e-4,this.d[t+1]),us.rotation.set(0,this.d[t+2],0),us.scale.setScalar(this.d[t+3]),us.updateMatrix(),this.mesh.setMatrixAt(e,us.matrix),this.mesh.instanceMatrix.needsUpdate=!0}clear(){this.grow.clear();for(let e=0;e<this.max;e++)this.mesh.setMatrixAt(e,Yo);this.mesh.instanceMatrix.needsUpdate=!0}update(e){for(let t of this.grow){let n=t*5;this.d[n+3]+=(this.d[n+4]-this.d[n+3])*Math.min(1,e*7),this.d[n+4]-this.d[n+3]<.02&&this.grow.delete(t),this.set(t)}}},Yf=class{constructor(e){this.max=e,this.cur=0;let t=document.createElement("canvas");t.width=t.height=64;let n=t.getContext("2d");n.fillStyle="#cfcfcf",n.beginPath(),n.arc(32,32,31,0,6.28),n.fill(),n.fillStyle="#fff",n.beginPath(),n.arc(30,28,27,0,6.28),n.fill();let s=new li(t);this.geo=new Ft,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.sz=new Float32Array(e),this.geo.setAttribute("position",new It(this.pos,3).setUsage(Os)),this.geo.setAttribute("col",new It(this.col,3).setUsage(Os)),this.geo.setAttribute("size",new It(this.sz,1).setUsage(Os)),this.mat=new Ti({uniforms:{map:{value:s},scale:{value:500},maxPx:{value:260}},vertexShader:"attribute float size; attribute vec3 col; varying vec3 vCol; uniform float scale; uniform float maxPx; void main(){ vCol=col; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=min(maxPx,size*scale/max(0.1,-mv.z)); gl_Position=projectionMatrix*mv; }",fragmentShader:`uniform sampler2D map; varying vec3 vCol; void main(){ vec4 t=texture2D(map,gl_PointCoord); if(t.a<0.5) discard; gl_FragColor=vec4(vCol*t.rgb,1.0);
#include <colorspace_fragment>
}`}),this.pts=new Dr(this.geo,this.mat),this.pts.frustumCulled=!1,this.v=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.s0=new Float32Array(e),this.s1=new Float32Array(e),this.c=new Float32Array(e*6),this.rise=new Float32Array(e),this.drag=new Float32Array(e),x.scene.add(this.pts)}spawn(e,t,n,s,r,o,a,l,c,h,u,d=0,f=2){let p=this.cur;this.cur=(this.cur+1)%this.max;let _=p*3,m=p*6;this.pos[_]=e,this.pos[_+1]=t,this.pos[_+2]=n,this.v[_]=s,this.v[_+1]=r,this.v[_+2]=o,this.life[p]=this.maxLife[p]=c,this.s0[p]=a,this.s1[p]=l,this.rise[p]=d,this.drag[p]=f,Ri.set(h),this.c[m]=Ri.r,this.c[m+1]=Ri.g,this.c[m+2]=Ri.b,Ri.set(u===void 0?h:u),this.c[m+3]=Ri.r,this.c[m+4]=Ri.g,this.c[m+5]=Ri.b}clear(){this.life.fill(0),this.sz.fill(0),this.geo.attributes.size.needsUpdate=!0}update(e){let{pos:t,v:n,life:s,maxLife:r,s0:o,s1:a,c:l,col:c,sz:h}=this;for(let u=0;u<this.max;u++){if(s[u]<=0)continue;if(s[u]-=e,s[u]<=0){h[u]=0;continue}let d=u*3,f=u*6,p=1-s[u]/r[u],_=Math.max(0,1-this.drag[u]*e);n[d]*=_,n[d+1]=n[d+1]*_+this.rise[u]*e,n[d+2]*=_,t[d]+=n[d]*e,t[d+1]+=n[d+1]*e,t[d+2]+=n[d+2]*e;let m=Math.min(1,p/.25),g=p>.6?1-(p-.6)/.4:1;h[u]=(o[u]+(a[u]-o[u])*m)*g,c[d]=l[f]+(l[f+3]-l[f])*p,c[d+1]=l[f+1]+(l[f+4]-l[f+1])*p,c[d+2]=l[f+2]+(l[f+5]-l[f+2])*p}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.col.needsUpdate=!0,this.geo.attributes.size.needsUpdate=!0}},wh=[],Ah=[],ur=[]});function fs(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Ft;l.morphTargetsRelative=a;let c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0,f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[p].length!==i[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=G0(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);let p=G0(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function G0(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new It(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<t;p++){let _=h.getComponent(d,p);a.setComponent(d+u,p,_)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function Jf(i,e){if(e===uf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Go||e===Ka){let t=i.getIndex();if(t===null){let r=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Go)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Ch=ln(()=>{hi()});function On(i,e,t){let n=i.index?i.toNonIndexed():i.clone();n.deleteAttribute("uv"),t&&n.applyMatrix4(t);let s=new Te(e),r=n.attributes.position.count,o=new Float32Array(r*3);for(let a=0;a<r;a++)o[a*3]=s.r,o[a*3+1]=s.g,o[a*3+2]=s.b;return n.setAttribute("color",new It(o,3)),n}function tS(){let i=document.createElement("canvas");i.width=i.height=1024;let e=i.getContext("2d");e.fillStyle=St.grass,e.fillRect(0,0,1024,1024);let t=["#84B552","#9AC765","#7FAE4C","#A3CC6E","#8ABA57"];for(let s=0;s<520;s++)e.globalAlpha=v(.12,.3),e.fillStyle=Re(t),e.beginPath(),e.ellipse(v(1024),v(1024),v(14,70),v(10,46),v(3.14),0,6.28),e.fill();e.globalAlpha=.85,e.strokeStyle="#DCC9A0",e.lineCap="round";for(let s=0;s<6;s++){let r=s/6*6.28+.3;e.lineWidth=v(16,24),e.beginPath(),e.moveTo(512,512),e.quadraticCurveTo(512+Math.cos(r+.5)*220,512+Math.sin(r+.5)*220,512+Math.cos(r)*430,512+Math.sin(r)*430),e.stroke()}e.fillStyle="#DCC9A0",e.beginPath(),e.arc(512,512,64,0,6.28),e.fill(),e.globalAlpha=1;for(let s=0;s<2600;s++)e.fillStyle=Re(["#6FA043","#A9D275","#79A84A"]),e.fillRect(v(1024),v(1024),2,v(3,6));let n=new li(i);return n.colorSpace=Dt,n.anisotropy=8,n}function jf(i,e,t){for(let n of x.obstacles){let s=n.x-i,r=n.z-e;if(s*s+r*r<(n.r+t)*(n.r+t))return!1}return!0}function nl(i,e,t){let n=new ai(i,il,e.length),s=new yt,r=new Te;return e.forEach((o,a)=>{s.position.set(o.x,o.y||0,o.z),s.rotation.set(0,o.rot||0,0),s.scale.setScalar(o.s||1),s.updateMatrix(),n.setMatrixAt(a,s.matrix),t&&n.setColorAt(a,r.set(o.tint||16777215))}),x.scene.add(n),n}function V0(){let i=x.scene;il=new Yt({vertexColors:!0,flatShading:!0});let e=new Gt(420,24,14),t=new Te(St.skyHi),n=new Te(St.skyLo),s=new Te,r=e.attributes.position,o=new Float32Array(r.count*3);for(let C=0;C<r.count;C++){let P=Math.max(0,Math.min(1,r.getY(C)/260));s.copy(n).lerp(t,Math.pow(P,.7)),o.set([s.r,s.g,s.b],C*3)}e.setAttribute("color",new It(o,3));let a=new rt({vertexColors:!0,side:En,fog:!1,depthWrite:!1});i.add(new Be(e,a)),i.fog=new Sa(St.skyLo,110,330);let l=new Oa(16775396,8365658,1.5);i.add(l);let c=new kr(16773584,1.9);c.position.set(40,80,30),i.add(c),x.env={sky:a,hemi:l,sun:c,sea:null};let h=new Be(new ns(700,48).rotateX(-Math.PI/2),new rt({color:St.water}));h.position.y=-.7,i.add(h),x.env.sea=h.material;let u=new Be(new Cs(ft+9.5,ft+11.5,64).rotateX(-Math.PI/2),new rt({color:16579056,transparent:!0,opacity:.7}));u.position.y=-.66,i.add(u),x.foam=u;let d=new Be(new qt(ft+9,ft+12,.8,56),new Yt({color:St.sand}));d.position.y=-.46,i.add(d);let f=new Be(new ns(ft+3,64).rotateX(-Math.PI/2),new Yt({map:tS()}));i.add(f);let p=[];for(let C=0;C<8;C++){let P=C/8*6.28;p.push(On(new Gt(1,10,8),C%2?14715438:14252578,vt(Math.cos(P)*1.1,1.75,Math.sin(P)*1.1,0,0,0,1.25,1.75,1.25)))}p.push(On(new qt(.22,.34,1,6),4155948,vt(0,3.9,0,0,0,.2))),p.push(On(new qt(3.1,3.4,.5,10),14539473,vt(0,.25,0))),i.add(new Be(fs(p),il)),x.obstacles.push({x:0,z:0,r:3.2,h:4.2});let _=[St.brick,St.clay,6467913,St.brick,St.clay,9014115,St.brick];_.forEach((C,P)=>{let O=P/_.length*6.28+.45,z=v(38,54),L=Math.cos(O)*z,W=Math.sin(O)*z,Z=-O+Math.PI/2,q=fs([wn(5.4,3.2,4.6,St.paper,vt(0,1.6,0)),On(new Vi(4.5,2.6,4),C,vt(0,4.5,0,0,Math.PI/4,0,1.05,1,.92)),wn(1.1,1.9,.14,St.bark,vt(0,.95,2.34)),wn(1,.9,.12,St.skyHi,vt(-1.7,1.9,2.34)),wn(1,.9,.12,St.skyHi,vt(1.7,1.9,2.34)),wn(.7,1.4,.7,St.clay,vt(1.5,5,-.8)),wn(5.7,.3,4.9,St.wood,vt(0,.15,0))]),re=new Be(q,il);re.position.set(L,0,W),re.rotation.y=Z,i.add(re),x.obstacles.push({x:L,z:W,r:3.5,h:5.5})});let m=fs([wn(1.9,.12,1,St.wood,vt(0,.82,0)),wn(.1,.8,.1,St.bark,vt(-.85,.4,-.4)),wn(.1,.8,.1,St.bark,vt(.85,.4,-.4)),wn(.1,.8,.1,St.bark,vt(-.85,.4,.4)),wn(.1,.8,.1,St.bark,vt(.85,.4,.4)),wn(.8,.5,.06,St.ink,vt(0,1.28,-.25)),wn(.7,.4,.02,10145968,vt(0,1.28,-.21)),wn(.1,.2,.1,St.ink,vt(0,.98,-.25)),On(new qt(.07,.07,.14,8),St.paper,vt(.6,.95,.2)),wn(.3,.1,.22,6467913,vt(-.55,.93,.15)),wn(.7,.12,.7,2966305,vt(0,.5,.95)),wn(.7,.7,.1,2966305,vt(0,.9,1.3)),On(new qt(.05,.05,.5,6),St.ink,vt(0,.25,.95))]),g=[];for(let C=0;C<400&&g.length<18;C++){let P=v(6.28),O=v(9,60),z=Math.cos(P)*O,L=Math.sin(P)*O;jf(z,L,3)&&(g.push({x:z,z:L,rot:v(6.28)}),x.obstacles.push({x:z,z:L,r:1,h:1.5}))}nl(m,g);let M=On(new qt(.22,.34,2.2,6),St.trunk,vt(0,1.1,0)),E=fs([On(new Xn(1.5,0),16777215,vt(0,3,0)),On(new Xn(1.15,0),15135448,vt(.5,4.1,.2,.4,.3,0)),On(new Xn(.95,0),13822144,vt(-.6,3.7,-.4,.2,1,.5))]),b=[];for(let C=0;C<900&&b.length<64;C++){let P=v(6.28),O=10+Math.sqrt(Math.random())*60,z=Math.cos(P)*O,L=Math.sin(P)*O;if(!jf(z,L,3.2))continue;let W=v(.85,1.5);b.push({x:z,z:L,rot:v(6.28),s:W,tint:Re(St.leaf)}),x.obstacles.push({x:z,z:L,r:.5*W,h:5*W,tree:!0})}nl(E,b,!0),nl(M,b),x.treeShadows=b;let w=new ai(new ns(1,16).rotateX(-Math.PI/2),new rt({color:1913620,transparent:!0,opacity:.22,depthWrite:!1}),b.length),R=new yt;b.forEach((C,P)=>{R.position.set(C.x+.5,.02,C.z+.3),R.scale.setScalar(1.9*C.s),R.updateMatrix(),w.setMatrixAt(P,R.matrix)}),i.add(w);let y=[],A=[];for(let C=0;C<420;C++){let P=v(6.28),O=Math.sqrt(Math.random())*(ft+1);y.push({x:Math.cos(P)*O,z:Math.sin(P)*O,y:.12,s:v(.1,.2),tint:Re([15911244,16579056,15712430,13935475])})}for(let C=0;C<46;C++){let P=v(6.28),O=v(8,ft+8);A.push({x:Math.cos(P)*O,z:Math.sin(P)*O,y:.1,s:v(.25,.6),rot:v(6.28),tint:Re([14539473,12170662,10131076])})}nl(On(new Xn(1,0),16777215),y,!0),nl(On(new Xn(1,0),16777215,vt(0,0,0,0,0,0,1,.6,.8)),A,!0),x.clouds=[];for(let C=0;C<9;C++){let P=[];for(let z=0;z<5;z++)P.push(new Gt(v(5,10),8,6).translate(z*7-14,v(-1.5,1.5),v(-3,3)));let O=new Be(fs(P),new rt({color:16579056,fog:!1}));O.position.set(v(-300,300),v(70,120),v(-300,300)),O.scale.y=.5,i.add(O),x.clouds.push(O)}let F=fs([On(new qt(.55,.55,1.3,12),St.brick,vt(0,.65,0)),On(new qt(.58,.58,.16,12),15911244,vt(0,.75,0)),On(new qt(.2,.3,.2,8),St.ink,vt(0,1.4,0))]);for(let C=0;C<600&&x.barrels.length<14;C++){let P=v(6.28),O=v(12,62),z=Math.cos(P)*O,L=Math.sin(P)*O;if(!jf(z,L,4)||Math.hypot(z,L-24)<9)continue;let W=new Be(F,il);W.position.set(z,0,L),i.add(W),x.barrels.push({m:W,x:z,z:L,alive:!0,t:0})}}function Qf(i){for(let t of x.clouds)t.position.x+=i*2.2,t.position.x>330&&(t.position.x=-330);let e=1+Math.sin(x.t*.8)*.012;x.foam.scale.set(e,1,e);for(let t of x.barrels)t.alive||(t.t-=i,t.t<=0&&(t.alive=!0,t.m.visible=!0))}var St,Qb,eS,vt,wn,il,W0=ln(()=>{hi();Ch();Yi();St={grass:"#8FBF5A",sand:15260085,water:8372687,skyHi:9422804,skyLo:13098448,leaf:[2966305,4155948,6467913,8502601],trunk:7032362,paper:16249308,clay:13935475,brick:13125690,wood:12163691,bark:4864792,ink:3025439},Qb=new Ei,eS=new vn,vt=(i,e,t,n=0,s=0,r=0,o=1,a=1,l=1)=>new We().compose(new N(i,e,t),eS.setFromEuler(Qb.set(n,s,r)).clone(),new N(o,a,l));wn=(i,e,t,n,s)=>On(new Sn(i,e,t),n,s)});function Zo(i){let e=new Map,t=new Map,n=i.clone();return X0(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function X0(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)X0(i.children[n],e.children[n],t)}var ed=ln(()=>{});function iS(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function $t(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}function oS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Nr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:rs})),i.DefaultMaterial}function Jr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ds(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function aS(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function lS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function cS(i){let e,t=i.extensions&&i.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+id(t.attributes):e=i.indices+":"+id(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+id(i.targets[n]);return e}function id(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Rd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function hS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}function fS(i,e,t){let n=e.attributes,s=new Vn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new N(l[0],l[1],l[2]),new N(c[0],c[1],c[2])),a.normalized){let h=Rd(Jo[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new N,l=new N;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let _=Rd(Jo[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Jn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function $0(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=Ad[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return it.workingColorSpace!==Gn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${it.workingColorSpace}" not supported.`),ds(i,e),fS(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?aS(i,e.targets,t):i})}var Ih,st,sd,rd,od,ad,ld,cd,hd,ud,fd,dd,pd,md,gd,xd,_d,yd,vd,Ph,Md,Z0,sl,q0,bd,Sd,Ed,Td,Lh,sS,wd,Ci,Jo,Y0,K0,td,Ad,fr,rS,nd,uS,Cd,J0=ln(()=>{hi();Ch();ed();Ih=class extends ss{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ad(t)}),this.register(function(t){return new ld(t)}),this.register(function(t){return new cd(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new yd(t)}),this.register(function(t){return new vd(t)}),this.register(function(t){return new ud(t)}),this.register(function(t){return new fd(t)}),this.register(function(t){return new dd(t)}),this.register(function(t){return new pd(t)}),this.register(function(t){return new od(t)}),this.register(function(t){return new md(t)}),this.register(function(t){return new hd(t)}),this.register(function(t){return new xd(t)}),this.register(function(t){return new gd(t)}),this.register(function(t){return new sd(t)}),this.register(function(t){return new Ph(t,st.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ph(t,st.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Md(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Fs.extractUrlBase(e);o=Fs.resolveURL(c,this.path)}else o=Fs.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Do(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Z0){try{o[st.KHR_BINARY_GLTF]=new bd(e)}catch(u){s&&s(u);return}r=JSON.parse(o[st.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Cd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case st.KHR_MATERIALS_UNLIT:o[u]=new rd;break;case st.KHR_DRACO_MESH_COMPRESSION:o[u]=new Sd(r,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:o[u]=new Ed;break;case st.KHR_MESH_QUANTIZATION:o[u]=new Td;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},sd=class{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Te(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Gn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new kr(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Br(h),c.distance=u;break;case"spot":c=new za(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ds(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},rd=class{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return rt}extendParams(e,t,n){let s=[];e.color=new Te(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Gn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Dt))}return Promise.all(s)}},od=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},ad=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return $t(this.parser,e,this.name)!==null?qn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ye(r,r)}return Promise.all(s)}},ld=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return $t(this.parser,e,this.name)!==null?qn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},cd=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_DISPERSION}getMaterialType(e){return $t(this.parser,e,this.name)!==null?qn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},hd=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return $t(this.parser,e,this.name)!==null?qn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},ud=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){return $t(this.parser,e,this.name)!==null?qn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Gn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Dt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},fd=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return $t(this.parser,e,this.name)!==null?qn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},dd=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){return $t(this.parser,e,this.name)!==null?qn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(r[0],r[1],r[2],Gn),Promise.all(s)}},pd=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){return $t(this.parser,e,this.name)!==null?qn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},md=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){return $t(this.parser,e,this.name)!==null?qn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(r[0],r[1],r[2],Gn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Dt)),Promise.all(s)}},gd=class{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){return $t(this.parser,e,this.name)!==null?qn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},xd=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return $t(this.parser,e,this.name)!==null?qn:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},_d=class{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},yd=class{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},vd=class{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Ph=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},Md=class{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Ci.TRIANGLES&&c.mode!==Ci.TRIANGLE_STRIP&&c.mode!==Ci.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let p of u){let _=new We,m=new N,g=new vn,M=new N(1,1,1),E=new ai(p.geometry,p.material,d);for(let w=0;w<d;w++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,w),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,w),l.SCALE&&M.fromBufferAttribute(l.SCALE,w),E.setMatrixAt(w,_.compose(m,g,M));let b=null;for(let w in l)if(w==="_COLOR_0"){let R=l[w];E.instanceColor=new As(R.array,R.itemSize,R.normalized)}else if(w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"){if(b===null){let y=E.geometry;b=new Ft,b.name=y.name;for(let A in y.attributes)b.setAttribute(A,y.attributes[A]);for(let A in y.morphAttributes)b.morphAttributes[A]=y.morphAttributes[A];y.index!==null&&b.setIndex(y.index),b.morphTargetsRelative=y.morphTargetsRelative;for(let A of y.groups)b.addGroup(A.start,A.count,A.materialIndex);y.boundingBox!==null&&(b.boundingBox=y.boundingBox.clone()),y.boundingSphere!==null&&(b.boundingSphere=y.boundingSphere.clone()),b.drawRange.start=y.drawRange.start,b.drawRange.count=y.drawRange.count,b.userData=Object.assign({},y.userData),E.geometry=b}let R=l[w];b.setAttribute(w,new As(R.array,R.itemSize,R.normalized))}yt.prototype.copy.call(E,p),this.parser.assignFinalMaterial(E),f.push(E)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Z0="glTF",sl=12,q0={JSON:1313821514,BIN:5130562},bd=class{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,sl),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Z0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-sl,r=new DataView(e,sl),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===q0.JSON){let c=new Uint8Array(e,sl+o,a);this.content=n.decode(c)}else if(l===q0.BIN){let c=sl+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Sd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=Ad[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Ad[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Jo[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let p in f.attributes){let _=f.attributes[p],m=l[p];m!==void 0&&(_.normalized=m)}u(f)},a,c,Gn,d)})})}},Ed=class{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Td=class{constructor(){this.name=st.KHR_MESH_QUANTIZATION}},Lh=class extends is{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,p=e*c,_=p-c,m=-2*f+3*d,g=f-d,M=1-m,E=g-d+u;for(let b=0;b!==a;b++){let w=o[_+b+a],R=o[_+b+l]*h,y=o[p+b+a],A=o[p+b]*h;r[b]=M*w+E*R+m*y+g*A}return r}},sS=new vn,wd=class extends Lh{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return sS.fromArray(r).normalize().toArray(r),r}},Ci={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Jo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Y0={9728:Jt,9729:hn,9984:Pc,9985:ko,9986:Wr,9987:wi},K0={33071:bi,33648:bo,10497:ir},td={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ad={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},fr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},rS={CUBICSPLINE:void 0,LINEAR:Rr,STEP:Ar},nd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};uS=new We,Cd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new iS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?(this.textureLoader=new Ua(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new ka(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Do(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Jr(r,a,s),ds(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Fs.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=td[s.type],a=Jo[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new It(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=td[s.type],c=Jo[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,_,m;if(f&&f!==u){let g=Math.floor(d/f),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,E=t.cache.get(M);E||(_=new c(a,g*f,s.count*f/h),E=new Ro(_,f/h),t.cache.add(M,E)),m=new Co(E,l,d%f/h,p)}else a===null?_=new c(s.count*l):_=new c(a,d,s.count*l),m=new It(_,l,p);if(s.sparse!==void 0){let g=td.SCALAR,M=Jo[s.sparse.indices.componentType],E=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,w=new M(o[1],E,s.sparse.count*g),R=new c(o[2],b,s.sparse.count*l);a!==null&&(m=new It(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let y=0,A=w.length;y<A;y++){let F=w[y];if(m.setX(F,R[y*l]),l>=2&&m.setY(F,R[y*l+1]),l>=3&&m.setZ(F,R[y*l+2]),l>=4&&m.setW(F,R[y*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Y0[d.magFilter]||hn,h.minFilter=Y0[d.minFilter]||wi,h.wrapS=K0[d.wrapS]||ir,h.wrapT=K0[d.wrapT]||ir,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Jt&&h.minFilter!==hn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(d){return new Promise(function(f,p){t.parse(d,f,p)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;let f=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(d){return new Promise(function(f,p){let _=f;t.isImageBitmapLoader===!0&&(_=function(m){let g=new un(m);g.needsUpdate=!0,f(g)}),t.load(Fs.resolveURL(d,r.path),_,void 0,p)})})}let u=h.then(function(d){return c===!0&&a.revokeObjectURL(l),ds(d,o),d.userData.mimeType=o.mimeType||hS(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[st.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Lo,Wn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new rr,Wn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Nr}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[st.KHR_MATERIALS_UNLIT]){let u=s[st.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Te(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Gn),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Dt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=bt);let h=r.alphaMode||nd.OPAQUE;if(h===nd.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===nd.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==rt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ye(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==rt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==rt){let u=r.emissiveFactor;a.emissive=new Te().setRGB(u[0],u[1],u[2],Gn)}return r.emissiveTexture!==void 0&&o!==rt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Dt)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),ds(u,r),t.associations.set(u,{materials:e}),r.extensions&&Jr(s,u,r),u})}createUniqueName(e){let t=Ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return $0(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=cS(c),u=s[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[st.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=$0(new Ft,c,t),c.mode===Ci.TRIANGLE_STRIP?d=d.then(f=>Jf(f,Ka)):c.mode===Ci.TRIANGLE_FAN&&(d=d.then(f=>Jf(f,Go))),s[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?oS(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,p=h.length;f<p;f++){let _=h[f],m=o[f],g,M=c[f];if(m.mode===Ci.TRIANGLES||m.mode===Ci.TRIANGLE_STRIP||m.mode===Ci.TRIANGLE_FAN||m.mode===void 0){let E=r.isSkinnedMesh===!0,b=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");E&&b===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=E&&b?new Aa(_,M):new Be(_,M),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===Ci.LINES)g=new Lr(_,M);else if(m.mode===Ci.LINE_STRIP)g=new Pr(_,M);else if(m.mode===Ci.LINE_LOOP)g=new Ca(_,M);else if(m.mode===Ci.POINTS)g=new Dr(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&lS(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),ds(g,r),m.extensions&&Jr(s,g,m),t.assignFinalMaterial(g),u.push(g)}for(let f=0,p=u.length;f<p;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Jr(s,u[0],r),u[0];let d=new Bt;r.extensions&&Jr(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new cn(xh.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new zr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ds(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let d=new We;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ra(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],p=s.samplers[f.sampler],_=f.target,m=_.node,g=s.parameters!==void 0?s.parameters[p.input]:p.input,M=s.parameters!==void 0?s.parameters[p.output]:p.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",M)),c.push(p),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],p=u[2],_=u[3],m=u[4],g=[];for(let E=0,b=d.length;E<b;E++){let w=d[E],R=f[E],y=p[E],A=_[E],F=m[E];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let C=n._createAnimationTracks(w,R,y,A,F);if(C)for(let P=0;P<C.length;P++)g.push(C[P])}let M=new Ur(r,void 0,g);return ds(M,s),M})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,uS)});for(let f=0,p=u.length;f<p;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,p=u[0];h.pivot=new N().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Io:c.length>1?h=new Bt:c.length===1?h=c[0]:h=new yt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),ds(h,r),r.extensions&&Jr(n,h,r),r.matrix!==void 0){let u=new We;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Bt;n.name&&(r.name=s.createUniqueName(n.name)),ds(r,n),n.extensions&&Jr(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?r.add(Zo(d)):r.add(d)}let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof Wn||d instanceof un)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}fr[r.path]===fr.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let h;switch(fr[r.path]){case fr.weights:h=Ps;break;case fr.rotation:h=Ls;break;case fr.translation:case fr.scale:h=or;break;default:n.itemSize===1?h=Ps:h=or;break}let u=s.interpolation!==void 0?rS[s.interpolation]:Rr,d=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){let _=new h(l[f]+"."+fr[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Rd(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ls?wd:Lh;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}});async function sg(i){let e=new Ih,t=Object.keys(dr),n=0;for(let a of t){let l=atob(window.COZY_ASSETS[a]),c=new Uint8Array(l.length);for(let f=0;f<l.length;f++)c[f]=l.charCodeAt(f);let h=await e.parseAsync(c.buffer,"");h.scene.updateMatrixWorld(!0);let u=new Vn().setFromObject(h.scene),d=null;h.scene.traverse(f=>{f.isMesh&&f.material.map&&(d=f.material.map)}),Dd[a]={scene:h.scene,clips:h.animations,h:Math.max(.3,u.max.y-u.min.y),map:d},i(++n/t.length),await new Promise(f=>setTimeout(f,0))}window.COZY_ASSETS=null,jo=new ai(new ns(1,14).rotateX(-Math.PI/2),new rt({color:1913620,transparent:!0,opacity:.28,depthWrite:!1}),90),jo.frustumCulled=!1,x.scene.add(jo);let s=document.createElement("canvas");s.width=s.height=128;let r=s.getContext("2d");r.fillStyle="#A01A12",r.beginPath(),r.arc(64,64,62,0,6.28),r.fill(),r.fillStyle="#D7392E",r.beginPath(),r.arc(64,64,50,0,6.28),r.fill(),r.fillStyle="#EF8A7C",r.beginPath(),r.arc(64,64,30,0,6.28),r.fill(),r.fillStyle="#F8F4E6",r.beginPath(),r.arc(64,64,13,0,6.28),r.fill(),r.fillStyle="#C9B9A0",r.beginPath(),r.arc(64,64,5,0,6.28),r.fill();let o=new li(s);o.colorSpace=Dt,ng=new rt({map:o,alphaTest:.5,side:bt}),ig=new Gt(1,10,6,0,6.28,0,Math.PI/2),Pd=new Yt({color:16249308,side:bt,flatShading:!0})}function Ii(i,e,t=1){i.animRate=t;let n=i.acts[e]||i.acts.idle;!n||i.cur===n||(n.reset().fadeIn(.15).play(),i.cur&&i.cur.fadeOut(.15),i.cur=n)}function rg(i,e,t,n={}){let s=dr[i],r=Dd[i],o=s.size*(n.scale||1),a=Zo(r.scene);a.scale.setScalar(o/r.h);let l=new Yt({map:r.map,side:bt}),c={};a.traverse(_=>{_.isMesh&&(_.material=l,_.frustumCulled=!1),_.isBone&&(c[_.name]=_)});let h=new Bt,u=new Bt;u.position.y=o*.45,a.position.y=-o*.45,h.add(u),u.add(a),h.position.set(e,n.y||0,t),x.scene.add(h);let d=new Uo(a),f={};for(let _ of r.clips)f[_.name]=d.clipAction(_);let p={key:i,def:s,root:h,tilt:u,model:a,mat:l,bones:c,mixer:d,acts:f,cur:null,animRate:1,H:o,hp:s.hp*(n.hpMul||1),maxHp:s.hp*(n.hpMul||1),boss:!!n.boss,state:"idle",timer:v(.5,3),yaw:v(6.28),vel:ae(),spin:0,tx:e,tz:t,seed:v(100),jit:0,hopT:v(6),baseY:s.fly?2.2:0,heat:0,flash:0,dead:!1,label:null,chute:null,talkT:v(2,10),dP:99,scrT:v(.5,2),hurtT:0};if(h.rotation.y=p.yaw,n.drop){p.state="drop";let _=new Be(ig,Pd);_.scale.set(o*.8,o*.55,o*.8),_.position.y=o*1.25,_.material=Pd,h.add(_),p.chute=_,Ii(p,"talk",1.6)}else p.boss?(p.state="boss",Ii(p,"walk",.8)):Ii(p,"idle");return x.animals.push(p),p}function Yn(i){x.scene.remove(i.root),i.mixer.stopAllAction(),i.mixer.uncacheRoot(i.model),i.mat.dispose(),i.extra&&i.extra.forEach(e=>{x.scene.remove(e.obj),e.mat&&e.mat.dispose()})}function og(i,e){let t=dr[i],n=Dd[i],s=t.size,r=Zo(n.scene);r.scale.setScalar(s/n.h);let o=new Yt({map:n.map,side:bt,color:e});r.traverse(h=>{h.isMesh&&(h.material=o,h.frustumCulled=!1)});let a=new Bt;a.add(r);let l=new Uo(r),c=n.clips.find(h=>h.name==="walk")||n.clips[0];return l.clipAction(c).play(),{root:a,model:r,mat:o,mixer:l,H:s}}function ag(i){x.scene.remove(i.root),i.mixer.stopAllAction(),i.mixer.uncacheRoot(i.model),i.mat.dispose()}function lg(){for(let i of x.animals)i.dead=!0,Yn(i);x.animals.length=0;for(let i of Bn)i.end&&i.end();Bn.length=0,x.boss=null}function Oh(i,e,t){for(let n of x.animals){if(n.state!=="idle"&&n.state!=="wander")continue;let s=n.root.position.x-i,r=n.root.position.z-e;s*s+r*r<t*t&&ol(n)}}function ol(i){i.state="flee",i.timer=v(3,5.5),i.jit=v(-.7,.7),Ii(i,"walk",2.4),Math.random()<.45&&i.dP<40&&Hs(i,Re(dS),1.7),i.dP<35&&Ki(i,Math.random()<.4?"long":"yelp")}function Uh(i){i.chute&&(i.root.remove(i.chute),i.chute=null)}function al(i,e){for(let s of x.obstacles){let r=i.x-s.x,o=i.z-s.z,a=s.r+e,l=r*r+o*o;if(l<a*a&&l>1e-4){let c=Math.sqrt(l);i.x=s.x+r/c*a,i.z=s.z+o/c*a}}let t=Math.hypot(i.x,i.z),n=ft-1;t>n&&(i.x*=n/t,i.z*=n/t)}function Id(i,e,t,n,s){let r=i.root.position;r.x+=e*n*s,r.z+=t*n*s,al(r,i.H*.3);let a=Math.atan2(e,t)-i.yaw;a=Math.atan2(Math.sin(a),Math.cos(a)),i.yaw+=a*Math.min(1,s*10),i.root.rotation.y=i.yaw,i.def.hop&&(i.hopT+=s*n*1.1,r.y=Math.abs(Math.sin(i.hopT))*i.def.hop*Math.min(1,n/6))}function Fd(i){let e=x.player.pos,t=0;for(let n=x.animals.length-1;n>=0;n--){let s=x.animals[n],r=s.root.position,o=s.def;s.mixer.update(i*s.animRate),s.flash>0&&(s.flash-=i,s.mat.emissive.setRGB(s.flash>0?.55:0,0,0));let a=r.x-e.x,l=r.z-e.z,c=Math.hypot(a,l);if(s.dP=c,o.cloak){let h=c>20&&s.state!=="flee"?.3:1;Math.abs(s.mat.opacity-h)>.01&&(s.mat.transparent=!0,s.mat.opacity+=(h-s.mat.opacity)*Math.min(1,i*3))}switch(o.fly&&s.state!=="air"&&s.state!=="drop"&&s.state!=="sucked"&&(s.baseY+=((s.state==="flee"?3.3:2.1)-s.baseY)*Math.min(1,i*2),r.y=s.baseY+Math.sin(x.t*3+s.seed)*.3),s.state){case"drop":r.y-=8.5*i,s.root.rotation.z=Math.sin(x.t*2.5+s.seed)*.12,r.y<=s.baseY&&(r.y=s.baseY,s.root.rotation.z=0,Uh(s),Qt(r.x,0,r.z,5,.7),s.state="idle",s.timer=v(.3,1.5),Ii(s,"idle"));break;case"idle":if(s.timer-=i,s.talkT-=i,c<o.sense){ol(s);break}if(s.talkT<=0&&(s.talkT=v(7,18),c<45&&(Hs(s,Re(o.lines),2.4),Ii(s,"talk"))),s.timer<=0){let h=v(6.28),u=v(4,16);s.tx=ui(r.x+Math.cos(h)*u,-ft+6,ft-6),s.tz=ui(r.z+Math.sin(h)*u,-ft+6,ft-6),s.state="wander",s.timer=v(3,7),Ii(s,"walk",1)}break;case"wander":{if(s.timer-=i,c<o.sense){ol(s);break}let h=s.tx-r.x,u=s.tz-r.z,d=Math.hypot(h,u);if(d<.6||s.timer<=0){s.state="idle",s.timer=v(1,4.5),Ii(s,Math.random()<.3?"talk":"idle"),o.fly||(r.y=0);break}Id(s,h/d,u/d,o.walk,i);break}case"flee":{s.timer-=i;let h=Math.atan2(a,l)+s.jit+Math.sin(x.t*2.2+s.seed)*.45,u=Math.sin(h),d=Math.cos(h),f=Math.hypot(r.x,r.z),p=ft-11;if(f>p){let _=ui((f-p)/9,0,1),m=-r.x/f,g=-r.z/f,M=-g,E=m;M*u+E*d<0&&(M=-M,E=-E),u=u*(1-_)+(M*.85+m*.5)*_,d=d*(1-_)+(E*.85+g*.5)*_;let b=Math.hypot(u,d)||1;u/=b,d/=b}if(Ut.wail&&c<22&&(s.scrT-=i,s.scrT<=0&&(s.scrT=v(1.2,3),Ki(s,"long",!1))),x.wx.rain>.4&&!o.fly&&r.y<.3&&Math.random()<i*.09*x.wx.rain){s.vel.set(u*o.run*.9,4.5,d*o.run*.9),s.state="air",s.spin=v(4,8),c<30&&Hs(s,Re(["\u5730\u597D\u6ED1\uFF01","\u54C7\u554A\uFF01","\u8AB0\u6C92\u62D6\u5730\uFF01"]),1.2),Ki(s,"yelp",!1);break}Id(s,u,d,o.run,i),s.timer<=0&&c>o.sense*1.5&&(s.state="idle",s.timer=v(1,3),Ii(s,"idle"),o.fly||(r.y=0));break}case"air":{s.vel.y-=24*i,r.addScaledVector(s.vel,i),s.tilt.rotation.x+=s.spin*i,s.tilt.rotation.z+=s.spin*.6*i;let h=Math.hypot(s.vel.x,s.vel.z),u=!1;if(h>11)for(let d of x.obstacles){if(r.y>d.h)continue;let f=r.x-d.x,p=r.z-d.z;if(f*f+p*p<(d.r+.6)*(d.r+.6)){fi(s,{mode:"wall",dir:s.vel.clone().normalize(),weapon:s.lastWeapon}),u=!0;break}}if(u)break;if(r.y<=0&&s.vel.y<0){if(Math.hypot(r.x,r.z)>ft+9){fi(s,{mode:"drown",weapon:s.lastWeapon});break}if(s.vel.y<-17){r.y=0,fi(s,{mode:"splat",weapon:s.lastWeapon});break}r.y=0,s.state="stun",s.timer=.9,s.mixer.timeScale=0,s.tilt.rotation.set(-Math.PI/2,0,v(-.5,.5)),s.tilt.position.y=s.H*.2,Y.thud(),Qt(r.x,0,r.z,4,.6)}break}case"stun":s.timer-=i,s.timer<=0&&(s.tilt.rotation.set(0,0,0),s.tilt.position.y=s.H*.45,s.mixer.timeScale=1,Math.hypot(r.x,r.z)>ft-1&&al(r,.5),s.state="idle",s.dP=0,ol(s));break;case"sucked":(!s.hole||s.hole.done)&&(s.hole=null,s.tilt.scale.setScalar(1),s.state="air",s.spin=v(5,10));break;case"boss":{s.timer-=i;let h=c||1;if(h>s.H*.42&&Id(s,-a/h,-l/h,4.8,i),h<s.H*.42+1.2&&s.timer<=0){s.timer=1.6;let u=x.player;u.kvel.set(-a/h*26,0,-l/h*26),u.vel.y=11,u.onGround=!1,at(.8),Y.slam(),Hs(s,Re(["\u9019\u500B\u9700\u6C42\u5F88\u7C21\u55AE","\u6211\u53EA\u662F\u63D0\u500B\u5C0F\u5EFA\u8B70","\u4E0B\u73ED\u524D\u7D66\u6211"]),2)}Math.random()<i*.25&&Hs(s,Re(o.lines),2.2);break}}t<90&&(Dh.position.set(r.x,.025,r.z),Dh.scale.setScalar(s.H*.33*ui(1-r.y/14,.25,1)),Dh.updateMatrix(),jo.setMatrixAt(t++,Dh.matrix))}jo.count=t,jo.instanceMatrix.needsUpdate=!0;for(let n=Bn.length-1;n>=0;n--)Bn[n].upd(i)&&(Bn[n].end&&Bn[n].end(),Bn.splice(n,1));if(Bn.length>34){let n=Bn.shift();n.end&&n.end()}}function Rt(i,e,t={}){return i.dead?!1:i.ice>0?(t.weapon&&(i.lastWeapon=t.weapon),fi(i,t),!0):(i.boss&&(e=Math.min(e,t.bossCap||300)),i.hp-=e,i.flash=.1,t.weapon&&(i.lastWeapon=t.weapon),i.hp<=0?(fi(i,t),!0):i.boss?(Ut.wail&&x.t-i.hurtT>1.2&&(i.hurtT=x.t,Ki(i,"yelp",!1)),!1):(t.knock?(Uh(i),i.root.rotation.z=0,i.vel.copy(t.knock),i.state="air",i.spin=v(6,13),i.root.position.y<.1&&(i.root.position.y=.1),Ki(i,Ut.wail?"fall":"yelp")):i.state==="drop"?(Uh(i),i.root.rotation.z=0,i.vel.set(0,-3,0),i.state="air",i.spin=v(3,6),Ki(i,"fall")):i.state==="idle"||i.state==="wander"?ol(i):Ut.wail&&x.t-i.hurtT>(i.boss?1.2:.5)&&(i.hurtT=x.t,Ki(i,"yelp",!1)),!1))}function fi(i,e={}){if(i.dead)return;i.dead=!0;let t=x.animals.indexOf(i);t>=0&&x.animals.splice(t,1),Uh(i),i.root.rotation.z=0;let n=e.mode||"drop";i.boss?n="mega":i.ice>0&&(n="ice");let s=i.root.position;e.air=!i.def.fly&&s.y>1.3,x.onKill&&x.onKill(i,n,e),Ut.wail&&(Q0[n]&&Ki(i,Q0[n],!1),i.dP<30&&Math.random()<.3&&Un(ae(s.x,s.y+i.H+.5,s.z),Re(mS),"scream",.9,2.4)),Oh(s.x,s.z,24),i.state==="sucked"&&i.tilt.scale.setScalar(1),xS[n](i,e)}function jr(i,e=1,t){let n=i.root.position,s=n.y+i.H*.5,r=i.def.robot,o=i.H/1.5,a=t?t.x:0,l=t?t.z:0;ti(n.x,s,n.z,a*.5,.6,l*.5,Math.round(42*e),9*Math.sqrt(o),r);let c=Math.round(12*e);for(let u=0;u<c;u++){let d=v(-7,7)*o+a*7,f=v(4,13)*Math.sqrt(o),p=v(-7,7)*o+l*7;r?ie.scrap.spawn(n.x,s+v(-.3,.3),n.z,d,f,p,v(.15,.36)*o,v(5,9),Re([15262932,10131076,6467913,3025439])):ie.meat.spawn(n.x+v(-.3,.3),s+v(-.3,.3),n.z+v(-.3,.3),d,f,p,v(.14,.34)*o,v(5,9),Math.random()<.4?i.def.fur:Re(Nh))}if(r)en(n.x,s,n.z,14),Zf(n.x,s,n.z,5,!0),Y.clank();else{for(let u=0;u<Math.round(3*e);u++)ie.bone.spawn(n.x,s,n.z,v(-6,6)+a*5,v(5,11),v(-6,6)+l*5,v(.25,.4)*o,v(6,10));for(let u=0;u<2;u++)ie.eye.spawn(n.x,n.y+i.H*.8,n.z,v(-5,5)+a*4,v(6,12),v(-5,5)+l*4,.2*o,v(7,11));Zf(n.x,s,n.z,Math.round(7*e))}ie.decals.add(n.x,n.z,v(2.6,4.2)*o,r?1710614:Re(Fn)),Y.splat();let h=Fh.set(n.x,s,n.z).distanceTo(x.camera.position);h<5&&$o(h<3?3:1,r)}function rl(i,e,t,n,s,r=7){ti(e,t,n,0,1,0,s,r,i.def.robot,.28)}function gS(i){let e=Zo(i),t=[],n=[];i.traverse(s=>t.push(s)),e.traverse(s=>n.push(s));for(let s=0;s<t.length&&s<n.length;s++)n[s].position.copy(t[s].position),n[s].quaternion.copy(t[s].quaternion),n[s].scale.copy(t[s].scale);return e}function eg(i,e,t,n){return e>t&&i.scale.setScalar(Math.max(.001,1-(e-t)/(n-t))),e>n}function Nd(){let i=0;for(let t in dr)i+=dr[t].w;let e=Math.random()*i;for(let t in dr)if(e-=dr[t].w,e<=0)return t;return"persi"}function Ld(i,e,t=0,n=0){for(let s=0;s<30;s++){let r=v(6.28),o=v(i,e),a=t+Math.cos(r)*o,l=n+Math.sin(r)*o;if(Math.hypot(a,l)>ft-4)continue;let c=!0;for(let h of x.obstacles)if((h.x-a)**2+(h.z-l)**2<(h.r+1)**2){c=!1;break}if(c)return[a,l]}return[v(-20,20),v(-20,20)]}function Qr(i=!0,e){let t=Nd(),n=dr[t],s=n.pack||1,[r,o]=e?Ld(e[2],e[3],e[0],e[1]):Ld(6,ft-8);for(let a=0;a<s;a++)rg(t,r+(a?v(-2,2):0),o+(a?v(-2,2):0),i?{drop:!0,y:v(26,40)}:{});return s}function Ud(){let i=Re(["persi","cocoa","kuri","wasabi","shiro","mochi","cinna"]),e=x.player.pos,[t,n]=Ld(26,36,e.x,e.z),s=rg(i,t,n,{scale:4.4,hpMul:1,boss:!0});return s.hp=s.maxHp=2200,x.boss=s,Qt(t,0,n,18,3),Kt(s.root.position,1,16,.6,15911244),at(.6),Y.slam(),s}var dr,dS,tg,Dd,Bn,Fh,j0,pS,jo,Dh,ng,ig,Pd,Nh,Q0,mS,Ki,xS,Qo=ln(()=>{hi();J0();ed();Yi();Zr();cr();dr={persi:{name:"\u5C0F\u67FF\u5B50",animal:"\u72D0\u72F8",role:"PM",size:1.6,walk:2.2,run:8.6,hp:100,sense:10.5,w:14,pitch:1,fur:15234090,lines:["\u9700\u6C42\u53C8\u6539\u56C9\uFF5E","\u9019\u500B\u5F88\u7C21\u55AE\u5427\uFF1F","\u660E\u5929\u8981\uFF0C\u53EF\u4EE5\u55CE\uFF1F","\u5148\u4E0A\u7DDA\u518D\u8AAA\uFF01","\u8001\u95C6\u8AAA\u8981\u518D\u5927\u6C23\u4E00\u9EDE"]},matcha:{name:"\u5C0F\u62B9\u8336",animal:"\u8B8A\u8272\u9F8D",role:"\u76E4\u9EDE",size:1.45,walk:1.8,run:7,hp:100,sense:8.7,w:11,pitch:.9,fur:9159498,cloak:!0,lines:["\u6211\u5DF2\u8B80\u4E86","\u665A\u9EDE\u56DE\u4F60","\u6A94\u6848\u653E\u54EA\u6211\u5FD8\u4E86","\u61C9\u8A72\u5728\u96F2\u7AEF\u5427\uFF1F"]},cinna:{name:"\u5C0F\u8089\u6842",animal:"\u5C0F\u9E7F",role:"\u7F8E\u8853",size:1.7,walk:2.4,run:10.5,hp:90,sense:12.4,w:11,pitch:1.2,fur:14257738,lines:["\u611F\u89BA\u4E0D\u5C0D\uFF0C\u518D\u4E00\u7248","Logo \u53EF\u4EE5\u653E\u5927\u55CE","\u6211\u8981\u4E94\u5F69\u6591\u6595\u7684\u9ED1","\u9084\u662F\u7B2C\u4E00\u7248\u597D\u4E86"]},cocoa:{name:"\u5C0F\u53EF\u53EF",animal:"\u8C93\u982D\u9DF9",role:"\u4F01\u5283",size:1.6,walk:1.5,run:5.8,hp:160,sense:8.1,w:10,pitch:.7,fur:10119738,lines:["\u9019\u500B\u6703\u958B\u4E09\u5C0F\u6642","\u6211\u5011\u5148\u958B\u500B\u6703","\u6703\u5F8C\u518D\u7D04\u500B\u6703","\u5148\u5C0D\u9F4A\u4E00\u4E0B\u9846\u7C92\u5EA6"]},kuri:{name:"\u5C0F\u6817\u5B50",animal:"\u6CB3\u72F8",role:"\u5DE5\u7A0B",size:1.45,walk:2,run:7.4,hp:120,sense:9.3,w:11,pitch:.85,fur:11890746,lines:["\u6211\u96FB\u8166\u4E0A\u662F\u597D\u7684","\u9019\u500B\u4E0D\u80FD\u6539\u5594","\u8981\u91CD\u69CB\u4E09\u500B\u6708","\u90A3\u662F\u4E0A\u4E00\u624B\u5BEB\u7684"]},minto:{name:"\u5C0F\u8584\u8377",animal:"\u8702\u9CE5",role:"\u6392\u7A0B",size:1.25,walk:3,run:9.5,hp:70,sense:11.2,w:8,pitch:1.5,fur:4891609,fly:!0,lines:["\u81E8\u6642\u63D2\u500B\u55AE\uFF5E","\u9019\u500B\u4ECA\u5929\u8981","\u6025\u4EF6\uFF01\u6025\u4EF6\uFF01","\u884C\u4E8B\u66C6\u6211\u6392\u6EFF\u56C9"]},mochi:{name:"\u5C0F\u9EBB\u7CEC",animal:"\u6A5F\u5668\u4EBA",role:"QA",size:1.6,walk:1.8,run:6.6,hp:220,sense:8.7,w:8,pitch:.55,fur:15262932,robot:!0,lines:["\u9019\u4E0D\u662F bug \u662F feature","\u7121\u6CD5\u91CD\u73FE","\u5DF2\u7D50\u6848","\u8ACB\u9644\u4E0A\u91CD\u73FE\u6B65\u9A5F"]},wasabi:{name:"\u5C0F\u82A5\u672B",animal:"\u9752\u86D9",role:"\u7814\u7A76",size:1.5,walk:2,run:8,hp:100,sense:9.9,w:11,pitch:1.1,fur:8172354,hop:1.1,lines:["\u4E0A\u7DDA\u524D\u60F3\u518D\u6539\u4E00\u4E0B","\u6211\u6709\u500B\u65B0\u60F3\u6CD5\uFF01","\u6578\u64DA\u8AAA\u4E0D\u884C","\u6211\u5011\u63DB\u500B\u65B9\u5411\u5427"]},shiro:{name:"\u5C0F\u767D",animal:"\u4F01\u9D5D",role:"\u91AB\u751F",size:1.5,walk:1.6,run:6.4,hp:130,sense:8.7,w:9,pitch:.95,fur:3422268,lines:["\u591A\u559D\u6C34\u5C31\u597D","\u4F60\u9019\u662F\u904E\u52DE","\u8ACB\u5047\u55AE\u5462\uFF1F","\u56DE\u53BB\u591A\u4F11\u606F"]},lop:{name:"Lop",animal:"\u5154\u5B50",role:"\u63A2\u96AA",size:1.2,walk:2.6,run:9.2,hp:60,sense:10.5,w:7,pitch:1.4,fur:15326403,hop:.7,pack:3,lines:["+1","\u6536\u5230","\u4E86\u89E3","\u597D\u5594"]}},dS=["\u4E0D\u8981\u554A\u554A\u554A\uFF01","\u6211\u53EA\u662F\u7167\u6D41\u7A0B\u8D70\uFF01","\u6709\u8A71\u597D\u8AAA\uFF01","\u6211\u4E0B\u6B21\u4E0D\u6562\u4E86\uFF01","\u9019\u4E0D\u5728\u6211\u7684\u8077\u8CAC\u7BC4\u570D\uFF01","\u6211\u8981\u5831\u52A0\u73ED\uFF01","\u6211\u9084\u6709\u4E09\u5F35\u55AE\u6C92\u7D50\uFF01","\u6551\u547D\u554A\u4EBA\u8CC7\uFF01","\u6211\u660E\u5929\u8ACB\u5047\uFF01","\u6211\u4E0D\u6703\u518D\u5077\u61F6\u5566!!","\u6211\u53EA\u4E0D\u904E\u662F\u53BB\u5927\u4FBF\u4E00\u5C0F\u6642\u554A!","\u6211\u6C92\u6709\u5EA6\u4F30\u554A!!","\u600E\u9EBC\u4E0D\u53BB\u6BBA\u5225\u4EBA\u554A?","\u5509 \u627E\u932F\u4EBA\u4E86\u5427?","\u6211\u9084\u53EF\u4EE5\u518D\u7761\u4E00\u4E0B\u554A!","\u6211\u9084\u53EF\u4EE5\u5403\u591A\u4E00\u9EDE!!","\u6211\u9084\u6C92\u807D\u5230\u516B\u5366\u554A!!","\u7B49\u7B49\u5566!! \u6211\u9084\u5728\u807D\u516B\u5366!!","\u7B49\u7B49\u5566!! \u9019\u5834\u5FEB\u7D50\u675F\u4E86!!","\u4EC0\u9EBC\u554A? \u8001\u95C6\u4E0D\u662F\u9084\u6C92\u4F86\u55CE?","\u4EC0\u9EBC\u554A? \u8001\u95C6\u4E0D\u662F\u51FA\u5DEE\u55CE?","\u554A? \u4ECA\u5929\u958B\u6703\u9019\u9EBC\u5FEB\u554A?","\u554A? \u4ECA\u5929\u4E0D\u7528\u958B\u6703\u554A!","\u6211\u4E0B\u6B21\u4E0D\u9072\u5230\u554A!!","\u7B49\u7B49! \u7B49\u7B49\u7B49!!","\u6211\u9031\u5831\u9084\u6C92\u4EA4\u554A!","\u6211\u53EA\u662F\u4F86\u88DD\u6C34\u7684!","\u6211\u662F\u5916\u5305\u7684\u554A!!","\u6211\u5728\u8D70\u6D41\u7A0B\u5566!","\u6211\u8ACB\u5047\u55AE\u5DF2\u7D93\u9001\u4E86!","\u6211\u7684\u5E74\u7D42\u9084\u6C92\u9818!","\u525B\u525B\u90A3\u500B\u4E0D\u662F\u6211\u8AAA\u7684!","\u6211\u99AC\u4E0A\u56DE Slack!","\u6211\u96FB\u8166\u5728\u66F4\u65B0\u5566!","\u9019\u9031\u8F2A\u5230\u4ED6\u80CC\u934B\u554A!"],tg={slice:"\u88AB\u4E00\u5200\u5169\u65B7",flat:"\u88AB\u62CD\u6210\u8089\u9905",launch:"\u98DB\u53BB\u7576\u661F\u661F\u4E86",gib:"\u70B8\u6210\u7D5E\u8089",burn:"\u70E4\u5230\u5168\u719F",headpop:"\u8166\u888B\u642C\u5BB6",hole:"\u88AB\u9ED1\u6D1E\u56DE\u6536",zap:"\u88AB\u96F7\u516C\u9EDE\u540D",ice:"\u788E\u6210\u51B0\u584A",wall:"\u9ECF\u5728\u7246\u4E0A",splat:"\u6454\u6210\u4E00\u6524",drop:"\u6C38\u4E45\u4E0B\u73ED",drown:"\u53BB\u9935\u9BCA\u9B5A\u4E86",mega:"\u8F5F\u7136\u5012\u4E0B"},Dd={},Bn=[],Fh=new N,j0=new N,pS=new Te,Dh=new yt,Nh=[13125690,14707290,11022888,15705754],Q0={slice:"cut",flat:"squeak",gib:"yelp",headpop:"cut",hole:"rise",wall:"yelp",splat:"yelp",drown:"gurgle",drop:"gurgle",mega:"roar",zap:"cut"},mS=["\u554A\u554A\u554A\u554A\uFF01","\u55DA\u54C7\u554A\u554A\uFF01","\u4E0D\uFF5E\uFF5E\uFF5E\uFF01","\u5ABD\u5440\uFF01","\u54BF\u5440\u2014\u2014\uFF01","\u5443\u554A\uFF01","\u6551\u547D\u554A\uFF01","\u6211\u7684\u5E74\u7D42\uFF5E"],Ki=(i,e,t=!0)=>Y.cry(e,i.def.pitch*(i.boss?.45:1),i.def.robot,t);xS={gib(i,e){jr(i,1,e.dir),Yn(i)},wall(i,e){jr(i,1.2,e.dir);let t=i.root.position;ie.decals.add(t.x,t.z,5,Re(Fn)),Un(t.clone().setY(t.y+1.5),"\u556A\u5630\uFF01","big"),Ko(t,.4),Yn(i)},splat(i){let e=i.root.position;jr(i,.8);for(let t=0;t<26;t++){let n=v(6.28),s=v(4,10);ie.blood.spawn(e.x,.2,e.z,Math.cos(n)*s,v(1,3),Math.sin(n)*s,v(.08,.2),2,Re(Fn))}Yn(i)},drown(i){let e=i.root.position;for(let t=0;t<14;t++)ie.puffs.spawn(e.x,-.3,e.z,v(-3,3),v(5,11),v(-3,3),.4,v(.8,1.5),v(.5,.9),16579056,9422804,-16,.5);Y.splash(),Yn(i)},mega(i,e){let t=i.root.position;jr(i,5,e.dir),tl(t.clone().setY(i.H*.5),12,1.2),Kt(t,1,26,.7,13125690);for(let n=0;n<70;n++){let s=v(6.28),r=v(0,16);jt(v(.2,1.6),()=>ie.meat.spawn(t.x+Math.cos(s)*r,v(14,24),t.z+Math.sin(s)*r,v(-2,2),v(-4,2),v(-2,2),v(.2,.5),v(5,9),Math.random()<.4?i.def.fur:Re(Nh)))}for(let n=0;n<14;n++)ie.decals.add(t.x+v(-9,9),t.z+v(-9,9),v(3,7),Re(Fn));x.hitstop=.14,x.slowmoT=1.4,at(1),$o(5),x.boss=null,Yn(i)},hole(i){Yn(i)},drop(i,e){let t=i.root.position,n=e.dir||ae(0,0,1),s=e.power||4,r=n.x*s,o=n.z*s,a=0,l=!1;i.mixer.timeScale=0,i.yaw=Math.atan2(-n.x,-n.z),i.root.rotation.y=i.yaw,ti(t.x,t.y+i.H*.55,t.z,n.x,.3,n.z,16,6,i.def.robot),i.def.robot?(en(t.x,t.y+i.H*.6,t.z,8),Y.clank()):Y.squish();let c=t.y;Bn.push({upd(h){a+=h;let u=Math.min(1,a/.28);i.tilt.rotation.x=-u*Math.PI/2-(u>=1?Math.max(0,Math.sin((a-.28)*18)*.12*Math.exp(-(a-.28)*6)):0),i.tilt.position.y=i.H*(.45-.27*u),t.y=c*(1-u),t.x+=r*h,t.z+=o*h;let d=Math.exp(-5*h);return r*=d,o*=d,u>=1&&!l&&(l=!0,ie.decals.add(t.x-n.x*.2,t.z-n.z*.2,v(2,3.2),i.def.robot?1710614:Re(Fn)),Qt(t.x,0,t.z,3,.5)),a>.3&&a<1.6&&Math.random()<h*14&&rl(i,t.x,.35,t.z,2,4),eg(i.tilt,a,6,6.6)},end(){Yn(i)}})},headpop(i,e){let t=i.root.position,n=t.y+i.H*.8,s=i.def.robot;i.bones.head&&i.bones.head.scale.setScalar(.001),ti(t.x,n,t.z,0,1,0,26,8,s);for(let h=0;h<5;h++)(s?ie.scrap:ie.meat).spawn(t.x,n,t.z,v(-5,5),v(4,10),v(-5,5),v(.12,.26),v(5,8),s?15262932:Math.random()<.5?i.def.fur:Re(Nh));if(!s)for(let h=0;h<2;h++)ie.eye.spawn(t.x,n,t.z,v(-5,5),v(7,12),v(-5,5),.2,v(7,11));Y.pop(),Y.squish(.03);let r=0,o=i.yaw,a=Re([-1,1])*v(3,5.5),l=!1,c=v(1.1,1.9);Ii(i,"walk",2.6),t.y=i.def.fly?t.y:0,Bn.push({upd(h){if(r+=h,r<c)i.mixer.update(h*2.6),o+=a*h,t.x+=Math.sin(o)*6.5*h,t.z+=Math.cos(o)*6.5*h,al(t,.4),i.root.rotation.y=o,t.y>0&&(t.y=Math.max(0,t.y-6*h)),rl(i,t.x,t.y+i.H*.72,t.z,2,8);else{l||(l=!0,ie.decals.add(t.x,t.z,v(2.2,3.4),s?1710614:Re(Fn)),Y.thud());let u=Math.min(1,(r-c)/.3);i.tilt.rotation.x=u*Math.PI/2,i.tilt.position.y=i.H*(.45-.27*u),r<c+1&&Math.random()<h*12&&rl(i,t.x+Math.sin(o)*i.H*.6,.3,t.z+Math.cos(o)*i.H*.6,2,3)}return eg(i.tilt,r,6.5,7.1)},end(){Yn(i)}})},flat(i){let e=i.root.position,t=i.def.robot;e.y=0,i.mixer.timeScale=0,i.tilt.rotation.set(0,0,0);for(let s=0;s<34;s++){let r=v(6.28),o=v(4,11);(t?ie.oil:ie.blood).spawn(e.x,.25,e.z,Math.cos(r)*o,v(1,4.5),Math.sin(r)*o,v(.08,.2),2,t?1710614:Re(Fn))}if(ie.decals.add(e.x,e.z,v(3.4,4.6)*i.H/1.5,t?1710614:Re(Fn)),t)en(e.x,.3,e.z,12);else for(let s=0;s<2;s++)ie.eye.spawn(e.x,.3,e.z,v(-3,3),v(9,14),v(-3,3),.2,v(7,11));Y.splat();let n=0;Bn.push({upd(s){n+=s;let r=Math.min(1,n/.07),o=1-.95*r;if(n<7.5)return i.tilt.scale.set(1+.8*r,o,1+.8*r),i.tilt.position.y=i.H*.45*o,!1;let a=Math.max(.001,1-(n-7.5)/.5);return i.tilt.scale.set(1.8*a,.05,1.8*a),n>8},end(){Yn(i)}})},launch(i,e){let t=i.root.position,n=e.dir.clone().multiplyScalar(46);n.y=Math.max(n.y,12)+9,Y.crack(),Ki(i,"fall"),i.mixer.timeScale=3,ti(t.x,t.y+i.H*.5,t.z,e.dir.x,.5,e.dir.z,12,7,i.def.robot);let s=0;Bn.push({upd(r){s+=r,n.y-=8*r,t.addScaledVector(n,r),i.tilt.rotation.x+=24*r,i.mixer.update(r*3),Math.random()<r*40&&ie.puffs.spawn(t.x,t.y+i.H*.5,t.z,0,0,0,.5,.2,.4,16579056,14539473,0,1);for(let o of x.animals.slice()){if(o.boss){let l=o.root.position;if(Math.hypot(l.x-t.x,l.z-t.z)<o.H*.35&&t.y<o.H)return Rt(o,220,{mode:"gib",weapon:e.weapon}),jr(i,1,n.clone().normalize()),!0;continue}let a=o.root.position;(a.x-t.x)**2+(a.y-t.y)**2+(a.z-t.z)**2<2.6&&Rt(o,999,{mode:"gib",dir:j0.copy(n).normalize().clone(),weapon:e.weapon,style:"bowling"})}for(let o of x.obstacles)if(!(t.y>o.h)&&(t.x-o.x)**2+(t.z-o.z)**2<(o.r+.6)**2)return jr(i,1.2,n.clone().normalize()),ie.decals.add(t.x,t.z,5,Re(Fn)),Un(t.clone().setY(t.y+1.5),"\u556A\u5630\uFF01","big"),Ko(t,.4),!0;return t.y<.1&&n.y<0?(t.y=0,jr(i,.9),!0):s>1.5?(Un(t,"\u2726","star",1.3,0),Y.ding(),!0):!1},end(){Yn(i)}})},burn(i){let e=i.root.position,t=0,n=i.yaw,s=!1,r=0,o=v(.5,.9),a=v(1.8,2.6);Ii(i,"walk",3.2),Ki(i,"long"),i.mat.transparent=!1,i.mat.opacity=1,Math.random()<.6&&Hs({root:i.root,H:i.H,dead:!1,label:null},Re(["\u71D9\u71D9\u71D9\u71D9\uFF01","\u6211\u8457\u706B\u4E86\uFF01","\u8AB0\u4F86\u6EC5\u706B\uFF01","\u554A\u554A\u554A\u554A\u554A\uFF01"]),1.6),Bn.push({upd(l){if(t+=l,t<a){i.mixer.update(l*3.2),n+=v(-7,7)*l+Math.sin(t*9)*3*l,e.x+=Math.sin(n)*9*l,e.z+=Math.cos(n)*9*l,al(e,.4),i.root.rotation.y=n,!i.def.fly&&e.y>0&&(e.y=Math.max(0,e.y-8*l)),i.mat.color.lerp(pS.set(1709586),l*1.1),Ut.wail&&(o-=l,o<=0&&(o=v(.5,.9),Ki(i,"long",!1)));for(let c=0;c<2;c++)ie.puffs.spawn(e.x+v(-.4,.4),e.y+v(.2,i.H),e.z+v(-.4,.4),v(-1,1),v(1,3),v(-1,1),.3,v(.5,.9),v(.25,.5),16773808,15234090,5,2);if(r-=l,r<=0){r=.12;for(let c of x.animals.slice()){let h=c.root.position;(h.x-e.x)**2+(h.z-e.z)**2<4.4&&Math.abs(h.y-e.y)<2.5&&Rt(c,c.boss?40:999,{mode:"burn",weapon:"flame",style:"spread"})}Math.random()<.3&&ie.decals.add(e.x,e.z,v(.8,1.5),2367770,!0)}}else if(s){if(t>a+.7){for(let c=0;c<14;c++)ie.puffs.spawn(e.x+v(-.3,.3),e.y+v(.1,i.H),e.z+v(-.3,.3),v(-3,3),v(0,4),v(-3,3),.3,v(.6,1.1),v(.5,.9),3025439,7038037,-3,2);for(let c=0;c<9;c++)ie.scrap.spawn(e.x,e.y+v(.2,i.H),e.z,v(-3,3),v(1,5),v(-3,3),v(.12,.28),v(4,7),Re([1380879,2367770]));return ie.decals.add(e.x,e.z,v(1.8,2.6),2367770),Y.thud(),!0}}else{s=!0,i.mat.color.set(1380879),i.mixer.timeScale=0;for(let c=0;c<6;c++)ie.puffs.spawn(e.x,e.y+v(.3,i.H),e.z,v(-1,1),v(1,3),v(-1,1),.4,1,v(.6,1),7038037,3025439,2,2)}return!1},end(){Yn(i)}})},ice(i){let e=i.root.position,t=e.y+i.H*.5,n=i.H/1.5;for(let s=0;s<16;s++)ie.scrap.spawn(e.x+v(-.3,.3),t+v(-.5,.5),e.z+v(-.3,.3),v(-7,7),v(3,10),v(-7,7),v(.18,.4)*n,v(4,7),Re([12577535,10475760,15136767]));for(let s=0;s<6;s++)ie.meat.spawn(e.x,t,e.z,v(-5,5),v(3,9),v(-5,5),v(.14,.3)*n,v(4,7),Re(Nh));for(let s=0;s<8;s++)ie.puffs.spawn(e.x,t,e.z,v(-3,3),v(0,3),v(-3,3),.3,v(.8,1.4),v(.4,.7),16055034,12577535,.5,2);ie.decals.add(e.x,e.z,v(1.6,2.4)*n,12575726),Y.ice(),Yn(i)},zap(i){let e=i.root.position,t=0,n=!1;i.mixer.timeScale=0,i.mat.transparent=!1,i.mat.opacity=1,i.tilt.rotation.set(0,0,0),!i.def.fly&&e.y<.3&&(e.y=0),Bn.push({upd(s){if(t+=s,t<.55){let r=Math.floor(t*30)%2;return i.mat.emissive.setRGB(r,r,r*.8),i.mat.color.set(r?16777215:1118481),i.tilt.position.x=v(-.08,.08),i.tilt.scale.set(1+v(-.06,.06),1+v(0,.14),1+v(-.06,.06)),Math.random()<s*30&&en(e.x,e.y+v(.2,i.H),e.z,2),!1}if(!n){n=!0,i.mat.emissive.setRGB(0,0,0),i.mat.color.set(1380879),i.tilt.position.x=0,i.tilt.scale.setScalar(1);for(let r=0;r<6;r++)ie.puffs.spawn(e.x,e.y+v(.3,i.H),e.z,v(-1,1),v(1,3),v(-1,1),.4,1,v(.6,1),7038037,3025439,2,2)}if(e.y>0&&(e.y=Math.max(0,e.y-14*s)),t>1.5){for(let r=0;r<12;r++)ie.puffs.spawn(e.x+v(-.3,.3),e.y+v(.1,i.H),e.z+v(-.3,.3),v(-3,3),v(0,4),v(-3,3),.3,v(.6,1.1),v(.5,.9),3025439,7038037,-3,2);for(let r=0;r<8;r++)ie.scrap.spawn(e.x,e.y+v(.2,i.H),e.z,v(-3,3),v(1,5),v(-3,3),v(.12,.28),v(4,7),Re([1380879,2367770]));return ie.decals.add(e.x,e.z,v(1.8,2.6),2367770),Y.thud(),!0}return!1},end(){Yn(i)}})},slice(i,e){let t=e.cut||Re(["h","d"]),n=i.H,s=i.root.position,r=i.def.robot,o,a;t==="v"?(o=ae(1,0,0),a=ae(0,n*.5,0)):t==="d"?(o=ae(.55*Re([-1,1]),.83,0).normalize(),a=ae(0,n*.5,0)):(o=ae(0,1,0),a=ae(0,n*.45,0)),i.tilt.rotation.set(0,0,0),i.tilt.position.y=n*.45,i.tilt.scale.setScalar(1),!i.def.fly&&t!=="v"&&(s.y=Math.max(0,s.y));let l=new Bt;l.rotation.y=i.root.rotation.y,l.position.copy(a).applyAxisAngle(Fh.set(0,1,0),i.root.rotation.y).add(s);let c=gS(i.model);c.position.set(-a.x,-a.y,-a.z);let h=i.mat.clone(),u=new Ln,d=new Ln;h.clippingPlanes=[u],i.mat.clippingPlanes=[d],i.mat.needsUpdate=!0,i.mat.transparent=!1,i.mat.opacity=1,h.transparent=!1,h.opacity=1,c.traverse(C=>{C.isMesh&&(C.material=h,C.frustumCulled=!1)}),l.add(c),x.scene.add(l);let f=new Ln(o.clone(),0),p=new Ln().setFromNormalAndCoplanarPoint(o.clone().negate(),a.clone().sub(i.tilt.position)),_=(C,P,O)=>{let z=new Be(new ns(1,18),r?new rt({color:3025439,side:bt}):ng);z.scale.set(n*.3,t==="v"?n*.47:n*.3,1),z.quaternion.setFromUnitVectors(Fh.set(0,0,1),o),z.position.copy(P).addScaledVector(o,O*.01),C.add(z)};_(l,ae(0,0,0),1),_(i.tilt,a.clone().sub(i.tilt.position),-1),i.extra=[{obj:l,mat:h}];let m=j0.set(o.x,0,o.z).applyAxisAngle(Fh.set(0,1,0),i.root.rotation.y).clone(),g=e.dir||ae(0,0,0),M=t==="v"?ae(m.x*2.6,2.2,m.z*2.6):ae(g.x*3+m.x*3.5+v(-1,1),v(4.5,6.5),g.z*3+m.z*3.5+v(-1,1)),E=t==="v"?ae(0,0,-5):ae(v(-7,7),v(-4,4),v(-7,7));ti(l.position.x,l.position.y,l.position.z,0,.6,0,30,7,r),r&&(en(l.position.x,l.position.y,l.position.z,12),Y.clank()),Y.slice();let b=0,w=!1,R=i.yaw,y=t==="v"?0:v(.45,.85);y?Ii(i,"walk",2.6):i.mixer.timeScale=0;let A=n*.2,F=s.y;Bn.push({upd(C){if(b+=C,w||(M.y-=22*C,l.position.addScaledVector(M,C),l.rotation.x+=E.x*C,l.rotation.z+=E.z*C,l.rotation.y+=E.y*C,t==="v"&&l.rotation.z<-Math.PI/2&&(l.rotation.z=-Math.PI/2,E.z=0),l.position.y<A&&(l.position.y=A,w=!0,ie.decals.add(l.position.x,l.position.z,v(1.6,2.6),r?1710614:Re(Fn)),Y.thud(),t!=="v"&&l.rotation.set(Math.PI/2*Re([-1,1]),l.rotation.y,0))),b<y)i.mixer.update(C*2.6),s.x+=Math.sin(R)*5*C,s.z+=Math.cos(R)*5*C,al(s,.4),rl(i,s.x,s.y+a.y,s.z,2,7);else{let P=Math.min(1,(b-y)/.32);t==="v"?(i.tilt.rotation.z=P*Math.PI/2,s.y=F*(1-P)):i.tilt.rotation.x=P*Math.PI/2,i.tilt.position.y=n*(.45-.25*P),b<y+.9&&Math.random()<C*16&&rl(i,s.x,.4,s.z,2,4),P>=1&&!i._pool&&(i._pool=!0,ie.decals.add(s.x,s.z,v(2.2,3.2),r?1710614:Re(Fn)))}if(l.updateMatrixWorld(!0),i.root.updateMatrixWorld(!0),u.copy(f).applyMatrix4(l.matrixWorld),d.copy(p).applyMatrix4(i.tilt.matrixWorld),b>6.2){let P=Math.max(.001,1-(b-6.2)/.6);l.scale.setScalar(P),i.tilt.scale.setScalar(P)}return b>6.8},end(){Yn(i)}})}}});function Vs(){x.camera.getWorldDirection(Xe),Li.crossVectors(Xe,fg).normalize(),Gs.crossVectors(Li,Xe),Et.copy(x.camera.position)}function Ot(i,e,t,n,s=0,r=0,o=0,a=0,l=0,c=0){let h=new Be(new Sn(i,e,t),to(n));return h.position.set(s,r,o),h.rotation.set(a,l,c),h}function pn(i,e,t,n,s=0,r=0,o=0,a=0,l=0,c=0,h=10){let u=new Be(new qt(i,e,t,h),to(n));return u.position.set(s,r,o),u.rotation.set(a,l,c),u}function yS(){let o={};o.katana=Pi(pn(.018,.018,.24,3025439,0,0,0),pn(.05,.05,.014,15911244,0,.125,0),Ot(.01,.82,.045,14541530,0,.54,0),Ot(.012,.82,.012,16250864,0,.54,-.022)),o.hammer=Pi(pn(.026,.03,1,9067051,0,.3,0),pn(.19,.19,.42,7038037,0,.85,0,di,0,0,12),pn(.2,.2,.05,15911244,0,.85,.19,di,0,0,12),pn(.2,.2,.05,15911244,0,.85,-.19,di,0,0,12)),o.bat=Pi(pn(.02,.018,.3,3025439,0,0,0),pn(.058,.03,.7,9067051,0,.5,0));for(let l=0;l<14;l++){let c=l/7*6.28+(l>6?.45:0),h=.55+(l>6?.2:0)+l%2*.06,u=new Be(new Vi(.018,.07,5),to(14541530));u.position.set(Math.cos(c)*.07,h,Math.sin(c)*.07),u.rotation.set(Math.sin(c)*di,0,-Math.cos(c)*di),o.bat.add(u)}Bd=Ot(.022,.085,.6,14541530,0,0,-.42),o.saw=Pi(Ot(.17,.15,.24,15234090,0,0,0),Ot(.05,.05,.2,3025439,0,.11,.02),Ot(.17,.04,.1,3025439,0,-.05,-.14),Bd);for(let l=0;l<10;l++)o.saw.add(Ot(.026,.02,.03,3025439,0,.05,-.16-l*.055)),o.saw.add(Ot(.026,.02,.03,3025439,0,-.05,-.19-l*.055));o.smg=Pi(Ot(.06,.1,.34,3025439,0,0,0),pn(.016,.016,.18,7038037,0,.015,-.26,di),Ot(.04,.18,.055,4864792,0,-.13,-.03,.15),Ot(.045,.1,.05,4864792,0,-.09,.12,-.2),Ot(.03,.03,.06,15911244,0,.065,-.1)),o.shotgun=Pi(pn(.024,.024,.62,7038037,-.026,.02,-.3,di),pn(.024,.024,.62,7038037,.026,.02,-.3,di),Ot(.085,.085,.24,9067051,0,0,.06),Ot(.06,.12,.06,9067051,0,-.08,.16,-.3),Ot(.09,.05,.2,4864792,0,-.03,-.22)),cl=Pi(Ot(.07,.06,.02,4864792,0,0,0),new Be(new Gt(.04,8,6),to(14715438))),cl.children[1].position.z=-.03,cl.position.set(0,.2,.02),o.sling=Pi(pn(.02,.022,.2,9067051,0,0,0),pn(.016,.018,.2,9067051,-.06,.17,0,0,0,.6),pn(.016,.018,.2,9067051,.06,.17,0,0,0,-.6),cl),o.missile=Pi(Ot(.24,.2,.5,2966305,0,0,0),Ot(.26,.22,.04,15911244,0,0,-.2),Ot(.05,.12,.06,3025439,0,-.15,.1));for(let l=0;l<8;l++)o.missile.add(pn(.036,.036,.03,3025439,-.075+l%4*.05,.045-Math.floor(l/4)*.09,-.25,di));o.flame=Pi(pn(.07,.07,.3,13125690,0,-.02,.1,di),pn(.022,.022,.5,7038037,0,.03,-.26,di),pn(.04,.028,.08,3025439,0,.03,-.52,di),Ot(.04,.12,.05,3025439,0,-.1,-.05),Ot(.02,.05,.02,15911244,0,0,-.5)),ea=new Be(new Wi(.1,.014,6,20),to(15911244)),ea.position.set(0,.02,-.3);let a=new Be(new Gt(.07,12,10),new rt({color:1053711}));return a.position.set(0,.02,-.3),o.hole=Pi(Ot(.1,.12,.36,1850656,0,0,0),Ot(.05,.12,.06,3025439,0,-.11,.1),pn(.05,.07,.1,13935475,0,.02,-.2,di),ea,a),o.hammer.scale.setScalar(.72),o.missile.scale.setScalar(.72),o.hole.scale.setScalar(.85),o.saw.scale.setScalar(.9),Di.map(l=>{let c=o[l.id];return c.visible=!1,ll.add(c),c})}function xg(){ll=new Bt,x.camera.add(ll),hl=yS(),eo=Pi(Ot(.13,.12,.34,7032362,0,0,0),Ot(.14,.04,.38,3025439,0,-.07,-.01),Ot(.12,.22,.13,7032362,0,.14,.11)),eo.visible=!1,ll.add(eo),ps=new Be(new Cs(.42,.6,24,1,.3,2.5),new rt({color:16579056,transparent:!0,opacity:.8,side:bt,depthTest:!1})),ps.visible=!1,ps.position.set(0,-.12,-.75),ll.add(ps),dg=new Gt(.22,10,8),pg=to(14715438),mg=new qt(.07,.1,.6,8).rotateX(Math.PI/2),gg=to(16249308),hl[0].visible=!0}function _g(){for(let i of mr)i.kill&&i.kill();mr.length=0,V.cd=0,V.sw=0,V.charge=0,V.charging=!1,V.missiles=8,V.holeCd=0,V.pending=null,V.locks.length=0,V.kickT=0,Tn("saw",!1),Tn("flame",!1),Tn("hole",!1)}function Bh(i){i===V.cur||i<0||i>=Di.length||V.next===i||(V.next=i,V.switchT=1e-4,V.charging=!1,V.charge=0,V.pending=null,Tn("saw",!1),Tn("flame",!1))}function zd(i,e,t,n,s,r){let o=i.x-t,a=i.y-n,l=i.z-s,c=o*e.x+a*e.y+l*e.z,h=o*o+a*a+l*l-r*r;if(h>0&&c>0)return null;let u=c*c-h;if(u<0)return null;let d=-c-Math.sqrt(u);return d<0?0:d}function vS(i,e,t){let n=null,s=t;for(let r of x.animals){let o=r.root.position,a=x.buff.bighead>0&&!r.boss?2.2:1,l=zd(i,e,o.x,o.y+r.H*(a>1?.95:.8),o.z,r.H*.3*a),c=zd(i,e,o.x,o.y+r.H*.4,o.z,r.H*.42);if(l===null&&c===null)continue;let h=Math.min(l===null?1e9:l,c===null?1e9:c);h<s&&(s=h,n={a:r,head:l!==null,t:h})}return n}function yg(i,e,t){let n=t,s=null;if(e.y<-1e-4){let o=-i.y/e.y;o<n&&(n=o,s={type:"ground"})}let r=e.x*e.x+e.z*e.z;if(r>1e-6)for(let o of x.obstacles){let a=i.x-o.x,l=i.z-o.z,c=a*e.x+l*e.z,h=a*a+l*l-o.r*o.r,u=c*c-r*h;if(u<0)continue;let d=(-c-Math.sqrt(u))/r;if(d>0&&d<n){let f=i.y+e.y*d;f<o.h&&f>=0&&(n=d,s={type:"ob",ob:o})}}for(let o of x.barrels){if(!o.alive)continue;let a=zd(i,e,o.x,.7,o.z,.8);a!==null&&a<n&&(n=a,s={type:"barrel",br:o})}return{t:n,hit:s}}function ul(i,e){let t=[];for(let n of x.animals){let s=n.root.position;He.set(s.x-Et.x,s.y+n.H*.5-Et.y,s.z-Et.z);let r=He.length(),o=i+n.H*.35;r>o||r>1.4+n.H*.3&&He.dot(Xe)/r<e||t.push({a:n,d:r})}return t}function Ws(i){i.alive&&(i.alive=!1,i.m.visible=!1,i.t=22,Kn(ae(i.x,.8,i.z),7.5,{weapon:"barrel"}))}function Kn(i,e,t={}){let n=t.gibR===void 0?e*.62:t.gibR;tl(i,e,t.loud||1);let s=0;for(let a of x.animals.slice()){let l=a.root.position;He.set(l.x-i.x,l.y+a.H*.5-i.y,l.z-i.z);let c=Math.max(.01,He.length()-(a.boss?a.H*.3:0));if(!(c>e))if(He.normalize(),c<n)Rt(a,999,{mode:"gib",dir:He.clone(),weapon:t.weapon,bossCap:420})&&s++;else{let h=1-c/e,u=ae(He.x*(8+12*h),8+9*h,He.z*(8+12*h));Rt(a,30+70*h,{mode:"gib",dir:He.clone(),knock:u,weapon:t.weapon})&&s++}}for(let a of x.barrels)a.alive&&(a.x-i.x)**2+(a.z-i.z)**2<(e+1.5)**2&&jt(v(.08,.25),()=>Ws(a));let r=x.player;He.set(r.pos.x-i.x,0,r.pos.z-i.z);let o=He.length();if(o<e&&Math.abs(r.pos.y+1-i.y)<e){let a=1-o/e;He.normalize(),r.kvel.x+=He.x*16*a,r.kvel.z+=He.z*16*a,r.vel.y=Math.max(r.vel.y,5+9*a),r.onGround=!1}return s>=3&&x.onMulti&&x.onMulti(s,i),Oh(i.x,i.z,e+26),s}function hg(i,e,t,n=1){Vs();let s=ae().copy(Et).addScaledVector(Xe,.75).addScaledVector(Li,.2).addScaledVector(Gs,-.15),r=new Map;for(let o=0;o<n;o++){pr.copy(Xe).addScaledVector(Li,v(-i,i)).addScaledVector(Gs,v(-i,i)).normalize();let a=yg(Et,pr,220),l=vS(Et,pr,a.t),c=ae();if(l){c.copy(Et).addScaledVector(pr,l.t);let h=r.get(l.a)||{dmg:0,head:!1,dir:pr.clone(),d:l.t};h.dmg+=e*(l.head?2.5:1),h.head=h.head||l.head,r.set(l.a,h),ti(c.x,c.y,c.z,pr.x,.2,pr.z,3,5,l.a.def.robot),l.a.def.robot&&en(c.x,c.y,c.z,3)}else c.copy(Et).addScaledVector(pr,a.t),a.hit&&(a.hit.type==="barrel"?Ws(a.hit.br):ie.puffs.spawn(c.x,c.y+.05,c.z,0,1.5,0,.15,.4,.25,15260085,16249308,0,2));ei(s,c)}return ie.puffs.spawn(s.x+Xe.x*.2,s.y+Xe.y*.2,s.z+Xe.z*.2,0,0,0,.25,.1,.06,16773808,15911244,0,0),r.size&&(x.hitMark=.12),r}function vg(i,e,t){let n=new Be(dg,pg);t&&n.scale.setScalar(.55),x.scene.add(n);let s=t?v(.55,1.15):6;mr.push({kill(){x.scene.remove(n)},upd(r){e.y-=20*r,i.addScaledVector(e,r),n.position.copy(i),n.rotation.x+=9*r,s-=r;let o=s<=0;if(i.y<.22&&(t?(i.y=.22,e.y=Math.abs(e.y)*.5,e.x*=.7,e.z*=.7):o=!0),!o)for(let a of x.animals){let l=a.root.position;if((l.x-i.x)**2+(l.y+a.H*.5-i.y)**2+(l.z-i.z)**2<(a.H*.5+.25)**2){o=!0;break}}if(!o){for(let a of x.obstacles)if(i.y<a.h&&(i.x-a.x)**2+(i.z-a.z)**2<(a.r+.2)**2){o=!0;break}}if(!t&&Math.random()<r*30&&ie.puffs.spawn(i.x,i.y,i.z,0,0,0,.3,.1,.3,16579056,14539473,0,1),!o)return!1;if(x.scene.remove(n),Kn(i.clone(),t?4.6:7,{weapon:"sling",loud:t?.6:1}),!t)for(let a=0;a<5;a++){let l=a/5*6.28+v(.5);vg(ae(i.x,Math.max(.5,i.y),i.z),ae(Math.cos(l)*v(4,8),v(7,11),Math.sin(l)*v(4,8)),!0)}return!0}})}function MS(i,e){let t=null,n=e*e;for(let s of x.animals){let r=s.root.position,o=(r.x-i.x)**2+(r.y-i.y)**2+(r.z-i.z)**2;o<n&&(n=o,t=s)}return t}function bS(i,e,t){Vs();let n=ae().copy(Et).addScaledVector(Xe,.7).addScaledVector(Li,.3).addScaledVector(Gs,-.15),s=ae().copy(Xe).addScaledVector(Gs,.45+v(.2)).addScaledVector(Li,(e-(t-1)/2)*.22).normalize(),r=new Be(mg,gg);x.scene.add(r);let o=0,a=14,l=0,c=ae(0,0,-1);Y.missile(),mr.push({kill(){x.scene.remove(r)},upd(h){o+=h,a=Math.min(62,a+75*h),i&&i.dead&&(i=MS(n,45));let u=99;i&&(ms(i,$i).sub(n),u=$i.length(),o>.16&&s.lerp($i.normalize(),Math.min(1,h*(5+o*14))).normalize()),n.addScaledVector(s,a*h),r.position.copy(n),r.quaternion.setFromUnitVectors(c,s),l-=h,l<=0&&o>.14&&(l=.02,ie.puffs.spawn(n.x-s.x*.4,n.y-s.y*.4,n.z-s.z*.4,v(-.5,.5),v(-.5,.5),v(-.5,.5),.3,.6,.45,16773808,14539473,.6,1.5));let d=o>5||n.y<.15||i&&u<i.H*.5+.6;if(!d&&o>.2){for(let f of x.obstacles)if(n.y<f.h&&(n.x-f.x)**2+(n.z-f.z)**2<f.r*f.r){d=!0;break}}return d?(x.scene.remove(r),Kn(n.clone(),4.6,{gibR:3.3,weapon:"missile",loud:.75}),!0):!1}})}function SS(){Vs();let i=ae().copy(Et).addScaledVector(Xe,1),e=Xe.clone(),t=new Bt,n=new Be(new Gt(1,16,12),new rt({color:790539})),s=new Be(new Wi(1.5,.09,6,32),new rt({color:15911244})),r=new Be(new Wi(1.9,.05,6,32),new rt({color:16579056}));t.add(n,s,r),t.scale.setScalar(.35),x.scene.add(t);let o={done:!1},a=0,l=0,c=[],h=0;mr.push({kill(){x.scene.remove(t),o.done=!0,Tn("hole",!1)},upd(u){if(a+=u,s.rotation.x+=u*5,s.rotation.y+=u*3,r.rotation.y-=u*4,r.rotation.z+=u*2.5,l===0){i.addScaledVector(e,24*u),t.position.copy(i);let _=a>.9||i.y<1.2;if(!_){for(let m of x.obstacles)if(i.y<m.h&&(i.x-m.x)**2+(i.z-m.z)**2<(m.r+.5)**2){_=!0;break}}if(!_){for(let m of x.animals)if(ms(m,He),He.distanceToSquared(i)<4){_=!0;break}}return _&&(l=1,a=0,i.y=Math.max(i.y,2.6),t.position.copy(i),Tn("hole",!0),Kt(i.clone().setY(.1),14,1,.5,1057807)),!1}let d=3.6,f=Math.min(1,a/.4);if(t.scale.setScalar(.35+1*f+Math.sin(a*18)*.05+c.length*.03),h-=u,h<=0){h=.03;let _=v(6.28),m=v(6,16);ie.puffs.spawn(i.x+Math.cos(_)*m,v(.2,5),i.z+Math.sin(_)*m,-Math.cos(_)*m*2.2-Math.sin(_)*6,2,-Math.sin(_)*m*2.2+Math.cos(_)*6,.25,.12,.45,2966305,1057807,0,0)}for(let _ of x.animals.slice()){let m=_.root.position;ms(_,He),$i.copy(i).sub(He);let g=$i.length();if(_.boss){g<22&&Rt(_,260*u,{weapon:"hole",mode:"gib",bossCap:999});continue}if(g>24)continue;_.state!=="sucked"&&(_.chute&&(_.root.remove(_.chute),_.chute=null),_.state="sucked",_.hole=o,_.mixer.timeScale=3,Math.random()<.45&&Y.cry("rise",_.def.pitch,_.def.robot)),_.hole!==o&&(_.hole=o),$i.multiplyScalar(1/g);let M=Math.min(42,5+240/(g+2));m.x+=($i.x*M+-$i.z*M*.55)*u,m.y+=$i.y*M*u,m.z+=($i.z*M+$i.x*M*.55)*u,_.tilt.rotation.x+=13*u,_.tilt.rotation.z+=9*u,_.tilt.scale.setScalar(ui(g/7,.18,1)),g<1.4&&(c.push({fur:_.def.fur,robot:_.def.robot}),Rt(_,9999,{mode:"hole",weapon:"hole"}),Y.pop())}if(a<d)return!1;o.done=!0,Tn("hole",!1),x.scene.remove(t),tl(i,8,1.1),Kt(i.clone().setY(.1),1,22,.6,13125690);let p=c.length;for(let _=0;_<Math.min(160,p*12+8);_++){let m=v(6.28),g=v(.1,1.45),M=v(8,22),E=c[_%Math.max(1,p)],b=Math.cos(m)*Math.cos(g)*M,w=Math.sin(g)*M,R=Math.sin(m)*Math.cos(g)*M;if(!p)break;E.robot?ie.scrap.spawn(i.x,i.y,i.z,b,w,R,v(.15,.3),v(5,9),15262932):ie.meat.spawn(i.x,i.y,i.z,b,w,R,v(.14,.34),v(5,9),Math.random()<.4?E.fur:Re([13125690,14707290,11022888]))}if(p){ti(i.x,i.y,i.z,0,.8,0,Math.min(260,p*30),16,!1,.9);for(let _=0;_<Math.min(16,p*2);_++)ie.eye.spawn(i.x,i.y,i.z,v(-9,9),v(6,16),v(-9,9),.2,v(7,11));$o(Math.min(5,p))}return p>=3&&x.onMulti&&x.onMulti(p,i,"\u9ED1\u6D1E\u56DE\u6536"),at(.9),!0}})}function Od(i){Vs(),i=i||ul(4,.3);for(let{a:e}of i)ms(e,He),ti(He.x,He.y,He.z,-Xe.x*.3,.5,-Xe.z*.3,8,7,e.def.robot),Rt(e,170,{mode:"slice",cut:V.swDir>0?"h":"d",dir:Xe.clone(),weapon:"katana",bossCap:170});i.length&&(x.hitstop=.045,at(.25),Y.slice(),x.hitMark=.12)}function ug(i){Vs();let e=x.player,t=Math.hypot(Xe.x,Xe.z)||1,n=i?1.75:1,s=ae(e.pos.x+Xe.x/t*2.5,0,e.pos.z+Xe.z/t*2.5);Y.slam(),at(i?1:.7),Kt(s,.5,6.5*n,.35),Kt(s,.3,4*n,.5,15260085),Qt(s.x,0,s.z,12,1.1*n),ie.decals.add(s.x,s.z,3.4*n,3814692,!0),x.hitstop=.05;let r=0;for(let o of x.animals.slice()){let a=o.root.position,l=Math.hypot(a.x-s.x,a.z-s.z);if(!(a.y>4.5*n)){if(l<2.6*n+(o.boss?o.H*.3:0))Rt(o,999,{mode:"flat",weapon:"hammer",bossCap:340})&&r++,o.boss&&(ms(o,He),ti(He.x,He.y,He.z,0,1,0,30,9));else if(l<6.5*n){let c=1-l/(6.5*n);Rt(o,30,{mode:"splat",weapon:"hammer",knock:ae((a.x-s.x)/l*5,9+7*c,(a.z-s.z)/l*5)})&&r++}}}for(let o of x.barrels)o.alive&&(o.x-s.x)**2+(o.z-s.z)**2<(4*n)**2&&Ws(o);i&&Un(s.clone().setY(2.2),"\u5929\u964D\u6B63\u7FA9\uFF01","big"),r>=3&&x.onMulti&&x.onMulti(r,s),Oh(s.x,s.z,26)}function ES(){Vs();let i=ul(4.1,.35);for(let{a:e}of i){let t=Xe.clone();t.y=Math.max(t.y,.28),t.normalize(),e.boss?(ms(e,He),ti(He.x,He.y,He.z,t.x,.5,t.z,20,9),Rt(e,260,{weapon:"bat"})):Rt(e,999,{mode:"launch",dir:t,weapon:"bat"})}i.length&&(x.hitstop=.07,at(.5),x.hitMark=.12,i[0].a.boss&&Y.crack())}function TS(){Vs(),V.kickCd=.5,V.kickT=.3,Y.swing(),jt(.08,()=>{Vs();let i=ul(3.2,.45),e=Math.hypot(Xe.x,Xe.z)||1;for(let{a:t}of i){if(t.boss){Rt(t,60,{weapon:"kick"});continue}Rt(t,25,{mode:"splat",weapon:"kick",knock:ae(Xe.x/e*22,8.5,Xe.z/e*22)})}for(let t of x.barrels)t.alive&&(t.x-Et.x)**2+(t.z-Et.z)**2<6&&Ws(t);i.length&&(Y.kick(),at(.3),x.hitstop=.04,x.hitMark=.12)})}function Mg(i,e){let t=x.input,n=Di[V.cur].id,s=x.rageOn>0,r=x.buff.rapid>0,o=(s?.5:1)*(r?.3:1),a=x.player;if(V.cd-=i,V.kickCd-=i,V.holeCd-=i*(s?2:1)*(r?8:1),V.rec=Math.max(0,V.rec-i*9),V.kickT>0&&(V.kickT-=i),V.missiles<8&&(V.missT+=i*(s?2.5:1)*(r?8:1),V.missT>.5&&(V.missT=0,V.missiles++)),V.switchT>0&&(V.switchT+=i/.2,V.next>=0&&V.switchT>=.5&&(hl[V.cur].visible=!1,V.cur=V.next,V.next=-1,hl[V.cur].visible=!0,V.sw=0,Y.ui()),V.switchT>=1&&(V.switchT=0)),V.pending){let c=V.pending;c.land?a.onGround&&(V.pending=null,ug(!0)):(c.t-=i,c.t<=0&&(V.pending=null,c.fn()))}let l=V.switchT===0&&V.cd<=0;if(V.firing=!1,V.cutting=!1,t.altPressed&&V.kickCd<=0&&TS(),Vs(),n==="katana"){if(t.fire&&l){V.cd=.26*o,V.sw=.001,V.swDir*=-1,Y.swing();let c=ul(3.8,.4);if(c.length)Od(c);else{let h=null,u=.9,d=0;for(let f of x.animals){ms(f,He).sub(Et);let p=He.length();if(p>13||p<3)continue;let _=He.dot(Xe)/p;_>u&&(u=_,h=f,d=p)}if(h){let f=h.root.position,p=f.x-a.pos.x,_=f.z-a.pos.z,m=Math.hypot(p,_)||1;a.dash={x:p/m,z:_/m,t:.11,speed:Math.max(0,m-2.3)/.11},Y.whoosh(),V.pending={t:.11,fn:()=>Od()}}else Od(c)}}}else if(n==="hammer")t.fire&&l&&!V.pending&&(V.cd=.9*o,V.sw=.001,Y.swing(!0),!a.onGround&&a.pos.y>.8?(a.vel.y=-36,V.pending={land:!0}):V.pending={t:.22*o,fn:()=>ug(!1)});else if(n==="bat")t.fire&&l&&(V.cd=.46*o,V.sw=.001,V.swDir*=-1,Y.swing(!0),V.pending={t:.09,fn:ES});else if(n==="saw"){let c=t.fire&&V.switchT===0;if(V.firing=c,c){let h=ul(3.2,.55);V.cutting=h.length>0;for(let{a:u}of h)ms(u,He),ti(He.x,He.y,He.z,-Xe.x,.5,-Xe.z,2,9,u.def.robot),u.def.robot&&en(He.x,He.y,He.z,2),Rt(u,560*i*(s?2:1),{mode:"slice",cut:"v",dir:Xe.clone(),weapon:"saw",bossCap:999});V.cutting&&(x.trauma<.3&&at(.08),Math.random()<i*5&&$o(1),x.hitMark=.05)}Tn("saw",c,V.cutting?1:0)}else if(n==="smg"){if(t.fire&&l){V.cd=.056*o,V.rec=.6,Y.smg();let c=hg(.022,27,"smg");for(let[h,u]of c)Rt(h,u.dmg,{mode:u.head?"headpop":"drop",dir:u.dir,power:3.5,weapon:"smg",head:u.head});ie.scrap.spawn(Et.x+Xe.x*.5+Li.x*.25,Et.y-.15,Et.z+Xe.z*.5+Li.z*.25,Li.x*3+v(-1,1),v(2,4),Li.z*3+v(-1,1),.05,1.5,15911244),x.trauma<.15&&at(.05)}}else if(n==="shotgun"){if(t.fire&&l){V.cd=.72*o,V.rec=1.6,Y.shotgun(),at(.4);let c=hg(.085,21,"shotgun",12);for(let[h,u]of c){let d=ae(u.dir.x*13,6,u.dir.z*13);Rt(h,u.dmg,{mode:u.d<11?"gib":u.head?"headpop":"drop",dir:u.dir,power:13,knock:u.d<16?d:null,weapon:"shotgun",head:u.head,bossCap:420})}a.kvel.x-=Xe.x*4,a.kvel.z-=Xe.z*4,Rh(Et,60)}}else if(n==="sling"){if(t.fire&&V.switchT===0)V.cd<=0&&(V.charging=!0,V.charge=Math.min(1,V.charge+i/(.75*o)),Y.stretch(V.charge));else if(V.charging){V.charging=!1;let c=16+36*V.charge;vg(ae().copy(Et).addScaledVector(Xe,.8).addScaledVector(Gs,-.1),ae().copy(Xe).multiplyScalar(c).addScaledVector(fg,3.5),!1),V.charge=0,V.cd=.3*o,V.rec=1,Y.sling()}}else if(n==="missile"){let c=[];for(let u of x.animals){ms(u,He).sub(Et);let d=He.length();if(d>95||d<2)continue;let f=He.dot(Xe)/d;f>.72&&c.push({a:u,dot:f})}c.sort((u,d)=>d.dot-u.dot);let h=V.locks.length;if(V.locks=c.slice(0,Math.max(1,V.missiles)).map(u=>u.a),V.missiles||(V.locks.length=0),V.locks.length>h&&Y.lock(),t.firePressed&&l&&V.missiles>0){let u=V.locks.slice(),d=u.length||Math.min(2,V.missiles);for(let f=0;f<d;f++)jt(f*.045,()=>bS(u[f]||null,f,d));V.missiles-=d,V.cd=.45,V.rec=1.4,at(.3)}}else if(n==="flame"){let c=t.fire&&V.switchT===0;if(V.firing=c,c){let h=Et.x+Xe.x*.9+Li.x*.22-Gs.x*.14,u=Et.y+Xe.y*.9-Gs.y*.14,d=Et.z+Xe.z*.9+Li.z*.22-Gs.z*.14;for(let f=0;f<3;f++){let p=v(17,25);ie.puffs.spawn(h,u,d,Xe.x*p+v(-2.2,2.2),Xe.y*p+v(-2.2,2.2),Xe.z*p+v(-2.2,2.2),.2,v(1,1.8),v(.32,.5),16765503,14696986,3,1.4)}for(let f of x.animals.slice()){ms(f,He).sub(Et);let p=He.length();if(!(p>11+f.H*.3)&&!(p>2&&He.dot(Xe)/p<.86)){if(f.boss){Rt(f,280*i,{weapon:"flame",mode:"burn",bossCap:999});continue}f.heat+=i*(s?2:1),f.heat>.2&&(Rt(f,999,{mode:"burn",weapon:"flame"}),Y.ignite())}}for(let f of x.barrels)if(f.alive){He.set(f.x-Et.x,.7-Et.y,f.z-Et.z);let p=He.length();p<10&&He.dot(Xe)/p>.9&&Ws(f)}if(Math.random()<i*4){let f=yg(Et,Xe,10);f.hit&&f.hit.type==="ground"&&ie.decals.add(Et.x+Xe.x*f.t,Et.z+Xe.z*f.t,v(1,2),2762012,!0)}}Tn("flame",c)}else n==="hole"&&t.firePressed&&l&&V.holeCd<=0&&(V.holeCd=7,V.rec=1.6,V.cd=.5,Y.hole(),SS(),at(.3));n!=="missile"&&V.locks.length&&(V.locks.length=0);for(let c=mr.length-1;c>=0;c--)mr[c].upd(e)&&mr.splice(c,1);AS(i,n)}function AS(i,e){let t=hl[V.cur],n=_S[e],s=x.player,r={katana:.2,hammer:.55,bat:.3}[e]||.2;V.sw>0&&(V.sw+=i/r,V.sw>=1&&(V.sw=0));let o=s.onGround?Math.min(1,Math.hypot(s.vel.x,s.vel.z)/9):0,a=Math.cos(s.bobT*.5)*.014*o,l=Math.abs(Math.sin(s.bobT*.5))*.016*o,c=V.switchT>0?Math.sin(V.switchT*Math.PI):0;t.position.set(n[0]+a,n[1]-l-c*.45,n[2]+V.rec*.045),t.rotation.set(n[3]+V.rec*.09,n[4],n[5]),ps.visible=!1;let h=V.sw;if(e==="katana"||e==="bat"){if(h>0){let u=wS(h),d=V.swDir;t.position.set(d*(.42-.84*u),n[1]+.16+Math.sin(u*Math.PI)*.05,n[2]-.05),t.rotation.set(-1.25,0,d*(-1.35+2.7*u)),h>.1&&h<.8&&(ps.visible=!0,ps.material.opacity=.85*(1-h),ps.scale.set(d*(e==="bat"?1.25:1),1,1),ps.rotation.z=(e==="katana"&&d<0?.5:.1)*d,ps.rotation.x=-1.2)}}else if(e==="hammer")if(h>0){let u;h<.3?u=h/.3*.9:h<.45?u=.9-(h-.3)/.15*2.4:u=-1.5+(h-.45)/.55*1.5,t.rotation.x=n[3]+u,t.position.y=n[1]+Math.max(0,u)*.25,t.position.z=n[2]-(u<0?-u*.12:0)}else V.pending&&V.pending.land&&(t.rotation.x=n[3]+.9,t.position.y=n[1]+.22);else if(e==="saw")V.firing&&(t.position.x+=v(-.004,.004),t.position.y+=v(-.004,.004),t.position.z-=.04,V.cutting&&(t.position.x+=v(-.008,.008),t.rotation.z=v(-.03,.03))),Bd.position.y=V.firing?v(-.003,.003):0;else if(e==="sling")cl.position.z=.02+V.charge*.24,t.rotation.x=n[3]+V.charge*.12,V.charge>.95&&(t.position.x+=v(-.003,.003));else if(e==="hole"){ea.rotation.x+=i*6,ea.rotation.y+=i*4;let u=V.holeCd<=0?1:.4;ea.scale.setScalar(u)}else e==="flame"&&V.firing&&(t.position.x+=v(-.003,.003),t.position.y+=v(-.003,.003));if(V.kickT>0){let u=1-V.kickT/.3,d=Math.sin(u*Math.PI);eo.visible=!0,eo.position.set(.05,-.75+d*.4,-.35-d*.55),eo.rotation.x=.5-d*.5}else eo.visible=!1}var Di,V,Xe,Li,Gs,Et,fg,He,$i,pr,mr,ll,hl,eo,ps,dg,pg,mg,gg,cl,ea,Bd,cg,to,Pi,di,_S,ms,wS,ta=ln(()=>{hi();Yi();Zr();Qo();cr();Di=[{id:"katana",name:"\u6B66\u58EB\u5200",icon:"\u{1F5E1}\uFE0F",key:"1",tip:"\u9023\u9EDE\u30FB\u81EA\u52D5\u7A81\u9032"},{id:"hammer",name:"\u5DE8\u5927\u69CC\u5B50",icon:"\u{1F528}",key:"2",tip:"\u8DF3\u8D77\u4F86\u7838\u66F4\u5927"},{id:"bat",name:"\u72FC\u7259\u68D2",icon:"\u{1F3CF}",key:"3",tip:"\u5168\u58D8\u6253"},{id:"saw",name:"\u96FB\u92F8",icon:"\u2699\uFE0F",key:"4",tip:"\u6309\u4F4F"},{id:"smg",name:"\u885D\u92D2\u69CD",icon:"\u{1F52B}",key:"5",tip:"\u6309\u4F4F\u6383\u5C04"},{id:"shotgun",name:"\u9730\u5F48\u69CD",icon:"\u{1F4A5}",key:"6",tip:"\u8CBC\u81C9\u958B"},{id:"sling",name:"\u7206\u70B8\u5F48\u5F13",icon:"\u{1F383}",key:"7",tip:"\u6309\u4F4F\u84C4\u529B"},{id:"missile",name:"\u8FFD\u8E64\u98DB\u5F48",icon:"\u{1F680}",key:"8",tip:"\u81EA\u52D5\u9396\u5B9A 8 \u767C"},{id:"flame",name:"\u706B\u7130\u5674\u5C04\u5668",icon:"\u{1F525}",key:"9",tip:"\u6309\u4F4F\u30FB\u6703\u50B3\u67D3"},{id:"hole",name:"\u9ED1\u6D1E\u7832",icon:"\u{1F573}\uFE0F",key:"0",tip:"\u5168\u5438\u9032\u53BB"}],V={cur:0,next:-1,cd:0,sw:0,swDir:1,rec:0,switchT:0,charge:0,charging:!1,missiles:8,missT:0,holeCd:0,kickT:0,kickCd:0,pending:null,locks:[],cutting:!1,firing:!1},Xe=new N,Li=new N,Gs=new N,Et=new N,fg=new N(0,1,0),He=new N,$i=new N,pr=new N,mr=[],hl=[];cg={},to=i=>cg[i]||(cg[i]=new Yt({color:i,flatShading:!0}));Pi=(...i)=>{let e=new Bt;return i.forEach(t=>e.add(t)),e},di=Math.PI/2,_S={katana:[.34,-.34,-.5,-.55,0,-.3],hammer:[.4,-.62,-.62,-.2,0,-.3],bat:[.36,-.4,-.52,-.5,0,-.3],saw:[.24,-.26,-.42,0,0,0],smg:[.2,-.2,-.4,0,0,0],shotgun:[.2,-.21,-.42,0,0,0],sling:[.16,-.26,-.48,0,0,0],missile:[.28,-.24,-.46,0,0,0],flame:[.24,-.24,-.42,0,0,0],hole:[.24,-.23,-.44,0,0,0]};ms=(i,e)=>e.set(i.root.position.x,i.root.position.y+i.H*.5,i.root.position.z);wS=i=>1-(1-i)*(1-i)});function Sg(i,e){let t=kd(e.kills),n=i.fav,s="\u65B0\u4EBA\u6BBA\u624B";e.top&&e.plays>=2?s="\u7A76\u6975\u6BBA\u4EBA\u738B":i.rank==="SSS"||e.best>=6e4?s="AKA SSS \u6BBA\u4EBA\u9B54":i.score>=9e4||i.kills>=300?s="\u4E0D\u662F\u4EBA":t>=12?s="\u9B54\u738B":n==="car"?s="\u8CFD\u8ECA\u9AD8\u624B":n==="beam"||n==="cannon"?s="\u8D85\u7D1A\u8CFD\u4E9E\u4EBA":["ice","zombie","balloon","flame","firework"].includes(n)?s="\u6298\u78E8\u5927\u5E2B":["missile","robodog","drone","turret","robot","ufo"].includes(n)?s="\u667A\u80FD\u6BBA\u624B":i.combo>=30||e.combo>=40?s="\u51B7\u8840\u6BBA\u624B":["katana","saw","hammer","bat","beast"].includes(n)&&e.kills>=150?s="\u5C60\u592B":e.plays>=8?s="\u8B8A\u614B":t<=2&&i.kills>=60&&(s="\u8B8A\u614B\u65B0\u624B");let r=Math.floor(i.score)+i.kills*7+e.plays,o=IS(RS[n]||CS,r);return{title:s,blurb:o,level:t}}var bg,RS,CS,IS,kd,Hd=ln(()=>{bg={katana:"\u6B66\u58EB\u5200",hammer:"\u5DE8\u5927\u69CC\u5B50",bat:"\u72FC\u7259\u68D2",saw:"\u96FB\u92F8",smg:"\u885D\u92D2\u69CD",shotgun:"\u9730\u5F48\u69CD",sling:"\u7206\u70B8\u5F48\u5F13",missile:"\u8FFD\u8E64\u98DB\u5F48",flame:"\u706B\u7130\u5674\u5C04\u5668",hole:"\u9ED1\u6D1E\u7832",kick:"\u8E22\u98DB",beast:"\u602A\u7378\u722A",robot:"\u6A5F\u5668\u4EBA",car:"\u8DD1\u8ECA",cannon:"\u5145\u80FD\u81C2\u7832",beam:"\u6028\u5FF5\u6C23\u529F\u6CE2",disc:"\u7C89\u7D05\u8FFD\u9B42\u65AC",ice:"\u5BD2\u51B0\u528D",chain:"\u9023\u9396\u9583\u96FB",wolf:"\u91CE\u7378",robodog:"\u6A5F\u5668\u72D7",zombie:"\u55AA\u5C4D",turret:"\u7832\u5854",drone:"\u7121\u4EBA\u6A5F",speed:"\u6975\u901F",scythe:"\u942E\u5200",sword:"\u98DB\u528D",bubble:"\u6CE1\u6CE1\u7403",barrel:"\u74E6\u65AF\u6876",thunder:"\u96F7\u5288",stomp:"\u5DE8\u4EBA\u8173",nuke:"\u5168\u5CF6\u8CC7\u9063\u4EE4",meteor:"\u9695\u77F3\u96E8",balloon:"\u6C26\u6C23\u5F48",pumpkin:"\u5357\u74DC\u795E",ufo:"\u5927\u98DB\u789F",tornado:"\u9F8D\u6372\u98A8",whale:"\u9BE8\u9B5A",mine:"\u5730\u96F7",bowling:"\u4FDD\u9F61\u7403",firework:"\u7159\u706B"},RS={katana:["\u5929\u554A\uFF0C\u9019\u4E0D\u5C31\u662F\u500B\u62FF\u5200\u6345\u4EBA\u7684\u760B\u5B50\u55CE","\u6B66\u58EB\u9053\u7CBE\u795E\uFF1A\u5148\u780D\u518D\u8AAA","\u5200\u5149\u4E00\u9583\uFF0CKPI \u5168\u6EFF"],hammer:["\u4E00\u69CC\u4E00\u500B\uFF0C\u7269\u7406\u4E0A\u7684\u8AAA\u670D\u529B","\u6211\u4E0D\u662F\u66B4\u529B\uFF0C\u6211\u53EA\u662F\u6BD4\u8F03\u6703\u6572"],bat:["\u5168\u58D8\u6253\u738B\uFF0C\u5CF6\u6C11\u90FD\u662F\u6211\u7684\u7403","\u63EE\u68D2\u843D\u7A7A\uFF1F\u4E0D\u5B58\u5728\u7684"],saw:["\u6211\u662F\u96FB\u92F8\u63A7\uFF0C\u9BAE\u8840\u5C31\u662F\u6211\u7684\u6F64\u6ED1\u6CB9","\u55E1\u55E1\u55E1\uFF5E\u4E0B\u4E00\u500B\u662F\u8AB0"],smg:["\u885D\u92D2\u69CD\u624D\u662F\u8003\u9A57\u4EBA\u6027\u554A\uFF5E\uFF5E","\u5B50\u5F48\u4E0D\u7528\u9322\uFF0C\u6383\u5C31\u5C0D\u4E86"],shotgun:["\u8CBC\u81C9\u8F38\u51FA\uFF0C\u6E9D\u901A\u96F6\u8DDD\u96E2","\u8FD1\u4E00\u9EDE\uFF0C\u6211\u6709\u8A71\u8DDF\u4F60\u8AAA\uFF08\u7830\uFF09"],sling:["\u5F48\u5F13\u624D\u662F\u738B\u9053\uFF0C\u7C21\u55AE\u8F15\u5DE7\uFF0C\u5C60\u5CF6\u5C31\u662F\u9019\u9EBC\u7C21\u55AE","\u7AE5\u5E74\u73A9\u5177\uFF0C\u6210\u5E74\u7528\u9014"],missile:["\u81EA\u52D5\u9396\u5B9A\uFF0C\u9023\u7784\u6E96\u90FD\u61F6","\u79D1\u6280\u59CB\u7D42\u4F86\u81EA\u65BC\u4EBA\u6027\uFF08\u7684\u9ED1\u6697\u9762\uFF09"],flame:["\u5168\u719F\u624D\u662F\u5C0D\u98DF\u7269\u7684\u5C0A\u91CD","\u6211\u4E0D\u662F\u5728\u6BBA\u4EBA\uFF0C\u662F\u5728\u70E4\u8089"],hole:["\u5B87\u5B99\u5927\u6CD5\u5E2B\uFF0C\u9ED1\u6D1E\u5C31\u662F\u62FF\u4F86\u9019\u6A23\u73A9\u7684","\u5168\u90E8\u5438\u8D70\uFF0C\u9023 Bug \u4E00\u8D77"],kick:["\u7528\u8173\u89E3\u6C7A\u554F\u984C\u7684\u4EBA","\u4E00\u8173\u4E00\u500B\uFF0C\u7DA0\u8272\u74B0\u4FDD"],beast:["\u8B8A\u8EAB\u4E4B\u5F8C\u5C31\u4E0D\u8A8D\u4EBA\u4E86","\u91CE\u6027\u89E3\u653E\uFF0C\u4EBA\u6027\u4E0B\u73ED"],robot:["\u4EBA\u985E\u5DF2\u7D93\u4E0D\u9700\u8981\u4E86\uFF0C\u4EA4\u7D66\u6A5F\u5668","\u92FC\u9435\u4E4B\u8EC0\uFF0C\u96F6\u60C5\u7DD2\u8F38\u51FA"],car:["\u516C\u53F8\u8DD1\u8ECA\u501F\u6211\u958B\u4E00\u4E0B\u800C\u5DF2","\u649E\u4EBA\u4E0D\u7528\u99D5\u7167"],beam:["\u96C6\u6C23\u4E09\u79D2\uFF0C\u5CF6\u5DBC\u6B78\u96F6","\u9019\u62DB\u6211\u5F9E\u5C0F\u7DF4\u5230\u5927"],disc:["\u7C89\u7D05\u8272\u7684\u624D\u53EF\u6015","\u4E1F\u51FA\u53BB\u5C31\u4E0D\u7528\u7BA1\u4E86\uFF0C\u5B83\u6703\u81EA\u5DF1\u627E\u4EBA"],ufo:["\u5916\u661F\u4EBA\u8AAA\u8981\u5E36\u5E7E\u500B\u56DE\u53BB\u7814\u7A76","\u6211\u53EA\u662F\u6253\u958B\u4E86\u98DB\u789F\u7684\u958B\u95DC"],whale:["\u5E74\u7D42\u734E\u91D1\u5F9E\u5929\u800C\u964D\uFF0C\u58D3\u6B7B\u4E00\u7247","\u9BE8\u559C\uFF01"],zombie:["\u4E00\u500B\u54AC\u4E00\u500B\uFF0C\u5718\u968A\u5408\u4F5C","\u6B7B\u4E86\u9084\u8981\u52A0\u73ED"]},CS=["\u53EA\u662F\u4F86\u7D13\u58D3\u7684\uFF0C\u771F\u7684","\u5CF6\u6C11\u770B\u5230\u6211\u90FD\u6703\u81EA\u52D5\u8ACB\u5047","\u628A\u6028\u6C23\u7559\u5728\u5CF6\u4E0A\uFF0C\u5E36\u8457\u7B11\u5BB9\u56DE\u53BB\u4E0A\u73ED"],IS=(i,e)=>i[Math.abs(e|0)%i.length],kd=i=>1+Math.floor(Math.sqrt(Math.max(0,i)/12))});var Eg,Tg=ln(()=>{Eg=[{v:"v1.3",date:"2026-11-17",title:"\u6392\u884C\u699C\u4E0A\u7DDA\uFF0C\u8001\u95C6\u958B\u59CB\u5BB3\u6015",items:["\u{1F3C6} \u65B0\u589E\u6392\u884C\u699C\uFF1A\u5F9E\u5DE5\u55AE\u7FA4\u5CF6\u6253\u958B\u5C31\u6703\u7528\u516C\u53F8\u5E33\u865F\u8A18\u5206\uFF0C\u770B\u8AB0\u624D\u662F\u771F\u6B63\u7684\u7A76\u6975\u6BBA\u4EBA\u738B","\u{1F396}\uFE0F \u65B0\u589E\u7A31\u865F\uFF1A\u5C60\u592B\u3001\u51B7\u8840\u6BBA\u624B\u3001AKA SSS \u6BBA\u4EBA\u9B54\u3001\u4E0D\u662F\u4EBA\u2026\u2026\u73A9\u6CD5\u6C7A\u5B9A\u4F60\u662F\u8AB0","\u{1F3DD}\uFE0F \u96A8\u6642\u53EF\u4EE5\u56DE\u5DE5\u55AE\u7FA4\u5CF6\uFF1AEsc \u66AB\u505C\u3001\u7D50\u7B97\u756B\u9762\u3001\u904A\u6232\u4E2D\u6309 H \u90FD\u884C","\u23F0 \u9632\u6C89\u8FF7\uFF1A\u9023\u73A9\u5169\u5834\u9084\u60F3\u958B\u7B2C\u4E09\u5834\uFF0C\u7CFB\u7D71\u6703\u8ACB\u4F60\u56DE\u5CF6\u4E0A\u51B7\u975C 30 \u5206\u9418","\u{1F497} \u7C89\u7D05\u8FFD\u9B42\u65AC\uFF08\u539F\u5713\u92F8\u6C23\u65AC\uFF09\uFF1A\u8B8A\u7C89\u7D05\u8272\uFF0C\u800C\u4E14\u6703\u81EA\u5DF1\u8FFD\u4EBA\uFF0C\u4E1F\u51FA\u53BB\u5C31\u4E0D\u7528\u7BA1\u4E86","\u{1F450} \u6028\u5FF5\u6C23\u529F\u6CE2\uFF1A\u96C6\u6C23\u66F4\u6709\u611F\u3001\u5149\u67F1\u7C97\u5169\u500D\u3001\u8F5F 5 \u79D2\uFF0C\u7D42\u9EDE\u9084\u6703\u5927\u7206\u70B8","\u{1F916} \u65B0\u8B8A\u8EAB\uFF1A\u6BBA\u622E\u6A5F\u5668\u4EBA\uFF0C\u96D9\u7BA1\u6A5F\u69CD\u5DE6\u53F3\u72C2\u6383\uFF1B\u602A\u7378\u8B8A\u8EAB\u4E5F\u52A0\u4E86\u722A\u75D5","\u{1F6F8} \u65B0\u7D55\u62DB\uFF1A\u5927\u98DB\u789F\u3001\u5168\u54E1\u5230\u9F4A\uFF08+20 \u5CF6\u6C11\uFF09\u3001\u4EBA\u4E8B\u7570\u52D5\u9F8D\u6372\u98A8\u3001\u5E74\u7D42\u734E\u91D1\u9BE8\u9B5A\u3001\u7E3E\u6548\u5730\u96F7\u9663\u3001\u5DE8\u578B\u4FDD\u9F61\u7403\u3001\u4E0B\u73ED\u7159\u706B\u79C0","\u{1FA78} \u8840\u91CF\u52A0\u500D\uFF1A\u5CF6\u6C11\u7684\u8840\u7D42\u65BC\u5674\u5F97\u8DDF\u6028\u6C23\u4E00\u6A23\u591A","\u{1F5E3}\uFE0F \u5CF6\u6C11\u65B0\u589E\u5341\u5E7E\u53E5\u6C42\u9952\u53F0\u8A5E\uFF1A\u300C\u6211\u53EA\u4E0D\u904E\u662F\u53BB\u5927\u4FBF\u4E00\u5C0F\u6642\u554A\uFF01\u300D"]},{v:"v1.2",date:"2026-11-16",title:"\u7D55\u62DB\u5927\u653E\u9001",items:["\u2694\uFE0F 18 \u7A2E\u7D55\u62DB\uFF1A\u602A\u7378\u8B8A\u8EAB\u3001\u516C\u53F8\u8DD1\u8ECA\u3001\u842C\u528D\u6B78\u4E00\u3001\u53EC\u559A\u55AA\u5C4D\u2026\u2026","\u{1F3B0} \u7D55\u62DB\u69FD\uFF1A\u6BBA\u6575\u96C6\u6EFF\u6309 F \u62BD\u4E00\u62DB","\u{1F4CB} \u7121\u9650\u767C\u6D29\u53EF\u4EE5\u6309 Tab \u4EFB\u9078\u7D55\u62DB","\u{1F43E} \u5CF6\u6C11\u6578\u91CF\u52A0\u91CF"]},{v:"v1.1",date:"2026-11-16",title:"\u5929\u6C23\u8B8A\u4E86",items:["\u{1F631} \u6158\u53EB\u7248\uFF08C \u958B\u95DC\uFF09","\u{1F327}\uFE0F \u6253\u4E45\u4E86\u6703\u4E0B\u96E8\uFF0C\u9084\u6709\u96F7\u96E8\u5929\u6253\u96F7\u5288\u4EBA","\u{1F381} \u96B1\u85CF\u79AE\u7269\u7BB1\u8207\u91D1\u8272\u5CF6\u6C11","\u{1F383} \u5357\u74DC\u795E\u50CF\u5F69\u86CB\uFF08\u81EA\u5DF1\u627E\uFF09"]},{v:"v1.0",date:"2026-11-16",title:"\u6696\u5CF6\u6E05\u7B97\u65E5\u958B\u5F35",items:["\u{1F5E1}\uFE0F \u5341\u628A\u6B66\u5668\uFF1A\u5F9E\u6B66\u58EB\u5200\u5230\u9ED1\u6D1E\u7832","\u23F1\uFE0F \u8003\u7E3E\u7D50\u7B97 3 \u5206\u9418\u62DA\u5206\u3001\u7121\u9650\u767C\u6D29\u6BBA\u5230\u723D","\u{1F41B} \u5DF2\u77E5\u554F\u984C\uFF1A\u5CF6\u6C11\u592A\u53EF\u611B\uFF0C\u4E0B\u624B\u6703\u6709\u9EDE\u7F6A\u60E1\u611F\uFF08\u4E0D\u4FEE\uFF09"]}]});function dl(){try{return Object.assign({streak:0,lastEnd:0,lock:0},JSON.parse(localStorage.getItem(Ag)||"{}"))}catch{return{streak:0,lastEnd:0,lock:0}}}function fl(i){try{localStorage.setItem(Ag,JSON.stringify(i))}catch{}}function zh(i=Date.now()){let e=dl();return Math.max(0,e.lock-i)}function Rg(i=Date.now()){let e=dl();return e.lock>i?{ok:!1,until:e.lock,fresh:!1}:(i-e.lastEnd>Xs.gapMs&&(e.streak=0),e.streak>=Xs.rounds?(e.lock=i+Xs.lockMs,e.streak=0,fl(e),{ok:!1,until:e.lock,fresh:!0}):(fl(e),{ok:!0}))}function Gd(i,e,t=Date.now()){let n=dl();t-n.lastEnd>Xs.gapMs+e*1e3&&(n.streak=0),n.streak+=i==="free"?Math.max(1,Math.floor(e/Xs.freeSec)):1,n.lastEnd=t,fl(n)}function Cg(i,e=Date.now()){let t=dl();return(e-t.lastEnd>Xs.gapMs+i*1e3?0:t.streak)+i/Xs.freeSec>=Xs.rounds}function Ig(i=Date.now()){let e=dl();return e.lock=i+Xs.lockMs,e.streak=0,e.lastEnd=i,fl(e),e.lock}function Pg(){fl({streak:0,lastEnd:0,lock:0})}var Xs,wg,Ag,Vd,Wd=ln(()=>{Xs={rounds:2,lockMs:18e5,gapMs:9e5,freeSec:180},wg="Yo Bro, \u767C\u6D29\u5B8C\u4E86\u5427~ \u4F60\u8A72\u56DE\u5CF6\u4E0A\u56C9",Ag="cozy-payback-limit";Vd=i=>{let e=Math.ceil(i/1e3);return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}});var no,we,kh,Xd,qd,pl,Yd,Kd,_e,$d,Hh,Lg,ml=ln(()=>{hi();Yi();ta();Hd();Tg();Wd();no=i=>String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),we=i=>document.getElementById(i),kh=new N,Xd=0,qd=-1,pl=[],Yd="",Kd=-1,_e={};_e.init=i=>{we("weapons").innerHTML=Di.map((e,t)=>`<div class="w" data-i="${t}"><span>${e.key}</span>${e.icon}</div>`).join(""),we("wgrid").innerHTML=Di.map(e=>`<div><b>${e.icon}</b>${e.key}\u3000${e.name}<small>${e.tip}</small></div>`).join(""),we("btn-score").onclick=()=>i.start("score"),we("btn-free").onclick=()=>i.start("free"),we("btn-resume").onclick=()=>i.resume(),we("btn-quit").onclick=()=>i.menu(),we("btn-again").onclick=()=>i.start(x.lastMode||"score"),we("btn-menu").onclick=()=>i.menu(),we("btn-wail").onclick=()=>i.wail(),we("pgrid").innerHTML=Object.values(x.itemDefs).map(e=>`<button data-id="${e.id}"><b>${e.icon}</b>${e.name}<small>${e.tip}</small></button>`).join(""),we("pgrid").onclick=e=>{let t=e.target.closest("button");t&&i.pick(t.dataset.id)},we("btn-pclose").onclick=()=>i.pick(null),["btn-isles-m","btn-isles-p","btn-isles-e","btn-isles-l"].forEach(e=>we(e).onclick=()=>i.isles()),we("btn-board").onclick=we("btn-board-e").onclick=()=>_e.overlay("board"),we("btn-news").onclick=()=>_e.overlay("news"),we("btn-board-close").onclick=we("btn-news-close").onclick=()=>_e.show($d),we("btn-limit-menu").onclick=()=>i.menu(),we("news-list").innerHTML=Eg.map(e=>`<div class="news-v"><h3>${e.v}\u3000${no(e.title)}<small>${e.date}</small></h3><ul>${e.items.map(t=>`<li>${no(t)}</li>`).join("")}</ul></div>`).join(""),we("power-n").textContent=Object.keys(x.itemDefs).length,_e.hiscore()};_e.hiscore=()=>{let i=0;try{i=+localStorage.getItem("cozy-payback-hi")||0}catch{}return we("hiscore").textContent=i?`\u672C\u6A5F\u6700\u9AD8\u5206\uFF1A${i.toLocaleString()}`:"",i};_e.wail=i=>{we("btn-wail").innerHTML=`\u{1F631} \u6158\u53EB\u7248\uFF1A${i?"\u958B":"\u95DC"}<small>${i?"\u5CF6\u6C11\u6703\u53EB\u5F97\u5F88\u6158":"\u53EA\u6709\u539F\u672C\u7684\u5C0F\u53EB\u8072"}</small>`,we("btn-wail").classList.toggle("off",!i)};_e.loading=i=>{we("loadbar").firstElementChild.style.width=Math.round(i*100)+"%"};$d="menu",Hh="loading";_e.overlay=i=>{$d=Hh==="board"||Hh==="news"?$d:Hh,_e.show(i)};_e.show=i=>{Hh=i,["loading","menu","pause","end","picker","board","news","limit"].forEach(e=>we(e).classList.toggle("hidden",e!==i)),we("hud").classList.toggle("hidden",!(i==="hud"||i==="pause"||i==="picker"))};_e.reset=()=>{we("feed").innerHTML="",we("announce").innerHTML="",we("locks").innerHTML="",pl=[],Xd=0,qd=-1,Yd="",Kd=-1,we("buffs").innerHTML="",we("wx").classList.add("hidden"),we("combo").classList.add("hidden"),we("boss").classList.add("hidden")};_e.feed=i=>{let e=we("feed"),t=document.createElement("div");for(t.innerHTML=i,e.appendChild(t);e.childElementCount>6;)e.firstChild.remove();setTimeout(()=>t.classList.add("out"),3600),setTimeout(()=>t.remove(),4e3)};_e.announce=(i,e="",t=!1)=>{let n=we("announce");n.innerHTML=`<div class="${t?"red":""}">${i}${e?`<small>${e}</small>`:""}</div>`};_e.update=()=>{we("score").textContent=Math.floor(x.score).toLocaleString(),we("kills").textContent=x.kills,we("best").textContent=x.bestCombo;let i=we("timer");if(x.mode==="score"){let p=Math.max(0,Math.ceil(x.timeLeft));i.textContent=`${Math.floor(p/60)}:${String(p%60).padStart(2,"0")}`,i.classList.toggle("low",p<=15)}else{let p=Math.floor(x.elapsed);i.textContent=`\u221E ${Math.floor(p/60)}:${String(p%60).padStart(2,"0")}`,i.classList.remove("low")}let e=we("combo");x.combo>=2?(e.classList.remove("hidden"),x.combo!==Xd&&(we("combo-n").innerHTML=`${x.combo}<small>\u9023\u6BBA</small>`,we("combo-x").textContent=`\u5206\u6578 \xD7${(1+Math.min(x.combo-1,40)*.1).toFixed(1)}`,e.classList.remove("bump"),e.offsetWidth,e.classList.add("bump")),we("combo-bar").firstElementChild.style.width=Math.max(0,x.comboT/3.2*100)+"%"):e.classList.add("hidden"),Xd=x.combo;let t=we("rage"),n=x.rageOn>0;t.querySelector("i").style.width=(n?x.rageOn/10*100:x.rage*100)+"%",t.classList.toggle("ready",!n&&x.rage>=1),t.querySelector("em").textContent=n?"\u66B4\u6012\u4E2D\uFF01":x.rage>=1?"\u6309 Q \u767C\u52D5":"\u6BBA\u8D8A\u591A\u96C6\u8D8A\u5FEB",we("vignette").classList.toggle("rage",n);let s=we("ult");if(s.querySelector("i").style.width=x.ult*100+"%",s.classList.toggle("ready",x.ult>=1),s.querySelector("em").textContent=x.ult>=1?"\u6309 F \u62BD\u4E00\u62DB":x.mode==="free"?"Tab \u53EF\u4EFB\u9078":"\u6BBA\u6575\u7D2F\u7A4D",V.cur!==qd){qd=V.cur;let p=Di[V.cur];document.querySelectorAll("#weapons .w").forEach((_,m)=>_.classList.toggle("on",m===V.cur)),we("wname").innerHTML=`<b>${p.icon} ${p.name}</b><small>${p.tip}</small>`}let r=we("ammo"),o=Di[V.cur].id;if(o==="missile")r.classList.remove("hidden"),r.innerHTML=`\u98DB\u5F48 <b>${V.missiles}</b> / 8<div class="bar"><i style="width:${V.missiles/8*100}%"></i></div>`;else if(o==="hole"){r.classList.remove("hidden");let p=Math.max(0,1-Math.max(0,V.holeCd)/7);r.innerHTML=`${p>=1?"<b>\u9ED1\u6D1E\u5C31\u7DD2</b>":"\u9ED1\u6D1E\u5145\u80FD\u4E2D"}<div class="bar"><i style="width:${p*100}%"></i></div>`}else o==="sling"?(r.classList.remove("hidden"),r.innerHTML=`\u84C4\u529B<div class="bar"><i style="width:${V.charge*100}%"></i></div>`):r.classList.add("hidden");let a=Object.keys(x.buff),l=a.join(","),c=we("buffs");l!==Yd&&(Yd=l,c.innerHTML=a.map(p=>`<div><b>${x.itemDefs[p].icon} ${x.itemDefs[p].name}</b><i></i></div>`).join(""));for(let p=0;p<a.length&&p<c.children.length;p++)c.children[p].lastElementChild.style.width=Math.max(0,Math.min(1,x.buff[a[p]]/x.itemDefs[a[p]].dur))*100+"%";let h=x.wx.rain<.05?0:x.wx.storm>0?2:1;if(h!==Kd){Kd=h;let p=we("wx");p.classList.toggle("hidden",!h),p.textContent=h===2?"\u26C8\uFE0F \u96F7\u96E8":"\u{1F327}\uFE0F \u4E0B\u96E8"}x.hitMark>0&&(x.hitMark-=.016),we("crosshair").classList.toggle("hit",x.hitMark>0);let u=we("boss");x.boss&&!x.boss.dead?(u.classList.remove("hidden"),we("boss-name").textContent=`\u26A0 \u5DE8\u5927\u5316\u7684${x.boss.def.name}\uFF08${x.boss.def.role}\uFF09`,u.querySelector("i").style.width=Math.max(0,x.boss.hp/x.boss.maxHp*100)+"%"):u.classList.add("hidden");let d=we("locks"),f=V.locks.length;for(;pl.length<f;){let p=document.createElement("i");d.appendChild(p),pl.push(p)}for(let p=0;p<pl.length;p++){let _=pl[p];if(p>=f){_.style.display="none";continue}let m=V.locks[p];if(kh.set(m.root.position.x,m.root.position.y+m.H*.5,m.root.position.z).project(x.camera),kh.z>1){_.style.display="none";continue}_.style.display="",_.style.left=(kh.x+1)/2*innerWidth+"px",_.style.top=(1-kh.y)/2*innerHeight+"px"}};Lg=[[6e4,"SSS","\u4EBA\u8CC7\u770B\u4E86\u90FD\u6015"],[42e3,"SS","\u6696\u5CF6\u5C60\u592B"],[28e3,"S","\u6E05\u7B97\u5927\u5E2B"],[18e3,"A","\u706B\u6C23\u4E0D\u5C0F"],[1e4,"B","\u6709\u5728\u767C\u6D29"],[4e3,"C","\u9084\u5728\u6696\u8EAB"],[0,"D","\u4F60\u662F\u4E0D\u662F\u592A\u5584\u826F\u4E86"]];_e.end=i=>{let e=Lg.find(a=>x.score>=a[0]);we("rank").textContent=e[1],we("rank-t").textContent=e[2],we("e-score").textContent=Math.floor(x.score).toLocaleString(),we("e-kills").textContent=x.kills,we("e-combo").textContent=x.bestCombo;let t="-",n=0;for(let a in i.byWeapon)i.byWeapon[a]>n&&(n=i.byWeapon[a],t=a);we("e-fav").textContent=bg[t]||"-";let s="",r=0;for(let a in i.byVictim)i.byVictim[a]>r&&(r=i.byVictim[a],s=a);let o=i.newHigh?"\u3000\u{1F3C6} \u5237\u65B0\u672C\u6A5F\u7D00\u9304\uFF01":"";we("end-detail").innerHTML=`\u7206\u982D ${i.head}\u3000\xB7\u3000\u7A7A\u4E2D\u64CA\u6BBA ${i.air}\u3000\xB7\u3000\u4E00\u77F3\u591A\u9CE5 ${i.multi} \u6B21\u3000\xB7\u3000\u5DE8\u5927\u5CF6\u6C11 ${i.boss}\u3000\xB7\u3000\u96B1\u85CF\u9053\u5177 ${i.items||0}<br>${s?`\u6700\u5E38\u88AB\u6E05\u7B97\u7684\u662F <b>${s}</b>\uFF08${r} \u6B21\uFF09`:""}${o}`,_e.show("end")};_e.favOf=i=>{let e="",t=0;for(let n in i.byWeapon)i.byWeapon[n]>t&&(t=i.byWeapon[n],e=n);return e};_e.rankOf=i=>Lg.find(e=>i>=e[0])[1];_e.meCard=(i,e)=>{we("me-card").innerHTML=`<div class="lv"><small>LV</small>${i.level}</div><div><b>\u300C${no(i.title)}\u300D</b><p>${no(i.blurb)}</p><p>\u7D2F\u8A08\u64CA\u6BBA ${e.kills.toLocaleString()}\u3000\xB7\u3000\u73A9\u4E86 ${e.plays} \u5834\u3000\xB7\u3000\u8003\u7E3E\u6700\u9AD8 ${e.best.toLocaleString()}</p></div>`};_e.board=(i,e)=>{let t=i?i.rows:e?[e]:[];we("board-sub").textContent=i?i.live?"\u5168\u516C\u53F8\uFF08\u516C\u53F8\u5E33\u865F\u767B\u5165\uFF09":"\u793A\u7BC4\u5CF6\u7684\u6392\u884C\u699C\uFF08\u5047\u8CC7\u6599\uFF09":"\u53EA\u6709\u9019\u53F0\u96FB\u8166\u7684\u7D00\u9304\uFF5C\u5F9E\u5DE5\u55AE\u7FA4\u5CF6\u7684\u653E\u9B06\u5C0F\u5CF6\u6253\u958B\uFF0C\u624D\u6703\u4E0A\u5168\u516C\u53F8\u6392\u884C\u699C";let n=s=>["\u{1F947}","\u{1F948}","\u{1F949}"][s]||s+1;we("board-rows").innerHTML=t.length?t.map((s,r)=>`<tr class="${s.me?"me":""}"><td>${n(r)}</td><td><span class="n">${no(s.name)}</span> <small>LV ${kd(s.kills)}</small><span class="t">\u300C${no(s.title||"\u65B0\u4EBA\u6BBA\u624B")}\u300D</span><span class="d">${no(s.blurb||"")}</span></td><td><b>${s.best.toLocaleString()}</b><span class="d">\u64CA\u6BBA ${s.kills.toLocaleString()}\u3000\xB7\u3000${s.plays} \u5834</span></td></tr>`).join(""):'<tr><td colspan="3" style="text-align:center;border-radius:10px">\u9084\u6C92\u6709\u4EBA\u4E0A\u699C\u3002\u5CF6\u6C11\u5011\u66AB\u6642\u5F88\u5B89\u5168\u3002</td></tr>',we("board-me").innerHTML=""};_e.lock=i=>{let e=i>0;we("btn-score").disabled=we("btn-free").disabled=e;let t=we("lockmsg");t.classList.toggle("hidden",!e),e&&(t.textContent=`${wg}\u3000\u9084\u8981 ${Vd(i)} \u624D\u80FD\u518D\u958B`),we("limit-left").textContent=Vd(i)}});function Ug(){ii=new Float32Array(Gh*3);for(let t=0;t<Gh;t++)ii[t*3]=v(ni),ii[t*3+1]=v(Fg),ii[t*3+2]=v(ni);let i=new Ft;i.setAttribute("position",new It(new Float32Array(Gh*6),3).setUsage(Os)),Zi=new Lr(i,new rr({color:15135219,transparent:!0,opacity:.5,fog:!1,depthWrite:!1})),Zi.frustumCulled=!1,Zi.visible=!1,x.scene.add(Zi);let e=[];for(let t=0;t<Wh-1;t++){let n=t*2;e.push(n,n+1,n+2,n+1,n+3,n+2)}for(let t=0;t<3;t++){let n=new Ft;n.setAttribute("position",new It(new Float32Array(Wh*6),3).setUsage(Os)),n.setIndex(e);let s=new Be(n,new rt({color:16776160,fog:!1,side:bt,transparent:!0,depthWrite:!1}));s.frustumCulled=!1,s.visible=!1,x.scene.add(s),_l.push({m:s,t:0})}Ng=document.getElementById("flash")}function Og(){pi.rain=0,pi.storm=0,Vh=0,Fi=0,xl=5,na=null,Zi&&(Zi.visible=!1,_l.forEach(i=>{i.t=0,i.m.visible=!1}),kg(0)),Tn("rain",!1)}function Bg(i,e){na=i===null?null:[i,e||0],na&&(pi.rain=i)}function zg(i){Fi=Math.max(Fi,i)}function kg(i){let e=x.env,t=pi.rain,n=t*.6+pi.storm*.15,s=n/.75;Fi=Math.max(0,Fi-i*4.5);let r=1-n*.72+Fi*.5;e.sky.color.setRGB(r,r+n*.03,r+n*.08),x.scene.fog.color.copy(PS).lerp(LS,s).addScalar(Fi*.2),x.scene.fog.near=Bs(110,40,t),x.scene.fog.far=Bs(330,160,t),e.hemi.intensity=1.5-n*.8+Fi*1.6,e.sun.intensity=Math.max(.2,1.9-n*1.9),e.sea.color.copy(DS).lerp(FS,s);for(let a of x.clouds)a.material.color.copy(NS).lerp(US,s),a.scale.set(1+t*1.2,.5,1+t*1.2);let o=Fi>.02?Math.min(.42,Fi*.33).toFixed(2):"0";o!==Dg&&(Dg=o,Ng.style.opacity=o)}function qs(i,e,t={}){let n=ae(i,0,e),s=x.camera,r=s.position.distanceTo(n),o=_l.find(_=>_.t<=0)||_l[0];o.t=.2,o.m.visible=!0;let a=i+v(-10,10),l=e+v(-10,10),c=ui(r*.014,.18,1.3),h=o.m.geometry.attributes.position.array;gl.setFromMatrixColumn(s.matrixWorld,0);for(let _=0;_<Wh;_++){let m=_/(Wh-1),g=Math.sin(Math.PI*m)*3.2,M=c*(1.2-.6*m),E=Bs(a,i,m)+v(-g,g),b=Bs(85,0,m),w=Bs(l,e,m)+v(-g,g),R=_*6;h[R]=E-gl.x*M,h[R+1]=b,h[R+2]=w-gl.z*M,h[R+3]=E+gl.x*M,h[R+4]=b,h[R+5]=w+gl.z*M}o.m.geometry.attributes.position.needsUpdate=!0,Fi=Math.max(Fi,t.small?.5:1.3),Kt(n,.5,7,.35,16775106),en(i,.4,e,14),ie.decals.add(i,e,v(1.3,1.9),2367770,!0),Rh(ae(i,2,e),320),Ko(n,t.small?.3:.6,90),Y.zap(),Y.thunder(r<45);let u=0,d=new Set;for(let _ of x.animals.slice()){let m=_.root.position,g=_.boss?_.H*.4:2.6;(m.x-i)**2+(m.z-e)**2>g*g||(d.add(_),Rt(_,_.boss?380:999,{mode:"zap",weapon:"thunder",bossCap:380})&&u++)}let f=ae(i,1,e),p=t.chain===void 0?5:t.chain;for(let _=0;_<p;_++){let m=null,g=49;for(let w of x.animals){if(d.has(w)||w.boss||w.state==="drop")continue;let R=w.root.position,y=(R.x-f.x)**2+(R.z-f.z)**2;y<g&&(g=y,m=w)}if(!m)break;d.add(m);let M=f.clone(),E=m.root.position.clone();E.y+=m.H*.5;let b=m;jt(.07*(_+1),()=>{b.dead||(ei(M,E,16775106,.12),en(E.x,E.y,E.z,6),Y.zap(),Rt(b,999,{mode:"zap",weapon:"thunder",style:"chain"})&&u++)}),f=E}for(let _ of x.barrels)_.alive&&(_.x-i)**2+(_.z-e)**2<9&&Ws(_);jt(.6,()=>{u>=3&&x.onMulti&&x.onMulti(u,n,"\u9023\u9396\u96FB\u64CA")})}function OS(){let i=x.player.pos,e=Math.random();if(e<.2){let r=x.barrels.filter(o=>o.alive&&Math.hypot(o.x-i.x,o.z-i.z)<50);if(r.length){let o=Re(r);qs(o.x,o.z);return}}let t=x.animals.filter(r=>r.dP<55&&r.state!=="drop");if(e<.85&&t.length){let r=Re(t);qs(r.root.position.x,r.root.position.z);return}let n=v(6.28),s=v(12,45);qs(i.x+Math.cos(n)*s,i.z+Math.sin(n)*s)}function Zd(i,e,t=!1){if(!t){let f=x.mode==="score"?x.elapsed:x.elapsed%300,p=f>60?Math.min(1,(f-60)/25):0,_=f>120?Math.min(1,(f-120)/8):0;x.mode==="free"&&f>240&&(p=Math.max(0,1-(f-240)/30),p<.6&&(_=0)),na&&(p=na[0],_=na[1]),pi.rain+=(p-pi.rain)*Math.min(1,i*.9),pi.storm=_;let m=_>0?2:p>0?1:0;m!==Vh&&(m===1&&Vh===0?_e.announce("\u8B8A\u5929\u4E86\u2026","\u5730\u677F\u6FD5\u6ED1\uFF0C\u5CF6\u6C11\u6703\u81EA\u5DF1\u8DCC\u5012"):m===2?(_e.announce("\u96F7\u96E8\u4EA4\u52A0\uFF01","\u88AB\u96F7\u5288\u5230\u7684\u90FD\u7B97\u4F60\u7684",!0),xl=1.5):m===0&&_e.announce("\u653E\u6674\u4E86","\u4E0B\u4E00\u5834\u96E8\u5F88\u5FEB\u5C31\u4F86"),Vh=m),m===2&&(xl-=e,xl<=0&&(xl=v(3.5,7),OS())),Tn("rain",pi.rain>.03,pi.rain)}kg(i);for(let f of _l)f.t>0&&(f.t-=i,f.m.material.opacity=Math.random()<.3?.35:1,f.t<=0&&(f.m.visible=!1));let n=Math.floor(Gh*pi.rain);if(Zi.visible=n>0,!n)return;let s=x.camera.position,r=Zi.geometry.attributes.position.array,o=Math.max(0,s.y-9),a=36,l=5,c=2,h=.036;for(let f=0;f<n;f++){let p=f*3,_=f*6;ii[p+1]-=a*e,ii[p]+=l*e,ii[p+2]+=c*e,ii[p+1]<0&&(ii[p+1]+=Fg,ii[p]=v(ni),ii[p+2]=v(ni));let m=s.x+((ii[p]-s.x+ni/2)%ni+ni)%ni-ni/2,g=s.z+((ii[p+2]-s.z+ni/2)%ni+ni)%ni-ni/2,M=o+ii[p+1];r[_]=m,r[_+1]=M,r[_+2]=g,r[_+3]=m-l*h,r[_+4]=M+a*h,r[_+5]=g-c*h}Zi.geometry.setDrawRange(0,n*2),Zi.geometry.attributes.position.needsUpdate=!0,Zi.material.opacity=.3+.3*pi.rain;let u=x.player.pos,d=pi.rain*100*e;for(;d>0;){if(d>=1||Math.random()<d){let f=v(6.28),p=Math.sqrt(Math.random())*20;ie.puffs.spawn(u.x+Math.cos(f)*p,.06,u.z+Math.sin(f)*p,0,.5,0,.05,.22,.16,16055034,12900571,0,1)}d-=1}}var Gh,ni,Fg,Wh,pi,PS,LS,DS,FS,NS,US,gl,Zi,ii,Ng,Fi,xl,Vh,na,Dg,_l,Xh=ln(()=>{hi();Yi();Zr();cr();Qo();ta();ml();Gh=1500,ni=46,Fg=26,Wh=14,pi=x.wx,PS=new Te(13098448),LS=new Te(6715774),DS=new Te(8372687),FS=new Te(5012617),NS=new Te(16579056),US=new Te(7108733),gl=new N,Fi=0,xl=5,Vh=0,na=null,Dg="0",_l=[]});function Ae(i,e,t=0,n=0,s=0,r=0,o=0,a=0){let l=new Be(i,e);return l.position.set(t,n,s),l.rotation.set(r,o,a),l}function Ni(i,e,t,n){for(let s of x.animals.slice()){if(gi(s))continue;let r=s.root.position,o=t+(s.boss?s.H*.35:0);(r.x-i)**2+(r.z-e)**2<o*o&&n(s)}}function Ui(i,e,t,n,s){let r=null,o=t*t;for(let a of x.animals){if(gi(a)||n&&n.has(a))continue;let l=a.root.position,c=((l.x-i)**2+(l.z-e)**2)*(s?v(.5,1.5):1);c<o&&(o=c,r=a)}return r}function Qd(i,e){let t=x.camera.position,n=null,s=e;for(let r of x.animals){$n(r,mt).sub(t);let o=mt.length();if(o>i)continue;let a=mt.dot(qe)/o;a>s&&(s=a,n=r)}return n}function Zt(i,e,t,n,s={}){let r=s.boss||200;if(i.boss){if(x.t-(i.pcd||0)<.3)return!1;i.pcd=x.t}return Rt(i,i.boss?r:999,Object.assign({mode:t,dir:n||ae(0,0,1),weapon:e,bossCap:r},s))}function ex(){$h=fs([dt(.09,.02,1.3).translate(0,0,.35),dt(.34,.05,.07).translate(0,0,-.3),dt(.05,.05,.3).translate(0,0,-.45)]),Zh=gt(14543084,{emissive:3822944}),Jg=fs([dt(1.9,.07,.07).translate(2.5,0,0),dt(.14,.04,1.2).translate(3.4,0,.5),dt(.1,.04,.5).translate(3.32,0,1.2)]),np=new Gt(1,16,12),jg=dt(1,1,1),Qg=gt(12577535,{transparent:!0,opacity:.45,flatShading:!1}),ep=mi(1,1,.05,24),xs=new Gt(1,12,8),ip=new Wi(1.6,.13,6,14,Math.PI),gr=new Bt,gr.visible=!1,x.camera.add(gr);let i=r=>{let o=Vt(Ae(dt(.2,.2,.7),gt(4155948),0,0,0));for(let a=-1;a<=1;a++)o.add(Ae(new Vi(.035,.24,5),gt(16249308),a*.07,0,-.45,-Math.PI/2));return o.position.set(r*.5,-.5,-.75),o.scale.setScalar(.8),o};mn.beast=Vt(i(-1),i(1)),mn.car=Vt(Ae(dt(1.9,.1,1.5),gt(13125690),0,-.8,-1.55,.05),Ae(dt(.3,.02,1.5),gt(16249308),0,-.74,-1.55,.05),Ae(dt(1.9,.28,.3),gt(3025439),0,-.74,-.74),Ae(new Wi(.2,.035,6,14),gt(3025439),0,-.52,-.62,-.5)),mn.cannon=Vt(Ae(mi(.12,.14,.7,10),gt(4171701),.34,-.3,-.75,Math.PI/2),Ae(new Wi(.13,.03,6,12),gt(15911244),.34,-.3,-1.08),Ae(xs,rn(12579839),.34,-.3,-1.15));let e=gt(15712430),t=Ae(mi(.4,.4,1,12).rotateX(Math.PI/2).translate(0,0,-.5),rn(16777215,{fog:!1}),0,-.95,-2.5),n=Ae(mi(.8,.8,1,14).rotateX(Math.PI/2).translate(0,0,-.5),rn(8378623,{fog:!1,transparent:!0,opacity:.55,depthWrite:!1}),0,-.95,-2.5);mn.beam=Vt(Ae(dt(.16,.2,.3),e,-.15,-.4,-.6),Ae(dt(.16,.2,.3),e,.15,-.4,-.6),Ae(xs,rn(12579839),0,-.36,-.9),t,n),mn.disc=Vt(Ae(dt(.14,.34,.14),e,.42,-.12,-.6),Ae(mi(.3,.3,.02,20),rn(16740277),.42,.14,-.6));let s=r=>{let o=Vt(Ae(dt(.34,.3,.7),gt(7041912),0,0,0),Ae(dt(.12,.05,.5),gt(13125690),0,.17,.05)),a=Vt();for(let l=0;l<3;l++)a.add(Ae(mi(.035,.035,.6,6),gt(3025439),Math.cos(l*2.09)*.07,Math.sin(l*2.09)*.07,0,Math.PI/2));return a.position.z=-.6,o.add(a),o.position.set(r*.52,-.5,-.85),o.scale.setScalar(.62),o};mn.robot=Vt(s(-1),s(1)),mn.ice=Vt(Ae(dt(.06,1,.14),gt(12577535,{emissive:2780300}),0,.5,0),Ae(dt(.3,.06,.1),gt(4171701),0,0,0),Ae(dt(.06,.24,.06),gt(3025439),0,-.14,0)),mn.chain=Vt(Ae(dt(.14,.16,.34),e,.36,-.34,-.62),Ae(xs,rn(16775106),.36,-.3,-.86)),mn.chain.children[1].scale.setScalar(.07);for(let r in mn)mn[r].visible=!1,gr.add(mn[r])}function tx(i){x.override=i,gr.visible=!!i;for(let e in mn)mn[e].visible=e===i;x.camera.children.forEach(e=>{e!==gr&&(e.visible=!i)}),mn.beam.children[3].visible=mn.beam.children[4].visible=!1,zn=0,ia=0,An=.25,ji=0,lr()}function nx(){if(zt.forEach(i=>i.end()),zt.length=0,Kh=0,x.override=null,x.spMul=1,x.fovAdd=0,gr){gr.visible=!1;for(let i in mn)mn[i].visible=!1}}function BS(i,e,t,n){let s=gt(i),r=gt(e),o=Vt(Ae(dt(.42,.45,1.1),s,0,.62,0),Ae(dt(.36,.36,.42),s,0,.84,.68),Ae(dt(.2,.18,.26),r,0,.76,.95),Ae(dt(.08,.08,.45),r,0,.8,-.72,.6),Ae(dt(.06,.06,.04),rn(15225407),-.1,.9,.9),Ae(dt(.06,.06,.04),rn(15225407),.1,.9,.9));n?o.add(Ae(dt(.2,.16,.44),r,0,.95,-.1)):(o.add(Ae(new Vi(.07,.2,4),r,-.12,1.1,.6)),o.add(Ae(new Vi(.07,.2,4),r,.12,1.1,.6)));let a=[];for(let l=0;l<4;l++){let c=Vt(Ae(dt(.12,.5,.12),r,0,-.25,0));c.position.set(l%2?.15:-.15,.45,l<2?.4:-.4),o.add(c),a.push(c)}return o.userData.legs=a,o.scale.setScalar(t),o}function Vg(i,e,t,n){let s=i==="robodog",r=BS(s?15911244:4868682,s?7038037:3025439,s?1.3:1.1,s),o=s?24:17;r.position.set(e,0,t),x.scene.add(r),Qt(e,0,t,5,.8);let a=0,l=0,c=v(.5,1.5),h=null;zt.push({upd(u,d){a+=u;let f=r.position;if(a>n)return Qt(f.x,0,f.z,6,.9),!0;l-=d,h&&h.dead&&(h=null),h||(h=Ui(f.x,f.z,90,null,!0));let p=x.player.pos,_=h?h.root.position.x:p.x+2,m=h?h.root.position.z:p.z+2,g=_-f.x,M=m-f.z,E=Math.hypot(g,M)||1;if(E>(h?1.3+(h.boss?h.H*.3:0):3))f.x+=g/E*o*d,f.z+=M/E*o*d,r.rotation.y=Math.atan2(g,M),r.userData.legs.forEach((b,w)=>b.rotation.x=Math.sin(a*24+(w%3?Math.PI:0))*.9),f.y=Math.abs(Math.sin(a*12))*.15;else if(h&&l<=0){l=.3;let b=h;b.boss||(h=null),Zt(b,i,s?"gib":Re(["headpop","gib","drop"]),ae(g/E,.3,M/E),{boss:140,power:5})}if(s&&(c-=d,c<=0)){c=1.5;let b=Ui(f.x,f.z,40,h?new Set([h]):null,!0);if(b&&b.dP>6){let w=$n(b);ei(ae(f.x,1.3,f.z),w,16747100,.1,.12),Y.missile(),Kn(ae(w.x,.6,w.z),3.2,{weapon:"robodog",loud:.5})}}return!1},end(){x.scene.remove(r)}})}function ix(i,e,t){let n=og(i,8824939);n.root.position.set(e,-n.H,t),x.scene.add(n.root),Qt(e,0,t,5,.7),Kh++;let s=v(6),r=0,o=null;zt.push({upd(a,l){s+=l,n.mixer.update(l*.9);let c=n.root.position;if(!(x.buff.zombie>0)){for(let p=0;p<8;p++)ie.puffs.spawn(c.x,v(.2,n.H),c.z,v(-2,2),v(0,3),v(-2,2),.3,v(.6,1.1),v(.4,.8),8824939,3025439,0,2);return!0}if(c.y<0)return c.y=Math.min(0,c.y+n.H/.8*l),!1;if(n.root.rotation.z=Math.sin(s*6)*.12,o&&o.dead&&(o=null),o||(o=Ui(c.x,c.z,90,null,!0)),!o)return!1;let h=o.root.position,u=h.x-c.x,d=h.z-c.z,f=Math.hypot(u,d)||1;if(f>1.2+(o.boss?o.H*.3:0))c.x+=u/f*11.5*l,c.z+=d/f*11.5*l,n.root.rotation.y=Math.atan2(u,d);else if(r-=l,r<=0){r=.5;let p=o,_=p.key,m=h.x,g=h.z,M=p.boss;o=null,Zt(p,"zombie","headpop",ae(u/f,0,d/f),{boss:150})&&!M&&Kh<18&&jt(1.2,()=>{x.buff.zombie>1.5&&ix(_,m,g)})}return!1},end(){Kh--,ag(n)}})}function Wg(i,e,t){let n=Vt(Ae(dt(.5,.4,.6),gt(2966305)),Ae(mi(.07,.07,.8,6),gt(3025439),.13,0,.6,Math.PI/2),Ae(mi(.07,.07,.8,6),gt(3025439),-.13,0,.6,Math.PI/2));n.position.y=.85;let s=Vt(Ae(mi(.3,.5,.6,8),gt(7038037),0,.3,0),n);s.position.set(i,0,e),x.scene.add(s),Qt(i,0,e,5,.8),Y.clank();let r=0,o=0,a=0;zt.push({upd(l,c){if(r+=l,r>t)return Qt(i,0,e,6,.9),!0;o-=c;let h=Ui(i,e,40);if(!h)return!1;let u=$n(h);if(n.rotation.y=Math.atan2(u.x-i,u.z-e),o<=0){o=.09;let d=ae(i,.85,e),f=u.clone().sub(d).normalize();d.addScaledVector(f,.9),ei(d,u,16770442,.04),a++%2===0&&Y.smg(),Rt(h,42,{mode:Math.random()<.3?"headpop":"drop",dir:f,power:4,weapon:"turret",bossCap:42})}return!1},end(){x.scene.remove(s)}})}function zS(i,e){let t=Vt(Ae(dt(.6,.15,.6),gt(3025439)),Ae(dt(.12,.08,.12),rn(15225407),0,-.1,.2));for(let r=0;r<4;r++)t.add(Ae(mi(.22,.22,.02,10),gt(15260085),r%2?.36:-.36,.1,r<2?.36:-.36));x.scene.add(t);let n=0,s=.4+i*.3;zt.push({upd(r,o){if(n+=r,n>e)return en(t.position.x,t.position.y,t.position.z,8),!0;let a=x.player.pos,l=x.t*1.2+i*2.094;if(t.position.set(a.x+Math.cos(l)*5,a.y+6.5+Math.sin(x.t*2+i)*.4,a.z+Math.sin(l)*5),t.rotation.y+=r*3,s-=o,s<=0){s=.85;let c=x.animals.filter(h=>h.dP<45&&h.dP>5&&!gi(h));if(c.length){let h=$n(Re(c));ei(t.position,h,15225407,.08,.12),Kn(ae(h.x,.6,h.z),2.8,{weapon:"drone",loud:.45})}}return!1},end(){x.scene.remove(t)}})}function kS(){let i=gt(14543084,{emissive:3162698}),e=Vt();for(let t=0;t<3;t++)e.add(Ae(Jg,i,0,0,0,0,t*2.094,0));x.scene.add(e),zt.push({upd(t,n){if(!(x.buff.scythe>0))return!0;let s=x.player.pos;return e.position.set(s.x,s.y+1,s.z),e.rotation.y-=n*9,Ni(s.x,s.z,4.2,r=>{let o=r.root.position;o.y-s.y>3.5||Zt(r,"scythe","slice",ae(o.z-s.z,0,s.x-o.x).normalize(),{cut:"h",boss:220})}),!1},end(){x.scene.remove(e),i.dispose()}})}function HS(i){let e=Ae($h,Zh);e.position.copy(x.player.pos).setY(3),x.scene.add(e);let t=null;zt.push({upd(n,s){let r=x.player,o=e.position;if(!(x.buff.swords>0))return en(o.x,o.y,o.z,5),!0;if(t&&t.dead&&(t=null),t||(t=Ui(r.pos.x,r.pos.z,55,null,!0),t&&x.t-(t.swordT||-9)<.6?t=null:t&&(t.swordT=x.t)),t)$n(t,Ys);else{let c=Math.sin(r.yaw),h=Math.cos(r.yaw),u=(i-2.5)*.6;Ys.set(r.pos.x+c*2+h*u,r.pos.y+2.6+i%2*.5,r.pos.z+h*2-c*u)}mt.copy(Ys).sub(o);let a=mt.length(),l=t?55:Math.min(40,a*6);if(a>.01&&(o.addScaledVector(mt,Math.min(1,l*s/a)),t||a>.6?e.lookAt(Ys):e.rotation.set(-Math.PI/2,0,0)),t&&a<1.2+(t.boss?t.H*.3:0)){let c=t;t=null,Zt(c,"sword","slice",mt.normalize().clone(),{cut:Re(["v","d"]),boss:200})}return!1},end(){x.scene.remove(e)}})}function GS(){let i=x.player,e=i.pos.clone(),t=x.animals.filter(l=>l.dP<70&&!gi(l)).sort((l,c)=>l.dP-c.dP),n=54;Y.rise();for(let l=0;l<n;l++){let c=v(6.28),h=v(3,20),u=Ae($h,Zh),d=t.length?t[l%t.length]:null,f=ae(e.x+Math.cos(c)*h,v(13,22),e.z+Math.sin(c)*h),p=ae(f.x+v(-6,6),0,f.z+v(-6,6));u.position.copy(f),u.scale.setScalar(.01),u.lookAt(f.x,0,f.z),x.scene.add(u);let _=-l*.012,m=1+v(0,.5);zt.push({upd(g,M){if(_+=M,_<0)return!1;let E=d&&!d.dead,b=E?$n(d,Ys):Ys.copy(p);if(_<m)return u.scale.setScalar(Math.min(1.6,_*6)),u.position.y=f.y+Math.sin(_*9+l)*.15,u.lookAt(b),!1;mt.copy(b).sub(u.position);let w=mt.length();return u.lookAt(b),w<1.4||u.position.y<.3?(E?Zt(d,"sword","slice",mt.normalize().clone(),{cut:"v",boss:120}):en(u.position.x,.2,u.position.z,3),!0):(u.position.addScaledVector(mt,Math.min(1,85*M/w)),!1)},end(){x.scene.remove(u)}})}let s=ae(e.x-Math.sin(i.yaw)*14,0,e.z-Math.cos(i.yaw)*14),r=Ae($h,Zh);r.scale.setScalar(16),r.position.set(s.x,70,s.z),r.rotation.x=Math.PI/2,r.visible=!1,x.scene.add(r);let o=0,a=!1;zt.push({upd(l,c){return o+=c,o<1.9?!1:(r.visible=!0,a?o>11.5:(r.position.y-=130*c,r.position.y<=9&&(r.position.y=9,a=!0,o=10,Kn(s.clone().setY(.6),13,{weapon:"sword",loud:1.3}),Kt(s,1,30,.7,14543084),at(1)),!1))},end(){x.scene.remove(r)}})}function VS(i){let t=new Yt({color:[8372687,15712430,15911244][i%3],transparent:!0,opacity:.6}),n=Ae(np,t),s=x.player.yaw+(i-1)*.6,r=ae(-Math.sin(s)*21,9,-Math.cos(s)*21),o=x.player.pos;n.position.set(o.x+r.x*.15,3,o.z+r.z*.15),n.scale.setScalar(2.2),x.scene.add(n),zt.push({upd(a,l){let c=n.position;if(!(x.buff.bubble>0)){for(let f=0;f<10;f++)ie.puffs.spawn(c.x,c.y,c.z,v(-5,5),v(-2,5),v(-5,5),.4,1,v(.3,.6),16055034,t.color.getHex(),0,2);return Y.pop(),!0}r.y-=30*l;let h=Ui(c.x,c.z,45);if(h){let f=h.root.position,p=f.x-c.x,_=f.z-c.z,m=Math.hypot(p,_)||1;r.x+=p/m*26*l,r.z+=_/m*26*l}let u=Math.hypot(r.x,r.z)||1;r.x*=21/u,r.z*=21/u,c.addScaledVector(r,l),c.y<2.2&&(c.y=2.2,r.y=Math.max(11,-r.y*.9),Y.boing(),n.scale.set(2.2*1.2,2.2*.75,2.2*1.2)),n.scale.x+=(2.2-n.scale.x)*Math.min(1,a*8),n.scale.y+=(2.2-n.scale.y)*Math.min(1,a*8),n.scale.z=n.scale.x;let d=Math.hypot(c.x,c.z);if(d>ft-3){let f=c.x/d,p=c.z/d,_=r.x*f+r.z*p;_>0&&(r.x-=2*_*f,r.z-=2*_*p)}for(let f of x.obstacles){if(f.r<2||c.y>f.h+2.2)continue;let p=c.x-f.x,_=c.z-f.z,m=Math.hypot(p,_);if(m<f.r+2.2&&m>.01){let g=(r.x*p+r.z*_)/m;g<0&&(r.x-=2*g*p/m,r.z-=2*g*_/m)}}return n.rotation.x+=l*4,Ni(c.x,c.z,2.2+.5,f=>{Math.abs(f.root.position.y+f.H*.5-c.y)<2.2+f.H*.6&&Zt(f,"bubble","flat",null,{boss:220})}),!1},end(){x.scene.remove(n),t.dispose()}})}function Xg(i){if(i.dead||i.ice>0||gi(i))return;if(i.boss){Zt(i,"ice","gib",null,{boss:180});return}i.ice=v(4,6),i.state="frozen",i.hole=null,i.balloon=null,i.tilt.scale.setScalar(1),i.mixer.timeScale=0,i.mat.color.set(10475760),i.mat.transparent=!1,i.mat.opacity=1;let e=Ae(jg,Qg,0,i.H*.55,0);e.scale.set(i.H*.85,i.H*1.15,i.H*.85),i.root.add(e),Y.ice()}function tp(i=60){let e=x.camera.position,t=i;return qe.y<-.03&&(t=Math.min(i,(e.y-.2)/-qe.y)),ae(e.x+qe.x*t,0,e.z+qe.z*t)}function WS(i,e,t,n=40){let s=Re(qg),r=Re(qg);for(let o=0;o<n;o++){let a=v(6.28),l=v(-1.4,1.4),c=v(8,15);ie.puffs.spawn(i,e,t,Math.cos(a)*Math.cos(l)*c,Math.sin(l)*c,Math.sin(a)*Math.cos(l)*c,.25,v(.8,1.3),v(.35,.6),s,r,.3,1)}}function XS(i,e){for(let t=0;t<3;t++){let n=Ae(ip,rn(t===1?16777215:15225407,{fog:!1,transparent:!0,opacity:.9,side:bt,depthWrite:!1}));n.scale.setScalar(.9),n.position.copy(i).addScaledVector(qe,2.6).addScaledVector(yl,(t-1)*.42),n.position.y-=.15,n.lookAt(i),n.rotateZ(e*.9),x.scene.add(n);let s=0;zt.push({upd(r){return s+=r,n.material.opacity=.9*(1-s/.18),n.scale.setScalar(.9+s*3),s>.18},end(){x.scene.remove(n),n.material.dispose()}})}}function qS(){let i=gt(11121846),e=Vt(Ae(mi(7,3.6,1.2,28),i),Ae(mi(3.4,7,.6,28),gt(7041912),0,-.85,0),Ae(new Gt(3,18,10,0,Math.PI*2,0,Math.PI/2),gt(12579839,{transparent:!0,opacity:.85}),0,.55,0)),t=Vt();for(let h=0;h<12;h++){let u=h/12*6.28;t.add(Ae(xs,rn(h%2?15911244:15225407,{fog:!1}),Math.cos(u)*6.4,-.2,Math.sin(u)*6.4))}t.children.forEach(h=>h.scale.setScalar(.32)),e.add(t);let n=Ae(new qt(2,5.5,20,18,1,!0),rn(13238200,{transparent:!0,opacity:.25,depthWrite:!1,side:bt,fog:!1}),0,-10.6,0);e.add(n);let s=x.player,r=tp(30);e.position.set(r.x,80,r.z),x.scene.add(e),Y.rise();let o={done:!1},a=[],l=0,c=1.2;_e.feed("\u{1F47D} <b>\u5927\u98DB\u789F</b>\u964D\u81E8\uFF0C<em>\u5916\u661F\u4EBA\u8981\u5E36\u5E7E\u500B\u56DE\u53BB\u7814\u7A76</em>"),zt.push({upd(h,u){l+=h;let d=e.position,f=x.buff.ufo>0;if(e.rotation.y+=h*1.6,t.children.forEach((b,w)=>b.visible=Math.sin(x.t*12+w)>-.2),!f)return o.done=!0,d.y+=60*h,n.visible=!1,d.y>90;d.y+=(19-d.y)*Math.min(1,h*2.5);let p=tp(40),_=Math.sin(s.yaw),m=Math.cos(s.yaw);p.x-=_*6,p.z-=m*6;let g=p.x-d.x,M=p.z-d.z,E=Math.hypot(g,M);if(E>.5){let b=Math.min(E,14*u);d.x+=g/E*b,d.z+=M/E*b}if(n.material.opacity=.2+Math.sin(x.t*9)*.06,d.y<25)for(let b of x.animals){if(b.dead||b.boss||b.state==="sucked"||gi(b)||a.length>14)continue;let w=b.root.position;(w.x-d.x)**2+(w.z-d.z)**2<30&&(b.chute&&(b.root.remove(b.chute),b.chute=null),b.state="sucked",b.hole=o,b.mixer.timeScale=3,a.push(b),Y.cry("rise",b.def.pitch,b.def.robot))}for(let b=a.length-1;b>=0;b--){let w=a[b],R=w.root.position;if(w.dead||w.hole!==o){a.splice(b,1);continue}R.y+=(4+R.y*.5)*u,R.x+=(d.x-R.x)*Math.min(1,u*2),R.z+=(d.z-R.z)*Math.min(1,u*2),w.tilt.rotation.x+=9*u,w.tilt.rotation.z+=6*u,R.y>d.y-2.5&&(a.splice(b,1),Y.pop(),fi(w,{mode:"gib",weapon:"ufo",dir:ae(v(-1,1),-1,v(-1,1))}))}if(Ni(d.x,d.z,6,b=>{b.boss&&Zt(b,"ufo","gib",ae(0,1,0),{boss:120})}),c-=u,c<=0){c=.55;let b=x.animals.filter(w=>!gi(w)&&w.state!=="sucked"&&(w.root.position.x-d.x)**2+(w.root.position.z-d.z)**2<900);if(b.length){let w=Re(b),R=$n(w);ei(ae(d.x,d.y-1,d.z),R,15225407,.22,.14),Y.zap(),Kn(ae(R.x,.6,R.z),4,{weapon:"ufo",loud:.5})}}return!1},end(){o.done=!0,x.scene.remove(e),n.material.dispose()}})}function YS(){let i=x.player.pos,e=0;for(let t=0;t<40&&e<20;t++)e+=Qr(!0,[i.x,i.z,7,26]);_e.feed(`\u{1F4E3} <b>\u5168\u54E1\u5230\u9F4A</b>\uFF1A\u53C8\u4F86\u4E86 ${e} \u500B\u5CF6\u6C11\uFF0C<em>\u8AAA\u662F\u4F86\u958B\u6703\u7684</em>`),Y.siren()}function KS(){let i=gt(15262932,{transparent:!0,opacity:.5}),e=Vt();for(let l=0;l<7;l++)e.add(Ae(new qt(1.2+(l+1)*.75,.9+l*.75,2.2,12,1,!0),i,0,1.1+l*2.1,0));let t=x.player,n=Math.sin(t.yaw),s=Math.cos(t.yaw);e.position.set(t.pos.x-n*12,0,t.pos.z-s*12),x.scene.add(e),Y.whoosh();let r={done:!1},o=[],a=0;zt.push({upd(l,c){let h=e.position;if(!(x.buff.tornado>0))return r.done=!0,Qt(h.x,0,h.z,10,2),!0;e.rotation.y+=c*7,e.children.forEach((f,p)=>f.position.x=Math.sin(x.t*3+p*.7)*p*.18),a-=c;let u=Ui(h.x,h.z,80,null,!0);if(u&&a<=0&&(a=.6,e.userData.tx=u.root.position.x,e.userData.tz=u.root.position.z),e.userData.tx!==void 0){let f=e.userData.tx-h.x,p=e.userData.tz-h.z,_=Math.hypot(f,p)||1;h.x+=f/_*13*c,h.z+=p/_*13*c}Ni(h.x,h.z,14,f=>{if(f.boss||f.state==="sucked")return;let p=f.root.position,_=h.x-p.x,m=h.z-p.z,g=Math.hypot(_,m)||1;p.x+=_/g*7*c,p.z+=m/g*7*c});let d=Math.hypot(h.x,h.z);d>ft-4&&(h.x*=(ft-4)/d,h.z*=(ft-4)/d),Math.random()<l*30&&Qt(h.x+v(-3,3),0,h.z+v(-3,3),1,1.4),Ni(h.x,h.z,6,f=>{if(f.boss){Zt(f,"tornado","gib",ae(0,1,0),{boss:90});return}f.state==="sucked"||o.length>22||(f.chute&&(f.root.remove(f.chute),f.chute=null),f.state="sucked",f.hole=r,f.mixer.timeScale=3,o.push({a:f,ang:v(6.28),h:f.root.position.y+.3}),Y.cry("long",f.def.pitch,f.def.robot))});for(let f=o.length-1;f>=0;f--){let p=o[f],_=p.a;if(_.dead||_.hole!==r){o.splice(f,1);continue}p.ang+=c*9,p.h+=c*6.5;let m=1.6+p.h*.4;_.root.position.set(h.x+Math.cos(p.ang)*m,p.h,h.z+Math.sin(p.ang)*m),_.tilt.rotation.z+=c*10,p.h>12&&(o.splice(f,1),fi(_,{mode:"launch",weapon:"tornado",dir:ae(Math.cos(p.ang),.7,Math.sin(p.ang)).normalize()}))}return!1},end(){r.done=!0,x.scene.remove(e),i.dispose()}})}function $S(){let i=tp(55),e=gt(5210024),t=Vt(Ae(new Gt(1,18,12),e),Ae(new Gt(1,16,10),gt(15262932),0,-.35,.1),Ae(dt(.6,.15,2.4),e,0,.2,-1.05),Ae(dt(3.2,.12,1.1),e,0,.2,-1.55),Ae(dt(1.8,.1,.7),e,1.1,-.2,.2,0,0,-.5),Ae(dt(1.8,.1,.7),e,-1.1,-.2,.2,0,0,.5),Ae(xs,rn(1118481),.75,.15,.62),Ae(xs,rn(1118481),-.75,.15,.62));t.children[0].scale.set(1.6,1.25,3.2),t.children[1].scale.set(1.35,.8,2.7),t.children[6].scale.setScalar(.13),t.children[7].scale.setScalar(.13),t.scale.setScalar(2.6),t.position.set(i.x,90,i.z),t.rotation.set(.25,v(6.28),.15),x.scene.add(t),_e.announce("\u5E74\u7D42\u734E\u91D1\u4F86\u4E86\uFF01","\u8ACB\u62AC\u982D",!0),Y.whoosh();let n=10,s=0,r=!1,o=0;zt.push({upd(a,l){s+=l;let c=t.position;if(!r){if(o-=l,o<=0&&(o=.25,Kt(ae(i.x,.15,i.z),1,11,.25,15225407)),n+=70*l,c.y-=n*l,t.rotation.x+=l*.4,c.y<=3.2){c.y=3.2,r=!0,s=0,t.rotation.x=.1,at(1),Y.slam(),Y.boom(1.4),x.hitstop=.08,Kt(ae(i.x,.2,i.z),2,26,.6,8372687),Qt(i.x,0,i.z,24,3),ie.decals.add(i.x,i.z,13,9050642,!0);let h=0;Ni(i.x,i.z,10.5,u=>{Zt(u,"whale","flat",ae(0,-1,0),{boss:1200})&&h++});for(let u=0;u<60;u++){let d=v(6.28),f=v(5,16);ie.blood.spawn(i.x,.4,i.z,Math.cos(d)*f,v(2,7),Math.sin(d)*f,v(.1,.24),2.4,12720135)}h>=3&&x.onMulti?x.onMulti(h,i,"\u9BE8\u559C\uFF01\u4E00\u6B21 "+h+" \u96BB"):_e.announce("\u9BE8\u559C\uFF01",h?`\u58D3\u6241 ${h} \u96BB`:"\u53EF\u60DC\u6C92\u58D3\u5230\u4EBA")}return!1}return s>2.2&&(c.y-=l*5,t.scale.multiplyScalar(1-l*.6)),s>3.6},end(){x.scene.remove(t)}})}function ZS(){let i=x.player.pos,e=[],t=gt(3025439),n=Ae(mi(.45,.5,.2,10),t);for(let a=0;a<16;a++){let l=a%2?Ui(i.x+v(-25,25),i.z+v(-25,25),30,null,!0):null,c=a/16*6.28+v(-.15,.15),h=v(6,24),u=l?l.root.position.x+v(-2,2):i.x+Math.cos(c)*h,d=l?l.root.position.z+v(-2,2):i.z+Math.sin(c)*h;if(Math.hypot(u,d)>ft-4)continue;let f=Vt(n.clone(),Ae(xs,rn(15225407,{fog:!1}),0,.14,0));f.children[1].scale.setScalar(.12),f.position.set(u,.05,d),x.scene.add(f),Qt(u,0,d,2,.6),e.push({g:f,x:u,z:d,on:!0})}Y.clank(),_e.feed("\u{1F4A3} \u57CB\u4E86 <b>"+e.length+" \u9846\u5730\u96F7</b>\uFF0C<em>\u7E3E\u6548\u4E0D\u597D\u7684\u81EA\u5DF1\u6703\u8E29\u5230</em>");let s=0,r=!1,o=a=>{a.on&&(a.on=!1,a.g.visible=!1,Kn(ae(a.x,.6,a.z),6.5,{weapon:"mine",loud:.8}))};zt.push({upd(a,l){s+=l;for(let c of e)c.on&&(c.g.children[1].visible=Math.sin(s*10+c.x)>0);!(x.buff.mines>0)&&!r&&(r=!0,e.filter(c=>c.on).forEach((c,h)=>jt(h*.12,()=>o(c))));for(let c of e)if(c.on)for(let h of x.animals){if(gi(h))continue;let u=h.root.position;if(u.y<1.2&&(u.x-c.x)**2+(u.z-c.z)**2<5+(h.boss?h.H:0)){o(c);break}}return r&&e.every(c=>!c.on)&&s>.5},end(){e.forEach(a=>x.scene.remove(a.g))}})}function JS(){let e=x.player,t=ae(-Math.sin(e.yaw),0,-Math.cos(e.yaw)),n=ae(e.pos.x+t.x*4,3.2,e.pos.z+t.z*4),s=Vt(Ae(np,gt(2959946,{flatShading:!1})));s.children[0].scale.setScalar(3.2);for(let l=0;l<3;l++)s.add(Ae(xs,rn(657930),Math.cos(l*.5)*.7-.4,3.2*.94,Math.sin(l*.5)*.7-.3));s.children.slice(1).forEach(l=>l.scale.setScalar(.32)),s.position.copy(n),x.scene.add(s),Y.whoosh();let r=0,o=0,a=0;zt.push({upd(l,c){let h=Ui(n.x+t.x*14,n.z+t.z*14,14);h&&(mt.set(h.root.position.x-n.x,0,h.root.position.z-n.z).normalize(),mt.dot(t)>.6&&t.lerp(mt,Math.min(1,c*1.5)).normalize());let u=30*c;n.addScaledVector(t,u),r+=u,s.position.copy(n),s.rotation.x+=u/3.2*(t.z>0?1:-1),s.rotation.z-=u/3.2*t.x,a-=c,a<=0&&(a=.18,Y.thud(),Qt(n.x,0,n.z,2,1)),Ni(n.x,n.z,3.2+.7,f=>{Zt(f,"bowling","launch",ae(t.x+v(-.6,.6),.9,t.z+v(-.6,.6)).normalize(),{style:"bowling",boss:450})&&o++});let d=r>150||Math.hypot(n.x,n.z)>ft+6;return d&&(o>=3&&x.onMulti&&x.onMulti(o,n,o>=10?"\u5168\u5012\uFF01STRIKE\uFF01":"\u4E00\u9846 "+o+" \u96BB"),jS(n)),d},end(){x.scene.remove(s)}})}function jS(i){for(let e=0;e<20;e++)ie.puffs.spawn(i.x,.5,i.z,v(-4,4),v(5,10),v(-4,4),.4,1,v(.4,.8),16055034,8372687,1,2);Y.splash()}function QS(){let i=x.player.pos,e=x.animals.filter(n=>!n.boss&&!gi(n)&&n.state!=="sucked"&&n.dP<55).sort((n,s)=>n.dP-s.dP).slice(0,12),t={done:!1};_e.announce("\u4E0B\u73ED\u7159\u706B\u79C0\uFF01","\u4ECA\u5929\u8F9B\u82E6\u4E86\uFF08\u4ED6\u5011\uFF09",!0),e.forEach((n,s)=>jt(s*.15,()=>{if(n.dead||n.state==="sucked")return;n.chute&&(n.root.remove(n.chute),n.chute=null),n.state="sucked",n.hole=t,n.mixer.timeScale=3,Y.cry("rise",n.def.pitch,n.def.robot),Y.missile();let r=2,o=0,a=v(1.3,2.1);zt.push({upd(l,c){if(n.dead||n.hole!==t)return!0;o+=c,r+=22*c;let h=n.root.position;return h.y+=r*c,n.root.rotation.y+=c*6,ie.puffs.spawn(h.x+v(-.2,.2),h.y-.2,h.z+v(-.2,.2),0,-3,0,.3,.5,.35,16773808,15234090,0,1),o>a?(WS(h.x,h.y,h.z),Y.boom(.5),Y.pop(),fi(n,{mode:"gib",weapon:"firework",dir:ae(0,1,0)}),!0):!1},end(){}})})),jt(e.length*.15+2.6,()=>t.done=!0),e.length||_e.feed("\u9644\u8FD1\u6C92\u4EBA\u53EF\u4EE5\u7D81\u6C96\u5929\u70AE\uFF0C<em>\u4ED6\u5011\u90FD\u8EB2\u8D77\u4F86\u4E86</em>")}function sx(i){let e=x.player,t=e.pos,n=Math.sin(e.yaw),s=Math.cos(e.yaw);if(Hg.includes(i)){for(let r of Hg)r!==i&&delete x.buff[r];tx(i),i==="beast"?(Y.wail("roar",.4),at(.5),Kt(t,.5,8,.4,8502601),_e.announce("\u8B8A\u8EAB\uFF01","\u91CE\u6027\u89E3\u653E\uFF0C\u4EBA\u6027\u4E0B\u73ED",!0)):i==="robot"?(Y.slam(),Y.clank(),at(.6),Kt(t,.5,8,.4,11121846),_e.announce("\u6BBA\u622E\u6A5F\u5668\u4EBA\uFF0C\u555F\u52D5","\u4EBA\u985E\u5DF2\u7D93\u4E0D\u9700\u8981\u4E86",!0)):i==="car"?Y.honk():Y.rise();return}if(i==="wolves")for(let r=0;r<5;r++){let o=v(6.28);Vg("wolf",t.x+Math.cos(o)*3,t.z+Math.sin(o)*3,14)}else if(i==="robodog")Vg("robodog",t.x-n*2.5,t.z-s*2.5,18);else if(i==="zombie"){for(let r=0;r<8;r++){let o=v(6.28),a=v(5,18);ix(Nd(),t.x+Math.cos(o)*a,t.z+Math.sin(o)*a)}Y.wail("gurgle",.5)}else if(i==="turret")Wg(t.x-n*2.5+s*2,t.z-s*2.5-n*2,18),Wg(t.x-n*2.5-s*2,t.z-s*2.5+n*2,18);else if(i==="drone")for(let r=0;r<3;r++)zS(r,16);else if(i==="thunder")x.animals.filter(r=>r.dP<60&&!gi(r)).sort((r,o)=>r.dP-o.dP).slice(0,14).forEach((r,o)=>jt(o*.11,()=>{r.dead||qs(r.root.position.x,r.root.position.z,{small:o>0,chain:2})}));else if(i==="scythe")kS();else if(i==="swords")for(let r=0;r<6;r++)HS(r);else if(i==="myriad")GS();else if(i==="bubble")for(let r=0;r<3;r++)VS(r);else i==="speed"?Y.whoosh():i==="ufo"?qS():i==="crowd"?YS():i==="tornado"?KS():i==="whale"?$S():i==="mines"?ZS():i==="bowling"?JS():i==="firework"&&QS()}function rx(i){x.override===i&&tx(null)}function eE(i,e,t){let n=x.input,s=x.player,r=s.pos,o=x.camera,a=o.position,l=mn[i];if(An-=e,ji=Math.max(0,ji-e*5),i==="beast"){if(x.spMul=1.35,n.fire&&An<=0){An=.3,ji=1,Ji=-Ji,Y.swing(!0);let c=0;for(let h of x.animals.slice()){if(gi(h))continue;let u=h.root.position;mt.set(u.x-a.x,0,u.z-a.z);let d=mt.length()-(h.boss?h.H*.35:0);d>6.5||u.y>6||(mt.normalize(),!(mt.x*qe.x+mt.z*qe.z<.25&&d>1.5)&&Zt(h,"beast",Re(["slice","launch","gib"]),ae(mt.x,.25,mt.z).normalize(),{boss:320,cut:"h"})&&c++)}XS(a,Ji),c&&(at(.25),x.hitMark=.1,Math.random()<.3&&Y.wail("roar",.4)),c>=3&&x.onMulti&&x.onMulti(c,r,`\u4E00\u722A ${c} \u96BB`)}!Zg&&s.onGround&&$g<-9&&(Kt(r,.5,8,.4),at(.5),Y.slam(),Qt(r.x,0,r.z,8,1.2),Ni(r.x,r.z,6,c=>{c.root.position.y<3&&Zt(c,"beast","flat",null,{boss:300})})),l.children[0].rotation.x=Ji<0?ji*1:0,l.children[1].rotation.x=Ji>0?ji*1:0,l.children[0].position.z=-.75-(Ji<0?ji*.3:0),l.children[1].position.z=-.75-(Ji>0?ji*.3:0)}else if(i==="car"){if(x.spMul=3.4,x.fovAdd=12,Tn("saw",!0,.25+gs/80),gs>8){let c=s.vel.x/gs,h=s.vel.z/gs;Ni(r.x+c*1.2,r.z+h*1.2,2.5,u=>{u.root.position.y<3&&Zt(u,"car","launch",ae(c,.35,h).normalize(),{boss:350})&&at(.2)}),Math.random()<e*24&&ie.puffs.spawn(r.x-c*1.5+v(-.8,.8),.2,r.z-h*1.5+v(-.8,.8),0,1,0,.4,1.1,.5,16249308,14539473,.5,2)}n.firePressed&&Y.honk(),l.position.y=Math.sin(x.t*31)*.004*Math.min(1,gs/20)}else if(i==="cannon"){let c=l.children[2];if(n.fire)zn=Math.min(1,zn+e/1.1),zn>.15&&Y.stretch(zn);else if(Kg&&An<=0){let h=zn,u=.25+h*1.1,d=h>.35,f=qe.clone(),p=a.clone().addScaledVector(qe,1).addScaledVector(yl,.3);p.y-=.25,zn=0,An=.14,Y.cannon(h),d&&at(.2+h*.3);let _=Ae(xs,rn(d?9431551:12579839));_.scale.setScalar(u),_.position.copy(p),x.scene.add(_);let m=0;zt.push({upd(g,M){let E=90*M;p.addScaledVector(f,E),_.position.copy(p),m+=E;let b=m>85||p.y<u*.6;Math.random()<.6&&ie.puffs.spawn(p.x,p.y,p.z,0,0,0,u*.8,u*.3,.25,12579839,4171701,0,1);for(let w of x.obstacles)p.y<w.h&&(p.x-w.x)**2+(p.z-w.z)**2<(w.r+u*.5)**2&&(b=!0);for(let w of x.animals.slice())if(!($n(w,Ys).distanceTo(p)>u+w.H*.45+(w.boss?w.H*.2:0)))if(d)Zt(w,"cannon","gib",f.clone(),{boss:350}),w.boss&&(b=!0);else{Zt(w,"cannon",Math.random()<.4?"headpop":"drop",f.clone(),{power:7,boss:120}),b=!0;break}return b&&(d?Kn(p.clone().setY(Math.max(.6,p.y)),3+h*5.5,{weapon:"cannon"}):en(p.x,p.y,p.z,6)),b},end(){x.scene.remove(_),_.material.dispose()}})}else n.fire||(zn=0);c.scale.setScalar(.04+zn*.3)}else if(i==="beam"){let c=l.children[2],h=l.children[3],u=l.children[4];if(ia>0){ia-=e,Yh-=t;let d=110,f=a.x+qe.x,p=a.y-.35+qe.y,_=a.z+qe.z;if(qe.y<-.02){let g=-(p-.4)/qe.y;g<d&&(d=Math.max(2,g))}qh.set(f+qe.x*d,Math.max(.6,p+qe.y*d),_+qe.z*d),Yh<=0&&(Yh=.12,Kn(qh.clone(),7,{weapon:"beam",loud:.6}));let m=1+Math.sin(x.t*60)*.15;h.visible=u.visible=!0,h.scale.set(m*2.1,m*2.1,d),u.scale.set(m*2.6,m*2.6,d);for(let g=0;g<3;g++){let M=v(2,d);ie.puffs.spawn(f+qe.x*M+v(-2,2),p+qe.y*M+v(-2,2),_+qe.z*M+v(-2,2),qe.x*20,qe.y*20,qe.z*20,.6,.9,.3,16777215,8378623,0,1)}for(let g of x.animals.slice()){$n(g,mt),mt.x-=f,mt.y-=p,mt.z-=_;let M=mt.dot(qe);if(M<0||M>d+4)continue;let E=4.6+(g.boss?g.H*.3:0);mt.lengthSq()-M*M<E*E&&Zt(g,"beam","gib",qe.clone(),{boss:500})}x.trauma<.5&&at(.1),s.kvel.x-=qe.x*26*e,s.kvel.z-=qe.z*26*e,x.fovAdd=12,ia<=0&&(h.visible=u.visible=!1,An=.8,Kn(qh.clone(),13,{weapon:"beam",loud:1.4}),Kt(qh.clone().setY(.3),1,22,.6,8378623),at(.8))}else if(n.fire&&An<=0){if(zn+=e/1,Y.stretch(zn),Math.random()<.7){let d=v(6.28),f=v(1.5,3);ie.puffs.spawn(a.x+qe.x*1.2+Math.cos(d)*f,a.y-.4+Math.sin(d)*f,a.z+qe.z*1.2,-Math.cos(d)*f*3,-Math.sin(d)*f*3,0,.2,.3,.25,16777215,8378623,0,1)}zn>=1&&(zn=0,ia=5,Yh=0,Y.beam(5),at(.6),_e.announce("\u6CE2\u2014\u2014\uFF01","",!0))}else zn=Math.max(0,zn-e*2);c.scale.setScalar(ia>0?.3:.03+zn*.42)}else if(i==="disc"){if(l.children[1].rotation.y+=e*30,l.children[1].visible=An<.2,n.fire&&An<=0){An=.3,Y.swing(),Y.slice();let c=ae(qe.x,ui(qe.y,-.12,.3),qe.z).normalize(),h=a.clone().addScaledVector(c,1.6);h.y=Math.max(.9,h.y-.3);let u=Vt(Ae(ep,rn(16740277,{fog:!1})),Ae(ep,rn(16770033,{fog:!1}),0,.01,0));u.children[0].scale.set(1.5,1,1.5),u.children[1].scale.set(.8,1,.8),u.position.copy(h),x.scene.add(u);let d=0,f=0,p=Qd(80,.75),_=new Set;zt.push({upd(m,g){d+=g,p&&(p.dead||_.has(p))&&(p=null),p||(p=Ui(h.x,h.z,70,_)),p&&($n(p,Ys),mt.copy(Ys).sub(h).normalize(),c.lerp(mt,Math.min(1,g*8)).normalize()),h.addScaledVector(c,48*g),h.y<.6&&(h.y=.6),u.position.copy(h),u.rotation.y+=g*34,Math.random()<.8&&ie.puffs.spawn(h.x,h.y,h.z,0,0,0,.5,.5,.3,16757722,16740277,0,1),Ni(h.x,h.z,2.1,E=>{_.has(E)||Math.abs(E.root.position.y+E.H*.5-h.y)>1.8+E.H*.4||Zt(E,"disc","slice",c.clone(),{cut:Re(["h","v","d"]),boss:380})&&(_.add(E),f++)});let M=d>6||f>=30;return M&&f>=3&&x.onMulti&&x.onMulti(f,h,"\u7C89\u7D05\u8FFD\u9B42 "+f+" \u96BB"),M},end(){x.scene.remove(u)}})}}else if(i==="ice"){if(l.position.set(.4,-.55,-.7),l.rotation.set(-.35-ji*1.3,0,-.3+ji*.5),n.fire&&An<=0){An=.4,ji=1,Y.swing(),Y.ice();for(let f of x.animals.slice())$n(f,mt).sub(a),!(mt.length()-(f.boss?f.H*.35:0)>4.8)&&(mt.dot(qe)/(mt.length()||1)<.3||(f.ice>0?Zt(f,"ice","ice",qe.clone()):Xg(f)));let c=ae(qe.x,0,qe.z).normalize(),h=ae(a.x+c.x*2,1.1,a.z+c.z*2),u=Ae(ip,rn(12577535,{fog:!1,side:bt}));u.position.copy(h),u.rotation.set(-Math.PI/2,0,Math.atan2(c.x,c.z)+Math.PI),x.scene.add(u);let d=0;zt.push({upd(f,p){let _=34*p;return h.addScaledVector(c,_),d+=_,u.position.copy(h),Math.random()<.7&&ie.puffs.spawn(h.x+v(-1.5,1.5),v(.2,1.6),h.z+v(-1.5,1.5),0,.5,0,.2,.5,.35,16055034,12577535,0,2),Ni(h.x,h.z,2.7,m=>{m.root.position.y<4.5&&Xg(m)}),d>34},end(){x.scene.remove(u),u.material.dispose()}})}}else if(i==="robot"){x.spMul=.95,Gg+=e*4.5,Jd-=e;let c=Math.sin(Gg)*.75;if(s.onGround&&gs>3&&(jd-=e,jd<=0&&(jd=.42,at(.08),Y.thud())),n.fire&&(l.children.forEach(h=>h.children[2].rotation.z+=e*40),An<=0)){An=.04,Ji=-Ji,Ji>0&&Y.smg();let h=Math.atan2(qe.x,qe.z)+c,u=Math.sin(h),d=Math.cos(h),f=[];for(let g of x.animals){if(gi(g))continue;let M=g.root.position,E=M.x-r.x,b=M.z-r.z,w=E*u+b*d;w<1||w>75||Math.abs(E*d-b*u)<2.4+(g.boss?g.H*.3:0)&&f.push([w,g])}f.sort((g,M)=>g[0]-M[0]);let p=f.length?f[0][1]:null;if(!p&&Math.random()<.5){let g=x.animals.filter(M=>!gi(M)&&M.dP<60&&$n(M,mt).sub(a).normalize().dot(qe)>.55);g.length&&(p=Re(g))}f[1]&&Zt(f[1][1],"robot","drop",ae(u,.25,d),{boss:40,power:6});let _=a.clone().addScaledVector(yl,Ji*.48).addScaledVector(qe,1.2);_.y-=.4;let m=p?$n(p):ae(r.x+u*60,a.y+qe.y*60,r.z+d*60);ei(_,m,16770442,.07,.06),p&&(Zt(p,"robot",Math.random()<.35?"headpop":Re(["drop","gib"]),ae(u,.25,d),{boss:40,power:6}),x.hitMark=.06)}if(n.altPressed&&Jd<=0){Jd=.7,Y.missile();let h=Qd(90,.9),u=h?$n(h):a.clone().addScaledVector(qe,40);ei(a.clone().addScaledVector(qe,1).setY(a.y-.2),u,16747100,.16,.18),Kn(ae(u.x,Math.max(.6,u.y),u.z),5.5,{weapon:"robot"})}l.children[0].position.y=l.children[1].position.y=-.5+(n.fire?v(-.015,.015):0)}else if(i==="chain"&&(l.children[1].scale.setScalar(.06+Math.random()*.04),n.fire&&An<=0)){An=.24,Y.zap();let c=a.clone().addScaledVector(qe,.9).addScaledVector(yl,.34);c.y-=.3;let h=Qd(45,.9)||Ui(r.x,r.z,12),u=new Set,d=0,f=0;for(h||ei(c,c.clone().addScaledVector(qe,22).add(ae(v(-2,2),v(-1,2),v(-2,2))),16775106,.06,.1);h&&d<10;){u.add(h);let p=$n(h),_=c.clone().lerp(p,.5).add(ae(v(-.8,.8),v(-.5,.9),v(-.8,.8)));ei(c,_,16775106,.09,.1),ei(_,p,16775106,.09,.1),en(p.x,p.y,p.z,4),Zt(h,"chain","zap",null,{style:d?"chain":void 0,boss:160})&&f++,c=p,h=Ui(p.x,p.z,9,u),d++}f>=3&&x.onMulti&&x.onMulti(f,c,"\u9023\u9396\u9583\u96FB"),d&&(x.hitMark=.08)}}function ox(i,e){let t=x.player,n=t.pos,s=x.buff;if(x.spMul=1,x.fovAdd=0,gs=Math.hypot(t.vel.x,t.vel.z),x.camera.getWorldDirection(qe),yl.setFromMatrixColumn(x.camera.matrixWorld,0),x.override&&eE(x.override,i,e),s.speed>0&&(x.spMul*=2.5,x.fovAdd+=14,gs>14)){let r=t.vel.x/gs,o=t.vel.z/gs;Ni(n.x,n.z,2,a=>{a.root.position.y-n.y<3&&Zt(a,"speed","slice",ae(r,0,o),{cut:"h",boss:200})}),Math.random()<i*30&&ie.puffs.spawn(n.x-r+v(-.5,.5),n.y+v(.2,1.6),n.z-o+v(-.5,.5),0,0,0,.5,.2,.3,16579056,12577535,0,1)}for(let r of x.animals.slice()){if(!(r.ice>0))continue;r.ice-=e;let o=r.root.position;!r.def.fly&&o.y>0&&(o.y=Math.max(0,o.y-20*e)),r.ice<=0&&(r.ice=.01,fi(r,{mode:"ice",weapon:"ice"}))}for(let r=zt.length-1;r>=0;r--)zt[r].upd(i,e)&&(zt[r].end(),zt.splice(r,1));$g=t.vel.y,Zg=t.onGround,Kg=x.input.fire}var Yg,Hg,zt,mn,qh,qe,yl,mt,Ys,Gg,Jd,jd,gr,An,ji,Ji,zn,Kg,ia,Yh,$g,Zg,Kh,gs,$h,Zh,Jg,np,jg,Qg,ep,xs,ip,gt,rn,dt,mi,Vt,$n,gi,qg,ax=ln(()=>{hi();Ch();Yi();Zr();cr();Qo();ml();ta();Xh();Yg=[{id:"beast",icon:"\u{1F432}",name:"\u602A\u7378\u8B8A\u8EAB",tip:"\u5DE6\u9375\u63EE\u722A\uFF0C\u8DF3\u8D77\u4F86\u843D\u5730\u6709\u9707\u6CE2",dur:15,w:2},{id:"car",icon:"\u{1F3CE}\uFE0F",name:"\u516C\u53F8\u8DD1\u8ECA",tip:"\u81EA\u52D5\u5F80\u524D\u885D\uFF0C\u6ED1\u9F20\u8F49\u5411\uFF0C\u649E\u5C31\u5C0D\u4E86",dur:14,w:2},{id:"cannon",icon:"\u{1F4AA}",name:"\u5145\u80FD\u81C2\u7832",tip:"\u6309\u4F4F\u5DE6\u9375\u84C4\u529B\uFF0C\u653E\u958B\u767C\u5C04",dur:14,w:2},{id:"beam",icon:"\u{1F450}",name:"\u6028\u5FF5\u6C23\u529F\u6CE2",tip:"\u6309\u4F4F\u5DE6\u9375\u96C6\u6C23\uFF0C\u653E\u51FA 5 \u79D2\u7684\u5DE8\u5927\u5149\u67F1",dur:14,w:2},{id:"disc",icon:"\u{1F497}",name:"\u7C89\u7D05\u8FFD\u9B42\u65AC",tip:"\u4E1F\u51FA\u53BB\u6703\u81EA\u5DF1\u8FFD\u4EBA\uFF0C\u5207\u7A7F\u4E00\u96BB\u518D\u627E\u4E0B\u4E00\u96BB",dur:13,w:2},{id:"robot",icon:"\u{1F916}",name:"\u6BBA\u622E\u6A5F\u5668\u4EBA",tip:"\u8B8A\u8EAB\uFF01\u6309\u4F4F\u5DE6\u9375\u96D9\u7BA1\u6A5F\u69CD\u5DE6\u53F3\u72C2\u6383\uFF0C\u53F3\u9375\u706B\u7BAD",dur:15,w:2},{id:"ice",icon:"\u2744\uFE0F",name:"\u5BD2\u51B0\u528D",tip:"\u63EE\u528D\u51CD\u6210\u51B0\u96D5\uFF0C\u518D\u6572\u5C31\u788E",dur:14,w:2},{id:"chain",icon:"\u{1F329}\uFE0F",name:"\u9023\u9396\u9583\u96FB",tip:"\u6309\u4F4F\u5DE6\u9375\uFF0C\u96FB\u6703\u81EA\u5DF1\u8DF3\u4E0B\u4E00\u96BB",dur:12,w:2},{id:"wolves",icon:"\u{1F43A}",name:"\u53EC\u559A\u91CE\u7378",tip:"\u4E94\u96BB\u72FC\u5E6B\u4F60\u54AC",dur:14,w:2},{id:"robodog",icon:"\u{1F415}",name:"\u6A5F\u5668\u72D7",tip:"\u6703\u54AC\u4EBA\uFF0C\u80CC\u4E0A\u9084\u6703\u767C\u5C04\u98DB\u5F48",dur:18,w:2},{id:"zombie",icon:"\u{1F9DF}",name:"\u6B7B\u5C4D\u5FA9\u6D3B",tip:"\u88AB\u54AC\u5230\u7684\u4E5F\u6703\u8B8A\u55AA\u5C4D",dur:16,w:2},{id:"turret",icon:"\u{1F527}",name:"\u81EA\u52D5\u7832\u5854",tip:"\u539F\u5730\u67B6\u5169\u5EA7",dur:18,w:2},{id:"drone",icon:"\u{1F6F8}",name:"\u7121\u4EBA\u6A5F\u5C0F\u968A",tip:"\u4E09\u53F0\u5728\u982D\u4E0A\u5E6B\u4F60\u8F5F",dur:16,w:2},{id:"thunder",icon:"\u26C8\uFE0F",name:"\u843D\u96F7\u9663",tip:"\u9644\u8FD1\u7684\u4E00\u96BB\u4E00\u9053\u96F7",dur:2,w:2},{id:"speed",icon:"\u{1F4A8}",name:"\u6975\u901F\u72C2\u5954",tip:"\u5FEB\u5230\u649E\u8AB0\u8AB0\u5169\u534A",dur:12,w:2},{id:"scythe",icon:"\u{1F319}",name:"\u8B77\u8EAB\u942E\u5200",tip:"\u4E09\u628A\u942E\u5200\u7E5E\u8457\u4F60\u5272",dur:15,w:2},{id:"swords",icon:"\u{1F5E1}\uFE0F",name:"\u5FA1\u528D\u8853",tip:"\u516D\u628A\u98DB\u528D\u81EA\u5DF1\u627E\u4EBA\u780D",dur:14,w:2},{id:"myriad",icon:"\u2694\uFE0F",name:"\u842C\u528D\u6B78\u4E00",tip:"\u6EFF\u5929\u7684\u528D\u4E00\u8D77\u843D\u4E0B",dur:3,w:1.5},{id:"bubble",icon:"\u{1F535}",name:"\u5F48\u8DF3\u6CE1\u6CE1\u7403",tip:"\u4E09\u9846\u5927\u7403\u6EFF\u5834\u58D3",dur:12,w:2},{id:"ufo",icon:"\u{1F47D}",name:"\u5927\u98DB\u789F",tip:"\u5149\u675F\u628A\u5CF6\u6C11\u5438\u4E0A\u53BB\uFF0C\u9806\u4FBF\u96F7\u5C04\u6383\u4E00\u8F2A",dur:14,w:2},{id:"crowd",icon:"\u{1F4E3}",name:"\u5168\u54E1\u5230\u9F4A",tip:"\u518D\u53EB 20 \u500B\u5CF6\u6C11\u4F86\u5CF6\u4E0A\uFF08\u88AB\u4F60\u8650\uFF09",dur:2,w:1.6},{id:"tornado",icon:"\u{1F32A}\uFE0F",name:"\u4EBA\u4E8B\u7570\u52D5\u9F8D\u6372\u98A8",tip:"\u6372\u8D77\u4F86\u8F49\u4E00\u8F49\uFF0C\u518D\u7529\u51FA\u53BB",dur:12,w:2},{id:"whale",icon:"\u{1F40B}",name:"\u5E74\u7D42\u734E\u91D1\u9BE8\u9B5A",tip:"\u6E96\u661F\u90A3\u88E1\u6389\u4E00\u96BB\u9BE8\u9B5A\u4E0B\u4F86",dur:3,w:1.6},{id:"mines",icon:"\u{1F4A3}",name:"\u7E3E\u6548\u5730\u96F7\u9663",tip:"\u8EAB\u908A\u57CB 16 \u9846\uFF0C\u8E29\u5230\u5C31\u98DB\uFF0C\u6642\u9593\u5230\u5168\u90E8\u4E00\u8D77\u7206",dur:16,w:2},{id:"bowling",icon:"\u{1F3B3}",name:"\u5DE8\u578B\u4FDD\u9F61\u7403",tip:"\u5F80\u524D\u6EFE\u4E00\u9846\u8D85\u5927\u4FDD\u9F61\u7403\uFF0C\u5168\u5012\uFF01",dur:3,w:2},{id:"firework",icon:"\u{1F386}",name:"\u4E0B\u73ED\u7159\u706B\u79C0",tip:"\u9644\u8FD1 12 \u96BB\u7D81\u4E0A\u6C96\u5929\u70AE",dur:4,w:2}],Hg=["beast","car","cannon","beam","disc","ice","chain","robot"],zt=[],mn={},qh=new N,qe=new N,yl=new N,mt=new N,Ys=new N,Gg=0,Jd=0,jd=0,An=0,ji=0,Ji=1,zn=0,Kg=!1,ia=0,Yh=0,$g=0,Zg=!0,Kh=0,gs=0,gt=(i,e)=>new Yt(Object.assign({color:i,flatShading:!0},e)),rn=(i,e)=>new rt(Object.assign({color:i},e)),dt=(i,e,t)=>new Sn(i,e,t),mi=(i,e,t,n=8)=>new qt(i,e,t,n);Vt=(...i)=>{let e=new Bt;return i.forEach(t=>e.add(t)),e},$n=(i,e=new N)=>e.set(i.root.position.x,i.root.position.y+i.H*.5,i.root.position.z),gi=i=>i.state==="drop"&&i.root.position.y>5;qg=[15911244,15225407,8502601,8372687,16740277,16579056]});function Mx(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d");e.fillStyle="#E8D9B5",e.fillRect(0,0,128,128),e.fillStyle="#C8483A",e.fillRect(52,0,24,128),e.fillRect(0,52,128,24),e.strokeStyle="#2E2A1F",e.lineWidth=10,e.strokeRect(0,0,128,128),e.fillStyle="#F2C94C",e.beginPath(),e.arc(64,64,30,0,6.28),e.fill(),e.lineWidth=6,e.stroke(),e.fillStyle="#2E2A1F",e.font="800 44px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("?",64,67);let t=new li(i);t.colorSpace=Dt,dx=new Sn(1.1,1.1,1.1),px=new Yt({map:t}),mx=new qt(.55,.55,46,10,1,!0),gx=new rt({color:15911244,transparent:!0,opacity:.2,depthWrite:!1,fog:!1,side:bt}),xx=new Xn(.9,0),_x=new Yt({color:3813930,emissive:12732946,flatShading:!0}),yx=new Gt(.8,10,8).scale(1,.82,1),vx=new Yt({color:14715438,flatShading:!0}),ex()}function ap(i,e,t={}){let n=new Bt;if(n.add(new Be(dx,px)),t.beam){let s=new Be(mx,gx);s.position.y=22,n.add(s)}x.scene.add(n),io.push({g:n,x:i,z:e,y:t.sky?34:0,fall:!!t.sky,t:v(6)})}function bx(i){x.scene.remove(io[i].g),io.splice(i,1)}function tE(i,e){let t=x.player.pos;for(let n=0;n<30;n++){let s=v(6.28),r=v(i,e),o=t.x+Math.cos(s)*r,a=t.z+Math.sin(s)*r;if(!(Math.hypot(o,a)>ft-8)&&x.obstacles.every(l=>(l.x-o)**2+(l.z-a)**2>(l.r+1.5)**2))return[o,a]}return[v(-15,15),v(-15,15)]}function Sx(){for(;io.length;)bx(0);sa.forEach(i=>x.scene.remove(i.m)),sa.length=0;for(let i in x.buff)delete x.buff[i];nx(),x.ult=0,x.eyeK=1,Jh=12,jh=18,vl=0,Qh=0,eu=0,Ml=0,tu=0,rp="",document.getElementById("vignette").classList.remove("frozen")}function Ex(){let i=x.obstacles.filter(e=>e.h===5.5).sort(()=>Math.random()-.5).slice(0,3);for(let e of i){let t=Math.hypot(e.x,e.z),n=(t+6)/t;ap(e.x*n,e.z*n)}}function bl(i){let e=x.itemDefs[i];if(!e){let t=ux.filter(s=>s.id!==rp&&!(x.buff[s.id]>0)),n=v(t.reduce((s,r)=>s+r.w,0));e=t[0];for(let s of t)if(n-=s.w,n<=0){e=s;break}}if(rp=e.id,x.buff[e.id]=e.dur,Y.pickup(),_e.announce(`${e.icon} ${e.name}`,e.tip,e.id==="nuke"),_e.feed(`\u64BF\u5230\u96B1\u85CF\u9053\u5177 <b>${e.icon} ${e.name}</b>`),x.stats&&(x.stats.items=(x.stats.items||0)+1),e.id==="nuke"&&(Y.siren(),op=99),e.id==="balloon"){for(let t of x.animals)t.boss||t.state==="drop"||t.state==="sucked"||t.dP>55||(t.state="sucked",t.hole=fx,t.balloon={t:0,pop:v(3.2,5.8)},t.mixer.timeScale=2.5);Y.whoosh()}return sx(e.id),e.id==="stop"&&(Ut.tempo=.55,document.getElementById("vignette").classList.add("frozen")),e}function nE(i){if(rx(i),i==="nuke")iE();else if(i==="stop")Ut.tempo=x.rageOn>0?1.3:1,document.getElementById("vignette").classList.remove("frozen"),_e.announce("\u6642\u9593\u6062\u5FA9","\u525B\u525B\u780D\u7684\u73FE\u5728\u4E00\u8D77\u5012"),Y.rage();else if(i==="bighead")for(let e of x.animals)e.bones.head&&e.bones.head.scale.setScalar(1)}function cx(i,e,t){let n=new Be(t?yx:xx,t?vx:_x),s={m:n,x:i,z:e,sx:i+v(8,16),sz:e+v(4,10),t:0,T:v(.65,.85),pumpkin:t};n.position.set(s.sx,46,s.sz),x.scene.add(n),sa.push(s)}function hx(){let i=x.player.pos,e=x.animals.filter(s=>s.dP<62&&s.dP>7&&s.state!=="drop");if(e.length&&Math.random()<.8){let s=Re(e).root.position;return[s.x+v(-1.5,1.5),s.z+v(-1.5,1.5)]}let t=v(6.28),n=v(12,42);return[i.x+Math.cos(t)*n,i.z+Math.sin(t)*n]}function iE(){let i=x.player,e=Math.sin(i.yaw),t=Math.cos(i.yaw),n=ae(i.pos.x-e*16,.5,i.pos.z-t*16);zg(2.2),Y.boom(1.6),Y.thunder(!0),at(1),x.slowmoT=1.6,x.hitstop=.12,i.kvel.set(e*14,0,t*14),i.vel.y=13,i.onGround=!1;for(let r=0;r<3;r++)jt(r*.12,()=>Kt(n,2,95,1.1+r*.2,r===1?15911244:16579056));for(let r=0;r<46;r++){let o=v(6.28),a=v(0,3);ie.puffs.spawn(n.x+Math.cos(o)*a,v(0,22),n.z+Math.sin(o)*a,v(-1,1),v(4,9),v(-1,1),2,v(4,7),v(1.6,2.8),16773808,7038037,1,1)}for(let r=0;r<40;r++){let o=v(6.28),a=v(4,14);ie.puffs.spawn(n.x,24,n.z,Math.cos(o)*a,v(1,5),Math.sin(o)*a,3,v(6,10),v(2,3.2),16765503,3025439,.5,1.2)}ie.decals.add(n.x,n.z,14,2367770,!0);let s=0;for(let r of x.animals.slice()){let o=r.root.position,a=Math.hypot(o.x-n.x,o.z-n.z),l=ae(o.x-n.x,.6,o.z-n.z).normalize();jt(a/75,()=>{!r.dead&&Rt(r,99999,{mode:"gib",dir:l,weapon:"nuke",bossCap:1500})&&s++})}for(let r of x.barrels)r.alive&&jt(Math.hypot(r.x-n.x,r.z-n.z)/75,()=>Ws(r));jt(2.2,()=>{s>=3&&x.onMulti&&x.onMulti(s,n,"\u5168\u5CF6\u8CC7\u9063")})}function sE(i){i.gold=!0,i.def=Object.assign({},i.def,{name:"\u91D1\u8272"+i.def.name,run:i.def.run*1.3,sense:17}),i.hp=i.maxHp=i.hp*2,i.mat.color.set(16765503);let e=i.root.position;Un(ae(e.x,e.y+i.H+.6,e.z),"\u2728","star",1.4,.6),Y.ding(),_e.feed("\u2728 <b>\u91D1\u8272\u5CF6\u6C11</b>\u51FA\u73FE\u4E86\uFF0C<em>\u6253\u6B7B\u6709\u5927\u734E</em>")}function Tx(i){if(!i.gold&&!i.boss)return;let e=i.root.position,t=Math.hypot(e.x,e.z),n=t>ft-6?(ft-6)/t:1;ap(e.x*n,e.z*n,{beam:!0}),i.gold&&Y.ding()}function wx(i,e){let t=x.player,n=x.buff,s=t.pos;for(let r in n)n[r]-=i,n[r]<=0&&(delete n[r],nE(r));if(ox(i,e),x.eyeK+=((n.giant>0?2.3:n.robot>0?1.75:n.beast>0?1.5:1)-x.eyeK)*Math.min(1,i*5),n.nuke>0){let r=Math.ceil(n.nuke*2);r!==op&&(op=r,Y.tick())}if(Jh-=e,Jh<=0&&(Jh=v(13,19),io.length<6)){let[r,o]=tE(10,38);ap(r,o,{sky:!0,beam:!0}),_e.feed("\u{1F381} <b>\u795E\u79D8\u79AE\u7269\u7BB1</b>\u7A7A\u6295\u4E2D\uFF0C\u8DDF\u8457\u5149\u67F1\u8D70")}for(let r=io.length-1;r>=0;r--){let o=io[r];o.t+=i,o.fall&&(o.y-=11*e,o.y<=0&&(o.y=0,o.fall=!1,Qt(o.x,0,o.z,6,.8),Y.thud())),o.g.position.set(o.x,o.y+.75+(o.fall?0:Math.sin(o.t*2.5)*.12),o.z),o.g.rotation.y=o.t*1.2,!o.fall&&(s.x-o.x)**2+(s.z-o.z)**2<4.4&&s.y<3&&(Kt(ae(o.x,.2,o.z),.5,5,.4,15911244),en(o.x,1,o.z,14),bx(r),bl())}if(n.giant>0&&s.y<.6){let r=0;eu-=i;for(let o of x.animals.slice()){if(o.state==="drop")continue;let a=o.root.position,l=(a.x-s.x)**2+(a.z-s.z)**2;if(o.boss){l<(o.H*.4+2)**2&&eu<=0&&(eu=.4,Rt(o,260,{mode:"gib",weapon:"stomp"}),at(.3),Y.slam());continue}l<7.3&&a.y<3.5&&(fi(o,{mode:"flat",weapon:"stomp"}),r++)}r&&(at(.3),Y.slam(),Kt(ae(s.x,.1,s.z),.5,5,.3),r>=3&&x.onMulti&&x.onMulti(r,s,`\u4E00\u8173 ${r} \u96BB`))}if(n.zeus>0&&(vl-=i,vl<=0)){let r=x.camera;r.getWorldDirection(lx);let o=null,a=.93;for(let l of x.animals){let c=l.root.position;sp.set(c.x-r.position.x,c.y+l.H*.5-r.position.y,c.z-r.position.z);let h=sp.length();if(h>75)continue;let u=sp.dot(lx)/h;u>a&&(a=u,o=l)}o?(vl=.42,qs(o.root.position.x,o.root.position.z,{small:!0,chain:3})):vl=.1}if(n.meteor>0&&(Qh-=e,Qh<=0)){Qh=.28;let[r,o]=hx();cx(r,o,!1)}for(let r=sa.length-1;r>=0;r--){let o=sa[r];o.t+=e;let a=Math.min(1,o.t/o.T),l=o.m;l.position.set(o.sx+(o.x-o.sx)*a,46*(1-a)+.5,o.sz+(o.z-o.sz)*a),l.rotation.x+=e*7,l.rotation.z+=e*5,e>0&&ie.puffs.spawn(l.position.x,l.position.y,l.position.z,v(-1,1),v(0,2),v(-1,1),.5,o.pumpkin?.7:1.2,v(.25,.45),o.pumpkin?15911244:16773808,o.pumpkin?14715438:15234090,2,2),a>=1&&(x.scene.remove(l),sa.splice(r,1),Kn(ae(o.x,.6,o.z),o.pumpkin?5.5:6.5,{weapon:o.pumpkin?"pumpkin":"meteor"}))}if(n.magnet>0)for(let r of x.animals){if(r.boss||r.state==="drop"||r.state==="air"||r.state==="sucked")continue;let o=r.root.position,a=s.x-o.x,l=s.z-o.z,c=Math.hypot(a,l);if(c>70||c<3.4)continue;let h=Math.min(22,8+c*.5)*e;o.x+=a/c*h,o.z+=l/c*h,c<30&&Math.random()<i*.06&&Hs(r,Re(["\u53C8\u8981\u958B\u6703\uFF1F\uFF01","\u6211\u4E0D\u60F3\u53BB\uFF5E","\u9019\u5834\u6211\u53EF\u4EE5\u4E0D\u7528\u5230\u5427","\u6703\u8B70\u5BA4\u5728\u54EA"]),1.5)}if(n.bighead>0)for(let r of x.animals)!r.boss&&r.bones.head&&r.bones.head.scale.setScalar(2.4);for(let r of x.animals.slice()){let o=r.balloon;if(!o)continue;if(r.hole!==fx||r.state!=="sucked"){r.balloon=null;continue}o.t+=e;let a=r.root.position;a.y=Math.min(15,a.y+(1.5+o.t*1.3)*e),r.tilt.scale.setScalar(1+Math.min(1,o.t/2.5)*.9),r.root.rotation.y+=e*1.5,r.tilt.rotation.z=Math.sin(x.t*3+r.seed)*.25,o.t>o.pop&&(r.balloon=null,r.tilt.rotation.z=0,Y.pop(),fi(r,{mode:"gib",weapon:"balloon",dir:ae(0,1,0)}))}if(jh-=e,jh<=0&&(jh=v(22,32),!x.animals.some(r=>r.gold))){let r=x.animals.filter(o=>!o.boss&&o.dP>22&&o.dP<60&&(o.state==="idle"||o.state==="wander"));r.length&&sE(Re(r))}for(let r of x.animals){if(!r.gold||Math.random()>i*14)continue;let o=r.root.position;ie.puffs.spawn(o.x+v(-.5,.5),o.y+v(.2,r.H),o.z+v(-.5,.5),0,1.2,0,.1,.22,.45,16775106,15911244,0,1)}if(tu-=i,x.input.altPressed){let r=Math.hypot(s.x,s.z);if(r<6.4&&r>.1&&(Math.sin(t.yaw)*s.x+Math.cos(t.yaw)*s.z)/r>.5){if(tu>0)Un(ae(0,4.6,0),"\uFF08\u5357\u74DC\u795E\u9084\u5728\u6C23\u982D\u4E0A\uFF09","bonus",1.2,.5);else if(Ml++,Un(ae(0,4.6,0),["\u549A\uFF01","\u549A\u549A\uFF01","\u2026\u2026\uFF01"][Ml-1],"big",.9,1),en(s.x*.5,1.6,s.z*.5,8),Y.clank(),Ml>=3){Ml=0,tu=45,_e.announce("\u5357\u74DC\u795E\u751F\u6C23\u4E86\uFF01","\u5929\u4E0A\u6389\u5357\u74DC\u56C9",!0),Y.rage(),at(.5);for(let o=0;o<26;o++)jt(.5+o*.25,()=>{let[a,l]=hx();cx(a,l,!0)})}}}}var ux,io,sa,fx,lx,sp,dx,px,mx,gx,xx,_x,yx,vx,Jh,jh,vl,Qh,eu,Ml,tu,rp,op,Ax=ln(()=>{hi();Yi();Zr();cr();Qo();ta();Xh();ml();ax();ux=[{id:"giant",icon:"\u{1F344}",name:"\u5347\u5B98\u8611\u83C7",tip:"\u8B8A\u6210\u5DE8\u4EBA\uFF0C\u7528\u8E29\u7684",dur:14,w:3},{id:"zeus",icon:"\u26A1",name:"\u96F7\u516C\u9059\u63A7\u5668",tip:"\u6E96\u661F\u770B\u8AB0\u5C31\u5288\u8AB0",dur:10,w:3},{id:"stop",icon:"\u23F1\uFE0F",name:"\u4E0B\u73ED\u6253\u5361\u9418",tip:"\u6642\u9593\u66AB\u505C\uFF0C\u6162\u6162\u8655\u7406",dur:6,w:3},{id:"rapid",icon:"\u267E\uFE0F",name:"\u7121\u9650\u706B\u529B",tip:"\u6240\u6709\u6B66\u5668\u96F6\u51B7\u537B",dur:12,w:3},{id:"meteor",icon:"\u2604\uFE0F",name:"\u5929\u964DKPI",tip:"\u9695\u77F3\u96E8",dur:8,w:3},{id:"magnet",icon:"\u{1F4E2}",name:"\u958B\u6703\u901A\u77E5",tip:"\u5168\u54E1\u5230\u4F60\u9762\u524D\u96C6\u5408",dur:8,w:3},{id:"bighead",icon:"\u{1F92F}",name:"\u5927\u982D\u75C7",tip:"\u982D\u8B8A\u8D85\u5927\uFF0C\u96A8\u4FBF\u6253\u90FD\u7206\u982D",dur:16,w:3},{id:"balloon",icon:"\u{1F388}",name:"\u6C26\u6C23\u5F48",tip:"\u5168\u54E1\u5347\u5929\uFF0C\u7136\u5F8C\u5575",dur:6,w:3},{id:"nuke",icon:"\u2622\uFE0F",name:"\u5168\u5CF6\u8CC7\u9063\u4EE4",tip:"3 \u79D2\u5F8C\u751F\u6548",dur:3,w:1.2},...Yg];x.itemDefs={};ux.forEach(i=>x.itemDefs[i.id]=i);io=[],sa=[],fx={done:!1},lx=new N,sp=new N,Jh=15,jh=18,vl=0,Qh=0,eu=0,Ml=0,tu=0,rp="",op=0});function Ix(){try{return window.opener&&!window.opener.closed?window.opener:null}catch{return null}}function lp(i){let e=Ix();if(!e)return!1;for(let t of Cx)try{e.postMessage(Object.assign({src:"cozy-payback"},i),t)}catch{}return!0}function Px(i){i&&Rx.push(i),addEventListener("message",e=>{if(!Cx.includes(e.origin))return;let t=e.data;!t||t.src!=="pumpkin-isles"||t.type!=="board"||!Array.isArray(t.rows)||(so.linked=!0,so.board={live:!!t.live,me:t.me&&typeof t.me.name=="string"?{name:t.me.name.slice(0,30)}:null,rows:t.rows.slice(0,20).map(oE)},Rx.forEach(n=>n(so.board)))}),lp({type:"hello"})}function oE(i){return{name:Sl(i.name,30)||"\u5CF6\u6C11",best:nu(i.best,5e6),kills:nu(i.kills,1e7),plays:nu(i.plays,1e5),combo:nu(i.combo,5e3),title:Sl(i.title,30),blurb:Sl(i.blurb,80),fav:Sl(i.fav,20),rank:Sl(i.rank,4),me:!!i.me}}function Lx(i){return lp({type:"round",round:i})}function cp(i){return lp({type:"lock",until:i})}function Dx(){let i=Ix();if(i){try{i.focus()}catch{}window.close()}setTimeout(()=>{location.href=rE},i?250:0)}var rE,Cx,Rx,so,nu,Sl,Fx=ln(()=>{rE="https://isles.pumpkinvrarai.com/app/",Cx=["https://isles.pumpkinvrarai.com","http://localhost:5180","http://127.0.0.1:5180","http://localhost:5173"],Rx=[],so={board:null,linked:!1};nu=(i,e)=>Math.max(0,Math.min(e,Math.floor(+i||0))),Sl=(i,e)=>String(i??"").slice(0,e)});var pE=n_(()=>{hi();Yi();cr();Zr();W0();Qo();ta();ml();Xh();Ax();Fx();Wd();Hd();var Tl=document.getElementById("game"),Oi={},El=location.search.includes("debug");x.input={fire:!1,firePressed:!1,altPressed:!1};x.player={pos:ae(0,0,24),vel:ae(),kvel:ae(),yaw:0,pitch:0,onGround:!0,bobT:0,dash:null};var Nx=0,iu=0,dp=25,hp=0,up=!1,Ux=!1,fp=!1,su=0,ra=!1;try{Ut.wail=localStorage.getItem("cozy-payback-wail")!=="0"}catch{}var aE={3:"\u4E09\u9023\u6BBA\uFF01",5:"\u5927\u958B\u6BBA\u6212\uFF01",8:"\u8840\u6D41\u6210\u6CB3\uFF01",12:"\u6696\u5CF6\u5C60\u592B\uFF01",16:"\u7E3E\u6548\u8D85\u6A19\uFF01",20:"\u4EBA\u8CC7\u770B\u4E86\u90FD\u6015\uFF01",25:"\u7121\u60C5\u958B\u55AE\u6A5F\u5668\uFF01",30:"\u9019\u4E0D\u662F\u52A0\u73ED\u662F\u5C60\u6BBA\uFF01",40:"\u5168\u5CF6\u8CC7\u9063\uFF01",50:"\u795E\u4E4B\u6E05\u7B97\uFF01"};async function lE(){let i=new Mh({canvas:Tl,antialias:!0,powerPreference:"high-performance"});i.setPixelRatio(Math.min(devicePixelRatio,1.5)),i.setSize(innerWidth,innerHeight),i.localClippingEnabled=!0,x.renderer=i,x.scene=new Ea,x.camera=new cn(78,innerWidth/innerHeight,.05,900),x.camera.rotation.order="YXZ",x.scene.add(x.camera),V0(),k0(),xg(),Ug(),Mx(),_e.init({start:kx,resume:ru,menu:pp,wail:zx,pick:Gx,isles:Kx}),_e.wail(Ut.wail),Px(()=>_e.board(so.board,au())),_e.board(null,au()),setInterval(()=>_e.lock(ou?0:zh()),1e3),_e.lock(ou?0:zh()),x.onKill=cE,x.onMulti=hE,uE(),await sg(_e.loading),pp(),requestAnimationFrame(Zx)}function Bx(){lg(),H0(),_g(),x.timers.length=0,x.score=0,x.kills=0,x.combo=0,x.comboT=0,x.bestCombo=0,x.rage=0,x.rageOn=0,x.elapsed=0,x.timeLeft=180,x.slow=1,x.hitstop=0,x.slowmoT=0,x.trauma=0,x.boss=null,Ut.tempo=1,x.stats={byWeapon:{},byVictim:{},head:0,air:0,multi:0,boss:0},iu=0,dp=25,su=0,Og(),Sx()}function zx(){Ut.wail=!Ut.wail,_e.wail(Ut.wail),Xf(),Ut.wail?Y.wail("long",1.1):Y.ui();try{localStorage.setItem("cozy-payback-wail",Ut.wail?"1":"0")}catch{}(x.mode==="score"||x.mode==="free")&&_e.feed(`\u6158\u53EB\u7248 <b>${Ut.wail?"\u958B":"\u95DC"}</b>`)}function pp(){Xx(),Bx(),lr(),x.mode="menu",x.paused=!1,x.player.pos.set(0,0,9999),ra=!1;for(let i=0;i<26;i++)Qr(!1);x.camera.children.forEach(i=>i.visible=!1),document.pointerLockElement&&document.exitPointerLock(),_e.reset(),_e.hiscore(),_e.show("menu")}function kx(i){if(Xf(),Y.ui(),!ou){let t=Rg();if(!t.ok){t.fresh&&cp(t.until),qx();return}}Bx(),x.mode=i,x.lastMode=i,x.paused=!1;let e=x.player;e.pos.set(0,0,24),e.vel.set(0,0,0),e.kvel.set(0,0,0),e.yaw=0,e.pitch=0,e.onGround=!0,e.dash=null;for(let t=0;t<20;t++)Qr(!1,[0,6,6,30]);for(let t=0;t<12;t++)Qr(!0);Ex(),x.camera.children.forEach(t=>t.visible=!0),_e.reset(),_e.show("hud"),_e.announce("\u6E05\u7B97\u958B\u59CB\uFF01","\u4ECA\u5929\u4ED6\u5011\u4E00\u500B\u90FD\u5225\u60F3\u4E0B\u73ED",!0),gp()}function gp(){if(Tl.requestPointerLock&&!El)try{let i=Tl.requestPointerLock();i&&i.catch&&i.catch(()=>{})}catch{}}function Ox(){x.mode!=="score"&&x.mode!=="free"||(x.paused=!0,lr(),x.input.fire=!1,_e.show("pause"))}function ru(){ra=!1,x.paused=!1,_e.show("hud"),gp()}function Hx(){x.mode!=="free"||x.paused||(ra=!0,x.paused=!0,lr(),x.input.fire=!1,_e.show("picker"),document.pointerLockElement&&document.exitPointerLock())}function Gx(i){ru(),i&&bl(i)}function Vx(){x.ult<1||(x.ult=0,bl())}function Wx(){let i=x.mode;x.mode="end",lr(),x.input.fire=!1,document.pointerLockElement&&document.exitPointerLock();let e=0;try{e=+localStorage.getItem("cozy-payback-hi")||0}catch{}if(x.stats.newHigh=i==="score"&&x.score>e,x.stats.newHigh)try{localStorage.setItem("cozy-payback-hi",Math.floor(x.score))}catch{}x.camera.children.forEach(t=>t.visible=!1),Y.end(),_e.end(x.stats),i==="score"&&(Gd("score",180),lu("score"))}var ou=El&&!location.search.includes("limit");function au(){let i=null;try{i=JSON.parse(localStorage.getItem("cozy-payback-me")||"null")}catch{}return i&&i.plays?Object.assign({name:"\u4F60\uFF08\u9019\u53F0\u96FB\u8166\uFF09",me:!0},i):null}function lu(i){let e=x.stats,t=_e.favOf(e),n=Math.floor(x.score),s={mode:i,score:n,kills:x.kills,combo:x.bestCombo,fav:t,rank:i==="score"?_e.rankOf(n):"",secs:Math.round(x.elapsed)},r=so.board,o=r&&r.rows.find(c=>c.me)||au()||{kills:0,plays:0,best:0,combo:0},a={kills:o.kills+s.kills,plays:o.plays+1,best:Math.max(o.best,i==="score"?n:0),combo:Math.max(o.combo,s.combo)};a.top=!!r&&r.rows.length>1&&r.rows.every(c=>c.me||c.best<a.best);let l=Sg(s,a);s.title=l.title,s.blurb=l.blurb;try{localStorage.setItem("cozy-payback-me",JSON.stringify(Object.assign({},a,{title:l.title,blurb:l.blurb,fav:t,rank:s.rank})))}catch{}return _e.meCard(l,a),Lx(s)||_e.board(null,au()),l}function Xx(){x.mode!=="free"||x.elapsed<10||(Gd("free",x.elapsed),lu("free"),x.mode="menu")}function qx(){lr(),x.input.fire=!1,document.pointerLockElement&&document.exitPointerLock(),_e.lock(zh()),_e.show("limit"),Y.end()}function Yx(){lu("free");let i=Ig();cp(i),x.mode="end",x.camera.children.forEach(e=>e.visible=!1),qx()}function Kx(){Xx(),Dx()}function cE(i,e,t){let n=x.stats,s=i.root.position;x.kills++,x.combo++,x.comboT=3.2,x.combo>x.bestCombo&&(x.bestCombo=x.combo);let r=1+Math.min(x.combo-1,40)*.1,o=i.boss?3e3:100,a=[];t.head&&(o+=60,a.push("\u7206\u982D"),n.head++),t.air&&(o+=120,a.push("\u7A7A\u4E2D\u64CA\u6BBA"),n.air++),e==="wall"&&(o+=150,a.push("\u649E\u7246")),e==="launch"&&(o+=50,a.push("\u5168\u58D8\u6253")),e==="splat"&&(o+=80,a.push("\u81EA\u7531\u843D\u9AD4")),e==="drown"&&(o+=150,a.push("\u9935\u9BCA\u9B5A")),t.style==="bowling"&&(o+=200,a.push("\u4FDD\u9F61\u7403")),t.style==="spread"&&(o+=80,a.push("\u5EF6\u71D2")),e==="zap"&&(o+=100,a.push(t.style==="chain"?"\u9023\u9396\u96FB\u64CA":"\u5929\u6253\u96F7\u5288")),i.gold&&(o+=1500,a.push("\u91D1\u8272\u5CF6\u6C11")),e==="ice"&&(o+=80,a.push("\u51B0\u96D5\u788E\u88C2")),o=Math.round(o*r),x.score+=o;let l=t.weapon||"kick";n.byWeapon[l]=(n.byWeapon[l]||0)+1,n.byVictim[i.def.name]=(n.byVictim[i.def.name]||0)+1,i.boss&&n.boss++,Tx(i),Un(ae(s.x,s.y+i.H+.3,s.z),"+"+o,i.boss?"big":""),a.length&&Un(ae(s.x,s.y+i.H+.95,s.z),a.join(" \xB7 "),"bonus",1.2,1.2),_e.feed(`<b>${i.def.name}</b>\uFF08${i.def.role}\uFF09<em>${tg[e]||"\u4E0B\u73ED\u4E86"}</em>`),x.rageOn>0||(x.rage=Math.min(1,x.rage+(i.boss?.5:.04))),x.ult=Math.min(1,x.ult+(i.boss?.5:x.mode==="free"?.125:.084));let c=aE[x.combo];!c&&x.combo>50&&x.combo%10===0&&(c="\u505C\u4E0D\u4E0B\u4F86\uFF01"),c&&(_e.announce(c,`${x.combo} \u9023\u6BBA`,x.combo>=12),Y.announce(x.combo/3))}function hE(i,e,t){x.score+=i*150,x.stats.multi++,Un(ae(e.x,Math.max(e.y,1)+2.5,e.z),`${t||"\u4E00\u77F3"+i+"\u9CE5"}\uFF01 +${i*150}`,"big",1.6,1.2),i>=5&&_e.announce(`\u4E00\u6B21 ${i} \u96BB\uFF01`,"",!0)}function $x(){x.rage<1||x.rageOn>0||(x.rage=0,x.rageOn=10,Ut.tempo=1.3,Y.rage(),at(.5),_e.announce("\u66B4\u6012\u6A21\u5F0F\uFF01","\u5168\u5834\u6162\u52D5\u4F5C \xB7 \u653B\u901F\u52A0\u500D",!0))}function uE(){addEventListener("keydown",i=>{if((i.code==="Space"||i.code==="Tab")&&i.preventDefault(),!i.repeat&&(Oi[i.code]=!0,!(x.mode!=="score"&&x.mode!=="free"))){if(i.code==="Tab"){ra?ru():Hx();return}if(x.paused){i.code==="KeyP"&&!ra&&ru();return}if(i.code.startsWith("Digit"))Bh((+i.code.slice(5)+9)%10);else if(i.code==="KeyQ")$x();else if(i.code==="KeyF")Vx();else if(i.code==="KeyM")up=!up,B0(up);else if(i.code==="KeyC")zx();else if(i.code==="KeyB"&&!x.boss&&!x.paused&&su<=0){su=20;let e=Ud();_e.announce("\u4F60\u628A\u8001\u95C6\u53EB\u51FA\u4F86\u4E86",`\u5DE8\u5927\u5316\u7684${e.def.name}`,!0)}else i.code==="KeyP"?(document.pointerLockElement&&document.exitPointerLock(),Ox()):i.code==="KeyH"?Kx():i.code==="KeyT"&&x.mode==="score"&&El&&(x.timeLeft=3)}}),addEventListener("keyup",i=>{Oi[i.code]=!1}),addEventListener("blur",()=>{for(let i in Oi)Oi[i]=!1;x.input.fire=!1}),Tl.addEventListener("mousedown",i=>{if(!(x.mode!=="score"&&x.mode!=="free"||x.paused)){if(!document.pointerLockElement&&!El&&!fp){gp();return}i.button===0?(x.input.fire=!0,x.input.firePressed=!0):i.button===2&&(x.input.altPressed=!0)}}),addEventListener("mouseup",i=>{i.button===0&&(x.input.fire=!1)}),addEventListener("contextmenu",i=>i.preventDefault()),addEventListener("mousemove",i=>{if(document.pointerLockElement!==Tl&&!fp||x.paused||x.mode!=="score"&&x.mode!=="free")return;let e=x.player;e.yaw-=i.movementX*.0022,e.pitch=Math.max(-1.5,Math.min(1.5,e.pitch-i.movementY*.0022))}),addEventListener("wheel",i=>{if(x.mode!=="score"&&x.mode!=="free"||x.paused)return;let e=V.next>=0?V.next:V.cur;Bh((e+(i.deltaY>0?1:-1)+Di.length)%Di.length)},{passive:!0}),document.addEventListener("pointerlockchange",()=>{document.pointerLockElement?Ux=!0:!El&&!ra&&Ox()}),document.addEventListener("pointerlockerror",()=>{Ux||(fp=!0)}),addEventListener("resize",()=>{x.renderer.setSize(innerWidth,innerHeight),x.camera.aspect=innerWidth/innerHeight,x.camera.updateProjectionMatrix(),Kf()})}function fE(i){let e=x.player,t=x.camera,n=Math.sin(e.yaw),s=Math.cos(e.yaw),r=x.override==="car",o=r?0:(Oi.KeyD?1:0)-(Oi.KeyA?1:0),a=r?Oi.KeyS?0:1:(Oi.KeyW?1:0)-(Oi.KeyS?1:0),l=-n*a+s*o,c=-s*a-n*o,h=Math.hypot(l,c);h>0&&(l/=h,c/=h);let u=Oi.ShiftLeft||Oi.ShiftRight,d=u?13.5:9.5;x.rageOn>0&&(d*=1.25),x.buff.giant>0&&(d*=1.3),d*=x.spMul,V.firing&&Di[V.cur].id==="saw"&&(d*=1.12);let f=1-Math.exp(-(e.onGround?14:3.5)*i);e.vel.x+=(l*d-e.vel.x)*f,e.vel.z+=(c*d-e.vel.z)*f,e.dash&&(e.vel.x=e.dash.x*e.dash.speed,e.vel.z=e.dash.z*e.dash.speed,e.dash.t-=i,e.dash.t<=0&&(e.dash=null,e.vel.x*=.2,e.vel.z*=.2)),Oi.Space&&e.onGround&&(e.vel.y=10.5,e.onGround=!1),e.vel.y-=28*i,e.pos.x+=(e.vel.x+e.kvel.x)*i,e.pos.z+=(e.vel.z+e.kvel.z)*i,e.pos.y+=e.vel.y*i,e.kvel.multiplyScalar(Math.exp(-3.5*i)),e.pos.y<=0&&(!e.onGround&&e.vel.y<-16&&(at(.2),Y.thud()),e.pos.y=0,e.vel.y=0,e.onGround=!0);for(let b of x.obstacles){if(e.pos.y>b.h)continue;let w=e.pos.x-b.x,R=e.pos.z-b.z,y=b.r+.5,A=w*w+R*R;if(A<y*y&&A>1e-4){let F=Math.sqrt(A);e.pos.x=b.x+w/F*y,e.pos.z=b.z+R/F*y}}let p=Math.hypot(e.pos.x,e.pos.z),_=ft+1.5;p>_&&(e.pos.x*=_/p,e.pos.z*=_/p);let m=Math.hypot(e.vel.x,e.vel.z);e.onGround&&h>0&&(e.bobT+=i*m*1.5);let g=e.onGround?Math.sin(e.bobT)*.045*Math.min(1,m/9):0;t.position.set(e.pos.x,e.pos.y+(1.72+g)*x.eyeK,e.pos.z);let M=x.trauma*x.trauma;t.rotation.set(e.pitch+v(-1,1)*.05*M,e.yaw+v(-1,1)*.05*M,v(-1,1)*.04*M);let E=78+(u&&h>0?5:0)+(x.rageOn>0?9:0)+(e.dash?14:0)+x.fovAdd;Math.abs(t.fov-E)>.05&&(t.fov=Bs(t.fov,E,Math.min(1,i*10)),t.updateProjectionMatrix())}function dE(i){x.t+=i,x.elapsed+=i,x.rageOn>0&&(x.rageOn-=i,x.rageOn<=0&&(Ut.tempo=1));let e=x.rageOn>0?.35:1;x.slowmoT>0&&(x.slowmoT-=i,e=Math.min(e,.3)),x.slow=Bs(x.slow,e,Math.min(1,i*10));let t=i*x.slow;x.hitstop>0&&(x.hitstop-=i,t=0),x.wdt=t,su-=i,fE(i),x.override?V.firing=!1:Mg(i,t),Fd(x.buff.stop>0?0:t),wx(i,t),Zd(i,t);for(let r=x.timers.length-1;r>=0;r--){let o=x.timers[r];o.t-=t,o.t<=0&&(x.timers.splice(r,1),o.fn())}$f(t,i),Qf(t),iu-=t;let n=x.player.pos,s=Math.min(72,40+Math.floor(x.elapsed/4));if(iu<=0&&x.animals.length<s&&(iu=x.animals.length<s*.6?.08:.25,Qr(!0,Math.random()<.65?[n.x,n.z,9,34]:null)),x.kills>=dp&&!x.boss){dp=x.kills+30;let r=Ud();_e.announce(`\u5DE8\u5927\u5316\u7684${r.def.name}\uFF01`,`\u300C${Re(r.def.lines)}\u300D`,!0)}x.combo>0&&(x.comboT-=i,x.comboT<=0&&(x.combo=0)),_e.update(),x.mode==="score"?(x.timeLeft-=i,x.timeLeft<=0&&Wx()):x.mode==="free"&&!ou&&x.elapsed%1<i&&Cg(x.elapsed)&&Yx()}function mp(i){if(x.mode==="menu"||x.mode==="end"){let e=x.mode==="end"?.3:1;x.t+=i,x.wdt=i*e,x.mode==="menu"&&(hp+=i*.1,x.camera.position.set(Math.cos(hp)*44,13,Math.sin(hp)*44),x.camera.lookAt(0,2.5,0)),Fd(i*e),$f(i*e,i),Qf(i),x.mode==="end"&&Zd(i,i*e,!0);for(let t=x.timers.length-1;t>=0;t--){let n=x.timers[t];n.t-=i*e,n.t<=0&&(x.timers.splice(t,1),n.fn())}}else x.paused||dE(i);x.renderer.render(x.scene,x.camera),x.input.firePressed=!1,x.input.altPressed=!1}function Zx(i){requestAnimationFrame(Zx);let e=Math.min(.05,(i-Nx)/1e3||.016);Nx=i,mp(e)}window.GAME={G:x,W:V,start:kx,tick:mp,endGame:Wx,toMenu:pp,select:Bh,rage:$x,step(i=60,e=1/60){for(let t=0;t<i;t++)mp(e)},fire(i){x.input.fire=i,i&&(x.input.firePressed=!0)},aim(i){let e=x.player,t=i.root.position,n=t.x-e.pos.x,s=t.y+i.H*.5-(e.pos.y+1.72),r=t.z-e.pos.z;e.yaw=Math.atan2(-n,-r),e.pitch=Math.atan2(s,Math.hypot(n,r))},give:bl,strike:qs,weather:Bg,A:Ut,openPicker:Hx,pickPower:Gx,ult:Vx,resetLimit:Pg,Isles:so,finishRound:lu,kickFree:Yx,near(){let i=x.player.pos,e=null,t=1e9;for(let n of x.animals){let s=n.root.position.distanceToSquared(i);s<t&&(t=s,e=n)}return e}};lE().catch(i=>{console.error(i),document.getElementById("loadtxt").textContent="\u8F09\u5165\u5931\u6557\uFF1A"+i.message})});pE();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
