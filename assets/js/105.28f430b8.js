(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{612:function(t,s,a){"use strict";a.r(s);var e=a(3),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("img",{staticClass:"medium-zoom",attrs:{src:"/algo/queue-reconstruction-by-height.png",alt:"https://leetcode.com/problems/queue-reconstruction-by-height"}}),t._v(" "),a("h2",{attrs:{id:"solution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solution"}},[t._v("#")]),t._v(" Solution")]),t._v(" "),a("h3",{attrs:{id:"greedy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#greedy"}},[t._v("#")]),t._v(" Greedy")]),t._v(" "),a("p",[t._v("Algorithm:")]),t._v(" "),a("ul",[a("li",[t._v("sort people:\n"),a("ul",[a("li",[t._v("in the descending order by height")]),t._v(" "),a("li",[t._v("among the guys of the same height, in the ascending order by k-values")])])]),t._v(" "),a("li",[t._v("take guys one by one, and place them in the output array at the indexes equal to their k-values.")]),t._v(" "),a("li",[t._v("return output array")])]),t._v(" "),a("p",[t._v("Basically there are 2 steps. First, we handle the people from tallest (largest "),a("code",[t._v("h")]),t._v(") to shortest b/c the short people don't affect "),a("code",[t._v("k")]),t._v(" of tall ones. People w/ lower "),a("code",[t._v("k")]),t._v(" are before the higher in "),a("code",[t._v("res")]),t._v("ult. Then, we keep inserting to "),a("code",[t._v("k")]),t._v("th position the next tallest person.")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reconstructQueue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" people"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" List"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("List"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" List"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("List"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    people"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sort"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("lambda")]),t._v(" elt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("elt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" elt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" person "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" people"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("insert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);