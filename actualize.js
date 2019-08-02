!function(){
var actual = 'https://api'+Date.now()+'.delivembed.cc'
,re=/^https?:\/\/app?ii?\d*.delivembed.cc/
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
replace();
function findFrame(fn){
	if(document.body)return Array.prototype.find.call(document.body.getElementsByTagName('iframe'),fn);
}
function replace(){
	setTimeout(replace,delay++);
	var old,i = findFrame(function(ii){return old=ii.src&&ii.src.indexOf(actual)&&dry.indexOf(ii.src)===-1&&ii.src.match(re)});
	if(!i)return;
	dry.push(i.src);
	var src=i.src.replace(old[0], actual);
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
