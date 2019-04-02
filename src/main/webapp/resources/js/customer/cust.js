var cust = cust || {}
cust = (()=>{
	
	let setpath=x=>{
		_ = $.ctx();
        js = $.js();
        compojs = js+'/component/compo.js';
        prodjs = js+'/prod/prod.js';
        r_cnt = '#right_content';
        l_cnt = '#left_content';
	}
	
	let init =(x)=>{
			
		onCreate(x);
	};
	let onCreate =()=>{
		setContentView();
	};
	let setContentView =()=>{
		mypage();
	};
	
	let mypage =()=>{
		$.getScript(compojs,()=>{
			$(r_cnt).html(compo.cust_mypage());
			
			$(l_cnt+' ul.nav').empty();
			let arr=[
				{navi:'마이페이지', name:'mypage'},
				{navi:'쇼핑몰', name:'shopping'},
				{navi:'장바구니', name:'wishlist'},
				{navi:'구매내역', name:'bought'},
				{navi:'정보수정', name:'update'},
				{navi:'회원탈퇴', name:'withdrawal'}
			]
			$(l_cnt+' ul.nav').empty();
			$.each(arr, (i,val)=>{
				$('<li><a href="#">'+val.navi+'</a></li>')
				.attr('name', val.name)
				.appendTo(l_cnt+' ul.nav')
				.on('click', function(){
					let that = $(this).attr('name');
					$(this).addClass('active');
					$(this).siblings().removeClass('active');
					switch(that){
					case 'mypage': break;
					case 'shopping': 
						$.getScript(prodjs,()=>{
							$(r_cnt).html(compo.carousel());
						}).fail(()=>{});
						break;
					case 'wishlist': break;
					case 'bought': break;
					case 'update': break;
					case 'withdrawal': break;
					}
				});
				$(this).addClass('active');
			});
		});
	};
	let list = ()=>{
		alert('리스트!');
		setpath();
		$.getJSON(_+'/cust/page/{page}', d=>{
			alert('성공!');
			  $(r_cnt).empty();
			  $(compo.cust_list()).appendTo(r_cnt);
			  $.each(d.ls,(i,j)=>{    
	                 $('#cust_tab').append('<tr>'
	                    +'<td>'+j.rownum+'</td>'
	                    +'<td>'+j.customerID+'</td>'
	                    +'<td>'+j.customerName+'</td>'
	                    +'<td>'+j.ssn+'</td>'
	                    +'<td>남자</td>'
	                    +'<td>'+j.phone+'</td>'
	                    +'<td>'+j.postalCode+'</td>'
	                    +'<td>'+j.address+'</td>'
	                    +'<td>'+j.city+'</td>'
	                    +'</tr>');
	            });
			  
			  $('<div id="sa_list" style="height: 50px"></div>')
			  .appendTo('#cust_tab');
			  html = '<div class="pagination" >';
			  if(d.pxy.existPrev){
				  html += '<a href="${ctx}/customer.do?cmd=cus_list&page=list&page_num='+d.pxy.prevBlock+'">&laquo;</a>';
			  }
			  for(let i=d.pxy.startPage; i<d.pxy.endpage; i++){
				  if(d.pxy.pageNum === i){
					  html += '<a href="#" class="page active">'+i+'</a>'
				  }else{
					  html += '<a href="#" class="page">'+i+'</a>'
				  }
			  }
			  if(d.pxy.existNext){
				  html += '<a href="${ctx}/customer.do?cmd=cus_list&page=list&page_num='+d.pxy.nextBlock+'">&raquo;</a>';
			  }
			  $(html).appendTo('#sa_list');
			  
				  $.getScript(js+'/employee/emp.js', ()=>{
					  emp.empNavi();
					 })
			
		});
	};
	return {init : init, list : list}
})();

 