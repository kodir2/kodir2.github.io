(function(h){function k(a,e,c){var b=new XMLHttpRequest;b.open("GET",a);b.onreadystatechange=function(){if(4===b.readyState){if(204===b.status)return g(e+" not found");if(200!==b.status)return g("api request failed");c(JSON.parse(b.response))}};b.send()}function l(a,e,c,b){if(a){var d=document.getElementById(a);if(!d)return setTimeout(l.bind(null,a,e,c,b),10);var f=a="";c&&(a=' width="'+c+'"');b&&(f=' height="'+b+'"');d.innerHTML='<iframe src="'+e+'"'+a+f+" allowfullscreen></iframe>";m()}}function n(a,
e){if(a.length){for(var c=document.getElementsByTagName("iframe"),b=0;b<c.length;b++){var d=c[b],f=d.src.match(/https?:\/\/(.+?)\/.+/);f&&-1!==a.indexOf(f[1])&&(d.src=e,d.onload=function(){p("true")},d.onerror=function(){p("false")},d.hasAttribute("allowfullscreen")&&(d.allowFullscreen=!0),g(f[1]+" replaced"),m())}setTimeout(n.bind(null,a,e),100)}}function m(){if(!q){var a=document.createElement("style");a.innerHTML=".collaps-fake-fullscreen{position:fixed;width:100% !important;height:100% !important;left:0;top:0;z-index:999}";
document.head.appendChild(a);addEventListener("message",function(a){if(a.origin===h&&"fakeFullScreen"===a.data.event)for(var c=document.getElementsByTagName("iframe"),b,d=0;d<c.length;d++)if(b=c[d],b.src===a.data.src){b.classList.toggle("collaps-fake-fullscreen");break}});q=!0}}function p(a){(new Image).src="https://analytics.getaim.info/player?hit=availability&label=replace&bool="+a}var g=console.log.bind(console,"[collaps]");k(h+"/autochange/settings/domain/","settings",function(a){if(!a.dom_id&&
!a.replaces.length)return g("set dom_id or replaces");var e=document.title||document.getElementsByTagName("title")[0].innerHTML;e=e.replace(/ /g," ");var c,b;for(b in a.templates){var d=a.templates[b];if(c=e.match(new RegExp(d.regexp,"i"))){var f=d.order;break}}if(!c)return g("templates isn't match");e=c[f[0]].toLowerCase();if(!e)return g("no title");k(h+"/autochange/info/link?separator="+a.separator+"&title="+e+(c[f[1]]?"&year="+c[f[1]]:"")+(c[f[2]]?"&season="+c[f[2]]:"")+(c[f[3]]?"&episode="+c[f[3]]:
"")+"&charset="+a.charset,e,function(b){l(a.dom_id,b.url,a.width,a.height);n(a.replaces||[],b.url)})});var q=!1})("https://appi23.delivembed.cc");
