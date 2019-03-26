var auth = auth || {}
auth.permission = (()=>{
	let _ = $.ctx();
	let js = $.js();
	let compojs = $.js()+'/component/compo.js';
	let rightCtnt = $('#right_content');
	let init=()=>{
		onCreate();
	};
	let onCreate=()=>{
		setContentView();
	};
	let setContentView=()=>{
		
	};
	let login =()=>{
		$.getScript(compojs)
		.done(()=>{
			rightCtnt.html(compo.cust_login_form());
			$('form button[type=submit]').click(()=>{
				let data = {customerID:$('form input[name=uname]').val(),
							password:$('form input[name=psw]').val()};
				$.ajax({
					url : _+'/cust/login',
					type : 'POST',
					data : JSON.stringify(data),
					dataType : 'json',
					contentType : "application/json",
					success : d=>{
						alert('성공');
					},
					error : e=>{
						alert('실패');
					}
				});
			});
			$('#left_content ul.nav').empty();
			let arr=[
				{navi : '로그인', name : 'login'},
				{navi : '회원가입', name : 'join'},
				{navi : '사원등록', name : 'register'},
				{navi : '사원접속', name : 'access'}
			]
			$.each(arr, (i,val)=>{
				$('<li><a href="#">'+val.navi+'</a></li>')
				.appendTo('#left_content ul.nav')
				.attr('name', val.name)
				.click(function(){
					let that = $(this).attr('name');
					switch(that){
					case 'login': 
						rightCtnt.empty();
						$(compo.cust_login_form())
						.appendTo('#right_content');
						break;
					case 'join': 
						alert(that);
						rightCtnt.empty();
						$(compo.cust_form())
						.appendTo('#right_content');
						break;
					case 'access':
						rightCtnt.empty();
						$(compo.emp_access_form())
						.appendTo('#right_content');
						break;
					case 'register': 
						rightCtnt.empty();
						$(compo.emp_register_form())
						.appendTo('#right_content');
						break;
					} //switch
				})  /*click(function()*/
			}); /*each(arr, (i,val)=>*/
		}) /*done(()=>*/
		.fail(()=>{
			alert('component/compo.js의 로그인을 찾지 못했습니다.');
		});
	}; //login
	let join =()=>{};
	let mypage =()=>{};
	return {
		login : login,
		join : join,
		mypage : mypage
	};
})();