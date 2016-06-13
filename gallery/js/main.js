jQuery.browser = {};
(function () {
   jQuery.browser.msie = false;
   jQuery.browser.version = 0;
   if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
      jQuery.browser.msie = true;
      jQuery.browser.version = RegExp.$1;
 }
})();


$(document).ready(function() {
	// Header Scroll

		$('#header').addClass('fixed');

	// $(window).on('scroll', function() {
	// 	var scroll = $(window).scrollTop();
  //
	// 	if (scroll >= 50) {
	// 		$('#header').addClass('fixed');
	// 	} else {
	// 		$('#header').removeClass('fixed');
	// 	}
	// });



	// Fancybox
	$('.work-box-no-css').fancybox();

	// Page Scroll
	var sections = $('section')
		nav = $('nav[role="navigation"]');

	$(window).on('scroll', function () {
	  	var cur_pos = $(this).scrollTop();
	  	sections.each(function() {
	    	var top = $(this).offset().top - 76
	        	bottom = top + $(this).outerHeight();
	    	if (cur_pos >= top && cur_pos <= bottom) {
	      		nav.find('a').removeClass('active');
	      		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    	}
	  	});
	});
	nav.find('a').on('click', function () {
	  	var $el = $(this)
	    	id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 75
		}, 500);
	  return false;
	});

	// Mobile Navigation
	$('.nav-toggle').on('click', function() {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});
	nav.find('a').on('click', function() {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});
});


//Ruben
$(function() {$('.lazy').Lazy();});
$.couch.urlPrefix = "http://178.62.133.139:5994";

$('#editBtn').on('click', function() {
  $('#editor').css('display', "block");
  $('#text').css('display', "none");

  $('html, body').animate({
    scrollTop: 0
  }, 500);
});



$('#saveBtn').on('click', function() {
	// console.log('painterid ' + window.painterID + nicEditors.findEditor('txtBio').elm.innerHTML );	
	$.couch.db("painters").openDoc(window.painterID.toString(), {
	        success: function(data) {
				data.bio.ru = nicEditors.findEditor('txtBio').elm.innerHTML;
				
				$.couch.db("painters").saveDoc(data, {
				                success: function(data2) {
				                	$('#myModal').modal({show: true})
				                },
				                error: function(status) {
				                  if (status == 409) {
				                    alert('Произошла ошибка 409 при отправке в базу даных! #2', "error");
				                  } else {
				                    alert('Произошла ошибка при отправке предложения в базу даных! #2', "error");
				                  }
				                  console.log(status);
				                }
				              });	
	        },
	        error: function(status) {
	          console.log(status);
	        }
	 });
	
	$('#text').css('display', "block");
	$('#editor').css('display', "none");
});

save = function(id){
	
	console.log('painterid ' + window.painterID + ', pictureID '  + id, ', name ' + $('#txtName-' + id).val() + ', year ' + $('#txtYear-' + id).val() + ', location ' + $('#txtLocation-' + id).val())
	
	var index = id -1;
	
	$.couch.db("painters").openDoc(window.painterID.toString(), {
	        success: function(data) {
				
				data.paintings[index].name.ru = $('#txtName-' + id).val();
				data.paintings[index].year = $('#txtYear-' + id).val();
				data.paintings[index].place = $('#txtLocation-' + id).val();
				
				$.couch.db("painters").saveDoc(data, {
				                success: function(data2) {
				                	$('#myModal').modal({show: true})
				                },
				                error: function(status) {
				                  if (status == 409) {
				                    alert('Произошла ошибка 409 при отправке в базу даных! #2', "error");
				                  } else {
				                    alert('Произошла ошибка при отправке предложения в базу даных! #2', "error");
				                  }
				                  console.log(status);
				                }
				              });	
	        },
	        error: function(status) {
	          console.log(status);
	        }
	 });
	
	
	
	
	
	
  $('#name-' + id).css('display', "block");
  $('#editName-' + id).css('display', "none");

  $('#year-' + id).css('display', "block");
  $('#editYear-' + id).css('display', "none");

  $('#location-' + id).css('display', "block");
  $('#editLocation-' + id).css('display', "none");
};

niceeditor = new nicEditor({fullPanel : true}).panelInstance('txtBio');

