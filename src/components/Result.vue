<script setup>
    import { RouterLink } from 'vue-router';

    const {numberOfQuestions, numberOfCorrectAnswers} = 
    defineProps(['numberOfQuestions', 'numberOfCorrectAnswers']);
</script>

<template>
    <div class="results">
        <p>Your score...</p>
        <h1>
            {{ (numberOfCorrectAnswers/numberOfQuestions*100).toFixed(0) + '%' }}
        </h1>
        <RouterLink to="/" class="go-back">More Quizes</RouterLink>
    </div>
</template>

<style scoped>
    .results {
        text-align: center;
        padding: 100px 0;
    }

    p {
        font-size: 30px;
    }

    h1 {
        font-size: 40px;
        margin-bottom: 20px;
    }

    .go-back {
        color: hsl(0, 0%, 30%);
        text-decoration: none;
        font-size: 20px;
        padding: 5px;
        background-color: hsl(0, 0%, 60%);
        border: solid 3px hsl(0, 0%, 30%);
        font-weight: 700;
    }
</style>