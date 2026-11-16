(()=>{var On=(i,e,t)=>()=>{if(t)throw t[0];try{return i&&(e=i(i=0)),e}catch(n){throw t=[n],n}};var ax=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};function lx(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function cx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function _o(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bm(){let i=_o("canvas");return i.style.display="block",i}function ma(...i){let e="THREE."+i.shift();yo?yo("log",e,...i):console.log(e,...i)}function Em(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Le(...i){i=Em(i);let e="THREE."+i.shift();if(yo)yo("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ge(...i){i=Em(i);let e="THREE."+i.shift();if(yo)yo("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function yr(...i){let e=i.join(" ");e in tp||(tp[e]=!0,Le(...i))}function Tm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function es(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]).toLowerCase()}function rt(i,e,t){return Math.max(e,Math.min(t,i))}function nf(i,e){return(i%e+e)%e}function hx(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function ux(i,e,t){return i!==e?(t-i)/(e-i):0}function fa(i,e,t){return(1-t)*i+t*e}function fx(i,e,t,n){return fa(i,e,1-Math.exp(-t*n))}function dx(i,e=1){return e-Math.abs(nf(i,e*2)-e)}function px(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function mx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function gx(i,e){return i+Math.floor(Math.random()*(e-i+1))}function xx(i,e){return i+Math.random()*(e-i)}function _x(i){return i*(.5-Math.random())}function yx(i){i!==void 0&&(np=i);let e=np+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vx(i){return i*ua}function Mx(i){return i*Sr}function Sx(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function bx(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function sf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ex(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*d,a*h,a*c);break;default:Le("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ah(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function rf(i,e){if(e.constructor===Float32Array)return i;let t=ah(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function of(i,e){if(e.constructor===Float32Array)return i;let t=ah(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}function Tx(){let i={enabled:!0,workingColorSpace:zn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===gt&&(s.r=_s(s.r),s.g=_s(s.g),s.b=_s(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===gt&&(s.r=po(s.r),s.g=po(s.g),s.b=po(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Cs?pa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[zn]:{primaries:e,whitePoint:n,transfer:pa,toXYZ:sp,fromXYZ:rp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:n,transfer:gt,toXYZ:sp,fromXYZ:rp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),i}function _s(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function po(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function Qh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ql.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}function nu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function hu(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){pr.fromArray(i,r);let a=s.x*Math.abs(pr.x)+s.y*Math.abs(pr.y)+s.z*Math.abs(pr.z),l=e.dot(pr),c=t.dot(pr),h=n.dot(pr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function pp(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=es()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}function Hx(i,e,t,n,s,r,o,a){let l;if(e.side===yn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===ji,a),l===null)return null;Dl.copy(a),Dl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Dl);return c<t.near||c>t.far?null:{distance:c,point:Dl.clone(),object:i}}function Nl(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Cl),i.getVertexPosition(l,Il),i.getVertexPosition(c,Pl);let h=Hx(i,e,t,n,Cl,Il,Pl,xp);if(h){let u=new F;Zs.getBarycoord(xp,Cl,Il,Pl,u),s&&(h.uv=Zs.getInterpolatedAttribute(s,a,l,c,u,new Xe)),r&&(h.uv1=Zs.getInterpolatedAttribute(r,a,l,c,u,new Xe)),o&&(h.normal=Zs.getInterpolatedAttribute(o,a,l,c,u,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new F,materialIndex:0};Zs.getNormal(Cl,Il,Pl,f.normal),h.face=f,h.barycoord=u}return h}function zl(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(ic.fromBufferAttribute(a,s),sc.fromBufferAttribute(a,r),t.distanceSqToSegment(ic,sc,_u,Ap)>n)return;_u.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(_u);if(!(c<e.near||c>e.far))return{distance:c,point:Ap.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}function Pp(i,e,t,n,s,r,o){let a=bu.distanceSqToPoint(i);if(a<t){let l=new F;bu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}function zr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Lp(s))s.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Lp(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Rn(i){let e={};for(let t=0;t<i.length;t++){let n=zr(i[t]);for(let s in n)e[s]=n[s]}return e}function Lp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function qx(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function af(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}function Ks(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ha(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Zx(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Dp(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function $x(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}function Cm(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Jx(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function jx(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Cm(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Jx(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}function Np(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Fp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}function Qx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Es;case"vector":case"vector2":case"vector3":case"vector4":return Qs;case"color":return Ia;case"quaternion":return Ts;case"bool":case"boolean":return bs;case"string":return ws}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function e_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Qx(i.type);if(i.times===void 0){let n=[],s=[];$x(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),ha(i.settings)&&(t.settings={inTangents:Ks(i.settings.inTangents,Float32Array),outTangents:Ks(i.settings.outTangents,Float32Array)}),t}function Up(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}function hf(i,e,t,n){let s=h_(n);switch(t){case Ku:return i*e;case wc:return i*e/s.components*s.byteLength;case Ac:return i*e/s.components*s.byteLength;case er:return i*e*2/s.components*s.byteLength;case Rc:return i*e*2/s.components*s.byteLength;case Zu:return i*e*3/s.components*s.byteLength;case Si:return i*e*4/s.components*s.byteLength;case Cc:return i*e*4/s.components*s.byteLength;case Oa:case Ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case za:case ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pc:case Dc:return Math.max(i,16)*Math.max(e,8)/4;case Ic:case Lc:return Math.max(i,8)*Math.max(e,8)/2;case Nc:case Fc:case Oc:case Bc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Uc:case Ha:case zc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Gc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case qc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Yc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Kc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Zc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case $c:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Jc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case jc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Qc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case eh:case th:case nh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ih:case sh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ga:case rh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function h_(i){switch(i){case $n:case Wu:return{byteLength:1,components:1};case Fo:case Xu:case Bi:return{byteLength:2,components:1};case Ec:case Tc:return{byteLength:2,components:4};case Oi:case bc:case ri:return{byteLength:4,components:1};case qu:case Yu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}var Hp,Iu,Gp,Ua,Vp,Po,ji,yn,At,Nr,Lo,Pu,Lu,Du,Wp,Fr,Xp,qp,Yp,Kp,Zp,$p,Jp,jp,Nu,Fu,Qp,em,tm,nm,im,sm,rm,om,am,ql,Yl,Kl,mo,Zl,$l,Jl,jl,yc,lm,cm,Qi,Uu,Ou,Bu,zu,ku,Hu,Gu,Mu,hm,Vu,Ur,Do,vc,Mc,$s,xi,go,qt,Sc,Or,tn,No,Mi,$n,Wu,Xu,Fo,bc,Oi,ri,Bi,Ec,Tc,Br,qu,Yu,Ku,Zu,Si,ys,Rs,wc,Ac,er,Rc,Cc,Oa,Ba,za,ka,Ic,Pc,Lc,Dc,Nc,Fc,Uc,Oc,Bc,Ha,zc,kc,Hc,Gc,Vc,Wc,Xc,qc,Yc,Kc,Zc,$c,Jc,jc,Qc,eh,th,nh,ih,sh,Ga,rh,um,fm,dm,vr,Mr,Wl,Su,xr,_r,da,oh,pm,$u,Va,Uo,mm,Wa,gm,Cs,Pt,zn,pa,gt,Xl,xm,_m,ym,vm,Ju,Mm,Sm,ju,Qu,ef,Is,tf,_i,xo,tp,yo,wm,Ni,Tn,np,ua,Sr,lh,uf,Xe,fn,ff,F,Jh,ip,df,qe,jh,sp,rp,nt,Qr,Ql,wx,vo,Ax,eu,nn,pf,St,ec,ni,ga,tc,_c,Ve,eo,Pi,Rx,Cx,Vs,yl,ei,op,ap,yi,xa,Ix,lp,to,fs,vl,na,Px,Lx,cp,hp,up,fp,Dx,no,tu,pt,Ot,Nx,Mo,Am,Ws,Ml,Ee,wn,_a,ya,Li,ds,iu,ps,io,so,dp,su,ru,ou,au,lu,cu,Zs,kn,ms,Di,Sl,ro,oo,ao,Xs,qs,dr,ia,bl,El,pr,Jt,Tl,Fx,wt,va,Ma,ct,Ux,sa,uu,Kn,Ox,gi,fu,lo,ti,ra,un,Lt,So,Bn,bo,du,Bx,zx,An,kx,Hn,gs,pu,wl,Al,br,st,mp,mr,Rl,gp,Cl,Il,Pl,mu,Ll,xp,Dl,Ue,oa,_p,yp,Gx,vp,Fl,gu,Mp,xu,Sa,Eo,To,Sp,Vx,ba,vs,co,bp,Ul,Ep,Wx,aa,la,ii,gr,Xx,Ol,Js,Tp,nc,js,ic,sc,wp,ca,Bl,_u,Ap,Er,Rp,Cp,Tr,Ea,wo,Ip,bu,kl,Hl,wr,Ta,si,Ms,wa,Aa,_n,Ra,Zi,Yt,Fi,rc,Gn,Ar,Ss,Kt,Ui,Rm,Yx,Kx,vi,oc,Rr,Vn,Gt,ac,lc,$i,cc,Ca,hc,uc,Zn,bs,Ia,Es,fc,Ts,ws,Qs,Cr,Ki,dc,Im,Ji,xs,Eu,Ao,ho,pc,Pa,Ir,La,yu,Op,Bp,Ro,Gl,Vl,Yi,Da,Ys,zp,kp,en,Tu,Na,wu,Pr,Lr,Au,Dr,As,vu,Fa,uo,fo,Co,mc,gc,lf,t_,cf,n_,i_,s_,r_,o_,a_,l_,Ru,Tt,xc,c_,Io,mf,Cu,gf=On(()=>{Hp=0,Iu=1,Gp=2,Ua=1,Vp=2,Po=3,ji=0,yn=1,At=2,Nr=0,Lo=1,Pu=2,Lu=3,Du=4,Wp=5,Fr=100,Xp=101,qp=102,Yp=103,Kp=104,Zp=200,$p=201,Jp=202,jp=203,Nu=204,Fu=205,Qp=206,em=207,tm=208,nm=209,im=210,sm=211,rm=212,om=213,am=214,ql=0,Yl=1,Kl=2,mo=3,Zl=4,$l=5,Jl=6,jl=7,yc=0,lm=1,cm=2,Qi=0,Uu=1,Ou=2,Bu=3,zu=4,ku=5,Hu=6,Gu=7,Mu="attached",hm="detached",Vu=300,Ur=301,Do=302,vc=303,Mc=304,$s=1e3,xi=1001,go=1002,qt=1003,Sc=1004,Or=1005,tn=1006,No=1007,Mi=1008,$n=1009,Wu=1010,Xu=1011,Fo=1012,bc=1013,Oi=1014,ri=1015,Bi=1016,Ec=1017,Tc=1018,Br=1020,qu=35902,Yu=35899,Ku=1021,Zu=1022,Si=1023,ys=1026,Rs=1027,wc=1028,Ac=1029,er=1030,Rc=1031,Cc=1033,Oa=33776,Ba=33777,za=33778,ka=33779,Ic=35840,Pc=35841,Lc=35842,Dc=35843,Nc=36196,Fc=37492,Uc=37496,Oc=37488,Bc=37489,Ha=37490,zc=37491,kc=37808,Hc=37809,Gc=37810,Vc=37811,Wc=37812,Xc=37813,qc=37814,Yc=37815,Kc=37816,Zc=37817,$c=37818,Jc=37819,jc=37820,Qc=37821,eh=36492,th=36494,nh=36495,ih=36283,sh=36284,Ga=36285,rh=36286,um=2200,fm=2201,dm=2202,vr=2300,Mr=2301,Wl=2302,Su=2303,xr=2400,_r=2401,da=2402,oh=2500,pm=2501,$u=0,Va=1,Uo=2,mm=3200,Wa=0,gm=1,Cs="",Pt="srgb",zn="srgb-linear",pa="linear",gt="srgb",Xl=7680,xm=519,_m=512,ym=513,vm=514,Ju=515,Mm=516,Sm=517,ju=518,Qu=519,ef=35044,Is=35048,tf="300 es",_i=2e3,xo=2001;tp={},yo=null;wm={[ql]:ql,[Kl]:Jl,[Zl]:Zl,[mo]:$l,[Yl]:Yl,[Jl]:Kl,[jl]:jl,[$l]:mo},Ni=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],np=1234567,ua=Math.PI/180,Sr=180/Math.PI;lh={DEG2RAD:ua,RAD2DEG:Sr,generateUUID:es,clamp:rt,euclideanModulo:nf,mapLinear:hx,inverseLerp:ux,lerp:fa,damp:fx,pingpong:dx,smoothstep:px,smootherstep:mx,randInt:gx,randFloat:xx,randFloatSpread:_x,seededRandom:yx,degToRad:vx,radToDeg:Mx,isPowerOfTwo:Sx,ceilPowerOfTwo:bx,floorPowerOfTwo:sf,setQuaternionFromProperEuler:Ex,normalize:of,denormalize:rf},uf=class uf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};uf.prototype.isVector2=!0;Xe=uf,fn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(u!==x||l!==f||c!==d||h!==p){let m=l*f+c*d+h*p+u*x;m<0&&(f=-f,d=-d,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let v=Math.acos(m),w=Math.sin(v);g=Math.sin(g*v)/w,a=Math.sin(a*v)/w,l=l*g+f*a,c=c*g+d*a,h=h*g+p*a,u=u*g+x*a}else{l=l*g+f*a,c=c*g+d*a,h=h*g+p*a,u=u*g+x*a;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+h*u+l*d-c*f,e[t+1]=l*p+h*f+c*u-a*d,e[t+2]=c*p+h*d+a*f-l*u,e[t+3]=h*p-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ff=class ff{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ip.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ip.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jh.copy(this).projectOnVector(e),this.sub(Jh)}reflect(e){return this.sub(Jh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ff.prototype.isVector3=!0;F=ff,Jh=new F,ip=new fn,df=class df{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],x=s[0],m=s[3],g=s[6],v=s[1],w=s[4],S=s[7],A=s[2],R=s[5],y=s[8];return r[0]=o*x+a*v+l*A,r[3]=o*m+a*w+l*R,r[6]=o*g+a*S+l*y,r[1]=c*x+h*v+u*A,r[4]=c*m+h*w+u*R,r[7]=c*g+h*S+u*y,r[2]=f*x+d*v+p*A,r[5]=f*m+d*w+p*R,r[8]=f*g+d*S+p*y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,p=t*u+n*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=f*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return yr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jh.makeScale(e,t)),this}rotate(e){return yr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jh.makeRotation(-e)),this}translate(e,t){return yr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};df.prototype.isMatrix3=!0;qe=df,jh=new qe,sp=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rp=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);nt=Tx();Ql=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Qr===void 0&&(Qr=_o("canvas")),Qr.width=e.width,Qr.height=e.height;let s=Qr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Qr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=_o("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=_s(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_s(t[n]/255)*255):t[n]=_s(t[n]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},wx=0,vo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=es(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Qh(s[o].image)):r.push(Qh(s[o]))}else r=Qh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};Ax=0,eu=new F,nn=class i extends Ni{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=xi,s=xi,r=tn,o=Mi,a=Si,l=$n,c=i.DEFAULT_ANISOTROPY,h=Cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=es(),this.name="",this.source=new vo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(eu).x}get height(){return this.source.getSize(eu).y}get depth(){return this.source.getSize(eu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $s:e.x=e.x-Math.floor(e.x);break;case xi:e.x=e.x<0?0:1;break;case go:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $s:e.y=e.y-Math.floor(e.y);break;case xi:e.y=e.y<0?0:1;break;case go:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Vu;nn.DEFAULT_ANISOTROPY=1;pf=class pf{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,S=(d+1)/2,A=(g+1)/2,R=(h+f)/4,y=(u+x)/4,T=(p+m)/4;return w>S&&w>A?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=R/n,r=y/n):S>A?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=R/s,r=T/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=y/r,s=T/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-p)*(m-p)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(u-x)/v,this.z=(f-h)/v,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};pf.prototype.isVector4=!0;St=pf,ec=class extends Ni{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new nn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new vo(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ni=class extends ec{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ga=class extends nn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},tc=class extends nn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},_c=class _c{constructor(e,t,n,s,r,o,a,l,c,h,u,f,d,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,f,d,p,x,m)}set(e,t,n,s,r,o,a,l,c,h,u,f,d,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _c().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/eo.setFromMatrixColumn(e,0).length(),r=1/eo.setFromMatrixColumn(e,1).length(),o=1/eo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,p=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+p*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,p=c*h,x=c*u;t[0]=f+x*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-p,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,p=c*h,x=c*u;t[0]=f-x*a,t[4]=-o*u,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,p=a*h,x=a*u;t[0]=l*h,t[4]=p*c-d,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=x-f*u,t[8]=p*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+p,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*l,d=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=o*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rx,e,Cx)}lookAt(e,t,n){let s=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Vs.crossVectors(n,ei),Vs.lengthSq()===0&&(Math.abs(n.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Vs.crossVectors(n,ei)),Vs.normalize(),yl.crossVectors(ei,Vs),s[0]=Vs.x,s[4]=yl.x,s[8]=ei.x,s[1]=Vs.y,s[5]=yl.y,s[9]=ei.y,s[2]=Vs.z,s[6]=yl.z,s[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],x=n[6],m=n[10],g=n[14],v=n[3],w=n[7],S=n[11],A=n[15],R=s[0],y=s[4],T=s[8],N=s[12],C=s[1],P=s[5],O=s[9],z=s[13],L=s[2],W=s[6],Z=s[10],q=s[14],re=s[3],K=s[7],ne=s[11],se=s[15];return r[0]=o*R+a*C+l*L+c*re,r[4]=o*y+a*P+l*W+c*K,r[8]=o*T+a*O+l*Z+c*ne,r[12]=o*N+a*z+l*q+c*se,r[1]=h*R+u*C+f*L+d*re,r[5]=h*y+u*P+f*W+d*K,r[9]=h*T+u*O+f*Z+d*ne,r[13]=h*N+u*z+f*q+d*se,r[2]=p*R+x*C+m*L+g*re,r[6]=p*y+x*P+m*W+g*K,r[10]=p*T+x*O+m*Z+g*ne,r[14]=p*N+x*z+m*q+g*se,r[3]=v*R+w*C+S*L+A*re,r[7]=v*y+w*P+S*W+A*K,r[11]=v*T+w*O+S*Z+A*ne,r[15]=v*N+w*z+S*q+A*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],x=e[7],m=e[11],g=e[15],v=l*d-c*f,w=a*d-c*u,S=a*f-l*u,A=o*d-c*h,R=o*f-l*h,y=o*u-a*h;return t*(x*v-m*w+g*S)-n*(p*v-m*A+g*R)+s*(p*w-x*A+g*y)-r*(p*S-x*R+m*y)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],x=e[13],m=e[14],g=e[15],v=t*a-n*o,w=t*l-s*o,S=t*c-r*o,A=n*l-s*a,R=n*c-r*a,y=s*c-r*l,T=h*x-u*p,N=h*m-f*p,C=h*g-d*p,P=u*m-f*x,O=u*g-d*x,z=f*g-d*m,L=v*z-w*O+S*P+A*C-R*N+y*T;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/L;return e[0]=(a*z-l*O+c*P)*W,e[1]=(s*O-n*z-r*P)*W,e[2]=(x*y-m*R+g*A)*W,e[3]=(f*R-u*y-d*A)*W,e[4]=(l*C-o*z-c*N)*W,e[5]=(t*z-s*C+r*N)*W,e[6]=(m*S-p*y-g*w)*W,e[7]=(h*y-f*S+d*w)*W,e[8]=(o*O-a*C+c*T)*W,e[9]=(n*C-t*O-r*T)*W,e[10]=(p*R-x*S+g*v)*W,e[11]=(u*S-h*R-d*v)*W,e[12]=(a*N-o*P-l*T)*W,e[13]=(t*P-n*N+s*T)*W,e[14]=(x*w-p*A-m*v)*W,e[15]=(h*A-u*w+f*v)*W,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,p=r*u,x=o*h,m=o*u,g=a*u,v=l*c,w=l*h,S=l*u,A=n.x,R=n.y,y=n.z;return s[0]=(1-(x+g))*A,s[1]=(d+S)*A,s[2]=(p-w)*A,s[3]=0,s[4]=(d-S)*R,s[5]=(1-(f+g))*R,s[6]=(m+v)*R,s[7]=0,s[8]=(p+w)*y,s[9]=(m-v)*y,s[10]=(1-(f+x))*y,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=eo.set(s[0],s[1],s[2]).length(),a=eo.set(s[4],s[5],s[6]).length(),l=eo.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Pi.copy(this);let c=1/o,h=1/a,u=1/l;return Pi.elements[0]*=c,Pi.elements[1]*=c,Pi.elements[2]*=c,Pi.elements[4]*=h,Pi.elements[5]*=h,Pi.elements[6]*=h,Pi.elements[8]*=u,Pi.elements[9]*=u,Pi.elements[10]*=u,t.setFromRotationMatrix(Pi),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=_i,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===_i)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===xo)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=_i,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===_i)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===xo)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};_c.prototype.isMatrix4=!0;Ve=_c,eo=new F,Pi=new Ve,Rx=new F(0,0,0),Cx=new F(1,1,1),Vs=new F,yl=new F,ei=new F,op=new Ve,ap=new fn,yi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return op.makeRotationFromQuaternion(e),this.setFromRotationMatrix(op,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ap.setFromEuler(this),this.setFromQuaternion(ap,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};yi.DEFAULT_ORDER="XYZ";xa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ix=0,lp=new F,to=new fn,fs=new Ve,vl=new F,na=new F,Px=new F,Lx=new fn,cp=new F(1,0,0),hp=new F(0,1,0),up=new F(0,0,1),fp={type:"added"},Dx={type:"removed"},no={type:"childadded",child:null},tu={type:"childremoved",child:null},pt=class i extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ix++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new yi,n=new fn,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new qe}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return to.setFromAxisAngle(e,t),this.quaternion.multiply(to),this}rotateOnWorldAxis(e,t){return to.setFromAxisAngle(e,t),this.quaternion.premultiply(to),this}rotateX(e){return this.rotateOnAxis(cp,e)}rotateY(e){return this.rotateOnAxis(hp,e)}rotateZ(e){return this.rotateOnAxis(up,e)}translateOnAxis(e,t){return lp.copy(e).applyQuaternion(this.quaternion),this.position.add(lp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cp,e)}translateY(e){return this.translateOnAxis(hp,e)}translateZ(e){return this.translateOnAxis(up,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vl.copy(e):vl.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fs.lookAt(na,vl,this.up):fs.lookAt(vl,na,this.up),this.quaternion.setFromRotationMatrix(fs),s&&(fs.extractRotation(s.matrixWorld),to.setFromRotationMatrix(fs),this.quaternion.premultiply(to.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ge("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fp),no.child=e,this.dispatchEvent(no),no.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dx),tu.child=e,this.dispatchEvent(tu),tu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fs.multiply(e.parent.matrixWorld)),e.applyMatrix4(fs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fp),no.child=e,this.dispatchEvent(no),no.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,e,Px),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,Lx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};pt.DEFAULT_UP=new F(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Ot=class extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Nx={type:"move"},Mo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Nx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ot;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Am={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ws={h:0,s:0,l:0},Ml={h:0,s:0,l:0};Ee=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=nt.workingColorSpace){if(e=nf(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=nu(o,r,e+1/3),this.g=nu(o,r,e),this.b=nu(o,r,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,t=Pt){function n(r){r!==void 0&&parseFloat(r)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){let n=Am[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}copyLinearToSRGB(e){return this.r=po(e.r),this.g=po(e.g),this.b=po(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return nt.workingToColorSpace(wn.copy(this),e),Math.round(rt(wn.r*255,0,255))*65536+Math.round(rt(wn.g*255,0,255))*256+Math.round(rt(wn.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(wn.copy(this),t);let n=wn.r,s=wn.g,r=wn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=Pt){nt.workingToColorSpace(wn.copy(this),e);let t=wn.r,n=wn.g,s=wn.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ws),this.setHSL(Ws.h+e,Ws.s+t,Ws.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ws),e.getHSL(Ml);let n=fa(Ws.h,Ml.h,t),s=fa(Ws.s,Ml.s,t),r=fa(Ws.l,Ml.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wn=new Ee;Ee.NAMES=Am;_a=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ee(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ya=class extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Li=new F,ds=new F,iu=new F,ps=new F,io=new F,so=new F,dp=new F,su=new F,ru=new F,ou=new F,au=new St,lu=new St,cu=new St,Zs=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Li.subVectors(e,t),s.cross(Li);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Li.subVectors(s,t),ds.subVectors(n,t),iu.subVectors(e,t);let o=Li.dot(Li),a=Li.dot(ds),l=Li.dot(iu),c=ds.dot(ds),h=ds.dot(iu),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ps)===null?!1:ps.x>=0&&ps.y>=0&&ps.x+ps.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,ps)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ps.x),l.addScaledVector(o,ps.y),l.addScaledVector(a,ps.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return au.setScalar(0),lu.setScalar(0),cu.setScalar(0),au.fromBufferAttribute(e,t),lu.fromBufferAttribute(e,n),cu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(au,r.x),o.addScaledVector(lu,r.y),o.addScaledVector(cu,r.z),o}static isFrontFacing(e,t,n,s){return Li.subVectors(n,t),ds.subVectors(e,t),Li.cross(ds).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),ds.subVectors(this.a,this.b),Li.cross(ds).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;io.subVectors(s,n),so.subVectors(r,n),su.subVectors(e,n);let l=io.dot(su),c=so.dot(su);if(l<=0&&c<=0)return t.copy(n);ru.subVectors(e,s);let h=io.dot(ru),u=so.dot(ru);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(n).addScaledVector(io,o);ou.subVectors(e,r);let d=io.dot(ou),p=so.dot(ou);if(p>=0&&d<=p)return t.copy(r);let x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(so,a);let m=h*p-d*u;if(m<=0&&u-h>=0&&d-p>=0)return dp.subVectors(r,s),a=(u-h)/(u-h+(d-p)),t.copy(s).addScaledVector(dp,a);let g=1/(m+x+f);return o=x*g,a=f*g,t.copy(n).addScaledVector(io,o).addScaledVector(so,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},kn=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Di):Di.fromBufferAttribute(r,o),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sl.copy(n.boundingBox)),Sl.applyMatrix4(e.matrixWorld),this.union(Sl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ia),bl.subVectors(this.max,ia),ro.subVectors(e.a,ia),oo.subVectors(e.b,ia),ao.subVectors(e.c,ia),Xs.subVectors(oo,ro),qs.subVectors(ao,oo),dr.subVectors(ro,ao);let t=[0,-Xs.z,Xs.y,0,-qs.z,qs.y,0,-dr.z,dr.y,Xs.z,0,-Xs.x,qs.z,0,-qs.x,dr.z,0,-dr.x,-Xs.y,Xs.x,0,-qs.y,qs.x,0,-dr.y,dr.x,0];return!hu(t,ro,oo,ao,bl)||(t=[1,0,0,0,1,0,0,0,1],!hu(t,ro,oo,ao,bl))?!1:(El.crossVectors(Xs,qs),t=[El.x,El.y,El.z],hu(t,ro,oo,ao,bl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ms[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ms[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ms[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ms[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ms[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ms[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ms[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ms[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ms),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ms=[new F,new F,new F,new F,new F,new F,new F,new F],Di=new F,Sl=new kn,ro=new F,oo=new F,ao=new F,Xs=new F,qs=new F,dr=new F,ia=new F,bl=new F,El=new F,pr=new F;Jt=new F,Tl=new Xe,Fx=0,wt=class extends Ni{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ef,this.updateRanges=[],this.gpuType=ri,this.version=0,this._normalizationScale=e!==void 0?ah(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Tl.fromBufferAttribute(this,t),Tl.applyMatrix3(e),this.setXY(t,Tl.x,Tl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):rf(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):of(e,this.array)}},va=class extends wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Ma=class extends wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},ct=class extends wt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ux=new kn,sa=new F,uu=new F,Kn=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ux.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sa.subVectors(e,this.center);let t=sa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(sa,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sa.copy(e.center).add(uu)),this.expandByPoint(sa.copy(e.center).sub(uu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ox=0,gi=new Ve,fu=new pt,lo=new F,ti=new kn,ra=new kn,un=new F,Lt=class i extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ox++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lx(e)?Ma:va)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return gi.makeRotationFromQuaternion(e),this.applyMatrix4(gi),this}rotateX(e){return gi.makeRotationX(e),this.applyMatrix4(gi),this}rotateY(e){return gi.makeRotationY(e),this.applyMatrix4(gi),this}rotateZ(e){return gi.makeRotationZ(e),this.applyMatrix4(gi),this}translate(e,t,n){return gi.makeTranslation(e,t,n),this.applyMatrix4(gi),this}scale(e,t,n){return gi.makeScale(e,t,n),this.applyMatrix4(gi),this}lookAt(e){return fu.lookAt(e),fu.updateMatrix(),this.applyMatrix4(fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lo).negate(),this.translate(lo.x,lo.y,lo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ct(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];ti.setFromBufferAttribute(r),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ra.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(ti.min,ra.min),ti.expandByPoint(un),un.addVectors(ti.max,ra.max),ti.expandByPoint(un)):(ti.expandByPoint(ra.min),ti.expandByPoint(ra.max))}ti.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)un.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(un));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)un.fromBufferAttribute(a,c),l&&(lo.fromBufferAttribute(e,c),un.add(lo)),s=Math.max(s,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new wt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let N=0;N<n.count;N++)a[N]=new F,l[N]=new F;let h=new F,u=new F,f=new F,d=new Xe,p=new Xe,x=new Xe,m=new F,g=new F;function v(N,C,P){c[N]=c[C]=c[P]=1,h.fromBufferAttribute(n,N),u.fromBufferAttribute(n,C),f.fromBufferAttribute(n,P),d.fromBufferAttribute(r,N),p.fromBufferAttribute(r,C),x.fromBufferAttribute(r,P),u.sub(h),f.sub(h),p.sub(d),x.sub(d);let O=1/(p.x*x.y-x.x*p.y);isFinite(O)&&(m.copy(u).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(O),g.copy(f).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(O),a[N].add(m),a[C].add(m),a[P].add(m),l[N].add(g),l[C].add(g),l[P].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let N=0,C=w.length;N<C;++N){let P=w[N],O=P.start,z=P.count;for(let L=O,W=O+z;L<W;L+=3)v(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let S=new F,A=new F,R=new F,y=new F;function T(N){R.fromBufferAttribute(s,N),y.copy(R);let C=a[N];S.copy(C),S.sub(R.multiplyScalar(R.dot(C))).normalize(),A.crossVectors(y,C);let O=A.dot(l[N])<0?-1:1;o.setXYZW(N,S.x,S.y,S.z,O)}for(let N=0,C=n.count;N<C;++N)c[N]&&T(N);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,h=new F,u=new F;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let g=0;g<h;g++)f[p++]=c[d++]}return new wt(f,h,u)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},So=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ef,this.updateRanges=[],this.version=0,this.uuid=es()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=pp(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=pp(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};Bn=new F,bo=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?ah(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Bn.fromBufferAttribute(this,t),Bn.applyMatrix4(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bn.fromBufferAttribute(this,t),Bn.applyNormalMatrix(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bn.fromBufferAttribute(this,t),Bn.transformDirection(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ma("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ma("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):rf(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):of(e,this.data.array)}},du=new F,Bx=new F,zx=new qe,An=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=du.subVectors(n,t).cross(Bx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(du),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||zx.getNormalMatrix(e),s=this.coplanarPoint(du).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},kx=0,Hn=class extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kx++}),this.uuid=es(),this.name="",this.type="Material",this.blending=Lo,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nu,this.blendDst=Fu,this.blendEquation=Fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xl,this.stencilZFail=Xl,this.stencilZPass=Xl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ee().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new An().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Xe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},gs=new F,pu=new F,wl=new F,Al=new F,br=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=gs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gs.copy(this.origin).addScaledVector(this.direction,t),gs.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){pu.copy(e).add(t).multiplyScalar(.5),wl.copy(t).sub(e).normalize(),Al.copy(this.origin).sub(pu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(wl),a=Al.dot(this.direction),l=-Al.dot(wl),c=Al.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=r*h,u>=0)if(f>=-p)if(f<=p){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(pu).addScaledVector(wl,f),d}intersectSphere(e,t){if(e.radius<0)return null;gs.subVectors(e.center,this.origin);let n=gs.dot(this.direction),s=gs.dot(gs)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,gs)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=e.x-o.x,f=e.y-o.y,d=e.z-o.z,p=t.x-o.x,x=t.y-o.y,m=t.z-o.z,g=n.x-o.x,v=n.y-o.y,w=n.z-o.z,S=Math.abs(l),A=Math.abs(c),R=Math.abs(h),y,T,N,C,P,O,z,L,W,Z,q,re;if(S>=A&&S>=R?(N=l,O=u,W=p,re=g,l>=0?(y=c,T=h,C=f,P=d,z=x,L=m,Z=v,q=w):(y=h,T=c,C=d,P=f,z=m,L=x,Z=w,q=v)):A>=R?(N=c,O=f,W=x,re=v,c>=0?(y=h,T=l,C=d,P=u,z=m,L=p,Z=w,q=g):(y=l,T=h,C=u,P=d,z=p,L=m,Z=g,q=w)):(N=h,O=d,W=m,re=w,h>=0?(y=l,T=c,C=u,P=f,z=p,L=x,Z=g,q=v):(y=c,T=l,C=f,P=u,z=x,L=p,Z=v,q=g)),N===0)return null;let K=y/N,ne=T/N,se=1/N,Ie=C-K*O,Ze=P-ne*O,j=z-K*W,Me=L-ne*W,we=Z-K*re,Oe=q-ne*re,Se=we*Me-Oe*j,Je=Ie*Oe-Ze*we,Zt=j*Ze-Me*Ie;if(s){if(Se<0||Je<0||Zt<0)return null}else if((Se<0||Je<0||Zt<0)&&(Se>0||Je>0||Zt>0))return null;let ke=Se+Je+Zt;if(ke===0)return null;let vt=se*(Se*O+Je*W+Zt*re);return(ke>0?vt<0:vt>0)?null:this.at(vt/ke,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},st=class extends Hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},mp=new Ve,mr=new br,Rl=new Kn,gp=new F,Cl=new F,Il=new F,Pl=new F,mu=new F,Ll=new F,xp=new F,Dl=new F,Ue=class extends pt{constructor(e=new Lt,t=new st){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ll.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(mu.fromBufferAttribute(u,e),o?Ll.addScaledVector(mu,h):Ll.addScaledVector(mu.sub(t),h))}t.add(Ll)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rl.copy(n.boundingSphere),Rl.applyMatrix4(r),mr.copy(e.ray).recast(e.near),!(Rl.containsPoint(mr.origin)===!1&&(mr.intersectSphere(Rl,gp)===null||mr.origin.distanceToSquared(gp)>(e.far-e.near)**2))&&(mp.copy(r).invert(),mr.copy(e.ray).applyMatrix4(mp),!(n.boundingBox!==null&&mr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mr)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],v=Math.max(m.start,d.start),w=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let S=v,A=w;S<A;S+=3){let R=a.getX(S),y=a.getX(S+1),T=a.getX(S+2);s=Nl(this,g,e,n,c,h,u,R,y,T),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=p,g=x;m<g;m+=3){let v=a.getX(m),w=a.getX(m+1),S=a.getX(m+2);s=Nl(this,o,e,n,c,h,u,v,w,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],v=Math.max(m.start,d.start),w=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=v,A=w;S<A;S+=3){let R=S,y=S+1,T=S+2;s=Nl(this,g,e,n,c,h,u,R,y,T),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=p,g=x;m<g;m+=3){let v=m,w=m+1,S=m+2;s=Nl(this,o,e,n,c,h,u,v,w,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};oa=new St,_p=new St,yp=new St,Gx=new St,vp=new Ve,Fl=new F,gu=new Kn,Mp=new Ve,xu=new br,Sa=class extends Ue{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Mu,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new kn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Fl),this.boundingBox.expandByPoint(Fl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Kn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Fl),this.boundingSphere.expandByPoint(Fl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gu.copy(this.boundingSphere),gu.applyMatrix4(s),e.ray.intersectsSphere(gu)!==!1&&(Mp.copy(s).invert(),xu.copy(e.ray).applyMatrix4(Mp),!(this.boundingBox!==null&&xu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,xu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new St,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Mu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===hm?this.bindMatrixInverse.copy(this.bindMatrix).invert():Le("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;_p.fromBufferAttribute(s.attributes.skinIndex,e),yp.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(oa.copy(t),t.set(0,0,0,0)):(oa.set(t.x,t.y,t.z,1),t.set(0,0,0)),oa.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=yp.getComponent(r);if(o!==0){let a=_p.getComponent(r);vp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Gx.copy(oa).applyMatrix4(vp),o)}}return t.isVector4&&(t.w=oa.w),t.applyMatrix4(this.bindMatrixInverse)}},Eo=class extends pt{constructor(){super(),this.isBone=!0,this.type="Bone"}},To=class extends nn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=qt,h=qt,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Sp=new Ve,Vx=new Ve,ba=class i{constructor(e=[],t=[]){this.uuid=es(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Le("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Vx;Sp.multiplyMatrices(a,t[r]),Sp.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new To(t,e,e,Si,ri);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(Le("Skeleton: No bone found with UUID:",r),o=new Eo),this.bones.push(o),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},vs=class extends wt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},co=new Ve,bp=new Ve,Ul=[],Ep=new kn,Wx=new Ve,aa=new Ue,la=new Kn,ii=class extends Ue{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Wx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new kn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,co),Ep.copy(e.boundingBox).applyMatrix4(co),this.boundingBox.union(Ep)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,co),la.copy(e.boundingSphere).applyMatrix4(co),this.boundingSphere.union(la)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(aa.geometry=this.geometry,aa.material=this.material,aa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),la.copy(this.boundingSphere),la.applyMatrix4(n),e.ray.intersectsSphere(la)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,co),bp.multiplyMatrices(n,co),aa.matrixWorld=bp,aa.raycast(e,Ul);for(let o=0,a=Ul.length;o<a;o++){let l=Ul[o];l.instanceId=r,l.object=this,t.push(l)}Ul.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new vs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new To(new Float32Array(s*this.count),s,this.count,wc,ri));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},gr=new Kn,Xx=new Xe(.5,.5),Ol=new F,Js=class{constructor(e=new An,t=new An,n=new An,s=new An,r=new An,o=new An){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=_i,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],x=r[9],m=r[10],g=r[11],v=r[12],w=r[13],S=r[14],A=r[15];if(s[0].setComponents(c-o,d-h,g-p,A-v).normalize(),s[1].setComponents(c+o,d+h,g+p,A+v).normalize(),s[2].setComponents(c+a,d+u,g+x,A+w).normalize(),s[3].setComponents(c-a,d-u,g-x,A-w).normalize(),n)s[4].setComponents(l,f,m,S).normalize(),s[5].setComponents(c-l,d-f,g-m,A-S).normalize();else if(s[4].setComponents(c-l,d-f,g-m,A-S).normalize(),t===_i)s[5].setComponents(c+l,d+f,g+m,A+S).normalize();else if(t===xo)s[5].setComponents(l,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){gr.center.set(0,0,0);let t=Xx.distanceTo(e.center);return gr.radius=.7071067811865476+t,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ol.x=s.normal.x>0?e.max.x:e.min.x,Ol.y=s.normal.y>0?e.max.y:e.min.y,Ol.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ol)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Tp=new Ve,nc=class i{constructor(){this.coordinateSystem=_i,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Tp.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Js),n[s].setFromProjectionMatrix(Tp,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Js),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}},js=class extends Hn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ic=new F,sc=new F,wp=new Ve,ca=new br,Bl=new Kn,_u=new F,Ap=new F,Er=class extends pt{constructor(e=new Lt,t=new js){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ic.fromBufferAttribute(t,s-1),sc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ic.distanceTo(sc);e.setAttribute("lineDistance",new ct(n,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bl.copy(n.boundingSphere),Bl.applyMatrix4(s),Bl.radius+=r,e.ray.intersectsSphere(Bl)===!1)return;wp.copy(s).invert(),ca.copy(e.ray).applyMatrix4(wp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=d,m=p-1;x<m;x+=c){let g=h.getX(x),v=h.getX(x+1),w=zl(this,e,ca,l,g,v,x);w&&t.push(w)}if(this.isLineLoop){let x=h.getX(p-1),m=h.getX(d),g=zl(this,e,ca,l,x,m,p-1);g&&t.push(g)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=d,m=p-1;x<m;x+=c){let g=zl(this,e,ca,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=zl(this,e,ca,l,p-1,d,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};Rp=new F,Cp=new F,Tr=class extends Er{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Rp.fromBufferAttribute(t,s),Cp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Rp.distanceTo(Cp);e.setAttribute("lineDistance",new ct(n,1))}else Le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ea=class extends Er{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},wo=class extends Hn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ip=new Ve,bu=new br,kl=new Kn,Hl=new F,wr=class extends pt{constructor(e=new Lt,t=new wo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kl.copy(n.boundingSphere),kl.applyMatrix4(s),kl.radius+=r,e.ray.intersectsSphere(kl)===!1)return;Ip.copy(s).invert(),bu.copy(e.ray).applyMatrix4(Ip);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,x=d;p<x;p++){let m=c.getX(p);Hl.fromBufferAttribute(u,m),Pp(Hl,m,l,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,x=d;p<x;p++)Hl.fromBufferAttribute(u,p),Pp(Hl,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};Ta=class extends nn{constructor(e=[],t=Ur,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},si=class extends nn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ms=class extends nn{constructor(e,t,n=Oi,s,r,o,a=qt,l=qt,c,h=ys,u=1){if(h!==ys&&h!==Rs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},wa=class extends Ms{constructor(e,t=Oi,n=Ur,s,r,o=qt,a=qt,l,c=ys){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Aa=class extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},_n=class i extends Lt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(u,2));function p(x,m,g,v,w,S,A,R,y,T,N){let C=S/y,P=A/T,O=S/2,z=A/2,L=R/2,W=y+1,Z=T+1,q=0,re=0,K=new F;for(let ne=0;ne<Z;ne++){let se=ne*P-z;for(let Ie=0;Ie<W;Ie++){let Ze=Ie*C-O;K[x]=Ze*v,K[m]=se*w,K[g]=L,c.push(K.x,K.y,K.z),K[x]=0,K[m]=0,K[g]=R>0?1:-1,h.push(K.x,K.y,K.z),u.push(Ie/y),u.push(1-ne/T),q+=1}}for(let ne=0;ne<T;ne++)for(let se=0;se<y;se++){let Ie=f+se+W*ne,Ze=f+se+W*(ne+1),j=f+(se+1)+W*(ne+1),Me=f+(se+1)+W*ne;l.push(Ie,Ze,Me),l.push(Ze,j,Me),re+=6}a.addGroup(d,re,N),d+=re,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ra=class i extends Lt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,p=n*2+r,x=s+1,m=new F,g=new F;for(let v=0;v<=p;v++){let w=0,S=0,A=0,R=0;if(v<=n){let N=v/n,C=N*Math.PI/2;S=-h-e*Math.cos(C),A=e*Math.sin(C),R=-e*Math.cos(C),w=N*u}else if(v<=n+r){let N=(v-n)/r;S=-h+N*t,A=e,R=0,w=u+N*f}else{let N=(v-n-r)/n,C=N*Math.PI/2;S=h+e*Math.sin(C),A=e*Math.cos(C),R=e*Math.sin(C),w=u+f+N*u}let y=Math.max(0,Math.min(1,w/d)),T=0;v===0?T=.5/s:v===p&&(T=-.5/s);for(let N=0;N<=s;N++){let C=N/s,P=C*Math.PI*2,O=Math.sin(P),z=Math.cos(P);g.x=-A*z,g.y=S,g.z=A*O,a.push(g.x,g.y,g.z),m.set(-A*z,R,A*O),m.normalize(),l.push(m.x,m.y,m.z),c.push(C+T,y)}if(v>0){let N=(v-1)*x;for(let C=0;C<s;C++){let P=N+C,O=N+C+1,z=v*x+C,L=v*x+C+1;o.push(P,O,z),o.push(O,L,z)}}}this.setIndex(o),this.setAttribute("position",new ct(a,3)),this.setAttribute("normal",new ct(l,3)),this.setAttribute("uv",new ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Zi=class i extends Lt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new F,h=new Xe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ct(o,3)),this.setAttribute("normal",new ct(a,3)),this.setAttribute("uv",new ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Yt=class i extends Lt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,x=[],m=n/2,g=0;v(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ct(u,3)),this.setAttribute("normal",new ct(f,3)),this.setAttribute("uv",new ct(d,2));function v(){let S=new F,A=new F,R=0,y=(t-e)/n;for(let T=0;T<=r;T++){let N=[],C=T/r,P=C*(t-e)+e;for(let O=0;O<=s;O++){let z=O/s,L=z*l+a,W=Math.sin(L),Z=Math.cos(L);A.x=P*W,A.y=-C*n+m,A.z=P*Z,u.push(A.x,A.y,A.z),S.set(W,y,Z).normalize(),f.push(S.x,S.y,S.z),d.push(z,1-C),N.push(p++)}x.push(N)}for(let T=0;T<s;T++)for(let N=0;N<r;N++){let C=x[N][T],P=x[N+1][T],O=x[N+1][T+1],z=x[N][T+1];(e>0||N!==0)&&(h.push(C,P,z),R+=3),(t>0||N!==r-1)&&(h.push(P,O,z),R+=3)}c.addGroup(g,R,0),g+=R}function w(S){let A=p,R=new Xe,y=new F,T=0,N=S===!0?e:t,C=S===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*C,0),f.push(0,C,0),d.push(.5,.5),p++;let P=p;for(let O=0;O<=s;O++){let L=O/s*l+a,W=Math.cos(L),Z=Math.sin(L);y.x=N*Z,y.y=m*C,y.z=N*W,u.push(y.x,y.y,y.z),f.push(0,C,0),R.x=W*.5+.5,R.y=Z*.5*C+.5,d.push(R.x,R.y),p++}for(let O=0;O<s;O++){let z=A+O,L=P+O;S===!0?h.push(L,L+1,z):h.push(L+1,L,z),T+=3}c.addGroup(g,T,S===!0?1:2),g+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Fi=class i extends Yt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},rc=class i extends Lt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new ct(r,3)),this.setAttribute("normal",new ct(r.slice(),3)),this.setAttribute("uv",new ct(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let w=new F,S=new F,A=new F;for(let R=0;R<t.length;R+=3)d(t[R+0],w),d(t[R+1],S),d(t[R+2],A),l(w,S,A,v)}function l(v,w,S,A){let R=A+1,y=[];for(let T=0;T<=R;T++){y[T]=[];let N=v.clone().lerp(S,T/R),C=w.clone().lerp(S,T/R),P=R-T;for(let O=0;O<=P;O++)O===0&&T===R?y[T][O]=N:y[T][O]=N.clone().lerp(C,O/P)}for(let T=0;T<R;T++)for(let N=0;N<2*(R-T)-1;N++){let C=Math.floor(N/2);N%2===0?(f(y[T][C+1]),f(y[T+1][C]),f(y[T][C])):(f(y[T][C+1]),f(y[T+1][C+1]),f(y[T+1][C]))}}function c(v){let w=new F;for(let S=0;S<r.length;S+=3)w.x=r[S+0],w.y=r[S+1],w.z=r[S+2],w.normalize().multiplyScalar(v),r[S+0]=w.x,r[S+1]=w.y,r[S+2]=w.z}function h(){let v=new F;for(let w=0;w<r.length;w+=3){v.x=r[w+0],v.y=r[w+1],v.z=r[w+2];let S=m(v)/2/Math.PI+.5,A=g(v)/Math.PI+.5;o.push(S,1-A)}p(),u()}function u(){for(let v=0;v<o.length;v+=6){let w=o[v+0],S=o[v+2],A=o[v+4],R=Math.max(w,S,A),y=Math.min(w,S,A);R>.9&&y<.1&&(w<.2&&(o[v+0]+=1),S<.2&&(o[v+2]+=1),A<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,w){let S=v*3;w.x=e[S+0],w.y=e[S+1],w.z=e[S+2]}function p(){let v=new F,w=new F,S=new F,A=new F,R=new Xe,y=new Xe,T=new Xe;for(let N=0,C=0;N<r.length;N+=9,C+=6){v.set(r[N+0],r[N+1],r[N+2]),w.set(r[N+3],r[N+4],r[N+5]),S.set(r[N+6],r[N+7],r[N+8]),R.set(o[C+0],o[C+1]),y.set(o[C+2],o[C+3]),T.set(o[C+4],o[C+5]),A.copy(v).add(w).add(S).divideScalar(3);let P=m(A);x(R,C+0,v,P),x(y,C+2,w,P),x(T,C+4,S,P)}}function x(v,w,S,A){A<0&&v.x===1&&(o[w]=v.x-1),S.x===0&&S.z===0&&(o[w]=A/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},Gn=class i extends rc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ar=class i extends Lt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,d=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let v=g*f-o;for(let w=0;w<c;w++){let S=w*u-r;p.push(S,-v,0),x.push(0,0,1),m.push(w/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){let w=v+c*g,S=v+c*(g+1),A=v+1+c*(g+1),R=v+1+c*g;d.push(w,S,R),d.push(S,A,R)}this.setIndex(d),this.setAttribute("position",new ct(p,3)),this.setAttribute("normal",new ct(x,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ss=class i extends Lt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,f=(t-e)/s,d=new F,p=new Xe;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let g=r+m/n*o;d.x=u*Math.cos(g),d.y=u*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,h.push(p.x,p.y)}u+=f}for(let x=0;x<s;x++){let m=x*(n+1);for(let g=0;g<n;g++){let v=g+m,w=v,S=v+n+1,A=v+n+2,R=v+1;a.push(w,S,R),a.push(S,A,R)}}this.setIndex(a),this.setAttribute("position",new ct(l,3)),this.setAttribute("normal",new ct(c,3)),this.setAttribute("uv",new ct(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Kt=class i extends Lt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new F,f=new F,d=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){let v=[],w=g/n,S=o+w*a,A=e*Math.cos(S),R=Math.sqrt(e*e-A*A),y=0;g===0&&o===0?y=.5/t:g===n&&l===Math.PI&&(y=-.5/t);for(let T=0;T<=t;T++){let N=T/t,C=s+N*r;u.x=-R*Math.cos(C),u.y=A,u.z=R*Math.sin(C),p.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(N+y,1-w),v.push(c++)}h.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){let w=h[g][v+1],S=h[g][v],A=h[g+1][v],R=h[g+1][v+1];(g!==0||o>0)&&d.push(w,S,R),(g!==n-1||l<Math.PI)&&d.push(S,A,R)}this.setIndex(d),this.setAttribute("position",new ct(p,3)),this.setAttribute("normal",new ct(x,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Ui=class i extends Lt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=new F,d=new F,p=new F;for(let x=0;x<=n;x++){let m=o+x/n*a;for(let g=0;g<=s;g++){let v=g/s*r;d.x=(e+t*Math.cos(m))*Math.cos(v),d.y=(e+t*Math.cos(m))*Math.sin(v),d.z=t*Math.sin(m),c.push(d.x,d.y,d.z),f.x=e*Math.cos(v),f.y=e*Math.sin(v),p.subVectors(d,f).normalize(),h.push(p.x,p.y,p.z),u.push(g/s),u.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){let g=(s+1)*x+m-1,v=(s+1)*(x-1)+m-1,w=(s+1)*(x-1)+m,S=(s+1)*x+m;l.push(g,v,S),l.push(v,w,S)}this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};Rm={clone:zr,merge:Rn},Yx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vi=class extends Hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yx,this.fragmentShader=Kx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zr(e.uniforms),this.uniformsGroups=qx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ee().setHex(s.value);break;case"v2":this.uniforms[n].value=new Xe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new St().fromArray(s.value);break;case"m3":this.uniforms[n].value=new qe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ve().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},oc=class extends vi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Rr=class extends Hn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wa,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Vn=class extends Rr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return yr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){yr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Gt=class extends Hn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wa,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=yc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ac=class extends Hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},lc=class extends Hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};$i=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},cc=class extends $i{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xr,endingEnd:xr}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case _r:r=e,a=2*t-n;break;case da:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case _r:o=e,l=2*n-t;break;case da:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(s-t),x=p*p,m=x*p,g=-f*m+2*f*x-f*p,v=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*p+1,w=(-1-d)*m+(1.5+d)*x+.5*p,S=d*m-d*x;for(let A=0;A!==a;++A)r[A]=g*o[h+A]+v*o[c+A]+w*o[l+A]+S*o[u+A];return r}},Ca=class extends $i{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},hc=class extends $i{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},uc=class extends $i{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-t)/(s-t),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let f=a*2,d=e-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=d*f+p*2,v=u[g],w=u[g+1],S=e*f+p*2,A=h[S],R=h[S+1],y=jx(n,t,v,A,s);r[p]=Cm(y,x,w,R,m)}return r}};Zn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ks(t,this.TimeBufferType),this.values=Ks(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ks(e.times,Array),values:Ks(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),ha(e.settings)&&(n.settings={inTangents:Ks(e.settings.inTangents,Array),outTangents:Ks(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new hc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ca(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new cc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new uc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case vr:t=this.InterpolantFactoryMethodDiscrete;break;case Mr:t=this.InterpolantFactoryMethodLinear;break;case Wl:t=this.InterpolantFactoryMethodSmooth;break;case Su:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Le("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vr;case this.InterpolantFactoryMethodLinear:return Mr;case this.InterpolantFactoryMethodSmooth:return Wl;case this.InterpolantFactoryMethodBezier:return Su}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;ha(this.settings)&&(Np(this.settings.inTangents,e),Np(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;ha(this.settings)&&(Fp(this.settings.inTangents,e),Fp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ge("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ge("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ge("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ge("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&cx(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ge("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Wl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let x=t[u+p];if(x!==t[f+p]||x!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,ha(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};Zn.prototype.ValueTypeName="";Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=Mr;bs=class extends Zn{constructor(e,t,n){super(e,t,n)}};bs.prototype.ValueTypeName="bool";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=vr;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;Ia=class extends Zn{constructor(e,t,n,s){super(e,t,n,s)}};Ia.prototype.ValueTypeName="color";Es=class extends Zn{constructor(e,t,n,s){super(e,t,n,s)}};Es.prototype.ValueTypeName="number";fc=class extends $i{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)fn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ts=class extends Zn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new fc(this.times,this.values,this.getValueSize(),e)}};Ts.prototype.ValueTypeName="quaternion";Ts.prototype.InterpolantFactoryMethodSmooth=void 0;ws=class extends Zn{constructor(e,t,n){super(e,t,n)}};ws.prototype.ValueTypeName="string";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=vr;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;Qs=class extends Zn{constructor(e,t,n,s){super(e,t,n,s)}};Qs.prototype.ValueTypeName="vector";Cr=class{constructor(e="",t=-1,n=[],s=oh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=es(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(e_(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Zn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=Zx(l);l=Dp(l,1,h),c=Dp(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Es(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};Ki={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Up(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Up(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};dc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Im=new dc,Ji=class{constructor(e){this.manager=e!==void 0?e:Im,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Ji.DEFAULT_MATERIAL_NAME="__DEFAULT";xs={},Eu=class extends Error{constructor(e,t){super(e),this.response=t}},Ao=class extends Ji{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ki.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(xs[e]!==void 0){xs[e].push({onLoad:t,onProgress:n,onError:s});return}xs[e]=[],xs[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Le("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=xs[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0,x=0,m=new ReadableStream({start(g){v();function v(){u.read().then(({done:w,value:S})=>{if(w)g.close();else{x+=S.byteLength;let A=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:d});for(let R=0,y=h.length;R<y;R++){let T=h[R];T.onProgress&&T.onProgress(A)}g.enqueue(S),v()}},w=>{g.error(w)})}}});return new Response(m)}else throw new Eu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{Ki.add(`file:${e}`,c);let h=xs[e];delete xs[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=xs[e];if(h===void 0)throw this.manager.itemError(e),c;delete xs[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},ho=new WeakMap,pc=class extends Ji{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ki.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=ho.get(o);u===void 0&&(u=[],ho.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=_o("img");function l(){h(),t&&t(this);let u=ho.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}ho.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Ki.remove(`image:${e}`);let f=ho.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(u)}ho.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ki.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}},Pa=class extends Ji{constructor(e){super(e)}load(e,t,n,s){let r=new nn,o=new pc(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Ir=class extends pt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},La=class extends Ir{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ee(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},yu=new Ve,Op=new F,Bp=new F,Ro=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=$n,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Js,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Op.setFromMatrixPosition(e.matrixWorld),t.position.copy(Op),Bp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){yu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(yu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===xo||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(yu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Gl=new F,Vl=new fn,Yi=new F,Da=class extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Gl,Vl,Yi),Yi.x===1&&Yi.y===1&&Yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gl,Vl,Yi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Gl,Vl,Yi),Yi.x===1&&Yi.y===1&&Yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gl,Vl,Yi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ys=new F,zp=new Xe,kp=new Xe,en=class extends Da{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sr*2*Math.atan(Math.tan(ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ys.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ys.x,Ys.y).multiplyScalar(-e/Ys.z),Ys.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ys.x,Ys.y).multiplyScalar(-e/Ys.z)}getViewSize(e,t){return this.getViewBounds(e,zp,kp),t.subVectors(kp,zp)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ua*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Tu=class extends Ro{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Sr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Na=class extends Ir{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Tu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},wu=class extends Ro{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0}},Pr=class extends Ir{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new wu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Lr=class extends Da{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Au=class extends Ro{constructor(){super(new Lr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Dr=class extends Ir{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new Au}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},As=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},vu=new WeakMap,Fa=class extends Ji{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Le("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Le("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ki.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{vu.has(o)===!0?(s&&s(vu.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ki.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),vu.set(l,c),Ki.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ki.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},uo=-90,fo=1,Co=class extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new en(uo,fo,e,t);s.layers=this.layers,this.add(s);let r=new en(uo,fo,e,t);r.layers=this.layers,this.add(r);let o=new en(uo,fo,e,t);o.layers=this.layers,this.add(o);let a=new en(uo,fo,e,t);a.layers=this.layers,this.add(a);let l=new en(uo,fo,e,t);l.layers=this.layers,this.add(l);let c=new en(uo,fo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===_i)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},mc=class extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},gc=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){fn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;fn.multiplyQuaternionsFlat(e,o,e,t,e,n),fn.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*s}}},lf="\\[\\]\\.:\\/",t_=new RegExp("["+lf+"]","g"),cf="[^"+lf+"]",n_="[^"+lf.replace("\\.","")+"]",i_=/((?:WC+[\/:])*)/.source.replace("WC",cf),s_=/(WCOD+)?/.source.replace("WCOD",n_),r_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cf),o_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cf),a_=new RegExp("^"+i_+s_+r_+o_+"$"),l_=["material","materials","bones","map"],Ru=class{constructor(e,t,n){let s=n||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Tt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(t_,"")}static parseTrackName(e){let t=a_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);l_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Le("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Ge("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=Ru;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];xc=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:xr,endingEnd:xr};for(let c=0;c!==o;++c){let h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=fm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case pm:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case oh:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===dm;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===um){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=_r,s.endingEnd=_r):(e?s.endingStart=this.zeroSlopeAtStart?_r:xr:s.endingStart=da,t?s.endingEnd=this.zeroSlopeAtEnd?_r:xr:s.endingEnd=da)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},c_=new Float32Array(1),Io=class extends Ni{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let f=s[u],d=f.name,p=h[d];if(p!==void 0)++p.referenceCount,o[u]=p;else{if(p=o[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,d));continue}let x=t&&t._propertyBindings[u].binding.parsedPath;p=new gc(Tt.create(n,d,x),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,d),o[u]=p}a[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Ca(new Float32Array(2),new Float32Array(2),1,c_),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?Cr.findByName(s,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=oh),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new xc(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?Cr.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},mf=class mf{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};mf.prototype.isMatrix2=!0;Cu=mf;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187")});function jm(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function f_(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],x=u[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let x=u[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}function Yv(i,e,t,n,s,r){let o=new Ee(0),a=s===!0?0:1,l,c,h=null,u=0,f=null;function d(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){let S=v.backgroundBlurriness>0;w=e.get(w,S)}return w}function p(v){let w=!1,S=d(v);S===null?m(o,a):S&&S.isColor&&(m(S,1),w=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,w){let S=d(w);S&&S.isCubeTexture?(c===void 0&&(c=new Ue(new _n(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:zr(ns.backgroundCube.uniforms),vertexShader:ns.backgroundCube.vertexShader,fragmentShader:ns.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,R,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(qv.makeRotationFromEuler(w.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Qm),c.material.toneMapped=nt.getTransfer(S.colorSpace)!==gt,(h!==S||u!==S.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,u=S.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Ue(new Ar(2,2),new vi({name:"BackgroundMaterial",uniforms:zr(ns.background.uniforms),vertexShader:ns.background.vertexShader,fragmentShader:ns.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=nt.getTransfer(S.colorSpace)!==gt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||u!==S.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,u=S.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,w){v.getRGB(ch,af(i)),t.buffers.color.setClear(ch.r,ch.g,ch.b,w,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,w=1){o.set(v),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:x,dispose:g}}function Kv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(P,O,z,L,W){let Z=!1,q=u(P,L,z,O);r!==q&&(r=q,c(r.object)),Z=d(P,L,z,W),Z&&p(P,L,z,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,S(P,O,z,L),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function u(P,O,z,L){let W=L.wireframe===!0,Z=n[O.id];Z===void 0&&(Z={},n[O.id]=Z);let q=P.isInstancedMesh===!0?P.id:0,re=Z[q];re===void 0&&(re={},Z[q]=re);let K=re[z.id];K===void 0&&(K={},re[z.id]=K);let ne=K[W];return ne===void 0&&(ne=f(l()),K[W]=ne),ne}function f(P){let O=[],z=[],L=[];for(let W=0;W<t;W++)O[W]=0,z[W]=0,L[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:z,attributeDivisors:L,object:P,attributes:{},index:null}}function d(P,O,z,L){let W=r.attributes,Z=O.attributes,q=0,re=z.getAttributes();for(let K in re)if(re[K].location>=0){let se=W[K],Ie=Z[K];if(Ie===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(Ie=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(Ie=P.instanceColor)),se===void 0||se.attribute!==Ie||Ie&&se.data!==Ie.data)return!0;q++}return r.attributesNum!==q||r.index!==L}function p(P,O,z,L){let W={},Z=O.attributes,q=0,re=z.getAttributes();for(let K in re)if(re[K].location>=0){let se=Z[K];se===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(se=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(se=P.instanceColor));let Ie={};Ie.attribute=se,se&&se.data&&(Ie.data=se.data),W[K]=Ie,q++}r.attributes=W,r.attributesNum=q,r.index=L}function x(){let P=r.newAttributes;for(let O=0,z=P.length;O<z;O++)P[O]=0}function m(P){g(P,0)}function g(P,O){let z=r.newAttributes,L=r.enabledAttributes,W=r.attributeDivisors;z[P]=1,L[P]===0&&(i.enableVertexAttribArray(P),L[P]=1),W[P]!==O&&(i.vertexAttribDivisor(P,O),W[P]=O)}function v(){let P=r.newAttributes,O=r.enabledAttributes;for(let z=0,L=O.length;z<L;z++)O[z]!==P[z]&&(i.disableVertexAttribArray(z),O[z]=0)}function w(P,O,z,L,W,Z,q){q===!0?i.vertexAttribIPointer(P,O,z,W,Z):i.vertexAttribPointer(P,O,z,L,W,Z)}function S(P,O,z,L){x();let W=L.attributes,Z=z.getAttributes(),q=O.defaultAttributeValues;for(let re in Z){let K=Z[re];if(K.location>=0){let ne=W[re];if(ne===void 0&&(re==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),re==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor)),ne!==void 0){let se=ne.normalized,Ie=ne.itemSize,Ze=e.get(ne);if(Ze===void 0)continue;let j=Ze.buffer,Me=Ze.type,we=Ze.bytesPerElement,Oe=Me===i.INT||Me===i.UNSIGNED_INT||ne.gpuType===bc;if(ne.isInterleavedBufferAttribute){let Se=ne.data,Je=Se.isInterleavedBuffer===!0?Se.stride:Se.itemSize,Zt=ne.offset;if(Se.isInstancedInterleavedBuffer||Se.isInstancedBufferAttribute){for(let ke=0;ke<K.locationSize;ke++)g(K.location+ke,Se.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let ke=0;ke<K.locationSize;ke++)m(K.location+ke);i.bindBuffer(i.ARRAY_BUFFER,j);for(let ke=0;ke<K.locationSize;ke++)w(K.location+ke,Ie/K.locationSize,Me,se,Je*we,(Zt+Ie/K.locationSize*ke)*we,Oe)}else{if(ne.isInstancedBufferAttribute){for(let Se=0;Se<K.locationSize;Se++)g(K.location+Se,ne.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Se=0;Se<K.locationSize;Se++)m(K.location+Se);i.bindBuffer(i.ARRAY_BUFFER,j);for(let Se=0;Se<K.locationSize;Se++)w(K.location+Se,Ie/K.locationSize,Me,se,Ie*we,Ie/K.locationSize*Se*we,Oe)}}else if(q!==void 0){let se=q[re];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(K.location,se);break;case 3:i.vertexAttrib3fv(K.location,se);break;case 4:i.vertexAttrib4fv(K.location,se);break;default:i.vertexAttrib1fv(K.location,se)}}}}v()}function A(){N();for(let P in n){let O=n[P];for(let z in O){let L=O[z];for(let W in L){let Z=L[W];for(let q in Z)h(Z[q].object),delete Z[q];delete L[W]}}delete n[P]}}function R(P){if(n[P.id]===void 0)return;let O=n[P.id];for(let z in O){let L=O[z];for(let W in L){let Z=L[W];for(let q in Z)h(Z[q].object),delete Z[q];delete L[W]}}delete n[P.id]}function y(P){for(let O in n){let z=n[O];for(let L in z){let W=z[L];if(W[P.id]===void 0)continue;let Z=W[P.id];for(let q in Z)h(Z[q].object),delete Z[q];delete W[P.id]}}}function T(P){for(let O in n){let z=n[O],L=P.isInstancedMesh===!0?P.id:0,W=z[L];if(W!==void 0){for(let Z in W){let q=W[Z];for(let re in q)h(q[re].object),delete q[re];delete W[Z]}delete z[L],Object.keys(z).length===0&&delete n[O]}}}function N(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfObject:T,releaseStatesOfProgram:y,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function Zv(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function $v(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let y=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(y){return!(y!==Si&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){let T=y===Bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==$n&&y!==ri&&!T&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Le("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Le("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:S,maxSamples:A,samples:R}}function Jv(i){let e=this,t=null,n=0,s=!1,r=!1,o=new An,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,w=v*4,S=g.clippingState||null;l.value=S,S=h(p,f,w,d);for(let A=0;A!==w;++A)S[A]=t[A];g.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,p){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=d+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let w=0,S=d;w!==x;++w,S+=4)o.copy(u[w]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Lm(i,e,t){return new Ya(i,{minFilter:Mi,generateMipmaps:e,type:Bi,colorSpace:zn,depthBuffer:t})}function Ka(i,e,t){return new vi({name:i,uniforms:e,vertexShader:tt.cube_vert,fragmentShader:t,side:yn,blending:Nr,depthTest:!1,depthWrite:!1})}function iM(){return Ka("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${e0}u

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
	`)}function sM(){return Ka("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:t0}},`

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
	`)}function rM(){return Ka("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Qv}
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
	`)}function Dm(){return Ka("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Nm(){return Ka("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function oM(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===vc||d===Mc)if(e.has(f)){let p=e.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let x=new Ya(p.height);return x.fromEquirectangularTexture(i,f),e.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,p=d===vc||d===Mc,x=d===Ur||d===Do;if(p||x){let m=t.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new uh(i)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let v=f.image;return p&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new uh(i)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,d){return d===vc?f.mapping=Ur:d===Mc&&(f.mapping=Do),f}function l(f){let d=0,p=6;for(let x=0;x<p;x++)f[x]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function aM(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&yr("WebGLRenderer: "+n+" extension not supported."),s}}}function lM(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let x=r.get(p);x&&(e.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function h(p){let x=p.attributes;for(let m in x)e.update(x[m],i.ARRAY_BUFFER)}function u(p){let x=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let v=x!==null?x.array.length:m.array.length/3-1,w=m.count>=65535?Ma:va,S=new w(Math.ceil(v/3)*6,1),A=S.array;if(x!==null){let y=x.array;g=x.version;for(let T=0,N=0;T<v;T+=3){let C=y[T+0],P=y[T+1],O=y[T+2];A[N++]=C,A[N++]=P,A[N++]=P,A[N++]=O,A[N++]=O,A[N++]=C}}else{g=m.version;for(let y=0,T=0;y<v;y+=3){let N=y+0,C=y+1,P=y+2;A[T++]=N,A[T++]=C,A[T++]=C,A[T++]=P,A[T++]=P,A[T++]=N}}S.version=g;let R=r.get(p);R&&e.remove(R),r.set(p,S)}function f(p){let x=r.get(p);if(x){let m=p.index;m!==null&&x.version<m.version&&u(p)}else u(p);return r.get(p)}function d(){for(let p in s){let x=s[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:f,dispose:d}}function cM(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*o),t.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*o,d),t.update(f,n,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let x=0;for(let m=0;m<d;m++)x+=f[m];t.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function hM(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Ge("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function uM(i,e,t){let n=new WeakMap,s=new St;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let N=function(){y.dispose(),n.delete(a),a.removeEventListener("dispose",N)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],w=0;d===!0&&(w=1),p===!0&&(w=2),x===!0&&(w=3);let S=a.attributes.position.count*w,A=1;S>e.maxTextureSize&&(A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let R=new Float32Array(S*A*4*u),y=new ga(R,S,A,u);y.type=ri,y.needsUpdate=!0;let T=w*4;for(let C=0;C<u;C++){let P=m[C],O=g[C],z=v[C],L=S*A*4*C;for(let W=0;W<P.count;W++){let Z=W*T;d===!0&&(s.fromBufferAttribute(P,W),R[L+Z+0]=s.x,R[L+Z+1]=s.y,R[L+Z+2]=s.z,R[L+Z+3]=0),p===!0&&(s.fromBufferAttribute(O,W),R[L+Z+4]=s.x,R[L+Z+5]=s.y,R[L+Z+6]=s.z,R[L+Z+7]=0),x===!0&&(s.fromBufferAttribute(z,W),R[L+Z+8]=s.x,R[L+Z+9]=s.y,R[L+Z+10]=s.z,R[L+Z+11]=z.itemSize===4?s.w:1)}}f={count:u,texture:y,size:new Xe(S,A)},n.set(a,f),a.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function fM(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}function pM(i,e,t,n,s,r){let o=new ni(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Lt;h.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ct([0,2,0,0,2,0],2));let u=new oc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Ue(h,u),d=new Lr(-1,1,1,-1,0,1),p=null,x=null,m=!1,g,v=null,w=[],S=!1;this.setSize=function(A,R){o.setSize(A,R),a!==null&&a.setSize(A,R),l!==null&&l.setSize(A,R);for(let y=0;y<w.length;y++){let T=w[y];T.setSize&&T.setSize(A,R)}},this.setEffects=function(A){w=A,S=w.length>0&&w[0].isRenderPass===!0;let R=o.width,y=o.height;w.length>0&&a===null&&(a=new ni(R,y,{type:Bi,depthBuffer:!1,stencilBuffer:!1}),l=new ni(R,y,{type:Bi,depthBuffer:!1,stencilBuffer:!1}));let T=s===!0&&w.some(N=>N.needsDepthTexture===!0);T!==(o.depthTexture!==null)&&(T===!0&&c===null&&(c=new Ms(R,y),r===!0&&(c.format=Rs,c.type=Br)),o.dispose(),o.depthTexture=T?c:null,o.resolveDepthBuffer=T,o.storeMultisampledDepthBuffer=T);for(let N=0;N<w.length;N++){let C=w[N];C.setSize&&C.setSize(R,y),T&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(A,R){if(m||A.toneMapping===Qi&&w.length===0)return!1;if(v=R,R!==null){let y=R.width,T=R.height;(o.width!==y||o.height!==T)&&this.setSize(y,T)}return S===!1&&A.setRenderTarget(o),g=A.toneMapping,A.toneMapping=Qi,!0},this.hasRenderPass=function(){return S},this.end=function(A,R){A.toneMapping=g,m=!0;let y=o,T=a;for(let N=0;N<w.length;N++){let C=w[N];C.enabled!==!1&&(C.render(A,T,y,R),C.needsSwap!==!1&&(y=T,T=T===a?l:a))}if(p!==A.outputColorSpace||x!==A.toneMapping){p=A.outputColorSpace,x=A.toneMapping,u.defines={},nt.getTransfer(p)===gt&&(u.defines.SRGB_TRANSFER="");let N=dM[x];N&&(u.defines[N]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=y.texture,A.setRenderTarget(v),A.render(f,d),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}function Bo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Fm[s];if(r===void 0&&(r=new Float32Array(s),Fm[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function sn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function rn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function dh(i,e){let t=Um[e];t===void 0&&(t=new Int32Array(e),Um[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function mM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function gM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2fv(this.addr,e),rn(t,e)}}function xM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;i.uniform3fv(this.addr,e),rn(t,e)}}function _M(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4fv(this.addr,e),rn(t,e)}}function yM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;zm.set(n),i.uniformMatrix2fv(this.addr,!1,zm),rn(t,n)}}function vM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;Bm.set(n),i.uniformMatrix3fv(this.addr,!1,Bm),rn(t,n)}}function MM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;Om.set(n),i.uniformMatrix4fv(this.addr,!1,Om),rn(t,n)}}function SM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function bM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2iv(this.addr,e),rn(t,e)}}function EM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3iv(this.addr,e),rn(t,e)}}function TM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4iv(this.addr,e),rn(t,e)}}function wM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function AM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2uiv(this.addr,e),rn(t,e)}}function RM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3uiv(this.addr,e),rn(t,e)}}function CM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4uiv(this.addr,e),rn(t,e)}}function ph(i){return i.version===0&&(i.compareFunction=Qu,i.needsUpdate=!0),i}function IM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=ph(i0):r=n0,t.setTexture2D(e||r,s)}function PM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||o0,s)}function LM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=ph(s0):r=a0,t.setTextureCube(e||r,s)}function DM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||r0,s)}function NM(i){switch(i){case 5126:return mM;case 35664:return gM;case 35665:return xM;case 35666:return _M;case 35674:return yM;case 35675:return vM;case 35676:return MM;case 5124:case 35670:return SM;case 35667:case 35671:return bM;case 35668:case 35672:return EM;case 35669:case 35673:return TM;case 5125:return wM;case 36294:return AM;case 36295:return RM;case 36296:return CM;case 35678:case 36198:case 36298:case 36306:case 35682:return IM;case 35679:case 36299:case 36307:return PM;case 35680:case 36300:case 36308:case 36293:return LM;case 36289:case 36303:case 36311:case 36292:return DM}}function FM(i,e){i.uniform1fv(this.addr,e)}function UM(i,e){let t=Bo(e,this.size,2);i.uniform2fv(this.addr,t)}function OM(i,e){let t=Bo(e,this.size,3);i.uniform3fv(this.addr,t)}function BM(i,e){let t=Bo(e,this.size,4);i.uniform4fv(this.addr,t)}function zM(i,e){let t=Bo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function kM(i,e){let t=Bo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function HM(i,e){let t=Bo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function GM(i,e){i.uniform1iv(this.addr,e)}function VM(i,e){i.uniform2iv(this.addr,e)}function WM(i,e){i.uniform3iv(this.addr,e)}function XM(i,e){i.uniform4iv(this.addr,e)}function qM(i,e){i.uniform1uiv(this.addr,e)}function YM(i,e){i.uniform2uiv(this.addr,e)}function KM(i,e){i.uniform3uiv(this.addr,e)}function ZM(i,e){i.uniform4uiv(this.addr,e)}function $M(i,e,t){let n=this.cache,s=e.length,r=dh(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=ph(i0):o=n0;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function JM(i,e,t){let n=this.cache,s=e.length,r=dh(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||o0,r[o])}function jM(i,e,t){let n=this.cache,s=e.length,r=dh(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=ph(s0):o=a0;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function QM(i,e,t){let n=this.cache,s=e.length,r=dh(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||r0,r[o])}function eS(i){switch(i){case 5126:return FM;case 35664:return UM;case 35665:return OM;case 35666:return BM;case 35674:return zM;case 35675:return kM;case 35676:return HM;case 5124:case 35670:return GM;case 35667:case 35671:return VM;case 35668:case 35672:return WM;case 35669:case 35673:return XM;case 5125:return qM;case 36294:return YM;case 36295:return KM;case 36296:return ZM;case 35678:case 36198:case 36298:case 36306:case 35682:return $M;case 35679:case 36299:case 36307:return JM;case 35680:case 36300:case 36308:case 36293:return jM;case 36289:case 36303:case 36311:case 36292:return QM}}function km(i,e){i.seq.push(e),i.map[e.id]=e}function tS(i,e,t){let n=i.name,s=n.length;for(xf.lastIndex=0;;){let r=xf.exec(n),o=xf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){km(t,c===void 0?new yf(a,i,e):new vf(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Mf(a),km(t,u)),t=u}}}function Hm(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function sS(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function rS(i){nt._getMatrix(Gm,nt.workingColorSpace,i);let e=`mat3( ${Gm.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(i)){case pa:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Vm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+sS(i.getShaderSource(e),a)}else return r}function oS(i,e){let t=rS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function lS(i,e){let t=aS[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function cS(){nt.getLuminanceCoefficients(hh);let i=hh.x.toFixed(4),e=hh.y.toFixed(4),t=hh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qa).join(`
`)}function uS(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function fS(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function qa(i){return i!==""}function Wm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Xm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Sf(i){return i.replace(dS,pS)}function pS(i,e){let t=tt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Sf(t)}function qm(i){return i.replace(mS,gS)}function gS(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ym(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function _S(i){return xS[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function vS(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":yS[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}function SS(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":MS[i.combine]||"ENVMAP_BLENDING_NONE"}function bS(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=_S(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=vS(t),u=SS(t),f=hS(t),d=uS(r),p=s.createProgram(),x,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(qa).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(qa).join(`
`),m.length>0&&(m+=`
`)):(x=[Ym(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qa).join(`
`),m=[Ym(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qi?"#define TONE_MAPPING":"",t.toneMapping!==Qi?tt.tonemapping_pars_fragment:"",t.toneMapping!==Qi?lS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,oS("linearToOutputTexel",t.outputColorSpace),cS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qa).join(`
`)),o=Sf(o),o=Wm(o,t),o=Xm(o,t),a=Sf(a),a=Wm(a,t),a=Xm(a,t),o=qm(o),a=qm(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===tf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=g+x+o,w=g+m+a,S=Hm(s,s.VERTEX_SHADER,v),A=Hm(s,s.FRAGMENT_SHADER,w);s.attachShader(p,S),s.attachShader(p,A),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function R(C){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(p)||"",O=s.getShaderInfoLog(S)||"",z=s.getShaderInfoLog(A)||"",L=P.trim(),W=O.trim(),Z=z.trim(),q=!0,re=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,S,A);else{let K=Vm(s,S,"vertex"),ne=Vm(s,A,"fragment");Ge("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+K+`
`+ne)}else L!==""?Le("WebGLProgram: Program Info Log:",L):(W===""||Z==="")&&(re=!1);re&&(C.diagnostics={runnable:q,programLog:L,vertexShader:{log:W,prefix:x},fragmentShader:{log:Z,prefix:m}})}s.deleteShader(S),s.deleteShader(A),y=new Oo(s,p),T=fS(s,p)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(p,nS)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iS++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=A,this}function TS(i){return i===er||i===Ha||i===Ga}function wS(i,e,t,n,s,r){let o=new xa,a=new bf,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,T,N,C,P,O){let z=C.fog,L=P.geometry,W=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?C.environment:null,Z=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,q=e.get(y.envMap||W,Z),re=f[y.type],K=n.precision;y.precision!==null&&(K=n.getMaxPrecision(y.precision),K!==y.precision&&Le("WebGLProgram.getParameters:",y.precision,"not supported, using",K,"instead."));let ne=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,se=ne!==void 0?ne.length:0,Ie=0;L.morphAttributes.position!==void 0&&(Ie=1),L.morphAttributes.normal!==void 0&&(Ie=2),L.morphAttributes.color!==void 0&&(Ie=3);let Ze,j,Me,we;if(re){let ye=ns[re];Ze=ye.vertexShader,j=ye.fragmentShader}else{Ze=y.vertexShader,j=y.fragmentShader;let ye=a.getVertexShaderStage(y),Mt=a.getFragmentShaderStage(y);a.update(y,ye,Mt),Me=ye.id,we=Mt.id}let Oe=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),Je=P.isInstancedMesh===!0,Zt=P.isBatchedMesh===!0,ke=!!y.map,vt=!!y.matcap,Ct=!!q,ot=Ct&&q.isPMREMTexture===!0,gn=!!y.aoMap,jt=!!y.lightMap,Yn=!!y.bumpMap&&y.wireframe===!1,kt=!!y.normalMap,qi=!!y.displacementMap,ln=!!y.emissiveMap,fi=!!y.metalnessMap,di=!!y.roughnessMap,pi=y.anisotropy>0,B=y.clearcoat>0,mi=y.diffuseRoughness>0,Bt=y.dispersion>0,zt=y.retroreflectivity>0,ge=y.iridescence>0,Qt=y.sheen>0,Be=y.transmission>0,Ke=pi&&!!y.anisotropyMap,I=B&&!!y.clearcoatMap,b=B&&!!y.clearcoatNormalMap,H=B&&!!y.clearcoatRoughnessMap,oe=mi&&!!y.diffuseRoughnessMap,ee=ge&&!!y.iridescenceMap,ce=ge&&!!y.iridescenceThicknessMap,pe=Qt&&!!y.sheenColorMap,$=Qt&&!!y.sheenRoughnessMap,J=!!y.specularMap,ue=!!y.specularColorMap,D=!!y.specularIntensityMap,Q=Be&&!!y.transmissionMap,Y=Be&&!!y.thicknessMap,fe=!!y.gradientMap,le=!!y.alphaMap,he=y.alphaTest>0,De=!!y.alphaHash,et=!!y.extensions,ae=Qi;y.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(ae=i.toneMapping);let Ne=ot?q.isCompressedCubeTexture?q.image[0].mipmaps:q.mipmaps:null,Qe={shaderID:re,shaderType:y.type,shaderName:y.name,vertexShader:Ze,fragmentShader:j,defines:y.defines,customVertexShaderID:Me,customFragmentShaderID:we,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:K,batching:Zt,batchingColor:Zt&&P._colorsTexture!==null,instancing:Je,instancingColor:Je&&P.instanceColor!==null,instancingMorph:Je&&P.morphTexture!==null,outputColorSpace:Oe===null?i.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:ke,matcap:vt,envMap:Ct,envMapMode:Ct&&q.mapping,envMapPMREM:ot,envMapMaxLod:ot?Ne.length-1:null,envMapSize:ot?Ne[0].width:null,aoMap:gn,lightMap:jt,bumpMap:Yn,normalMap:kt,displacementMap:qi,emissiveMap:ln,normalMapObjectSpace:kt&&y.normalMapType===gm,normalMapTangentSpace:kt&&y.normalMapType===Wa,packedNormalMap:kt&&y.normalMapType===Wa&&TS(y.normalMap.format),metalnessMap:fi,roughnessMap:di,anisotropy:pi,anisotropyMap:Ke,clearcoat:B,clearcoatMap:I,clearcoatNormalMap:b,clearcoatRoughnessMap:H,diffuseRoughness:mi,diffuseRoughnessMap:oe,dispersion:Bt,retroreflection:zt,iridescence:ge,iridescenceMap:ee,iridescenceThicknessMap:ce,sheen:Qt,sheenColorMap:pe,sheenRoughnessMap:$,specularMap:J,specularColorMap:ue,specularIntensityMap:D,transmission:Be,transmissionMap:Q,thicknessMap:Y,gradientMap:fe,opaque:y.transparent===!1&&y.blending===Lo&&y.alphaToCoverage===!1,alphaMap:le,alphaTest:he,alphaHash:De,combine:y.combine,mapUv:ke&&d(y.map.channel),aoMapUv:gn&&d(y.aoMap.channel),lightMapUv:jt&&d(y.lightMap.channel),bumpMapUv:Yn&&d(y.bumpMap.channel),normalMapUv:kt&&d(y.normalMap.channel),displacementMapUv:qi&&d(y.displacementMap.channel),emissiveMapUv:ln&&d(y.emissiveMap.channel),metalnessMapUv:fi&&d(y.metalnessMap.channel),roughnessMapUv:di&&d(y.roughnessMap.channel),anisotropyMapUv:Ke&&d(y.anisotropyMap.channel),clearcoatMapUv:I&&d(y.clearcoatMap.channel),clearcoatNormalMapUv:b&&d(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&d(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:oe&&d(y.diffuseRoughnessMap.channel),iridescenceMapUv:ee&&d(y.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&d(y.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&d(y.sheenColorMap.channel),sheenRoughnessMapUv:$&&d(y.sheenRoughnessMap.channel),specularMapUv:J&&d(y.specularMap.channel),specularColorMapUv:ue&&d(y.specularColorMap.channel),specularIntensityMapUv:D&&d(y.specularIntensityMap.channel),transmissionMapUv:Q&&d(y.transmissionMap.channel),thicknessMapUv:Y&&d(y.thicknessMap.channel),alphaMapUv:le&&d(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(kt||pi),vertexNormals:!!L.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!L.attributes.uv&&(ke||le),fog:!!z,useFog:y.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||L.attributes.normal===void 0&&kt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Se,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Ie,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:O.filter(ye=>ye.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:ae,decodeVideoTexture:ke&&y.map.isVideoTexture===!0&&nt.getTransfer(y.map.colorSpace)===gt,decodeVideoTextureEmissive:ln&&y.emissiveMap.isVideoTexture===!0&&nt.getTransfer(y.emissiveMap.colorSpace)===gt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===At,flipSided:y.side===yn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:et&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&y.extensions.multiDraw===!0||Zt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Qe.vertexUv1s=l.has(1),Qe.vertexUv2s=l.has(2),Qe.vertexUv3s=l.has(3),l.clear(),Qe}function x(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let N in y.defines)T.push(N),T.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(m(T,y),g(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function m(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapPMREM),y.push(T.envMapMaxLod),y.push(T.envMapSize),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.diffuseRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.numSunLights),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numSunLightShadows),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.numLightProbeGrids),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function g(y,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.diffuseRoughness&&o.enable(25),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function v(y){let T=f[y.type],N;if(T){let C=ns[T];N=Rm.clone(C.uniforms)}else N=y.uniforms;return N}function w(y,T){let N=h.get(T);return N!==void 0?++N.usedTimes:(N=new bS(i,T,y,s),c.push(N),h.set(T,N)),N}function S(y){if(--y.usedTimes===0){let T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function A(y){a.remove(y)}function R(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:v,acquireProgram:w,releaseProgram:S,releaseShaderCache:A,programs:c,dispose:R}}function AS(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function RS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Km(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Zm(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,x,m,g){let v=i[e];return v===void 0?(v={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:g},i[e]=v):(v.id=f.id,v.object=f,v.geometry=d,v.material=p,v.materialVariant=o(f),v.groupOrder=x,v.renderOrder=f.renderOrder,v.z=m,v.group=g),e++,v}function l(f,d,p,x,m,g,v){v.reversedDepth===!0&&(m=-m);let w=a(f,d,p,x,m,g);p.transmission>0?n.push(w):p.transparent===!0?s.push(w):t.push(w)}function c(f,d,p,x,m,g){let v=a(f,d,p,x,m,g);p.transmission>0?n.unshift(v):p.transparent===!0?s.unshift(v):t.unshift(v)}function h(f,d){t.length>1&&t.sort(f||RS),n.length>1&&n.sort(d||Km),s.length>1&&s.sort(d||Km)}function u(){for(let f=e,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function CS(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Zm,i.set(n,[o])):s>=r.length?(o=new Zm,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function IS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new Ee};break;case"SpotLight":t={position:new F,direction:new F,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function PS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function DS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function NS(i){let e=new IS,t=PS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let s=new F,r=new Ve,o=new Ve;function a(c){let h=0,u=0,f=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let d=0,p=0,x=0,m=0,g=0,v=0,w=0,S=0,A=0,R=0,y=0,T=0,N=0,C=0;c.sort(DS);for(let O=0,z=c.length;O<z;O++){let L=c[O],W=L.color,Z=L.intensity,q=L.distance,re=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===er?re=L.shadow.map.texture:re=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=W.r*Z,u+=W.g*Z,f+=W.b*Z;else if(L.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(L.sh.coefficients[K],Z);C++}else if(L.isSunLight){let K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ne=L.shadow,se=t.get(L);se.shadowIntensity=ne.intensity,se.shadowBias=ne.bias,se.shadowNormalBias=ne.normalBias,se.shadowRadius=ne.radius,se.shadowMapSize.copy(ne.mapSize).multiply(ne.getFrameExtents()),n.sunShadow[p]=se,n.sunShadowMap[p]=re;let Ie=ne.getViewportCount();for(let Ze=0;Ze<Ie;Ze++)n.sunShadowMatrix[x+Ze]=ne.getMatrix(Ze),n.sunShadowCascade[x+Ze]=ne._cascadeData[Ze];x+=Ie,p++}n.sun[d]=K,d++}else if(L.isDirectionalLight){let K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ne=L.shadow,se=t.get(L);se.shadowIntensity=ne.intensity,se.shadowBias=ne.bias,se.shadowNormalBias=ne.normalBias,se.shadowRadius=ne.radius,se.shadowMapSize=ne.mapSize,n.directionalShadow[m]=se,n.directionalShadowMap[m]=re,n.directionalShadowMatrix[m]=L.shadow.matrix,A++}n.directional[m]=K,m++}else if(L.isSpotLight){let K=e.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(W).multiplyScalar(Z),K.distance=q,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,n.spot[v]=K;let ne=L.shadow;if(L.map&&(n.spotLightMap[T]=L.map,T++,ne.updateMatrices(L),L.castShadow&&N++),n.spotLightMatrix[v]=ne.matrix,L.castShadow){let se=t.get(L);se.shadowIntensity=ne.intensity,se.shadowBias=ne.bias,se.shadowNormalBias=ne.normalBias,se.shadowRadius=ne.radius,se.shadowMapSize=ne.mapSize,n.spotShadow[v]=se,n.spotShadowMap[v]=re,y++}v++}else if(L.isRectAreaLight){let K=e.get(L);K.color.copy(W).multiplyScalar(Z),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),n.rectArea[w]=K,w++}else if(L.isPointLight){let K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),K.distance=L.distance,K.decay=L.decay,L.castShadow){let ne=L.shadow,se=t.get(L);se.shadowIntensity=ne.intensity,se.shadowBias=ne.bias,se.shadowNormalBias=ne.normalBias,se.shadowRadius=ne.radius,se.shadowMapSize=ne.mapSize,se.shadowCameraNear=ne.camera.near,se.shadowCameraFar=ne.camera.far,n.pointShadow[g]=se,n.pointShadowMap[g]=re,n.pointShadowMatrix[g]=L.shadow.matrix,R++}n.point[g]=K,g++}else if(L.isHemisphereLight){let K=e.get(L);K.skyColor.copy(L.color).multiplyScalar(Z),K.groundColor.copy(L.groundColor).multiplyScalar(Z),n.hemi[S]=K,S++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let P=n.hash;(P.sunLength!==d||P.directionalLength!==m||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==w||P.hemiLength!==S||P.numSunShadows!==p||P.numDirectionalShadows!==A||P.numPointShadows!==R||P.numSpotShadows!==y||P.numSpotMaps!==T||P.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=m,n.spot.length=v,n.rectArea.length=w,n.point.length=g,n.hemi.length=S,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=R,n.pointShadowMap.length=R,n.pointShadowMatrix.length=R,n.spotShadow.length=y,n.spotShadowMap.length=y,n.spotLightMatrix.length=y+T-N,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=C,P.sunLength=d,P.directionalLength=m,P.pointLength=g,P.spotLength=v,P.rectAreaLength=w,P.hemiLength=S,P.numSunShadows=p,P.numDirectionalShadows=A,P.numPointShadows=R,P.numSpotShadows=y,P.numSpotMaps=T,P.numLightProbes=C,n.version=LS++)}function l(c,h){let u=0,f=0,d=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let v=0,w=c.length;v<w;v++){let S=c[v];if(S.isSunLight){let A=n.sun[u];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(g),u++}else if(S.isDirectionalLight){let A=n.directional[f];A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),f++}else if(S.isSpotLight){let A=n.spot[p];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),p++}else if(S.isRectAreaLight){let A=n.rectArea[x];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(g),o.identity(),r.copy(S.matrixWorld),r.premultiply(g),o.extractRotation(r),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),x++}else if(S.isPointLight){let A=n.point[d];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(g),d++}else if(S.isHemisphereLight){let A=n.hemi[m];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function $m(i){let e=new NS(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):t.push(u)}function a(u){n.push(u)}function l(){e.setup(t),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function FS(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new $m(i),e.set(s,[a])):r>=o.length?(a=new $m(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function kS(i,e,t){let n=new Js,s=new Xe,r=new Xe,o=new St,a=new ac,l=new lc,c={},h=t.maxTextureSize,u={[ji]:yn,[yn]:ji,[At]:At},f=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:US,fragmentShader:OS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Lt;p.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ue(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ua;let g=this.type;this.render=function(R,y,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;this.type===Vp&&(Le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ua);let N=i.getRenderTarget(),C=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Nr),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let z=g!==this.type;z&&y.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(W=>W.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,W=R.length;L<W;L++){let Z=R[L],q=Z.shadow;if(q===void 0){Le("WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let re=q.getFrameExtents();s.multiply(re),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/re.x),s.x=r.x*re.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/re.y),s.y=r.y*re.y,q.mapSize.y=r.y));let K=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=K,q.map===null||z===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Po){if(Z.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new ni(s.x,s.y,{format:er,type:Bi,minFilter:tn,magFilter:tn,generateMipmaps:!1}),q.map.texture.name=Z.name+".shadowMap",q.map.depthTexture=new Ms(s.x,s.y,ri),q.map.depthTexture.name=Z.name+".shadowMapDepth",q.map.depthTexture.format=ys,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=qt,q.map.depthTexture.magFilter=qt}else Z.isPointLight?(q.map=new Ya(s.x),q.map.depthTexture=new wa(s.x,Oi)):(q.map=new ni(s.x,s.y),q.map.depthTexture=new Ms(s.x,s.y,Oi)),q.map.depthTexture.name=Z.name+".shadowMap",q.map.depthTexture.format=ys,this.type===Ua?(q.map.depthTexture.compareFunction=K?ju:Ju,q.map.depthTexture.minFilter=tn,q.map.depthTexture.magFilter=tn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=qt,q.map.depthTexture.magFilter=qt);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let ne=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();Z.isPointLight!==!0&&q.updateMatrices(Z,T);let se=(q.camera.layers.mask&4294967294)!==0?q.camera.layers:T.layers;for(let Ie=0;Ie<ne;Ie++){let Ze=q.getCamera(Ie);if(Z.isPointLight){let j=q.camera,Me=q.matrix,we=Z.distance||j.far;we!==j.far&&(j.far=we,j.updateProjectionMatrix()),Xa.setFromMatrixPosition(Z.matrixWorld),j.position.copy(Xa),_f.copy(j.position),_f.add(BS[Ie]),j.up.copy(zS[Ie]),j.lookAt(_f),j.updateMatrixWorld(),Me.makeTranslation(-Xa.x,-Xa.y,-Xa.z),Jm.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Jm,j.coordinateSystem,j.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,Ie),i.clear();else{Ie===0&&(i.setRenderTarget(q.map),i.clear());let j=q.getViewport(Ie);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),O.viewport(o)}n=q.getFrustum(Ie),S(y,T,Ze,Z,se,this.type)}q.isPointLightShadow!==!0&&this.type===Po&&v(q,T),q.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(N,C,P)};function v(R,y){let T=e.update(x);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null?R.mapPass=new ni(s.x,s.y,{format:er,type:Bi}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),f.uniforms.shadow_pass.value=R.map.depthTexture,f.uniforms.resolution.value.set(R.map.width,R.map.height),f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(y,null,T,f,x,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value.set(R.map.width,R.map.height),d.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(y,null,T,d,x,null)}function w(R,y,T,N){let C=null,P=T.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)C=P;else if(C=T.isPointLight===!0?l:a,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let O=C.uuid,z=y.uuid,L=c[O];L===void 0&&(L={},c[O]=L);let W=L[z];W===void 0&&(W=C.clone(),L[z]=W,y.addEventListener("dispose",A)),C=W}if(C.visible=y.visible,C.wireframe=y.wireframe,N===Po?C.side=y.shadowSide!==null?y.shadowSide:y.side:C.side=y.shadowSide!==null?y.shadowSide:u[y.side],C.alphaMap=y.alphaMap,C.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,C.map=y.map,C.clipShadows=y.clipShadows,C.clippingPlanes=y.clippingPlanes,C.clipIntersection=y.clipIntersection,C.displacementMap=y.displacementMap,C.displacementScale=y.displacementScale,C.displacementBias=y.displacementBias,C.wireframeLinewidth=y.wireframeLinewidth,C.linewidth=y.linewidth,T.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let O=i.properties.get(C);O.light=T}return C}function S(R,y,T,N,C,P){if(R.visible===!1)return;if(R.layers.test(C)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&P===Po)&&(!R.frustumCulled||R.intersectsFrustum(n))){R.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,R.matrixWorld);let L=e.update(R),W=R.material;if(Array.isArray(W)){let Z=L.groups;for(let q=0,re=Z.length;q<re;q++){let K=Z[q],ne=W[K.materialIndex];if(ne&&ne.visible){let se=w(R,ne,N,P);R.onBeforeShadow(i,R,y,T,L,se,K),i.renderBufferDirect(T,null,L,se,R,K),R.onAfterShadow(i,R,y,T,L,se,K)}}}else if(W.visible){let Z=w(R,W,N,P);R.onBeforeShadow(i,R,y,T,L,Z,null),i.renderBufferDirect(T,null,L,Z,R,null),R.onAfterShadow(i,R,y,T,L,Z,null)}}let z=R.children;for(let L=0,W=z.length;L<W;L++)S(z[L],y,T,N,C,P)}function A(R){R.target.removeEventListener("dispose",A);for(let T in c){let N=c[T],C=R.target.uuid;C in N&&(N[C].dispose(),delete N[C])}}}function HS(i,e){function t(){let D=!1,Q=new St,Y=null,fe=new St(0,0,0,0);return{setMask:function(le){Y!==le&&!D&&(i.colorMask(le,le,le,le),Y=le)},setLocked:function(le){D=le},setClear:function(le,he,De,et,ae){ae===!0&&(le*=et,he*=et,De*=et),Q.set(le,he,De,et),fe.equals(Q)===!1&&(i.clearColor(le,he,De,et),fe.copy(Q))},reset:function(){D=!1,Y=null,fe.set(-1,0,0,0)}}}function n(){let D=!1,Q=!1,Y=null,fe=null,le=null;return{setReversed:function(he){if(Q!==he){let De=e.get("EXT_clip_control");he?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),Q=he;let et=le;le=null,this.setClear(et)}},getReversed:function(){return Q},setTest:function(he){he?Se(i.DEPTH_TEST):Je(i.DEPTH_TEST)},setMask:function(he){Y!==he&&!D&&(i.depthMask(he),Y=he)},setFunc:function(he){if(Q&&(he=wm[he]),fe!==he){switch(he){case ql:i.depthFunc(i.NEVER);break;case Yl:i.depthFunc(i.ALWAYS);break;case Kl:i.depthFunc(i.LESS);break;case mo:i.depthFunc(i.LEQUAL);break;case Zl:i.depthFunc(i.EQUAL);break;case $l:i.depthFunc(i.GEQUAL);break;case Jl:i.depthFunc(i.GREATER);break;case jl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=he}},setLocked:function(he){D=he},setClear:function(he){le!==he&&(le=he,Q&&(he=1-he),i.clearDepth(he))},reset:function(){D=!1,Y=null,fe=null,le=null,Q=!1}}}function s(){let D=!1,Q=null,Y=null,fe=null,le=null,he=null,De=null,et=null,ae=null;return{setTest:function(Ne){D||(Ne?Se(i.STENCIL_TEST):Je(i.STENCIL_TEST))},setMask:function(Ne){Q!==Ne&&!D&&(i.stencilMask(Ne),Q=Ne)},setFunc:function(Ne,Qe,ye){(Y!==Ne||fe!==Qe||le!==ye)&&(i.stencilFunc(Ne,Qe,ye),Y=Ne,fe=Qe,le=ye)},setOp:function(Ne,Qe,ye){(he!==Ne||De!==Qe||et!==ye)&&(i.stencilOp(Ne,Qe,ye),he=Ne,De=Qe,et=ye)},setLocked:function(Ne){D=Ne},setClear:function(Ne){ae!==Ne&&(i.clearStencil(Ne),ae=Ne)},reset:function(){D=!1,Q=null,Y=null,fe=null,le=null,he=null,De=null,et=null,ae=null}}}let r=new t,o=new n,a=new s,l={},c=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],x=null,m=!1,g=null,v=null,w=null,S=null,A=null,R=null,y=null,T=new Ee(0,0,0),N=0,C=!1,P=null,O=null,z=null,L=null,W=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,re=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(K)[1]),q=re>=1):K.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),q=re>=2);let ne=null,se={},Ie=i.getParameter(i.SCISSOR_BOX),Ze=i.getParameter(i.VIEWPORT),j=new St().fromArray(Ie),Me=new St().fromArray(Ze);function we(D,Q,Y,fe){let le=new Uint8Array(4),he=i.createTexture();i.bindTexture(D,he),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<Y;De++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(Q,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,le):i.texImage2D(Q+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,le);return he}let Oe={};Oe[i.TEXTURE_2D]=we(i.TEXTURE_2D,i.TEXTURE_2D,1),Oe[i.TEXTURE_CUBE_MAP]=we(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Oe[i.TEXTURE_2D_ARRAY]=we(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Oe[i.TEXTURE_3D]=we(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Se(i.DEPTH_TEST),o.setFunc(mo),Yn(!1),kt(Iu),Se(i.CULL_FACE),gn(Nr);function Se(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Je(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Zt(D,Q){return f[D]!==Q?(i.bindFramebuffer(D,Q),f[D]=Q,D===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Q),D===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Q),!0):!1}function ke(D,Q){let Y=p,fe=!1;if(D){Y=d.get(Q),Y===void 0&&(Y=[],d.set(Q,Y));let le=D.textures;if(Y.length!==le.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let he=0,De=le.length;he<De;he++)Y[he]=i.COLOR_ATTACHMENT0+he;Y.length=le.length,fe=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,fe=!0);fe&&i.drawBuffers(Y)}function vt(D){return x!==D?(i.useProgram(D),x=D,!0):!1}let Ct={[Fr]:i.FUNC_ADD,[Xp]:i.FUNC_SUBTRACT,[qp]:i.FUNC_REVERSE_SUBTRACT};Ct[Yp]=i.MIN,Ct[Kp]=i.MAX;let ot={[Zp]:i.ZERO,[$p]:i.ONE,[Jp]:i.SRC_COLOR,[Nu]:i.SRC_ALPHA,[im]:i.SRC_ALPHA_SATURATE,[tm]:i.DST_COLOR,[Qp]:i.DST_ALPHA,[jp]:i.ONE_MINUS_SRC_COLOR,[Fu]:i.ONE_MINUS_SRC_ALPHA,[nm]:i.ONE_MINUS_DST_COLOR,[em]:i.ONE_MINUS_DST_ALPHA,[sm]:i.CONSTANT_COLOR,[rm]:i.ONE_MINUS_CONSTANT_COLOR,[om]:i.CONSTANT_ALPHA,[am]:i.ONE_MINUS_CONSTANT_ALPHA};function gn(D,Q,Y,fe,le,he,De,et,ae,Ne){if(D===Nr){m===!0&&(Je(i.BLEND),m=!1);return}if(m===!1&&(Se(i.BLEND),m=!0),D!==Wp){if(D!==g||Ne!==C){if((v!==Fr||A!==Fr)&&(i.blendEquation(i.FUNC_ADD),v=Fr,A=Fr),Ne)switch(D){case Lo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pu:i.blendFunc(i.ONE,i.ONE);break;case Lu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Du:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ge("WebGLState: Invalid blending: ",D);break}else switch(D){case Lo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Lu:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Du:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",D);break}w=null,S=null,R=null,y=null,T.set(0,0,0),N=0,g=D,C=Ne}return}le=le||Q,he=he||Y,De=De||fe,(Q!==v||le!==A)&&(i.blendEquationSeparate(Ct[Q],Ct[le]),v=Q,A=le),(Y!==w||fe!==S||he!==R||De!==y)&&(i.blendFuncSeparate(ot[Y],ot[fe],ot[he],ot[De]),w=Y,S=fe,R=he,y=De),(et.equals(T)===!1||ae!==N)&&(i.blendColor(et.r,et.g,et.b,ae),T.copy(et),N=ae),g=D,C=!1}function jt(D,Q){D.side===At?Je(i.CULL_FACE):Se(i.CULL_FACE);let Y=D.side===yn;Q&&(Y=!Y),Yn(Y),D.blending===Lo&&D.transparent===!1?gn(Nr):gn(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let fe=D.stencilWrite;a.setTest(fe),fe&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ln(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Se(i.SAMPLE_ALPHA_TO_COVERAGE):Je(i.SAMPLE_ALPHA_TO_COVERAGE)}function Yn(D){P!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),P=D)}function kt(D){D!==Hp?(Se(i.CULL_FACE),D!==O&&(D===Iu?i.cullFace(i.BACK):D===Gp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Je(i.CULL_FACE),O=D}function qi(D){D!==z&&(q&&i.lineWidth(D),z=D)}function ln(D,Q,Y){D?(Se(i.POLYGON_OFFSET_FILL),(L!==Q||W!==Y)&&(L=Q,W=Y,o.getReversed()&&(Q=-Q,Y=-Y),i.polygonOffset(Q,Y))):Je(i.POLYGON_OFFSET_FILL)}function fi(D){D?Se(i.SCISSOR_TEST):Je(i.SCISSOR_TEST)}function di(D){D===void 0&&(D=i.TEXTURE0+Z-1),ne!==D&&(i.activeTexture(D),ne=D)}function pi(D,Q,Y){Y===void 0&&(ne===null?Y=i.TEXTURE0+Z-1:Y=ne);let fe=se[Y];fe===void 0&&(fe={type:void 0,texture:void 0},se[Y]=fe),(fe.type!==D||fe.texture!==Q)&&(ne!==Y&&(i.activeTexture(Y),ne=Y),i.bindTexture(D,Q||Oe[D]),fe.type=D,fe.texture=Q)}function B(){let D=se[ne];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function mi(){try{i.compressedTexImage2D(...arguments)}catch(D){Ge("WebGLState:",D)}}function Bt(){try{i.compressedTexImage3D(...arguments)}catch(D){Ge("WebGLState:",D)}}function zt(){try{i.texSubImage2D(...arguments)}catch(D){Ge("WebGLState:",D)}}function ge(){try{i.texSubImage3D(...arguments)}catch(D){Ge("WebGLState:",D)}}function Qt(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Ge("WebGLState:",D)}}function Be(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Ge("WebGLState:",D)}}function Ke(){try{i.texStorage2D(...arguments)}catch(D){Ge("WebGLState:",D)}}function I(){try{i.texStorage3D(...arguments)}catch(D){Ge("WebGLState:",D)}}function b(){try{i.texImage2D(...arguments)}catch(D){Ge("WebGLState:",D)}}function H(){try{i.texImage3D(...arguments)}catch(D){Ge("WebGLState:",D)}}function oe(D){return u[D]!==void 0?u[D]:i.getParameter(D)}function ee(D,Q){u[D]!==Q&&(i.pixelStorei(D,Q),u[D]=Q)}function ce(D){j.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),j.copy(D))}function pe(D){Me.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Me.copy(D))}function $(D,Q){let Y=c.get(Q);Y===void 0&&(Y=new WeakMap,c.set(Q,Y));let fe=Y.get(D);fe===void 0&&(fe=i.getUniformBlockIndex(Q,D.name),i.uniformBlockBinding(Q,fe,fe),Y.set(D,fe))}function J(D,Q,Y){let le=c.get(Q).get(D);l[le]!==Y&&(i.bindBufferBase(i.UNIFORM_BUFFER,le,Y),l[le]=Y)}function ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},ne=null,se={},f={},l={},d=new WeakMap,p=[],x=null,m=!1,g=null,v=null,w=null,S=null,A=null,R=null,y=null,T=new Ee(0,0,0),N=0,C=!1,P=null,O=null,z=null,L=null,W=null,j.set(0,0,i.canvas.width,i.canvas.height),Me.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Se,disable:Je,bindFramebuffer:Zt,drawBuffers:ke,useProgram:vt,setBlending:gn,setMaterial:jt,setFlipSided:Yn,setCullFace:kt,setLineWidth:qi,setPolygonOffset:ln,setScissorTest:fi,activeTexture:di,bindTexture:pi,unbindTexture:B,compressedTexImage2D:mi,compressedTexImage3D:Bt,texImage2D:b,texImage3D:H,pixelStorei:ee,getParameter:oe,updateUBOMapping:$,uniformBlockBinding:J,texStorage2D:Ke,texStorage3D:I,texSubImage2D:zt,texSubImage3D:ge,compressedTexSubImage2D:Qt,compressedTexSubImage3D:Be,scissor:ce,viewport:pe,reset:ue}}function GS(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,h=new WeakMap,u=new Set,f,d=new WeakMap,p=new Set,x=new FinalizationRegistry(I=>p.delete(I)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,b){return m?new OffscreenCanvas(I,b):_o("canvas")}function v(I,b,H){let oe=1,ee=Ke(I);if((ee.width>H||ee.height>H)&&(oe=H/Math.max(ee.width,ee.height)),oe<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let ce=Math.floor(oe*ee.width),pe=Math.floor(oe*ee.height);f===void 0&&(f=g(ce,pe));let $=b?g(ce,pe):f;return $.width=ce,$.height=pe,$.getContext("2d").drawImage(I,0,0,ce,pe),Le("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+ce+"x"+pe+")."),$}else return"data"in I&&Le("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),I;return I}function w(I){return I.generateMipmaps}function S(I){i.generateMipmap(I)}function A(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(I,b,H,oe,ee,ce=!1){if(I!==null){if(i[I]!==void 0)return i[I];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let pe;oe&&(pe=e.get("EXT_texture_norm16"),pe||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=b;if(b===i.RED&&(H===i.FLOAT&&($=i.R32F),H===i.HALF_FLOAT&&($=i.R16F),H===i.UNSIGNED_BYTE&&($=i.R8),H===i.UNSIGNED_SHORT&&pe&&($=pe.R16_EXT),H===i.SHORT&&pe&&($=pe.R16_SNORM_EXT)),b===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.R8UI),H===i.UNSIGNED_SHORT&&($=i.R16UI),H===i.UNSIGNED_INT&&($=i.R32UI),H===i.BYTE&&($=i.R8I),H===i.SHORT&&($=i.R16I),H===i.INT&&($=i.R32I)),b===i.RG&&(H===i.FLOAT&&($=i.RG32F),H===i.HALF_FLOAT&&($=i.RG16F),H===i.UNSIGNED_BYTE&&($=i.RG8),H===i.UNSIGNED_SHORT&&pe&&($=pe.RG16_EXT),H===i.SHORT&&pe&&($=pe.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RG8UI),H===i.UNSIGNED_SHORT&&($=i.RG16UI),H===i.UNSIGNED_INT&&($=i.RG32UI),H===i.BYTE&&($=i.RG8I),H===i.SHORT&&($=i.RG16I),H===i.INT&&($=i.RG32I)),b===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RGB8UI),H===i.UNSIGNED_SHORT&&($=i.RGB16UI),H===i.UNSIGNED_INT&&($=i.RGB32UI),H===i.BYTE&&($=i.RGB8I),H===i.SHORT&&($=i.RGB16I),H===i.INT&&($=i.RGB32I)),b===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RGBA8UI),H===i.UNSIGNED_SHORT&&($=i.RGBA16UI),H===i.UNSIGNED_INT&&($=i.RGBA32UI),H===i.BYTE&&($=i.RGBA8I),H===i.SHORT&&($=i.RGBA16I),H===i.INT&&($=i.RGBA32I)),b===i.RGB&&(H===i.UNSIGNED_SHORT&&pe&&($=pe.RGB16_EXT),H===i.SHORT&&pe&&($=pe.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),b===i.RGBA){let J=ce?pa:nt.getTransfer(ee);H===i.FLOAT&&($=i.RGBA32F),H===i.HALF_FLOAT&&($=i.RGBA16F),H===i.UNSIGNED_BYTE&&($=J===gt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&pe&&($=pe.RGBA16_EXT),H===i.SHORT&&pe&&($=pe.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function y(I,b){let H;return I?b===null||b===Oi||b===Br?H=i.DEPTH24_STENCIL8:b===ri?H=i.DEPTH32F_STENCIL8:b===Fo&&(H=i.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Oi||b===Br?H=i.DEPTH_COMPONENT24:b===ri?H=i.DEPTH_COMPONENT32F:b===Fo&&(H=i.DEPTH_COMPONENT16),H}function T(I,b){return w(I)===!0||I.isFramebufferTexture&&I.minFilter!==qt&&I.minFilter!==tn?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function N(I){let b=new WeakRef(I);n.get(I).__ref=b,p.add(b),x.register(I,b,b)}function C(I){let b=n.get(I).__ref;b!==void 0&&(p.delete(b),x.unregister(b))}function P(I){z(I.target)}function O(I){L(I.target)}function z(I){I.removeEventListener("dispose",P),C(I),Z(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&u.delete(I)}function L(I){I.removeEventListener("dispose",O),C(I),re(I)}function W(){for(let I of p){let b=I.deref();b!==void 0&&(b.isRenderTarget===!0?L(b):z(b))}p.clear(),u.clear()}function Z(I){let b=n.get(I);if(b.__webglInit===void 0)return;let H=I.source,oe=d.get(H);if(oe){let ee=oe[b.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&q(I),Object.keys(oe).length===0&&d.delete(H)}n.remove(I)}function q(I){let b=n.get(I);i.deleteTexture(b.__webglTexture);let H=I.source,oe=d.get(H);delete oe[b.__cacheKey],o.memory.textures--}function re(I){let b=n.get(I);b.__depthDisposeCallback&&b.__depthDisposeCallback();let H=I.depthTexture;if(H&&H.renderTarget===I&&z(H),I.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(b.__webglFramebuffer[ee]))for(let ce=0;ce<b.__webglFramebuffer[ee].length;ce++)i.deleteFramebuffer(b.__webglFramebuffer[ee][ce]);else i.deleteFramebuffer(b.__webglFramebuffer[ee]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[ee])}else{if(Array.isArray(b.__webglFramebuffer))for(let ee=0;ee<b.__webglFramebuffer.length;ee++)i.deleteFramebuffer(b.__webglFramebuffer[ee]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ee=0;ee<b.__webglColorRenderbuffer.length;ee++)b.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[ee]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let oe=I.textures;for(let ee=0,ce=oe.length;ee<ce;ee++){let pe=n.get(oe[ee]);pe.__webglTexture&&(i.deleteTexture(pe.__webglTexture),o.memory.textures--),n.remove(oe[ee])}n.remove(I)}let K=0;function ne(){K=0}function se(){return K}function Ie(I){K=I}function Ze(){let I=K;return I>=s.maxTextures&&Le("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),K+=1,I}function j(I){let b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.mipmapsAutoUpdate),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function Me(I,b){let H=n.get(I);if(I.isVideoTexture&&Qt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&H.__version!==I.version){let oe=I.image;if(oe===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{jt(H,I,b);return}}else I.isExternalTexture&&(H.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+b)}function we(I,b){let H=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){jt(H,I,b);return}else I.isExternalTexture&&(H.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+b)}function Oe(I,b){let H=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){jt(H,I,b);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+b)}function Se(I,b){let H=n.get(I);if(I.version>0&&H.__version!==I.version){Yn(H,I,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+b)}let Je={[$s]:i.REPEAT,[xi]:i.CLAMP_TO_EDGE,[go]:i.MIRRORED_REPEAT},Zt={[qt]:i.NEAREST,[Sc]:i.NEAREST_MIPMAP_NEAREST,[Or]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[No]:i.LINEAR_MIPMAP_NEAREST,[Mi]:i.LINEAR_MIPMAP_LINEAR},ke={[_m]:i.NEVER,[Qu]:i.ALWAYS,[ym]:i.LESS,[Ju]:i.LEQUAL,[vm]:i.EQUAL,[ju]:i.GEQUAL,[Mm]:i.GREATER,[Sm]:i.NOTEQUAL};function vt(I,b){if(b.type===ri&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===tn||b.magFilter===No||b.magFilter===Or||b.magFilter===Mi||b.minFilter===tn||b.minFilter===No||b.minFilter===Or||b.minFilter===Mi)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,Je[b.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,Je[b.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,Je[b.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,Zt[b.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,Zt[b.minFilter]),b.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,ke[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===qt||b.minFilter!==Or&&b.minFilter!==Mi||b.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ct(I,b){let H=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",P),N(b));let oe=b.source,ee=d.get(oe);ee===void 0&&(ee={},d.set(oe,ee));let ce=j(b);if(ce!==I.__cacheKey){ee[ce]===void 0&&(ee[ce]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ee[ce].usedTimes++;let pe=ee[I.__cacheKey];pe!==void 0&&(ee[I.__cacheKey].usedTimes--,pe.usedTimes===0&&q(b)),I.__cacheKey=ce,I.__webglTexture=ee[ce].texture}return H}function ot(I,b,H){return Math.floor(Math.floor(I/H)/b)}function gn(I,b,H,oe){let ce=I.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,H,oe,b.data);else{ce.sort((D,Q)=>D.start-Q.start);let pe=0;for(let D=1;D<ce.length;D++){let Q=ce[pe],Y=ce[D],fe=Q.start+Q.count,le=ot(Y.start,b.width,4),he=ot(Q.start,b.width,4);Y.start<=fe+1&&le===he&&ot(Y.start+Y.count-1,b.width,4)===le?Q.count=Math.max(Q.count,Y.start+Y.count-Q.start):(++pe,ce[pe]=Y)}ce.length=pe+1;let $=t.getParameter(i.UNPACK_ROW_LENGTH),J=t.getParameter(i.UNPACK_SKIP_PIXELS),ue=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let D=0,Q=ce.length;D<Q;D++){let Y=ce[D],fe=Math.floor(Y.start/4),le=Math.ceil(Y.count/4),he=fe%b.width,De=Math.floor(fe/b.width),et=le,ae=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,he),t.pixelStorei(i.UNPACK_SKIP_ROWS,De),t.texSubImage2D(i.TEXTURE_2D,0,he,De,et,ae,H,oe,b.data)}I.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,$),t.pixelStorei(i.UNPACK_SKIP_PIXELS,J),t.pixelStorei(i.UNPACK_SKIP_ROWS,ue)}}function jt(I,b,H){let oe=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(oe=i.TEXTURE_3D);let ee=Ct(I,b),ce=b.source;t.bindTexture(oe,I.__webglTexture,i.TEXTURE0+H);let pe=n.get(ce);if(ce.version!==pe.__version||ee===!0){if(t.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let ae=nt.getPrimaries(nt.workingColorSpace),Ne=b.colorSpace===Cs?null:nt.getPrimaries(b.colorSpace),Qe=b.colorSpace===Cs||ae===Ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe)}t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let J=v(b.image,!1,s.maxTextureSize);J=Be(b,J);let ue=r.convert(b.format,b.colorSpace),D=r.convert(b.type),Q=R(b.internalFormat,ue,D,b.normalized,b.colorSpace,b.isVideoTexture);vt(oe,b);let Y,fe=b.mipmaps,le=b.isVideoTexture!==!0,he=pe.__version===void 0||ee===!0,De=ce.dataReady,et=T(b,J);if(b.isDepthTexture)Q=y(b.format===Rs,b.type),he&&(le?t.texStorage2D(i.TEXTURE_2D,1,Q,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,Q,J.width,J.height,0,ue,D,null));else if(b.isDataTexture)if(fe.length>0){le&&he&&t.texStorage2D(i.TEXTURE_2D,et,Q,fe[0].width,fe[0].height);for(let ae=0,Ne=fe.length;ae<Ne;ae++)Y=fe[ae],le?De&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Y.width,Y.height,ue,D,Y.data):t.texImage2D(i.TEXTURE_2D,ae,Q,Y.width,Y.height,0,ue,D,Y.data);b.generateMipmaps=!1}else le?(he&&t.texStorage2D(i.TEXTURE_2D,et,Q,J.width,J.height),De&&gn(b,J,ue,D)):t.texImage2D(i.TEXTURE_2D,0,Q,J.width,J.height,0,ue,D,J.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){le&&he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,et,Q,fe[0].width,fe[0].height,J.depth);for(let ae=0,Ne=fe.length;ae<Ne;ae++)if(Y=fe[ae],b.format!==Si)if(ue!==null)if(le){if(De)if(b.layerUpdates.size>0){let Qe=hf(Y.width,Y.height,b.format,b.type);for(let ye of b.layerUpdates){let Mt=Y.data.subarray(ye*Qe/Y.data.BYTES_PER_ELEMENT,(ye+1)*Qe/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,ye,Y.width,Y.height,1,ue,Mt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Y.width,Y.height,J.depth,ue,Y.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,Q,Y.width,Y.height,J.depth,0,Y.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?De&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Y.width,Y.height,J.depth,ue,D,Y.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,Q,Y.width,Y.height,J.depth,0,ue,D,Y.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{le&&he&&t.texStorage2D(i.TEXTURE_2D,et,Q,fe[0].width,fe[0].height);for(let ae=0,Ne=fe.length;ae<Ne;ae++)Y=fe[ae],b.format!==Si?ue!==null?le?De&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,Y.width,Y.height,ue,Y.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,Q,Y.width,Y.height,0,Y.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?De&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Y.width,Y.height,ue,D,Y.data):t.texImage2D(i.TEXTURE_2D,ae,Q,Y.width,Y.height,0,ue,D,Y.data)}else if(b.isDataArrayTexture)if(le){if(he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,et,Q,J.width,J.height,J.depth),De)if(b.layerUpdates.size>0){let ae=hf(J.width,J.height,b.format,b.type);for(let Ne of b.layerUpdates){let Qe=J.data.subarray(Ne*ae/J.data.BYTES_PER_ELEMENT,(Ne+1)*ae/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ne,J.width,J.height,1,ue,D,Qe)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ue,D,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Q,J.width,J.height,J.depth,0,ue,D,J.data);else if(b.isData3DTexture)le?(he&&t.texStorage3D(i.TEXTURE_3D,et,Q,J.width,J.height,J.depth),De&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ue,D,J.data)):t.texImage3D(i.TEXTURE_3D,0,Q,J.width,J.height,J.depth,0,ue,D,J.data);else if(b.isFramebufferTexture){if(he)if(le)t.texStorage2D(i.TEXTURE_2D,et,Q,J.width,J.height);else{let ae=J.width,Ne=J.height;for(let Qe=0;Qe<et;Qe++)t.texImage2D(i.TEXTURE_2D,Qe,Q,ae,Ne,0,ue,D,null),ae>>=1,Ne>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let ae=i.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),J.parentNode!==ae){ae.appendChild(J),u.add(b),ae.onpaint=Ne=>{let Qe=Ne.changedElements;for(let ye of u)Qe.includes(ye.image)&&(ye.needsUpdate=!0)},ae.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{let Qe=i.RGBA,ye=i.RGBA,Mt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Qe,ye,Mt,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(fe.length>0){if(le&&he){let ae=Ke(fe[0]);t.texStorage2D(i.TEXTURE_2D,et,Q,ae.width,ae.height)}for(let ae=0,Ne=fe.length;ae<Ne;ae++)Y=fe[ae],le?De&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,ue,D,Y):t.texImage2D(i.TEXTURE_2D,ae,Q,ue,D,Y);b.generateMipmaps=!1}else if(le){if(he){let ae=Ke(J);t.texStorage2D(i.TEXTURE_2D,et,Q,ae.width,ae.height)}De&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,D,J)}else t.texImage2D(i.TEXTURE_2D,0,Q,ue,D,J);w(b)&&b.mipmapsAutoUpdate===!0&&S(oe),pe.__version=ce.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function Yn(I,b,H){if(b.image.length!==6)return;let oe=Ct(I,b),ee=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+H);let ce=n.get(ee);if(ee.version!==ce.__version||oe===!0){t.activeTexture(i.TEXTURE0+H);let pe=nt.getPrimaries(nt.workingColorSpace),$=b.colorSpace===Cs?null:nt.getPrimaries(b.colorSpace),J=b.colorSpace===Cs||pe===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let ue=b.isCompressedTexture||b.image[0].isCompressedTexture,D=b.image[0]&&b.image[0].isDataTexture,Q=[];for(let ye=0;ye<6;ye++)!ue&&!D?Q[ye]=v(b.image[ye],!0,s.maxCubemapSize):Q[ye]=D?b.image[ye].image:b.image[ye],Q[ye]=Be(b,Q[ye]);let Y=Q[0],fe=r.convert(b.format,b.colorSpace),le=r.convert(b.type),he=R(b.internalFormat,fe,le,b.normalized,b.colorSpace),De=b.isVideoTexture!==!0,et=ce.__version===void 0||oe===!0,ae=ee.dataReady,Ne=T(b,Y);vt(i.TEXTURE_CUBE_MAP,b);let Qe;if(b.isDepthTexture){if(he=y(b.format===Rs,b.type),et)if(De)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,he,Y.width,Y.height);else for(let ye=0;ye<6;ye++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,he,Y.width,Y.height,0,fe,le,null)}else if(ue){De&&et&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,he,Y.width,Y.height);for(let ye=0;ye<6;ye++){Qe=Q[ye].mipmaps;for(let Mt=0;Mt<Qe.length;Mt++){let cn=Qe[Mt];b.format!==Si?fe!==null?De?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Mt,0,0,cn.width,cn.height,fe,cn.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Mt,he,cn.width,cn.height,0,cn.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Mt,0,0,cn.width,cn.height,fe,le,cn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Mt,he,cn.width,cn.height,0,fe,le,cn.data)}}}else{if(Qe=b.mipmaps,De&&et){Qe.length>0&&Ne++;let ye=Ke(Q[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,he,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(D){De?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Q[ye].width,Q[ye].height,fe,le,Q[ye].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,he,Q[ye].width,Q[ye].height,0,fe,le,Q[ye].data);for(let Mt=0;Mt<Qe.length;Mt++){let Hs=Qe[Mt].image[ye].image;De?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Mt+1,0,0,Hs.width,Hs.height,fe,le,Hs.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Mt+1,he,Hs.width,Hs.height,0,fe,le,Hs.data)}}else{De?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,fe,le,Q[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,he,fe,le,Q[ye]);for(let Mt=0;Mt<Qe.length;Mt++){let cn=Qe[Mt];De?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Mt+1,0,0,fe,le,cn.image[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Mt+1,he,fe,le,cn.image[ye])}}}w(b)&&b.mipmapsAutoUpdate===!0&&S(i.TEXTURE_CUBE_MAP),ce.__version=ee.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function kt(I,b,H,oe,ee,ce){let pe=r.convert(H.format,H.colorSpace),$=r.convert(H.type),J=R(H.internalFormat,pe,$,H.normalized,H.colorSpace),ue=n.get(b),D=n.get(H);if(D.__renderTarget=b,!ue.__hasExternalTextures){let Q=Math.max(1,b.width>>ce),Y=Math.max(1,b.height>>ce);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,ce,J,Q,Y,b.depth,0,pe,$,null):t.texImage2D(ee,ce,J,Q,Y,0,pe,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),ge(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,ee,D.__webglTexture,0,zt(b)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,ee,D.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function qi(I,b,H){if(i.bindRenderbuffer(i.RENDERBUFFER,I),b.depthBuffer){let oe=b.depthTexture,ee=oe&&oe.isDepthTexture?oe.type:null,ce=y(b.stencilBuffer,ee),pe=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ge(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,zt(b),ce,b.width,b.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,zt(b),ce,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ce,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,I)}else{let oe=b.textures;for(let ee=0;ee<oe.length;ee++){let ce=oe[ee],pe=r.convert(ce.format,ce.colorSpace),$=r.convert(ce.type),J=R(ce.internalFormat,pe,$,ce.normalized,ce.colorSpace);ge(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,zt(b),J,b.width,b.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,zt(b),J,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,J,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ln(I,b,H){let oe=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=n.get(b.depthTexture);ee.__renderTarget=b;let ce=oe?b.depthTexture.image[0]:b.depthTexture.image;(!ee.__webglTexture||ce.width!==b.width||ce.height!==b.height)&&(ce.width=b.width,ce.height=b.height,b.depthTexture.needsUpdate=!0),oe?Se(b.depthTexture,0):Me(b.depthTexture,0);let pe=ee.__webglTexture,$=zt(b),J=oe?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,ue=b.depthTexture.format===Rs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===ys)ge(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,J,pe,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,ue,J,pe,0);else if(b.depthTexture.format===Rs)ge(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,J,pe,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,ue,J,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function fi(I){let b=n.get(I),H=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){let oe=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),oe){let ee=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,oe.removeEventListener("dispose",ee)};oe.addEventListener("dispose",ee),b.__depthDisposeCallback=ee}b.__boundDepthTexture=oe}if(I.depthTexture&&!b.__autoAllocateDepthBuffer)if(H)for(let oe=0;oe<6;oe++)ln(b.__webglFramebuffer[oe],I,oe);else I.texture.mipmaps.length>0?ln(b.__webglFramebuffer[0],I,0):ln(b.__webglFramebuffer,I,0);else if(H){b.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[oe]),b.__webglDepthbuffer[oe]===void 0)b.__webglDepthbuffer[oe]=i.createRenderbuffer(),qi(b.__webglDepthbuffer[oe],I,!1);else{let ee=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=b.__webglDepthbuffer[oe];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,ce)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),qi(b.__webglDepthbuffer,I,!1);else{let ee=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,ce)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function di(I,b,H){let oe=n.get(I);b!==void 0&&kt(oe.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&fi(I)}function pi(I){let b=I.texture,H=n.get(I),oe=n.get(b);I.addEventListener("dispose",O),N(I);let ee=I.textures,ce=I.isWebGLCubeRenderTarget===!0,pe=ee.length>1;if(pe||(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=b.version,o.memory.textures++),ce){H.__webglFramebuffer=[];for(let $=0;$<6;$++)if(b.mipmaps.length>0){H.__webglFramebuffer[$]=[];for(let J=0;J<b.mipmaps.length;J++)H.__webglFramebuffer[$][J]=i.createFramebuffer()}else H.__webglFramebuffer[$]=i.createFramebuffer()}else{if(b.mipmaps.length>0){H.__webglFramebuffer=[];for(let $=0;$<b.mipmaps.length;$++)H.__webglFramebuffer[$]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(pe)for(let $=0,J=ee.length;$<J;$++){let ue=n.get(ee[$]);ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&ge(I)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let $=0;$<ee.length;$++){let J=ee[$];H.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[$]);let ue=r.convert(J.format,J.colorSpace),D=r.convert(J.type),Q=R(J.internalFormat,ue,D,J.normalized,J.colorSpace,I.isXRRenderTarget===!0),Y=zt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Y,Q,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,H.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),qi(H.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),vt(i.TEXTURE_CUBE_MAP,b);for(let $=0;$<6;$++)if(b.mipmaps.length>0)for(let J=0;J<b.mipmaps.length;J++)kt(H.__webglFramebuffer[$][J],I,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,J);else kt(H.__webglFramebuffer[$],I,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);w(b)?S(i.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(pe){for(let $=0,J=ee.length;$<J;$++){let ue=ee[$],D=n.get(ue),Q=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Q=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,D.__webglTexture),vt(Q,ue),kt(H.__webglFramebuffer,I,ue,i.COLOR_ATTACHMENT0+$,Q,0),w(ue)&&S(Q)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&($=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,oe.__webglTexture),vt($,b),b.mipmaps.length>0)for(let J=0;J<b.mipmaps.length;J++)kt(H.__webglFramebuffer[J],I,b,i.COLOR_ATTACHMENT0,$,J);else kt(H.__webglFramebuffer,I,b,i.COLOR_ATTACHMENT0,$,0);w(b)?S($):b.mipmaps.length>0&&i.texParameteri($,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&fi(I)}function B(I){let b=I.textures;for(let H=0,oe=b.length;H<oe;H++){let ee=b[H];if(w(ee)&&ee.mipmapsAutoUpdate===!0){let ce=A(I),pe=n.get(ee).__webglTexture;t.bindTexture(ce,pe),S(ce),t.unbindTexture()}}}let mi=[];function Bt(I){if(I.samples>0){if(ge(I)===!1){let b=I.textures,H=I.width,oe=I.height,ee=i.COLOR_BUFFER_BIT,ce=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(I),$=b.length>1;if($)for(let ue=0;ue<b.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ue=0;ue<b.length;ue++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[ue]);let D=n.get(b[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,H,oe,0,0,H,oe,ee,i.NEAREST),l===!0&&(mi.length=0,mi.push(i.COLOR_ATTACHMENT0+ue),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&mi.push(ce),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,mi))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let ue=0;ue<b.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,pe.__webglColorRenderbuffer[ue]);let D=n.get(b[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,D,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let b=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function zt(I){return Math.min(s.maxSamples,I.samples)}function ge(I){let b=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Qt(I){let b=o.render.frame;h.get(I)!==b&&(h.set(I,b),I.update())}function Be(I,b){let H=I.colorSpace,oe=I.format,ee=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||H!==zn&&H!==Cs&&(nt.getTransfer(H)===gt?(oe!==Si||ee!==$n)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",H)),b}function Ke(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=Ze,this.resetTextureUnits=ne,this.getTextureUnits=se,this.setTextureUnits=Ie,this.setTexture2D=Me,this.setTexture2DArray=we,this.setTexture3D=Oe,this.setTextureCube=Se,this.rebindTextures=di,this.setupRenderTarget=pi,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=fi,this.setupFrameBufferTexture=kt,this.useMultisampledRTT=ge,this.dispose=W}function VS(i,e){function t(n,s=Cs){let r,o=nt.getTransfer(s);if(n===$n)return i.UNSIGNED_BYTE;if(n===Ec)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Tc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Yu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wu)return i.BYTE;if(n===Xu)return i.SHORT;if(n===Fo)return i.UNSIGNED_SHORT;if(n===bc)return i.INT;if(n===Oi)return i.UNSIGNED_INT;if(n===ri)return i.FLOAT;if(n===Bi)return i.HALF_FLOAT;if(n===Ku)return i.ALPHA;if(n===Zu)return i.RGB;if(n===Si)return i.RGBA;if(n===ys)return i.DEPTH_COMPONENT;if(n===Rs)return i.DEPTH_STENCIL;if(n===wc)return i.RED;if(n===Ac)return i.RED_INTEGER;if(n===er)return i.RG;if(n===Rc)return i.RG_INTEGER;if(n===Cc)return i.RGBA_INTEGER;if(n===Oa||n===Ba||n===za||n===ka)if(o===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ka)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ic||n===Pc||n===Lc||n===Dc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ic)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Lc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Dc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Nc||n===Fc||n===Uc||n===Oc||n===Bc||n===Ha||n===zc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Nc||n===Fc)return o===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Uc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Oc)return r.COMPRESSED_R11_EAC;if(n===Bc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ha)return r.COMPRESSED_RG11_EAC;if(n===zc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===kc||n===Hc||n===Gc||n===Vc||n===Wc||n===Xc||n===qc||n===Yc||n===Kc||n===Zc||n===$c||n===Jc||n===jc||n===Qc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===kc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Kc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$c)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===eh||n===th||n===nh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===eh)return o===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===th)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ih||n===sh||n===Ga||n===rh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ih)return r.COMPRESSED_RED_RGTC1_EXT;if(n===sh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ga)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Br?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}function YS(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,af(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,v,w,S){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,S)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,v,w):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===yn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===yn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let v=e.get(g),w=v.envMap,S=v.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(qS.makeRotationFromEuler(S)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(l0),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,w){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=w*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,v){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===yn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let v=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function KS(i,e,t,n){let s={},r={};function o(v,w){let S=w.program;n.uniformBlockBinding(v,S,s[v.id])}function a(v,w){let S=s[v.id];S===void 0&&(p(v),S=l(v),s[v.id]=S,v.addEventListener("dispose",m));let A=w.program;n.updateUBOMapping(v,A);let R=e.render.frame;r[v.id]!==R&&(c(v),r[v.id]=R)}function l(v){let w=i.createBuffer(),S=v.__size,A=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,S,A),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function c(v){let w=s[v.id],S=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let R=0,y=S.length;R<y;R++){let T=S[R];if(Array.isArray(T))for(let N=0,C=T.length;N<C;N++)h(T[N],R,N,A);else h(T,R,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,w,S,A){if(f(v,w,S,A)===!0){let R=v.__offset,y=v.value;if(Array.isArray(y)){let T=0;for(let N=0;N<y.length;N++){let C=y[N],P=x(C,!0);u(C,v.__data,T),T+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else u(y,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,R,v.__data)}}function u(v,w,S){typeof v=="number"||typeof v=="boolean"?w[S]=v:v.isMatrix3?(w[S]=v.elements[0],w[S+1]=v.elements[1],w[S+2]=v.elements[2],w[S+3]=0,w[S+4]=v.elements[3],w[S+5]=v.elements[4],w[S+6]=v.elements[5],w[S+7]=0,w[S+8]=v.elements[6],w[S+9]=v.elements[7],w[S+10]=v.elements[8],w[S+11]=0):ArrayBuffer.isView(v)?w.set(v.subarray(0,w.length-S),S):v.toArray(w,S)}function f(v,w,S,A){let R=v.value,y=w+"_"+S;if(Array.isArray(R)){A[y]===void 0&&(A[y]=[]);let T=A[y],N=!1;for(let C=0;C<R.length;C++)d(R[C],T,C)===!0&&(N=!0);return N}return d(R,A,y)}function d(v,w,S){if(w[S]===void 0)return typeof v=="number"||typeof v=="boolean"?w[S]=v:ArrayBuffer.isView(v)?w[S]=v.slice():w[S]=v.clone(),!0;{let A=w[S];if(typeof v=="number"||typeof v=="boolean"){if(A!==v)return w[S]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(A.equals(v)===!1)return A.copy(v),!0}}return!1}function p(v){let w=v.uniforms,S=0,A=16;for(let y=0,T=w.length;y<T;y++){let N=Array.isArray(w[y])?w[y]:[w[y]];for(let C=0,P=N.length;C<P;C++){let O=N[C],z=Array.isArray(O.value)?O.value:[O.value],L=Array.isArray(w[y])||Array.isArray(O.value),W=S;for(let q=0,re=z.length;q<re;q++){let K=z[q],ne=x(K,L),se=S%A,Ie=se%ne.boundary,Ze=se+Ie;S+=Ie,Ze!==0&&A-Ze<ne.storage&&(S+=A-Ze),q===0&&(W=S),S+=ne.storage}let Z=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new Z((S-W)/Float32Array.BYTES_PER_ELEMENT),O.__offset=W}}let R=S%A;return R>0&&(S+=A-R),v.__size=S,v.__cache={},this}function x(v,w){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=16,S.storage=48):v.isMatrix4?(S.boundary=16,S.storage=64):v.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",v),w===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function m(v){let w=v.target;w.removeEventListener("dispose",m),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function g(){for(let v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:o,update:a,dispose:g}}function $S(){return ts===null&&(ts=new To(ZS,16,16,er,Bi),ts.name="DFG_LUT",ts.minFilter=tn,ts.magFilter=tn,ts.wrapS=xi,ts.wrapT=xi,ts.generateMipmaps=!1,ts.needsUpdate=!0),ts}var d_,p_,m_,g_,x_,__,y_,v_,M_,S_,b_,E_,T_,w_,A_,R_,C_,I_,P_,L_,D_,N_,F_,U_,O_,B_,z_,k_,H_,G_,V_,W_,X_,q_,Y_,K_,Z_,$_,J_,j_,Q_,ey,ty,ny,iy,sy,ry,oy,ay,ly,cy,hy,uy,fy,dy,py,my,gy,xy,_y,yy,vy,My,Sy,by,Ey,Ty,wy,Ay,Ry,Cy,Iy,Py,Ly,Dy,Ny,Fy,Uy,Oy,By,zy,ky,Hy,Gy,Vy,Wy,Xy,qy,Yy,Ky,Zy,$y,Jy,jy,Qy,ev,tv,nv,iv,sv,rv,ov,av,lv,cv,hv,uv,fv,dv,pv,mv,gv,xv,_v,yv,vv,Mv,Sv,bv,Ev,Tv,wv,Av,Rv,Cv,Iv,Pv,Lv,Dv,Nv,Fv,Uv,Ov,Bv,zv,kv,Hv,Gv,Vv,Wv,Xv,tt,ve,ns,ch,qv,Qm,Ya,Pm,jv,Qv,e0,t0,eM,tM,nM,uh,dM,n0,i0,s0,r0,o0,a0,Fm,Um,Om,Bm,zm,yf,vf,Mf,xf,Oo,nS,iS,Gm,aS,hh,dS,mS,xS,yS,MS,ES,bf,Ef,LS,US,OS,BS,zS,Jm,Xa,_f,WS,XS,Tf,wf,qS,l0,ZS,ts,fh,oi=On(()=>{gf();gf();d_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,p_=`#ifdef USE_ALPHAHASH
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
#endif`,m_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,g_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,__=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,y_=`#ifdef USE_AOMAP
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
#endif`,v_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,M_=`#ifdef USE_BATCHING
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
#endif`,S_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,b_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,E_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,T_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,w_=`#ifdef USE_IRIDESCENCE
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
#endif`,A_=`#ifdef USE_BUMPMAP
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
#endif`,R_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,C_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,I_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,P_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,L_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,D_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,N_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,F_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,U_=`#define PI 3.141592653589793
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
} // validated`,O_=`vec3 transformedNormal = objectNormal;
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
#endif`,B_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,k_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,H_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,G_="gl_FragColor = linearToOutputTexel( gl_FragColor );",V_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,W_=`#ifdef USE_ENVMAP
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
#endif`,X_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,q_=`#ifdef USE_ENVMAP
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
#endif`,Y_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,K_=`#ifdef USE_ENVMAP
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
#endif`,Z_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,J_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,j_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Q_=`#ifdef USE_GRADIENTMAP
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
}`,ey=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ty=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ny=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,sy=`#ifdef USE_ENVMAP
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
#endif`,ry=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ay=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ly=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cy=`PhysicalMaterial material;
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
#endif`,hy=`uniform sampler2D dfgLUT;
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
}`,uy=`
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
#endif`,fy=`#if defined( RE_IndirectDiffuse )
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
#endif`,dy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,py=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,my=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_y=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,My=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sy=`#if defined( USE_POINTS_UV )
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
#endif`,by=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ey=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ty=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wy=`#if defined( USE_MORPHCOLORS )
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
#endif`,Ay=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ry=`#ifdef USE_MORPHTARGETS
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
#endif`,Cy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Py=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ly=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ny=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Fy=`#ifdef USE_NORMALMAP
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
#endif`,Uy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Oy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,By=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ky=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ky=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$y=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jy=`float getShadowMask() {
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
}`,jy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qy=`#ifdef USE_SKINNING
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
#endif`,ev=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tv=`#ifdef USE_SKINNING
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
#endif`,nv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ov=`#ifdef USE_TRANSMISSION
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
#endif`,av=`#ifdef USE_TRANSMISSION
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
#endif`,lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dv=`uniform sampler2D t2D;
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
}`,pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mv=`uniform float backgroundBlurriness;
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
}`,gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_v=`#include <common>
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
}`,yv=`#if DEPTH_PACKING == 3200
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
}`,vv=`#define DISTANCE
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
}`,Mv=`#define DISTANCE
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
}`,Sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ev=`uniform float scale;
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
}`,Tv=`uniform vec3 diffuse;
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
}`,wv=`#include <common>
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
}`,Av=`uniform vec3 diffuse;
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
}`,Rv=`#define LAMBERT
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
}`,Cv=`#define LAMBERT
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
}`,Iv=`#define MATCAP
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
}`,Pv=`#define MATCAP
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
}`,Lv=`#define NORMAL
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
}`,Dv=`#define NORMAL
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
}`,Nv=`#define PHONG
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
}`,Fv=`#define PHONG
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
}`,Uv=`#define STANDARD
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
}`,Ov=`#define STANDARD
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
}`,Bv=`#define TOON
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
}`,zv=`#define TOON
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
}`,kv=`uniform float size;
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
}`,Hv=`uniform vec3 diffuse;
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
}`,Gv=`#include <common>
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
}`,Vv=`uniform vec3 color;
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
}`,Wv=`uniform float rotation;
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
}`,Xv=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:d_,alphahash_pars_fragment:p_,alphamap_fragment:m_,alphamap_pars_fragment:g_,alphatest_fragment:x_,alphatest_pars_fragment:__,aomap_fragment:y_,aomap_pars_fragment:v_,batching_pars_vertex:M_,batching_vertex:S_,begin_vertex:b_,beginnormal_vertex:E_,bsdfs:T_,iridescence_fragment:w_,bumpmap_pars_fragment:A_,clipping_planes_fragment:R_,clipping_planes_pars_fragment:C_,clipping_planes_pars_vertex:I_,clipping_planes_vertex:P_,color_fragment:L_,color_pars_fragment:D_,color_pars_vertex:N_,color_vertex:F_,common:U_,defaultnormal_vertex:O_,displacementmap_pars_vertex:B_,displacementmap_vertex:z_,emissivemap_fragment:k_,emissivemap_pars_fragment:H_,colorspace_fragment:G_,colorspace_pars_fragment:V_,envmap_fragment:W_,envmap_common_pars_fragment:X_,envmap_pars_fragment:q_,envmap_pars_vertex:Y_,envmap_physical_pars_fragment:sy,envmap_vertex:K_,fog_vertex:Z_,fog_pars_vertex:$_,fog_fragment:J_,fog_pars_fragment:j_,gradientmap_pars_fragment:Q_,lightmap_pars_fragment:ey,lights_lambert_fragment:ty,lights_lambert_pars_fragment:ny,lights_pars_begin:iy,lights_toon_fragment:ry,lights_toon_pars_fragment:oy,lights_phong_fragment:ay,lights_phong_pars_fragment:ly,lights_physical_fragment:cy,lights_physical_pars_fragment:hy,lights_fragment_begin:uy,lights_fragment_maps:fy,lights_fragment_end:dy,lightprobes_pars_fragment:py,logdepthbuf_fragment:my,logdepthbuf_pars_fragment:gy,logdepthbuf_pars_vertex:xy,logdepthbuf_vertex:_y,map_fragment:yy,map_pars_fragment:vy,map_particle_fragment:My,map_particle_pars_fragment:Sy,metalnessmap_fragment:by,metalnessmap_pars_fragment:Ey,morphinstance_vertex:Ty,morphcolor_vertex:wy,morphnormal_vertex:Ay,morphtarget_pars_vertex:Ry,morphtarget_vertex:Cy,normal_fragment_begin:Iy,normal_fragment_maps:Py,normal_pars_fragment:Ly,normal_pars_vertex:Dy,normal_vertex:Ny,normalmap_pars_fragment:Fy,clearcoat_normal_fragment_begin:Uy,clearcoat_normal_fragment_maps:Oy,clearcoat_pars_fragment:By,iridescence_pars_fragment:zy,opaque_fragment:ky,packing:Hy,premultiplied_alpha_fragment:Gy,project_vertex:Vy,dithering_fragment:Wy,dithering_pars_fragment:Xy,roughnessmap_fragment:qy,roughnessmap_pars_fragment:Yy,shadowmap_pars_fragment:Ky,shadowmap_pars_vertex:Zy,shadowmap_vertex:$y,shadowmask_pars_fragment:Jy,skinbase_vertex:jy,skinning_pars_vertex:Qy,skinning_vertex:ev,skinnormal_vertex:tv,specularmap_fragment:nv,specularmap_pars_fragment:iv,tonemapping_fragment:sv,tonemapping_pars_fragment:rv,transmission_fragment:ov,transmission_pars_fragment:av,uv_pars_fragment:lv,uv_pars_vertex:cv,uv_vertex:hv,worldpos_vertex:uv,background_vert:fv,background_frag:dv,backgroundCube_vert:pv,backgroundCube_frag:mv,cube_vert:gv,cube_frag:xv,depth_vert:_v,depth_frag:yv,distance_vert:vv,distance_frag:Mv,equirect_vert:Sv,equirect_frag:bv,linedashed_vert:Ev,linedashed_frag:Tv,meshbasic_vert:wv,meshbasic_frag:Av,meshlambert_vert:Rv,meshlambert_frag:Cv,meshmatcap_vert:Iv,meshmatcap_frag:Pv,meshnormal_vert:Lv,meshnormal_frag:Dv,meshphong_vert:Nv,meshphong_frag:Fv,meshphysical_vert:Uv,meshphysical_frag:Ov,meshtoon_vert:Bv,meshtoon_frag:zv,points_vert:kv,points_frag:Hv,shadow_vert:Gv,shadow_frag:Vv,sprite_vert:Wv,sprite_frag:Xv},ve={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},ns={basic:{uniforms:Rn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Rn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ee(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Rn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Rn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Rn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ee(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Rn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Rn([ve.points,ve.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Rn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Rn([ve.common,ve.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Rn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Rn([ve.sprite,ve.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:Rn([ve.common,ve.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:Rn([ve.lights,ve.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};ns.physical={uniforms:Rn([ns.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};ch={r:0,b:0,g:0},qv=new Ve,Qm=new qe;Qm.set(-1,0,0,0,1,0,0,0,1);Ya=class extends ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ta(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _n(5,5,5),r=new vi({name:"CubemapFromEquirect",uniforms:zr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:Nr});r.uniforms.tEquirect.value=t;let o=new Ue(s,r),a=t.minFilter;return t.minFilter===Mi&&(t.minFilter=tn),new Co(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Pm=256,jv=3,Qv=20,e0=256,t0=16,eM=3,tM=new F,nM=new Ee,uh=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Co(1,10,null),this._boxMesh=new Ue(new _n(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=tM}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,p=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(nM));let m=new Co(n,s,h);return m.position.copy(a),m.update(l,e),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=p,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Pm,sf(e))}_fromTexture(e,t){e.mapping===Ur||e.mapping===Do?this._setSize(e.image.length===0?Pm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Lm(e,!1,!1),n=Math.log2(e)-jv;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Lm(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ur||e.mapping===Do?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nm()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Dm()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=iM(),this._integrationMaterial=sM());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/t0);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-eM)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(e0*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=rM());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};dM={[Uu]:"LINEAR_TONE_MAPPING",[Ou]:"REINHARD_TONE_MAPPING",[Bu]:"CINEON_TONE_MAPPING",[zu]:"ACES_FILMIC_TONE_MAPPING",[Hu]:"AGX_TONE_MAPPING",[Gu]:"NEUTRAL_TONE_MAPPING",[ku]:"CUSTOM_TONE_MAPPING"};n0=new nn,i0=new Ms(1,1),s0=new wa(1),r0=new ga,o0=new tc,a0=new Ta,Fm=[],Um=[],Om=new Float32Array(16),Bm=new Float32Array(9),zm=new Float32Array(4);yf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=NM(t.type)}},vf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eS(t.type)}},Mf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},xf=/(\w+)(\])?(\[|\.)?/g;Oo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);tS(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};nS=37297,iS=0;Gm=new qe;aS={[Uu]:"Linear",[Ou]:"Reinhard",[Bu]:"Cineon",[zu]:"ACESFilmic",[Hu]:"AgX",[Gu]:"Neutral",[ku]:"Custom"};hh=new F;dS=/^[ \t]*#include +<([\w\d./]+)>/gm;mS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;xS={[Ua]:"SHADOWMAP_TYPE_PCF",[Po]:"SHADOWMAP_TYPE_VSM"};yS={[Do]:"ENVMAP_MODE_REFRACTION"};MS={[yc]:"ENVMAP_BLENDING_MULTIPLY",[lm]:"ENVMAP_BLENDING_MIX",[cm]:"ENVMAP_BLENDING_ADD"};ES=0,bf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ef(e),t.set(e,n)),n}},Ef=class{constructor(e){this.id=ES++,this.code=e,this.usedTimes=0}};LS=0;US=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OS=`uniform sampler2D shadow_pass;
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
}`,BS=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],zS=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Jm=new Ve,Xa=new F,_f=new F;WS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XS=`
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

}`,Tf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Aa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new vi({vertexShader:WS,fragmentShader:XS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ue(new Ar(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wf=class extends Ni{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,x=typeof XRWebGLBinding<"u",m=new Tf,g={},v=t.getContextAttributes(),w=null,S=null,A=[],R=[],y=new Xe,T=null,N=null,C=new en;C.viewport=new St;let P=new en;P.viewport=new St;let O=[C,P],z=new mc,L=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Me=A[j];return Me===void 0&&(Me=new Mo,A[j]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(j){let Me=A[j];return Me===void 0&&(Me=new Mo,A[j]=Me),Me.getGripSpace()},this.getHand=function(j){let Me=A[j];return Me===void 0&&(Me=new Mo,A[j]=Me),Me.getHandSpace()};function Z(j){let Me=R.indexOf(j.inputSource);if(Me===-1)return;let we=A[Me];we!==void 0&&(we.update(j.inputSource,j.frame,c||o),we.dispatchEvent({type:j.type,data:j.inputSource}))}function q(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",re);for(let j=0;j<A.length;j++){let Me=R[j];Me!==null&&(R[j]=null,A[j].disconnect(Me))}L=null,W=null,m.reset();for(let j in g)delete g[j];if(e.setRenderTarget(w),d=null,f=null,u=null,s=null,S=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(y.width,y.height,!1),N!==null){let j=N.camera;j.fov=N.fov,j.zoom=N.zoom,j.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",q),s.addEventListener("inputsourceschange",re),v.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(y),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Oe=null,Se=null;v.depth&&(Se=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=v.stencil?Rs:ys,Oe=v.stencil?Br:Oi);let Je={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Je),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new ni(f.textureWidth,f.textureHeight,{format:Si,type:$n,depthTexture:new Ms(f.textureWidth,f.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let we={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,we),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new ni(d.framebufferWidth,d.framebufferHeight,{format:Si,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ze.setContext(s),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function re(j){for(let Me=0;Me<j.removed.length;Me++){let we=j.removed[Me],Oe=R.indexOf(we);Oe>=0&&(R[Oe]=null,A[Oe].disconnect(we))}for(let Me=0;Me<j.added.length;Me++){let we=j.added[Me],Oe=R.indexOf(we);if(Oe===-1){for(let Je=0;Je<A.length;Je++)if(Je>=R.length){R.push(we),Oe=Je;break}else if(R[Je]===null){R[Je]=we,Oe=Je;break}if(Oe===-1)break}let Se=A[Oe];Se&&Se.connect(we)}}function K(j,Me){Me===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Me.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let Me=j.near,we=j.far;m.texture!==null&&(m.depthNear>0&&(Me=m.depthNear),m.depthFar>0&&(we=m.depthFar)),z.near=P.near=C.near=Me,z.far=P.far=C.far=we,(L!==z.near||W!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),L=z.near,W=z.far),z.layers.mask=j.layers.mask|6,C.layers.mask=z.layers.mask&-5,P.layers.mask=z.layers.mask&-3;let Oe=j.parent,Se=z.cameras;K(z,Oe);for(let Je=0;Je<Se.length;Je++)K(Se[Je],Oe);z.projectionMatrix.copy(C.projectionMatrix),z.projectionMatrixInverse.copy(C.projectionMatrixInverse),N===null&&j.isPerspectiveCamera&&(N={camera:j,fov:j.fov,zoom:j.zoom}),ne(j,z,Oe)};function ne(j,Me,we){we===null?j.matrix.copy(Me.matrixWorld):(j.matrix.copy(we.matrixWorld),j.matrix.invert(),j.matrix.multiply(Me.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Me.projectionMatrix),j.projectionMatrixInverse.copy(Me.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Sr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(j){return g[j]};let se=null;function Ie(j,Me){if(h=Me.getViewerPose(c||o),p=Me,h!==null){let we=h.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let Oe=!1;we.length!==z.cameras.length&&(z.cameras.length=0,Oe=!0);for(let ke=0;ke<we.length;ke++){let vt=we[ke],Ct=null;if(d!==null)Ct=d.getViewport(vt);else{let gn=u.getViewSubImage(f,vt);Ct=gn.viewport,ke===0&&(e.setRenderTargetTextures(S,gn.colorTexture,gn.depthStencilTexture),e.setRenderTarget(S))}let ot=O[ke];ot===void 0&&(ot=new en,ot.layers.enable(ke),ot.viewport=new St,O[ke]=ot),ot.matrix.fromArray(vt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(vt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),ke===0&&(z.matrix.copy(ot.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Oe===!0&&z.cameras.push(ot)}let Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let ke=u.getDepthInformation(we[0]);ke&&ke.isValid&&ke.texture&&m.init(ke,s.renderState)}if(Se&&Se.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let ke=0;ke<we.length;ke++){let vt=we[ke].camera;if(vt){let Ct=g[vt];Ct||(Ct=new Aa,g[vt]=Ct);let ot=u.getCameraImage(vt);Ct.sourceTexture=ot}}}}for(let we=0;we<A.length;we++){let Oe=R[we],Se=A[we];Oe!==null&&Se!==void 0&&Se.update(Oe,Me,c||o)}se&&se(j,Me),Me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Me}),p=null}let Ze=new jm;Ze.setAnimationLoop(Ie),this.setAnimationLoop=function(j){se=j},this.dispose=function(){}}},qS=new Ve,l0=new qe;l0.set(-1,0,0,0,1,0,0,0,1);ZS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ts=null;fh=class{constructor(e={}){let{canvas:t=bm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=$n}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=d,m=new Set([Cc,Rc,Ac]),g=new Set([$n,Oi,Fo,Br,Ec,Tc]),v=new Uint32Array(4),w=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},A=null,R=null,y=[],T=[],N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,P=!1,O=null,z=null,L=null,W=null;this._outputColorSpace=Pt;let Z=0,q=0,re=null,K=-1,ne=null,se=new St,Ie=new St,Ze=null,j=new Ee(0),Me=0,we=t.width,Oe=t.height,Se=1,Je=null,Zt=null,ke=new St(0,0,we,Oe),vt=new St(0,0,we,Oe),Ct=!1,ot=new Js,gn=new nc,jt=!1,Yn=!1,kt=new Ve,qi=new F,ln=new St,fi={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},di=!1;function pi(){return re===null?Se:1}let B=n;function mi(E,U){return t.getContext(E,U)}let Bt,zt,ge,Qt,Be,Ke,I,b,H,oe,ee,ce,pe,$,J,ue,D,Q,Y,fe,le,he,De;try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ne,!1),t.addEventListener("webglcontextrestored",Qe,!1),t.addEventListener("webglcontextcreationerror",ye,!1),B===null){let U="webgl2";if(B=mi(U,E),B===null)throw mi(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}et()}catch(E){throw t.removeEventListener("webglcontextlost",Ne,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),Ge("WebGLRenderer: "+E.message),E}function et(){Bt=new aM(B),Bt.init(),le=new VS(B,Bt),zt=new $v(B,Bt,e,le),ge=new HS(B,Bt),zt.reversedDepthBuffer&&f&&ge.buffers.depth.setReversed(!0),z=B.createFramebuffer(),L=B.createFramebuffer(),W=B.createFramebuffer(),Qt=new hM(B),Be=new AS,Ke=new GS(B,Bt,ge,Be,zt,le,Qt),I=new oM(C),b=new f_(B),he=new Kv(B,b),H=new lM(B,b,Qt,he),oe=new fM(B,H,b,he,Qt),Q=new uM(B,zt,Ke),J=new Jv(Be),ee=new wS(C,I,Bt,zt,he,J),ce=new YS(C,Be),pe=new CS,$=new FS(Bt),D=new Yv(C,I,ge,oe,p,l),ue=new kS(C,oe,zt),De=new KS(B,Qt,zt,ge),Y=new Zv(B,Bt,Qt),fe=new cM(B,Bt,Qt),Qt.programs=ee.programs,C.capabilities=zt,C.extensions=Bt,C.properties=Be,C.renderLists=pe,C.shadowMap=ue,C.state=ge,C.info=Qt}x!==$n&&(N=new pM(x,t.width,t.height,a,s,r));let ae=new wf(C,B);this.xr=ae,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let E=Bt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Bt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(E){E!==void 0&&(Se=E,this.setSize(we,Oe,!1))},this.getSize=function(E){return E.set(we,Oe)},this.setSize=function(E,U,X=!0){if(ae.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}we=E,Oe=U,t.width=Math.floor(E*Se),t.height=Math.floor(U*Se),X===!0&&(t.style.width=E+"px",t.style.height=U+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(we*Se,Oe*Se).floor()},this.setDrawingBufferSize=function(E,U,X){we=E,Oe=U,Se=X,t.width=Math.floor(E*X),t.height=Math.floor(U*X),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(x===$n){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(se)},this.getViewport=function(E){return E.copy(ke)},this.setViewport=function(E,U,X,k){E.isVector4?ke.set(E.x,E.y,E.z,E.w):ke.set(E,U,X,k),ge.viewport(se.copy(ke).multiplyScalar(pi()).round())},this.getScissor=function(E){return E.copy(vt)},this.setScissor=function(E,U,X,k){E.isVector4?vt.set(E.x,E.y,E.z,E.w):vt.set(E,U,X,k),ge.scissor(Ie.copy(vt).multiplyScalar(pi()).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(E){ge.setScissorTest(Ct=E)},this.setOpaqueSort=function(E){Je=E},this.setTransparentSort=function(E){Zt=E},this.getClearColor=function(E){return E.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,X=!0){let k=0;if(E){let G=!1;if(re!==null){let me=re.texture.format;G=m.has(me)}if(G){let me=re.texture.type,Te=g.has(me),de=D.getClearColor(),be=D.getClearAlpha(),Pe=de.r,$e=de.g,at=de.b;Te?(v[0]=Pe,v[1]=$e,v[2]=at,v[3]=be,B.clearBufferuiv(B.COLOR,0,v)):(w[0]=Pe,w[1]=$e,w[2]=at,w[3]=be,B.clearBufferiv(B.COLOR,0,w))}else k|=B.COLOR_BUFFER_BIT}U&&(k|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(k|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&B.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),O=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Ne,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),D.dispose(),pe.dispose(),$.dispose(),Ke.dispose(),Be.dispose(),I.dispose(),oe.dispose(),H.dispose(),he.dispose(),De.dispose(),ee.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Xd),ae.removeEventListener("sessionend",qd),hr.stop()};function Ne(E){E.preventDefault(),ma("WebGLRenderer: Context Lost."),P=!0}function Qe(){ma("WebGLRenderer: Context Restored."),P=!1;let E=Qt.autoReset,U=ue.enabled,X=ue.autoUpdate,k=ue.needsUpdate,G=ue.type;et(),Qt.autoReset=E,ue.enabled=U,ue.autoUpdate=X,ue.needsUpdate=k,ue.type=G}function ye(E){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Mt(E){let U=E.target;U.removeEventListener("dispose",Mt),cn(U)}function cn(E){Hs(E),Be.remove(E)}function Hs(E){let U=Be.get(E).programs;U!==void 0&&(U.forEach(function(X){ee.releaseProgram(X)}),E.isShaderMaterial&&ee.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,X,k,G,me){U===null&&(U=fi);let Te=G.isMesh&&G.matrixWorld.determinantAffine()<0,de=sx(E,U,X,k,G);ge.setMaterial(k,Te);let be=X.index,Pe=1;if(k.wireframe===!0){if(be=H.getWireframeAttribute(X),be===void 0)return;Pe=2}let $e=X.drawRange,at=X.attributes.position,Ae=$e.start*Pe,lt=($e.start+$e.count)*Pe;me!==null&&(Ae=Math.max(Ae,me.start*Pe),lt=Math.min(lt,(me.start+me.count)*Pe)),be!==null?(Ae=Math.max(Ae,0),lt=Math.min(lt,be.count)):at!=null&&(Ae=Math.max(Ae,0),lt=Math.min(lt,at.count));let $t=lt-Ae;if($t<0||$t===1/0)return;he.setup(G,k,de,X,be);let Dt,It=Y;if(be!==null&&(Dt=b.get(be),It=fe,It.setIndex(Dt)),G.isMesh)k.wireframe===!0?(ge.setLineWidth(k.wireframeLinewidth*pi()),It.setMode(B.LINES)):It.setMode(B.TRIANGLES);else if(G.isLine){let bn=k.linewidth;bn===void 0&&(bn=1),ge.setLineWidth(bn*pi()),G.isLineSegments?It.setMode(B.LINES):G.isLineLoop?It.setMode(B.LINE_LOOP):It.setMode(B.LINE_STRIP)}else G.isPoints?It.setMode(B.POINTS):G.isSprite&&It.setMode(B.TRIANGLES);if(G.isBatchedMesh)if(Bt.get("WEBGL_multi_draw"))It.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let bn=G._multiDrawStarts,Re=G._multiDrawCounts,Un=G._multiDrawCount,dt=be?b.get(be).bytesPerElement:1,ur=Be.get(k).currentProgram.getUniforms();for(let En=0;En<Un;En++)ur.setValue(B,"_gl_DrawID",En),It.render(bn[En]/dt,Re[En])}else if(G.isInstancedMesh)It.renderInstances(Ae,$t,G.count);else if(X.isInstancedBufferGeometry){let bn=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Re=Math.min(X.instanceCount,bn);It.renderInstances(Ae,$t,Re)}else It.render(Ae,$t)};function Wd(E,U,X,k){O!==null&&E.isNodeMaterial&&O.setObject(k,E),jt===!0&&J.setState(E,X,!1),E.transparent===!0&&E.side===At&&E.forceSinglePass===!1?(E.side=yn,E.needsUpdate=!0,ta(E,U,k),E.side=ji,E.needsUpdate=!0,ta(E,U,k),E.side=At):ta(E,U,k)}this.compile=function(E,U,X=null){X===null&&(X=E),O!==null&&O.renderStart(E,U,X),R=$.get(X),R.init(U),T.push(R),X.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(R.pushLight(G),G.castShadow&&R.pushShadow(G))}),E!==X&&E.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(R.pushLight(G),G.castShadow&&R.pushShadow(G))}),R.setupLights(),O!==null&&O.updateLights(R.state.lightsArray),Yn=this.localClippingEnabled,jt=J.init(this.clippingPlanes,Yn),jt===!0&&J.setGlobalState(this.clippingPlanes,U),O!==null&&ue.render(R.state.shadowsArray,X,U);let k=new Set;return E.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let me=G.material;if(me)if(Array.isArray(me))for(let Te=0;Te<me.length;Te++){let de=me[Te];Wd(de,X,U,G),k.add(de)}else Wd(me,X,U,G),k.add(me)}),R=T.pop(),O!==null&&O.renderEnd(),k},this.compileAsync=function(E,U,X=null){let k=this.compile(E,U,X);return new Promise(G=>{function me(){if(k.forEach(function(Te){let be=Be.get(Te).currentProgram;(be===void 0||be.isReady())&&k.delete(Te)}),k.size===0){G(E);return}setTimeout(me,10)}Bt.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Zh=null;function nx(E){Zh&&Zh(E)}function Xd(){hr.stop()}function qd(){hr.start()}let hr=new jm;hr.setAnimationLoop(nx),typeof self<"u"&&hr.setContext(self),this.setAnimationLoop=function(E){Zh=E,ae.setAnimationLoop(E),E===null?hr.stop():hr.start()},ae.addEventListener("sessionstart",Xd),ae.addEventListener("sessionend",qd),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;O!==null&&O.renderStart(E,U);let X=ae.enabled===!0&&ae.isPresenting===!0,k=N!==null&&(re===null||X)&&N.begin(C,re);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(U),U=ae.getCamera()),E.isScene===!0&&E.onBeforeRender(C,E,U,re),R=$.get(E,T.length),R.init(U),R.state.textureUnits=Ke.getTextureUnits(),T.push(R),kt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?gn.setFromArrayCamera(U):ot.setFromProjectionMatrix(kt,_i,U.reversedDepth),Yn=this.localClippingEnabled,jt=J.init(this.clippingPlanes,Yn),A=pe.get(E,y.length),A.init(),y.push(A),this.info.render.frame++,ae.enabled===!0&&ae.isPresenting===!0){let Te=C.xr.getDepthSensingMesh();Te!==null&&$h(Te,U,-1/0,C.sortObjects)}$h(E,U,0,C.sortObjects),A.finish(),O!==null&&O.updateLights(R.state.lightsArray),C.sortObjects===!0&&A.sort(Je,Zt),di=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,di&&D.addToRenderList(A,E),this.info.autoReset===!0&&this.info.reset(),jt===!0&&J.beginShadows();let G=R.state.shadowsArray;if(ue.render(G,E,U),jt===!0&&J.endShadows(),(k&&N.hasRenderPass())===!1){let Te=A.opaque,de=A.transmissive;if(R.setupLights(),U.isArrayCamera){let be=U.cameras;if(de.length>0)for(let Pe=0,$e=be.length;Pe<$e;Pe++){let at=be[Pe];Kd(Te,de,E,at)}di&&D.render(E);for(let Pe=0,$e=be.length;Pe<$e;Pe++){let at=be[Pe];Yd(A,E,at,at.viewport)}}else de.length>0&&Kd(Te,de,E,U),di&&D.render(E),Yd(A,E,U)}re!==null&&q===0&&(Ke.updateMultisampleRenderTarget(re),Ke.updateRenderTargetMipmap(re)),k&&N.end(C),E.isScene===!0&&E.onAfterRender(C,E,U),he.resetDefaultState(),K=-1,ne=null,T.pop(),T.length>0?(R=T[T.length-1],Ke.setTextureUnits(R.state.textureUnits),jt===!0&&J.setGlobalState(C.clippingPlanes,R.state.camera)):R=null,y.pop(),y.length>0?A=y[y.length-1]:A=null,O!==null&&O.renderEnd()};function $h(E,U,X,k){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)R.pushLight(E),E.castShadow&&R.pushShadow(E);else if(E.isSprite){let Te=U.isArrayCamera?gn:ot;if(!E.frustumCulled||E.intersectsFrustum(Te)){k&&ln.setFromMatrixPosition(E.matrixWorld).applyMatrix4(kt);let de=oe.update(E),be=E.material;be.visible&&A.push(E,de,be,X,ln.z,null,U)}}else if(E.isMesh||E.isLine||E.isPoints){let Te=U.isArrayCamera?gn:ot;if(!E.frustumCulled||E.intersectsFrustum(Te)){let de=oe.update(E),be=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ln.copy(E.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),ln.copy(de.boundingSphere.center)),ln.applyMatrix4(E.matrixWorld).applyMatrix4(kt)),Array.isArray(be)){let Pe=de.groups;for(let $e=0,at=Pe.length;$e<at;$e++){let Ae=Pe[$e],lt=be[Ae.materialIndex];lt&&lt.visible&&A.push(E,de,lt,X,ln.z,Ae,U)}}else be.visible&&A.push(E,de,be,X,ln.z,null,U)}}}let me=E.children;for(let Te=0,de=me.length;Te<de;Te++)$h(me[Te],U,X,k)}function Yd(E,U,X,k){let{opaque:G,transmissive:me,transparent:Te}=E;R.setupLightsView(X),jt===!0&&J.setGlobalState(C.clippingPlanes,X),k&&ge.viewport(se.copy(k)),G.length>0&&xl(G,U,X),me.length>0&&xl(me,U,X),Te.length>0&&xl(Te,U,X),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Kd(E,U,X,k){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[k.id]===void 0){let Ae=Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[k.id]=new ni(1,1,{generateMipmaps:!0,type:Ae?Bi:$n,minFilter:Mi,samples:Math.max(4,zt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:nt.workingColorSpace})}let me=R.state.transmissionRenderTarget[k.id],Te=k.viewport||se;me.setSize(Te.z*C.transmissionResolutionScale,Te.w*C.transmissionResolutionScale);let de=C.getRenderTarget(),be=C.getActiveCubeFace(),Pe=C.getActiveMipmapLevel();C.setRenderTarget(me),C.getClearColor(j),Me=C.getClearAlpha(),Me<1&&C.setClearColor(16777215,.5),C.clear(),di&&D.render(X);let $e=C.toneMapping;C.toneMapping=Qi;let at=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),R.setupLightsView(k),jt===!0&&J.setGlobalState(C.clippingPlanes,k),xl(E,X,k),Ke.updateMultisampleRenderTarget(me),Ke.updateRenderTargetMipmap(me),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let lt=0,$t=U.length;lt<$t;lt++){let Dt=U[lt],{object:It,geometry:bn,material:Re,group:Un}=Dt;if(Re.side===At&&It.layers.test(k.layers)){let dt=Re.side;Re.side=yn,Re.needsUpdate=!0,Zd(It,X,k,bn,Re,Un),Re.side=dt,Re.needsUpdate=!0,Ae=!0}}Ae===!0&&(Ke.updateMultisampleRenderTarget(me),Ke.updateRenderTargetMipmap(me))}C.setRenderTarget(de,be,Pe),C.setClearColor(j,Me),at!==void 0&&(k.viewport=at),C.toneMapping=$e}function xl(E,U,X){let k=U.isScene===!0?U.overrideMaterial:null;for(let G=0,me=E.length;G<me;G++){let Te=E[G],{object:de,geometry:be,group:Pe}=Te,$e=Te.material;$e.allowOverride===!0&&k!==null&&($e=k),de.layers.test(X.layers)&&Zd(de,U,X,be,$e,Pe)}}function Zd(E,U,X,k,G,me){O!==null&&G.isNodeMaterial&&O.setObject(E,G),E.onBeforeRender(C,U,X,k,G,me),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(C,U,X,k,E,me),G.transparent===!0&&G.side===At&&G.forceSinglePass===!1?(G.side=yn,G.needsUpdate=!0,C.renderBufferDirect(X,U,k,G,E,me),G.side=ji,G.needsUpdate=!0,C.renderBufferDirect(X,U,k,G,E,me),G.side=At):C.renderBufferDirect(X,U,k,G,E,me),E.onAfterRender(C,U,X,k,G,me)}function $d(E){let U=0;for(let X of E)X.texture!==null&&U++;return U}function ta(E,U,X){U.isScene!==!0&&(U=fi);let k=Be.get(E),G=R.state.lights,me=R.state.shadowsArray,Te=G.state.version,de=ee.getParameters(E,G.state,me,U,X,R.state.lightProbeGridArray),be=ee.getProgramCacheKey(de),Pe=k.programs;k.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?U.environment:null,k.fog=U.fog;let $e=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;k.envMap=I.get(E.envMap||k.environment,$e),k.envMapRotation=k.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Pe===void 0&&(E.addEventListener("dispose",Mt),Pe=new Map,k.programs=Pe,k.programVariants=new Map);let at=Pe.get(be);if(at!==void 0){if(k.currentProgram===at&&k.lightsStateVersion===Te)return jd(E,de),at}else de.uniforms=ee.getUniforms(E),O!==null&&E.isNodeMaterial&&O.build(E,X,de),E.onBeforeCompile(de,C),at=ee.acquireProgram(de,be),Pe.set(be,at),k.uniforms=de.uniforms;let Ae=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ae.clippingPlanes=J.uniform),jd(E,de),k.needsLights=ox(E),k.lightsStateVersion=Te,k.needsLights&&(Ae.ambientLightColor.value=G.state.ambient,Ae.lightProbe.value=G.state.probe,Ae.sunLights.value=G.state.sun,Ae.sunLightShadows.value=G.state.sunShadow,Ae.directionalLights.value=G.state.directional,Ae.directionalLightShadows.value=G.state.directionalShadow,Ae.spotLights.value=G.state.spot,Ae.spotLightShadows.value=G.state.spotShadow,Ae.rectAreaLights.value=G.state.rectArea,Ae.ltc_1.value=G.state.rectAreaLTC1,Ae.ltc_2.value=G.state.rectAreaLTC2,Ae.pointLights.value=G.state.point,Ae.pointLightShadows.value=G.state.pointShadow,Ae.hemisphereLights.value=G.state.hemi,Ae.sunShadowMatrix.value=G.state.sunShadowMatrix,Ae.sunShadowCascade.value=G.state.sunShadowCascade,Ae.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ae.spotLightMatrix.value=G.state.spotLightMatrix,Ae.spotLightMap.value=G.state.spotLightMap,Ae.pointShadowMatrix.value=G.state.pointShadowMatrix),k.numLightProbeGrids=$d(R.state.lightProbeGridArray),k.currentProgram=at,k.uniformsList=null,at}function ix(E,U,X,k,G){let me=Be.get(E),Te=me.currentProgram.id+","+k+","+G,de=me.programVariants.get(Te);return de===void 0?(de=ta(E,U,X),me.programVariants.set(Te,de)):(me.currentProgram=de,me.uniformsList=null,me.outputColorSpace=k,me.toneMapping=G),de}function Jd(E){if(E.uniformsList===null){let U=E.currentProgram.getUniforms();E.uniformsList=Oo.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function jd(E,U){let X=Be.get(E);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function sx(E,U,X,k,G){U.isScene!==!0&&(U=fi),Ke.resetTextureUnits();let me=U.fog,Te=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?U.environment:null,de=re===null?C.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:nt.workingColorSpace,be=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Pe=I.get(k.envMap||Te,be),$e=k.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,at=!!X.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ae=!!X.morphAttributes.position,lt=!!X.morphAttributes.normal,$t=!!X.morphAttributes.color,Dt=Qi;k.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Dt=C.toneMapping);let It=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,bn=It!==void 0?It.length:0,Re=Be.get(k),Un=R.state.lights;if(jt===!0&&(Yn===!0||E!==ne)){let Ht=E===ne&&k.id===K;J.setState(k,E,Ht)}let dt=!1,ur=!1;k.version===Re.__version?Re.needsLights&&Re.lightsStateVersion!==Un.state.version||G.isBatchedMesh&&Re.batching===!1||!G.isBatchedMesh&&Re.batching===!0||G.isBatchedMesh&&Re.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Re.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Re.instancing===!1||!G.isInstancedMesh&&Re.instancing===!0||G.isSkinnedMesh&&Re.skinning===!1||!G.isSkinnedMesh&&Re.skinning===!0||G.isInstancedMesh&&Re.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Re.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Re.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Re.instancingMorph===!1&&G.morphTexture!==null||Re.envMap!==Pe||k.fog===!0&&Re.fog!==me||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==J.numPlanes||Re.numIntersection!==J.numIntersection)||Re.vertexAlphas!==$e||Re.vertexTangents!==at||Re.morphTargets!==Ae||Re.morphNormals!==lt||Re.morphColors!==$t||Re.morphTargetsCount!==bn||Re.numLightProbeGrids!==$d(R.state.lightProbeGridArray)?dt=!0:(Re.outputColorSpace!==de||Re.toneMapping!==Dt)&&(ur=!0):(dt=!0,Re.__version=k.version);let En=Re.currentProgram;(dt===!0||ur===!0)&&(En=ur===!0?ix(k,U,G,de,Dt):ta(k,U,G),O&&k.isNodeMaterial&&O.onUpdateProgram(k,En,Re));let _l=!1,Gs=!1,fr=!1,ut=En.getUniforms(),xn=Re.uniforms;if(ge.useProgram(En.program)&&(_l=!0,Gs=!0,fr=!0),k.id!==K&&(K=k.id,Gs=!0),_l||ne!==E){ge.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ut.setValue(B,"projectionMatrix",E.projectionMatrix),ut.setValue(B,"viewMatrix",E.matrixWorldInverse);let hn=ut.map.cameraPosition;hn!==void 0&&hn.setValue(B,qi.setFromMatrixPosition(E.matrixWorld)),zt.logarithmicDepthBuffer&&ut.setValue(B,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ut.setValue(B,"isOrthographic",E.isOrthographicCamera===!0),ne!==E&&(ne=E,Gs=!0,fr=!0)}if(Re.needsLights&&(Un.state.sunShadowMap.length>0&&ut.setValue(B,"sunShadowMap",Un.state.sunShadowMap,Ke),Un.state.directionalShadowMap.length>0&&ut.setValue(B,"directionalShadowMap",Un.state.directionalShadowMap,Ke),Un.state.spotShadowMap.length>0&&ut.setValue(B,"spotShadowMap",Un.state.spotShadowMap,Ke),Un.state.pointShadowMap.length>0&&ut.setValue(B,"pointShadowMap",Un.state.pointShadowMap,Ke)),G.isSkinnedMesh){ut.setOptional(B,G,"bindMatrix"),ut.setOptional(B,G,"bindMatrixInverse");let Ht=G.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),ut.setValue(B,"boneTexture",Ht.boneTexture,Ke))}G.isBatchedMesh&&(ut.setOptional(B,G,"batchingTexture"),ut.setValue(B,"batchingTexture",G._matricesTexture,Ke),ut.setOptional(B,G,"batchingIdTexture"),ut.setValue(B,"batchingIdTexture",G._indirectTexture,Ke),ut.setOptional(B,G,"batchingColorTexture"),G._colorsTexture!==null&&ut.setValue(B,"batchingColorTexture",G._colorsTexture,Ke));let Ii=X.morphAttributes;if((Ii.position!==void 0||Ii.normal!==void 0||Ii.color!==void 0)&&Q.update(G,X,En),(Gs||Re.receiveShadow!==G.receiveShadow)&&(Re.receiveShadow=G.receiveShadow,ut.setValue(B,"receiveShadow",G.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&U.environment!==null&&(xn.envMapIntensity.value=U.environmentIntensity),xn.dfgLUT!==void 0&&(xn.dfgLUT.value=$S()),Gs){if(ut.setValue(B,"toneMappingExposure",C.toneMappingExposure),Re.needsLights&&rx(xn,fr),me&&k.fog===!0&&ce.refreshFogUniforms(xn,me),ce.refreshMaterialUniforms(xn,k,Se,Oe,R.state.transmissionRenderTarget[E.id]),Re.needsLights&&Re.numLightProbeGrids>0){let Ht=S,hn=0;for(let us of R.state.lightProbeGridArray)us.texture!==null&&(Ht.textures[hn]=us.texture,Ht.min[hn]=us.boundingBox.min,Ht.max[hn]=us.boundingBox.max,Ht.resolution[hn]=us.resolution,hn++);for(let us in Ht)Ht[us].length=hn;xn.probesSH.value=Ht.textures,xn.probesMin.value=Ht.min,xn.probesMax.value=Ht.max,xn.probesResolution.value=Ht.resolution}Oo.upload(B,Jd(Re),xn,Ke)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Oo.upload(B,Jd(Re),xn,Ke),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ut.setValue(B,"center",G.center),ut.setValue(B,"modelViewMatrix",G.modelViewMatrix),ut.setValue(B,"normalMatrix",G.normalMatrix),ut.setValue(B,"modelMatrix",G.matrixWorld),k.uniformsGroups!==void 0){let Ht=k.uniformsGroups;for(let hn=0,us=Ht.length;hn<us;hn++){let ep=Ht[hn];De.update(ep,En),De.bind(ep,En)}}return En}function rx(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.sunLights.needsUpdate=U,E.sunLightShadows.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function ox(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(E,U,X){let k=Be.get(E);k.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Be.get(E.texture).__webglTexture=U,Be.get(E.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:X,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){let X=Be.get(E);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,X=0){re=E,Z=U,q=X;let k=null,G=!1,me=!1;if(E){let de=Be.get(E);if(de.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(B.FRAMEBUFFER,de.__webglFramebuffer),se.copy(E.viewport),Ie.copy(E.scissor),Ze=E.scissorTest,ge.viewport(se),ge.scissor(Ie),ge.setScissorTest(Ze),K=-1;return}else if(de.__webglFramebuffer===void 0)Ke.setupRenderTarget(E);else if(de.__hasExternalTextures)Ke.rebindTextures(E,Be.get(E.texture).__webglTexture,Be.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let $e=E.depthTexture;if(de.__boundDepthTexture!==$e){if($e!==null&&Be.has($e)&&(E.width!==$e.image.width||E.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ke.setupDepthRenderbuffer(E)}}let be=E.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(me=!0);let Pe=Be.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Pe[U])?k=Pe[U][X]:k=Pe[U],G=!0):E.samples>0&&Ke.useMultisampledRTT(E)===!1?k=Be.get(E).__webglMultisampledFramebuffer:Array.isArray(Pe)?k=Pe[X]:k=Pe,se.copy(E.viewport),Ie.copy(E.scissor),Ze=E.scissorTest}else se.copy(ke).multiplyScalar(Se).floor(),Ie.copy(vt).multiplyScalar(Se).floor(),Ze=Ct;if(X!==0&&(k=z),ge.bindFramebuffer(B.FRAMEBUFFER,k)&&ge.drawBuffers(E,k),ge.viewport(se),ge.scissor(Ie),ge.setScissorTest(Ze),G){let de=Be.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,de.__webglTexture,X)}else if(me){let de=U;for(let be=0;be<E.textures.length;be++){let Pe=Be.get(E.textures[be]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+be,Pe.__webglTexture,X,de)}}else if(E!==null&&X!==0){let de=Be.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,de.__webglTexture,X)}K=-1};function Qd(E){let U=Be.get(E);return(U.__readFormat!==E.format||U.__readType!==E.type)&&(U.__readFormat=E.format,U.__readType=E.type,U.__formatReadable=zt.textureFormatReadable(E.format),U.__typeReadable=zt.textureTypeReadable(E.type)),U}this.readRenderTargetPixels=function(E,U,X,k,G,me,Te,de=0){if(!(E&&E.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Be.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Te!==void 0&&(be=be[Te],Array.isArray(be)&&(be=be[0])),be){ge.bindFramebuffer(B.FRAMEBUFFER,be);try{let Pe=E.textures[de],$e=Pe.format,at=Pe.type;E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+de);let Ae=Qd(Pe);if(Ae.__formatReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-k&&X>=0&&X<=E.height-G&&B.readPixels(U,X,k,G,le.convert($e),le.convert(at),me)}finally{let Pe=re!==null?Be.get(re).__webglFramebuffer:null;ge.bindFramebuffer(B.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(E,U,X,k,G,me,Te,de=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Be.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Te!==void 0&&(be=be[Te],Array.isArray(be)&&(be=be[0])),be)if(U>=0&&U<=E.width-k&&X>=0&&X<=E.height-G){ge.bindFramebuffer(B.FRAMEBUFFER,be);let Pe=E.textures[de],$e=Pe.format,at=Pe.type;E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+de);let Ae=Qd(Pe);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let lt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,lt),B.bufferData(B.PIXEL_PACK_BUFFER,me.byteLength,B.STREAM_READ),B.readPixels(U,X,k,G,le.convert($e),le.convert(at),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let $t=re!==null?Be.get(re).__webglFramebuffer:null;ge.bindFramebuffer(B.FRAMEBUFFER,$t);let Dt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Tm(B,Dt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,lt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,me),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(lt),B.deleteSync(Dt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,X=0){let k=Math.pow(2,-X),G=Math.floor(E.image.width*k),me=Math.floor(E.image.height*k),Te=U!==null?U.x:0,de=U!==null?U.y:0;Ke.setTexture2D(E,0),B.copyTexSubImage2D(B.TEXTURE_2D,X,0,0,Te,de,G,me),ge.unbindTexture()},this.copyTextureToTexture=function(E,U,X=null,k=null,G=0,me=0){let Te,de,be,Pe,$e,at,Ae,lt,$t,Dt=E.isCompressedTexture?E.mipmaps[me]:E.image;if(X!==null)Te=X.max.x-X.min.x,de=X.max.y-X.min.y,be=X.isBox3?X.max.z-X.min.z:1,Pe=X.min.x,$e=X.min.y,at=X.isBox3?X.min.z:0;else{let ut=Math.pow(2,-G);Te=Math.floor(Dt.width*ut),de=Math.floor(Dt.height*ut),E.isDataArrayTexture?be=Dt.depth:E.isData3DTexture?be=Math.floor(Dt.depth*ut):be=1,Pe=0,$e=0,at=0}k!==null?(Ae=k.x,lt=k.y,$t=k.z):(Ae=0,lt=0,$t=0);let It=le.convert(U.format),bn=le.convert(U.type),Re;U.isData3DTexture?(Ke.setTexture3D(U,0),Re=B.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ke.setTexture2DArray(U,0),Re=B.TEXTURE_2D_ARRAY):(Ke.setTexture2D(U,0),Re=B.TEXTURE_2D),ge.activeTexture(B.TEXTURE0),ge.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,U.flipY),ge.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),ge.pixelStorei(B.UNPACK_ALIGNMENT,U.unpackAlignment);let Un=ge.getParameter(B.UNPACK_ROW_LENGTH),dt=ge.getParameter(B.UNPACK_IMAGE_HEIGHT),ur=ge.getParameter(B.UNPACK_SKIP_PIXELS),En=ge.getParameter(B.UNPACK_SKIP_ROWS),_l=ge.getParameter(B.UNPACK_SKIP_IMAGES);ge.pixelStorei(B.UNPACK_ROW_LENGTH,Dt.width),ge.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Dt.height),ge.pixelStorei(B.UNPACK_SKIP_PIXELS,Pe),ge.pixelStorei(B.UNPACK_SKIP_ROWS,$e),ge.pixelStorei(B.UNPACK_SKIP_IMAGES,at);let Gs=E.isDataArrayTexture||E.isData3DTexture,fr=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){let ut=Be.get(E),xn=Be.get(U),Ii=Be.get(ut.__renderTarget),Ht=Be.get(xn.__renderTarget);ge.bindFramebuffer(B.READ_FRAMEBUFFER,Ii.__webglFramebuffer),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let hn=0;hn<be;hn++)Gs&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Be.get(E).__webglTexture,G,at+hn),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Be.get(U).__webglTexture,me,$t+hn)),B.blitFramebuffer(Pe,$e,Pe+Te,$e+de,Ae,lt,Ae+Te,lt+de,B.DEPTH_BUFFER_BIT,B.NEAREST);ge.bindFramebuffer(B.READ_FRAMEBUFFER,null),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(G!==0||E.isRenderTargetTexture||Be.has(E)){let ut=Be.get(E),xn=Be.get(U);ge.bindFramebuffer(B.READ_FRAMEBUFFER,L),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,W);for(let Ii=0;Ii<be;Ii++)Gs?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ut.__webglTexture,G,at+Ii):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ut.__webglTexture,G),fr?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,xn.__webglTexture,me,$t+Ii):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,xn.__webglTexture,me),G!==0?B.blitFramebuffer(Pe,$e,Pe+Te,$e+de,Ae,lt,Ae+Te,lt+de,B.COLOR_BUFFER_BIT,B.NEAREST):fr?B.copyTexSubImage3D(Re,me,Ae,lt,$t+Ii,Pe,$e,Te,de):B.copyTexSubImage2D(Re,me,Ae,lt,Pe,$e,Te,de);ge.bindFramebuffer(B.READ_FRAMEBUFFER,null),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else fr?E.isDataTexture||E.isData3DTexture?B.texSubImage3D(Re,me,Ae,lt,$t,Te,de,be,It,bn,Dt.data):U.isCompressedArrayTexture?B.compressedTexSubImage3D(Re,me,Ae,lt,$t,Te,de,be,It,Dt.data):B.texSubImage3D(Re,me,Ae,lt,$t,Te,de,be,It,bn,Dt):E.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,me,Ae,lt,Te,de,It,bn,Dt.data):E.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,me,Ae,lt,Dt.width,Dt.height,It,Dt.data):B.texSubImage2D(B.TEXTURE_2D,me,Ae,lt,Te,de,It,bn,Dt);ge.pixelStorei(B.UNPACK_ROW_LENGTH,Un),ge.pixelStorei(B.UNPACK_IMAGE_HEIGHT,dt),ge.pixelStorei(B.UNPACK_SKIP_PIXELS,ur),ge.pixelStorei(B.UNPACK_SKIP_ROWS,En),ge.pixelStorei(B.UNPACK_SKIP_IMAGES,_l),me===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&B.generateMipmap(Re),ge.unbindTexture()},this.initRenderTarget=function(E){Be.get(E).__webglFramebuffer===void 0&&Ke.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ke.setTextureCube(E,0):E.isData3DTexture?Ke.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ke.setTexture2DArray(E,0):Ke.setTexture2D(E,0),ge.unbindTexture()},this.resetState=function(){Z=0,q=0,re=null,ge.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}});var _,xt,Cn,Af,M,Ce,ai,Ps,xe,dn,zi=On(()=>{oi();_={scene:null,camera:null,renderer:null,t:0,wdt:0,slow:1,hitstop:0,slowmoT:0,trauma:0,mode:"menu",paused:!1,player:null,input:null,animals:[],obstacles:[],barrels:[],timers:[],score:0,kills:0,combo:0,comboT:0,bestCombo:0,rage:0,rageOn:0,timeLeft:0,elapsed:0,boss:null,stats:null,onKill:null,onMulti:null,wx:{rain:0,storm:0},buff:{},eyeK:1,env:null,override:null,spMul:1,fovAdd:0,ult:0},xt=72,Cn=[14099998,12720135,11735564,14826286],Af=[1710614,2763298,1118481],M=(i=1,e)=>e===void 0?Math.random()*i:i+Math.random()*(e-i),Ce=i=>i[Math.random()*i.length|0],ai=(i,e,t)=>Math.max(e,Math.min(t,i)),Ps=(i,e,t)=>i+(e-i)*t,xe=(i=0,e=0,t=0)=>new F(i,e,t),dn=(i,e)=>_.timers.push({t:i,fn:e})});function Pf(){if(_e){_e.resume();return}let i=window.AudioContext||window.webkitAudioContext;if(!i)return;_e=new i,kr=_e.createGain(),kr.gain.value=.85;let e=_e.createDynamicsCompressor();e.threshold.value=-14,e.ratio.value=6,kr.connect(e),e.connect(_e.destination),Ls=_e.createGain(),Ls.gain.value=.9,Ls.connect(kr),ko=_e.createGain(),ko.gain.value=.16,ko.connect(kr),Hr=_e.createBuffer(1,_e.sampleRate*2,_e.sampleRate);let t=Hr.getChannelData(0);for(let n=0;n<t.length;n++)t[n]=Math.random()*2-1;tb()}function u0(i){Nt.muted=i,kr&&(kr.gain.value=i?0:.85)}function je(i,e,t,n,s,r=0,o=Ls){if(!_e)return;let a=_e.currentTime+r,l=_e.createOscillator(),c=_e.createGain();l.type=i,l.frequency.setValueAtTime(e,a),t&&l.frequency.exponentialRampToValueAtTime(Math.max(1,t),a+n),c.gain.setValueAtTime(1e-4,a),c.gain.exponentialRampToValueAtTime(s,a+.008),c.gain.exponentialRampToValueAtTime(1e-4,a+n),l.connect(c),c.connect(o),l.start(a),l.stop(a+n+.05)}function ht(i,e,t,n,s="lowpass",r=0,o=.7,a=Ls){if(!_e)return;let l=_e.currentTime+r,c=_e.createBufferSource();c.buffer=Hr,c.loop=!0;let h=_e.createBiquadFilter();h.type=s,h.Q.value=o,h.frequency.setValueAtTime(t,l),n&&h.frequency.exponentialRampToValueAtTime(Math.max(20,n),l+i);let u=_e.createGain();u.gain.setValueAtTime(e,l),u.gain.exponentialRampToValueAtTime(1e-4,l+i),c.connect(h),h.connect(u),u.connect(a),c.start(l,Math.random()*1.5),c.stop(l+i+.05)}function c0(i,e,t={}){if(!_e||Cf>=7)return;Cf++,setTimeout(()=>Cf--,(e+(t.delay||0))*1e3+80);let n=_e.currentTime+(t.delay||0),s=t.vol||.5,r=t.f0,o=t.form||1,a=_e.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(r*i[0][1],n);for(let f=1;f<i.length;f++)a.frequency.exponentialRampToValueAtTime(r*i[f][1],n+e*i[f][0]);let l=_e.createOscillator(),c=_e.createGain();l.frequency.value=t.vib||9,c.gain.setValueAtTime(r*.01,n),c.gain.linearRampToValueAtTime(r*(t.vibAmt===void 0?.06:t.vibAmt),n+e),l.connect(c),c.connect(a.frequency);let h=_e.createGain();h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(s,n+.02),h.gain.setValueAtTime(s,n+e*(t.hold||.7)),h.gain.exponentialRampToValueAtTime(1e-4,n+e),[[850,1,5],[1350,.7,7],[2800,.35,8]].forEach(([f,d,p])=>{let x=_e.createBiquadFilter();x.type="bandpass",x.frequency.value=f*o,x.Q.value=p;let m=_e.createGain();m.gain.value=d,a.connect(x),x.connect(m),m.connect(h)});let u=[a,l];if(t.trem){let f=_e.createGain();f.gain.value=.55;let d=_e.createOscillator();d.type="square",d.frequency.value=t.trem;let p=_e.createGain();p.gain.value=.45,d.connect(p),p.connect(f.gain),h.connect(f),f.connect(Ls),d.start(n),u.push(d)}else h.connect(Ls);a.start(n),l.start(n),u.forEach(f=>f.stop(n+e+.05)),ht(e*.8,s*.22,2500*o,1800*o,"bandpass",t.delay||0,1.5)}function vn(i,e,t=0){if(!_e)return;let n=gh[i];if(e&&!n&&(n=gh[i]={g:_e.createGain()},n.g.gain.value=1e-4,n.g.connect(Ls),n.g.gain.setTargetAtTime(1,_e.currentTime,.03),JS[i](n)),e&&n&&n.set(t),!e&&n){n.g.gain.setTargetAtTime(1e-4,_e.currentTime,.04);let s=n.stop,r=n.g;setTimeout(()=>{s.forEach(o=>{try{o.stop()}catch{}}),r.disconnect()},250),gh[i]=null}}function Gr(){Object.keys(gh).forEach(i=>vn(i,!1))}function If(i,e,t,n,s){let r=_e.createOscillator(),o=_e.createGain();r.type=i,r.frequency.value=eb(e),o.gain.setValueAtTime(1e-4,t),o.gain.exponentialRampToValueAtTime(s,t+.01),o.gain.exponentialRampToValueAtTime(1e-4,t+n),r.connect(o),o.connect(ko),r.start(t),r.stop(t+n+.03)}function tb(){zo=_e.currentTime+.1,setInterval(()=>{if(!(!_e||_e.state!=="running"))for(zo<_e.currentTime&&(zo=_e.currentTime+.05);zo<_e.currentTime+.25;){let i=60/(132*Nt.tempo)/2,e=(mh>>3)%8,t=mh%8,n=jS[e],s=zo;if(t%2===0){If("triangle",t%4===0?n[0]:n[0]+7,s,i*1.6,.9);let o=_e.createOscillator(),a=_e.createGain();o.frequency.setValueAtTime(130,s),o.frequency.exponentialRampToValueAtTime(40,s+.1),a.gain.setValueAtTime(.7,s),a.gain.exponentialRampToValueAtTime(1e-4,s+.12),o.connect(a),a.connect(ko),o.start(s),o.stop(s+.15)}else{for(let o=1;o<4;o++)If("triangle",n[o]+12,s+o*.008,i*.7,.28);ht(.04,.25,8e3,6e3,"highpass",s-_e.currentTime,.7,ko)}let r=QS[mh%64];r&&If("sine",r+12,s,i*1.7,.5),mh++,zo+=i}},60)}var _e,kr,Ls,ko,Hr,Rf,Nt,Cf,In,te,h0,gh,JS,jS,QS,eb,mh,zo,tr=On(()=>{zi();_e=null,Rf={},Nt={muted:!1,tempo:1,wail:!0},Cf=0;In=(i,e)=>{if(!_e)return!1;let t=performance.now();return Rf[i]&&t-Rf[i]<e?!1:(Rf[i]=t,!0)};te={smg(){ht(.08,.32,3800,700),je("square",190,60,.07,.16)},shotgun(){ht(.4,.8,2600,180),je("sine",130,32,.32,.7),ht(.07,.22,5e3,2500,"highpass",.34),ht(.07,.22,4e3,2e3,"highpass",.46)},swing(i){ht(i?.3:.16,i?.35:.22,i?300:700,i?1500:2800,"bandpass",0,2)},slice(){ht(.1,.35,6e3,2e3,"highpass"),te.squish(.02)},squish(i=0){In("sq",45)&&(ht(.22,.5,950,140,"lowpass",i,3),je("sine",170,48,.18,.3,i))},splat(){In("sp",45)&&(ht(.32,.6,1300,90,"lowpass",0,2),je("sine",115,38,.26,.5))},boom(i=1){In("boom",60)&&(ht(1,.9*i,1900,55),je("sine",95,26,.75,.9*i),ht(.14,.35*i,8e3,2e3,"highpass"))},slam(){ht(.5,.9,700,50),je("sine",70,24,.55,1),je("triangle",220,60,.12,.4)},crack(){je("square",900,200,.06,.5),ht(.08,.6,3e3,800,"bandpass",0,1.5),je("sine",180,60,.15,.5)},kick(){ht(.12,.5,500,120),je("sine",150,55,.14,.5)},thud(){In("thud",60)&&(ht(.14,.35,380,90),je("sine",110,50,.12,.3))},clank(){In("clank",50)&&(je("square",M(700,1200),300,.08,.22),je("triangle",M(1800,2600),900,.12,.16),ht(.1,.3,5e3,1500,"bandpass",0,4))},pop(){je("sine",500,1500,.07,.4),ht(.1,.3,2e3,500)},whoosh(){ht(.5,.3,500,3500,"bandpass",0,1.2)},missile(){In("mis",40)&&(ht(.6,.3,900,3e3,"bandpass",0,1.5),je("sawtooth",160,420,.4,.12))},sling(){je("triangle",220,700,.12,.35),ht(.12,.2,1500,4e3,"bandpass",0,2)},stretch(i){In("str",90)&&je("triangle",140+i*260,150+i*280,.09,.08)},ding(){je("sine",1760,1760,.5,.25),je("sine",2637,2637,.6,.18,.06)},lock(){In("lock",70)&&je("square",1400,1400,.04,.08)},hole(){je("sine",300,30,1,.6),ht(1,.3,3e3,100)},ignite(){In("ign",120)&&ht(.3,.3,800,3e3,"bandpass",0,1)},splash(){ht(.5,.5,3e3,500,"bandpass",0,.8)},ui(){je("triangle",660,880,.08,.2)},rage(){je("sawtooth",110,440,.5,.35),je("sawtooth",165,660,.5,.25),ht(.6,.3,500,6e3,"bandpass",0,1)},announce(i){let e=523*Math.pow(1.06,Math.min(i,12));[0,4,7,12].forEach((t,n)=>je("square",e*Math.pow(2,t/12),0,.14,.13,n*.06))},end(){[0,4,7,12,16].forEach((i,e)=>je("triangle",392*Math.pow(2,i/12),0,.3,.25,e*.12))},scream(i=1,e=!1){if(!In("scr",e?10:70))return;let t=_e.currentTime,n=e?1.5:M(.25,.45),s=M(850,1300)*i,r=_e.createOscillator(),o=_e.createGain(),a=_e.createOscillator(),l=_e.createGain();r.type="triangle",r.frequency.setValueAtTime(s,t),r.frequency.linearRampToValueAtTime(s*1.6,t+.07),r.frequency.exponentialRampToValueAtTime(s*(e?.3:.75),t+n),a.frequency.value=26,l.gain.value=s*.07,a.connect(l),l.connect(r.frequency),o.gain.setValueAtTime(1e-4,t),o.gain.exponentialRampToValueAtTime(.2,t+.02),o.gain.exponentialRampToValueAtTime(1e-4,t+n),r.connect(o),o.connect(Ls),r.start(t),a.start(t),r.stop(t+n+.05),a.stop(t+n+.05)}};h0={yelp:()=>[[[0,1],[.25,1.7],[1,1.2]],M(.22,.34),{}],long:()=>[[[0,1],[.08,1.8],[.5,1.65],[1,1.25]],M(1,1.5),{vibAmt:.09,vib:11}],fall:()=>[[[0,1.2],[.1,2],[1,.55]],M(1.3,1.8),{vibAmt:.05}],rise:()=>[[[0,.9],[1,2.6]],1.1,{vibAmt:.1,vib:14}],cut:()=>[[[0,1.3],[.5,2],[1,1.9]],.2,{hold:.95}],gurgle:()=>[[[0,1.3],[.2,1],[1,.5]],M(.7,1),{trem:17,vibAmt:.02}],squeak:()=>[[[0,2.2],[1,3.2]],.09,{hold:.9}],roar:()=>[[[0,.8],[.15,1.3],[1,.6]],2.2,{vibAmt:.12,vib:7,vol:.75}]};te.wail=(i,e=1,t=!1)=>{if(!_e||!In("wl"+i,i==="yelp"||i==="squeak"?60:110))return;if(t){let o=i==="yelp"||i==="squeak"||i==="cut"?2:6;for(let a=0;a<o;a++)je("square",(950-a*110)*M(.9,1.1),700-a*100,.07,.16,a*.075);ht(.3,.2,4e3,800,"bandpass",0,6);return}let n=(h0[i]||h0.yelp)(),s=520*e*M(.92,1.1),r=.8+e*.35;c0(n[0],n[1],Object.assign({f0:s,form:r},n[2])),i==="cut"&&c0([[0,1.2],[1,.5]],.6,{f0:s*.8,form:r,trem:19,delay:.22,vol:.3})};te.cry=(i,e=1,t=!1,n=!0)=>{Nt.wail?te.wail(i,e,t):n&&te.scream(e,i!=="yelp")};te.thunder=(i=!0)=>{In("thun",250)&&(i&&(ht(.2,.9,7e3,1200,"highpass"),je("square",1400,90,.12,.4)),ht(2.6,i?.9:.45,420,40),je("sine",72,22,1.8,i?.8:.4),ht(1.6,.35,220,50,"lowpass",.6))};te.zap=()=>{In("zap",50)&&(je("sawtooth",1900,180,.12,.28),ht(.14,.45,7e3,3e3,"highpass"))};te.pickup=()=>{[0,4,7,12,16,19].forEach((i,e)=>je("triangle",587*Math.pow(2,i/12),0,.16,.24,e*.055))};te.siren=()=>{for(let i=0;i<6;i++)je("sawtooth",420,860,.46,.22,i*.5)};te.tick=()=>{je("square",1200,1200,.03,.12)};te.honk=()=>{In("honk",200)&&(je("square",392,392,.3,.2),je("square",494,494,.3,.2))};te.ice=()=>{In("ice",60)&&(je("sine",2600,1700,.12,.2),je("triangle",3400,2200,.16,.14,.03),ht(.18,.3,9e3,4e3,"highpass"))};te.boing=()=>{In("boing",90)&&je("sine",180,520,.16,.4)};te.cannon=(i=0)=>{je("square",900-i*400,160,.14+i*.2,.25+i*.2),ht(.12+i*.3,.3+i*.3,3e3,400)};te.beam=()=>{je("sawtooth",180,720,2.6,.22),je("sine",90,60,2.6,.5),ht(2.6,.5,700,3200,"bandpass",0,.8)};te.rise=()=>{je("triangle",220,880,.5,.25),ht(.5,.2,400,4e3,"bandpass",0,1)};gh={},JS={saw(i){let e=_e.createOscillator();e.type="sawtooth",e.frequency.value=58;let t=_e.createOscillator();t.frequency.value=23;let n=_e.createGain();n.gain.value=14,t.connect(n),n.connect(e.frequency);let s=_e.createGain();s.gain.value=.3,e.connect(s),s.connect(i.g);let r=_e.createBufferSource();r.buffer=Hr,r.loop=!0;let o=_e.createBiquadFilter();o.type="bandpass",o.frequency.value=1700,o.Q.value=1.2;let a=_e.createGain();a.gain.value=.1,r.connect(o),o.connect(a),a.connect(i.g),e.start(),t.start(),r.start(),i.stop=[e,t,r],i.set=l=>{e.frequency.setTargetAtTime(58+l*55,_e.currentTime,.05),a.gain.setTargetAtTime(.1+l*.35,_e.currentTime,.05)}},flame(i){let e=_e.createBufferSource();e.buffer=Hr,e.loop=!0;let t=_e.createBiquadFilter();t.type="bandpass",t.frequency.value=600,t.Q.value=.4;let n=_e.createGain();n.gain.value=.5,e.connect(t),t.connect(n),n.connect(i.g),e.start(),i.stop=[e],i.set=()=>{}},hole(i){let e=_e.createOscillator(),t=_e.createOscillator();e.frequency.value=48,t.frequency.value=52.5,t.type="triangle";let n=_e.createGain();n.gain.value=.55,e.connect(n),t.connect(n),n.connect(i.g);let s=_e.createBufferSource();s.buffer=Hr,s.loop=!0;let r=_e.createBiquadFilter();r.type="bandpass",r.frequency.value=300,r.Q.value=3;let o=_e.createGain();o.gain.value=.25,s.connect(r),r.connect(o),o.connect(i.g),e.start(),t.start(),s.start(),i.stop=[e,t,s],i.set=()=>{}},rain(i){let e=_e.createBufferSource();e.buffer=Hr,e.loop=!0;let t=_e.createBiquadFilter();t.type="highpass",t.frequency.value=1400;let n=_e.createBiquadFilter();n.type="lowpass",n.frequency.value=7500;let s=_e.createGain();s.gain.value=.05,e.connect(t),t.connect(n),n.connect(s),s.connect(i.g),e.start(),i.stop=[e],i.set=r=>{s.gain.setTargetAtTime(.04+r*.3,_e.currentTime,.3)}}};jS=[[48,60,64,67],[53,65,69,72],[55,67,71,74],[48,60,64,67],[45,57,60,64],[53,65,69,72],[55,67,71,74],[48,60,64,67]],QS=[76,79,76,72,74,76,0,0,77,81,77,72,74,77,0,0,79,83,79,74,77,79,0,0,76,79,84,79,76,72,0,0,76,81,76,72,69,72,0,0,77,81,84,81,77,72,0,0,79,77,74,71,74,79,0,0,72,76,79,84,0,84,0,0],eb=i=>440*Math.pow(2,(i-69)/12),mh=0,zo=0});function nb(){let i=document.createElement("canvas");i.width=i.height=256;let e=i.getContext("2d");e.fillStyle="#fff",e.beginPath();let t=14;for(let n=0;n<=t;n++){let s=n/t*Math.PI*2,r=62+Math.sin(n*2.7)*14+Math.random()*16,o=128+Math.cos(s)*r,a=128+Math.sin(s)*r;n===0?e.moveTo(o,a):e.quadraticCurveTo(128+Math.cos(s-.22)*(r+22),128+Math.sin(s-.22)*(r+22),o,a)}e.fill();for(let n=0;n<16;n++){let s=Math.random()*6.28,r=84+Math.random()*34,o=3+Math.random()*10;e.beginPath(),e.arc(128+Math.cos(s)*r,128+Math.sin(s)*r,o,0,6.28),e.fill()}return new si(i)}function d0(){let i=new st({color:16777215}),e=new Gt({color:16777215,flatShading:!0});ie.decals=new Lf(700),ie.blood=new nr(new Gn(.5,0),i,1400,{g:24,drag:.4,die:!0,onGround:(o,a,l,c)=>{Math.random()<.34&&ie.decals.add(o,a,c*M(3.5,8),ie._bc||Ce(Cn),!0)}}),ie.oil=new nr(new Gn(.5,0),i,300,{g:24,drag:.4,die:!0,onGround:(o,a,l,c)=>{Math.random()<.4&&ie.decals.add(o,a,c*M(3.5,8),Ce(Af),!0)}}),ie.meat=new nr(new Gn(.5,0),e,320,{bounce:.42,onGround:(o,a,l,c)=>{l<-3&&(ie.decals.add(o,a,c*M(2,4),Ce(Cn),!0),te.squish())}}),ie.scrap=new nr(new _n(1,.6,.8),e,260,{bounce:.5,onGround:(o,a,l)=>{l<-6&&te.clank()}}),ie.bone=new nr(new Ra(.22,.9,2,6),new Gt({color:16052712}),90,{bounce:.5});let t=document.createElement("canvas");t.width=64,t.height=32;let n=t.getContext("2d");n.fillStyle="#F8F4E6",n.fillRect(0,0,64,32),n.fillStyle="#1B1B14",n.beginPath(),n.arc(32,16,8,0,6.28),n.fill(),n.fillStyle="#F8F4E6",n.beginPath(),n.arc(35,13,2.4,0,6.28),n.fill();let s=new si(t);s.colorSpace=Pt,ie.eye=new nr(new Kt(.5,12,8),new st({map:s}),80,{bounce:.72,drag:.05}),ie.puffs=new Df(1500);for(let o=0;o<14;o++){let a=new Ue(new Ss(.82,1,40).rotateX(-Math.PI/2),new st({color:16777215,transparent:!0,depthWrite:!1,side:At}));a.visible=!1,_.scene.add(a),xh.push({m:a,t:0,life:0,r0:0,r1:1})}let r=new _n(1,1,1);for(let o=0;o<48;o++){let a=new Ue(r,new st({color:16770442}));a.visible=!1,_.scene.add(a),_h.push({m:a,life:0})}Ds=new Pr(16760928,0,40,1.4),_.scene.add(Ds),f0=document.getElementById("labels"),Za=document.getElementById("gore"),Nf()}function Nf(){if(!ie.puffs)return;let i=_.renderer.domElement.height;ie.puffs.mat.uniforms.scale.value=i/(2*Math.tan(_.camera.fov*Math.PI/360)),ie.puffs.mat.uniforms.maxPx.value=i*.26}function p0(){["blood","oil","meat","scrap","bone","eye","puffs","decals"].forEach(i=>ie[i].clear()),ir.forEach(i=>i.el.remove()),ir.length=0,Za.innerHTML=""}function Ff(i,e){ie.blood.update(i),ie.oil.update(i),ie.meat.update(i),ie.scrap.update(i),ie.bone.update(i),ie.eye.update(i),ie.puffs.update(i),ie.decals.update(i);for(let t of xh){if(t.life<=0)continue;t.t+=i;let n=t.t/t.life;if(n>=1){t.life=0,t.m.visible=!1;continue}let s=1-(1-n)*(1-n);t.m.scale.setScalar(t.r0+(t.r1-t.r0)*s),t.m.material.opacity=1-n}for(let t of _h)t.life>0&&(t.life-=e,t.life<=0&&(t.m.visible=!1));Ds.intensity>0&&(Ds.intensity=Math.max(0,Ds.intensity-e*900)),_.trauma=Math.max(0,_.trauma-e*1.7),ib(e)}function ft(i){_.trauma=Math.min(1,_.trauma+i)}function Go(i,e,t=45){let n=Vr.copy(i).sub(_.camera.position).length();n<t&&ft(e*(1-n/t))}function on(i,e,t,n,s=16579056){let r=xh.find(o=>o.life<=0)||xh[0];r.m.position.set(i.x,Math.max(.08,i.y),i.z),r.m.material.color.set(s),r.m.visible=!0,r.t=0,r.life=n,r.r0=e,r.r1=t,r.m.scale.setScalar(e)}function ki(i,e,t=16770442,n=.035,s=.055){let r=_h.find(a=>a.life<=0)||_h[0],o=i.distanceTo(e);r.m.position.copy(i).add(e).multiplyScalar(.5),r.m.lookAt(e),r.m.scale.set(n,n,o),r.m.material.color.set(t),r.m.visible=!0,r.life=s}function Jn(i,e,t,n,s,r,o,a,l=!1,c=.65){let h=l?ie.oil:ie.blood,u=l?Af:Cn;for(let f=0;f<o;f++){let d=a*M(.35,1.1);h.spawn(i+M(-.15,.15),e+M(-.15,.15),t+M(-.15,.15),n*d+M(-1,1)*a*c,s*d+M(-.4,1)*a*c,r*d+M(-1,1)*a*c,M(.07,.2),M(1.5,3),Ce(u))}}function Uf(i,e,t,n=6,s=!1){for(let r=0;r<n;r++)ie.puffs.spawn(i+M(-.3,.3),e+M(-.3,.3),t+M(-.3,.3),M(-2.5,2.5),M(0,3),M(-2.5,2.5),.3,M(.7,1.5),M(.3,.6),s?3815984:14826286,s?1381650:9310732,0,3)}function Pn(i,e,t,n=8,s=1,r=15260085){for(let o=0;o<n;o++){let a=M(6.28),l=M(1.5,5)*s;ie.puffs.spawn(i,e+.2,t,Math.cos(a)*l,M(.5,2.5),Math.sin(a)*l,.3*s,M(.8,1.6)*s,M(.4,.8),r,16249308,.5,3)}}function $a(i,e=6,t=1){let n=i.x,s=Math.max(.4,i.y),r=i.z,o=e/6;for(let a=0;a<16;a++){let l=M(6.28),c=M(-.2,1.2),h=M(2,9)*o;ie.puffs.spawn(n,s,r,Math.cos(l)*Math.cos(c)*h,Math.sin(c)*h+2,Math.sin(l)*Math.cos(c)*h,.8*o,M(1.8,3.4)*o,M(.35,.65),16773808,15234090,1,2.5)}for(let a=0;a<10;a++){let l=M(6.28),c=M(1,5)*o;ie.puffs.spawn(n,s+.5,r,Math.cos(l)*c,M(2,6)*o,Math.sin(l)*c,.8*o,M(2,3.6)*o,M(.8,1.5),7038037,3025439,1.5,1.6)}for(let a=0;a<12;a++){let l=M(6.28),c=M(.1,1.3),h=M(10,22)*o;ie.puffs.spawn(n,s,r,Math.cos(l)*Math.cos(c)*h,Math.sin(c)*h,Math.sin(l)*Math.cos(c)*h,.25,.3,M(.3,.6),16773808,15911244,-14,.5)}for(let a=0;a<6;a++){let l=M(6.28);ie.scrap.spawn(n,s,r,Math.cos(l)*M(4,10),M(6,12),Math.sin(l)*M(4,10),M(.12,.25),M(2,4),Ce([4864792,3025439,7038037]))}on(i,.5,e*1.25,.4),ie.decals.add(n,r,e*M(.9,1.2),2367770,!0),Ds.position.set(n,s+1.5,r),Ds.intensity=260*o,Go(i,.75*t,60),te.boom(t)}function Xt(i,e,t,n=6){for(let s=0;s<n;s++)ie.puffs.spawn(i,e,t,M(-6,6),M(1,8),M(-6,6),.14,.18,M(.2,.45),16773808,15911244,-16,.5)}function yh(i,e=80){Ds.position.copy(i),Ds.intensity=e}function Ln(i,e,t="",n=1.1,s=1.8){ir.length>46&&ir.shift().el.remove();let r=document.createElement("div");r.className="pop "+t,r.textContent=e,f0.appendChild(r);let o={el:r,pos:i.clone(),life:n,max:n,rise:s,follow:null};return ir.push(o),o}function Ns(i,e,t=2){i.label&&(i.label.life=0);let n=Ln(i.root.position,e,"bubble",t,0);return n.follow=i,i.label=n,n}function ib(i){let e=innerWidth,t=innerHeight,n=_.camera;for(let s=ir.length-1;s>=0;s--){let r=ir[s];if(r.life-=i,r.life<=0||r.follow&&r.follow.dead){r.el.remove(),r.follow&&r.follow.label===r&&(r.follow.label=null),ir.splice(s,1);continue}r.follow?(r.pos.copy(r.follow.root.position),r.pos.y+=r.follow.H+.45):r.pos.y+=r.rise*i,Vr.copy(r.pos).project(n);let o=r.pos.distanceTo(n.position);if(Vr.z>1||Math.abs(Vr.x)>1.2||Math.abs(Vr.y)>1.2||r.follow&&o>45){r.el.style.display="none";continue}let a=ai(11/o,.5,1.25);r.el.style.display="",r.el.style.opacity=Math.min(1,r.life/.25),r.el.style.transform=`translate(-50%,-50%) translate(${(Vr.x+1)/2*e}px,${(1-Vr.y)/2*t}px) scale(${a.toFixed(2)})`}}function Vo(i=2,e=!1){for(let t=0;t<i;t++){Za.childElementCount>16&&Za.firstChild.remove();let n=document.createElement("i"),s=Math.random()<.7,r=s?M(90,240):M(40,110),o=s?Ce([M(-3,18),M(80,98)]):M(15,85),a=M(5,85);n.style.cssText=`left:${o}%;top:${a}%;width:${r}px;height:${r*M(.8,1.3)}px;border-radius:${M(40,60)}% ${M(40,60)}% ${M(40,60)}% ${M(40,60)}%;transform:rotate(${M(360)}deg);background:${e?"#1e1e19":Ce(["#C21807","#B3120C","#D7261E"])}`,Za.appendChild(n),setTimeout(()=>n.remove(),2600)}}var ss,bi,Vr,Ho,ie,nr,Lf,Df,xh,_h,Ds,f0,Za,ir,Wr=On(()=>{oi();zi();tr();ss=new pt,bi=new Ee,Vr=new F,Ho=new Ve().makeScale(0,0,0),ie={},nr=class{constructor(e,t,n,s={}){this.max=n,this.cur=0,this.o=Object.assign({g:26,bounce:.45,drag:.15,die:!1,onGround:null},s),this.mesh=new ii(e,t,n),this.mesh.frustumCulled=!1,this.mesh.instanceMatrix.setUsage(Is);for(let r=0;r<n;r++)this.mesh.setMatrixAt(r,Ho),this.mesh.setColorAt(r,bi.set(16777215));this.p=new Float32Array(n*3),this.v=new Float32Array(n*3),this.r=new Float32Array(n*3),this.av=new Float32Array(n*3),this.life=new Float32Array(n),this.size=new Float32Array(n),this.rest=new Uint8Array(n),_.scene.add(this.mesh)}spawn(e,t,n,s,r,o,a,l,c){let h=this.cur;this.cur=(this.cur+1)%this.max;let u=h*3;return this.p[u]=e,this.p[u+1]=t,this.p[u+2]=n,this.v[u]=s,this.v[u+1]=r,this.v[u+2]=o,this.r[u]=M(6.28),this.r[u+1]=M(6.28),this.r[u+2]=M(6.28),this.av[u]=M(-12,12),this.av[u+1]=M(-12,12),this.av[u+2]=M(-12,12),this.life[h]=l,this.size[h]=a,this.rest[h]=0,c!==void 0&&(this.mesh.setColorAt(h,bi.set(c)),this.mesh.instanceColor.needsUpdate=!0),h}clear(){this.life.fill(0);for(let e=0;e<this.max;e++)this.mesh.setMatrixAt(e,Ho);this.mesh.instanceMatrix.needsUpdate=!0}update(e){let{p:t,v:n,r:s,av:r,life:o,size:a,rest:l,o:c,mesh:h}=this,u=!1;for(let f=0;f<this.max;f++){if(o[f]<=0)continue;if(u=!0,o[f]-=e,o[f]<=0){h.setMatrixAt(f,Ho);continue}let d=f*3,p=a[f]*.5;if(l[f]){if(o[f]>.4)continue}else{n[d+1]-=c.g*e;let x=1-c.drag*e;if(n[d]*=x,n[d+2]*=x,t[d]+=n[d]*e,t[d+1]+=n[d+1]*e,t[d+2]+=n[d+2]*e,s[d]+=r[d]*e,s[d+1]+=r[d+1]*e,s[d+2]+=r[d+2]*e,t[d+1]<p){if(t[d+1]=p,c.onGround&&c.onGround(t[d],t[d+2],n[d+1],a[f],f,this),c.die){o[f]=0,h.setMatrixAt(f,Ho);continue}n[d+1]<-2.5?(n[d+1]=-n[d+1]*c.bounce,n[d]*=.7,n[d+2]*=.7,r[d]*=.6,r[d+1]*=.6,r[d+2]*=.6):(n[d+1]=0,n[d]*=.6,n[d+2]*=.6,Math.abs(n[d])+Math.abs(n[d+2])<.4&&(l[f]=1))}}ss.position.set(t[d],t[d+1],t[d+2]),ss.rotation.set(s[d],s[d+1],s[d+2]),ss.scale.setScalar(a[f]*Math.min(1,o[f]/.4)),ss.updateMatrix(),h.setMatrixAt(f,ss.matrix)}u&&(h.instanceMatrix.needsUpdate=!0)}};Lf=class{constructor(e){this.max=e,this.cur=0;let t=new Ar(1,1).rotateX(-Math.PI/2),n=new st({map:nb(),alphaTest:.5,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3});this.mesh=new ii(t,n,e),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1;for(let s=0;s<e;s++)this.mesh.setMatrixAt(s,Ho),this.mesh.setColorAt(s,bi.set(16777215));this.d=new Float32Array(e*5),this.grow=new Set,_.scene.add(this.mesh)}add(e,t,n,s,r){if(e*e+t*t>(xt+7)*(xt+7))return;let o=this.cur;this.cur=(this.cur+1)%this.max;let a=o*5;this.d[a]=e,this.d[a+1]=t,this.d[a+2]=M(6.28),this.d[a+3]=r?n:n*.25,this.d[a+4]=n,this.mesh.setColorAt(o,bi.set(s)),this.mesh.instanceColor.needsUpdate=!0,this.grow.add(o),this.set(o)}set(e){let t=e*5;ss.position.set(this.d[t],.03+e%40*6e-4,this.d[t+1]),ss.rotation.set(0,this.d[t+2],0),ss.scale.setScalar(this.d[t+3]),ss.updateMatrix(),this.mesh.setMatrixAt(e,ss.matrix),this.mesh.instanceMatrix.needsUpdate=!0}clear(){this.grow.clear();for(let e=0;e<this.max;e++)this.mesh.setMatrixAt(e,Ho);this.mesh.instanceMatrix.needsUpdate=!0}update(e){for(let t of this.grow){let n=t*5;this.d[n+3]+=(this.d[n+4]-this.d[n+3])*Math.min(1,e*7),this.d[n+4]-this.d[n+3]<.02&&this.grow.delete(t),this.set(t)}}},Df=class{constructor(e){this.max=e,this.cur=0;let t=document.createElement("canvas");t.width=t.height=64;let n=t.getContext("2d");n.fillStyle="#cfcfcf",n.beginPath(),n.arc(32,32,31,0,6.28),n.fill(),n.fillStyle="#fff",n.beginPath(),n.arc(30,28,27,0,6.28),n.fill();let s=new si(t);this.geo=new Lt,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.sz=new Float32Array(e),this.geo.setAttribute("position",new wt(this.pos,3).setUsage(Is)),this.geo.setAttribute("col",new wt(this.col,3).setUsage(Is)),this.geo.setAttribute("size",new wt(this.sz,1).setUsage(Is)),this.mat=new vi({uniforms:{map:{value:s},scale:{value:500},maxPx:{value:260}},vertexShader:"attribute float size; attribute vec3 col; varying vec3 vCol; uniform float scale; uniform float maxPx; void main(){ vCol=col; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=min(maxPx,size*scale/max(0.1,-mv.z)); gl_Position=projectionMatrix*mv; }",fragmentShader:`uniform sampler2D map; varying vec3 vCol; void main(){ vec4 t=texture2D(map,gl_PointCoord); if(t.a<0.5) discard; gl_FragColor=vec4(vCol*t.rgb,1.0);
#include <colorspace_fragment>
}`}),this.pts=new wr(this.geo,this.mat),this.pts.frustumCulled=!1,this.v=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.s0=new Float32Array(e),this.s1=new Float32Array(e),this.c=new Float32Array(e*6),this.rise=new Float32Array(e),this.drag=new Float32Array(e),_.scene.add(this.pts)}spawn(e,t,n,s,r,o,a,l,c,h,u,f=0,d=2){let p=this.cur;this.cur=(this.cur+1)%this.max;let x=p*3,m=p*6;this.pos[x]=e,this.pos[x+1]=t,this.pos[x+2]=n,this.v[x]=s,this.v[x+1]=r,this.v[x+2]=o,this.life[p]=this.maxLife[p]=c,this.s0[p]=a,this.s1[p]=l,this.rise[p]=f,this.drag[p]=d,bi.set(h),this.c[m]=bi.r,this.c[m+1]=bi.g,this.c[m+2]=bi.b,bi.set(u===void 0?h:u),this.c[m+3]=bi.r,this.c[m+4]=bi.g,this.c[m+5]=bi.b}clear(){this.life.fill(0),this.sz.fill(0),this.geo.attributes.size.needsUpdate=!0}update(e){let{pos:t,v:n,life:s,maxLife:r,s0:o,s1:a,c:l,col:c,sz:h}=this;for(let u=0;u<this.max;u++){if(s[u]<=0)continue;if(s[u]-=e,s[u]<=0){h[u]=0;continue}let f=u*3,d=u*6,p=1-s[u]/r[u],x=Math.max(0,1-this.drag[u]*e);n[f]*=x,n[f+1]=n[f+1]*x+this.rise[u]*e,n[f+2]*=x,t[f]+=n[f]*e,t[f+1]+=n[f+1]*e,t[f+2]+=n[f+2]*e;let m=Math.min(1,p/.25),g=p>.6?1-(p-.6)/.4:1;h[u]=(o[u]+(a[u]-o[u])*m)*g,c[f]=l[d]+(l[d+3]-l[d])*p,c[f+1]=l[d+1]+(l[d+4]-l[d+1])*p,c[f+2]=l[d+2]+(l[d+5]-l[d+2])*p}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.col.needsUpdate=!0,this.geo.attributes.size.needsUpdate=!0}},xh=[],_h=[],ir=[]});function rs(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Lt;l.morphTargetsRelative=a;let c=0;for(let h=0;h<i.length;++h){let u=i[h],f=0,d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[p].length!==i[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=m0(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let p=m0(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function m0(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new wt(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<t;p++){let x=h.getComponent(f,p);a.setComponent(f+u,p,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function Of(i,e){if(e===$u)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Uo||e===Va){let t=i.getIndex();if(t===null){let r=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Uo)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var vh=On(()=>{oi()});function Dn(i,e,t){let n=i.index?i.toNonIndexed():i.clone();n.deleteAttribute("uv"),t&&n.applyMatrix4(t);let s=new Ee(e),r=n.attributes.position.count,o=new Float32Array(r*3);for(let a=0;a<r;a++)o[a*3]=s.r,o[a*3+1]=s.g,o[a*3+2]=s.b;return n.setAttribute("color",new wt(o,3)),n}function ob(){let i=document.createElement("canvas");i.width=i.height=1024;let e=i.getContext("2d");e.fillStyle=_t.grass,e.fillRect(0,0,1024,1024);let t=["#84B552","#9AC765","#7FAE4C","#A3CC6E","#8ABA57"];for(let s=0;s<520;s++)e.globalAlpha=M(.12,.3),e.fillStyle=Ce(t),e.beginPath(),e.ellipse(M(1024),M(1024),M(14,70),M(10,46),M(3.14),0,6.28),e.fill();e.globalAlpha=.85,e.strokeStyle="#DCC9A0",e.lineCap="round";for(let s=0;s<6;s++){let r=s/6*6.28+.3;e.lineWidth=M(16,24),e.beginPath(),e.moveTo(512,512),e.quadraticCurveTo(512+Math.cos(r+.5)*220,512+Math.sin(r+.5)*220,512+Math.cos(r)*430,512+Math.sin(r)*430),e.stroke()}e.fillStyle="#DCC9A0",e.beginPath(),e.arc(512,512,64,0,6.28),e.fill(),e.globalAlpha=1;for(let s=0;s<2600;s++)e.fillStyle=Ce(["#6FA043","#A9D275","#79A84A"]),e.fillRect(M(1024),M(1024),2,M(3,6));let n=new si(i);return n.colorSpace=Pt,n.anisotropy=8,n}function Bf(i,e,t){for(let n of _.obstacles){let s=n.x-i,r=n.z-e;if(s*s+r*r<(n.r+t)*(n.r+t))return!1}return!0}function Ja(i,e,t){let n=new ii(i,ja,e.length),s=new pt,r=new Ee;return e.forEach((o,a)=>{s.position.set(o.x,o.y||0,o.z),s.rotation.set(0,o.rot||0,0),s.scale.setScalar(o.s||1),s.updateMatrix(),n.setMatrixAt(a,s.matrix),t&&n.setColorAt(a,r.set(o.tint||16777215))}),_.scene.add(n),n}function g0(){let i=_.scene;ja=new Gt({vertexColors:!0,flatShading:!0});let e=new Kt(420,24,14),t=new Ee(_t.skyHi),n=new Ee(_t.skyLo),s=new Ee,r=e.attributes.position,o=new Float32Array(r.count*3);for(let C=0;C<r.count;C++){let P=Math.max(0,Math.min(1,r.getY(C)/260));s.copy(n).lerp(t,Math.pow(P,.7)),o.set([s.r,s.g,s.b],C*3)}e.setAttribute("color",new wt(o,3));let a=new st({vertexColors:!0,side:yn,fog:!1,depthWrite:!1});i.add(new Ue(e,a)),i.fog=new _a(_t.skyLo,110,330);let l=new La(16775396,8365658,1.5);i.add(l);let c=new Dr(16773584,1.9);c.position.set(40,80,30),i.add(c),_.env={sky:a,hemi:l,sun:c,sea:null};let h=new Ue(new Zi(700,48).rotateX(-Math.PI/2),new st({color:_t.water}));h.position.y=-.7,i.add(h),_.env.sea=h.material;let u=new Ue(new Ss(xt+9.5,xt+11.5,64).rotateX(-Math.PI/2),new st({color:16579056,transparent:!0,opacity:.7}));u.position.y=-.66,i.add(u),_.foam=u;let f=new Ue(new Yt(xt+9,xt+12,.8,56),new Gt({color:_t.sand}));f.position.y=-.46,i.add(f);let d=new Ue(new Zi(xt+3,64).rotateX(-Math.PI/2),new Gt({map:ob()}));i.add(d);let p=[];for(let C=0;C<8;C++){let P=C/8*6.28;p.push(Dn(new Kt(1,10,8),C%2?14715438:14252578,mt(Math.cos(P)*1.1,1.75,Math.sin(P)*1.1,0,0,0,1.25,1.75,1.25)))}p.push(Dn(new Yt(.22,.34,1,6),4155948,mt(0,3.9,0,0,0,.2))),p.push(Dn(new Yt(3.1,3.4,.5,10),14539473,mt(0,.25,0))),i.add(new Ue(rs(p),ja)),_.obstacles.push({x:0,z:0,r:3.2,h:4.2});let x=[_t.brick,_t.clay,6467913,_t.brick,_t.clay,9014115,_t.brick];x.forEach((C,P)=>{let O=P/x.length*6.28+.45,z=M(38,54),L=Math.cos(O)*z,W=Math.sin(O)*z,Z=-O+Math.PI/2,q=rs([Mn(5.4,3.2,4.6,_t.paper,mt(0,1.6,0)),Dn(new Fi(4.5,2.6,4),C,mt(0,4.5,0,0,Math.PI/4,0,1.05,1,.92)),Mn(1.1,1.9,.14,_t.bark,mt(0,.95,2.34)),Mn(1,.9,.12,_t.skyHi,mt(-1.7,1.9,2.34)),Mn(1,.9,.12,_t.skyHi,mt(1.7,1.9,2.34)),Mn(.7,1.4,.7,_t.clay,mt(1.5,5,-.8)),Mn(5.7,.3,4.9,_t.wood,mt(0,.15,0))]),re=new Ue(q,ja);re.position.set(L,0,W),re.rotation.y=Z,i.add(re),_.obstacles.push({x:L,z:W,r:3.5,h:5.5})});let m=rs([Mn(1.9,.12,1,_t.wood,mt(0,.82,0)),Mn(.1,.8,.1,_t.bark,mt(-.85,.4,-.4)),Mn(.1,.8,.1,_t.bark,mt(.85,.4,-.4)),Mn(.1,.8,.1,_t.bark,mt(-.85,.4,.4)),Mn(.1,.8,.1,_t.bark,mt(.85,.4,.4)),Mn(.8,.5,.06,_t.ink,mt(0,1.28,-.25)),Mn(.7,.4,.02,10145968,mt(0,1.28,-.21)),Mn(.1,.2,.1,_t.ink,mt(0,.98,-.25)),Dn(new Yt(.07,.07,.14,8),_t.paper,mt(.6,.95,.2)),Mn(.3,.1,.22,6467913,mt(-.55,.93,.15)),Mn(.7,.12,.7,2966305,mt(0,.5,.95)),Mn(.7,.7,.1,2966305,mt(0,.9,1.3)),Dn(new Yt(.05,.05,.5,6),_t.ink,mt(0,.25,.95))]),g=[];for(let C=0;C<400&&g.length<18;C++){let P=M(6.28),O=M(9,60),z=Math.cos(P)*O,L=Math.sin(P)*O;Bf(z,L,3)&&(g.push({x:z,z:L,rot:M(6.28)}),_.obstacles.push({x:z,z:L,r:1,h:1.5}))}Ja(m,g);let v=Dn(new Yt(.22,.34,2.2,6),_t.trunk,mt(0,1.1,0)),w=rs([Dn(new Gn(1.5,0),16777215,mt(0,3,0)),Dn(new Gn(1.15,0),15135448,mt(.5,4.1,.2,.4,.3,0)),Dn(new Gn(.95,0),13822144,mt(-.6,3.7,-.4,.2,1,.5))]),S=[];for(let C=0;C<900&&S.length<64;C++){let P=M(6.28),O=10+Math.sqrt(Math.random())*60,z=Math.cos(P)*O,L=Math.sin(P)*O;if(!Bf(z,L,3.2))continue;let W=M(.85,1.5);S.push({x:z,z:L,rot:M(6.28),s:W,tint:Ce(_t.leaf)}),_.obstacles.push({x:z,z:L,r:.5*W,h:5*W,tree:!0})}Ja(w,S,!0),Ja(v,S),_.treeShadows=S;let A=new ii(new Zi(1,16).rotateX(-Math.PI/2),new st({color:1913620,transparent:!0,opacity:.22,depthWrite:!1}),S.length),R=new pt;S.forEach((C,P)=>{R.position.set(C.x+.5,.02,C.z+.3),R.scale.setScalar(1.9*C.s),R.updateMatrix(),A.setMatrixAt(P,R.matrix)}),i.add(A);let y=[],T=[];for(let C=0;C<420;C++){let P=M(6.28),O=Math.sqrt(Math.random())*(xt+1);y.push({x:Math.cos(P)*O,z:Math.sin(P)*O,y:.12,s:M(.1,.2),tint:Ce([15911244,16579056,15712430,13935475])})}for(let C=0;C<46;C++){let P=M(6.28),O=M(8,xt+8);T.push({x:Math.cos(P)*O,z:Math.sin(P)*O,y:.1,s:M(.25,.6),rot:M(6.28),tint:Ce([14539473,12170662,10131076])})}Ja(Dn(new Gn(1,0),16777215),y,!0),Ja(Dn(new Gn(1,0),16777215,mt(0,0,0,0,0,0,1,.6,.8)),T,!0),_.clouds=[];for(let C=0;C<9;C++){let P=[];for(let z=0;z<5;z++)P.push(new Kt(M(5,10),8,6).translate(z*7-14,M(-1.5,1.5),M(-3,3)));let O=new Ue(rs(P),new st({color:16579056,fog:!1}));O.position.set(M(-300,300),M(70,120),M(-300,300)),O.scale.y=.5,i.add(O),_.clouds.push(O)}let N=rs([Dn(new Yt(.55,.55,1.3,12),_t.brick,mt(0,.65,0)),Dn(new Yt(.58,.58,.16,12),15911244,mt(0,.75,0)),Dn(new Yt(.2,.3,.2,8),_t.ink,mt(0,1.4,0))]);for(let C=0;C<600&&_.barrels.length<14;C++){let P=M(6.28),O=M(12,62),z=Math.cos(P)*O,L=Math.sin(P)*O;if(!Bf(z,L,4)||Math.hypot(z,L-24)<9)continue;let W=new Ue(N,ja);W.position.set(z,0,L),i.add(W),_.barrels.push({m:W,x:z,z:L,alive:!0,t:0})}}function zf(i){for(let t of _.clouds)t.position.x+=i*2.2,t.position.x>330&&(t.position.x=-330);let e=1+Math.sin(_.t*.8)*.012;_.foam.scale.set(e,1,e);for(let t of _.barrels)t.alive||(t.t-=i,t.t<=0&&(t.alive=!0,t.m.visible=!0))}var _t,sb,rb,mt,Mn,ja,x0=On(()=>{oi();vh();zi();_t={grass:"#8FBF5A",sand:15260085,water:8372687,skyHi:9422804,skyLo:13098448,leaf:[2966305,4155948,6467913,8502601],trunk:7032362,paper:16249308,clay:13935475,brick:13125690,wood:12163691,bark:4864792,ink:3025439},sb=new yi,rb=new fn,mt=(i,e,t,n=0,s=0,r=0,o=1,a=1,l=1)=>new Ve().compose(new F(i,e,t),rb.setFromEuler(sb.set(n,s,r)).clone(),new F(o,a,l));Mn=(i,e,t,n,s)=>Dn(new _n(i,e,t),n,s)});function Wo(i){let e=new Map,t=new Map,n=i.clone();return _0(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function _0(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)_0(i.children[n],e.children[n],t)}var kf=On(()=>{});function lb(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Vt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}function ub(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Rr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ji})),i.DefaultMaterial}function Xr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function os(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function fb(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function db(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function pb(i){let e,t=i.extensions&&i.extensions[it.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Vf(t.attributes):e=i.indices+":"+Vf(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Vf(i.targets[n]);return e}function Vf(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function pd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function mb(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}function xb(i,e,t){let n=e.attributes,s=new kn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new F(l[0],l[1],l[2]),new F(c[0],c[1],c[2])),a.normalized){let h=pd(Xo[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new F,l=new F;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){let x=pd(Xo[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Kn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function S0(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=dd[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return nt.workingColorSpace!==zn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${nt.workingColorSpace}" not supported.`),os(i,e),xb(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?fb(i,e.targets,t):i})}var Mh,it,Wf,Xf,qf,Yf,Kf,Zf,$f,Jf,jf,Qf,ed,td,nd,id,sd,rd,od,Sh,ad,b0,Qa,y0,ld,cd,hd,ud,bh,cb,fd,Ei,Xo,v0,M0,Hf,dd,sr,hb,Gf,gb,md,E0=On(()=>{oi();vh();kf();Mh=class extends Ji{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Yf(t)}),this.register(function(t){return new Kf(t)}),this.register(function(t){return new Zf(t)}),this.register(function(t){return new sd(t)}),this.register(function(t){return new rd(t)}),this.register(function(t){return new od(t)}),this.register(function(t){return new Jf(t)}),this.register(function(t){return new jf(t)}),this.register(function(t){return new Qf(t)}),this.register(function(t){return new ed(t)}),this.register(function(t){return new qf(t)}),this.register(function(t){return new td(t)}),this.register(function(t){return new $f(t)}),this.register(function(t){return new id(t)}),this.register(function(t){return new nd(t)}),this.register(function(t){return new Wf(t)}),this.register(function(t){return new Sh(t,it.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Sh(t,it.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new ad(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=As.extractUrlBase(e);o=As.resolveURL(c,this.path)}else o=As.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ao(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===b0){try{o[it.KHR_BINARY_GLTF]=new ld(e)}catch(u){s&&s(u);return}r=JSON.parse(o[it.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new md(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case it.KHR_MATERIALS_UNLIT:o[u]=new Xf;break;case it.KHR_DRACO_MESH_COMPRESSION:o[u]=new cd(r,this.dracoLoader);break;case it.KHR_TEXTURE_TRANSFORM:o[u]=new hd;break;case it.KHR_MESH_QUANTIZATION:o[u]=new ud;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};it={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Wf=class{constructor(e){this.parser=e,this.name=it.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Ee(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],zn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Dr(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Pr(h),c.distance=u;break;case"spot":c=new Na(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),os(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Xf=class{constructor(){this.name=it.KHR_MATERIALS_UNLIT}getMaterialType(){return st}extendParams(e,t,n){let s=[];e.color=new Ee(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],zn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Pt))}return Promise.all(s)}},qf=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Yf=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Xe(r,r)}return Promise.all(s)}},Kf=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},Zf=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},$f=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Jf=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SHEEN}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Ee(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],zn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Pt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},jf=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Qf=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_VOLUME}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ee().setRGB(r[0],r[1],r[2],zn),Promise.all(s)}},ed=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IOR}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},td=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ee().setRGB(r[0],r[1],r[2],zn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Pt)),Promise.all(s)}},nd=class{constructor(e){this.parser=e,this.name=it.EXT_MATERIALS_BUMP}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},id=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},sd=class{constructor(e){this.parser=e,this.name=it.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},rd=class{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},od=class{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Sh=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,s.mode,s.filter),d})})}else return null}},ad=class{constructor(e){this.name=it.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Ei.TRIANGLES&&c.mode!==Ei.TRIANGLE_STRIP&&c.mode!==Ei.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(let p of u){let x=new Ve,m=new F,g=new fn,v=new F(1,1,1),w=new ii(p.geometry,p.material,f);for(let A=0;A<f;A++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,A),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,A),l.SCALE&&v.fromBufferAttribute(l.SCALE,A),w.setMatrixAt(A,x.compose(m,g,v));let S=null;for(let A in l)if(A==="_COLOR_0"){let R=l[A];w.instanceColor=new vs(R.array,R.itemSize,R.normalized)}else if(A!=="TRANSLATION"&&A!=="ROTATION"&&A!=="SCALE"){if(S===null){let y=w.geometry;S=new Lt,S.name=y.name;for(let T in y.attributes)S.setAttribute(T,y.attributes[T]);for(let T in y.morphAttributes)S.morphAttributes[T]=y.morphAttributes[T];y.index!==null&&S.setIndex(y.index),S.morphTargetsRelative=y.morphTargetsRelative;for(let T of y.groups)S.addGroup(T.start,T.count,T.materialIndex);y.boundingBox!==null&&(S.boundingBox=y.boundingBox.clone()),y.boundingSphere!==null&&(S.boundingSphere=y.boundingSphere.clone()),S.drawRange.start=y.drawRange.start,S.drawRange.count=y.drawRange.count,S.userData=Object.assign({},y.userData),w.geometry=S}let R=l[A];S.setAttribute(A,new vs(R.array,R.itemSize,R.normalized))}pt.prototype.copy.call(w,p),this.parser.assignFinalMaterial(w),d.push(w)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},b0="glTF",Qa=12,y0={JSON:1313821514,BIN:5130562},ld=class{constructor(e){this.name=it.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Qa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==b0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Qa,r=new DataView(e,Qa),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===y0.JSON){let c=new Uint8Array(e,Qa+o,a);this.content=n.decode(c)}else if(l===y0.BIN){let c=Qa+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},cd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=it.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=dd[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=dd[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=Xo[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(d){for(let p in d.attributes){let x=d.attributes[p],m=l[p];m!==void 0&&(x.normalized=m)}u(d)},a,c,zn,f)})})}},hd=class{constructor(){this.name=it.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},ud=class{constructor(){this.name=it.KHR_MESH_QUANTIZATION}},bh=class extends $i{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(n-t)/h,f=u*u,d=f*u,p=e*c,x=p-c,m=-2*d+3*f,g=d-f,v=1-m,w=g-f+u;for(let S=0;S!==a;S++){let A=o[x+S+a],R=o[x+S+l]*h,y=o[p+S+a],T=o[p+S]*h;r[S]=v*A+w*R+m*y+g*T}return r}},cb=new fn,fd=class extends bh{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return cb.fromArray(r).normalize().toArray(r),r}},Ei={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Xo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},v0={9728:qt,9729:tn,9984:Sc,9985:No,9986:Or,9987:Mi},M0={33071:xi,33648:go,10497:$s},Hf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},dd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},sr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},hb={CUBICSPLINE:void 0,LINEAR:Mr,STEP:vr},Gf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};gb=new Ve,md=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new lb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?(this.textureLoader=new Pa(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Fa(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ao(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Xr(r,a,s),os(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[it.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(As.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Hf[s.type],a=Xo[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new wt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Hf[s.type],c=Xo[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,x,m;if(d&&d!==u){let g=Math.floor(f/d),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,w=t.cache.get(v);w||(x=new c(a,g*d,s.count*d/h),w=new So(x,d/h),t.cache.add(v,w)),m=new bo(w,l,f%d/h,p)}else a===null?x=new c(s.count*l):x=new c(a,f,s.count*l),m=new wt(x,l,p);if(s.sparse!==void 0){let g=Hf.SCALAR,v=Xo[s.sparse.indices.componentType],w=s.sparse.indices.byteOffset||0,S=s.sparse.values.byteOffset||0,A=new v(o[1],w,s.sparse.count*g),R=new c(o[2],S,s.sparse.count*l);a!==null&&(m=new wt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let y=0,T=A.length;y<T;y++){let N=A[y];if(m.setX(N,R[y*l]),l>=2&&m.setY(N,R[y*l+1]),l>=3&&m.setZ(N,R[y*l+2]),l>=4&&m.setW(N,R[y*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=v0[f.magFilter]||tn,h.minFilter=v0[f.minFilter]||Mi,h.wrapS=M0[f.wrapS]||$s,h.wrapT=M0[f.wrapT]||$s,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==qt&&h.minFilter!==tn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(f){return new Promise(function(d,p){t.parse(f,d,p)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;let d=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(f){return new Promise(function(d,p){let x=d;t.isImageBitmapLoader===!0&&(x=function(m){let g=new nn(m);g.needsUpdate=!0,d(g)}),t.load(As.resolveURL(f,r.path),x,void 0,p)})})}let u=h.then(function(f){return c===!0&&a.revokeObjectURL(l),os(f,o),f.userData.mimeType=o.mimeType||mb(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[it.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[it.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[it.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new wo,Hn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new js,Hn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Rr}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[it.KHR_MATERIALS_UNLIT]){let u=s[it.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Ee(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],zn),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Pt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=At);let h=r.alphaMode||Gf.OPAQUE;if(h===Gf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Gf.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==st&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Xe(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==st&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==st){let u=r.emissiveFactor;a.emissive=new Ee().setRGB(u[0],u[1],u[2],zn)}return r.emissiveTexture!==void 0&&o!==st&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Pt)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),os(u,r),t.associations.set(u,{materials:e}),r.extensions&&Xr(s,u,r),u})}createUniqueName(e){let t=Tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[it.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return S0(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=pb(c),u=s[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[it.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=S0(new Lt,c,t),c.mode===Ei.TRIANGLE_STRIP?f=f.then(d=>Of(d,Va)):c.mode===Ei.TRIANGLE_FAN&&(f=f.then(d=>Of(d,Uo))),s[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?ub(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,p=h.length;d<p;d++){let x=h[d],m=o[d],g,v=c[d];if(m.mode===Ei.TRIANGLES||m.mode===Ei.TRIANGLE_STRIP||m.mode===Ei.TRIANGLE_FAN||m.mode===void 0){let w=r.isSkinnedMesh===!0,S=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");w&&S===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=w&&S?new Sa(x,v):new Ue(x,v),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===Ei.LINES)g=new Tr(x,v);else if(m.mode===Ei.LINE_STRIP)g=new Er(x,v);else if(m.mode===Ei.LINE_LOOP)g=new Ea(x,v);else if(m.mode===Ei.POINTS)g=new wr(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&db(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),os(g,r),m.extensions&&Xr(s,g,m),t.assignFinalMaterial(g),u.push(g)}for(let d=0,p=u.length;d<p;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&Xr(s,u[0],r),u[0];let f=new Ot;r.extensions&&Xr(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,p=u.length;d<p;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new en(lh.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Lr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),os(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let f=new Ve;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ba(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let d=s.channels[u],p=s.samplers[d.sampler],x=d.target,m=x.node,g=s.parameters!==void 0?s.parameters[p.input]:p.input,v=s.parameters!==void 0?s.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",v)),c.push(p),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],p=u[2],x=u[3],m=u[4],g=[];for(let w=0,S=f.length;w<S;w++){let A=f[w],R=d[w],y=p[w],T=x[w],N=m[w];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();let C=n._createAnimationTracks(A,R,y,T,N);if(C)for(let P=0;P<C.length;P++)g.push(C[P])}let v=new Cr(r,void 0,g);return os(v,s),v})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,gb)});for(let d=0,p=u.length;d<p;d++)h.add(u[d]);if(h.userData.pivot!==void 0&&u.length>0){let d=h.userData.pivot,p=u[0];h.pivot=new F().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Eo:c.length>1?h=new Ot:c.length===1?h=c[0]:h=new pt,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),os(h,r),r.extensions&&Xr(n,h,r),r.matrix!==void 0){let u=new Ve;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Ot;n.name&&(r.name=s.createUniqueName(n.name)),os(r,n),n.extensions&&Xr(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++){let f=l[h];f.parent!==null?r.add(Wo(f)):r.add(f)}let c=h=>{let u=new Map;for(let[f,d]of s.associations)(f instanceof Hn||f instanceof nn)&&u.set(f,d);return h.traverse(f=>{let d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}sr[r.path]===sr.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let h;switch(sr[r.path]){case sr.weights:h=Es;break;case sr.rotation:h=Ts;break;case sr.translation:case sr.scale:h=Qs;break;default:n.itemSize===1?h=Es:h=Qs;break}let u=s.interpolation!==void 0?hb[s.interpolation]:Mr,f=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){let x=new h(l[d]+"."+sr[r.path],t.array,f,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=pd(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ts?fd:bh;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}});async function P0(i){let e=new Mh,t=Object.keys(rr),n=0;for(let a of t){let l=atob(window.COZY_ASSETS[a]),c=new Uint8Array(l.length);for(let d=0;d<l.length;d++)c[d]=l.charCodeAt(d);let h=await e.parseAsync(c.buffer,"");h.scene.updateMatrixWorld(!0);let u=new kn().setFromObject(h.scene),f=null;h.scene.traverse(d=>{d.isMesh&&d.material.map&&(f=d.material.map)}),yd[a]={scene:h.scene,clips:h.animations,h:Math.max(.3,u.max.y-u.min.y),map:f},i(++n/t.length),await new Promise(d=>setTimeout(d,0))}window.COZY_ASSETS=null,qo=new ii(new Zi(1,14).rotateX(-Math.PI/2),new st({color:1913620,transparent:!0,opacity:.28,depthWrite:!1}),90),qo.frustumCulled=!1,_.scene.add(qo);let s=document.createElement("canvas");s.width=s.height=128;let r=s.getContext("2d");r.fillStyle="#A01A12",r.beginPath(),r.arc(64,64,62,0,6.28),r.fill(),r.fillStyle="#D7392E",r.beginPath(),r.arc(64,64,50,0,6.28),r.fill(),r.fillStyle="#EF8A7C",r.beginPath(),r.arc(64,64,30,0,6.28),r.fill(),r.fillStyle="#F8F4E6",r.beginPath(),r.arc(64,64,13,0,6.28),r.fill(),r.fillStyle="#C9B9A0",r.beginPath(),r.arc(64,64,5,0,6.28),r.fill();let o=new si(s);o.colorSpace=Pt,C0=new st({map:o,alphaTest:.5,side:At}),I0=new Kt(1,10,6,0,6.28,0,Math.PI/2),xd=new Gt({color:16249308,side:At,flatShading:!0})}function Ti(i,e,t=1){i.animRate=t;let n=i.acts[e]||i.acts.idle;!n||i.cur===n||(n.reset().fadeIn(.15).play(),i.cur&&i.cur.fadeOut(.15),i.cur=n)}function L0(i,e,t,n={}){let s=rr[i],r=yd[i],o=s.size*(n.scale||1),a=Wo(r.scene);a.scale.setScalar(o/r.h);let l=new Gt({map:r.map,side:At}),c={};a.traverse(x=>{x.isMesh&&(x.material=l,x.frustumCulled=!1),x.isBone&&(c[x.name]=x)});let h=new Ot,u=new Ot;u.position.y=o*.45,a.position.y=-o*.45,h.add(u),u.add(a),h.position.set(e,n.y||0,t),_.scene.add(h);let f=new Io(a),d={};for(let x of r.clips)d[x.name]=f.clipAction(x);let p={key:i,def:s,root:h,tilt:u,model:a,mat:l,bones:c,mixer:f,acts:d,cur:null,animRate:1,H:o,hp:s.hp*(n.hpMul||1),maxHp:s.hp*(n.hpMul||1),boss:!!n.boss,state:"idle",timer:M(.5,3),yaw:M(6.28),vel:xe(),spin:0,tx:e,tz:t,seed:M(100),jit:0,hopT:M(6),baseY:s.fly?2.2:0,heat:0,flash:0,dead:!1,label:null,chute:null,talkT:M(2,10),dP:99,scrT:M(.5,2),hurtT:0};if(h.rotation.y=p.yaw,n.drop){p.state="drop";let x=new Ue(I0,xd);x.scale.set(o*.8,o*.55,o*.8),x.position.y=o*1.25,x.material=xd,h.add(x),p.chute=x,Ti(p,"talk",1.6)}else p.boss?(p.state="boss",Ti(p,"walk",.8)):Ti(p,"idle");return _.animals.push(p),p}function Wn(i){_.scene.remove(i.root),i.mixer.stopAllAction(),i.mixer.uncacheRoot(i.model),i.mat.dispose(),i.extra&&i.extra.forEach(e=>{_.scene.remove(e.obj),e.mat&&e.mat.dispose()})}function D0(i,e){let t=rr[i],n=yd[i],s=t.size,r=Wo(n.scene);r.scale.setScalar(s/n.h);let o=new Gt({map:n.map,side:At,color:e});r.traverse(h=>{h.isMesh&&(h.material=o,h.frustumCulled=!1)});let a=new Ot;a.add(r);let l=new Io(r),c=n.clips.find(h=>h.name==="walk")||n.clips[0];return l.clipAction(c).play(),{root:a,model:r,mat:o,mixer:l,H:s}}function N0(i){_.scene.remove(i.root),i.mixer.stopAllAction(),i.mixer.uncacheRoot(i.model),i.mat.dispose()}function F0(){for(let i of _.animals)i.dead=!0,Wn(i);_.animals.length=0;for(let i of Nn)i.end&&i.end();Nn.length=0,_.boss=null}function Rh(i,e,t){for(let n of _.animals){if(n.state!=="idle"&&n.state!=="wander")continue;let s=n.root.position.x-i,r=n.root.position.z-e;s*s+r*r<t*t&&tl(n)}}function tl(i){i.state="flee",i.timer=M(3,5.5),i.jit=M(-.7,.7),Ti(i,"walk",2.4),Math.random()<.45&&i.dP<40&&Ns(i,Ce(_b),1.7),i.dP<35&&Hi(i,Math.random()<.4?"long":"yelp")}function Ah(i){i.chute&&(i.root.remove(i.chute),i.chute=null)}function nl(i,e){for(let s of _.obstacles){let r=i.x-s.x,o=i.z-s.z,a=s.r+e,l=r*r+o*o;if(l<a*a&&l>1e-4){let c=Math.sqrt(l);i.x=s.x+r/c*a,i.z=s.z+o/c*a}}let t=Math.hypot(i.x,i.z),n=xt-1;t>n&&(i.x*=n/t,i.z*=n/t)}function gd(i,e,t,n,s){let r=i.root.position;r.x+=e*n*s,r.z+=t*n*s,nl(r,i.H*.3);let a=Math.atan2(e,t)-i.yaw;a=Math.atan2(Math.sin(a),Math.cos(a)),i.yaw+=a*Math.min(1,s*10),i.root.rotation.y=i.yaw,i.def.hop&&(i.hopT+=s*n*1.1,r.y=Math.abs(Math.sin(i.hopT))*i.def.hop*Math.min(1,n/6))}function vd(i){let e=_.player.pos,t=0;for(let n=_.animals.length-1;n>=0;n--){let s=_.animals[n],r=s.root.position,o=s.def;s.mixer.update(i*s.animRate),s.flash>0&&(s.flash-=i,s.mat.emissive.setRGB(s.flash>0?.55:0,0,0));let a=r.x-e.x,l=r.z-e.z,c=Math.hypot(a,l);if(s.dP=c,o.cloak){let h=c>20&&s.state!=="flee"?.3:1;Math.abs(s.mat.opacity-h)>.01&&(s.mat.transparent=!0,s.mat.opacity+=(h-s.mat.opacity)*Math.min(1,i*3))}switch(o.fly&&s.state!=="air"&&s.state!=="drop"&&s.state!=="sucked"&&(s.baseY+=((s.state==="flee"?3.3:2.1)-s.baseY)*Math.min(1,i*2),r.y=s.baseY+Math.sin(_.t*3+s.seed)*.3),s.state){case"drop":r.y-=8.5*i,s.root.rotation.z=Math.sin(_.t*2.5+s.seed)*.12,r.y<=s.baseY&&(r.y=s.baseY,s.root.rotation.z=0,Ah(s),Pn(r.x,0,r.z,5,.7),s.state="idle",s.timer=M(.3,1.5),Ti(s,"idle"));break;case"idle":if(s.timer-=i,s.talkT-=i,c<o.sense){tl(s);break}if(s.talkT<=0&&(s.talkT=M(7,18),c<45&&(Ns(s,Ce(o.lines),2.4),Ti(s,"talk"))),s.timer<=0){let h=M(6.28),u=M(4,16);s.tx=ai(r.x+Math.cos(h)*u,-xt+6,xt-6),s.tz=ai(r.z+Math.sin(h)*u,-xt+6,xt-6),s.state="wander",s.timer=M(3,7),Ti(s,"walk",1)}break;case"wander":{if(s.timer-=i,c<o.sense){tl(s);break}let h=s.tx-r.x,u=s.tz-r.z,f=Math.hypot(h,u);if(f<.6||s.timer<=0){s.state="idle",s.timer=M(1,4.5),Ti(s,Math.random()<.3?"talk":"idle"),o.fly||(r.y=0);break}gd(s,h/f,u/f,o.walk,i);break}case"flee":{s.timer-=i;let h=Math.atan2(a,l)+s.jit+Math.sin(_.t*2.2+s.seed)*.45,u=Math.sin(h),f=Math.cos(h),d=Math.hypot(r.x,r.z),p=xt-11;if(d>p){let x=ai((d-p)/9,0,1),m=-r.x/d,g=-r.z/d,v=-g,w=m;v*u+w*f<0&&(v=-v,w=-w),u=u*(1-x)+(v*.85+m*.5)*x,f=f*(1-x)+(w*.85+g*.5)*x;let S=Math.hypot(u,f)||1;u/=S,f/=S}if(Nt.wail&&c<22&&(s.scrT-=i,s.scrT<=0&&(s.scrT=M(1.2,3),Hi(s,"long",!1))),_.wx.rain>.4&&!o.fly&&r.y<.3&&Math.random()<i*.09*_.wx.rain){s.vel.set(u*o.run*.9,4.5,f*o.run*.9),s.state="air",s.spin=M(4,8),c<30&&Ns(s,Ce(["\u5730\u597D\u6ED1\uFF01","\u54C7\u554A\uFF01","\u8AB0\u6C92\u62D6\u5730\uFF01"]),1.2),Hi(s,"yelp",!1);break}gd(s,u,f,o.run,i),s.timer<=0&&c>o.sense*1.5&&(s.state="idle",s.timer=M(1,3),Ti(s,"idle"),o.fly||(r.y=0));break}case"air":{s.vel.y-=24*i,r.addScaledVector(s.vel,i),s.tilt.rotation.x+=s.spin*i,s.tilt.rotation.z+=s.spin*.6*i;let h=Math.hypot(s.vel.x,s.vel.z),u=!1;if(h>11)for(let f of _.obstacles){if(r.y>f.h)continue;let d=r.x-f.x,p=r.z-f.z;if(d*d+p*p<(f.r+.6)*(f.r+.6)){as(s,{mode:"wall",dir:s.vel.clone().normalize(),weapon:s.lastWeapon}),u=!0;break}}if(u)break;if(r.y<=0&&s.vel.y<0){if(Math.hypot(r.x,r.z)>xt+9){as(s,{mode:"drown",weapon:s.lastWeapon});break}if(s.vel.y<-17){r.y=0,as(s,{mode:"splat",weapon:s.lastWeapon});break}r.y=0,s.state="stun",s.timer=.9,s.mixer.timeScale=0,s.tilt.rotation.set(-Math.PI/2,0,M(-.5,.5)),s.tilt.position.y=s.H*.2,te.thud(),Pn(r.x,0,r.z,4,.6)}break}case"stun":s.timer-=i,s.timer<=0&&(s.tilt.rotation.set(0,0,0),s.tilt.position.y=s.H*.45,s.mixer.timeScale=1,Math.hypot(r.x,r.z)>xt-1&&nl(r,.5),s.state="idle",s.dP=0,tl(s));break;case"sucked":(!s.hole||s.hole.done)&&(s.hole=null,s.tilt.scale.setScalar(1),s.state="air",s.spin=M(5,10));break;case"boss":{s.timer-=i;let h=c||1;if(h>s.H*.42&&gd(s,-a/h,-l/h,4.8,i),h<s.H*.42+1.2&&s.timer<=0){s.timer=1.6;let u=_.player;u.kvel.set(-a/h*26,0,-l/h*26),u.vel.y=11,u.onGround=!1,ft(.8),te.slam(),Ns(s,Ce(["\u9019\u500B\u9700\u6C42\u5F88\u7C21\u55AE","\u6211\u53EA\u662F\u63D0\u500B\u5C0F\u5EFA\u8B70","\u4E0B\u73ED\u524D\u7D66\u6211"]),2)}Math.random()<i*.25&&Ns(s,Ce(o.lines),2.2);break}}t<90&&(Eh.position.set(r.x,.025,r.z),Eh.scale.setScalar(s.H*.33*ai(1-r.y/14,.25,1)),Eh.updateMatrix(),qo.setMatrixAt(t++,Eh.matrix))}qo.count=t,qo.instanceMatrix.needsUpdate=!0;for(let n=Nn.length-1;n>=0;n--)Nn[n].upd(i)&&(Nn[n].end&&Nn[n].end(),Nn.splice(n,1));if(Nn.length>34){let n=Nn.shift();n.end&&n.end()}}function bt(i,e,t={}){return i.dead?!1:i.ice>0?(t.weapon&&(i.lastWeapon=t.weapon),as(i,t),!0):(i.boss&&(e=Math.min(e,t.bossCap||300)),i.hp-=e,i.flash=.1,t.weapon&&(i.lastWeapon=t.weapon),i.hp<=0?(as(i,t),!0):i.boss?(Nt.wail&&_.t-i.hurtT>1.2&&(i.hurtT=_.t,Hi(i,"yelp",!1)),!1):(t.knock?(Ah(i),i.root.rotation.z=0,i.vel.copy(t.knock),i.state="air",i.spin=M(6,13),i.root.position.y<.1&&(i.root.position.y=.1),Hi(i,Nt.wail?"fall":"yelp")):i.state==="drop"?(Ah(i),i.root.rotation.z=0,i.vel.set(0,-3,0),i.state="air",i.spin=M(3,6),Hi(i,"fall")):i.state==="idle"||i.state==="wander"?tl(i):Nt.wail&&_.t-i.hurtT>(i.boss?1.2:.5)&&(i.hurtT=_.t,Hi(i,"yelp",!1)),!1))}function as(i,e={}){if(i.dead)return;i.dead=!0;let t=_.animals.indexOf(i);t>=0&&_.animals.splice(t,1),Ah(i),i.root.rotation.z=0;let n=e.mode||"drop";i.boss?n="mega":i.ice>0&&(n="ice");let s=i.root.position;e.air=!i.def.fly&&s.y>1.3,_.onKill&&_.onKill(i,n,e),Nt.wail&&(w0[n]&&Hi(i,w0[n],!1),i.dP<30&&Math.random()<.3&&Ln(xe(s.x,s.y+i.H+.5,s.z),Ce(vb),"scream",.9,2.4)),Rh(s.x,s.z,24),i.state==="sucked"&&i.tilt.scale.setScalar(1),Sb[n](i,e)}function qr(i,e=1,t){let n=i.root.position,s=n.y+i.H*.5,r=i.def.robot,o=i.H/1.5,a=t?t.x:0,l=t?t.z:0;Jn(n.x,s,n.z,a*.5,.6,l*.5,Math.round(42*e),9*Math.sqrt(o),r);let c=Math.round(12*e);for(let u=0;u<c;u++){let f=M(-7,7)*o+a*7,d=M(4,13)*Math.sqrt(o),p=M(-7,7)*o+l*7;r?ie.scrap.spawn(n.x,s+M(-.3,.3),n.z,f,d,p,M(.15,.36)*o,M(5,9),Ce([15262932,10131076,6467913,3025439])):ie.meat.spawn(n.x+M(-.3,.3),s+M(-.3,.3),n.z+M(-.3,.3),f,d,p,M(.14,.34)*o,M(5,9),Math.random()<.4?i.def.fur:Ce(wh))}if(r)Xt(n.x,s,n.z,14),Uf(n.x,s,n.z,5,!0),te.clank();else{for(let u=0;u<Math.round(3*e);u++)ie.bone.spawn(n.x,s,n.z,M(-6,6)+a*5,M(5,11),M(-6,6)+l*5,M(.25,.4)*o,M(6,10));for(let u=0;u<2;u++)ie.eye.spawn(n.x,n.y+i.H*.8,n.z,M(-5,5)+a*4,M(6,12),M(-5,5)+l*4,.2*o,M(7,11));Uf(n.x,s,n.z,Math.round(7*e))}ie.decals.add(n.x,n.z,M(2.6,4.2)*o,r?1710614:Ce(Cn)),te.splat();let h=Th.set(n.x,s,n.z).distanceTo(_.camera.position);h<5&&Vo(h<3?3:1,r)}function el(i,e,t,n,s,r=7){Jn(e,t,n,0,1,0,s,r,i.def.robot,.28)}function Mb(i){let e=Wo(i),t=[],n=[];i.traverse(s=>t.push(s)),e.traverse(s=>n.push(s));for(let s=0;s<t.length&&s<n.length;s++)n[s].position.copy(t[s].position),n[s].quaternion.copy(t[s].quaternion),n[s].scale.copy(t[s].scale);return e}function A0(i,e,t,n){return e>t&&i.scale.setScalar(Math.max(.001,1-(e-t)/(n-t))),e>n}function Md(){let i=0;for(let t in rr)i+=rr[t].w;let e=Math.random()*i;for(let t in rr)if(e-=rr[t].w,e<=0)return t;return"persi"}function _d(i,e,t=0,n=0){for(let s=0;s<30;s++){let r=M(6.28),o=M(i,e),a=t+Math.cos(r)*o,l=n+Math.sin(r)*o;if(Math.hypot(a,l)>xt-4)continue;let c=!0;for(let h of _.obstacles)if((h.x-a)**2+(h.z-l)**2<(h.r+1)**2){c=!1;break}if(c)return[a,l]}return[M(-20,20),M(-20,20)]}function il(i=!0,e){let t=Md(),n=rr[t],s=n.pack||1,[r,o]=e?_d(e[2],e[3],e[0],e[1]):_d(6,xt-8);for(let a=0;a<s;a++)L0(t,r+(a?M(-2,2):0),o+(a?M(-2,2):0),i?{drop:!0,y:M(26,40)}:{});return s}function Sd(){let i=Ce(["persi","cocoa","kuri","wasabi","shiro","mochi","cinna"]),e=_.player.pos,[t,n]=_d(26,36,e.x,e.z),s=L0(i,t,n,{scale:4.4,hpMul:1,boss:!0});return s.hp=s.maxHp=2200,_.boss=s,Pn(t,0,n,18,3),on(s.root.position,1,16,.6,15911244),ft(.6),te.slam(),s}var rr,_b,R0,yd,Nn,Th,T0,yb,qo,Eh,C0,I0,xd,wh,w0,vb,Hi,Sb,Yo=On(()=>{oi();E0();kf();zi();Wr();tr();rr={persi:{name:"\u5C0F\u67FF\u5B50",animal:"\u72D0\u72F8",role:"PM",size:1.6,walk:2.2,run:8.6,hp:100,sense:10.5,w:14,pitch:1,fur:15234090,lines:["\u9700\u6C42\u53C8\u6539\u56C9\uFF5E","\u9019\u500B\u5F88\u7C21\u55AE\u5427\uFF1F","\u660E\u5929\u8981\uFF0C\u53EF\u4EE5\u55CE\uFF1F","\u5148\u4E0A\u7DDA\u518D\u8AAA\uFF01","\u8001\u95C6\u8AAA\u8981\u518D\u5927\u6C23\u4E00\u9EDE"]},matcha:{name:"\u5C0F\u62B9\u8336",animal:"\u8B8A\u8272\u9F8D",role:"\u76E4\u9EDE",size:1.45,walk:1.8,run:7,hp:100,sense:8.7,w:11,pitch:.9,fur:9159498,cloak:!0,lines:["\u6211\u5DF2\u8B80\u4E86","\u665A\u9EDE\u56DE\u4F60","\u6A94\u6848\u653E\u54EA\u6211\u5FD8\u4E86","\u61C9\u8A72\u5728\u96F2\u7AEF\u5427\uFF1F"]},cinna:{name:"\u5C0F\u8089\u6842",animal:"\u5C0F\u9E7F",role:"\u7F8E\u8853",size:1.7,walk:2.4,run:10.5,hp:90,sense:12.4,w:11,pitch:1.2,fur:14257738,lines:["\u611F\u89BA\u4E0D\u5C0D\uFF0C\u518D\u4E00\u7248","Logo \u53EF\u4EE5\u653E\u5927\u55CE","\u6211\u8981\u4E94\u5F69\u6591\u6595\u7684\u9ED1","\u9084\u662F\u7B2C\u4E00\u7248\u597D\u4E86"]},cocoa:{name:"\u5C0F\u53EF\u53EF",animal:"\u8C93\u982D\u9DF9",role:"\u4F01\u5283",size:1.6,walk:1.5,run:5.8,hp:160,sense:8.1,w:10,pitch:.7,fur:10119738,lines:["\u9019\u500B\u6703\u958B\u4E09\u5C0F\u6642","\u6211\u5011\u5148\u958B\u500B\u6703","\u6703\u5F8C\u518D\u7D04\u500B\u6703","\u5148\u5C0D\u9F4A\u4E00\u4E0B\u9846\u7C92\u5EA6"]},kuri:{name:"\u5C0F\u6817\u5B50",animal:"\u6CB3\u72F8",role:"\u5DE5\u7A0B",size:1.45,walk:2,run:7.4,hp:120,sense:9.3,w:11,pitch:.85,fur:11890746,lines:["\u6211\u96FB\u8166\u4E0A\u662F\u597D\u7684","\u9019\u500B\u4E0D\u80FD\u6539\u5594","\u8981\u91CD\u69CB\u4E09\u500B\u6708","\u90A3\u662F\u4E0A\u4E00\u624B\u5BEB\u7684"]},minto:{name:"\u5C0F\u8584\u8377",animal:"\u8702\u9CE5",role:"\u6392\u7A0B",size:1.25,walk:3,run:9.5,hp:70,sense:11.2,w:8,pitch:1.5,fur:4891609,fly:!0,lines:["\u81E8\u6642\u63D2\u500B\u55AE\uFF5E","\u9019\u500B\u4ECA\u5929\u8981","\u6025\u4EF6\uFF01\u6025\u4EF6\uFF01","\u884C\u4E8B\u66C6\u6211\u6392\u6EFF\u56C9"]},mochi:{name:"\u5C0F\u9EBB\u7CEC",animal:"\u6A5F\u5668\u4EBA",role:"QA",size:1.6,walk:1.8,run:6.6,hp:220,sense:8.7,w:8,pitch:.55,fur:15262932,robot:!0,lines:["\u9019\u4E0D\u662F bug \u662F feature","\u7121\u6CD5\u91CD\u73FE","\u5DF2\u7D50\u6848","\u8ACB\u9644\u4E0A\u91CD\u73FE\u6B65\u9A5F"]},wasabi:{name:"\u5C0F\u82A5\u672B",animal:"\u9752\u86D9",role:"\u7814\u7A76",size:1.5,walk:2,run:8,hp:100,sense:9.9,w:11,pitch:1.1,fur:8172354,hop:1.1,lines:["\u4E0A\u7DDA\u524D\u60F3\u518D\u6539\u4E00\u4E0B","\u6211\u6709\u500B\u65B0\u60F3\u6CD5\uFF01","\u6578\u64DA\u8AAA\u4E0D\u884C","\u6211\u5011\u63DB\u500B\u65B9\u5411\u5427"]},shiro:{name:"\u5C0F\u767D",animal:"\u4F01\u9D5D",role:"\u91AB\u751F",size:1.5,walk:1.6,run:6.4,hp:130,sense:8.7,w:9,pitch:.95,fur:3422268,lines:["\u591A\u559D\u6C34\u5C31\u597D","\u4F60\u9019\u662F\u904E\u52DE","\u8ACB\u5047\u55AE\u5462\uFF1F","\u56DE\u53BB\u591A\u4F11\u606F"]},lop:{name:"Lop",animal:"\u5154\u5B50",role:"\u63A2\u96AA",size:1.2,walk:2.6,run:9.2,hp:60,sense:10.5,w:7,pitch:1.4,fur:15326403,hop:.7,pack:3,lines:["+1","\u6536\u5230","\u4E86\u89E3","\u597D\u5594"]}},_b=["\u4E0D\u8981\u554A\u554A\u554A\uFF01","\u6211\u53EA\u662F\u7167\u6D41\u7A0B\u8D70\uFF01","\u6709\u8A71\u597D\u8AAA\uFF01","\u6211\u4E0B\u6B21\u4E0D\u6562\u4E86\uFF01","\u9019\u4E0D\u5728\u6211\u7684\u8077\u8CAC\u7BC4\u570D\uFF01","\u6211\u8981\u5831\u52A0\u73ED\uFF01","\u6211\u9084\u6709\u4E09\u5F35\u55AE\u6C92\u7D50\uFF01","\u6551\u547D\u554A\u4EBA\u8CC7\uFF01","\u6211\u660E\u5929\u8ACB\u5047\uFF01"],R0={slice:"\u88AB\u4E00\u5200\u5169\u65B7",flat:"\u88AB\u62CD\u6210\u8089\u9905",launch:"\u98DB\u53BB\u7576\u661F\u661F\u4E86",gib:"\u70B8\u6210\u7D5E\u8089",burn:"\u70E4\u5230\u5168\u719F",headpop:"\u8166\u888B\u642C\u5BB6",hole:"\u88AB\u9ED1\u6D1E\u56DE\u6536",zap:"\u88AB\u96F7\u516C\u9EDE\u540D",ice:"\u788E\u6210\u51B0\u584A",wall:"\u9ECF\u5728\u7246\u4E0A",splat:"\u6454\u6210\u4E00\u6524",drop:"\u6C38\u4E45\u4E0B\u73ED",drown:"\u53BB\u9935\u9BCA\u9B5A\u4E86",mega:"\u8F5F\u7136\u5012\u4E0B"},yd={},Nn=[],Th=new F,T0=new F,yb=new Ee,Eh=new pt,wh=[13125690,14707290,11022888,15705754],w0={slice:"cut",flat:"squeak",gib:"yelp",headpop:"cut",hole:"rise",wall:"yelp",splat:"yelp",drown:"gurgle",drop:"gurgle",mega:"roar",zap:"cut"},vb=["\u554A\u554A\u554A\u554A\uFF01","\u55DA\u54C7\u554A\u554A\uFF01","\u4E0D\uFF5E\uFF5E\uFF5E\uFF01","\u5ABD\u5440\uFF01","\u54BF\u5440\u2014\u2014\uFF01","\u5443\u554A\uFF01","\u6551\u547D\u554A\uFF01","\u6211\u7684\u5E74\u7D42\uFF5E"],Hi=(i,e,t=!0)=>te.cry(e,i.def.pitch*(i.boss?.45:1),i.def.robot,t);Sb={gib(i,e){qr(i,1,e.dir),Wn(i)},wall(i,e){qr(i,1.2,e.dir);let t=i.root.position;ie.decals.add(t.x,t.z,5,Ce(Cn)),Ln(t.clone().setY(t.y+1.5),"\u556A\u5630\uFF01","big"),Go(t,.4),Wn(i)},splat(i){let e=i.root.position;qr(i,.8);for(let t=0;t<26;t++){let n=M(6.28),s=M(4,10);ie.blood.spawn(e.x,.2,e.z,Math.cos(n)*s,M(1,3),Math.sin(n)*s,M(.08,.2),2,Ce(Cn))}Wn(i)},drown(i){let e=i.root.position;for(let t=0;t<14;t++)ie.puffs.spawn(e.x,-.3,e.z,M(-3,3),M(5,11),M(-3,3),.4,M(.8,1.5),M(.5,.9),16579056,9422804,-16,.5);te.splash(),Wn(i)},mega(i,e){let t=i.root.position;qr(i,5,e.dir),$a(t.clone().setY(i.H*.5),12,1.2),on(t,1,26,.7,13125690);for(let n=0;n<70;n++){let s=M(6.28),r=M(0,16);dn(M(.2,1.6),()=>ie.meat.spawn(t.x+Math.cos(s)*r,M(14,24),t.z+Math.sin(s)*r,M(-2,2),M(-4,2),M(-2,2),M(.2,.5),M(5,9),Math.random()<.4?i.def.fur:Ce(wh)))}for(let n=0;n<14;n++)ie.decals.add(t.x+M(-9,9),t.z+M(-9,9),M(3,7),Ce(Cn));_.hitstop=.14,_.slowmoT=1.4,ft(1),Vo(5),_.boss=null,Wn(i)},hole(i){Wn(i)},drop(i,e){let t=i.root.position,n=e.dir||xe(0,0,1),s=e.power||4,r=n.x*s,o=n.z*s,a=0,l=!1;i.mixer.timeScale=0,i.yaw=Math.atan2(-n.x,-n.z),i.root.rotation.y=i.yaw,Jn(t.x,t.y+i.H*.55,t.z,n.x,.3,n.z,16,6,i.def.robot),i.def.robot?(Xt(t.x,t.y+i.H*.6,t.z,8),te.clank()):te.squish();let c=t.y;Nn.push({upd(h){a+=h;let u=Math.min(1,a/.28);i.tilt.rotation.x=-u*Math.PI/2-(u>=1?Math.max(0,Math.sin((a-.28)*18)*.12*Math.exp(-(a-.28)*6)):0),i.tilt.position.y=i.H*(.45-.27*u),t.y=c*(1-u),t.x+=r*h,t.z+=o*h;let f=Math.exp(-5*h);return r*=f,o*=f,u>=1&&!l&&(l=!0,ie.decals.add(t.x-n.x*.2,t.z-n.z*.2,M(2,3.2),i.def.robot?1710614:Ce(Cn)),Pn(t.x,0,t.z,3,.5)),a>.3&&a<1.6&&Math.random()<h*14&&el(i,t.x,.35,t.z,2,4),A0(i.tilt,a,6,6.6)},end(){Wn(i)}})},headpop(i,e){let t=i.root.position,n=t.y+i.H*.8,s=i.def.robot;i.bones.head&&i.bones.head.scale.setScalar(.001),Jn(t.x,n,t.z,0,1,0,26,8,s);for(let h=0;h<5;h++)(s?ie.scrap:ie.meat).spawn(t.x,n,t.z,M(-5,5),M(4,10),M(-5,5),M(.12,.26),M(5,8),s?15262932:Math.random()<.5?i.def.fur:Ce(wh));if(!s)for(let h=0;h<2;h++)ie.eye.spawn(t.x,n,t.z,M(-5,5),M(7,12),M(-5,5),.2,M(7,11));te.pop(),te.squish(.03);let r=0,o=i.yaw,a=Ce([-1,1])*M(3,5.5),l=!1,c=M(1.1,1.9);Ti(i,"walk",2.6),t.y=i.def.fly?t.y:0,Nn.push({upd(h){if(r+=h,r<c)i.mixer.update(h*2.6),o+=a*h,t.x+=Math.sin(o)*6.5*h,t.z+=Math.cos(o)*6.5*h,nl(t,.4),i.root.rotation.y=o,t.y>0&&(t.y=Math.max(0,t.y-6*h)),el(i,t.x,t.y+i.H*.72,t.z,2,8);else{l||(l=!0,ie.decals.add(t.x,t.z,M(2.2,3.4),s?1710614:Ce(Cn)),te.thud());let u=Math.min(1,(r-c)/.3);i.tilt.rotation.x=u*Math.PI/2,i.tilt.position.y=i.H*(.45-.27*u),r<c+1&&Math.random()<h*12&&el(i,t.x+Math.sin(o)*i.H*.6,.3,t.z+Math.cos(o)*i.H*.6,2,3)}return A0(i.tilt,r,6.5,7.1)},end(){Wn(i)}})},flat(i){let e=i.root.position,t=i.def.robot;e.y=0,i.mixer.timeScale=0,i.tilt.rotation.set(0,0,0);for(let s=0;s<34;s++){let r=M(6.28),o=M(4,11);(t?ie.oil:ie.blood).spawn(e.x,.25,e.z,Math.cos(r)*o,M(1,4.5),Math.sin(r)*o,M(.08,.2),2,t?1710614:Ce(Cn))}if(ie.decals.add(e.x,e.z,M(3.4,4.6)*i.H/1.5,t?1710614:Ce(Cn)),t)Xt(e.x,.3,e.z,12);else for(let s=0;s<2;s++)ie.eye.spawn(e.x,.3,e.z,M(-3,3),M(9,14),M(-3,3),.2,M(7,11));te.splat();let n=0;Nn.push({upd(s){n+=s;let r=Math.min(1,n/.07),o=1-.95*r;if(n<7.5)return i.tilt.scale.set(1+.8*r,o,1+.8*r),i.tilt.position.y=i.H*.45*o,!1;let a=Math.max(.001,1-(n-7.5)/.5);return i.tilt.scale.set(1.8*a,.05,1.8*a),n>8},end(){Wn(i)}})},launch(i,e){let t=i.root.position,n=e.dir.clone().multiplyScalar(46);n.y=Math.max(n.y,12)+9,te.crack(),Hi(i,"fall"),i.mixer.timeScale=3,Jn(t.x,t.y+i.H*.5,t.z,e.dir.x,.5,e.dir.z,12,7,i.def.robot);let s=0;Nn.push({upd(r){s+=r,n.y-=8*r,t.addScaledVector(n,r),i.tilt.rotation.x+=24*r,i.mixer.update(r*3),Math.random()<r*40&&ie.puffs.spawn(t.x,t.y+i.H*.5,t.z,0,0,0,.5,.2,.4,16579056,14539473,0,1);for(let o of _.animals.slice()){if(o.boss){let l=o.root.position;if(Math.hypot(l.x-t.x,l.z-t.z)<o.H*.35&&t.y<o.H)return bt(o,220,{mode:"gib",weapon:e.weapon}),qr(i,1,n.clone().normalize()),!0;continue}let a=o.root.position;(a.x-t.x)**2+(a.y-t.y)**2+(a.z-t.z)**2<2.6&&bt(o,999,{mode:"gib",dir:T0.copy(n).normalize().clone(),weapon:e.weapon,style:"bowling"})}for(let o of _.obstacles)if(!(t.y>o.h)&&(t.x-o.x)**2+(t.z-o.z)**2<(o.r+.6)**2)return qr(i,1.2,n.clone().normalize()),ie.decals.add(t.x,t.z,5,Ce(Cn)),Ln(t.clone().setY(t.y+1.5),"\u556A\u5630\uFF01","big"),Go(t,.4),!0;return t.y<.1&&n.y<0?(t.y=0,qr(i,.9),!0):s>1.5?(Ln(t,"\u2726","star",1.3,0),te.ding(),!0):!1},end(){Wn(i)}})},burn(i){let e=i.root.position,t=0,n=i.yaw,s=!1,r=0,o=M(.5,.9),a=M(1.8,2.6);Ti(i,"walk",3.2),Hi(i,"long"),i.mat.transparent=!1,i.mat.opacity=1,Math.random()<.6&&Ns({root:i.root,H:i.H,dead:!1,label:null},Ce(["\u71D9\u71D9\u71D9\u71D9\uFF01","\u6211\u8457\u706B\u4E86\uFF01","\u8AB0\u4F86\u6EC5\u706B\uFF01","\u554A\u554A\u554A\u554A\u554A\uFF01"]),1.6),Nn.push({upd(l){if(t+=l,t<a){i.mixer.update(l*3.2),n+=M(-7,7)*l+Math.sin(t*9)*3*l,e.x+=Math.sin(n)*9*l,e.z+=Math.cos(n)*9*l,nl(e,.4),i.root.rotation.y=n,!i.def.fly&&e.y>0&&(e.y=Math.max(0,e.y-8*l)),i.mat.color.lerp(yb.set(1709586),l*1.1),Nt.wail&&(o-=l,o<=0&&(o=M(.5,.9),Hi(i,"long",!1)));for(let c=0;c<2;c++)ie.puffs.spawn(e.x+M(-.4,.4),e.y+M(.2,i.H),e.z+M(-.4,.4),M(-1,1),M(1,3),M(-1,1),.3,M(.5,.9),M(.25,.5),16773808,15234090,5,2);if(r-=l,r<=0){r=.12;for(let c of _.animals.slice()){let h=c.root.position;(h.x-e.x)**2+(h.z-e.z)**2<4.4&&Math.abs(h.y-e.y)<2.5&&bt(c,c.boss?40:999,{mode:"burn",weapon:"flame",style:"spread"})}Math.random()<.3&&ie.decals.add(e.x,e.z,M(.8,1.5),2367770,!0)}}else if(s){if(t>a+.7){for(let c=0;c<14;c++)ie.puffs.spawn(e.x+M(-.3,.3),e.y+M(.1,i.H),e.z+M(-.3,.3),M(-3,3),M(0,4),M(-3,3),.3,M(.6,1.1),M(.5,.9),3025439,7038037,-3,2);for(let c=0;c<9;c++)ie.scrap.spawn(e.x,e.y+M(.2,i.H),e.z,M(-3,3),M(1,5),M(-3,3),M(.12,.28),M(4,7),Ce([1380879,2367770]));return ie.decals.add(e.x,e.z,M(1.8,2.6),2367770),te.thud(),!0}}else{s=!0,i.mat.color.set(1380879),i.mixer.timeScale=0;for(let c=0;c<6;c++)ie.puffs.spawn(e.x,e.y+M(.3,i.H),e.z,M(-1,1),M(1,3),M(-1,1),.4,1,M(.6,1),7038037,3025439,2,2)}return!1},end(){Wn(i)}})},ice(i){let e=i.root.position,t=e.y+i.H*.5,n=i.H/1.5;for(let s=0;s<16;s++)ie.scrap.spawn(e.x+M(-.3,.3),t+M(-.5,.5),e.z+M(-.3,.3),M(-7,7),M(3,10),M(-7,7),M(.18,.4)*n,M(4,7),Ce([12577535,10475760,15136767]));for(let s=0;s<6;s++)ie.meat.spawn(e.x,t,e.z,M(-5,5),M(3,9),M(-5,5),M(.14,.3)*n,M(4,7),Ce(wh));for(let s=0;s<8;s++)ie.puffs.spawn(e.x,t,e.z,M(-3,3),M(0,3),M(-3,3),.3,M(.8,1.4),M(.4,.7),16055034,12577535,.5,2);ie.decals.add(e.x,e.z,M(1.6,2.4)*n,12575726),te.ice(),Wn(i)},zap(i){let e=i.root.position,t=0,n=!1;i.mixer.timeScale=0,i.mat.transparent=!1,i.mat.opacity=1,i.tilt.rotation.set(0,0,0),!i.def.fly&&e.y<.3&&(e.y=0),Nn.push({upd(s){if(t+=s,t<.55){let r=Math.floor(t*30)%2;return i.mat.emissive.setRGB(r,r,r*.8),i.mat.color.set(r?16777215:1118481),i.tilt.position.x=M(-.08,.08),i.tilt.scale.set(1+M(-.06,.06),1+M(0,.14),1+M(-.06,.06)),Math.random()<s*30&&Xt(e.x,e.y+M(.2,i.H),e.z,2),!1}if(!n){n=!0,i.mat.emissive.setRGB(0,0,0),i.mat.color.set(1380879),i.tilt.position.x=0,i.tilt.scale.setScalar(1);for(let r=0;r<6;r++)ie.puffs.spawn(e.x,e.y+M(.3,i.H),e.z,M(-1,1),M(1,3),M(-1,1),.4,1,M(.6,1),7038037,3025439,2,2)}if(e.y>0&&(e.y=Math.max(0,e.y-14*s)),t>1.5){for(let r=0;r<12;r++)ie.puffs.spawn(e.x+M(-.3,.3),e.y+M(.1,i.H),e.z+M(-.3,.3),M(-3,3),M(0,4),M(-3,3),.3,M(.6,1.1),M(.5,.9),3025439,7038037,-3,2);for(let r=0;r<8;r++)ie.scrap.spawn(e.x,e.y+M(.2,i.H),e.z,M(-3,3),M(1,5),M(-3,3),M(.12,.28),M(4,7),Ce([1380879,2367770]));return ie.decals.add(e.x,e.z,M(1.8,2.6),2367770),te.thud(),!0}return!1},end(){Wn(i)}})},slice(i,e){let t=e.cut||Ce(["h","d"]),n=i.H,s=i.root.position,r=i.def.robot,o,a;t==="v"?(o=xe(1,0,0),a=xe(0,n*.5,0)):t==="d"?(o=xe(.55*Ce([-1,1]),.83,0).normalize(),a=xe(0,n*.5,0)):(o=xe(0,1,0),a=xe(0,n*.45,0)),i.tilt.rotation.set(0,0,0),i.tilt.position.y=n*.45,i.tilt.scale.setScalar(1),!i.def.fly&&t!=="v"&&(s.y=Math.max(0,s.y));let l=new Ot;l.rotation.y=i.root.rotation.y,l.position.copy(a).applyAxisAngle(Th.set(0,1,0),i.root.rotation.y).add(s);let c=Mb(i.model);c.position.set(-a.x,-a.y,-a.z);let h=i.mat.clone(),u=new An,f=new An;h.clippingPlanes=[u],i.mat.clippingPlanes=[f],i.mat.needsUpdate=!0,i.mat.transparent=!1,i.mat.opacity=1,h.transparent=!1,h.opacity=1,c.traverse(C=>{C.isMesh&&(C.material=h,C.frustumCulled=!1)}),l.add(c),_.scene.add(l);let d=new An(o.clone(),0),p=new An().setFromNormalAndCoplanarPoint(o.clone().negate(),a.clone().sub(i.tilt.position)),x=(C,P,O)=>{let z=new Ue(new Zi(1,18),r?new st({color:3025439,side:At}):C0);z.scale.set(n*.3,t==="v"?n*.47:n*.3,1),z.quaternion.setFromUnitVectors(Th.set(0,0,1),o),z.position.copy(P).addScaledVector(o,O*.01),C.add(z)};x(l,xe(0,0,0),1),x(i.tilt,a.clone().sub(i.tilt.position),-1),i.extra=[{obj:l,mat:h}];let m=T0.set(o.x,0,o.z).applyAxisAngle(Th.set(0,1,0),i.root.rotation.y).clone(),g=e.dir||xe(0,0,0),v=t==="v"?xe(m.x*2.6,2.2,m.z*2.6):xe(g.x*3+m.x*3.5+M(-1,1),M(4.5,6.5),g.z*3+m.z*3.5+M(-1,1)),w=t==="v"?xe(0,0,-5):xe(M(-7,7),M(-4,4),M(-7,7));Jn(l.position.x,l.position.y,l.position.z,0,.6,0,30,7,r),r&&(Xt(l.position.x,l.position.y,l.position.z,12),te.clank()),te.slice();let S=0,A=!1,R=i.yaw,y=t==="v"?0:M(.45,.85);y?Ti(i,"walk",2.6):i.mixer.timeScale=0;let T=n*.2,N=s.y;Nn.push({upd(C){if(S+=C,A||(v.y-=22*C,l.position.addScaledVector(v,C),l.rotation.x+=w.x*C,l.rotation.z+=w.z*C,l.rotation.y+=w.y*C,t==="v"&&l.rotation.z<-Math.PI/2&&(l.rotation.z=-Math.PI/2,w.z=0),l.position.y<T&&(l.position.y=T,A=!0,ie.decals.add(l.position.x,l.position.z,M(1.6,2.6),r?1710614:Ce(Cn)),te.thud(),t!=="v"&&l.rotation.set(Math.PI/2*Ce([-1,1]),l.rotation.y,0))),S<y)i.mixer.update(C*2.6),s.x+=Math.sin(R)*5*C,s.z+=Math.cos(R)*5*C,nl(s,.4),el(i,s.x,s.y+a.y,s.z,2,7);else{let P=Math.min(1,(S-y)/.32);t==="v"?(i.tilt.rotation.z=P*Math.PI/2,s.y=N*(1-P)):i.tilt.rotation.x=P*Math.PI/2,i.tilt.position.y=n*(.45-.25*P),S<y+.9&&Math.random()<C*16&&el(i,s.x,.4,s.z,2,4),P>=1&&!i._pool&&(i._pool=!0,ie.decals.add(s.x,s.z,M(2.2,3.2),r?1710614:Ce(Cn)))}if(l.updateMatrixWorld(!0),i.root.updateMatrixWorld(!0),u.copy(d).applyMatrix4(l.matrixWorld),f.copy(p).applyMatrix4(i.tilt.matrixWorld),S>6.2){let P=Math.max(.001,1-(S-6.2)/.6);l.scale.setScalar(P),i.tilt.scale.setScalar(P)}return S>6.8},end(){Wn(i)}})}}});function Us(){_.camera.getWorldDirection(We),Ai.crossVectors(We,z0).normalize(),Fs.crossVectors(Ai,We),yt.copy(_.camera.position)}function Ft(i,e,t,n,s=0,r=0,o=0,a=0,l=0,c=0){let h=new Ue(new _n(i,e,t),Kr(n));return h.position.set(s,r,o),h.rotation.set(a,l,c),h}function an(i,e,t,n,s=0,r=0,o=0,a=0,l=0,c=0,h=10){let u=new Ue(new Yt(i,e,t,h),Kr(n));return u.position.set(s,r,o),u.rotation.set(a,l,c),u}function Eb(){let o={};o.katana=wi(an(.018,.018,.24,3025439,0,0,0),an(.05,.05,.014,15911244,0,.125,0),Ft(.01,.82,.045,14541530,0,.54,0),Ft(.012,.82,.012,16250864,0,.54,-.022)),o.hammer=wi(an(.026,.03,1,9067051,0,.3,0),an(.19,.19,.42,7038037,0,.85,0,li,0,0,12),an(.2,.2,.05,15911244,0,.85,.19,li,0,0,12),an(.2,.2,.05,15911244,0,.85,-.19,li,0,0,12)),o.bat=wi(an(.02,.018,.3,3025439,0,0,0),an(.058,.03,.7,9067051,0,.5,0));for(let l=0;l<14;l++){let c=l/7*6.28+(l>6?.45:0),h=.55+(l>6?.2:0)+l%2*.06,u=new Ue(new Fi(.018,.07,5),Kr(14541530));u.position.set(Math.cos(c)*.07,h,Math.sin(c)*.07),u.rotation.set(Math.sin(c)*li,0,-Math.cos(c)*li),o.bat.add(u)}Ed=Ft(.022,.085,.6,14541530,0,0,-.42),o.saw=wi(Ft(.17,.15,.24,15234090,0,0,0),Ft(.05,.05,.2,3025439,0,.11,.02),Ft(.17,.04,.1,3025439,0,-.05,-.14),Ed);for(let l=0;l<10;l++)o.saw.add(Ft(.026,.02,.03,3025439,0,.05,-.16-l*.055)),o.saw.add(Ft(.026,.02,.03,3025439,0,-.05,-.19-l*.055));o.smg=wi(Ft(.06,.1,.34,3025439,0,0,0),an(.016,.016,.18,7038037,0,.015,-.26,li),Ft(.04,.18,.055,4864792,0,-.13,-.03,.15),Ft(.045,.1,.05,4864792,0,-.09,.12,-.2),Ft(.03,.03,.06,15911244,0,.065,-.1)),o.shotgun=wi(an(.024,.024,.62,7038037,-.026,.02,-.3,li),an(.024,.024,.62,7038037,.026,.02,-.3,li),Ft(.085,.085,.24,9067051,0,0,.06),Ft(.06,.12,.06,9067051,0,-.08,.16,-.3),Ft(.09,.05,.2,4864792,0,-.03,-.22)),rl=wi(Ft(.07,.06,.02,4864792,0,0,0),new Ue(new Kt(.04,8,6),Kr(14715438))),rl.children[1].position.z=-.03,rl.position.set(0,.2,.02),o.sling=wi(an(.02,.022,.2,9067051,0,0,0),an(.016,.018,.2,9067051,-.06,.17,0,0,0,.6),an(.016,.018,.2,9067051,.06,.17,0,0,0,-.6),rl),o.missile=wi(Ft(.24,.2,.5,2966305,0,0,0),Ft(.26,.22,.04,15911244,0,0,-.2),Ft(.05,.12,.06,3025439,0,-.15,.1));for(let l=0;l<8;l++)o.missile.add(an(.036,.036,.03,3025439,-.075+l%4*.05,.045-Math.floor(l/4)*.09,-.25,li));o.flame=wi(an(.07,.07,.3,13125690,0,-.02,.1,li),an(.022,.022,.5,7038037,0,.03,-.26,li),an(.04,.028,.08,3025439,0,.03,-.52,li),Ft(.04,.12,.05,3025439,0,-.1,-.05),Ft(.02,.05,.02,15911244,0,0,-.5)),Ko=new Ue(new Ui(.1,.014,6,20),Kr(15911244)),Ko.position.set(0,.02,-.3);let a=new Ue(new Kt(.07,12,10),new st({color:1053711}));return a.position.set(0,.02,-.3),o.hole=wi(Ft(.1,.12,.36,1850656,0,0,0),Ft(.05,.12,.06,3025439,0,-.11,.1),an(.05,.07,.1,13935475,0,.02,-.2,li),Ko,a),o.hammer.scale.setScalar(.72),o.missile.scale.setScalar(.72),o.hole.scale.setScalar(.85),o.saw.scale.setScalar(.9),ci.map(l=>{let c=o[l.id];return c.visible=!1,sl.add(c),c})}function W0(){sl=new Ot,_.camera.add(sl),ol=Eb(),Yr=wi(Ft(.13,.12,.34,7032362,0,0,0),Ft(.14,.04,.38,3025439,0,-.07,-.01),Ft(.12,.22,.13,7032362,0,.14,.11)),Yr.visible=!1,sl.add(Yr),ls=new Ue(new Ss(.42,.6,24,1,.3,2.5),new st({color:16579056,transparent:!0,opacity:.8,side:At,depthTest:!1})),ls.visible=!1,ls.position.set(0,-.12,-.75),sl.add(ls),k0=new Kt(.22,10,8),H0=Kr(14715438),G0=new Yt(.07,.1,.6,8).rotateX(Math.PI/2),V0=Kr(16249308),ol[0].visible=!0}function X0(){for(let i of ar)i.kill&&i.kill();ar.length=0,V.cd=0,V.sw=0,V.charge=0,V.charging=!1,V.missiles=8,V.holeCd=0,V.pending=null,V.locks.length=0,V.kickT=0,vn("saw",!1),vn("flame",!1),vn("hole",!1)}function Ch(i){i===V.cur||i<0||i>=ci.length||V.next===i||(V.next=i,V.switchT=1e-4,V.charging=!1,V.charge=0,V.pending=null,vn("saw",!1),vn("flame",!1))}function Td(i,e,t,n,s,r){let o=i.x-t,a=i.y-n,l=i.z-s,c=o*e.x+a*e.y+l*e.z,h=o*o+a*a+l*l-r*r;if(h>0&&c>0)return null;let u=c*c-h;if(u<0)return null;let f=-c-Math.sqrt(u);return f<0?0:f}function Tb(i,e,t){let n=null,s=t;for(let r of _.animals){let o=r.root.position,a=_.buff.bighead>0&&!r.boss?2.2:1,l=Td(i,e,o.x,o.y+r.H*(a>1?.95:.8),o.z,r.H*.3*a),c=Td(i,e,o.x,o.y+r.H*.4,o.z,r.H*.42);if(l===null&&c===null)continue;let h=Math.min(l===null?1e9:l,c===null?1e9:c);h<s&&(s=h,n={a:r,head:l!==null,t:h})}return n}function q0(i,e,t){let n=t,s=null;if(e.y<-1e-4){let o=-i.y/e.y;o<n&&(n=o,s={type:"ground"})}let r=e.x*e.x+e.z*e.z;if(r>1e-6)for(let o of _.obstacles){let a=i.x-o.x,l=i.z-o.z,c=a*e.x+l*e.z,h=a*a+l*l-o.r*o.r,u=c*c-r*h;if(u<0)continue;let f=(-c-Math.sqrt(u))/r;if(f>0&&f<n){let d=i.y+e.y*f;d<o.h&&d>=0&&(n=f,s={type:"ob",ob:o})}}for(let o of _.barrels){if(!o.alive)continue;let a=Td(i,e,o.x,.7,o.z,.8);a!==null&&a<n&&(n=a,s={type:"barrel",br:o})}return{t:n,hit:s}}function al(i,e){let t=[];for(let n of _.animals){let s=n.root.position;ze.set(s.x-yt.x,s.y+n.H*.5-yt.y,s.z-yt.z);let r=ze.length(),o=i+n.H*.35;r>o||r>1.4+n.H*.3&&ze.dot(We)/r<e||t.push({a:n,d:r})}return t}function Os(i){i.alive&&(i.alive=!1,i.m.visible=!1,i.t=22,Vi(xe(i.x,.8,i.z),7.5,{weapon:"barrel"}))}function Vi(i,e,t={}){let n=t.gibR===void 0?e*.62:t.gibR;$a(i,e,t.loud||1);let s=0;for(let a of _.animals.slice()){let l=a.root.position;ze.set(l.x-i.x,l.y+a.H*.5-i.y,l.z-i.z);let c=Math.max(.01,ze.length()-(a.boss?a.H*.3:0));if(!(c>e))if(ze.normalize(),c<n)bt(a,999,{mode:"gib",dir:ze.clone(),weapon:t.weapon,bossCap:420})&&s++;else{let h=1-c/e,u=xe(ze.x*(8+12*h),8+9*h,ze.z*(8+12*h));bt(a,30+70*h,{mode:"gib",dir:ze.clone(),knock:u,weapon:t.weapon})&&s++}}for(let a of _.barrels)a.alive&&(a.x-i.x)**2+(a.z-i.z)**2<(e+1.5)**2&&dn(M(.08,.25),()=>Os(a));let r=_.player;ze.set(r.pos.x-i.x,0,r.pos.z-i.z);let o=ze.length();if(o<e&&Math.abs(r.pos.y+1-i.y)<e){let a=1-o/e;ze.normalize(),r.kvel.x+=ze.x*16*a,r.kvel.z+=ze.z*16*a,r.vel.y=Math.max(r.vel.y,5+9*a),r.onGround=!1}return s>=3&&_.onMulti&&_.onMulti(s,i),Rh(i.x,i.z,e+26),s}function O0(i,e,t,n=1){Us();let s=xe().copy(yt).addScaledVector(We,.75).addScaledVector(Ai,.2).addScaledVector(Fs,-.15),r=new Map;for(let o=0;o<n;o++){or.copy(We).addScaledVector(Ai,M(-i,i)).addScaledVector(Fs,M(-i,i)).normalize();let a=q0(yt,or,220),l=Tb(yt,or,a.t),c=xe();if(l){c.copy(yt).addScaledVector(or,l.t);let h=r.get(l.a)||{dmg:0,head:!1,dir:or.clone(),d:l.t};h.dmg+=e*(l.head?2.5:1),h.head=h.head||l.head,r.set(l.a,h),Jn(c.x,c.y,c.z,or.x,.2,or.z,3,5,l.a.def.robot),l.a.def.robot&&Xt(c.x,c.y,c.z,3)}else c.copy(yt).addScaledVector(or,a.t),a.hit&&(a.hit.type==="barrel"?Os(a.hit.br):ie.puffs.spawn(c.x,c.y+.05,c.z,0,1.5,0,.15,.4,.25,15260085,16249308,0,2));ki(s,c)}return ie.puffs.spawn(s.x+We.x*.2,s.y+We.y*.2,s.z+We.z*.2,0,0,0,.25,.1,.06,16773808,15911244,0,0),r.size&&(_.hitMark=.12),r}function Y0(i,e,t){let n=new Ue(k0,H0);t&&n.scale.setScalar(.55),_.scene.add(n);let s=t?M(.55,1.15):6;ar.push({kill(){_.scene.remove(n)},upd(r){e.y-=20*r,i.addScaledVector(e,r),n.position.copy(i),n.rotation.x+=9*r,s-=r;let o=s<=0;if(i.y<.22&&(t?(i.y=.22,e.y=Math.abs(e.y)*.5,e.x*=.7,e.z*=.7):o=!0),!o)for(let a of _.animals){let l=a.root.position;if((l.x-i.x)**2+(l.y+a.H*.5-i.y)**2+(l.z-i.z)**2<(a.H*.5+.25)**2){o=!0;break}}if(!o){for(let a of _.obstacles)if(i.y<a.h&&(i.x-a.x)**2+(i.z-a.z)**2<(a.r+.2)**2){o=!0;break}}if(!t&&Math.random()<r*30&&ie.puffs.spawn(i.x,i.y,i.z,0,0,0,.3,.1,.3,16579056,14539473,0,1),!o)return!1;if(_.scene.remove(n),Vi(i.clone(),t?4.6:7,{weapon:"sling",loud:t?.6:1}),!t)for(let a=0;a<5;a++){let l=a/5*6.28+M(.5);Y0(xe(i.x,Math.max(.5,i.y),i.z),xe(Math.cos(l)*M(4,8),M(7,11),Math.sin(l)*M(4,8)),!0)}return!0}})}function wb(i,e){let t=null,n=e*e;for(let s of _.animals){let r=s.root.position,o=(r.x-i.x)**2+(r.y-i.y)**2+(r.z-i.z)**2;o<n&&(n=o,t=s)}return t}function Ab(i,e,t){Us();let n=xe().copy(yt).addScaledVector(We,.7).addScaledVector(Ai,.3).addScaledVector(Fs,-.15),s=xe().copy(We).addScaledVector(Fs,.45+M(.2)).addScaledVector(Ai,(e-(t-1)/2)*.22).normalize(),r=new Ue(G0,V0);_.scene.add(r);let o=0,a=14,l=0,c=xe(0,0,-1);te.missile(),ar.push({kill(){_.scene.remove(r)},upd(h){o+=h,a=Math.min(62,a+75*h),i&&i.dead&&(i=wb(n,45));let u=99;i&&(cs(i,Gi).sub(n),u=Gi.length(),o>.16&&s.lerp(Gi.normalize(),Math.min(1,h*(5+o*14))).normalize()),n.addScaledVector(s,a*h),r.position.copy(n),r.quaternion.setFromUnitVectors(c,s),l-=h,l<=0&&o>.14&&(l=.02,ie.puffs.spawn(n.x-s.x*.4,n.y-s.y*.4,n.z-s.z*.4,M(-.5,.5),M(-.5,.5),M(-.5,.5),.3,.6,.45,16773808,14539473,.6,1.5));let f=o>5||n.y<.15||i&&u<i.H*.5+.6;if(!f&&o>.2){for(let d of _.obstacles)if(n.y<d.h&&(n.x-d.x)**2+(n.z-d.z)**2<d.r*d.r){f=!0;break}}return f?(_.scene.remove(r),Vi(n.clone(),4.6,{gibR:3.3,weapon:"missile",loud:.75}),!0):!1}})}function Rb(){Us();let i=xe().copy(yt).addScaledVector(We,1),e=We.clone(),t=new Ot,n=new Ue(new Kt(1,16,12),new st({color:790539})),s=new Ue(new Ui(1.5,.09,6,32),new st({color:15911244})),r=new Ue(new Ui(1.9,.05,6,32),new st({color:16579056}));t.add(n,s,r),t.scale.setScalar(.35),_.scene.add(t);let o={done:!1},a=0,l=0,c=[],h=0;ar.push({kill(){_.scene.remove(t),o.done=!0,vn("hole",!1)},upd(u){if(a+=u,s.rotation.x+=u*5,s.rotation.y+=u*3,r.rotation.y-=u*4,r.rotation.z+=u*2.5,l===0){i.addScaledVector(e,24*u),t.position.copy(i);let x=a>.9||i.y<1.2;if(!x){for(let m of _.obstacles)if(i.y<m.h&&(i.x-m.x)**2+(i.z-m.z)**2<(m.r+.5)**2){x=!0;break}}if(!x){for(let m of _.animals)if(cs(m,ze),ze.distanceToSquared(i)<4){x=!0;break}}return x&&(l=1,a=0,i.y=Math.max(i.y,2.6),t.position.copy(i),vn("hole",!0),on(i.clone().setY(.1),14,1,.5,1057807)),!1}let f=3.6,d=Math.min(1,a/.4);if(t.scale.setScalar(.35+1*d+Math.sin(a*18)*.05+c.length*.03),h-=u,h<=0){h=.03;let x=M(6.28),m=M(6,16);ie.puffs.spawn(i.x+Math.cos(x)*m,M(.2,5),i.z+Math.sin(x)*m,-Math.cos(x)*m*2.2-Math.sin(x)*6,2,-Math.sin(x)*m*2.2+Math.cos(x)*6,.25,.12,.45,2966305,1057807,0,0)}for(let x of _.animals.slice()){let m=x.root.position;cs(x,ze),Gi.copy(i).sub(ze);let g=Gi.length();if(x.boss){g<22&&bt(x,260*u,{weapon:"hole",mode:"gib",bossCap:999});continue}if(g>24)continue;x.state!=="sucked"&&(x.chute&&(x.root.remove(x.chute),x.chute=null),x.state="sucked",x.hole=o,x.mixer.timeScale=3,Math.random()<.45&&te.cry("rise",x.def.pitch,x.def.robot)),x.hole!==o&&(x.hole=o),Gi.multiplyScalar(1/g);let v=Math.min(42,5+240/(g+2));m.x+=(Gi.x*v+-Gi.z*v*.55)*u,m.y+=Gi.y*v*u,m.z+=(Gi.z*v+Gi.x*v*.55)*u,x.tilt.rotation.x+=13*u,x.tilt.rotation.z+=9*u,x.tilt.scale.setScalar(ai(g/7,.18,1)),g<1.4&&(c.push({fur:x.def.fur,robot:x.def.robot}),bt(x,9999,{mode:"hole",weapon:"hole"}),te.pop())}if(a<f)return!1;o.done=!0,vn("hole",!1),_.scene.remove(t),$a(i,8,1.1),on(i.clone().setY(.1),1,22,.6,13125690);let p=c.length;for(let x=0;x<Math.min(160,p*12+8);x++){let m=M(6.28),g=M(.1,1.45),v=M(8,22),w=c[x%Math.max(1,p)],S=Math.cos(m)*Math.cos(g)*v,A=Math.sin(g)*v,R=Math.sin(m)*Math.cos(g)*v;if(!p)break;w.robot?ie.scrap.spawn(i.x,i.y,i.z,S,A,R,M(.15,.3),M(5,9),15262932):ie.meat.spawn(i.x,i.y,i.z,S,A,R,M(.14,.34),M(5,9),Math.random()<.4?w.fur:Ce([13125690,14707290,11022888]))}if(p){Jn(i.x,i.y,i.z,0,.8,0,Math.min(260,p*30),16,!1,.9);for(let x=0;x<Math.min(16,p*2);x++)ie.eye.spawn(i.x,i.y,i.z,M(-9,9),M(6,16),M(-9,9),.2,M(7,11));Vo(Math.min(5,p))}return p>=3&&_.onMulti&&_.onMulti(p,i,"\u9ED1\u6D1E\u56DE\u6536"),ft(.9),!0}})}function bd(i){Us(),i=i||al(4,.3);for(let{a:e}of i)cs(e,ze),Jn(ze.x,ze.y,ze.z,-We.x*.3,.5,-We.z*.3,8,7,e.def.robot),bt(e,170,{mode:"slice",cut:V.swDir>0?"h":"d",dir:We.clone(),weapon:"katana",bossCap:170});i.length&&(_.hitstop=.045,ft(.25),te.slice(),_.hitMark=.12)}function B0(i){Us();let e=_.player,t=Math.hypot(We.x,We.z)||1,n=i?1.75:1,s=xe(e.pos.x+We.x/t*2.5,0,e.pos.z+We.z/t*2.5);te.slam(),ft(i?1:.7),on(s,.5,6.5*n,.35),on(s,.3,4*n,.5,15260085),Pn(s.x,0,s.z,12,1.1*n),ie.decals.add(s.x,s.z,3.4*n,3814692,!0),_.hitstop=.05;let r=0;for(let o of _.animals.slice()){let a=o.root.position,l=Math.hypot(a.x-s.x,a.z-s.z);if(!(a.y>4.5*n)){if(l<2.6*n+(o.boss?o.H*.3:0))bt(o,999,{mode:"flat",weapon:"hammer",bossCap:340})&&r++,o.boss&&(cs(o,ze),Jn(ze.x,ze.y,ze.z,0,1,0,30,9));else if(l<6.5*n){let c=1-l/(6.5*n);bt(o,30,{mode:"splat",weapon:"hammer",knock:xe((a.x-s.x)/l*5,9+7*c,(a.z-s.z)/l*5)})&&r++}}}for(let o of _.barrels)o.alive&&(o.x-s.x)**2+(o.z-s.z)**2<(4*n)**2&&Os(o);i&&Ln(s.clone().setY(2.2),"\u5929\u964D\u6B63\u7FA9\uFF01","big"),r>=3&&_.onMulti&&_.onMulti(r,s),Rh(s.x,s.z,26)}function Cb(){Us();let i=al(4.1,.35);for(let{a:e}of i){let t=We.clone();t.y=Math.max(t.y,.28),t.normalize(),e.boss?(cs(e,ze),Jn(ze.x,ze.y,ze.z,t.x,.5,t.z,20,9),bt(e,260,{weapon:"bat"})):bt(e,999,{mode:"launch",dir:t,weapon:"bat"})}i.length&&(_.hitstop=.07,ft(.5),_.hitMark=.12,i[0].a.boss&&te.crack())}function Ib(){Us(),V.kickCd=.5,V.kickT=.3,te.swing(),dn(.08,()=>{Us();let i=al(3.2,.45),e=Math.hypot(We.x,We.z)||1;for(let{a:t}of i){if(t.boss){bt(t,60,{weapon:"kick"});continue}bt(t,25,{mode:"splat",weapon:"kick",knock:xe(We.x/e*22,8.5,We.z/e*22)})}for(let t of _.barrels)t.alive&&(t.x-yt.x)**2+(t.z-yt.z)**2<6&&Os(t);i.length&&(te.kick(),ft(.3),_.hitstop=.04,_.hitMark=.12)})}function K0(i,e){let t=_.input,n=ci[V.cur].id,s=_.rageOn>0,r=_.buff.rapid>0,o=(s?.5:1)*(r?.3:1),a=_.player;if(V.cd-=i,V.kickCd-=i,V.holeCd-=i*(s?2:1)*(r?8:1),V.rec=Math.max(0,V.rec-i*9),V.kickT>0&&(V.kickT-=i),V.missiles<8&&(V.missT+=i*(s?2.5:1)*(r?8:1),V.missT>.5&&(V.missT=0,V.missiles++)),V.switchT>0&&(V.switchT+=i/.2,V.next>=0&&V.switchT>=.5&&(ol[V.cur].visible=!1,V.cur=V.next,V.next=-1,ol[V.cur].visible=!0,V.sw=0,te.ui()),V.switchT>=1&&(V.switchT=0)),V.pending){let c=V.pending;c.land?a.onGround&&(V.pending=null,B0(!0)):(c.t-=i,c.t<=0&&(V.pending=null,c.fn()))}let l=V.switchT===0&&V.cd<=0;if(V.firing=!1,V.cutting=!1,t.altPressed&&V.kickCd<=0&&Ib(),Us(),n==="katana"){if(t.fire&&l){V.cd=.26*o,V.sw=.001,V.swDir*=-1,te.swing();let c=al(3.8,.4);if(c.length)bd(c);else{let h=null,u=.9,f=0;for(let d of _.animals){cs(d,ze).sub(yt);let p=ze.length();if(p>13||p<3)continue;let x=ze.dot(We)/p;x>u&&(u=x,h=d,f=p)}if(h){let d=h.root.position,p=d.x-a.pos.x,x=d.z-a.pos.z,m=Math.hypot(p,x)||1;a.dash={x:p/m,z:x/m,t:.11,speed:Math.max(0,m-2.3)/.11},te.whoosh(),V.pending={t:.11,fn:()=>bd()}}else bd(c)}}}else if(n==="hammer")t.fire&&l&&!V.pending&&(V.cd=.9*o,V.sw=.001,te.swing(!0),!a.onGround&&a.pos.y>.8?(a.vel.y=-36,V.pending={land:!0}):V.pending={t:.22*o,fn:()=>B0(!1)});else if(n==="bat")t.fire&&l&&(V.cd=.46*o,V.sw=.001,V.swDir*=-1,te.swing(!0),V.pending={t:.09,fn:Cb});else if(n==="saw"){let c=t.fire&&V.switchT===0;if(V.firing=c,c){let h=al(3.2,.55);V.cutting=h.length>0;for(let{a:u}of h)cs(u,ze),Jn(ze.x,ze.y,ze.z,-We.x,.5,-We.z,2,9,u.def.robot),u.def.robot&&Xt(ze.x,ze.y,ze.z,2),bt(u,560*i*(s?2:1),{mode:"slice",cut:"v",dir:We.clone(),weapon:"saw",bossCap:999});V.cutting&&(_.trauma<.3&&ft(.08),Math.random()<i*5&&Vo(1),_.hitMark=.05)}vn("saw",c,V.cutting?1:0)}else if(n==="smg"){if(t.fire&&l){V.cd=.056*o,V.rec=.6,te.smg();let c=O0(.022,27,"smg");for(let[h,u]of c)bt(h,u.dmg,{mode:u.head?"headpop":"drop",dir:u.dir,power:3.5,weapon:"smg",head:u.head});ie.scrap.spawn(yt.x+We.x*.5+Ai.x*.25,yt.y-.15,yt.z+We.z*.5+Ai.z*.25,Ai.x*3+M(-1,1),M(2,4),Ai.z*3+M(-1,1),.05,1.5,15911244),_.trauma<.15&&ft(.05)}}else if(n==="shotgun"){if(t.fire&&l){V.cd=.72*o,V.rec=1.6,te.shotgun(),ft(.4);let c=O0(.085,21,"shotgun",12);for(let[h,u]of c){let f=xe(u.dir.x*13,6,u.dir.z*13);bt(h,u.dmg,{mode:u.d<11?"gib":u.head?"headpop":"drop",dir:u.dir,power:13,knock:u.d<16?f:null,weapon:"shotgun",head:u.head,bossCap:420})}a.kvel.x-=We.x*4,a.kvel.z-=We.z*4,yh(yt,60)}}else if(n==="sling"){if(t.fire&&V.switchT===0)V.cd<=0&&(V.charging=!0,V.charge=Math.min(1,V.charge+i/(.75*o)),te.stretch(V.charge));else if(V.charging){V.charging=!1;let c=16+36*V.charge;Y0(xe().copy(yt).addScaledVector(We,.8).addScaledVector(Fs,-.1),xe().copy(We).multiplyScalar(c).addScaledVector(z0,3.5),!1),V.charge=0,V.cd=.3*o,V.rec=1,te.sling()}}else if(n==="missile"){let c=[];for(let u of _.animals){cs(u,ze).sub(yt);let f=ze.length();if(f>95||f<2)continue;let d=ze.dot(We)/f;d>.72&&c.push({a:u,dot:d})}c.sort((u,f)=>f.dot-u.dot);let h=V.locks.length;if(V.locks=c.slice(0,Math.max(1,V.missiles)).map(u=>u.a),V.missiles||(V.locks.length=0),V.locks.length>h&&te.lock(),t.firePressed&&l&&V.missiles>0){let u=V.locks.slice(),f=u.length||Math.min(2,V.missiles);for(let d=0;d<f;d++)dn(d*.045,()=>Ab(u[d]||null,d,f));V.missiles-=f,V.cd=.45,V.rec=1.4,ft(.3)}}else if(n==="flame"){let c=t.fire&&V.switchT===0;if(V.firing=c,c){let h=yt.x+We.x*.9+Ai.x*.22-Fs.x*.14,u=yt.y+We.y*.9-Fs.y*.14,f=yt.z+We.z*.9+Ai.z*.22-Fs.z*.14;for(let d=0;d<3;d++){let p=M(17,25);ie.puffs.spawn(h,u,f,We.x*p+M(-2.2,2.2),We.y*p+M(-2.2,2.2),We.z*p+M(-2.2,2.2),.2,M(1,1.8),M(.32,.5),16765503,14696986,3,1.4)}for(let d of _.animals.slice()){cs(d,ze).sub(yt);let p=ze.length();if(!(p>11+d.H*.3)&&!(p>2&&ze.dot(We)/p<.86)){if(d.boss){bt(d,280*i,{weapon:"flame",mode:"burn",bossCap:999});continue}d.heat+=i*(s?2:1),d.heat>.2&&(bt(d,999,{mode:"burn",weapon:"flame"}),te.ignite())}}for(let d of _.barrels)if(d.alive){ze.set(d.x-yt.x,.7-yt.y,d.z-yt.z);let p=ze.length();p<10&&ze.dot(We)/p>.9&&Os(d)}if(Math.random()<i*4){let d=q0(yt,We,10);d.hit&&d.hit.type==="ground"&&ie.decals.add(yt.x+We.x*d.t,yt.z+We.z*d.t,M(1,2),2762012,!0)}}vn("flame",c)}else n==="hole"&&t.firePressed&&l&&V.holeCd<=0&&(V.holeCd=7,V.rec=1.6,V.cd=.5,te.hole(),Rb(),ft(.3));n!=="missile"&&V.locks.length&&(V.locks.length=0);for(let c=ar.length-1;c>=0;c--)ar[c].upd(e)&&ar.splice(c,1);Lb(i,n)}function Lb(i,e){let t=ol[V.cur],n=bb[e],s=_.player,r={katana:.2,hammer:.55,bat:.3}[e]||.2;V.sw>0&&(V.sw+=i/r,V.sw>=1&&(V.sw=0));let o=s.onGround?Math.min(1,Math.hypot(s.vel.x,s.vel.z)/9):0,a=Math.cos(s.bobT*.5)*.014*o,l=Math.abs(Math.sin(s.bobT*.5))*.016*o,c=V.switchT>0?Math.sin(V.switchT*Math.PI):0;t.position.set(n[0]+a,n[1]-l-c*.45,n[2]+V.rec*.045),t.rotation.set(n[3]+V.rec*.09,n[4],n[5]),ls.visible=!1;let h=V.sw;if(e==="katana"||e==="bat"){if(h>0){let u=Pb(h),f=V.swDir;t.position.set(f*(.42-.84*u),n[1]+.16+Math.sin(u*Math.PI)*.05,n[2]-.05),t.rotation.set(-1.25,0,f*(-1.35+2.7*u)),h>.1&&h<.8&&(ls.visible=!0,ls.material.opacity=.85*(1-h),ls.scale.set(f*(e==="bat"?1.25:1),1,1),ls.rotation.z=(e==="katana"&&f<0?.5:.1)*f,ls.rotation.x=-1.2)}}else if(e==="hammer")if(h>0){let u;h<.3?u=h/.3*.9:h<.45?u=.9-(h-.3)/.15*2.4:u=-1.5+(h-.45)/.55*1.5,t.rotation.x=n[3]+u,t.position.y=n[1]+Math.max(0,u)*.25,t.position.z=n[2]-(u<0?-u*.12:0)}else V.pending&&V.pending.land&&(t.rotation.x=n[3]+.9,t.position.y=n[1]+.22);else if(e==="saw")V.firing&&(t.position.x+=M(-.004,.004),t.position.y+=M(-.004,.004),t.position.z-=.04,V.cutting&&(t.position.x+=M(-.008,.008),t.rotation.z=M(-.03,.03))),Ed.position.y=V.firing?M(-.003,.003):0;else if(e==="sling")rl.position.z=.02+V.charge*.24,t.rotation.x=n[3]+V.charge*.12,V.charge>.95&&(t.position.x+=M(-.003,.003));else if(e==="hole"){Ko.rotation.x+=i*6,Ko.rotation.y+=i*4;let u=V.holeCd<=0?1:.4;Ko.scale.setScalar(u)}else e==="flame"&&V.firing&&(t.position.x+=M(-.003,.003),t.position.y+=M(-.003,.003));if(V.kickT>0){let u=1-V.kickT/.3,f=Math.sin(u*Math.PI);Yr.visible=!0,Yr.position.set(.05,-.75+f*.4,-.35-f*.55),Yr.rotation.x=.5-f*.5}else Yr.visible=!1}var ci,V,We,Ai,Fs,yt,z0,ze,Gi,or,ar,sl,ol,Yr,ls,k0,H0,G0,V0,rl,Ko,Ed,U0,Kr,wi,li,bb,cs,Pb,Zo=On(()=>{oi();zi();Wr();Yo();tr();ci=[{id:"katana",name:"\u6B66\u58EB\u5200",icon:"\u{1F5E1}\uFE0F",key:"1",tip:"\u9023\u9EDE\u30FB\u81EA\u52D5\u7A81\u9032"},{id:"hammer",name:"\u5DE8\u5927\u69CC\u5B50",icon:"\u{1F528}",key:"2",tip:"\u8DF3\u8D77\u4F86\u7838\u66F4\u5927"},{id:"bat",name:"\u72FC\u7259\u68D2",icon:"\u{1F3CF}",key:"3",tip:"\u5168\u58D8\u6253"},{id:"saw",name:"\u96FB\u92F8",icon:"\u2699\uFE0F",key:"4",tip:"\u6309\u4F4F"},{id:"smg",name:"\u885D\u92D2\u69CD",icon:"\u{1F52B}",key:"5",tip:"\u6309\u4F4F\u6383\u5C04"},{id:"shotgun",name:"\u9730\u5F48\u69CD",icon:"\u{1F4A5}",key:"6",tip:"\u8CBC\u81C9\u958B"},{id:"sling",name:"\u7206\u70B8\u5F48\u5F13",icon:"\u{1F383}",key:"7",tip:"\u6309\u4F4F\u84C4\u529B"},{id:"missile",name:"\u8FFD\u8E64\u98DB\u5F48",icon:"\u{1F680}",key:"8",tip:"\u81EA\u52D5\u9396\u5B9A 8 \u767C"},{id:"flame",name:"\u706B\u7130\u5674\u5C04\u5668",icon:"\u{1F525}",key:"9",tip:"\u6309\u4F4F\u30FB\u6703\u50B3\u67D3"},{id:"hole",name:"\u9ED1\u6D1E\u7832",icon:"\u{1F573}\uFE0F",key:"0",tip:"\u5168\u5438\u9032\u53BB"}],V={cur:0,next:-1,cd:0,sw:0,swDir:1,rec:0,switchT:0,charge:0,charging:!1,missiles:8,missT:0,holeCd:0,kickT:0,kickCd:0,pending:null,locks:[],cutting:!1,firing:!1},We=new F,Ai=new F,Fs=new F,yt=new F,z0=new F(0,1,0),ze=new F,Gi=new F,or=new F,ar=[],ol=[];U0={},Kr=i=>U0[i]||(U0[i]=new Gt({color:i,flatShading:!0}));wi=(...i)=>{let e=new Ot;return i.forEach(t=>e.add(t)),e},li=Math.PI/2,bb={katana:[.34,-.34,-.5,-.55,0,-.3],hammer:[.4,-.62,-.62,-.2,0,-.3],bat:[.36,-.4,-.52,-.5,0,-.3],saw:[.24,-.26,-.42,0,0,0],smg:[.2,-.2,-.4,0,0,0],shotgun:[.2,-.21,-.42,0,0,0],sling:[.16,-.26,-.48,0,0,0],missile:[.28,-.24,-.46,0,0,0],flame:[.24,-.24,-.42,0,0,0],hole:[.24,-.23,-.44,0,0,0]};cs=(i,e)=>e.set(i.root.position.x,i.root.position.y+i.H*.5,i.root.position.z);Pb=i=>1-(1-i)*(1-i)});var Fe,Ih,wd,Ad,ll,Rd,Cd,Ye,Db,Ph=On(()=>{oi();zi();Zo();Fe=i=>document.getElementById(i),Ih=new F,wd=0,Ad=-1,ll=[],Rd="",Cd=-1,Ye={};Ye.init=i=>{Fe("weapons").innerHTML=ci.map((e,t)=>`<div class="w" data-i="${t}"><span>${e.key}</span>${e.icon}</div>`).join(""),Fe("wgrid").innerHTML=ci.map(e=>`<div><b>${e.icon}</b>${e.key}\u3000${e.name}<small>${e.tip}</small></div>`).join(""),Fe("btn-score").onclick=()=>i.start("score"),Fe("btn-free").onclick=()=>i.start("free"),Fe("btn-resume").onclick=()=>i.resume(),Fe("btn-quit").onclick=()=>i.menu(),Fe("btn-again").onclick=()=>i.start(_.lastMode||"score"),Fe("btn-menu").onclick=()=>i.menu(),Fe("btn-wail").onclick=()=>i.wail(),Fe("pgrid").innerHTML=Object.values(_.itemDefs).map(e=>`<button data-id="${e.id}"><b>${e.icon}</b>${e.name}<small>${e.tip}</small></button>`).join(""),Fe("pgrid").onclick=e=>{let t=e.target.closest("button");t&&i.pick(t.dataset.id)},Fe("btn-pclose").onclick=()=>i.pick(null),Ye.hiscore()};Ye.hiscore=()=>{let i=0;try{i=+localStorage.getItem("cozy-payback-hi")||0}catch{}return Fe("hiscore").textContent=i?`\u672C\u6A5F\u6700\u9AD8\u5206\uFF1A${i.toLocaleString()}`:"",i};Ye.wail=i=>{Fe("btn-wail").innerHTML=`\u{1F631} \u6158\u53EB\u7248\uFF1A${i?"\u958B":"\u95DC"}<small>${i?"\u5CF6\u6C11\u6703\u53EB\u5F97\u5F88\u6158":"\u53EA\u6709\u539F\u672C\u7684\u5C0F\u53EB\u8072"}</small>`,Fe("btn-wail").classList.toggle("off",!i)};Ye.loading=i=>{Fe("loadbar").firstElementChild.style.width=Math.round(i*100)+"%"};Ye.show=i=>{["loading","menu","pause","end","picker"].forEach(e=>Fe(e).classList.toggle("hidden",e!==i)),Fe("hud").classList.toggle("hidden",!(i==="hud"||i==="pause"||i==="picker"))};Ye.reset=()=>{Fe("feed").innerHTML="",Fe("announce").innerHTML="",Fe("locks").innerHTML="",ll=[],wd=0,Ad=-1,Rd="",Cd=-1,Fe("buffs").innerHTML="",Fe("wx").classList.add("hidden"),Fe("combo").classList.add("hidden"),Fe("boss").classList.add("hidden")};Ye.feed=i=>{let e=Fe("feed"),t=document.createElement("div");for(t.innerHTML=i,e.appendChild(t);e.childElementCount>6;)e.firstChild.remove();setTimeout(()=>t.classList.add("out"),3600),setTimeout(()=>t.remove(),4e3)};Ye.announce=(i,e="",t=!1)=>{let n=Fe("announce");n.innerHTML=`<div class="${t?"red":""}">${i}${e?`<small>${e}</small>`:""}</div>`};Ye.update=()=>{Fe("score").textContent=Math.floor(_.score).toLocaleString(),Fe("kills").textContent=_.kills,Fe("best").textContent=_.bestCombo;let i=Fe("timer");if(_.mode==="score"){let p=Math.max(0,Math.ceil(_.timeLeft));i.textContent=`${Math.floor(p/60)}:${String(p%60).padStart(2,"0")}`,i.classList.toggle("low",p<=15)}else{let p=Math.floor(_.elapsed);i.textContent=`\u221E ${Math.floor(p/60)}:${String(p%60).padStart(2,"0")}`,i.classList.remove("low")}let e=Fe("combo");_.combo>=2?(e.classList.remove("hidden"),_.combo!==wd&&(Fe("combo-n").innerHTML=`${_.combo}<small>\u9023\u6BBA</small>`,Fe("combo-x").textContent=`\u5206\u6578 \xD7${(1+Math.min(_.combo-1,40)*.1).toFixed(1)}`,e.classList.remove("bump"),e.offsetWidth,e.classList.add("bump")),Fe("combo-bar").firstElementChild.style.width=Math.max(0,_.comboT/3.2*100)+"%"):e.classList.add("hidden"),wd=_.combo;let t=Fe("rage"),n=_.rageOn>0;t.querySelector("i").style.width=(n?_.rageOn/10*100:_.rage*100)+"%",t.classList.toggle("ready",!n&&_.rage>=1),t.querySelector("em").textContent=n?"\u66B4\u6012\u4E2D\uFF01":_.rage>=1?"\u6309 Q \u767C\u52D5":"\u6BBA\u8D8A\u591A\u96C6\u8D8A\u5FEB",Fe("vignette").classList.toggle("rage",n);let s=Fe("ult");if(s.querySelector("i").style.width=_.ult*100+"%",s.classList.toggle("ready",_.ult>=1),s.querySelector("em").textContent=_.ult>=1?"\u6309 F \u62BD\u4E00\u62DB":_.mode==="free"?"Tab \u53EF\u4EFB\u9078":"\u6BBA\u6575\u7D2F\u7A4D",V.cur!==Ad){Ad=V.cur;let p=ci[V.cur];document.querySelectorAll("#weapons .w").forEach((x,m)=>x.classList.toggle("on",m===V.cur)),Fe("wname").innerHTML=`<b>${p.icon} ${p.name}</b><small>${p.tip}</small>`}let r=Fe("ammo"),o=ci[V.cur].id;if(o==="missile")r.classList.remove("hidden"),r.innerHTML=`\u98DB\u5F48 <b>${V.missiles}</b> / 8<div class="bar"><i style="width:${V.missiles/8*100}%"></i></div>`;else if(o==="hole"){r.classList.remove("hidden");let p=Math.max(0,1-Math.max(0,V.holeCd)/7);r.innerHTML=`${p>=1?"<b>\u9ED1\u6D1E\u5C31\u7DD2</b>":"\u9ED1\u6D1E\u5145\u80FD\u4E2D"}<div class="bar"><i style="width:${p*100}%"></i></div>`}else o==="sling"?(r.classList.remove("hidden"),r.innerHTML=`\u84C4\u529B<div class="bar"><i style="width:${V.charge*100}%"></i></div>`):r.classList.add("hidden");let a=Object.keys(_.buff),l=a.join(","),c=Fe("buffs");l!==Rd&&(Rd=l,c.innerHTML=a.map(p=>`<div><b>${_.itemDefs[p].icon} ${_.itemDefs[p].name}</b><i></i></div>`).join(""));for(let p=0;p<a.length&&p<c.children.length;p++)c.children[p].lastElementChild.style.width=Math.max(0,Math.min(1,_.buff[a[p]]/_.itemDefs[a[p]].dur))*100+"%";let h=_.wx.rain<.05?0:_.wx.storm>0?2:1;if(h!==Cd){Cd=h;let p=Fe("wx");p.classList.toggle("hidden",!h),p.textContent=h===2?"\u26C8\uFE0F \u96F7\u96E8":"\u{1F327}\uFE0F \u4E0B\u96E8"}_.hitMark>0&&(_.hitMark-=.016),Fe("crosshair").classList.toggle("hit",_.hitMark>0);let u=Fe("boss");_.boss&&!_.boss.dead?(u.classList.remove("hidden"),Fe("boss-name").textContent=`\u26A0 \u5DE8\u5927\u5316\u7684${_.boss.def.name}\uFF08${_.boss.def.role}\uFF09`,u.querySelector("i").style.width=Math.max(0,_.boss.hp/_.boss.maxHp*100)+"%"):u.classList.add("hidden");let f=Fe("locks"),d=V.locks.length;for(;ll.length<d;){let p=document.createElement("i");f.appendChild(p),ll.push(p)}for(let p=0;p<ll.length;p++){let x=ll[p];if(p>=d){x.style.display="none";continue}let m=V.locks[p];if(Ih.set(m.root.position.x,m.root.position.y+m.H*.5,m.root.position.z).project(_.camera),Ih.z>1){x.style.display="none";continue}x.style.display="",x.style.left=(Ih.x+1)/2*innerWidth+"px",x.style.top=(1-Ih.y)/2*innerHeight+"px"}};Db=[[6e4,"SSS","\u4EBA\u8CC7\u770B\u4E86\u90FD\u6015"],[42e3,"SS","\u6696\u5CF6\u5C60\u592B"],[28e3,"S","\u6E05\u7B97\u5927\u5E2B"],[18e3,"A","\u706B\u6C23\u4E0D\u5C0F"],[1e4,"B","\u6709\u5728\u767C\u6D29"],[4e3,"C","\u9084\u5728\u6696\u8EAB"],[0,"D","\u4F60\u662F\u4E0D\u662F\u592A\u5584\u826F\u4E86"]];Ye.end=i=>{let e=Db.find(l=>_.score>=l[0]);Fe("rank").textContent=e[1],Fe("rank-t").textContent=e[2],Fe("e-score").textContent=Math.floor(_.score).toLocaleString(),Fe("e-kills").textContent=_.kills,Fe("e-combo").textContent=_.bestCombo;let t="-",n=0;for(let l in i.byWeapon)i.byWeapon[l]>n&&(n=i.byWeapon[l],t=l);let s={beast:"\u602A\u7378\u722A",car:"\u8DD1\u8ECA",cannon:"\u5145\u80FD\u81C2\u7832",beam:"\u6C23\u529F\u6CE2",disc:"\u5713\u92F8\u6C23\u65AC",ice:"\u5BD2\u51B0\u528D",chain:"\u9023\u9396\u9583\u96FB",wolf:"\u91CE\u7378",robodog:"\u6A5F\u5668\u72D7",zombie:"\u55AA\u5C4D",turret:"\u7832\u5854",drone:"\u7121\u4EBA\u6A5F",speed:"\u6975\u901F",scythe:"\u942E\u5200",sword:"\u98DB\u528D",bubble:"\u6CE1\u6CE1\u7403",barrel:"\u74E6\u65AF\u6876",kick:"\u8E22\u98DB",thunder:"\u96F7\u5288",stomp:"\u5DE8\u4EBA\u8173",nuke:"\u5168\u5CF6\u8CC7\u9063\u4EE4",meteor:"\u9695\u77F3\u96E8",balloon:"\u6C26\u6C23\u5F48",pumpkin:"\u5357\u74DC\u795E"};ci.forEach(l=>s[l.id]=l.name),Fe("e-fav").textContent=s[t]||"-";let r="",o=0;for(let l in i.byVictim)i.byVictim[l]>o&&(o=i.byVictim[l],r=l);let a=i.newHigh?"\u3000\u{1F3C6} \u5237\u65B0\u672C\u6A5F\u7D00\u9304\uFF01":"";Fe("end-detail").innerHTML=`\u7206\u982D ${i.head}\u3000\xB7\u3000\u7A7A\u4E2D\u64CA\u6BBA ${i.air}\u3000\xB7\u3000\u4E00\u77F3\u591A\u9CE5 ${i.multi} \u6B21\u3000\xB7\u3000\u5DE8\u5927\u5CF6\u6C11 ${i.boss}\u3000\xB7\u3000\u96B1\u85CF\u9053\u5177 ${i.items||0}<br>${r?`\u6700\u5E38\u88AB\u6E05\u7B97\u7684\u662F <b>${r}</b>\uFF08${o} \u6B21\uFF09`:""}${a}`,Ye.show("end")}});function j0(){Qn=new Float32Array(Lh*3);for(let t=0;t<Lh;t++)Qn[t*3]=M(jn),Qn[t*3+1]=M($0),Qn[t*3+2]=M(jn);let i=new Lt;i.setAttribute("position",new wt(new Float32Array(Lh*6),3).setUsage(Is)),Wi=new Tr(i,new js({color:15135219,transparent:!0,opacity:.5,fog:!1,depthWrite:!1})),Wi.frustumCulled=!1,Wi.visible=!1,_.scene.add(Wi);let e=[];for(let t=0;t<Nh-1;t++){let n=t*2;e.push(n,n+1,n+2,n+1,n+3,n+2)}for(let t=0;t<3;t++){let n=new Lt;n.setAttribute("position",new wt(new Float32Array(Nh*6),3).setUsage(Is)),n.setIndex(e);let s=new Ue(n,new st({color:16776160,fog:!1,side:At,transparent:!0,depthWrite:!1}));s.frustumCulled=!1,s.visible=!1,_.scene.add(s),ul.push({m:s,t:0})}J0=document.getElementById("flash")}function Q0(){hi.rain=0,hi.storm=0,Dh=0,Ri=0,hl=5,$o=null,Wi&&(Wi.visible=!1,ul.forEach(i=>{i.t=0,i.m.visible=!1}),ng(0)),vn("rain",!1)}function eg(i,e){$o=i===null?null:[i,e||0],$o&&(hi.rain=i)}function tg(i){Ri=Math.max(Ri,i)}function ng(i){let e=_.env,t=hi.rain,n=t*.6+hi.storm*.15,s=n/.75;Ri=Math.max(0,Ri-i*4.5);let r=1-n*.72+Ri*.5;e.sky.color.setRGB(r,r+n*.03,r+n*.08),_.scene.fog.color.copy(Nb).lerp(Fb,s).addScalar(Ri*.2),_.scene.fog.near=Ps(110,40,t),_.scene.fog.far=Ps(330,160,t),e.hemi.intensity=1.5-n*.8+Ri*1.6,e.sun.intensity=Math.max(.2,1.9-n*1.9),e.sea.color.copy(Ub).lerp(Ob,s);for(let a of _.clouds)a.material.color.copy(Bb).lerp(zb,s),a.scale.set(1+t*1.2,.5,1+t*1.2);let o=Ri>.02?Math.min(.42,Ri*.33).toFixed(2):"0";o!==Z0&&(Z0=o,J0.style.opacity=o)}function Bs(i,e,t={}){let n=xe(i,0,e),s=_.camera,r=s.position.distanceTo(n),o=ul.find(x=>x.t<=0)||ul[0];o.t=.2,o.m.visible=!0;let a=i+M(-10,10),l=e+M(-10,10),c=ai(r*.014,.18,1.3),h=o.m.geometry.attributes.position.array;cl.setFromMatrixColumn(s.matrixWorld,0);for(let x=0;x<Nh;x++){let m=x/(Nh-1),g=Math.sin(Math.PI*m)*3.2,v=c*(1.2-.6*m),w=Ps(a,i,m)+M(-g,g),S=Ps(85,0,m),A=Ps(l,e,m)+M(-g,g),R=x*6;h[R]=w-cl.x*v,h[R+1]=S,h[R+2]=A-cl.z*v,h[R+3]=w+cl.x*v,h[R+4]=S,h[R+5]=A+cl.z*v}o.m.geometry.attributes.position.needsUpdate=!0,Ri=Math.max(Ri,t.small?.5:1.3),on(n,.5,7,.35,16775106),Xt(i,.4,e,14),ie.decals.add(i,e,M(1.3,1.9),2367770,!0),yh(xe(i,2,e),320),Go(n,t.small?.3:.6,90),te.zap(),te.thunder(r<45);let u=0,f=new Set;for(let x of _.animals.slice()){let m=x.root.position,g=x.boss?x.H*.4:2.6;(m.x-i)**2+(m.z-e)**2>g*g||(f.add(x),bt(x,x.boss?380:999,{mode:"zap",weapon:"thunder",bossCap:380})&&u++)}let d=xe(i,1,e),p=t.chain===void 0?5:t.chain;for(let x=0;x<p;x++){let m=null,g=49;for(let A of _.animals){if(f.has(A)||A.boss||A.state==="drop")continue;let R=A.root.position,y=(R.x-d.x)**2+(R.z-d.z)**2;y<g&&(g=y,m=A)}if(!m)break;f.add(m);let v=d.clone(),w=m.root.position.clone();w.y+=m.H*.5;let S=m;dn(.07*(x+1),()=>{S.dead||(ki(v,w,16775106,.12),Xt(w.x,w.y,w.z,6),te.zap(),bt(S,999,{mode:"zap",weapon:"thunder",style:"chain"})&&u++)}),d=w}for(let x of _.barrels)x.alive&&(x.x-i)**2+(x.z-e)**2<9&&Os(x);dn(.6,()=>{u>=3&&_.onMulti&&_.onMulti(u,n,"\u9023\u9396\u96FB\u64CA")})}function kb(){let i=_.player.pos,e=Math.random();if(e<.2){let r=_.barrels.filter(o=>o.alive&&Math.hypot(o.x-i.x,o.z-i.z)<50);if(r.length){let o=Ce(r);Bs(o.x,o.z);return}}let t=_.animals.filter(r=>r.dP<55&&r.state!=="drop");if(e<.85&&t.length){let r=Ce(t);Bs(r.root.position.x,r.root.position.z);return}let n=M(6.28),s=M(12,45);Bs(i.x+Math.cos(n)*s,i.z+Math.sin(n)*s)}function Id(i,e,t=!1){if(!t){let d=_.mode==="score"?_.elapsed:_.elapsed%300,p=d>60?Math.min(1,(d-60)/25):0,x=d>120?Math.min(1,(d-120)/8):0;_.mode==="free"&&d>240&&(p=Math.max(0,1-(d-240)/30),p<.6&&(x=0)),$o&&(p=$o[0],x=$o[1]),hi.rain+=(p-hi.rain)*Math.min(1,i*.9),hi.storm=x;let m=x>0?2:p>0?1:0;m!==Dh&&(m===1&&Dh===0?Ye.announce("\u8B8A\u5929\u4E86\u2026","\u5730\u677F\u6FD5\u6ED1\uFF0C\u5CF6\u6C11\u6703\u81EA\u5DF1\u8DCC\u5012"):m===2?(Ye.announce("\u96F7\u96E8\u4EA4\u52A0\uFF01","\u88AB\u96F7\u5288\u5230\u7684\u90FD\u7B97\u4F60\u7684",!0),hl=1.5):m===0&&Ye.announce("\u653E\u6674\u4E86","\u4E0B\u4E00\u5834\u96E8\u5F88\u5FEB\u5C31\u4F86"),Dh=m),m===2&&(hl-=e,hl<=0&&(hl=M(3.5,7),kb())),vn("rain",hi.rain>.03,hi.rain)}ng(i);for(let d of ul)d.t>0&&(d.t-=i,d.m.material.opacity=Math.random()<.3?.35:1,d.t<=0&&(d.m.visible=!1));let n=Math.floor(Lh*hi.rain);if(Wi.visible=n>0,!n)return;let s=_.camera.position,r=Wi.geometry.attributes.position.array,o=Math.max(0,s.y-9),a=36,l=5,c=2,h=.036;for(let d=0;d<n;d++){let p=d*3,x=d*6;Qn[p+1]-=a*e,Qn[p]+=l*e,Qn[p+2]+=c*e,Qn[p+1]<0&&(Qn[p+1]+=$0,Qn[p]=M(jn),Qn[p+2]=M(jn));let m=s.x+((Qn[p]-s.x+jn/2)%jn+jn)%jn-jn/2,g=s.z+((Qn[p+2]-s.z+jn/2)%jn+jn)%jn-jn/2,v=o+Qn[p+1];r[x]=m,r[x+1]=v,r[x+2]=g,r[x+3]=m-l*h,r[x+4]=v+a*h,r[x+5]=g-c*h}Wi.geometry.setDrawRange(0,n*2),Wi.geometry.attributes.position.needsUpdate=!0,Wi.material.opacity=.3+.3*hi.rain;let u=_.player.pos,f=hi.rain*100*e;for(;f>0;){if(f>=1||Math.random()<f){let d=M(6.28),p=Math.sqrt(Math.random())*20;ie.puffs.spawn(u.x+Math.cos(d)*p,.06,u.z+Math.sin(d)*p,0,.5,0,.05,.22,.16,16055034,12900571,0,1)}f-=1}}var Lh,jn,$0,Nh,hi,Nb,Fb,Ub,Ob,Bb,zb,cl,Wi,Qn,J0,Ri,hl,Dh,$o,Z0,ul,Fh=On(()=>{oi();zi();Wr();tr();Yo();Zo();Ph();Lh=1500,jn=46,$0=26,Nh=14,hi=_.wx,Nb=new Ee(13098448),Fb=new Ee(6715774),Ub=new Ee(8372687),Ob=new Ee(5012617),Bb=new Ee(16579056),zb=new Ee(7108733),cl=new F,Ri=0,hl=5,Dh=0,$o=null,Z0="0",ul=[]});function He(i,e,t=0,n=0,s=0,r=0,o=0,a=0){let l=new Ue(i,e);return l.position.set(t,n,s),l.rotation.set(r,o,a),l}function $r(i,e,t,n){for(let s of _.animals.slice()){if(Jr(s))continue;let r=s.root.position,o=t+(s.boss?s.H*.35:0);(r.x-i)**2+(r.z-e)**2<o*o&&n(s)}}function cr(i,e,t,n,s){let r=null,o=t*t;for(let a of _.animals){if(Jr(a)||n&&n.has(a))continue;let l=a.root.position,c=((l.x-i)**2+(l.z-e)**2)*(s?M(.5,1.5):1);c<o&&(o=c,r=a)}return r}function Hb(i,e){let t=_.camera.position,n=null,s=e;for(let r of _.animals){hs(r,Rt).sub(t);let o=Rt.length();if(o>i)continue;let a=Rt.dot(Ut)/o;a>s&&(s=a,n=r)}return n}function Sn(i,e,t,n,s={}){let r=s.boss||200;if(i.boss){if(_.t-(i.pcd||0)<.3)return!1;i.pcd=_.t}return bt(i,i.boss?r:999,Object.assign({mode:t,dir:n||xe(0,0,1),weapon:e,bossCap:r},s))}function gg(){Bh=rs([Et(.09,.02,1.3).translate(0,0,.35),Et(.34,.05,.07).translate(0,0,-.3),Et(.05,.05,.3).translate(0,0,-.45)]),zh=Wt(14543084,{emissive:3822944}),ug=rs([Et(1.9,.07,.07).translate(2.5,0,0),Et(.14,.04,1.2).translate(3.4,0,.5),Et(.1,.04,.5).translate(3.32,0,1.2)]),fg=new Kt(1,16,12),dg=Et(1,1,1),pg=Wt(12577535,{transparent:!0,opacity:.45,flatShading:!1}),Ld=ks(1,1,.05,24),fl=new Kt(1,12,8),mg=new Ui(1.6,.13,6,14,Math.PI),lr=new Ot,lr.visible=!1,_.camera.add(lr);let i=s=>{let r=qn(He(Et(.2,.2,.7),Wt(4155948),0,0,0));for(let o=-1;o<=1;o++)r.add(He(new Fi(.035,.24,5),Wt(16249308),o*.07,0,-.45,-Math.PI/2));return r.position.set(s*.5,-.5,-.75),r.scale.setScalar(.8),r};pn.beast=qn(i(-1),i(1)),pn.car=qn(He(Et(1.9,.1,1.5),Wt(13125690),0,-.8,-1.55,.05),He(Et(.3,.02,1.5),Wt(16249308),0,-.74,-1.55,.05),He(Et(1.9,.28,.3),Wt(3025439),0,-.74,-.74),He(new Ui(.2,.035,6,14),Wt(3025439),0,-.52,-.62,-.5)),pn.cannon=qn(He(ks(.12,.14,.7,10),Wt(4171701),.34,-.3,-.75,Math.PI/2),He(new Ui(.13,.03,6,12),Wt(15911244),.34,-.3,-1.08),He(fl,ui(12579839),.34,-.3,-1.15));let e=Wt(15712430),t=He(ks(.4,.4,1,12).rotateX(Math.PI/2).translate(0,0,-.5),ui(16777215,{fog:!1}),0,-.95,-2.5),n=He(ks(.8,.8,1,14).rotateX(Math.PI/2).translate(0,0,-.5),ui(8378623,{fog:!1,transparent:!0,opacity:.55,depthWrite:!1}),0,-.95,-2.5);pn.beam=qn(He(Et(.16,.2,.3),e,-.15,-.4,-.6),He(Et(.16,.2,.3),e,.15,-.4,-.6),He(fl,ui(12579839),0,-.36,-.9),t,n),pn.disc=qn(He(Et(.14,.34,.14),e,.42,-.12,-.6),He(ks(.3,.3,.02,20),ui(16770442),.42,.14,-.6)),pn.ice=qn(He(Et(.06,1,.14),Wt(12577535,{emissive:2780300}),0,.5,0),He(Et(.3,.06,.1),Wt(4171701),0,0,0),He(Et(.06,.24,.06),Wt(3025439),0,-.14,0)),pn.chain=qn(He(Et(.14,.16,.34),e,.36,-.34,-.62),He(fl,ui(16775106),.36,-.3,-.86)),pn.chain.children[1].scale.setScalar(.07);for(let s in pn)pn[s].visible=!1,lr.add(pn[s])}function xg(i){_.override=i,lr.visible=!!i;for(let e in pn)pn[e].visible=e===i;_.camera.children.forEach(e=>{e!==lr&&(e.visible=!i)}),pn.beam.children[3].visible=pn.beam.children[4].visible=!1,Fn=0,jo=0,Xn=.25,Xi=0,Gr()}function _g(){if(mn.forEach(i=>i.end()),mn.length=0,Oh=0,_.override=null,_.spMul=1,_.fovAdd=0,lr){lr.visible=!1;for(let i in pn)pn[i].visible=!1}}function Gb(i,e,t,n){let s=Wt(i),r=Wt(e),o=qn(He(Et(.42,.45,1.1),s,0,.62,0),He(Et(.36,.36,.42),s,0,.84,.68),He(Et(.2,.18,.26),r,0,.76,.95),He(Et(.08,.08,.45),r,0,.8,-.72,.6),He(Et(.06,.06,.04),ui(15225407),-.1,.9,.9),He(Et(.06,.06,.04),ui(15225407),.1,.9,.9));n?o.add(He(Et(.2,.16,.44),r,0,.95,-.1)):(o.add(He(new Fi(.07,.2,4),r,-.12,1.1,.6)),o.add(He(new Fi(.07,.2,4),r,.12,1.1,.6)));let a=[];for(let l=0;l<4;l++){let c=qn(He(Et(.12,.5,.12),r,0,-.25,0));c.position.set(l%2?.15:-.15,.45,l<2?.4:-.4),o.add(c),a.push(c)}return o.userData.legs=a,o.scale.setScalar(t),o}function sg(i,e,t,n){let s=i==="robodog",r=Gb(s?15911244:4868682,s?7038037:3025439,s?1.3:1.1,s),o=s?24:17;r.position.set(e,0,t),_.scene.add(r),Pn(e,0,t,5,.8);let a=0,l=0,c=M(.5,1.5),h=null;mn.push({upd(u,f){a+=u;let d=r.position;if(a>n)return Pn(d.x,0,d.z,6,.9),!0;l-=f,h&&h.dead&&(h=null),h||(h=cr(d.x,d.z,90,null,!0));let p=_.player.pos,x=h?h.root.position.x:p.x+2,m=h?h.root.position.z:p.z+2,g=x-d.x,v=m-d.z,w=Math.hypot(g,v)||1;if(w>(h?1.3+(h.boss?h.H*.3:0):3))d.x+=g/w*o*f,d.z+=v/w*o*f,r.rotation.y=Math.atan2(g,v),r.userData.legs.forEach((S,A)=>S.rotation.x=Math.sin(a*24+(A%3?Math.PI:0))*.9),d.y=Math.abs(Math.sin(a*12))*.15;else if(h&&l<=0){l=.3;let S=h;S.boss||(h=null),Sn(S,i,s?"gib":Ce(["headpop","gib","drop"]),xe(g/w,.3,v/w),{boss:140,power:5})}if(s&&(c-=f,c<=0)){c=1.5;let S=cr(d.x,d.z,40,h?new Set([h]):null,!0);if(S&&S.dP>6){let A=hs(S);ki(xe(d.x,1.3,d.z),A,16747100,.1,.12),te.missile(),Vi(xe(A.x,.6,A.z),3.2,{weapon:"robodog",loud:.5})}}return!1},end(){_.scene.remove(r)}})}function yg(i,e,t){let n=D0(i,8824939);n.root.position.set(e,-n.H,t),_.scene.add(n.root),Pn(e,0,t,5,.7),Oh++;let s=M(6),r=0,o=null;mn.push({upd(a,l){s+=l,n.mixer.update(l*.9);let c=n.root.position;if(!(_.buff.zombie>0)){for(let p=0;p<8;p++)ie.puffs.spawn(c.x,M(.2,n.H),c.z,M(-2,2),M(0,3),M(-2,2),.3,M(.6,1.1),M(.4,.8),8824939,3025439,0,2);return!0}if(c.y<0)return c.y=Math.min(0,c.y+n.H/.8*l),!1;if(n.root.rotation.z=Math.sin(s*6)*.12,o&&o.dead&&(o=null),o||(o=cr(c.x,c.z,90,null,!0)),!o)return!1;let h=o.root.position,u=h.x-c.x,f=h.z-c.z,d=Math.hypot(u,f)||1;if(d>1.2+(o.boss?o.H*.3:0))c.x+=u/d*11.5*l,c.z+=f/d*11.5*l,n.root.rotation.y=Math.atan2(u,f);else if(r-=l,r<=0){r=.5;let p=o,x=p.key,m=h.x,g=h.z,v=p.boss;o=null,Sn(p,"zombie","headpop",xe(u/d,0,f/d),{boss:150})&&!v&&Oh<18&&dn(1.2,()=>{_.buff.zombie>1.5&&yg(x,m,g)})}return!1},end(){Oh--,N0(n)}})}function rg(i,e,t){let n=qn(He(Et(.5,.4,.6),Wt(2966305)),He(ks(.07,.07,.8,6),Wt(3025439),.13,0,.6,Math.PI/2),He(ks(.07,.07,.8,6),Wt(3025439),-.13,0,.6,Math.PI/2));n.position.y=.85;let s=qn(He(ks(.3,.5,.6,8),Wt(7038037),0,.3,0),n);s.position.set(i,0,e),_.scene.add(s),Pn(i,0,e,5,.8),te.clank();let r=0,o=0,a=0;mn.push({upd(l,c){if(r+=l,r>t)return Pn(i,0,e,6,.9),!0;o-=c;let h=cr(i,e,40);if(!h)return!1;let u=hs(h);if(n.rotation.y=Math.atan2(u.x-i,u.z-e),o<=0){o=.09;let f=xe(i,.85,e),d=u.clone().sub(f).normalize();f.addScaledVector(d,.9),ki(f,u,16770442,.04),a++%2===0&&te.smg(),bt(h,42,{mode:Math.random()<.3?"headpop":"drop",dir:d,power:4,weapon:"turret",bossCap:42})}return!1},end(){_.scene.remove(s)}})}function Vb(i,e){let t=qn(He(Et(.6,.15,.6),Wt(3025439)),He(Et(.12,.08,.12),ui(15225407),0,-.1,.2));for(let r=0;r<4;r++)t.add(He(ks(.22,.22,.02,10),Wt(15260085),r%2?.36:-.36,.1,r<2?.36:-.36));_.scene.add(t);let n=0,s=.4+i*.3;mn.push({upd(r,o){if(n+=r,n>e)return Xt(t.position.x,t.position.y,t.position.z,8),!0;let a=_.player.pos,l=_.t*1.2+i*2.094;if(t.position.set(a.x+Math.cos(l)*5,a.y+6.5+Math.sin(_.t*2+i)*.4,a.z+Math.sin(l)*5),t.rotation.y+=r*3,s-=o,s<=0){s=.85;let c=_.animals.filter(h=>h.dP<45&&h.dP>5&&!Jr(h));if(c.length){let h=hs(Ce(c));ki(t.position,h,15225407,.08,.12),Vi(xe(h.x,.6,h.z),2.8,{weapon:"drone",loud:.45})}}return!1},end(){_.scene.remove(t)}})}function Wb(){let i=Wt(14543084,{emissive:3162698}),e=qn();for(let t=0;t<3;t++)e.add(He(ug,i,0,0,0,0,t*2.094,0));_.scene.add(e),mn.push({upd(t,n){if(!(_.buff.scythe>0))return!0;let s=_.player.pos;return e.position.set(s.x,s.y+1,s.z),e.rotation.y-=n*9,$r(s.x,s.z,4.2,r=>{let o=r.root.position;o.y-s.y>3.5||Sn(r,"scythe","slice",xe(o.z-s.z,0,s.x-o.x).normalize(),{cut:"h",boss:220})}),!1},end(){_.scene.remove(e),i.dispose()}})}function Xb(i){let e=He(Bh,zh);e.position.copy(_.player.pos).setY(3),_.scene.add(e);let t=null;mn.push({upd(n,s){let r=_.player,o=e.position;if(!(_.buff.swords>0))return Xt(o.x,o.y,o.z,5),!0;if(t&&t.dead&&(t=null),t||(t=cr(r.pos.x,r.pos.z,55,null,!0),t&&_.t-(t.swordT||-9)<.6?t=null:t&&(t.swordT=_.t)),t)hs(t,Zr);else{let c=Math.sin(r.yaw),h=Math.cos(r.yaw),u=(i-2.5)*.6;Zr.set(r.pos.x+c*2+h*u,r.pos.y+2.6+i%2*.5,r.pos.z+h*2-c*u)}Rt.copy(Zr).sub(o);let a=Rt.length(),l=t?55:Math.min(40,a*6);if(a>.01&&(o.addScaledVector(Rt,Math.min(1,l*s/a)),t||a>.6?e.lookAt(Zr):e.rotation.set(-Math.PI/2,0,0)),t&&a<1.2+(t.boss?t.H*.3:0)){let c=t;t=null,Sn(c,"sword","slice",Rt.normalize().clone(),{cut:Ce(["v","d"]),boss:200})}return!1},end(){_.scene.remove(e)}})}function qb(){let i=_.player,e=i.pos.clone(),t=_.animals.filter(l=>l.dP<70&&!Jr(l)).sort((l,c)=>l.dP-c.dP),n=54;te.rise();for(let l=0;l<n;l++){let c=M(6.28),h=M(3,20),u=He(Bh,zh),f=t.length?t[l%t.length]:null,d=xe(e.x+Math.cos(c)*h,M(13,22),e.z+Math.sin(c)*h),p=xe(d.x+M(-6,6),0,d.z+M(-6,6));u.position.copy(d),u.scale.setScalar(.01),u.lookAt(d.x,0,d.z),_.scene.add(u);let x=-l*.012,m=1+M(0,.5);mn.push({upd(g,v){if(x+=v,x<0)return!1;let w=f&&!f.dead,S=w?hs(f,Zr):Zr.copy(p);if(x<m)return u.scale.setScalar(Math.min(1.6,x*6)),u.position.y=d.y+Math.sin(x*9+l)*.15,u.lookAt(S),!1;Rt.copy(S).sub(u.position);let A=Rt.length();return u.lookAt(S),A<1.4||u.position.y<.3?(w?Sn(f,"sword","slice",Rt.normalize().clone(),{cut:"v",boss:120}):Xt(u.position.x,.2,u.position.z,3),!0):(u.position.addScaledVector(Rt,Math.min(1,85*v/A)),!1)},end(){_.scene.remove(u)}})}let s=xe(e.x-Math.sin(i.yaw)*14,0,e.z-Math.cos(i.yaw)*14),r=He(Bh,zh);r.scale.setScalar(16),r.position.set(s.x,70,s.z),r.rotation.x=Math.PI/2,r.visible=!1,_.scene.add(r);let o=0,a=!1;mn.push({upd(l,c){return o+=c,o<1.9?!1:(r.visible=!0,a?o>11.5:(r.position.y-=130*c,r.position.y<=9&&(r.position.y=9,a=!0,o=10,Vi(s.clone().setY(.6),13,{weapon:"sword",loud:1.3}),on(s,1,30,.7,14543084),ft(1)),!1))},end(){_.scene.remove(r)}})}function Yb(i){let t=new Gt({color:[8372687,15712430,15911244][i%3],transparent:!0,opacity:.6}),n=He(fg,t),s=_.player.yaw+(i-1)*.6,r=xe(-Math.sin(s)*21,9,-Math.cos(s)*21),o=_.player.pos;n.position.set(o.x+r.x*.15,3,o.z+r.z*.15),n.scale.setScalar(2.2),_.scene.add(n),mn.push({upd(a,l){let c=n.position;if(!(_.buff.bubble>0)){for(let d=0;d<10;d++)ie.puffs.spawn(c.x,c.y,c.z,M(-5,5),M(-2,5),M(-5,5),.4,1,M(.3,.6),16055034,t.color.getHex(),0,2);return te.pop(),!0}r.y-=30*l;let h=cr(c.x,c.z,45);if(h){let d=h.root.position,p=d.x-c.x,x=d.z-c.z,m=Math.hypot(p,x)||1;r.x+=p/m*26*l,r.z+=x/m*26*l}let u=Math.hypot(r.x,r.z)||1;r.x*=21/u,r.z*=21/u,c.addScaledVector(r,l),c.y<2.2&&(c.y=2.2,r.y=Math.max(11,-r.y*.9),te.boing(),n.scale.set(2.2*1.2,2.2*.75,2.2*1.2)),n.scale.x+=(2.2-n.scale.x)*Math.min(1,a*8),n.scale.y+=(2.2-n.scale.y)*Math.min(1,a*8),n.scale.z=n.scale.x;let f=Math.hypot(c.x,c.z);if(f>xt-3){let d=c.x/f,p=c.z/f,x=r.x*d+r.z*p;x>0&&(r.x-=2*x*d,r.z-=2*x*p)}for(let d of _.obstacles){if(d.r<2||c.y>d.h+2.2)continue;let p=c.x-d.x,x=c.z-d.z,m=Math.hypot(p,x);if(m<d.r+2.2&&m>.01){let g=(r.x*p+r.z*x)/m;g<0&&(r.x-=2*g*p/m,r.z-=2*g*x/m)}}return n.rotation.x+=l*4,$r(c.x,c.z,2.2+.5,d=>{Math.abs(d.root.position.y+d.H*.5-c.y)<2.2+d.H*.6&&Sn(d,"bubble","flat",null,{boss:220})}),!1},end(){_.scene.remove(n),t.dispose()}})}function og(i){if(i.dead||i.ice>0||Jr(i))return;if(i.boss){Sn(i,"ice","gib",null,{boss:180});return}i.ice=M(4,6),i.state="frozen",i.hole=null,i.balloon=null,i.tilt.scale.setScalar(1),i.mixer.timeScale=0,i.mat.color.set(10475760),i.mat.transparent=!1,i.mat.opacity=1;let e=He(dg,pg,0,i.H*.55,0);e.scale.set(i.H*.85,i.H*1.15,i.H*.85),i.root.add(e),te.ice()}function vg(i){let e=_.player,t=e.pos,n=Math.sin(e.yaw),s=Math.cos(e.yaw);if(ig.includes(i)){for(let r of ig)r!==i&&delete _.buff[r];xg(i),i==="beast"?(te.wail("roar",.4),ft(.5),on(t,.5,8,.4,8502601)):i==="car"?te.honk():te.rise();return}if(i==="wolves")for(let r=0;r<5;r++){let o=M(6.28);sg("wolf",t.x+Math.cos(o)*3,t.z+Math.sin(o)*3,14)}else if(i==="robodog")sg("robodog",t.x-n*2.5,t.z-s*2.5,18);else if(i==="zombie"){for(let r=0;r<8;r++){let o=M(6.28),a=M(5,18);yg(Md(),t.x+Math.cos(o)*a,t.z+Math.sin(o)*a)}te.wail("gurgle",.5)}else if(i==="turret")rg(t.x-n*2.5+s*2,t.z-s*2.5-n*2,18),rg(t.x-n*2.5-s*2,t.z-s*2.5+n*2,18);else if(i==="drone")for(let r=0;r<3;r++)Vb(r,16);else if(i==="thunder")_.animals.filter(r=>r.dP<60&&!Jr(r)).sort((r,o)=>r.dP-o.dP).slice(0,14).forEach((r,o)=>dn(o*.11,()=>{r.dead||Bs(r.root.position.x,r.root.position.z,{small:o>0,chain:2})}));else if(i==="scythe")Wb();else if(i==="swords")for(let r=0;r<6;r++)Xb(r);else if(i==="myriad")qb();else if(i==="bubble")for(let r=0;r<3;r++)Yb(r);else i==="speed"&&te.whoosh()}function Mg(i){_.override===i&&xg(null)}function Kb(i,e,t){let n=_.input,s=_.player,r=s.pos,o=_.camera,a=o.position,l=pn[i];if(Xn-=e,Xi=Math.max(0,Xi-e*5),i==="beast"){if(_.spMul=1.35,n.fire&&Xn<=0){Xn=.3,Xi=1,Jo=-Jo,te.swing(!0);let c=0;for(let h of _.animals.slice()){if(Jr(h))continue;let u=h.root.position;Rt.set(u.x-a.x,0,u.z-a.z);let f=Rt.length()-(h.boss?h.H*.35:0);f>6.5||u.y>6||(Rt.normalize(),!(Rt.x*Ut.x+Rt.z*Ut.z<.25&&f>1.5)&&Sn(h,"beast",Ce(["slice","launch","gib"]),xe(Rt.x,.25,Rt.z).normalize(),{boss:320,cut:"h"})&&c++)}c&&(ft(.25),_.hitMark=.1,Math.random()<.3&&te.wail("roar",.4)),c>=3&&_.onMulti&&_.onMulti(c,r,`\u4E00\u722A ${c} \u96BB`)}!hg&&s.onGround&&cg<-9&&(on(r,.5,8,.4),ft(.5),te.slam(),Pn(r.x,0,r.z,8,1.2),$r(r.x,r.z,6,c=>{c.root.position.y<3&&Sn(c,"beast","flat",null,{boss:300})})),l.children[0].rotation.x=Jo<0?Xi*1:0,l.children[1].rotation.x=Jo>0?Xi*1:0,l.children[0].position.z=-.75-(Jo<0?Xi*.3:0),l.children[1].position.z=-.75-(Jo>0?Xi*.3:0)}else if(i==="car"){if(_.spMul=3.4,_.fovAdd=12,vn("saw",!0,.25+zs/80),zs>8){let c=s.vel.x/zs,h=s.vel.z/zs;$r(r.x+c*1.2,r.z+h*1.2,2.5,u=>{u.root.position.y<3&&Sn(u,"car","launch",xe(c,.35,h).normalize(),{boss:350})&&ft(.2)}),Math.random()<e*24&&ie.puffs.spawn(r.x-c*1.5+M(-.8,.8),.2,r.z-h*1.5+M(-.8,.8),0,1,0,.4,1.1,.5,16249308,14539473,.5,2)}n.firePressed&&te.honk(),l.position.y=Math.sin(_.t*31)*.004*Math.min(1,zs/20)}else if(i==="cannon"){let c=l.children[2];if(n.fire)Fn=Math.min(1,Fn+e/1.1),Fn>.15&&te.stretch(Fn);else if(lg&&Xn<=0){let h=Fn,u=.25+h*1.1,f=h>.35,d=Ut.clone(),p=a.clone().addScaledVector(Ut,1).addScaledVector(Pd,.3);p.y-=.25,Fn=0,Xn=.14,te.cannon(h),f&&ft(.2+h*.3);let x=He(fl,ui(f?9431551:12579839));x.scale.setScalar(u),x.position.copy(p),_.scene.add(x);let m=0;mn.push({upd(g,v){let w=90*v;p.addScaledVector(d,w),x.position.copy(p),m+=w;let S=m>85||p.y<u*.6;Math.random()<.6&&ie.puffs.spawn(p.x,p.y,p.z,0,0,0,u*.8,u*.3,.25,12579839,4171701,0,1);for(let A of _.obstacles)p.y<A.h&&(p.x-A.x)**2+(p.z-A.z)**2<(A.r+u*.5)**2&&(S=!0);for(let A of _.animals.slice())if(!(hs(A,Zr).distanceTo(p)>u+A.H*.45+(A.boss?A.H*.2:0)))if(f)Sn(A,"cannon","gib",d.clone(),{boss:350}),A.boss&&(S=!0);else{Sn(A,"cannon",Math.random()<.4?"headpop":"drop",d.clone(),{power:7,boss:120}),S=!0;break}return S&&(f?Vi(p.clone().setY(Math.max(.6,p.y)),3+h*5.5,{weapon:"cannon"}):Xt(p.x,p.y,p.z,6)),S},end(){_.scene.remove(x),x.material.dispose()}})}else n.fire||(Fn=0);c.scale.setScalar(.04+Fn*.3)}else if(i==="beam"){let c=l.children[2],h=l.children[3],u=l.children[4];if(jo>0){jo-=e,Uh-=t;let f=90,d=a.x+Ut.x,p=a.y-.35+Ut.y,x=a.z+Ut.z;if(Ut.y<-.02){let g=-(p-.4)/Ut.y;g<f&&(f=Math.max(2,g),Uh<=0&&(Uh=.18,Vi(xe(d+Ut.x*g,.6,x+Ut.z*g),4.5,{weapon:"beam",loud:.6})))}let m=1+Math.sin(_.t*60)*.12;h.visible=u.visible=!0,h.scale.set(m,m,f),u.scale.set(m,m,f);for(let g of _.animals.slice()){hs(g,Rt),Rt.x-=d,Rt.y-=p,Rt.z-=x;let v=Rt.dot(Ut);if(v<0||v>f+2)continue;let w=2.2+(g.boss?g.H*.3:0);Rt.lengthSq()-v*v<w*w&&Sn(g,"beam","gib",Ut.clone(),{boss:500})}_.trauma<.4&&ft(.06),s.kvel.x-=Ut.x*20*e,s.kvel.z-=Ut.z*20*e,_.fovAdd=8,jo<=0&&(h.visible=u.visible=!1,Xn=.6)}else n.fire&&Xn<=0?(Fn+=e/.7,te.stretch(Fn),Fn>=1&&(Fn=0,jo=2.6,Uh=0,te.beam(),ft(.4))):Fn=Math.max(0,Fn-e*2);c.scale.setScalar(jo>0?.14:.03+Fn*.2)}else if(i==="disc"){if(l.children[1].rotation.y+=e*30,l.children[1].visible=Xn<.2,n.fire&&Xn<=0){Xn=.42,te.swing(),te.slice();let c=xe(Ut.x,ai(Ut.y,-.12,.3),Ut.z).normalize(),h=a.clone().addScaledVector(c,1.6);h.y=Math.max(.9,h.y-.3);let u=qn(He(Ld,ui(16770442,{fog:!1})),He(Ld,ui(16777215,{fog:!1}),0,.01,0));u.children[0].scale.set(1.4,1,1.4),u.children[1].scale.set(.8,1,.8),u.position.copy(h),_.scene.add(u);let f=0;mn.push({upd(d,p){let x=40*p;return h.addScaledVector(c,x),f+=x,h.y<.6&&(h.y=.6),u.position.copy(h),u.rotation.y+=p*30,Math.random()<.5&&Xt(h.x,h.y,h.z,1),$r(h.x,h.z,1.9,m=>{Math.abs(m.root.position.y+m.H*.5-h.y)<1.6+m.H*.4&&Sn(m,"disc","slice",c.clone(),{cut:"h",boss:380})}),f>75},end(){_.scene.remove(u)}})}}else if(i==="ice"){if(l.position.set(.4,-.55,-.7),l.rotation.set(-.35-Xi*1.3,0,-.3+Xi*.5),n.fire&&Xn<=0){Xn=.4,Xi=1,te.swing(),te.ice();for(let d of _.animals.slice())hs(d,Rt).sub(a),!(Rt.length()-(d.boss?d.H*.35:0)>4.8)&&(Rt.dot(Ut)/(Rt.length()||1)<.3||(d.ice>0?Sn(d,"ice","ice",Ut.clone()):og(d)));let c=xe(Ut.x,0,Ut.z).normalize(),h=xe(a.x+c.x*2,1.1,a.z+c.z*2),u=He(mg,ui(12577535,{fog:!1,side:At}));u.position.copy(h),u.rotation.set(-Math.PI/2,0,Math.atan2(c.x,c.z)+Math.PI),_.scene.add(u);let f=0;mn.push({upd(d,p){let x=34*p;return h.addScaledVector(c,x),f+=x,u.position.copy(h),Math.random()<.7&&ie.puffs.spawn(h.x+M(-1.5,1.5),M(.2,1.6),h.z+M(-1.5,1.5),0,.5,0,.2,.5,.35,16055034,12577535,0,2),$r(h.x,h.z,2.7,m=>{m.root.position.y<4.5&&og(m)}),f>34},end(){_.scene.remove(u),u.material.dispose()}})}}else if(i==="chain"&&(l.children[1].scale.setScalar(.06+Math.random()*.04),n.fire&&Xn<=0)){Xn=.24,te.zap();let c=a.clone().addScaledVector(Ut,.9).addScaledVector(Pd,.34);c.y-=.3;let h=Hb(45,.9)||cr(r.x,r.z,12),u=new Set,f=0,d=0;for(h||ki(c,c.clone().addScaledVector(Ut,22).add(xe(M(-2,2),M(-1,2),M(-2,2))),16775106,.06,.1);h&&f<10;){u.add(h);let p=hs(h),x=c.clone().lerp(p,.5).add(xe(M(-.8,.8),M(-.5,.9),M(-.8,.8)));ki(c,x,16775106,.09,.1),ki(x,p,16775106,.09,.1),Xt(p.x,p.y,p.z,4),Sn(h,"chain","zap",null,{style:f?"chain":void 0,boss:160})&&d++,c=p,h=cr(p.x,p.z,9,u),f++}d>=3&&_.onMulti&&_.onMulti(d,c,"\u9023\u9396\u9583\u96FB"),f&&(_.hitMark=.08)}}function Sg(i,e){let t=_.player,n=t.pos,s=_.buff;if(_.spMul=1,_.fovAdd=0,zs=Math.hypot(t.vel.x,t.vel.z),_.camera.getWorldDirection(Ut),Pd.setFromMatrixColumn(_.camera.matrixWorld,0),_.override&&Kb(_.override,i,e),s.speed>0&&(_.spMul*=2.5,_.fovAdd+=14,zs>14)){let r=t.vel.x/zs,o=t.vel.z/zs;$r(n.x,n.z,2,a=>{a.root.position.y-n.y<3&&Sn(a,"speed","slice",xe(r,0,o),{cut:"h",boss:200})}),Math.random()<i*30&&ie.puffs.spawn(n.x-r+M(-.5,.5),n.y+M(.2,1.6),n.z-o+M(-.5,.5),0,0,0,.5,.2,.3,16579056,12577535,0,1)}for(let r of _.animals.slice()){if(!(r.ice>0))continue;r.ice-=e;let o=r.root.position;!r.def.fly&&o.y>0&&(o.y=Math.max(0,o.y-20*e)),r.ice<=0&&(r.ice=.01,as(r,{mode:"ice",weapon:"ice"}))}for(let r=mn.length-1;r>=0;r--)mn[r].upd(i,e)&&(mn[r].end(),mn.splice(r,1));cg=t.vel.y,hg=t.onGround,lg=_.input.fire}var ag,ig,mn,pn,Ut,Pd,Rt,Zr,lr,Xn,Xi,Jo,Fn,lg,jo,Uh,cg,hg,Oh,zs,Bh,zh,ug,fg,dg,pg,Ld,fl,mg,Wt,ui,Et,ks,qn,hs,Jr,bg=On(()=>{oi();vh();zi();Wr();tr();Yo();Zo();Fh();ag=[{id:"beast",icon:"\u{1F432}",name:"\u602A\u7378\u8B8A\u8EAB",tip:"\u5DE6\u9375\u63EE\u722A\uFF0C\u8DF3\u8D77\u4F86\u843D\u5730\u6709\u9707\u6CE2",dur:15,w:2},{id:"car",icon:"\u{1F3CE}\uFE0F",name:"\u516C\u53F8\u8DD1\u8ECA",tip:"\u81EA\u52D5\u5F80\u524D\u885D\uFF0C\u6ED1\u9F20\u8F49\u5411\uFF0C\u649E\u5C31\u5C0D\u4E86",dur:14,w:2},{id:"cannon",icon:"\u{1F4AA}",name:"\u5145\u80FD\u81C2\u7832",tip:"\u6309\u4F4F\u5DE6\u9375\u84C4\u529B\uFF0C\u653E\u958B\u767C\u5C04",dur:14,w:2},{id:"beam",icon:"\u{1F450}",name:"\u6028\u5FF5\u6C23\u529F\u6CE2",tip:"\u6309\u4F4F\u5DE6\u9375\u96C6\u6C23\uFF0C\u7136\u5F8C\u4E00\u8DEF\u8F5F\u904E\u53BB",dur:12,w:2},{id:"disc",icon:"\u{1F4BF}",name:"\u5713\u92F8\u6C23\u65AC",tip:"\u5DE6\u9375\u4E1F\u51FA\u6703\u7A7F\u900F\u7684\u6C23\u65AC",dur:13,w:2},{id:"ice",icon:"\u2744\uFE0F",name:"\u5BD2\u51B0\u528D",tip:"\u63EE\u528D\u51CD\u6210\u51B0\u96D5\uFF0C\u518D\u6572\u5C31\u788E",dur:14,w:2},{id:"chain",icon:"\u{1F329}\uFE0F",name:"\u9023\u9396\u9583\u96FB",tip:"\u6309\u4F4F\u5DE6\u9375\uFF0C\u96FB\u6703\u81EA\u5DF1\u8DF3\u4E0B\u4E00\u96BB",dur:12,w:2},{id:"wolves",icon:"\u{1F43A}",name:"\u53EC\u559A\u91CE\u7378",tip:"\u4E94\u96BB\u72FC\u5E6B\u4F60\u54AC",dur:14,w:2},{id:"robodog",icon:"\u{1F415}",name:"\u6A5F\u5668\u72D7",tip:"\u6703\u54AC\u4EBA\uFF0C\u80CC\u4E0A\u9084\u6703\u767C\u5C04\u98DB\u5F48",dur:18,w:2},{id:"zombie",icon:"\u{1F9DF}",name:"\u6B7B\u5C4D\u5FA9\u6D3B",tip:"\u88AB\u54AC\u5230\u7684\u4E5F\u6703\u8B8A\u55AA\u5C4D",dur:16,w:2},{id:"turret",icon:"\u{1F527}",name:"\u81EA\u52D5\u7832\u5854",tip:"\u539F\u5730\u67B6\u5169\u5EA7",dur:18,w:2},{id:"drone",icon:"\u{1F6F8}",name:"\u7121\u4EBA\u6A5F\u5C0F\u968A",tip:"\u4E09\u53F0\u5728\u982D\u4E0A\u5E6B\u4F60\u8F5F",dur:16,w:2},{id:"thunder",icon:"\u26C8\uFE0F",name:"\u843D\u96F7\u9663",tip:"\u9644\u8FD1\u7684\u4E00\u96BB\u4E00\u9053\u96F7",dur:2,w:2},{id:"speed",icon:"\u{1F4A8}",name:"\u6975\u901F\u72C2\u5954",tip:"\u5FEB\u5230\u649E\u8AB0\u8AB0\u5169\u534A",dur:12,w:2},{id:"scythe",icon:"\u{1F319}",name:"\u8B77\u8EAB\u942E\u5200",tip:"\u4E09\u628A\u942E\u5200\u7E5E\u8457\u4F60\u5272",dur:15,w:2},{id:"swords",icon:"\u{1F5E1}\uFE0F",name:"\u5FA1\u528D\u8853",tip:"\u516D\u628A\u98DB\u528D\u81EA\u5DF1\u627E\u4EBA\u780D",dur:14,w:2},{id:"myriad",icon:"\u2694\uFE0F",name:"\u842C\u528D\u6B78\u4E00",tip:"\u6EFF\u5929\u7684\u528D\u4E00\u8D77\u843D\u4E0B",dur:3,w:1.5},{id:"bubble",icon:"\u{1F535}",name:"\u5F48\u8DF3\u6CE1\u6CE1\u7403",tip:"\u4E09\u9846\u5927\u7403\u6EFF\u5834\u58D3",dur:12,w:2}],ig=["beast","car","cannon","beam","disc","ice","chain"],mn=[],pn={},Ut=new F,Pd=new F,Rt=new F,Zr=new F,Xn=0,Xi=0,Jo=1,Fn=0,lg=!1,jo=0,Uh=0,cg=0,hg=!0,Oh=0,zs=0,Wt=(i,e)=>new Gt(Object.assign({color:i,flatShading:!0},e)),ui=(i,e)=>new st(Object.assign({color:i},e)),Et=(i,e,t)=>new _n(i,e,t),ks=(i,e,t,n=8)=>new Yt(i,e,t,n);qn=(...i)=>{let e=new Ot;return i.forEach(t=>e.add(t)),e},hs=(i,e=new F)=>e.set(i.root.position.x,i.root.position.y+i.H*.5,i.root.position.z),Jr=i=>i.state==="drop"&&i.root.position.y>5});function Og(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d");e.fillStyle="#E8D9B5",e.fillRect(0,0,128,128),e.fillStyle="#C8483A",e.fillRect(52,0,24,128),e.fillRect(0,52,128,24),e.strokeStyle="#2E2A1F",e.lineWidth=10,e.strokeRect(0,0,128,128),e.fillStyle="#F2C94C",e.beginPath(),e.arc(64,64,30,0,6.28),e.fill(),e.lineWidth=6,e.stroke(),e.fillStyle="#2E2A1F",e.font="800 44px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("?",64,67);let t=new si(i);t.colorSpace=Pt,Cg=new _n(1.1,1.1,1.1),Ig=new Gt({map:t}),Pg=new Yt(.55,.55,46,10,1,!0),Lg=new st({color:15911244,transparent:!0,opacity:.2,depthWrite:!1,fog:!1,side:At}),Dg=new Gn(.9,0),Ng=new Gt({color:3813930,emissive:12732946,flatShading:!0}),Fg=new Kt(.8,10,8).scale(1,.82,1),Ug=new Gt({color:14715438,flatShading:!0}),gg()}function Ud(i,e,t={}){let n=new Ot;if(n.add(new Ue(Cg,Ig)),t.beam){let s=new Ue(Pg,Lg);s.position.y=22,n.add(s)}_.scene.add(n),jr.push({g:n,x:i,z:e,y:t.sky?34:0,fall:!!t.sky,t:M(6)})}function Bg(i){_.scene.remove(jr[i].g),jr.splice(i,1)}function Zb(i,e){let t=_.player.pos;for(let n=0;n<30;n++){let s=M(6.28),r=M(i,e),o=t.x+Math.cos(s)*r,a=t.z+Math.sin(s)*r;if(!(Math.hypot(o,a)>xt-8)&&_.obstacles.every(l=>(l.x-o)**2+(l.z-a)**2>(l.r+1.5)**2))return[o,a]}return[M(-15,15),M(-15,15)]}function zg(){for(;jr.length;)Bg(0);Qo.forEach(i=>_.scene.remove(i.m)),Qo.length=0;for(let i in _.buff)delete _.buff[i];_g(),_.ult=0,_.eyeK=1,kh=12,Hh=18,dl=0,Gh=0,Vh=0,pl=0,Wh=0,Nd="",document.getElementById("vignette").classList.remove("frozen")}function kg(){let i=_.obstacles.filter(e=>e.h===5.5).sort(()=>Math.random()-.5).slice(0,3);for(let e of i){let t=Math.hypot(e.x,e.z),n=(t+6)/t;Ud(e.x*n,e.z*n)}}function ml(i){let e=_.itemDefs[i];if(!e){let t=Ag.filter(s=>s.id!==Nd&&!(_.buff[s.id]>0)),n=M(t.reduce((s,r)=>s+r.w,0));e=t[0];for(let s of t)if(n-=s.w,n<=0){e=s;break}}if(Nd=e.id,_.buff[e.id]=e.dur,te.pickup(),Ye.announce(`${e.icon} ${e.name}`,e.tip,e.id==="nuke"),Ye.feed(`\u64BF\u5230\u96B1\u85CF\u9053\u5177 <b>${e.icon} ${e.name}</b>`),_.stats&&(_.stats.items=(_.stats.items||0)+1),e.id==="nuke"&&(te.siren(),Fd=99),e.id==="balloon"){for(let t of _.animals)t.boss||t.state==="drop"||t.state==="sucked"||t.dP>55||(t.state="sucked",t.hole=Rg,t.balloon={t:0,pop:M(3.2,5.8)},t.mixer.timeScale=2.5);te.whoosh()}return vg(e.id),e.id==="stop"&&(Nt.tempo=.55,document.getElementById("vignette").classList.add("frozen")),e}function $b(i){if(Mg(i),i==="nuke")Jb();else if(i==="stop")Nt.tempo=_.rageOn>0?1.3:1,document.getElementById("vignette").classList.remove("frozen"),Ye.announce("\u6642\u9593\u6062\u5FA9","\u525B\u525B\u780D\u7684\u73FE\u5728\u4E00\u8D77\u5012"),te.rage();else if(i==="bighead")for(let e of _.animals)e.bones.head&&e.bones.head.scale.setScalar(1)}function Tg(i,e,t){let n=new Ue(t?Fg:Dg,t?Ug:Ng),s={m:n,x:i,z:e,sx:i+M(8,16),sz:e+M(4,10),t:0,T:M(.65,.85),pumpkin:t};n.position.set(s.sx,46,s.sz),_.scene.add(n),Qo.push(s)}function wg(){let i=_.player.pos,e=_.animals.filter(s=>s.dP<62&&s.dP>7&&s.state!=="drop");if(e.length&&Math.random()<.8){let s=Ce(e).root.position;return[s.x+M(-1.5,1.5),s.z+M(-1.5,1.5)]}let t=M(6.28),n=M(12,42);return[i.x+Math.cos(t)*n,i.z+Math.sin(t)*n]}function Jb(){let i=_.player,e=Math.sin(i.yaw),t=Math.cos(i.yaw),n=xe(i.pos.x-e*16,.5,i.pos.z-t*16);tg(2.2),te.boom(1.6),te.thunder(!0),ft(1),_.slowmoT=1.6,_.hitstop=.12,i.kvel.set(e*14,0,t*14),i.vel.y=13,i.onGround=!1;for(let r=0;r<3;r++)dn(r*.12,()=>on(n,2,95,1.1+r*.2,r===1?15911244:16579056));for(let r=0;r<46;r++){let o=M(6.28),a=M(0,3);ie.puffs.spawn(n.x+Math.cos(o)*a,M(0,22),n.z+Math.sin(o)*a,M(-1,1),M(4,9),M(-1,1),2,M(4,7),M(1.6,2.8),16773808,7038037,1,1)}for(let r=0;r<40;r++){let o=M(6.28),a=M(4,14);ie.puffs.spawn(n.x,24,n.z,Math.cos(o)*a,M(1,5),Math.sin(o)*a,3,M(6,10),M(2,3.2),16765503,3025439,.5,1.2)}ie.decals.add(n.x,n.z,14,2367770,!0);let s=0;for(let r of _.animals.slice()){let o=r.root.position,a=Math.hypot(o.x-n.x,o.z-n.z),l=xe(o.x-n.x,.6,o.z-n.z).normalize();dn(a/75,()=>{!r.dead&&bt(r,99999,{mode:"gib",dir:l,weapon:"nuke",bossCap:1500})&&s++})}for(let r of _.barrels)r.alive&&dn(Math.hypot(r.x-n.x,r.z-n.z)/75,()=>Os(r));dn(2.2,()=>{s>=3&&_.onMulti&&_.onMulti(s,n,"\u5168\u5CF6\u8CC7\u9063")})}function jb(i){i.gold=!0,i.def=Object.assign({},i.def,{name:"\u91D1\u8272"+i.def.name,run:i.def.run*1.3,sense:17}),i.hp=i.maxHp=i.hp*2,i.mat.color.set(16765503);let e=i.root.position;Ln(xe(e.x,e.y+i.H+.6,e.z),"\u2728","star",1.4,.6),te.ding(),Ye.feed("\u2728 <b>\u91D1\u8272\u5CF6\u6C11</b>\u51FA\u73FE\u4E86\uFF0C<em>\u6253\u6B7B\u6709\u5927\u734E</em>")}function Hg(i){if(!i.gold&&!i.boss)return;let e=i.root.position,t=Math.hypot(e.x,e.z),n=t>xt-6?(xt-6)/t:1;Ud(e.x*n,e.z*n,{beam:!0}),i.gold&&te.ding()}function Gg(i,e){let t=_.player,n=_.buff,s=t.pos;for(let r in n)n[r]-=i,n[r]<=0&&(delete n[r],$b(r));if(Sg(i,e),_.eyeK+=((n.giant>0?2.3:n.beast>0?1.5:1)-_.eyeK)*Math.min(1,i*5),n.nuke>0){let r=Math.ceil(n.nuke*2);r!==Fd&&(Fd=r,te.tick())}if(kh-=e,kh<=0&&(kh=M(13,19),jr.length<6)){let[r,o]=Zb(10,38);Ud(r,o,{sky:!0,beam:!0}),Ye.feed("\u{1F381} <b>\u795E\u79D8\u79AE\u7269\u7BB1</b>\u7A7A\u6295\u4E2D\uFF0C\u8DDF\u8457\u5149\u67F1\u8D70")}for(let r=jr.length-1;r>=0;r--){let o=jr[r];o.t+=i,o.fall&&(o.y-=11*e,o.y<=0&&(o.y=0,o.fall=!1,Pn(o.x,0,o.z,6,.8),te.thud())),o.g.position.set(o.x,o.y+.75+(o.fall?0:Math.sin(o.t*2.5)*.12),o.z),o.g.rotation.y=o.t*1.2,!o.fall&&(s.x-o.x)**2+(s.z-o.z)**2<4.4&&s.y<3&&(on(xe(o.x,.2,o.z),.5,5,.4,15911244),Xt(o.x,1,o.z,14),Bg(r),ml())}if(n.giant>0&&s.y<.6){let r=0;Vh-=i;for(let o of _.animals.slice()){if(o.state==="drop")continue;let a=o.root.position,l=(a.x-s.x)**2+(a.z-s.z)**2;if(o.boss){l<(o.H*.4+2)**2&&Vh<=0&&(Vh=.4,bt(o,260,{mode:"gib",weapon:"stomp"}),ft(.3),te.slam());continue}l<7.3&&a.y<3.5&&(as(o,{mode:"flat",weapon:"stomp"}),r++)}r&&(ft(.3),te.slam(),on(xe(s.x,.1,s.z),.5,5,.3),r>=3&&_.onMulti&&_.onMulti(r,s,`\u4E00\u8173 ${r} \u96BB`))}if(n.zeus>0&&(dl-=i,dl<=0)){let r=_.camera;r.getWorldDirection(Eg);let o=null,a=.93;for(let l of _.animals){let c=l.root.position;Dd.set(c.x-r.position.x,c.y+l.H*.5-r.position.y,c.z-r.position.z);let h=Dd.length();if(h>75)continue;let u=Dd.dot(Eg)/h;u>a&&(a=u,o=l)}o?(dl=.42,Bs(o.root.position.x,o.root.position.z,{small:!0,chain:3})):dl=.1}if(n.meteor>0&&(Gh-=e,Gh<=0)){Gh=.28;let[r,o]=wg();Tg(r,o,!1)}for(let r=Qo.length-1;r>=0;r--){let o=Qo[r];o.t+=e;let a=Math.min(1,o.t/o.T),l=o.m;l.position.set(o.sx+(o.x-o.sx)*a,46*(1-a)+.5,o.sz+(o.z-o.sz)*a),l.rotation.x+=e*7,l.rotation.z+=e*5,e>0&&ie.puffs.spawn(l.position.x,l.position.y,l.position.z,M(-1,1),M(0,2),M(-1,1),.5,o.pumpkin?.7:1.2,M(.25,.45),o.pumpkin?15911244:16773808,o.pumpkin?14715438:15234090,2,2),a>=1&&(_.scene.remove(l),Qo.splice(r,1),Vi(xe(o.x,.6,o.z),o.pumpkin?5.5:6.5,{weapon:o.pumpkin?"pumpkin":"meteor"}))}if(n.magnet>0)for(let r of _.animals){if(r.boss||r.state==="drop"||r.state==="air"||r.state==="sucked")continue;let o=r.root.position,a=s.x-o.x,l=s.z-o.z,c=Math.hypot(a,l);if(c>70||c<3.4)continue;let h=Math.min(22,8+c*.5)*e;o.x+=a/c*h,o.z+=l/c*h,c<30&&Math.random()<i*.06&&Ns(r,Ce(["\u53C8\u8981\u958B\u6703\uFF1F\uFF01","\u6211\u4E0D\u60F3\u53BB\uFF5E","\u9019\u5834\u6211\u53EF\u4EE5\u4E0D\u7528\u5230\u5427","\u6703\u8B70\u5BA4\u5728\u54EA"]),1.5)}if(n.bighead>0)for(let r of _.animals)!r.boss&&r.bones.head&&r.bones.head.scale.setScalar(2.4);for(let r of _.animals.slice()){let o=r.balloon;if(!o)continue;if(r.hole!==Rg||r.state!=="sucked"){r.balloon=null;continue}o.t+=e;let a=r.root.position;a.y=Math.min(15,a.y+(1.5+o.t*1.3)*e),r.tilt.scale.setScalar(1+Math.min(1,o.t/2.5)*.9),r.root.rotation.y+=e*1.5,r.tilt.rotation.z=Math.sin(_.t*3+r.seed)*.25,o.t>o.pop&&(r.balloon=null,r.tilt.rotation.z=0,te.pop(),as(r,{mode:"gib",weapon:"balloon",dir:xe(0,1,0)}))}if(Hh-=e,Hh<=0&&(Hh=M(22,32),!_.animals.some(r=>r.gold))){let r=_.animals.filter(o=>!o.boss&&o.dP>22&&o.dP<60&&(o.state==="idle"||o.state==="wander"));r.length&&jb(Ce(r))}for(let r of _.animals){if(!r.gold||Math.random()>i*14)continue;let o=r.root.position;ie.puffs.spawn(o.x+M(-.5,.5),o.y+M(.2,r.H),o.z+M(-.5,.5),0,1.2,0,.1,.22,.45,16775106,15911244,0,1)}if(Wh-=i,_.input.altPressed){let r=Math.hypot(s.x,s.z);if(r<6.4&&r>.1&&(Math.sin(t.yaw)*s.x+Math.cos(t.yaw)*s.z)/r>.5){if(Wh>0)Ln(xe(0,4.6,0),"\uFF08\u5357\u74DC\u795E\u9084\u5728\u6C23\u982D\u4E0A\uFF09","bonus",1.2,.5);else if(pl++,Ln(xe(0,4.6,0),["\u549A\uFF01","\u549A\u549A\uFF01","\u2026\u2026\uFF01"][pl-1],"big",.9,1),Xt(s.x*.5,1.6,s.z*.5,8),te.clank(),pl>=3){pl=0,Wh=45,Ye.announce("\u5357\u74DC\u795E\u751F\u6C23\u4E86\uFF01","\u5929\u4E0A\u6389\u5357\u74DC\u56C9",!0),te.rage(),ft(.5);for(let o=0;o<26;o++)dn(.5+o*.25,()=>{let[a,l]=wg();Tg(a,l,!0)})}}}}var Ag,jr,Qo,Rg,Eg,Dd,Cg,Ig,Pg,Lg,Dg,Ng,Fg,Ug,kh,Hh,dl,Gh,Vh,pl,Wh,Nd,Fd,Vg=On(()=>{oi();zi();Wr();tr();Yo();Zo();Fh();Ph();bg();Ag=[{id:"giant",icon:"\u{1F344}",name:"\u5347\u5B98\u8611\u83C7",tip:"\u8B8A\u6210\u5DE8\u4EBA\uFF0C\u7528\u8E29\u7684",dur:14,w:3},{id:"zeus",icon:"\u26A1",name:"\u96F7\u516C\u9059\u63A7\u5668",tip:"\u6E96\u661F\u770B\u8AB0\u5C31\u5288\u8AB0",dur:10,w:3},{id:"stop",icon:"\u23F1\uFE0F",name:"\u4E0B\u73ED\u6253\u5361\u9418",tip:"\u6642\u9593\u66AB\u505C\uFF0C\u6162\u6162\u8655\u7406",dur:6,w:3},{id:"rapid",icon:"\u267E\uFE0F",name:"\u7121\u9650\u706B\u529B",tip:"\u6240\u6709\u6B66\u5668\u96F6\u51B7\u537B",dur:12,w:3},{id:"meteor",icon:"\u2604\uFE0F",name:"\u5929\u964DKPI",tip:"\u9695\u77F3\u96E8",dur:8,w:3},{id:"magnet",icon:"\u{1F4E2}",name:"\u958B\u6703\u901A\u77E5",tip:"\u5168\u54E1\u5230\u4F60\u9762\u524D\u96C6\u5408",dur:8,w:3},{id:"bighead",icon:"\u{1F92F}",name:"\u5927\u982D\u75C7",tip:"\u982D\u8B8A\u8D85\u5927\uFF0C\u96A8\u4FBF\u6253\u90FD\u7206\u982D",dur:16,w:3},{id:"balloon",icon:"\u{1F388}",name:"\u6C26\u6C23\u5F48",tip:"\u5168\u54E1\u5347\u5929\uFF0C\u7136\u5F8C\u5575",dur:6,w:3},{id:"nuke",icon:"\u2622\uFE0F",name:"\u5168\u5CF6\u8CC7\u9063\u4EE4",tip:"3 \u79D2\u5F8C\u751F\u6548",dur:3,w:1.2},...ag];_.itemDefs={};Ag.forEach(i=>_.itemDefs[i.id]=i);jr=[],Qo=[],Rg={done:!1},Eg=new F,Dd=new F,kh=15,Hh=18,dl=0,Gh=0,Vh=0,pl=0,Wh=0,Nd="",Fd=0});var o1=ax(()=>{oi();zi();tr();Wr();x0();Yo();Zo();Ph();Fh();Vg();var gl=document.getElementById("game"),Ci={},Xh=location.search.includes("debug");_.input={fire:!1,firePressed:!1,altPressed:!1};_.player={pos:xe(0,0,24),vel:xe(),kvel:xe(),yaw:0,pitch:0,onGround:!0,bobT:0,dash:null};var Wg=0,qh=0,kd=25,Od=0,Bd=!1,Xg=!1,zd=!1,Yh=0,ea=!1;try{Nt.wail=localStorage.getItem("cozy-payback-wail")!=="0"}catch{}var Qb={3:"\u4E09\u9023\u6BBA\uFF01",5:"\u5927\u958B\u6BBA\u6212\uFF01",8:"\u8840\u6D41\u6210\u6CB3\uFF01",12:"\u6696\u5CF6\u5C60\u592B\uFF01",16:"\u7E3E\u6548\u8D85\u6A19\uFF01",20:"\u4EBA\u8CC7\u770B\u4E86\u90FD\u6015\uFF01",25:"\u7121\u60C5\u958B\u55AE\u6A5F\u5668\uFF01",30:"\u9019\u4E0D\u662F\u52A0\u73ED\u662F\u5C60\u6BBA\uFF01",40:"\u5168\u5CF6\u8CC7\u9063\uFF01",50:"\u795E\u4E4B\u6E05\u7B97\uFF01"};async function e1(){let i=new fh({canvas:gl,antialias:!0,powerPreference:"high-performance"});i.setPixelRatio(Math.min(devicePixelRatio,1.5)),i.setSize(innerWidth,innerHeight),i.localClippingEnabled=!0,_.renderer=i,_.scene=new ya,_.camera=new en(78,innerWidth/innerHeight,.05,900),_.camera.rotation.order="YXZ",_.scene.add(_.camera),g0(),d0(),W0(),j0(),Og(),Ye.init({start:Zg,resume:Kh,menu:Hd,wail:Kg,pick:Jg}),Ye.wail(Nt.wail),_.onKill=t1,_.onMulti=n1,i1(),await P0(Ye.loading),Hd(),requestAnimationFrame(tx)}function Yg(){F0(),p0(),X0(),_.timers.length=0,_.score=0,_.kills=0,_.combo=0,_.comboT=0,_.bestCombo=0,_.rage=0,_.rageOn=0,_.elapsed=0,_.timeLeft=180,_.slow=1,_.hitstop=0,_.slowmoT=0,_.trauma=0,_.boss=null,Nt.tempo=1,_.stats={byWeapon:{},byVictim:{},head:0,air:0,multi:0,boss:0},qh=0,kd=25,Yh=0,Q0(),zg()}function Kg(){Nt.wail=!Nt.wail,Ye.wail(Nt.wail),Pf(),Nt.wail?te.wail("long",1.1):te.ui();try{localStorage.setItem("cozy-payback-wail",Nt.wail?"1":"0")}catch{}(_.mode==="score"||_.mode==="free")&&Ye.feed(`\u6158\u53EB\u7248 <b>${Nt.wail?"\u958B":"\u95DC"}</b>`)}function Hd(){Yg(),Gr(),_.mode="menu",_.paused=!1,_.player.pos.set(0,0,9999),ea=!1;for(let i=0;i<26;i++)il(!1);_.camera.children.forEach(i=>i.visible=!1),document.pointerLockElement&&document.exitPointerLock(),Ye.reset(),Ye.hiscore(),Ye.show("menu")}function Zg(i){Pf(),te.ui(),Yg(),_.mode=i,_.lastMode=i,_.paused=!1;let e=_.player;e.pos.set(0,0,24),e.vel.set(0,0,0),e.kvel.set(0,0,0),e.yaw=0,e.pitch=0,e.onGround=!0,e.dash=null;for(let t=0;t<20;t++)il(!1,[0,6,6,30]);for(let t=0;t<12;t++)il(!0);kg(),_.camera.children.forEach(t=>t.visible=!0),Ye.reset(),Ye.show("hud"),Ye.announce("\u6E05\u7B97\u958B\u59CB\uFF01","\u4ECA\u5929\u4ED6\u5011\u4E00\u500B\u90FD\u5225\u60F3\u4E0B\u73ED",!0),Vd()}function Vd(){if(gl.requestPointerLock&&!Xh)try{let i=gl.requestPointerLock();i&&i.catch&&i.catch(()=>{})}catch{}}function qg(){_.mode!=="score"&&_.mode!=="free"||(_.paused=!0,Gr(),_.input.fire=!1,Ye.show("pause"))}function Kh(){ea=!1,_.paused=!1,Ye.show("hud"),Vd()}function $g(){_.mode!=="free"||_.paused||(ea=!0,_.paused=!0,Gr(),_.input.fire=!1,Ye.show("picker"),document.pointerLockElement&&document.exitPointerLock())}function Jg(i){Kh(),i&&ml(i)}function jg(){_.ult<1||(_.ult=0,ml())}function Qg(){let i=_.mode;_.mode="end",Gr(),_.input.fire=!1,document.pointerLockElement&&document.exitPointerLock();let e=0;try{e=+localStorage.getItem("cozy-payback-hi")||0}catch{}if(_.stats.newHigh=i==="score"&&_.score>e,_.stats.newHigh)try{localStorage.setItem("cozy-payback-hi",Math.floor(_.score))}catch{}_.camera.children.forEach(t=>t.visible=!1),te.end(),Ye.end(_.stats)}function t1(i,e,t){let n=_.stats,s=i.root.position;_.kills++,_.combo++,_.comboT=3.2,_.combo>_.bestCombo&&(_.bestCombo=_.combo);let r=1+Math.min(_.combo-1,40)*.1,o=i.boss?3e3:100,a=[];t.head&&(o+=60,a.push("\u7206\u982D"),n.head++),t.air&&(o+=120,a.push("\u7A7A\u4E2D\u64CA\u6BBA"),n.air++),e==="wall"&&(o+=150,a.push("\u649E\u7246")),e==="launch"&&(o+=50,a.push("\u5168\u58D8\u6253")),e==="splat"&&(o+=80,a.push("\u81EA\u7531\u843D\u9AD4")),e==="drown"&&(o+=150,a.push("\u9935\u9BCA\u9B5A")),t.style==="bowling"&&(o+=200,a.push("\u4FDD\u9F61\u7403")),t.style==="spread"&&(o+=80,a.push("\u5EF6\u71D2")),e==="zap"&&(o+=100,a.push(t.style==="chain"?"\u9023\u9396\u96FB\u64CA":"\u5929\u6253\u96F7\u5288")),i.gold&&(o+=1500,a.push("\u91D1\u8272\u5CF6\u6C11")),e==="ice"&&(o+=80,a.push("\u51B0\u96D5\u788E\u88C2")),o=Math.round(o*r),_.score+=o;let l=t.weapon||"kick";n.byWeapon[l]=(n.byWeapon[l]||0)+1,n.byVictim[i.def.name]=(n.byVictim[i.def.name]||0)+1,i.boss&&n.boss++,Hg(i),Ln(xe(s.x,s.y+i.H+.3,s.z),"+"+o,i.boss?"big":""),a.length&&Ln(xe(s.x,s.y+i.H+.95,s.z),a.join(" \xB7 "),"bonus",1.2,1.2),Ye.feed(`<b>${i.def.name}</b>\uFF08${i.def.role}\uFF09<em>${R0[e]||"\u4E0B\u73ED\u4E86"}</em>`),_.rageOn>0||(_.rage=Math.min(1,_.rage+(i.boss?.5:.04))),_.ult=Math.min(1,_.ult+(i.boss?.5:_.mode==="free"?.125:.084));let c=Qb[_.combo];!c&&_.combo>50&&_.combo%10===0&&(c="\u505C\u4E0D\u4E0B\u4F86\uFF01"),c&&(Ye.announce(c,`${_.combo} \u9023\u6BBA`,_.combo>=12),te.announce(_.combo/3))}function n1(i,e,t){_.score+=i*150,_.stats.multi++,Ln(xe(e.x,Math.max(e.y,1)+2.5,e.z),`${t||"\u4E00\u77F3"+i+"\u9CE5"}\uFF01 +${i*150}`,"big",1.6,1.2),i>=5&&Ye.announce(`\u4E00\u6B21 ${i} \u96BB\uFF01`,"",!0)}function ex(){_.rage<1||_.rageOn>0||(_.rage=0,_.rageOn=10,Nt.tempo=1.3,te.rage(),ft(.5),Ye.announce("\u66B4\u6012\u6A21\u5F0F\uFF01","\u5168\u5834\u6162\u52D5\u4F5C \xB7 \u653B\u901F\u52A0\u500D",!0))}function i1(){addEventListener("keydown",i=>{if((i.code==="Space"||i.code==="Tab")&&i.preventDefault(),!i.repeat&&(Ci[i.code]=!0,!(_.mode!=="score"&&_.mode!=="free"))){if(i.code==="Tab"){ea?Kh():$g();return}if(_.paused){i.code==="KeyP"&&!ea&&Kh();return}if(i.code.startsWith("Digit"))Ch((+i.code.slice(5)+9)%10);else if(i.code==="KeyQ")ex();else if(i.code==="KeyF")jg();else if(i.code==="KeyM")Bd=!Bd,u0(Bd);else if(i.code==="KeyC")Kg();else if(i.code==="KeyB"&&!_.boss&&!_.paused&&Yh<=0){Yh=20;let e=Sd();Ye.announce("\u4F60\u628A\u8001\u95C6\u53EB\u51FA\u4F86\u4E86",`\u5DE8\u5927\u5316\u7684${e.def.name}`,!0)}else i.code==="KeyP"?(document.pointerLockElement&&document.exitPointerLock(),qg()):i.code==="KeyT"&&_.mode==="score"&&Xh&&(_.timeLeft=3)}}),addEventListener("keyup",i=>{Ci[i.code]=!1}),addEventListener("blur",()=>{for(let i in Ci)Ci[i]=!1;_.input.fire=!1}),gl.addEventListener("mousedown",i=>{if(!(_.mode!=="score"&&_.mode!=="free"||_.paused)){if(!document.pointerLockElement&&!Xh&&!zd){Vd();return}i.button===0?(_.input.fire=!0,_.input.firePressed=!0):i.button===2&&(_.input.altPressed=!0)}}),addEventListener("mouseup",i=>{i.button===0&&(_.input.fire=!1)}),addEventListener("contextmenu",i=>i.preventDefault()),addEventListener("mousemove",i=>{if(document.pointerLockElement!==gl&&!zd||_.paused||_.mode!=="score"&&_.mode!=="free")return;let e=_.player;e.yaw-=i.movementX*.0022,e.pitch=Math.max(-1.5,Math.min(1.5,e.pitch-i.movementY*.0022))}),addEventListener("wheel",i=>{if(_.mode!=="score"&&_.mode!=="free"||_.paused)return;let e=V.next>=0?V.next:V.cur;Ch((e+(i.deltaY>0?1:-1)+ci.length)%ci.length)},{passive:!0}),document.addEventListener("pointerlockchange",()=>{document.pointerLockElement?Xg=!0:!Xh&&!ea&&qg()}),document.addEventListener("pointerlockerror",()=>{Xg||(zd=!0)}),addEventListener("resize",()=>{_.renderer.setSize(innerWidth,innerHeight),_.camera.aspect=innerWidth/innerHeight,_.camera.updateProjectionMatrix(),Nf()})}function s1(i){let e=_.player,t=_.camera,n=Math.sin(e.yaw),s=Math.cos(e.yaw),r=_.override==="car",o=r?0:(Ci.KeyD?1:0)-(Ci.KeyA?1:0),a=r?Ci.KeyS?0:1:(Ci.KeyW?1:0)-(Ci.KeyS?1:0),l=-n*a+s*o,c=-s*a-n*o,h=Math.hypot(l,c);h>0&&(l/=h,c/=h);let u=Ci.ShiftLeft||Ci.ShiftRight,f=u?13.5:9.5;_.rageOn>0&&(f*=1.25),_.buff.giant>0&&(f*=1.3),f*=_.spMul,V.firing&&ci[V.cur].id==="saw"&&(f*=1.12);let d=1-Math.exp(-(e.onGround?14:3.5)*i);e.vel.x+=(l*f-e.vel.x)*d,e.vel.z+=(c*f-e.vel.z)*d,e.dash&&(e.vel.x=e.dash.x*e.dash.speed,e.vel.z=e.dash.z*e.dash.speed,e.dash.t-=i,e.dash.t<=0&&(e.dash=null,e.vel.x*=.2,e.vel.z*=.2)),Ci.Space&&e.onGround&&(e.vel.y=10.5,e.onGround=!1),e.vel.y-=28*i,e.pos.x+=(e.vel.x+e.kvel.x)*i,e.pos.z+=(e.vel.z+e.kvel.z)*i,e.pos.y+=e.vel.y*i,e.kvel.multiplyScalar(Math.exp(-3.5*i)),e.pos.y<=0&&(!e.onGround&&e.vel.y<-16&&(ft(.2),te.thud()),e.pos.y=0,e.vel.y=0,e.onGround=!0);for(let S of _.obstacles){if(e.pos.y>S.h)continue;let A=e.pos.x-S.x,R=e.pos.z-S.z,y=S.r+.5,T=A*A+R*R;if(T<y*y&&T>1e-4){let N=Math.sqrt(T);e.pos.x=S.x+A/N*y,e.pos.z=S.z+R/N*y}}let p=Math.hypot(e.pos.x,e.pos.z),x=xt+1.5;p>x&&(e.pos.x*=x/p,e.pos.z*=x/p);let m=Math.hypot(e.vel.x,e.vel.z);e.onGround&&h>0&&(e.bobT+=i*m*1.5);let g=e.onGround?Math.sin(e.bobT)*.045*Math.min(1,m/9):0;t.position.set(e.pos.x,e.pos.y+(1.72+g)*_.eyeK,e.pos.z);let v=_.trauma*_.trauma;t.rotation.set(e.pitch+M(-1,1)*.05*v,e.yaw+M(-1,1)*.05*v,M(-1,1)*.04*v);let w=78+(u&&h>0?5:0)+(_.rageOn>0?9:0)+(e.dash?14:0)+_.fovAdd;Math.abs(t.fov-w)>.05&&(t.fov=Ps(t.fov,w,Math.min(1,i*10)),t.updateProjectionMatrix())}function r1(i){_.t+=i,_.elapsed+=i,_.rageOn>0&&(_.rageOn-=i,_.rageOn<=0&&(Nt.tempo=1));let e=_.rageOn>0?.35:1;_.slowmoT>0&&(_.slowmoT-=i,e=Math.min(e,.3)),_.slow=Ps(_.slow,e,Math.min(1,i*10));let t=i*_.slow;_.hitstop>0&&(_.hitstop-=i,t=0),_.wdt=t,Yh-=i,s1(i),_.override?V.firing=!1:K0(i,t),vd(_.buff.stop>0?0:t),Gg(i,t),Id(i,t);for(let r=_.timers.length-1;r>=0;r--){let o=_.timers[r];o.t-=t,o.t<=0&&(_.timers.splice(r,1),o.fn())}Ff(t,i),zf(t),qh-=t;let n=_.player.pos,s=Math.min(72,40+Math.floor(_.elapsed/4));if(qh<=0&&_.animals.length<s&&(qh=_.animals.length<s*.6?.08:.25,il(!0,Math.random()<.65?[n.x,n.z,9,34]:null)),_.kills>=kd&&!_.boss){kd=_.kills+30;let r=Sd();Ye.announce(`\u5DE8\u5927\u5316\u7684${r.def.name}\uFF01`,`\u300C${Ce(r.def.lines)}\u300D`,!0)}_.combo>0&&(_.comboT-=i,_.comboT<=0&&(_.combo=0)),Ye.update(),_.mode==="score"&&(_.timeLeft-=i,_.timeLeft<=0&&Qg())}function Gd(i){if(_.mode==="menu"||_.mode==="end"){let e=_.mode==="end"?.3:1;_.t+=i,_.wdt=i*e,_.mode==="menu"&&(Od+=i*.1,_.camera.position.set(Math.cos(Od)*44,13,Math.sin(Od)*44),_.camera.lookAt(0,2.5,0)),vd(i*e),Ff(i*e,i),zf(i),_.mode==="end"&&Id(i,i*e,!0);for(let t=_.timers.length-1;t>=0;t--){let n=_.timers[t];n.t-=i*e,n.t<=0&&(_.timers.splice(t,1),n.fn())}}else _.paused||r1(i);_.renderer.render(_.scene,_.camera),_.input.firePressed=!1,_.input.altPressed=!1}function tx(i){requestAnimationFrame(tx);let e=Math.min(.05,(i-Wg)/1e3||.016);Wg=i,Gd(e)}window.GAME={G:_,W:V,start:Zg,tick:Gd,endGame:Qg,toMenu:Hd,select:Ch,rage:ex,step(i=60,e=1/60){for(let t=0;t<i;t++)Gd(e)},fire(i){_.input.fire=i,i&&(_.input.firePressed=!0)},aim(i){let e=_.player,t=i.root.position,n=t.x-e.pos.x,s=t.y+i.H*.5-(e.pos.y+1.72),r=t.z-e.pos.z;e.yaw=Math.atan2(-n,-r),e.pitch=Math.atan2(s,Math.hypot(n,r))},give:ml,strike:Bs,weather:eg,A:Nt,openPicker:$g,pickPower:Jg,ult:jg,near(){let i=_.player.pos,e=null,t=1e9;for(let n of _.animals){let s=n.root.position.distanceToSquared(i);s<t&&(t=s,e=n)}return e}};e1().catch(i=>{console.error(i),document.getElementById("loadtxt").textContent="\u8F09\u5165\u5931\u6557\uFF1A"+i.message})});o1();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
