<script>
import { ref, watch, reactive, toRefs } from 'vue';
import _ from 'lodash';

export default {
  setup() {
    const state = reactive({
      fName: '',
      lName: '',
      options: {
        heroName: '',
      },
    });

    // Object Watch example
    // watch(
    //   // First Way
    //   // () => { // its called => "getter function"
    //   //   return { ...state };
    //   // },
    //   // Second Way
    //   () => _.cloneDeep(state),
    //   function (newValue, oldValue) {
    //     console.log('fName Old Value => ', oldValue.fName);
    //     console.log('fName New Value => ', newValue.fName);
    //     console.log('lName Old Value => ', oldValue.lName);
    //     console.log('lName New Value => ', newValue.lName);
    //   }
    // );

    // Watch Single Property from Object example
    // watch(
    //   () => state.fName,
    //   (newValue, oldValue) => {
    //     console.log('fName Old Value => ', oldValue);
    //     console.log('fName New Value => ', newValue);
    //   }
    // );

    // Watch Deep/Nested Object example
    watch(
      () => _.cloneDeep(state.options),
      (newValue, oldValue) => {
        console.log('options Old Value => ', oldValue);
        console.log('options New Value => ', newValue);
      },
      {
        deep: true,
      }
    );

    const firstName = ref('');
    const lastName = ref('Wayne');

    watch(
      [firstName, lastName],
      (newValues, oldValues) => {
        console.log('firstName Old Value => ', oldValues[0]);
        console.log('firstName New Value => ', newValues[0]);
        console.log('lastName Old Value => ', oldValues[1]);
        console.log('lastName New Value => ', newValues[1]);
      },
      {
        immediate: true,
      }
    );

    return {
      firstName,
      lastName,
      ...toRefs(state),
    };
  },
  data() {
    return {
      name: '',
    };
  },
  watch: {
    name(newValue, oldValue) {
      console.log('Old Value => ', oldValue);
      console.log('New Value => ', newValue);
    },
  },
};
</script>

<template>
  <div>
    <h2>Options API</h2>
    <input type="text" placeholder="Name" v-model="name" />

    <hr />

    <h2>Compositions API - Ref()</h2>
    <input type="text" placeholder="First Name" v-model="firstName" />
    <input type="text" placeholder="Last Name" v-model="lastName" />

    <hr />

    <h2>Compositions API - Reactive()</h2>
    <input type="text" placeholder="First Name" v-model="fName" />
    <input type="text" placeholder="Last Name" v-model="lName" />
    <input type="text" placeholder="Hero Name" v-model="options.heroName" />
  </div>
</template>

<style scoped></style>
