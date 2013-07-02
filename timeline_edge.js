/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'scene3_background',
            display:'none',
            type:'image',
            rect:['1024px','0px','1024px','790px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Screen%20Shot%202013-07-01%20at%202.34.46%20PM.png",'0px','0px'],
            filter:[0,-90.734375,1,1,0,0,0,0,"rgba(0,0,0,0)",0,0,0]
         },
         {
            id:'scene2_background',
            type:'image',
            rect:['0px','0px','1024px','790px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Screen%20Shot%202013-07-01%20at%202.34.46%20PM.png",'0px','0px']
         },
         {
            id:'scene1_background',
            type:'image',
            rect:['0px','0px','1024px','790px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Screen%20Shot%202013-07-01%20at%202.34.46%20PM.png",'0px','0px']
         },
         {
            id:'slide3_character',
            type:'group',
            rect:['-454px','308','590','525','auto','auto'],
            c:[
            {
               id:'stick_figure_neutral2',
               type:'image',
               rect:['0px','0px','522px','525px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"stick_figure_neutral.png",'0px','0px']
            },
            {
               id:'stick_figure_neutral3',
               type:'image',
               rect:['125px','29px','465px','467px','auto','auto'],
               fill:["rgba(0,0,0,0)",im+"stick_figure_neutral.png",'0px','0px']
            }]
         },
         {
            id:'slide2_character',
            type:'image',
            rect:['241px','87px','922px','926px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"stick_figure_neutral.png",'0px','0px']
         },
         {
            id:'slide1_character',
            type:'image',
            rect:['241px','87px','922px','926px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"stick_figure_neutral.png",'0px','0px']
         },
         {
            id:'slide3_year',
            type:'text',
            rect:['33px','585px','326px','146px','auto','auto'],
            text:"1992",
            font:['Arial, Helvetica, sans-serif',130,"rgba(255,255,255,1.00)","800","none",""]
         },
         {
            id:'slide2_year',
            type:'text',
            rect:['33px','585px','326px','146px','auto','auto'],
            text:"1991",
            font:['Arial, Helvetica, sans-serif',130,"rgba(255,255,255,1.00)","800","none",""]
         },
         {
            id:'slide1_year',
            type:'text',
            rect:['33px','585px','326px','146px','auto','auto'],
            text:"1990",
            font:['Arial, Helvetica, sans-serif',130,"rgba(255,255,255,1.00)","800","none",""]
         },
         {
            id:'next',
            type:'rect',
            rect:['984px','0px','40px','768px','auto','auto'],
            fill:["rgba(255,0,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'prev',
            type:'rect',
            rect:['0px','0px','40px','768px','auto','auto'],
            fill:["rgba(255,0,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'details',
            type:'rect',
            rect:['674','0','auto','auto','auto','auto']
         },
         {
            id:'start',
            type:'rect',
            rect:['747','0','auto','auto','auto','auto']
         },
         {
            id:'slide1_trigger',
            type:'rect',
            rect:['725px','0px','100px','100px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         }],
         symbolInstances: [
         {
            id:'details',
            symbolName:'details'
         },
         {
            id:'start',
            symbolName:'start'
         }
         ]
      },
   states: {
      "Base State": {
         "${_slide3_year}": [
            ["style", "top", '585px'],
            ["style", "font-size", '130px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "display", 'block'],
            ["style", "font-weight", '800'],
            ["style", "left", '-326px'],
            ["style", "width", '326px']
         ],
         "${_slide2_character}": [
            ["style", "top", '43px'],
            ["subproperty", "filter.sepia", '0.67097355769231'],
            ["subproperty", "filter.contrast", '1.1647636217949'],
            ["subproperty", "filter.hue-rotate", '156.773437deg'],
            ["style", "display", 'block'],
            ["style", "height", '1598px'],
            ["style", "left", '-1113px'],
            ["style", "width", '1591px']
         ],
         "${_scene1_background}": [
            ["style", "top", '0px'],
            ["style", "height", '790px'],
            ["style", "display", 'block'],
            ["style", "left", '0px'],
            ["style", "width", '1024px']
         ],
         "${_slide3_character}": [
            ["style", "left", '-454px']
         ],
         "${_slide1_character}": [
            ["style", "top", '87px'],
            ["style", "height", '926px'],
            ["style", "display", 'block'],
            ["style", "left", '-654px'],
            ["style", "width", '922px']
         ],
         "${_scene3_background}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["subproperty", "filter.hue-rotate", '-90.734375deg'],
            ["style", "height", '790px'],
            ["style", "left", '1024px'],
            ["style", "width", '1024px']
         ],
         "${_slide1_trigger}": [
            ["style", "top", '0px'],
            ["style", "height", '100px'],
            ["style", "opacity", '0'],
            ["style", "left", '725px'],
            ["style", "width", '100px']
         ],
         "${_stick_figure_neutral2}": [
            ["style", "top", '0px'],
            ["style", "height", '525px'],
            ["style", "left", '0px'],
            ["style", "width", '522px']
         ],
         "${_slide2_year}": [
            ["style", "top", '585px'],
            ["style", "width", '326px'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '800'],
            ["style", "left", '-326px'],
            ["style", "font-size", '130px']
         ],
         "${_prev}": [
            ["style", "top", '0px'],
            ["style", "height", '768px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '40px']
         ],
         "${_slide1_year}": [
            ["style", "top", '585px'],
            ["style", "width", '326px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "display", 'block'],
            ["style", "font-weight", '800'],
            ["style", "left", '-326px'],
            ["style", "font-size", '130px']
         ],
         "${_next}": [
            ["style", "top", '0px'],
            ["style", "height", '768px'],
            ["style", "opacity", '0'],
            ["style", "left", '984px'],
            ["style", "width", '40px']
         ],
         "${_scene2_background}": [
            ["style", "top", '0px'],
            ["subproperty", "filter.hue-rotate", '139.914062deg'],
            ["style", "display", 'block'],
            ["style", "height", '790px'],
            ["style", "left", '1024px'],
            ["style", "width", '1024px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '1024px'],
            ["style", "height", '768px'],
            ["style", "overflow", 'hidden']
         ],
         "${_stick_figure_neutral3}": [
            ["style", "height", '467px'],
            ["style", "top", '29px'],
            ["style", "left", '125px'],
            ["style", "width", '465px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         timeline: [
            { id: "eid45", tween: [ "subproperty", "${_scene2_background}", "filter.hue-rotate", '139.914062deg', { fromValue: '139.914062deg'}], position: 500, duration: 0, easing: "easeInOutQuint" },
            { id: "eid24", tween: [ "style", "${_scene1_background}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0, easing: "easeInOutQuint" },
            { id: "eid41", tween: [ "style", "${_scene2_background}", "display", 'block', { fromValue: 'block'}], position: 500, duration: 0, easing: "easeInOutQuint" },
            { id: "eid37", tween: [ "style", "${_scene2_background}", "display", 'block', { fromValue: 'block'}], position: 1000, duration: 0, easing: "easeInOutQuint" },
            { id: "eid72", tween: [ "style", "${_scene3_background}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeInOutQuint" },
            { id: "eid19", tween: [ "style", "${_slide1_character}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid49", tween: [ "style", "${_slide2_character}", "left", '-481px', { fromValue: '-1113px'}], position: 500, duration: 500, easing: "easeInOutQuint" },
            { id: "eid75", tween: [ "style", "${_slide2_character}", "left", '713px', { fromValue: '-481px'}], position: 1000, duration: 500, easing: "easeInOutQuint" },
            { id: "eid46", tween: [ "style", "${_slide2_character}", "display", 'block', { fromValue: 'block'}], position: 500, duration: 0, easing: "easeInOutQuint" },
            { id: "eid36", tween: [ "style", "${_slide2_character}", "display", 'block', { fromValue: 'block'}], position: 1000, duration: 0, easing: "easeInOutQuint" },
            { id: "eid86", tween: [ "style", "${_slide3_year}", "left", '53px', { fromValue: '-326px'}], position: 1000, duration: 500, easing: "easeInOutQuint" },
            { id: "eid91", tween: [ "style", "${_slide1_character}", "left", '241px', { fromValue: '-654px'}], position: 0, duration: 505 },
            { id: "eid18", tween: [ "style", "${_slide1_character}", "left", '747px', { fromValue: '241px'}], position: 505, duration: 495 },
            { id: "eid81", tween: [ "style", "${_slide2_year}", "left", '33px', { fromValue: '-326px'}], position: 500, duration: 500, easing: "easeInOutQuint" },
            { id: "eid82", tween: [ "style", "${_slide2_year}", "left", '1024px', { fromValue: '33px'}], position: 1000, duration: 500, easing: "easeInOutQuint" },
            { id: "eid74", tween: [ "style", "${_scene3_background}", "left", '0px', { fromValue: '1024px'}], position: 1000, duration: 500, easing: "easeInOutQuint" },
            { id: "eid43", tween: [ "style", "${_scene2_background}", "left", '0px', { fromValue: '1024px'}], position: 500, duration: 500, easing: "easeInOutQuint" },
            { id: "eid73", tween: [ "style", "${_scene2_background}", "left", '-1024px', { fromValue: '0px'}], position: 1000, duration: 500, easing: "easeInOutQuint" },
            { id: "eid22", tween: [ "style", "${_scene1_background}", "left", '-1024px', { fromValue: '0px'}], position: 500, duration: 500, easing: "easeInOutQuint" },
            { id: "eid69", tween: [ "style", "${_slide3_year}", "display", 'block', { fromValue: 'block'}], position: 500, duration: 0, easing: "easeInOutQuint" },
            { id: "eid35", tween: [ "style", "${_slide3_year}", "display", 'block', { fromValue: 'block'}], position: 1000, duration: 0, easing: "easeInOutQuint" },
            { id: "eid90", tween: [ "style", "${_slide1_year}", "left", '33px', { fromValue: '-326px'}], position: 0, duration: 500, easing: "easeInOutQuint" },
            { id: "eid25", tween: [ "style", "${_slide1_year}", "left", '1024px', { fromValue: '33px'}], position: 500, duration: 500, easing: "easeInOutQuint" },
            { id: "eid79", tween: [ "style", "${_slide2_year}", "display", 'block', { fromValue: 'block'}], position: 500, duration: 0, easing: "easeInOutQuint" },
            { id: "eid80", tween: [ "style", "${_slide2_year}", "display", 'block', { fromValue: 'block'}], position: 1000, duration: 0, easing: "easeInOutQuint" },
            { id: "eid27", tween: [ "style", "${_slide1_year}", "display", 'block', { fromValue: 'block'}], position: 500, duration: 0, easing: "easeInOutQuint" },
            { id: "eid26", tween: [ "style", "${_slide1_year}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0, easing: "easeInOutQuint" },
            { id: "eid78", tween: [ "style", "${_slide3_character}", "left", '558px', { fromValue: '-454px'}], position: 1000, duration: 500 }         ]
      }
   }
},
"start": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-34px','-99px','138px','124px','auto','auto'],
      id: 'start_element',
      transform: [[],[],[],['0.5','0.5']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/start.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_start_element}": [
            ["style", "top", '-93px'],
            ["style", "left", '-34px'],
            ["transform", "scaleY", '0.5'],
            ["transform", "scaleX", '0.5']
         ],
         "${symbolSelector}": [
            ["style", "height", '62px'],
            ["style", "width", '69px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: false,
         timeline: [
            { id: "eid151", tween: [ "style", "${_start_element}", "top", '-31px', { fromValue: '-93px'}], position: 0, duration: 250 }         ]
      }
   }
},
"details": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'details_element',
      type: 'image',
      rect: ['0px','-768px','274px','768px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Screen%20Shot%202013-07-01%20at%203.04.37%20PM.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_details_element}": [
            ["style", "top", '-768px'],
            ["style", "height", '768px'],
            ["style", "left", '0px'],
            ["style", "width", '274px']
         ],
         "${symbolSelector}": [
            ["style", "height", '768px'],
            ["style", "width", '274px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: false,
         timeline: [
            { id: "eid153", tween: [ "style", "${_details_element}", "top", '0px', { fromValue: '-768px'}], position: 0, duration: 250 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-9508933");
