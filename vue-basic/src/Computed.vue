<script>
export default {
  name: 'App',
  data() {
    return {
      firstName: 'Bruce',
      lastName: 'Wayne',
      items: [
        { id: 1, title: 'TV', price: 100 },
        { id: 2, title: 'Laptop', price: 200 },
        { id: 3, title: 'PC', price: 300 },
      ],
      country: '',
    };
  },
  methods: {
    changeFullName() {
      this.fullName = 'Clark Kent';
    },
    getTotal() {
      console.log('getTotal Method');
      return this.items.reduce((total, item) => (total += item.price), 0);
    },
  },
  computed: {
    fullName: {
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
      set(value) {
        const names = value.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
      },
    },
    totalPrice() {
      console.log('Total Price Property');
      return this.items.reduce((total, item) => (total += item.price), 0);
    },
    expensiveItems() {
      return this.items.filter((item) => item.price > 100);
    },
  },
};
</script>

<template>
  <h2>Computed Fullname - {{ fullName }}</h2>
  <button @click="changeFullName">Change Fullname</button>

  <h2>Computed Total - {{ totalPrice }}</h2>
  <button @click="items.push({ id: 4, title: 'Mouse', price: 150 })">
    Add Item
  </button>

  <h2>Method Total - {{ getTotal() }}</h2>

  <input type="text" v-model="country" />

  <template v-for="item in items" :key="item.id">
    <h2 v-if="item.price > 100">{{ item.title }} - {{ item.price }}</h2>
  </template>

  <hr />

  <template v-for="item in expensiveItems" :key="item.id">
    <h2>{{ item.title }} - {{ item.price }}</h2>
  </template>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
