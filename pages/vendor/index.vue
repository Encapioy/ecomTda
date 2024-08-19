<template>
  <div :class="{ 'active' : overlayActive }" class="overlay"></div>

  <VendorProduct></VendorProduct>

</template>

<script setup>


const overlayActive = ref(false);

provide('overlay', overlayActive);

</script>