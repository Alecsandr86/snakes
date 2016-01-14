

jQuery(document).ready(function($) {
	
	function AjaxFormRequest(result_id,form_id,url) {
	if (validateForm(form_id)){
	 $.ajax({
                    url:    url,
                    type:     "POST", 
                    dataType: "html", 
                    data: $("#"+form_id).serialize(), 
					beforeSend: function(event) {
						$("#"+result_id).html(  "Идет отправка...");
						},
                    success: function(response) { 
                     $("#"+result_id).html( response);
					 $("#"+form_id).trigger( "reset" );

					},
					error: function(response) {
					 $("#"+result_id).html(  "ERROR");
					}
             });
			 
			 alreadysent = 1;
			 
	}
	
	else{return false;}
   }
					
					function validateForm(form_id){
						var a = validateEmail(form_id);
						var c = validateName(form_id);
						return a && c;
						
					}
					
					function validateEmail(form_id){
							var email = $("#"+form_id+" input[name=email]").val();
							var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; 
							if (emailPattern.test(email)){
								$("#"+form_id+" input[name=email]").removeClass( 'error_input' );
								$("#"+form_id+ " .email_error").html( ""	)
								return true;
								
							}
							else {
								$("#"+form_id+" input[name=email]").addClass( 'error_input' );
								$("#"+form_id+ " .email_error").html( "<span>Обязательное поле</span>"	)
								return false;
							}
						}
						
						function validateName(form_id){
							var name = $("#"+form_id+" input[name=name]").val();
							var patt =  /^[а-яА-Яa-zA-Z\s\.]{3,30}$/;
							if (patt.test(name)){
								$("#"+form_id+" input[name=name]").removeClass( 'error_input' );
								$("#"+form_id+ " .name_error").html( ""	)
								return true;
							}
							else {
								$("#"+form_id+" input[name=name]").addClass( 'error_input' );
								$("#"+form_id+ " .name_error").html( "<span>Обязательное поле</span>"	)
								return false;
							}
						}
	
	$('#feedback_form').submit(function(e){
		e.preventDefault();
	  AjaxFormRequest('sent_result', 'feedback_form', 'processform.php');
	});

			$('#news_slider').flexslider({
				animation: "slide",
				smoothHeight: true,
				controlNav: false,
				directionNav: true,
				slideshow: false,
				animationLoop: true,
				animationSpeed: 800,
				start: function(slider){
					curSlide = slider.slides[slider.currentSlide];
					$(curSlide).addClass('current_slide');
				},
				before: function(slider){
					curSlide = slider.slides[slider.currentSlide];
					$(curSlide).removeClass('current_slide');
				},
				after: function(slider){
					curSlide = slider.slides[slider.currentSlide];
					$(curSlide).addClass('current_slide');
				},
				prevText: "",
				nextText: ""
		    });
			
			
			$('#clients_slider').flexslider({
				animation: "fade",
				smoothHeight: true,
				controlNav: false,
				directionNav: true,
				slideshow: true,
				animationLoop: true,
				slideshowSpeed: 8000,
				animationSpeed: 800,
				start: function(slider){
					curSlide = slider.slides[slider.currentSlide];
					$(curSlide).addClass('current_slide');
				},
				before: function(slider){
					curSlide = slider.slides[slider.currentSlide];
					$(curSlide).removeClass('current_slide');
				},
				after: function(slider){
					curSlide = slider.slides[slider.currentSlide];
					$(curSlide).addClass('current_slide');
				},
				prevText: "",
				nextText: ""
		    });
			
			
			if ($(".tabs").length) {
				$(".tabs").tabslet({
					
				});
			}
			
			$('table').wrap('<div class="table_wrap"></div>');
			
			if ($(window).width()<961){
				$("#section5 img").attr("src", "images/crp_mobile.png");
			}
			
			$(window).resize(function(){
				if ($(window).width()<961){
					$("#section5 img").attr("src", "images/crp_mobile.png");
				} else {
					$("#section5 img").attr("src", "images/crp.png");	
				}
			})
})