<template>
  <div>
    <AppNavigation></AppNavigation>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import AppNavigation from "@/components/AppNavigation";
export default {
  components: {
    AppNavigation
  }
};
</script>