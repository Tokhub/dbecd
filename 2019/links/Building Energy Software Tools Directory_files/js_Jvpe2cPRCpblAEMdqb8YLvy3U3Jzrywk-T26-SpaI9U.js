/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
        if (typeof define === 'function' && define.amd) {
                // AMD. Register as anonymous module.
                define(['jquery'], factory);
        } else {
                // Browser globals.
                factory(jQuery);
        }
}(function ($) {

        var pluses = /\+/g;

        function encode(s) {
                return config.raw ? s : encodeURIComponent(s);
        }

        function decode(s) {
                return config.raw ? s : decodeURIComponent(s);
        }

        function stringifyCookieValue(value) {
                return encode(config.json ? JSON.stringify(value) : String(value));
        }

        function parseCookieValue(s) {
                if (s.indexOf('"') === 0) {
                        // This is a quoted cookie as according to RFC2068, unescape...
                        s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
                }

                try {
                        // Replace server-side written pluses with spaces.
                        // If we can't decode the cookie, ignore it, it's unusable.
                        // If we can't parse the cookie, ignore it, it's unusable.
                        s = decodeURIComponent(s.replace(pluses, ' '));
                        return config.json ? JSON.parse(s) : s;
                } catch(e) {}
        }

        function read(s, converter) {
                var value = config.raw ? s : parseCookieValue(s);
                return $.isFunction(converter) ? converter(value) : value;
        }

        var config = $.cookie = function (key, value, options) {

                // Write
                if (value !== undefined && !$.isFunction(value)) {
                        options = $.extend({}, config.defaults, options);

                        if (typeof options.expires === 'number') {
                                var days = options.expires, t = options.expires = new Date();
                                t.setDate(t.getDate() + days);
                        }

                        return (document.cookie = [
                                encode(key), '=', stringifyCookieValue(value),
                                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                                options.path    ? '; path=' + options.path : '',
                                options.domain  ? '; domain=' + options.domain : '',
                                options.secure  ? '; secure' : ''
                        ].join(''));
                }

                // Read

                var result = key ? undefined : {};

                // To prevent the for loop in the first place assign an empty array
                // in case there are no cookies at all. Also prevents odd result when
                // calling $.cookie().
                var cookies = document.cookie ? document.cookie.split('; ') : [];

                for (var i = 0, l = cookies.length; i < l; i++) {
                        var parts = cookies[i].split('=');
                        var name = decode(parts.shift());
                        var cookie = parts.join('=');

                        if (key && key === name) {
                                // If second argument (value) is a function it's a converter...
                                result = read(cookie, value);
                                break;
                        }

                        // Prevent storing a cookie that we couldn't decode.
                        if (!key && (cookie = read(cookie)) !== undefined) {
                                result[name] = cookie;
                        }
                }

                return result;
        };

        config.defaults = {};

        $.removeCookie = function (key, options) {
                if ($.cookie(key) === undefined) {
                        return false;
                }

                // Must not alter options, thus extending a fresh object...
                $.cookie(key, '', $.extend({}, options, { expires: -1 }));
                return !$.cookie(key);
        };

}));;
var cbrd = {
  debug_mode: false,
  debug: function() {
    if (cbrd.debug_mode) {
      if (typeof console !== 'undefined' && typeof console.log !== 'undefined') {
        console.log.apply(console, arguments);
      }
    }
  }
};
;
(function ($) {

  // Drupal behaviors.
  Drupal.behaviors.cbrdSVG = {
    attach: function(context, settings) {
      if (Modernizr.svg) {
        cbrd.debug('SVG enabled');
        $('#logo img').attr('src', '/sites/all/themes/combrd/logo.svg');
      }
    }
  };

  // jQuery document.ready().
  $(function(){

  });
})(jQuery);
;
(function ($) {
  $( document ).ready(function() {
    function createCollapse(t) {
      var w = t.find('.views-exposed-widget');
      t.find('.block-title').click(function() {
        $(this).parents('.block--filter-collapse').toggleClass('is-expanded');
        $(this).toggleClass('is-expanded');
        t.find('form').toggleClass('is-expanded');
      });
      w.each(function(){
        var t = $(this);
        t.children('label').click(function(){
          t.children('.views-widget').toggleClass('is-expanded');
        });
      });
    }
  });
}(jQuery));
;
(function($) {

  $.organicTabs = function(el, options) {

    var base = this;
    base.$el = $(el);
    base.$nav = base.$el.find('.tab--nav');

    base.init = function() {

      base.options = $.extend({},$.organicTabs.defaultOptions, options);

      // Accessible hiding fix
      $(".hide").css({
        "position": "relative",
        "top": 0,
        "left": 0,
        "display": "none"
      });

      base.$nav.delegate("li a", "click", function() {

        // Figure out current list via CSS class
        var curList = base.$el.find("a.current").attr("href").substring(1),

        // List moving to
        $newList = $(this),

        // Figure out ID of new list
        listID = $newList.attr("href").substring(1),

        // Set outer wrapper height to (static) height of current inner list
        $allListWrap = base.$el.find(".tab--content"),
        curListHeight = $allListWrap.height();
        $allListWrap.height(curListHeight);

      if ((listID !== curList) && ( base.$el.find(":animated").length === 0)) {

        // Fade out current list
        base.$el.find("#"+curList).fadeOut(base.options.speed, function() {

          // Fade in new list on callback
          base.$el.find("#"+listID).fadeIn(base.options.speed);

          // Adjust outer wrapper to fit new list snuggly
          var newHeight = base.$el.find("#"+listID).height();
          $allListWrap.animate({
            height: newHeight
          });

          // Remove highlighting - Add to just-clicked tab
          base.$el.find(".tab--nav li a").removeClass("current");
          $newList.addClass("current");

        });

      }

      // Don't behave like a regular link
      // Stop propegation and bubbling
      return false;
      });

    };
    base.init();
  };

  $.organicTabs.defaultOptions = {
    "speed": 300
  };

  $.fn.organicTabs = function(options) {
    return this.each(function() {
      (new $.organicTabs(this, options));
    });
  };

})(jQuery);
;
(function ($) {

// Drupal behaviors.
// ---------------------------------------------------------------------------
  Drupal.behaviors.cbrd = {
    attach: function(context, settings) {

// Get resource type from the search results list.
// ---------------------------------------------------------------------------

      // Initialize array where class names will be stored.
      var typeArray = [];

      // Iterate over the search results list, and grab the contents of its
      // resource type. This will be used as a class name after some string
      // conversion.
      $('.view-mode-search_result').each(function() {
        var type = $(this)
          .find('[class*=-type]')
          .find('.field-item span')
          .text();
        //alert(type);
        // Clean up the classname, and make it lowercase.
        var typeSelector = type
          .replace(' ', '-')
          .toLowerCase();
        //alert(typeSelector);
        // Check if class name is already in the type array. If it's not, then
        // write an inline style and cache its name.
        if (jQuery.inArray(typeSelector, typeArray) === -1) {
          typeArray.push(typeSelector);
          $('head')
            .append('<style> .' +
              typeSelector +
              ':before { content: "' + type +'" !important;</style>');
          //alert('<style> .' +
          //    typeSelector +
          //    ':before { content: "' + type +'" !important;</style>');
        }

        // Add class name to the element where the type will be surfaced
        // using the "contents" CSS property.
        $(this).find('.inner').addClass(typeSelector);

        // Debug stuff.
        cbrd.debug($('[class*=-type]'));
        cbrd.debug(type);
        cbrd.debug(typeSelector);
      });
    }
  };

// jQuery document.ready().
// ---------------------------------------------------------------------------
  $(function(){
    // add toggle
    $('.front #main-content').prepend('<div id="card-list-toggle"><div class="button card-view-active" id="show-cards">Card View</div><div class="button list-view-inactive" id="show-list">List View</div>');

    function show_list() {
      //building-data
      $('#building-data .list--box-title a').each(function () {
        $text = $(this).parent().find('.list-view-title').html();
        $(this).text($text);
      });
      $('#featured-resources').addClass('toggle');
      $('#recently-added').addClass('toggle');
      $('#top-resources').addClass('toggle');
      $('#collections .item-list--flex li.list-item').addClass('collections-list');
      $('#building-data li.type-case-study').addClass('model-buildings-list');
      $('#show-cards').removeClass('card-view-active');
      $('#show-cards').addClass('card-view-inactive');
      $('#show-list').removeClass('list-view-inactive');
      $('#show-list').addClass('list-view-active');

      $('.toggle .item-list--flex li.list-item').addClass('list-view');
      $('.toggle .list--box-title').hide();
      $('.toggle .views-field-title-2').show();
      $('.toggle .views-field-field-publication-date').show();
      $('.toggle .views-field-nothing-2').show();
      $('.toggle .views-field-nothing').hide();
      //$('.views-field-body').show();

      $href = $('.tab--nav .current').attr('href');
      //alert($href);
      switch($href) {
        case '#featured-resources':
          $height = $('#featured-resources .list--box').height();
          break;
        case '#recently-added':
          $height = $('#recently-added .list--box').height();
          break;
        case '#collections':
          $height = $('#collections .list--box').height();
          break;
        case '#top-resources':
          $height = $('#top-resources .list--box').height();
          break;
        case '#building-data':
          $height = $('#building-data .list--box').height();
          break;
        default:
          $height = 0;
      }
      if ($height > 0) {
        $height = $height + 'px';
        $('.tab--content').css('height', $height);
      }
    }

    $('#show-list').click(function() {
      $.cookie('show-list', 1);
      show_list();
    });

    $('#show-cards').click(function() {
      $.cookie('show-list', 0);
      //$.removeCookie('show-list');
      $('#building-data .list--box-title a').each(function () {
        $text = $(this).parent().find('.card-view-title').html();
        $(this).text($text);
      });

      $('#collections .item-list--flex li.list-item').removeClass('collections-list');
      $('#building-data li.type-case-study').removeClass('model-buildings-list');

      $('#show-list').removeClass('list-view-active');
      $('#show-list').addClass('list-view-inactive');
      $(this).removeClass('card-view-inactive');
      $(this).addClass('card-view-active');
      $('.toggle .item-list--flex li.list-item').removeClass('list-view');
      $('.toggle .list--box-title').show();
      $('.toggle .views-field-title-2').hide();
      $('.toggle .views-field-field-publication-date').hide();
      $('.toggle .views-field-nothing-2').hide();
      $('.toggle .views-field-nothing').show();
      //$('.views-field-body').hide();

      $href = $('.tab--nav .current').attr('href');
      switch($href) {
        case '#featured-resources':
          $height = $('#featured-resources .views-row-first').height();
          break;
        case '#recently-added':
          $height = $('#recently-added .views-row-first').height();
          break;
        case '#collections':
          $height = $('#collections .views-row-first').height();
          break;
        case '#top-resources':
          $height = $('#top-resources .views-row-first').height();
          break;
        case '#building-data':
          $height = $('#building-data .type-case-study').height();
          break;
        default:
          $height = 0;
      }
      if ($height > 0) {
        $height = $height + 24 + 'px';
        $('.tab--content').css('height', $height);
      }
    });

// Toggle dropdown class.
// ---------------------------------------------------------------------------
    $('.block--dropdown').find('.block-title').click(function() {
      $(this).parents('.block--dropdown').toggleClass('is-expanded');
    });

// Create select all and reset for Chosen.
// ---------------------------------------------------------------------------

  // Create select all.
  $('select + .chzn-container-multi')
    .after('<div class="reset"><span class="link--pill follow">Reset</span></div>')
    .after('<div class="select-all"><span class="link--pill follow">Select All</span></div>');

  // Bind click handler to select all.
  $('.select-all').click(function(){
    $(this).siblings('select').find('option').attr('selected', true);
    $(this).siblings('select').trigger('liszt:updated');
  });

  // Bind click handler to reset.
  $('.reset').click(function(){
    $(this).siblings('select').find('option').attr('selected', false);
    $(this).siblings('select').trigger('liszt:updated');
  });

// Create tabbed interface for front-page content.
// ---------------------------------------------------------------------------
    var tabNav = $('<ul class="tab--nav list--inline" />');
    var tabContent = $('<div class="tab--content" />');
    var tabLink;

    // Probably don't need to use an iterator here.
    $('.tabbed > .block').each(function () {
      $(this).appendTo(tabContent);
    });
    $('<div id="building-data" class="tab" />').appendTo(tabContent);
    $('.tabbed .view-recently-viewed-resources').appendTo(tabContent);
    tabContent.prependTo('.tabbed');

    var text;
    var tabLinkID;
    var tabLinkTarget;
    $('.tab-link').each(function () {
      text = $(this).text();
      tabLinkID = text.replace(/(\s)/g, '-').toLowerCase();
      tabLinkTarget = $(this).parents('.tab');
      tabLinkTarget.attr('id', tabLinkID);
      $(this).wrapInner('<a href="#' + tabLinkID + '" class="link--more"/>');
      $(this).appendTo(tabNav);
      $(this).wrap('<li class="list-item" />');
    });

    // Mashing in building data, which is populated by a callback to
    // case_studies_api
    buildingDataTab = $('<li class="list-item"><h2 class="block-title block-title--icon-link icon-link--graph tab-link"><a id="building-data-link" href="#building-data" class="link--more">Model Buildings</a></h2></li>');
    buildingDataTab.appendTo(tabNav);

    // Add the stuff.
    tabNav.prependTo('.tabbed');

    // Add current class to first occurence.
    $('.tab').addClass('hide');
    $('.tab:first').addClass('current');
    $('.tab:first').removeClass('hide');
    $('.tab-link:first a').addClass('current');

    if ($.cookie('front-tab')) {
      $front_tab = $.cookie('front-tab');
      //alert($front_tab);
      $('.tab-link:first a').removeClass('current');
      $('.tab--nav li a').each(function() {
        if ($(this).attr('href') == $.cookie('front-tab')) {
          $(this).addClass('current');
        }
      });
      $('#featured-resources').hide();
      $('#recently-added').hide();
      $('#collections').hide();
      $('.front #block-system-main').hide();
      $('#building-data').hide();
      switch($.cookie('front-tab')) {
        case '#top-resources':
          $('#block-system-main').show();
          $('#top-resources').show();
          //$('#top-resources').css('display', 'inline');
          $('#top-resources').removeClass('hide');

          //$('#top-resources').show();
          //$('#block-system-main').removeClass('hide');
          //$('#block-system-main').addClass('current');
          break;
        default:
          $($front_tab).show();
          $($front_tab).removeClass('hide');
          $($front_tab).addClass('current');
          // todo add loading sign for Model Buildings
      }
    }
    //if ($.cookie('front-tab')) {
    //  alert($.cookie('front-tab'));
    //}
    $('h2.tab-link').click(function() {
      //$('.tab-link a').removeClass('current');
      $('#featured-resources').hide();
      $('#recently-added').hide();
      $('#collections').hide();
      $('#block-system-main').hide();
      $('#building-data').hide();
      //$('#collections').show();
      $href = $(this).find('a').attr('href');
      //alert($href);
      switch($href) {
        case '#top-resources':
          $('#block-system-main').show();
          break;
        default:
          $($href).show();
      }
      $.cookie('front-tab', $href);
      localStorage.setItem('front-tab', $href);
    });




    // Bind Organic Tabs.
    // jQuery plugin has been modified from the original, to account for CSS
    // class names that are more in line with the rest of ADG approach.
    $('.tabbed').organicTabs();

    // Remove some junk from the DOM, after we get content back from
    // case_studies_api.
    $('#building-data').ajaxComplete(function() {

      $('.case-studies-leader').remove();
      $('#building-data .remove').remove();
      $('#building-data .list--box-title').each(function(i) {
        var aLink = $(this).find('a').attr('href');
        $(this).find('a').attr('target','_blank');
        var caseStudyType =
        $('<div class="field resource-type">' +
          '<div><strong class="resource-type--item">Case Study</strong></div>' +
          '<div><a class="resource-type--download" target="_blank" href=' + aLink + '>View</a></div>' +
          '</div>');
        var studyTitle = $(this).find('a').text();
        var maxLength = 45;
        var trimmedTitle = studyTitle.substr(0, maxLength);
        if (studyTitle.length > trimmedTitle.length){
          trimmedTitle = trimmedTitle.substr(0, Math.min(trimmedTitle.length, trimmedTitle.lastIndexOf(" ")));
          $(this).find('a').text(trimmedTitle + '...');
        }
        $(this).find('a').attr('title', studyTitle);
        $(this).prepend('<div class="list-view-title">' + studyTitle + '</div><div class="card-view-title">' + trimmedTitle + '...</div>');
        $(this).after(caseStudyType);
      });
    });

    // used to retain tab and list/card when opened in a new tab or using back button
    //var $show_list = $.cookie('show-list');
    if ($show_list == 1) {
      show_list();
    }
    //if ($.cookie('front-tab')) {
    //  alert('taco');
    //        $('#recently-added').show();
    //  $('#recently-added').show();
    //        $("#show-cards").trigger('click');
    //
    //  $('#recently-added').show();
    //
    //}
  });
})(jQuery);
;
/*
 * jQuery Reveal Plugin 1.0
 * www.ZURB.com
 * Copyright 2010, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/


(function(jQuery) {

/*---------------------------
 Defaults for Reveal
----------------------------*/
	 
