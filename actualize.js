!function(){
var old = 'https://api.delivembed.cc';
var actual = 'https://appi.delivembed.cc';
st('support&sub=fetch&bool='+('fetch'in window));
fetch(old+'/ping/').then(r=>r.json()).then(r=>{
	if(r.status!=='ok')throw new Error('1');
}).catch(replace);
st('support&sub=arrow&bool=true');

function replace(){
	var i = Array.prototype.find.call(
	document.body.getElementsByTagName('iframe'),
	ii=>ii.src.indexOf(old)===0
	);
	if(!i)return setTimeout(replace,100);
	var src=i.src.replace(old, actual);
	i.setAttribute('src',src);
	var pl=document.createElement('i');
	var p=i.parentElement;
	p.replaceChild(pl,i);
	p.replaceChild(i,pl);
}
function st(s){new Image().src = "https://analytics.getaim.info/player?hit="+s;}
}()
