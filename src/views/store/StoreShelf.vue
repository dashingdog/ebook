<template>
   <div class="store-shelf">
       <shelfTitle></shelfTitle>
       <scroll @onScroll="onScroll"
       class="store-shelf-scroll-wrapper"
       :top="0"
       :bottom="scrollBottom"
       ref="scroll">
         <shelf-search></shelf-search>
         <shelf-list></shelf-list>
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
import { shelf } from '../../api/store'
import { appendAddToShelf } from '../../utils/store'
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
    getShelfList () {
      shelf().then(response => {
        console.log(response)
        if (response.status === 200 && response.data && response.data.bookList) {
          this.setShelfList(appendAddToShelf(response.data.bookList))
        }
      })
    },
    onScroll (offsetY) {
      this.setOffsetY(offsetY)
    }
  },
  mounted () {
    this.getShelfList()
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
