/*
 * Custom code goes here.
 * A template should always ship with an empty custom.js
 */
 
/* sticky header */

$(document).ready(function() {
    if ($(document).width() >= 100) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 0) {
                $('#header').addClass('fixed fadeInDown animated');
            } else {
                $('#header').removeClass('fixed fadeInDown animated');
            }
        });
    };
}); 

$(document).ready(function() {
var owl = $("#xs-zoom");
imagesLoaded(owl, function() {
  owl.owlCarousel({
      loop: false,
      responsive: {
        0: { items: 1}
        
      },
      dots: true,
       nav: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      margin:15
      });
  });
});


//section
/* review */
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("#ratep").on('click', function(event) {

   
    if (this.hash !== "") {
     
      event.preventDefault();

      var hash = this.hash;
       $('#tab1').removeClass('active');
    $('#tab2').removeClass('active');
    $('#tab3').removeClass('active');
    $('#description').removeClass('active in');
    $('#attachments').removeClass('active in');
    $('#product-details').removeClass('active in');
    $("#rv").addClass("active");
    $("#rate").addClass("active in")
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1500, function(){
   
        window.location.hash = hash;
      });
    } 
  });
});

/* loader */
 $(document).ready(function(){
     var o = $('#page-preloader');
     if (o.length > 0) {
         $(window).on('load', function() {
             $('#page-preloader').removeClass('visible');
         });
    }
 });


function w3_open() {
      document.getElementById("myOverlay").style.display = "block";
      $("#_desktop_top_menu").addClass("active");
      $("body").addClass("menu-active");
}
function w3_close() {
  document.getElementById("myOverlay").style.display = "none";
  $("#_desktop_top_menu").removeClass("active");
  $("body").removeClass("menu-active");
}

/* sidemenu */
function openNav() {
    $('body').addClass("active");
    document.getElementById("mySidenav").style.width = "300px";
    $('#mobile_top_menu_wrapper').addClass("dblock");
    $('#mobile_top_menu_wrapper').removeClass("dnone");
}
function closeNav() {
    $('body').removeClass("active");
    document.getElementById("mySidenav").style.width = "0";
    $('#mobile_top_menu_wrapper').addClass("dnone");
    $('#mobile_top_menu_wrapper').removeClass("dblock");
}
/* sidemenu over */

$(document).keyup(function(e) {
     if (e.keyCode == 27) { // escape key maps to keycode `27`
       $('body').removeClass("active");
    document.getElementById("mySidenav").style.width = "0";
    $('#mobile_top_menu_wrapper').addClass("dnone");
       }
});


//go to top
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });
});

/* list grid view */
$(document).ready(function(){
    listGrid();
});
(function($){var ls=window.localStorage;var supported;if(typeof ls=='undefined'||typeof window.JSON=='undefined'){supported=false;}else{supported=true;}
$.totalStorage=function(key,value,options){return $.totalStorage.impl.init(key,value);}
$.totalStorage.setItem=function(key,value){return $.totalStorage.impl.setItem(key,value);}
$.totalStorage.getItem=function(key){return $.totalStorage.impl.getItem(key);}
$.totalStorage.getAll=function(){return $.totalStorage.impl.getAll();}
$.totalStorage.deleteItem=function(key){return $.totalStorage.impl.deleteItem(key);}
$.totalStorage.impl={init:function(key,value){if(typeof value!='undefined'){return this.setItem(key,value);}else{return this.getItem(key);}},setItem:function(key,value){if(!supported){try{$.cookie(key,value);return value;}catch(e){console.log('Local Storage not supported by this browser. Install the cookie plugin on your site to take advantage of the same functionality. You can get it at https://github.com/carhartl/jquery-cookie');}}
var saver=JSON.stringify(value);ls.setItem(key,saver);return this.parseResult(saver);},getItem:function(key){if(!supported){try{return this.parseResult($.cookie(key));}catch(e){return null;}}
return this.parseResult(ls.getItem(key));},deleteItem:function(key){if(!supported){try{$.cookie(key,null);return true;}catch(e){return false;}}
ls.removeItem(key);return true;},getAll:function(){var items=new Array();if(!supported){try{var pairs=document.cookie.split(";");for(var i=0;i<pairs.length;i++){var pair=pairs[i].split('=');var key=pair[0];items.push({key:key,value:this.parseResult($.cookie(key))});}}catch(e){return null;}}else{for(var i in ls){if(i.length){items.push({key:i,value:this.parseResult(ls.getItem(i))});}}}
return items;},parseResult:function(res){var ret;try{ret=JSON.parse(res);if(ret=='true'){ret=true;}
if(ret=='false'){ret=false;}
if(parseFloat(ret)==ret&&typeof ret!="object"){ret=parseFloat(ret);}}catch(e){}
return ret;}}})(jQuery);



