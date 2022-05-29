<template>
  <div class="post">
    <div class="postHeader">
      <div class="postHeaderInfo">
        <img class="postUserAvatar" :src="post.User.avatar" alt="avatar de l'user" />
        <div class="postUserData">
          <router-link :to="{ name: 'profil', params: { UserId: post.UserId } }">
            <h3 id="userName">{{ post.User.username }}</h3>
          </router-link>
          <p id="postCreationDate">le [Date de publication] à [Heure de création]</p>
        </div>
      </div>
      <div>
        <ParamsView
          :postUserId="post.UserId"
          :postId="post.id"
          @getAllPosts="$emit('getAllPosts')"
          :post="post"
        />
      </div>
    </div>
    <!-- contenu du post -->

    <p id="postContent">{{ post.content }}</p>
    <img class="media" v-if="post.media" :src="this.post.media" alt="avatar de l'utilisateur" />

    <!-- fin - contenu du post -->

    <!-- Modificateur du post -->

    <PostModifier
    :post="post"
    />

    <!--fin - Modificateur du post -->

    <!-- Reactions liste -->

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

    <!-- fin - Reactions liste  -->

    <hr />

    <div class="postFooter">
      <input v-on:click="isHidden = !isHidden" class="comment" type="submit" value="Commenter" />
      <Reactions />
    </div>

    <div v-if="!isHidden" class="commentContainer">
      <AddComment :postId="post.id" @getAllPosts="$emit('getAllPosts')" />
      <CommentsList
        :Comments="post.Comments"
        :postId="post.id"
        @getAllPosts="$emit('getAllPosts')"
      />
    </div>
  </div>
</template>

<script>
import AddComment from './AddCommentView.vue';
import CommentsList from './CommentsListView.vue';
import ParamsView from './ParamsView.vue';
import Reactions from './ReactionsView.vue';
import PostModifier from './PostModifierView.vue';

export default {
  name: 'PostView',
  components: {
    ParamsView,
    CommentsList,
    AddComment,
    Reactions,
    PostModifier,
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
  margin: 20px 0px;
  border: solid 1px black;
  width: 100%;
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
        text-decoration: none;
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
    object-fit: contain;
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

.blockReactions {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  .reactionType {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px;
  }
  p {
    margin-left: 3px;
  }
}
</style>
