<template>
  <div :class="{ 'active' : overlayActive }" class="overlay"></div>

  <AdminVendor></AdminVendor>

</template>

<script setup>


const overlayActive = ref(false);

provide('overlay', overlayActive);

</script>