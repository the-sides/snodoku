import './App.css.proxy.js';

import Board from "./components/Board.js";
import Ui from "./components/Ui.js";
import solver from "./features/solver.js";

const defaultExport = {
  components: {
    Board,
    Ui
  },
  data() {
    return {
      matrix: ['', 1, 7,'','','','',8,'','',6,3,8,9,5,7,1,'','','','','','',4,'','',1,6,'',5,'','','','',3,'',2,3,'',6,'',1,5,'',9,'','','','',8,'',2,6,'','',5,'','','','','','',6,7,1,8,5,2,3,'','','',9,'','','','',8,1,'']
    };
  },
  methods: {
    solveBoard() {
      this.matrix = solver(this.matrix);
    }
  }
};

import { createVNode as _createVNode, createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, openBlock as _openBlock, createBlock as _createBlock } from "../web_modules/vue.js"

const _hoisted_1 = { class: "App" }
const _hoisted_2 = /*#__PURE__*/_createVNode("header", { class: "p-4 shadow-2xl bg-blue-200" }, [
  /*#__PURE__*/_createVNode("h1", { class: "text-center text-4xl leading-7 my-0" }, "Snodoku"),
  /*#__PURE__*/_createVNode("p", { class: "text-center mt-2" }, [
    /*#__PURE__*/_createTextVNode(" A snowpack application with vue, tailwind, and scss. "),
    /*#__PURE__*/_createVNode("br"),
    /*#__PURE__*/_createTextVNode(" Built for someone learning a Sudoku solving algorithm by someone learning Vue and new build tools. ")
  ])
], -1)
const _hoisted_3 = { class: " h-screen bg-blue-900 py-16 px-2 md:p-24" }
const _hoisted_4 = /*#__PURE__*/_createVNode("footer", null, null, -1)

export function render(_ctx, _cache) {
  const _component_Board = _resolveComponent("Board")
  const _component_Ui = _resolveComponent("Ui")

  return (_openBlock(), _createBlock("div", _hoisted_1, [
    _hoisted_2,
    _createVNode("main", _hoisted_3, [
      _createVNode(_component_Board, { matrix: _ctx.matrix }, null, 8, ["matrix"]),
      _createVNode(_component_Ui, {
        matrix: _ctx.matrix,
        onSolveBoard: _ctx.solveBoard
      }, null, 8, ["matrix", "onSolveBoard"])
    ]),
    _hoisted_4
  ]))
}

defaultExport.render = render
export default defaultExport