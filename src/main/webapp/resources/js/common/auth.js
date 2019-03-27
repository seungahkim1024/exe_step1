var auth = auth || {};
auth = (()=>{
    let _,js,compojs,r_cnt, l_cnt;
	let init=()=>{
	    _ = $.ctx();
        js = $.js();
        compojs = js+'/component/compo.js';
        r_cnt = '#right_content';
        l_cnt = '#left_content';
        
		onCreate();
	};
	let onCreate=()=>{
		setContentView();
	};
	let setContentView=()=>{
		$.getScript(compojs)
		.done(()=>{
			$(r_cnt).empty();
			$(compo.cust_login_form())
              .appendTo(r_cnt);
			$(l_cnt+' ul.nav').empty();
			login();
			let arr=[
				{navi : '로그인', name : 'login'},
				{navi : '회원가입', name : 'join'},
				{navi : '사원등록', name : 'register'},
				{navi : '사원접속', name : 'access'}
			]
			$.each(arr, (i,val)=>{
				$('<li><a href="#">'+val.navi+'</a></li>')
				.attr('name', val.name)
				.appendTo(l_cnt+' ul.nav')
				.click(function(){
					let that = $(this).attr('name');
					switch(that){
					case 'login': 
						alert('auth login!');
						$(r_cnt).empty();
						$(compo.cust_login_form())
						.appendTo(r_cnt);
						login();
						break;
					case 'join': 
						$(r_cnt).empty();
						$(compo.cust_form())
						.appendTo(r_cnt);
						break;
					case 'register': 
						$(r_cnt).empty();
						$(compo.emp_register_form())
						.appendTo(r_cnt);
						break;
					case 'access':
						$(r_cnt).empty();
						$(compo.emp_access_form())
						.appendTo(r_cnt);
						break;
					}
				});
			});
		})
		.fail(()=>{
			alert('component/compo.js의 로그인을 찾지 못했습니다.');
		});
	};
		let login=()=>{
			$('form button[type=submit]').click(e=>{
				let data = {
						customerID:$('form input[name=uname]').val(),
						password:$('form input[name=psw]').val()};
				$.ajax({
					url : _+'/cust/login',
					type : 'POST', // @RequestBody 를 찾지 못하면 jackson 이 미설치된 것임
					data : JSON.stringify(data),
					dataType : 'json',
					contentType : "application/json",
					success : d=>{
						alert('성공'+d.customerID);
					},
					error : e=>{
						alert('실패');
					}
				});
			});
		};
	let join =()=>{};
	let register =()=>{};
	let access =()=>{};
	return {init:init};
	
})();