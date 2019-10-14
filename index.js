createjs.Sound.on("fileload", PlaySound);
createjs.Sound.registerSound("sound/Coursework_08.ogg", "play");
function PlaySound() {createjs.Sound.play("play");}

var canvas = document.getElementById('canvas'),
 body =document.getElementsByTagName('body')[0],
stage = new createjs.Stage(canvas);

canvas.style.backgroundColor="#000";

var circle1 = new createjs.Shape();
stage.addChild(circle1);
circle1.x = 640;
circle1.y = 360;
circle1.scaleX=0;
circle1.scaleY=0;
circle1.regX = 50;
circle1.regY = 50;

var circle3 = new createjs.Shape();
stage.addChild(circle3);
circle3.x = 640;
circle3.y = 360;
circle3.scaleX=0;
circle3.scaleY=0;
circle3.regX = 50;
circle3.regY = 50;

var square1 = new createjs.Shape();
stage.addChild(square1);
square1.x = 640;
square1.y = 360;
square1.scaleX=0;
square1.scaleY=0;
square1.regX = 50;
square1.regY = 50;
square1.rotation = 15;
square1.alpha = 0;

var square2 = new createjs.Shape();
stage.addChild(square2);
square2.x = 640;
square2.y = 360;
square2.scaleX=0;
square2.scaleY=0;
square2.regX = 50;
square2.regY = 50;
square2.rotation = 15;
square2.alpha = 0;

var square3 = new createjs.Shape();
stage.addChild(square3);
square3.x = 640;
square3.y = 360;
square3.scaleX=0;
square3.scaleY=0;
square3.regX = 50;
square3.regY = 50;
square3.rotation = 15;
square3.alpha = 0;

var circle2 = new createjs.Shape();
stage.addChild(circle2);
circle2.x = 640;
circle2.y = 360;
circle2.scaleX=0;
circle2.scaleY=0;
circle2.regX = 50;
circle2.regY = 50;

var rectangle1 = new createjs.Shape();
stage.addChild(rectangle1);
rectangle1.x = 565;
rectangle1.y = 520;
rectangle1.scaleX=0;
rectangle1.scaleY=0;
rectangle1.regX = 0;
rectangle1.regY =90 ;
rectangle1.rotation = 45;
rectangle1.alpha = 0;

var rectangle2 = new createjs.Shape();
stage.addChild(rectangle2);
rectangle2.x = 510;
rectangle2.y = 465;
rectangle2.scaleX=0;
rectangle2.scaleY=0;
rectangle2.regX = 0;
rectangle2.regY =90;
rectangle2.rotation = 45;
rectangle2.alpha = 0;

var rectangle3 = new createjs.Shape();
stage.addChild(rectangle3);
rectangle3.x = 460;
rectangle3.y = 410;
rectangle3.scaleX=0;
rectangle3.scaleY=0;
rectangle3.regX = 0;
rectangle3.regY = 90 ;
rectangle3.rotation = 45;
rectangle3.alpha = 0;



var a = {
	cp0x0: 28,
	cp0y0: -28,
	cp0x1: 72,
	cp0y1: -28,
	cp1x0: 128,
	cp1y0: 28,
	cp1x1: 128,
	cp1y1: 72,
	cp2x0: 72,
	cp2y0: 128,
	cp2x1: 28,
	cp2y1: 128,
	cp3x0: -28,
	cp3y0: 72,
	cp3x1: -28,
	cp3y1: 28,
	x0: 100,
	y0: 0,
	x1: 100,
	y1: 100,
	x2: 0,
	y2: 100,	
	x3: 0,
	y3: 0
}


////////////////////////////line