/*---------------------------
 Listener for data-reveal-id attributes
----------------------------*/

	jQuery('a[data-reveal-id]').live('click', function(e) {
		e.preventDefault();
		var modalLocation = jQuery(this).attr('data-reveal-id');
		jQuery('#'+modalLocation).reveal(jQuery(this).data());
	});

/*---------------------------
 Extend and Execute
----------------------------*/

    jQuery.fn.reveal = function(options) {
        
        
        var defaults = {  
	    	animation: 'fade', //fade, fadeAndPop, none
		    animationspeed: 200, //how fast animtions are
		    closeonbackgroundclick: true, //if you click background will modal close?
		    dismissmodalclass: 'close-reveal-modal' //the class of a button or element that will close an open modal
    	}; 
    	
        //Extend dem' options
        var options = jQuery.extend({}, defaults, options); 
	
        return this.each(function() {
        
/*---------------------------
 Global Variables
----------------------------*/
        	var modal = jQuery(this),
        		topMeasure  = parseInt(modal.css('top')),
				topOffset = modal.height() + topMeasure,
          		locked = false,
				modalBG = jQuery('.reveal-modal-bg');

/*---------------------------
 Create Modal BG
----------------------------*/
			if(modalBG.length == 0) {
				modalBG = jQuery('<div class="reveal-modal-bg" />').insertAfter(modal);
			}		    
     
/*---------------------------
 Open & Close Animations
----------------------------*/
			//Entrance Animations
			modal.bind('reveal:open', function () {
			  modalBG.unbind('click.modalEvent');
				jQuery('.' + options.dismissmodalclass).unbind('click.modalEvent');
				if(!locked) {
					lockModal();
					if(options.animation == "fadeAndPop") {
						modal.css({'top': jQuery(document).scrollTop()-topOffset, 'opacity' : 0, 'visibility' : 'visible'});
						modalBG.fadeIn(options.animationspeed/2);
						modal.delay(options.animationspeed/2).animate({
							"top": jQuery(document).scrollTop()+topMeasure + 'px',
							"opacity" : 1
						}, options.animationspeed,unlockModal());					
					}
					if(options.animation == "fade") {
						modal.css({'opacity' : 0, 'visibility' : 'visible', 'top': jQuery(document).scrollTop()+topMeasure});
						// Added following line for IE compatibility
						modalBG.css('filter', 'alpha(opacity=80)');
						modalBG.fadeIn(options.animationspeed/2);
						modal.delay(options.animationspeed/2).animate({
							"opacity" : 1
						}, options.animationspeed,unlockModal());					
					} 
					if(options.animation == "none") {
						modal.css({'visibility' : 'visible', 'top':jQuery(document).scrollTop()+topMeasure});
						modalBG.css({"display":"block"});	
						unlockModal()				
					}
				}
				modal.unbind('reveal:open');
			}); 	

			//Closing Animation
			modal.bind('reveal:close', function () {
			  if(!locked) {
					lockModal();
					if(options.animation == "fadeAndPop") {
						modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
						modal.animate({
							"top":  jQuery(document).scrollTop()-topOffset + 'px',
							"opacity" : 0
						}, options.animationspeed/2, function() {
							modal.css({'top':topMeasure, 'opacity' : 1, 'visibility' : 'hidden'});
							unlockModal();
						});					
					}  	
					if(options.animation == "fade") {
						modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
						modal.animate({
							"opacity" : 0
						}, options.animationspeed, function() {
							modal.css({'opacity' : 1, 'visibility' : 'hidden', 'top' : topMeasure});
							unlockModal();
						});					
					}  	
					if(options.animation == "none") {
						modal.css({'visibility' : 'hidden', 'top' : topMeasure});
						modalBG.css({'display' : 'none'});	
					}	
				}
				modal.unbind('reveal:close');
			});     
   	
/*---------------------------
 Open and add Closing Listeners
----------------------------*/
        	//Open Modal Immediately
    	modal.trigger('reveal:open')
			
			//Close Modal Listeners
			var closeButton = jQuery('.' + options.dismissmodalclass).bind('click.modalEvent', function () {
			  modal.trigger('reveal:close');
			});
			
			if(options.closeonbackgroundclick) {
				modalBG.css({"cursor":"pointer"})
				modalBG.bind('click.modalEvent', function () {
				  modal.trigger('reveal:close')
				});
			}
			jQuery('body').keyup(function(e) {
        		if(e.which===27){ modal.trigger('reveal:close'); } // 27 is the keycode for the Escape key
			});
			
			
/*---------------------------
 Animations Locks
----------------------------*/
			function unlockModal() { 
				locked = false;
			}
			function lockModal() {
				locked = true;
			}	
			
        });//each call
    }//orbit plugin call
})(jQuery);
        
