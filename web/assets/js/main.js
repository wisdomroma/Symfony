$(window).load(function(){

	//includes

	$("#sidebar").affix();

	$(".carousel").each(function(){
		var carousel = $(this);
		var items = $(".carousel_item", carousel);

		var carouselWidth = carousel.width();
		var carouselHeight = 0;
		var itemsWidth = items.eq(0).outerWidth()+20;
		var shownItems = Math.ceil(carouselWidth/itemsWidth);

		for(var i=0; i < items.length; i++) {
			if($(items[i]).height() > carouselHeight) carouselHeight = $(items[i]).height();
		}

		for(var i = 0; i < items.length; i+=shownItems) {
			items.slice(i, i+shownItems).wrapAll("<div class='carousel_group'></div>");
		};

		if($(".carousel_group", carousel).length > 1) {
			carousel.height(carouselHeight).royalSlider({
				slidesSpacing: 20,
				navigateByClick: false,
				arrowsNavAutoHide: false,
				controlsInside: false
			});

			carousel.find(".rsArrow").appendTo(carousel.find(".rsNav"));
		}
	});

	

	$(".article").on({
		'mouseenter': function(){
			if(!$(this).parent(".article_author").length > 0) $(this).parents(".article").addClass("state_hover");
		},
		'mouseleave': function(){
			$(this).parents(".article").removeClass("state_hover");
		}
	}, 'a');

	$(".span1, .span2").on({
		'click': function(){
			var obj = $(this);
			if(obj.hasClass("state_hover")) obj.removeClass("state_hover");
			else obj.addClass("state_hover");
		}
	}, '.list_wrap');

	$(".select_date_picker").datepicker({
		weekStart: 1
	}).on({
		'changeMonth': function(e){
			console.log(e);
		}
	})
});