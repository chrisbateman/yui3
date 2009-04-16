YUI.add("dataparser-base",function(B){var A={toString:function(){return"DataParser.Base";},parse:function(C,D){return D;}};B.namespace("DataParser").Base=A;},"@VERSION@",{requires:["base"]});YUI.add("dataparser-json",function(C){var B=C.Lang,A={toString:function(){return"DataParser.JSON";},buildPath:function(D){var G=null,F=[],E=0;if(D){D=D.replace(/\[(['"])(.*?)\1\]/g,function(I,H,J){F[E]=J;return".@"+(E++);}).replace(/\[(\d+)\]/g,function(I,H){F[E]=parseInt(H,10)|0;return".@"+(E++);}).replace(/^\./,"");if(!/[^\w\.\$@]/.test(D)){G=D.split(".");for(E=G.length-1;E>=0;--E){if(G[E].charAt(0)==="@"){G[E]=F[parseInt(G[E].substr(1),10)];}}}else{}}return G;},getLocationValue:function(G,F){var E=0,D=G.length;for(;E<D;E++){F=F[G[E]];}return F;},parse:function(F,G){var D=G,E={results:[],meta:{}};if(!B.isObject(G)){try{D=C.JSON.parse(G);}catch(H){E.error=H;return E;}}if(B.isObject(D)&&F){if(!B.isUndefined(F.resultsList)){E=A._parseResults(F,D,E);}if(!B.isUndefined(F.metaFields)){E=A._parseMeta(F.metaFields,D,E);}}else{E.error=true;}return E;},_parseResults:function(H,E,G){var F=[],I,D;if(H.resultsList){I=A.buildPath(H.resultsList);if(I){F=A.getLocationValue(I,E);if(F===undefined){G.results=[];D=new Error(this.toString()+" Results retrieval failure");}if(B.isArray(H.fields)&&B.isArray(F)){G=A._filterFieldValues(H.fields,F,G);}else{G.results=[];G.error=new Error(this.toString()+" Fields retrieval failure");}}else{D=new Error(this.toString()+" Results locator failure");}if(D){G.error=D;}}return G;},_filterFieldValues:function(K,Q,E){var G=[],M=K.length,H,F,O,P,S,D,J=[],N=[],L=[],R,I;if(B.isArray(K)){for(H=0;H<M;H++){O=K[H];P=O.key||O;S=A.buildPath(P);if(S){if(S.length===1){J[J.length]={key:P,path:S[0]};}else{N[N.length]={key:P,path:S};}}else{}D=(B.isFunction(O.parser))?O.parser:C.DataParser[O.parser+""];if(D){L[L.length]={key:P,parser:D};}}for(H=Q.length-1;H>=0;--H){I={};R=Q[H];if(R){for(F=J.length-1;F>=0;--F){I[J[F].key]=B.isUndefined(R[J[F].path])?R[F]:R[J[F].path];}for(F=N.length-1;F>=0;--F){I[N[F].key]=A.getLocationValue(N[F].path,R);}for(F=L.length-1;F>=0;--F){P=L[F].key;I[P]=L[F].parser(I[P]);if(B.isUndefined(I[P])){I[P]=null;}}}G[H]=I;}E.results=G;}return E;},_parseMeta:function(G,D,F){if(B.isObject(G)){var E,H;for(E in G){if(G.hasOwnProperty(E)){H=A.buildPath(G[E]);if(H&&D){F.meta[E]=A.getLocationValue(H,D);}}}}else{F.error=new Error(this.toString()+" Meta retrieval failure");}return F;}};C.DataParser.JSON=C.mix(A,C.DataParser.Base);},"@VERSION@",{requires:["dataparser-base"]});YUI.add("dataparser",function(A){},"@VERSION@",{use:["dataparser-base","dataparser-json"]});