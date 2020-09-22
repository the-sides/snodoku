<template>
  <div class="App">
    <header class="p-4 shadow-2xl bg-blue-200">
      <h1 class="text-center text-4xl leading-7 my-0">Snodoku</h1>
      <p class="text-center mt-2">
        A snowpack application with vue, tailwind, and scss.
        <br />
        Built for someone learning a Sudoku solving algorithm by someone
        learning Vue and new build tools.
      </p>
    </header>
    <main class=" h-screen bg-blue-900 py-16 px-2 md:p-24">
      <Board :matrix="matrix"></Board>
      <Ui :matrix="matrix" @solveBoard="solveBoard"></Ui>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import Board from "./components/Board.vue";
import Ui from "./components/Ui.vue";
import solver from "./features/solver.js";

export default {
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
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>