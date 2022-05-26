<template>
  <div class="navSpace">

  </div>
  <nav>
    <router-link to="/">
      <img class="logoHeader" src="../assets/icon-left-font-monochrome-black-rogne.png" alt="">
    </router-link>
    <div class="HeaderUserLink">
      <router-link class="profileLink"
      :to="{ name: 'profil', params: { UserId: this.$store.state.user.id } }">
      <!-- <router-link to="/profil" > -->
        <img class="avatar" :src="avatar" alt="avatar de l'utilisateur">
        <p> {{ username }} </p>
      </router-link>
      <HeaderParams />
    </div>
  </nav>
</template>

<script>
import HeaderParams from '@/components/HeaderParamsView.vue';

export default {
  name: 'HeaderView',
  components: {
    HeaderParams,
  },
  computed: {
    username() {
      console.log(this.$store.state);
      return this.$store.state.user.username || `${this.$store.state.user.firstName} ${this.$store.state.user.lastName}`;
    },
    avatar() {
      console.log(this.$store.state.user.avatar);
      return this.$store.state.user.avatar;
    },
  },
};
</script>

<style scoped lang="scss">
.navSpace{
   height: 70px;
}
.logoHeader {
  height: 35px;
}
nav {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #D7D7D7 ;
  padding: 10px;
  border-bottom: 3px solid #D1515A;
  margin-bottom:100px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #D1515A;
    }
  }

  .avatar {
    height: 40px;
    border-radius: 100px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .profileLink {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .HeaderUserLink {
    display: flex;
    justify-content: space-around;
    align-content: center;
    flex-direction: row;
  }
  .iconMenuActivator {
    display: flex;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
