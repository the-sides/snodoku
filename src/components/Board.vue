<template>
  <div class="board__wrapper max-w-lg mx-auto">
    <div
      class="board__rows"
      :data-col="colInd"
      :key="colInd"
      v-for="(col, colInd) in 9"
    >
      <div class="board__row w-fit flex justify-center">
        <input
          type="number"
          class="square"
          :data-x="rowInd"
          :data-y="colInd"
          :key="rowInd"
          v-for="(row, rowInd) in 9"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.board__row {
  input {
    outline-offset: -3px;
  }
  input:not(:last-child) {
    border-right-width: 0px;
  }
  input:nth-child(3n):not(:last-child){
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
  width: 24px;
  height: 24px;
  border: 1px solid theme("colors.black");
  appearance: none;
  -moz-appearance: textfield;
}
</style>