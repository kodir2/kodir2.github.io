(function(l,p){function w(){var a=window.COLLAPS_CONF;if(a)if(a.length)for(var b=0;b<a.length;b++)x(a[b]);else x(a);else y(l+"/autochange/settings/domain/","settings",x)}function x(a){if(!a.dom_id&&!a.replaces.length)return m("set dom_id or replaces");(new Image).src="https://s.myangular.life/player?hit=script&sub=replace&host="+location.hostname;var b=a.kinopoisk_var;b=a.kinopoisk_id||b&&window[b];if(a.src)F(a);else if(b||a.movie){var c=z(l+"/embed"+(b?"/kp/"+b:"/movie/"+a.movie),a.frame_params);
	q(c,a,a.width,a.height)}else if(a.title)c=l+"/autochange/info/link?title="+a.title.toLowerCase()+A(a,"year","charset","separator","season","episode"),B(c,a.title,a);else{b=document.title||document.getElementsByTagName("title")[0].innerHTML;b=b.replace(/ /g," ");var d;for(d in a.templates){var e=a.templates[d];if(c=b.match(new RegExp(e.regexp,"i"))){var f=e.order;break}}c?(d=c[f[0]].toLowerCase())?(c=l+"/autochange/info/link?title="+d+A({year:c[f[1]],season:c[f[2]],episode:c[f[3]]},"year","season",
	"episode")+"&separator="+a.separator+"&charset="+a.charset,B(c,d,a)):m("no title"):m("templates isn't match")}}function F(a){var b=a.src;window.URL&&(b=new URL(b),b.hostname=(new URL(l)).hostname);q(b,a,a.width,a.height);removeEventListener("message",a.messageListener);a.messageListener=function(c){c.origin==location.origin&&"reActualizeMe"==c.data&&(window.URL&&b.searchParams["delete"]("episode"),q(b,a,a.width,a.height))};addEventListener("message",a.messageListener)}function y(a,b,c,d){var e=new XMLHttpRequest;
	e.open("GET",a);e.onreadystatechange=function(){if(4===e.readyState)if(204===e.status)m(b+" not found"),r(d)&&d();else{if(200!==e.status)return m("api request failed");c(JSON.parse(e.response))}};e.send()}function A(a){for(var b="",c,d=1;d<arguments.length;d++)c=arguments[d],a[c]&&(b+="&"+c+"="+a[c]);return b}function B(a,b,c){y(a,b,function(d){d=z(d.url,c.frame_params);q(d,c,c.width,c.height);C(c.replaces||[],d)},c.not_found_cb)}function z(a,b){if(!b)return a;var c=b.join("&"),d=~a.indexOf("?")?
	"&":"?";return c?a+d+c:a}function q(a,b,c,d){if(b.dom_id){var e=b.dom_id,f=document.getElementById(e);if(!f)return setTimeout(q.bind(null,a,b,c,d),50);b._lastInserts=b._lastInserts||{};b._lastInserts[e]=a;var n="",u="";c&&"0"!==c&&(n=' width="'+c+'"');d&&"0"!==d&&(u=' height="'+d+'"');var t=n+u+' allowfullscreen allow="autoplay *; fullscreen *" frameborder="0" webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>';l==p?f.innerHTML='<iframe src="'+a+'"'+t:D(a,function(h){if(b._lastInserts[e]==
	a){f.innerHTML="<iframe "+t;var g=f.getElementsByTagName("iframe")[0];g.contentDocument.write(h);g.contentDocument.close()}},function(h,g){var k=b.error_cb,v=b.not_found_cb;g?204!=g&&404!=g||!r(v)?r(k)&&k(h,g):v(h,g):(v='src="'+(""+a).replace(l,p)+'"',f.innerHTML="<iframe "+v+t,G(f.getElementsByTagName("iframe")[0],function(){r(k)?k(h,g):f.innerHTML='<div style="border: solid red 1px; padding: 1rem;">Плеер недоступен. Попробуйте перезагрузить страницу или отключить блокировщик рекламы.</div>'}))})}}
	function C(a,b){if(a.length){for(var c=document.getElementsByTagName("iframe"),d=0;d<c.length;d++){var e=c[d],f=e.src.match(/https?:\/\/(.+?)\/.+/);f&&H(f[1],a)&&(e.src=b,E(e),l!=p&&D(b,function(n,u){return function(t){for(var h=document.createElement("iframe"),g=n.attributes,k=0;k<g.length;k++)"src"!==g[k].name&&h.setAttribute(g[k].name,g[k].value);n.parentElement.replaceChild(h,n);E(h);h.contentDocument.write(t);h.contentDocument.close();m(u+" replaced")}}(e,f[1])))}setTimeout(C.bind(null,a,b),
		100)}}function H(a,b){for(var c,d=a.length,e=0;e<b.length;e++)if(c=b[e],c==a||"."==c[0]&&c===a.substring(d-c.length,d))return!0}function D(a,b,c){var d=new XMLHttpRequest;d.open("GET",a);d.withCredentials=!0;d.onreadystatechange=function(){4===d.readyState&&(200===d.status||410===d.status?b(d.response):r(c)&&c(d.response,d.status))};d.send()}function E(a){a.hasAttribute("allowfullscreen")&&(a.allowFullscreen=!0);var b="autoplay *; fullscreen";/(mac os|iphone)/i.test(navigator.userAgent)&&(b+=" *");
		a.setAttribute("allow",b);a.allow=b}function r(a){return a&&"function"==typeof a}function G(a,b){a.onload=function(){var c=setTimeout(b,200);addEventListener("message",function(d){"pong"==d.data&&clearTimeout(c)});a.contentWindow.postMessage("ping","*")}}var m=console.log.bind(console,"[collaps]");~navigator.userAgent.indexOf("iPhone")&&window.fetch&&"https:"===location.protocol?fetch(p+"/ping/",{method:"head"}).then(function(){l=p;w()})["catch"](w):w()})("https://api.kinogram.best","https://api.synchroncode.com");