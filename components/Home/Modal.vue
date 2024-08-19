<template>

    <div v-if="isModalOpen" class="modal">

        <div class=" modal-close-overlay" @click="modalCloseFunc"></div>

    <div class="modal-content">

        <button class="modal-close-btn" @click="modalCloseFunc">
            <ion-icon name="close-outline"></ion-icon>
        </button>

        <div class="newsletter-img">
            <img src="~/assets/images/newsletter.png" alt="subscribe newsletter" width="400" height="400">
        </div>

        <div class="newsletter">

            <form action="#">

                <div class="newsletter-header">

                    <h3 class="newsletter-title">Subscribe Newsletter.</h3>

                    <p class="newsletter-desc">
                        Subscribe the <b>Anon</b> to get latest products and discount update.
                    </p>

                </div>

                <input type="email" name="email" class="email-field" placeholder="Email Address" required>

                <button type="submit" class="btn-newsletter">Subscribe</button>

            </form>

        </div>

    </div>

    </div>


</template>

<script setup>

const isModalOpen = ref(true);

// modal function
function modalCloseFunc() {
    isModalOpen.value = false;
}
</script>