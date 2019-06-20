!function(){
var actual = 'https://b'+Date.now()+'.buildplayer.com'
	,delay=200
	,dry=[];
replace();
function findFrame(fn){
	if(document.body)return Array.prototype.find.call(document.body.getElementsByTagName('iframe'),fn);
}
function replace(){
	setTimeout(replace,delay++);
	var old,re=/https:\/\/b\d*\.buildplayer\.com/
		,i = findFrame(function(ii){return old=ii.src&&ii.src.indexOf(actual)&&dry.indexOf(ii.src)===-1&&ii.src.match(re)});
	if(!i)return;
	dry.push(i.src);
	fetch(old[0]+'/ping/').then(function(r){return r.json()}).then(function(r){
		if(r.status!=='ok')throw new Error('1');
	}).catch(function(){
		var src=i.src.replace(old[0], actual);
		i.setAttribute('src',src);
		var pl=document.createElement('i');
		var p=i.parentElement;
		p.replaceChild(pl,i);
		p.replaceChild(i,pl);
	});
}
}()
