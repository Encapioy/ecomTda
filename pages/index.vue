<template>
  <div :class="{ 'active' : overlayActive }" class="overlay"></div>

  <!-- <HomeModal></HomeModal> -->
  <!-- <HomeNotification></HomeNotification> -->
  <HomeIntro></HomeIntro>
  <HomeHeader></HomeHeader>
  <HomeMain></HomeMain>
  <HomeFooter></HomeFooter>

</template>

<script setup>


const overlayActive = ref(false);

provide('overlay', overlayActive);

</script>