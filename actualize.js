!function(){
var olds = ['https://api.delivembed.cc','https://appi.delivembed.cc','https://4vasya54545.delivembed.cc','https://apii2.delivembed.cc','https://appi23.delivembed.cc','https://appi234.delivembed.cc','https://appi2345.delivembed.cc'];
var actual = 'https://appi23456.delivembed.cc';
st('player?hit=support&sub=fetch&bool='+('fetch'in window));
st('player?hit=support&sub=find&bool='+('find'in Array.prototype));
olds.forEach(function(old){
	fetch(old+'/ping/').then(function(r){r.json()}).then(function(r){
		if(r.status!=='ok')throw new Error('1');
	}).catch(replace.bind(null,old));
});
var s=document.createElement('style');
s.innerHTML='.collaps-fake-fullscreen{position:fixed;width:100% !important;height:100% !important;left:0;top:0;z-index:999}';
document.head.appendChild(s);
addEventListener('message',function(e){
	if(e.origin!==actual||e.data.event!=='fakeFullScreen')return;
	var ifr = findFrame(function(i){return i.src===e.data.src});
	if(ifr)ifr.classList.toggle('collaps-fake-fullscreen');
});
function findFrame(fn){
	return Array.prototype.find.call(document.body.getElementsByTagName('iframe'),fn);
}
function replace(old){
	var i = findFrame(function(ii){return ii.src.indexOf(old)===0});
	if(!i)return setTimeout(replace,100);
	var src=i.src.replace(old, actual);
	i.setAttribute('src',src);
	st("events?eventStringV="+actual+"&project="+location.hostname+
		"&eventCategory=embed&eventAction=request&hitType=init");
	var pl=document.createElement('i');
	var p=i.parentElement;
	p.replaceChild(pl,i);
	p.replaceChild(i,pl);
}
function st(s){new Image().src = "https://analytics.getaim.info/"+s;}
}()
