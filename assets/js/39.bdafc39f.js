(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{457:function(t,e,r){"use strict";r.r(e);var n=r(35),c=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"computed-原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#computed-原理"}},[t._v("#")]),t._v(" computed 原理")]),t._v(" "),r("p",[t._v("computed实质是个惰性求值的观察者"),r("br"),t._v("\ncomputed watcher"),r("br"),t._v("\ncomputer watcher不会立即求值，持有一个dep实例"),r("br"),t._v("\n内部通过this.dirty标记计算属性是否需要重新求值"),r("br"),t._v("\n通过this.dep.sub.length来判断有没有订阅者\n1.当computed的依赖发生变化，会通知computed watcher\n2.computed watcher 会通过this.dep.sub.length 判断有没有订阅者\n3.如果有，会重新计算，如果新旧值发生变化，会重新渲染（vue想保证的不仅仅是计算属性依赖值的变化，当计算属性的最终值发生变化，才会触发watcher，重新渲染）"),r("br"),t._v("\n4.如果没有，仅仅是this.drity= true(当计算属性依赖于其他数据时，属性并不会立即重新计算，只有之后其他地方需要读取属性的时候，它才会真正计算，即具备 lazy（懒计算）特性。)")])])}),[],!1,null,null,null);e.default=c.exports}}]);