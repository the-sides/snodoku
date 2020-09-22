<template>
  <div class="board__wrapper max-w-lg mx-auto">
    <div
      class="board__rows"
      :data-row="rowInd"
      :key="rowInd"
      v-for="(row, rowInd) in 9"
    >
      <div class="board__row w-fit flex justify-center">
        <input
          type="text"
          class="square"
          :data-x="colInd"
          :data-y="rowInd"
          :key="colInd"
          max="9"
          min="0"
          maxlength="1"
          v-for="(col, colInd) in 9"
          :value="matrix[rowInd * 9 + colInd]"
          @keydown="refreshBoard"
        />
      </div>
    </div>
  </div>
</template>

<script>
let counter = 0;

export default {
  props: {matrix: Array},
  methods: {
    refreshBoard(ev) {
      this.matrix[counter++] = 9;
    }
  }
};
</script>

<style lang="scss">
.board__row {
  input:not(:last-child) {
    border-right-width: 0px;
  }
  input:nth-child(3n):not(:last-child) {
    border-right-width: 2px;
  }
}
.board__rows:not(:last-child) {
  input {
    border-bottom-width: 0px;
  }
}
.board__rows:nth-child(3n):not(:last-child) {
  input {
    border-bottom-width: 2px;
  }
}
input.square {
  box-sizing: content-box;
  width: 24px;
  height: 24px;
  padding: 7px;
  font-size: 42px;
  border: 1px solid theme("colors.black");
  outline-offset: -3px;
  appearance: none;
  -moz-appearance: textfield;
}
</style>