<template>
    <div class="w-screen h-screen flex overflow-hidden">
    <sidebar class="flex-shrink-0" />
    <div class="flex-1 flex overflow-hidden">
      <subsidebar class="flex-shrink-0" />
      <div class="flex-1 overflow-x-auto overflow-y-hidden">
        <div class="min-w-0 h-full">
          <router-view />
        </div>
      </div>
    </div>
  </div>
   </template>

<script>

export default{
    name: 'App',
    components: {
        
    }
}

</script>
