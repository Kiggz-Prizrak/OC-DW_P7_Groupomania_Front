<template>
 <div>
  <div class="userInfo">
    <img class="avatar" :src="userData.avatar" alt="avatar de l'utilisateur">
    <hr>
    <p>{{ `${this.userData.firstName} ${userData.lastName}` }}</p>
    <p> {{ this.userData.username }} </p>
    <hr>
    <div class="profilData">
      <p>Inscripion : <span id="inscriptionDate">[12/12/2012]</span></p>
      <p>Posts : <span id="postsNumber">{{ userData.Posts.length }}</span></p>
      <p>Commentaires : <span id="comsNumber">{{ userData.Comments.length }}</span></p>
    </div>
    <div v-if="this.$store.state.user.id === this.userData.id">
      <hr>
      <input @click="deleteAccount" class="delete" type="submit" value="Suprimer le compte">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'UserInfoCardView',
  props: {
    userData: Object,
  },
  methods: {
    deleteAccount() {
      fetch(`http://localhost:3000/api/users/${this.userData.id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${this.$store.state.token}` },
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
      document.location.href = 'http://localhost:8080/login';
    },
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
    width: 250px;
    border-radius: 100%;
    object-fit: contain;
    height: 250px;
  }
  .delete {
    background-color: #091f43;
    color: rgba(215, 215, 215);
    border-radius: 10px;
    margin-top: 10px;
    padding: 7px
  }
}
</style>
