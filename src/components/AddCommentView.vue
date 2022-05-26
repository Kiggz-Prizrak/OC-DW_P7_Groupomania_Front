<template>
  <hr>
  <form>
    <label for="textarea">
      <input type="textarea" id="commentContent" value="Publier un commentaire">
      <span id="media"><i class="fas fa-images"></i></span>
    </label>
    <input id="submitComment" type="submit" value="COMMENTER" >
  </form>
  <hr>
</template>

<script>
export default {

};
</script>

<style scoped lang="scss">
  form {
    background-color: #ffffff;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    border: solid 2px #3F3F3F;
    height: 70px;
  }
  label {
    width: 78%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #commentContent {
    background-color: transparent;
    border: none;
    width: 90%;
    height: 40px;
  }
  #media {
    margin: 5px;
  }
  #submitComment {
    border-radius: 10px;
    border: solid 2px #3F3F3F;
    padding: 8px;
    background-color: #D1515A;
    color: #3F3F3F;
    font-weight: bold;
    font-size: 13px;
  }
</style>
