/*global window: true, setTimeout: true, document: true, Swipe: true, mySwipe: true, $: true, PxLoader: true, PxLoaderImage: true, $f: true, matchMedia, setInterval, clearInterval */

var APP     = {};

var CONFIG  = {
  fadeSpeed : 500,
  slideSpeed : 500
};

var global = {
  fullpage : true,
  trigger : true
}

// var mq      = matchMedia("(max-width: 1047px)");

var loadingTimer;

(function () {
  "use strict";

  this.scroll_to_top_on_mobile_load   = function () {

    if ($('html').hasClass('touch')) {
      
      $(window).bind("load", function () {
        setTimeout(function () {
          window.scrollTo(0, 1);
        }, 0);
      });
    
    }

  };

  this.bind_section_change_events = function(){

    // bind the click events 

    var contentSegment = '.js-content-segment';

    $(contentSegment).on('click', function(){

      var text = "";
      
      if (typeof window.getSelection != "undefined") {
          text = window.getSelection().toString();
      } else if (typeof document.selection != "undefined" && document.selection.type == "Text") {
          text = document.selection.createRange().text;
      }
    
      if(text.length < 1){
        if( global.trigger === true){

          if( $('body').hasClass('white-down') && $('body').hasClass('mouse-up') ){
            $.fn.fullpage.moveSectionUp();
          }else{
            $.fn.fullpage.moveSectionDown();
          }

        }
      }

    });

    $('#fullpage').fullpage({
        //Navigation
        menu: false,
        lockAnchors: false,
        navigation: false,
        navigationPosition: 'right',

        //Scrolling
        css3: true,
        scrollingSpeed: 550,
        autoScrolling: true,
        fitToSection: true,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: true,
        loopTop: false,
        loopHorizontal: false,
        continuousVertical: false,
        scrollOverflow: false,
        touchSensitivity: 1,
        normalScrollElementTouchThreshold: 1,

        //Accessibility
        keyboardScrolling: true,

        //Design 
        verticalCentered: true,
        resize : false,
      

        //Custom selectors
        sectionSelector: '.js-content-segment',


        //events
        onLeave: function(index, nextIndex, direction){
          global.trigger = false;
        },
        afterLoad: function(anchorLink, index){
          global.trigger = true;
          APP.change_body_cursor($('.active').attr('data-class'));
          if( $('.active').hasClass('not-loaded') ){
            $('.active').removeClass('not-loaded');
          }
        },
        afterRender: function(){
        
        },
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){

        },
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}

    });


  };

  this.linkFix = function(){
    
    $('a').on('click', function(){
      event.stopPropagation();
    });

  };

  this.swiperPrev = function(){
    
    $('.swiper-button-prev').on('click', function(){
      event.preventDefault();
      event.stopPropagation();
    });

  };
    
  this.swiperNext = function(){
    
    $('.swiper-button-next').on('click', function(){
      event.preventDefault();
      event.stopPropagation();
    });

  };


  this.next_section_event = function(newSegment){

    if( global.allowNextSection === true){

      global.allowNextSection = false;
      global.allowScrollToNextSection = false;

      global.currentSegment = newSegment;
      global.currentPagePosition = $(window).height() * global.currentSegment;

      $("html, body").stop().animate({
        
        scrollTop : global.currentPagePosition
      
      }, CONFIG.scrollSpeed, function(){
        
        setTimeout(function(){
          global.allowNextSection = true;
        }, CONFIG.scrollSpeed);

        setTimeout(function(){
          global.allowScrollToNextSection = true;
        }, 500);
      
      });

    }
  
  };

  this.change_body_cursor = function(cla){

    $('body').removeClass();
    $('body').addClass(cla);

  };

  this.mouse_pos = function(){

    $(window).on('mousemove', function(event){
      
      var y = event.clientY;
      var $body = $('body');
      var half;
      var winHight = $(window).height();
      var mouseUp = 'mouse-up';
      var mouseDown = 'mouse-down';

      if( y < (winHight / 2)){
        half = mouseUp;
      }else{
        half = mouseDown;
      }
      
      if( !$body.hasClass(half) ){
        $body.removeClass(mouseUp).removeClass(mouseDown).addClass(half);
      }

    });

  };

  this.toyOne = function(){

    $(".copy--large-serif").each(function(){
      var $elm = $(this);
      // var words = $elm.text().split(" ");
   
      // $elm.empty();
      // $.each(words, function(i, v) {
      //   $elm.append($("<span>").text(v));
      // });
      
      $elm.children('span').on('mouseover', function(){

        var $word = $(this);

        $word.addClass('animated');

        setTimeout(function(){
          $word.removeClass('animated');
        },3000);

      });


    });


  };

  this.toyTwo = function(){

    $(".copy--large-serif").each(function(){
      var $elm = $(this);
      var words = $elm.text().split(" ");
   
      $elm.empty();
      $.each(words, function(i, v) {
        $elm.append($("<span>").text(v));
      });

      $elm.children('span').on('mouseover', function(){

        var $word = $(this);
        $word.addClass('one-animated');

        setTimeout(function(){
          $word.removeClass('one-animated');
        },2000);

      });


    });

  };

  this.toyThree = function(){

    $(".copy--large-serif").each(function(){
      var $elm = $(this);
      var words = $elm.text().split(" ");
   
      $elm.empty();
      $.each(words, function(i, v) {
        $elm.append($("<span>").text(v));
      });

      $elm.children('span').on('mouseover', function(){

        var $word = $(this);
        $word.addClass('rottate');

        setTimeout(function(){
          $word.removeClass('rottate');
        },2000);

      });


    });

  };

  this.toyFour = function(){

    $(".copy--large-serif").each(function(){
      var $elm = $(this);
      var words = $elm.text().split(" ");
   
      $elm.empty();
      $.each(words, function(i, v) {
        $elm.append($("<span>").text(v));
      });

      $elm.children('span').on('mouseover', function(){

        var $word = $(this);
        $word.addClass('rottate-two');

        setTimeout(function(){
          $word.removeClass('rottate-two');
        },2000);

      });


    });

  };


  this.toyFive = function(){

    var red = '#ff6670',
      green = '#00d590',
      yellow= '#ffde48',
      blue= '#5ea9fa',
      pink= '#ff85be';

    var intColour;

    var colours = [red, green, yellow, pink, blue]

    var canvas = document.getElementById("canvas");

    if ($(window).width() >= 879) {
      
      canvas.setAttribute('width', $(window).width());
      canvas.setAttribute('height', $(window).height());
    
    }else{

      canvas.setAttribute('width', $('.down-arrow-black').outerWidth());
      canvas.setAttribute('height', $('.down-arrow-black').outerHeight());
    }

    var context = canvas.getContext("2d");
    
    var clickX = new Array();
    var clickY = new Array();
    var clickDrag = new Array();
    var paint;


    function changeIntColour(){
      var rand = Math.floor(Math.random() * ( colours.length - 1));
      intColour = colours[rand];
      
      setTimeout(function(){
        changeIntColour();
      }, 1500);
    }

    changeIntColour();


    $('body').on('mousemove',function(e){

      var mouseX = e.pageX - this.offsetLeft;
      var mouseY = e.pageY - this.offsetTop;

      context.beginPath();
      context.arc(mouseX, mouseY, 250, 0, 2 * Math.PI, false);
      context.fillStyle = intColour;
      context.fill();

    });


    $('window').on('resize',function(e){

      if ($(window).width() >= 879) {
          canvas.setAttribute('width', $(window).width());
        canvas.setAttribute('height', $(window).height());
      }else{
        canvas.setAttribute('width', $('.down-arrow-black').outerWidth(true));
        canvas.setAttribute('height', $('.down-arrow-black').outerHeight(true) + 40);
      }

    });


    $('body').on('touchmove',function(e){

      var mouseX = e.originalEvent.touches[0].pageX - this.offsetLeft;
      var mouseY = e.originalEvent.touches[0].pageY - this.offsetTop;

      console.log(mouseX);

      context.beginPath();
      context.arc(mouseX, mouseY, 200, 0, 2 * Math.PI, false);
      context.fillStyle = intColour;
      context.fill();

    });


  };

  this.on_page_load_events = function () {

    if ($(window).width() >= 879) {
      APP.bind_section_change_events();
    }

    if( $('html').hasClass('toy-five')){
      APP.toyFive();
    }


  };

}).apply(APP);

