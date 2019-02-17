<template>
  <div class="Counter">
    <v-app id="someID">
      <div>
        <h2>This is a countesssxsr</h2>
        Counter: {{count}}
        <v-btn color="success" @click="incrementCount">Increment</v-btn>
      </div>
    </v-app>
  </div>
</template>

<script>
  export default {
    name:'Counter',
    data(){
      return{
        count: 1
      }
    },
    methods: {
      incrementCount() {
          this.count += 1
      }
    }
  }
</script>
