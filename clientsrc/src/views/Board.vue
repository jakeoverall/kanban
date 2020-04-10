<template>
  <div class="board">
    <div class="d-flex align-items-center justify-content-between mx-3">
      <h1>{{board.name}}</h1>
      <button @click="addList">Create List</button>
    </div>
    <div class="boxes d-flex">
      <div class="m-1" v-for="n in lists" :key="n">
        <div class="box">box-{{n}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Board",
  mounted() {
    this.$store.dispatch("getBoard", this.$route.params.boardId);
    this.$store.dispatch("joinBoard", this.$route.params.boardId);
  },
  beforeRouteLeave(to, from, next) {
    this.$store.dispatch("leaveBoard", this.$route.params.boardId);
    next()
  },
  computed: {
    board() {
      return this.$store.state.boardsStore.board;
    },
    lists() {
      return this.$store.state.boardsStore.lists;
    }
  },
  methods: {
    addList() {
      this.$store.dispatch("addList", {
        name: "list" + this.lists.length,
        boardId: this.$route.params.boardId
      })
    }
  }
};
</script>

<style>
.boxes {
  max-width: 100vw;
  overflow-x: auto;
}

.box {
  min-height: 80vh;
  width: 200px;
  background-color: var(--info);
}
</style>