<template>
  <div class="params">
    <input
      v-if="this.$store.state.user.id === this.commentUserId
      || this.$store.state.user.isAdmin === true"
      id="deletePost"
      class="postOptions"
      type="submit"
      value="Suprimer"
      @click="deleteComment"
    />
    <input
      v-if="this.$store.state.user.id === this.commenttUserId"
      id="changePost"
      class="postOptions"
      type="submit"
      value="Modifier"
    />
    <input
    v-if="this.$store.state.user.id !== this.commenttUserId"
    id="changePost" class="postOptions" type="submit" value="Report" />
    <span id="iconPostParams"><i class="fas fa-ellipsis-v"></i></span>
  </div>
</template>

<script>
export default {
  name: 'CommentParamsView',
  props: {
    commentUserId: Number,
    commentId: Number,
  },
  methods: {
    deleteComment() {
      fetch(`http://localhost:3000/api/comments/${this.commentId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${this.$store.state.token}` },
      })
        .then((res) => res.json())
        .then(() => this.$emit('getAllPosts'));
    },
  },
};
</script>

<style scoped lang="scss">
.params {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  input {
    cursor: pointer;
    padding: 10px;
    background-color: transparent;
    text-decoration: none;
    border: none;
    border-right: 1px solid #d7d7d7d8;
    color: #d7d7d7d8;
    display: none;
  }
  .postOptions {
    width: 100%;
  }
  #iconPostParams {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #3f3f3f;
    padding: 10px;
    font-weight: bold;
  }
  &:hover {
    background-color: #091f43;
    #iconPostParams {
      color: #d7d7d7d8;
    }
    .postOptions {
      display: block;
    }
  }
}
</style>
