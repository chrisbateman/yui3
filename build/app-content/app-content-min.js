YUI.add("app-content",function(c){var b=c.PjaxContent;function a(){b.apply(this,arguments);}a.route=["loadContent","_contentRoute"];a.prototype={showContent:function(g,n,l){g=c.one(g);if(typeof n==="function"){n={callback:n};l=null;}n=c.merge({render:false},n);var i=n.view||"",j=typeof i==="string"?i:i.name,f=typeof i!=="string"?i.config:{},m=this.getViewInfo(j),d,k,h,e;delete n.view;if(g&&g.isFragment()&&g.get("childNodes").size()===1){g=g.get("firstChild");}if(g&&g.get("nodeType")===1){d=g;}else{h=(m&&m.type)||c.View;e=typeof h==="string"?c.Object.getValue(c,h.split(".")):h;k=e.prototype.containerTemplate;d=c.Node.create(k);d.append(g);}f=c.merge(f,{container:d});return this.showView(j,f,n,l);},_contentRoute:function(h,e,f){var g=e.content,i=c.config.doc,d;if(!(g&&g.node)){return f();}if(g.title&&i){d=this.onceAfter("activeViewChange",function(){i.title=g.title;});}this.showContent(g.node);if(d){d.detach();}f();}};c.mix(a,b);c.mix(a,b,false,null,1);c.App.Content=a;c.Base.mix(c.App,[a]);},"@VERSION@",{requires:["app-base","pjax-content"]});