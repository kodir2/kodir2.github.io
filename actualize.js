!function(){
var actual = 'https://api'+Date.now()+'.ellinagraypel.com'
,re=/^https?:\/\/app?ii?\w*\.(delivembed\.cc|buildplayer\.com|embedstorage\.net)/
,delay=200
,dry=[]
,s=document.createElement('style');
s.innerHTML='.collaps-fake-fullscreen{position:fixed !important;width:100% !important;height:100% !important;left:0;top:0;z-index:1111}';
document.head.appendChild(s);
addEventListener('message',function(e){
	if(!re.test(e.origin)||e.data.event!=='fakeFullScreen')return;
	var ifr = findFrame(function(i){return i.src===e.data.src});
	if(ifr)ifr.classList.toggle('collaps-fake-fullscreen');
});
st('player?hit=support&sub=fetch&bool='+('fetch'in window));
st('player?hit=support&sub=find&bool='+('find'in Array.prototype));
st('player?hit=script&sub=actualize&description='+location.hostname);
replace();
function findFrame(fn){
	if(document.body)return Array.prototype.find.call(document.body.getElementsByTagName('iframe'),fn);
}
function replace(){
	setTimeout(replace,delay++);
	var old,i = findFrame(function(ii){return old=ii.src&&ii.src.indexOf(actual)&&dry.indexOf(ii.src)===-1&&ii.src.match(re)});
	if(!i)return;
	dry.push(i.src);
	get(lastEp(i.src.replace(old[0], actual)), function(r){
		st("events?eventStringV="+actual+"&project="+location.hostname+"&eventCategory=embed&eventAction=request&hitType=init");
		var up=document.createElement('iframe');
		copyAttr(i,up);
		up.setAttribute('allow', 'autoplay *; fullsreen');
		up.allow = 'autoplay *; fullsreen';
		i.parentElement.replaceChild(up,i);
		up.contentDocument.write(r);
		up.contentDocument.close();
		dry=[];
	});
}
function st(s){new Image().src = "https://analytics.getaim.info/"+s;}

function copyAttr(from,to){
	var attrs=from.attributes;
	for(var i=0;i<attrs.length;i++){
		if(attrs[i].name!=='src')to.setAttribute(attrs[i].name,attrs[i].value);
	}
}
function get(url, cb) {
	var xhr = new XMLHttpRequest;
	xhr.open('GET', url);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200) cb(xhr.response);
	};
	xhr.send();
}
function lastEp(u){
	if(!window.URL||!window.localStorage)return u;
	var url=new URL(u),
	    p=url.searchParams;
	if(p.has('episode'))return u;
	var f=url.pathname.split('/').slice(-1)[0];
	if(+f!=f)return u;
	var se=(localStorage.getItem('vp'+f)||'').split(':'),
	    s=se[0],e=se[1];
	if(+s!=s||+e!=e|| (p.has('season')&&p.get('season')&&p.get('season')!=s) )return u;
	p.set('season',s);
	p.set('episode',e);
	return url.href;
}
}()
