<script setup>
import { ref, watch } from 'vue';
// import q from "../data/data.json";
import q from "../data/questionsGenerator"
import Card from "../components/Card.vue";

const quizes = ref(q);
const search = ref("");

watch(search, () => {
  quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
});
</script>

<template>
  <div class="quizes">
    <header>
      <h1>Math Master</h1>
      <input v-model.trim="search" type="text" placeholder="Search...">
    </header>
    <div class="options-container">
      <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
    </div>
  </div>
</template>

<style scoped>
.quizes {
  min-height: 100vh;
}
header {
  margin-bottom: 10px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header h1 {
  font-weight: 700;
  margin-right: 30px;
  font-size: 50px;
}

header input {
  border: none;
  background-color: hsla(0, 0%, 60%, 0.3);
  padding: 10px;
  border-radius: 5px;
  color: #fff;
  margin-right: 30px;
}

.options-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}

@media (max-width: 500px) {
  header {
    flex-direction: column;
  }
  header h1 {
    margin-right: 0;
  }
  header input {
    margin-right: 0;
  }
  .options-container {
    justify-content: center;
  }

}
</style>