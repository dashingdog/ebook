(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8568ef4c"],{"2deb":function(t,e,s){"use strict";var o=s("bc41"),i=s.n(o);i.a},a49d:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"store-shelf"},[s("shelfTitle",{attrs:{title:t.shelfCategory.title}}),t.ifShowList?s("scroll",{ref:"scroll",staticClass:"store-shelf-scroll-wrapper",attrs:{top:0,bottom:t.scrollBottom},on:{onScroll:t.onScroll}},[s("shelf-list",{attrs:{data:t.shelfCategory.itemList,top:42}})],1):s("div",{staticClass:"store-shelf-empty-view"},[t._v("\n      "+t._s(t.$t("shelf.groupNone"))+"\n    ")]),s("shelf-footer")],1)},i=[],l=s("0093"),r=s("ac0d"),n=s("6701"),c=s("b1a9"),f=s("f1f4"),a={mixins:[r["c"]],data:function(){return{scrollBottom:0}},watch:{isEditMode:function(t){var e=this;this.scrollBottom=t?48:0,this.ifShowList&&this.$nextTick(function(){e.$refs.scroll.refresh()})}},computed:{ifShowList:function(){return this.shelfCategory.itemList&&this.shelfCategory.itemList.length>0}},methods:{onScroll:function(t){this.setOffsetY(t)}},mounted:function(){this.getCategoryList(this.$route.query.title),this.setCurrentType(2)},components:{ShelfTitle:l["a"],Scroll:n["a"],ShelfList:c["a"],ShelfFooter:f["a"]}},h=a,u=(s("2deb"),s("2877")),d=Object(u["a"])(h,o,i,!1,null,"418b1760",null);e["default"]=d.exports},bc41:function(t,e,s){}}]);
//# sourceMappingURL=chunk-8568ef4c.f1ebe74a.js.map