<template>
  <div class="App">
    <header class="p-4 shadow-2xl bg-blue-200">
      <h1 class="text-center text-4xl leading-7 my-0">Snoduko</h1>
      <p class="text-center mt-2">
        A snowpack application with vue, tailwind, and scss.
      </p>
    </header>
    <main class=" h-screen bg-blue-900 py-16 px-2 md:p-24">
      <Board></Board>
      <Ui></Ui>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import Board from "./components/Board.vue";
import Ui from "./components/Ui.vue";

export default {
  components: {
    Board,
    Ui
  },
  data() {
    return {
      message: "Learn Vue"
    };
  }
};
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>