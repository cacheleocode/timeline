
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){var timelinePos=0;var animTimelineLength=sym.getDuration();this.swipeStartX;this.swipeEndX;this.swipePadding=60;this.onSwipeLeft=function()
{if(sym.getPosition()!=500)
{sym.playReverse();}}
this.onSwipeRight=function()
{if(sym.getPosition()!=animTimelineLength)
{sym.play();}}
this.onStop=function()
{sym.stop();}
this.onSwipe=function()
{if(this.swipeStartX<this.swipeEndX-this.swipePadding)
{this.onSwipeLeft();}else if(this.swipeEndX<this.swipeStartX-this.swipePadding)
{this.onSwipeRight();}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Stage}","touchend",function(sym,e){if(e.pageX==undefined){var touch=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];this.swipeEndX=touch.pageX;this.onSwipe();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Stage}","touchstart",function(sym,e){if(e.pageX==undefined){var touch=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];this.swipeStartX=touch.pageX;}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.stop();sym.getSymbol("start").play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){sym.stop();sym.getSymbol("start").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_next}","click",function(sym,e){if(sym.getPosition()!=sym.getDuration())
{sym.play();if(sym.getSymbol("start").getPosition()==250)
{sym.getSymbol("start").playReverse(250);}
if(sym.getSymbol("details").getPosition()==250)
{sym.getSymbol("details").playReverse(250);}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_prev}","click",function(sym,e){if(sym.getPosition()!=500)
{sym.playReverse();if(sym.getSymbol("start").getPosition()==250)
{sym.getSymbol("start").playReverse(250);}
if(sym.getSymbol("details").getPosition()==250)
{sym.getSymbol("details").playReverse(250);}}});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.stop();sym.getSymbol("start").play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.getSymbol("start").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_slide1_trigger}","click",function(sym,e){if(sym.getSymbol("start").getPosition()==250)
{sym.getSymbol("start").playReverse(250);}
else
{sym.getSymbol("start").play();}
if(sym.getSymbol("details").getPosition()==250)
{sym.getSymbol("details").playReverse(250);}
else
{sym.getSymbol("details").play();}});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'start_animation'
(function(symbolName){})("start");
//Edge symbol end:'start'

//=========================================================

//Edge symbol: 'end_animation'
(function(symbolName){})("details");
//Edge symbol end:'details'
})(jQuery,AdobeEdge,"EDGE-9508933");