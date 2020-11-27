import './Board.css.proxy.js';

let counter = 0;

const defaultExport = {
  props: {matrix: Array},
  methods: {
    refreshBoard(ev) {
      this.matrix[counter++] = 9;
    }
  }
};

import { renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createBlock as _createBlock, createVNode as _createVNode } from "../../web_modules/vue.js"

const _hoisted_1 = { class: "board__wrapper max-w-lg mx-auto" }
const _hoisted_2 = { class: "board__row w-fit flex justify-center" }

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("div", _hoisted_1, [
    (_openBlock(), _createBlock(_Fragment, null, _renderList(9, (row, rowInd) => {
      return _createVNode("div", {
        class: "board__rows",
        "data-row": rowInd,
        key: rowInd
      }, [
        _createVNode("div", _hoisted_2, [
          (_openBlock(), _createBlock(_Fragment, null, _renderList(9, (col, colInd) => {
            return _createVNode("input", {
              type: "text",
              class: "square",
              "data-x": colInd,
              "data-y": rowInd,
              key: colInd,
              max: "9",
              min: "0",
              maxlength: "1",
              value: _ctx.matrix[rowInd * 9 + colInd],
              onKeydown: _cache[1] || (_cache[1] = (...args) => (_ctx.refreshBoard(...args)))
            }, null, 40, ["data-x", "data-y", "value"])
          }), 64 /* STABLE_FRAGMENT */))
        ])
      ], 8, ["data-row"])
    }), 64 /* STABLE_FRAGMENT */))
  ]))
}

defaultExport.render = render
export default defaultExport