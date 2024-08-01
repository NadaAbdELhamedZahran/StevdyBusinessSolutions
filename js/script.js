// effect the page
// ===============
(function($) { 
      $.fn.visible = function(partial) {
            
            var   $t            = $(this),
                  $w            = $(window),
                  viewTop       = $w.scrollTop(),
                  viewBottom    = viewTop + $w.height(),
                  _top          = $t.offset().top,
                  _bottom       = _top + $t.height(),
                  compareTop    = partial === true ? _bottom : _top,
                  compareBottom = partial === true ? _top : _bottom;
            
            return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
      };            
})(jQuery);
      
var win = $(window);

var allMods = $(".module");

allMods.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
            el.addClass("already-visible"); 
      } 
});

win.scroll(function(event) {
      allMods.each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                  el.addClass("come-in"); 
            } 
      });
});

// *******************************************************
// top button

var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            mybutton.style.display = "block";
      } 
      else {
            mybutton.style.display = "none";
      }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// =============================================================================================
// read more & read less
function myFunction() {
      var dots = document.getElementById("dotss1");
      var moreText = document.getElementById("moree1");
      var btnText = document.getElementById("myBtn1");
      
      if (dots.style.display === "none") {
              dots.style.display = "inline";
              btnText.innerHTML = "";
              moreText.style.display = "none";
      } 
      else {
              dots.style.display = "none";
              btnText.innerHTML = "";
              moreText.style.display = "inline";              
      }
  }
function myFunction2() {

      var dots = document.getElementById("dotss2");
      var moreText = document.getElementById("moree2");
      var btnText = document.getElementById("myBtn2");

      
      if (dots.style.display === "none") {
              dots.style.display = "inline";
              btnText.innerHTML = "";
              moreText.style.display = "none";
      } 
      else {
              dots.style.display = "none";
              btnText.innerHTML = "";
              moreText.style.display = "inline";            
      }
  }
  function myFunction3() {
      var dots = document.getElementById("dotss3");
      var moreText = document.getElementById("moree3");
      var btnText = document.getElementById("myBtn3");
      
      if (dots.style.display === "none") {
              dots.style.display = "inline";
              btnText.innerHTML = "";
              moreText.style.display = "none";
      } 
      else {
              dots.style.display = "none";
              btnText.innerHTML = "";
              moreText.style.display = "inline";
      }
  }