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
		$.getScript(compojs,()=>{
			$(r_cnt).html(compo.cust_login_form());
	         $('form button[type=submit]').click(e=>{
	        	  e.preventDefault();
	        	  login();
	          });
	          
			$(l_cnt+' ul.nav').empty();
			let arr=[
				{navi : '로그인', name : 'login'},
				{navi : '회원가입', name : 'join'},
				{navi : '회원탈퇴', name : 'delete'},
				{navi : '사원등록', name : 'register'},
				{navi : '사원접속', name : 'access'}
			]
			$.each(arr, (i,val)=>{
				$('<li><a href="#">'+val.navi+'</a></li>')
				.attr('name', val.name)
				.appendTo(l_cnt+' ul.nav')
				.click(function(){
					let that = $(this).attr('name');
					$(this).addClass('active');
					$(this).siblings().removeClass('active');
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
						 $('form button[type=submit]').click(e=>{
				        	  e.preventDefault();
				        	  join();
				          });
						break;
					case 'register': 
						$(r_cnt).empty();
						$(compo.emp_register_form())
						.appendTo(r_cnt);
						break;
					case 'access':
						$(r_cnt).empty();
							 access();
						break;
					case 'delete':
						$(r_cnt).empty();
						$(compo.cust_delete_form())
						.appendTo(r_cnt);
						 $('form button[type=submit]').click(e=>{
				        	  e.preventDefault();
				        	  delete_cust();
				          });
						break;
					}
				});
				$(this).addClass('active');
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
					url : _+'/customers/'+data.customerID,
					type : 'POST', // @RequestBody 를 찾지 못하면 jackson 이 미설치된 것임
					data : JSON.stringify(data),
					dataType : 'json',
					contentType : "application/json",
					success : d=>{
						if(d.customerID!==''){
							alert('성공 '+d.customerID);
							$.getScript($.js()+'/customer/cust.js');
							cust.init();
						}else{
							alert('로그인 실패'+d.customerID);
						}
					},
					error : e=>{
						alert('실패');
					}
				});
		};
	let join =()=>{
			let data = {customerID:$('form input[name=uid]').val(),
						password:$('form input[name=psw]').val(),
						ssn:$('form input[name=ssn]').val(),
						phone:$('form input[name=phone]').val(),
						city:$('form input[name=city]').val(),
						address:$('form input[name=address]').val(),
						postalCode:$('form input[name=postalCode]').val(),
						customerName:$('form input[name=customerName]').val()
			};
			$.ajax({
				url:_+'/customers',
				data: JSON.stringify(data),
				type: 'POST',
				dataType: 'json',
				contentType: "application/json",
				success: d=>{
					if(d.msg==='성공'){
						alert('회원가입 성공 '+d.msg);
						$(r_cnt).html(compo.cust_login_form());
						 $('form button[type=submit]').click(e=>{
				        	  e.preventDefault();
				        	  login();
				          });
					}else{
						alert('회원가입 실패');
						$(r_cnt).html(compo.cust_form());
						join();
					}
				},
				error: e=>{
					alert('회원가입 실패!');
				}
			});
			
	};
	let delete_cust =()=>{
		let data = {customerID:$('form input[name=customerID]').val(),
					password:$('form input[name=password]').val()
		}
		$.ajax({
			url: _+'/customers/'+data.customerID,
			data: JSON.stringify(data),
			type: 'DELETE',
			dataType: 'json',
			contentType: 'application/json',
			success: d=>{
				alert('탈퇴 성공');
				$(r_cnt).html(compo.cust_login_form());
			},
			error: e=>{
				alert('탈퇴 실패');
			},
		});
};
	let register =()=>{
		let data = {employeeId:$('form input[name=employeeId]').val(),
				manager:$('form input[name=manager]').val(),
				name:$('form input[name=name]').val(),
				birthDate:$('form input[name=birthDate]').val(),
				photo:$('form input[name=photo]').val(),
				notes:$('form input[name=notes]').val(),
	};
		$.ajax({
			url:_+'/emp/register',
			data: JSON.stringify(data),
			type: 'POST',
			dataType: 'json',
			contentType: "application/json",
			success: d=>{
				if(d.msg==='성공'){
					alert('회원가입 성공 '+d.msg);
					$(r_cnt).html(compo.emp_access_form());
					 $('form button[type=submit]').click(e=>{
			        	  e.preventDefault();
			        	  login();
			          });
				}else{
					alert('회원가입 실패');
					$(r_cnt).html(compo.emp_register_form());
					join();
				}
			},
			error: e=>{
				alert('실패!');
			}
		});
	
	};
	let access =()=>{
		let ok = confirm('관리자 입니까?');
		if(ok){
			let emp_no = prompt('사원번호 입력하세요'); //prompt ->입력창 뜨는 것
			$.getJSON(_+'/emp/access',d=>{
				alert('성공!');
				if(emp_no===d.employeeId){
					$(compo.emp_access_form())
					.appendTo(r_cnt);
					$('#namelabel')
					.prepend('<label for="name"><b>name</b></label></br>'
							+'<input type="text" placeholder="Enter name" id="name" value="박효신" required>');
					$('#access_btn').click(e=>{
						 e.preventDefault();
						 $.getScript($.js()+'/customer/cust.js',()=>{
							 cust.list(1);
						 })
					/*	 if($('#name')===d.name){
							 alert('통과!');
							 // 고	객 명단
							 $.getScript($.js()+'/customer/cust.js',()=>{
								 cust.list();
							 })
						 }*/
					});
				}else{
					alert('사원번호가 일치하지 않습니다.');
				}
				});
		}else{
			//사원 전용 페이지 입니다
			//되돌아가기 버튼이 보인다.
		}
		
	};
	
	return {init:init};
})();