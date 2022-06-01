<template>
  <div class="container">
    <Header />
    <form @submit.prevent="submitLogin">
      <h1>Modifier le profil</h1>
      <div class="fieldsContainer">
        <label for="firstName">
          *Prénom de l'utilisateur
          <input v-model="firstName" type="text" id="firstName" name="firstName" />
        </label>

        <label for="lastName">
          *Nom de l'utilisateur
          <input v-model="lastName" type="text" id="lastName" name="lastName" />
        </label>

        <label for="lastName">
          Pseudo
          <input v-model="username" type="text" id="surname" name="surname" />
        </label>

        <label for="avatar">
          Avatar
          <div class="InputAvatar">
            <span id="iconMediaa"><i class="fas fa-images"></i></span>
            <input
              class="media"
              type="file"
              ref="inputFile"
              id="avatar"
              name="media"
              accept="image/png, image/jpeg"
            />
          </div>
        </label>

        <label for="email">
          *Adresse E-mail
          <input v-model="email" id="email" type="email" name="email" />
        </label>

        <label for="email">
          *Vérification de l'adresse E-mail
          <input v-model="emailConfirmation" id="email" type="email" name="email" />
        </label>

        <label for="password">
          *Mot de passe
          <input v-model="password" id="password" type="password" name="password" />
        </label>

        <label for="password">
          *Vérification du mot de passe
          <input v-model="passwordConfirmation" id="password" type="password" name="password" />
        </label>
      </div>
      <input @click="edit" class="submitBtn" type="submit" value="MODIFIER" />
      <hr />
      <p>*Champs Obligatoire {{ this.linkMedia }}</p>
    </form>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/FooterView.vue';
import Header from '@/components/HeaderView.vue';

export default {
  name: 'EditProfil',
  components: {
    Footer,
    Header,
  },
  props: {
    UserId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      email: '',
    };
  },
  methods: {
    edit() {
      console.log(this.$refs.inputFile.files[0]);
      if (this.email === this.emailConfirmation && this.password === this.passwordConfirmation) {
        const userEdited = new FormData();
        userEdited.append('avatar', this.$refs.inputFile.files[0] ?? this.$store.user.avatar);
        userEdited.append('firstName', this.firstName);
        userEdited.append('lastName', this.lastName);
        userEdited.append('username', this.username);
        userEdited.append('password', this.password);
        userEdited.append('email', this.email);
        console.log(userEdited);

        fetch(`http://localhost:3000/api/users/${this.UserId}`, {
          body: userEdited,
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`,
          },
        })
          .then((res) => res.json())
          .then(() => this.$router.push({ name: 'profil' }));
      }
    },
  },
};
</script>

<style scoped lang="scss">
.titreLogin {
  width: 50%;
  margin: 18px 0px 18px 0px;
}
.container {
  background-image: url('@/assets/backgroundClair.jpg');
  background-position: top;
  background-size: cover;
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
  background-color: #d7d7d7d8;
  max-width: 1000px;
  border-radius: 10px;
  border: 1px solid black;
  padding: 18px;
}
.fieldsContainer {
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
    box-shadow: 2px 2px 5px #3f3f3f;
    margin-top: 10px;
  }
}
.submitBtn {
  min-width: 180px;
  border-radius: 10px;
  height: 50px;
  background-color: #d1515a;
  color: #3f3f3f;
  box-shadow: 2px 2px 5px #3f3f3f;
  font-weight: bold;
  margin: 18px 0px 18px 0px;
  font-size: 16px;
}
P {
  font-size: 18px;
  margin: 18px 0px 18px 0px;
}
hr {
  width: 75%;
  margin: 18px 0px 18px 0px;
}
.linkCreateUser {
  color: #d1515a;
  font-weight: bold;
}
.media {
  display: flex;
  input {
    display: none;
  }
}
.InputAvatar {
  border: 2px solid #3f3f3f;
  display: flex;
  align-items: center;
  height: 50px;
  margin-top: 10px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 2px 2px 5px #3f3f3f;
  background-color: white;
  span {
    margin-left: 10px;
    font-size: 22px;
  }
  p {
    margin-left: 10px;
    font-size: 12px;
  }
  .media {
    display: none;
  }
}
</style>
