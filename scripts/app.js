$(document).ready(function(){
	
	var pageW = $('.clip').width();
	var pageH = $('.clip').height();
	
	var menuAbout = $('#about');
	var menuWork = $('#work');
	var menuNotes = $('#notes');
	var menuContact = $('#contact');
	var menuWorkChron = $('#chronological');
	var menuWorkType = $('#type');
	var menuWorkAlpha = $('#alphabetical');

	var qcUpdate = $('.qcUpdateBrief');
	var qcWelcome = $('.welcomeText');
	var bestView = $('.bestViewed');

	var topCover = $('.top');
	var bottomCover = $('.bottom');
	var clip = $ ('.clip');
	var screen0 = $ ('.screen');
	var screenC = $('.contact');
	var screenA = $('.zero');
	var screen1 = $('.one');
	var screen2 = $('.two');
	var screen3 = $('.three');
	var screen4 = $('.four');
	var screen5 = $('.five');
	var screen6 = $('.six');
	var screen7 = $('.seven');
	var screen8 = $('.eight');
	var screen9 = $('.nine');
	var screen10 = $('.ten');
	var screen11 = $('.eleven');
	var screen12 = $('.twelve');

	var ttlBrief = $('#brief');
	var ttlChrono = $('#ttlChrono');
	var ttlCateg = $('.ttlCateg');
	var ttlAlpha = $('#ttlAlpha');

	// var briefBatn = $('.projectBriefBatn');


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
	var navback2 = $ ('.navback2');
	var mainTemplate = $ ('.template');

	
	TweenLite.set(clip, {autoAlpha:0, x:850});

	TweenLite.set(qcUpdate, {autoAlpha:0});
	TweenLite.to(qcUpdate, .5, { autoAlpha:.7, ease:"easeInQuart"});

	TweenLite.set(qcWelcome, {autoAlpha:0});
	TweenLite.to(qcWelcome, .5, { autoAlpha:.6, ease:"easeInQuart"});

	TweenLite.set(bestView, {autoAlpha:0});
	TweenLite.to(bestView, .5, { autoAlpha:.6, ease:"easeInQuart"});

	// TweenLite.set(briefBatn, {y:-1000});

	TweenLite.set(screenA, {autoAlpha:0, x:-1700});
	TweenLite.set(screenC, {autoAlpha:0, x:1700});
	TweenLite.set(screen1, {autoAlpha:0});
	TweenLite.set(screen2, {autoAlpha:0});
	TweenLite.set(screen3, {autoAlpha:0});
	TweenLite.set(screen4, {autoAlpha:0});
	TweenLite.set(screen5, {autoAlpha:0});
	TweenLite.set(screen6, {autoAlpha:0});
	TweenLite.set(screen7, {autoAlpha:0});
	TweenLite.set(screen8, {autoAlpha:0});
	TweenLite.set(screen9, {autoAlpha:0});
	TweenLite.set(screen10, {autoAlpha:0});
	TweenLite.set(screen11, {autoAlpha:0});
	TweenLite.set(screen12, {autoAlpha:0});

	TweenLite.set(navback, {autoAlpha:0});
	TweenLite.set(navback2, {autoAlpha:0});

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

	// TweenLite.set(sfdmBannerText2, {autoAlpha:0});

	TweenLite.set(ttlBrief, {autoAlpha:0});
	TweenLite.set(ttlChrono, {autoAlpha:0});
	TweenLite.set(ttlCateg, {autoAlpha:0});
	TweenLite.set(ttlAlpha, {autoAlpha:0});

	$(document).on('pointermove', function(event) {
            event.preventDefault();
    });




function setHoverAbout() {
	menuAbout
		.off('mouseover mouseleave mousedown mouseup')
		.on({
			mouseover: function(){
			
			TweenLite.to(menuAbout, .2, { scaleX:1.05, scaleY:1.05});
			},

			mouseleave: function(){
			TweenLite.to(menuAbout, .2, { scaleX:1, scaleY:1});
			},


			mousedown: function(){
			TweenLite.to(menuAbout, .15, {scaleX:.97, scaleY:.97, ease:"easeOutExpo"});
			},

			mouseup: function(){

			setTimeout( function(){
			$(mainTemplate).css('z-index', 0);}, 200);

			TweenLite.to(menuAbout, .35, { delay:.25, scaleX:1, scaleY: 1, ease:"easeInQuart"});	
			TweenLite.to(navback2, .5, {autoAlpha:.6});
			TweenLite.to(topCover, .5, { x:0, y:-140, autoAlpha:1, ease:"easeOutExpo"});	
			TweenLite.to(bottomCover, .9, { delay:0, x:0, y:800, autoAlpha:1, ease:"easeOutExpo"});
			TweenLite.to(bottomCover, .45, { delay:.2, autoAlpha:0});
			TweenLite.to(clip, .85, { x:0, y:0, autoAlpha:1, ease:"easeOutQuint"});
			TweenLite.to(screenA, .85, { x:0, autoAlpha:1, ease:"easeOutQuint"});

			$(this).unbind("mouseover mouseleave");
			$(setHoverNavback2).bind("mouseover mouseleave");
    	}
        });
	}

	$(menuAbout).click(function(){
   	setHoverAbout();
	});
	setHoverAbout();


function setHoverContact() {
	menuContact
		.off('mouseover mouseleave mousedown mouseup')
		.on({
			mouseover: function(){
			
			TweenLite.to(menuContact, .2, { scaleX:1.05, scaleY:1.05});
			},

			mouseleave: function(){
			TweenLite.to(menuContact, .2, { scaleX:1, scaleY:1});
			},


			mousedown: function(){
			TweenLite.to(menuContact, .15, {scaleX:.97, scaleY:.97, ease:"easeOutExpo"});
			},

			mouseup: function(){

			setTimeout( function(){
			$(mainTemplate).css('z-index', 0);}, 200);

			TweenLite.to(menuContact, .35, { delay:.25, scaleX:1, scaleY: 1, ease:"easeInQuart"});	
			TweenLite.to(navback2, .5, {autoAlpha:.6});
			TweenLite.to(topCover, .5, { x:0, y:-140, autoAlpha:1, ease:"easeOutExpo"});	
			TweenLite.to(bottomCover, .9, { delay:0, x:0, y:800, autoAlpha:1, ease:"easeOutExpo"});
			TweenLite.to(bottomCover, .45, { delay:.2, autoAlpha:0});
			TweenLite.to(clip, .85, { x:0, y:0, autoAlpha:1, ease:"easeOutQuint"});
			TweenLite.to(qcUpdate, .85, { x:0, y:0, autoAlpha:1, ease:"easeOutQuint"});
			TweenLite.to(screenC, .85, { x:0, autoAlpha:1, ease:"easeOutQuint"});


			$(this).unbind("mouseover mouseleave");
			$(setHoverNavback2).bind("mouseover mouseleave");
    	}
        });
	}

	$(menuContact).click(function(){
   	setHoverContact();
	});
	setHoverContact();



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

			TweenLite.to(qcUpdate, .5, { autoAlpha:0, ease:"easeInQuart"});
			TweenLite.to(qcWelcome, .5, { autoAlpha:0, ease:"easeInQuart"});
			TweenLite.to(bestView, .5, { autoAlpha:0, ease:"easeInQuart"});

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

			TweenLite.to(qcUpdate, .5, { autoAlpha:0, ease:"easeInQuart"});
			TweenLite.to(qcWelcome, .5, { autoAlpha:0, ease:"easeInQuart"});
			TweenLite.to(bestView, .5, { autoAlpha:0, ease:"easeInQuart"});

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

			TweenLite.to(qcUpdate, .5, { autoAlpha:0, ease:"easeInQuart"});
			TweenLite.to(qcWelcome, .5, { autoAlpha:0, ease:"easeInQuart"});
			TweenLite.to(bestView, .5, { autoAlpha:0, ease:"easeInQuart"});

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

			var prjBnSFDMTemp2 = $('#frame2').contents().find(".projectBannerSfdm.btempSfdm2");
			TweenLite.to(prjBnSFDMTemp2, 0, {autoAlpha:0, ease:"easeOutExpo"});

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

			var prjBnTemp = $('#frame2').contents().find(".projectBannerTemp");
			TweenLite.to(prjBnTemp, .35, { delay:0, x:0, y:600, autoAlpha:0, ease:"easeOutExpo"});

			var prjBnSFDMTemp2 = $('#frame2').contents().find(".projectBannerSfdm.btempSfdm2");
			TweenLite.to(prjBnSFDMTemp2, .35, {autoAlpha:1, ease:"easeOutExpo"});

			var briefSfdm = $('#frame2').contents().find(".projectBriefContainer");
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

			var logoSlrv = $('#frame3').contents().find(".projectLogo.Lslrv");
			TweenLite.to(logoSlrv, .6, { delay:.18, scale:1.2, x:40,y:-105, autoAlpha:1, ease:"easeOutExpo"});

			var desSlrv = $('#frame3').contents().find("#btSlrv");
			TweenLite.to(desSlrv, .6, { delay:.18, y:-100, autoAlpha:1, ease:"easeOutExpo"});


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



function setHoverCO2W() {
	tabco2w
		.off('mouseover mouseleave mousedown click')
		.on({
			mouseover: function(){
			TweenLite.to(clip, .85, { x:0, y:0, autoAlpha:1, ease:"easeOutQuint"});
			TweenLite.to(screen4, .85, { autoAlpha:1, ease:"easeOutQuint"});
			TweenLite.to(tabco2w, .2, { scaleX:1.05, scaleY:1.05});
			},

			mouseleave: function(){
			TweenLite.to(clip, .4, { x:850, y:0, autoAlpha:0, ease:"easeOutQuint"});	
			TweenLite.to(screen4, .4, { autoAlpha:0, ease:"easeOutQuint"});
			TweenLite.to(tabco2w, .2, { scaleX:1, scaleY:1});
			},

			mousedown: function(){
			TweenLite.to(tabco2w, .15, {scaleX:.97, scaleY:.97, ease:"easeOutExpo"});

			// $(this).unbind("mouseover mouseleave");
			},

			click: function(){

			var logoCo2w = $('#frame4').contents().find(".projectLogo.Lco2w");
			TweenLite.to(logoCo2w, .6, { delay:.18, y:-100, autoAlpha:1, ease:"easeOutExpo"});

			var desCo2w = $('#frame4').contents().find("#btCo2w");
			TweenLite.to(desCo2w, .6, { delay:.18, y:-100, autoAlpha:1, ease:"easeOutExpo"});

			var briefCo2w = $('#frame4').contents().find("#bbco2w");
			TweenLite.to(briefCo2w, .6, { delay:.18, y:835, autoAlpha:1, ease:"easeOutExpo"});

			setTimeout( function(){

			$(mainTemplate).css('z-index', 0);}, 200);

			TweenLite.to(tabco2w, .35, { delay:.4, scaleX:1, scaleY: 1, ease:"easeInQuart"});	
			TweenLite.to(navback, .5, {delay:.15, autoAlpha:.6});
			TweenLite.to(topCover, .5, { delay:.15, x:0, y:-140, autoAlpha:1, ease:"easeOutExpo"});	
			TweenLite.to(bottomCover, .9, { delay:.15, x:0, y:800, autoAlpha:1, ease:"easeOutExpo"});
			TweenLite.to(bottomCover, .45, { delay:.35, autoAlpha:0});
			
			$(tabco2w).unbind("mouseover mouseleave");
			$(setHoverNavback).bind("mouseover mouseleave");
    	}
        });
	}

	$(tabco2w).click(function(){
   	setHoverCO2W();
	});
	setHoverCO2W();



function setHoverFLAR() {
	tabflar
		.off('mouseover mouseleave mousedown click')
		.on({
			mouseover: function(){
			TweenLite.to(clip, .85, { x:0, y:0, autoAlpha:1, ease:"easeOutQuint"});
			TweenLite.to(screen5, .85, { autoAlpha:1, ease:"easeOutQuint"});
			TweenLite.to(tabflar, .2, { scaleX:1.05, scaleY:1.05});
			},

			mouseleave: function(){
			TweenLite.to(clip, .4, { x:850, y:0, autoAlpha:0, ease:"easeOutQuint"});	
			TweenLite.to(screen5, .4, { autoAlpha:0, ease:"easeOutQuint"});
			TweenLite.to(tabflar, .2, { scaleX:1, scaleY:1});
			},

			mousedown: function(){
			TweenLite.to(tabflar, .15, {scaleX:.97, scaleY:.97, ease:"easeOutExpo"});

			// $(this).unbind("mouseover mouseleave");
			},

			click: function(){
			setTimeout( function(){

			$(mainTemplate).css('z-index', 0);}, 200);

			TweenLite.to(tabflar, .35, { delay:.4, scaleX:1, scaleY: 1, ease:"easeInQuart"});	
			TweenLite.to(navback, .5, {delay:.15, autoAlpha:.6});
			TweenLite.to(topCover, .5, { delay:.15, x:0, y:-140, autoAlpha:1, ease:"easeOutExpo"});	
			TweenLite.to(bottomCover, .9, { delay:.15, x:0, y:800, autoAlpha:1, ease:"easeOutExpo"});
			TweenLite.to(bottomCover, .45, { delay:.35, autoAlpha:0});
			
			$(tabflar).unbind("mouseover mouseleave");
			$(setHoverNavback).bind("mouseover mouseleave");
    	}
        });
	}

	$(tabflar).click(function(){
   	setHoverFLAR();
	});
	setHoverFLAR();


function setHoverHTWR() {
	tabhtwr
		.off('mouseover mouseleave mousedown click')
		.on({
			mouseover: function(){
			TweenLite.to(clip, .85, { x:0, y:0, autoAlpha:1, ease:"easeOutQuint"});
			TweenLite.to(screen6, .85, { autoAlpha:1, ease:"easeOutQuint"});
			TweenLite.to(tabhtwr, .2, { scaleX:1.05, scaleY:1.05});
			},

			mouseleave: function(){
			TweenLite.to(clip, .4, { x:850, y:0, autoAlpha:0, ease:"easeOutQuint"});	
			TweenLite.to(screen6, .4, { autoAlpha:0, ease:"easeOutQuint"});
			TweenLite.to(tabhtwr, .2, { scaleX:1, scaleY:1});
			},

			mousedown: function(){
			TweenLite.to(tabhtwr, .15, {scaleX:.97, scaleY:.97, ease:"easeOutExpo"});

			// $(this).unbind("mouseover mouseleave");
			},

			click: function(){
			setTimeout( function(){

			$(mainTemplate).css('z-index', 0);}, 200);

			TweenLite.to(tabhtwr, .35, { delay:.4, scaleX:1, scaleY: 1, ease:"easeInQuart"});	
			TweenLite.to(navback, .5, {delay:.15, autoAlpha:.6});
			TweenLite.to(topCover, .5, { delay:.15, x:0, y:-140, autoAlpha:1, ease:"easeOutExpo"});	
			TweenLite.to(bottomCover, .9, { delay:.15, x:0, y:800, autoAlpha:1, ease:"easeOutExpo"});
			TweenLite.to(bottomCover, .45, { delay:.35, autoAlpha:0});
			
			$(tabhtwr).unbind("mouseover mouseleave");
			$(setHoverNavback).bind("mouseover mouseleave");
    	}
        });
	}

	$(tabhtwr).click(function(){
   	setHoverHTWR();
	});
	setHoverHTWR();


function setHoverRICE() {
	tabrice
		.off('mouseover mouseleave mousedown click')
		.on({
			mouseover: function(){
			TweenLite.to(clip, .85, { x:0, y:0, autoAlpha:1, ease:"easeOutQuint"});
			TweenLite.to(screen7, .85, { autoAlpha:1, ease:"easeOutQuint"});
			TweenLite.to(tabrice, .2, { scaleX:1.05, scaleY:1.05});
			},

			mouseleave: function(){
			TweenLite.to(clip, .4, { x:850, y:0, autoAlpha:0, ease:"easeOutQuint"});	
			TweenLite.to(screen7, .4, { autoAlpha:0, ease:"easeOutQuint"});
			TweenLite.to(tabrice, .2, { scaleX:1, scaleY:1});
			},

			mousedown: function(){
			TweenLite.to(tabrice, .15, {scaleX:.97, scaleY:.97, ease:"easeOutExpo"});

			// $(this).unbind("mouseover mouseleave");
			},

		
			mouseup: function(){

			// var prjBnTemp2 = $('#frame7').contents().find(".projectBannerTemp");
			// TweenLite.to(prjBnTemp2, .35, { delay:0, x:0, y:600, autoAlpha:0, ease:"easeOutExpo"});

			var briefRice = $('#frame7').contents().find(".projectBriefContainer");
			TweenLite.to(briefRice, .35, { delay:0, x:0, y:400, autoAlpha:0, ease:"easeOutExpo"});

			setTimeout( function(){
			$(mainTemplate).css('z-index', 0);}, 200);

			TweenLite.to(tabrice, .35, { delay:.25, scaleX:1, scaleY: 1, ease:"easeInQuart"});	
			TweenLite.to(navback, .5, {autoAlpha:.6});
			TweenLite.to(topCover, .5, { x:0, y:-140, autoAlpha:1, ease:"easeOutExpo"});	
			TweenLite.to(bottomCover, .9, { delay:0, x:0, y:800, autoAlpha:1, ease:"easeOutExpo"});
			TweenLite.to(bottomCover, .45, { delay:.2, autoAlpha:0});

			$(this).unbind("mouseover mouseleave");
			$(setHoverNavback).bind("mouseover mouseleave");
    	}
        });
	}

	$(tabrice).click(function(){
   	setHoverRICE();
	});
	setHoverRICE();


function setHoverBATN() {
	tabbatn
		.off('mouseover mouseleave mousedown click')
		.on({
			mouseover: function(){

			var briefBatn = $('#frame8').contents().find(".projectBriefBatn");
			TweenLite.to(briefBatn, .0, {y:-590, autoAlpha:1, ease:"easeOutExpo"});

			TweenLite.to(clip, .85, { x:0, y:0, autoAlpha:1, ease:"easeOutQuint"});
			TweenLite.to(screen8, .85, { autoAlpha:1, ease:"easeOutQuint"});
			TweenLite.to(tabbatn, .2, { scaleX:1.05, scaleY:1.05});
			},

			mouseleave: function(){
			TweenLite.to(clip, .4, { x:850, y:0, autoAlpha:0, ease:"easeOutQuint"});	
			TweenLite.to(screen8, .4, { autoAlpha:0, ease:"easeOutQuint"});
			TweenLite.to(tabbatn, .2, { scaleX:1, scaleY:1});
			},

			mousedown: function(){
			TweenLite.to(tabbatn, .15, {scaleX:.97, scaleY:.97, ease:"easeOutExpo"});

			// $(this).unbind("mouseover mouseleave");
			},

			click: function(){
			setTimeout( function(){

			var briefBatn = $('#frame8').contents().find(".projectBriefBatn");
			TweenLite.to(briefBatn, .5, {y:0, autoAlpha:1, ease:"easeOutExpo"});

			$(mainTemplate).css('z-index', 0);}, 200);

			TweenLite.to(tabbatn, .35, { delay:.4, scaleX:1, scaleY: 1, ease:"easeInQuart"});	
			TweenLite.to(navback, .5, {delay:.15, autoAlpha:.6});
			TweenLite.to(topCover, .5, { delay:.15, x:0, y:-140, autoAlpha:1, ease:"easeOutExpo"});	
			TweenLite.to(bottomCover, .9, { delay:.15, x:0, y:800, autoAlpha:1, ease:"easeOutExpo"});
			TweenLite.to(bottomCover, .45, { delay:.35, autoAlpha:0});
			
			$(tabbatn).unbind("mouseover mouseleave");
			$(setHoverNavback).bind("mouseover mouseleave");
    	}
        });
	}

	$(tabbatn).click(function(){
   	setHoverBATN();
	});
	setHoverBATN();

function setHoverGS20() {
	tabgs20
		.off('mouseover mouseleave mousedown click')
		.on({
			mouseover: function(){
			TweenLite.to(clip, .85, { x:0, y:0, autoAlpha:1, ease:"easeOutQuint"});
			TweenLite.to(screen9, .85, { autoAlpha:1, ease:"easeOutQuint"});
			TweenLite.to(tabgs20, .2, { scaleX:1.05, scaleY:1.05});
			},

			mouseleave: function(){
			TweenLite.to(clip, .4, { x:850, y:0, autoAlpha:0, ease:"easeOutQuint"});	
			TweenLite.to(screen9, .4, { autoAlpha:0, ease:"easeOutQuint"});
			TweenLite.to(tabgs20, .2, { scaleX:1, scaleY:1});
			},

			mousedown: function(){
			TweenLite.to(tabgs20, .15, {scaleX:.97, scaleY:.97, ease:"easeOutExpo"});

			// $(this).unbind("mouseover mouseleave");
			},

			click: function(){
			setTimeout( function(){

			$(mainTemplate).css('z-index', 0);}, 200);

			TweenLite.to(tabgs20, .35, { delay:.4, scaleX:1, scaleY: 1, ease:"easeInQuart"});	
			TweenLite.to(navback, .5, {delay:.15, autoAlpha:.6});
			TweenLite.to(topCover, .5, { delay:.15, x:0, y:-140, autoAlpha:1, ease:"easeOutExpo"});	
			TweenLite.to(bottomCover, .9, { delay:.15, x:0, y:800, autoAlpha:1, ease:"easeOutExpo"});
			TweenLite.to(bottomCover, .45, { delay:.35, autoAlpha:0});
			
			$(tabgs20).unbind("mouseover mouseleave");
			$(setHoverNavback).bind("mouseover mouseleave");
    	}
        });
	}

	$(tabgs20).click(function(){
   	setHoverGS20();
	});
	setHoverGS20();

function setHoverKYRT() {
	tabkyrt
		.off('mouseover mouseleave mousedown click')
		.on({
			mouseover: function(){
			TweenLite.to(clip, .85, { x:0, y:0, autoAlpha:1, ease:"easeOutQuint"});
			TweenLite.to(screen10, .85, { autoAlpha:1, ease:"easeOutQuint"});
			TweenLite.to(tabkyrt, .2, { scaleX:1.05, scaleY:1.05});
			},

			mouseleave: function(){
			TweenLite.to(clip, .4, { x:850, y:0, autoAlpha:0, ease:"easeOutQuint"});	
			TweenLite.to(screen10, .4, { autoAlpha:0, ease:"easeOutQuint"});
			TweenLite.to(tabkyrt, .2, { scaleX:1, scaleY:1});
			},

			mousedown: function(){
			TweenLite.to(tabkyrt, .15, {scaleX:.97, scaleY:.97, ease:"easeOutExpo"});

			// $(this).unbind("mouseover mouseleave");
			},

			click: function(){
			
			var logoKyrt = $('#frame10').contents().find("#projectLogoTextkyrt");
			TweenLite.to(logoKyrt, .6, { delay:.18, x:305, y:-100, autoAlpha:1, ease:"easeOutExpo"});

			var desKyrt = $('#frame10').contents().find("#btKyrt");
			TweenLite.to(desKyrt, .6, { delay:.18, x:280, y:-100, autoAlpha:1, ease:"easeOutExpo"});

			setTimeout( function(){

			$(mainTemplate).css('z-index', 0);}, 200);

			TweenLite.to(tabkyrt, .35, { delay:.4, scaleX:1, scaleY: 1, ease:"easeInQuart"});	
			TweenLite.to(navback, .5, {delay:.15, autoAlpha:.6});
			TweenLite.to(topCover, .5, { delay:.15, x:0, y:-140, autoAlpha:1, ease:"easeOutExpo"});	
			TweenLite.to(bottomCover, .9, { delay:.15, x:0, y:800, autoAlpha:1, ease:"easeOutExpo"});
			TweenLite.to(bottomCover, .45, { delay:.35, autoAlpha:0});
			
			$(tabkyrt).unbind("mouseover mouseleave");
			$(setHoverNavback).bind("mouseover mouseleave");
    	}
        });
	}

	$(tabkyrt).click(function(){
   	setHoverKYRT();
	});
	setHoverKYRT();


function setHoverUVIA() {
	tabuvia
		.off('mouseover mouseleave mousedown click')
		.on({
			mouseover: function(){
			TweenLite.to(clip, .85, { x:0, y:0, autoAlpha:1, ease:"easeOutQuint"});
			TweenLite.to(screen11, .85, { autoAlpha:1, ease:"easeOutQuint"});
			TweenLite.to(tabuvia, .2, { scaleX:1.05, scaleY:1.05});
			},

			mouseleave: function(){
			TweenLite.to(clip, .4, { x:850, y:0, autoAlpha:0, ease:"easeOutQuint"});	
			TweenLite.to(screen11, .4, { autoAlpha:0, ease:"easeOutQuint"});
			TweenLite.to(tabuvia, .2, { scaleX:1, scaleY:1});
			},

			mousedown: function(){
			TweenLite.to(tabuvia, .15, {scaleX:.97, scaleY:.97, ease:"easeOutExpo"});

			// $(this).unbind("mouseover mouseleave");
			},

			click: function(){
			
			var bannerUvia = $('#frame11').contents().find(".projectBanner.uvia");
			TweenLite.to(bannerUvia, .6, { delay:.18, y:-60, autoAlpha:1, ease:"easeOutExpo"});

			var briefUvia = $('#frame11').contents().find("#bbuvia");
			TweenLite.to(briefUvia, .6, { delay:.18, y:100, autoAlpha:1, ease:"easeOutExpo"});

			setTimeout( function(){

			$(mainTemplate).css('z-index', 0);}, 200);

			TweenLite.to(tabuvia, .35, { delay:.4, scaleX:1, scaleY: 1, ease:"easeInQuart"});	
			TweenLite.to(navback, .5, {delay:.15, autoAlpha:.6});
			TweenLite.to(topCover, .5, { delay:.15, x:0, y:-140, autoAlpha:1, ease:"easeOutExpo"});	
			TweenLite.to(bottomCover, .9, { delay:.15, x:0, y:800, autoAlpha:1, ease:"easeOutExpo"});
			TweenLite.to(bottomCover, .45, { delay:.35, autoAlpha:0});
			
			$(tabuvia).unbind("mouseover mouseleave");
			$(setHoverNavback).bind("mouseover mouseleave");
    	}
        });
	}

	$(tabuvia).click(function(){
   	setHoverUVIA();
	});
	setHoverUVIA();



function setHoverMISC() {
	tabmisc
		.off('mouseover mouseleave mousedown click')
		.on({
			mouseover: function(){
			TweenLite.to(clip, .85, { x:0, y:0, autoAlpha:1, ease:"easeOutQuint"});
			TweenLite.to(screen12, .85, { autoAlpha:1, ease:"easeOutQuint"});
			TweenLite.to(tabmisc, .2, { scaleX:1.05, scaleY:1.05});
			},

			mouseleave: function(){
			TweenLite.to(clip, .4, { x:850, y:0, autoAlpha:0, ease:"easeOutQuint"});	
			TweenLite.to(screen12, .4, { autoAlpha:0, ease:"easeOutQuint"});
			TweenLite.to(tabmisc, .2, { scaleX:1, scaleY:1});
			},

			mousedown: function(){
			TweenLite.to(tabmisc, .15, {scaleX:.97, scaleY:.97, ease:"easeOutExpo"});

			// $(this).unbind("mouseover mouseleave");
			},

			click: function(){
			
			var bannerMisc = $('#frame12').contents().find(".projectBanner.misc");
			TweenLite.to(bannerMisc, .6, { delay:.18, y:-50, autoAlpha:1, ease:"easeOutExpo"});

			setTimeout( function(){

			$(mainTemplate).css('z-index', 0);}, 200);

			TweenLite.to(tabmisc, .35, { delay:.4, scaleX:1, scaleY: 1, ease:"easeInQuart"});	
			TweenLite.to(navback, .5, {delay:.15, autoAlpha:.6});
			TweenLite.to(topCover, .5, { delay:.15, x:0, y:-140, autoAlpha:1, ease:"easeOutExpo"});	
			TweenLite.to(bottomCover, .9, { delay:.15, x:0, y:800, autoAlpha:1, ease:"easeOutExpo"});
			TweenLite.to(bottomCover, .45, { delay:.35, autoAlpha:0});
			
			$(tabmisc).unbind("mouseover mouseleave");
			$(setHoverNavback).bind("mouseover mouseleave");
    	}
        });
	}

	$(tabmisc).click(function(){
   	setHoverMISC();
	});
	setHoverMISC();

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
				$(setHoverCO2W).bind("mouseover mouseleave");
				$(setHoverFLAR).bind("mouseover mouseleave");
				$(setHoverHTWR).bind("mouseover mouseleave");
				$(setHoverRICE).bind("mouseover mouseleave");
				$(setHoverBATN).bind("mouseover mouseleave");
				$(setHoverGS20).bind("mouseover mouseleave");
				$(setHoverKYRT).bind("mouseover mouseleave");
				$(setHoverUVIA).bind("mouseover mouseleave");
				$(setHoverMISC).bind("mouseover mouseleave");

				setTimeout( function(){
				$('#frame1').attr('src', $('#frame1').attr('src')); contentWindow.scrollTo(0,0);},
				200)
				setTimeout( function(){
				$('#frame2').attr('src', $('#frame2').attr('src')); contentWindow.scrollTo(0,0);},
				200)
				setTimeout( function(){
				$('#frame3').attr('src', $('#frame3').attr('src')); contentWindow.scrollTo(0,0);},
				200)
				setTimeout( function(){
				$('#frame4').attr('src', $('#frame4').attr('src')); contentWindow.scrollTo(0,0);},
				200)
				setTimeout( function(){
				$('#frame5').attr('src', $('#frame5').attr('src')); contentWindow.scrollTo(0,0);},
				200)
				setTimeout( function(){
				$('#frame6').attr('src', $('#frame6').attr('src')); contentWindow.scrollTo(0,0);},
				200)
				setTimeout( function(){
				$('#frame7').attr('src', $('#frame7').attr('src')); contentWindow.scrollTo(0,0);},
				200)
				setTimeout( function(){
				$('#frame8').attr('src', $('#frame8').attr('src')); contentWindow.scrollTo(0,0);},
				200)
				setTimeout( function(){
				$('#frame9').attr('src', $('#frame9').attr('src')); contentWindow.scrollTo(0,0);},
				200)
				setTimeout( function(){
				$('#frame10').attr('src', $('#frame10').attr('src')); contentWindow.scrollTo(0,0);},
				200)
				setTimeout( function(){
				$('#frame11').attr('src', $('#frame11').attr('src')); contentWindow.scrollTo(0,0);},
				200)
				setTimeout( function(){
				$('#frame12').attr('src', $('#frame12').attr('src')); contentWindow.scrollTo(0,0);},
				200)


			}

			
        });
	}

	$(navback).click(function(){
   	setHoverNavback();
	});
	setHoverNavback();



			$(document).ready(function() {
				$(window).scroll(function(){
					$('*[class^="prlx"]').each(function(r){
						var pos = $(this).offset().top;
						var scrolled = $(window).scrollTop();
				    	$('*[class^="prlx"]').css('top', -(scrolled * 0.5) + 'px');			
				    });
				});
			});


