<template>
   <div class="store-shelf">
       <shelfTitle
       :title="shelfCategory.title"></shelfTitle>
       <scroll @onScroll="onScroll"
       class="store-shelf-scroll-wrapper"
       :top="0"
       :bottom="scrollBottom"
       ref="scroll"
       v-if="ifShowList">
         <shelf-list
         :data="shelfCategory.itemList" :top="42"></shelf-list>
       </scroll>
       <div class="store-shelf-empty-view" v-else>
         {{$t('shelf.groupNone')}}
       </div>
       <shelf-footer></shelf-footer>
   </div>
</template>

<script>
import ShelfTitle from '../../components/shelf/ShelfTitle'
import { storeShelfMixin } from '../../utils/mixin'
import Scroll from '../../components/common/Scroll'
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
      if (this.ifShowList) {
        this.$nextTick(() => {
          this.$refs.scroll.refresh()
        })
      }
    }
  },
  computed: {
    ifShowList () {
      return this.shelfCategory.itemList && this.shelfCategory.itemList.length > 0
    }
  },
  methods: {
    onScroll (offsetY) {
      this.setOffsetY(offsetY)
    }
  },
  mounted () {
    this.getCategoryList(this.$route.query.title)
    this.setCurrentType(2)
  },
  components: {
    ShelfTitle,
    Scroll,
    ShelfList,
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
    .store-shelf-empty-view{
      position: absolute;
      top:0;
      left:0;
      width: 100%;
      height: 100%;
      font-size: px2rem(14);
      color:#333;
      @include center;
    }
  }
</style>
