<template>
   <div class="ebook" ref='ebook'>
       <ebook-book-mark></ebook-book-mark>
       <ebook-header></ebook-header>
       <ebook-title></ebook-title>
       <ebook-reader></ebook-reader>
       <ebook-menu></ebook-menu>
       <ebook-footer></ebook-footer>
   </div>
</template>

<script>
import EbookReader from '../../components/ebook/EbookReader'
import EbookTitle from '../../components/ebook/EbookTitle'
import EbookMenu from '../../components/ebook/EbookMenu'
import EbookHeader from '../../components/ebook/EbookHeader'
import EbookFooter from '../../components/ebook/EbookFooter'
import EbookBookMark from '../../components/ebook/EbookBookMark'
import { getReadTime, saveReadTime } from '../../utils/localStorage'
import { setInterval, setTimeout } from 'timers'
import { ebookMixin } from '../../utils/mixin'
export default {
  mixins: [ebookMixin],
  components: {
    EbookReader,
    EbookTitle,
    EbookMenu,
    EbookBookMark,
    EbookHeader,
    EbookFooter
  },
  watch: {
    offsetY (v) {
      if (!this.menuVisible && this.bookAvailable) {
        if (v > 0) {
          this.move(v)
        } else if (v === 0) {
          this.restore()
        }
      }
    }
  },
  data () {
    return {

    }
  },
  methods: {
    restore () {
      this.move(0)
      this.$refs.ebook.style.transition = 'all .2s linear'
      setTimeout(() => {
        this.$refs.ebook.style.transition = ''
      })
    },
    move (v) {
      this.$refs.ebook.style.top = v + 'px'
    },
    startLoopReadTime () {
      let readTime = getReadTime(this.fileName)
      if (!readTime) {
        readTime = 0
      }
      this.task = setInterval(() => {
        readTime++
        if (readTime % 30 === 0) {
          saveReadTime(this.fileName, readTime)
        }
      }, 1000)
    }
  },
  mounted () {
    this.startLoopReadTime()
  },
  beforeDestroy () {
    if (this.task) {
      clearInterval(this.task)
    }
  }
}
</script>

<style lang="scss" scoped>
    @import "../../assets/styles/global.scss";
    .ebook{
      width:100%;
      height: 100%;
      top:0;
      left: 0;
      position: absolute;
    }
</style>
