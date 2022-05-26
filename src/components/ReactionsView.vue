<template>
<div class="reactionContainer">
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
</template>

<script>
export default {
  name: 'ReactionsView',
};
</script>

<style scoped lang="scss">

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
    span {
      transform: rotate(90deg);
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
</style>
