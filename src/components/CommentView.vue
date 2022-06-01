<template>
  <div class="comment">
    <div class="commentHeader">
      <div class="userData">
        <img :src="comment.User.avatar" id="userAvatar" alt="user avatar" />

        <h3>{{ comment.User.username }}</h3>
      </div>
      <CommentParams
        :commentUserId="comment.UserId"
        :commentId="comment.id"
        @getAllPosts="$emit('getAllPosts')"
        @toggleEditComment="toggleEditComment"
        :comment="comment"
      />
    </div>
    <div class="commentBlock">
      <div class="commentContent" v-if="this.editComment === false">
        <p id="commentContent">{{ comment.content }}</p>
        <div v-if="comment.media">
          <img :src="comment.media" alt="" />
        </div>
      </div>
      <CommentModifier
        :comment="comment"
        v-if="this.editComment === true"
        @toggleEditComment="toggleEditComment"
        @getAllPosts="$emit('getAllPosts')"
      />
      <div class="blockReactions">
        <span class="reactionType">
          <i class="fas fa-thumbs-down"></i>
          <p>69</p>
        </span>
        <span class="reactionType">
          <i class="fas fa-thumbs-up"></i>
          <p>30</p>
        </span>
        <span class="reactionType">
          <i class="fas fa-heart"></i>
          <p>25</p>
        </span>
      </div>
      <hr />
      <div class="commentFooter">
        <p id="creationDate">[le [18/06/2020] à [6h]]</p>
        <Reactions />
      </div>
    </div>
  </div>
</template>

<script>
import Reactions from '@/components/ReactionsView.vue';
import CommentParams from '@/components/CommentParamsView.vue';
import CommentModifier from '@/components/CommentModifierView.vue';

export default {
  name: 'CommentView',
  components: {
    Reactions,
    CommentParams,
    CommentModifier,
  },
  props: {
    comment: Object,
  },
  methods: {
    toggleEditComment() {
      this.editComment = !this.editComment;
      console.log(this.editComment);
    },
  },
  data() {
    return {
      editComment: false,
    };
  },
};
</script>

<style scoped lang="scss">
.comment {
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
}
.userData {
  display: flex;
  flex-direction: row;
  align-items: center;
  h3 {
    text-align: start;
    color: #d1515a;
    margin: 0px;
  }
  #userAvatar {
    border-radius: 100px;
    width: 30px;
    height: auto;
    margin-right: 4px;
  }
}
.commentHeader {
  display: flex;
  justify-content: space-between;
}
.commentBlock {
  margin: 0px;
  margin-top: 10px;
  img {
    width: 100%;
  }
  p {
    margin: 0px;
  }
}
p {
  text-align: start;
}
#creationDate {
  color: #3f3f3f;
}
.commentFooter {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.blockReactions {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  font-size: 12px;
  .reactionType {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;
  }
  p {
    margin-left: 3px;
  }
}
</style>
