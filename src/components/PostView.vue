<template>
  <div class="post">
    <div class="postHeader">
      <div class="postHeaderInfo">
        <img class="postUserAvatar" :src="post.User.avatar" alt="avatar de l'user" />
        <div class="postUserData">
          <router-link :to="{ name: 'profil', params: { UserId: post.UserId } }">
            <h3 id="userName">{{ post.User.username }}</h3>
          </router-link>
          <h3 id="userName">{{ post.User.username }}</h3>
          <p id="postCreationDate">le [Date de publication] à [Heure de création]</p>
        </div>
      </div>
      <div>
        <ParamsView />
      </div>
    </div>
    <p id="postContent">{{ post.content }}</p>
    <img class="media" v-if="media" :src="post.media" alt="avatar de l'utilisateur" />
    <hr />
    <div class="postFooter">
      <input v-on:click="isHidden = !isHidden" class="comment" type="submit" value="Commenter" />
      <Reactions />
    </div>
    <div v-if="!isHidden" class="commentContainer">
      <AddComment />
      <CommentsList :Comments="post.Comments" />
    </div>
  </div>
</template>

<script>
import AddComment from './AddCommentView.vue';
import CommentsList from './CommentsListView.vue';
import ParamsView from './ParamsView.vue';
import Reactions from './ReactionsView.vue';

export default {
  name: 'PostView',
  components: {
    ParamsView,
    CommentsList,
    AddComment,
    Reactions,
  },
  props: {
    post: Object,
  },
  data() {
    return {
      isHidden: true,
    };
  },
};
</script>

<style scoped lang="scss">
.postUserAvatar {
  width: 40px;
  border-radius: 100px;
}
.post {
  background-color: #d7d7d7d8;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  border: solid 1px black;
  max-width: 560px;
  .postHeader {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
  .postHeaderInfo {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .postUserAvatar {
      width: 40px;
      height: 40px;
      border-radius: 100px;
      display: flex;
    }
    .postUserData {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: baseline;
      h3 {
        margin: 5px;
        color: #d1515a;
        font-weight: bold;
      }
      p {
        margin: 5px;
        color: #3f3f3f;
      }
    }
  }
  hr {
    margin: 10px;
  }
  p {
    text-align: start;
  }
  img {
    width: 100%;
  }
  .postFooter {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    .comment {
      background-color: transparent;
      font-weight: bold;
      border: none;
      color: #3f3f3f;
      font-size: 18px;
      border-radius: 10px;
      display: flex;
      justify-content: space-around;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 10px;
      &:active {
        background-color: #091f43;
        color: #d7d7d7d8;
      }
    }
  }
}
</style>
