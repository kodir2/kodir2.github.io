!function(){
var old = 'https://api.delivembed.cc';
var actual = 'https://appi.delivembed.cc';
st('support&sub=fetch&bool='+('fetch'in window));
fetch(old+'/ping/').then(r=>r.json()).then(r=>{
	if(r.status!=='ok')throw new Error('1');
}).catch(replace);
st('support&sub=arrow&bool=true');

function replace(){
	var iframe = Array.prototype.find.call(
	document.body.getElementsByTagName('iframe'),
	i=>i.src.indexOf(old)===0
	);
	if(!iframe)return setTimeout(replace,100);
	var src=iframe.src.replace(old, actual);
	var reload = ()=>{
		iframe.removeEventListener('error',reload);
		iframe.setAttribute('src',src);
	};
	iframe.addEventListener('error',reload);
	iframe.setAttribute('src',src);
}
function st(s){new Image().src = "https://analytics.getaim.info/player?hit="+s;}
}()
