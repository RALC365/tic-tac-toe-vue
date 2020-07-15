<template>
  <section class="body main-menu">
      <ul>
          <tttoption v-for="(menu,i) in menus" :key="i" :menu="menu"></tttoption>
      </ul>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>