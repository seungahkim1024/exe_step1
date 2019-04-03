var prod = prod || {}
prod= (()=>{
	let setpath=()=>{
		_ = $.ctx();
        js = $.js();
        compojs = js+'/component/compo.js';
        prodjs = js+'/prod/prod.js';
        r_cnt = '#right_content';
        l_cnt = '#left_content';
	}
	let init=()=>{
		onCreate();
	};
	let onCreate=()=>{
		setContentView
	};
	let setContentView=()=>{
		
	};
	let post= x =>{
		setpath();
		alert('프로덕트 리스트 성공!');
		$.getJSON(_+'/prod/page/'+x, d=>{
			$(r_cnt).empty();
			$(compo.prod_list()).appendTo(r_cnt);
			$.each(d.prodList, (i,j)=>{
				$('#prod_tab').append('<tr>'
					+'<th>'+j.productId+'</th>'
			        +'<th>'+j.productName+'</th>'
			        +'<th>'+j.supplierId+'</th>'
			        +'<th>'+j.categoryId+'</th>'
			        +'<th>'+j.unit+'</th>'
			        +'<th>'+j.price+'</th>'
			        +'<th>'+j.photo+'</th>'
			        +'</tr>');
			});
			 $('<div id="prod_list" class="pagination" style="height: 50px"></div>')
			  .appendTo('#prod_tab');
			  
			  if(d.pxy.existPrev){
				  $('<a>&laquo;</a>')
				  .appendTo('#prod_list')
				  .click(function(){
					  post(d.pxy.prevBlock);
				  });
			  }
			  let i=0;
			  for(i=d.pxy.startPage; i<=d.pxy.endPage; i++){
				  if(d.pxy.pageNum === i){
					  $('<a class="page active">'+i+'</a>')
					  .appendTo('#prod_list')
					  .click(function(){
						  post($(this).text());
					  })
				  }else{
					  $('<a class="page">'+i+'</a>')
					   .appendTo('#prod_list')
					   .click(function(){
						   post($(this).text());
					   })
				  }
			  }
			  if(d.pxy.existNext){
				  $('<a>&raquo;</a>')
				  .appendTo('#prod_list')
				  .click(function(){
					  post(d.pxy.nextBlock);
				  })
			  }
		});
	};
	let get=()=>{
		
	};
	let put=()=>{
		
	};
	let del=()=>{
		
	};
	return {init : init, post:post}
})();