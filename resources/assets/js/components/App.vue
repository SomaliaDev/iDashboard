<template>
  <div id="page-wrapper" class="gray-bg">
    <Navbar></Navbar>
    <router-view></router-view>
    <div class="footer">
        <div>
            <strong>Copyright</strong> 晚黎后台 &copy; http://www.iwanli.me
        </div>
    </div>
  </div>
</template>
<script>
import Navbar from './layouts/Navbar.vue'
import Dash from './dash/Dash.vue'
export default {
  components: {
    Navbar,
    Dash
  },
  replace: false,
  mounted() {
      console.log('Component ready.')
  }
}
</script>
