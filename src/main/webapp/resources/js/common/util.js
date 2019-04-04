"use strict";
//스크립트 언어들은 상속을 할 때, 원본을 복사하면 카피본이 생기는데 그 안의 fn[존 레식이 그냥 이름지음]이라는 공간에 여러가지 메소드들을 저장하면 어디서든 쓸 수 있다.
$.prototype.nullChecker=x=>{
	let flag = false;
	let i = 0;
	for(i in x){
		if(x[i]===''){
			flag = true;
		}
	}
	return flag;
}
$.prototype.zeroChecker=x=>{
	let flag = true;
	let i = 0;
	for(i in x){
		if(x[i]==0){
			flag = false;
		}
	}
	return flag;
}