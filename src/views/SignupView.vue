<template>
  <div class="container">
    <Header />
    <form @submit.prevent="submitLogin">
      <img class="titreLogin" alt="titre" src="../assets/icon-left-font-monochrome-red.titre.png">
      <div class="fieldsContainer">
        <label for="firstName">
          *Prénom de l'utilisateur
          <input v-model="text" type="text" id="firstName" name="firstName">
        </label>
        <label for="lastName">
          *Nom de l'utilisateur
          <input v-model="text" type="text" id="lastName" name="lastName">
        </label>
        <label for="lastName">
          Pseudo
          <input v-model="text" type="text" id="surname" name="surname">
        </label>
        <label for="email">
          *Adresse E-mail
          <input v-model="email" id="email" type="email" name="email">
        </label>
        <label for="password">
          *Mot de passe
          <input v-model="password" id="password" type="password" name="password">
        </label>
        <label for="password">
          *Vérification du mot de passe
          <input v-model="password" id="password" type="password" name="password">
        </label>
      </div>
      <input class="submitBtn" type="submit" value="SE CONNECTER" >
      <hr>
      <p>Créer un <span class="linkCreateUser" href="http://">compte</span><span> | </span>*Champs Obligatoire</p>
    </form>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/FooterView.vue';
import Header from '@/components/HeaderPublicView.vue';

export default {
  name: 'LoginView',
  components: {
    Footer, Header,
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    submitLogin() {
      console.log('cc'); //
      //
      // On fait le fetch ici
      //
    },
  },
};
</script>

<style scoped lang="scss">

  .titreLogin{
    width: 50%;
    margin: 18px 0px 18px 0px;
  }
  .container {
    background-image: url("@/assets/backgroundClair.jpg");
    background-position: top;
    background-size: cover ;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100vh;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #D7D7D7D8;
    max-width: 1000px ;
    border-radius: 10px;
    border: 1px solid black;
    padding: 18px;
  }
  .fieldsContainer{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  label {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 80%;
    font-size: 25px;
    font-weight: bold;
    margin: 18px 0px 18px 0px;
    input {
      height: 50px;
      width: 100%;
      border-radius: 10px;
      box-shadow: 2px 2px 5px #3F3F3F;
      margin-top: 10px;
    }
  }
  .submitBtn {
    min-width: 180px;
    border-radius: 10px;
    height: 50px;
    background-color: #D1515A;
    color: #3F3F3F;
    box-shadow: 2px 2px 5px #3F3F3F;
    font-weight: bold;
    margin: 18px 0px 18px 0px;
    font-size: 16px;
  }
  P{
    font-size: 18px;
    margin: 18px 0px 18px 0px;
  }
  hr{
    width: 75%;
    margin: 18px 0px 18px 0px;
  }
  .linkCreateUser {
    color: #D1515A;
    font-weight: bold;
  }
</style>
