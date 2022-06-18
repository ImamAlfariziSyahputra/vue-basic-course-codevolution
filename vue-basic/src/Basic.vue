<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
export default {
  name: 'App',
  data() {
    return {
      name: '<b>Lazy</b>',
      age: 19,
      headingId: 'heading',
      isDisabled: false,
      status: 'danger',
      isItalic: true,
      isSoldout: false,
      primaryColor: 'green',
      mediumFontSize: 50,
      redItalic: {
        color: 'red',
        textDecoration: 'italic',
      },
      bgGreenBorderBlue: {
        backgroundColor: 'lightgreen',
        border: '1px solid blue',
      },
      bgOrangeBorderBlue: {
        backgroundColor: 'orange',
        border: '1px solid blue',
      },
      isBgOrange: true,
    };
  },
};
</script>

<template>
  <div>
    <div>Hello {{ name }}</div>
    <div v-text="age"></div>
    <div v-html="name"></div>
    <h2 :id="headingId">Heading</h2>
    <button :disabled="isDisabled">Button</button>
    <h2 class="underline">Underlined Text</h2>
    <h2 :class="status" class="underline">Status</h2>
    <h2 :class="isItalic && 'italic'">Conditional Class Bind</h2>
    <h2 :class="isSoldout ? 'red' : 'blue'">is Movie Soldout</h2>
    <h2 :class="['italic', 'red']">Italic and color Text bind</h2>
    <h2 :class="[isItalic && 'italic', isSoldout ? 'red' : 'blue']">
      Array Condition Italic and color Text bind
    </h2>
    <h2
      :class="{
        italic: isItalic,
        red: isSoldout,
        blue: !isSoldout,
      }"
    >
      Object Condition Italic and color Text bind
    </h2>
  </div>

  <h2
    :style="{
      color: primaryColor,
      fontSize: mediumFontSize + 'px',
    }"
  >
    Inline Style
  </h2>
  <h2 :style="[redItalic, isBgOrange ? bgOrangeBorderBlue : bgGreenBorderBlue]">
    Array Style Binding
  </h2>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.underline {
  text-decoration: underline;
}
.italic {
  font-style: italic;
}
.red {
  color: red;
}
.blue {
  color: blue;
}
</style>
