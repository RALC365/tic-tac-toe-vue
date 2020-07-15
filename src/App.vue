<template>
  <div id="ttt">
    <section class="head d-flex vh-flex-center">TIC TAC TOE</section>
    <router-view></router-view>
    <section class="footer">Derechos de autor @RALC365</section>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
