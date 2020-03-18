// SCROLLIFY

$(function(){
	$.scrollify({
		section:".scrollify",
		setHeights: false,
		updateHash: false
	});
});

// HAMBURGUR MENU

function closeMenu() {
    document.getElementById('navber').style.height = "0%";
}

function openMenu() {
    document.getElementById('navber').style.height = "100%";
}

// SMOOTH SCORLE

$(function(){
    $('.menu-items a').on('click', function(){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        },2000);
        return false;
    });
});


// STICKY MENU


$(window).on('scroll', function(){
    if($(window).scrollTop()){
            $('nav').addClass('sticky');
       }else {
            $('nav').removeClass('sticky');
       }
});

// MIXITUP

var mixer = mixitup('.grid-work-container');




