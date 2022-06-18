<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
export default {
  name: 'App',
  data() {
    return {
      formValues: {
        name: '',
        profileSummary: '',
        country: '',
        jobLocation: [],
        remoteWork: 'no',
        skills: [],
        yearsOfExperiences: '',
        age: null,
      },
    };
  },
  methods: {
    submitForm() {
      console.log('Form Values => ', this.formValues);
    },
  },
};
</script>

<template>
  <div>
    <pre>{{ JSON.stringify(formValues, null, 2) }}</pre>
  </div>
  <form @submit.prevent="submitForm">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" v-model.trim.lazy="formValues.name" />
    </div>

    <div>
      <label for="profile">Profile Summary</label>
      <textarea
        id="profile"
        v-model="formValues.profileSummary"
        cols="30"
        rows="10"
      ></textarea>
    </div>

    <div>
      <label for="country">Country</label>
      <select id="country" v-model="formValues.country">
        <option value="">Select a country</option>
        <option value="indonesia">Indonesia</option>
        <option value="vietnam">Vietnam</option>
        <option value="singapore">Singapore</option>
      </select>
    </div>

    <div>
      <label for="jobLocation">Job Location</label>
      <select id="jobLocation" multiple v-model="formValues.jobLocation">
        <option value="indonesia">Indonesia</option>
        <option value="vietnam">Vietnam</option>
        <option value="singapore">Singapore</option>
      </select>
    </div>

    <div>
      <input
        type="checkbox"
        id="remoteWork"
        v-model="formValues.remoteWork"
        true-value="yes"
        false-value="no"
      />
      <label for="remoteWork">Open to remote work?</label>
    </div>
    <br />

    <div id="checkbox-group">
      <label>Skills => </label>
      <input
        type="checkbox"
        id="html"
        value="html"
        v-model="formValues.skills"
      />
      <label for="html">HTML</label>
      <input type="checkbox" id="css" value="css" v-model="formValues.skills" />
      <label for="css">CSS</label>
      <input
        type="checkbox"
        id="javscript"
        value="javscript"
        v-model="formValues.skills"
      />
      <label for="javscript">Javscript</label>
    </div>

    <div id="radio-group">
      <label>Years of Experiences</label>
      <input
        type="radio"
        id="0-2"
        value="0-2"
        v-model="formValues.yearsOfExperiences"
      />
      <label for="0-2">0-2</label>
      <input
        type="radio"
        id="3-5"
        value="3-5"
        v-model="formValues.yearsOfExperiences"
      />
      <label for="3-5">3-5</label>
      <input
        type="radio"
        id="6-10"
        value="6-10"
        v-model="formValues.yearsOfExperiences"
      />
      <label for="6-10">6-10</label>
      <input
        type="radio"
        id="10+"
        value="10+"
        v-model="formValues.yearsOfExperiences"
      />
      <label for="10+">10+</label>
    </div>

    <div>
      <label for="age">Age</label>
      <input
        @keyup.enter="submitForm"
        type="number"
        id="age"
        v-model="formValues.age"
      />
    </div>

    <!-- <div>
      <button>Submit</button>
    </div> -->
  </form>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
label {
  display: block;
}

#checkbox-group label,
#radio-group label {
  display: inline !important;
}
</style>
