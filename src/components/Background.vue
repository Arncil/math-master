<script setup>
</script>

<template>
    <div class="area">
        <ul class="circles">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>0</li>
        </ul>
    </div>
    <div class="overlay"></div>
</template>

<style scoped>
* {
    margin: 0px;
    padding: 0px;
}

.area {
    position: absolute;
    top: 0;
    left: 0;
    background: #4d0f0f;
    background: linear-gradient(180deg, hsl(265, 100%, 30%), hsl(304, 100%, 30%));
    width: 100%;
    height: 100%;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: hsla(0, 89%, 7%, 0.5);
}

.circles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.circles li {
    position: absolute;
    display: block;
    list-style: none;
    animation: animate 25s linear infinite;
    bottom: -150px;
    color: hsla(0, 0%, 0%, 0.8)
}

.circles li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    font-size: 15vmin;
    animation-delay: 0s;
}


.circles li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    font-size: 5vmin;
    animation-delay: 2s;
    animation-duration: 12s;
}

.circles li:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    font-size: 7vmin;
    animation-delay: 4s;
}

.circles li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    font-size: 17vmin;
    animation-delay: 0s;
    animation-duration: 18s;
}

.circles li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    font-size: 4vmin;
    animation-delay: 0s;
}

.circles li:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    font-size: 20vmin;
    animation-delay: 3s;
}

.circles li:nth-child(7) {
    left: 90%;
    width: 150px;
    height: 150px;
    font-size: 25vmin;
    animation-delay: 7s;
}

.circles li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    font-size: 10vmin;
    animation-delay: 15s;
    animation-duration: 45s;
}

.circles li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    font-size: 5vmin;
    animation-delay: 2s;
    animation-duration: 35s;
}

.circles li:nth-child(10) {
    left: 0;
    width: 150px;
    height: 150px;
    font-size: 23vmin;
    animation-delay: 0s;
    animation-duration: 11s;
}



@keyframes animate {



    0% {
        transform: translateY(-200vh) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }

    100% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

}
</style>