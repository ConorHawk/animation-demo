<template>
  <div class="container  mx-auto py-32 min-h-screen flex items-center">
    <div class="max-w-md">
      <div class="inline-flex flex-col mb-4">
        <h1 class="leave-stagger text-5xl font-serif overflow-hidden inline-block leading-tight">The Title</h1>
        <div class="leave-stagger title-line bg-orange inline-block" style="height:2px"></div>
      </div>
      <p class="leave-stagger text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident dolores mollitia qui quos, quasi eligendi nulla, dolorum necessitatibus blanditiis facilis quisquam labore debitis sunt pariatur quia facere deserunt. Quaerat, dicta!</p>
      <div class="leave-stagger button-container overflow-hidden inline-block" style="white-space: nowrap;">
        <button class="bg-orange-dark text-white px-4 py-2 text-lg rounded uppercase tracking-wide mt-4">Click me</button>
      </div>
    </div>
    <div>
      <img src="http://via.placeholder.com/450x250">
    </div>
  </div>
</template>

<script>
import { TweenMax, TimelineLite, CustomEase } from "gsap/all";
export default {
  name: 'HelloWorld',
  components: {TweenMax, TimelineLite, CustomEase},
  props: {
    msg: String
  },
  mounted() {
    var head = $("h1"),
        content = $("p"),
        button = $("button"),
        image = $("img")

    var tl = new TimelineLite();
    tl.from(head, 0.4, {opacity: 0, yPercent:-100, top:"100%",  ease: Power4.easeIn});
    tl.from(".title-line", 0.5, {width:0,  ease: Power4.easeIn}, "-=0.2");
    tl.from(content, 0.4, {opacity: 0, xPercent:-1, left:"1%", ease: Power4.easeOut});
    tl.from(".button-container", 0.3, {width:0, ease: Power4.easeOut});
    tl.from(image, 0.3, {scale: 0.9, opacity:0, ease: Power4.easeInOut}, "+=0.2");
    // TweenMax.staggerTo(".photo", 0.5, {opacity:0, y:-100, ease:Back.easeIn}, 0.2);
  },
  beforeRouteLeave (to, from, next) {
    var self = this;
    var head = $("h1"),
        content = $("p"),
        button = $("button"),
        image = $("img")

    var tl = new TimelineLite();
    tl.to(head, 0.4, {opacity: 0, yPercent:-100, top:"100%",  ease: Power4.easeIn});
    tl.to(".title-line", 0.5, {width:0,  ease: Power4.easeIn}, "-=0.2");
    tl.to(content, 0.4, {opacity: 0, xPercent:-1, left:"1%", ease: Power4.easeOut}, "-=0.2");
    tl.to(".button-container", 0.3, {width:0, ease: Power4.easeOut}, "-=0.2");
    tl.to(image, 0.3, {
      scale: 0.9, 
      opacity:0, 
      ease: Power4.easeInOut,
      onComplete: next,
    }, "-=0.2");
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
