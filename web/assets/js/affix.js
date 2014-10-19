// affix rash2x.ru

$.fn.affix = function(){

	return this.each(function(){
		var self = this;

		var W = $(window);
		var items = $(".widget_fixed");
		var sidebar = $("#sidebar");
		var mainbar = $("#mainbar");
		var array = [];

		if(items.length == 0) return false;

		items.wrapAll("<div class='sidebar_fixed'></div>");

		var sidebarFixed = $(".sidebar_fixed");
		var width = sidebarFixed.width();
		var summaryHeight = mainbar.height() - sidebarFixed.position().top;
		var sidebarTop = sidebarFixed.offset().top - sidebarFixed.position().top;

		items.each(function(i){
			var top = sidebarFixed.offset().top - (sidebarFixed.offset().top - sidebarFixed.position().top)+(summaryHeight/items.length)*i;
			array.push(top);

			if(i==0) {
				$(this).css({
					top: top,
					'position': 'absolute',
					'width': width
				});
			} else {
				$(this).css({
					top: -1000,
					'position': 'absolute',
					'width': width
				});
			}
		});

		check();

		W.on('scroll', function() {
			check();
		});

		function check(){
			var state;

			for(var i=0; i < array.length; i++) {

				if (i==array.length-1) state = W.scrollTop() > array[i] + sidebarTop && W.scrollTop()-W.height() < summaryHeight;
				else state = W.scrollTop() > array[i] + sidebarTop && W.scrollTop() < array[i+1] + sidebarTop;

				if(state) {
					$(".widget_fixed").eq(i).css({
						top: 0,
						position: 'fixed',
						'transform': 'translate(0, 20px)'
					}).addClass("state_active");

					if(i!=0) $(".widget_fixed").eq(i).removeClass("state_hide");
				} else {
					$(".widget_fixed").eq(i).css({
						top: i==0?array[i]:-1000,
						position: 'absolute',
						'transform': 'translate(0, 00px)'
					}).removeClass("state_active");

					if(i!=0) $(".widget_fixed").eq(i).addClass("state_hide");
				}
			}
		}
	})

	
}