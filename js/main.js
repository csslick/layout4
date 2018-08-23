$(function(){
	
	$('#main_gnb a').on('click', function(){
		
		// 서브 페이지명
		console.log(this.hash);
		var pageName = this.hash;
		
		$('#main_header')
			.animate({left: '-50%',opacity: 0})
			.next()
			.animate({right: '-50%', opacity: 0},
					function(){
						$('#main_header, #main_gnb')
							.css('display', 'none');
					});				
		
		// 메뉴 클릭시 해당 서브페이지로 이동
		$('#main > article').removeClass('on')
		$(pageName).addClass('on');
		
		// 푸터 표시
		$('#main_footer').show();
		
		return false;
	});
	
	$('#main .close').on('click', function(){
		console.log('close');
		$('#main_header, #main_gnb')
			.css('display', 'block');
		$('#main_header')
			.animate({left: '0%',opacity: 1})
			.next()
			.animate({right: '0%', opacity: 1});
		
		// 서브페이지, 푸터 비표시
		$('#main > article').removeClass('on')
		$('#main_footer').hide();		
	});
	
	
});  // end$