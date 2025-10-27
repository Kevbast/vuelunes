<template>
  <h1>Menu de nav</h1>
  <ul id="menu">
    <li>
        <router-link to="/">Home </router-link>
    </li>
    <li>
        <router-link to="/collatz">Collatz </router-link>
    </li>

  </ul>
</template>

<script>
export default {
name:"MenuComponent"
}
</script>

<style>

</style>