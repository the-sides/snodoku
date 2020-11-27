import './Ui.css.proxy.js';

const defaultExport = {
  props: {
    matrix: Array
  },
  methods: {
    solveBoard() {
      this.$emit("solveBoard");
    }
  }
};

import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock, withScopeId as _withScopeId, pushScopeId as _pushScopeId, popScopeId as _popScopeId } from "../../web_modules/vue.js"
const _withId = /*#__PURE__*/_withScopeId("data-v-553e74db")

_pushScopeId("data-v-553e74db")
const _hoisted_1 = { class: "" }
const _hoisted_2 = { class: "my-6 max-w-sm mx-auto flex justify-around" }
const _hoisted_3 = /*#__PURE__*/_createVNode("div", { class: "flex-1 flex justify-center" }, [
  /*#__PURE__*/_createVNode("input", {
    type: "checkbox",
    name: "auto-solve",
    id: ""
  }),
  /*#__PURE__*/_createVNode("label", {
    class: "text-blue-200 leading-3 my-auto ml-4 text-xl",
    for: "auto-solve"
  }, "Auto Solve")
], -1)
const _hoisted_4 = { class: "flex-1" }
_popScopeId()

export const render = /*#__PURE__*/_withId(function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("div", _hoisted_1, [
    _createVNode("div", _hoisted_2, [
      _hoisted_3,
      _createVNode("div", _hoisted_4, [
        _createVNode("button", {
          onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.solveBoard(...args))),
          class: "block mx-auto border-blue-400 border-2 bg-blue-200 py-2 px-4 rounded"
        }, " Solve ")
      ])
    ])
  ]))
})

defaultExport.render = render
export default defaultExport