function fn_after_line(){
	var ln1 = new createjs.Shape();
ln1.graphics
.setStrokeStyle(213)
.beginStroke("#fff")
.setStrokeDash([250,500,250], 1000)
.arc(100, 100, 475, 21 , Math.PI,false)
.endStroke();

ln1.x = 640;
ln1.y = 360;
ln1.regX=100;
ln1.regY=100;
ln1.alpha=0;
ln1.rotation=-102;
stage.addChild(ln1);

var a1 = {
	b: 1000	
};

TweenMax.to(a1, 4, {
	b: 0,
	
	onUpdate: function () {
		ln1.graphics.clear()
		.setStrokeStyle(213, 0)
		.beginStroke("#fff")
		.setStrokeDash([500,500], a1.b)
		.arc(100, 100, 475, 21, Math.PI,false)
		.endStroke();	
  },onStart:function(){
	TweenMax.to(ln1,0.0001, {alpha:1,delay:40});
  }
});

TweenMax.to(ln1, 1, {rotation:90,alpha:1, ease: Circ.easeInOut,onStart:function(){
	TweenMax.to(ln1, 0.1, {alpha:0,delay:1});
  }
   
 });  

var ln2 = new createjs.Shape();
ln2.graphics
.setStrokeStyle(213, 0)
.beginStroke("#fff")
.setStrokeDash([500, 250], 1000)
.arc(100, 100, 475, 21 , Math.PI,false)
.endStroke();

ln2.x = 640;
ln2.y = 360;
ln2.regX=100;
ln2.regY=100;
ln2.alpha=0;
ln2.rotation=-280;
stage.addChild(ln2);

var a2 = {
	b: 1000
};

TweenMax.to(a2, 4, {
	b: 0,
		
	onUpdate: function () {
		ln2.graphics.clear()
		.setStrokeStyle(213, 0)
		.beginStroke("#fff")
		.setStrokeDash([500, 500], a2.b)
		.arc(100, 100, 475, 21, Math.PI,false)
		.endStroke();
	},onStart:function(){
	TweenMax.to(ln2,0.0001, {alpha:1,delay:40});
  }
});
TweenMax.to(ln2, 1, {rotation:-90,alpha:1, ease: Circ.easeInOut, onStart:function(){
	TweenMax.to(ln2, 0.1, {alpha:0,delay:1});
}
  	
 }); 

var ln3 = new createjs.Shape();
ln3.graphics
.setStrokeStyle(213,0)
.beginStroke("#fff")
.setStrokeDash([500, 250], 1000)
.arc(100, 100, 263,15 , Math.PI,false)
.endStroke();

ln3.x = 640;
ln3.y = 360;
ln3.regX=100;
ln3.regY=100;
ln3.rotation=-55;
stage.addChild(ln3);

var a3 = {
	b: 1000,
	c: 3500
};

TweenMax.to(a3, 3, {
	b: 0,	
	onUpdate: function () {
		ln3.graphics.clear()
		.setStrokeStyle(213, 0)
		.beginStroke("#fff")
		.setStrokeDash([250,500,250], a3.b)
		.arc(100, 100, 263, 15, Math.PI,false)
		.endStroke();	
  }
});

TweenMax.to(ln3, 1, {rotation:90, ease: Circ.easeInOut,onStart:function(){
	TweenMax.to(ln3, 0.1, {alpha:0,delay:1});
  }
   
 });  


var ln4 = new createjs.Shape();
ln4.graphics
.setStrokeStyle(213, 0)
.beginStroke("#fff")
.setStrokeDash([500, 250], 1000)
.arc(100, 100, 263,15 , Math.PI,false)
.endStroke();

ln4.x = 640;
ln4.y = 360;
ln4.regX=100;
ln4.regY=100;
ln4.rotation=-235;
stage.addChild(ln4);

var a4 = {
	b: 1000
};

TweenMax.to(a4, 3, {
	b: 0,
		
	onUpdate: function () {
		ln4.graphics.clear()
		.setStrokeStyle(213, 0)
		.beginStroke("#fff")
		.setStrokeDash([250,500,250], a4.b)
		.arc(100, 100, 263,15, Math.PI,false)
		.endStroke();
	}
});
TweenMax.to(ln4, 1, {rotation:-90, ease: Circ.easeInOut, onStart:function(){
	TweenMax.to(ln4, 0.1, {alpha:0,delay:1});
}
  	
   
 }); 

var ln5 = new createjs.Shape();
ln5.graphics
.setStrokeStyle(213)
.beginStroke("#fff")
.setStrokeDash([250,500,250], 1000)
.arc(100, 100, 689, 27 , Math.PI,false)
.endStroke();

ln5.x = 640;
ln5.y = 360;
ln5.regX=100;
ln5.regY=100;
ln5.alpha=0;
ln5.rotation=-130;
stage.addChild(ln5);

var a5 = {
	b: 1000
};

TweenMax.to(a5, 5, {
	b: 0,

	onUpdate: function () {
		ln5.graphics.clear()
		.setStrokeStyle(213, 0)
		.beginStroke("#fff")
		.setStrokeDash([500,500], a5.b)
		.arc(100, 100, 689 , 27, Math.PI,false)
		.endStroke();	
  },onStart:function(){
	TweenMax.to(ln2,0.0001, {alpha:1,delay:40});
  }
});

TweenMax.to(ln5, 1, {rotation:90,alpha:1,ease: Circ.easeInOut,onStart:function(){
	TweenMax.to(ln5, 0.1, {alpha:0,delay:1});
  }
   
 });  


var ln6 = new createjs.Shape();
ln6.graphics
.setStrokeStyle(213, 0)
.beginStroke("#fff")
.setStrokeDash([500, 250], 1000)
.arc(100, 100,689, 27 , Math.PI,false)
.endStroke();

ln6.x = 640;
ln6.y = 360;
ln6.regX=100;
ln6.regY=100;
ln6.alpha=0;
ln6.rotation=-320;
stage.addChild(ln6);

var a6 = {
	b: 1000
};

TweenMax.to(a6, 5, {
	b: 0,
		
	onUpdate: function () {
		ln6.graphics.clear()
		.setStrokeStyle(213, 0)
		.beginStroke("#fff")
		.setStrokeDash([500, 500], a6.b)
		.arc(100, 100, 689 , 27, Math.PI,false)
		.endStroke();
	},onStart:function(){
	TweenMax.to(ln2,0.0001, {alpha:1,delay:40});
  }
});
TweenMax.to(ln6, 1, {rotation:-90,alpha:1,ease: Circ.easeInOut, onStart:function(){
	TweenMax.to(ln6, 0.1, {alpha:0,delay:1});
}
  	
 }); 

}






