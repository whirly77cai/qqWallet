 $('.layout').fullpage({
                //anchors: ['page1', 'page2', 'page3'],
                //'navigation': true,
                //'navigationPosition': 'right',
                afterLoad: function(anchorLink, index){
                        if(index == 1){
                                
                        }else if(index == 2){
                            $("#prize li").each(function (index, element) {
                                var d = $(element).data('delay');
                                myAnimate(element, null, 'scaleBig 0.6s both', d)
                            })    
                        }
                        
                },
                onLeave: function(index, direction){
                        if(index == 1){
                                
                        }else if(index == 2){
                            $("#prize li").each(function (index, element) {
                                myAnimate(element, {'transform': 'scale(0)'}, '', 0)
                            })    
                        }
                }
        });       



 function myAnimate(element, init, animation, delay ) {
        $(element).css($.extend({
                        'animation': '' + animation,
                        '-webkit-animation': '' + animation,
                        'animation-delay': ''+ delay    
                }, init)
        )
}