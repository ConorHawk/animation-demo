<template>
  <div>
    <div class="container  mx-auto py-32 min-h-screen flex flex-col items-center justify-start">
    <div class="inline-flex flex-col mb-4 mx-auto">
      <h1 class="leave-stagger title text-5xl font-serif overflow-hidden inline-block leading-tight">The Title</h1>
      <div class="leave-stagger title-line bg-orange inline-block" style="height:2px"></div>
    </div>
    <div class="flex flex-wrap">
    	<div class="p-2 w-1/4 stagger-item" v-for="card in 20">
    		<div class="border border-orange-lighter bg-white rounded p-8">
    			<p class="text-grey-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    		</div>
    	</div>
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
    var head = $(".title")

    var tl = new TimelineLite();
    tl.from(head, 0.4, {opacity: 0, yPercent:-100, top:"100%",  ease: Power4.easeIn});
    tl.from(".title-line", 0.5, {width:0,  ease: Power4.easeIn}, "-=0.2");
    tl.staggerFrom(".stagger-item", 1.2, {opacity:0, y:-40, ease:Power4.easeInOut}, 0.02, "-=0.4");
    // TweenMax.staggerTo(".photo", 0.5, {opacity:0, y:-100, ease:Back.easeIn}, 0.2);
  },
  beforeRouteLeave (to, from, next) {
    var self = this;
    var head = $(".title")

    var tl2 = new TimelineLite();
    tl2.to(".title-line", 0.3, {width:0,  ease: Power4.easeIn});
    tl2.to(head, 0.4, {opacity: 0, yPercent:-40, top:"100%",  ease: Power4.easeIn}, "-=0.2");
    tl2.staggerTo(".stagger-item", 1, {
    	opacity:0, 
    	y:-100, 
    	ease:Power4.easeInOut
    }, 0.02, "-=0.3", next);
  },
  methods: {
  }
}
</script>