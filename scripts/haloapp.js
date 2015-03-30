$(document).ready(function(){

var pageW = $('.screen-container').width();
var pageH = $('.screen-container').height();
var screenOne = $('.screen.one');
var screenOneV1A = $('.screen.oneV1A');
var screenOneV2A = $('.screen.oneV2A');
var screenOneV1B = $('.screen.oneV1B');
var screenOneV2B = $('.screen.oneV2B');
var screenTwo = $('.screen.two');
var screenThree = $('.screen.three');
var buttonSetA = $('.buttonsetOne');
var buttonSetB = $('.buttonsetTwo');

//setup
TweenLite.set(screenOne, {autoAlpha:1, x:0});
TweenLite.set(screenTwo, {autoAlpha:0, x:0});
TweenLite.set(screenThree, {autoAlpha:0, x:-0});
TweenLite.set(screenOneV1A, {autoAlpha:0, y:150});
TweenLite.set(screenOneV2A, {autoAlpha:0, y:-150});
TweenLite.set(screenOneV1B, {autoAlpha:0, y:150});
TweenLite.set(screenOneV2B, {autoAlpha:0, y:-150});
TweenLite.set(buttonSetA, {autoAlpha:0, y:50});
TweenLite.set(buttonSetB, {autoAlpha:0, y:-50});

$(document).on('pointermove', function(event) {
            event.preventDefault();
        });

	var h1 = $('#h1');
    var h2 = $('#h2');
    var h3 = $('#h3');


    var textPTitle = "Halo Tracking App"
    var textBio = "Halo is an extension watch app for exisitng tracking devices and phones.";

    var profileTitle = document.querySelector('.profileTitle')
    profileTitle.innerHTML = textPTitle
    var profileBio = document.querySelector('.profileBio')
    profileBio.innerHTML = textBio


//action screenOne
		//swipe
		screenOne.on('swipemove', function(e){
		e.preventDefault();
		//swipe left
		if(e.angle > 160 && e.angle < 210 ){
			TweenLite.to(screenOne, .5, { delay:0, autoAlpha:0, x:-150, ease:"easeOutExpo"});				
			TweenLite.to(screenOne, 0, { delay:.5, autoAlpha:0, x:0});
			TweenLite.to(screenTwo, .6, { delay:.07, autoAlpha:1, x:0, ease:"easeOutExpo"});
		}
		//swipe right
		if(e.angle > 330 || e.angle < 40 ){
			TweenLite.to(screenOne, .5, { delay:0, autoAlpha:0, x:150, ease:"easeOutExpo"});					
			TweenLite.to(screenOne, 0, { delay:.5, autoAlpha:0, x:0});	
			TweenLite.to(screenThree, .6, { delay:.07, autoAlpha:1, x:0, ease:"easeOutExpo"});	
		}	

		//swipe up
		if(e.angle > 70 && e.angle < 120 ){
			TweenLite.to(screenOne, .8, { delay:0, autoAlpha:0, y:-150, ease:"easeOutExpo"});				
			TweenLite.to(screenOne, 0, { delay:.5, autoAlpha:0, y:-150});
			TweenLite.to(screenOneV1A, .4, { delay:.0, autoAlpha:1,y:0, ease:"easeOutExpo"});

			TweenLite.to(buttonSetA, .3, { delay:.1, autoAlpha:1,y:0, ease:"easeOutExpo"});
		}

		//swipe down
		if(e.angle > 210 && e.angle < 290 ){
			TweenLite.to(screenOne, .8, { delay:0, autoAlpha:0, y:150, ease:"easeOutExpo"});				
			TweenLite.to(screenOne, 0, { delay:.5, autoAlpha:0, y:150});
			TweenLite.to(screenOneV2A, .4, { delay:.0, autoAlpha:1,y:0, ease:"easeOutExpo"});
			TweenLite.to(buttonSetB, .3, { delay:.1, autoAlpha:1,y:0, ease:"easeOutExpo"});


		}
	});
//action screenOneV1A
		//swipe
		screenOneV1A.on('swipemove', function(e){
		e.preventDefault();
	
		//swipe down
		if(e.angle > 210 && e.angle < 290 ){
			TweenLite.to(screenOneV1A, .5, { delay:0, autoAlpha:0, y:200, ease:"easeOutExpo"});				
			TweenLite.to(screenOneV1A, 0, { delay:.5, autoAlpha:0, y:200});
			TweenLite.to(buttonSetA, 0, { delay:0, autoAlpha:1,y:50});
			TweenLite.to(screenOne, .4, { delay:.0, autoAlpha:1,y:0, ease:"easeOutExpo"});
		}
	});
//action screenOneV2A
		//swipe
		screenOneV2A.on('swipemove', function(e){
		e.preventDefault();
	
		//swipe up
		if(e.angle > 70 && e.angle < 120 ){
			TweenLite.to(screenOneV2A, .5, { delay:0, autoAlpha:0, y:-200, ease:"easeOutExpo"});				
			TweenLite.to(screenOneV2A, 0, { delay:.5, autoAlpha:0, y:-200});
			TweenLite.to(buttonSetB, 0, { delay:0, autoAlpha:1,y:-50});
			TweenLite.to(screenOne, .4, { delay:.0, autoAlpha:1,y:0, ease:"easeOutExpo"});
		}
	});


//action screenTwo
		//swipe
		screenTwo.on('swipemove', function(e){
		e.preventDefault();
		//swipe left
		if(e.angle > 160 && e.angle < 210 ){

			TweenLite.to(screenTwo, .5, { delay:.0, autoAlpha:0, x:-150, ease:"easeOutExpo"});						
			TweenLite.to(screenTwo, .0, { delay:.5, autoAlpha:0, x:0});
			/*optional transition TweenLite.to(screenThree, .0, { delay:0, autoAlpha:0, x:150}); */	
			TweenLite.to(screenThree, .6, { delay:.07, autoAlpha:1, x:0, ease:"easeOutExpo"});										
		}
		//swipe right
		if(e.angle > 330 || e.angle < 40 ){
			TweenLite.to(screenTwo, .5, { delay:.0, autoAlpha:0, x:150, ease:"easeOutExpo"});					
			TweenLite.to(screenTwo, .0, { delay:.5, autoAlpha:0, x:0});	

			TweenLite.to(screenOne, .6, { delay:.07, autoAlpha:1, x:0, ease:"easeOutExpo"});										
		}
			//swipe up
		if(e.angle > 70 && e.angle < 120 ){
			TweenLite.to(screenTwo, .8, { delay:0, autoAlpha:0, y:-200, ease:"easeOutExpo"});				
			TweenLite.to(screenTwo, 0, { delay:.5, autoAlpha:0, y:-200});
			TweenLite.to(screenOneV1B, .4, { delay:.0, autoAlpha:1,y:0, ease:"easeOutExpo"});
			TweenLite.to(buttonSetA, .3, { delay:.1, autoAlpha:1,y:0, ease:"easeOutExpo"});
		}

		//swipe down
		if(e.angle > 210 && e.angle < 290 ){
			TweenLite.to(screenTwo, .8, { delay:0, autoAlpha:0, y:200, ease:"easeOutExpo"});				
			TweenLite.to(screenTwo, 0, { delay:.5, autoAlpha:0, y:200});
			TweenLite.to(screenOneV2B, .4, { delay:.0, autoAlpha:1,y:0, ease:"easeOutExpo"});
			TweenLite.to(buttonSetB, .3, { delay:.1, autoAlpha:1,y:0, ease:"easeOutExpo"});
		}

	});
//action screenOneV1B
		//swipe
		screenOneV1B.on('swipemove', function(e){
		e.preventDefault();
	
		//swipe down
		if(e.angle > 210 && e.angle < 290 ){
			TweenLite.to(screenOneV1B, .8, { delay:0, autoAlpha:0, y:200, ease:"easeOutExpo"});				
			TweenLite.to(screenOneV1B, 0, { delay:.5, autoAlpha:0, y:200});
			TweenLite.to(buttonSetA, 0, { delay:0, autoAlpha:1,y:50});
			TweenLite.to(screenTwo, .4, { delay:.0, autoAlpha:1,y:0, ease:"easeOutExpo"});

		}
	});
//action screenOneV2B
		//swipe
		screenOneV2B.on('swipemove', function(e){
		e.preventDefault();
	
		//swipe up
		if(e.angle > 70 && e.angle < 120 ){
			TweenLite.to(screenOneV2B, .8, { delay:0, autoAlpha:0, y:-200, ease:"easeOutExpo"});				
			TweenLite.to(screenOneV2B, 0, { delay:.5, autoAlpha:0, y:-200});
			TweenLite.to(buttonSetB, 0, { delay:0, autoAlpha:1,y:-50});
			TweenLite.to(screenTwo, .4, { delay:.0, autoAlpha:1,y:0, ease:"easeOutExpo"});
		}
	});


//action screenThree
		//swipe
		screenThree.on('swipemove', function(e){
		e.preventDefault();

		//swipe left
		if(e.angle > 160 && e.angle < 210 ){
			TweenLite.to(screenThree, .5, { delay:.0, autoAlpha:0, x:-150, ease:"easeOutExpo"});						
			TweenLite.to(screenThree, .0, { delay:.5, autoAlpha:0, x:0});

			TweenLite.to(screenOne, .6, { delay:.07, autoAlpha:1, x:0, ease:"easeOutExpo"});										
		}
		//swipe right
		if(e.angle > 330 || e.angle < 40 ){
			TweenLite.to(screenThree, .5, { delay:.0, autoAlpha:0, x:150, ease:"easeOutExpo"});	
			TweenLite.to(screenThree, .0, { delay:.5, autoAlpha:0, x:0});					
			TweenLite.to(screenTwo, .6, { delay:.07, autoAlpha:1, x:0, ease:"easeOutExpo"});										
		}
	});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//halo ID screen/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
var haloID = {

    playBtn: $("#play"),
    card: $("#card"),
    cardBack: $("#cardBack"),
    

    init: function() {

        var self = this;
        this.playBtn.bind("click", function() {
            self.playAnimation();
        });

    },

    playAnimation: function() {

        var self = this;
        
        $("div:first", this.playBtn).removeClass("play_button").addClass("reverse_button");
        this.card.addClass('easeIn flipped');
        this.card.one('trans-end', function() {
            self.cardBack.removeClass('easeIn').addClass('easeOut show');   
         setTimeout(function() {
                self.reverse();
            }, 650);

        });

    },

    reverse: function() {

        var self = this;

        this.cardBack.addClass('easeIn').removeClass('easeOut show');
        this.cardBack.one('trans-end', function() {
            self.card.addClass('easeOut').removeClass('easeIn flipped');
            self.playBtn.bind("click", function() {
                self.playAnimation();
            });
            $("div:first", self.playBtn).removeClass("reverse_button").addClass("play_button");
        }); 

    }
};
haloID.init();


//jQuery event for transition ended event
$('*').live('webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd', function() {
    $(this).trigger('trans-end');
});


function detectTransformProperty() {
    var prefixes = 'transform WebkitTransform MozTransform oTransform msTransform'.split(' '),
        el = document.createElement('div'),
        index = 0,
        support = false;

    while (index < prefixes.length) {
        var prefix = prefixes[index++];
        if (document.createElement('div').style[prefix] != undefined) {
            return prefix
        };
    }

    return false;
};


});