function setHoverNavback2() {
	navback2
		.off('mouseover mouseleave mousedown mouseup')
		.on({
			mouseover: function(){

				TweenLite.to(navback2, .2, { scaleX:1.05, scaleY:1.05});
				},

			mouseleave: function(){

				TweenLite.to(navback2, .2, { scaleX:1, scaleY:1});
				},

			mousedown: function(){
				TweenLite.to(navback2, .175, {scaleX:1, scaleY:1, ease:"easeOutExpo"});

				$(this).unbind("mouseover mouseleave");
				},

			mouseup: function(){
			setTimeout( function(){
				
				$(mainTemplate).css('z-index', 50);}, 200);
				TweenLite.to(navback2, .1, {autoAlpha:0});
				TweenLite.to(screen0, .5, {autoAlpha:0});
				TweenLite.to(clip, .5, { x:650, y:0, autoAlpha:0, ease:"easeOutQuint"});	
				TweenLite.to(topCover, .35, {x:0, y:0, delay:.05, ease:"easeOutExpo"});
				TweenLite.to(bottomCover, .35, {x:0, y:0, delay:.05, autoAlpha:1, ease:"easeOutExpo"});

				TweenLite.set(screenA, {delay:.2, autoAlpha:0, x:-1700});

				$(setHoverSJVC).bind("mouseover mouseleave");
				$(setHoverSFDM).bind("mouseover mouseleave");
				$(setHoverSLRV).bind("mouseover mouseleave");
				$(setHoverCO2W).bind("mouseover mouseleave");
				$(setHoverFLAR).bind("mouseover mouseleave");
				$(setHoverHTWR).bind("mouseover mouseleave");
				$(setHoverRICE).bind("mouseover mouseleave");
				$(setHoverBATN).bind("mouseover mouseleave");
				$(setHoverGS20).bind("mouseover mouseleave");
				$(setHoverKYRT).bind("mouseover mouseleave");
				$(setHoverUVIA).bind("mouseover mouseleave");
				$(setHoverMISC).bind("mouseover mouseleave");

				setTimeout( function(){
				$('#frame0').attr('src', $('#frame0').attr('src')); contentWindow.scrollTo(0,0);},
				200)
			}
        });
	}

	$(navback2).click(function(){
   	setHoverNavback2();
	});
	setHoverNavback2();



$(document).ready(function() {
$(window).scroll(function(){
$('*[class^="prlx"]').each(function(r){
	var pos = $(this).offset().top;
	var scrolled = $(window).scrollTop();
  	$('*[class^="prlx"]').css('top', -(scrolled * 0.5) + 'px');			
	    });
	});
});




});














