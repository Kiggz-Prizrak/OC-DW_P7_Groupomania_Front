<template>
  <div class="postReaction">
    <span>
      <i class="fas fa-caret-down"></i>
    </span>
    <div class="ParamsInput">
      <input
        @click="logout" class="postOptions" type="submit" value="Déconnexion"
      />
      <input class="postOptions" type="submit" value="Dashboard" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderParams',
  methods: {
    logout() {
      localStorage.clear();
      document.location.href = 'http://localhost:8080/login';
    },
  },
};
</script>

<style scoped lang="scss">
.postReaction {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  h4,
  span {
    padding: 10px;
    color: #3f3f3f;
    margin: 0px;
  }
  .ParamsInput {
    display: none;
  }
  span {
    transform: rotate(90deg);
  }
  &:hover {
    .ParamsInput {
      display: block;
    }
    span {
      color: #3f3f3f;
      transform: rotate(270deg);
    }
    input {
      background-color: transparent;
      border: none;
      font-size: 14px;
      font-weight: bold;
      &:hover {
        color: #d1515a;
      }
    }
  }
}
</style>
