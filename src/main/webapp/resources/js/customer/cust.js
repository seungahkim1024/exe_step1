var cust = cust || {}
cust = (()=>{
	 let _,js,compojs,r_cnt, l_cnt;
	let init =()=>{
			_ = $.ctx();
	        js = $.js();
	        compojs = js+'/component/compo.js';
	        prodjs = js+'/prod/prod.js';
	        r_cnt = '#right_content';
	        l_cnt = '#left_content';
		onCreate();
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
	return {init : init}
})();

 