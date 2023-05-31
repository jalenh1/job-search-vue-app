<template>
  <h1 class="text-6xl font-bold">Job Results Page</h1>
  <button @click="handleClick">Go to Home Page</button>
</template>

<script>
export default {
  name: 'JobResultsView',
  methods: {
    handleClick() {
      this.$router.push({
        name: 'Home'
      })
    }
  }
}
</script>
