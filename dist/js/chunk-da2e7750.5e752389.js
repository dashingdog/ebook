(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-da2e7750"],{"0af2":function(t,e,i){"use strict";var r=i("95b4"),s=i.n(r);s.a},6701:function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"scrollWrapper",staticClass:"scroll-wrapper",class:{"no-scroll":t.ifNoScroll},on:{"&scroll":function(e){return t.handleScroll(e)}}},[t._t("default")],2)},s=[],a=(i("c5f6"),i("fa7d")),n={props:{top:{type:Number,default:0},bottom:{type:Number,default:0},ifNoScroll:{type:Boolean,default:!1}},methods:{handleScroll:function(t){var e=t.target.scrollTop||window.pageYOffset||document.body.scrollTop;this.$emit("onScroll",e)},scrollTo:function(t,e){this.$refs.scrollWrapper.scrollTo(t,e)},refresh:function(){this.$refs.scrollWrapper&&(this.$refs.scrollWrapper.style.height=window.innerHeight-Object(a["b"])(this.top)-Object(a["b"])(this.bottom)+"px",this.$refs.scrollWrapper.addEventListener("scroll",this.handleScroll))}},mounted:function(){this.refresh()}},c=n,l=(i("85a8"),i("2877")),o=Object(l["a"])(c,r,s,!1,null,"65b358ea",null);e["a"]=o.exports},"85a8":function(t,e,i){"use strict";var r=i("fe3d"),s=i.n(r);s.a},"8c1c":function(t,e,i){},"8c8f":function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home-title-wrapper"},[i("div",{staticClass:"label"},[t._v(t._s(t.label))]),i("div",{staticClass:"btn",on:{click:t.click}},[t._v(t._s(t.btn))])])},s=[],a={props:{label:String,btn:String},methods:{click:function(){this.$emit("onClick")}}},n=a,c=(i("0af2"),i("2877")),l=Object(c["a"])(n,r,s,!1,null,"7834b0a0",null);e["a"]=l.exports},"95b4":function(t,e,i){},bf18:function(t,e,i){"use strict";var r=i("8c1c"),s=i.n(r);s.a},cbe5:function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"featured"},[t.titleVisible&&t.data&&t.data.length>0?i("title-view",{attrs:{label:t.titleText,btn:t.btnText}}):t._e(),i("div",{staticClass:"featured-list"},[i("div",{staticClass:"featured-item-wrapper"},t._l(t.data,function(e,r){return i("div",{key:r,staticClass:"featured-item",on:{click:function(i){return t.showBookDetail(e)}}},[i("div",{staticClass:"img-wrapper"},[i("img",{staticClass:"img",attrs:{src:e.cover}})]),i("div",{staticClass:"content-wrapper"},[i("div",{ref:"title",refInFor:!0,staticClass:"title title-small"},[t._v(t._s(e.title))]),i("div",{ref:"author",refInFor:!0,staticClass:"author sub-title-tiny"},[t._v(t._s(e.author))]),i("div",{ref:"category",refInFor:!0,staticClass:"category third-title-tiny"},[t._v(t._s(t.categoryText(e.category)))])])])}),0)])],1)},s=[],a=(i("ac6a"),i("8c8f")),n=i("fa7d"),c=i("da6f"),l=i("ac0d"),o={mixins:[l["b"]],components:{TitleView:a["a"]},props:{data:Array,titleVisible:{type:Boolean,default:!0},titleText:{type:String},btnText:{type:String}},computed:{width:function(){return window.innerWidth-Object(n["b"])(20)-Object(n["b"])(60)+"px"}},methods:{categoryText:function(t){return Object(c["d"])(t,this)},resize:function(){var t=this;this.$nextTick(function(){t.$refs.title.forEach(function(e){e.style.width=t.width}),t.$refs.author.forEach(function(e){e.style.width=t.width}),t.$refs.category.forEach(function(e){e.style.width=t.width})})}}},f=o,u=(i("bf18"),i("2877")),d=Object(u["a"])(f,r,s,!1,null,"cfb350c0",null);e["a"]=d.exports},fe3d:function(t,e,i){}}]);
//# sourceMappingURL=chunk-da2e7750.5e752389.js.map