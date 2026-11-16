(()=>{var Dn=(i,e,t)=>()=>{if(t)throw t[0];try{return i&&(e=i(i=0)),e}catch(n){throw t=[n],n}};var ig=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};function sg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function rg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function qr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vp(){let i=qr("canvas");return i.style.display="block",i}function Bo(...i){let e="THREE."+i.shift();Yr?Yr("log",e,...i):console.log(e,...i)}function Wp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ie(...i){i=Wp(i);let e="THREE."+i.shift();if(Yr)Yr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function He(...i){i=Wp(i);let e="THREE."+i.shift();if(Yr)Yr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function qs(...i){let e=i.join(" ");e in Md||(Md[e]=!0,Ie(...i))}function Xp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Fi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function nt(i,e,t){return Math.max(e,Math.min(t,i))}function Su(i,e){return(i%e+e)%e}function og(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function ag(i,e,t){return i!==e?(t-i)/(e-i):0}function Fo(i,e,t){return(1-t)*i+t*e}function lg(i,e,t,n){return Fo(i,e,1-Math.exp(-t*n))}function cg(i,e=1){return e-Math.abs(Su(i,e*2)-e)}function hg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ug(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function fg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function dg(i,e){return i+Math.random()*(e-i)}function pg(i){return i*(.5-Math.random())}function mg(i){i!==void 0&&(Sd=i);let e=Sd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gg(i){return i*No}function xg(i){return i*Zs}function _g(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function yg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function bu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function vg(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*h,a*c);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Dc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Tu(i,e){if(e.constructor===Float32Array)return i;let t=Dc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Eu(i,e){if(e.constructor===Float32Array)return i;let t=Dc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}function Mg(){let i={enabled:!0,workingColorSpace:Sn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===dt&&(s.r=$i(s.r),s.g=$i(s.g),s.b=$i(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===dt&&(s.r=Gr(s.r),s.g=Gr(s.g),s.b=Gr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===as?Oo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Sn]:{primaries:e,whitePoint:n,transfer:Oo,toXYZ:Td,fromXYZ:Ed,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Et},outputColorSpaceConfig:{drawingBufferColorSpace:Et}},[Et]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:Td,fromXYZ:Ed,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Et}}}),i}function $i(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function yh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?El.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}function Sh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Ih(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Hs.fromArray(i,r);let a=s.x*Math.abs(Hs.x)+s.y*Math.abs(Hs.y)+s.z*Math.abs(Hs.z),l=e.dot(Hs),c=t.dot(Hs),h=n.dot(Hs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function Nd(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Fi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}function Og(i,e,t,n,s,r,o,a){let l;if(e.side===ln?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Di,a),l===null)return null;rl.copy(a),rl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(rl);return c<t.near||c>t.far?null:{distance:c,point:rl.clone(),object:i}}function ol(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,tl),i.getVertexPosition(l,nl),i.getVertexPosition(c,il);let h=Og(i,e,t,n,tl,nl,il,Od);if(h){let u=new F;ws.getBarycoord(Od,tl,nl,il,u),s&&(h.uv=ws.getInterpolatedAttribute(s,a,l,c,u,new We)),r&&(h.uv1=ws.getInterpolatedAttribute(r,a,l,c,u,new We)),o&&(h.normal=ws.getInterpolatedAttribute(o,a,l,c,u,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new F,materialIndex:0};ws.getNormal(tl,nl,il,d.normal),h.face=d,h.barycoord=u}return h}function ul(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Cl.fromBufferAttribute(a,s),Il.fromBufferAttribute(a,r),t.distanceSqToSegment(Cl,Il,Bh,Yd)>n)return;Bh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Bh);if(!(c<e.near||c>e.far))return{distance:c,point:Yd.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}function Jd(i,e,t,n,s,r,o){let a=Vh.distanceSqToPoint(i);if(a<t){let l=new F;Vh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}function pr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(jd(s))s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(jd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function mn(i){let e={};for(let t=0;t<i.length;t++){let n=pr(i[t]);for(let s in n)e[s]=n[s]}return e}function jd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Gg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function wu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}function Es(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Do(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Xg(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Qd(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function qg(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}function Zp(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Yg(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Kg(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Zp(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Yg(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}function ep(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function tp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}function Zg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ns;case"vector":case"vector2":case"vector3":case"vector4":return Is;case"color":return Qo;case"quaternion":return is;case"bool":case"boolean":return ts;case"string":return ss}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function $g(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Zg(i.type);if(i.times===void 0){let n=[],s=[];qg(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Do(i.settings)&&(t.settings={inTangents:Es(i.settings.inTangents,Float32Array),outTangents:Es(i.settings.outTangents,Float32Array)}),t}function np(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}function Cu(i,e,t,n){let s=ox(n);switch(t){case pu:return i*e;case jl:return i*e/s.components*s.byteLength;case Ql:return i*e/s.components*s.byteLength;case Ps:return i*e*2/s.components*s.byteLength;case ec:return i*e*2/s.components*s.byteLength;case mu:return i*e*3/s.components*s.byteLength;case ai:return i*e*4/s.components*s.byteLength;case tc:return i*e*4/s.components*s.byteLength;case aa:case la:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ca:case ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ic:case rc:return Math.max(i,16)*Math.max(e,8)/4;case nc:case sc:return Math.max(i,8)*Math.max(e,8)/2;case oc:case ac:case cc:case hc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case lc:case ua:case uc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case dc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case pc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case mc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case gc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case xc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case _c:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case yc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case vc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Sc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case bc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Tc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ec:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case wc:case Ac:case Rc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Cc:case Ic:return Math.ceil(i/4)*Math.ceil(e/4)*8;case fa:case Pc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ox(i){switch(i){case Un:case hu:return{byteLength:1,components:1};case lo:case uu:case Mi:return{byteLength:2,components:1};case $l:case Jl:return{byteLength:2,components:4};case vi:case Zl:case qn:return{byteLength:4,components:1};case fu:case du:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}var ap,$h,lp,oa,cp,so,Di,ln,Pt,cr,ro,Jh,jh,Qh,hp,hr,up,fp,dp,pp,mp,gp,xp,_p,eu,tu,yp,vp,Mp,Sp,bp,Tp,Ep,wp,Ap,_l,yl,vl,Vr,Ml,Sl,bl,Tl,Xl,Rp,Cp,Ni,nu,iu,su,ru,ou,au,lu,Hh,Ip,cu,ur,oo,ql,Yl,As,ni,Wr,zt,Kl,fr,qt,ao,oi,Un,hu,uu,lo,Zl,vi,qn,Mi,$l,Jl,dr,fu,du,pu,mu,ai,Ji,os,jl,Ql,Ps,ec,tc,aa,la,ca,ha,nc,ic,sc,rc,oc,ac,lc,cc,hc,ua,uc,fc,dc,pc,mc,gc,xc,_c,yc,vc,Mc,Sc,bc,Tc,Ec,wc,Ac,Rc,Cc,Ic,fa,Pc,Pp,Lp,Dp,Ys,Ks,gl,Gh,Ws,Xs,Uo,Lc,Np,gu,da,co,Fp,pa,Up,as,Et,Sn,Oo,dt,xl,Op,Bp,zp,kp,xu,Hp,Gp,_u,yu,vu,ls,Mu,ii,Xr,Md,Yr,qp,yi,fn,Sd,No,Zs,Nc,Iu,We,sn,Pu,F,xh,bd,Lu,Xe,_h,Td,Ed,et,Rr,El,Sg,Kr,bg,vh,Yt,Du,yt,wl,Vn,zo,Al,Wl,Ge,Cr,gi,Tg,Eg,vs,Xa,Hn,wd,Ad,si,ko,wg,Rd,Ir,Wi,qa,Eo,Ag,Rg,Cd,Id,Pd,Ld,Cg,Pr,Mh,ut,Bt,Ig,Zr,Yp,Ms,Ya,be,dn,Ho,Go,xi,Xi,bh,qi,Lr,Dr,Dd,Th,Eh,wh,Ah,Rh,Ch,ws,bn,Yi,_i,Ka,Nr,Fr,Ur,Ss,bs,ks,wo,Za,$a,Hs,Gt,Ja,Pg,Mt,Vo,Wo,ot,Lg,Ao,Ph,Nn,Dg,ti,Lh,Or,Gn,Ro,nn,wt,$r,Mn,Jr,Dh,Ng,Fg,pn,Ug,Tn,Ki,Nh,ja,Qa,$s,at,Fd,Gs,el,Ud,tl,nl,il,Fh,sl,Od,rl,Oe,Co,Bd,zd,Bg,kd,al,Uh,Hd,Oh,Xo,jr,Qr,Gd,zg,qo,ji,Br,Vd,ll,Wd,kg,Io,Po,Wn,Vs,Hg,cl,Rs,Xd,Rl,Cs,Cl,Il,qd,Lo,hl,Bh,Yd,Js,Kd,Zd,js,Yo,eo,$d,Vh,fl,dl,Qs,Ko,Xn,Qi,Zo,$o,En,Jo,Ii,Kt,er,Pl,wn,tr,es,rn,nr,Kp,Vg,Wg,ri,Ll,ir,An,Zt,Dl,Nl,Pi,Fl,jo,Ul,Ol,Fn,ts,Qo,ns,Bl,is,ss,Is,sr,Ci,zl,$p,Li,Zi,Wh,to,zr,kl,ea,rr,ta,zh,ip,sp,no,pl,ml,Ri,na,Ts,rp,op,Xt,Xh,ia,qh,or,ar,Yh,lr,rs,kh,sa,kr,Hr,io,Hl,Gl,Au,Jg,Ru,jg,Qg,ex,tx,nx,ix,sx,Kh,vt,Vl,rx,ra,Nu,Zh,Fu=Dn(()=>{ap=0,$h=1,lp=2,oa=1,cp=2,so=3,Di=0,ln=1,Pt=2,cr=0,ro=1,Jh=2,jh=3,Qh=4,hp=5,hr=100,up=101,fp=102,dp=103,pp=104,mp=200,gp=201,xp=202,_p=203,eu=204,tu=205,yp=206,vp=207,Mp=208,Sp=209,bp=210,Tp=211,Ep=212,wp=213,Ap=214,_l=0,yl=1,vl=2,Vr=3,Ml=4,Sl=5,bl=6,Tl=7,Xl=0,Rp=1,Cp=2,Ni=0,nu=1,iu=2,su=3,ru=4,ou=5,au=6,lu=7,Hh="attached",Ip="detached",cu=300,ur=301,oo=302,ql=303,Yl=304,As=1e3,ni=1001,Wr=1002,zt=1003,Kl=1004,fr=1005,qt=1006,ao=1007,oi=1008,Un=1009,hu=1010,uu=1011,lo=1012,Zl=1013,vi=1014,qn=1015,Mi=1016,$l=1017,Jl=1018,dr=1020,fu=35902,du=35899,pu=1021,mu=1022,ai=1023,Ji=1026,os=1027,jl=1028,Ql=1029,Ps=1030,ec=1031,tc=1033,aa=33776,la=33777,ca=33778,ha=33779,nc=35840,ic=35841,sc=35842,rc=35843,oc=36196,ac=37492,lc=37496,cc=37488,hc=37489,ua=37490,uc=37491,fc=37808,dc=37809,pc=37810,mc=37811,gc=37812,xc=37813,_c=37814,yc=37815,vc=37816,Mc=37817,Sc=37818,bc=37819,Tc=37820,Ec=37821,wc=36492,Ac=36494,Rc=36495,Cc=36283,Ic=36284,fa=36285,Pc=36286,Pp=2200,Lp=2201,Dp=2202,Ys=2300,Ks=2301,gl=2302,Gh=2303,Ws=2400,Xs=2401,Uo=2402,Lc=2500,Np=2501,gu=0,da=1,co=2,Fp=3200,pa=0,Up=1,as="",Et="srgb",Sn="srgb-linear",Oo="linear",dt="srgb",xl=7680,Op=519,Bp=512,zp=513,kp=514,xu=515,Hp=516,Gp=517,_u=518,yu=519,vu=35044,ls=35048,Mu="300 es",ii=2e3,Xr=2001;Md={},Yr=null;qp={[_l]:_l,[vl]:bl,[Ml]:Ml,[Vr]:Sl,[yl]:yl,[bl]:vl,[Tl]:Tl,[Sl]:Vr},yi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sd=1234567,No=Math.PI/180,Zs=180/Math.PI;Nc={DEG2RAD:No,RAD2DEG:Zs,generateUUID:Fi,clamp:nt,euclideanModulo:Su,mapLinear:og,inverseLerp:ag,lerp:Fo,damp:lg,pingpong:cg,smoothstep:hg,smootherstep:ug,randInt:fg,randFloat:dg,randFloatSpread:pg,seededRandom:mg,degToRad:gg,radToDeg:xg,isPowerOfTwo:_g,ceilPowerOfTwo:yg,floorPowerOfTwo:bu,setQuaternionFromProperEuler:vg,normalize:Eu,denormalize:Tu},Iu=class Iu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Iu.prototype.isVector2=!0;We=Iu,sn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(u!==x||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*x;m<0&&(d=-d,f=-f,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),w=Math.sin(y);g=Math.sin(g*y)/w,a=Math.sin(a*y)/w,l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+x*a}else{l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+x*a;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-a*f,e[t+2]=c*p+h*f+a*d-l*u,e[t+3]=h*p-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Pu=class Pu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xh.copy(this).projectOnVector(e),this.sub(xh)}reflect(e){return this.sub(xh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Pu.prototype.isVector3=!0;F=Pu,xh=new F,bd=new sn,Lu=class Lu{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],x=s[0],m=s[3],g=s[6],y=s[1],w=s[4],M=s[7],R=s[2],A=s[5],_=s[8];return r[0]=o*x+a*y+l*R,r[3]=o*m+a*w+l*A,r[6]=o*g+a*M+l*_,r[1]=c*x+h*y+u*R,r[4]=c*m+h*w+u*A,r[7]=c*g+h*M+u*_,r[2]=d*x+f*y+p*R,r[5]=d*m+f*w+p*A,r[8]=d*g+f*M+p*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=t*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return qs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_h.makeScale(e,t)),this}rotate(e){return qs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_h.makeRotation(-e)),this}translate(e,t){return qs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_h.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Lu.prototype.isMatrix3=!0;Xe=Lu,_h=new Xe,Td=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ed=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);et=Mg();El=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Rr===void 0&&(Rr=qr("canvas")),Rr.width=e.width,Rr.height=e.height;let s=Rr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Rr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=qr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=$i(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($i(t[n]/255)*255):t[n]=$i(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Sg=0,Kr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=Fi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(yh(s[o].image)):r.push(yh(s[o]))}else r=yh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};bg=0,vh=new F,Yt=class i extends yi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ni,s=ni,r=qt,o=oi,a=ai,l=Un,c=i.DEFAULT_ANISOTROPY,h=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=Fi(),this.name="",this.source=new Kr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(vh).x}get height(){return this.source.getSize(vh).y}get depth(){return this.source.getSize(vh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case As:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case Wr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case As:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case Wr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=cu;Yt.DEFAULT_ANISOTROPY=1;Du=class Du{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,M=(f+1)/2,R=(g+1)/2,A=(h+d)/4,_=(u+x)/4,E=(p+m)/4;return w>M&&w>R?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=A/n,r=_/n):M>R?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=A/s,r=E/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=_/r,s=E/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-p)*(m-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Du.prototype.isVector4=!0;yt=Du,wl=class extends yi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Yt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Kr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vn=class extends wl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},zo=class extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Al=class extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Wl=class Wl{constructor(e,t,n,s,r,o,a,l,c,h,u,d,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,d,f,p,x,m)}set(e,t,n,s,r,o,a,l,c,h,u,d,f,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Cr.setFromMatrixColumn(e,0).length(),r=1/Cr.setFromMatrixColumn(e,1).length(),o=1/Cr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,p=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,p=c*h,x=c*u;t[0]=d+x*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,p=c*h,x=c*u;t[0]=d-x*a,t[4]=-o*u,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,p=a*h,x=a*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=x-d*u,t[8]=p*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tg,e,Eg)}lookAt(e,t,n){let s=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),vs.crossVectors(n,Hn),vs.lengthSq()===0&&(Math.abs(n.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),vs.crossVectors(n,Hn)),vs.normalize(),Xa.crossVectors(Hn,vs),s[0]=vs.x,s[4]=Xa.x,s[8]=Hn.x,s[1]=vs.y,s[5]=Xa.y,s[9]=Hn.y,s[2]=vs.z,s[6]=Xa.z,s[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],y=n[3],w=n[7],M=n[11],R=n[15],A=s[0],_=s[4],E=s[8],N=s[12],C=s[1],P=s[5],O=s[9],z=s[13],L=s[2],W=s[6],Z=s[10],q=s[14],ie=s[3],K=s[7],te=s[11],ne=s[15];return r[0]=o*A+a*C+l*L+c*ie,r[4]=o*_+a*P+l*W+c*K,r[8]=o*E+a*O+l*Z+c*te,r[12]=o*N+a*z+l*q+c*ne,r[1]=h*A+u*C+d*L+f*ie,r[5]=h*_+u*P+d*W+f*K,r[9]=h*E+u*O+d*Z+f*te,r[13]=h*N+u*z+d*q+f*ne,r[2]=p*A+x*C+m*L+g*ie,r[6]=p*_+x*P+m*W+g*K,r[10]=p*E+x*O+m*Z+g*te,r[14]=p*N+x*z+m*q+g*ne,r[3]=y*A+w*C+M*L+R*ie,r[7]=y*_+w*P+M*W+R*K,r[11]=y*E+w*O+M*Z+R*te,r[15]=y*N+w*z+M*q+R*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],x=e[7],m=e[11],g=e[15],y=l*f-c*d,w=a*f-c*u,M=a*d-l*u,R=o*f-c*h,A=o*d-l*h,_=o*u-a*h;return t*(x*y-m*w+g*M)-n*(p*y-m*R+g*A)+s*(p*w-x*R+g*_)-r*(p*M-x*A+m*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],x=e[13],m=e[14],g=e[15],y=t*a-n*o,w=t*l-s*o,M=t*c-r*o,R=n*l-s*a,A=n*c-r*a,_=s*c-r*l,E=h*x-u*p,N=h*m-d*p,C=h*g-f*p,P=u*m-d*x,O=u*g-f*x,z=d*g-f*m,L=y*z-w*O+M*P+R*C-A*N+_*E;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/L;return e[0]=(a*z-l*O+c*P)*W,e[1]=(s*O-n*z-r*P)*W,e[2]=(x*_-m*A+g*R)*W,e[3]=(d*A-u*_-f*R)*W,e[4]=(l*C-o*z-c*N)*W,e[5]=(t*z-s*C+r*N)*W,e[6]=(m*M-p*_-g*w)*W,e[7]=(h*_-d*M+f*w)*W,e[8]=(o*O-a*C+c*E)*W,e[9]=(n*C-t*O-r*E)*W,e[10]=(p*A-x*M+g*y)*W,e[11]=(u*M-h*A-f*y)*W,e[12]=(a*N-o*P-l*E)*W,e[13]=(t*P-n*N+s*E)*W,e[14]=(x*w-p*R-m*y)*W,e[15]=(h*R-u*w+d*y)*W,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,x=o*h,m=o*u,g=a*u,y=l*c,w=l*h,M=l*u,R=n.x,A=n.y,_=n.z;return s[0]=(1-(x+g))*R,s[1]=(f+M)*R,s[2]=(p-w)*R,s[3]=0,s[4]=(f-M)*A,s[5]=(1-(d+g))*A,s[6]=(m+y)*A,s[7]=0,s[8]=(p+w)*_,s[9]=(m-y)*_,s[10]=(1-(d+x))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Cr.set(s[0],s[1],s[2]).length(),a=Cr.set(s[4],s[5],s[6]).length(),l=Cr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),gi.copy(this);let c=1/o,h=1/a,u=1/l;return gi.elements[0]*=c,gi.elements[1]*=c,gi.elements[2]*=c,gi.elements[4]*=h,gi.elements[5]*=h,gi.elements[6]*=h,gi.elements[8]*=u,gi.elements[9]*=u,gi.elements[10]*=u,t.setFromRotationMatrix(gi),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=ii,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===ii)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Xr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ii,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===ii)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===Xr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Wl.prototype.isMatrix4=!0;Ge=Wl,Cr=new F,gi=new Ge,Tg=new F(0,0,0),Eg=new F(1,1,1),vs=new F,Xa=new F,Hn=new F,wd=new Ge,Ad=new sn,si=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ad.setFromEuler(this),this.setFromQuaternion(Ad,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};si.DEFAULT_ORDER="XYZ";ko=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},wg=0,Rd=new F,Ir=new sn,Wi=new Ge,qa=new F,Eo=new F,Ag=new F,Rg=new sn,Cd=new F(1,0,0),Id=new F(0,1,0),Pd=new F(0,0,1),Ld={type:"added"},Cg={type:"removed"},Pr={type:"childadded",child:null},Mh={type:"childremoved",child:null},ut=class i extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new si,n=new sn,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ge},normalMatrix:{value:new Xe}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ko,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.premultiply(Ir),this}rotateX(e){return this.rotateOnAxis(Cd,e)}rotateY(e){return this.rotateOnAxis(Id,e)}rotateZ(e){return this.rotateOnAxis(Pd,e)}translateOnAxis(e,t){return Rd.copy(e).applyQuaternion(this.quaternion),this.position.add(Rd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cd,e)}translateY(e){return this.translateOnAxis(Id,e)}translateZ(e){return this.translateOnAxis(Pd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qa.copy(e):qa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(Eo,qa,this.up):Wi.lookAt(qa,Eo,this.up),this.quaternion.setFromRotationMatrix(Wi),s&&(Wi.extractRotation(s.matrixWorld),Ir.setFromRotationMatrix(Wi),this.quaternion.premultiply(Ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(He("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ld),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cg),Mh.child=e,this.dispatchEvent(Mh),Mh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ld),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,e,Ag),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,Rg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ut.DEFAULT_UP=new F(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Bt=class extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ig={type:"move"},Zr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ig)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Bt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Yp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ms={h:0,s:0,l:0},Ya={h:0,s:0,l:0};be=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=et.workingColorSpace){if(e=Su(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Sh(o,r,e+1/3),this.g=Sh(o,r,e),this.b=Sh(o,r,e-1/3)}return et.colorSpaceToWorking(this,s),this}setStyle(e,t=Et){function n(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){let n=Yp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=Gr(e.r),this.g=Gr(e.g),this.b=Gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return et.workingToColorSpace(dn.copy(this),e),Math.round(nt(dn.r*255,0,255))*65536+Math.round(nt(dn.g*255,0,255))*256+Math.round(nt(dn.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(dn.copy(this),t);let n=dn.r,s=dn.g,r=dn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=Et){et.workingToColorSpace(dn.copy(this),e);let t=dn.r,n=dn.g,s=dn.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ms),this.setHSL(Ms.h+e,Ms.s+t,Ms.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ms),e.getHSL(Ya);let n=Fo(Ms.h,Ya.h,t),s=Fo(Ms.s,Ya.s,t),r=Fo(Ms.l,Ya.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new be;be.NAMES=Yp;Ho=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new be(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Go=class extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},xi=new F,Xi=new F,bh=new F,qi=new F,Lr=new F,Dr=new F,Dd=new F,Th=new F,Eh=new F,wh=new F,Ah=new yt,Rh=new yt,Ch=new yt,ws=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),xi.subVectors(e,t),s.cross(xi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){xi.subVectors(s,t),Xi.subVectors(n,t),bh.subVectors(e,t);let o=xi.dot(xi),a=xi.dot(Xi),l=xi.dot(bh),c=Xi.dot(Xi),h=Xi.dot(bh),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,qi.x),l.addScaledVector(o,qi.y),l.addScaledVector(a,qi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Ah.setScalar(0),Rh.setScalar(0),Ch.setScalar(0),Ah.fromBufferAttribute(e,t),Rh.fromBufferAttribute(e,n),Ch.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ah,r.x),o.addScaledVector(Rh,r.y),o.addScaledVector(Ch,r.z),o}static isFrontFacing(e,t,n,s){return xi.subVectors(n,t),Xi.subVectors(e,t),xi.cross(Xi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),xi.cross(Xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Lr.subVectors(s,n),Dr.subVectors(r,n),Th.subVectors(e,n);let l=Lr.dot(Th),c=Dr.dot(Th);if(l<=0&&c<=0)return t.copy(n);Eh.subVectors(e,s);let h=Lr.dot(Eh),u=Dr.dot(Eh);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(n).addScaledVector(Lr,o);wh.subVectors(e,r);let f=Lr.dot(wh),p=Dr.dot(wh);if(p>=0&&f<=p)return t.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Dr,a);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return Dd.subVectors(r,s),a=(u-h)/(u-h+(f-p)),t.copy(s).addScaledVector(Dd,a);let g=1/(m+x+d);return o=x*g,a=d*g,t.copy(n).addScaledVector(Lr,o).addScaledVector(Dr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},bn=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,_i):_i.fromBufferAttribute(r,o),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ka.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ka.copy(n.boundingBox)),Ka.applyMatrix4(e.matrixWorld),this.union(Ka)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wo),Za.subVectors(this.max,wo),Nr.subVectors(e.a,wo),Fr.subVectors(e.b,wo),Ur.subVectors(e.c,wo),Ss.subVectors(Fr,Nr),bs.subVectors(Ur,Fr),ks.subVectors(Nr,Ur);let t=[0,-Ss.z,Ss.y,0,-bs.z,bs.y,0,-ks.z,ks.y,Ss.z,0,-Ss.x,bs.z,0,-bs.x,ks.z,0,-ks.x,-Ss.y,Ss.x,0,-bs.y,bs.x,0,-ks.y,ks.x,0];return!Ih(t,Nr,Fr,Ur,Za)||(t=[1,0,0,0,1,0,0,0,1],!Ih(t,Nr,Fr,Ur,Za))?!1:($a.crossVectors(Ss,bs),t=[$a.x,$a.y,$a.z],Ih(t,Nr,Fr,Ur,Za))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Yi=[new F,new F,new F,new F,new F,new F,new F,new F],_i=new F,Ka=new bn,Nr=new F,Fr=new F,Ur=new F,Ss=new F,bs=new F,ks=new F,wo=new F,Za=new F,$a=new F,Hs=new F;Gt=new F,Ja=new We,Pg=0,Mt=class extends yi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vu,this.updateRanges=[],this.gpuType=qn,this.version=0,this._normalizationScale=e!==void 0?Dc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ja.fromBufferAttribute(this,t),Ja.applyMatrix3(e),this.setXY(t,Ja.x,Ja.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Tu(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Eu(e,this.array)}},Vo=class extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Wo=class extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},ot=class extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Lg=new bn,Ao=new F,Ph=new F,Nn=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Lg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ao.subVectors(e,this.center);let t=Ao.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ao,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ph.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ao.copy(e.center).add(Ph)),this.expandByPoint(Ao.copy(e.center).sub(Ph))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Dg=0,ti=new Ge,Lh=new ut,Or=new F,Gn=new bn,Ro=new bn,nn=new F,wt=class i extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sg(e)?Wo:Vo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,n){return ti.makeTranslation(e,t,n),this.applyMatrix4(ti),this}scale(e,t,n){return ti.makeScale(e,t,n),this.applyMatrix4(ti),this}lookAt(e){return Lh.lookAt(e),Lh.updateMatrix(),this.applyMatrix4(Lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ot(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Gn.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ro.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Gn.min,Ro.min),Gn.expandByPoint(nn),nn.addVectors(Gn.max,Ro.max),Gn.expandByPoint(nn)):(Gn.expandByPoint(Ro.min),Gn.expandByPoint(Ro.max))}Gn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)nn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(nn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)nn.fromBufferAttribute(a,c),l&&(Or.fromBufferAttribute(e,c),nn.add(Or)),s=Math.max(s,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Mt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let N=0;N<n.count;N++)a[N]=new F,l[N]=new F;let h=new F,u=new F,d=new F,f=new We,p=new We,x=new We,m=new F,g=new F;function y(N,C,P){c[N]=c[C]=c[P]=1,h.fromBufferAttribute(n,N),u.fromBufferAttribute(n,C),d.fromBufferAttribute(n,P),f.fromBufferAttribute(r,N),p.fromBufferAttribute(r,C),x.fromBufferAttribute(r,P),u.sub(h),d.sub(h),p.sub(f),x.sub(f);let O=1/(p.x*x.y-x.x*p.y);isFinite(O)&&(m.copy(u).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(O),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(O),a[N].add(m),a[C].add(m),a[P].add(m),l[N].add(g),l[C].add(g),l[P].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let N=0,C=w.length;N<C;++N){let P=w[N],O=P.start,z=P.count;for(let L=O,W=O+z;L<W;L+=3)y(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let M=new F,R=new F,A=new F,_=new F;function E(N){A.fromBufferAttribute(s,N),_.copy(A);let C=a[N];M.copy(C),M.sub(A.multiplyScalar(A.dot(C))).normalize(),R.crossVectors(_,C);let O=R.dot(l[N])<0?-1:1;o.setXYZW(N,M.x,M.y,M.z,O)}for(let N=0,C=n.count;N<C;++N)c[N]&&E(N);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,h=new F,u=new F;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new Mt(d,h,u)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},$r=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=vu,this.updateRanges=[],this.version=0,this.uuid=Fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Nd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Nd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};Mn=new F,Jr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Dc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix4(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.applyNormalMatrix(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.transformDirection(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Bo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Bo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Tu(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Eu(e,this.data.array)}},Dh=new F,Ng=new F,Fg=new Xe,pn=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Dh.subVectors(n,t).cross(Ng.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Dh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Fg.getNormalMatrix(e),s=this.coplanarPoint(Dh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ug=0,Tn=class extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=ro,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eu,this.blendDst=tu,this.blendEquation=hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Op,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xl,this.stencilZFail=xl,this.stencilZPass=xl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new pn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new We().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new We().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ki=new F,Nh=new F,ja=new F,Qa=new F,$s=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,t),Ki.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Nh.copy(e).add(t).multiplyScalar(.5),ja.copy(t).sub(e).normalize(),Qa.copy(this.origin).sub(Nh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ja),a=Qa.dot(this.direction),l=-Qa.dot(ja),c=Qa.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Nh).addScaledVector(ja,d),f}intersectSphere(e,t){if(e.radius<0)return null;Ki.subVectors(e.center,this.origin);let n=Ki.dot(this.direction),s=Ki.dot(Ki)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=e.x-o.x,d=e.y-o.y,f=e.z-o.z,p=t.x-o.x,x=t.y-o.y,m=t.z-o.z,g=n.x-o.x,y=n.y-o.y,w=n.z-o.z,M=Math.abs(l),R=Math.abs(c),A=Math.abs(h),_,E,N,C,P,O,z,L,W,Z,q,ie;if(M>=R&&M>=A?(N=l,O=u,W=p,ie=g,l>=0?(_=c,E=h,C=d,P=f,z=x,L=m,Z=y,q=w):(_=h,E=c,C=f,P=d,z=m,L=x,Z=w,q=y)):R>=A?(N=c,O=d,W=x,ie=y,c>=0?(_=h,E=l,C=f,P=u,z=m,L=p,Z=w,q=g):(_=l,E=h,C=u,P=f,z=p,L=m,Z=g,q=w)):(N=h,O=f,W=m,ie=w,h>=0?(_=l,E=c,C=u,P=d,z=p,L=x,Z=g,q=y):(_=c,E=l,C=d,P=u,z=x,L=p,Z=y,q=g)),N===0)return null;let K=_/N,te=E/N,ne=1/N,Re=C-K*O,Ke=P-te*O,j=z-K*W,ve=L-te*W,Ee=Z-K*ie,Fe=q-te*ie,Me=Ee*ve-Fe*j,$e=Re*Fe-Ke*Ee,kt=j*Ke-ve*Re;if(s){if(Me<0||$e<0||kt<0)return null}else if((Me<0||$e<0||kt<0)&&(Me>0||$e>0||kt>0))return null;let ze=Me+$e+kt;if(ze===0)return null;let xt=ne*(Me*O+$e*W+kt*ie);return(ze>0?xt<0:xt>0)?null:this.at(xt/ze,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},at=class extends Tn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Fd=new Ge,Gs=new $s,el=new Nn,Ud=new F,tl=new F,nl=new F,il=new F,Fh=new F,sl=new F,Od=new F,rl=new F,Oe=class extends ut{constructor(e=new wt,t=new at){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){sl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Fh.fromBufferAttribute(u,e),o?sl.addScaledVector(Fh,h):sl.addScaledVector(Fh.sub(t),h))}t.add(sl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),el.copy(n.boundingSphere),el.applyMatrix4(r),Gs.copy(e.ray).recast(e.near),!(el.containsPoint(Gs.origin)===!1&&(Gs.intersectSphere(el,Ud)===null||Gs.origin.distanceToSquared(Ud)>(e.far-e.near)**2))&&(Fd.copy(r).invert(),Gs.copy(e.ray).applyMatrix4(Fd),!(n.boundingBox!==null&&Gs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,R=w;M<R;M+=3){let A=a.getX(M),_=a.getX(M+1),E=a.getX(M+2);s=ol(this,g,e,n,c,h,u,A,_,E),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let y=a.getX(m),w=a.getX(m+1),M=a.getX(m+2);s=ol(this,o,e,n,c,h,u,y,w,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,R=w;M<R;M+=3){let A=M,_=M+1,E=M+2;s=ol(this,g,e,n,c,h,u,A,_,E),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let y=m,w=m+1,M=m+2;s=ol(this,o,e,n,c,h,u,y,w,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};Co=new yt,Bd=new yt,zd=new yt,Bg=new yt,kd=new Ge,al=new F,Uh=new Nn,Hd=new Ge,Oh=new $s,Xo=class extends Oe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Hh,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new bn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,al),this.boundingBox.expandByPoint(al)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Nn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,al),this.boundingSphere.expandByPoint(al)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Uh.copy(this.boundingSphere),Uh.applyMatrix4(s),e.ray.intersectsSphere(Uh)!==!1&&(Hd.copy(s).invert(),Oh.copy(e.ray).applyMatrix4(Hd),!(this.boundingBox!==null&&Oh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Oh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new yt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Hh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ip?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ie("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Bd.fromBufferAttribute(s.attributes.skinIndex,e),zd.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Co.copy(t),t.set(0,0,0,0)):(Co.set(t.x,t.y,t.z,1),t.set(0,0,0)),Co.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=zd.getComponent(r);if(o!==0){let a=Bd.getComponent(r);kd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Bg.copy(Co).applyMatrix4(kd),o)}}return t.isVector4&&(t.w=Co.w),t.applyMatrix4(this.bindMatrixInverse)}},jr=class extends ut{constructor(){super(),this.isBone=!0,this.type="Bone"}},Qr=class extends Yt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=zt,h=zt,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Gd=new Ge,zg=new Ge,qo=class i{constructor(e=[],t=[]){this.uuid=Fi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ie("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:zg;Gd.multiplyMatrices(a,t[r]),Gd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Qr(t,e,e,ai,qn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(Ie("Skeleton: No bone found with UUID:",r),o=new jr),this.bones.push(o),this.boneInverses.push(new Ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},ji=class extends Mt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Br=new Ge,Vd=new Ge,ll=[],Wd=new bn,kg=new Ge,Io=new Oe,Po=new Nn,Wn=class extends Oe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ji(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,kg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Br),Wd.copy(e.boundingBox).applyMatrix4(Br),this.boundingBox.union(Wd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Br),Po.copy(e.boundingSphere).applyMatrix4(Br),this.boundingSphere.union(Po)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Io.geometry=this.geometry,Io.material=this.material,Io.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Po.copy(this.boundingSphere),Po.applyMatrix4(n),e.ray.intersectsSphere(Po)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Br),Vd.multiplyMatrices(n,Br),Io.matrixWorld=Vd,Io.raycast(e,ll);for(let o=0,a=ll.length;o<a;o++){let l=ll[o];l.instanceId=r,l.object=this,t.push(l)}ll.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ji(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qr(new Float32Array(s*this.count),s,this.count,jl,qn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Vs=new Nn,Hg=new We(.5,.5),cl=new F,Rs=class{constructor(e=new pn,t=new pn,n=new pn,s=new pn,r=new pn,o=new pn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ii,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],y=r[12],w=r[13],M=r[14],R=r[15];if(s[0].setComponents(c-o,f-h,g-p,R-y).normalize(),s[1].setComponents(c+o,f+h,g+p,R+y).normalize(),s[2].setComponents(c+a,f+u,g+x,R+w).normalize(),s[3].setComponents(c-a,f-u,g-x,R-w).normalize(),n)s[4].setComponents(l,d,m,M).normalize(),s[5].setComponents(c-l,f-d,g-m,R-M).normalize();else if(s[4].setComponents(c-l,f-d,g-m,R-M).normalize(),t===ii)s[5].setComponents(c+l,f+d,g+m,R+M).normalize();else if(t===Xr)s[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vs)}intersectsSprite(e){Vs.center.set(0,0,0);let t=Hg.distanceTo(e.center);return Vs.radius=.7071067811865476+t,Vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(cl.x=s.normal.x>0?e.max.x:e.min.x,cl.y=s.normal.y>0?e.max.y:e.min.y,cl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(cl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Xd=new Ge,Rl=class i{constructor(){this.coordinateSystem=ii,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Xd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Rs),n[s].setFromProjectionMatrix(Xd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Rs),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}},Cs=class extends Tn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Cl=new F,Il=new F,qd=new Ge,Lo=new $s,hl=new Nn,Bh=new F,Yd=new F,Js=class extends ut{constructor(e=new wt,t=new Cs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Cl.fromBufferAttribute(t,s-1),Il.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Cl.distanceTo(Il);e.setAttribute("lineDistance",new ot(n,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hl.copy(n.boundingSphere),hl.applyMatrix4(s),hl.radius+=r,e.ray.intersectsSphere(hl)===!1)return;qd.copy(s).invert(),Lo.copy(e.ray).applyMatrix4(qd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){let g=h.getX(x),y=h.getX(x+1),w=ul(this,e,Lo,l,g,y,x);w&&t.push(w)}if(this.isLineLoop){let x=h.getX(p-1),m=h.getX(f),g=ul(this,e,Lo,l,x,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){let g=ul(this,e,Lo,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=ul(this,e,Lo,l,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};Kd=new F,Zd=new F,js=class extends Js{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Kd.fromBufferAttribute(t,s),Zd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Kd.distanceTo(Zd);e.setAttribute("lineDistance",new ot(n,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Yo=class extends Js{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},eo=class extends Tn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$d=new Ge,Vh=new $s,fl=new Nn,dl=new F,Qs=class extends ut{constructor(e=new wt,t=new eo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fl.copy(n.boundingSphere),fl.applyMatrix4(s),fl.radius+=r,e.ray.intersectsSphere(fl)===!1)return;$d.copy(s).invert(),Vh.copy(e.ray).applyMatrix4($d);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,x=f;p<x;p++){let m=c.getX(p);dl.fromBufferAttribute(u,m),Jd(dl,m,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,x=f;p<x;p++)dl.fromBufferAttribute(u,p),Jd(dl,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};Ko=class extends Yt{constructor(e=[],t=ur,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Xn=class extends Yt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Qi=class extends Yt{constructor(e,t,n=vi,s,r,o,a=zt,l=zt,c,h=Ji,u=1){if(h!==Ji&&h!==os)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Zo=class extends Qi{constructor(e,t=vi,n=ur,s,r,o=zt,a=zt,l,c=Ji){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},$o=class extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},En=class i extends wt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(h,3)),this.setAttribute("uv",new ot(u,2));function p(x,m,g,y,w,M,R,A,_,E,N){let C=M/_,P=R/E,O=M/2,z=R/2,L=A/2,W=_+1,Z=E+1,q=0,ie=0,K=new F;for(let te=0;te<Z;te++){let ne=te*P-z;for(let Re=0;Re<W;Re++){let Ke=Re*C-O;K[x]=Ke*y,K[m]=ne*w,K[g]=L,c.push(K.x,K.y,K.z),K[x]=0,K[m]=0,K[g]=A>0?1:-1,h.push(K.x,K.y,K.z),u.push(Re/_),u.push(1-te/E),q+=1}}for(let te=0;te<E;te++)for(let ne=0;ne<_;ne++){let Re=d+ne+W*te,Ke=d+ne+W*(te+1),j=d+(ne+1)+W*(te+1),ve=d+(ne+1)+W*te;l.push(Re,Ke,ve),l.push(Ke,j,ve),ie+=6}a.addGroup(f,ie,N),f+=ie,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Jo=class i extends wt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+r,x=s+1,m=new F,g=new F;for(let y=0;y<=p;y++){let w=0,M=0,R=0,A=0;if(y<=n){let N=y/n,C=N*Math.PI/2;M=-h-e*Math.cos(C),R=e*Math.sin(C),A=-e*Math.cos(C),w=N*u}else if(y<=n+r){let N=(y-n)/r;M=-h+N*t,R=e,A=0,w=u+N*d}else{let N=(y-n-r)/n,C=N*Math.PI/2;M=h+e*Math.sin(C),R=e*Math.cos(C),A=e*Math.sin(C),w=u+d+N*u}let _=Math.max(0,Math.min(1,w/f)),E=0;y===0?E=.5/s:y===p&&(E=-.5/s);for(let N=0;N<=s;N++){let C=N/s,P=C*Math.PI*2,O=Math.sin(P),z=Math.cos(P);g.x=-R*z,g.y=M,g.z=R*O,a.push(g.x,g.y,g.z),m.set(-R*z,A,R*O),m.normalize(),l.push(m.x,m.y,m.z),c.push(C+E,_)}if(y>0){let N=(y-1)*x;for(let C=0;C<s;C++){let P=N+C,O=N+C+1,z=y*x+C,L=y*x+C+1;o.push(P,O,z),o.push(O,L,z)}}}this.setIndex(o),this.setAttribute("position",new ot(a,3)),this.setAttribute("normal",new ot(l,3)),this.setAttribute("uv",new ot(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Ii=class i extends wt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new F,h=new We;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ot(o,3)),this.setAttribute("normal",new ot(a,3)),this.setAttribute("uv",new ot(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Kt=class i extends wt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,x=[],m=n/2,g=0;y(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ot(u,3)),this.setAttribute("normal",new ot(d,3)),this.setAttribute("uv",new ot(f,2));function y(){let M=new F,R=new F,A=0,_=(t-e)/n;for(let E=0;E<=r;E++){let N=[],C=E/r,P=C*(t-e)+e;for(let O=0;O<=s;O++){let z=O/s,L=z*l+a,W=Math.sin(L),Z=Math.cos(L);R.x=P*W,R.y=-C*n+m,R.z=P*Z,u.push(R.x,R.y,R.z),M.set(W,_,Z).normalize(),d.push(M.x,M.y,M.z),f.push(z,1-C),N.push(p++)}x.push(N)}for(let E=0;E<s;E++)for(let N=0;N<r;N++){let C=x[N][E],P=x[N+1][E],O=x[N+1][E+1],z=x[N][E+1];(e>0||N!==0)&&(h.push(C,P,z),A+=3),(t>0||N!==r-1)&&(h.push(P,O,z),A+=3)}c.addGroup(g,A,0),g+=A}function w(M){let R=p,A=new We,_=new F,E=0,N=M===!0?e:t,C=M===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*C,0),d.push(0,C,0),f.push(.5,.5),p++;let P=p;for(let O=0;O<=s;O++){let L=O/s*l+a,W=Math.cos(L),Z=Math.sin(L);_.x=N*Z,_.y=m*C,_.z=N*W,u.push(_.x,_.y,_.z),d.push(0,C,0),A.x=W*.5+.5,A.y=Z*.5*C+.5,f.push(A.x,A.y),p++}for(let O=0;O<s;O++){let z=R+O,L=P+O;M===!0?h.push(L,L+1,z):h.push(L+1,L,z),E+=3}c.addGroup(g,E,M===!0?1:2),g+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},er=class i extends Kt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Pl=class i extends wt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new ot(r,3)),this.setAttribute("normal",new ot(r.slice(),3)),this.setAttribute("uv",new ot(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let w=new F,M=new F,R=new F;for(let A=0;A<t.length;A+=3)f(t[A+0],w),f(t[A+1],M),f(t[A+2],R),l(w,M,R,y)}function l(y,w,M,R){let A=R+1,_=[];for(let E=0;E<=A;E++){_[E]=[];let N=y.clone().lerp(M,E/A),C=w.clone().lerp(M,E/A),P=A-E;for(let O=0;O<=P;O++)O===0&&E===A?_[E][O]=N:_[E][O]=N.clone().lerp(C,O/P)}for(let E=0;E<A;E++)for(let N=0;N<2*(A-E)-1;N++){let C=Math.floor(N/2);N%2===0?(d(_[E][C+1]),d(_[E+1][C]),d(_[E][C])):(d(_[E][C+1]),d(_[E+1][C+1]),d(_[E+1][C]))}}function c(y){let w=new F;for(let M=0;M<r.length;M+=3)w.x=r[M+0],w.y=r[M+1],w.z=r[M+2],w.normalize().multiplyScalar(y),r[M+0]=w.x,r[M+1]=w.y,r[M+2]=w.z}function h(){let y=new F;for(let w=0;w<r.length;w+=3){y.x=r[w+0],y.y=r[w+1],y.z=r[w+2];let M=m(y)/2/Math.PI+.5,R=g(y)/Math.PI+.5;o.push(M,1-R)}p(),u()}function u(){for(let y=0;y<o.length;y+=6){let w=o[y+0],M=o[y+2],R=o[y+4],A=Math.max(w,M,R),_=Math.min(w,M,R);A>.9&&_<.1&&(w<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),R<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,w){let M=y*3;w.x=e[M+0],w.y=e[M+1],w.z=e[M+2]}function p(){let y=new F,w=new F,M=new F,R=new F,A=new We,_=new We,E=new We;for(let N=0,C=0;N<r.length;N+=9,C+=6){y.set(r[N+0],r[N+1],r[N+2]),w.set(r[N+3],r[N+4],r[N+5]),M.set(r[N+6],r[N+7],r[N+8]),A.set(o[C+0],o[C+1]),_.set(o[C+2],o[C+3]),E.set(o[C+4],o[C+5]),R.copy(y).add(w).add(M).divideScalar(3);let P=m(R);x(A,C+0,y,P),x(_,C+2,w,P),x(E,C+4,M,P)}}function x(y,w,M,R){R<0&&y.x===1&&(o[w]=y.x-1),M.x===0&&M.z===0&&(o[w]=R/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},wn=class i extends Pl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},tr=class i extends wt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let y=g*d-o;for(let w=0;w<c;w++){let M=w*u-r;p.push(M,-y,0),x.push(0,0,1),m.push(w/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let w=y+c*g,M=y+c*(g+1),R=y+1+c*(g+1),A=y+1+c*g;f.push(w,M,A),f.push(M,R,A)}this.setIndex(f),this.setAttribute("position",new ot(p,3)),this.setAttribute("normal",new ot(x,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},es=class i extends wt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new F,p=new We;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let g=r+m/n*o;f.x=u*Math.cos(g),f.y=u*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}u+=d}for(let x=0;x<s;x++){let m=x*(n+1);for(let g=0;g<n;g++){let y=g+m,w=y,M=y+n+1,R=y+n+2,A=y+1;a.push(w,M,A),a.push(M,R,A)}}this.setIndex(a),this.setAttribute("position",new ot(l,3)),this.setAttribute("normal",new ot(c,3)),this.setAttribute("uv",new ot(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},rn=class i extends wt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new F,d=new F,f=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){let y=[],w=g/n,M=o+w*a,R=e*Math.cos(M),A=Math.sqrt(e*e-R*R),_=0;g===0&&o===0?_=.5/t:g===n&&l===Math.PI&&(_=-.5/t);for(let E=0;E<=t;E++){let N=E/t,C=s+N*r;u.x=-A*Math.cos(C),u.y=R,u.z=A*Math.sin(C),p.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(N+_,1-w),y.push(c++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<t;y++){let w=h[g][y+1],M=h[g][y],R=h[g+1][y],A=h[g+1][y+1];(g!==0||o>0)&&f.push(w,M,A),(g!==n-1||l<Math.PI)&&f.push(M,R,A)}this.setIndex(f),this.setAttribute("position",new ot(p,3)),this.setAttribute("normal",new ot(x,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},nr=class i extends wt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new F,f=new F,p=new F;for(let x=0;x<=n;x++){let m=o+x/n*a;for(let g=0;g<=s;g++){let y=g/s*r;f.x=(e+t*Math.cos(m))*Math.cos(y),f.y=(e+t*Math.cos(m))*Math.sin(y),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),u.push(g/s),u.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){let g=(s+1)*x+m-1,y=(s+1)*(x-1)+m-1,w=(s+1)*(x-1)+m,M=(s+1)*x+m;l.push(g,y,M),l.push(y,w,M)}this.setIndex(l),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(h,3)),this.setAttribute("uv",new ot(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};Kp={clone:pr,merge:mn},Vg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ri=class extends Tn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vg,this.fragmentShader=Wg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pr(e.uniforms),this.uniformsGroups=Gg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new be().setHex(s.value);break;case"v2":this.uniforms[n].value=new We().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new yt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Xe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ge().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ll=class extends ri{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ir=class extends Tn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pa,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},An=class extends ir{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new We(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return qs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){qs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Zt=class extends Tn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pa,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=Xl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Dl=class extends Tn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Nl=class extends Tn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Pi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Fl=class extends Pi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ws,endingEnd:Ws}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Xs:r=e,a=2*t-n;break;case Uo:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Xs:o=e,l=2*n-t;break;case Uo:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),x=p*p,m=x*p,g=-d*m+2*d*x-d*p,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*p+1,w=(-1-f)*m+(1.5+f)*x+.5*p,M=f*m-f*x;for(let R=0;R!==a;++R)r[R]=g*o[h+R]+y*o[c+R]+w*o[l+R]+M*o[u+R];return r}},jo=class extends Pi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Ul=class extends Pi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ol=class extends Pi{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-t)/(s-t),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let d=a*2,f=e-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=f*d+p*2,y=u[g],w=u[g+1],M=e*d+p*2,R=h[M],A=h[M+1],_=Kg(n,t,y,R,s);r[p]=Zp(_,x,w,A,m)}return r}};Fn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Es(t,this.TimeBufferType),this.values=Es(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Es(e.times,Array),values:Es(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Do(e.settings)&&(n.settings={inTangents:Es(e.settings.inTangents,Array),outTangents:Es(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ul(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new jo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ol(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ys:t=this.InterpolantFactoryMethodDiscrete;break;case Ks:t=this.InterpolantFactoryMethodLinear;break;case gl:t=this.InterpolantFactoryMethodSmooth;break;case Gh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ie("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ys;case this.InterpolantFactoryMethodLinear:return Ks;case this.InterpolantFactoryMethodSmooth:return gl;case this.InterpolantFactoryMethodBezier:return Gh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Do(this.settings)&&(ep(this.settings.inTangents,e),ep(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Do(this.settings)&&(tp(this.settings.inTangents,e),tp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(He("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(He("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){He("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){He("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&rg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){He("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===gl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let x=t[u+p];if(x!==t[d+p]||x!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Do(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};Fn.prototype.ValueTypeName="";Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=Ks;ts=class extends Fn{constructor(e,t,n){super(e,t,n)}};ts.prototype.ValueTypeName="bool";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Ys;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;Qo=class extends Fn{constructor(e,t,n,s){super(e,t,n,s)}};Qo.prototype.ValueTypeName="color";ns=class extends Fn{constructor(e,t,n,s){super(e,t,n,s)}};ns.prototype.ValueTypeName="number";Bl=class extends Pi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)sn.slerpFlat(r,0,o,c-a,o,c,l);return r}},is=class extends Fn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Bl(this.times,this.values,this.getValueSize(),e)}};is.prototype.ValueTypeName="quaternion";is.prototype.InterpolantFactoryMethodSmooth=void 0;ss=class extends Fn{constructor(e,t,n){super(e,t,n)}};ss.prototype.ValueTypeName="string";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=Ys;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;Is=class extends Fn{constructor(e,t,n,s){super(e,t,n,s)}};Is.prototype.ValueTypeName="vector";sr=class{constructor(e="",t=-1,n=[],s=Lc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Fi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push($g(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Fn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=Xg(l);l=Qd(l,1,h),c=Qd(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ns(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};Ci={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(np(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!np(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};zl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},$p=new zl,Li=class{constructor(e){this.manager=e!==void 0?e:$p,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Li.DEFAULT_MATERIAL_NAME="__DEFAULT";Zi={},Wh=class extends Error{constructor(e,t){super(e),this.response=t}},to=class extends Li{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ci.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Zi[e]!==void 0){Zi[e].push({onLoad:t,onProgress:n,onError:s});return}Zi[e]=[],Zi[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ie("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Zi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,x=0,m=new ReadableStream({start(g){y();function y(){u.read().then(({done:w,value:M})=>{if(w)g.close();else{x+=M.byteLength;let R=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let A=0,_=h.length;A<_;A++){let E=h[A];E.onProgress&&E.onProgress(R)}g.enqueue(M),y()}},w=>{g.error(w)})}}});return new Response(m)}else throw new Wh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Ci.add(`file:${e}`,c);let h=Zi[e];delete Zi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Zi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Zi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},zr=new WeakMap,kl=class extends Li{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ci.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=zr.get(o);u===void 0&&(u=[],zr.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=qr("img");function l(){h(),t&&t(this);let u=zr.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}zr.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Ci.remove(`image:${e}`);let d=zr.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(u)}zr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ci.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}},ea=class extends Li{constructor(e){super(e)}load(e,t,n,s){let r=new Yt,o=new kl(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},rr=class extends ut{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ta=class extends rr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},zh=new Ge,ip=new F,sp=new F,no=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rs,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ip.setFromMatrixPosition(e.matrixWorld),t.position.copy(ip),sp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){zh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(zh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Xr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(zh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},pl=new F,ml=new sn,Ri=new F,na=class extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(pl,ml,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pl,ml,Ri.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(pl,ml,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pl,ml,Ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ts=new F,rp=new We,op=new We,Xt=class extends na{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(No*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(No*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ts.x,Ts.y).multiplyScalar(-e/Ts.z),Ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ts.x,Ts.y).multiplyScalar(-e/Ts.z)}getViewSize(e,t){return this.getViewBounds(e,rp,op),t.subVectors(op,rp)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(No*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Xh=class extends no{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Zs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ia=class extends rr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Xh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},qh=class extends no{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0}},or=class extends rr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new qh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ar=class extends na{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Yh=class extends no{constructor(){super(new ar(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},lr=class extends rr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new Yh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},rs=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},kh=new WeakMap,sa=class extends Li{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ie("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ie("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ci.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{kh.has(o)===!0?(s&&s(kh.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ci.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),kh.set(l,c),Ci.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ci.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},kr=-90,Hr=1,io=class extends ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xt(kr,Hr,e,t);s.layers=this.layers,this.add(s);let r=new Xt(kr,Hr,e,t);r.layers=this.layers,this.add(r);let o=new Xt(kr,Hr,e,t);o.layers=this.layers,this.add(o);let a=new Xt(kr,Hr,e,t);a.layers=this.layers,this.add(a);let l=new Xt(kr,Hr,e,t);l.layers=this.layers,this.add(l);let c=new Xt(kr,Hr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ii)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Hl=class extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Gl=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){sn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;sn.multiplyQuaternionsFlat(e,o,e,t,e,n),sn.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*s}}},Au="\\[\\]\\.:\\/",Jg=new RegExp("["+Au+"]","g"),Ru="[^"+Au+"]",jg="[^"+Au.replace("\\.","")+"]",Qg=/((?:WC+[\/:])*)/.source.replace("WC",Ru),ex=/(WCOD+)?/.source.replace("WCOD",jg),tx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ru),nx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ru),ix=new RegExp("^"+Qg+ex+tx+nx+"$"),sx=["material","materials","bones","map"],Kh=class{constructor(e,t,n){let s=n||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},vt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Jg,"")}static parseTrackName(e){let t=ix.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);sx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){He("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){He("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){He("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){He("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){He("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;He("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};vt.Composite=Kh;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Vl=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Ws,endingEnd:Ws};for(let c=0;c!==o;++c){let h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Lp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Np:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Lc:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===Dp;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===Pp){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=Xs,s.endingEnd=Xs):(e?s.endingStart=this.zeroSlopeAtStart?Xs:Ws:s.endingStart=Uo,t?s.endingEnd=this.zeroSlopeAtEnd?Xs:Ws:s.endingEnd=Uo)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},rx=new Float32Array(1),ra=class extends yi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let d=s[u],f=d.name,p=h[f];if(p!==void 0)++p.referenceCount,o[u]=p;else{if(p=o[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}let x=t&&t._propertyBindings[u].binding.parsedPath;p=new Gl(vt.create(n,f,x),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),o[u]=p}a[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new jo(new Float32Array(2),new Float32Array(2),1,rx),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?sr.findByName(s,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Lc),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new Vl(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?sr.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},Nu=class Nu{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Nu.prototype.isMatrix2=!0;Zh=Nu;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187")});function _m(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function lx(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],x=u[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}function Vy(i,e,t,n,s,r){let o=new be(0),a=s===!0?0:1,l,c,h=null,u=0,d=null;function f(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){let M=y.backgroundBlurriness>0;w=e.get(w,M)}return w}function p(y){let w=!1,M=f(y);M===null?m(o,a):M&&M.isColor&&(m(M,1),w=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,w){let M=f(w);M&&M.isCubeTexture?(c===void 0&&(c=new Oe(new En(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:pr(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,A,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Gy.makeRotationFromEuler(w.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ym),c.material.toneMapped=et.getTransfer(M.colorSpace)!==dt,(h!==M||u!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Oe(new tr(2,2),new ri({name:"BackgroundMaterial",uniforms:pr(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=et.getTransfer(M.colorSpace)!==dt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,w){y.getRGB(Fc,wu(i)),t.buffers.color.setClear(Fc.r,Fc.g,Fc.b,w,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,w=1){o.set(y),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:x,dispose:g}}function Wy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(P,O,z,L,W){let Z=!1,q=u(P,L,z,O);r!==q&&(r=q,c(r.object)),Z=f(P,L,z,W),Z&&p(P,L,z,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,M(P,O,z,L),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function u(P,O,z,L){let W=L.wireframe===!0,Z=n[O.id];Z===void 0&&(Z={},n[O.id]=Z);let q=P.isInstancedMesh===!0?P.id:0,ie=Z[q];ie===void 0&&(ie={},Z[q]=ie);let K=ie[z.id];K===void 0&&(K={},ie[z.id]=K);let te=K[W];return te===void 0&&(te=d(l()),K[W]=te),te}function d(P){let O=[],z=[],L=[];for(let W=0;W<t;W++)O[W]=0,z[W]=0,L[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:z,attributeDivisors:L,object:P,attributes:{},index:null}}function f(P,O,z,L){let W=r.attributes,Z=O.attributes,q=0,ie=z.getAttributes();for(let K in ie)if(ie[K].location>=0){let ne=W[K],Re=Z[K];if(Re===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(Re=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(Re=P.instanceColor)),ne===void 0||ne.attribute!==Re||Re&&ne.data!==Re.data)return!0;q++}return r.attributesNum!==q||r.index!==L}function p(P,O,z,L){let W={},Z=O.attributes,q=0,ie=z.getAttributes();for(let K in ie)if(ie[K].location>=0){let ne=Z[K];ne===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor));let Re={};Re.attribute=ne,ne&&ne.data&&(Re.data=ne.data),W[K]=Re,q++}r.attributes=W,r.attributesNum=q,r.index=L}function x(){let P=r.newAttributes;for(let O=0,z=P.length;O<z;O++)P[O]=0}function m(P){g(P,0)}function g(P,O){let z=r.newAttributes,L=r.enabledAttributes,W=r.attributeDivisors;z[P]=1,L[P]===0&&(i.enableVertexAttribArray(P),L[P]=1),W[P]!==O&&(i.vertexAttribDivisor(P,O),W[P]=O)}function y(){let P=r.newAttributes,O=r.enabledAttributes;for(let z=0,L=O.length;z<L;z++)O[z]!==P[z]&&(i.disableVertexAttribArray(z),O[z]=0)}function w(P,O,z,L,W,Z,q){q===!0?i.vertexAttribIPointer(P,O,z,W,Z):i.vertexAttribPointer(P,O,z,L,W,Z)}function M(P,O,z,L){x();let W=L.attributes,Z=z.getAttributes(),q=O.defaultAttributeValues;for(let ie in Z){let K=Z[ie];if(K.location>=0){let te=W[ie];if(te===void 0&&(ie==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),ie==="instanceColor"&&P.instanceColor&&(te=P.instanceColor)),te!==void 0){let ne=te.normalized,Re=te.itemSize,Ke=e.get(te);if(Ke===void 0)continue;let j=Ke.buffer,ve=Ke.type,Ee=Ke.bytesPerElement,Fe=ve===i.INT||ve===i.UNSIGNED_INT||te.gpuType===Zl;if(te.isInterleavedBufferAttribute){let Me=te.data,$e=Me.isInterleavedBuffer===!0?Me.stride:Me.itemSize,kt=te.offset;if(Me.isInstancedInterleavedBuffer||Me.isInstancedBufferAttribute){for(let ze=0;ze<K.locationSize;ze++)g(K.location+ze,Me.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let ze=0;ze<K.locationSize;ze++)m(K.location+ze);i.bindBuffer(i.ARRAY_BUFFER,j);for(let ze=0;ze<K.locationSize;ze++)w(K.location+ze,Re/K.locationSize,ve,ne,$e*Ee,(kt+Re/K.locationSize*ze)*Ee,Fe)}else{if(te.isInstancedBufferAttribute){for(let Me=0;Me<K.locationSize;Me++)g(K.location+Me,te.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Me=0;Me<K.locationSize;Me++)m(K.location+Me);i.bindBuffer(i.ARRAY_BUFFER,j);for(let Me=0;Me<K.locationSize;Me++)w(K.location+Me,Re/K.locationSize,ve,ne,Re*Ee,Re/K.locationSize*Me*Ee,Fe)}}else if(q!==void 0){let ne=q[ie];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(K.location,ne);break;case 3:i.vertexAttrib3fv(K.location,ne);break;case 4:i.vertexAttrib4fv(K.location,ne);break;default:i.vertexAttrib1fv(K.location,ne)}}}}y()}function R(){N();for(let P in n){let O=n[P];for(let z in O){let L=O[z];for(let W in L){let Z=L[W];for(let q in Z)h(Z[q].object),delete Z[q];delete L[W]}}delete n[P]}}function A(P){if(n[P.id]===void 0)return;let O=n[P.id];for(let z in O){let L=O[z];for(let W in L){let Z=L[W];for(let q in Z)h(Z[q].object),delete Z[q];delete L[W]}}delete n[P.id]}function _(P){for(let O in n){let z=n[O];for(let L in z){let W=z[L];if(W[P.id]===void 0)continue;let Z=W[P.id];for(let q in Z)h(Z[q].object),delete Z[q];delete W[P.id]}}}function E(P){for(let O in n){let z=n[O],L=P.isInstancedMesh===!0?P.id:0,W=z[L];if(W!==void 0){for(let Z in W){let q=W[Z];for(let ie in q)h(q[ie].object),delete q[ie];delete W[Z]}delete z[L],Object.keys(z).length===0&&delete n[O]}}}function N(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:C,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfObject:E,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function Xy(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function qy(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==ai&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let E=_===Mi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Un&&_!==qn&&!E&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ie("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Ie("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:M,maxSamples:R,samples:A}}function Yy(i){let e=this,t=null,n=0,s=!1,r=!1,o=new pn,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,w=y*4,M=g.clippingState||null;l.value=M,M=h(p,d,w,f);for(let R=0;R!==w;++R)M[R]=t[R];g.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=f+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let w=0,M=f;w!==x;++w,M+=4)o.copy(u[w]).applyMatrix4(y,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function jp(i,e,t){return new xa(i,{minFilter:oi,generateMipmaps:e,type:Mi,colorSpace:Sn,depthBuffer:t})}function _a(i,e,t){return new ri({name:i,uniforms:e,vertexShader:Qe.cube_vert,fragmentShader:t,side:ln,blending:cr,depthTest:!1,depthWrite:!1})}function Qy(){return _a("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${vm}u

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
	`)}function ev(){return _a("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Mm}},`

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
	`)}function tv(){return _a("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Zy}
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
	`)}function Qp(){return _a("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function em(){return _a("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function nv(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===ql||f===Yl)if(e.has(d)){let p=e.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new xa(p.height);return x.fromEquirectangularTexture(i,d),e.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===ql||f===Yl,x=f===ur||f===oo;if(p||x){let m=t.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new Oc(i)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let y=d.image;return p&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new Oc(i)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===ql?d.mapping=ur:f===Yl&&(d.mapping=oo),d}function l(d){let f=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function iv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&qs("WebGLRenderer: "+n+" extension not supported."),s}}}function sv(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let x=r.get(p);x&&(e.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function h(p){let x=p.attributes;for(let m in x)e.update(x[m],i.ARRAY_BUFFER)}function u(p){let x=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let y=x!==null?x.array.length:m.array.length/3-1,w=m.count>=65535?Wo:Vo,M=new w(Math.ceil(y/3)*6,1),R=M.array;if(x!==null){let _=x.array;g=x.version;for(let E=0,N=0;E<y;E+=3){let C=_[E+0],P=_[E+1],O=_[E+2];R[N++]=C,R[N++]=P,R[N++]=P,R[N++]=O,R[N++]=O,R[N++]=C}}else{g=m.version;for(let _=0,E=0;_<y;_+=3){let N=_+0,C=_+1,P=_+2;R[E++]=N,R[E++]=C,R[E++]=C,R[E++]=P,R[E++]=P,R[E++]=N}}M.version=g;let A=r.get(p);A&&e.remove(A),r.set(p,M)}function d(p){let x=r.get(p);if(x){let m=p.index;m!==null&&x.version<m.version&&u(p)}else u(p);return r.get(p)}function f(){for(let p in s){let x=s[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function rv(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*o),t.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let x=0;for(let m=0;m<f;m++)x+=d[m];t.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function ov(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:He("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function av(i,e,t){let n=new WeakMap,s=new yt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let N=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",N)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],w=0;f===!0&&(w=1),p===!0&&(w=2),x===!0&&(w=3);let M=a.attributes.position.count*w,R=1;M>e.maxTextureSize&&(R=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let A=new Float32Array(M*R*4*u),_=new zo(A,M,R,u);_.type=qn,_.needsUpdate=!0;let E=w*4;for(let C=0;C<u;C++){let P=m[C],O=g[C],z=y[C],L=M*R*4*C;for(let W=0;W<P.count;W++){let Z=W*E;f===!0&&(s.fromBufferAttribute(P,W),A[L+Z+0]=s.x,A[L+Z+1]=s.y,A[L+Z+2]=s.z,A[L+Z+3]=0),p===!0&&(s.fromBufferAttribute(O,W),A[L+Z+4]=s.x,A[L+Z+5]=s.y,A[L+Z+6]=s.z,A[L+Z+7]=0),x===!0&&(s.fromBufferAttribute(z,W),A[L+Z+8]=s.x,A[L+Z+9]=s.y,A[L+Z+10]=s.z,A[L+Z+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:_,size:new We(M,R)},n.set(a,d),a.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function lv(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}function hv(i,e,t,n,s,r){let o=new Vn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new wt;h.setAttribute("position",new ot([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ot([0,2,0,0,2,0],2));let u=new Ll({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Oe(h,u),f=new ar(-1,1,1,-1,0,1),p=null,x=null,m=!1,g,y=null,w=[],M=!1;this.setSize=function(R,A){o.setSize(R,A),a!==null&&a.setSize(R,A),l!==null&&l.setSize(R,A);for(let _=0;_<w.length;_++){let E=w[_];E.setSize&&E.setSize(R,A)}},this.setEffects=function(R){w=R,M=w.length>0&&w[0].isRenderPass===!0;let A=o.width,_=o.height;w.length>0&&a===null&&(a=new Vn(A,_,{type:Mi,depthBuffer:!1,stencilBuffer:!1}),l=new Vn(A,_,{type:Mi,depthBuffer:!1,stencilBuffer:!1}));let E=s===!0&&w.some(N=>N.needsDepthTexture===!0);E!==(o.depthTexture!==null)&&(E===!0&&c===null&&(c=new Qi(A,_),r===!0&&(c.format=os,c.type=dr)),o.dispose(),o.depthTexture=E?c:null,o.resolveDepthBuffer=E,o.storeMultisampledDepthBuffer=E);for(let N=0;N<w.length;N++){let C=w[N];C.setSize&&C.setSize(A,_),E&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(R,A){if(m||R.toneMapping===Ni&&w.length===0)return!1;if(y=A,A!==null){let _=A.width,E=A.height;(o.width!==_||o.height!==E)&&this.setSize(_,E)}return M===!1&&R.setRenderTarget(o),g=R.toneMapping,R.toneMapping=Ni,!0},this.hasRenderPass=function(){return M},this.end=function(R,A){R.toneMapping=g,m=!0;let _=o,E=a;for(let N=0;N<w.length;N++){let C=w[N];C.enabled!==!1&&(C.render(R,E,_,A),C.needsSwap!==!1&&(_=E,E=E===a?l:a))}if(p!==R.outputColorSpace||x!==R.toneMapping){p=R.outputColorSpace,x=R.toneMapping,u.defines={},et.getTransfer(p)===dt&&(u.defines.SRGB_TRANSFER="");let N=cv[x];N&&(u.defines[N]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,R.setRenderTarget(y),R.render(d,f),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}function uo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=tm[s];if(r===void 0&&(r=new Float32Array(s),tm[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function $t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Jt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function zc(i,e){let t=nm[e];t===void 0&&(t=new Int32Array(e),nm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function uv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function fv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2fv(this.addr,e),Jt(t,e)}}function dv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;i.uniform3fv(this.addr,e),Jt(t,e)}}function pv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4fv(this.addr,e),Jt(t,e)}}function mv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if($t(t,n))return;rm.set(n),i.uniformMatrix2fv(this.addr,!1,rm),Jt(t,n)}}function gv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if($t(t,n))return;sm.set(n),i.uniformMatrix3fv(this.addr,!1,sm),Jt(t,n)}}function xv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if($t(t,n))return;im.set(n),i.uniformMatrix4fv(this.addr,!1,im),Jt(t,n)}}function _v(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function yv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2iv(this.addr,e),Jt(t,e)}}function vv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3iv(this.addr,e),Jt(t,e)}}function Mv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4iv(this.addr,e),Jt(t,e)}}function Sv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function bv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2uiv(this.addr,e),Jt(t,e)}}function Tv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3uiv(this.addr,e),Jt(t,e)}}function Ev(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4uiv(this.addr,e),Jt(t,e)}}function kc(i){return i.version===0&&(i.compareFunction=yu,i.needsUpdate=!0),i}function wv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=kc(bm):r=Sm,t.setTexture2D(e||r,s)}function Av(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||wm,s)}function Rv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=kc(Tm):r=Am,t.setTextureCube(e||r,s)}function Cv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Em,s)}function Iv(i){switch(i){case 5126:return uv;case 35664:return fv;case 35665:return dv;case 35666:return pv;case 35674:return mv;case 35675:return gv;case 35676:return xv;case 5124:case 35670:return _v;case 35667:case 35671:return yv;case 35668:case 35672:return vv;case 35669:case 35673:return Mv;case 5125:return Sv;case 36294:return bv;case 36295:return Tv;case 36296:return Ev;case 35678:case 36198:case 36298:case 36306:case 35682:return wv;case 35679:case 36299:case 36307:return Av;case 35680:case 36300:case 36308:case 36293:return Rv;case 36289:case 36303:case 36311:case 36292:return Cv}}function Pv(i,e){i.uniform1fv(this.addr,e)}function Lv(i,e){let t=uo(e,this.size,2);i.uniform2fv(this.addr,t)}function Dv(i,e){let t=uo(e,this.size,3);i.uniform3fv(this.addr,t)}function Nv(i,e){let t=uo(e,this.size,4);i.uniform4fv(this.addr,t)}function Fv(i,e){let t=uo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Uv(i,e){let t=uo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ov(i,e){let t=uo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Bv(i,e){i.uniform1iv(this.addr,e)}function zv(i,e){i.uniform2iv(this.addr,e)}function kv(i,e){i.uniform3iv(this.addr,e)}function Hv(i,e){i.uniform4iv(this.addr,e)}function Gv(i,e){i.uniform1uiv(this.addr,e)}function Vv(i,e){i.uniform2uiv(this.addr,e)}function Wv(i,e){i.uniform3uiv(this.addr,e)}function Xv(i,e){i.uniform4uiv(this.addr,e)}function qv(i,e,t){let n=this.cache,s=e.length,r=zc(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=kc(bm):o=Sm;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Yv(i,e,t){let n=this.cache,s=e.length,r=zc(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||wm,r[o])}function Kv(i,e,t){let n=this.cache,s=e.length,r=zc(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=kc(Tm):o=Am;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function Zv(i,e,t){let n=this.cache,s=e.length,r=zc(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Em,r[o])}function $v(i){switch(i){case 5126:return Pv;case 35664:return Lv;case 35665:return Dv;case 35666:return Nv;case 35674:return Fv;case 35675:return Uv;case 35676:return Ov;case 5124:case 35670:return Bv;case 35667:case 35671:return zv;case 35668:case 35672:return kv;case 35669:case 35673:return Hv;case 5125:return Gv;case 36294:return Vv;case 36295:return Wv;case 36296:return Xv;case 35678:case 36198:case 36298:case 36306:case 35682:return qv;case 35679:case 36299:case 36307:return Yv;case 35680:case 36300:case 36308:case 36293:return Kv;case 36289:case 36303:case 36311:case 36292:return Zv}}function om(i,e){i.seq.push(e),i.map[e.id]=e}function Jv(i,e,t){let n=i.name,s=n.length;for(Uu.lastIndex=0;;){let r=Uu.exec(n),o=Uu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){om(t,c===void 0?new Bu(a,i,e):new zu(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new ku(a),om(t,u)),t=u}}}function am(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function eM(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function tM(i){et._getMatrix(lm,et.workingColorSpace,i);let e=`mat3( ${lm.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case Oo:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function cm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+eM(i.getShaderSource(e),a)}else return r}function nM(i,e){let t=tM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function sM(i,e){let t=iM[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function rM(){et.getLuminanceCoefficients(Uc);let i=Uc.x.toFixed(4),e=Uc.y.toFixed(4),t=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ga).join(`
`)}function aM(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function lM(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ga(i){return i!==""}function hm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function um(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Hu(i){return i.replace(cM,hM)}function hM(i,e){let t=Qe[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Hu(t)}function fm(i){return i.replace(uM,fM)}function fM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dm(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function pM(i){return dM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function gM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":mM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}function _M(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":xM[i.combine]||"ENVMAP_BLENDING_NONE"}function yM(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=pM(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=gM(t),u=_M(t),d=oM(t),f=aM(r),p=s.createProgram(),x,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ga).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ga).join(`
`),m.length>0&&(m+=`
`)):(x=[dm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ga).join(`
`),m=[dm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ni?"#define TONE_MAPPING":"",t.toneMapping!==Ni?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Ni?sM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,nM("linearToOutputTexel",t.outputColorSpace),rM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ga).join(`
`)),o=Hu(o),o=hm(o,t),o=um(o,t),a=Hu(a),a=hm(a,t),a=um(a,t),o=fm(o),a=fm(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===Mu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=g+x+o,w=g+m+a,M=am(s,s.VERTEX_SHADER,y),R=am(s,s.FRAGMENT_SHADER,w);s.attachShader(p,M),s.attachShader(p,R),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function A(C){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(p)||"",O=s.getShaderInfoLog(M)||"",z=s.getShaderInfoLog(R)||"",L=P.trim(),W=O.trim(),Z=z.trim(),q=!0,ie=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,M,R);else{let K=cm(s,M,"vertex"),te=cm(s,R,"fragment");He("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+K+`
`+te)}else L!==""?Ie("WebGLProgram: Program Info Log:",L):(W===""||Z==="")&&(ie=!1);ie&&(C.diagnostics={runnable:q,programLog:L,vertexShader:{log:W,prefix:x},fragmentShader:{log:Z,prefix:m}})}s.deleteShader(M),s.deleteShader(R),_=new ho(s,p),E=lM(s,p)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(p,jv)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qv++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=R,this}function MM(i){return i===Ps||i===ua||i===fa}function SM(i,e,t,n,s,r){let o=new ko,a=new Gu,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,E,N,C,P,O){let z=C.fog,L=P.geometry,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,Z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,q=e.get(_.envMap||W,Z),ie=d[_.type],K=n.precision;_.precision!==null&&(K=n.getMaxPrecision(_.precision),K!==_.precision&&Ie("WebGLProgram.getParameters:",_.precision,"not supported, using",K,"instead."));let te=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ne=te!==void 0?te.length:0,Re=0;L.morphAttributes.position!==void 0&&(Re=1),L.morphAttributes.normal!==void 0&&(Re=2),L.morphAttributes.color!==void 0&&(Re=3);let Ke,j,ve,Ee;if(ie){let _e=Oi[ie];Ke=_e.vertexShader,j=_e.fragmentShader}else{Ke=_.vertexShader,j=_.fragmentShader;let _e=a.getVertexShaderStage(_),_t=a.getFragmentShaderStage(_);a.update(_,_e,_t),ve=_e.id,Ee=_t.id}let Fe=i.getRenderTarget(),Me=i.state.buffers.depth.getReversed(),$e=P.isInstancedMesh===!0,kt=P.isBatchedMesh===!0,ze=!!_.map,xt=!!_.matcap,bt=!!q,it=bt&&q.isPMREMTexture===!0,on=!!_.aoMap,Vt=!!_.lightMap,Ln=!!_.bumpMap&&_.wireframe===!1,Ft=!!_.normalMap,Ai=!!_.displacementMap,Qt=!!_.emissiveMap,Jn=!!_.metalnessMap,jn=!!_.roughnessMap,Qn=_.anisotropy>0,B=_.clearcoat>0,ei=_.diffuseRoughness>0,Lt=_.dispersion>0,Dt=_.retroreflectivity>0,ge=_.iridescence>0,Wt=_.sheen>0,Ue=_.transmission>0,qe=Qn&&!!_.anisotropyMap,I=B&&!!_.clearcoatMap,S=B&&!!_.clearcoatNormalMap,H=B&&!!_.clearcoatRoughnessMap,se=ei&&!!_.diffuseRoughnessMap,ee=ge&&!!_.iridescenceMap,le=ge&&!!_.iridescenceThicknessMap,pe=Wt&&!!_.sheenColorMap,$=Wt&&!!_.sheenRoughnessMap,J=!!_.specularMap,ue=!!_.specularColorMap,D=!!_.specularIntensityMap,Q=Ue&&!!_.transmissionMap,Y=Ue&&!!_.thicknessMap,fe=!!_.gradientMap,ae=!!_.alphaMap,ce=_.alphaTest>0,Pe=!!_.alphaHash,je=!!_.extensions,re=Ni;_.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(re=i.toneMapping);let De=it?q.isCompressedCubeTexture?q.image[0].mipmaps:q.mipmaps:null,Je={shaderID:ie,shaderType:_.type,shaderName:_.name,vertexShader:Ke,fragmentShader:j,defines:_.defines,customVertexShaderID:ve,customFragmentShaderID:Ee,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:K,batching:kt,batchingColor:kt&&P._colorsTexture!==null,instancing:$e,instancingColor:$e&&P.instanceColor!==null,instancingMorph:$e&&P.morphTexture!==null,outputColorSpace:Fe===null?i.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ze,matcap:xt,envMap:bt,envMapMode:bt&&q.mapping,envMapPMREM:it,envMapMaxLod:it?De.length-1:null,envMapSize:it?De[0].width:null,aoMap:on,lightMap:Vt,bumpMap:Ln,normalMap:Ft,displacementMap:Ai,emissiveMap:Qt,normalMapObjectSpace:Ft&&_.normalMapType===Up,normalMapTangentSpace:Ft&&_.normalMapType===pa,packedNormalMap:Ft&&_.normalMapType===pa&&MM(_.normalMap.format),metalnessMap:Jn,roughnessMap:jn,anisotropy:Qn,anisotropyMap:qe,clearcoat:B,clearcoatMap:I,clearcoatNormalMap:S,clearcoatRoughnessMap:H,diffuseRoughness:ei,diffuseRoughnessMap:se,dispersion:Lt,retroreflection:Dt,iridescence:ge,iridescenceMap:ee,iridescenceThicknessMap:le,sheen:Wt,sheenColorMap:pe,sheenRoughnessMap:$,specularMap:J,specularColorMap:ue,specularIntensityMap:D,transmission:Ue,transmissionMap:Q,thicknessMap:Y,gradientMap:fe,opaque:_.transparent===!1&&_.blending===ro&&_.alphaToCoverage===!1,alphaMap:ae,alphaTest:ce,alphaHash:Pe,combine:_.combine,mapUv:ze&&f(_.map.channel),aoMapUv:on&&f(_.aoMap.channel),lightMapUv:Vt&&f(_.lightMap.channel),bumpMapUv:Ln&&f(_.bumpMap.channel),normalMapUv:Ft&&f(_.normalMap.channel),displacementMapUv:Ai&&f(_.displacementMap.channel),emissiveMapUv:Qt&&f(_.emissiveMap.channel),metalnessMapUv:Jn&&f(_.metalnessMap.channel),roughnessMapUv:jn&&f(_.roughnessMap.channel),anisotropyMapUv:qe&&f(_.anisotropyMap.channel),clearcoatMapUv:I&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:S&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:ee&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:le&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:$&&f(_.sheenRoughnessMap.channel),specularMapUv:J&&f(_.specularMap.channel),specularColorMapUv:ue&&f(_.specularColorMap.channel),specularIntensityMapUv:D&&f(_.specularIntensityMap.channel),transmissionMapUv:Q&&f(_.transmissionMap.channel),thicknessMapUv:Y&&f(_.thicknessMap.channel),alphaMapUv:ae&&f(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Ft||Qn),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!L.attributes.uv&&(ze||ae),fog:!!z,useFog:_.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&Ft===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Me,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:Re,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:O.filter(_e=>_e.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:re,decodeVideoTexture:ze&&_.map.isVideoTexture===!0&&et.getTransfer(_.map.colorSpace)===dt,decodeVideoTextureEmissive:Qt&&_.emissiveMap.isVideoTexture===!0&&et.getTransfer(_.emissiveMap.colorSpace)===dt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Pt,flipSided:_.side===ln,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:je&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&_.extensions.multiDraw===!0||kt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Je.vertexUv1s=l.has(1),Je.vertexUv2s=l.has(2),Je.vertexUv3s=l.has(3),l.clear(),Je}function x(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let N in _.defines)E.push(N),E.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(m(E,_),g(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function m(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapPMREM),_.push(E.envMapMaxLod),_.push(E.envMapSize),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.diffuseRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.numLightProbeGrids),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function g(_,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.diffuseRoughness&&o.enable(25),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function y(_){let E=d[_.type],N;if(E){let C=Oi[E];N=Kp.clone(C.uniforms)}else N=_.uniforms;return N}function w(_,E){let N=h.get(E);return N!==void 0?++N.usedTimes:(N=new yM(i,E,_,s),c.push(N),h.set(E,N)),N}function M(_){if(--_.usedTimes===0){let E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function R(_){a.remove(_)}function A(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:y,acquireProgram:w,releaseProgram:M,releaseShaderCache:R,programs:c,dispose:A}}function bM(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function TM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function pm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function mm(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,x,m,g){let y=i[e];return y===void 0?(y={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:g},i[e]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=p,y.materialVariant=o(d),y.groupOrder=x,y.renderOrder=d.renderOrder,y.z=m,y.group=g),e++,y}function l(d,f,p,x,m,g,y){y.reversedDepth===!0&&(m=-m);let w=a(d,f,p,x,m,g);p.transmission>0?n.push(w):p.transparent===!0?s.push(w):t.push(w)}function c(d,f,p,x,m,g){let y=a(d,f,p,x,m,g);p.transmission>0?n.unshift(y):p.transparent===!0?s.unshift(y):t.unshift(y)}function h(d,f){t.length>1&&t.sort(d||TM),n.length>1&&n.sort(f||pm),s.length>1&&s.sort(f||pm)}function u(){for(let d=e,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function EM(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new mm,i.set(n,[o])):s>=r.length?(o=new mm,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function wM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new be};break;case"SpotLight":t={position:new F,direction:new F,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function AM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function CM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function IM(i){let e=new wM,t=AM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let s=new F,r=new Ge,o=new Ge;function a(c){let h=0,u=0,d=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,y=0,w=0,M=0,R=0,A=0,_=0,E=0,N=0,C=0;c.sort(CM);for(let O=0,z=c.length;O<z;O++){let L=c[O],W=L.color,Z=L.intensity,q=L.distance,ie=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ps?ie=L.shadow.map.texture:ie=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=W.r*Z,u+=W.g*Z,d+=W.b*Z;else if(L.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(L.sh.coefficients[K],Z);C++}else if(L.isSunLight){let K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let te=L.shadow,ne=t.get(L);ne.shadowIntensity=te.intensity,ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),n.sunShadow[p]=ne,n.sunShadowMap[p]=ie;let Re=te.getViewportCount();for(let Ke=0;Ke<Re;Ke++)n.sunShadowMatrix[x+Ke]=te.getMatrix(Ke),n.sunShadowCascade[x+Ke]=te._cascadeData[Ke];x+=Re,p++}n.sun[f]=K,f++}else if(L.isDirectionalLight){let K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let te=L.shadow,ne=t.get(L);ne.shadowIntensity=te.intensity,ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize=te.mapSize,n.directionalShadow[m]=ne,n.directionalShadowMap[m]=ie,n.directionalShadowMatrix[m]=L.shadow.matrix,R++}n.directional[m]=K,m++}else if(L.isSpotLight){let K=e.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(W).multiplyScalar(Z),K.distance=q,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,n.spot[y]=K;let te=L.shadow;if(L.map&&(n.spotLightMap[E]=L.map,E++,te.updateMatrices(L),L.castShadow&&N++),n.spotLightMatrix[y]=te.matrix,L.castShadow){let ne=t.get(L);ne.shadowIntensity=te.intensity,ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize=te.mapSize,n.spotShadow[y]=ne,n.spotShadowMap[y]=ie,_++}y++}else if(L.isRectAreaLight){let K=e.get(L);K.color.copy(W).multiplyScalar(Z),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),n.rectArea[w]=K,w++}else if(L.isPointLight){let K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),K.distance=L.distance,K.decay=L.decay,L.castShadow){let te=L.shadow,ne=t.get(L);ne.shadowIntensity=te.intensity,ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize=te.mapSize,ne.shadowCameraNear=te.camera.near,ne.shadowCameraFar=te.camera.far,n.pointShadow[g]=ne,n.pointShadowMap[g]=ie,n.pointShadowMatrix[g]=L.shadow.matrix,A++}n.point[g]=K,g++}else if(L.isHemisphereLight){let K=e.get(L);K.skyColor.copy(L.color).multiplyScalar(Z),K.groundColor.copy(L.groundColor).multiplyScalar(Z),n.hemi[M]=K,M++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.sunLength!==f||P.directionalLength!==m||P.pointLength!==g||P.spotLength!==y||P.rectAreaLength!==w||P.hemiLength!==M||P.numSunShadows!==p||P.numDirectionalShadows!==R||P.numPointShadows!==A||P.numSpotShadows!==_||P.numSpotMaps!==E||P.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=y,n.rectArea.length=w,n.point.length=g,n.hemi.length=M,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+E-N,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=C,P.sunLength=f,P.directionalLength=m,P.pointLength=g,P.spotLength=y,P.rectAreaLength=w,P.hemiLength=M,P.numSunShadows=p,P.numDirectionalShadows=R,P.numPointShadows=A,P.numSpotShadows=_,P.numSpotMaps=E,P.numLightProbes=C,n.version=RM++)}function l(c,h){let u=0,d=0,f=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let y=0,w=c.length;y<w;y++){let M=c[y];if(M.isSunLight){let R=n.sun[u];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(g),u++}else if(M.isDirectionalLight){let R=n.directional[d];R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(g),d++}else if(M.isSpotLight){let R=n.spot[p];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(g),R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(g),p++}else if(M.isRectAreaLight){let R=n.rectArea[x];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){let R=n.point[f];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){let R=n.hemi[m];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function gm(i){let e=new IM(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):t.push(u)}function a(u){n.push(u)}function l(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function PM(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new gm(i),e.set(s,[a])):r>=o.length?(a=new gm(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function UM(i,e,t){let n=new Rs,s=new We,r=new We,o=new yt,a=new Dl,l=new Nl,c={},h=t.maxTextureSize,u={[Di]:ln,[ln]:Di,[Pt]:Pt},d=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:LM,fragmentShader:DM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new wt;p.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Oe(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oa;let g=this.type;this.render=function(A,_,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===cp&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=oa);let N=i.getRenderTarget(),C=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),O=i.state;O.setBlending(cr),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let z=g!==this.type;z&&_.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(W=>W.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,W=A.length;L<W;L++){let Z=A[L],q=Z.shadow;if(q===void 0){Ie("WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let ie=q.getFrameExtents();s.multiply(ie),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ie.x),s.x=r.x*ie.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ie.y),s.y=r.y*ie.y,q.mapSize.y=r.y));let K=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=K,q.map===null||z===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===so){if(Z.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Vn(s.x,s.y,{format:Ps,type:Mi,minFilter:qt,magFilter:qt,generateMipmaps:!1}),q.map.texture.name=Z.name+".shadowMap",q.map.depthTexture=new Qi(s.x,s.y,qn),q.map.depthTexture.name=Z.name+".shadowMapDepth",q.map.depthTexture.format=Ji,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=zt,q.map.depthTexture.magFilter=zt}else Z.isPointLight?(q.map=new xa(s.x),q.map.depthTexture=new Zo(s.x,vi)):(q.map=new Vn(s.x,s.y),q.map.depthTexture=new Qi(s.x,s.y,vi)),q.map.depthTexture.name=Z.name+".shadowMap",q.map.depthTexture.format=Ji,this.type===oa?(q.map.depthTexture.compareFunction=K?_u:xu,q.map.depthTexture.minFilter=qt,q.map.depthTexture.magFilter=qt):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=zt,q.map.depthTexture.magFilter=zt);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let te=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();Z.isPointLight!==!0&&q.updateMatrices(Z,E);let ne=(q.camera.layers.mask&4294967294)!==0?q.camera.layers:E.layers;for(let Re=0;Re<te;Re++){let Ke=q.getCamera(Re);if(Z.isPointLight){let j=q.camera,ve=q.matrix,Ee=Z.distance||j.far;Ee!==j.far&&(j.far=Ee,j.updateProjectionMatrix()),ma.setFromMatrixPosition(Z.matrixWorld),j.position.copy(ma),Ou.copy(j.position),Ou.add(NM[Re]),j.up.copy(FM[Re]),j.lookAt(Ou),j.updateMatrixWorld(),ve.makeTranslation(-ma.x,-ma.y,-ma.z),xm.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),q._frustum.setFromProjectionMatrix(xm,j.coordinateSystem,j.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,Re),i.clear();else{Re===0&&(i.setRenderTarget(q.map),i.clear());let j=q.getViewport(Re);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),O.viewport(o)}n=q.getFrustum(Re),M(_,E,Ke,Z,ne,this.type)}q.isPointLightShadow!==!0&&this.type===so&&y(q,E),q.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(N,C,P)};function y(A,_){let E=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new Vn(s.x,s.y,{format:Ps,type:Mi}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(_,null,E,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(_,null,E,f,x,null)}function w(A,_,E,N){let C=null,P=E.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)C=P;else if(C=E.isPointLight===!0?l:a,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let O=C.uuid,z=_.uuid,L=c[O];L===void 0&&(L={},c[O]=L);let W=L[z];W===void 0&&(W=C.clone(),L[z]=W,_.addEventListener("dispose",R)),C=W}if(C.visible=_.visible,C.wireframe=_.wireframe,N===so?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:u[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,E.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let O=i.properties.get(C);O.light=E}return C}function M(A,_,E,N,C,P){if(A.visible===!1)return;if(A.layers.test(C)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&P===so)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,A.matrixWorld);let L=e.update(A),W=A.material;if(Array.isArray(W)){let Z=L.groups;for(let q=0,ie=Z.length;q<ie;q++){let K=Z[q],te=W[K.materialIndex];if(te&&te.visible){let ne=w(A,te,N,P);A.onBeforeShadow(i,A,_,E,L,ne,K),i.renderBufferDirect(E,null,L,ne,A,K),A.onAfterShadow(i,A,_,E,L,ne,K)}}}else if(W.visible){let Z=w(A,W,N,P);A.onBeforeShadow(i,A,_,E,L,Z,null),i.renderBufferDirect(E,null,L,Z,A,null),A.onAfterShadow(i,A,_,E,L,Z,null)}}let z=A.children;for(let L=0,W=z.length;L<W;L++)M(z[L],_,E,N,C,P)}function R(A){A.target.removeEventListener("dispose",R);for(let E in c){let N=c[E],C=A.target.uuid;C in N&&(N[C].dispose(),delete N[C])}}}function OM(i,e){function t(){let D=!1,Q=new yt,Y=null,fe=new yt(0,0,0,0);return{setMask:function(ae){Y!==ae&&!D&&(i.colorMask(ae,ae,ae,ae),Y=ae)},setLocked:function(ae){D=ae},setClear:function(ae,ce,Pe,je,re){re===!0&&(ae*=je,ce*=je,Pe*=je),Q.set(ae,ce,Pe,je),fe.equals(Q)===!1&&(i.clearColor(ae,ce,Pe,je),fe.copy(Q))},reset:function(){D=!1,Y=null,fe.set(-1,0,0,0)}}}function n(){let D=!1,Q=!1,Y=null,fe=null,ae=null;return{setReversed:function(ce){if(Q!==ce){let Pe=e.get("EXT_clip_control");ce?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),Q=ce;let je=ae;ae=null,this.setClear(je)}},getReversed:function(){return Q},setTest:function(ce){ce?Me(i.DEPTH_TEST):$e(i.DEPTH_TEST)},setMask:function(ce){Y!==ce&&!D&&(i.depthMask(ce),Y=ce)},setFunc:function(ce){if(Q&&(ce=qp[ce]),fe!==ce){switch(ce){case _l:i.depthFunc(i.NEVER);break;case yl:i.depthFunc(i.ALWAYS);break;case vl:i.depthFunc(i.LESS);break;case Vr:i.depthFunc(i.LEQUAL);break;case Ml:i.depthFunc(i.EQUAL);break;case Sl:i.depthFunc(i.GEQUAL);break;case bl:i.depthFunc(i.GREATER);break;case Tl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=ce}},setLocked:function(ce){D=ce},setClear:function(ce){ae!==ce&&(ae=ce,Q&&(ce=1-ce),i.clearDepth(ce))},reset:function(){D=!1,Y=null,fe=null,ae=null,Q=!1}}}function s(){let D=!1,Q=null,Y=null,fe=null,ae=null,ce=null,Pe=null,je=null,re=null;return{setTest:function(De){D||(De?Me(i.STENCIL_TEST):$e(i.STENCIL_TEST))},setMask:function(De){Q!==De&&!D&&(i.stencilMask(De),Q=De)},setFunc:function(De,Je,_e){(Y!==De||fe!==Je||ae!==_e)&&(i.stencilFunc(De,Je,_e),Y=De,fe=Je,ae=_e)},setOp:function(De,Je,_e){(ce!==De||Pe!==Je||je!==_e)&&(i.stencilOp(De,Je,_e),ce=De,Pe=Je,je=_e)},setLocked:function(De){D=De},setClear:function(De){re!==De&&(i.clearStencil(De),re=De)},reset:function(){D=!1,Q=null,Y=null,fe=null,ae=null,ce=null,Pe=null,je=null,re=null}}}let r=new t,o=new n,a=new s,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],x=null,m=!1,g=null,y=null,w=null,M=null,R=null,A=null,_=null,E=new be(0,0,0),N=0,C=!1,P=null,O=null,z=null,L=null,W=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,ie=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(K)[1]),q=ie>=1):K.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),q=ie>=2);let te=null,ne={},Re=i.getParameter(i.SCISSOR_BOX),Ke=i.getParameter(i.VIEWPORT),j=new yt().fromArray(Re),ve=new yt().fromArray(Ke);function Ee(D,Q,Y,fe){let ae=new Uint8Array(4),ce=i.createTexture();i.bindTexture(D,ce),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pe=0;Pe<Y;Pe++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(Q,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,ae):i.texImage2D(Q+Pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ae);return ce}let Fe={};Fe[i.TEXTURE_2D]=Ee(i.TEXTURE_2D,i.TEXTURE_2D,1),Fe[i.TEXTURE_CUBE_MAP]=Ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Fe[i.TEXTURE_2D_ARRAY]=Ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Fe[i.TEXTURE_3D]=Ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Me(i.DEPTH_TEST),o.setFunc(Vr),Ln(!1),Ft($h),Me(i.CULL_FACE),on(cr);function Me(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function $e(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function kt(D,Q){return d[D]!==Q?(i.bindFramebuffer(D,Q),d[D]=Q,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Q),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Q),!0):!1}function ze(D,Q){let Y=p,fe=!1;if(D){Y=f.get(Q),Y===void 0&&(Y=[],f.set(Q,Y));let ae=D.textures;if(Y.length!==ae.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let ce=0,Pe=ae.length;ce<Pe;ce++)Y[ce]=i.COLOR_ATTACHMENT0+ce;Y.length=ae.length,fe=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,fe=!0);fe&&i.drawBuffers(Y)}function xt(D){return x!==D?(i.useProgram(D),x=D,!0):!1}let bt={[hr]:i.FUNC_ADD,[up]:i.FUNC_SUBTRACT,[fp]:i.FUNC_REVERSE_SUBTRACT};bt[dp]=i.MIN,bt[pp]=i.MAX;let it={[mp]:i.ZERO,[gp]:i.ONE,[xp]:i.SRC_COLOR,[eu]:i.SRC_ALPHA,[bp]:i.SRC_ALPHA_SATURATE,[Mp]:i.DST_COLOR,[yp]:i.DST_ALPHA,[_p]:i.ONE_MINUS_SRC_COLOR,[tu]:i.ONE_MINUS_SRC_ALPHA,[Sp]:i.ONE_MINUS_DST_COLOR,[vp]:i.ONE_MINUS_DST_ALPHA,[Tp]:i.CONSTANT_COLOR,[Ep]:i.ONE_MINUS_CONSTANT_COLOR,[wp]:i.CONSTANT_ALPHA,[Ap]:i.ONE_MINUS_CONSTANT_ALPHA};function on(D,Q,Y,fe,ae,ce,Pe,je,re,De){if(D===cr){m===!0&&($e(i.BLEND),m=!1);return}if(m===!1&&(Me(i.BLEND),m=!0),D!==hp){if(D!==g||De!==C){if((y!==hr||R!==hr)&&(i.blendEquation(i.FUNC_ADD),y=hr,R=hr),De)switch(D){case ro:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jh:i.blendFunc(i.ONE,i.ONE);break;case jh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:He("WebGLState: Invalid blending: ",D);break}else switch(D){case ro:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case jh:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qh:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",D);break}w=null,M=null,A=null,_=null,E.set(0,0,0),N=0,g=D,C=De}return}ae=ae||Q,ce=ce||Y,Pe=Pe||fe,(Q!==y||ae!==R)&&(i.blendEquationSeparate(bt[Q],bt[ae]),y=Q,R=ae),(Y!==w||fe!==M||ce!==A||Pe!==_)&&(i.blendFuncSeparate(it[Y],it[fe],it[ce],it[Pe]),w=Y,M=fe,A=ce,_=Pe),(je.equals(E)===!1||re!==N)&&(i.blendColor(je.r,je.g,je.b,re),E.copy(je),N=re),g=D,C=!1}function Vt(D,Q){D.side===Pt?$e(i.CULL_FACE):Me(i.CULL_FACE);let Y=D.side===ln;Q&&(Y=!Y),Ln(Y),D.blending===ro&&D.transparent===!1?on(cr):on(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let fe=D.stencilWrite;a.setTest(fe),fe&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Qt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Me(i.SAMPLE_ALPHA_TO_COVERAGE):$e(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ln(D){P!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),P=D)}function Ft(D){D!==ap?(Me(i.CULL_FACE),D!==O&&(D===$h?i.cullFace(i.BACK):D===lp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):$e(i.CULL_FACE),O=D}function Ai(D){D!==z&&(q&&i.lineWidth(D),z=D)}function Qt(D,Q,Y){D?(Me(i.POLYGON_OFFSET_FILL),(L!==Q||W!==Y)&&(L=Q,W=Y,o.getReversed()&&(Q=-Q,Y=-Y),i.polygonOffset(Q,Y))):$e(i.POLYGON_OFFSET_FILL)}function Jn(D){D?Me(i.SCISSOR_TEST):$e(i.SCISSOR_TEST)}function jn(D){D===void 0&&(D=i.TEXTURE0+Z-1),te!==D&&(i.activeTexture(D),te=D)}function Qn(D,Q,Y){Y===void 0&&(te===null?Y=i.TEXTURE0+Z-1:Y=te);let fe=ne[Y];fe===void 0&&(fe={type:void 0,texture:void 0},ne[Y]=fe),(fe.type!==D||fe.texture!==Q)&&(te!==Y&&(i.activeTexture(Y),te=Y),i.bindTexture(D,Q||Fe[D]),fe.type=D,fe.texture=Q)}function B(){let D=ne[te];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ei(){try{i.compressedTexImage2D(...arguments)}catch(D){He("WebGLState:",D)}}function Lt(){try{i.compressedTexImage3D(...arguments)}catch(D){He("WebGLState:",D)}}function Dt(){try{i.texSubImage2D(...arguments)}catch(D){He("WebGLState:",D)}}function ge(){try{i.texSubImage3D(...arguments)}catch(D){He("WebGLState:",D)}}function Wt(){try{i.compressedTexSubImage2D(...arguments)}catch(D){He("WebGLState:",D)}}function Ue(){try{i.compressedTexSubImage3D(...arguments)}catch(D){He("WebGLState:",D)}}function qe(){try{i.texStorage2D(...arguments)}catch(D){He("WebGLState:",D)}}function I(){try{i.texStorage3D(...arguments)}catch(D){He("WebGLState:",D)}}function S(){try{i.texImage2D(...arguments)}catch(D){He("WebGLState:",D)}}function H(){try{i.texImage3D(...arguments)}catch(D){He("WebGLState:",D)}}function se(D){return u[D]!==void 0?u[D]:i.getParameter(D)}function ee(D,Q){u[D]!==Q&&(i.pixelStorei(D,Q),u[D]=Q)}function le(D){j.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),j.copy(D))}function pe(D){ve.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),ve.copy(D))}function $(D,Q){let Y=c.get(Q);Y===void 0&&(Y=new WeakMap,c.set(Q,Y));let fe=Y.get(D);fe===void 0&&(fe=i.getUniformBlockIndex(Q,D.name),i.uniformBlockBinding(Q,fe,fe),Y.set(D,fe))}function J(D,Q,Y){let ae=c.get(Q).get(D);l[ae]!==Y&&(i.bindBufferBase(i.UNIFORM_BUFFER,ae,Y),l[ae]=Y)}function ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},te=null,ne={},d={},l={},f=new WeakMap,p=[],x=null,m=!1,g=null,y=null,w=null,M=null,R=null,A=null,_=null,E=new be(0,0,0),N=0,C=!1,P=null,O=null,z=null,L=null,W=null,j.set(0,0,i.canvas.width,i.canvas.height),ve.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Me,disable:$e,bindFramebuffer:kt,drawBuffers:ze,useProgram:xt,setBlending:on,setMaterial:Vt,setFlipSided:Ln,setCullFace:Ft,setLineWidth:Ai,setPolygonOffset:Qt,setScissorTest:Jn,activeTexture:jn,bindTexture:Qn,unbindTexture:B,compressedTexImage2D:ei,compressedTexImage3D:Lt,texImage2D:S,texImage3D:H,pixelStorei:ee,getParameter:se,updateUBOMapping:$,uniformBlockBinding:J,texStorage2D:qe,texStorage3D:I,texSubImage2D:Dt,texSubImage3D:ge,compressedTexSubImage2D:Wt,compressedTexSubImage3D:Ue,scissor:le,viewport:pe,reset:ue}}function BM(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,h=new WeakMap,u=new Set,d,f=new WeakMap,p=new Set,x=new FinalizationRegistry(I=>p.delete(I)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,S){return m?new OffscreenCanvas(I,S):qr("canvas")}function y(I,S,H){let se=1,ee=qe(I);if((ee.width>H||ee.height>H)&&(se=H/Math.max(ee.width,ee.height)),se<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let le=Math.floor(se*ee.width),pe=Math.floor(se*ee.height);d===void 0&&(d=g(le,pe));let $=S?g(le,pe):d;return $.width=le,$.height=pe,$.getContext("2d").drawImage(I,0,0,le,pe),Ie("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+le+"x"+pe+")."),$}else return"data"in I&&Ie("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),I;return I}function w(I){return I.generateMipmaps}function M(I){i.generateMipmap(I)}function R(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(I,S,H,se,ee,le=!1){if(I!==null){if(i[I]!==void 0)return i[I];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let pe;se&&(pe=e.get("EXT_texture_norm16"),pe||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=S;if(S===i.RED&&(H===i.FLOAT&&($=i.R32F),H===i.HALF_FLOAT&&($=i.R16F),H===i.UNSIGNED_BYTE&&($=i.R8),H===i.UNSIGNED_SHORT&&pe&&($=pe.R16_EXT),H===i.SHORT&&pe&&($=pe.R16_SNORM_EXT)),S===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.R8UI),H===i.UNSIGNED_SHORT&&($=i.R16UI),H===i.UNSIGNED_INT&&($=i.R32UI),H===i.BYTE&&($=i.R8I),H===i.SHORT&&($=i.R16I),H===i.INT&&($=i.R32I)),S===i.RG&&(H===i.FLOAT&&($=i.RG32F),H===i.HALF_FLOAT&&($=i.RG16F),H===i.UNSIGNED_BYTE&&($=i.RG8),H===i.UNSIGNED_SHORT&&pe&&($=pe.RG16_EXT),H===i.SHORT&&pe&&($=pe.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RG8UI),H===i.UNSIGNED_SHORT&&($=i.RG16UI),H===i.UNSIGNED_INT&&($=i.RG32UI),H===i.BYTE&&($=i.RG8I),H===i.SHORT&&($=i.RG16I),H===i.INT&&($=i.RG32I)),S===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RGB8UI),H===i.UNSIGNED_SHORT&&($=i.RGB16UI),H===i.UNSIGNED_INT&&($=i.RGB32UI),H===i.BYTE&&($=i.RGB8I),H===i.SHORT&&($=i.RGB16I),H===i.INT&&($=i.RGB32I)),S===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RGBA8UI),H===i.UNSIGNED_SHORT&&($=i.RGBA16UI),H===i.UNSIGNED_INT&&($=i.RGBA32UI),H===i.BYTE&&($=i.RGBA8I),H===i.SHORT&&($=i.RGBA16I),H===i.INT&&($=i.RGBA32I)),S===i.RGB&&(H===i.UNSIGNED_SHORT&&pe&&($=pe.RGB16_EXT),H===i.SHORT&&pe&&($=pe.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),S===i.RGBA){let J=le?Oo:et.getTransfer(ee);H===i.FLOAT&&($=i.RGBA32F),H===i.HALF_FLOAT&&($=i.RGBA16F),H===i.UNSIGNED_BYTE&&($=J===dt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&pe&&($=pe.RGBA16_EXT),H===i.SHORT&&pe&&($=pe.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function _(I,S){let H;return I?S===null||S===vi||S===dr?H=i.DEPTH24_STENCIL8:S===qn?H=i.DEPTH32F_STENCIL8:S===lo&&(H=i.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===vi||S===dr?H=i.DEPTH_COMPONENT24:S===qn?H=i.DEPTH_COMPONENT32F:S===lo&&(H=i.DEPTH_COMPONENT16),H}function E(I,S){return w(I)===!0||I.isFramebufferTexture&&I.minFilter!==zt&&I.minFilter!==qt?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function N(I){let S=new WeakRef(I);n.get(I).__ref=S,p.add(S),x.register(I,S,S)}function C(I){let S=n.get(I).__ref;S!==void 0&&(p.delete(S),x.unregister(S))}function P(I){z(I.target)}function O(I){L(I.target)}function z(I){I.removeEventListener("dispose",P),C(I),Z(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&u.delete(I)}function L(I){I.removeEventListener("dispose",O),C(I),ie(I)}function W(){for(let I of p){let S=I.deref();S!==void 0&&(S.isRenderTarget===!0?L(S):z(S))}p.clear(),u.clear()}function Z(I){let S=n.get(I);if(S.__webglInit===void 0)return;let H=I.source,se=f.get(H);if(se){let ee=se[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&q(I),Object.keys(se).length===0&&f.delete(H)}n.remove(I)}function q(I){let S=n.get(I);i.deleteTexture(S.__webglTexture);let H=I.source,se=f.get(H);delete se[S.__cacheKey],o.memory.textures--}function ie(I){let S=n.get(I);S.__depthDisposeCallback&&S.__depthDisposeCallback();let H=I.depthTexture;if(H&&H.renderTarget===I&&z(H),I.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(S.__webglFramebuffer[ee]))for(let le=0;le<S.__webglFramebuffer[ee].length;le++)i.deleteFramebuffer(S.__webglFramebuffer[ee][le]);else i.deleteFramebuffer(S.__webglFramebuffer[ee]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[ee])}else{if(Array.isArray(S.__webglFramebuffer))for(let ee=0;ee<S.__webglFramebuffer.length;ee++)i.deleteFramebuffer(S.__webglFramebuffer[ee]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ee=0;ee<S.__webglColorRenderbuffer.length;ee++)S.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[ee]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let se=I.textures;for(let ee=0,le=se.length;ee<le;ee++){let pe=n.get(se[ee]);pe.__webglTexture&&(i.deleteTexture(pe.__webglTexture),o.memory.textures--),n.remove(se[ee])}n.remove(I)}let K=0;function te(){K=0}function ne(){return K}function Re(I){K=I}function Ke(){let I=K;return I>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),K+=1,I}function j(I){let S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.mipmapsAutoUpdate),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function ve(I,S){let H=n.get(I);if(I.isVideoTexture&&Wt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&H.__version!==I.version){let se=I.image;if(se===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{Vt(H,I,S);return}}else I.isExternalTexture&&(H.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+S)}function Ee(I,S){let H=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){Vt(H,I,S);return}else I.isExternalTexture&&(H.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+S)}function Fe(I,S){let H=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){Vt(H,I,S);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+S)}function Me(I,S){let H=n.get(I);if(I.version>0&&H.__version!==I.version){Ln(H,I,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+S)}let $e={[As]:i.REPEAT,[ni]:i.CLAMP_TO_EDGE,[Wr]:i.MIRRORED_REPEAT},kt={[zt]:i.NEAREST,[Kl]:i.NEAREST_MIPMAP_NEAREST,[fr]:i.NEAREST_MIPMAP_LINEAR,[qt]:i.LINEAR,[ao]:i.LINEAR_MIPMAP_NEAREST,[oi]:i.LINEAR_MIPMAP_LINEAR},ze={[Bp]:i.NEVER,[yu]:i.ALWAYS,[zp]:i.LESS,[xu]:i.LEQUAL,[kp]:i.EQUAL,[_u]:i.GEQUAL,[Hp]:i.GREATER,[Gp]:i.NOTEQUAL};function xt(I,S){if(S.type===qn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===qt||S.magFilter===ao||S.magFilter===fr||S.magFilter===oi||S.minFilter===qt||S.minFilter===ao||S.minFilter===fr||S.minFilter===oi)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,$e[S.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,$e[S.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,$e[S.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,kt[S.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,kt[S.minFilter]),S.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,ze[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===zt||S.minFilter!==fr&&S.minFilter!==oi||S.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function bt(I,S){let H=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",P),N(S));let se=S.source,ee=f.get(se);ee===void 0&&(ee={},f.set(se,ee));let le=j(S);if(le!==I.__cacheKey){ee[le]===void 0&&(ee[le]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ee[le].usedTimes++;let pe=ee[I.__cacheKey];pe!==void 0&&(ee[I.__cacheKey].usedTimes--,pe.usedTimes===0&&q(S)),I.__cacheKey=le,I.__webglTexture=ee[le].texture}return H}function it(I,S,H){return Math.floor(Math.floor(I/H)/S)}function on(I,S,H,se){let le=I.updateRanges;if(le.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,H,se,S.data);else{le.sort((D,Q)=>D.start-Q.start);let pe=0;for(let D=1;D<le.length;D++){let Q=le[pe],Y=le[D],fe=Q.start+Q.count,ae=it(Y.start,S.width,4),ce=it(Q.start,S.width,4);Y.start<=fe+1&&ae===ce&&it(Y.start+Y.count-1,S.width,4)===ae?Q.count=Math.max(Q.count,Y.start+Y.count-Q.start):(++pe,le[pe]=Y)}le.length=pe+1;let $=t.getParameter(i.UNPACK_ROW_LENGTH),J=t.getParameter(i.UNPACK_SKIP_PIXELS),ue=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let D=0,Q=le.length;D<Q;D++){let Y=le[D],fe=Math.floor(Y.start/4),ae=Math.ceil(Y.count/4),ce=fe%S.width,Pe=Math.floor(fe/S.width),je=ae,re=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ce),t.pixelStorei(i.UNPACK_SKIP_ROWS,Pe),t.texSubImage2D(i.TEXTURE_2D,0,ce,Pe,je,re,H,se,S.data)}I.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,$),t.pixelStorei(i.UNPACK_SKIP_PIXELS,J),t.pixelStorei(i.UNPACK_SKIP_ROWS,ue)}}function Vt(I,S,H){let se=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(se=i.TEXTURE_3D);let ee=bt(I,S),le=S.source;t.bindTexture(se,I.__webglTexture,i.TEXTURE0+H);let pe=n.get(le);if(le.version!==pe.__version||ee===!0){if(t.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let re=et.getPrimaries(et.workingColorSpace),De=S.colorSpace===as?null:et.getPrimaries(S.colorSpace),Je=S.colorSpace===as||re===De?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let J=y(S.image,!1,s.maxTextureSize);J=Ue(S,J);let ue=r.convert(S.format,S.colorSpace),D=r.convert(S.type),Q=A(S.internalFormat,ue,D,S.normalized,S.colorSpace,S.isVideoTexture);xt(se,S);let Y,fe=S.mipmaps,ae=S.isVideoTexture!==!0,ce=pe.__version===void 0||ee===!0,Pe=le.dataReady,je=E(S,J);if(S.isDepthTexture)Q=_(S.format===os,S.type),ce&&(ae?t.texStorage2D(i.TEXTURE_2D,1,Q,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,Q,J.width,J.height,0,ue,D,null));else if(S.isDataTexture)if(fe.length>0){ae&&ce&&t.texStorage2D(i.TEXTURE_2D,je,Q,fe[0].width,fe[0].height);for(let re=0,De=fe.length;re<De;re++)Y=fe[re],ae?Pe&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Y.width,Y.height,ue,D,Y.data):t.texImage2D(i.TEXTURE_2D,re,Q,Y.width,Y.height,0,ue,D,Y.data);S.generateMipmaps=!1}else ae?(ce&&t.texStorage2D(i.TEXTURE_2D,je,Q,J.width,J.height),Pe&&on(S,J,ue,D)):t.texImage2D(i.TEXTURE_2D,0,Q,J.width,J.height,0,ue,D,J.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ae&&ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,je,Q,fe[0].width,fe[0].height,J.depth);for(let re=0,De=fe.length;re<De;re++)if(Y=fe[re],S.format!==ai)if(ue!==null)if(ae){if(Pe)if(S.layerUpdates.size>0){let Je=Cu(Y.width,Y.height,S.format,S.type);for(let _e of S.layerUpdates){let _t=Y.data.subarray(_e*Je/Y.data.BYTES_PER_ELEMENT,(_e+1)*Je/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,_e,Y.width,Y.height,1,ue,_t)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,Y.width,Y.height,J.depth,ue,Y.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,Q,Y.width,Y.height,J.depth,0,Y.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?Pe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,Y.width,Y.height,J.depth,ue,D,Y.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,Q,Y.width,Y.height,J.depth,0,ue,D,Y.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{ae&&ce&&t.texStorage2D(i.TEXTURE_2D,je,Q,fe[0].width,fe[0].height);for(let re=0,De=fe.length;re<De;re++)Y=fe[re],S.format!==ai?ue!==null?ae?Pe&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,Y.width,Y.height,ue,Y.data):t.compressedTexImage2D(i.TEXTURE_2D,re,Q,Y.width,Y.height,0,Y.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?Pe&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Y.width,Y.height,ue,D,Y.data):t.texImage2D(i.TEXTURE_2D,re,Q,Y.width,Y.height,0,ue,D,Y.data)}else if(S.isDataArrayTexture)if(ae){if(ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,je,Q,J.width,J.height,J.depth),Pe)if(S.layerUpdates.size>0){let re=Cu(J.width,J.height,S.format,S.type);for(let De of S.layerUpdates){let Je=J.data.subarray(De*re/J.data.BYTES_PER_ELEMENT,(De+1)*re/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,De,J.width,J.height,1,ue,D,Je)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ue,D,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Q,J.width,J.height,J.depth,0,ue,D,J.data);else if(S.isData3DTexture)ae?(ce&&t.texStorage3D(i.TEXTURE_3D,je,Q,J.width,J.height,J.depth),Pe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ue,D,J.data)):t.texImage3D(i.TEXTURE_3D,0,Q,J.width,J.height,J.depth,0,ue,D,J.data);else if(S.isFramebufferTexture){if(ce)if(ae)t.texStorage2D(i.TEXTURE_2D,je,Q,J.width,J.height);else{let re=J.width,De=J.height;for(let Je=0;Je<je;Je++)t.texImage2D(i.TEXTURE_2D,Je,Q,re,De,0,ue,D,null),re>>=1,De>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let re=i.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),J.parentNode!==re){re.appendChild(J),u.add(S),re.onpaint=De=>{let Je=De.changedElements;for(let _e of u)Je.includes(_e.image)&&(_e.needsUpdate=!0)},re.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{let Je=i.RGBA,_e=i.RGBA,_t=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Je,_e,_t,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(fe.length>0){if(ae&&ce){let re=qe(fe[0]);t.texStorage2D(i.TEXTURE_2D,je,Q,re.width,re.height)}for(let re=0,De=fe.length;re<De;re++)Y=fe[re],ae?Pe&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,ue,D,Y):t.texImage2D(i.TEXTURE_2D,re,Q,ue,D,Y);S.generateMipmaps=!1}else if(ae){if(ce){let re=qe(J);t.texStorage2D(i.TEXTURE_2D,je,Q,re.width,re.height)}Pe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,D,J)}else t.texImage2D(i.TEXTURE_2D,0,Q,ue,D,J);w(S)&&S.mipmapsAutoUpdate===!0&&M(se),pe.__version=le.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function Ln(I,S,H){if(S.image.length!==6)return;let se=bt(I,S),ee=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+H);let le=n.get(ee);if(ee.version!==le.__version||se===!0){t.activeTexture(i.TEXTURE0+H);let pe=et.getPrimaries(et.workingColorSpace),$=S.colorSpace===as?null:et.getPrimaries(S.colorSpace),J=S.colorSpace===as||pe===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let ue=S.isCompressedTexture||S.image[0].isCompressedTexture,D=S.image[0]&&S.image[0].isDataTexture,Q=[];for(let _e=0;_e<6;_e++)!ue&&!D?Q[_e]=y(S.image[_e],!0,s.maxCubemapSize):Q[_e]=D?S.image[_e].image:S.image[_e],Q[_e]=Ue(S,Q[_e]);let Y=Q[0],fe=r.convert(S.format,S.colorSpace),ae=r.convert(S.type),ce=A(S.internalFormat,fe,ae,S.normalized,S.colorSpace),Pe=S.isVideoTexture!==!0,je=le.__version===void 0||se===!0,re=ee.dataReady,De=E(S,Y);xt(i.TEXTURE_CUBE_MAP,S);let Je;if(S.isDepthTexture){if(ce=_(S.format===os,S.type),je)if(Pe)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,ce,Y.width,Y.height);else for(let _e=0;_e<6;_e++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ce,Y.width,Y.height,0,fe,ae,null)}else if(ue){Pe&&je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,De,ce,Y.width,Y.height);for(let _e=0;_e<6;_e++){Je=Q[_e].mipmaps;for(let _t=0;_t<Je.length;_t++){let en=Je[_t];S.format!==ai?fe!==null?Pe?re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,_t,0,0,en.width,en.height,fe,en.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,_t,ce,en.width,en.height,0,en.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,_t,0,0,en.width,en.height,fe,ae,en.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,_t,ce,en.width,en.height,0,fe,ae,en.data)}}}else{if(Je=S.mipmaps,Pe&&je){Je.length>0&&De++;let _e=qe(Q[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,De,ce,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(D){Pe?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Q[_e].width,Q[_e].height,fe,ae,Q[_e].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ce,Q[_e].width,Q[_e].height,0,fe,ae,Q[_e].data);for(let _t=0;_t<Je.length;_t++){let _s=Je[_t].image[_e].image;Pe?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,_t+1,0,0,_s.width,_s.height,fe,ae,_s.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,_t+1,ce,_s.width,_s.height,0,fe,ae,_s.data)}}else{Pe?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,fe,ae,Q[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ce,fe,ae,Q[_e]);for(let _t=0;_t<Je.length;_t++){let en=Je[_t];Pe?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,_t+1,0,0,fe,ae,en.image[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,_t+1,ce,fe,ae,en.image[_e])}}}w(S)&&S.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),le.__version=ee.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function Ft(I,S,H,se,ee,le){let pe=r.convert(H.format,H.colorSpace),$=r.convert(H.type),J=A(H.internalFormat,pe,$,H.normalized,H.colorSpace),ue=n.get(S),D=n.get(H);if(D.__renderTarget=S,!ue.__hasExternalTextures){let Q=Math.max(1,S.width>>le),Y=Math.max(1,S.height>>le);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,le,J,Q,Y,S.depth,0,pe,$,null):t.texImage2D(ee,le,J,Q,Y,0,pe,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),ge(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,ee,D.__webglTexture,0,Dt(S)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,ee,D.__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ai(I,S,H){if(i.bindRenderbuffer(i.RENDERBUFFER,I),S.depthBuffer){let se=S.depthTexture,ee=se&&se.isDepthTexture?se.type:null,le=_(S.stencilBuffer,ee),pe=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ge(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt(S),le,S.width,S.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt(S),le,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,le,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,I)}else{let se=S.textures;for(let ee=0;ee<se.length;ee++){let le=se[ee],pe=r.convert(le.format,le.colorSpace),$=r.convert(le.type),J=A(le.internalFormat,pe,$,le.normalized,le.colorSpace);ge(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt(S),J,S.width,S.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt(S),J,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,J,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Qt(I,S,H){let se=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=n.get(S.depthTexture);ee.__renderTarget=S;let le=se?S.depthTexture.image[0]:S.depthTexture.image;(!ee.__webglTexture||le.width!==S.width||le.height!==S.height)&&(le.width=S.width,le.height=S.height,S.depthTexture.needsUpdate=!0),se?Me(S.depthTexture,0):ve(S.depthTexture,0);let pe=ee.__webglTexture,$=Dt(S),J=se?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,ue=S.depthTexture.format===os?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===Ji)ge(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,J,pe,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,ue,J,pe,0);else if(S.depthTexture.format===os)ge(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,J,pe,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,ue,J,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Jn(I){let S=n.get(I),H=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){let se=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),se){let ee=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,se.removeEventListener("dispose",ee)};se.addEventListener("dispose",ee),S.__depthDisposeCallback=ee}S.__boundDepthTexture=se}if(I.depthTexture&&!S.__autoAllocateDepthBuffer)if(H)for(let se=0;se<6;se++)Qt(S.__webglFramebuffer[se],I,se);else I.texture.mipmaps.length>0?Qt(S.__webglFramebuffer[0],I,0):Qt(S.__webglFramebuffer,I,0);else if(H){S.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[se]),S.__webglDepthbuffer[se]===void 0)S.__webglDepthbuffer[se]=i.createRenderbuffer(),Ai(S.__webglDepthbuffer[se],I,!1);else{let ee=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=S.__webglDepthbuffer[se];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,le)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Ai(S.__webglDepthbuffer,I,!1);else{let ee=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,le)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function jn(I,S,H){let se=n.get(I);S!==void 0&&Ft(se.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Jn(I)}function Qn(I){let S=I.texture,H=n.get(I),se=n.get(S);I.addEventListener("dispose",O),N(I);let ee=I.textures,le=I.isWebGLCubeRenderTarget===!0,pe=ee.length>1;if(pe||(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=S.version,o.memory.textures++),le){H.__webglFramebuffer=[];for(let $=0;$<6;$++)if(S.mipmaps.length>0){H.__webglFramebuffer[$]=[];for(let J=0;J<S.mipmaps.length;J++)H.__webglFramebuffer[$][J]=i.createFramebuffer()}else H.__webglFramebuffer[$]=i.createFramebuffer()}else{if(S.mipmaps.length>0){H.__webglFramebuffer=[];for(let $=0;$<S.mipmaps.length;$++)H.__webglFramebuffer[$]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(pe)for(let $=0,J=ee.length;$<J;$++){let ue=n.get(ee[$]);ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&ge(I)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let $=0;$<ee.length;$++){let J=ee[$];H.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[$]);let ue=r.convert(J.format,J.colorSpace),D=r.convert(J.type),Q=A(J.internalFormat,ue,D,J.normalized,J.colorSpace,I.isXRRenderTarget===!0),Y=Dt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Y,Q,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,H.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Ai(H.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),xt(i.TEXTURE_CUBE_MAP,S);for(let $=0;$<6;$++)if(S.mipmaps.length>0)for(let J=0;J<S.mipmaps.length;J++)Ft(H.__webglFramebuffer[$][J],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,J);else Ft(H.__webglFramebuffer[$],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);w(S)?M(i.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(pe){for(let $=0,J=ee.length;$<J;$++){let ue=ee[$],D=n.get(ue),Q=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Q=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,D.__webglTexture),xt(Q,ue),Ft(H.__webglFramebuffer,I,ue,i.COLOR_ATTACHMENT0+$,Q,0),w(ue)&&M(Q)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&($=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,se.__webglTexture),xt($,S),S.mipmaps.length>0)for(let J=0;J<S.mipmaps.length;J++)Ft(H.__webglFramebuffer[J],I,S,i.COLOR_ATTACHMENT0,$,J);else Ft(H.__webglFramebuffer,I,S,i.COLOR_ATTACHMENT0,$,0);w(S)?M($):S.mipmaps.length>0&&i.texParameteri($,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&Jn(I)}function B(I){let S=I.textures;for(let H=0,se=S.length;H<se;H++){let ee=S[H];if(w(ee)&&ee.mipmapsAutoUpdate===!0){let le=R(I),pe=n.get(ee).__webglTexture;t.bindTexture(le,pe),M(le),t.unbindTexture()}}}let ei=[];function Lt(I){if(I.samples>0){if(ge(I)===!1){let S=I.textures,H=I.width,se=I.height,ee=i.COLOR_BUFFER_BIT,le=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(I),$=S.length>1;if($)for(let ue=0;ue<S.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ue=0;ue<S.length;ue++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[ue]);let D=n.get(S[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,H,se,0,0,H,se,ee,i.NEAREST),l===!0&&(ei.length=0,ei.push(i.COLOR_ATTACHMENT0+ue),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&ei.push(le),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ei))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let ue=0;ue<S.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,pe.__webglColorRenderbuffer[ue]);let D=n.get(S[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,D,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let S=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Dt(I){return Math.min(s.maxSamples,I.samples)}function ge(I){let S=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Wt(I){let S=o.render.frame;h.get(I)!==S&&(h.set(I,S),I.update())}function Ue(I,S){let H=I.colorSpace,se=I.format,ee=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||H!==Sn&&H!==as&&(et.getTransfer(H)===dt?(se!==ai||ee!==Un)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",H)),S}function qe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=Ke,this.resetTextureUnits=te,this.getTextureUnits=ne,this.setTextureUnits=Re,this.setTexture2D=ve,this.setTexture2DArray=Ee,this.setTexture3D=Fe,this.setTextureCube=Me,this.rebindTextures=jn,this.setupRenderTarget=Qn,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Jn,this.setupFrameBufferTexture=Ft,this.useMultisampledRTT=ge,this.dispose=W}function zM(i,e){function t(n,s=as){let r,o=et.getTransfer(s);if(n===Un)return i.UNSIGNED_BYTE;if(n===$l)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Jl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===du)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===hu)return i.BYTE;if(n===uu)return i.SHORT;if(n===lo)return i.UNSIGNED_SHORT;if(n===Zl)return i.INT;if(n===vi)return i.UNSIGNED_INT;if(n===qn)return i.FLOAT;if(n===Mi)return i.HALF_FLOAT;if(n===pu)return i.ALPHA;if(n===mu)return i.RGB;if(n===ai)return i.RGBA;if(n===Ji)return i.DEPTH_COMPONENT;if(n===os)return i.DEPTH_STENCIL;if(n===jl)return i.RED;if(n===Ql)return i.RED_INTEGER;if(n===Ps)return i.RG;if(n===ec)return i.RG_INTEGER;if(n===tc)return i.RGBA_INTEGER;if(n===aa||n===la||n===ca||n===ha)if(o===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===aa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===aa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ha)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nc||n===ic||n===sc||n===rc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===nc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ic)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===rc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oc||n===ac||n===lc||n===cc||n===hc||n===ua||n===uc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===oc||n===ac)return o===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===lc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===cc)return r.COMPRESSED_R11_EAC;if(n===hc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ua)return r.COMPRESSED_RG11_EAC;if(n===uc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===fc||n===dc||n===pc||n===mc||n===gc||n===xc||n===_c||n===yc||n===vc||n===Mc||n===Sc||n===bc||n===Tc||n===Ec)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===fc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===dc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_c)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ec)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wc||n===Ac||n===Rc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===wc)return o===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ac)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Rc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Cc||n===Ic||n===fa||n===Pc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Cc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ic)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===dr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}function VM(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,wu(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,y,w,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,M)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,w):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===ln&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===ln&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=e.get(g),w=y.envMap,M=y.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(GM.makeRotationFromEuler(M)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Rm),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,w){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=w*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,y){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===ln&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function WM(i,e,t,n){let s={},r={};function o(y,w){let M=w.program;n.uniformBlockBinding(y,M,s[y.id])}function a(y,w){let M=s[y.id];M===void 0&&(p(y),M=l(y),s[y.id]=M,y.addEventListener("dispose",m));let R=w.program;n.updateUBOMapping(y,R);let A=e.render.frame;r[y.id]!==A&&(c(y),r[y.id]=A)}function l(y){let w=i.createBuffer(),M=y.__size,R=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,M,R),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function c(y){let w=s[y.id],M=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let A=0,_=M.length;A<_;A++){let E=M[A];if(Array.isArray(E))for(let N=0,C=E.length;N<C;N++)h(E[N],A,N,R);else h(E,A,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,w,M,R){if(d(y,w,M,R)===!0){let A=y.__offset,_=y.value;if(Array.isArray(_)){let E=0;for(let N=0;N<_.length;N++){let C=_[N],P=x(C,!0);u(C,y.__data,E),E+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,y.__data)}}function u(y,w,M){typeof y=="number"||typeof y=="boolean"?w[M]=y:y.isMatrix3?(w[M]=y.elements[0],w[M+1]=y.elements[1],w[M+2]=y.elements[2],w[M+3]=0,w[M+4]=y.elements[3],w[M+5]=y.elements[4],w[M+6]=y.elements[5],w[M+7]=0,w[M+8]=y.elements[6],w[M+9]=y.elements[7],w[M+10]=y.elements[8],w[M+11]=0):ArrayBuffer.isView(y)?w.set(y.subarray(0,w.length-M),M):y.toArray(w,M)}function d(y,w,M,R){let A=y.value,_=w+"_"+M;if(Array.isArray(A)){R[_]===void 0&&(R[_]=[]);let E=R[_],N=!1;for(let C=0;C<A.length;C++)f(A[C],E,C)===!0&&(N=!0);return N}return f(A,R,_)}function f(y,w,M){if(w[M]===void 0)return typeof y=="number"||typeof y=="boolean"?w[M]=y:ArrayBuffer.isView(y)?w[M]=y.slice():w[M]=y.clone(),!0;{let R=w[M];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return w[M]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function p(y){let w=y.uniforms,M=0,R=16;for(let _=0,E=w.length;_<E;_++){let N=Array.isArray(w[_])?w[_]:[w[_]];for(let C=0,P=N.length;C<P;C++){let O=N[C],z=Array.isArray(O.value)?O.value:[O.value],L=Array.isArray(w[_])||Array.isArray(O.value),W=M;for(let q=0,ie=z.length;q<ie;q++){let K=z[q],te=x(K,L),ne=M%R,Re=ne%te.boundary,Ke=ne+Re;M+=Re,Ke!==0&&R-Ke<te.storage&&(M+=R-Ke),q===0&&(W=M),M+=te.storage}let Z=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new Z((M-W)/Float32Array.BYTES_PER_ELEMENT),O.__offset=W}}let A=M%R;return A>0&&(M+=R-A),y.__size=M,y.__cache={},this}function x(y,w){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=16,M.storage=48):y.isMatrix4?(M.boundary=16,M.storage=64):y.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",y),w===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(y){let w=y.target;w.removeEventListener("dispose",m),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function g(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:o,update:a,dispose:g}}function qM(){return Ui===null&&(Ui=new Qr(XM,16,16,Ps,Mi),Ui.name="DFG_LUT",Ui.minFilter=qt,Ui.magFilter=qt,Ui.wrapS=ni,Ui.wrapT=ni,Ui.generateMipmaps=!1,Ui.needsUpdate=!0),Ui}var cx,hx,ux,fx,dx,px,mx,gx,xx,_x,yx,vx,Mx,Sx,bx,Tx,Ex,wx,Ax,Rx,Cx,Ix,Px,Lx,Dx,Nx,Fx,Ux,Ox,Bx,zx,kx,Hx,Gx,Vx,Wx,Xx,qx,Yx,Kx,Zx,$x,Jx,jx,Qx,e_,t_,n_,i_,s_,r_,o_,a_,l_,c_,h_,u_,f_,d_,p_,m_,g_,x_,__,y_,v_,M_,S_,b_,T_,E_,w_,A_,R_,C_,I_,P_,L_,D_,N_,F_,U_,O_,B_,z_,k_,H_,G_,V_,W_,X_,q_,Y_,K_,Z_,$_,J_,j_,Q_,ey,ty,ny,iy,sy,ry,oy,ay,ly,cy,hy,uy,fy,dy,py,my,gy,xy,_y,yy,vy,My,Sy,by,Ty,Ey,wy,Ay,Ry,Cy,Iy,Py,Ly,Dy,Ny,Fy,Uy,Oy,By,zy,ky,Hy,Qe,ye,Oi,Fc,Gy,ym,xa,Jp,Ky,Zy,vm,Mm,$y,Jy,jy,Oc,cv,Sm,bm,Tm,Em,wm,Am,tm,nm,im,sm,rm,Bu,zu,ku,Uu,ho,jv,Qv,lm,iM,Uc,cM,uM,dM,mM,xM,vM,Gu,Vu,RM,LM,DM,NM,FM,xm,ma,Ou,kM,HM,Wu,Xu,GM,Rm,XM,Ui,Bc,li=Dn(()=>{Fu();Fu();cx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hx=`#ifdef USE_ALPHAHASH
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
#endif`,ux=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,px=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mx=`#ifdef USE_AOMAP
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
#endif`,gx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xx=`#ifdef USE_BATCHING
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
#endif`,_x=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sx=`#ifdef USE_IRIDESCENCE
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
#endif`,bx=`#ifdef USE_BUMPMAP
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
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ax=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Cx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ix=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Px=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Lx=`#define PI 3.141592653589793
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
} // validated`,Dx=`vec3 transformedNormal = objectNormal;
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
#endif`,Nx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ux=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ox=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bx="gl_FragColor = linearToOutputTexel( gl_FragColor );",zx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kx=`#ifdef USE_ENVMAP
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
#endif`,Hx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Gx=`#ifdef USE_ENVMAP
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
#endif`,Vx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wx=`#ifdef USE_ENVMAP
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
#endif`,Xx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zx=`#ifdef USE_GRADIENTMAP
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
}`,$x=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,e_=`#ifdef USE_ENVMAP
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
#endif`,t_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,r_=`PhysicalMaterial material;
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
#endif`,o_=`uniform sampler2D dfgLUT;
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
}`,a_=`
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
#endif`,l_=`#if defined( RE_IndirectDiffuse )
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
#endif`,c_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,h_=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,u_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,m_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,x_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,__=`#if defined( USE_POINTS_UV )
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
#endif`,y_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,M_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S_=`#if defined( USE_MORPHCOLORS )
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
#endif`,b_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T_=`#ifdef USE_MORPHTARGETS
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
#endif`,E_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,A_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,R_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,P_=`#ifdef USE_NORMALMAP
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
#endif`,L_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,D_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,N_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,F_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,U_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,B_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,G_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Y_=`float getShadowMask() {
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
}`,K_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Z_=`#ifdef USE_SKINNING
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
#endif`,$_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,J_=`#ifdef USE_SKINNING
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
#endif`,j_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Q_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ey=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ty=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ny=`#ifdef USE_TRANSMISSION
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
#endif`,iy=`#ifdef USE_TRANSMISSION
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
#endif`,sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ry=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ay=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ly=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cy=`uniform sampler2D t2D;
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
}`,hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uy=`uniform float backgroundBlurriness;
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
}`,fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,py=`#include <common>
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
}`,my=`#if DEPTH_PACKING == 3200
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
}`,gy=`#define DISTANCE
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
}`,xy=`#define DISTANCE
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
}`,_y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vy=`uniform float scale;
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
}`,My=`uniform vec3 diffuse;
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
}`,Sy=`#include <common>
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
}`,by=`uniform vec3 diffuse;
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
}`,Ty=`#define LAMBERT
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
}`,Ey=`#define LAMBERT
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
}`,wy=`#define MATCAP
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
}`,Ay=`#define MATCAP
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
}`,Ry=`#define NORMAL
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
}`,Cy=`#define NORMAL
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
}`,Iy=`#define PHONG
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
}`,Py=`#define PHONG
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
}`,Ly=`#define STANDARD
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
}`,Dy=`#define STANDARD
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
}`,Ny=`#define TOON
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
}`,Fy=`#define TOON
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
}`,Uy=`uniform float size;
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
}`,Oy=`uniform vec3 diffuse;
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
}`,By=`#include <common>
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
}`,zy=`uniform vec3 color;
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
}`,ky=`uniform float rotation;
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
}`,Hy=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:cx,alphahash_pars_fragment:hx,alphamap_fragment:ux,alphamap_pars_fragment:fx,alphatest_fragment:dx,alphatest_pars_fragment:px,aomap_fragment:mx,aomap_pars_fragment:gx,batching_pars_vertex:xx,batching_vertex:_x,begin_vertex:yx,beginnormal_vertex:vx,bsdfs:Mx,iridescence_fragment:Sx,bumpmap_pars_fragment:bx,clipping_planes_fragment:Tx,clipping_planes_pars_fragment:Ex,clipping_planes_pars_vertex:wx,clipping_planes_vertex:Ax,color_fragment:Rx,color_pars_fragment:Cx,color_pars_vertex:Ix,color_vertex:Px,common:Lx,defaultnormal_vertex:Dx,displacementmap_pars_vertex:Nx,displacementmap_vertex:Fx,emissivemap_fragment:Ux,emissivemap_pars_fragment:Ox,colorspace_fragment:Bx,colorspace_pars_fragment:zx,envmap_fragment:kx,envmap_common_pars_fragment:Hx,envmap_pars_fragment:Gx,envmap_pars_vertex:Vx,envmap_physical_pars_fragment:e_,envmap_vertex:Wx,fog_vertex:Xx,fog_pars_vertex:qx,fog_fragment:Yx,fog_pars_fragment:Kx,gradientmap_pars_fragment:Zx,lightmap_pars_fragment:$x,lights_lambert_fragment:Jx,lights_lambert_pars_fragment:jx,lights_pars_begin:Qx,lights_toon_fragment:t_,lights_toon_pars_fragment:n_,lights_phong_fragment:i_,lights_phong_pars_fragment:s_,lights_physical_fragment:r_,lights_physical_pars_fragment:o_,lights_fragment_begin:a_,lights_fragment_maps:l_,lights_fragment_end:c_,lightprobes_pars_fragment:h_,logdepthbuf_fragment:u_,logdepthbuf_pars_fragment:f_,logdepthbuf_pars_vertex:d_,logdepthbuf_vertex:p_,map_fragment:m_,map_pars_fragment:g_,map_particle_fragment:x_,map_particle_pars_fragment:__,metalnessmap_fragment:y_,metalnessmap_pars_fragment:v_,morphinstance_vertex:M_,morphcolor_vertex:S_,morphnormal_vertex:b_,morphtarget_pars_vertex:T_,morphtarget_vertex:E_,normal_fragment_begin:w_,normal_fragment_maps:A_,normal_pars_fragment:R_,normal_pars_vertex:C_,normal_vertex:I_,normalmap_pars_fragment:P_,clearcoat_normal_fragment_begin:L_,clearcoat_normal_fragment_maps:D_,clearcoat_pars_fragment:N_,iridescence_pars_fragment:F_,opaque_fragment:U_,packing:O_,premultiplied_alpha_fragment:B_,project_vertex:z_,dithering_fragment:k_,dithering_pars_fragment:H_,roughnessmap_fragment:G_,roughnessmap_pars_fragment:V_,shadowmap_pars_fragment:W_,shadowmap_pars_vertex:X_,shadowmap_vertex:q_,shadowmask_pars_fragment:Y_,skinbase_vertex:K_,skinning_pars_vertex:Z_,skinning_vertex:$_,skinnormal_vertex:J_,specularmap_fragment:j_,specularmap_pars_fragment:Q_,tonemapping_fragment:ey,tonemapping_pars_fragment:ty,transmission_fragment:ny,transmission_pars_fragment:iy,uv_pars_fragment:sy,uv_pars_vertex:ry,uv_vertex:oy,worldpos_vertex:ay,background_vert:ly,background_frag:cy,backgroundCube_vert:hy,backgroundCube_frag:uy,cube_vert:fy,cube_frag:dy,depth_vert:py,depth_frag:my,distance_vert:gy,distance_frag:xy,equirect_vert:_y,equirect_frag:yy,linedashed_vert:vy,linedashed_frag:My,meshbasic_vert:Sy,meshbasic_frag:by,meshlambert_vert:Ty,meshlambert_frag:Ey,meshmatcap_vert:wy,meshmatcap_frag:Ay,meshnormal_vert:Ry,meshnormal_frag:Cy,meshphong_vert:Iy,meshphong_frag:Py,meshphysical_vert:Ly,meshphysical_frag:Dy,meshtoon_vert:Ny,meshtoon_frag:Fy,points_vert:Uy,points_frag:Oy,shadow_vert:By,shadow_frag:zy,sprite_vert:ky,sprite_frag:Hy},ye={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Oi={basic:{uniforms:mn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:mn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new be(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:mn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:mn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:mn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new be(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:mn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:mn([ye.points,ye.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:mn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:mn([ye.common,ye.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:mn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:mn([ye.sprite,ye.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:mn([ye.common,ye.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:mn([ye.lights,ye.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Oi.physical={uniforms:mn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Xe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};Fc={r:0,b:0,g:0},Gy=new Ge,ym=new Xe;ym.set(-1,0,0,0,1,0,0,0,1);xa=class extends Vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ko(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new En(5,5,5),r=new ri({name:"CubemapFromEquirect",uniforms:pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:cr});r.uniforms.tEquirect.value=t;let o=new Oe(s,r),a=t.minFilter;return t.minFilter===oi&&(t.minFilter=qt),new io(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Jp=256,Ky=3,Zy=20,vm=256,Mm=16,$y=3,Jy=new F,jy=new be,Oc=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new io(1,10,null),this._boxMesh=new Oe(new En(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Jy}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(jy));let m=new io(n,s,h);return m.position.copy(a),m.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=em(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Jp,bu(e))}_fromTexture(e,t){e.mapping===ur||e.mapping===oo?this._setSize(e.image.length===0?Jp:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=jp(e,!1,!1),n=Math.log2(e)-Ky;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=jp(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ur||e.mapping===oo?(this._cubemapMaterial===null&&(this._cubemapMaterial=em()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Qp()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Qy(),this._integrationMaterial=ev());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Mm);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-$y)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(vm*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=tv());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};cv={[nu]:"LINEAR_TONE_MAPPING",[iu]:"REINHARD_TONE_MAPPING",[su]:"CINEON_TONE_MAPPING",[ru]:"ACES_FILMIC_TONE_MAPPING",[au]:"AGX_TONE_MAPPING",[lu]:"NEUTRAL_TONE_MAPPING",[ou]:"CUSTOM_TONE_MAPPING"};Sm=new Yt,bm=new Qi(1,1),Tm=new Zo(1),Em=new zo,wm=new Al,Am=new Ko,tm=[],nm=[],im=new Float32Array(16),sm=new Float32Array(9),rm=new Float32Array(4);Bu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Iv(t.type)}},zu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$v(t.type)}},ku=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Uu=/(\w+)(\])?(\[|\.)?/g;ho=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Jv(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};jv=37297,Qv=0;lm=new Xe;iM={[nu]:"Linear",[iu]:"Reinhard",[su]:"Cineon",[ru]:"ACESFilmic",[au]:"AgX",[lu]:"Neutral",[ou]:"Custom"};Uc=new F;cM=/^[ \t]*#include +<([\w\d./]+)>/gm;uM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;dM={[oa]:"SHADOWMAP_TYPE_PCF",[so]:"SHADOWMAP_TYPE_VSM"};mM={[oo]:"ENVMAP_MODE_REFRACTION"};xM={[Xl]:"ENVMAP_BLENDING_MULTIPLY",[Rp]:"ENVMAP_BLENDING_MIX",[Cp]:"ENVMAP_BLENDING_ADD"};vM=0,Gu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Vu(e),t.set(e,n)),n}},Vu=class{constructor(e){this.id=vM++,this.code=e,this.usedTimes=0}};RM=0;LM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DM=`uniform sampler2D shadow_pass;
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
}`,NM=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],FM=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],xm=new Ge,ma=new F,Ou=new F;kM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HM=`
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

}`,Wu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new $o(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ri({vertexShader:kM,fragmentShader:HM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Oe(new tr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xu=class extends yi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,x=typeof XRWebGLBinding<"u",m=new Wu,g={},y=t.getContextAttributes(),w=null,M=null,R=[],A=[],_=new We,E=null,N=null,C=new Xt;C.viewport=new yt;let P=new Xt;P.viewport=new yt;let O=[C,P],z=new Hl,L=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ve=R[j];return ve===void 0&&(ve=new Zr,R[j]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(j){let ve=R[j];return ve===void 0&&(ve=new Zr,R[j]=ve),ve.getGripSpace()},this.getHand=function(j){let ve=R[j];return ve===void 0&&(ve=new Zr,R[j]=ve),ve.getHandSpace()};function Z(j){let ve=A.indexOf(j.inputSource);if(ve===-1)return;let Ee=R[ve];Ee!==void 0&&(Ee.update(j.inputSource,j.frame,c||o),Ee.dispatchEvent({type:j.type,data:j.inputSource}))}function q(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",ie);for(let j=0;j<R.length;j++){let ve=A[j];ve!==null&&(A[j]=null,R[j].disconnect(ve))}L=null,W=null,m.reset();for(let j in g)delete g[j];if(e.setRenderTarget(w),f=null,d=null,u=null,s=null,M=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(_.width,_.height,!1),N!==null){let j=N.camera;j.fov=N.fov,j.zoom=N.zoom,j.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",q),s.addEventListener("inputsourceschange",ie),y.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Fe=null,Me=null;y.depth&&(Me=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=y.stencil?os:Ji,Fe=y.stencil?dr:vi);let $e={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer($e),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Vn(d.textureWidth,d.textureHeight,{format:ai,type:Un,depthTexture:new Qi(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Ee={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Ee),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Vn(f.framebufferWidth,f.framebufferHeight,{format:ai,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ke.setContext(s),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(j){for(let ve=0;ve<j.removed.length;ve++){let Ee=j.removed[ve],Fe=A.indexOf(Ee);Fe>=0&&(A[Fe]=null,R[Fe].disconnect(Ee))}for(let ve=0;ve<j.added.length;ve++){let Ee=j.added[ve],Fe=A.indexOf(Ee);if(Fe===-1){for(let $e=0;$e<R.length;$e++)if($e>=A.length){A.push(Ee),Fe=$e;break}else if(A[$e]===null){A[$e]=Ee,Fe=$e;break}if(Fe===-1)break}let Me=R[Fe];Me&&Me.connect(Ee)}}function K(j,ve){ve===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ve.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ve=j.near,Ee=j.far;m.texture!==null&&(m.depthNear>0&&(ve=m.depthNear),m.depthFar>0&&(Ee=m.depthFar)),z.near=P.near=C.near=ve,z.far=P.far=C.far=Ee,(L!==z.near||W!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),L=z.near,W=z.far),z.layers.mask=j.layers.mask|6,C.layers.mask=z.layers.mask&-5,P.layers.mask=z.layers.mask&-3;let Fe=j.parent,Me=z.cameras;K(z,Fe);for(let $e=0;$e<Me.length;$e++)K(Me[$e],Fe);z.projectionMatrix.copy(C.projectionMatrix),z.projectionMatrixInverse.copy(C.projectionMatrixInverse),N===null&&j.isPerspectiveCamera&&(N={camera:j,fov:j.fov,zoom:j.zoom}),te(j,z,Fe)};function te(j,ve,Ee){Ee===null?j.matrix.copy(ve.matrixWorld):(j.matrix.copy(Ee.matrixWorld),j.matrix.invert(),j.matrix.multiply(ve.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ve.projectionMatrix),j.projectionMatrixInverse.copy(ve.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Zs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(j){return g[j]};let ne=null;function Re(j,ve){if(h=ve.getViewerPose(c||o),p=ve,h!==null){let Ee=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Fe=!1;Ee.length!==z.cameras.length&&(z.cameras.length=0,Fe=!0);for(let ze=0;ze<Ee.length;ze++){let xt=Ee[ze],bt=null;if(f!==null)bt=f.getViewport(xt);else{let on=u.getViewSubImage(d,xt);bt=on.viewport,ze===0&&(e.setRenderTargetTextures(M,on.colorTexture,on.depthStencilTexture),e.setRenderTarget(M))}let it=O[ze];it===void 0&&(it=new Xt,it.layers.enable(ze),it.viewport=new yt,O[ze]=it),it.matrix.fromArray(xt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(xt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(bt.x,bt.y,bt.width,bt.height),ze===0&&(z.matrix.copy(it.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Fe===!0&&z.cameras.push(it)}let Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let ze=u.getDepthInformation(Ee[0]);ze&&ze.isValid&&ze.texture&&m.init(ze,s.renderState)}if(Me&&Me.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let ze=0;ze<Ee.length;ze++){let xt=Ee[ze].camera;if(xt){let bt=g[xt];bt||(bt=new $o,g[xt]=bt);let it=u.getCameraImage(xt);bt.sourceTexture=it}}}}for(let Ee=0;Ee<R.length;Ee++){let Fe=A[Ee],Me=R[Ee];Fe!==null&&Me!==void 0&&Me.update(Fe,ve,c||o)}ne&&ne(j,ve),ve.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ve}),p=null}let Ke=new _m;Ke.setAnimationLoop(Re),this.setAnimationLoop=function(j){ne=j},this.dispose=function(){}}},GM=new Ge,Rm=new Xe;Rm.set(-1,0,0,0,1,0,0,0,1);XM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ui=null;Bc=class{constructor(e={}){let{canvas:t=Vp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Un}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=f,m=new Set([tc,ec,Ql]),g=new Set([Un,vi,lo,dr,$l,Jl]),y=new Uint32Array(4),w=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},R=null,A=null,_=[],E=[],N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,P=!1,O=null,z=null,L=null,W=null;this._outputColorSpace=Et;let Z=0,q=0,ie=null,K=-1,te=null,ne=new yt,Re=new yt,Ke=null,j=new be(0),ve=0,Ee=t.width,Fe=t.height,Me=1,$e=null,kt=null,ze=new yt(0,0,Ee,Fe),xt=new yt(0,0,Ee,Fe),bt=!1,it=new Rs,on=new Rl,Vt=!1,Ln=!1,Ft=new Ge,Ai=new F,Qt=new yt,Jn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},jn=!1;function Qn(){return ie===null?Me:1}let B=n;function ei(T,U){return t.getContext(T,U)}let Lt,Dt,ge,Wt,Ue,qe,I,S,H,se,ee,le,pe,$,J,ue,D,Q,Y,fe,ae,ce,Pe;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",Je,!1),t.addEventListener("webglcontextcreationerror",_e,!1),B===null){let U="webgl2";if(B=ei(U,T),B===null)throw ei(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}je()}catch(T){throw t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),He("WebGLRenderer: "+T.message),T}function je(){Lt=new iv(B),Lt.init(),ae=new zM(B,Lt),Dt=new qy(B,Lt,e,ae),ge=new OM(B,Lt),Dt.reversedDepthBuffer&&d&&ge.buffers.depth.setReversed(!0),z=B.createFramebuffer(),L=B.createFramebuffer(),W=B.createFramebuffer(),Wt=new ov(B),Ue=new bM,qe=new BM(B,Lt,ge,Ue,Dt,ae,Wt),I=new nv(C),S=new lx(B),ce=new Wy(B,S),H=new sv(B,S,Wt,ce),se=new lv(B,H,S,ce,Wt),Q=new av(B,Dt,qe),J=new Yy(Ue),ee=new SM(C,I,Lt,Dt,ce,J),le=new VM(C,Ue),pe=new EM,$=new PM(Lt),D=new Vy(C,I,ge,se,p,l),ue=new UM(C,se,Dt),Pe=new WM(B,Wt,Dt,ge),Y=new Xy(B,Lt,Wt),fe=new rv(B,Lt,Wt),Wt.programs=ee.programs,C.capabilities=Dt,C.extensions=Lt,C.properties=Ue,C.renderLists=pe,C.shadowMap=ue,C.state=ge,C.info=Wt}x!==Un&&(N=new hv(x,t.width,t.height,a,s,r));let re=new Xu(C,B);this.xr=re,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let T=Lt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Lt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(T){T!==void 0&&(Me=T,this.setSize(Ee,Fe,!1))},this.getSize=function(T){return T.set(Ee,Fe)},this.setSize=function(T,U,X=!0){if(re.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=T,Fe=U,t.width=Math.floor(T*Me),t.height=Math.floor(U*Me),X===!0&&(t.style.width=T+"px",t.style.height=U+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(Ee*Me,Fe*Me).floor()},this.setDrawingBufferSize=function(T,U,X){Ee=T,Fe=U,Me=X,t.width=Math.floor(T*X),t.height=Math.floor(U*X),this.setViewport(0,0,T,U)},this.setEffects=function(T){if(x===Un){He("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let U=0;U<T.length;U++)if(T[U].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(ne)},this.getViewport=function(T){return T.copy(ze)},this.setViewport=function(T,U,X,k){T.isVector4?ze.set(T.x,T.y,T.z,T.w):ze.set(T,U,X,k),ge.viewport(ne.copy(ze).multiplyScalar(Qn()).round())},this.getScissor=function(T){return T.copy(xt)},this.setScissor=function(T,U,X,k){T.isVector4?xt.set(T.x,T.y,T.z,T.w):xt.set(T,U,X,k),ge.scissor(Re.copy(xt).multiplyScalar(Qn()).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(T){ge.setScissorTest(bt=T)},this.setOpaqueSort=function(T){$e=T},this.setTransparentSort=function(T){kt=T},this.getClearColor=function(T){return T.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,X=!0){let k=0;if(T){let G=!1;if(ie!==null){let me=ie.texture.format;G=m.has(me)}if(G){let me=ie.texture.type,Te=g.has(me),de=D.getClearColor(),Se=D.getClearAlpha(),Ce=de.r,Ze=de.g,st=de.b;Te?(y[0]=Ce,y[1]=Ze,y[2]=st,y[3]=Se,B.clearBufferuiv(B.COLOR,0,y)):(w[0]=Ce,w[1]=Ze,w[2]=st,w[3]=Se,B.clearBufferiv(B.COLOR,0,w))}else k|=B.COLOR_BUFFER_BIT}U&&(k|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(k|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&B.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),O=T},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),D.dispose(),pe.dispose(),$.dispose(),qe.dispose(),Ue.dispose(),I.dispose(),se.dispose(),H.dispose(),ce.dispose(),Pe.dispose(),ee.dispose(),re.dispose(),re.removeEventListener("sessionstart",ud),re.removeEventListener("sessionend",fd),Os.stop()};function De(T){T.preventDefault(),Bo("WebGLRenderer: Context Lost."),P=!0}function Je(){Bo("WebGLRenderer: Context Restored."),P=!1;let T=Wt.autoReset,U=ue.enabled,X=ue.autoUpdate,k=ue.needsUpdate,G=ue.type;je(),Wt.autoReset=T,ue.enabled=U,ue.autoUpdate=X,ue.needsUpdate=k,ue.type=G}function _e(T){He("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function _t(T){let U=T.target;U.removeEventListener("dispose",_t),en(U)}function en(T){_s(T),Ue.remove(T)}function _s(T){let U=Ue.get(T).programs;U!==void 0&&(U.forEach(function(X){ee.releaseProgram(X)}),T.isShaderMaterial&&ee.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,X,k,G,me){U===null&&(U=Jn);let Te=G.isMesh&&G.matrixWorld.determinantAffine()<0,de=eg(T,U,X,k,G);ge.setMaterial(k,Te);let Se=X.index,Ce=1;if(k.wireframe===!0){if(Se=H.getWireframeAttribute(X),Se===void 0)return;Ce=2}let Ze=X.drawRange,st=X.attributes.position,we=Ze.start*Ce,rt=(Ze.start+Ze.count)*Ce;me!==null&&(we=Math.max(we,me.start*Ce),rt=Math.min(rt,(me.start+me.count)*Ce)),Se!==null?(we=Math.max(we,0),rt=Math.min(rt,Se.count)):st!=null&&(we=Math.max(we,0),rt=Math.min(rt,st.count));let Ht=rt-we;if(Ht<0||Ht===1/0)return;ce.setup(G,k,de,X,Se);let At,Tt=Y;if(Se!==null&&(At=S.get(Se),Tt=fe,Tt.setIndex(At)),G.isMesh)k.wireframe===!0?(ge.setLineWidth(k.wireframeLinewidth*Qn()),Tt.setMode(B.LINES)):Tt.setMode(B.TRIANGLES);else if(G.isLine){let hn=k.linewidth;hn===void 0&&(hn=1),ge.setLineWidth(hn*Qn()),G.isLineSegments?Tt.setMode(B.LINES):G.isLineLoop?Tt.setMode(B.LINE_LOOP):Tt.setMode(B.LINE_STRIP)}else G.isPoints?Tt.setMode(B.POINTS):G.isSprite&&Tt.setMode(B.TRIANGLES);if(G.isBatchedMesh)if(Lt.get("WEBGL_multi_draw"))Tt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let hn=G._multiDrawStarts,Ae=G._multiDrawCounts,vn=G._multiDrawCount,ht=Se?S.get(Se).bytesPerElement:1,Bs=Ue.get(k).currentProgram.getUniforms();for(let un=0;un<vn;un++)Bs.setValue(B,"_gl_DrawID",un),Tt.render(hn[un]/ht,Ae[un])}else if(G.isInstancedMesh)Tt.renderInstances(we,Ht,G.count);else if(X.isInstancedBufferGeometry){let hn=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ae=Math.min(X.instanceCount,hn);Tt.renderInstances(we,Ht,Ae)}else Tt.render(we,Ht)};function hd(T,U,X,k){O!==null&&T.isNodeMaterial&&O.setObject(k,T),Vt===!0&&J.setState(T,X,!1),T.transparent===!0&&T.side===Pt&&T.forceSinglePass===!1?(T.side=ln,T.needsUpdate=!0,To(T,U,k),T.side=Di,T.needsUpdate=!0,To(T,U,k),T.side=Pt):To(T,U,k)}this.compile=function(T,U,X=null){X===null&&(X=T),O!==null&&O.renderStart(T,U,X),A=$.get(X),A.init(U),E.push(A),X.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),T!==X&&T.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),A.setupLights(),O!==null&&O.updateLights(A.state.lightsArray),Ln=this.localClippingEnabled,Vt=J.init(this.clippingPlanes,Ln),Vt===!0&&J.setGlobalState(this.clippingPlanes,U),O!==null&&ue.render(A.state.shadowsArray,X,U);let k=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let me=G.material;if(me)if(Array.isArray(me))for(let Te=0;Te<me.length;Te++){let de=me[Te];hd(de,X,U,G),k.add(de)}else hd(me,X,U,G),k.add(me)}),A=E.pop(),O!==null&&O.renderEnd(),k},this.compileAsync=function(T,U,X=null){let k=this.compile(T,U,X);return new Promise(G=>{function me(){if(k.forEach(function(Te){let Se=Ue.get(Te).currentProgram;(Se===void 0||Se.isReady())&&k.delete(Te)}),k.size===0){G(T);return}setTimeout(me,10)}Lt.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let mh=null;function j0(T){mh&&mh(T)}function ud(){Os.stop()}function fd(){Os.start()}let Os=new _m;Os.setAnimationLoop(j0),typeof self<"u"&&Os.setContext(self),this.setAnimationLoop=function(T){mh=T,re.setAnimationLoop(T),T===null?Os.stop():Os.start()},re.addEventListener("sessionstart",ud),re.addEventListener("sessionend",fd),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;O!==null&&O.renderStart(T,U);let X=re.enabled===!0&&re.isPresenting===!0,k=N!==null&&(ie===null||X)&&N.begin(C,ie);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(U),U=re.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,U,ie),A=$.get(T,E.length),A.init(U),A.state.textureUnits=qe.getTextureUnits(),E.push(A),Ft.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?on.setFromArrayCamera(U):it.setFromProjectionMatrix(Ft,ii,U.reversedDepth),Ln=this.localClippingEnabled,Vt=J.init(this.clippingPlanes,Ln),R=pe.get(T,_.length),R.init(),_.push(R),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){let Te=C.xr.getDepthSensingMesh();Te!==null&&gh(Te,U,-1/0,C.sortObjects)}gh(T,U,0,C.sortObjects),R.finish(),O!==null&&O.updateLights(A.state.lightsArray),C.sortObjects===!0&&R.sort($e,kt),jn=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,jn&&D.addToRenderList(R,T),this.info.autoReset===!0&&this.info.reset(),Vt===!0&&J.beginShadows();let G=A.state.shadowsArray;if(ue.render(G,T,U),Vt===!0&&J.endShadows(),(k&&N.hasRenderPass())===!1){let Te=R.opaque,de=R.transmissive;if(A.setupLights(),U.isArrayCamera){let Se=U.cameras;if(de.length>0)for(let Ce=0,Ze=Se.length;Ce<Ze;Ce++){let st=Se[Ce];pd(Te,de,T,st)}jn&&D.render(T);for(let Ce=0,Ze=Se.length;Ce<Ze;Ce++){let st=Se[Ce];dd(R,T,st,st.viewport)}}else de.length>0&&pd(Te,de,T,U),jn&&D.render(T),dd(R,T,U)}ie!==null&&q===0&&(qe.updateMultisampleRenderTarget(ie),qe.updateRenderTargetMipmap(ie)),k&&N.end(C),T.isScene===!0&&T.onAfterRender(C,T,U),ce.resetDefaultState(),K=-1,te=null,E.pop(),E.length>0?(A=E[E.length-1],qe.setTextureUnits(A.state.textureUnits),Vt===!0&&J.setGlobalState(C.clippingPlanes,A.state.camera)):A=null,_.pop(),_.length>0?R=_[_.length-1]:R=null,O!==null&&O.renderEnd()};function gh(T,U,X,k){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)A.pushLight(T),T.castShadow&&A.pushShadow(T);else if(T.isSprite){let Te=U.isArrayCamera?on:it;if(!T.frustumCulled||T.intersectsFrustum(Te)){k&&Qt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ft);let de=se.update(T),Se=T.material;Se.visible&&R.push(T,de,Se,X,Qt.z,null,U)}}else if(T.isMesh||T.isLine||T.isPoints){let Te=U.isArrayCamera?on:it;if(!T.frustumCulled||T.intersectsFrustum(Te)){let de=se.update(T),Se=T.material;if(k&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Qt.copy(T.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Qt.copy(de.boundingSphere.center)),Qt.applyMatrix4(T.matrixWorld).applyMatrix4(Ft)),Array.isArray(Se)){let Ce=de.groups;for(let Ze=0,st=Ce.length;Ze<st;Ze++){let we=Ce[Ze],rt=Se[we.materialIndex];rt&&rt.visible&&R.push(T,de,rt,X,Qt.z,we,U)}}else Se.visible&&R.push(T,de,Se,X,Qt.z,null,U)}}}let me=T.children;for(let Te=0,de=me.length;Te<de;Te++)gh(me[Te],U,X,k)}function dd(T,U,X,k){let{opaque:G,transmissive:me,transparent:Te}=T;A.setupLightsView(X),Vt===!0&&J.setGlobalState(C.clippingPlanes,X),k&&ge.viewport(ne.copy(k)),G.length>0&&Va(G,U,X),me.length>0&&Va(me,U,X),Te.length>0&&Va(Te,U,X),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function pd(T,U,X,k){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[k.id]===void 0){let we=Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[k.id]=new Vn(1,1,{generateMipmaps:!0,type:we?Mi:Un,minFilter:oi,samples:Math.max(4,Dt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:et.workingColorSpace})}let me=A.state.transmissionRenderTarget[k.id],Te=k.viewport||ne;me.setSize(Te.z*C.transmissionResolutionScale,Te.w*C.transmissionResolutionScale);let de=C.getRenderTarget(),Se=C.getActiveCubeFace(),Ce=C.getActiveMipmapLevel();C.setRenderTarget(me),C.getClearColor(j),ve=C.getClearAlpha(),ve<1&&C.setClearColor(16777215,.5),C.clear(),jn&&D.render(X);let Ze=C.toneMapping;C.toneMapping=Ni;let st=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),A.setupLightsView(k),Vt===!0&&J.setGlobalState(C.clippingPlanes,k),Va(T,X,k),qe.updateMultisampleRenderTarget(me),qe.updateRenderTargetMipmap(me),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let rt=0,Ht=U.length;rt<Ht;rt++){let At=U[rt],{object:Tt,geometry:hn,material:Ae,group:vn}=At;if(Ae.side===Pt&&Tt.layers.test(k.layers)){let ht=Ae.side;Ae.side=ln,Ae.needsUpdate=!0,md(Tt,X,k,hn,Ae,vn),Ae.side=ht,Ae.needsUpdate=!0,we=!0}}we===!0&&(qe.updateMultisampleRenderTarget(me),qe.updateRenderTargetMipmap(me))}C.setRenderTarget(de,Se,Ce),C.setClearColor(j,ve),st!==void 0&&(k.viewport=st),C.toneMapping=Ze}function Va(T,U,X){let k=U.isScene===!0?U.overrideMaterial:null;for(let G=0,me=T.length;G<me;G++){let Te=T[G],{object:de,geometry:Se,group:Ce}=Te,Ze=Te.material;Ze.allowOverride===!0&&k!==null&&(Ze=k),de.layers.test(X.layers)&&md(de,U,X,Se,Ze,Ce)}}function md(T,U,X,k,G,me){O!==null&&G.isNodeMaterial&&O.setObject(T,G),T.onBeforeRender(C,U,X,k,G,me),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(C,U,X,k,T,me),G.transparent===!0&&G.side===Pt&&G.forceSinglePass===!1?(G.side=ln,G.needsUpdate=!0,C.renderBufferDirect(X,U,k,G,T,me),G.side=Di,G.needsUpdate=!0,C.renderBufferDirect(X,U,k,G,T,me),G.side=Pt):C.renderBufferDirect(X,U,k,G,T,me),T.onAfterRender(C,U,X,k,G,me)}function gd(T){let U=0;for(let X of T)X.texture!==null&&U++;return U}function To(T,U,X){U.isScene!==!0&&(U=Jn);let k=Ue.get(T),G=A.state.lights,me=A.state.shadowsArray,Te=G.state.version,de=ee.getParameters(T,G.state,me,U,X,A.state.lightProbeGridArray),Se=ee.getProgramCacheKey(de),Ce=k.programs;k.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?U.environment:null,k.fog=U.fog;let Ze=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;k.envMap=I.get(T.envMap||k.environment,Ze),k.envMapRotation=k.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Ce===void 0&&(T.addEventListener("dispose",_t),Ce=new Map,k.programs=Ce,k.programVariants=new Map);let st=Ce.get(Se);if(st!==void 0){if(k.currentProgram===st&&k.lightsStateVersion===Te)return _d(T,de),st}else de.uniforms=ee.getUniforms(T),O!==null&&T.isNodeMaterial&&O.build(T,X,de),T.onBeforeCompile(de,C),st=ee.acquireProgram(de,Se),Ce.set(Se,st),k.uniforms=de.uniforms;let we=k.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(we.clippingPlanes=J.uniform),_d(T,de),k.needsLights=ng(T),k.lightsStateVersion=Te,k.needsLights&&(we.ambientLightColor.value=G.state.ambient,we.lightProbe.value=G.state.probe,we.sunLights.value=G.state.sun,we.sunLightShadows.value=G.state.sunShadow,we.directionalLights.value=G.state.directional,we.directionalLightShadows.value=G.state.directionalShadow,we.spotLights.value=G.state.spot,we.spotLightShadows.value=G.state.spotShadow,we.rectAreaLights.value=G.state.rectArea,we.ltc_1.value=G.state.rectAreaLTC1,we.ltc_2.value=G.state.rectAreaLTC2,we.pointLights.value=G.state.point,we.pointLightShadows.value=G.state.pointShadow,we.hemisphereLights.value=G.state.hemi,we.sunShadowMatrix.value=G.state.sunShadowMatrix,we.sunShadowCascade.value=G.state.sunShadowCascade,we.directionalShadowMatrix.value=G.state.directionalShadowMatrix,we.spotLightMatrix.value=G.state.spotLightMatrix,we.spotLightMap.value=G.state.spotLightMap,we.pointShadowMatrix.value=G.state.pointShadowMatrix),k.numLightProbeGrids=gd(A.state.lightProbeGridArray),k.currentProgram=st,k.uniformsList=null,st}function Q0(T,U,X,k,G){let me=Ue.get(T),Te=me.currentProgram.id+","+k+","+G,de=me.programVariants.get(Te);return de===void 0?(de=To(T,U,X),me.programVariants.set(Te,de)):(me.currentProgram=de,me.uniformsList=null,me.outputColorSpace=k,me.toneMapping=G),de}function xd(T){if(T.uniformsList===null){let U=T.currentProgram.getUniforms();T.uniformsList=ho.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function _d(T,U){let X=Ue.get(T);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function eg(T,U,X,k,G){U.isScene!==!0&&(U=Jn),qe.resetTextureUnits();let me=U.fog,Te=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?U.environment:null,de=ie===null?C.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:et.workingColorSpace,Se=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ce=I.get(k.envMap||Te,Se),Ze=k.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,st=!!X.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),we=!!X.morphAttributes.position,rt=!!X.morphAttributes.normal,Ht=!!X.morphAttributes.color,At=Ni;k.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(At=C.toneMapping);let Tt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,hn=Tt!==void 0?Tt.length:0,Ae=Ue.get(k),vn=A.state.lights;if(Vt===!0&&(Ln===!0||T!==te)){let Ut=T===te&&k.id===K;J.setState(k,T,Ut)}let ht=!1,Bs=!1;k.version===Ae.__version?Ae.needsLights&&Ae.lightsStateVersion!==vn.state.version||G.isBatchedMesh&&Ae.batching===!1||!G.isBatchedMesh&&Ae.batching===!0||G.isBatchedMesh&&Ae.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Ae.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Ae.instancing===!1||!G.isInstancedMesh&&Ae.instancing===!0||G.isSkinnedMesh&&Ae.skinning===!1||!G.isSkinnedMesh&&Ae.skinning===!0||G.isInstancedMesh&&Ae.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ae.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ae.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ae.instancingMorph===!1&&G.morphTexture!==null||Ae.envMap!==Ce||k.fog===!0&&Ae.fog!==me||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==J.numPlanes||Ae.numIntersection!==J.numIntersection)||Ae.vertexAlphas!==Ze||Ae.vertexTangents!==st||Ae.morphTargets!==we||Ae.morphNormals!==rt||Ae.morphColors!==Ht||Ae.morphTargetsCount!==hn||Ae.numLightProbeGrids!==gd(A.state.lightProbeGridArray)?ht=!0:(Ae.outputColorSpace!==de||Ae.toneMapping!==At)&&(Bs=!0):(ht=!0,Ae.__version=k.version);let un=Ae.currentProgram;(ht===!0||Bs===!0)&&(un=Bs===!0?Q0(k,U,G,de,At):To(k,U,G),O&&k.isNodeMaterial&&O.onUpdateProgram(k,un,Ae));let Wa=!1,ys=!1,zs=!1,lt=un.getUniforms(),an=Ae.uniforms;if(ge.useProgram(un.program)&&(Wa=!0,ys=!0,zs=!0),k.id!==K&&(K=k.id,ys=!0),Wa||te!==T){ge.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),lt.setValue(B,"projectionMatrix",T.projectionMatrix),lt.setValue(B,"viewMatrix",T.matrixWorldInverse);let tn=lt.map.cameraPosition;tn!==void 0&&tn.setValue(B,Ai.setFromMatrixPosition(T.matrixWorld)),Dt.logarithmicDepthBuffer&&lt.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&lt.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),te!==T&&(te=T,ys=!0,zs=!0)}if(Ae.needsLights&&(vn.state.sunShadowMap.length>0&&lt.setValue(B,"sunShadowMap",vn.state.sunShadowMap,qe),vn.state.directionalShadowMap.length>0&&lt.setValue(B,"directionalShadowMap",vn.state.directionalShadowMap,qe),vn.state.spotShadowMap.length>0&&lt.setValue(B,"spotShadowMap",vn.state.spotShadowMap,qe),vn.state.pointShadowMap.length>0&&lt.setValue(B,"pointShadowMap",vn.state.pointShadowMap,qe)),G.isSkinnedMesh){lt.setOptional(B,G,"bindMatrix"),lt.setOptional(B,G,"bindMatrixInverse");let Ut=G.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),lt.setValue(B,"boneTexture",Ut.boneTexture,qe))}G.isBatchedMesh&&(lt.setOptional(B,G,"batchingTexture"),lt.setValue(B,"batchingTexture",G._matricesTexture,qe),lt.setOptional(B,G,"batchingIdTexture"),lt.setValue(B,"batchingIdTexture",G._indirectTexture,qe),lt.setOptional(B,G,"batchingColorTexture"),G._colorsTexture!==null&&lt.setValue(B,"batchingColorTexture",G._colorsTexture,qe));let mi=X.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0)&&Q.update(G,X,un),(ys||Ae.receiveShadow!==G.receiveShadow)&&(Ae.receiveShadow=G.receiveShadow,lt.setValue(B,"receiveShadow",G.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&U.environment!==null&&(an.envMapIntensity.value=U.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=qM()),ys){if(lt.setValue(B,"toneMappingExposure",C.toneMappingExposure),Ae.needsLights&&tg(an,zs),me&&k.fog===!0&&le.refreshFogUniforms(an,me),le.refreshMaterialUniforms(an,k,Me,Fe,A.state.transmissionRenderTarget[T.id]),Ae.needsLights&&Ae.numLightProbeGrids>0){let Ut=M,tn=0;for(let Vi of A.state.lightProbeGridArray)Vi.texture!==null&&(Ut.textures[tn]=Vi.texture,Ut.min[tn]=Vi.boundingBox.min,Ut.max[tn]=Vi.boundingBox.max,Ut.resolution[tn]=Vi.resolution,tn++);for(let Vi in Ut)Ut[Vi].length=tn;an.probesSH.value=Ut.textures,an.probesMin.value=Ut.min,an.probesMax.value=Ut.max,an.probesResolution.value=Ut.resolution}ho.upload(B,xd(Ae),an,qe)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ho.upload(B,xd(Ae),an,qe),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&lt.setValue(B,"center",G.center),lt.setValue(B,"modelViewMatrix",G.modelViewMatrix),lt.setValue(B,"normalMatrix",G.normalMatrix),lt.setValue(B,"modelMatrix",G.matrixWorld),k.uniformsGroups!==void 0){let Ut=k.uniformsGroups;for(let tn=0,Vi=Ut.length;tn<Vi;tn++){let vd=Ut[tn];Pe.update(vd,un),Pe.bind(vd,un)}}return un}function tg(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.sunLights.needsUpdate=U,T.sunLightShadows.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function ng(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(T,U,X){let k=Ue.get(T);k.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Ue.get(T.texture).__webglTexture=U,Ue.get(T.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:X,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){let X=Ue.get(T);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,X=0){ie=T,Z=U,q=X;let k=null,G=!1,me=!1;if(T){let de=Ue.get(T);if(de.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(B.FRAMEBUFFER,de.__webglFramebuffer),ne.copy(T.viewport),Re.copy(T.scissor),Ke=T.scissorTest,ge.viewport(ne),ge.scissor(Re),ge.setScissorTest(Ke),K=-1;return}else if(de.__webglFramebuffer===void 0)qe.setupRenderTarget(T);else if(de.__hasExternalTextures)qe.rebindTextures(T,Ue.get(T.texture).__webglTexture,Ue.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ze=T.depthTexture;if(de.__boundDepthTexture!==Ze){if(Ze!==null&&Ue.has(Ze)&&(T.width!==Ze.image.width||T.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");qe.setupDepthRenderbuffer(T)}}let Se=T.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(me=!0);let Ce=Ue.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ce[U])?k=Ce[U][X]:k=Ce[U],G=!0):T.samples>0&&qe.useMultisampledRTT(T)===!1?k=Ue.get(T).__webglMultisampledFramebuffer:Array.isArray(Ce)?k=Ce[X]:k=Ce,ne.copy(T.viewport),Re.copy(T.scissor),Ke=T.scissorTest}else ne.copy(ze).multiplyScalar(Me).floor(),Re.copy(xt).multiplyScalar(Me).floor(),Ke=bt;if(X!==0&&(k=z),ge.bindFramebuffer(B.FRAMEBUFFER,k)&&ge.drawBuffers(T,k),ge.viewport(ne),ge.scissor(Re),ge.setScissorTest(Ke),G){let de=Ue.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,de.__webglTexture,X)}else if(me){let de=U;for(let Se=0;Se<T.textures.length;Se++){let Ce=Ue.get(T.textures[Se]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Se,Ce.__webglTexture,X,de)}}else if(T!==null&&X!==0){let de=Ue.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,de.__webglTexture,X)}K=-1};function yd(T){let U=Ue.get(T);return(U.__readFormat!==T.format||U.__readType!==T.type)&&(U.__readFormat=T.format,U.__readType=T.type,U.__formatReadable=Dt.textureFormatReadable(T.format),U.__typeReadable=Dt.textureTypeReadable(T.type)),U}this.readRenderTargetPixels=function(T,U,X,k,G,me,Te,de=0){if(!(T&&T.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Ue.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(Se=Se[Te],Array.isArray(Se)&&(Se=Se[0])),Se){ge.bindFramebuffer(B.FRAMEBUFFER,Se);try{let Ce=T.textures[de],Ze=Ce.format,st=Ce.type;T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+de);let we=yd(Ce);if(we.__formatReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(we.__typeReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-k&&X>=0&&X<=T.height-G&&B.readPixels(U,X,k,G,ae.convert(Ze),ae.convert(st),me)}finally{let Ce=ie!==null?Ue.get(ie).__webglFramebuffer:null;ge.bindFramebuffer(B.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(T,U,X,k,G,me,Te,de=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Ue.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(Se=Se[Te],Array.isArray(Se)&&(Se=Se[0])),Se)if(U>=0&&U<=T.width-k&&X>=0&&X<=T.height-G){ge.bindFramebuffer(B.FRAMEBUFFER,Se);let Ce=T.textures[de],Ze=Ce.format,st=Ce.type;T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+de);let we=yd(Ce);if(we.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(we.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let rt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,rt),B.bufferData(B.PIXEL_PACK_BUFFER,me.byteLength,B.STREAM_READ),B.readPixels(U,X,k,G,ae.convert(Ze),ae.convert(st),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Ht=ie!==null?Ue.get(ie).__webglFramebuffer:null;ge.bindFramebuffer(B.FRAMEBUFFER,Ht);let At=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Xp(B,At,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,rt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,me),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(rt),B.deleteSync(At),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,X=0){let k=Math.pow(2,-X),G=Math.floor(T.image.width*k),me=Math.floor(T.image.height*k),Te=U!==null?U.x:0,de=U!==null?U.y:0;qe.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,X,0,0,Te,de,G,me),ge.unbindTexture()},this.copyTextureToTexture=function(T,U,X=null,k=null,G=0,me=0){let Te,de,Se,Ce,Ze,st,we,rt,Ht,At=T.isCompressedTexture?T.mipmaps[me]:T.image;if(X!==null)Te=X.max.x-X.min.x,de=X.max.y-X.min.y,Se=X.isBox3?X.max.z-X.min.z:1,Ce=X.min.x,Ze=X.min.y,st=X.isBox3?X.min.z:0;else{let lt=Math.pow(2,-G);Te=Math.floor(At.width*lt),de=Math.floor(At.height*lt),T.isDataArrayTexture?Se=At.depth:T.isData3DTexture?Se=Math.floor(At.depth*lt):Se=1,Ce=0,Ze=0,st=0}k!==null?(we=k.x,rt=k.y,Ht=k.z):(we=0,rt=0,Ht=0);let Tt=ae.convert(U.format),hn=ae.convert(U.type),Ae;U.isData3DTexture?(qe.setTexture3D(U,0),Ae=B.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(qe.setTexture2DArray(U,0),Ae=B.TEXTURE_2D_ARRAY):(qe.setTexture2D(U,0),Ae=B.TEXTURE_2D),ge.activeTexture(B.TEXTURE0),ge.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,U.flipY),ge.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),ge.pixelStorei(B.UNPACK_ALIGNMENT,U.unpackAlignment);let vn=ge.getParameter(B.UNPACK_ROW_LENGTH),ht=ge.getParameter(B.UNPACK_IMAGE_HEIGHT),Bs=ge.getParameter(B.UNPACK_SKIP_PIXELS),un=ge.getParameter(B.UNPACK_SKIP_ROWS),Wa=ge.getParameter(B.UNPACK_SKIP_IMAGES);ge.pixelStorei(B.UNPACK_ROW_LENGTH,At.width),ge.pixelStorei(B.UNPACK_IMAGE_HEIGHT,At.height),ge.pixelStorei(B.UNPACK_SKIP_PIXELS,Ce),ge.pixelStorei(B.UNPACK_SKIP_ROWS,Ze),ge.pixelStorei(B.UNPACK_SKIP_IMAGES,st);let ys=T.isDataArrayTexture||T.isData3DTexture,zs=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){let lt=Ue.get(T),an=Ue.get(U),mi=Ue.get(lt.__renderTarget),Ut=Ue.get(an.__renderTarget);ge.bindFramebuffer(B.READ_FRAMEBUFFER,mi.__webglFramebuffer),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let tn=0;tn<Se;tn++)ys&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ue.get(T).__webglTexture,G,st+tn),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ue.get(U).__webglTexture,me,Ht+tn)),B.blitFramebuffer(Ce,Ze,Ce+Te,Ze+de,we,rt,we+Te,rt+de,B.DEPTH_BUFFER_BIT,B.NEAREST);ge.bindFramebuffer(B.READ_FRAMEBUFFER,null),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(G!==0||T.isRenderTargetTexture||Ue.has(T)){let lt=Ue.get(T),an=Ue.get(U);ge.bindFramebuffer(B.READ_FRAMEBUFFER,L),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,W);for(let mi=0;mi<Se;mi++)ys?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,lt.__webglTexture,G,st+mi):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,lt.__webglTexture,G),zs?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,an.__webglTexture,me,Ht+mi):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,an.__webglTexture,me),G!==0?B.blitFramebuffer(Ce,Ze,Ce+Te,Ze+de,we,rt,we+Te,rt+de,B.COLOR_BUFFER_BIT,B.NEAREST):zs?B.copyTexSubImage3D(Ae,me,we,rt,Ht+mi,Ce,Ze,Te,de):B.copyTexSubImage2D(Ae,me,we,rt,Ce,Ze,Te,de);ge.bindFramebuffer(B.READ_FRAMEBUFFER,null),ge.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else zs?T.isDataTexture||T.isData3DTexture?B.texSubImage3D(Ae,me,we,rt,Ht,Te,de,Se,Tt,hn,At.data):U.isCompressedArrayTexture?B.compressedTexSubImage3D(Ae,me,we,rt,Ht,Te,de,Se,Tt,At.data):B.texSubImage3D(Ae,me,we,rt,Ht,Te,de,Se,Tt,hn,At):T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,me,we,rt,Te,de,Tt,hn,At.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,me,we,rt,At.width,At.height,Tt,At.data):B.texSubImage2D(B.TEXTURE_2D,me,we,rt,Te,de,Tt,hn,At);ge.pixelStorei(B.UNPACK_ROW_LENGTH,vn),ge.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ht),ge.pixelStorei(B.UNPACK_SKIP_PIXELS,Bs),ge.pixelStorei(B.UNPACK_SKIP_ROWS,un),ge.pixelStorei(B.UNPACK_SKIP_IMAGES,Wa),me===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&B.generateMipmap(Ae),ge.unbindTexture()},this.initRenderTarget=function(T){Ue.get(T).__webglFramebuffer===void 0&&qe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?qe.setTextureCube(T,0):T.isData3DTexture?qe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?qe.setTexture2DArray(T,0):qe.setTexture2D(T,0),ge.unbindTexture()},this.resetState=function(){Z=0,q=0,ie=null,ge.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}});var v,St,gn,qu,b,Le,Si,hs,Ne,Rn,Bi=Dn(()=>{li();v={scene:null,camera:null,renderer:null,t:0,wdt:0,slow:1,hitstop:0,slowmoT:0,trauma:0,mode:"menu",paused:!1,player:null,input:null,animals:[],obstacles:[],barrels:[],timers:[],score:0,kills:0,combo:0,comboT:0,bestCombo:0,rage:0,rageOn:0,timeLeft:0,elapsed:0,boss:null,stats:null,onKill:null,onMulti:null,wx:{rain:0,storm:0},buff:{},eyeK:1,env:null},St=72,gn=[14099998,12720135,11735564,14826286],qu=[1710614,2763298,1118481],b=(i=1,e)=>e===void 0?Math.random()*i:i+Math.random()*(e-i),Le=i=>i[Math.random()*i.length|0],Si=(i,e,t)=>Math.max(e,Math.min(t,i)),hs=(i,e,t)=>i+(e-i)*t,Ne=(i=0,e=0,t=0)=>new F(i,e,t),Rn=(i,e)=>v.timers.push({t:i,fn:e})});function $u(){if(xe){xe.resume();return}let i=window.AudioContext||window.webkitAudioContext;if(!i)return;xe=new i,mr=xe.createGain(),mr.gain.value=.85;let e=xe.createDynamicsCompressor();e.threshold.value=-14,e.ratio.value=6,mr.connect(e),e.connect(xe.destination),us=xe.createGain(),us.gain.value=.9,us.connect(mr),po=xe.createGain(),po.gain.value=.16,po.connect(mr),gr=xe.createBuffer(1,xe.sampleRate*2,xe.sampleRate);let t=gr.getChannelData(0);for(let n=0;n<t.length;n++)t[n]=Math.random()*2-1;JM()}function Pm(i){Rt.muted=i,mr&&(mr.gain.value=i?0:.85)}function ct(i,e,t,n,s,r=0,o=us){if(!xe)return;let a=xe.currentTime+r,l=xe.createOscillator(),c=xe.createGain();l.type=i,l.frequency.setValueAtTime(e,a),t&&l.frequency.exponentialRampToValueAtTime(Math.max(1,t),a+n),c.gain.setValueAtTime(1e-4,a),c.gain.exponentialRampToValueAtTime(s,a+.008),c.gain.exponentialRampToValueAtTime(1e-4,a+n),l.connect(c),c.connect(o),l.start(a),l.stop(a+n+.05)}function pt(i,e,t,n,s="lowpass",r=0,o=.7,a=us){if(!xe)return;let l=xe.currentTime+r,c=xe.createBufferSource();c.buffer=gr,c.loop=!0;let h=xe.createBiquadFilter();h.type=s,h.Q.value=o,h.frequency.setValueAtTime(t,l),n&&h.frequency.exponentialRampToValueAtTime(Math.max(20,n),l+i);let u=xe.createGain();u.gain.setValueAtTime(e,l),u.gain.exponentialRampToValueAtTime(1e-4,l+i),c.connect(h),h.connect(u),u.connect(a),c.start(l,Math.random()*1.5),c.stop(l+i+.05)}function Cm(i,e,t={}){if(!xe||Ku>=7)return;Ku++,setTimeout(()=>Ku--,(e+(t.delay||0))*1e3+80);let n=xe.currentTime+(t.delay||0),s=t.vol||.5,r=t.f0,o=t.form||1,a=xe.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(r*i[0][1],n);for(let d=1;d<i.length;d++)a.frequency.exponentialRampToValueAtTime(r*i[d][1],n+e*i[d][0]);let l=xe.createOscillator(),c=xe.createGain();l.frequency.value=t.vib||9,c.gain.setValueAtTime(r*.01,n),c.gain.linearRampToValueAtTime(r*(t.vibAmt===void 0?.06:t.vibAmt),n+e),l.connect(c),c.connect(a.frequency);let h=xe.createGain();h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(s,n+.02),h.gain.setValueAtTime(s,n+e*(t.hold||.7)),h.gain.exponentialRampToValueAtTime(1e-4,n+e),[[850,1,5],[1350,.7,7],[2800,.35,8]].forEach(([d,f,p])=>{let x=xe.createBiquadFilter();x.type="bandpass",x.frequency.value=d*o,x.Q.value=p;let m=xe.createGain();m.gain.value=f,a.connect(x),x.connect(m),m.connect(h)});let u=[a,l];if(t.trem){let d=xe.createGain();d.gain.value=.55;let f=xe.createOscillator();f.type="square",f.frequency.value=t.trem;let p=xe.createGain();p.gain.value=.45,f.connect(p),p.connect(d.gain),h.connect(d),d.connect(us),f.start(n),u.push(f)}else h.connect(us);a.start(n),l.start(n),u.forEach(d=>d.stop(n+e+.05)),pt(e*.8,s*.22,2500*o,1800*o,"bandpass",t.delay||0,1.5)}function Cn(i,e,t=0){if(!xe)return;let n=Gc[i];if(e&&!n&&(n=Gc[i]={g:xe.createGain()},n.g.gain.value=1e-4,n.g.connect(us),n.g.gain.setTargetAtTime(1,xe.currentTime,.03),YM[i](n)),e&&n&&n.set(t),!e&&n){n.g.gain.setTargetAtTime(1e-4,xe.currentTime,.04);let s=n.stop,r=n.g;setTimeout(()=>{s.forEach(o=>{try{o.stop()}catch{}}),r.disconnect()},250),Gc[i]=null}}function Vc(){Object.keys(Gc).forEach(i=>Cn(i,!1))}function Zu(i,e,t,n,s){let r=xe.createOscillator(),o=xe.createGain();r.type=i,r.frequency.value=$M(e),o.gain.setValueAtTime(1e-4,t),o.gain.exponentialRampToValueAtTime(s,t+.01),o.gain.exponentialRampToValueAtTime(1e-4,t+n),r.connect(o),o.connect(po),r.start(t),r.stop(t+n+.03)}function JM(){fo=xe.currentTime+.1,setInterval(()=>{if(!(!xe||xe.state!=="running"))for(fo<xe.currentTime&&(fo=xe.currentTime+.05);fo<xe.currentTime+.25;){let i=60/(132*Rt.tempo)/2,e=(Hc>>3)%8,t=Hc%8,n=KM[e],s=fo;if(t%2===0){Zu("triangle",t%4===0?n[0]:n[0]+7,s,i*1.6,.9);let o=xe.createOscillator(),a=xe.createGain();o.frequency.setValueAtTime(130,s),o.frequency.exponentialRampToValueAtTime(40,s+.1),a.gain.setValueAtTime(.7,s),a.gain.exponentialRampToValueAtTime(1e-4,s+.12),o.connect(a),a.connect(po),o.start(s),o.stop(s+.15)}else{for(let o=1;o<4;o++)Zu("triangle",n[o]+12,s+o*.008,i*.7,.28);pt(.04,.25,8e3,6e3,"highpass",s-xe.currentTime,.7,po)}let r=ZM[Hc%64];r&&Zu("sine",r+12,s,i*1.7,.5),Hc++,fo+=i}},60)}var xe,mr,us,po,gr,Yu,Rt,Ku,Yn,he,Im,Gc,YM,KM,ZM,$M,Hc,fo,xr=Dn(()=>{Bi();xe=null,Yu={},Rt={muted:!1,tempo:1,wail:!0},Ku=0;Yn=(i,e)=>{if(!xe)return!1;let t=performance.now();return Yu[i]&&t-Yu[i]<e?!1:(Yu[i]=t,!0)};he={smg(){pt(.08,.32,3800,700),ct("square",190,60,.07,.16)},shotgun(){pt(.4,.8,2600,180),ct("sine",130,32,.32,.7),pt(.07,.22,5e3,2500,"highpass",.34),pt(.07,.22,4e3,2e3,"highpass",.46)},swing(i){pt(i?.3:.16,i?.35:.22,i?300:700,i?1500:2800,"bandpass",0,2)},slice(){pt(.1,.35,6e3,2e3,"highpass"),he.squish(.02)},squish(i=0){Yn("sq",45)&&(pt(.22,.5,950,140,"lowpass",i,3),ct("sine",170,48,.18,.3,i))},splat(){Yn("sp",45)&&(pt(.32,.6,1300,90,"lowpass",0,2),ct("sine",115,38,.26,.5))},boom(i=1){Yn("boom",60)&&(pt(1,.9*i,1900,55),ct("sine",95,26,.75,.9*i),pt(.14,.35*i,8e3,2e3,"highpass"))},slam(){pt(.5,.9,700,50),ct("sine",70,24,.55,1),ct("triangle",220,60,.12,.4)},crack(){ct("square",900,200,.06,.5),pt(.08,.6,3e3,800,"bandpass",0,1.5),ct("sine",180,60,.15,.5)},kick(){pt(.12,.5,500,120),ct("sine",150,55,.14,.5)},thud(){Yn("thud",60)&&(pt(.14,.35,380,90),ct("sine",110,50,.12,.3))},clank(){Yn("clank",50)&&(ct("square",b(700,1200),300,.08,.22),ct("triangle",b(1800,2600),900,.12,.16),pt(.1,.3,5e3,1500,"bandpass",0,4))},pop(){ct("sine",500,1500,.07,.4),pt(.1,.3,2e3,500)},whoosh(){pt(.5,.3,500,3500,"bandpass",0,1.2)},missile(){Yn("mis",40)&&(pt(.6,.3,900,3e3,"bandpass",0,1.5),ct("sawtooth",160,420,.4,.12))},sling(){ct("triangle",220,700,.12,.35),pt(.12,.2,1500,4e3,"bandpass",0,2)},stretch(i){Yn("str",90)&&ct("triangle",140+i*260,150+i*280,.09,.08)},ding(){ct("sine",1760,1760,.5,.25),ct("sine",2637,2637,.6,.18,.06)},lock(){Yn("lock",70)&&ct("square",1400,1400,.04,.08)},hole(){ct("sine",300,30,1,.6),pt(1,.3,3e3,100)},ignite(){Yn("ign",120)&&pt(.3,.3,800,3e3,"bandpass",0,1)},splash(){pt(.5,.5,3e3,500,"bandpass",0,.8)},ui(){ct("triangle",660,880,.08,.2)},rage(){ct("sawtooth",110,440,.5,.35),ct("sawtooth",165,660,.5,.25),pt(.6,.3,500,6e3,"bandpass",0,1)},announce(i){let e=523*Math.pow(1.06,Math.min(i,12));[0,4,7,12].forEach((t,n)=>ct("square",e*Math.pow(2,t/12),0,.14,.13,n*.06))},end(){[0,4,7,12,16].forEach((i,e)=>ct("triangle",392*Math.pow(2,i/12),0,.3,.25,e*.12))},scream(i=1,e=!1){if(!Yn("scr",e?10:70))return;let t=xe.currentTime,n=e?1.5:b(.25,.45),s=b(850,1300)*i,r=xe.createOscillator(),o=xe.createGain(),a=xe.createOscillator(),l=xe.createGain();r.type="triangle",r.frequency.setValueAtTime(s,t),r.frequency.linearRampToValueAtTime(s*1.6,t+.07),r.frequency.exponentialRampToValueAtTime(s*(e?.3:.75),t+n),a.frequency.value=26,l.gain.value=s*.07,a.connect(l),l.connect(r.frequency),o.gain.setValueAtTime(1e-4,t),o.gain.exponentialRampToValueAtTime(.2,t+.02),o.gain.exponentialRampToValueAtTime(1e-4,t+n),r.connect(o),o.connect(us),r.start(t),a.start(t),r.stop(t+n+.05),a.stop(t+n+.05)}};Im={yelp:()=>[[[0,1],[.25,1.7],[1,1.2]],b(.22,.34),{}],long:()=>[[[0,1],[.08,1.8],[.5,1.65],[1,1.25]],b(1,1.5),{vibAmt:.09,vib:11}],fall:()=>[[[0,1.2],[.1,2],[1,.55]],b(1.3,1.8),{vibAmt:.05}],rise:()=>[[[0,.9],[1,2.6]],1.1,{vibAmt:.1,vib:14}],cut:()=>[[[0,1.3],[.5,2],[1,1.9]],.2,{hold:.95}],gurgle:()=>[[[0,1.3],[.2,1],[1,.5]],b(.7,1),{trem:17,vibAmt:.02}],squeak:()=>[[[0,2.2],[1,3.2]],.09,{hold:.9}],roar:()=>[[[0,.8],[.15,1.3],[1,.6]],2.2,{vibAmt:.12,vib:7,vol:.75}]};he.wail=(i,e=1,t=!1)=>{if(!xe||!Yn("wl"+i,i==="yelp"||i==="squeak"?60:110))return;if(t){let o=i==="yelp"||i==="squeak"||i==="cut"?2:6;for(let a=0;a<o;a++)ct("square",(950-a*110)*b(.9,1.1),700-a*100,.07,.16,a*.075);pt(.3,.2,4e3,800,"bandpass",0,6);return}let n=(Im[i]||Im.yelp)(),s=520*e*b(.92,1.1),r=.8+e*.35;Cm(n[0],n[1],Object.assign({f0:s,form:r},n[2])),i==="cut"&&Cm([[0,1.2],[1,.5]],.6,{f0:s*.8,form:r,trem:19,delay:.22,vol:.3})};he.cry=(i,e=1,t=!1,n=!0)=>{Rt.wail?he.wail(i,e,t):n&&he.scream(e,i!=="yelp")};he.thunder=(i=!0)=>{Yn("thun",250)&&(i&&(pt(.2,.9,7e3,1200,"highpass"),ct("square",1400,90,.12,.4)),pt(2.6,i?.9:.45,420,40),ct("sine",72,22,1.8,i?.8:.4),pt(1.6,.35,220,50,"lowpass",.6))};he.zap=()=>{Yn("zap",50)&&(ct("sawtooth",1900,180,.12,.28),pt(.14,.45,7e3,3e3,"highpass"))};he.pickup=()=>{[0,4,7,12,16,19].forEach((i,e)=>ct("triangle",587*Math.pow(2,i/12),0,.16,.24,e*.055))};he.siren=()=>{for(let i=0;i<6;i++)ct("sawtooth",420,860,.46,.22,i*.5)};he.tick=()=>{ct("square",1200,1200,.03,.12)};Gc={},YM={saw(i){let e=xe.createOscillator();e.type="sawtooth",e.frequency.value=58;let t=xe.createOscillator();t.frequency.value=23;let n=xe.createGain();n.gain.value=14,t.connect(n),n.connect(e.frequency);let s=xe.createGain();s.gain.value=.3,e.connect(s),s.connect(i.g);let r=xe.createBufferSource();r.buffer=gr,r.loop=!0;let o=xe.createBiquadFilter();o.type="bandpass",o.frequency.value=1700,o.Q.value=1.2;let a=xe.createGain();a.gain.value=.1,r.connect(o),o.connect(a),a.connect(i.g),e.start(),t.start(),r.start(),i.stop=[e,t,r],i.set=l=>{e.frequency.setTargetAtTime(58+l*55,xe.currentTime,.05),a.gain.setTargetAtTime(.1+l*.35,xe.currentTime,.05)}},flame(i){let e=xe.createBufferSource();e.buffer=gr,e.loop=!0;let t=xe.createBiquadFilter();t.type="bandpass",t.frequency.value=600,t.Q.value=.4;let n=xe.createGain();n.gain.value=.5,e.connect(t),t.connect(n),n.connect(i.g),e.start(),i.stop=[e],i.set=()=>{}},hole(i){let e=xe.createOscillator(),t=xe.createOscillator();e.frequency.value=48,t.frequency.value=52.5,t.type="triangle";let n=xe.createGain();n.gain.value=.55,e.connect(n),t.connect(n),n.connect(i.g);let s=xe.createBufferSource();s.buffer=gr,s.loop=!0;let r=xe.createBiquadFilter();r.type="bandpass",r.frequency.value=300,r.Q.value=3;let o=xe.createGain();o.gain.value=.25,s.connect(r),r.connect(o),o.connect(i.g),e.start(),t.start(),s.start(),i.stop=[e,t,s],i.set=()=>{}},rain(i){let e=xe.createBufferSource();e.buffer=gr,e.loop=!0;let t=xe.createBiquadFilter();t.type="highpass",t.frequency.value=1400;let n=xe.createBiquadFilter();n.type="lowpass",n.frequency.value=7500;let s=xe.createGain();s.gain.value=.05,e.connect(t),t.connect(n),n.connect(s),s.connect(i.g),e.start(),i.stop=[e],i.set=r=>{s.gain.setTargetAtTime(.04+r*.3,xe.currentTime,.3)}}};KM=[[48,60,64,67],[53,65,69,72],[55,67,71,74],[48,60,64,67],[45,57,60,64],[53,65,69,72],[55,67,71,74],[48,60,64,67]],ZM=[76,79,76,72,74,76,0,0,77,81,77,72,74,77,0,0,79,83,79,74,77,79,0,0,76,79,84,79,76,72,0,0,76,81,76,72,69,72,0,0,77,81,84,81,77,72,0,0,79,77,74,71,74,79,0,0,72,76,79,84,0,84,0,0],$M=i=>440*Math.pow(2,(i-69)/12),Hc=0,fo=0});function jM(){let i=document.createElement("canvas");i.width=i.height=256;let e=i.getContext("2d");e.fillStyle="#fff",e.beginPath();let t=14;for(let n=0;n<=t;n++){let s=n/t*Math.PI*2,r=62+Math.sin(n*2.7)*14+Math.random()*16,o=128+Math.cos(s)*r,a=128+Math.sin(s)*r;n===0?e.moveTo(o,a):e.quadraticCurveTo(128+Math.cos(s-.22)*(r+22),128+Math.sin(s-.22)*(r+22),o,a)}e.fill();for(let n=0;n<16;n++){let s=Math.random()*6.28,r=84+Math.random()*34,o=3+Math.random()*10;e.beginPath(),e.arc(128+Math.cos(s)*r,128+Math.sin(s)*r,o,0,6.28),e.fill()}return new Xn(i)}function Dm(){let i=new at({color:16777215}),e=new Zt({color:16777215,flatShading:!0});oe.decals=new Ju(700),oe.blood=new Ls(new wn(.5,0),i,1400,{g:24,drag:.4,die:!0,onGround:(o,a,l,c)=>{Math.random()<.34&&oe.decals.add(o,a,c*b(3.5,8),oe._bc||Le(gn),!0)}}),oe.oil=new Ls(new wn(.5,0),i,300,{g:24,drag:.4,die:!0,onGround:(o,a,l,c)=>{Math.random()<.4&&oe.decals.add(o,a,c*b(3.5,8),Le(qu),!0)}}),oe.meat=new Ls(new wn(.5,0),e,320,{bounce:.42,onGround:(o,a,l,c)=>{l<-3&&(oe.decals.add(o,a,c*b(2,4),Le(gn),!0),he.squish())}}),oe.scrap=new Ls(new En(1,.6,.8),e,260,{bounce:.5,onGround:(o,a,l)=>{l<-6&&he.clank()}}),oe.bone=new Ls(new Jo(.22,.9,2,6),new Zt({color:16052712}),90,{bounce:.5});let t=document.createElement("canvas");t.width=64,t.height=32;let n=t.getContext("2d");n.fillStyle="#F8F4E6",n.fillRect(0,0,64,32),n.fillStyle="#1B1B14",n.beginPath(),n.arc(32,16,8,0,6.28),n.fill(),n.fillStyle="#F8F4E6",n.beginPath(),n.arc(35,13,2.4,0,6.28),n.fill();let s=new Xn(t);s.colorSpace=Et,oe.eye=new Ls(new rn(.5,12,8),new at({map:s}),80,{bounce:.72,drag:.05}),oe.puffs=new ju(1500);for(let o=0;o<14;o++){let a=new Oe(new es(.82,1,40).rotateX(-Math.PI/2),new at({color:16777215,transparent:!0,depthWrite:!1,side:Pt}));a.visible=!1,v.scene.add(a),Wc.push({m:a,t:0,life:0,r0:0,r1:1})}let r=new En(1,1,1);for(let o=0;o<48;o++){let a=new Oe(r,new at({color:16770442}));a.visible=!1,v.scene.add(a),Xc.push({m:a,life:0})}fs=new or(16760928,0,40,1.4),v.scene.add(fs),Lm=document.getElementById("labels"),ya=document.getElementById("gore"),Qu()}function Qu(){if(!oe.puffs)return;let i=v.renderer.domElement.height;oe.puffs.mat.uniforms.scale.value=i/(2*Math.tan(v.camera.fov*Math.PI/360)),oe.puffs.mat.uniforms.maxPx.value=i*.26}function Nm(){["blood","oil","meat","scrap","bone","eye","puffs","decals"].forEach(i=>oe[i].clear()),Ds.forEach(i=>i.el.remove()),Ds.length=0,ya.innerHTML=""}function ef(i,e){oe.blood.update(i),oe.oil.update(i),oe.meat.update(i),oe.scrap.update(i),oe.bone.update(i),oe.eye.update(i),oe.puffs.update(i),oe.decals.update(i);for(let t of Wc){if(t.life<=0)continue;t.t+=i;let n=t.t/t.life;if(n>=1){t.life=0,t.m.visible=!1;continue}let s=1-(1-n)*(1-n);t.m.scale.setScalar(t.r0+(t.r1-t.r0)*s),t.m.material.opacity=1-n}for(let t of Xc)t.life>0&&(t.life-=e,t.life<=0&&(t.m.visible=!1));fs.intensity>0&&(fs.intensity=Math.max(0,fs.intensity-e*900)),v.trauma=Math.max(0,v.trauma-e*1.7),QM(e)}function Nt(i){v.trauma=Math.min(1,v.trauma+i)}function go(i,e,t=45){let n=_r.copy(i).sub(v.camera.position).length();n<t&&Nt(e*(1-n/t))}function In(i,e,t,n,s=16579056){let r=Wc.find(o=>o.life<=0)||Wc[0];r.m.position.set(i.x,Math.max(.08,i.y),i.z),r.m.material.color.set(s),r.m.visible=!0,r.t=0,r.life=n,r.r0=e,r.r1=t,r.m.scale.setScalar(e)}function qc(i,e,t=16770442,n=.035){let s=Xc.find(o=>o.life<=0)||Xc[0],r=i.distanceTo(e);s.m.position.copy(i).add(e).multiplyScalar(.5),s.m.lookAt(e),s.m.scale.set(n,n,r),s.m.material.color.set(t),s.m.visible=!0,s.life=.055}function On(i,e,t,n,s,r,o,a,l=!1,c=.65){let h=l?oe.oil:oe.blood,u=l?qu:gn;for(let d=0;d<o;d++){let f=a*b(.35,1.1);h.spawn(i+b(-.15,.15),e+b(-.15,.15),t+b(-.15,.15),n*f+b(-1,1)*a*c,s*f+b(-.4,1)*a*c,r*f+b(-1,1)*a*c,b(.07,.2),b(1.5,3),Le(u))}}function tf(i,e,t,n=6,s=!1){for(let r=0;r<n;r++)oe.puffs.spawn(i+b(-.3,.3),e+b(-.3,.3),t+b(-.3,.3),b(-2.5,2.5),b(0,3),b(-2.5,2.5),.3,b(.7,1.5),b(.3,.6),s?3815984:14826286,s?1381650:9310732,0,3)}function ds(i,e,t,n=8,s=1,r=15260085){for(let o=0;o<n;o++){let a=b(6.28),l=b(1.5,5)*s;oe.puffs.spawn(i,e+.2,t,Math.cos(a)*l,b(.5,2.5),Math.sin(a)*l,.3*s,b(.8,1.6)*s,b(.4,.8),r,16249308,.5,3)}}function va(i,e=6,t=1){let n=i.x,s=Math.max(.4,i.y),r=i.z,o=e/6;for(let a=0;a<16;a++){let l=b(6.28),c=b(-.2,1.2),h=b(2,9)*o;oe.puffs.spawn(n,s,r,Math.cos(l)*Math.cos(c)*h,Math.sin(c)*h+2,Math.sin(l)*Math.cos(c)*h,.8*o,b(1.8,3.4)*o,b(.35,.65),16773808,15234090,1,2.5)}for(let a=0;a<10;a++){let l=b(6.28),c=b(1,5)*o;oe.puffs.spawn(n,s+.5,r,Math.cos(l)*c,b(2,6)*o,Math.sin(l)*c,.8*o,b(2,3.6)*o,b(.8,1.5),7038037,3025439,1.5,1.6)}for(let a=0;a<12;a++){let l=b(6.28),c=b(.1,1.3),h=b(10,22)*o;oe.puffs.spawn(n,s,r,Math.cos(l)*Math.cos(c)*h,Math.sin(c)*h,Math.sin(l)*Math.cos(c)*h,.25,.3,b(.3,.6),16773808,15911244,-14,.5)}for(let a=0;a<6;a++){let l=b(6.28);oe.scrap.spawn(n,s,r,Math.cos(l)*b(4,10),b(6,12),Math.sin(l)*b(4,10),b(.12,.25),b(2,4),Le([4864792,3025439,7038037]))}In(i,.5,e*1.25,.4),oe.decals.add(n,r,e*b(.9,1.2),2367770,!0),fs.position.set(n,s+1.5,r),fs.intensity=260*o,go(i,.75*t,60),he.boom(t)}function Pn(i,e,t,n=6){for(let s=0;s<n;s++)oe.puffs.spawn(i,e,t,b(-6,6),b(1,8),b(-6,6),.14,.18,b(.2,.45),16773808,15911244,-16,.5)}function Yc(i,e=80){fs.position.copy(i),fs.intensity=e}function xn(i,e,t="",n=1.1,s=1.8){Ds.length>46&&Ds.shift().el.remove();let r=document.createElement("div");r.className="pop "+t,r.textContent=e,Lm.appendChild(r);let o={el:r,pos:i.clone(),life:n,max:n,rise:s,follow:null};return Ds.push(o),o}function ps(i,e,t=2){i.label&&(i.label.life=0);let n=xn(i.root.position,e,"bubble",t,0);return n.follow=i,i.label=n,n}function QM(i){let e=innerWidth,t=innerHeight,n=v.camera;for(let s=Ds.length-1;s>=0;s--){let r=Ds[s];if(r.life-=i,r.life<=0||r.follow&&r.follow.dead){r.el.remove(),r.follow&&r.follow.label===r&&(r.follow.label=null),Ds.splice(s,1);continue}r.follow?(r.pos.copy(r.follow.root.position),r.pos.y+=r.follow.H+.45):r.pos.y+=r.rise*i,_r.copy(r.pos).project(n);let o=r.pos.distanceTo(n.position);if(_r.z>1||Math.abs(_r.x)>1.2||Math.abs(_r.y)>1.2||r.follow&&o>45){r.el.style.display="none";continue}let a=Si(11/o,.5,1.25);r.el.style.display="",r.el.style.opacity=Math.min(1,r.life/.25),r.el.style.transform=`translate(-50%,-50%) translate(${(_r.x+1)/2*e}px,${(1-_r.y)/2*t}px) scale(${a.toFixed(2)})`}}function xo(i=2,e=!1){for(let t=0;t<i;t++){ya.childElementCount>16&&ya.firstChild.remove();let n=document.createElement("i"),s=Math.random()<.7,r=s?b(90,240):b(40,110),o=s?Le([b(-3,18),b(80,98)]):b(15,85),a=b(5,85);n.style.cssText=`left:${o}%;top:${a}%;width:${r}px;height:${r*b(.8,1.3)}px;border-radius:${b(40,60)}% ${b(40,60)}% ${b(40,60)}% ${b(40,60)}%;transform:rotate(${b(360)}deg);background:${e?"#1e1e19":Le(["#C21807","#B3120C","#D7261E"])}`,ya.appendChild(n),setTimeout(()=>n.remove(),2600)}}var zi,ci,_r,mo,oe,Ls,Ju,ju,Wc,Xc,fs,Lm,ya,Ds,_o=Dn(()=>{li();Bi();xr();zi=new ut,ci=new be,_r=new F,mo=new Ge().makeScale(0,0,0),oe={},Ls=class{constructor(e,t,n,s={}){this.max=n,this.cur=0,this.o=Object.assign({g:26,bounce:.45,drag:.15,die:!1,onGround:null},s),this.mesh=new Wn(e,t,n),this.mesh.frustumCulled=!1,this.mesh.instanceMatrix.setUsage(ls);for(let r=0;r<n;r++)this.mesh.setMatrixAt(r,mo),this.mesh.setColorAt(r,ci.set(16777215));this.p=new Float32Array(n*3),this.v=new Float32Array(n*3),this.r=new Float32Array(n*3),this.av=new Float32Array(n*3),this.life=new Float32Array(n),this.size=new Float32Array(n),this.rest=new Uint8Array(n),v.scene.add(this.mesh)}spawn(e,t,n,s,r,o,a,l,c){let h=this.cur;this.cur=(this.cur+1)%this.max;let u=h*3;return this.p[u]=e,this.p[u+1]=t,this.p[u+2]=n,this.v[u]=s,this.v[u+1]=r,this.v[u+2]=o,this.r[u]=b(6.28),this.r[u+1]=b(6.28),this.r[u+2]=b(6.28),this.av[u]=b(-12,12),this.av[u+1]=b(-12,12),this.av[u+2]=b(-12,12),this.life[h]=l,this.size[h]=a,this.rest[h]=0,c!==void 0&&(this.mesh.setColorAt(h,ci.set(c)),this.mesh.instanceColor.needsUpdate=!0),h}clear(){this.life.fill(0);for(let e=0;e<this.max;e++)this.mesh.setMatrixAt(e,mo);this.mesh.instanceMatrix.needsUpdate=!0}update(e){let{p:t,v:n,r:s,av:r,life:o,size:a,rest:l,o:c,mesh:h}=this,u=!1;for(let d=0;d<this.max;d++){if(o[d]<=0)continue;if(u=!0,o[d]-=e,o[d]<=0){h.setMatrixAt(d,mo);continue}let f=d*3,p=a[d]*.5;if(l[d]){if(o[d]>.4)continue}else{n[f+1]-=c.g*e;let x=1-c.drag*e;if(n[f]*=x,n[f+2]*=x,t[f]+=n[f]*e,t[f+1]+=n[f+1]*e,t[f+2]+=n[f+2]*e,s[f]+=r[f]*e,s[f+1]+=r[f+1]*e,s[f+2]+=r[f+2]*e,t[f+1]<p){if(t[f+1]=p,c.onGround&&c.onGround(t[f],t[f+2],n[f+1],a[d],d,this),c.die){o[d]=0,h.setMatrixAt(d,mo);continue}n[f+1]<-2.5?(n[f+1]=-n[f+1]*c.bounce,n[f]*=.7,n[f+2]*=.7,r[f]*=.6,r[f+1]*=.6,r[f+2]*=.6):(n[f+1]=0,n[f]*=.6,n[f+2]*=.6,Math.abs(n[f])+Math.abs(n[f+2])<.4&&(l[d]=1))}}zi.position.set(t[f],t[f+1],t[f+2]),zi.rotation.set(s[f],s[f+1],s[f+2]),zi.scale.setScalar(a[d]*Math.min(1,o[d]/.4)),zi.updateMatrix(),h.setMatrixAt(d,zi.matrix)}u&&(h.instanceMatrix.needsUpdate=!0)}};Ju=class{constructor(e){this.max=e,this.cur=0;let t=new tr(1,1).rotateX(-Math.PI/2),n=new at({map:jM(),alphaTest:.5,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3});this.mesh=new Wn(t,n,e),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1;for(let s=0;s<e;s++)this.mesh.setMatrixAt(s,mo),this.mesh.setColorAt(s,ci.set(16777215));this.d=new Float32Array(e*5),this.grow=new Set,v.scene.add(this.mesh)}add(e,t,n,s,r){if(e*e+t*t>(St+7)*(St+7))return;let o=this.cur;this.cur=(this.cur+1)%this.max;let a=o*5;this.d[a]=e,this.d[a+1]=t,this.d[a+2]=b(6.28),this.d[a+3]=r?n:n*.25,this.d[a+4]=n,this.mesh.setColorAt(o,ci.set(s)),this.mesh.instanceColor.needsUpdate=!0,this.grow.add(o),this.set(o)}set(e){let t=e*5;zi.position.set(this.d[t],.03+e%40*6e-4,this.d[t+1]),zi.rotation.set(0,this.d[t+2],0),zi.scale.setScalar(this.d[t+3]),zi.updateMatrix(),this.mesh.setMatrixAt(e,zi.matrix),this.mesh.instanceMatrix.needsUpdate=!0}clear(){this.grow.clear();for(let e=0;e<this.max;e++)this.mesh.setMatrixAt(e,mo);this.mesh.instanceMatrix.needsUpdate=!0}update(e){for(let t of this.grow){let n=t*5;this.d[n+3]+=(this.d[n+4]-this.d[n+3])*Math.min(1,e*7),this.d[n+4]-this.d[n+3]<.02&&this.grow.delete(t),this.set(t)}}},ju=class{constructor(e){this.max=e,this.cur=0;let t=document.createElement("canvas");t.width=t.height=64;let n=t.getContext("2d");n.fillStyle="#cfcfcf",n.beginPath(),n.arc(32,32,31,0,6.28),n.fill(),n.fillStyle="#fff",n.beginPath(),n.arc(30,28,27,0,6.28),n.fill();let s=new Xn(t);this.geo=new wt,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.sz=new Float32Array(e),this.geo.setAttribute("position",new Mt(this.pos,3).setUsage(ls)),this.geo.setAttribute("col",new Mt(this.col,3).setUsage(ls)),this.geo.setAttribute("size",new Mt(this.sz,1).setUsage(ls)),this.mat=new ri({uniforms:{map:{value:s},scale:{value:500},maxPx:{value:260}},vertexShader:"attribute float size; attribute vec3 col; varying vec3 vCol; uniform float scale; uniform float maxPx; void main(){ vCol=col; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=min(maxPx,size*scale/max(0.1,-mv.z)); gl_Position=projectionMatrix*mv; }",fragmentShader:`uniform sampler2D map; varying vec3 vCol; void main(){ vec4 t=texture2D(map,gl_PointCoord); if(t.a<0.5) discard; gl_FragColor=vec4(vCol*t.rgb,1.0);
#include <colorspace_fragment>
}`}),this.pts=new Qs(this.geo,this.mat),this.pts.frustumCulled=!1,this.v=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.s0=new Float32Array(e),this.s1=new Float32Array(e),this.c=new Float32Array(e*6),this.rise=new Float32Array(e),this.drag=new Float32Array(e),v.scene.add(this.pts)}spawn(e,t,n,s,r,o,a,l,c,h,u,d=0,f=2){let p=this.cur;this.cur=(this.cur+1)%this.max;let x=p*3,m=p*6;this.pos[x]=e,this.pos[x+1]=t,this.pos[x+2]=n,this.v[x]=s,this.v[x+1]=r,this.v[x+2]=o,this.life[p]=this.maxLife[p]=c,this.s0[p]=a,this.s1[p]=l,this.rise[p]=d,this.drag[p]=f,ci.set(h),this.c[m]=ci.r,this.c[m+1]=ci.g,this.c[m+2]=ci.b,ci.set(u===void 0?h:u),this.c[m+3]=ci.r,this.c[m+4]=ci.g,this.c[m+5]=ci.b}clear(){this.life.fill(0),this.sz.fill(0),this.geo.attributes.size.needsUpdate=!0}update(e){let{pos:t,v:n,life:s,maxLife:r,s0:o,s1:a,c:l,col:c,sz:h}=this;for(let u=0;u<this.max;u++){if(s[u]<=0)continue;if(s[u]-=e,s[u]<=0){h[u]=0;continue}let d=u*3,f=u*6,p=1-s[u]/r[u],x=Math.max(0,1-this.drag[u]*e);n[d]*=x,n[d+1]=n[d+1]*x+this.rise[u]*e,n[d+2]*=x,t[d]+=n[d]*e,t[d+1]+=n[d+1]*e,t[d+2]+=n[d+2]*e;let m=Math.min(1,p/.25),g=p>.6?1-(p-.6)/.4:1;h[u]=(o[u]+(a[u]-o[u])*m)*g,c[d]=l[f]+(l[f+3]-l[f])*p,c[d+1]=l[f+1]+(l[f+4]-l[f+1])*p,c[d+2]=l[f+2]+(l[f+5]-l[f+2])*p}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.col.needsUpdate=!0,this.geo.attributes.size.needsUpdate=!0}},Wc=[],Xc=[],Ds=[]});function yr(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new wt;l.morphTargetsRelative=a;let c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0,f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[p].length!==i[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Fm(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let p=Fm(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Fm(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Mt(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<t;p++){let x=h.getComponent(d,p);a.setComponent(d+u,p,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function nf(i,e){if(e===gu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===co||e===da){let t=i.getIndex();if(t===null){let r=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===co)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var sf=Dn(()=>{li()});function _n(i,e,t){let n=i.index?i.toNonIndexed():i.clone();n.deleteAttribute("uv"),t&&n.applyMatrix4(t);let s=new be(e),r=n.attributes.position.count,o=new Float32Array(r*3);for(let a=0;a<r;a++)o[a*3]=s.r,o[a*3+1]=s.g,o[a*3+2]=s.b;return n.setAttribute("color",new Mt(o,3)),n}function nS(){let i=document.createElement("canvas");i.width=i.height=1024;let e=i.getContext("2d");e.fillStyle=mt.grass,e.fillRect(0,0,1024,1024);let t=["#84B552","#9AC765","#7FAE4C","#A3CC6E","#8ABA57"];for(let s=0;s<520;s++)e.globalAlpha=b(.12,.3),e.fillStyle=Le(t),e.beginPath(),e.ellipse(b(1024),b(1024),b(14,70),b(10,46),b(3.14),0,6.28),e.fill();e.globalAlpha=.85,e.strokeStyle="#DCC9A0",e.lineCap="round";for(let s=0;s<6;s++){let r=s/6*6.28+.3;e.lineWidth=b(16,24),e.beginPath(),e.moveTo(512,512),e.quadraticCurveTo(512+Math.cos(r+.5)*220,512+Math.sin(r+.5)*220,512+Math.cos(r)*430,512+Math.sin(r)*430),e.stroke()}e.fillStyle="#DCC9A0",e.beginPath(),e.arc(512,512,64,0,6.28),e.fill(),e.globalAlpha=1;for(let s=0;s<2600;s++)e.fillStyle=Le(["#6FA043","#A9D275","#79A84A"]),e.fillRect(b(1024),b(1024),2,b(3,6));let n=new Xn(i);return n.colorSpace=Et,n.anisotropy=8,n}function rf(i,e,t){for(let n of v.obstacles){let s=n.x-i,r=n.z-e;if(s*s+r*r<(n.r+t)*(n.r+t))return!1}return!0}function Ma(i,e,t){let n=new Wn(i,Sa,e.length),s=new ut,r=new be;return e.forEach((o,a)=>{s.position.set(o.x,o.y||0,o.z),s.rotation.set(0,o.rot||0,0),s.scale.setScalar(o.s||1),s.updateMatrix(),n.setMatrixAt(a,s.matrix),t&&n.setColorAt(a,r.set(o.tint||16777215))}),v.scene.add(n),n}function Um(){let i=v.scene;Sa=new Zt({vertexColors:!0,flatShading:!0});let e=new rn(420,24,14),t=new be(mt.skyHi),n=new be(mt.skyLo),s=new be,r=e.attributes.position,o=new Float32Array(r.count*3);for(let C=0;C<r.count;C++){let P=Math.max(0,Math.min(1,r.getY(C)/260));s.copy(n).lerp(t,Math.pow(P,.7)),o.set([s.r,s.g,s.b],C*3)}e.setAttribute("color",new Mt(o,3));let a=new at({vertexColors:!0,side:ln,fog:!1,depthWrite:!1});i.add(new Oe(e,a)),i.fog=new Ho(mt.skyLo,110,330);let l=new ta(16775396,8365658,1.5);i.add(l);let c=new lr(16773584,1.9);c.position.set(40,80,30),i.add(c),v.env={sky:a,hemi:l,sun:c,sea:null};let h=new Oe(new Ii(700,48).rotateX(-Math.PI/2),new at({color:mt.water}));h.position.y=-.7,i.add(h),v.env.sea=h.material;let u=new Oe(new es(St+9.5,St+11.5,64).rotateX(-Math.PI/2),new at({color:16579056,transparent:!0,opacity:.7}));u.position.y=-.66,i.add(u),v.foam=u;let d=new Oe(new Kt(St+9,St+12,.8,56),new Zt({color:mt.sand}));d.position.y=-.46,i.add(d);let f=new Oe(new Ii(St+3,64).rotateX(-Math.PI/2),new Zt({map:nS()}));i.add(f);let p=[];for(let C=0;C<8;C++){let P=C/8*6.28;p.push(_n(new rn(1,10,8),C%2?14715438:14252578,ft(Math.cos(P)*1.1,1.75,Math.sin(P)*1.1,0,0,0,1.25,1.75,1.25)))}p.push(_n(new Kt(.22,.34,1,6),4155948,ft(0,3.9,0,0,0,.2))),p.push(_n(new Kt(3.1,3.4,.5,10),14539473,ft(0,.25,0))),i.add(new Oe(yr(p),Sa)),v.obstacles.push({x:0,z:0,r:3.2,h:4.2});let x=[mt.brick,mt.clay,6467913,mt.brick,mt.clay,9014115,mt.brick];x.forEach((C,P)=>{let O=P/x.length*6.28+.45,z=b(38,54),L=Math.cos(O)*z,W=Math.sin(O)*z,Z=-O+Math.PI/2,q=yr([cn(5.4,3.2,4.6,mt.paper,ft(0,1.6,0)),_n(new er(4.5,2.6,4),C,ft(0,4.5,0,0,Math.PI/4,0,1.05,1,.92)),cn(1.1,1.9,.14,mt.bark,ft(0,.95,2.34)),cn(1,.9,.12,mt.skyHi,ft(-1.7,1.9,2.34)),cn(1,.9,.12,mt.skyHi,ft(1.7,1.9,2.34)),cn(.7,1.4,.7,mt.clay,ft(1.5,5,-.8)),cn(5.7,.3,4.9,mt.wood,ft(0,.15,0))]),ie=new Oe(q,Sa);ie.position.set(L,0,W),ie.rotation.y=Z,i.add(ie),v.obstacles.push({x:L,z:W,r:3.5,h:5.5})});let m=yr([cn(1.9,.12,1,mt.wood,ft(0,.82,0)),cn(.1,.8,.1,mt.bark,ft(-.85,.4,-.4)),cn(.1,.8,.1,mt.bark,ft(.85,.4,-.4)),cn(.1,.8,.1,mt.bark,ft(-.85,.4,.4)),cn(.1,.8,.1,mt.bark,ft(.85,.4,.4)),cn(.8,.5,.06,mt.ink,ft(0,1.28,-.25)),cn(.7,.4,.02,10145968,ft(0,1.28,-.21)),cn(.1,.2,.1,mt.ink,ft(0,.98,-.25)),_n(new Kt(.07,.07,.14,8),mt.paper,ft(.6,.95,.2)),cn(.3,.1,.22,6467913,ft(-.55,.93,.15)),cn(.7,.12,.7,2966305,ft(0,.5,.95)),cn(.7,.7,.1,2966305,ft(0,.9,1.3)),_n(new Kt(.05,.05,.5,6),mt.ink,ft(0,.25,.95))]),g=[];for(let C=0;C<400&&g.length<18;C++){let P=b(6.28),O=b(9,60),z=Math.cos(P)*O,L=Math.sin(P)*O;rf(z,L,3)&&(g.push({x:z,z:L,rot:b(6.28)}),v.obstacles.push({x:z,z:L,r:1,h:1.5}))}Ma(m,g);let y=_n(new Kt(.22,.34,2.2,6),mt.trunk,ft(0,1.1,0)),w=yr([_n(new wn(1.5,0),16777215,ft(0,3,0)),_n(new wn(1.15,0),15135448,ft(.5,4.1,.2,.4,.3,0)),_n(new wn(.95,0),13822144,ft(-.6,3.7,-.4,.2,1,.5))]),M=[];for(let C=0;C<900&&M.length<64;C++){let P=b(6.28),O=10+Math.sqrt(Math.random())*60,z=Math.cos(P)*O,L=Math.sin(P)*O;if(!rf(z,L,3.2))continue;let W=b(.85,1.5);M.push({x:z,z:L,rot:b(6.28),s:W,tint:Le(mt.leaf)}),v.obstacles.push({x:z,z:L,r:.5*W,h:5*W,tree:!0})}Ma(w,M,!0),Ma(y,M),v.treeShadows=M;let R=new Wn(new Ii(1,16).rotateX(-Math.PI/2),new at({color:1913620,transparent:!0,opacity:.22,depthWrite:!1}),M.length),A=new ut;M.forEach((C,P)=>{A.position.set(C.x+.5,.02,C.z+.3),A.scale.setScalar(1.9*C.s),A.updateMatrix(),R.setMatrixAt(P,A.matrix)}),i.add(R);let _=[],E=[];for(let C=0;C<420;C++){let P=b(6.28),O=Math.sqrt(Math.random())*(St+1);_.push({x:Math.cos(P)*O,z:Math.sin(P)*O,y:.12,s:b(.1,.2),tint:Le([15911244,16579056,15712430,13935475])})}for(let C=0;C<46;C++){let P=b(6.28),O=b(8,St+8);E.push({x:Math.cos(P)*O,z:Math.sin(P)*O,y:.1,s:b(.25,.6),rot:b(6.28),tint:Le([14539473,12170662,10131076])})}Ma(_n(new wn(1,0),16777215),_,!0),Ma(_n(new wn(1,0),16777215,ft(0,0,0,0,0,0,1,.6,.8)),E,!0),v.clouds=[];for(let C=0;C<9;C++){let P=[];for(let z=0;z<5;z++)P.push(new rn(b(5,10),8,6).translate(z*7-14,b(-1.5,1.5),b(-3,3)));let O=new Oe(yr(P),new at({color:16579056,fog:!1}));O.position.set(b(-300,300),b(70,120),b(-300,300)),O.scale.y=.5,i.add(O),v.clouds.push(O)}let N=yr([_n(new Kt(.55,.55,1.3,12),mt.brick,ft(0,.65,0)),_n(new Kt(.58,.58,.16,12),15911244,ft(0,.75,0)),_n(new Kt(.2,.3,.2,8),mt.ink,ft(0,1.4,0))]);for(let C=0;C<600&&v.barrels.length<14;C++){let P=b(6.28),O=b(12,62),z=Math.cos(P)*O,L=Math.sin(P)*O;if(!rf(z,L,4)||Math.hypot(z,L-24)<9)continue;let W=new Oe(N,Sa);W.position.set(z,0,L),i.add(W),v.barrels.push({m:W,x:z,z:L,alive:!0,t:0})}}function of(i){for(let t of v.clouds)t.position.x+=i*2.2,t.position.x>330&&(t.position.x=-330);let e=1+Math.sin(v.t*.8)*.012;v.foam.scale.set(e,1,e);for(let t of v.barrels)t.alive||(t.t-=i,t.t<=0&&(t.alive=!0,t.m.visible=!0))}var mt,eS,tS,ft,cn,Sa,Om=Dn(()=>{li();sf();Bi();mt={grass:"#8FBF5A",sand:15260085,water:8372687,skyHi:9422804,skyLo:13098448,leaf:[2966305,4155948,6467913,8502601],trunk:7032362,paper:16249308,clay:13935475,brick:13125690,wood:12163691,bark:4864792,ink:3025439},eS=new si,tS=new sn,ft=(i,e,t,n=0,s=0,r=0,o=1,a=1,l=1)=>new Ge().compose(new F(i,e,t),tS.setFromEuler(eS.set(n,s,r)).clone(),new F(o,a,l));cn=(i,e,t,n,s)=>_n(new En(i,e,t),n,s)});function ba(i){let e=new Map,t=new Map,n=i.clone();return Bm(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Bm(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Bm(i.children[n],e.children[n],t)}var af=Dn(()=>{});function sS(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Ot(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}function aS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ir({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Di})),i.DefaultMaterial}function vr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ki(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function lS(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function cS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function hS(i){let e,t=i.extensions&&i.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+hf(t.attributes):e=i.indices+":"+hf(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+hf(i.targets[n]);return e}function hf(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Ff(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function uS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}function dS(i,e,t){let n=e.attributes,s=new bn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new F(l[0],l[1],l[2]),new F(c[0],c[1],c[2])),a.normalized){let h=Ff(yo[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new F,l=new F;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let x=Ff(yo[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Nn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Gm(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=Nf[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return et.workingColorSpace!==Sn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),ki(i,e),dS(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?lS(i,e.targets,t):i})}var Kc,tt,uf,ff,df,pf,mf,gf,xf,_f,yf,vf,Mf,Sf,bf,Tf,Ef,wf,Af,Zc,Rf,Vm,Ta,zm,Cf,If,Pf,Lf,$c,rS,Df,hi,yo,km,Hm,lf,Nf,Ns,oS,cf,fS,Uf,Wm=Dn(()=>{li();sf();af();Kc=class extends Li{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new pf(t)}),this.register(function(t){return new mf(t)}),this.register(function(t){return new gf(t)}),this.register(function(t){return new Ef(t)}),this.register(function(t){return new wf(t)}),this.register(function(t){return new Af(t)}),this.register(function(t){return new _f(t)}),this.register(function(t){return new yf(t)}),this.register(function(t){return new vf(t)}),this.register(function(t){return new Mf(t)}),this.register(function(t){return new df(t)}),this.register(function(t){return new Sf(t)}),this.register(function(t){return new xf(t)}),this.register(function(t){return new Tf(t)}),this.register(function(t){return new bf(t)}),this.register(function(t){return new uf(t)}),this.register(function(t){return new Zc(t,tt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Zc(t,tt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Rf(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=rs.extractUrlBase(e);o=rs.resolveURL(c,this.path)}else o=rs.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new to(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Vm){try{o[tt.KHR_BINARY_GLTF]=new Cf(e)}catch(u){s&&s(u);return}r=JSON.parse(o[tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Uf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case tt.KHR_MATERIALS_UNLIT:o[u]=new ff;break;case tt.KHR_DRACO_MESH_COMPRESSION:o[u]=new If(r,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:o[u]=new Pf;break;case tt.KHR_MESH_QUANTIZATION:o[u]=new Lf;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},uf=class{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new be(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Sn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new lr(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new or(h),c.distance=u;break;case"spot":c=new ia(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ki(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},ff=class{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return at}extendParams(e,t,n){let s=[];e.color=new be(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Sn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Et))}return Promise.all(s)}},df=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Ot(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},pf=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){let n=Ot(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new We(r,r)}return Promise.all(s)}},mf=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){let n=Ot(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},gf=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){let n=Ot(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},xf=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){let n=Ot(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},_f=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){let n=Ot(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new be(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Sn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Et)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},yf=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){let n=Ot(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},vf=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){let n=Ot(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new be().setRGB(r[0],r[1],r[2],Sn),Promise.all(s)}},Mf=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){let n=Ot(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Sf=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){let n=Ot(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new be().setRGB(r[0],r[1],r[2],Sn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Et)),Promise.all(s)}},bf=class{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){let n=Ot(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Tf=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?An:null}extendMaterialParams(e,t){let n=Ot(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Ef=class{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},wf=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Af=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Zc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},Rf=class{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==hi.TRIANGLES&&c.mode!==hi.TRIANGLE_STRIP&&c.mode!==hi.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let p of u){let x=new Ge,m=new F,g=new sn,y=new F(1,1,1),w=new Wn(p.geometry,p.material,d);for(let R=0;R<d;R++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,R),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,R),l.SCALE&&y.fromBufferAttribute(l.SCALE,R),w.setMatrixAt(R,x.compose(m,g,y));let M=null;for(let R in l)if(R==="_COLOR_0"){let A=l[R];w.instanceColor=new ji(A.array,A.itemSize,A.normalized)}else if(R!=="TRANSLATION"&&R!=="ROTATION"&&R!=="SCALE"){if(M===null){let _=w.geometry;M=new wt,M.name=_.name;for(let E in _.attributes)M.setAttribute(E,_.attributes[E]);for(let E in _.morphAttributes)M.morphAttributes[E]=_.morphAttributes[E];_.index!==null&&M.setIndex(_.index),M.morphTargetsRelative=_.morphTargetsRelative;for(let E of _.groups)M.addGroup(E.start,E.count,E.materialIndex);_.boundingBox!==null&&(M.boundingBox=_.boundingBox.clone()),_.boundingSphere!==null&&(M.boundingSphere=_.boundingSphere.clone()),M.drawRange.start=_.drawRange.start,M.drawRange.count=_.drawRange.count,M.userData=Object.assign({},_.userData),w.geometry=M}let A=l[R];M.setAttribute(R,new ji(A.array,A.itemSize,A.normalized))}ut.prototype.copy.call(w,p),this.parser.assignFinalMaterial(w),f.push(w)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Vm="glTF",Ta=12,zm={JSON:1313821514,BIN:5130562},Cf=class{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ta),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Vm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Ta,r=new DataView(e,Ta),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===zm.JSON){let c=new Uint8Array(e,Ta+o,a);this.content=n.decode(c)}else if(l===zm.BIN){let c=Ta+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},If=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=Nf[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Nf[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=yo[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let p in f.attributes){let x=f.attributes[p],m=l[p];m!==void 0&&(x.normalized=m)}u(f)},a,c,Sn,d)})})}},Pf=class{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Lf=class{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}},$c=class extends Pi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,p=e*c,x=p-c,m=-2*f+3*d,g=f-d,y=1-m,w=g-d+u;for(let M=0;M!==a;M++){let R=o[x+M+a],A=o[x+M+l]*h,_=o[p+M+a],E=o[p+M]*h;r[M]=y*R+w*A+m*_+g*E}return r}},rS=new sn,Df=class extends $c{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return rS.fromArray(r).normalize().toArray(r),r}},hi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},yo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},km={9728:zt,9729:qt,9984:Kl,9985:ao,9986:fr,9987:oi},Hm={33071:ni,33648:Wr,10497:As},lf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Nf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ns={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},oS={CUBICSPLINE:void 0,LINEAR:Ks,STEP:Ys},cf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};fS=new Ge,Uf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new sS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?(this.textureLoader=new ea(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new sa(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new to(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return vr(r,a,s),ki(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(rs.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=lf[s.type],a=yo[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Mt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=lf[s.type],c=yo[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,x,m;if(f&&f!==u){let g=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,w=t.cache.get(y);w||(x=new c(a,g*f,s.count*f/h),w=new $r(x,f/h),t.cache.add(y,w)),m=new Jr(w,l,d%f/h,p)}else a===null?x=new c(s.count*l):x=new c(a,d,s.count*l),m=new Mt(x,l,p);if(s.sparse!==void 0){let g=lf.SCALAR,y=yo[s.sparse.indices.componentType],w=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,R=new y(o[1],w,s.sparse.count*g),A=new c(o[2],M,s.sparse.count*l);a!==null&&(m=new Mt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let _=0,E=R.length;_<E;_++){let N=R[_];if(m.setX(N,A[_*l]),l>=2&&m.setY(N,A[_*l+1]),l>=3&&m.setZ(N,A[_*l+2]),l>=4&&m.setW(N,A[_*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=km[d.magFilter]||qt,h.minFilter=km[d.minFilter]||oi,h.wrapS=Hm[d.wrapS]||As,h.wrapT=Hm[d.wrapT]||As,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==zt&&h.minFilter!==qt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(d){return new Promise(function(f,p){t.parse(d,f,p)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;let f=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(d){return new Promise(function(f,p){let x=f;t.isImageBitmapLoader===!0&&(x=function(m){let g=new Yt(m);g.needsUpdate=!0,f(g)}),t.load(rs.resolveURL(d,r.path),x,void 0,p)})})}let u=h.then(function(d){return c===!0&&a.revokeObjectURL(l),ki(d,o),d.userData.mimeType=o.mimeType||uS(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[tt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new eo,Tn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Cs,Tn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ir}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[tt.KHR_MATERIALS_UNLIT]){let u=s[tt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new be(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Sn),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Et)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Pt);let h=r.alphaMode||cf.OPAQUE;if(h===cf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===cf.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==at&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new We(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==at&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==at){let u=r.emissiveFactor;a.emissive=new be().setRGB(u[0],u[1],u[2],Sn)}return r.emissiveTexture!==void 0&&o!==at&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Et)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),ki(u,r),t.associations.set(u,{materials:e}),r.extensions&&vr(s,u,r),u})}createUniqueName(e){let t=vt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Gm(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=hS(c),u=s[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Gm(new wt,c,t),c.mode===hi.TRIANGLE_STRIP?d=d.then(f=>nf(f,da)):c.mode===hi.TRIANGLE_FAN&&(d=d.then(f=>nf(f,co))),s[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?aS(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,p=h.length;f<p;f++){let x=h[f],m=o[f],g,y=c[f];if(m.mode===hi.TRIANGLES||m.mode===hi.TRIANGLE_STRIP||m.mode===hi.TRIANGLE_FAN||m.mode===void 0){let w=r.isSkinnedMesh===!0,M=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");w&&M===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=w&&M?new Xo(x,y):new Oe(x,y),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===hi.LINES)g=new js(x,y);else if(m.mode===hi.LINE_STRIP)g=new Js(x,y);else if(m.mode===hi.LINE_LOOP)g=new Yo(x,y);else if(m.mode===hi.POINTS)g=new Qs(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&cS(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),ki(g,r),m.extensions&&vr(s,g,m),t.assignFinalMaterial(g),u.push(g)}for(let f=0,p=u.length;f<p;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&vr(s,u[0],r),u[0];let d=new Bt;r.extensions&&vr(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Xt(Nc.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ar(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ki(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let d=new Ge;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new qo(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],p=s.samplers[f.sampler],x=f.target,m=x.node,g=s.parameters!==void 0?s.parameters[p.input]:p.input,y=s.parameters!==void 0?s.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",y)),c.push(p),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],p=u[2],x=u[3],m=u[4],g=[];for(let w=0,M=d.length;w<M;w++){let R=d[w],A=f[w],_=p[w],E=x[w],N=m[w];if(R===void 0)continue;R.updateMatrix&&R.updateMatrix();let C=n._createAnimationTracks(R,A,_,E,N);if(C)for(let P=0;P<C.length;P++)g.push(C[P])}let y=new sr(r,void 0,g);return ki(y,s),y})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,fS)});for(let f=0,p=u.length;f<p;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,p=u[0];h.pivot=new F().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new jr:c.length>1?h=new Bt:c.length===1?h=c[0]:h=new ut,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),ki(h,r),r.extensions&&vr(n,h,r),r.matrix!==void 0){let u=new Ge;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Bt;n.name&&(r.name=s.createUniqueName(n.name)),ki(r,n),n.extensions&&vr(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?r.add(ba(d)):r.add(d)}let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof Tn||d instanceof Yt)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Ns[r.path]===Ns.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let h;switch(Ns[r.path]){case Ns.weights:h=ns;break;case Ns.rotation:h=is;break;case Ns.translation:case Ns.scale:h=Is;break;default:n.itemSize===1?h=ns:h=Is;break}let u=s.interpolation!==void 0?oS[s.interpolation]:Ks,d=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){let x=new h(l[f]+"."+Ns[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Ff(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof is?Df:$c;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}});async function jm(i){let e=new Kc,t=Object.keys(Sr),n=0;for(let a of t){let l=atob(window.COZY_ASSETS[a]),c=new Uint8Array(l.length);for(let f=0;f<l.length;f++)c[f]=l.charCodeAt(f);let h=await e.parseAsync(c.buffer,"");h.scene.updateMatrixWorld(!0);let u=new bn().setFromObject(h.scene),d=null;h.scene.traverse(f=>{f.isMesh&&f.material.map&&(d=f.material.map)}),Zm[a]={scene:h.scene,clips:h.animations,h:Math.max(.3,u.max.y-u.min.y),map:d},i(++n/t.length),await new Promise(f=>setTimeout(f,0))}window.COZY_ASSETS=null,vo=new Wn(new Ii(1,14).rotateX(-Math.PI/2),new at({color:1913620,transparent:!0,opacity:.28,depthWrite:!1}),90),vo.frustumCulled=!1,v.scene.add(vo);let s=document.createElement("canvas");s.width=s.height=128;let r=s.getContext("2d");r.fillStyle="#A01A12",r.beginPath(),r.arc(64,64,62,0,6.28),r.fill(),r.fillStyle="#D7392E",r.beginPath(),r.arc(64,64,50,0,6.28),r.fill(),r.fillStyle="#EF8A7C",r.beginPath(),r.arc(64,64,30,0,6.28),r.fill(),r.fillStyle="#F8F4E6",r.beginPath(),r.arc(64,64,13,0,6.28),r.fill(),r.fillStyle="#C9B9A0",r.beginPath(),r.arc(64,64,5,0,6.28),r.fill();let o=new Xn(s);o.colorSpace=Et,$m=new at({map:o,alphaTest:.5,side:Pt}),Jm=new rn(1,10,6,0,6.28,0,Math.PI/2),Bf=new Zt({color:16249308,side:Pt,flatShading:!0})}function ui(i,e,t=1){i.animRate=t;let n=i.acts[e]||i.acts.idle;!n||i.cur===n||(n.reset().fadeIn(.15).play(),i.cur&&i.cur.fadeOut(.15),i.cur=n)}function Qm(i,e,t,n={}){let s=Sr[i],r=Zm[i],o=s.size*(n.scale||1),a=ba(r.scene);a.scale.setScalar(o/r.h);let l=new Zt({map:r.map,side:Pt}),c={};a.traverse(x=>{x.isMesh&&(x.material=l,x.frustumCulled=!1),x.isBone&&(c[x.name]=x)});let h=new Bt,u=new Bt;u.position.y=o*.45,a.position.y=-o*.45,h.add(u),u.add(a),h.position.set(e,n.y||0,t),v.scene.add(h);let d=new ra(a),f={};for(let x of r.clips)f[x.name]=d.clipAction(x);let p={key:i,def:s,root:h,tilt:u,model:a,mat:l,bones:c,mixer:d,acts:f,cur:null,animRate:1,H:o,hp:s.hp*(n.hpMul||1),maxHp:s.hp*(n.hpMul||1),boss:!!n.boss,state:"idle",timer:b(.5,3),yaw:b(6.28),vel:Ne(),spin:0,tx:e,tz:t,seed:b(100),jit:0,hopT:b(6),baseY:s.fly?2.2:0,heat:0,flash:0,dead:!1,label:null,chute:null,talkT:b(2,10),dP:99,scrT:b(.5,2),hurtT:0};if(h.rotation.y=p.yaw,n.drop){p.state="drop";let x=new Oe(Jm,Bf);x.scale.set(o*.8,o*.55,o*.8),x.position.y=o*1.25,x.material=Bf,h.add(x),p.chute=x,ui(p,"talk",1.6)}else p.boss?(p.state="boss",ui(p,"walk",.8)):ui(p,"idle");return v.animals.push(p),p}function Bn(i){v.scene.remove(i.root),i.mixer.stopAllAction(),i.mixer.uncacheRoot(i.model),i.mat.dispose(),i.extra&&i.extra.forEach(e=>{v.scene.remove(e.obj),e.mat&&e.mat.dispose()})}function e0(){for(let i of v.animals)i.dead=!0,Bn(i);v.animals.length=0;for(let i of yn)i.end&&i.end();yn.length=0,v.boss=null}function eh(i,e,t){for(let n of v.animals){if(n.state!=="idle"&&n.state!=="wander")continue;let s=n.root.position.x-i,r=n.root.position.z-e;s*s+r*r<t*t&&wa(n)}}function wa(i){i.state="flee",i.timer=b(3,5.5),i.jit=b(-.7,.7),ui(i,"walk",2.4),Math.random()<.45&&i.dP<40&&ps(i,Le(pS),1.7),i.dP<35&&bi(i,Math.random()<.4?"long":"yelp")}function Qc(i){i.chute&&(i.root.remove(i.chute),i.chute=null)}function Aa(i,e){for(let s of v.obstacles){let r=i.x-s.x,o=i.z-s.z,a=s.r+e,l=r*r+o*o;if(l<a*a&&l>1e-4){let c=Math.sqrt(l);i.x=s.x+r/c*a,i.z=s.z+o/c*a}}let t=Math.hypot(i.x,i.z),n=St-1;t>n&&(i.x*=n/t,i.z*=n/t)}function Of(i,e,t,n,s){let r=i.root.position;r.x+=e*n*s,r.z+=t*n*s,Aa(r,i.H*.3);let a=Math.atan2(e,t)-i.yaw;a=Math.atan2(Math.sin(a),Math.cos(a)),i.yaw+=a*Math.min(1,s*10),i.root.rotation.y=i.yaw,i.def.hop&&(i.hopT+=s*n*1.1,r.y=Math.abs(Math.sin(i.hopT))*i.def.hop*Math.min(1,n/6))}function Hf(i){let e=v.player.pos,t=0;for(let n=v.animals.length-1;n>=0;n--){let s=v.animals[n],r=s.root.position,o=s.def;s.mixer.update(i*s.animRate),s.flash>0&&(s.flash-=i,s.mat.emissive.setRGB(s.flash>0?.55:0,0,0));let a=r.x-e.x,l=r.z-e.z,c=Math.hypot(a,l);if(s.dP=c,o.cloak){let h=c>20&&s.state!=="flee"?.3:1;Math.abs(s.mat.opacity-h)>.01&&(s.mat.transparent=!0,s.mat.opacity+=(h-s.mat.opacity)*Math.min(1,i*3))}switch(o.fly&&s.state!=="air"&&s.state!=="drop"&&s.state!=="sucked"&&(s.baseY+=((s.state==="flee"?3.3:2.1)-s.baseY)*Math.min(1,i*2),r.y=s.baseY+Math.sin(v.t*3+s.seed)*.3),s.state){case"drop":r.y-=8.5*i,s.root.rotation.z=Math.sin(v.t*2.5+s.seed)*.12,r.y<=s.baseY&&(r.y=s.baseY,s.root.rotation.z=0,Qc(s),ds(r.x,0,r.z,5,.7),s.state="idle",s.timer=b(.3,1.5),ui(s,"idle"));break;case"idle":if(s.timer-=i,s.talkT-=i,c<o.sense){wa(s);break}if(s.talkT<=0&&(s.talkT=b(7,18),c<45&&(ps(s,Le(o.lines),2.4),ui(s,"talk"))),s.timer<=0){let h=b(6.28),u=b(4,16);s.tx=Si(r.x+Math.cos(h)*u,-St+6,St-6),s.tz=Si(r.z+Math.sin(h)*u,-St+6,St-6),s.state="wander",s.timer=b(3,7),ui(s,"walk",1)}break;case"wander":{if(s.timer-=i,c<o.sense){wa(s);break}let h=s.tx-r.x,u=s.tz-r.z,d=Math.hypot(h,u);if(d<.6||s.timer<=0){s.state="idle",s.timer=b(1,4.5),ui(s,Math.random()<.3?"talk":"idle"),o.fly||(r.y=0);break}Of(s,h/d,u/d,o.walk,i);break}case"flee":{s.timer-=i;let h=Math.atan2(a,l)+s.jit+Math.sin(v.t*2.2+s.seed)*.45,u=Math.sin(h),d=Math.cos(h),f=Math.hypot(r.x,r.z),p=St-11;if(f>p){let x=Si((f-p)/9,0,1),m=-r.x/f,g=-r.z/f,y=-g,w=m;y*u+w*d<0&&(y=-y,w=-w),u=u*(1-x)+(y*.85+m*.5)*x,d=d*(1-x)+(w*.85+g*.5)*x;let M=Math.hypot(u,d)||1;u/=M,d/=M}if(Rt.wail&&c<22&&(s.scrT-=i,s.scrT<=0&&(s.scrT=b(1.2,3),bi(s,"long",!1))),v.wx.rain>.4&&!o.fly&&r.y<.3&&Math.random()<i*.09*v.wx.rain){s.vel.set(u*o.run*.9,4.5,d*o.run*.9),s.state="air",s.spin=b(4,8),c<30&&ps(s,Le(["\u5730\u597D\u6ED1\uFF01","\u54C7\u554A\uFF01","\u8AB0\u6C92\u62D6\u5730\uFF01"]),1.2),bi(s,"yelp",!1);break}Of(s,u,d,o.run,i),s.timer<=0&&c>o.sense*1.5&&(s.state="idle",s.timer=b(1,3),ui(s,"idle"),o.fly||(r.y=0));break}case"air":{s.vel.y-=24*i,r.addScaledVector(s.vel,i),s.tilt.rotation.x+=s.spin*i,s.tilt.rotation.z+=s.spin*.6*i;let h=Math.hypot(s.vel.x,s.vel.z),u=!1;if(h>11)for(let d of v.obstacles){if(r.y>d.h)continue;let f=r.x-d.x,p=r.z-d.z;if(f*f+p*p<(d.r+.6)*(d.r+.6)){br(s,{mode:"wall",dir:s.vel.clone().normalize(),weapon:s.lastWeapon}),u=!0;break}}if(u)break;if(r.y<=0&&s.vel.y<0){if(Math.hypot(r.x,r.z)>St+9){br(s,{mode:"drown",weapon:s.lastWeapon});break}if(s.vel.y<-17){r.y=0,br(s,{mode:"splat",weapon:s.lastWeapon});break}r.y=0,s.state="stun",s.timer=.9,s.mixer.timeScale=0,s.tilt.rotation.set(-Math.PI/2,0,b(-.5,.5)),s.tilt.position.y=s.H*.2,he.thud(),ds(r.x,0,r.z,4,.6)}break}case"stun":s.timer-=i,s.timer<=0&&(s.tilt.rotation.set(0,0,0),s.tilt.position.y=s.H*.45,s.mixer.timeScale=1,Math.hypot(r.x,r.z)>St-1&&Aa(r,.5),s.state="idle",s.dP=0,wa(s));break;case"sucked":(!s.hole||s.hole.done)&&(s.hole=null,s.tilt.scale.setScalar(1),s.state="air",s.spin=b(5,10));break;case"boss":{s.timer-=i;let h=c||1;if(h>s.H*.42&&Of(s,-a/h,-l/h,4.8,i),h<s.H*.42+1.2&&s.timer<=0){s.timer=1.6;let u=v.player;u.kvel.set(-a/h*26,0,-l/h*26),u.vel.y=11,u.onGround=!1,Nt(.8),he.slam(),ps(s,Le(["\u9019\u500B\u9700\u6C42\u5F88\u7C21\u55AE","\u6211\u53EA\u662F\u63D0\u500B\u5C0F\u5EFA\u8B70","\u4E0B\u73ED\u524D\u7D66\u6211"]),2)}Math.random()<i*.25&&ps(s,Le(o.lines),2.2);break}}t<90&&(Jc.position.set(r.x,.025,r.z),Jc.scale.setScalar(s.H*.33*Si(1-r.y/14,.25,1)),Jc.updateMatrix(),vo.setMatrixAt(t++,Jc.matrix))}vo.count=t,vo.instanceMatrix.needsUpdate=!0;for(let n=yn.length-1;n>=0;n--)yn[n].upd(i)&&(yn[n].end&&yn[n].end(),yn.splice(n,1));if(yn.length>34){let n=yn.shift();n.end&&n.end()}}function Ct(i,e,t={}){return i.dead?!1:(i.boss&&(e=Math.min(e,t.bossCap||300)),i.hp-=e,i.flash=.1,t.weapon&&(i.lastWeapon=t.weapon),i.hp<=0?(br(i,t),!0):i.boss?(Rt.wail&&v.t-i.hurtT>1.2&&(i.hurtT=v.t,bi(i,"yelp",!1)),!1):(t.knock?(Qc(i),i.root.rotation.z=0,i.vel.copy(t.knock),i.state="air",i.spin=b(6,13),i.root.position.y<.1&&(i.root.position.y=.1),bi(i,Rt.wail?"fall":"yelp")):i.state==="drop"?(Qc(i),i.root.rotation.z=0,i.vel.set(0,-3,0),i.state="air",i.spin=b(3,6),bi(i,"fall")):i.state==="idle"||i.state==="wander"?wa(i):Rt.wail&&v.t-i.hurtT>(i.boss?1.2:.5)&&(i.hurtT=v.t,bi(i,"yelp",!1)),!1))}function br(i,e={}){if(i.dead)return;i.dead=!0;let t=v.animals.indexOf(i);t>=0&&v.animals.splice(t,1),Qc(i),i.root.rotation.z=0;let n=e.mode||"drop";i.boss&&(n="mega");let s=i.root.position;e.air=!i.def.fly&&s.y>1.3,v.onKill&&v.onKill(i,n,e),Rt.wail&&(qm[n]&&bi(i,qm[n],!1),i.dP<30&&Math.random()<.3&&xn(Ne(s.x,s.y+i.H+.5,s.z),Le(gS),"scream",.9,2.4)),eh(s.x,s.z,24),i.state==="sucked"&&i.tilt.scale.setScalar(1),_S[n](i,e)}function Mr(i,e=1,t){let n=i.root.position,s=n.y+i.H*.5,r=i.def.robot,o=i.H/1.5,a=t?t.x:0,l=t?t.z:0;On(n.x,s,n.z,a*.5,.6,l*.5,Math.round(42*e),9*Math.sqrt(o),r);let c=Math.round(12*e);for(let u=0;u<c;u++){let d=b(-7,7)*o+a*7,f=b(4,13)*Math.sqrt(o),p=b(-7,7)*o+l*7;r?oe.scrap.spawn(n.x,s+b(-.3,.3),n.z,d,f,p,b(.15,.36)*o,b(5,9),Le([15262932,10131076,6467913,3025439])):oe.meat.spawn(n.x+b(-.3,.3),s+b(-.3,.3),n.z+b(-.3,.3),d,f,p,b(.14,.34)*o,b(5,9),Math.random()<.4?i.def.fur:Le(zf))}if(r)Pn(n.x,s,n.z,14),tf(n.x,s,n.z,5,!0),he.clank();else{for(let u=0;u<Math.round(3*e);u++)oe.bone.spawn(n.x,s,n.z,b(-6,6)+a*5,b(5,11),b(-6,6)+l*5,b(.25,.4)*o,b(6,10));for(let u=0;u<2;u++)oe.eye.spawn(n.x,n.y+i.H*.8,n.z,b(-5,5)+a*4,b(6,12),b(-5,5)+l*4,.2*o,b(7,11));tf(n.x,s,n.z,Math.round(7*e))}oe.decals.add(n.x,n.z,b(2.6,4.2)*o,r?1710614:Le(gn)),he.splat();let h=jc.set(n.x,s,n.z).distanceTo(v.camera.position);h<5&&xo(h<3?3:1,r)}function Ea(i,e,t,n,s,r=7){On(e,t,n,0,1,0,s,r,i.def.robot,.28)}function xS(i){let e=ba(i),t=[],n=[];i.traverse(s=>t.push(s)),e.traverse(s=>n.push(s));for(let s=0;s<t.length&&s<n.length;s++)n[s].position.copy(t[s].position),n[s].quaternion.copy(t[s].quaternion),n[s].scale.copy(t[s].scale);return e}function Ym(i,e,t,n){return e>t&&i.scale.setScalar(Math.max(.001,1-(e-t)/(n-t))),e>n}function yS(){let i=0;for(let t in Sr)i+=Sr[t].w;let e=Math.random()*i;for(let t in Sr)if(e-=Sr[t].w,e<=0)return t;return"persi"}function kf(i,e,t=0,n=0){for(let s=0;s<30;s++){let r=b(6.28),o=b(i,e),a=t+Math.cos(r)*o,l=n+Math.sin(r)*o;if(Math.hypot(a,l)>St-4)continue;let c=!0;for(let h of v.obstacles)if((h.x-a)**2+(h.z-l)**2<(h.r+1)**2){c=!1;break}if(c)return[a,l]}return[b(-20,20),b(-20,20)]}function Ra(i=!0,e){let t=yS(),n=Sr[t],s=n.pack||1,[r,o]=e?kf(e[2],e[3],e[0],e[1]):kf(6,St-8);for(let a=0;a<s;a++)Qm(t,r+(a?b(-2,2):0),o+(a?b(-2,2):0),i?{drop:!0,y:b(26,40)}:{});return s}function Gf(){let i=Le(["persi","cocoa","kuri","wasabi","shiro","mochi","cinna"]),e=v.player.pos,[t,n]=kf(26,36,e.x,e.z),s=Qm(i,t,n,{scale:4.4,hpMul:1,boss:!0});return s.hp=s.maxHp=2200,v.boss=s,ds(t,0,n,18,3),In(s.root.position,1,16,.6,15911244),Nt(.6),he.slam(),s}var Sr,pS,Km,Zm,yn,jc,Xm,mS,vo,Jc,$m,Jm,Bf,zf,qm,gS,bi,_S,Ca=Dn(()=>{li();Wm();af();Bi();_o();xr();Sr={persi:{name:"\u5C0F\u67FF\u5B50",animal:"\u72D0\u72F8",role:"PM",size:1.6,walk:2.2,run:8.6,hp:100,sense:10.5,w:14,pitch:1,fur:15234090,lines:["\u9700\u6C42\u53C8\u6539\u56C9\uFF5E","\u9019\u500B\u5F88\u7C21\u55AE\u5427\uFF1F","\u660E\u5929\u8981\uFF0C\u53EF\u4EE5\u55CE\uFF1F","\u5148\u4E0A\u7DDA\u518D\u8AAA\uFF01","\u8001\u95C6\u8AAA\u8981\u518D\u5927\u6C23\u4E00\u9EDE"]},matcha:{name:"\u5C0F\u62B9\u8336",animal:"\u8B8A\u8272\u9F8D",role:"\u76E4\u9EDE",size:1.45,walk:1.8,run:7,hp:100,sense:8.7,w:11,pitch:.9,fur:9159498,cloak:!0,lines:["\u6211\u5DF2\u8B80\u4E86","\u665A\u9EDE\u56DE\u4F60","\u6A94\u6848\u653E\u54EA\u6211\u5FD8\u4E86","\u61C9\u8A72\u5728\u96F2\u7AEF\u5427\uFF1F"]},cinna:{name:"\u5C0F\u8089\u6842",animal:"\u5C0F\u9E7F",role:"\u7F8E\u8853",size:1.7,walk:2.4,run:10.5,hp:90,sense:12.4,w:11,pitch:1.2,fur:14257738,lines:["\u611F\u89BA\u4E0D\u5C0D\uFF0C\u518D\u4E00\u7248","Logo \u53EF\u4EE5\u653E\u5927\u55CE","\u6211\u8981\u4E94\u5F69\u6591\u6595\u7684\u9ED1","\u9084\u662F\u7B2C\u4E00\u7248\u597D\u4E86"]},cocoa:{name:"\u5C0F\u53EF\u53EF",animal:"\u8C93\u982D\u9DF9",role:"\u4F01\u5283",size:1.6,walk:1.5,run:5.8,hp:160,sense:8.1,w:10,pitch:.7,fur:10119738,lines:["\u9019\u500B\u6703\u958B\u4E09\u5C0F\u6642","\u6211\u5011\u5148\u958B\u500B\u6703","\u6703\u5F8C\u518D\u7D04\u500B\u6703","\u5148\u5C0D\u9F4A\u4E00\u4E0B\u9846\u7C92\u5EA6"]},kuri:{name:"\u5C0F\u6817\u5B50",animal:"\u6CB3\u72F8",role:"\u5DE5\u7A0B",size:1.45,walk:2,run:7.4,hp:120,sense:9.3,w:11,pitch:.85,fur:11890746,lines:["\u6211\u96FB\u8166\u4E0A\u662F\u597D\u7684","\u9019\u500B\u4E0D\u80FD\u6539\u5594","\u8981\u91CD\u69CB\u4E09\u500B\u6708","\u90A3\u662F\u4E0A\u4E00\u624B\u5BEB\u7684"]},minto:{name:"\u5C0F\u8584\u8377",animal:"\u8702\u9CE5",role:"\u6392\u7A0B",size:1.25,walk:3,run:9.5,hp:70,sense:11.2,w:8,pitch:1.5,fur:4891609,fly:!0,lines:["\u81E8\u6642\u63D2\u500B\u55AE\uFF5E","\u9019\u500B\u4ECA\u5929\u8981","\u6025\u4EF6\uFF01\u6025\u4EF6\uFF01","\u884C\u4E8B\u66C6\u6211\u6392\u6EFF\u56C9"]},mochi:{name:"\u5C0F\u9EBB\u7CEC",animal:"\u6A5F\u5668\u4EBA",role:"QA",size:1.6,walk:1.8,run:6.6,hp:220,sense:8.7,w:8,pitch:.55,fur:15262932,robot:!0,lines:["\u9019\u4E0D\u662F bug \u662F feature","\u7121\u6CD5\u91CD\u73FE","\u5DF2\u7D50\u6848","\u8ACB\u9644\u4E0A\u91CD\u73FE\u6B65\u9A5F"]},wasabi:{name:"\u5C0F\u82A5\u672B",animal:"\u9752\u86D9",role:"\u7814\u7A76",size:1.5,walk:2,run:8,hp:100,sense:9.9,w:11,pitch:1.1,fur:8172354,hop:1.1,lines:["\u4E0A\u7DDA\u524D\u60F3\u518D\u6539\u4E00\u4E0B","\u6211\u6709\u500B\u65B0\u60F3\u6CD5\uFF01","\u6578\u64DA\u8AAA\u4E0D\u884C","\u6211\u5011\u63DB\u500B\u65B9\u5411\u5427"]},shiro:{name:"\u5C0F\u767D",animal:"\u4F01\u9D5D",role:"\u91AB\u751F",size:1.5,walk:1.6,run:6.4,hp:130,sense:8.7,w:9,pitch:.95,fur:3422268,lines:["\u591A\u559D\u6C34\u5C31\u597D","\u4F60\u9019\u662F\u904E\u52DE","\u8ACB\u5047\u55AE\u5462\uFF1F","\u56DE\u53BB\u591A\u4F11\u606F"]},lop:{name:"Lop",animal:"\u5154\u5B50",role:"\u63A2\u96AA",size:1.2,walk:2.6,run:9.2,hp:60,sense:10.5,w:7,pitch:1.4,fur:15326403,hop:.7,pack:3,lines:["+1","\u6536\u5230","\u4E86\u89E3","\u597D\u5594"]}},pS=["\u4E0D\u8981\u554A\u554A\u554A\uFF01","\u6211\u53EA\u662F\u7167\u6D41\u7A0B\u8D70\uFF01","\u6709\u8A71\u597D\u8AAA\uFF01","\u6211\u4E0B\u6B21\u4E0D\u6562\u4E86\uFF01","\u9019\u4E0D\u5728\u6211\u7684\u8077\u8CAC\u7BC4\u570D\uFF01","\u6211\u8981\u5831\u52A0\u73ED\uFF01","\u6211\u9084\u6709\u4E09\u5F35\u55AE\u6C92\u7D50\uFF01","\u6551\u547D\u554A\u4EBA\u8CC7\uFF01","\u6211\u660E\u5929\u8ACB\u5047\uFF01"],Km={slice:"\u88AB\u4E00\u5200\u5169\u65B7",flat:"\u88AB\u62CD\u6210\u8089\u9905",launch:"\u98DB\u53BB\u7576\u661F\u661F\u4E86",gib:"\u70B8\u6210\u7D5E\u8089",burn:"\u70E4\u5230\u5168\u719F",headpop:"\u8166\u888B\u642C\u5BB6",hole:"\u88AB\u9ED1\u6D1E\u56DE\u6536",zap:"\u88AB\u96F7\u516C\u9EDE\u540D",wall:"\u9ECF\u5728\u7246\u4E0A",splat:"\u6454\u6210\u4E00\u6524",drop:"\u6C38\u4E45\u4E0B\u73ED",drown:"\u53BB\u9935\u9BCA\u9B5A\u4E86",mega:"\u8F5F\u7136\u5012\u4E0B"},Zm={},yn=[],jc=new F,Xm=new F,mS=new be,Jc=new ut,zf=[13125690,14707290,11022888,15705754],qm={slice:"cut",flat:"squeak",gib:"yelp",headpop:"cut",hole:"rise",wall:"yelp",splat:"yelp",drown:"gurgle",drop:"gurgle",mega:"roar",zap:"cut"},gS=["\u554A\u554A\u554A\u554A\uFF01","\u55DA\u54C7\u554A\u554A\uFF01","\u4E0D\uFF5E\uFF5E\uFF5E\uFF01","\u5ABD\u5440\uFF01","\u54BF\u5440\u2014\u2014\uFF01","\u5443\u554A\uFF01","\u6551\u547D\u554A\uFF01","\u6211\u7684\u5E74\u7D42\uFF5E"],bi=(i,e,t=!0)=>he.cry(e,i.def.pitch*(i.boss?.45:1),i.def.robot,t);_S={gib(i,e){Mr(i,1,e.dir),Bn(i)},wall(i,e){Mr(i,1.2,e.dir);let t=i.root.position;oe.decals.add(t.x,t.z,5,Le(gn)),xn(t.clone().setY(t.y+1.5),"\u556A\u5630\uFF01","big"),go(t,.4),Bn(i)},splat(i){let e=i.root.position;Mr(i,.8);for(let t=0;t<26;t++){let n=b(6.28),s=b(4,10);oe.blood.spawn(e.x,.2,e.z,Math.cos(n)*s,b(1,3),Math.sin(n)*s,b(.08,.2),2,Le(gn))}Bn(i)},drown(i){let e=i.root.position;for(let t=0;t<14;t++)oe.puffs.spawn(e.x,-.3,e.z,b(-3,3),b(5,11),b(-3,3),.4,b(.8,1.5),b(.5,.9),16579056,9422804,-16,.5);he.splash(),Bn(i)},mega(i,e){let t=i.root.position;Mr(i,5,e.dir),va(t.clone().setY(i.H*.5),12,1.2),In(t,1,26,.7,13125690);for(let n=0;n<70;n++){let s=b(6.28),r=b(0,16);Rn(b(.2,1.6),()=>oe.meat.spawn(t.x+Math.cos(s)*r,b(14,24),t.z+Math.sin(s)*r,b(-2,2),b(-4,2),b(-2,2),b(.2,.5),b(5,9),Math.random()<.4?i.def.fur:Le(zf)))}for(let n=0;n<14;n++)oe.decals.add(t.x+b(-9,9),t.z+b(-9,9),b(3,7),Le(gn));v.hitstop=.14,v.slowmoT=1.4,Nt(1),xo(5),v.boss=null,Bn(i)},hole(i){Bn(i)},drop(i,e){let t=i.root.position,n=e.dir||Ne(0,0,1),s=e.power||4,r=n.x*s,o=n.z*s,a=0,l=!1;i.mixer.timeScale=0,i.yaw=Math.atan2(-n.x,-n.z),i.root.rotation.y=i.yaw,On(t.x,t.y+i.H*.55,t.z,n.x,.3,n.z,16,6,i.def.robot),i.def.robot?(Pn(t.x,t.y+i.H*.6,t.z,8),he.clank()):he.squish();let c=t.y;yn.push({upd(h){a+=h;let u=Math.min(1,a/.28);i.tilt.rotation.x=-u*Math.PI/2-(u>=1?Math.max(0,Math.sin((a-.28)*18)*.12*Math.exp(-(a-.28)*6)):0),i.tilt.position.y=i.H*(.45-.27*u),t.y=c*(1-u),t.x+=r*h,t.z+=o*h;let d=Math.exp(-5*h);return r*=d,o*=d,u>=1&&!l&&(l=!0,oe.decals.add(t.x-n.x*.2,t.z-n.z*.2,b(2,3.2),i.def.robot?1710614:Le(gn)),ds(t.x,0,t.z,3,.5)),a>.3&&a<1.6&&Math.random()<h*14&&Ea(i,t.x,.35,t.z,2,4),Ym(i.tilt,a,6,6.6)},end(){Bn(i)}})},headpop(i,e){let t=i.root.position,n=t.y+i.H*.8,s=i.def.robot;i.bones.head&&i.bones.head.scale.setScalar(.001),On(t.x,n,t.z,0,1,0,26,8,s);for(let h=0;h<5;h++)(s?oe.scrap:oe.meat).spawn(t.x,n,t.z,b(-5,5),b(4,10),b(-5,5),b(.12,.26),b(5,8),s?15262932:Math.random()<.5?i.def.fur:Le(zf));if(!s)for(let h=0;h<2;h++)oe.eye.spawn(t.x,n,t.z,b(-5,5),b(7,12),b(-5,5),.2,b(7,11));he.pop(),he.squish(.03);let r=0,o=i.yaw,a=Le([-1,1])*b(3,5.5),l=!1,c=b(1.1,1.9);ui(i,"walk",2.6),t.y=i.def.fly?t.y:0,yn.push({upd(h){if(r+=h,r<c)i.mixer.update(h*2.6),o+=a*h,t.x+=Math.sin(o)*6.5*h,t.z+=Math.cos(o)*6.5*h,Aa(t,.4),i.root.rotation.y=o,t.y>0&&(t.y=Math.max(0,t.y-6*h)),Ea(i,t.x,t.y+i.H*.72,t.z,2,8);else{l||(l=!0,oe.decals.add(t.x,t.z,b(2.2,3.4),s?1710614:Le(gn)),he.thud());let u=Math.min(1,(r-c)/.3);i.tilt.rotation.x=u*Math.PI/2,i.tilt.position.y=i.H*(.45-.27*u),r<c+1&&Math.random()<h*12&&Ea(i,t.x+Math.sin(o)*i.H*.6,.3,t.z+Math.cos(o)*i.H*.6,2,3)}return Ym(i.tilt,r,6.5,7.1)},end(){Bn(i)}})},flat(i){let e=i.root.position,t=i.def.robot;e.y=0,i.mixer.timeScale=0,i.tilt.rotation.set(0,0,0);for(let s=0;s<34;s++){let r=b(6.28),o=b(4,11);(t?oe.oil:oe.blood).spawn(e.x,.25,e.z,Math.cos(r)*o,b(1,4.5),Math.sin(r)*o,b(.08,.2),2,t?1710614:Le(gn))}if(oe.decals.add(e.x,e.z,b(3.4,4.6)*i.H/1.5,t?1710614:Le(gn)),t)Pn(e.x,.3,e.z,12);else for(let s=0;s<2;s++)oe.eye.spawn(e.x,.3,e.z,b(-3,3),b(9,14),b(-3,3),.2,b(7,11));he.splat();let n=0;yn.push({upd(s){n+=s;let r=Math.min(1,n/.07),o=1-.95*r;if(n<7.5)return i.tilt.scale.set(1+.8*r,o,1+.8*r),i.tilt.position.y=i.H*.45*o,!1;let a=Math.max(.001,1-(n-7.5)/.5);return i.tilt.scale.set(1.8*a,.05,1.8*a),n>8},end(){Bn(i)}})},launch(i,e){let t=i.root.position,n=e.dir.clone().multiplyScalar(46);n.y=Math.max(n.y,12)+9,he.crack(),bi(i,"fall"),i.mixer.timeScale=3,On(t.x,t.y+i.H*.5,t.z,e.dir.x,.5,e.dir.z,12,7,i.def.robot);let s=0;yn.push({upd(r){s+=r,n.y-=8*r,t.addScaledVector(n,r),i.tilt.rotation.x+=24*r,i.mixer.update(r*3),Math.random()<r*40&&oe.puffs.spawn(t.x,t.y+i.H*.5,t.z,0,0,0,.5,.2,.4,16579056,14539473,0,1);for(let o of v.animals.slice()){if(o.boss){let l=o.root.position;if(Math.hypot(l.x-t.x,l.z-t.z)<o.H*.35&&t.y<o.H)return Ct(o,220,{mode:"gib",weapon:e.weapon}),Mr(i,1,n.clone().normalize()),!0;continue}let a=o.root.position;(a.x-t.x)**2+(a.y-t.y)**2+(a.z-t.z)**2<2.6&&Ct(o,999,{mode:"gib",dir:Xm.copy(n).normalize().clone(),weapon:e.weapon,style:"bowling"})}for(let o of v.obstacles)if(!(t.y>o.h)&&(t.x-o.x)**2+(t.z-o.z)**2<(o.r+.6)**2)return Mr(i,1.2,n.clone().normalize()),oe.decals.add(t.x,t.z,5,Le(gn)),xn(t.clone().setY(t.y+1.5),"\u556A\u5630\uFF01","big"),go(t,.4),!0;return t.y<.1&&n.y<0?(t.y=0,Mr(i,.9),!0):s>1.5?(xn(t,"\u2726","star",1.3,0),he.ding(),!0):!1},end(){Bn(i)}})},burn(i){let e=i.root.position,t=0,n=i.yaw,s=!1,r=0,o=b(.5,.9),a=b(1.8,2.6);ui(i,"walk",3.2),bi(i,"long"),i.mat.transparent=!1,i.mat.opacity=1,Math.random()<.6&&ps({root:i.root,H:i.H,dead:!1,label:null},Le(["\u71D9\u71D9\u71D9\u71D9\uFF01","\u6211\u8457\u706B\u4E86\uFF01","\u8AB0\u4F86\u6EC5\u706B\uFF01","\u554A\u554A\u554A\u554A\u554A\uFF01"]),1.6),yn.push({upd(l){if(t+=l,t<a){i.mixer.update(l*3.2),n+=b(-7,7)*l+Math.sin(t*9)*3*l,e.x+=Math.sin(n)*9*l,e.z+=Math.cos(n)*9*l,Aa(e,.4),i.root.rotation.y=n,!i.def.fly&&e.y>0&&(e.y=Math.max(0,e.y-8*l)),i.mat.color.lerp(mS.set(1709586),l*1.1),Rt.wail&&(o-=l,o<=0&&(o=b(.5,.9),bi(i,"long",!1)));for(let c=0;c<2;c++)oe.puffs.spawn(e.x+b(-.4,.4),e.y+b(.2,i.H),e.z+b(-.4,.4),b(-1,1),b(1,3),b(-1,1),.3,b(.5,.9),b(.25,.5),16773808,15234090,5,2);if(r-=l,r<=0){r=.12;for(let c of v.animals.slice()){let h=c.root.position;(h.x-e.x)**2+(h.z-e.z)**2<4.4&&Math.abs(h.y-e.y)<2.5&&Ct(c,c.boss?40:999,{mode:"burn",weapon:"flame",style:"spread"})}Math.random()<.3&&oe.decals.add(e.x,e.z,b(.8,1.5),2367770,!0)}}else if(s){if(t>a+.7){for(let c=0;c<14;c++)oe.puffs.spawn(e.x+b(-.3,.3),e.y+b(.1,i.H),e.z+b(-.3,.3),b(-3,3),b(0,4),b(-3,3),.3,b(.6,1.1),b(.5,.9),3025439,7038037,-3,2);for(let c=0;c<9;c++)oe.scrap.spawn(e.x,e.y+b(.2,i.H),e.z,b(-3,3),b(1,5),b(-3,3),b(.12,.28),b(4,7),Le([1380879,2367770]));return oe.decals.add(e.x,e.z,b(1.8,2.6),2367770),he.thud(),!0}}else{s=!0,i.mat.color.set(1380879),i.mixer.timeScale=0;for(let c=0;c<6;c++)oe.puffs.spawn(e.x,e.y+b(.3,i.H),e.z,b(-1,1),b(1,3),b(-1,1),.4,1,b(.6,1),7038037,3025439,2,2)}return!1},end(){Bn(i)}})},zap(i){let e=i.root.position,t=0,n=!1;i.mixer.timeScale=0,i.mat.transparent=!1,i.mat.opacity=1,i.tilt.rotation.set(0,0,0),!i.def.fly&&e.y<.3&&(e.y=0),yn.push({upd(s){if(t+=s,t<.55){let r=Math.floor(t*30)%2;return i.mat.emissive.setRGB(r,r,r*.8),i.mat.color.set(r?16777215:1118481),i.tilt.position.x=b(-.08,.08),i.tilt.scale.set(1+b(-.06,.06),1+b(0,.14),1+b(-.06,.06)),Math.random()<s*30&&Pn(e.x,e.y+b(.2,i.H),e.z,2),!1}if(!n){n=!0,i.mat.emissive.setRGB(0,0,0),i.mat.color.set(1380879),i.tilt.position.x=0,i.tilt.scale.setScalar(1);for(let r=0;r<6;r++)oe.puffs.spawn(e.x,e.y+b(.3,i.H),e.z,b(-1,1),b(1,3),b(-1,1),.4,1,b(.6,1),7038037,3025439,2,2)}if(e.y>0&&(e.y=Math.max(0,e.y-14*s)),t>1.5){for(let r=0;r<12;r++)oe.puffs.spawn(e.x+b(-.3,.3),e.y+b(.1,i.H),e.z+b(-.3,.3),b(-3,3),b(0,4),b(-3,3),.3,b(.6,1.1),b(.5,.9),3025439,7038037,-3,2);for(let r=0;r<8;r++)oe.scrap.spawn(e.x,e.y+b(.2,i.H),e.z,b(-3,3),b(1,5),b(-3,3),b(.12,.28),b(4,7),Le([1380879,2367770]));return oe.decals.add(e.x,e.z,b(1.8,2.6),2367770),he.thud(),!0}return!1},end(){Bn(i)}})},slice(i,e){let t=e.cut||Le(["h","d"]),n=i.H,s=i.root.position,r=i.def.robot,o,a;t==="v"?(o=Ne(1,0,0),a=Ne(0,n*.5,0)):t==="d"?(o=Ne(.55*Le([-1,1]),.83,0).normalize(),a=Ne(0,n*.5,0)):(o=Ne(0,1,0),a=Ne(0,n*.45,0)),i.tilt.rotation.set(0,0,0),i.tilt.position.y=n*.45,i.tilt.scale.setScalar(1),!i.def.fly&&t!=="v"&&(s.y=Math.max(0,s.y));let l=new Bt;l.rotation.y=i.root.rotation.y,l.position.copy(a).applyAxisAngle(jc.set(0,1,0),i.root.rotation.y).add(s);let c=xS(i.model);c.position.set(-a.x,-a.y,-a.z);let h=i.mat.clone(),u=new pn,d=new pn;h.clippingPlanes=[u],i.mat.clippingPlanes=[d],i.mat.needsUpdate=!0,i.mat.transparent=!1,i.mat.opacity=1,h.transparent=!1,h.opacity=1,c.traverse(C=>{C.isMesh&&(C.material=h,C.frustumCulled=!1)}),l.add(c),v.scene.add(l);let f=new pn(o.clone(),0),p=new pn().setFromNormalAndCoplanarPoint(o.clone().negate(),a.clone().sub(i.tilt.position)),x=(C,P,O)=>{let z=new Oe(new Ii(1,18),r?new at({color:3025439,side:Pt}):$m);z.scale.set(n*.3,t==="v"?n*.47:n*.3,1),z.quaternion.setFromUnitVectors(jc.set(0,0,1),o),z.position.copy(P).addScaledVector(o,O*.01),C.add(z)};x(l,Ne(0,0,0),1),x(i.tilt,a.clone().sub(i.tilt.position),-1),i.extra=[{obj:l,mat:h}];let m=Xm.set(o.x,0,o.z).applyAxisAngle(jc.set(0,1,0),i.root.rotation.y).clone(),g=e.dir||Ne(0,0,0),y=t==="v"?Ne(m.x*2.6,2.2,m.z*2.6):Ne(g.x*3+m.x*3.5+b(-1,1),b(4.5,6.5),g.z*3+m.z*3.5+b(-1,1)),w=t==="v"?Ne(0,0,-5):Ne(b(-7,7),b(-4,4),b(-7,7));On(l.position.x,l.position.y,l.position.z,0,.6,0,30,7,r),r&&(Pn(l.position.x,l.position.y,l.position.z,12),he.clank()),he.slice();let M=0,R=!1,A=i.yaw,_=t==="v"?0:b(.45,.85);_?ui(i,"walk",2.6):i.mixer.timeScale=0;let E=n*.2,N=s.y;yn.push({upd(C){if(M+=C,R||(y.y-=22*C,l.position.addScaledVector(y,C),l.rotation.x+=w.x*C,l.rotation.z+=w.z*C,l.rotation.y+=w.y*C,t==="v"&&l.rotation.z<-Math.PI/2&&(l.rotation.z=-Math.PI/2,w.z=0),l.position.y<E&&(l.position.y=E,R=!0,oe.decals.add(l.position.x,l.position.z,b(1.6,2.6),r?1710614:Le(gn)),he.thud(),t!=="v"&&l.rotation.set(Math.PI/2*Le([-1,1]),l.rotation.y,0))),M<_)i.mixer.update(C*2.6),s.x+=Math.sin(A)*5*C,s.z+=Math.cos(A)*5*C,Aa(s,.4),Ea(i,s.x,s.y+a.y,s.z,2,7);else{let P=Math.min(1,(M-_)/.32);t==="v"?(i.tilt.rotation.z=P*Math.PI/2,s.y=N*(1-P)):i.tilt.rotation.x=P*Math.PI/2,i.tilt.position.y=n*(.45-.25*P),M<_+.9&&Math.random()<C*16&&Ea(i,s.x,.4,s.z,2,4),P>=1&&!i._pool&&(i._pool=!0,oe.decals.add(s.x,s.z,b(2.2,3.2),r?1710614:Le(gn)))}if(l.updateMatrixWorld(!0),i.root.updateMatrixWorld(!0),u.copy(f).applyMatrix4(l.matrixWorld),d.copy(p).applyMatrix4(i.tilt.matrixWorld),M>6.2){let P=Math.max(.001,1-(M-6.2)/.6);l.scale.setScalar(P),i.tilt.scale.setScalar(P)}return M>6.8},end(){Bn(i)}})}}});function gs(){v.camera.getWorldDirection(Ve),di.crossVectors(Ve,s0).normalize(),ms.crossVectors(di,Ve),gt.copy(v.camera.position)}function It(i,e,t,n,s=0,r=0,o=0,a=0,l=0,c=0){let h=new Oe(new En(i,e,t),Er(n));return h.position.set(s,r,o),h.rotation.set(a,l,c),h}function jt(i,e,t,n,s=0,r=0,o=0,a=0,l=0,c=0,h=10){let u=new Oe(new Kt(i,e,t,h),Er(n));return u.position.set(s,r,o),u.rotation.set(a,l,c),u}function MS(){let o={};o.katana=fi(jt(.018,.018,.24,3025439,0,0,0),jt(.05,.05,.014,15911244,0,.125,0),It(.01,.82,.045,14541530,0,.54,0),It(.012,.82,.012,16250864,0,.54,-.022)),o.hammer=fi(jt(.026,.03,1,9067051,0,.3,0),jt(.19,.19,.42,7038037,0,.85,0,Kn,0,0,12),jt(.2,.2,.05,15911244,0,.85,.19,Kn,0,0,12),jt(.2,.2,.05,15911244,0,.85,-.19,Kn,0,0,12)),o.bat=fi(jt(.02,.018,.3,3025439,0,0,0),jt(.058,.03,.7,9067051,0,.5,0));for(let l=0;l<14;l++){let c=l/7*6.28+(l>6?.45:0),h=.55+(l>6?.2:0)+l%2*.06,u=new Oe(new er(.018,.07,5),Er(14541530));u.position.set(Math.cos(c)*.07,h,Math.sin(c)*.07),u.rotation.set(Math.sin(c)*Kn,0,-Math.cos(c)*Kn),o.bat.add(u)}Wf=It(.022,.085,.6,14541530,0,0,-.42),o.saw=fi(It(.17,.15,.24,15234090,0,0,0),It(.05,.05,.2,3025439,0,.11,.02),It(.17,.04,.1,3025439,0,-.05,-.14),Wf);for(let l=0;l<10;l++)o.saw.add(It(.026,.02,.03,3025439,0,.05,-.16-l*.055)),o.saw.add(It(.026,.02,.03,3025439,0,-.05,-.19-l*.055));o.smg=fi(It(.06,.1,.34,3025439,0,0,0),jt(.016,.016,.18,7038037,0,.015,-.26,Kn),It(.04,.18,.055,4864792,0,-.13,-.03,.15),It(.045,.1,.05,4864792,0,-.09,.12,-.2),It(.03,.03,.06,15911244,0,.065,-.1)),o.shotgun=fi(jt(.024,.024,.62,7038037,-.026,.02,-.3,Kn),jt(.024,.024,.62,7038037,.026,.02,-.3,Kn),It(.085,.085,.24,9067051,0,0,.06),It(.06,.12,.06,9067051,0,-.08,.16,-.3),It(.09,.05,.2,4864792,0,-.03,-.22)),Pa=fi(It(.07,.06,.02,4864792,0,0,0),new Oe(new rn(.04,8,6),Er(14715438))),Pa.children[1].position.z=-.03,Pa.position.set(0,.2,.02),o.sling=fi(jt(.02,.022,.2,9067051,0,0,0),jt(.016,.018,.2,9067051,-.06,.17,0,0,0,.6),jt(.016,.018,.2,9067051,.06,.17,0,0,0,-.6),Pa),o.missile=fi(It(.24,.2,.5,2966305,0,0,0),It(.26,.22,.04,15911244,0,0,-.2),It(.05,.12,.06,3025439,0,-.15,.1));for(let l=0;l<8;l++)o.missile.add(jt(.036,.036,.03,3025439,-.075+l%4*.05,.045-Math.floor(l/4)*.09,-.25,Kn));o.flame=fi(jt(.07,.07,.3,13125690,0,-.02,.1,Kn),jt(.022,.022,.5,7038037,0,.03,-.26,Kn),jt(.04,.028,.08,3025439,0,.03,-.52,Kn),It(.04,.12,.05,3025439,0,-.1,-.05),It(.02,.05,.02,15911244,0,0,-.5)),Mo=new Oe(new nr(.1,.014,6,20),Er(15911244)),Mo.position.set(0,.02,-.3);let a=new Oe(new rn(.07,12,10),new at({color:1053711}));return a.position.set(0,.02,-.3),o.hole=fi(It(.1,.12,.36,1850656,0,0,0),It(.05,.12,.06,3025439,0,-.11,.1),jt(.05,.07,.1,13935475,0,.02,-.2,Kn),Mo,a),o.hammer.scale.setScalar(.72),o.missile.scale.setScalar(.72),o.hole.scale.setScalar(.85),o.saw.scale.setScalar(.9),Zn.map(l=>{let c=o[l.id];return c.visible=!1,Ia.add(c),c})}function c0(){Ia=new Bt,v.camera.add(Ia),La=MS(),Tr=fi(It(.13,.12,.34,7032362,0,0,0),It(.14,.04,.38,3025439,0,-.07,-.01),It(.12,.22,.13,7032362,0,.14,.11)),Tr.visible=!1,Ia.add(Tr),Hi=new Oe(new es(.42,.6,24,1,.3,2.5),new at({color:16579056,transparent:!0,opacity:.8,side:Pt,depthTest:!1})),Hi.visible=!1,Hi.position.set(0,-.12,-.75),Ia.add(Hi),r0=new rn(.22,10,8),o0=Er(14715438),a0=new Kt(.07,.1,.6,8).rotateX(Math.PI/2),l0=Er(16249308),La[0].visible=!0}function h0(){for(let i of Us)i.kill&&i.kill();Us.length=0,V.cd=0,V.sw=0,V.charge=0,V.charging=!1,V.missiles=8,V.holeCd=0,V.pending=null,V.locks.length=0,V.kickT=0,Cn("saw",!1),Cn("flame",!1),Cn("hole",!1)}function th(i){i===V.cur||i<0||i>=Zn.length||V.next===i||(V.next=i,V.switchT=1e-4,V.charging=!1,V.charge=0,V.pending=null,Cn("saw",!1),Cn("flame",!1))}function Xf(i,e,t,n,s,r){let o=i.x-t,a=i.y-n,l=i.z-s,c=o*e.x+a*e.y+l*e.z,h=o*o+a*a+l*l-r*r;if(h>0&&c>0)return null;let u=c*c-h;if(u<0)return null;let d=-c-Math.sqrt(u);return d<0?0:d}function SS(i,e,t){let n=null,s=t;for(let r of v.animals){let o=r.root.position,a=v.buff.bighead>0&&!r.boss?2.2:1,l=Xf(i,e,o.x,o.y+r.H*(a>1?.95:.8),o.z,r.H*.3*a),c=Xf(i,e,o.x,o.y+r.H*.4,o.z,r.H*.42);if(l===null&&c===null)continue;let h=Math.min(l===null?1e9:l,c===null?1e9:c);h<s&&(s=h,n={a:r,head:l!==null,t:h})}return n}function u0(i,e,t){let n=t,s=null;if(e.y<-1e-4){let o=-i.y/e.y;o<n&&(n=o,s={type:"ground"})}let r=e.x*e.x+e.z*e.z;if(r>1e-6)for(let o of v.obstacles){let a=i.x-o.x,l=i.z-o.z,c=a*e.x+l*e.z,h=a*a+l*l-o.r*o.r,u=c*c-r*h;if(u<0)continue;let d=(-c-Math.sqrt(u))/r;if(d>0&&d<n){let f=i.y+e.y*d;f<o.h&&f>=0&&(n=d,s={type:"ob",ob:o})}}for(let o of v.barrels){if(!o.alive)continue;let a=Xf(i,e,o.x,.7,o.z,.8);a!==null&&a<n&&(n=a,s={type:"barrel",br:o})}return{t:n,hit:s}}function Da(i,e){let t=[];for(let n of v.animals){let s=n.root.position;Be.set(s.x-gt.x,s.y+n.H*.5-gt.y,s.z-gt.z);let r=Be.length(),o=i+n.H*.35;r>o||r>1.4+n.H*.3&&Be.dot(Ve)/r<e||t.push({a:n,d:r})}return t}function xs(i){i.alive&&(i.alive=!1,i.m.visible=!1,i.t=22,Na(Ne(i.x,.8,i.z),7.5,{weapon:"barrel"}))}function Na(i,e,t={}){let n=t.gibR===void 0?e*.62:t.gibR;va(i,e,t.loud||1);let s=0;for(let a of v.animals.slice()){let l=a.root.position;Be.set(l.x-i.x,l.y+a.H*.5-i.y,l.z-i.z);let c=Math.max(.01,Be.length()-(a.boss?a.H*.3:0));if(!(c>e))if(Be.normalize(),c<n)Ct(a,999,{mode:"gib",dir:Be.clone(),weapon:t.weapon,bossCap:420})&&s++;else{let h=1-c/e,u=Ne(Be.x*(8+12*h),8+9*h,Be.z*(8+12*h));Ct(a,30+70*h,{mode:"gib",dir:Be.clone(),knock:u,weapon:t.weapon})&&s++}}for(let a of v.barrels)a.alive&&(a.x-i.x)**2+(a.z-i.z)**2<(e+1.5)**2&&Rn(b(.08,.25),()=>xs(a));let r=v.player;Be.set(r.pos.x-i.x,0,r.pos.z-i.z);let o=Be.length();if(o<e&&Math.abs(r.pos.y+1-i.y)<e){let a=1-o/e;Be.normalize(),r.kvel.x+=Be.x*16*a,r.kvel.z+=Be.z*16*a,r.vel.y=Math.max(r.vel.y,5+9*a),r.onGround=!1}return s>=3&&v.onMulti&&v.onMulti(s,i),eh(i.x,i.z,e+26),s}function n0(i,e,t,n=1){gs();let s=Ne().copy(gt).addScaledVector(Ve,.75).addScaledVector(di,.2).addScaledVector(ms,-.15),r=new Map;for(let o=0;o<n;o++){Fs.copy(Ve).addScaledVector(di,b(-i,i)).addScaledVector(ms,b(-i,i)).normalize();let a=u0(gt,Fs,220),l=SS(gt,Fs,a.t),c=Ne();if(l){c.copy(gt).addScaledVector(Fs,l.t);let h=r.get(l.a)||{dmg:0,head:!1,dir:Fs.clone(),d:l.t};h.dmg+=e*(l.head?2.5:1),h.head=h.head||l.head,r.set(l.a,h),On(c.x,c.y,c.z,Fs.x,.2,Fs.z,3,5,l.a.def.robot),l.a.def.robot&&Pn(c.x,c.y,c.z,3)}else c.copy(gt).addScaledVector(Fs,a.t),a.hit&&(a.hit.type==="barrel"?xs(a.hit.br):oe.puffs.spawn(c.x,c.y+.05,c.z,0,1.5,0,.15,.4,.25,15260085,16249308,0,2));qc(s,c)}return oe.puffs.spawn(s.x+Ve.x*.2,s.y+Ve.y*.2,s.z+Ve.z*.2,0,0,0,.25,.1,.06,16773808,15911244,0,0),r.size&&(v.hitMark=.12),r}function f0(i,e,t){let n=new Oe(r0,o0);t&&n.scale.setScalar(.55),v.scene.add(n);let s=t?b(.55,1.15):6;Us.push({kill(){v.scene.remove(n)},upd(r){e.y-=20*r,i.addScaledVector(e,r),n.position.copy(i),n.rotation.x+=9*r,s-=r;let o=s<=0;if(i.y<.22&&(t?(i.y=.22,e.y=Math.abs(e.y)*.5,e.x*=.7,e.z*=.7):o=!0),!o)for(let a of v.animals){let l=a.root.position;if((l.x-i.x)**2+(l.y+a.H*.5-i.y)**2+(l.z-i.z)**2<(a.H*.5+.25)**2){o=!0;break}}if(!o){for(let a of v.obstacles)if(i.y<a.h&&(i.x-a.x)**2+(i.z-a.z)**2<(a.r+.2)**2){o=!0;break}}if(!t&&Math.random()<r*30&&oe.puffs.spawn(i.x,i.y,i.z,0,0,0,.3,.1,.3,16579056,14539473,0,1),!o)return!1;if(v.scene.remove(n),Na(i.clone(),t?4.6:7,{weapon:"sling",loud:t?.6:1}),!t)for(let a=0;a<5;a++){let l=a/5*6.28+b(.5);f0(Ne(i.x,Math.max(.5,i.y),i.z),Ne(Math.cos(l)*b(4,8),b(7,11),Math.sin(l)*b(4,8)),!0)}return!0}})}function bS(i,e){let t=null,n=e*e;for(let s of v.animals){let r=s.root.position,o=(r.x-i.x)**2+(r.y-i.y)**2+(r.z-i.z)**2;o<n&&(n=o,t=s)}return t}function TS(i,e,t){gs();let n=Ne().copy(gt).addScaledVector(Ve,.7).addScaledVector(di,.3).addScaledVector(ms,-.15),s=Ne().copy(Ve).addScaledVector(ms,.45+b(.2)).addScaledVector(di,(e-(t-1)/2)*.22).normalize(),r=new Oe(a0,l0);v.scene.add(r);let o=0,a=14,l=0,c=Ne(0,0,-1);he.missile(),Us.push({kill(){v.scene.remove(r)},upd(h){o+=h,a=Math.min(62,a+75*h),i&&i.dead&&(i=bS(n,45));let u=99;i&&(Gi(i,Ti).sub(n),u=Ti.length(),o>.16&&s.lerp(Ti.normalize(),Math.min(1,h*(5+o*14))).normalize()),n.addScaledVector(s,a*h),r.position.copy(n),r.quaternion.setFromUnitVectors(c,s),l-=h,l<=0&&o>.14&&(l=.02,oe.puffs.spawn(n.x-s.x*.4,n.y-s.y*.4,n.z-s.z*.4,b(-.5,.5),b(-.5,.5),b(-.5,.5),.3,.6,.45,16773808,14539473,.6,1.5));let d=o>5||n.y<.15||i&&u<i.H*.5+.6;if(!d&&o>.2){for(let f of v.obstacles)if(n.y<f.h&&(n.x-f.x)**2+(n.z-f.z)**2<f.r*f.r){d=!0;break}}return d?(v.scene.remove(r),Na(n.clone(),4.6,{gibR:3.3,weapon:"missile",loud:.75}),!0):!1}})}function ES(){gs();let i=Ne().copy(gt).addScaledVector(Ve,1),e=Ve.clone(),t=new Bt,n=new Oe(new rn(1,16,12),new at({color:790539})),s=new Oe(new nr(1.5,.09,6,32),new at({color:15911244})),r=new Oe(new nr(1.9,.05,6,32),new at({color:16579056}));t.add(n,s,r),t.scale.setScalar(.35),v.scene.add(t);let o={done:!1},a=0,l=0,c=[],h=0;Us.push({kill(){v.scene.remove(t),o.done=!0,Cn("hole",!1)},upd(u){if(a+=u,s.rotation.x+=u*5,s.rotation.y+=u*3,r.rotation.y-=u*4,r.rotation.z+=u*2.5,l===0){i.addScaledVector(e,24*u),t.position.copy(i);let x=a>.9||i.y<1.2;if(!x){for(let m of v.obstacles)if(i.y<m.h&&(i.x-m.x)**2+(i.z-m.z)**2<(m.r+.5)**2){x=!0;break}}if(!x){for(let m of v.animals)if(Gi(m,Be),Be.distanceToSquared(i)<4){x=!0;break}}return x&&(l=1,a=0,i.y=Math.max(i.y,2.6),t.position.copy(i),Cn("hole",!0),In(i.clone().setY(.1),14,1,.5,1057807)),!1}let d=3.6,f=Math.min(1,a/.4);if(t.scale.setScalar(.35+1*f+Math.sin(a*18)*.05+c.length*.03),h-=u,h<=0){h=.03;let x=b(6.28),m=b(6,16);oe.puffs.spawn(i.x+Math.cos(x)*m,b(.2,5),i.z+Math.sin(x)*m,-Math.cos(x)*m*2.2-Math.sin(x)*6,2,-Math.sin(x)*m*2.2+Math.cos(x)*6,.25,.12,.45,2966305,1057807,0,0)}for(let x of v.animals.slice()){let m=x.root.position;Gi(x,Be),Ti.copy(i).sub(Be);let g=Ti.length();if(x.boss){g<22&&Ct(x,260*u,{weapon:"hole",mode:"gib",bossCap:999});continue}if(g>24)continue;x.state!=="sucked"&&(x.chute&&(x.root.remove(x.chute),x.chute=null),x.state="sucked",x.hole=o,x.mixer.timeScale=3,Math.random()<.45&&he.cry("rise",x.def.pitch,x.def.robot)),x.hole!==o&&(x.hole=o),Ti.multiplyScalar(1/g);let y=Math.min(42,5+240/(g+2));m.x+=(Ti.x*y+-Ti.z*y*.55)*u,m.y+=Ti.y*y*u,m.z+=(Ti.z*y+Ti.x*y*.55)*u,x.tilt.rotation.x+=13*u,x.tilt.rotation.z+=9*u,x.tilt.scale.setScalar(Si(g/7,.18,1)),g<1.4&&(c.push({fur:x.def.fur,robot:x.def.robot}),Ct(x,9999,{mode:"hole",weapon:"hole"}),he.pop())}if(a<d)return!1;o.done=!0,Cn("hole",!1),v.scene.remove(t),va(i,8,1.1),In(i.clone().setY(.1),1,22,.6,13125690);let p=c.length;for(let x=0;x<Math.min(160,p*12+8);x++){let m=b(6.28),g=b(.1,1.45),y=b(8,22),w=c[x%Math.max(1,p)],M=Math.cos(m)*Math.cos(g)*y,R=Math.sin(g)*y,A=Math.sin(m)*Math.cos(g)*y;if(!p)break;w.robot?oe.scrap.spawn(i.x,i.y,i.z,M,R,A,b(.15,.3),b(5,9),15262932):oe.meat.spawn(i.x,i.y,i.z,M,R,A,b(.14,.34),b(5,9),Math.random()<.4?w.fur:Le([13125690,14707290,11022888]))}if(p){On(i.x,i.y,i.z,0,.8,0,Math.min(260,p*30),16,!1,.9);for(let x=0;x<Math.min(16,p*2);x++)oe.eye.spawn(i.x,i.y,i.z,b(-9,9),b(6,16),b(-9,9),.2,b(7,11));xo(Math.min(5,p))}return p>=3&&v.onMulti&&v.onMulti(p,i,"\u9ED1\u6D1E\u56DE\u6536"),Nt(.9),!0}})}function Vf(i){gs(),i=i||Da(4,.3);for(let{a:e}of i)Gi(e,Be),On(Be.x,Be.y,Be.z,-Ve.x*.3,.5,-Ve.z*.3,8,7,e.def.robot),Ct(e,170,{mode:"slice",cut:V.swDir>0?"h":"d",dir:Ve.clone(),weapon:"katana",bossCap:170});i.length&&(v.hitstop=.045,Nt(.25),he.slice(),v.hitMark=.12)}function i0(i){gs();let e=v.player,t=Math.hypot(Ve.x,Ve.z)||1,n=i?1.75:1,s=Ne(e.pos.x+Ve.x/t*2.5,0,e.pos.z+Ve.z/t*2.5);he.slam(),Nt(i?1:.7),In(s,.5,6.5*n,.35),In(s,.3,4*n,.5,15260085),ds(s.x,0,s.z,12,1.1*n),oe.decals.add(s.x,s.z,3.4*n,3814692,!0),v.hitstop=.05;let r=0;for(let o of v.animals.slice()){let a=o.root.position,l=Math.hypot(a.x-s.x,a.z-s.z);if(!(a.y>4.5*n)){if(l<2.6*n+(o.boss?o.H*.3:0))Ct(o,999,{mode:"flat",weapon:"hammer",bossCap:340})&&r++,o.boss&&(Gi(o,Be),On(Be.x,Be.y,Be.z,0,1,0,30,9));else if(l<6.5*n){let c=1-l/(6.5*n);Ct(o,30,{mode:"splat",weapon:"hammer",knock:Ne((a.x-s.x)/l*5,9+7*c,(a.z-s.z)/l*5)})&&r++}}}for(let o of v.barrels)o.alive&&(o.x-s.x)**2+(o.z-s.z)**2<(4*n)**2&&xs(o);i&&xn(s.clone().setY(2.2),"\u5929\u964D\u6B63\u7FA9\uFF01","big"),r>=3&&v.onMulti&&v.onMulti(r,s),eh(s.x,s.z,26)}function wS(){gs();let i=Da(4.1,.35);for(let{a:e}of i){let t=Ve.clone();t.y=Math.max(t.y,.28),t.normalize(),e.boss?(Gi(e,Be),On(Be.x,Be.y,Be.z,t.x,.5,t.z,20,9),Ct(e,260,{weapon:"bat"})):Ct(e,999,{mode:"launch",dir:t,weapon:"bat"})}i.length&&(v.hitstop=.07,Nt(.5),v.hitMark=.12,i[0].a.boss&&he.crack())}function AS(){gs(),V.kickCd=.5,V.kickT=.3,he.swing(),Rn(.08,()=>{gs();let i=Da(3.2,.45),e=Math.hypot(Ve.x,Ve.z)||1;for(let{a:t}of i){if(t.boss){Ct(t,60,{weapon:"kick"});continue}Ct(t,25,{mode:"splat",weapon:"kick",knock:Ne(Ve.x/e*22,8.5,Ve.z/e*22)})}for(let t of v.barrels)t.alive&&(t.x-gt.x)**2+(t.z-gt.z)**2<6&&xs(t);i.length&&(he.kick(),Nt(.3),v.hitstop=.04,v.hitMark=.12)})}function d0(i,e){let t=v.input,n=Zn[V.cur].id,s=v.rageOn>0,r=v.buff.rapid>0,o=(s?.5:1)*(r?.3:1),a=v.player;if(V.cd-=i,V.kickCd-=i,V.holeCd-=i*(s?2:1)*(r?8:1),V.rec=Math.max(0,V.rec-i*9),V.kickT>0&&(V.kickT-=i),V.missiles<8&&(V.missT+=i*(s?2.5:1)*(r?8:1),V.missT>.5&&(V.missT=0,V.missiles++)),V.switchT>0&&(V.switchT+=i/.2,V.next>=0&&V.switchT>=.5&&(La[V.cur].visible=!1,V.cur=V.next,V.next=-1,La[V.cur].visible=!0,V.sw=0,he.ui()),V.switchT>=1&&(V.switchT=0)),V.pending){let c=V.pending;c.land?a.onGround&&(V.pending=null,i0(!0)):(c.t-=i,c.t<=0&&(V.pending=null,c.fn()))}let l=V.switchT===0&&V.cd<=0;if(V.firing=!1,V.cutting=!1,t.altPressed&&V.kickCd<=0&&AS(),gs(),n==="katana"){if(t.fire&&l){V.cd=.26*o,V.sw=.001,V.swDir*=-1,he.swing();let c=Da(3.8,.4);if(c.length)Vf(c);else{let h=null,u=.9,d=0;for(let f of v.animals){Gi(f,Be).sub(gt);let p=Be.length();if(p>13||p<3)continue;let x=Be.dot(Ve)/p;x>u&&(u=x,h=f,d=p)}if(h){let f=h.root.position,p=f.x-a.pos.x,x=f.z-a.pos.z,m=Math.hypot(p,x)||1;a.dash={x:p/m,z:x/m,t:.11,speed:Math.max(0,m-2.3)/.11},he.whoosh(),V.pending={t:.11,fn:()=>Vf()}}else Vf(c)}}}else if(n==="hammer")t.fire&&l&&!V.pending&&(V.cd=.9*o,V.sw=.001,he.swing(!0),!a.onGround&&a.pos.y>.8?(a.vel.y=-36,V.pending={land:!0}):V.pending={t:.22*o,fn:()=>i0(!1)});else if(n==="bat")t.fire&&l&&(V.cd=.46*o,V.sw=.001,V.swDir*=-1,he.swing(!0),V.pending={t:.09,fn:wS});else if(n==="saw"){let c=t.fire&&V.switchT===0;if(V.firing=c,c){let h=Da(3.2,.55);V.cutting=h.length>0;for(let{a:u}of h)Gi(u,Be),On(Be.x,Be.y,Be.z,-Ve.x,.5,-Ve.z,2,9,u.def.robot),u.def.robot&&Pn(Be.x,Be.y,Be.z,2),Ct(u,560*i*(s?2:1),{mode:"slice",cut:"v",dir:Ve.clone(),weapon:"saw",bossCap:999});V.cutting&&(v.trauma<.3&&Nt(.08),Math.random()<i*5&&xo(1),v.hitMark=.05)}Cn("saw",c,V.cutting?1:0)}else if(n==="smg"){if(t.fire&&l){V.cd=.056*o,V.rec=.6,he.smg();let c=n0(.022,27,"smg");for(let[h,u]of c)Ct(h,u.dmg,{mode:u.head?"headpop":"drop",dir:u.dir,power:3.5,weapon:"smg",head:u.head});oe.scrap.spawn(gt.x+Ve.x*.5+di.x*.25,gt.y-.15,gt.z+Ve.z*.5+di.z*.25,di.x*3+b(-1,1),b(2,4),di.z*3+b(-1,1),.05,1.5,15911244),v.trauma<.15&&Nt(.05)}}else if(n==="shotgun"){if(t.fire&&l){V.cd=.72*o,V.rec=1.6,he.shotgun(),Nt(.4);let c=n0(.085,21,"shotgun",12);for(let[h,u]of c){let d=Ne(u.dir.x*13,6,u.dir.z*13);Ct(h,u.dmg,{mode:u.d<11?"gib":u.head?"headpop":"drop",dir:u.dir,power:13,knock:u.d<16?d:null,weapon:"shotgun",head:u.head,bossCap:420})}a.kvel.x-=Ve.x*4,a.kvel.z-=Ve.z*4,Yc(gt,60)}}else if(n==="sling"){if(t.fire&&V.switchT===0)V.cd<=0&&(V.charging=!0,V.charge=Math.min(1,V.charge+i/(.75*o)),he.stretch(V.charge));else if(V.charging){V.charging=!1;let c=16+36*V.charge;f0(Ne().copy(gt).addScaledVector(Ve,.8).addScaledVector(ms,-.1),Ne().copy(Ve).multiplyScalar(c).addScaledVector(s0,3.5),!1),V.charge=0,V.cd=.3*o,V.rec=1,he.sling()}}else if(n==="missile"){let c=[];for(let u of v.animals){Gi(u,Be).sub(gt);let d=Be.length();if(d>95||d<2)continue;let f=Be.dot(Ve)/d;f>.72&&c.push({a:u,dot:f})}c.sort((u,d)=>d.dot-u.dot);let h=V.locks.length;if(V.locks=c.slice(0,Math.max(1,V.missiles)).map(u=>u.a),V.missiles||(V.locks.length=0),V.locks.length>h&&he.lock(),t.firePressed&&l&&V.missiles>0){let u=V.locks.slice(),d=u.length||Math.min(2,V.missiles);for(let f=0;f<d;f++)Rn(f*.045,()=>TS(u[f]||null,f,d));V.missiles-=d,V.cd=.45,V.rec=1.4,Nt(.3)}}else if(n==="flame"){let c=t.fire&&V.switchT===0;if(V.firing=c,c){let h=gt.x+Ve.x*.9+di.x*.22-ms.x*.14,u=gt.y+Ve.y*.9-ms.y*.14,d=gt.z+Ve.z*.9+di.z*.22-ms.z*.14;for(let f=0;f<3;f++){let p=b(17,25);oe.puffs.spawn(h,u,d,Ve.x*p+b(-2.2,2.2),Ve.y*p+b(-2.2,2.2),Ve.z*p+b(-2.2,2.2),.2,b(1,1.8),b(.32,.5),16765503,14696986,3,1.4)}for(let f of v.animals.slice()){Gi(f,Be).sub(gt);let p=Be.length();if(!(p>11+f.H*.3)&&!(p>2&&Be.dot(Ve)/p<.86)){if(f.boss){Ct(f,280*i,{weapon:"flame",mode:"burn",bossCap:999});continue}f.heat+=i*(s?2:1),f.heat>.2&&(Ct(f,999,{mode:"burn",weapon:"flame"}),he.ignite())}}for(let f of v.barrels)if(f.alive){Be.set(f.x-gt.x,.7-gt.y,f.z-gt.z);let p=Be.length();p<10&&Be.dot(Ve)/p>.9&&xs(f)}if(Math.random()<i*4){let f=u0(gt,Ve,10);f.hit&&f.hit.type==="ground"&&oe.decals.add(gt.x+Ve.x*f.t,gt.z+Ve.z*f.t,b(1,2),2762012,!0)}}Cn("flame",c)}else n==="hole"&&t.firePressed&&l&&V.holeCd<=0&&(V.holeCd=7,V.rec=1.6,V.cd=.5,he.hole(),ES(),Nt(.3));n!=="missile"&&V.locks.length&&(V.locks.length=0);for(let c=Us.length-1;c>=0;c--)Us[c].upd(e)&&Us.splice(c,1);CS(i,n)}function CS(i,e){let t=La[V.cur],n=vS[e],s=v.player,r={katana:.2,hammer:.55,bat:.3}[e]||.2;V.sw>0&&(V.sw+=i/r,V.sw>=1&&(V.sw=0));let o=s.onGround?Math.min(1,Math.hypot(s.vel.x,s.vel.z)/9):0,a=Math.cos(s.bobT*.5)*.014*o,l=Math.abs(Math.sin(s.bobT*.5))*.016*o,c=V.switchT>0?Math.sin(V.switchT*Math.PI):0;t.position.set(n[0]+a,n[1]-l-c*.45,n[2]+V.rec*.045),t.rotation.set(n[3]+V.rec*.09,n[4],n[5]),Hi.visible=!1;let h=V.sw;if(e==="katana"||e==="bat"){if(h>0){let u=RS(h),d=V.swDir;t.position.set(d*(.42-.84*u),n[1]+.16+Math.sin(u*Math.PI)*.05,n[2]-.05),t.rotation.set(-1.25,0,d*(-1.35+2.7*u)),h>.1&&h<.8&&(Hi.visible=!0,Hi.material.opacity=.85*(1-h),Hi.scale.set(d*(e==="bat"?1.25:1),1,1),Hi.rotation.z=(e==="katana"&&d<0?.5:.1)*d,Hi.rotation.x=-1.2)}}else if(e==="hammer")if(h>0){let u;h<.3?u=h/.3*.9:h<.45?u=.9-(h-.3)/.15*2.4:u=-1.5+(h-.45)/.55*1.5,t.rotation.x=n[3]+u,t.position.y=n[1]+Math.max(0,u)*.25,t.position.z=n[2]-(u<0?-u*.12:0)}else V.pending&&V.pending.land&&(t.rotation.x=n[3]+.9,t.position.y=n[1]+.22);else if(e==="saw")V.firing&&(t.position.x+=b(-.004,.004),t.position.y+=b(-.004,.004),t.position.z-=.04,V.cutting&&(t.position.x+=b(-.008,.008),t.rotation.z=b(-.03,.03))),Wf.position.y=V.firing?b(-.003,.003):0;else if(e==="sling")Pa.position.z=.02+V.charge*.24,t.rotation.x=n[3]+V.charge*.12,V.charge>.95&&(t.position.x+=b(-.003,.003));else if(e==="hole"){Mo.rotation.x+=i*6,Mo.rotation.y+=i*4;let u=V.holeCd<=0?1:.4;Mo.scale.setScalar(u)}else e==="flame"&&V.firing&&(t.position.x+=b(-.003,.003),t.position.y+=b(-.003,.003));if(V.kickT>0){let u=1-V.kickT/.3,d=Math.sin(u*Math.PI);Tr.visible=!0,Tr.position.set(.05,-.75+d*.4,-.35-d*.55),Tr.rotation.x=.5-d*.5}else Tr.visible=!1}var Zn,V,Ve,di,ms,gt,s0,Be,Ti,Fs,Us,Ia,La,Tr,Hi,r0,o0,a0,l0,Pa,Mo,Wf,t0,Er,fi,Kn,vS,Gi,RS,Fa=Dn(()=>{li();Bi();_o();Ca();xr();Zn=[{id:"katana",name:"\u6B66\u58EB\u5200",icon:"\u{1F5E1}\uFE0F",key:"1",tip:"\u9023\u9EDE\u30FB\u81EA\u52D5\u7A81\u9032"},{id:"hammer",name:"\u5DE8\u5927\u69CC\u5B50",icon:"\u{1F528}",key:"2",tip:"\u8DF3\u8D77\u4F86\u7838\u66F4\u5927"},{id:"bat",name:"\u72FC\u7259\u68D2",icon:"\u{1F3CF}",key:"3",tip:"\u5168\u58D8\u6253"},{id:"saw",name:"\u96FB\u92F8",icon:"\u2699\uFE0F",key:"4",tip:"\u6309\u4F4F"},{id:"smg",name:"\u885D\u92D2\u69CD",icon:"\u{1F52B}",key:"5",tip:"\u6309\u4F4F\u6383\u5C04"},{id:"shotgun",name:"\u9730\u5F48\u69CD",icon:"\u{1F4A5}",key:"6",tip:"\u8CBC\u81C9\u958B"},{id:"sling",name:"\u7206\u70B8\u5F48\u5F13",icon:"\u{1F383}",key:"7",tip:"\u6309\u4F4F\u84C4\u529B"},{id:"missile",name:"\u8FFD\u8E64\u98DB\u5F48",icon:"\u{1F680}",key:"8",tip:"\u81EA\u52D5\u9396\u5B9A 8 \u767C"},{id:"flame",name:"\u706B\u7130\u5674\u5C04\u5668",icon:"\u{1F525}",key:"9",tip:"\u6309\u4F4F\u30FB\u6703\u50B3\u67D3"},{id:"hole",name:"\u9ED1\u6D1E\u7832",icon:"\u{1F573}\uFE0F",key:"0",tip:"\u5168\u5438\u9032\u53BB"}],V={cur:0,next:-1,cd:0,sw:0,swDir:1,rec:0,switchT:0,charge:0,charging:!1,missiles:8,missT:0,holeCd:0,kickT:0,kickCd:0,pending:null,locks:[],cutting:!1,firing:!1},Ve=new F,di=new F,ms=new F,gt=new F,s0=new F(0,1,0),Be=new F,Ti=new F,Fs=new F,Us=[],La=[];t0={},Er=i=>t0[i]||(t0[i]=new Zt({color:i,flatShading:!0}));fi=(...i)=>{let e=new Bt;return i.forEach(t=>e.add(t)),e},Kn=Math.PI/2,vS={katana:[.34,-.34,-.5,-.55,0,-.3],hammer:[.4,-.62,-.62,-.2,0,-.3],bat:[.36,-.4,-.52,-.5,0,-.3],saw:[.24,-.26,-.42,0,0,0],smg:[.2,-.2,-.4,0,0,0],shotgun:[.2,-.21,-.42,0,0,0],sling:[.16,-.26,-.48,0,0,0],missile:[.28,-.24,-.46,0,0,0],flame:[.24,-.24,-.42,0,0,0],hole:[.24,-.23,-.44,0,0,0]};Gi=(i,e)=>e.set(i.root.position.x,i.root.position.y+i.H*.5,i.root.position.z);RS=i=>1-(1-i)*(1-i)});var ke,nh,qf,Yf,Ua,Kf,Zf,Ye,IS,ih=Dn(()=>{li();Bi();Fa();ke=i=>document.getElementById(i),nh=new F,qf=0,Yf=-1,Ua=[],Kf="",Zf=-1,Ye={};Ye.init=i=>{ke("weapons").innerHTML=Zn.map((e,t)=>`<div class="w" data-i="${t}"><span>${e.key}</span>${e.icon}</div>`).join(""),ke("wgrid").innerHTML=Zn.map(e=>`<div><b>${e.icon}</b>${e.key}\u3000${e.name}<small>${e.tip}</small></div>`).join(""),ke("btn-score").onclick=()=>i.start("score"),ke("btn-free").onclick=()=>i.start("free"),ke("btn-resume").onclick=()=>i.resume(),ke("btn-quit").onclick=()=>i.menu(),ke("btn-again").onclick=()=>i.start(v.lastMode||"score"),ke("btn-menu").onclick=()=>i.menu(),ke("btn-wail").onclick=()=>i.wail(),Ye.hiscore()};Ye.hiscore=()=>{let i=0;try{i=+localStorage.getItem("cozy-payback-hi")||0}catch{}return ke("hiscore").textContent=i?`\u672C\u6A5F\u6700\u9AD8\u5206\uFF1A${i.toLocaleString()}`:"",i};Ye.wail=i=>{ke("btn-wail").innerHTML=`\u{1F631} \u6158\u53EB\u7248\uFF1A${i?"\u958B":"\u95DC"}<small>${i?"\u5CF6\u6C11\u6703\u53EB\u5F97\u5F88\u6158":"\u53EA\u6709\u539F\u672C\u7684\u5C0F\u53EB\u8072"}</small>`,ke("btn-wail").classList.toggle("off",!i)};Ye.loading=i=>{ke("loadbar").firstElementChild.style.width=Math.round(i*100)+"%"};Ye.show=i=>{["loading","menu","pause","end"].forEach(e=>ke(e).classList.toggle("hidden",e!==i)),ke("hud").classList.toggle("hidden",!(i==="hud"||i==="pause"))};Ye.reset=()=>{ke("feed").innerHTML="",ke("announce").innerHTML="",ke("locks").innerHTML="",Ua=[],qf=0,Yf=-1,Kf="",Zf=-1,ke("buffs").innerHTML="",ke("wx").classList.add("hidden"),ke("combo").classList.add("hidden"),ke("boss").classList.add("hidden")};Ye.feed=i=>{let e=ke("feed"),t=document.createElement("div");for(t.innerHTML=i,e.appendChild(t);e.childElementCount>6;)e.firstChild.remove();setTimeout(()=>t.classList.add("out"),3600),setTimeout(()=>t.remove(),4e3)};Ye.announce=(i,e="",t=!1)=>{let n=ke("announce");n.innerHTML=`<div class="${t?"red":""}">${i}${e?`<small>${e}</small>`:""}</div>`};Ye.update=()=>{ke("score").textContent=Math.floor(v.score).toLocaleString(),ke("kills").textContent=v.kills,ke("best").textContent=v.bestCombo;let i=ke("timer");if(v.mode==="score"){let f=Math.max(0,Math.ceil(v.timeLeft));i.textContent=`${Math.floor(f/60)}:${String(f%60).padStart(2,"0")}`,i.classList.toggle("low",f<=15)}else{let f=Math.floor(v.elapsed);i.textContent=`\u221E ${Math.floor(f/60)}:${String(f%60).padStart(2,"0")}`,i.classList.remove("low")}let e=ke("combo");v.combo>=2?(e.classList.remove("hidden"),v.combo!==qf&&(ke("combo-n").innerHTML=`${v.combo}<small>\u9023\u6BBA</small>`,ke("combo-x").textContent=`\u5206\u6578 \xD7${(1+Math.min(v.combo-1,40)*.1).toFixed(1)}`,e.classList.remove("bump"),e.offsetWidth,e.classList.add("bump")),ke("combo-bar").firstElementChild.style.width=Math.max(0,v.comboT/3.2*100)+"%"):e.classList.add("hidden"),qf=v.combo;let t=ke("rage"),n=v.rageOn>0;if(t.querySelector("i").style.width=(n?v.rageOn/10*100:v.rage*100)+"%",t.classList.toggle("ready",!n&&v.rage>=1),t.querySelector("em").textContent=n?"\u66B4\u6012\u4E2D\uFF01":v.rage>=1?"\u6309 Q \u767C\u52D5":"\u6BBA\u8D8A\u591A\u96C6\u8D8A\u5FEB",ke("vignette").classList.toggle("rage",n),V.cur!==Yf){Yf=V.cur;let f=Zn[V.cur];document.querySelectorAll("#weapons .w").forEach((p,x)=>p.classList.toggle("on",x===V.cur)),ke("wname").innerHTML=`<b>${f.icon} ${f.name}</b><small>${f.tip}</small>`}let s=ke("ammo"),r=Zn[V.cur].id;if(r==="missile")s.classList.remove("hidden"),s.innerHTML=`\u98DB\u5F48 <b>${V.missiles}</b> / 8<div class="bar"><i style="width:${V.missiles/8*100}%"></i></div>`;else if(r==="hole"){s.classList.remove("hidden");let f=Math.max(0,1-Math.max(0,V.holeCd)/7);s.innerHTML=`${f>=1?"<b>\u9ED1\u6D1E\u5C31\u7DD2</b>":"\u9ED1\u6D1E\u5145\u80FD\u4E2D"}<div class="bar"><i style="width:${f*100}%"></i></div>`}else r==="sling"?(s.classList.remove("hidden"),s.innerHTML=`\u84C4\u529B<div class="bar"><i style="width:${V.charge*100}%"></i></div>`):s.classList.add("hidden");let o=Object.keys(v.buff),a=o.join(","),l=ke("buffs");a!==Kf&&(Kf=a,l.innerHTML=o.map(f=>`<div><b>${v.itemDefs[f].icon} ${v.itemDefs[f].name}</b><i></i></div>`).join(""));for(let f=0;f<o.length&&f<l.children.length;f++)l.children[f].lastElementChild.style.width=Math.max(0,Math.min(1,v.buff[o[f]]/v.itemDefs[o[f]].dur))*100+"%";let c=v.wx.rain<.05?0:v.wx.storm>0?2:1;if(c!==Zf){Zf=c;let f=ke("wx");f.classList.toggle("hidden",!c),f.textContent=c===2?"\u26C8\uFE0F \u96F7\u96E8":"\u{1F327}\uFE0F \u4E0B\u96E8"}v.hitMark>0&&(v.hitMark-=.016),ke("crosshair").classList.toggle("hit",v.hitMark>0);let h=ke("boss");v.boss&&!v.boss.dead?(h.classList.remove("hidden"),ke("boss-name").textContent=`\u26A0 \u5DE8\u5927\u5316\u7684${v.boss.def.name}\uFF08${v.boss.def.role}\uFF09`,h.querySelector("i").style.width=Math.max(0,v.boss.hp/v.boss.maxHp*100)+"%"):h.classList.add("hidden");let u=ke("locks"),d=V.locks.length;for(;Ua.length<d;){let f=document.createElement("i");u.appendChild(f),Ua.push(f)}for(let f=0;f<Ua.length;f++){let p=Ua[f];if(f>=d){p.style.display="none";continue}let x=V.locks[f];if(nh.set(x.root.position.x,x.root.position.y+x.H*.5,x.root.position.z).project(v.camera),nh.z>1){p.style.display="none";continue}p.style.display="",p.style.left=(nh.x+1)/2*innerWidth+"px",p.style.top=(1-nh.y)/2*innerHeight+"px"}};IS=[[6e4,"SSS","\u4EBA\u8CC7\u770B\u4E86\u90FD\u6015"],[42e3,"SS","\u6696\u5CF6\u5C60\u592B"],[28e3,"S","\u6E05\u7B97\u5927\u5E2B"],[18e3,"A","\u706B\u6C23\u4E0D\u5C0F"],[1e4,"B","\u6709\u5728\u767C\u6D29"],[4e3,"C","\u9084\u5728\u6696\u8EAB"],[0,"D","\u4F60\u662F\u4E0D\u662F\u592A\u5584\u826F\u4E86"]];Ye.end=i=>{let e=IS.find(l=>v.score>=l[0]);ke("rank").textContent=e[1],ke("rank-t").textContent=e[2],ke("e-score").textContent=Math.floor(v.score).toLocaleString(),ke("e-kills").textContent=v.kills,ke("e-combo").textContent=v.bestCombo;let t="-",n=0;for(let l in i.byWeapon)i.byWeapon[l]>n&&(n=i.byWeapon[l],t=l);let s={barrel:"\u74E6\u65AF\u6876",kick:"\u8E22\u98DB",thunder:"\u96F7\u5288",stomp:"\u5DE8\u4EBA\u8173",nuke:"\u5168\u5CF6\u8CC7\u9063\u4EE4",meteor:"\u9695\u77F3\u96E8",balloon:"\u6C26\u6C23\u5F48",pumpkin:"\u5357\u74DC\u795E"};Zn.forEach(l=>s[l.id]=l.name),ke("e-fav").textContent=s[t]||"-";let r="",o=0;for(let l in i.byVictim)i.byVictim[l]>o&&(o=i.byVictim[l],r=l);let a=i.newHigh?"\u3000\u{1F3C6} \u5237\u65B0\u672C\u6A5F\u7D00\u9304\uFF01":"";ke("end-detail").innerHTML=`\u7206\u982D ${i.head}\u3000\xB7\u3000\u7A7A\u4E2D\u64CA\u6BBA ${i.air}\u3000\xB7\u3000\u4E00\u77F3\u591A\u9CE5 ${i.multi} \u6B21\u3000\xB7\u3000\u5DE8\u5927\u5CF6\u6C11 ${i.boss}\u3000\xB7\u3000\u96B1\u85CF\u9053\u5177 ${i.items||0}<br>${r?`\u6700\u5E38\u88AB\u6E05\u7B97\u7684\u662F <b>${r}</b>\uFF08${o} \u6B21\uFF09`:""}${a}`,Ye.show("end")}});function x0(){kn=new Float32Array(sh*3);for(let t=0;t<sh;t++)kn[t*3]=b(zn),kn[t*3+1]=b(m0),kn[t*3+2]=b(zn);let i=new wt;i.setAttribute("position",new Mt(new Float32Array(sh*6),3).setUsage(ls)),Ei=new js(i,new Cs({color:15135219,transparent:!0,opacity:.5,fog:!1,depthWrite:!1})),Ei.frustumCulled=!1,Ei.visible=!1,v.scene.add(Ei);let e=[];for(let t=0;t<oh-1;t++){let n=t*2;e.push(n,n+1,n+2,n+1,n+3,n+2)}for(let t=0;t<3;t++){let n=new wt;n.setAttribute("position",new Mt(new Float32Array(oh*6),3).setUsage(ls)),n.setIndex(e);let s=new Oe(n,new at({color:16776160,fog:!1,side:Pt,transparent:!0,depthWrite:!1}));s.frustumCulled=!1,s.visible=!1,v.scene.add(s),za.push({m:s,t:0})}g0=document.getElementById("flash")}function _0(){$n.rain=0,$n.storm=0,rh=0,pi=0,Ba=5,So=null,Ei&&(Ei.visible=!1,za.forEach(i=>{i.t=0,i.m.visible=!1}),M0(0)),Cn("rain",!1)}function y0(i,e){So=i===null?null:[i,e||0],So&&($n.rain=i)}function v0(i){pi=Math.max(pi,i)}function M0(i){let e=v.env,t=$n.rain,n=t*.6+$n.storm*.15,s=n/.75;pi=Math.max(0,pi-i*4.5);let r=1-n*.72+pi*.5;e.sky.color.setRGB(r,r+n*.03,r+n*.08),v.scene.fog.color.copy(PS).lerp(LS,s).addScalar(pi*.2),v.scene.fog.near=hs(110,40,t),v.scene.fog.far=hs(330,160,t),e.hemi.intensity=1.5-n*.8+pi*1.6,e.sun.intensity=Math.max(.2,1.9-n*1.9),e.sea.color.copy(DS).lerp(NS,s);for(let a of v.clouds)a.material.color.copy(FS).lerp(US,s),a.scale.set(1+t*1.2,.5,1+t*1.2);let o=pi>.02?Math.min(.42,pi*.33).toFixed(2):"0";o!==p0&&(p0=o,g0.style.opacity=o)}function wr(i,e,t={}){let n=Ne(i,0,e),s=v.camera,r=s.position.distanceTo(n),o=za.find(x=>x.t<=0)||za[0];o.t=.2,o.m.visible=!0;let a=i+b(-10,10),l=e+b(-10,10),c=Si(r*.014,.18,1.3),h=o.m.geometry.attributes.position.array;Oa.setFromMatrixColumn(s.matrixWorld,0);for(let x=0;x<oh;x++){let m=x/(oh-1),g=Math.sin(Math.PI*m)*3.2,y=c*(1.2-.6*m),w=hs(a,i,m)+b(-g,g),M=hs(85,0,m),R=hs(l,e,m)+b(-g,g),A=x*6;h[A]=w-Oa.x*y,h[A+1]=M,h[A+2]=R-Oa.z*y,h[A+3]=w+Oa.x*y,h[A+4]=M,h[A+5]=R+Oa.z*y}o.m.geometry.attributes.position.needsUpdate=!0,pi=Math.max(pi,t.small?.5:1.3),In(n,.5,7,.35,16775106),Pn(i,.4,e,14),oe.decals.add(i,e,b(1.3,1.9),2367770,!0),Yc(Ne(i,2,e),320),go(n,t.small?.3:.6,90),he.zap(),he.thunder(r<45);let u=0,d=new Set;for(let x of v.animals.slice()){let m=x.root.position,g=x.boss?x.H*.4:2.6;(m.x-i)**2+(m.z-e)**2>g*g||(d.add(x),Ct(x,x.boss?380:999,{mode:"zap",weapon:"thunder",bossCap:380})&&u++)}let f=Ne(i,1,e),p=t.chain===void 0?5:t.chain;for(let x=0;x<p;x++){let m=null,g=49;for(let R of v.animals){if(d.has(R)||R.boss||R.state==="drop")continue;let A=R.root.position,_=(A.x-f.x)**2+(A.z-f.z)**2;_<g&&(g=_,m=R)}if(!m)break;d.add(m);let y=f.clone(),w=m.root.position.clone();w.y+=m.H*.5;let M=m;Rn(.07*(x+1),()=>{M.dead||(qc(y,w,16775106,.12),Pn(w.x,w.y,w.z,6),he.zap(),Ct(M,999,{mode:"zap",weapon:"thunder",style:"chain"})&&u++)}),f=w}for(let x of v.barrels)x.alive&&(x.x-i)**2+(x.z-e)**2<9&&xs(x);Rn(.6,()=>{u>=3&&v.onMulti&&v.onMulti(u,n,"\u9023\u9396\u96FB\u64CA")})}function OS(){let i=v.player.pos,e=Math.random();if(e<.2){let r=v.barrels.filter(o=>o.alive&&Math.hypot(o.x-i.x,o.z-i.z)<50);if(r.length){let o=Le(r);wr(o.x,o.z);return}}let t=v.animals.filter(r=>r.dP<55&&r.state!=="drop");if(e<.85&&t.length){let r=Le(t);wr(r.root.position.x,r.root.position.z);return}let n=b(6.28),s=b(12,45);wr(i.x+Math.cos(n)*s,i.z+Math.sin(n)*s)}function $f(i,e,t=!1){if(!t){let f=v.mode==="score"?v.elapsed:v.elapsed%300,p=f>60?Math.min(1,(f-60)/25):0,x=f>120?Math.min(1,(f-120)/8):0;v.mode==="free"&&f>240&&(p=Math.max(0,1-(f-240)/30),p<.6&&(x=0)),So&&(p=So[0],x=So[1]),$n.rain+=(p-$n.rain)*Math.min(1,i*.9),$n.storm=x;let m=x>0?2:p>0?1:0;m!==rh&&(m===1&&rh===0?Ye.announce("\u8B8A\u5929\u4E86\u2026","\u5730\u677F\u6FD5\u6ED1\uFF0C\u5CF6\u6C11\u6703\u81EA\u5DF1\u8DCC\u5012"):m===2?(Ye.announce("\u96F7\u96E8\u4EA4\u52A0\uFF01","\u88AB\u96F7\u5288\u5230\u7684\u90FD\u7B97\u4F60\u7684",!0),Ba=1.5):m===0&&Ye.announce("\u653E\u6674\u4E86","\u4E0B\u4E00\u5834\u96E8\u5F88\u5FEB\u5C31\u4F86"),rh=m),m===2&&(Ba-=e,Ba<=0&&(Ba=b(3.5,7),OS())),Cn("rain",$n.rain>.03,$n.rain)}M0(i);for(let f of za)f.t>0&&(f.t-=i,f.m.material.opacity=Math.random()<.3?.35:1,f.t<=0&&(f.m.visible=!1));let n=Math.floor(sh*$n.rain);if(Ei.visible=n>0,!n)return;let s=v.camera.position,r=Ei.geometry.attributes.position.array,o=Math.max(0,s.y-9),a=36,l=5,c=2,h=.036;for(let f=0;f<n;f++){let p=f*3,x=f*6;kn[p+1]-=a*e,kn[p]+=l*e,kn[p+2]+=c*e,kn[p+1]<0&&(kn[p+1]+=m0,kn[p]=b(zn),kn[p+2]=b(zn));let m=s.x+((kn[p]-s.x+zn/2)%zn+zn)%zn-zn/2,g=s.z+((kn[p+2]-s.z+zn/2)%zn+zn)%zn-zn/2,y=o+kn[p+1];r[x]=m,r[x+1]=y,r[x+2]=g,r[x+3]=m-l*h,r[x+4]=y+a*h,r[x+5]=g-c*h}Ei.geometry.setDrawRange(0,n*2),Ei.geometry.attributes.position.needsUpdate=!0,Ei.material.opacity=.3+.3*$n.rain;let u=v.player.pos,d=$n.rain*100*e;for(;d>0;){if(d>=1||Math.random()<d){let f=b(6.28),p=Math.sqrt(Math.random())*20;oe.puffs.spawn(u.x+Math.cos(f)*p,.06,u.z+Math.sin(f)*p,0,.5,0,.05,.22,.16,16055034,12900571,0,1)}d-=1}}var sh,zn,m0,oh,$n,PS,LS,DS,NS,FS,US,Oa,Ei,kn,g0,pi,Ba,rh,So,p0,za,Jf=Dn(()=>{li();Bi();_o();xr();Ca();Fa();ih();sh=1500,zn=46,m0=26,oh=14,$n=v.wx,PS=new be(13098448),LS=new be(6715774),DS=new be(8372687),NS=new be(5012617),FS=new be(16579056),US=new be(7108733),Oa=new F,pi=0,Ba=5,rh=0,So=null,p0="0",za=[]});function F0(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d");e.fillStyle="#E8D9B5",e.fillRect(0,0,128,128),e.fillStyle="#C8483A",e.fillRect(52,0,24,128),e.fillRect(0,52,128,24),e.strokeStyle="#2E2A1F",e.lineWidth=10,e.strokeRect(0,0,128,128),e.fillStyle="#F2C94C",e.beginPath(),e.arc(64,64,30,0,6.28),e.fill(),e.lineWidth=6,e.stroke(),e.fillStyle="#2E2A1F",e.font="800 44px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("?",64,67);let t=new Xn(i);t.colorSpace=Et,A0=new En(1.1,1.1,1.1),R0=new Zt({map:t}),C0=new Kt(.55,.55,46,10,1,!0),I0=new at({color:15911244,transparent:!0,opacity:.2,depthWrite:!1,fog:!1,side:Pt}),P0=new wn(.9,0),L0=new Zt({color:3813930,emissive:12732946,flatShading:!0}),D0=new rn(.8,10,8).scale(1,.82,1),N0=new Zt({color:14715438,flatShading:!0})}function td(i,e,t={}){let n=new Bt;if(n.add(new Oe(A0,R0)),t.beam){let s=new Oe(C0,I0);s.position.y=22,n.add(s)}v.scene.add(n),Ar.push({g:n,x:i,z:e,y:t.sky?34:0,fall:!!t.sky,t:b(6)})}function U0(i){v.scene.remove(Ar[i].g),Ar.splice(i,1)}function BS(i,e){let t=v.player.pos;for(let n=0;n<30;n++){let s=b(6.28),r=b(i,e),o=t.x+Math.cos(s)*r,a=t.z+Math.sin(s)*r;if(!(Math.hypot(o,a)>St-8)&&v.obstacles.every(l=>(l.x-o)**2+(l.z-a)**2>(l.r+1.5)**2))return[o,a]}return[b(-15,15),b(-15,15)]}function O0(){for(;Ar.length;)U0(0);bo.forEach(i=>v.scene.remove(i.m)),bo.length=0;for(let i in v.buff)delete v.buff[i];v.eyeK=1,ah=15,lh=18,ka=0,ch=0,hh=0,Ha=0,uh=0,Qf="",document.getElementById("vignette").classList.remove("frozen")}function B0(){let i=v.obstacles.filter(e=>e.h===5.5).sort(()=>Math.random()-.5).slice(0,3);for(let e of i){let t=Math.hypot(e.x,e.z),n=(t+6)/t;td(e.x*n,e.z*n)}}function nd(i){let e=v.itemDefs[i];if(!e){let t=E0.filter(s=>s.id!==Qf&&!(v.buff[s.id]>0)),n=b(t.reduce((s,r)=>s+r.w,0));e=t[0];for(let s of t)if(n-=s.w,n<=0){e=s;break}}if(Qf=e.id,v.buff[e.id]=e.dur,he.pickup(),Ye.announce(`${e.icon} ${e.name}`,e.tip,e.id==="nuke"),Ye.feed(`\u64BF\u5230\u96B1\u85CF\u9053\u5177 <b>${e.icon} ${e.name}</b>`),v.stats&&(v.stats.items=(v.stats.items||0)+1),e.id==="nuke"&&(he.siren(),ed=99),e.id==="balloon"){for(let t of v.animals)t.boss||t.state==="drop"||t.state==="sucked"||t.dP>55||(t.state="sucked",t.hole=w0,t.balloon={t:0,pop:b(3.2,5.8)},t.mixer.timeScale=2.5);he.whoosh()}return e.id==="stop"&&(Rt.tempo=.55,document.getElementById("vignette").classList.add("frozen")),e}function zS(i){if(i==="nuke")kS();else if(i==="stop")Rt.tempo=v.rageOn>0?1.3:1,document.getElementById("vignette").classList.remove("frozen"),Ye.announce("\u6642\u9593\u6062\u5FA9","\u525B\u525B\u780D\u7684\u73FE\u5728\u4E00\u8D77\u5012"),he.rage();else if(i==="bighead")for(let e of v.animals)e.bones.head&&e.bones.head.scale.setScalar(1)}function b0(i,e,t){let n=new Oe(t?D0:P0,t?N0:L0),s={m:n,x:i,z:e,sx:i+b(8,16),sz:e+b(4,10),t:0,T:b(.65,.85),pumpkin:t};n.position.set(s.sx,46,s.sz),v.scene.add(n),bo.push(s)}function T0(){let i=v.player.pos,e=v.animals.filter(s=>s.dP<62&&s.dP>7&&s.state!=="drop");if(e.length&&Math.random()<.8){let s=Le(e).root.position;return[s.x+b(-1.5,1.5),s.z+b(-1.5,1.5)]}let t=b(6.28),n=b(12,42);return[i.x+Math.cos(t)*n,i.z+Math.sin(t)*n]}function kS(){let i=v.player,e=Math.sin(i.yaw),t=Math.cos(i.yaw),n=Ne(i.pos.x-e*16,.5,i.pos.z-t*16);v0(2.2),he.boom(1.6),he.thunder(!0),Nt(1),v.slowmoT=1.6,v.hitstop=.12,i.kvel.set(e*14,0,t*14),i.vel.y=13,i.onGround=!1;for(let r=0;r<3;r++)Rn(r*.12,()=>In(n,2,95,1.1+r*.2,r===1?15911244:16579056));for(let r=0;r<46;r++){let o=b(6.28),a=b(0,3);oe.puffs.spawn(n.x+Math.cos(o)*a,b(0,22),n.z+Math.sin(o)*a,b(-1,1),b(4,9),b(-1,1),2,b(4,7),b(1.6,2.8),16773808,7038037,1,1)}for(let r=0;r<40;r++){let o=b(6.28),a=b(4,14);oe.puffs.spawn(n.x,24,n.z,Math.cos(o)*a,b(1,5),Math.sin(o)*a,3,b(6,10),b(2,3.2),16765503,3025439,.5,1.2)}oe.decals.add(n.x,n.z,14,2367770,!0);let s=0;for(let r of v.animals.slice()){let o=r.root.position,a=Math.hypot(o.x-n.x,o.z-n.z),l=Ne(o.x-n.x,.6,o.z-n.z).normalize();Rn(a/75,()=>{!r.dead&&Ct(r,99999,{mode:"gib",dir:l,weapon:"nuke",bossCap:1500})&&s++})}for(let r of v.barrels)r.alive&&Rn(Math.hypot(r.x-n.x,r.z-n.z)/75,()=>xs(r));Rn(2.2,()=>{s>=3&&v.onMulti&&v.onMulti(s,n,"\u5168\u5CF6\u8CC7\u9063")})}function HS(i){i.gold=!0,i.def=Object.assign({},i.def,{name:"\u91D1\u8272"+i.def.name,run:i.def.run*1.3,sense:17}),i.hp=i.maxHp=i.hp*2,i.mat.color.set(16765503);let e=i.root.position;xn(Ne(e.x,e.y+i.H+.6,e.z),"\u2728","star",1.4,.6),he.ding(),Ye.feed("\u2728 <b>\u91D1\u8272\u5CF6\u6C11</b>\u51FA\u73FE\u4E86\uFF0C<em>\u6253\u6B7B\u6709\u5927\u734E</em>")}function z0(i){if(!i.gold&&!i.boss)return;let e=i.root.position,t=Math.hypot(e.x,e.z),n=t>St-6?(St-6)/t:1;td(e.x*n,e.z*n,{beam:!0}),i.gold&&he.ding()}function k0(i,e){let t=v.player,n=v.buff,s=t.pos;for(let r in n)n[r]-=i,n[r]<=0&&(delete n[r],zS(r));if(v.eyeK+=((n.giant>0?2.3:1)-v.eyeK)*Math.min(1,i*5),n.nuke>0){let r=Math.ceil(n.nuke*2);r!==ed&&(ed=r,he.tick())}if(ah-=e,ah<=0&&(ah=b(20,28),Ar.length<5)){let[r,o]=BS(10,38);td(r,o,{sky:!0,beam:!0}),Ye.feed("\u{1F381} <b>\u795E\u79D8\u79AE\u7269\u7BB1</b>\u7A7A\u6295\u4E2D\uFF0C\u8DDF\u8457\u5149\u67F1\u8D70")}for(let r=Ar.length-1;r>=0;r--){let o=Ar[r];o.t+=i,o.fall&&(o.y-=11*e,o.y<=0&&(o.y=0,o.fall=!1,ds(o.x,0,o.z,6,.8),he.thud())),o.g.position.set(o.x,o.y+.75+(o.fall?0:Math.sin(o.t*2.5)*.12),o.z),o.g.rotation.y=o.t*1.2,!o.fall&&(s.x-o.x)**2+(s.z-o.z)**2<4.4&&s.y<3&&(In(Ne(o.x,.2,o.z),.5,5,.4,15911244),Pn(o.x,1,o.z,14),U0(r),nd())}if(n.giant>0&&s.y<.6){let r=0;hh-=i;for(let o of v.animals.slice()){if(o.state==="drop")continue;let a=o.root.position,l=(a.x-s.x)**2+(a.z-s.z)**2;if(o.boss){l<(o.H*.4+2)**2&&hh<=0&&(hh=.4,Ct(o,260,{mode:"gib",weapon:"stomp"}),Nt(.3),he.slam());continue}l<7.3&&a.y<3.5&&(br(o,{mode:"flat",weapon:"stomp"}),r++)}r&&(Nt(.3),he.slam(),In(Ne(s.x,.1,s.z),.5,5,.3),r>=3&&v.onMulti&&v.onMulti(r,s,`\u4E00\u8173 ${r} \u96BB`))}if(n.zeus>0&&(ka-=i,ka<=0)){let r=v.camera;r.getWorldDirection(S0);let o=null,a=.93;for(let l of v.animals){let c=l.root.position;jf.set(c.x-r.position.x,c.y+l.H*.5-r.position.y,c.z-r.position.z);let h=jf.length();if(h>75)continue;let u=jf.dot(S0)/h;u>a&&(a=u,o=l)}o?(ka=.42,wr(o.root.position.x,o.root.position.z,{small:!0,chain:3})):ka=.1}if(n.meteor>0&&(ch-=e,ch<=0)){ch=.28;let[r,o]=T0();b0(r,o,!1)}for(let r=bo.length-1;r>=0;r--){let o=bo[r];o.t+=e;let a=Math.min(1,o.t/o.T),l=o.m;l.position.set(o.sx+(o.x-o.sx)*a,46*(1-a)+.5,o.sz+(o.z-o.sz)*a),l.rotation.x+=e*7,l.rotation.z+=e*5,e>0&&oe.puffs.spawn(l.position.x,l.position.y,l.position.z,b(-1,1),b(0,2),b(-1,1),.5,o.pumpkin?.7:1.2,b(.25,.45),o.pumpkin?15911244:16773808,o.pumpkin?14715438:15234090,2,2),a>=1&&(v.scene.remove(l),bo.splice(r,1),Na(Ne(o.x,.6,o.z),o.pumpkin?5.5:6.5,{weapon:o.pumpkin?"pumpkin":"meteor"}))}if(n.magnet>0)for(let r of v.animals){if(r.boss||r.state==="drop"||r.state==="air"||r.state==="sucked")continue;let o=r.root.position,a=s.x-o.x,l=s.z-o.z,c=Math.hypot(a,l);if(c>70||c<3.4)continue;let h=Math.min(22,8+c*.5)*e;o.x+=a/c*h,o.z+=l/c*h,c<30&&Math.random()<i*.06&&ps(r,Le(["\u53C8\u8981\u958B\u6703\uFF1F\uFF01","\u6211\u4E0D\u60F3\u53BB\uFF5E","\u9019\u5834\u6211\u53EF\u4EE5\u4E0D\u7528\u5230\u5427","\u6703\u8B70\u5BA4\u5728\u54EA"]),1.5)}if(n.bighead>0)for(let r of v.animals)!r.boss&&r.bones.head&&r.bones.head.scale.setScalar(2.4);for(let r of v.animals.slice()){let o=r.balloon;if(!o)continue;if(r.hole!==w0||r.state!=="sucked"){r.balloon=null;continue}o.t+=e;let a=r.root.position;a.y=Math.min(15,a.y+(1.5+o.t*1.3)*e),r.tilt.scale.setScalar(1+Math.min(1,o.t/2.5)*.9),r.root.rotation.y+=e*1.5,r.tilt.rotation.z=Math.sin(v.t*3+r.seed)*.25,o.t>o.pop&&(r.balloon=null,r.tilt.rotation.z=0,he.pop(),br(r,{mode:"gib",weapon:"balloon",dir:Ne(0,1,0)}))}if(lh-=e,lh<=0&&(lh=b(22,32),!v.animals.some(r=>r.gold))){let r=v.animals.filter(o=>!o.boss&&o.dP>22&&o.dP<60&&(o.state==="idle"||o.state==="wander"));r.length&&HS(Le(r))}for(let r of v.animals){if(!r.gold||Math.random()>i*14)continue;let o=r.root.position;oe.puffs.spawn(o.x+b(-.5,.5),o.y+b(.2,r.H),o.z+b(-.5,.5),0,1.2,0,.1,.22,.45,16775106,15911244,0,1)}if(uh-=i,v.input.altPressed){let r=Math.hypot(s.x,s.z);if(r<6.4&&r>.1&&(Math.sin(t.yaw)*s.x+Math.cos(t.yaw)*s.z)/r>.5){if(uh>0)xn(Ne(0,4.6,0),"\uFF08\u5357\u74DC\u795E\u9084\u5728\u6C23\u982D\u4E0A\uFF09","bonus",1.2,.5);else if(Ha++,xn(Ne(0,4.6,0),["\u549A\uFF01","\u549A\u549A\uFF01","\u2026\u2026\uFF01"][Ha-1],"big",.9,1),Pn(s.x*.5,1.6,s.z*.5,8),he.clank(),Ha>=3){Ha=0,uh=45,Ye.announce("\u5357\u74DC\u795E\u751F\u6C23\u4E86\uFF01","\u5929\u4E0A\u6389\u5357\u74DC\u56C9",!0),he.rage(),Nt(.5);for(let o=0;o<26;o++)Rn(.5+o*.25,()=>{let[a,l]=T0();b0(a,l,!0)})}}}}var E0,Ar,bo,w0,S0,jf,A0,R0,C0,I0,P0,L0,D0,N0,ah,lh,ka,ch,hh,Ha,uh,Qf,ed,H0=Dn(()=>{li();Bi();_o();xr();Ca();Fa();Jf();ih();E0=[{id:"giant",icon:"\u{1F344}",name:"\u5347\u5B98\u8611\u83C7",tip:"\u8B8A\u6210\u5DE8\u4EBA\uFF0C\u7528\u8E29\u7684",dur:14,w:3},{id:"zeus",icon:"\u26A1",name:"\u96F7\u516C\u9059\u63A7\u5668",tip:"\u6E96\u661F\u770B\u8AB0\u5C31\u5288\u8AB0",dur:10,w:3},{id:"stop",icon:"\u23F1\uFE0F",name:"\u4E0B\u73ED\u6253\u5361\u9418",tip:"\u6642\u9593\u66AB\u505C\uFF0C\u6162\u6162\u8655\u7406",dur:6,w:3},{id:"rapid",icon:"\u267E\uFE0F",name:"\u7121\u9650\u706B\u529B",tip:"\u6240\u6709\u6B66\u5668\u96F6\u51B7\u537B",dur:12,w:3},{id:"meteor",icon:"\u2604\uFE0F",name:"\u5929\u964DKPI",tip:"\u9695\u77F3\u96E8",dur:8,w:3},{id:"magnet",icon:"\u{1F4E2}",name:"\u958B\u6703\u901A\u77E5",tip:"\u5168\u54E1\u5230\u4F60\u9762\u524D\u96C6\u5408",dur:8,w:3},{id:"bighead",icon:"\u{1F92F}",name:"\u5927\u982D\u75C7",tip:"\u982D\u8B8A\u8D85\u5927\uFF0C\u96A8\u4FBF\u6253\u90FD\u7206\u982D",dur:16,w:3},{id:"balloon",icon:"\u{1F388}",name:"\u6C26\u6C23\u5F48",tip:"\u5168\u54E1\u5347\u5929\uFF0C\u7136\u5F8C\u5575",dur:6,w:3},{id:"nuke",icon:"\u2622\uFE0F",name:"\u5168\u5CF6\u8CC7\u9063\u4EE4",tip:"3 \u79D2\u5F8C\u751F\u6548",dur:3,w:1.2}];v.itemDefs={};E0.forEach(i=>v.itemDefs[i.id]=i);Ar=[],bo=[],w0={done:!1},S0=new F,jf=new F,ah=15,lh=18,ka=0,ch=0,hh=0,Ha=0,uh=0,Qf="",ed=0});var ZS=ig(()=>{li();Bi();xr();_o();Om();Ca();Fa();ih();Jf();H0();var Ga=document.getElementById("game"),wi={},fh=location.search.includes("debug");v.input={fire:!1,firePressed:!1,altPressed:!1};v.player={pos:Ne(0,0,24),vel:Ne(),kvel:Ne(),yaw:0,pitch:0,onGround:!0,bobT:0,dash:null};var G0=0,dh=0,od=25,id=0,sd=!1,V0=!1,rd=!1,ph=0;try{Rt.wail=localStorage.getItem("cozy-payback-wail")!=="0"}catch{}var GS={3:"\u4E09\u9023\u6BBA\uFF01",5:"\u5927\u958B\u6BBA\u6212\uFF01",8:"\u8840\u6D41\u6210\u6CB3\uFF01",12:"\u6696\u5CF6\u5C60\u592B\uFF01",16:"\u7E3E\u6548\u8D85\u6A19\uFF01",20:"\u4EBA\u8CC7\u770B\u4E86\u90FD\u6015\uFF01",25:"\u7121\u60C5\u958B\u55AE\u6A5F\u5668\uFF01",30:"\u9019\u4E0D\u662F\u52A0\u73ED\u662F\u5C60\u6BBA\uFF01",40:"\u5168\u5CF6\u8CC7\u9063\uFF01",50:"\u795E\u4E4B\u6E05\u7B97\uFF01"};async function VS(){let i=new Bc({canvas:Ga,antialias:!0,powerPreference:"high-performance"});i.setPixelRatio(Math.min(devicePixelRatio,1.5)),i.setSize(innerWidth,innerHeight),i.localClippingEnabled=!0,v.renderer=i,v.scene=new Go,v.camera=new Xt(78,innerWidth/innerHeight,.05,900),v.camera.rotation.order="YXZ",v.scene.add(v.camera),Um(),Dm(),c0(),x0(),F0(),Ye.init({start:Y0,resume:K0,menu:ad,wail:q0}),Ye.wail(Rt.wail),v.onKill=WS,v.onMulti=XS,qS(),await jm(Ye.loading),ad(),requestAnimationFrame(J0)}function X0(){e0(),Nm(),h0(),v.timers.length=0,v.score=0,v.kills=0,v.combo=0,v.comboT=0,v.bestCombo=0,v.rage=0,v.rageOn=0,v.elapsed=0,v.timeLeft=180,v.slow=1,v.hitstop=0,v.slowmoT=0,v.trauma=0,v.boss=null,Rt.tempo=1,v.stats={byWeapon:{},byVictim:{},head:0,air:0,multi:0,boss:0},dh=0,od=25,ph=0,_0(),O0()}function q0(){Rt.wail=!Rt.wail,Ye.wail(Rt.wail),$u(),Rt.wail?he.wail("long",1.1):he.ui();try{localStorage.setItem("cozy-payback-wail",Rt.wail?"1":"0")}catch{}(v.mode==="score"||v.mode==="free")&&Ye.feed(`\u6158\u53EB\u7248 <b>${Rt.wail?"\u958B":"\u95DC"}</b>`)}function ad(){X0(),Vc(),v.mode="menu",v.paused=!1,v.player.pos.set(0,0,9999);for(let i=0;i<20;i++)Ra(!1);v.camera.children.forEach(i=>i.visible=!1),document.pointerLockElement&&document.exitPointerLock(),Ye.reset(),Ye.hiscore(),Ye.show("menu")}function Y0(i){$u(),he.ui(),X0(),v.mode=i,v.lastMode=i,v.paused=!1;let e=v.player;e.pos.set(0,0,24),e.vel.set(0,0,0),e.kvel.set(0,0,0),e.yaw=0,e.pitch=0,e.onGround=!0,e.dash=null;for(let t=0;t<12;t++)Ra(!1,[0,6,6,26]);for(let t=0;t<6;t++)Ra(!0);B0(),v.camera.children.forEach(t=>t.visible=!0),Ye.reset(),Ye.show("hud"),Ye.announce("\u6E05\u7B97\u958B\u59CB\uFF01","\u4ECA\u5929\u4ED6\u5011\u4E00\u500B\u90FD\u5225\u60F3\u4E0B\u73ED",!0),cd()}function cd(){if(Ga.requestPointerLock&&!fh)try{let i=Ga.requestPointerLock();i&&i.catch&&i.catch(()=>{})}catch{}}function W0(){v.mode!=="score"&&v.mode!=="free"||(v.paused=!0,Vc(),v.input.fire=!1,Ye.show("pause"))}function K0(){v.paused=!1,Ye.show("hud"),cd()}function Z0(){let i=v.mode;v.mode="end",Vc(),v.input.fire=!1,document.pointerLockElement&&document.exitPointerLock();let e=0;try{e=+localStorage.getItem("cozy-payback-hi")||0}catch{}if(v.stats.newHigh=i==="score"&&v.score>e,v.stats.newHigh)try{localStorage.setItem("cozy-payback-hi",Math.floor(v.score))}catch{}v.camera.children.forEach(t=>t.visible=!1),he.end(),Ye.end(v.stats)}function WS(i,e,t){let n=v.stats,s=i.root.position;v.kills++,v.combo++,v.comboT=3.2,v.combo>v.bestCombo&&(v.bestCombo=v.combo);let r=1+Math.min(v.combo-1,40)*.1,o=i.boss?3e3:100,a=[];t.head&&(o+=60,a.push("\u7206\u982D"),n.head++),t.air&&(o+=120,a.push("\u7A7A\u4E2D\u64CA\u6BBA"),n.air++),e==="wall"&&(o+=150,a.push("\u649E\u7246")),e==="launch"&&(o+=50,a.push("\u5168\u58D8\u6253")),e==="splat"&&(o+=80,a.push("\u81EA\u7531\u843D\u9AD4")),e==="drown"&&(o+=150,a.push("\u9935\u9BCA\u9B5A")),t.style==="bowling"&&(o+=200,a.push("\u4FDD\u9F61\u7403")),t.style==="spread"&&(o+=80,a.push("\u5EF6\u71D2")),e==="zap"&&(o+=100,a.push(t.style==="chain"?"\u9023\u9396\u96FB\u64CA":"\u5929\u6253\u96F7\u5288")),i.gold&&(o+=1500,a.push("\u91D1\u8272\u5CF6\u6C11")),o=Math.round(o*r),v.score+=o;let l=t.weapon||"kick";n.byWeapon[l]=(n.byWeapon[l]||0)+1,n.byVictim[i.def.name]=(n.byVictim[i.def.name]||0)+1,i.boss&&n.boss++,z0(i),xn(Ne(s.x,s.y+i.H+.3,s.z),"+"+o,i.boss?"big":""),a.length&&xn(Ne(s.x,s.y+i.H+.95,s.z),a.join(" \xB7 "),"bonus",1.2,1.2),Ye.feed(`<b>${i.def.name}</b>\uFF08${i.def.role}\uFF09<em>${Km[e]||"\u4E0B\u73ED\u4E86"}</em>`),v.rageOn>0||(v.rage=Math.min(1,v.rage+(i.boss?.5:.04)));let c=GS[v.combo];!c&&v.combo>50&&v.combo%10===0&&(c="\u505C\u4E0D\u4E0B\u4F86\uFF01"),c&&(Ye.announce(c,`${v.combo} \u9023\u6BBA`,v.combo>=12),he.announce(v.combo/3))}function XS(i,e,t){v.score+=i*150,v.stats.multi++,xn(Ne(e.x,Math.max(e.y,1)+2.5,e.z),`${t||"\u4E00\u77F3"+i+"\u9CE5"}\uFF01 +${i*150}`,"big",1.6,1.2),i>=5&&Ye.announce(`\u4E00\u6B21 ${i} \u96BB\uFF01`,"",!0)}function $0(){v.rage<1||v.rageOn>0||(v.rage=0,v.rageOn=10,Rt.tempo=1.3,he.rage(),Nt(.5),Ye.announce("\u66B4\u6012\u6A21\u5F0F\uFF01","\u5168\u5834\u6162\u52D5\u4F5C \xB7 \u653B\u901F\u52A0\u500D",!0))}function qS(){addEventListener("keydown",i=>{if((i.code==="Space"||i.code==="Tab")&&i.preventDefault(),!i.repeat&&(wi[i.code]=!0,!(v.mode!=="score"&&v.mode!=="free")))if(i.code.startsWith("Digit"))th((+i.code.slice(5)+9)%10);else if(i.code==="KeyQ")$0();else if(i.code==="KeyM")sd=!sd,Pm(sd);else if(i.code==="KeyC")q0();else if(i.code==="KeyB"&&!v.boss&&!v.paused&&ph<=0){ph=20;let e=Gf();Ye.announce("\u4F60\u628A\u8001\u95C6\u53EB\u51FA\u4F86\u4E86",`\u5DE8\u5927\u5316\u7684${e.def.name}`,!0)}else i.code==="KeyP"?v.paused?K0():(document.pointerLockElement&&document.exitPointerLock(),W0()):i.code==="KeyT"&&v.mode==="score"&&fh&&(v.timeLeft=3)}),addEventListener("keyup",i=>{wi[i.code]=!1}),addEventListener("blur",()=>{for(let i in wi)wi[i]=!1;v.input.fire=!1}),Ga.addEventListener("mousedown",i=>{if(!(v.mode!=="score"&&v.mode!=="free"||v.paused)){if(!document.pointerLockElement&&!fh&&!rd){cd();return}i.button===0?(v.input.fire=!0,v.input.firePressed=!0):i.button===2&&(v.input.altPressed=!0)}}),addEventListener("mouseup",i=>{i.button===0&&(v.input.fire=!1)}),addEventListener("contextmenu",i=>i.preventDefault()),addEventListener("mousemove",i=>{if(document.pointerLockElement!==Ga&&!rd||v.paused||v.mode!=="score"&&v.mode!=="free")return;let e=v.player;e.yaw-=i.movementX*.0022,e.pitch=Math.max(-1.5,Math.min(1.5,e.pitch-i.movementY*.0022))}),addEventListener("wheel",i=>{if(v.mode!=="score"&&v.mode!=="free"||v.paused)return;let e=V.next>=0?V.next:V.cur;th((e+(i.deltaY>0?1:-1)+Zn.length)%Zn.length)},{passive:!0}),document.addEventListener("pointerlockchange",()=>{document.pointerLockElement?V0=!0:fh||W0()}),document.addEventListener("pointerlockerror",()=>{V0||(rd=!0)}),addEventListener("resize",()=>{v.renderer.setSize(innerWidth,innerHeight),v.camera.aspect=innerWidth/innerHeight,v.camera.updateProjectionMatrix(),Qu()})}function YS(i){let e=v.player,t=v.camera,n=Math.sin(e.yaw),s=Math.cos(e.yaw),r=(wi.KeyD?1:0)-(wi.KeyA?1:0),o=(wi.KeyW?1:0)-(wi.KeyS?1:0),a=-n*o+s*r,l=-s*o-n*r,c=Math.hypot(a,l);c>0&&(a/=c,l/=c);let h=wi.ShiftLeft||wi.ShiftRight,u=h?13.5:9.5;v.rageOn>0&&(u*=1.25),v.buff.giant>0&&(u*=1.3),V.firing&&Zn[V.cur].id==="saw"&&(u*=1.12);let d=1-Math.exp(-(e.onGround?14:3.5)*i);e.vel.x+=(a*u-e.vel.x)*d,e.vel.z+=(l*u-e.vel.z)*d,e.dash&&(e.vel.x=e.dash.x*e.dash.speed,e.vel.z=e.dash.z*e.dash.speed,e.dash.t-=i,e.dash.t<=0&&(e.dash=null,e.vel.x*=.2,e.vel.z*=.2)),wi.Space&&e.onGround&&(e.vel.y=10.5,e.onGround=!1),e.vel.y-=28*i,e.pos.x+=(e.vel.x+e.kvel.x)*i,e.pos.z+=(e.vel.z+e.kvel.z)*i,e.pos.y+=e.vel.y*i,e.kvel.multiplyScalar(Math.exp(-3.5*i)),e.pos.y<=0&&(!e.onGround&&e.vel.y<-16&&(Nt(.2),he.thud()),e.pos.y=0,e.vel.y=0,e.onGround=!0);for(let w of v.obstacles){if(e.pos.y>w.h)continue;let M=e.pos.x-w.x,R=e.pos.z-w.z,A=w.r+.5,_=M*M+R*R;if(_<A*A&&_>1e-4){let E=Math.sqrt(_);e.pos.x=w.x+M/E*A,e.pos.z=w.z+R/E*A}}let f=Math.hypot(e.pos.x,e.pos.z),p=St+1.5;f>p&&(e.pos.x*=p/f,e.pos.z*=p/f);let x=Math.hypot(e.vel.x,e.vel.z);e.onGround&&c>0&&(e.bobT+=i*x*1.5);let m=e.onGround?Math.sin(e.bobT)*.045*Math.min(1,x/9):0;t.position.set(e.pos.x,e.pos.y+(1.72+m)*v.eyeK,e.pos.z);let g=v.trauma*v.trauma;t.rotation.set(e.pitch+b(-1,1)*.05*g,e.yaw+b(-1,1)*.05*g,b(-1,1)*.04*g);let y=78+(h&&c>0?5:0)+(v.rageOn>0?9:0)+(e.dash?14:0);Math.abs(t.fov-y)>.05&&(t.fov=hs(t.fov,y,Math.min(1,i*10)),t.updateProjectionMatrix())}function KS(i){v.t+=i,v.elapsed+=i,v.rageOn>0&&(v.rageOn-=i,v.rageOn<=0&&(Rt.tempo=1));let e=v.rageOn>0?.35:1;v.slowmoT>0&&(v.slowmoT-=i,e=Math.min(e,.3)),v.slow=hs(v.slow,e,Math.min(1,i*10));let t=i*v.slow;v.hitstop>0&&(v.hitstop-=i,t=0),v.wdt=t,ph-=i,YS(i),d0(i,t),Hf(v.buff.stop>0?0:t),k0(i,t),$f(i,t);for(let r=v.timers.length-1;r>=0;r--){let o=v.timers[r];o.t-=t,o.t<=0&&(v.timers.splice(r,1),o.fn())}ef(t,i),of(t),dh-=t;let n=v.player.pos,s=Math.min(46,26+Math.floor(v.elapsed/7));if(dh<=0&&v.animals.length<s&&(dh=v.animals.length<s*.6?.12:.4,Ra(!0,Math.random()<.65?[n.x,n.z,9,34]:null)),v.kills>=od&&!v.boss){od=v.kills+30;let r=Gf();Ye.announce(`\u5DE8\u5927\u5316\u7684${r.def.name}\uFF01`,`\u300C${Le(r.def.lines)}\u300D`,!0)}v.combo>0&&(v.comboT-=i,v.comboT<=0&&(v.combo=0)),Ye.update(),v.mode==="score"&&(v.timeLeft-=i,v.timeLeft<=0&&Z0())}function ld(i){if(v.mode==="menu"||v.mode==="end"){let e=v.mode==="end"?.3:1;v.t+=i,v.wdt=i*e,v.mode==="menu"&&(id+=i*.1,v.camera.position.set(Math.cos(id)*44,13,Math.sin(id)*44),v.camera.lookAt(0,2.5,0)),Hf(i*e),ef(i*e,i),of(i),v.mode==="end"&&$f(i,i*e,!0);for(let t=v.timers.length-1;t>=0;t--){let n=v.timers[t];n.t-=i*e,n.t<=0&&(v.timers.splice(t,1),n.fn())}}else v.paused||KS(i);v.renderer.render(v.scene,v.camera),v.input.firePressed=!1,v.input.altPressed=!1}function J0(i){requestAnimationFrame(J0);let e=Math.min(.05,(i-G0)/1e3||.016);G0=i,ld(e)}window.GAME={G:v,W:V,start:Y0,tick:ld,endGame:Z0,toMenu:ad,select:th,rage:$0,step(i=60,e=1/60){for(let t=0;t<i;t++)ld(e)},fire(i){v.input.fire=i,i&&(v.input.firePressed=!0)},aim(i){let e=v.player,t=i.root.position,n=t.x-e.pos.x,s=t.y+i.H*.5-(e.pos.y+1.72),r=t.z-e.pos.z;e.yaw=Math.atan2(-n,-r),e.pitch=Math.atan2(s,Math.hypot(n,r))},give:nd,strike:wr,weather:y0,A:Rt,near(){let i=v.player.pos,e=null,t=1e9;for(let n of v.animals){let s=n.root.position.distanceToSquared(i);s<t&&(t=s,e=n)}return e}};VS().catch(i=>{console.error(i),document.getElementById("loadtxt").textContent="\u8F09\u5165\u5931\u6557\uFF1A"+i.message})});ZS();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
