<template>
  <form>
    <div class="blockLabel">

    <label class="labelForm" for="textarea">
      <input v-model="postContent" type="textarea" id="postContent">
          <label for="media">
      <input class="media" type="file"
      id="media" name="media" accept="image/png, image/jpeg">
        <span id="iconMedia"><i class="fas fa-images"></i></span>
      </label>
    </label>

    </div>

    <input id="submitPost" type="submit" value="PUBLIER" >

  </form>
</template>

<script>
export default {
  name: 'LoginView',
  components: {
  },
  // data() {
  //   return {
  //     email: '',
  //     password: '',
  //   };
  // },
  methods: {
    submitLogin() {
      const post = {
        postContent: this.postContent,
        password: document.getElementById('media').value,
      };
      console.log(post);

      fetch('http://localhost:3000/api/users/posts', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
    },
  },
};
</script>

<style scoped lang="scss">
#media {
  display: none;
}
#iconMedia {
  margin: 0px;
}
  form {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    background-color: #D7D7D7D8;
    border-radius: 10px;
    padding: 20px;
    margin: 20px;
    border: solid 1px black;
  }
  .blockLabel {
    width: 75%;
  }
  .labelForm {
    background-color: #ffffff;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    border: solid 2px #3F3F3F;
  }
  #postContent {
    background-color: transparent;
    border: none;
    width: 90%;
    &:focus-visible{
      border: none;
    }
  }
  #submitPost {
    border-radius: 10px;
    border: solid 2px #3F3F3F;
    height: 40px;
    width: 20%;
    background-color: #D1515A;
    color: #3F3F3F;
    font-weight: bold;
    font-size: 16px;
  }
</style>
