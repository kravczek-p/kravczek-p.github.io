 $(document).ready(function(){
 	$(".services-item__open").on('click', function(){
 		$(this).parent().siblings('.services-item__full-description').addClass('active');
 	});

	$('.services-item__close').on('click', function(){
		$(this).parent().removeClass('active');
	});
  $("#about-us").owlCarousel(
	   {
	   	items: 1,

	   }
	  );
	  $("#what-says").owlCarousel(
		{
			items: 1,
			nav: true,
			navText: ['',''],
 
		}
		
	   );
});