function listGrid()
{
  var view = $.totalStorage('display');

  if (!view && (typeof displayList != 'undefined') && displayList)
    view = 'list';

  if (view && view != 'grid')
    display(view);
  else
    $('.display').find('#wbgrid').addClass('selected');

  $(document).on('click', '#wbgrid', function(e){
    e.preventDefault();
    display('grid');
    $(this).parents("#products-list").find(".wb-product-grid .item-product").removeClass("fadeInRight");
    $(this).parents("#products-list").find(".wb-product-grid .item-product").addClass(" animated zoomIn"); 
  
  });

  $(document).on('click', '#wblist', function(e){
    e.preventDefault();
    display('list');
    $(this).parents("#products-list").find(".wb-product-list .item-product").addClass(" animated fadeInRight");
    $(this).parents("#products-list").find(".wb-product-list .item-product").removeClass(" zoomIn"); 

  });

}

function display(view)
{
  if (view == 'grid')
  {
    $('#js-product-list .product-thumbs').removeClass('wb-product-list').addClass('wb-product-grid row');
    $('.product-thumbs .item-product').removeClass('col-xs-12').addClass('col-xs-12 col-sm-6 col-md-4 col-xl-3 col-lg-3');
    $('.product-thumbs .item-product .wb-image-block').removeClass('col-lg-3 col-xl-3 col-md-4 col-sm-6 col-xs-12');
    $('.product-thumbs .item-product .wb-product-desc').removeClass('col-lg-9 col-xl-9 col-md-8 col-sm-6 col-xs-12');
    $('.display').find('#wbgrid').addClass('selected');
    $('.display').find('#wblist').removeAttr('class');
    $.totalStorage('display', 'grid');
  }
  else
  { 
    $('#js-product-list .product-thumbs').removeClass('wb-product-grid').addClass('wb-product-list row');
    $('.product-thumbs .item-product').removeClass('col-xs-12 col-sm-6 col-md-4 col-xl-3 col-lg-3').addClass('col-xs-12');
    $('.product-thumbs .item-product .wb-image-block').addClass('col-lg-3 col-xl-3 col-md-4 col-sm-6 col-xs-12');
    $('.product-thumbs .item-product .wb-product-desc').addClass('col-lg-9 col-xl-9 col-md-8 col-sm-6 col-xs-12');
    $('.display').find('#wblist').addClass('selected');
    $('.display').find('#wbgrid').removeAttr('class');
    $.totalStorage('display', 'list');
  }
}

$(document).ready(function() {
var owl = $("#owl-image-slider");
imagesLoaded(owl, function() {
  owl.owlCarousel({
        loop: true,
      autoplay:true,
      animateIn: 'fadeIn',
        animateOut: 'fadeOut',
      autoplayTimeout: 6000,
      responsive: {
        0: { items: 1}
      },
      dots: false,
       nav: true,
   navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      margin:30
      });
  });
});

$(document).ready(function() {
var owl = $("#testi");
imagesLoaded(owl, function() {
  owl.owlCarousel({
        loop: true,
      responsive: {
        0: { items: 1}
      },
      dots: true,
       nav: false,
   navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
      margin:0
      });
  });
});

$(document).ready(function() {
var owl = $("#owl-fea,#owl-best,#owl-related,#view-pro,#owl-special,#same-pro,#cross,#owl-new,#owl-rate");
imagesLoaded(owl, function() {
  owl.owlCarousel({
      loop: false,
      responsive: {
        0: { items: 1},
        320:{ items: 2, slideBy: 1},
        600:{ items: 3, slideBy: 1},
        700:{ items: 3, slideBy: 1},
        768:{ items: 3, slideBy: 1},
        992:{ items: 4, slideBy: 1},
        1200:{ items: 4, slideBy: 1},
        1410:{ items: 5, slideBy: 1}
        
      },
      dots: false,
       nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      margin:0
      });
  });
});


$(document).ready(function() {
var owl = $("#owl-add.product-images-home");
imagesLoaded(owl, function() {
  owl.owlCarousel({
      loop: false,
      responsive: {
        0: { items: 3},
        320:{ items: 3, slideBy: 1},
        480:{ items: 3, slideBy: 1},
        600:{ items: 4, slideBy: 1},
        768:{ items: 2, slideBy: 1},
        992:{ items: 2, slideBy: 1},
        1200:{ items: 3, slideBy: 1},
        1410:{ items: 3, slideBy: 1}
      },
      dots: false,
      nav: true,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      margin: 5
      });
  });
});

