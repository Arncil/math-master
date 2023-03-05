<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const { quiz } = defineProps(['quiz']);
const navigateToQuiz = () => {
    router.push(`/quiz/${quiz.id}`)
};
</script>

<template>
    <div class="card" @click="navigateToQuiz">
        <img :src="quiz.img" :alt="quiz.name">
        <div class="card-text">
            <h3>{{ quiz.name }}</h3>
            <p>{{ quiz.questions.length }} Questions</p>
        </div>
    </div>
</template>

<style scoped>
.card {
    width: 310px;
    overflow: hidden;
    border-radius: 15px;
    box-shadow: 1px 1px 10px hsla(0, 0%, 100%, 0.4);
    margin-bottom: 35px;
    margin-right: 20px;
    cursor: pointer;
}

.card img {
    width: 100%;
    height: 190px;
    margin: 0;
}

.card .card-text {
    padding: 0 5px;
}

.card .card-text h3 {
    font-weight: 700;
}

@media (max-width: 500px) {
    .card {
        margin-right: 0;
    }
}
</style>