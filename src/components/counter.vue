<template>
  <div class="Counter">
    Counter: {{count}}
    <button @click="count += 1">Increment</button>
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
