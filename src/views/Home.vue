<template>     
  <div class="grid">
        <Navbar/>
        <Sidebar/>
        <MainContent/>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
import MainContent from '../components/MainContent.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Sidebar,
    MainContent
  }
}
</script>

<style lang="scss">

    .grid {
        width: 100%;
        display:grid;
        grid-template-columns: 150px 1fr;
    }
</style>