$(document).ready(function () {

  APP.on_page_load_events();
  APP.swiperPrev();
  APP.swiperNext();
  APP.linkFix();

  if( $('html').hasClass('toy-one')){
    APP.toyOne();
  }

  if( $('html').hasClass('toy-two')){
    APP.toyTwo();
  }

  if( $('html').hasClass('toy-three')){
    APP.toyThree();
  }

  if( $('html').hasClass('toy-four')){
    APP.toyFour();
  }
  
  if( !$('html').hasClass('touch')){
    APP.mouse_pos();
  }
  
  $('body').removeClass('is-body-loading');

});

$(window).load(function () {

  if( $(window).width() < 879){
    global.fullpage = false;
    $('.not-loaded').removeClass('not-loaded');
  }
  window.scrollTo(0,0);

});

$(window).resize(function () {


  if( $(window).width() < 879 &&  global.fullpage === true){
    global.fullpage = false;
    $('.content--segment').removeAttr('style');
    $('.fp-tableCell').removeAttr('style');
    $.fn.fullpage.destroy();
    $('.not-loaded').removeClass('not-loaded');

  }else if ($(window).width() >= 879 &&  global.fullpage === false) {
    
    global.fullpage = true;
    window.scrollTo(0, 1);
    APP.bind_section_change_events();

  }



});