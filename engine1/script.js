// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 4.7
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_book(e,t,i){function s(t,i,s,n,a,o,r,d,c,h,l){numSlices=a/2,widthScale=a/c,heightScale=(1-o)/numSlices,t.clearRect(0,0,l.width(),l.height());for(var p=0;numSlices+widthScale>p;p++){var g=r?p*e.width/a+e.width/2:(numSlices-p)*e.width/a,f=s+(r?2:-2)*p,u=n+h*heightScale*p/2;0>g&&(g=0),0>f&&(f=0),0>u&&(u=0),t.drawImage(i,g,0,2.5,e.height,f,u,2,h*(1-heightScale*p))}t.save(),t.beginPath(),t.moveTo(s,n),t.lineTo(s+(r?2:-2)*(numSlices+widthScale),n+h*heightScale*(numSlices+widthScale)/2),t.lineTo(s+(r?2:-2)*(numSlices+widthScale),h*(1-heightScale*(numSlices+widthScale))+n+h*heightScale*(numSlices+widthScale)/2),t.lineTo(s,n+h),t.closePath(),t.clip(),t.fillStyle="rgba(0,0,0,"+Math.round(100*d)/100+")",t.fillRect(0,0,l.width(),l.height()),t.restore()}function n(e,t,i,n,a,o,r,d,f,u,m,v){if(g){if(!e){t*=-1;var w=n;n=i,i=w,w=o,o=a,a=w}setTimeout(function(){i.children("img").css("opacity",l).animate({opacity:1},c/2),a.css("transform","rotateY("+t+"deg)").children("img").css("opacity",1).animate({opacity:l},c/2,function(){a.hide(),o.show().css("transform","rotateY(0deg)").children("img").css("opacity",l).animate({opacity:1},c/2),n.children("img").css("opacity",1).animate({opacity:l},c/2)})},0)}else if(p){r.show();var y=new Date,b=!0,S=setInterval(function(){var t=(new Date-y)/c;t>1&&(t=1);var p=jQuery.easing.easeInOutQuint(1,t,0,1,1),g=jQuery.easing.easeInOutCubic(1,t,0,1,1),m=!e;if(.5>t){p*=2,g*=2;var v=a}else{m=e,p=2*(1-p),g=2*(1-g);var v=o}var w=r.height()*h/2,T=(1-p)*r.width()/2,x=1+g*h,C=r.width()/2;s(i,v,C,w,T,x,m,g*l,C,r.height(),d),b&&(u.show(),b=!1),n.clearRect(0,0,f.width(),f.height()),n.fillStyle="rgba(0,0,0,"+(l-g*l)+")",n.fillRect(m?C:0,0,f.width()/2,f.height()),1==t&&clearInterval(S)},15)}setTimeout(v,c)}var a=jQuery,o=a(this),r=a(".ws_list",i);i=i.parent();var d=a("<div>").addClass("ws_effect").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:e.responsive>1?"hidden":"visible"}).appendTo(i),c=e.duration,h=e.perspective||.4,l=e.shadow||.35,p=e.noCanvas||!1,g=e.no3d||!1,f={domPrefixes:" Webkit Moz ms O Khtml".split(" "),testDom:function(e){for(var t=this.domPrefixes.length;t--;)if("undefined"!=typeof document.body.style[this.domPrefixes[t]+e])return!0;return!1},cssTransitions:function(){return this.testDom("Transition")},cssTransforms3d:function(){var e="undefined"!=typeof document.body.style.perspectiveProperty||this.testDom("Perspective");if(e&&/AppleWebKit/.test(navigator.userAgent)){var t=document.createElement("div"),i=document.createElement("style"),s="Test3d"+Math.round(99999*Math.random());i.textContent="@media (-webkit-transform-3d){#"+s+"{height:3px}}",document.getElementsByTagName("head")[0].appendChild(i),t.id=s,document.body.appendChild(t),e=3===t.offsetHeight,i.parentNode.removeChild(i),t.parentNode.removeChild(t)}return e},canvas:function(){return"undefined"!=typeof document.createElement("canvas").getContext?!0:void 0}};g||(g=f.cssTransitions()&&f.cssTransforms3d()),p||(p=f.canvas());var u;this.go=function(e,s){if(u)return-1;var l=0==s&&e!=s+1||e==s-1,f=t.get(e),m=t.get(s),v=a("<div>").appendTo(d),w=a(f);if(w={width:w.width(),height:w.height(),marginLeft:parseFloat(w.css("marginLeft")),marginTop:parseFloat(w.css("marginTop"))},g){var y={backgroundColor:"#000",position:"absolute",left:0,top:0,width:"100%",height:"100%",transformStyle:"preserve-3d",zIndex:3,outline:"1px solid transparent"};perspect=i.width()*(3-2*h),v.css(y).css("perspective",perspect);var b=90,S=a("<div>").css(y).css({position:"relative",background:"#000","float":"left",width:"50%",overflow:"hidden"}).append(a("<img>").attr("src",(l?f:m).src).css(w)).appendTo(v),T=a("<div>").css(y).css({position:"relative",background:"#000","float":"left",width:"50%",overflow:"hidden"}).append(a("<img>").attr("src",(l?m:f).src).css(w).css({marginLeft:-w.width/2})).appendTo(v),x=a("<div>").css(y).css({display:l?"block":"none",position:"absolute",background:"#000",left:0,top:0,width:"50%",height:"100%",transform:"rotateY("+(l?.1:b)+"deg)",transition:(l?"ease-in ":"ease-out ")+c/2e3+"s",transformOrigin:"right",overflow:"hidden"}).append(a("<img>").attr("src",(l?m:f).src).css(w)).appendTo(v),C=a("<div>").css(y).css({display:l?"none":"block",position:"absolute",background:"#000",left:"50%",top:0,width:"50%",height:"100%",transform:"rotateY(-"+(l?b:.1)+"deg)",transition:(l?"ease-out ":"ease-in ")+c/2e3+"s",transformOrigin:"left",overflow:"hidden"}).append(a("<img>").attr("src",(l?f:m).src).css(w).css({marginLeft:-w.width/2})).appendTo(v)}else if(p)var I=a("<div>").css({position:"absolute",top:0,left:l?0:"50%",width:"50%",height:"100%",overflow:"hidden",zIndex:6}).append(a(t.get(e)).clone().css({position:"absolute",height:"100%",right:l?"auto":0,left:l?0:"auto"})).appendTo(v).hide(),k=a("<div>").css({position:"absolute",width:"100%",height:"100%",left:0,top:0,zIndex:8}).appendTo(v).hide(),O=a("<canvas>").css({position:"absolute",zIndex:2,left:0,top:-k.height()*h/2}).attr({width:k.width(),height:k.height()*(h+1)}).appendTo(k),P=O.clone().css({top:0,zIndex:1}).attr({width:k.width(),height:k.height()}).appendTo(k),Q=O.get(0).getContext("2d"),z=P.get(0).getContext("2d");else r.stop(!0).animate({left:e?-e+"00%":/Safari/.test(navigator.userAgent)?"0%":0},c,"easeInOutExpo");if(!g&&p)var S=Q,T=z,x=m,C=f;u=new n(l,b,S,T,x,C,k,O,P,I,w,function(){o.trigger("effectEnd"),v.remove(),u=0})}}jQuery.extend(jQuery.easing,{easeInOutCubic:function(e,t,i,s,n){return(t/=n/2)<1?s/2*t*t*t+i:s/2*((t-=2)*t*t+2)+i},easeInOutQuint:function(e,t,i,s,n){return(t/=n/2)<1?s/2*t*t*t*t*t+i:s/2*((t-=2)*t*t*t*t+2)+i}});// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 4.7
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"book",prev:"",next:"",duration:15*100,delay:22*100,width:960,height:360,autoPlay:true,playPause:false,stopOnHover:false,loop:false,bullets:true,caption:true,captionEffect:"fade",controls:true,onBeforeStep:0,images:0});