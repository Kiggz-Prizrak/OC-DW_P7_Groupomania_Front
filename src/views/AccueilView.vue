<template>
<div class="container">
  <Header />
    <div class="postsSection">
        <AddPost />
        <div class="postContainer">

          <!-- POST TEMPLATE -->

          <PostsList
          :posts="posts"
          />

          <!-- <div class="post">
            <div class="postHeader">
              <div class="postHeaderInfo">
                <img class="postUserAvatar" src="https://www.asafrance.fr/cache/com_zoo/images/bernard_lugan_3_204f5cdbdeb113e0b9056844e06713f5.jpg" alt="avatar de l'user">
                <div class="postUserData">
                  <h3 id="userName">[Lugan]</h3>
                  <p id="postCreationDate">le [18/06/2020] à [6h]</p>
                </div>
              </div>
              <div>
                <div class="postHeaderParams">
                  <input id="deletePost" class="postOptions" type="submit" value="Suprimer" >
                  <input id="changePost" class="postOptions" type="submit" value="Modifier" >
                  <input id="changePost" class="postOptions" type="submit" value="Report" >

                  <span id="iconPostParams"><i class="fas fa-ellipsis-v"></i></span>
                </div>
              </div>
            </div>
            <p> Citez moi 10 ethnies d'afrique ? vous en serrez bien imcapable. </p>
            <img class="media" src="https://afriquexxi.info/IMG/logo/thumbnail.jpg?1643474396" alt="avatar de l'utilisateur">
            <hr>
            <div class="postFooter">
              <input class="comment" type="submit" value="Commenter" >
              <div class="postReaction">
                <h4>Réactions</h4>
                <span>
                  <i class="fas fa-caret-down"></i>
                </span>
                <div class="iconReactions">
                  <span><i class="fas fa-thumbs-up"></i></span>
                  <span><i class="fas fa-thumbs-down"></i></span>
                  <span><i class="fas fa-heart"></i></span>
                </div>
              </div>
            </div>
            <div id="commentContainer"></div>
          </div> -->

        </div>
      </div>

  <Footer />
</div>
</template>

<script>
import Footer from '@/components/FooterView.vue';
import Header from '@/components/HeaderView.vue';
import AddPost from '@/components/AddPostView.vue';
import PostsList from '@/components/PostsListView.vue';

export default {
  name: 'AccueilView',
  components: {
    PostsList, Footer, Header, AddPost,
  },
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    fetch('http://localhost:3000/api/posts', {
      headers: { Authorization: `Bearer ${this.$store.state.token}` },
    })
      .then((res) => res.json())
      .then((postslist) => {
        this.posts = postslist;
        console.log(postslist);
      });
  },
};
</script>

<style scoped lang="scss">
  /* .postsSection {
    margin-top: 3%;
  } */
  .container {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    background-image: url("@/assets/backgroundClair.jpg");
    background-position: top;
    background-size: cover ;
    background-attachment: fixed;
    min-height: 100vh;
  }
  .profilContainer {
    display: flex;
    flex-direction: row;
  }
  .userInfo {
    background-color: #D7D7D7D8;
    border-radius: 10px;
    padding: 20px;
    margin: 20px;
    border: solid 1px black;
    img {
      width: 300px;
      border-radius: 10px;
    }
  }
  .postUserAvatar {
    width: 40px;
    border-radius: 100px;
    margin: 10px;
  }
  .post {
    background-color: #D7D7D7D8;
    border-radius: 10px;
    padding: 20px;
    margin: 20px;
    border: solid 1px black;
    max-width: 560px;
    img {
      width: 100%;
    }
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
          color: #D1515A;
          font-weight: bold;
        }
        p {
          margin: 5px;
          color: #3F3F3F;
        }
      }
    }
    hr{
      margin: 10px;
    }
    .postHeaderParams {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      input {
        padding: 10px;
        display: none;
        background-color: transparent ;
        text-decoration: none;
        border: none;
        border-right: 1px solid #D7D7D7D8;
        color: #D7D7D7D8;
      }
      .postOptions {
        width: 100%;
      }
      #iconPostParams{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        color: #3F3F3F;
        padding: 10px;
        font-weight: bold;
      }
      &:hover{
        background-color: #091F43;
        #iconPostParams {
          color: #D7D7D7D8;
        }
        .postOptions {
         display: block;
      }
        }
    }
    p{
      text-align: start;
    }
    .postFooter {
      display: flex;
      justify-content: space-around;
      flex-direction: row;
      align-items: center;
      .postReaction {
        border-radius: 10px;
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        h4, span {
          padding: 10px;
          color: #3F3F3F;
          margin: 0px;
        }
        .iconReactions {
          display: none;
        }
        &:hover {
          background-color: #091F43;
          .iconReactions {
            display: block;
          }
          h4, span {
            color: #D7D7D7D8;
          }
          span {
            transform: rotate(270deg);
          }
        }
      }
      .comment {
        background-color: transparent;
        font-weight: bold;
        border: none;
        color: #3F3F3F;
        font-size: 18px;
        border-radius: 10px;
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 10px;
        &:active {
          background-color: #091F43;
          color: #D7D7D7D8;
        }
      }
    }
  }
</style>
