import Adition1 from "../images/Addition1.svg";
import Adition2 from "../images/Addition2.svg";
import Adition3 from "../images/Addition3.svg";
import Adition4 from "../images/Addition4.svg";
import Adition5 from "../images/Addition5.svg";
import Subtraction1 from "../images/Subtraction1.svg";
import Subtraction2 from "../images/Subtraction2.svg";
import Subtraction3 from "../images/Subtraction3.svg";
import Subtraction4 from "../images/Subtraction4.svg";
import Subtraction5 from "../images/Subtraction5.svg";

// generates random number between min and max
const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

// generates object question with 4 answers and IDs
// takes as argument id of question and min and max value of numbers for addition
const generateQuestionAddition = (questionId, min, max) => {
  const firstNumber = randomNumber(min, max);
  const secondNumber = randomNumber(min, max);
  const correctOptionId = Math.floor(Math.random() * 3) + 1;
  const answerText = (id) => {
    if (correctOptionId === id) return firstNumber + secondNumber;
    else {
      const incorrectAnswers = [];
      for (
        let i = firstNumber + secondNumber - 8;
        i < firstNumber + secondNumber;
        i++
      )
        incorrectAnswers.push(i);
      for (
        let i = firstNumber + secondNumber + 8;
        i > firstNumber + secondNumber;
        i--
      )
        incorrectAnswers.push(i);
      return incorrectAnswers[
        Math.floor(Math.random() * incorrectAnswers.length)
      ];
    }
  };
  const answerIsCorrect = (id) => {
    if (correctOptionId === id) return true;
    else return false;
  };
  const question = {
    id: questionId,
    text: `${firstNumber} + ${secondNumber}`,
    options: [
      {
        id: 1,
        label: "A",
        text: answerText(1),
        isCorrect: answerIsCorrect(1),
      },
      {
        id: 2,
        label: "B",
        text: answerText(2),
        isCorrect: answerIsCorrect(2),
      },
      {
        id: 3,
        label: "C",
        text: answerText(3),
        isCorrect: answerIsCorrect(3),
      },
      {
        id: 4,
        label: "D",
        text: answerText(4),
        isCorrect: answerIsCorrect(4),
      },
    ],
  };
  return question;
};

const generateQuestionSubtraction = (questionId, min, max) => {
  const firstNumber = randomNumber(min, max);
  const secondNumber = randomNumber(min, max);
  const correctOptionId = Math.floor(Math.random() * 3) + 1;
  const answerText = (id) => {
    if (correctOptionId === id) return firstNumber - secondNumber;
    else {
      const incorrectAnswers = [];
      for (
        let i = firstNumber - secondNumber - 8;
        i < firstNumber - secondNumber;
        i++
      )
        incorrectAnswers.push(i);
      for (
        let i = firstNumber - secondNumber + 8;
        i > firstNumber - secondNumber;
        i--
      )
        incorrectAnswers.push(i);
      return incorrectAnswers[
        Math.floor(Math.random() * incorrectAnswers.length)
      ];
    }
  };
  const answerIsCorrect = (id) => {
    if (correctOptionId === id) return true;
    else return false;
  };
  const question = {
    id: questionId,
    text: `${firstNumber} - ${secondNumber}`,
    options: [
      {
        id: 1,
        label: "A",
        text: answerText(1),
        isCorrect: answerIsCorrect(1),
      },
      {
        id: 2,
        label: "B",
        text: answerText(2),
        isCorrect: answerIsCorrect(2),
      },
      {
        id: 3,
        label: "C",
        text: answerText(3),
        isCorrect: answerIsCorrect(3),
      },
      {
        id: 4,
        label: "D",
        text: answerText(4),
        isCorrect: answerIsCorrect(4),
      },
    ],
  };
  return question;
};

// generates array of chosen number of questions
// takes as arguments the number of question and a function for generating them
const generateQuestions = (
  numberOfQuestions,
  functionGeneratingQuestion,
  level
) => {
  switch (level) {
    case 1: {
      const questions = [];
      for (let i = 1; i <= numberOfQuestions; i++) {
        questions.push(functionGeneratingQuestion(i, 1, 10));
      }
      return questions;
    }
    case 2: {
      const questions = [];
      for (let i = 1; i <= numberOfQuestions; i++) {
        questions.push(functionGeneratingQuestion(i, 11, 79));
      }
      return questions;
    }
    case 3: {
      const questions = [];
      for (let i = 1; i <= numberOfQuestions; i++) {
        questions.push(functionGeneratingQuestion(i, 80, 199));
      }
      return questions;
    }
    case 4: {
      const questions = [];
      for (let i = 1; i <= numberOfQuestions; i++) {
        questions.push(functionGeneratingQuestion(i, 200, 999));
      }
      return questions;
    }
    case 5: {
      const questions = [];
      for (let i = 1; i <= numberOfQuestions; i++) {
        questions.push(functionGeneratingQuestion(i, 1000, 4000));
      }
      return questions;
    }
  }
};

const additionBeginner = {
  id: 1,
  img: Adition1,
  name: "Addition Beginner (lvl 1)",
  questions: generateQuestions(20, generateQuestionAddition, 1),
};
const additionIntermediate = {
  id: 2,
  img: Adition2,
  name: "Addition Intermediate (lvl 2)",
  questions: generateQuestions(20, generateQuestionAddition, 2),
};
const additionExpert = {
  id: 3,
  img: Adition3,
  name: "Addition Expert (lvl 3)",
  questions: generateQuestions(20, generateQuestionAddition, 3),
};
const additionProffesional = {
  id: 4,
  img: Adition4,
  name: "Addition Proffesional (lvl 4)",
  questions: generateQuestions(20, generateQuestionAddition, 4),
};
const additionMaster = {
  id: 5,
  img: Adition5,
  name: "Addition Master (lvl 5)",
  questions: generateQuestions(20, generateQuestionAddition, 5),
};
const subtractionBeginner = {
  id: 6,
  img: Subtraction1,
  name: "Subtraction Beginner (lvl 1)",
  questions: generateQuestions(20, generateQuestionSubtraction, 1),
};
const subtractionIntermediate = {
  id: 7,
  img: Subtraction2,
  name: "Subtraction Intermediate (lvl 2)",
  questions: generateQuestions(20, generateQuestionSubtraction, 2),
};
const subtractionExpert = {
  id: 8,
  img: Subtraction3,
  name: "Subtraction Expert (lvl 3)",
  questions: generateQuestions(20, generateQuestionSubtraction, 3),
};
const subtractionProffesional = {
  id: 9,
  img: Subtraction4,
  name: "Subtraction Proffesional (lvl 4)",
  questions: generateQuestions(20, generateQuestionSubtraction, 4),
};
const subtractionMaster = {
  id: 10,
  img: Subtraction5,
  name: "Subtraction Master (lvl 5)",
  questions: generateQuestions(20, generateQuestionSubtraction, 5),
};

// array of quizes for export
const quizes = [];
quizes.push(additionBeginner);
quizes.push(additionIntermediate);
quizes.push(additionExpert);
quizes.push(additionProffesional);
quizes.push(additionMaster);
quizes.push(subtractionBeginner);
quizes.push(subtractionIntermediate);
quizes.push(subtractionExpert);
quizes.push(subtractionProffesional);
quizes.push(subtractionMaster);



export default quizes;
