<template>
  <div>
    <div class="container  mx-auto py-24 md:py-32 min-h-screen flex flex-col-reverse md:flex-row items-center px-4">
      <div class="max-w-md">
        <div class="inline-flex flex-col mb-4">
          <h1 class="leave-stagger title text-5xl font-serif overflow-hidden inline-block leading-tight">The Title</h1>
          <div class="leave-stagger title-line bg-orange inline-block" style="height:2px"></div>
        </div>
        <p class="leave-stagger text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident dolores mollitia qui quos, quasi eligendi nulla, dolorum necessitatibus blanditiis facilis quisquam labore debitis sunt pariatur quia facere deserunt. Quaerat, dicta!</p>
        <div class="leave-stagger button-container overflow-hidden inline-block" style="white-space: nowrap;">
          <button class="bg-orange-dark text-white px-4 py-2 text-lg rounded uppercase tracking-wide mt-4">Click me</button>
        </div>
      </div>
      <div class="w-2/3 md:w-1/3 text-center pb-4">
        <svg width="100%" height="100%" viewBox="0 0 388 377" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
            <path fill="none" d="M0 0h387.867v376.787H0z"/>
	          <circle id="center" cx="224.581" cy="243.938" r="50.388" fill="#d45e1b" transform="translate(-33.632 -55.544)"/>
	          <circle id="outer" cx="426.787" cy="250" r="5.778" fill="#d45e1b" transform="translate(-73.064 -69.815) scale(1.03284)"/>
	          <circle id="inner" cx="348.257" cy="250" r="13.419" fill="#d45e1b" transform="translate(-59.05 -61.606)"/>
	          <circle id="innerRing" cx="268.308" cy="256.249" r="148.669" fill="none" stroke="#d45e1b" stroke-dasharray="6.05 6.05 0 0" stroke-width=".76" transform="matrix(.66092 0 0 .66091 13.622 19.036)"/>
	          <circle id="outerRing" cx="268.308" cy="256.249" r="148.669" fill="none" stroke="#d45e1b" stroke-dasharray="8.41 6.31 0 0" stroke-width=".42" transform="translate(-128.105 -116.32) scale(1.18914)"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { TweenMax, TimelineLite, CustomEase } from "gsap/all";
export default {
  components: {TweenMax, TimelineLite, CustomEase},
  props: {
    msg: String
  },
  mounted() {

  	function part1() {
  		var head = $(".title"),
  		    content = $("p"),
  		    button = $("button"),
  		    image = $("img")

  		var tl = new TimelineLite();
  		tl.from(head, 0.4, {opacity: 0, yPercent:-100, top:"100%",  ease: Power4.easeIn});
  		tl.from(".title-line", 0.5, {width:0,  ease: Power4.easeIn}, "-=0.2");
  		tl.from(content, 0.4, {opacity: 0, xPercent:-1, left:"1%", ease: Power4.easeOut});
  		tl.from(".button-container", 0.3, {width:0, ease: Power4.easeOut});
  		return tl
  	}
    
  	function part2() {
  		var plantTl = new TimelineLite();
  		plantTl.to("#outer", 6, {rotation:"+=360", transformOrigin:"center", svgOrigin: "190 188.5", ease:Linear.easeNone, repeat: -1, paused: false}, 0)
  		plantTl.to("#inner", 8, {rotation:"+=360", transformOrigin:"center", svgOrigin: "190 188.5", ease:Linear.easeNone, repeat: -1, paused: false}, 0)
  		plantTl.to("#innerRing", 24, {rotation:"-=360", transformOrigin:"center", svgOrigin: "190 188.5", ease:Linear.easeNone, repeat: -1, paused: false}, 0)
  		plantTl.to("#outerRing", 32, {rotation:"-=360", transformOrigin:"center", svgOrigin: "190 188.5", ease:Linear.easeNone, repeat: -1, paused: false}, 0)
  		plantTl.from("#center", 1, {scale:0, opacity:0, transformOrigin:"center", ease:Elastic.easeInOut}, 0)
  		plantTl.from("#innerRing", 0.8, {opacity:0, transformOrigin:"center", opacity:0, ease:Power1.easeInOut}, "-=0.6")
  		plantTl.from("#outerRing", 0.8, {opacity:0, transformOrigin:"center", opacity:0, ease:Power1.easeInOut}, "-=0.7")
  		// plantTl.from("#outerRing", 30, {rotation:"+=360", transformOrigin:"center", ease:Linear.easeNone, repeat: -1, paused: false}, "-=1.5")
  		plantTl.from("#outer", 1, {opacity:0, ease:Power1.easeInOut})
  		plantTl.from("#inner", 1, {opacity:0, ease:Power1.easeInOut})
  		return plantTl
  	}

  	var masterTimeline = new TimelineLite({ repeat: -1, repeatDelay: 1 });
  	masterTimeline
  	  .add(part1())
  	  .add(part2())
    
  },
  beforeRouteLeave (to, from, next) {
    var self = this;
    var head = $(".title"),
        content = $("p"),
        button = $("button"),
        image = $("img")

    var tl = new TimelineLite();
    tl.to(".title-line", 0.5, {width:0,  ease: Power4.easeIn});
    tl.to(head, 0.4, {opacity: 0, yPercent:-100, top:"100%",  ease: Power4.easeIn}, "-=0.2");
    tl.to(content, 0.4, {opacity: 0, xPercent:-1, left:"1%", ease: Power4.easeOut}, "-=0.2");
    tl.to(".button-container", 0.3, {width:0, ease: Power4.easeOut}, "-=0.2");
    tl.to(image, 0.3, {
      scale: 0.9, 
      opacity:0, 
      ease: Power4.easeInOut,
      
    }, "-=0.2");
    tl.to("#outer", 1, {scale: 0, opacity:0, ease:Elastic.easeInOut},0)
    tl.to("#inner", 1, {scale: 0, opacity:0, ease:Elastic.easeInOut}, "-=1")
    tl.to("#innerRing", 0.8, {scale: 0, opacity:0, transformOrigin:"center", ease:Power1.easeInOut}, "-=0.8")
    tl.to("#outerRing", 0.8, {scale: 0, opacity:0, transformOrigin:"center", ease:Power1.easeInOut}, "-=0.8")
    tl.to("#center", 1, {scale:0, opacity:0, transformOrigin:"center", ease:Elastic.easeInOut, onComplete: next,}, "-=0.8")
  },
  methods: {
  }
}
</script>
