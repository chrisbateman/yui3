YUI.add("get",function(A){(function(){var C=A.UA,B=A.Lang,D=A.guid("yui_"),F="text/javascript",G="text/css",E="stylesheet";A.Get=function(){var U={},T=0,Y=0,L=false,Q=function(c,Z,e){var a=e||A.config.win,f=a.document,g=f.createElement(c),b;for(b in Z){if(Z[b]&&Z.hasOwnProperty(b)){g.setAttribute(b,Z[b]);}}return g;},O=function(a,b,Z){var c={id:D+(Y++),type:G,rel:E,href:a};if(Z){A.mix(c,Z);}return Q("link",c,b);},W=function(a,b,Z){var c={id:D+(Y++),type:F,src:a};if(Z){A.mix(c,Z);}return Q("script",c,b);},K=function(j){var e=U[j],g,Z,f,c,b,a;if(e){g=e.nodes;Z=g.length;f=e.win.document;c=f.getElementsByTagName("head")[0];if(e.insertBefore){b=I(e.insertBefore,j);if(b){c=b.parentNode;}}for(a=0;a<Z;a=a+1){c.removeChild(g[a]);}}e.nodes=[];},H=function(a,b,Z){return{tId:a.tId,win:a.win,data:a.data,nodes:a.nodes,msg:b,statusText:Z,purge:function(){K(this.tId);}};},S=function(d,c,Z){var a=U[d],b;if(a&&a.onEnd){b=a.context||a;a.onEnd.call(b,H(a,c,Z));}},X=function(c,b){var Z=U[c],a;if(Z.timer){Z.timer.cancel();}if(Z.onFailure){a=Z.context||Z;Z.onFailure.call(a,H(Z,b));}S(c,b,"failure");},I=function(Z,c){var a=U[c],b=(B.isString(Z))?a.win.document.getElementById(Z):Z;if(!b){X(c,"target node not found: "+Z);}return b;},J=function(c){var Z=U[c],b,a;if(Z.timer){Z.timer.cancel();}Z.finished=true;if(Z.aborted){b="transaction "+c+" was aborted";X(c,b);return;}if(Z.onSuccess){a=Z.context||Z;Z.onSuccess.call(a,H(Z));}S(c,b,"OK");},V=function(b){var Z=U[b],a;if(Z.onTimeout){a=Z.context||Z;Z.onTimeout.call(a,H(Z));}S(b,"timeout","timeout");},N=function(b,f){var a=U[b],e,j,i,g,c,Z,k;if(a.timer){a.timer.cancel();}if(a.aborted){e="transaction "+b+" was aborted";X(b,e);return;}if(f){a.url.shift();if(a.varName){a.varName.shift();}}else{a.url=(B.isString(a.url))?[a.url]:a.url;if(a.varName){a.varName=(B.isString(a.varName))?[a.varName]:a.varName;}}j=a.win;i=j.document;g=i.getElementsByTagName("head")[0];if(a.url.length===0){J(b);return;}Z=a.url[0];if(!Z){a.url.shift();return N(b);}if(a.timeout){a.timer=B.later(a.timeout,a,V,b);}if(a.type==="script"){c=W(Z,j,a.attributes);}else{c=O(Z,j,a.attributes);}M(a.type,c,b,Z,j,a.url.length);a.nodes.push(c);if(a.insertBefore){k=I(a.insertBefore,b);if(k){k.parentNode.insertBefore(c,k);}}else{g.appendChild(c);}if((C.webkit||C.gecko)&&a.type==="css"){N(b,Z);}},R=function(){if(L){return;}L=true;var Z,a;for(Z in U){if(U.hasOwnProperty(Z)){a=U[Z];if(a.autopurge&&a.finished){K(a.tId);delete U[Z];}}}L=false;},P=function(a,Z,b){b=b||{};var e="q"+(T++),c,d=b.purgethreshold||A.Get.PURGE_THRESH;if(T%d===0){R();}U[e]=A.merge(b,{tId:e,type:a,url:Z,finished:false,nodes:[]});c=U[e];c.win=c.win||A.config.win;c.context=c.context||c;c.autopurge=("autopurge" in c)?c.autopurge:(a==="script")?true:false;if(b.charset){c.attributes=c.attributes||{};c.attributes.charset=b.charset;}B.later(0,c,N,e);return{tId:e};},M=function(b,h,g,a,e,d,Z){var c=Z||N;if(C.ie){h.onreadystatechange=function(){var f=this.readyState;if("loaded"===f||"complete"===f){h.onreadystatechange=null;c(g,a);}};}else{if(C.webkit){if(b==="script"){h.addEventListener("load",function(){c(g,a);});}}else{h.onload=function(){c(g,a);};h.onerror=function(f){X(g,f+": "+a);};}}};return{PURGE_THRESH:20,_finalize:function(Z){B.later(0,null,J,Z);},abort:function(a){var b=(B.isString(a))?a:a.tId,Z=U[b];if(Z){Z.aborted=true;}},script:function(Z,a){return P("script",Z,a);},css:function(Z,a){return P("css",Z,a);}};}();})();},"@VERSION@");