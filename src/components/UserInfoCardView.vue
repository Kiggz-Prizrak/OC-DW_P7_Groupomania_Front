<template>
 <div>
  <div class="userInfo">
    <img class="avatar" :src="avatar" alt="avatar de l'utilisateur">
    <hr>
    <p>{{ `${this.$store.state.user.firstName} ${this.$store.state.user.lastName}` }}</p>
    <p> {{ this.$store.state.user.username }} </p>
    <hr>
    <div class="profilData">
      <p>Inscripion : <span id="inscriptionDate">[12/12/2012]</span></p>
      <p>Posts : <span id="postsNumber">{{ posts.length }}</span></p>
      <p>Commentaires : <span id="comsNumber">[152]</span></p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'UserInfoCardView',
  computed: {
    avatar() {
      console.log(this.$store.state.user.avatar);
      return this.$store.state.user.avatar;
    },
  },
  props: {
    posts: Object,
  },
};
</script>

<style scoped lang="scss">
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
</style>
