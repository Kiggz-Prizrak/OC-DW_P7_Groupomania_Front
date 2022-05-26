<template>
  <div class="container">
    <Header />
    <div class="profilContainer">
      <UserInfoCard posts="posts"/>
      <div class="postsSection">
        <addPost v-if="this.$store.state.user.id === UserId"
        />
        <PostsList
        :posts="this.userData.Posts"
        />
         <!-- :userId="this.$store.state.user.userId" -->
      </div>
    </div>
    <Footer />
  </div>
  <p> {{ this.userData.Posts }}</p>
</template>

<script>
import Footer from '@/components/FooterView.vue';
import Header from '@/components/HeaderView.vue';
import addPost from '@/components/AddPostView.vue';
import PostsList from '@/components/PostsListView.vue';
import UserInfoCard from '@/components/UserInfoCardView.vue';

export default {
  name: 'ProfilView',
  components: {
    Footer,
    Header,
    addPost,
    PostsList,
    UserInfoCard,
  },
  props: {
    UserId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      userData: [],
    };
  },
  mounted() {
    fetch(`http://localhost:3000/api/users/${this.UserId}`, {
      headers: { Authorization: `Bearer ${this.$store.state.token}` },
    })
      .then((res) => res.json())
      .then((User) => {
        this.userData = User;
        console.log(User);
      });
  },
};
</script>

<style scoped lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  background-image: url('@/assets/backgroundClair.jpg');
  background-position: top;
  background-size: cover;
  background-attachment: fixed;
}
.profilContainer {
  margin: 3%;
  display: flex;
  flex-direction: row;
}
</style>
