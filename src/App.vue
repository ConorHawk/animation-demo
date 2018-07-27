<template>
  <div id="app" class="antialiased font-sans leading-normal text-grey-darkest">
    <div id="nav" class="fixed w-full bg-white z-50">
      <div class="container mx-auto p-4 flex justify-between">
        <div>
          <h1 class="text-orange text-xl">LOGO</h1>
        </div>
        <div>
          <router-link class="text-orange-dark text-sm uppercase tracking-wide mx-3 no-underline" to="/">Home</router-link>
          <router-link class="text-orange-dark text-sm uppercase tracking-wide mx-3 no-underline" to="/about">About</router-link>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import '@/assets/styles/main.scss'
  export default {
  }
</script>

<style lang="scss">
  html {overflow-y:scroll}
</style>
