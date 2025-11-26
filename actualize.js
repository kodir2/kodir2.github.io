!function(){
if(window['__actualize.js'])return;window['__actualize.js']=1;
var actual = "https://api.initem.ws"
	,re=/^(?:https?:)?\/\/(?:mm|app?i\w*)\.(delivembed\.cc|buildplayer\.com|embedstorage\.net|mir-dikogo-zapada\.com|multikland\.net|placehere\.link|synchroncode\.com|ameytools\.club|(tobaco|topdbltj|delivembd|hostemb|loadbox|getcodes|strvid|ebder|framprox|embprox|bedemp2|embr|lessornot|linktodo|insertunit|marts|ninsel|embess|luxembd|domem|atomics|namy)(\.ws))/
	,delay=200,max=1000*60*60*24
	,dry=[]
	,ios=~navigator.userAgent.indexOf('iPhone')
	,ral
	,IM = ' !important;',css=document.createElement('style');
css.innerHTML= '.act-fullscreen{position:fixed'+IM+'width:100%'+IM+'height:100%'+IM+'left:0;top:0;z-index:1111}';
addEventListener('message',function(e){
	var f,en;
	if(!e.data||!(f=findFrame(function (f){return f.contentWindow==e.source})))return;
	if(e.data.event=='externalFullScreen?'){
		if(!css.parentNode)document.head.appendChild(css);
		e.source.postMessage({event:'externalFullScreen!'});
	}else if(e.data.event=='toggleFullScreen'){
		en=f.classList.toggle('act-fullscreen');
		e.source.postMessage({event:'fullScreen',enter:en});
	}
});
if(window.fetch&&!ios) {
	function pass(){ral = 1}
	head('https://test.showvid.ws/ping').catch(pass);
	if(/club$/.test(location.hostname))head('https://cdn.jsdelivr.net/npm/venom-player').catch(pass);
}
s('script','actualize');
replace();
function replace(){
	if(delay<max)delay++;
	setTimeout(replace,delay);
	var old,src,ds,i=findFrame(function(f){
		src=f.src;
		if(!src&&(ds=f.dataset)){
			if(ds.src){
				old=ds.src.match(re);
				if(old)ds.src=ds.src.replace(old[0],'https://api.'+old[1])
			}if(/\blazyload(ed|ing)\b/.test(f.className))src=ds.src;
		}
		return old=src&&src.indexOf(actual)&&dry.indexOf(src)===-1&&src.match(re)
	});
	if (!i ||i.offsetWidth===0) return;
	dry.push(src);
	var url = src.replace(old[0], actual);
	get(url, function(r){
		if(ral===1)return;
		var up=update(i,r);
		dry=[];
		if(window.URL){
			url=new URL(url);
			url.searchParams.delete('episode');
		}
		addEventListener('message',function(e){
			if(e.origin==location.origin&&e.data=='reActualizeMe'&&up.contentWindow==e.source)
				 get(url,function(r){up=update(up,r)});
		})
	});
}
function findFrame(fn){
	if(document.body)return Array.prototype.find.call(document.body.getElementsByTagName('iframe'),fn);
}
function update(old,w){
	var up = document.createElement('iframe'),
		allow = 'autoplay *; fullscreen';
	if (ios || /mac os/i.test(navigator.userAgent)) allow += ' *';
	copyAttr(old,up);
	up.setAttribute('allow', allow);
	up.allow = allow;
	old.parentElement.replaceChild(up,old);
	up.contentDocument.write(w);
	up.contentDocument.close();

	var s=up.setAttribute;
	up.setAttribute = function(n,v){
		if(n=='src'&&!v) console.warn('empty src')
		else s.call(up,n,v)
	};
	return up;
}
function copyAttr(from,to){
	var attrs=from.attributes;
	for(var name,i=0;i<attrs.length;i++){
		name = attrs[i].name;
		if(name!='src'&&name!='data-src'&&/^[\w\-]+$/.test(name))
			to.setAttribute(name,attrs[i].value);
	}
}
function s(hit, sub, e) {
	new Image().src = "https://s.myangular.life/player?cat=actual&hit=" + hit +
		"&sub=" + sub + (e || '') +
		"&host=" + location.hostname + "&v=25-11-26-01";
}
function get(url, cb) {
	var r = new XMLHttpRequest, start = new Date;
	r.withCredentials = true;
	// r.timeout = 1e4;
	r.open('GET', url);
	r.onreadystatechange = function() {
		if (r.readyState === 4 && r.status === 200) {
			s('load','ok','&time='+(new Date - start))
			cb(r.response);
		}
	};
	r.onerror=function(){s('load','err','&time='+(new Date - start))};
	r.send();
}
function head(u){return fetch(u,{method:'head'})}
}()
