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
			$(r_cnt).html(compo.cust_login_form());
	         $('form button[type=submit]').click(e=>{
	        	  e.preventDefault();
	        	  login();
	          });
	          
			$(l_cnt+' ul.nav').empty();
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
						$(r_cnt).empty();
						$(compo.cust_login_form())
						.appendTo(r_cnt);
						 $('form button[type=submit]').click(e=>{
				        	  e.preventDefault();
				        	  login();
				          });
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
						if(d.customerID!==''){
							alert('성공 '+d.customerID);
							$(r_cnt).empty();
							$(r_cnt).html(compo.cust_mypage());
						}else{
							alert('로그인 실패'+d.customerID);
						}
					},
					error : e=>{
						alert('실패');
					}
				});
		};
	let join =()=>{};
	let register =()=>{};
	let access =()=>{};
	return {init:init};
})();