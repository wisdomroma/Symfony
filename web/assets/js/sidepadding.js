$(function(){
	var thumbnail = $(".post_thumbnail");
			
	if(thumbnail.length > 0) {
		$("#sidebar").css('padding-top', thumbnail.position().top+20)
	}
})