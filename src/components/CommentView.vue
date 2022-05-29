<template>
  <div class="comment">
    <div class="commentHeader">
      <div class="userData">
        <img :src="comment.User.avatar" id="userAvatar" alt="user avatar" />

        <h3>{{ comment.User.username }}</h3>
      </div>
      <commentParams
        :commentUserId="comment.UserId"
        :commentId="comment.id"
        @getAllPosts="$emit('getAllPosts')"
      />
    </div>
    <div class="commentBlock">
      <p id="commentContent">{{ comment.content }}</p>
      <div v-if="comment.media">
        <hr />
        <img :src="comment.media" alt="" />
      </div>
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
import commentParams from '@/components/CommentParamsView.vue';

export default {
  name: 'CommentView',
  components: {
    Reactions,
    commentParams,
  },
  props: {
    comment: Object,
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
