<template>
    <div class="container">
        <app-header></app-header>
        <div>
            <div class="row">
                <div class="col-xs-12">
                <transition name="slide" mode="out-in">
                    <router-view></router-view>
                </transition>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import Header from './components/Header'

export default {

  name: 'app',
  components: {
    appHeader: Header

  }
}
</script>

<style>
    body {
        padding: 30px;
         font-family:'Avenir';
    }

        .slide-leave-active {
        transition: opacity 0.5s ease;
        opacity: 0;
        animation: slide-out 0.5s ease-out forwards;
    }

    .slide-leave {
        opacity: 1;
        transform: translateX(0);
    }

    .slide-enter-active {
        animation: slide-in 0.5s ease-out forwards;
    }

    @keyframes slide-out {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-30px);
        }
    }

    @keyframes slide-in {
        0% {
            transform: translateY(-30px);
        }
        100% {
            transform: translateY(0);
        }
    }
</style>