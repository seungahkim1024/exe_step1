var cust = cust || {}
cust = (()=>{
	
	let setpath=()=>{
		_ = $.ctx();
        js = $.js();
        compojs = js+'/component/compo.js';
        prodjs = js+'/prod/prod.js';
        r_cnt = '#right_content';
        l_cnt = '#left_content';
	}
	
	let init =()=>{
		onCreate();
	};
	let onCreate =()=>{
		setContentView();
	};
	let setContentView =()=>{
		mypage();
	};
	
	let mypage =()=>{
		setpath();
		$.getScript(compojs,()=>{
			$(r_cnt).html(compo.cust_mypage());
			
			$(l_cnt+' ul.nav').empty();
			$('#srch_grp').show();
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
			$('#srch_btn').on('click', ()=>{
				search(1);
			});
		});
	};
	let search=(x)=>{
		let data = $('#srch').val();
		if($.fn.nullChecker([data])){
			alert('빈칸 쳌쳌');
		}else{
		$.getJSON(_+'/phones/'+$('#srch').val()+'/'+x, d=>{
				alert('서치 진입!');
				$(r_cnt).empty();
				$(compo.prod_search_list()).appendTo(r_cnt);
				  $.each(d.prodList,(i,j)=>{    
		                 $('#prod_search_tab').append('<tr>'
		                    +'<td>'+j.rownum+'</td>'
		                    +'<td>'+j.productName+'</td>'
		                    +'<td>'+j.supplierId+'</td>'
		                    +'<td>'+j.unit+'</td>'
		                    +'<td>'+j.price+'</td>'
		                    +'</tr>');
		            });
				  $('#grind_btn').click(()=>{
					  $('#content_2').empty();
					  let url = _+'/phones/'+$('#srch').val()+'/grid'+x
					  $.getJSON(url, d=>{
						  let i=0;
						  $('<div id="gid />').appendTo('#content_2');
							  $.each(d.prodList,(x,y)=>{
						           $('<div class="col-md-4">'
						              +'<div class="thumbnail">'
						               +'<a href="#" target="_blank">'
						                +'<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRanydDprvV35nlbHP2RwvjdyPrYgOgjevy7W_efJ2tTEVZvKKF" alt="Lights" style="width:100%">'
						                 +'<div class="caption">'
						                  +'<p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>'
						                 +'</div>'
						               +'</a>'
						              +'</div>'
						             +'</div>').appendTo('#grid')
						       })
					  });
					  $('#grind_btn').text('리스트 보기');
				  }); 
			});//getjson
		} //else
	}; //let
	
	let list = x =>{
		alert('리스트!');
		setpath();
		$.getJSON(_+'/cust/page/'+x, d=>{
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
				  $('<a>&laquo;</a>')
				  .appendTo('#sa_list')
				  .click(function(){
					  list(d.pxy.prevBlock);
				  });
			  }
			  let i=0;
			  for(i=d.pxy.startPage; i<=d.pxy.endPage; i++){
				  if(d.pxy.pageNum === i){
					  $('<a class="page active">'+i+'</a>')
					  
					  .appendTo('#sa_list')
					  .click(function(){
						    list($(this).text());
					  })
				  }else{
					  $('<a class="page">'+i+'</a>')
					   .appendTo('#sa_list')
					   
					   .click(function(){
						    list($(this).text());
					   })
				  }
			  }
			  if(d.pxy.existNext){
				  $('<a>&raquo;</a>')
				  .appendTo('#sa_list')
				  .click(function(){
					  list(d.pxy.nextBlock);
				  })
			  }
				  $.getScript(js+'/employee/emp.js', ()=>{
					  emp.empNavi();
				  })
		}); //getJSON
	}; //let list()
	
	
	return {init : init, list : list, setpath:setpath}
})();

 