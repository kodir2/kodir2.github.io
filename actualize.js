!function(){
var old = 'https://api.delivembed.cc';
var actual = 'https://appi.delivembed.cc/';
fetch(old+'/ping/').then(r=>r.json()).then(r=>{
	if(r.status!=='ok')throw new Error('1');
}).catch(replace);

function replace(){
	var iframe = Array.prototype.find.call(
	document.body.getElementsByTagName('iframe'),
	i=>i.src.indexOf(old)===0
	);
	if(!iframe)return setTimeout(replace,100);
	iframe.src = iframe.src.replace(old, actual);
}
}()