$('.img-thumb').click(function () {
     $(this).closest("article").find('.js-product-cover').attr("src",$(this).attr("data-image-large-src"));
       $(this).closest("article").find(".thumb").removeClass("selected"),$(this).addClass("selected");
});

$(document).ready(function() {
    var owl = $("#wb_cat_carousel");
    imagesLoaded(owl, function() {
      owl.owlCarousel({
          loop: false,
          autoplay:true,
          autoplayTimeout: 6000,
          responsive: {
            0: { items: 1},
            320:{ items: 1, slideBy: 1},
            412:{ items: 2, slideBy: 1},
            600:{ items: 3, slideBy: 1},
            768:{ items: 4, slideBy: 1},
            992:{ items: 5, slideBy: 1},
            1200:{ items: 6, slideBy: 1},
            1410:{ items: 7, slideBy: 1},
          1590:{ items: 7, slideBy: 1}
          },
          dots: false,
          autoplay:true,
           nav: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"> </i>'],
        margin:0
          });
      });
    });

//category page img
$(document).ready(function() {
    var owl = $("#subcat");
    imagesLoaded(owl, function() {
      owl.owlCarousel({
          loop: false,
          responsive: {
            0: { items: 3},
            360:{ items: 3, slideBy: 1},
            412:{ items: 3, slideBy: 1},
            600:{ items: 5, slideBy: 1},
            768:{ items: 4, slideBy: 1},
            992:{ items: 5, slideBy: 1},
            1200:{ items: 6, slideBy: 1},
          1410:{ items: 7, slideBy: 1}
          },
          dots: false,
          autoplay:false,
           nav: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"> </i>'],
        margin:20
          });
      });
    });

$(document).ready(function() {
var owl = $("#blog");
imagesLoaded(owl, function() {
  owl.owlCarousel({
      loop: true,
      autoplay:false,
      responsive: {
        0: { items: 1},
        600:{ items: 2, slideBy: 1},
        768:{ items: 2, slideBy: 1},
        992:{ items: 2, slideBy: 1},
        1200:{ items: 3, slideBy: 1},
        1650:{ items: 3, slideBy: 1}
        
      },
      dots: false,
       nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      margin:0
      });
  });
});

$(document).ready(function() {
var owl = $("#owl-logo");
imagesLoaded(owl, function() {
  owl.owlCarousel({
      loop: true,
      autoplay:true,
      responsive: {
        0: { items: 1},
        320:{ items: 2, slideBy: 1},
        500:{ items: 3, slideBy: 1},
        600:{ items: 3, slideBy: 1},
        768:{ items: 4, slideBy: 1},
        992:{ items: 5, slideBy: 1},
        1200:{ items: 6, slideBy: 1},
        1410:{ items: 7, slideBy: 1}
        
      },
      dots: false,
       nav: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      margin:30
      });
  });
});

/* language */

 if ($(window).width() <= 767) {
$('.user-info').click(function(event){
  if ($(".currency-selector")){
  $(".language-selector > ul").css('display', 'none');
  }
  if ($(".language-selector")){
  $(".currency-selector > ul").css('display', 'none');
  }
  $(this).toggleClass('active');
  event.stopPropagation();
  $(".user-down").slideToggle("fast");
  $(".language-selector").removeClass("open");
  $(".currency-selector").removeClass("open");
  return false;
  });
  $(".user-down").on("click", function (event) {
  event.stopPropagation();
  });
  $('.wishl').appendTo('.user-down');
  $('.hcom').appendTo('.user-down');
  $('#_mobile_currency_selector').appendTo('.user-down');
  $('#_mobile_language_selector').appendTo('.user-down');

  
  $(".currency-selector").click(function(){
  $(this).toggleClass('open');                    
  $( ".currency-selector > ul" ).slideToggle( "1500" ); 
  $(".language-selector > ul").slideUp("medium");
  $(".language-selector").removeClass('open');
  
  });
  
  $(".language-selector").click(function(){
  $(this).toggleClass('open');                          
  $( ".language-selector > ul" ).slideToggle( "1500" );    
  $(".currency-selector > ul").slideUp("medium");
  $(".currency-selector").removeClass('open');
  });
  };
