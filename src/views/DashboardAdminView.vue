<template>
  <div class="container">
    <Header />

    <div class="tab">
      <h2>Liste des utilisateurs</h2>
      <EasyDataTable :headers="headers" :items="users">
        <template #postsCount="{ Posts }">
          <div>
            {{ Posts.length }}
          </div>
        </template>
        <template #commentsCount="{ Comments }">
          <div>
            {{ Comments.length }}
          </div>
        </template>
        <template #action="{ id }">
          <div>
            <button>voir{{ id }}</button>
            <button>éditer{{ id }}</button>
            <button>supprimer{{ id }}</button>
            <!-- <router-link :to="{ name: 'editprofil', params: id }">
            </router-link> -->
          </div>
        </template>
      </EasyDataTable>
    </div>

    <Footer />
  </div>
</template>

<script>
// https://github.com/HC200ok/vue3-easy-data-table
import Footer from '@/components/FooterView.vue';
import Header from '@/components/HeaderView.vue';

export default {
  name: 'DashboardAdminView',
  components: {
    Footer,
    Header,
  },
  data() {
    return {
      users: [],
      headers: [
        {
          text: 'Id',
          value: 'id',
          sortable: true,
        },
        {
          text: "nom d'utilisateur",
          value: 'username' || 'firstName',
          sortable: true,
        },
        {
          text: 'Adresse Email',
          value: 'email',
        },
        {
          text: 'Date de création',
          value: 'createdAt',
          sortable: true,
        },
        {
          text: 'Posts',
          value: 'postsCount',
        },
        {
          text: 'Comments',
          value: 'commentsCount',
        },
        {
          text: 'Action',
          value: 'action',
        },
      ],
    };
  },
  methods: {
    getAllUsers() {
      fetch('http://localhost:3000/api/users', {
        headers: { Authorization: `Bearer ${this.$store.state.token}` },
      })
        .then((res) => res.json())
        .then((users) => {
          this.users = users;
        });
    },
  },
  created() {
    this.getAllUsers();
  },
};
</script>

<style scoped lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  background-image: url('@/assets/backgroundClair.jpg');
  background-position: top;
  background-size: cover;
  background-attachment: fixed;
}

.tab {
  background-color: white;
  padding: 10px;
  border-radius: 10px;
}
</style>
