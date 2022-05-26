<template>
  <div class="params">
    <input id="deletePost" class="postOptions" type="submit" value="Suprimer" >
    <input id="changePost" class="postOptions" type="submit" value="Modifier" >
    <input id="changePost" class="postOptions" type="submit" value="Report" >
    <span id="iconPostParams"><i class="fas fa-ellipsis-v"></i></span>
  </div>
</template>

<script>
export default {
  name: 'ParamsView',
};
</script>

<style scoped lang="scss">

.params {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  input {
    padding: 10px;
    background-color: transparent ;
    text-decoration: none;
    border: none;
    border-right: 1px solid #D7D7D7D8;
    color: #D7D7D7D8;
    display: none;
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

</style>