// disabled
$('.wbblog_submit_btn').on("click",function(e) {
  e.preventDefault();
  if(!$(this).hasClass("disabled")){
    var data = new Object();
    $('[id^="wbblog_"]').each(function()
    {
      id = $(this).prop("id").replace("wbblog_", "");
      data[id] = $(this).val();
    });
    function logErrprMessage(element, index, array) {
      $('.wbblogs_message').append('<span class="wbblogs_error">'+element+'</span>');
    }
    function wbremove() {
      $('.wbblogs_error').remove();
      $('.wbblogs_success').remove();
    }
    function logSuccessMessage(element, index, array) {
      $('.wbblogs_message').append('<span class="wbblogs_success">'+element+'</span>');
    }
    $.ajax({
      url: xprt_base_dir + 'modules/wbblog/ajax.php',
      data: data,
      type:'post',
      dataType: 'json',
      beforeSend: function(){
        wbremove();
        $(".wbblog_submit_btn").val("Please wait..");
        $(".wbblog_submit_btn").addClass("disabled");
      },
      complete: function(){
        $(".wbblog_submit_btn").val("Submit Button");
        $(".wbblog_submit_btn").removeClass("disabled");  
      },
      success: function(data){
        wbremove();
        if(typeof data.success != 'undefined'){
          data.success.forEach(logSuccessMessage);
        }
        if(typeof data.error != 'undefined'){
          data.error.forEach(logErrprMessage);
        }
      },
      error: function(data){
        wbremove();
        $('.wbblogs_message').append('<span class="error">Something Wrong ! Please Try Again. </span>');
      },
    }); 
  }
});



/* responsive menu */
   if (($(document).width() >= 768) && ($(document).width() <= 991)) {
        $('.meni').click(function () {            
            $('.popover').hide();
            $(this).closest('li').find('.popover').show();
    });
   };




/* menu more */


//mega more
  $(document).ready(function(){
if ($(document).width() >= 992){
     var count_block = $('.menu-vertical .level-1').length;
     var number_blocks = 8;
     if(count_block < number_blocks){
          return false; 
     } else {
          
          $('.menu-vertical .level-1').each(function(i,n){
                if(i == number_blocks) {
                     $('.menu-content').append('<li class="view_more"><a class="dropdown-item"><i class="fa fa-plus"></i><span>More</span></a></li>');
                }
                if(i> number_blocks) {
                     $(this).addClass('wr_hide_menu');
                }
          })
          $('.wr_hide_menu').hide();
          $('.view_more').click(function() {
                $(this).toggleClass('active');
                $('.wr_hide_menu').slideToggle();
          });
     }
}
});

/* serach */
function openSearch() {
    $('body').addClass("active-search");
    document.getElementById("search_toggle_desc").style.height = "auto";
    $('#search_toggle_desc').addClass("dblock");
    $('#search_toggle_desc').removeClass("dblock");
    $('.search_query').attr('autofocus', 'autofocus').focus();
}
function closeSearch() {
    $('body').removeClass("active-search");
    document.getElementById("search_toggle_desc").style.height = "0";
    $('#search_toggle_desc').addClass("dnone");
    $('#search_toggle_desc').removeClass("dnone");
    $('.search_query').attr('autofocus', 'autofocus').focus();
}

// function wbFilters(){
//   if ($(window).width() <= 767) {
//     $('#left-column').appendTo('#content-wrapper');
//     $('#category #left-column #search_filters_wrapper').appendTo('#cat-left-column');
  
//   } else {
//     $('#left-column').appendTo('#column-left .wb-filters');
//   }
// }
// $(document).ready(function(){ wbFilters(); });
// $(window).resize(function(){ wbFilters(); });

/****Change Links of Nos gammes de produits cards****/

const myStoresLinks = {
  "https://guyanemateriels.com/4-ms-tools---electroportatifs-et-accessoires":
    "https://guyanemateriels.com/content/15-ms-tools-en-construction",
  "https://guyanemateriels.com/6-ms-industry---materiels-et-equipements-datelier":
    "https://guyanemateriels.com/content/16-ms-industry-en-construction",
  "https://guyanemateriels.com/8-ms-green---materiels-despaces-verts":
    "https://guyanemateriels.com/content/17-ms-green-en-construction", // ⬅️ remplacé
  "https://guyanemateriels.com/5-ms-construction---materiels-et-equipements-de-chantier":
    "https://guyanemateriels.com/content/18-ms-construction-en-construction",
  "https://guyanemateriels.com/9-ms-heavy---materiels-lourds-du-btp-mines-et-forets":
    "https://guyanemateriels.com/content/19-ms-heavy-en-construction", // ⬅️ heavu → heavy
  "https://guyanemateriels.com/11-bl-access---moyens-dacces-en-hauteur":
    "https://guyanemateriels.com/content/21-bl-access-en-construction", // ⬅️ hauter → hauteur
  "https://guyanemateriels.com/10-bl-fix---quincaillerie":
    "https://guyanemateriels.com/content/22-bl-fix-en-construction" // ⬅️ remplacé
};


// Select all card links
document.querySelectorAll('.cat-img a[href]').forEach(a => {
  const url = a.href.split('#')[0].split('?')[0];
  if (myStoresLinks[url]) {
    a.href = myStoresLinks[url];
    a.setAttribute('data-replaced', 'true'); 
  }
});
