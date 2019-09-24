<template>
   <div class="shelf-item-book">
     <img class="shelf-item-book-cover" :src="data.cover" alt="">
   </div>
</template>

<script>
export default {
  props: {
    data: Object
  },
  data () {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
 @import "../../assets/styles/global.scss";
 .shelf-item-book{
   height: 100%;
   width: 100%;
   .shelf-item-book-cover{
     height: 100%;
     width: 100%;
  }
 }

</style>
