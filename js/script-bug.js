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
			myAnimate(".logo_1", {'opacity':'0'}, 'fadeIn 0.5s both', '0');
			myAnimate(".logo_2", {'opacity':'0'}, 'fadeIn 0.5s both', '1s');
			if(index == 1){
				$(".timeEvent").each(function(index, element) {
					var d = $(element).data('delay');
					
					if(index & 1){
						myAnimate(element, null, 'slideLeftToRight-1 0.6s both', d);
					}else{
						myAnimate(element, null, 'slideRightToLeft-1 0.6s both', d);
					}
				});
			}else if(index ==2){
				$("#prize li").each(function (index, element) {
					var d = $(element).data('delay');
					myAnimate(element, null, 'scaleBig 0.6s both', d);
				})
			}else{
				$(".iphone-info").each(function (index, element) {
					var d = $(this).data('delay');
					if(index == 1){
						myAnimate(element, null, 'slideRightToLeft-2 0.6s both', d);
					}else{
						myAnimate(element, null, 'slideLeftToRight-2 0.6s both', d);
					}
				});
				myAnimate('.btnGroup', null, 'slideUp 0.6s both', '2.2s');
			}
		},
		onLeave: function (index, nextIndex, direction) {
			myAnimate(".logo_1", {'opacity':'0'}, '', 0);
			myAnimate(".logo_2", {'opacity':'0'}, '', 0);
			if(index == 1){
				$(".timeEvent").each(function(index, element) {
					if(index & 1){
						myAnimate(element, {'left': '-610px'}, '', 0);
					}else{
						myAnimate(element, {'left': '344px'}, '', 0);
					}
				});
			}else if(index ==2){
				$("#prize li").each(function (index, element) {
					myAnimate(element, {'transform': 'scale(0)'}, '', 0);
				})
			}else{
				$(".iphone-info").each(function (index, element) {
					if(index == 1){
						myAnimate(element, {'left':'350px'}, '', 0);
					}else{
						myAnimate(element, {'left':'-280px'}, '', 0);
					}
				});
				myAnimate('.btnGroup', null, '', 0);
			}
		}
	});
	$("#share").click(function(event) {
		myAnimate('.mask', {'z-index': '1'}, 'mask 0.5s both', 0);
	});
	$(".mask").click(function(event) {
		myAnimate('.mask', {'z-index': '-1'}, 'cancelMask 0.8s both', 0);
	});
})

/*
	@param element :加载动画的元素
	@param init : 在动画加载之前需要设置好的状态
	@param animation: 动画的css语句
	@param delay: animation-delay的值
 */

function myAnimate(element, init, animation, delay ) {
	$(element).css($.extend({
			'animation': '' + animation,
			'-webkit-animation': '' + animation,
			'animation-delay': ''+ delay	
		}, init)
	)
}

