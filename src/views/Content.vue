<template>
    <h2>This is Content Page</h2>
</template>
<script>
export default {
  mounted () {
    this.$store.dispatch('mouse', false)
  }
}
</script>
