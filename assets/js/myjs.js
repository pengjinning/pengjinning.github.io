

$(document).ready(function () {

    $('.carousel').carousel({ interval: 1000000 });

    $("#owl-index-demo").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        items: 4,
        lazyLoad: true,
        stopOnHover: true,
        transitionStyle: "fade",
        navigationText: ["上一个", "下一个"]
    });

    $("#owl-demo").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        items: 2,
        lazyLoad: true,
        stopOnHover: true,
        transitionStyle: "fade",
        navigationText: ["上一个", "下一个"]
    });

    $("#owl-client").owlCarousel({
        slideSpeed: 300,
        paginationSpeed: 400,
        items: 5,
        lazyLoad: true,
        stopOnHover: true,
        transitionStyle: "fade"
    });

    // var preview_url = 'pages/try.php?url=';
	// $(".tiyan").on("click",function(){
	//      var tiyan_url = $(".tiyan-url").val();
	// 	if(!!$(".tiyan-url").val()){
	// 		window.open(preview_url+tiyan_url);
	// 	}
	// });

});

