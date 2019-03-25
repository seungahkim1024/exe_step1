"use strict";
function Session(x){
	sessionStorage.setItem('ctx',x);
	sessionStorage.setItem('js',x+'/resources/js');
	sessionStorage.setItem('css',x+'/resources/customer/css');
	sessionStorage.setItem('img',x+'/resources/customer/img');

	return {
		ctx:()=>{return sessionStorage.getItem('ctx')},
		css:()=>{return sessionStorage.getItem('css')},
		js:()=>{return sessionStorage.getItem('js')},
		img:()=>{return sessionStorage.getItem('img')}
	};
}