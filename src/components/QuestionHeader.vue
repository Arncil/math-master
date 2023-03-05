<script setup>
    const { questionStatus, barPercentage } = 
    defineProps(['questionStatus', 'barPercentage']);
</script>

<template>
    <header>
        <h1>Question {{ questionStatus }}</h1>
        <div class="bar">
            <div class="completion" :style="{ width: barPercentage }"></div>
        </div>
    </header>
</template>

<style scoped>
    header {
        margin: 40px 0;
        display: grid;
        place-items: center;
    }

    .bar {
        width: 100%;
        height: 50px;
        border: 3px solid hsl(0, 0%, 80%);
    }

    .completion {
        height: 100%;
        width: 0%;
        background-color: hsl(0, 0%, 80%);
    }
</style>