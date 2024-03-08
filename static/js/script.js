// replacement for closest() to support ie 9+
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector;
}
if (!Element.prototype.closest) {
	Element.prototype.closest = function(s) {
		var el = this;
		if (!document.documentElement.contains(el)) return null;
		do {
			if (el.matches(s)) return el;
			el = el.parentElement || el.parentNode;
		} while (el !== null && el.nodeType === 1);
		return null;
	};
}


$(document).ready(function(){
	if(document.getElementById('landing')){
		document.getElementById('landing').classList.add('active');
	}


	// dropdown menus
	// document.getElementById('main_header').addEventListener('click', activate_dropdown);
	// document.querySelector('body').addEventListener('click', click_outside_dropdown);
	// document.getElementById('main_header').addEventListener('mouseover', deactivate_dropdown);
	// document.getElementById('main_header').addEventListener('mouseleave', hover_outside_dropdown);

	function activate_dropdown(event){
		if(event.target.classList.contains("dropdown_button") || event.target.parentElement.classList.contains("dropdown_button")){
			event.stopPropagation();
			event.preventDefault();

			if(event.target.parentElement.classList.contains("dropdown_button")){
				var li = event.target.parentElement.parentElement;
				var a = event.target.parentElement
			}
			else{
				var li = event.target.parentElement;
				var a = event.target;
			}

			console.log(event.type)
			if(li.classList.contains("active") && event.type == 'click'){
				li.classList.remove('active');
			}
			else{
				var active = document.querySelectorAll('.has_submenu.active');
				_.each(active, function(element, index, list){
					element.classList.remove('active')
				});
				li.classList.add('active');
			}

		}
	}

	function click_outside_dropdown(event){
		if(!event.target.closest('.has_submenu')){
			var active = document.querySelectorAll('.has_submenu.active');
			_.each(active, function(element, index, list){
				element.classList.remove('active');
			});
		}
	}

	function hover_outside_dropdown(event){
		if(event.target.classList.contains('.has_submenu')){
			var active = document.querySelectorAll('.has_submenu.active');
			_.each(active, function(element, index, list){
				element.classList.remove('active');
			});
		}
	}

	function deactivate_dropdown(event){
		if(event.target.classList.contains("dropdown_button")){
			event.target.classList.remove('active');
		}
	}


	// dropdown ul select section
	_.each(document.querySelectorAll('.submenu_view_select'), function(element, index, list){
		element.addEventListener('mouseover', submenu_view_select);
	});

	function submenu_view_select(event){
		if(event.target.tagName == 'A'){

			_.each(event.target.closest('.submenu_view_select').querySelectorAll('li a'), function(element, index, list){
				element.classList.remove('active')
			});
			event.target.classList.add('active');


			var nodes = Array.prototype.slice.call(event.target.closest('.submenu_view_select').children);
			var index = nodes.indexOf(event.target.parentElement);
			var submenu_view = event.target.closest('.submenu_view_select').nextElementSibling;
			_.each(submenu_view.children, function(element, index, list){
				element.classList.remove('active')
			});
			event.target.closest('.submenu_view_select').nextElementSibling.children[index].classList.add('active');
		}
	}

	// service hover

	$('.services_menu .services ul li:not(".title")').on('mouseover', function(e){
		var target = $(e.target).data('target');
		if(target && target.length > 0){
			$('#' + target).css('display','flex').siblings().css('display', 'none');
		}
	});
	$('.services_menu .services ul li:not(".title")').on('mouseleave', function(e){
		$('#dropdown_menu_picture_default').css('display','flex').siblings().css('display', 'none');
	});



	// mobile submenus
	$('#mobile_main_menu li.has_submenu a, .back_button button').click(function(e){
		var target_element = $(e.target).data('target');
		$(target_element).siblings().hide();
		$(target_element).show();
	});


	// contact form
	var spans = document.querySelectorAll(".contact_form form .error_messages span");
	var messages = {};
	_.each(spans, function(element, index, list){
		if(_.has(element.dataset, 'field')){
			if(!_.has(messages, element.dataset.field)){
				messages[element.dataset.field] = {};
			}
			messages[element.dataset.field][element.dataset.rule] = element.innerText;
		}
	});
	// remove the html
	var error_messages_block =  document.querySelectorAll(".contact_form form .error_messages");
	_.each(error_messages_block, function(element, index, list){
		if (element.classList.contains('hidden')){
			element.remove();
		}
	});

	$(".contact_form form").validate({
		messages:messages
	}
	);

	if($(".contact_form form")){
		$(".contact_form form .send_button .send").click(function(event){
			if($(".contact_form form").valid()){
				$(".contact_form form .send_button .fa-spinner").removeClass('hidden');
				$(".contact_form form .send_button .o_website_form_send").click();
			}
		});
	}


	// about page
	var about_carousel = document.querySelector('.blocks_slider');
	if(about_carousel){
		$(about_carousel).slick({
			centerMode: false,
			infinite: false,
			slidesToShow: 3,
			arrows:false,
			slidesToScroll: 3,
			dots:true,
			// variableWidth: true,
			responsive:[
			{
				breakpoint:850,
				settings:{
					slidesToShow: 1,
					slidesToScroll: 1,
					variableWidth: true,
				}
			}
			]
		});
	}

	var voip_features = document.querySelector('.carousel_cards .wrapper');
	if(voip_features){
		$(voip_features).slick({
			centerMode: true,
			infinite: true,
			arrows:true,
			slidesToShow: 3,
			focusOnSelect: true,
			variableWidth: true,
			nextArrow:$('.carousel_cards .controls .next'),
			prevArrow:$('.carousel_cards .controls .prev'),
		});
	}

	// svg inject
	var svgs = document.querySelectorAll("img.svg");
	_.each(svgs, function(element, index, list){
		SVGInject(element);
	});


	$('.pbx_select_features .level_select button').on('click', function(e){
		var style = $(this).data('style');
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		$('.levels').removeClass('white black');
		$('.levels').addClass(style);
		$('.levels>div').addClass('hidden');
		$('.levels .' + $(this).data('element')).removeClass('hidden');

		$('html, body').animate({
			scrollTop: parseInt($(".pbx_select_features").offset().top)
		}, 300);
	});

	if($('.pbx_select_features').length > 0){
		$(".pbx_select_features .level_select").stickybits();
	}


	$('.list_select .title >span').on('click', function(e){
		$(this).parents('.list_select').data('auto', false)

		var index = $(this).index();
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		$(this).parents('.list_select').find('.content img').removeClass('active');
		$(this).parents('.list_select').find('.content img:eq('+index+')').addClass('active');
	});


	function update_floating_text(){
		$('.list_select.floating').each(function(){
			var text = $(' .title .active .text', this).text();
			$('.current_text > div', this).text(text)
		});
	}
	update_floating_text();

	$('.list_select.floating .title > span').on('click', function(e){
		var text = $(this).children('.text').text();
		console.log(text)
		$(this).parent().siblings('.current_text').children('div').text(text);
	});

	// auto loop
	$('.list_select').each(function(){
		var this_list = this;
		setInterval(function(){
			if($(this_list).data('auto') === true){
				var selected = $(this_list).children('div.title').children('span.active');
				var next = selected.next();

				if(next.length == 0){
					next = $($(this_list).children('div.title').children('span')[0])
				}
				var index = next.index();
				selected.removeClass('active');
				next.addClass('active');
				$(this_list).find('.content img').removeClass('active');
				$(this_list).find('.content img:eq('+index+')').addClass('active');

				update_floating_text()
			}
		}, 3000)
	})






	if($('.knowledge-stackv2')){
		$('.knowledge-stackv2 .stack ul').each(function(index, element){
			element.addEventListener('click', function(event){
				if(event.target.nodeName == 'LI'){
					target = event.target.dataset.target;
					$(event.target).siblings().removeClass('active');
					$(event.target).addClass('active');
					$(element).parent().siblings().removeClass('active');
					$(element).parent().siblings('[data-name='+target+']').one().addClass('active');

				}
			});

			$($(element).children()[Math.floor(Math.random()*$(element).children().length)]).click();
		});
	}


	if($('.knowledge-stackv3')){

		$('.knowledge-stackv3 .stack .image').each(function(index, element){
				$(element).children().removeClass('active');
				$($(element).children()[Math.floor(Math.random()*$(element).children().length)]).addClass('active');
		});

	};

});