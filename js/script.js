//ios detect
if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
   //alert(navigator.userAgent); 
   
   //add a new meta node of viewport in head node
        head = document.getElementsByTagName('head');
        viewport = document.createElement('meta');
        viewport.name = 'viewport';
        viewport.content = 'target-densitydpi=device-dpi, width=' + 750 + 'px, user-scalable=no';
        head.length > 0 && head[head.length - 1].appendChild(viewport);    
   
}



$(function () {
	$("#fullpage").fullpage({
		anchors: ['page1', 'page2', 'page3'],
		afterLoad: function (anchorLink, index) {
			// body...
			fade('.logo_1', 0.8, 0, 'In');
			fade('.logo_2', 0.8, 0.8, 'In');
			if(index == 1){
				$(".timeEvent").each(function(index, element) {
					slideIn(true, 334, -344, 0.8, index, element);
				});
			}else if(index ==2){
				$("#prize li").each(function (index, element) {
					$(element).css({
						'transition': 'transform 0.6s',
						'transition-delay': index*0.5 + 1.6 + 's',
						'transform': 'scale(1)'
					})
				})
			}else{
				$(".iphone-info").each(function (index, element) {
					slideIn(true, -334, 344, 0.8, index, element);
				});
				$(".btnGroup").css({
					'animation': 'slideUp 1s both',
					'animation-delay': '3.2s'
				})
			}
		},
		onLeave: function (index, nextIndex, direction) {
			fade('.logo_1', 1, 0, 'In', true);
			fade('.logo_2', 1, 0, 'In', true);
			if(index == 1){
				
				$(".timeEvent").each(function(index, element) {
					slideIn(false, -604, 364, 0, index, element);
				});
			}else if(index ==2){
				$("#prize li").each(function (index, element) {
					$(element).css({
						'transition': '',
						'transition-delay': '',
						'transform': 'scale(0)'
					})
				})
			}else{
				$(".iphone-info").each(function (index, element) {
					slideIn(false, 334, -344, 0, index, element);
				});
				$(".btnGroup").css({
					'animation': '',
					'animation-delay': ''
				})
			}
		}

	});
	$("#share").click(function(event) {
		$(".mask").css({
			'top': '0',
			'transition': 'top 0.8s'
		})
	});
	$(".mask").click(function(event) {
		$(".mask").css({
			'top': '-100%',
			'transition': 'top 0.8s'
		})
	});
})


function slideIn(isLoad, L_disdance, R_distance, time, index, element) {
	if(isLoad){
		if(index & 1){								
			$(element).css({
				'transition': 'transform ' + time + 's',
				'transition-delay': index*0.8 + 1.6 + 's',
				'transform': 'translate(' + L_disdance + 'px)'
			})
		}else{
			$(element).css({
				'transition': 'transform '+ time +'s',
				'transition-delay': index*0.8 + 1.6 + 's',
				'transform': 'translate(' + R_distance + 'px)'
			})
		}
	}else{
		if(index & 1){								
			$(element).css({
				'left': '' + L_disdance + 'px',
				'transition': '',
				'transition-delay': '',
				'transform': ''
			})
		}else{
			$(element).css({
				'left': '' + R_distance + 'px',
				'transition': '',
				'transition-delay': '',
				'transform': ''
			})
		}
	}
}



function fade(selector, time, delay, method, clear) {
	if(!clear){
		$(selector).css({
			'animation': 'fade' + method + ' ' + time + 's both',
			'animation-delay':  + delay + 's'
		})
	}else{
		$(selector).css({
			'opacity': '0',
			'animation': '',
			'animation-delay': ''
		})
	}
}