//-------------------------------------text

var text1 = new createjs.Text("YOUR   NAME", "bold 36px Lucida Sans", "#fff");

text1.shadow = new createjs.Shadow("#024e34", 5, 5, 4);

	text1.beginStroke = "red";
    text1.textBaseline = "middle";
    text1.textAlign = "center";    
    text1.x = 640;
    text1.y = 360;
    text1.scaleX=200;
     text1.scaleY=200;
     text1.alpha=0;
   	 text1.outline=0.3;

 text1.filters = [
     // new createjs.ColorFilter(0, 0, 0, 1, 255, 0, 0),
     new createjs.BlurFilter(1, 1, 2)
 ];
 text1.cache(-200, -200, 800, 600);

var text2 = text1.clone();
text2.outline = false;
text2.color = "#35d09e";


 stage.addChild(text2,text1); 





///////////////////////////////////figure
TweenMax.to(circle1,2.17,{scaleX:9.3,scaleY:9.3,})
TweenMax.to(circle3,1.82,{scaleX:1.5,scaleY:1.5,delay:0.22,onStart:fn_circl_index3})
TweenMax.to(square1,0.01,{scaleX:2,scaleY:2,alpha:1,delay:1.09,onStart:fn_square1_scale})
TweenMax.to(square2,0.01,{scaleX:2,scaleY:2,alpha:1,delay:1.11,onStart:fn_square2_scale})
TweenMax.to(square3,0.01,{scaleX:2,scaleY:2,alpha:1,delay:1.13,onStart:fn_square3_scale})
TweenMax.to(circle2,0.5,{scaleX:2.2,scaleY:2.2,delay:0.17,onComplete:fn_circle2_scale})
TweenMax.to(rectangle1,0.01,{scaleX:0.2,scaleY:0.2,delay:1.05,onComplete:fn_rectangle1_scale})
TweenMax.to(rectangle1,0.01,{scaleX:0.2,scaleY:0.2,delay:1.05,onComplete:fn_rectangle1_scale})
TweenMax.to(rectangle1,0.01,{scaleX:0.2,scaleY:0.2,delay:1.05,onComplete:fn_rectangle1_scale})


