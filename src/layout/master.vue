<template>
  <div class="w-screen h-screen flex overflow-hidden">
    <Sidebar class="flex-shrink-0" />
  
    <div class="flex-1 flex overflow-hidden">
      <Subsidebar class="flex-shrink-0" />
      <div class="flex-1 overflow-x-auto overflow-y-hidden">
        <div class="min-w-0 h-full">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/sidebar.vue";
import Subsidebar from "../components/subsidebar.vue";

export default {
  components: { 
    Sidebar, 
    Subsidebar },
};
</script>
