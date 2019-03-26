var cust = cust || {}
cust.permission = (()=>{
	let login =()=>{
		$.getScript($.js()+'/component/compo.js')
		.done(()=>{
			$('#right_content').html(compo.cust_login_form());
			
		})
		.fail(()=>{
			alert('component/compo.js의 로그인을 찾지 못했습니다.');
		});
	};
	let join =()=>{
		$.getScript($.js()+'/component/compo.js')
		.done(()=>{
			
		})
		.fail(()=>{
			alert('component/compo.js의 조인을 찾지 못했습니다.');
		})
	};
	let mypage =()=>{};
	return {
		login : login,
		join : join,
		mypage : mypage
	};
})();