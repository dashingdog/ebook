<template>
  <div class="app-page" id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  computed: {
  },
  mounted () {

  }
}
document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html')
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > 50 ? 50 : fontSize
  html.style.fontSize = fontSize + 'px'
})
</script>

<style lang="scss" scoped>
@import "./assets/styles/global.scss";
  .app-page{
    background: #7d8188;
    height: 100%;
  }
  .text{
    font-family: 'Days One';
    font-size: px2rem(20);
    color: orange;
  }
</style>
