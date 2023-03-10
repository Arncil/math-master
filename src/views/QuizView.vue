<script setup>
    import QuestionHeader from '../components/QuestionHeader.vue';
    import Question from '../components/Question.vue';
    import Result from '../components/Result.vue'
    import quizes from '../data/questionsGenerator'
    import { useRoute } from 'vue-router';
    import { ref, computed } from 'vue';

    const route = useRoute();
    const quizId = parseInt(route.params.id);
    const quiz = quizes.find(q => q.id === quizId);

    const currentQuestionId = ref(0);
    const numberOfCorrectAnswers = ref(0);
    const showResults = ref(false)

    const questionStatus = computed(() => `${currentQuestionId.value + 1}/${quiz.questions.length}`);
    const barPercentage = computed(() => `${(currentQuestionId.value + 1) / quiz.questions.length * 100}%`)

    const onOptionSelected = (isCorrect) => {
        if(isCorrect){
            numberOfCorrectAnswers.value++;
        }
        if(quiz.questions.length === currentQuestionId.value+1){
            showResults.value = true;
            return;
        }
        currentQuestionId.value++;
    };

</script>

<template>
    <div class="card">
        <QuestionHeader 
            :questionStatus="questionStatus" 
            :barPercentage="barPercentage"
        />
        <div>
            <Question 
                v-if="!showResults"
                :question="quiz.questions[currentQuestionId]"
                @selectOption="onOptionSelected"
            />
            <Result
                v-else
                :numberOfQuestions="quiz.questions.length"
                :numberOfCorrectAnswers="numberOfCorrectAnswers"
            />
        </div>
    </div>
</template>

<style scoped>
.card  {
    min-height: 100vh;
}
</style>