TweenMax.to(text1, 1.2, {scaleX:2,scaleY:2,alpha:1,delay:2.28}); 
TweenMax.to(text2, 1.2, {scaleX:2,scaleY:2,alpha:1,delay:2.28}); 

function fn_circl_index3(){
	TweenMax.to(circle3,2.82,{scaleX:9.5,scaleY:9.5,})
}
function fn_circle2_scale(){
	TweenMax.to(circle2,0.2,{scaleX:0.1,scaleY:0.1,delay:2.40,onComplete: function(){
	TweenMax.to(circle2, 0.06, {scaleX:14,scaleY:14,alpha:1,
		onUpdate: function () {
		circle2.graphics.beginFill ("#000")
		.setStrokeStyle(3)
		.mt(0, 0)
		.bt(a.cp0x0, a.cp0y0, a.cp0x1, a.cp0y1, 100, 0)
		.bt(a.cp1x0, a.cp1y0, a.cp1x1, a.cp1y1, 100, 100)
		.bt(a.cp2x0, a.cp2y0, a.cp2x1, a.cp2y1, 0, 100)
		.bt(a.cp3x0, a.cp3y0, a.cp3x1, a.cp3y1, 0, 0)
		.cp()
	 	.endStroke();
	  }
   });
}

	})
}
function fn_square1_scale(){
	TweenMax.to(square1,2,{scaleX:14,scaleY:14,rotation:90})
}

function fn_square2_scale(){
	TweenMax.to(square2,2,{scaleX:14,scaleY:14,rotation:90})
}

function fn_square3_scale(){
	TweenMax.to(square3,2,{scaleX:14,scaleY:14,rotation:90})
}

function fn_rectangle1_scale(){
	TweenMax.to(rectangle1,0.01,{alpha:1,onComplete:fn_rectangle1})
	TweenMax.to(rectangle2,0.01,{alpha:1,onComplete:fn_rectangle1})
	TweenMax.to(rectangle3,0.01,{alpha:1,onComplete:fn_rectangle1})
	
}
function fn_rectangle1(){
		TweenMax.to(rectangle1,0.6,{scaleX:0.3,scaleY:4,onComplete:fn_rectangle_end})
		TweenMax.to(rectangle2,0.6,{scaleX:0.3,scaleY:4,onComplete:fn_rectangle_end})
		TweenMax.to(rectangle3,0.6,{scaleX:0.3,scaleY:4,onComplete:fn_rectangle_end})
	}


function fn_rectangle_end(){
		TweenMax.to(rectangle1,0.01,{rotation:225,y:314,x:813,onComplete:fn_rectangle1_scale})
		TweenMax.to(rectangle2,0.01,{rotation:225,y:261,x:757,onComplete:fn_rectangle1_scale})
		TweenMax.to(rectangle3,0.01,{rotation:225,y:205,x:708,onComplete:fn_rectangle1_scale})
		function fn_rectangle1_scale(){
 	
		TweenMax.to(rectangle1,0.6,{scaleX:0.3,scaleY:0,ease: Power4.easeOut})
		TweenMax.to(rectangle2,0.6,{scaleX:0.3,scaleY:0,ease: Power4.easeOut})
		TweenMax.to(rectangle3,0.6,{scaleX:0.3,scaleY:0,ease: Power4.easeOut,onComplete:fn_after_line})
 }
}

