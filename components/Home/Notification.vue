<template>

    <div v-if="isNotificationOpen" class="notification-toast">

        <button class="toast-close-btn" @click="NotifCloseFunc">
            <ion-icon name="close-outline"></ion-icon>
        </button>

        <div class="toast-banner">
            <img src="~/assets/images/products/jewellery-1.jpg" alt="Rose Gold Earrings" width="80" height="70">
        </div>

        <div class="toast-detail">

            <p class="toast-message">
                Someone in new just bought
            </p>

            <p class="toast-title">
                Rose Gold Earrings
            </p>

            <p class="toast-meta">
                <time datetime="PT2M">2 Minutes</time> ago
            </p>

        </div>

    </div>
    
</template>

<script setup>

const isNotificationOpen = ref(true);

// modal function
function NotifCloseFunc() {
    isNotificationOpen.value = false;
}

</script>