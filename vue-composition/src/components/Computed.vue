<script>
import { ref, reactive, toRefs, computed } from 'vue';

export default {
  setup() {
    const refFirstName = ref('');
    const refLastName = ref('');

    const refFullName = computed(function () {
      return `${refFirstName.value} ${refLastName.value}`;
    });

    const state = reactive({
      reactiveFirstName: '',
      reactiveLastName: '',
    });

    const reactiveFullName = computed(function () {
      return `${state.reactiveFirstName} ${state.reactiveLastName}`;
    });

    return {
      refFirstName,
      refLastName,
      refFullName,
      ...toRefs(state),
      reactiveFullName,
    };
  },
  data() {
    return {
      fName: '',
      lName: '',
    };
  },
  computed: {
    fullName() {
      return `${this.fName} ${this.lName}`;
    },
  },
};
</script>

<template>
  <div>
    <h2>Options API</h2>
    <input type="text" placeholder="First Name" v-model="fName" />
    <input type="text" placeholder="Last Name" v-model="lName" />
    <h4>Options Fullname is {{ fullName }}</h4>

    <hr />

    <h2>Compositions API - Ref()</h2>
    <input type="text" placeholder="First Name" v-model="refFirstName" />
    <input type="text" placeholder="Last Name" v-model="refLastName" />
    <h4>Compositions Fullname is {{ refFullName }}</h4>

    <hr />

    <h2>Compositions API - Reactive()</h2>
    <input type="text" placeholder="First Name" v-model="reactiveFirstName" />
    <input type="text" placeholder="Last Name" v-model="reactiveLastName" />
    <h4>Reactive Fullname is {{ reactiveFullName }}</h4>
  </div>
</template>

<style scoped></style>
