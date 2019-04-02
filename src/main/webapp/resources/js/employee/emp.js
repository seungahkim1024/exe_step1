var emp = emp || {}
emp =(()=>{
	let setpath=x=>{
		_ = $.ctx();
        js = $.js();
        compojs = js+'/component/compo.js';
        prodjs = js+'/prod/prod.js';
        r_cnt = '#right_content';
        l_cnt = '#left_content';
	};
	
	let init=()=>{
		onCreate();
	};
	let onCreate=()=>{
		
		setContentView();
	};
	let setContentView=()=>{
		
	};
	let empNavi=()=>{
		
		let arr=[
			{val: '고객 목록', name: 'cust_list'},
			{val: '상품 등록', name: 'prod_post'},
			{val: '상품 목록', name: 'prod_list'},
			{val: '상품 수정', name: 'prod_update'},
			{val: '상품 삭제', name: 'prod_delete'},
			{val: '상품 통계', name: 'prod_numerical'}
		]
		$(l_cnt+' ul.nav').empty();
		$('#left_content h4').html('<h1>'+arr[0].val+'</h1>');
		$.each(arr, (i,j)=>{
			$('<li><a href="#section2">'+j.val+'</a></li>')
			.appendTo('div ul.nav')
			.attr('name', j.name)
			.on('click', function(){
				let that = $(this).attr('name');
				$(this).addClass('active');
				$(this).siblings().removeClass('active');
				switch(that){
				case 'cust_list': 
					$('#left_content h4').html('<h1>'+arr[0].val+'</h1>');
					break;
				case 'prod_post': 
					$('#left_content h4').html('<h1>'+arr[1].val+'</h1>');
					$(r_cnt).empty();
					$(r_cnt).html(compo.prod_register())
					break;
				case 'prod_list': 
					$('#left_content h4').html('<h1>'+arr[2].val+'</h1>');
					break;
				case 'prod_update': 
					$('#left_content h4').html('<h1>'+arr[3].val+'</h1>');
					break;
				case 'prod_delete': 
					$('#left_content h4').html('<h1>'+arr[4].val+'</h1>');
					break;
				case 'prod_numerical': 
					$('#left_content h4').html('<h1>'+arr[5].val+'</h1>');
					break;
				}
			});
			$(this).addClass('active');
		})
	
	};
	
	return {init:init, empNavi:empNavi, setpath}
})();