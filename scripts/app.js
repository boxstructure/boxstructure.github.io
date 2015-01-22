$(document).ready(function(){
	
	var pageW = $('.clip').width();
	var pageH = $('.clip').height();
	
	var menuAbout = $('menuAbout');
	var menuWork = $('menuWork');
	var menuNotes = $('menuNotes');
	var menuContact = $('menuContact');
	var menuWorkChron = $('#chronological');
	var menuWorkType = $('#type');
	var menuWorkAlpha = $('#alphabetical');

	var topCover = $('.top');
	var bottomCover = $('.bottom');
	var clip = $ ('.clip');
	var screen0 = $ ('.screen');
	var screen1 = $('.one');
	var screen2 = $('.two');
	var screen3 = $('.three');

	var ttlBrief = $('#brief');
	var ttlChrono = $('#ttlChrono');
	var ttlCateg = $('.ttlCateg');
	var ttlAlpha = $('#ttlAlpha');


	var tabsfdm = $('.tab.effectDS.tSfdm');
	var tabrice = $('.tab.effectDS.tRice');
	var tabmisc = $('.tab.effectDS.tMisc');
	var tabslrv = $('.tab.effectDS.tSlrv');
	var tabgs20 = $('.tab.effectDS.tGs20');
	var tabhtwr = $('.tab.effectDS.tHtwr');
	var tabco2w = $('.tab.effectDS.tCo2w');
	var tabsjvc = $('.tab.effectDS.tSjvc');
	var tabkyrt = $('.tab.effectDS.tKyrt');
	var tabuvia = $('.tab.effectDS.tUvia');
	var tabbatn = $('.tab.effectDS.tBatn');
	var tabflar = $('.tab.effectDS.tFlar');

	var navback = $ ('.navback');
	var mainTemplate = $ ('.template');

	
	TweenLite.set(clip, {autoAlpha:0, x:850});

	TweenLite.set(screen1, {autoAlpha:0});
	TweenLite.set(screen2, {autoAlpha:0});
	TweenLite.set(screen3, {autoAlpha:0});

	TweenLite.set(navback, {autoAlpha:0});

	TweenLite.set(tabsfdm, {autoAlpha:0});
	TweenLite.set(tabrice, {autoAlpha:0});
	TweenLite.set(tabmisc, {autoAlpha:0});
	TweenLite.set(tabslrv, {autoAlpha:0});
	TweenLite.set(tabgs20, {autoAlpha:0});
	TweenLite.set(tabhtwr, {autoAlpha:0});
	TweenLite.set(tabco2w, {autoAlpha:0});
	TweenLite.set(tabsjvc, {autoAlpha:0});
	TweenLite.set(tabkyrt, {autoAlpha:0});
	TweenLite.set(tabuvia, {autoAlpha:0});
	TweenLite.set(tabbatn, {autoAlpha:0});
	TweenLite.set(tabflar, {autoAlpha:0});

	TweenLite.set(ttlBrief, {autoAlpha:0});
	TweenLite.set(ttlChrono, {autoAlpha:0});
	TweenLite.set(ttlCateg, {autoAlpha:0});
	TweenLite.set(ttlAlpha, {autoAlpha:0});

	$(document).on('pointermove', function(event) {
            event.preventDefault();
    });

////////////////////////////////////////////////////////Tab Category///////////


$(function() {
    $("ul.topnav li:has(.subnav)").hover(function() {
        $("ul.subnav", this).fadeIn('fast').show();
    }, function() {
        $("ul.subnav", this).fadeOut('slow');
    });
});

// ////////////////////////////////////////////////////////Tab Category Chronological///////////

function setHoverWorkChron() {
	menuWorkChron
		.off('mouseover mouseleave mousedown mouseup')
		.on({
			mouseover: function(){
			TweenLite.to(menuWorkChron, .1, { scaleX:1.02, scaleY:1.02});
			},

			mouseleave: function(){
			TweenLite.to(menuWorkChron, .1, { scaleX:1, scaleY:1});
			},

			mousedown: function(){
			TweenLite.to(menuWorkChron, .05, {scaleX:.98, scaleY:.98, ease:"easeOutExpo"});
			},

			mouseup: function(){
			TweenLite.to(ttlBrief, .5, { delay:.5, delay:.5, autoAlpha:1, ease:"easeOutExpo"});

			TweenLite.to(menuWorkChron, .1, { delay:.15, scaleX:1, scaleY: 1, ease:"easeInQuart"});
			
			TweenLite.to(ttlChrono, .5, { delay:.5, autoAlpha:1, ease:"easeOutExpo"});
			TweenLite.to(ttlCateg, .01, { autoAlpha:0, ease:"easeOutExpo"});
			TweenLite.to(ttlAlpha, .01, { autoAlpha:0, ease:"easeOutExpo"});


			TweenLite.to(tabsfdm, .5, { x:-285, y:-400, autoAlpha:1, ease:"easeInQuart"});
			TweenLite.to(tabrice, .5, { x:-285, y:-370, autoAlpha:1, ease:"easeInQuart"});
			TweenLite.to(tabmisc, .5, { x:-285, y:-340, autoAlpha:1, ease:"easeInQuart"});
			TweenLite.to(tabslrv, .5, { x:-95, y:-490, autoAlpha:1, ease:"easeInQuart"});
			TweenLite.to(tabgs20, .5, { x:-95, y:-460, autoAlpha:1, ease:"easeInQuart"});
			TweenLite.to(tabhtwr, .5, { x:-95, y:-430, autoAlpha:1, ease:"easeInQuart"});
			TweenLite.to(tabco2w, .5, { x:95, y:-580, autoAlpha:1, ease:"easeInQuart"});
			TweenLite.to(tabsjvc, .5, { x:95, y:-550, autoAlpha:1, ease:"easeInQuart"});
			TweenLite.to(tabkyrt, .5, { x:95, y:-520, autoAlpha:1, ease:"easeInQuart"});
			TweenLite.to(tabuvia, .5, { x:285, y:-670, autoAlpha:1, ease:"easeInQuart"});
			TweenLite.to(tabbatn, .5, { x:285, y:-640, autoAlpha:1, ease:"easeInQuart"});
			TweenLite.to(tabflar, .5, { x:285, y:-610, autoAlpha:1, ease:"easeInQuart"});

    	}
        });
	}

	$(menuWorkChron).click(function(){
   	setHoverWorkChron();
	});
	setHoverWorkChron();


// ////////////////////////////////////////////////////////Tab Category Type///////////

function setHoverWorkType() {
	menuWorkType
		.off('mouseover mouseleave mousedown mouseup')
		.on({
			mouseover: function(){
			TweenLite.to(menuWorkType, .1, { scaleX:1.02, scaleY:1.02});
			},

			mouseleave: function(){
			TweenLite.to(menuWorkType, .1, { scaleX:1, scaleY:1});
			},

			mousedown: function(){
			TweenLite.to(menuWorkType, .05, {scaleX:.98, scaleY:.98, ease:"easeOutExpo"});
			},

			mouseup: function(){
			TweenLite.to(ttlBrief, .5, { delay:.5, autoAlpha:1, ease:"easeOutExpo"});

			TweenLite.to(menuWorkType, .1, { delay:.15, scaleX:1, scaleY: 1, ease:"easeInQuart"});

			TweenLite.to(ttlChrono, .01, { autoAlpha:0, ease:"easeOutExpo"});
			TweenLite.to(ttlCateg, .5, { delay:.5, autoAlpha:1, ease:"easeOutExpo"});
			TweenLite.to(ttlAlpha, .01, { autoAlpha:0, ease:"easeOutExpo"});

			TweenLite.to(tabsfdm, .5, { x:-285, y:-400, autoAlpha:1, ease:"easeInQuart"});
			TweenLite.to(tabrice, .5, { x:-285, y:-370, autoAlpha:1, ease:"easeInQuart"});
			TweenLite.to(tabmisc, .5, { x:-285, y:-340, autoAlpha:1, ease:"easeInQuart"});
			TweenLite.to(tabco2w, .5, { x:-95, y:-580, autoAlpha:1, ease:"easeInQuart"});
			TweenLite.to(tabhtwr, .5, { x:-95, y:-490, autoAlpha:1, ease:"easeInQuart"});
			
			TweenLite.to(tabbatn, .5, { x:-95, y:-520, autoAlpha:1, ease:"easeInQuart"});
			TweenLite.to(tabslrv, .5, { x:-95, y:-250, autoAlpha:1, ease:"easeInQuart"});
			
			TweenLite.to(tabgs20, .5, { x:95, y:-520, autoAlpha:1, ease:"easeInQuart"});
			TweenLite.to(tabkyrt, .5, { x:95, y:-580, autoAlpha:1, ease:"easeInQuart"});
			TweenLite.to(tabuvia, .5, { x:95, y:-550, autoAlpha:1, ease:"easeInQuart"});
		
			TweenLite.to(tabsjvc, .5, { x:285, y:-610, autoAlpha:1, ease:"easeInQuart"});
			TweenLite.to(tabflar, .5, { x:285, y:-610, autoAlpha:1, ease:"easeInQuart"});

    	}
        });
	}

	$(menuWorkType).click(function(){
   	setHoverWorkType();
	});
	setHoverWorkType();

// ////////////////////////////////////////////////////////Tab Category Alphabetical///////////

function setHoverWorkAlpha() {
	menuWorkAlpha
		.off('mouseover mouseleave mousedown mouseup')
		.on({
			mouseover: function(){
			TweenLite.to(menuWorkAlpha, .1, { scaleX:1.02, scaleY:1.02});
			},

			mouseleave: function(){
			TweenLite.to(menuWorkAlpha, .1, { scaleX:1, scaleY:1});
			},

			mousedown: function(){
			TweenLite.to(menuWorkAlpha, .05, {scaleX:.98, scaleY:.98, ease:"easeOutExpo"});
			},

			mouseup: function(){
			TweenLite.to(menuWorkAlpha, .05, {scaleX:1, scaleY:1, ease:"easeOutExpo"});
			TweenLite.to(ttlBrief, .5, { delay:.5, autoAlpha:1, ease:"easeOutExpo"});
			

			TweenLite.to(ttlChrono, .01, { autoAlpha:0, ease:"easeOutExpo"});
			TweenLite.to(ttlCateg, .01, { autoAlpha:0, ease:"easeOutExpo"});
			TweenLite.to(ttlAlpha, .5, { delay:.5, autoAlpha:1, ease:"easeOutExpo"});


			TweenLite.to(tabbatn, .5, { x:-285, y:-700, autoAlpha:1, ease:"easeInQuart"});
			TweenLite.to(tabco2w, .5, { x:-285, y:-520, autoAlpha:1, ease:"easeInQuart"});
			TweenLite.to(tabflar, .5, { x:-285, y:-610, autoAlpha:1, ease:"easeInQuart"});
			TweenLite.to(tabgs20, .5, { x:-95, y:-520, autoAlpha:1, ease:"easeInQuart"});
			TweenLite.to(tabhtwr, .5, { x:-95, y:-490, autoAlpha:1, ease:"easeInQuart"});
			TweenLite.to(tabkyrt, .5, { x:-95, y:-520, autoAlpha:1, ease:"easeInQuart"});
			TweenLite.to(tabmisc, .5, { x:95, y:-460, autoAlpha:1, ease:"easeInQuart"});
			TweenLite.to(tabrice, .5, { x:95, y:-370, autoAlpha:1, ease:"easeInQuart"});
			TweenLite.to(tabsfdm, .5, { x:95, y:-280, autoAlpha:1, ease:"easeInQuart"});
			TweenLite.to(tabslrv, .5, { x:285, y:-490, autoAlpha:1, ease:"easeInQuart"});
			TweenLite.to(tabsjvc, .5, { x:285, y:-550, autoAlpha:1, ease:"easeInQuart"});
			TweenLite.to(tabuvia, .5, { x:285, y:-550, autoAlpha:1, ease:"easeInQuart"});

    	}
        });
	}

	$(menuWorkAlpha).click(function(){
   	setHoverWorkAlpha();
	});
	setHoverWorkAlpha();


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 							///////////Individual Tab Navigation///////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function setHoverSFDM() {
	tabsfdm
		.off('mouseover mouseleave mousedown mouseup')
		.on({
			mouseover: function(){
			TweenLite.to(clip, .85, { x:0, y:0, autoAlpha:1, ease:"easeOutQuint"});
			TweenLite.to(screen2, .85, { autoAlpha:1, ease:"easeOutQuint"});
			TweenLite.to(tabsfdm, .2, { scaleX:1.05, scaleY:1.05});
			},

			mouseleave: function(){
			TweenLite.to(clip, .4, { x:850, y:0, autoAlpha:0, ease:"easeOutQuint"});	
			TweenLite.to(screen2, .4, { autoAlpha:0, ease:"easeOutQuint"});
			TweenLite.to(tabsfdm, .2, { scaleX:1, scaleY:1});
			},


			mousedown: function(){
			TweenLite.to(tabsfdm, .15, {scaleX:.97, scaleY:.97, ease:"easeOutExpo"});
			},

			mouseup: function(){

			var prjBnTemp = $('#frame2').contents().find("#projectBannerTemp");
			TweenLite.to(prjBnTemp, .35, { delay:0, x:0, y:600, autoAlpha:0, ease:"easeOutExpo"});

			var briefSfdm = $('#frame2').contents().find("#projectBriefContainer");
			TweenLite.to(briefSfdm, .35, { delay:0, x:0, y:400, autoAlpha:0, ease:"easeOutExpo"});

			setTimeout( function(){
			$(mainTemplate).css('z-index', 0);}, 200);

			TweenLite.to(tabsfdm, .35, { delay:.25, scaleX:1, scaleY: 1, ease:"easeInQuart"});	
			TweenLite.to(navback, .5, {autoAlpha:.6});
			TweenLite.to(topCover, .5, { x:0, y:-140, autoAlpha:1, ease:"easeOutExpo"});	
			TweenLite.to(bottomCover, .9, { delay:0, x:0, y:800, autoAlpha:1, ease:"easeOutExpo"});
			TweenLite.to(bottomCover, .45, { delay:.2, autoAlpha:0});

			$(this).unbind("mouseover mouseleave");
			$(setHoverNavback).bind("mouseover mouseleave");
    	}
        });
	}

	$(tabsjvc).click(function(){
   	setHoverSFDM();
	});
	setHoverSFDM();


function setHoverSJVC() {
	tabsjvc
		.off('mouseover mouseleave mousedown click')
		.on({
			mouseover: function(){
			TweenLite.to(clip, .85, { x:0, y:0, autoAlpha:1, ease:"easeOutQuint"});
			TweenLite.to(screen1, .85, { autoAlpha:1, ease:"easeOutQuint"});
			TweenLite.to(tabsjvc, .2, { scaleX:1.05, scaleY:1.05});
			},

			mouseleave: function(){
			TweenLite.to(clip, .4, { x:850, y:0, autoAlpha:0, ease:"easeOutQuint"});	
			TweenLite.to(screen1, .4, { autoAlpha:0, ease:"easeOutQuint"});
			TweenLite.to(tabsjvc, .2, { scaleX:1, scaleY:1});
			},

			mousedown: function(){
			TweenLite.to(tabsjvc, .15, {scaleX:.97, scaleY:.97, ease:"easeOutExpo"});

			// $(this).unbind("mouseover mouseleave");
			},

			click: function(){
			setTimeout( function(){

			$(mainTemplate).css('z-index', 0);}, 200);

			TweenLite.to(tabsjvc, .35, { delay:.4, scaleX:1, scaleY: 1, ease:"easeInQuart"});	
			TweenLite.to(navback, .5, {delay:.15, autoAlpha:.6});
			TweenLite.to(topCover, .5, { delay:.15, x:0, y:-140, autoAlpha:1, ease:"easeOutExpo"});	
			TweenLite.to(bottomCover, .9, { delay:.15, x:0, y:800, autoAlpha:1, ease:"easeOutExpo"});
			TweenLite.to(bottomCover, .45, { delay:.35, autoAlpha:0});
			
			$(tabsjvc).unbind("mouseover mouseleave");
			$(setHoverNavback).bind("mouseover mouseleave");
    	}
        });
	}

	$(tabsjvc).click(function(){
   	setHoverSJVC();
	});
	setHoverSJVC();



function setHoverSLRV() {
	tabslrv
		.off('mouseover mouseleave mousedown click')
		.on({
			mouseover: function(){
			TweenLite.to(clip, .85, { x:0, y:0, autoAlpha:1, ease:"easeOutQuint"});
			TweenLite.to(screen3, .85, { autoAlpha:1, ease:"easeOutQuint"});
			TweenLite.to(tabslrv, .2, { scaleX:1.05, scaleY:1.05});
			},

			mouseleave: function(){
			TweenLite.to(clip, .4, { x:850, y:0, autoAlpha:0, ease:"easeOutQuint"});	
			TweenLite.to(screen3, .4, { autoAlpha:0, ease:"easeOutQuint"});
			TweenLite.to(tabslrv, .2, { scaleX:1, scaleY:1});
			},

			mousedown: function(){
			TweenLite.to(tabslrv, .15, {scaleX:.97, scaleY:.97, ease:"easeOutExpo"});

			// $(this).unbind("mouseover mouseleave");
			},

			click: function(){
			setTimeout( function(){

			$(mainTemplate).css('z-index', 0);}, 200);

			TweenLite.to(tabslrv, .35, { delay:.4, scaleX:1, scaleY: 1, ease:"easeInQuart"});	
			TweenLite.to(navback, .5, {delay:.15, autoAlpha:.6});
			TweenLite.to(topCover, .5, { delay:.15, x:0, y:-140, autoAlpha:1, ease:"easeOutExpo"});	
			TweenLite.to(bottomCover, .9, { delay:.15, x:0, y:800, autoAlpha:1, ease:"easeOutExpo"});
			TweenLite.to(bottomCover, .45, { delay:.35, autoAlpha:0});
			
			$(tabslrv).unbind("mouseover mouseleave");
			$(setHoverNavback).bind("mouseover mouseleave");
    	}
        });
	}

	$(tabslrv).click(function(){
   	setHoverSLRV();
	});
	setHoverSLRV();


////////////////////////////////////////////////////////Back Navigation///////////


function setHoverNavback() {
	navback
		.off('mouseover mouseleave mousedown mouseup')
		.on({
			mouseover: function(){

				TweenLite.to(navback, .2, { scaleX:1.05, scaleY:1.05});
				},

			mouseleave: function(){

				TweenLite.to(navback, .2, { scaleX:1, scaleY:1});
				},

			mousedown: function(){
				TweenLite.to(navback, .175, {scaleX:1, scaleY:1, ease:"easeOutExpo"});

				$(this).unbind("mouseover mouseleave");
				},

			mouseup: function(){
			setTimeout( function(){
				
				$(mainTemplate).css('z-index', 50);}, 200);
				TweenLite.to(navback, .1, {autoAlpha:0});
				TweenLite.to(screen0, .5, {autoAlpha:0});
				TweenLite.to(clip, .5, { x:650, y:0, autoAlpha:0, ease:"easeOutQuint"});	
				TweenLite.to(topCover, .35, {x:0, y:0, delay:.05, ease:"easeOutExpo"});
				TweenLite.to(bottomCover, .35, {x:0, y:0, delay:.05, autoAlpha:1, ease:"easeOutExpo"});

				$(setHoverSJVC).bind("mouseover mouseleave");
				$(setHoverSFDM).bind("mouseover mouseleave");
				$(setHoverSLRV).bind("mouseover mouseleave");

				setTimeout( function(){
				$('#frame1').attr('src', $('#frame1').attr('src')); contentWindow.scrollTo(0,0);},
				200)
				setTimeout( function(){
				$('#frame2').attr('src', $('#frame2').attr('src')); contentWindow.scrollTo(0,0);},
				200)

			}

			
        });
	}

	$(navback).click(function(){
   	setHoverNavback();
	});
	setHoverNavback();





});














