<template>
  <div class="Counter">
    <v-app id="someID">
      <div>
        <h1>This is a countesssxsr</h1>
        Counter: {{count}}
        <v-btn color="success" @click="count += 10">Increment</v-btn>
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
    }
  }
</script>