;
document.write('<style type="text/css">a.redirectLink:link {color:#BA5016;text-decoration:none;font-size:1.5em;} a.redirectLink:visited {color:#BA5016;} a.redirectLink:hover {color:#BA5016;text-decoration:underline;font-size:1.5em;} a.redirectLink:active {color:#BA5016;} a.modalNavButton:link {color:#000;text-decoration:none; font-weight:bold;} a.modalNavButton:visited {color:#000;} a.modalNavButton:hover {color:#BA5016;text-decoration:underline; font-weight:bold;} a.modalNavButton:active {color:#BA5016;} hr.modalHR { border: 0; height: 0; border-top: 1px solid rgba(0, 0, 0, 0.1); border-bottom: 1px solid rgba(255, 255, 255, 0.3); } </style>');

jQuery(document).ready(function() {

//check if a val is in an array (substring)
function isInArray(arr, val) {
    blnFound = false;
    for (var i = 0; i < arr.length; i++) {
        if (val.indexOf(arr[i]) >= 0)
        blnFound = true;
    }
    return blnFound;
}

if (window.location.protocol == 'https:') {
  $http = 'https://';
}
else {
  $http = 'http://';
}

jQuery('body').append('<div id="leavingEEREModal" class="reveal-modal"><h1>You are now leaving a U.S. Department of Energy website.</h1><p>Click on the link below to continue, or you may select Cancel.</p><p><a href="#" id="leavingEEREModalURL" class="redirectLink">URL</a></p><br/><hr class="modalHR"/><br/><p><a href="#" id="cancelTimeout" class="modalNavButton"><img src="' + $http + '//www1.eere.energy.gov/images/modal_arrow_left.gif" alt="Cancel"/> Cancel</a><a href="#" id="continueExternal" class="modalNavButton" style="float:right">Continue to this site <img src="' + $http + '//www1.eere.energy.gov/images/modal_arrow_right.gif" alt="Continue to this site"/></a></p></div>');

// Creating custom :external selector
jQuery.expr[':'].external = function(obj){

//Check if the hostname of the object is in the internalSites array
var internalSites = ["10.40.18.205", "cbrd.local", "cbrd.atendesigngroup.com", "energy.gov", "doe.gov", "energysavers.gov", "energycodes.gov", "loseyourexcuse.gov", "solardecathlon.gov", "windpoweringamerica.gov", "nrel.gov"]; //remove NREL on go live

if (!(isInArray(internalSites, obj.hostname.toLowerCase())) && (obj.href.toLowerCase().indexOf("history.back") == -1) && (obj.href.toLowerCase().indexOf("mailto:") == -1) && (obj.href.toLowerCase().indexOf("javascript:") == -1) && (obj.href.toLowerCase() != "") ) {
return true;
}
else return false;
};


// Bind the click event to the cancel button
jQuery('#cancelTimeout').click(function (e) {
e.preventDefault();
// close the modal dialog
jQuery('#leavingEEREModal').trigger('reveal:close');
});

// This code will reveal the dialog when an external link
// is clicked by adding the 'external' CSS class to all external links
jQuery('a:external').click(function(e) {
e.preventDefault();

// Show the modal
jQuery('#leavingEEREModal').reveal();

// setup link and text on the modal dialog
var href = this.href;
var displayhref = this.href;
if (displayhref.length > 75) {
	displayhref = displayhref.substring(0, 74) + "...";
}
jQuery('#leavingEEREModalURL').attr('href', href);
jQuery('#leavingEEREModalURL').text(displayhref);
jQuery('#leavingEEREModalURL').click(function () {
	jQuery('#leavingEEREModal').trigger('reveal:close');
	window.location.href = href;
});

// setup Continue button
jQuery('#continueExternal').click(function () {
jQuery('#leavingEEREModal').trigger('reveal:close');
jQuery('#continueExternal').attr('href', href);
window.location.href = href;
});

return false;
});
});
;
