<template>
   <div class="store-shelf">
       <shelfTitle :title="$t('shelf.title')"></shelfTitle>
       <scroll @onScroll="onScroll"
       class="store-shelf-scroll-wrapper"
       :top="0"
       :bottom="scrollBottom"
       ref="scroll">
         <shelf-search></shelf-search>
         <shelf-list :data="shelfList"></shelf-list>
       </scroll>
       <shelf-footer></shelf-footer>
   </div>
</template>

<script>
import ShelfTitle from '../../components/shelf/ShelfTitle'
import { storeShelfMixin } from '../../utils/mixin'
import Scroll from '../../components/common/Scroll'
import ShelfSearch from '../../components/shelf/ShelfSearch'
import ShelfList from '../../components/shelf/ShelfList'

import ShelfFooter from '../../components/shelf/ShelfFooter'

export default {
  mixins: [storeShelfMixin],
  data () {
    return {
      scrollBottom: 0
    }
  },
  watch: {
    isEditMode (isEditMode) {
      this.scrollBottom = isEditMode ? 48 : 0
      this.$nextTick(() => {
        this.$refs.scroll.refresh()
      })
    }
  },
  methods: {

    onScroll (offsetY) {
      this.setOffsetY(offsetY)
    }
  },
  mounted () {
    this.getShelfList()
    this.setShelfCategory([])
    this.setCurrentType(1)
  },
  components: {
    ShelfTitle,
    Scroll,
    ShelfList,
    ShelfSearch,
    ShelfFooter

  }
}
</script>

<style lang='scss' scoped>
 @import "../../assets/styles/global.scss";
  .store-shelf {
    position: relative;
    z-index: 100;
    width: 100%;
    height: 100%;
    background: white;
    .store-shelf-scroll-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 101;
    }
  }
</style>
