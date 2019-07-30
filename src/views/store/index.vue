<template>
   <div class="store">
       <router-view></router-view>
   </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
 @import "../../assets/styles/global.scss";
    .store{
        width: 100%;
        height: 100%;
        background: white;
    }
</style>
