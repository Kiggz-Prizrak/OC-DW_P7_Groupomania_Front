<template>
      <div class="comment">
      <div class="commentHeader">
        <div class="userData">
        <img src="https://m.media-amazon.com/images/I/418GZc+elvL._AC_.jpg" id="userAvatar" alt="user avatar">

        <h3>{{ comment.username }}</h3>

        </div>
        <Params />
      </div>
      <div class="commentBlock">
        <p id="commentContent">{{ comment.content }}</p>
        <div v-if="comment.media">
          <hr>
          <img src="https://preview.redd.it/of273l8vulw51.jpg?auto=webp&s=dc07b6d734417335f02edf6c9c6de2e37ff39bf8" alt="">
        </div>
        <hr>
        <div class="commentFooter">
          <p id="creationDate">[le [18/06/2020] à [6h]]</p>
          <Reactions />
        </div>
      </div>
    </div>
</template>

<script>
import Reactions from '@/components/ReactionsView.vue';
import Params from '@/components/ParamsView.vue';

export default {
  name: 'CommentView',
  components: {
    Reactions, Params,
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
  margin: 10px
}
.userData {
  display: flex;
  flex-direction: row;
  align-items: center;
  h3 {
    text-align: start;
    color: #D1515A;
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
  color: #3F3F3F;
}
.commentFooter {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
</style>
