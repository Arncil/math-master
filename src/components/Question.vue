<script setup>
    const { question } = defineProps(['question']);
    const emit = defineEmits(['selectOption'])
    const emitSelectedOption = (isCorrect) => {
        emit('selectOption', isCorrect)
    };
</script>

<template>
    <div class="question-container">
        <h1 class="question">{{ question.text }}</h1>
    </div>
    <div class="options-container">
        <div v-for="option in question.options" :key="option.id" 
        @click="emitSelectedOption(option.isCorrect)" class="options">
            <p class="option-label">{{ option.label }}</p>
            <div class="option-value">{{ option.text }}</div>
        </div>
    </div>
</template>

<style scoped>
    .question-container {
        margin-top: 20px;
        display: grid;
        place-items: center;
    }

    .question {
        font-size: 60px;
        margin-bottom: 20px;
    }

    .options {
        display: flex;
        margin-bottom: 20px;
        cursor: pointer;
    }

    .option-label {
        background-color: hsl(0, 0%, 40%);
        width: 50px;
        height: 50px;
        font-size: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .option-value {
        background-color: hsl(0, 0%, 80%);
        width: 100%;
        font-size: 30px;
        padding: 0 20px;
        color: #000;
    }
</style>