circle1.graphics	
	.beginFill ("#397446")
	.setStrokeStyle(4)
	.mt(0, 0)
	.bt(a.cp0x0, a.cp0y0, a.cp0x1, a.cp0y1, 100, 0)
	.bt(a.cp1x0, a.cp1y0, a.cp1x1, a.cp1y1, 100, 100)
	.bt(a.cp2x0, a.cp2y0, a.cp2x1, a.cp2y1, 0, 100)
	.bt(a.cp3x0, a.cp3y0, a.cp3x1, a.cp3y1, 0, 0)
	.cp()
 	.endStroke(); 

 circle3.graphics
	.beginFill ("#171717")
	.setStrokeStyle(4)
	.mt(0, 0)
	.bt(a.cp0x0, a.cp0y0, a.cp0x1, a.cp0y1, 100, 0)
	.bt(a.cp1x0, a.cp1y0, a.cp1x1, a.cp1y1, 100, 100)
	.bt(a.cp2x0, a.cp2y0, a.cp2x1, a.cp2y1, 0, 100)
	.bt(a.cp3x0, a.cp3y0, a.cp3x1, a.cp3y1, 0, 0)
	.cp()
 	.endStroke();

circle2.graphics	
	.beginFill ("#cade1a")
	.setStrokeStyle(3)
	.mt(0, 0)
	.bt(a.cp0x0, a.cp0y0, a.cp0x1, a.cp0y1, 100, 0)
	.bt(a.cp1x0, a.cp1y0, a.cp1x1, a.cp1y1, 100, 100)
	.bt(a.cp2x0, a.cp2y0, a.cp2x1, a.cp2y1, 0, 100)
	.bt(a.cp3x0, a.cp3y0, a.cp3x1, a.cp3y1, 0, 0)
	.cp()
 	.endStroke();

 	square1.graphics	
	.beginFill ("white")
	.setStrokeStyle(3)
	.mt(0, 0)
	.lt(a.x0,a.y0)
	.lt(a.x1,a.y1)
	.lt(a.x2,a.y2)
	.lt(a.x3,a.y3)	
	.cp()
 	.endStroke();

 	square2.graphics	
	.beginFill ("#397446")
	.setStrokeStyle(3)
	.mt(0, 0)
	.lt(a.x0,a.y0)
	.lt(a.x1,a.y1)
	.lt(a.x2,a.y2)
	.lt(a.x3,a.y3)	
	.cp()
 	.endStroke();

 	square3.graphics	
	.beginFill ("#1e1e1e")
	.setStrokeStyle(3)
	.mt(0, 0)
	.lt(a.x0,a.y0)
	.lt(a.x1,a.y1)
	.lt(a.x2,a.y2)
	.lt(a.x3,a.y3)	
	.cp()
 	.endStroke();

 	rectangle1.graphics	
	.beginFill ("white")
	.setStrokeStyle(3)
	.mt(0, 0)
	.lt(a.x0,a.y0)
	.lt(a.x1,a.y1)
	.lt(a.x2,a.y2)
	.lt(a.x3,a.y3)	
	.cp()
 	.endStroke();

 	rectangle2.graphics	
	.beginFill ("white")
	.setStrokeStyle(3)
	.mt(0, 0)
	.lt(a.x0,a.y0)
	.lt(a.x1,a.y1)
	.lt(a.x2,a.y2)
	.lt(a.x3,a.y3)	
	.cp()
 	.endStroke();

 	rectangle3.graphics	
	.beginFill ("white")
	.setStrokeStyle(3)
	.mt(0, 0)
	.lt(a.x0,a.y0)
	.lt(a.x1,a.y1)
	.lt(a.x2,a.y2)
	.lt(a.x3,a.y3)	
	.cp()
 	.endStroke();

 	
TweenMax.ticker.addEventListener("tick", stage.update, stage);
TweenMax.ticker.fps(60);
