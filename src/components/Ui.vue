<template>
  <div class="">
    <div class="my-6 max-w-sm mx-auto flex justify-around">
      <div class="flex-1 flex justify-center">
        <input type="checkbox" name="auto-solve" id="" />
        <label class="text-blue-200 leading-3 my-auto ml-4 text-xl" for="auto-solve">Auto Solve</label>
      </div>
      <div class="flex-1">
        <button
          @click="solveBoard"
          class="block mx-auto border-blue-400 border-2 bg-blue-200 py-2 px-4 rounded"
        >
          Solve
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    matrix: Array
  },
  methods: {
    solveBoard() {
      this.$emit("solveBoard");
    }
  }
};
</script>

<style scoped>
</style>