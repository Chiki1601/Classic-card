$(document).ready(function() {
  var $sel = function(s) {
      return document.querySelector(s);
    };
    var blueshad = [
      
      $sel("bhairshad"),
      $sel("bheadshad"),
      $sel("shirtshad"),
      $sel("blarmshad"),
      $sel("brhandshad"),
      $sel("bpantsshad"),
      $sel("brlegshad")
    ];
    var bluebody = [
      $sel("bhair"),
      $sel("bhead"),
      $sel("bshirt"),
      $sel("blarm"),
      $sel("brhand"),
      $sel("bpantsb"),
      $sel("bpantsc")
    ];
    var paleshad = [
      $sel("llegshad"),
      $sel("rlegshad"),
      $sel("lhandshad"),
      $sel("dressshad"),
      $sel("hairshad"),
      $sel("dressshad2"),
      $sel("headshad"),
      $sel("head"),
      $sel("rarmshad"),
      $sel("lhairshad")
    ];
    var pinkbody = [
      $sel("lleg"),
      $sel("rleg"),
      $sel("flowinghair"),
      $sel("lhand"),
      $sel("dress"),
      $sel("rarm"),
      $sel("lhair")
    ];
    var palearray = $.makeArray(pinkbody);
   var psharray = $.makeArray(paleshad);
   var darkarray = $.makeArray(bluebody);
   var dsharray = $.makeArray(blueshad);
    var dress = document.getElementById("dress");
    var tl = new TimelineMax({ onUpdate: updateDragger, id:'tltimeline' });
    var windtl = new TimelineMax({id:'windtl',smoothChildTiming:true});
  tl
  .to($('#balloon'), 4,{transformOrigin:'50% 50%', scale:0.6})
  //.to($('#balloon'), 0.9, {rotation:7,repeat:.23},'-=4.0')
  //.to($('#balloon'), 0.9, {rotation:-7,repeatDelay:3},'-=0.1')
  //GSDevTools.create();
  var rtree = $('#righttree');
  var ltree = $('#ltree');
  var lround = $('#lroundtree');
  
  TweenMax.set('#g125171', {y:-579})
  var path1 = "m 119.79974,478.79954 c 27.27333,0 51.55475,-19.45769 79.06553,0 100.71936,71.23627 198.20504,0 225.70504,0"
  
  var path2 = "m 206.64873,509.89464 c 0,0 -81.2331,-4.54569 -102.68277,0 -54.37953,6.78174 -103.65243,-8.32877 -100.40233,0 -11.2589,1.54359 -16.04756,3.97005 -34.09265,0 -18.04509,-3.97005 -102.329981,0 -102.329981,0"
  
  var path3 = "m 55.212078,584.43777 c 20.203049,0.54432 90.192632,-10.91964 127.784292,0 7.45737,2.16622 21.76974,4.55299 30.51176,2.85714 37.56911,-7.28794 80.74193,2.61909 114.69767,-2.85714 17.28595,-2.7878 35.43208,-3.78256 52.52793,0 19.66359,4.35069 3.02303,0 9.02303,0"
  var path4 = "m 95.1335,125.60149 c 0,0 -91.08209,-3.03046 -133.59267,0 -48.28062,3.44179 -86.34034,8.97081 -145.20943,0 -17.30949,-2.63772 -35.86042,4.29315 -52.52793,0 -15.65157,-4.03147 -16.167541,0 -6.167541,0"
  var path5 = "m 119.79974,504.38318 c 15.74755,0 115.57045,34.05467 159.91873,6.42857 87.07598,-54.24267 124.66269,-6.42857 144.85184,-6.42857"
  var path6 = "m 33.201921,46.96315 c 0.195245,-0.35795 76.455929,-6.21175 101.601549,0 53.11841,9.9548 101.44227,-12.02999 142.12949,0 21.38323,4.8824 53.62059,-5.89255 76.26651,-1.01015 26.00321,5.60622 54.27531,0 79.29698,0"
  var path7 = "m 55.212078,8.43777 c 20.203049,0.54432 90.192632,-10.91964 127.784292,0 7.45737,2.16622 21.76974,4.55299 30.51176,2.85714 37.56911,-7.28794 80.74193,2.61909 114.69767,-2.85714 17.28595,-2.7878 35.43208,-3.78256 52.52793,0 19.66359,4.35069 1.02303,0 2.02303,0"
  var path8 = "m 190.31997,557.66873 c -8.7239,4.82722 -14.70563,7.26673 -15.15229,16.41498 0.80626,14.39452 4.67097,30.41142 15.97861,33.64141 22.66951,0.65423 39.49712,-6.95201 55.23715,-14.95359 44.62006,-27.49104 46.12973,-57.35284 80.8122,-78.28682 33.94404,-17.97601 84.67107,-29.5238 97.47972,-46.97209 29.45681,-28.02196 64.39702,-70.893 43.6891,-89.65104 C 422.08889,334.33265 381.98245,355.64584 299.92152,365.73975 203.98193,382.65774 98.870808,309.0131 81.223497,379.62934 75.887355,415.53 148.07285,404.74979 170.622,466.24992 c 16.8881,41.43354 52.49363,71.22087 19.69797,91.41881 z"
  var hairleft = "m 247.5136,562.0588 c 0.0299,2.99942 -7.08993,1.63703 -8.308,6.69261 -3.3912,17.82002 -9.88559,9.08855 -14.3084,18.46235 -5.31537,-2.8767 -4.12265,1.4402 -3.2309,7.8465 1.24843,7.36511 7.33954,5.67041 3.5853,15.77699 -1.8798,0.90635 -3.1558,1.50027 -5.0897,3.60343 -5.65813,-19.4744 -11.49774,-10.74712 -7.0344,-34.1503 3.48304,-14.85248 10.96733,-17.09777 17.5392,-21.69327 2.82005,-1.88118 5.727,-2.25355 7.8465,-2.53857 2.427,0.454 4.4629,1.69006 6.4618,3.00013 0.8627,0.9671 2.0631,1.25884 2.5386,3.00013 z"
  var hairright = "m 241.6614,557.61356 c 1.0824,0.91978 9.2743,-0.56773 12.7285,8.64884 3.9217,8.21199 7.2,21.56381 21.8669,33.1267 4.9228,3.83486 15.59123,2.74919 21.92891,-0.45218 3.46182,-1.78928 7.09657,-2.61734 14.23569,-0.62923 -9.64256,-3.08228 -24.47,9.69522 -32.085,5.48742 9.5253,6.48799 36.0953,8.35229 45.60598,19.85034 -11.21568,-8.15579 -38.28098,-11.66836 -49.52248,-19.68716 7.30686,13.69794 9.7302,23.72529 27.6507,31.76666 5.021,2.43339 23.61308,6.30617 27.22467,14.05278 -5.93511,-6.43174 -18.99084,-6.44728 -30.59524,-9.44479 -10.6626,-2.89897 -13.04316,-7.61582 -18.73173,-18.09785 1.29752,24.25911 16.92207,30.28212 28.404,37.12992 -18.5854,-5.48625 -33.25646,-17.32181 -36.5633,-27.66515 -2.33514,8.30427 0.42266,20.84277 15.77111,32.60563 -18.13713,-3.13139 -28.52298,-18.00752 -40.73851,-36.68527 l -3.7533,-14.03397 c -0.137,-3.55529 0.1693,-8.16215 5.8747,-10.2807 2.0192,-0.59335 4.1104,-2.69764 5.2064,-5.02184 0.69,-1.95823 0.7657,-2.9063 2.3954,-4.73826 -2.3038,-3.02542 1.0534,-5.82219 0.08,-8.57521 -1.3599,-2.24166 -1.9162,-3.84236 -3.2761,-5.48979 0.994,-1.95823 0.5919,-3.91647 0.3264,-5.87469 -0.883,-2.92827 -2.0743,-4.66893 -4.2428,-8.64884 -1.3236,-0.94276 -2.556,-1.79439 -4.0797,-2.93735 -3.148,-1.64641 -3.9152,-2.9527 -5.7115,-4.40601 z"
  var otherleg = "m 315.5715,667.62941 c 1.41345,4.85983 6.55614,11.7116 1.154,24.6934 -9.37839,34.74695 -5.8466,29.08544 -8.7696,43.61731 -4.3834,13.63761 -16.4623,12.87713 -24.6934,26.07807 -7.42,9.79607 -8.2973,21.04604 -12.2313,31.61677 -1.1661,9.09637 -6.6986,13.20265 -10.6159,19.1547 1.0824,0.90404 2.4934,0.65823 2.7694,4.3848 -1.1991,4.20857 -6.0814,2.10299 -10.1543,1.38468 -0.5514,1.04762 -0.4728,2.4553 -3.9233,1.84623 -1.7624,-10.47609 1.6976,-9.73235 3.0957,-13.49239 l 5.5783,-7.34535 c 0.1612,-1.53578 0.1485,-3.30318 -0.9791,-6.55741 0.1569,-2.99777 2.0794,-5.01464 6.1518,-5.83708 2.16286,-13.77379 6.34545,-28.44524 6.4619,-41.30951 l 0.9231,-43.61731 -3.5969,-32.29164 35.2137,0.2133 z"
var blueleg = "m 325.9566,832.63669 c -7.2319,3.79104 -16.2709,-0.24821 -24.6933,-1.61546 -5.4796,-1.39647 -10.8756,-2.37536 -15.9239,-1.61546 -3.1536,-2.47127 -2.5318,-4.52304 -1.8578,-6.56901 0.8313,-2.29084 1.4617,-4.78259 1.8578,-7.50854 -2.63206,-18.92324 -8.70353,-23.0149 -9.0004,-30.46287 -0.44863,-5.97306 -5.41613,-23.08666 -4.6155,-28.38587 0.97551,-7.79785 1.9315,-13.09924 1.6154,-18.00079 -4.9265,-23.83432 -6.5314,-46.7363 -6.7223,-68.84859 11.6863,-1.08095 21.71553,0.88951 33.9543,1.23022 10.28541,0.93522 5.50243,11.9493 6.4618,19.15469 1.14044,11.28733 1.9915,28.66308 -3.9232,42.46341 -1.21271,2.12188 -2.43383,13.17443 -10.4411,25.15496 -2.25464,3.28045 5.82831,40.73218 8.5949,58.61797 8.032,5.6944 17.0248,10.04365 27.232,12.69287 -0.6892,1.23082 0.8509,2.46164 -2.5387,3.69247 z"
var dress3 = "m 207.9866,632.80206 c 2.6808,-6.08963 3.9615,-14.33193 15.7551,-21.51579 14.0748,-5.17704 20.1346,-0.76887 23.3471,9.59996 3.4362,11.87685 6.0526,40.55378 17.2582,59.59076 6.6899,11.66054 18.89221,7.63 32.42164,10.45649 4.52463,0.94526 9.8776,12.28993 3.4792,16.87295 -3.56253,2.55175 -0.89758,10.0862 -7.0692,10.11702 -6.37665,0.0318 -0.67101,5.70011 -5.12663,8.27934 -7.6695,4.43966 -9.74037,5.80606 -13.43974,15.51196 -2.13277,5.59565 -9.54229,-5.41884 -13.63343,-7.39859 -9.86081,-4.77177 -8.85665,2.89685 -22.846,-0.32637 -8.96569,-2.06574 -15.04615,10.46644 -30.00449,4.27359 -11.50267,-4.76218 -27.17826,5.05413 -35.18914,0.78492 -8.98371,-4.78766 -25.79241,-4.20208 -27.38435,-13.00544 -1.06403,-5.88399 -5.20853,-8.34855 -4.16925,-10.97959 2.12066,-5.3686 14.90009,1.02995 21.65099,-5.53922 17.5328,-18.76827 38.0504,-50.8378 48.303,-69.19073 -2.4716,-1.52397 -3.9521,-2.62945 -3.353,-7.53126 z"
var blueshirt = "m 312.1098,612.70391 c 5.09605,-5.1009 7.43175,-13.22449 7.6158,-18.00079 -2.68615,-11.06995 -11.77579,-9.64806 -23.6516,-21.50208 -1.91774,-3.55818 -14.81631,0.0995 -18.7559,1.23308 4.8695,4.93853 4.9386,9.22674 2.809,12.84446 -2.0652,3.04032 -5.5655,3.92809 -8.4036,5.80908 -6.0227,4.33677 -11.604,-3.50909 -12.6273,-0.68554 l -4.8531,18.94312 13.588,26.68162 c 3.1806,15.82377 -1.2187,27.05393 -1.2195,32.67027 7.8463,5.78866 25.8866,8.49371 41.6621,8.02254 3.4301,0.33971 8.1759,-5.14622 8.099,-10.45891 3.89375,-20.4318 -11.24096,-47.14078 -4.2629,-55.55685 z"
var dressnew = "m 207.9866,632.80206 c 2.6808,-6.08963 3.9615,-14.33193 15.7551,-21.51579 14.0748,-5.17704 20.1346,-0.76887 23.3471,9.59996 3.4362,11.87685 6.0526,40.55378 17.2582,59.59076 6.6899,11.66054 17.3617,15.35746 29.5645,15.9922 -1.87091,1.59715 -6.23583,5.30972 0.9792,19.90866 3.35654,6.28485 -4.13261,-1.4851 -4.5692,0.65274 -0.70164,4.2756 -2.26104,7.03621 -7.1802,7.83291 -7.44674,1.49408 -8.62096,6.81204 -13.7076,17.29768 -2.3874,5.73138 -3.50262,-12.90745 -8.812,-3.91645 -4.0812,7.37418 -15.79632,15.9607 -22.846,-0.32637 -1.73014,-4.35247 -20.77865,-1.28073 -27.4152,3.91645 -14.45641,11.15415 -22.56196,3.75722 -25.457,-3.59008 -4.65427,-12.04099 -25.97785,10.84579 -27.7415,-9.79115 -0.74182,-9.29058 -3.12612,-10.90539 -8.8121,-10.44388 -4.26889,0.54852 3.91797,-5.84505 14.6867,-8.48565 17.35423,-4.57184 38.0504,-50.8378 48.303,-69.19073 -2.4716,-1.52397 -3.9521,-2.62945 -3.353,-7.53126 z";  
  windtl
    .to(dress, 0.6, {attr:{d:dressnew},x:2315,y:-271,repeat:-1,yoyo:true,ease:Linear.easeNone})
    .to(dress, 1.8, {attr:{d:dress3},x:2315,y:-271,repeat:-1,yoyo:true})
    
    .to('#flowinghair', 4, {attr:{d:hairright},repeat:-1,yoyo:true,x:2312,y:-269,ease:Sine.easeInOut,repeatDelay:0.4},'-=4')
    .to('#lhair', 4, {attr:{d:hairleft},repeat:-1,yoyo:true,x:2315,y:-269,ease:Sine.easeInOut,repeatDelay:0.4},'-=4')
    .to('#bpantsc', 4, {attr:{d:blueleg},repeat:-1,yoyo:true,x:2315,y:-269,ease:Sine.easeInOut,repeatDelay:0.4},'-=4')
  .to('#bpantsa', 4, {attr:{d:otherleg},repeat:-1,yoyo:true,x:2315,y:-269,ease:Sine.easeInOut,repeatDelay:0.4},'-=4')
  .to('#bshirt', 4, {attr:{d:blueshirt},repeat:-1,yoyo:true,x:2315,y:-269,ease:Sine.easeInOut,repeatDelay:0.4},'-=4')
  
  var skytl = new TimelineMax();
  var motionPath1 = MorphSVGPlugin.pathDataToBezier(path1, {align:"relative"});
  var motionPath2 = MorphSVGPlugin.pathDataToBezier(path2, {align:"relative"});
  var motionPath3 = MorphSVGPlugin.pathDataToBezier(path3, {align:"relative"});
  var motionPath4 = MorphSVGPlugin.pathDataToBezier(path4, {align:"relative"});
  var motionPath5 = MorphSVGPlugin.pathDataToBezier(path5, {align:"relative"});
  var motionPath6 = MorphSVGPlugin.pathDataToBezier(path6, {align:"relative"});
  var motionPath7 = MorphSVGPlugin.pathDataToBezier(path7, {align:"relative"});
  var motionPath8 = MorphSVGPlugin.pathDataToBezier(path8, {align:"relative"});

  TweenMax.set('#lowleftcloud', {opacity:0.001})
  TweenMax.set('#g125086', {opacity:0.001})
  TweenMax.set('#g125090', {opacity:0.001})
  TweenMax.set('#g125094', {opacity:0.001})
  TweenMax.set('#g125175', {opacity:0.001})
  TweenMax.set('#g125167', {opacity:0.001})
  TweenMax.set('#g125171', {opacity:0.001})
  TweenMax.set('#balloon', {opacity:0.001})
    skytl
      .fromTo('#lowleftcloud', 15.5, {y:-100,x:-35,opacity:1},{bezier:{values:motionPath1,  type:'cubic',autorotatation:true},repeatDelay:1.32,opacity:0,repeat:-1})
  
    .fromTo('#g125086', 15.5, {x:52,opacity:1},{bezier:{values:motionPath2,  type:'cubic',autorotation:true},repeatDelay:0.67,opacity:0,repeat:-1},'-=15')
    .fromTo('#g125090', 15.5, {x:-243,opacity:1},{bezier:{values:motionPath3,  type:'cubic', repeatDelay:0.95, autorotation:true},opacity:0,repeat:-1},'-=15.5')
    .fromTo('#g125094', 15.5, {x:55,opacity:1},{bezier:{values:motionPath4,repeatDelay:0.53,  type:'cubic',autorotate:true},opacity:0,repeat:-1},'-=15.5')
    .fromTo('#124367', 15.5, {x:680,y:-60,opacity:1},{bezier:{autoRotation:true,values:motionPath5,repeatDelay:0.25,  type:'cubic',autorotation:true},opacity:0,repeat:-1},'-=15.5')
    .fromTo('#g125171', 15.5, {repeatDelay:1.3,rotationZ:12,y:-80,x:-57,opacity:1},{bezier:{values:motionPath6,  type:'cubic',autorotate:true},opacity:0,rotationZ:-12,repeat:-1},'-=15.5')
    .fromTo('#g125175', 15.5, {x:75,opacity:1},{bezier:{values:motionPath7,  type:'cubic',autorotate:true},delayRestart:0.35,opacity:0,repeat:-1},'-=15.5')
    .fromTo('#balloon', 15.5, {x:55,opacity:1},{bezier:{values:motionPath8,  type:'cubic',autorotation:true},opacity:0,repeat:-1},'-=15.5')
    .to([ltree,lround,rtree], 1.5, {scaleY:1.12,ease:Elastic.easeOut,repeat:-1,yoyo:true,transformOrigin:'0% 100%'},'-=15.5')
  //windtl.add([
    //TweenMax.waveSVG(dress, {loose:true, length:520, angle:-12, magnitude:65, phase:70, duration:3, start:2, end:17, repeat:-1},0.1),
	//TweenMax.waveSVG(document.getElementById("flowinghair"), {taperEnd: 80, taperStart:2, loose:true, length:120, angle:-32, magnitude:10, phase:110, duration:2, start:7, end:12, repeat:10}),
	//TweenMax.waveSVG(document.getElementById("lhair"), {loose:true, length:120, angle:-16, magnitude:20, phase:-140, duration:2, start:10, end:14, repeat:10}),
	//TweenMax.waveSVG(document.getElementById("dressshad"), {loose:true, angle: 70, length:120, magnitude:10, phase:20, duration:2, start:2, end:9, repeat:10})
     
//]);
 //tl.add(windtl, 2)

  var ti = $( "#time" );
  var tr = tl.duration() * 130;  // Time in seconds
  var dr = $( "#dragger" );
console.log(tr)
  // Update the dragger when the timeline is updated.
  function updateDragger() {
    TweenMax.set(dr, {x: tr * tl.progress()});
    ti.html(tl.time().toFixed( 2 ));
  }

  /** Create the dragger with the "Draggable" plugin.
    * The 'bounds' depends o
    */
  var s = Draggable.create(dr, {
    type: "x",
    bounds: '#svg244951',//{minX: 0, maxX: 340},
    onPress: function(){
      tl.pause();
    },
    onDrag: function(){
      tl.progress(this.x / tr).pause();
    },
    onRelease: function(){
      tl.resume();
    }
    
  });

  
  
//the function below is a bit advanced and it handles the flapping cape. It leverages MorphSVGPlugin to do some heavy lifting, but ultimately relies on some custom triganometry applied in an onUpdate to manipulate the points on a sine wave. 
function waveSVG(e, vars) {
	var _placeDot = function (x, y, vars) {
				var _createSVG = function(type, attributes) {
							var element = document.createElementNS("http://www.w3.org/2000/svg", type),
									reg = /([a-z])([A-Z])/g,
									p;
							for (p in attributes) {
								element.setAttributeNS(null, p.replace(reg, "$1-$2").toLowerCase(), attributes[p]);
							}
							return element;
						},
						dot = _createSVG("circle", {cx:x, cy:y, r:vars.size || 6, fill:vars.color || "red"}),
						container = vars.container || document.querySelector("svg");
				if (container) {
					container.appendChild(dot);
				}
				return dot;
			},
			_getLength = function(x, y, x2, y2) {
				x = x2 - x;
				y = y2 - y;
				return Math.sqrt(x * x + y * y);
			},
			_getTotalLength = function(bezier, start, end) {
				var x = bezier[start],
						y = bezier[start+1],
						length = 0,
						i;
				for (i = start; i < end; i += 2) {
					length += _getLength(x, y, x=bezier[i], bezier[i+1]);
				}
				return length;
			},
			_DEG2RAD = Math.PI / 180,
			_RAD2DEG = 180 / Math.PI,
			bezier = MorphSVGPlugin.pathDataToRawBezier(e.getAttribute("d"))[0],
			start = (vars.start || 0) * 2,
			end = (vars.end === 0) ? 0 : (vars.end * 2) || (bezier.length - 1),
			length = vars.length || 100,
			magnitude = vars.magnitude || 50,
			proxy = {a:0},
			debug = !!vars.debug,
			phase = (vars.phase || 0) * _DEG2RAD,
			taperStart = vars.taperStart || 0,
			taperEnd = vars.taperEnd || 0,
			startX = bezier[start],
			startY = bezier[start + 1],
			changes = [],
			bezierLength = 0,
			loose = !!vars.loose,//if true, we'll just make the points influence the current positions instead of forcing them strictly onto the wave.
			tl = new TimelineMax({repeat:vars.repeat}),
			bezierTotalLength, angle, i, x, y, dx, dy, sin, cos, sin2, cos2, m, pathStart, t, negCos, negSin, rotatedStartX;
	if (end >= bezier.length-1) {
		end = bezier.length - 2;
	}
	if (start >= bezier.length) {
		start = bezier.length - 1;
	}
	bezierTotalLength = _getTotalLength(bezier, start, end);

	dx = bezier[end] - startX;
	dy = bezier[end+1] - startY;
	if (vars.angle || vars.angle === 0) {
		angle = vars.angle * _DEG2RAD;
	} else {
		angle = Math.atan2(dy, dx) - Math.PI / 2;
	}
	sin = Math.sin(angle);
	cos = Math.cos(angle);
	sin2 = Math.sin(angle + Math.PI / 2);
	cos2 = Math.cos(angle + Math.PI / 2);
	negCos = Math.cos(-angle);
	negSin = Math.sin(-angle);
	rotatedStartX = startX * negCos + startY * negSin;

	if (debug) { //note: if debug is true, we drop a red dot at the beginning, yellow at the end, blue dots as control points, and purple as anchors.
		_placeDot(bezier[start], bezier[start + 1], {container: e.parentNode, color:"red"});
		_placeDot(bezier[end], bezier[end + 1], {container: e.parentNode, color:"yellow"});
		console.log("waveSVG() angle: ", angle * _RAD2DEG, "degrees. RED dot is start, YELLOW is end.");
	}

	x = startX;
	y = startY;
	for (i = start; i < end; i += 2) {
		bezierLength += _getLength(x, y, x=bezier[i], y=bezier[i+1]);
		dx = x * negCos + y * negSin; //rotated in the opposite direction
		dy = x * negSin + y * negCos;
		t = (taperStart && bezierLength < taperStart) ? bezierLength / taperStart : (taperEnd && bezierLength > bezierTotalLength - taperEnd && bezierLength < bezierTotalLength) ? ((bezierTotalLength - bezierLength) / taperEnd) : 1; //taper
		m = Math.sin((dx / length) * Math.PI * 2 + phase) * magnitude;
		changes.push( {i: i - (start ? 2 : 0), p:dx, a: (dx / length) * Math.PI * 2 + phase, t:t, x: loose ? x - m * sin * t : startX + (dx - rotatedStartX) * cos2 * t, y: loose ? y - m * cos * t : startY + (dx - rotatedStartX) * sin2 * t, smooth: (i % 6 === 0 && i > start && i < end) ? Math.abs( Math.atan2(y - bezier[i-1], x - bezier[i-2]) - Math.atan2(bezier[i+3] - y, bezier[i+2] - x) ) < 0.01 : false} );
		if (debug) {
			changes[changes.length-1].dot = _placeDot(x, y, {container: e.parenNode, size:3, color: (i % 6) ? "blue" : "purple"});
		}
	}
	//when we're not animating the first point, optimize things by taking out the first x/y and treat them independently so we can merely bezier.join(",") on each update.
	if (start) {
		pathStart = "M" + bezier.shift() + "," + bezier.shift() + " C";
	}

	tl.to(proxy, vars.duration || 3, {a:Math.PI * 2, ease:vars.ease || Linear.easeNone, onUpdate:function() {
		var l = changes.length,
				angle = proxy.a,
				node, i, m, x, y, x2, y2, x1, y1, cp, dx, dy, d, a, cpCos, cpSin;
		for (i = 0; i < l; i++) {
			node = changes[i];
			if (node.smooth || i === l - 1 || !changes[i + 1].smooth) {
				m = Math.sin(node.a + angle) * magnitude * node.t;
				bezier[node.i] = x = node.x + m * sin;
				bezier[node.i + 1] = y = node.y + m * cos;

				if (node.smooth) { //make sure smooth anchors stay smooth!
					cp = changes[i - 1];
					m = Math.sin(cp.a + angle) * magnitude * cp.t;
					x1 = cp.x + m * sin;
					y1 = cp.y + m * cos;

					cp = changes[i + 1];
					m = Math.sin(cp.a + angle) * magnitude * cp.t;
					x2 = cp.x + m * sin;
					y2 = cp.y + m * cos;

					a = Math.atan2(y2 - y1, x2 - x1);
					cpCos = Math.cos(a);
					cpSin = Math.sin(a);

					dx = x2 - x;
					dy = y2 - y;
					d = Math.sqrt(dx * dx + dy * dy);
					bezier[cp.i] = x + cpCos * d;
					bezier[cp.i + 1] = y + cpSin * d;

					cp = changes[i - 1];
					dx = x1 - x;
					dy = y1 - y;
					d = Math.sqrt(dx * dx + dy * dy);
					bezier[cp.i] = x - cpCos * d;
					bezier[cp.i + 1] = y - cpSin * d;
					i++;
				}
			}
		}
		if (debug) {
			for (i = 0; i < l; i++) {
				node = changes[i];
				node.dot.setAttribute("cx", bezier[node.i]);
				node.dot.setAttribute("cy", bezier[node.i + 1]);
			}
		} else if (start) {
			e.setAttribute("d", pathStart + bezier.join(","));
		} else {
			e.setAttribute("d", "M" + bezier[0] + "," + bezier[1] + " C" + bezier.slice(2).join(","));
		}
	}});
	return tl;
}
})