import CreateAPI from 'vue-create-api'
import Vue from 'vue'
import Toast from '../components/common/Toast.vue'
import Popup from '../components/common/Popup.vue'
import GroupDialog from '../components/shelf/ShelfGroupDialog.vue'
// dom创建在body下，建议全局的组件，才使用create
Vue.use(CreateAPI)
Vue.createAPI(Toast, true)
Vue.createAPI(Popup, true)
Vue.createAPI(GroupDialog, true)
Vue.mixin({
  methods: {
    toast (settings) {
      return this.$createToast({
        $props: settings
      })
    },
    popup (settings) {
      return this.$createPopup({
        $props: settings
      })
    },
    simpleToast (text) {
      const toast = this.toast({
        text: text
      })
      toast.show()
      toast.updateText(text)
    },
    dialog (settings) {
      return this.$createGroupDialog({
        $props: settings
      })
    }
  }
})
