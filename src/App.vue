<template>
  <div class="App">
    <header></header>
    <main>
      <h1>Snoduko</h1>
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

<style>

</style>
