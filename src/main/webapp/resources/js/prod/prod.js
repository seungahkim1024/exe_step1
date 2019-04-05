"use strict";
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
		setContentView();
	};
	let setContentView=()=>{
		
	};
	let post=()=>{
		$('#prd_post_btn').click(e=>{
			e.preventDefault();
			let freebies = [];
			$(".checks:checked").each(function(i){ // : -> 이벤트가 걸렸다는 뜻. v체크 된 애들만 룹 돌려서 검색해봐!라는 뜻
				freebies.push($(this).val());
			});
			
			/*let pname = $('#product_name').val();
			let price = $('#price').val();
			let comment = $('#comment').val();
			if($.fn.nullChecker([pname, price, comment])){
				alert('빈칸 쳌쳌');
			}else{
				alert('else임');
			}*/
			let data = {categoryId:$('#category_id option:selected').val(),
						productName:$('#product_name').val(),
						price:$('#price').val(),
						unit:$('#unit').val(),
						supplierId:$('#supplier_id').val(),
						color:$('input[name=color]:checked').val(),
						freebies:freebies,
						comment:$('#comment').text()}; /*라디오에 클래스부여함*/
			$.ajax({
				url:_+'/phones',
				data : JSON.stringify(data),
				type : 'post',
				dataType:'json',
				contentType:'application/json',
				success:d=>{
					alert('성공');
					list(1);
				},
				error:e=>{
					alert('에러');
				}
			}) /*ajax 끝*/
		});
		$('#img_upload_btn').click(function(){
			let ok = (this.files[0].name.match(/jpg|gif|png|jpeg/i)) ? true : false;
			if(ok){
				/*let fd = new FormData();
				fd.append('file', this.files[0]);*/
				$('#img_upload_frm').attr('action',$ctx()+'/phones/files');
				$.ajax({
					url: $('#img_upload_frm').attr('action'),
					dataType : 'text',
					enctype : 'multipat/form-data',
					beforeSubmit: function(){},
					processData : false,
					success: d=>{
						alert('파일 업로드 성공');
					},
					error: e=>{
						alert('파일 업로드 실패');
					}
				});
			}else{
				alert('gif, png, jpg, jpeg 파일만 업로드 할 수 있습니다.');
			}
		
		});
	};
	let get=x=>{
		setpath();
		alert('프로덕트 리스트 성공!');
		$.getJSON(_+'/phones/'+x, d=>{
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
					  get(d.pxy.prevBlock);
				  });
			  }
			  let i=0; //for 안에 let을 넣으면 for문이 돌때마다 let이 생성되서 밖에 빼주는게 낫다.
			  for(i=d.pxy.startPage; i<=d.pxy.endPage; i++){
				  if(d.pxy.pageNum === i){
					  $('<a class="page active">'+i+'</a>')
					  .appendTo('#prod_list')
					  .click(function(){
						  get($(this).text());
					  })
				  }else{
					  $('<a class="page">'+i+'</a>')
					   .appendTo('#prod_list')
					   .click(function(){
						   get($(this).text());
					   })
				  }
			  }
			  if(d.pxy.existNext){
				  $('<a>&raquo;</a>')
				  .appendTo('#prod_list')
				  .click(function(){
					  get(d.pxy.nextBlock);
				  })
			  }
		});
		
	};
	let put=()=>{
		
	};
	let del=()=>{
		
	};
	return {init : init, post:post, get:get}
})();