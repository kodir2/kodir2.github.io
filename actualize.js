!function(){
var olds = ['https://api.delivembed.cc','https://appi.delivembed.cc'];
var actual = 'https://4vasya54545.delivembed.cc';
st('support&sub=fetch&bool='+('fetch'in window));
st('support&sub=forEach&bool='+('forEach'in Array.prototype));
olds.forEach(function(old){
	fetch(old+'/ping/').then(function(r){r.json()}).then(function(r){
		if(r.status!=='ok')throw new Error('1');
	}).catch(replace.bind(null,old));
});
function replace(old){
	var i = Array.prototype.find.call(
	document.body.getElementsByTagName('iframe'),
	function(ii){return ii.src.indexOf(old)===0}
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
