<script setup lang="ts" >
import { ref, onMounted } from 'vue';
import { storeEfeitos } from '~/store/efeitos';

const efeitos = storeEfeitos();
const elementoQuemSou = ref<HTMLElement | null>(null);
const entries = ref<IntersectionObserverEntry[] | null>(null);

function fnAnimated(){
  efeitos.animeFadeDown(elementoQuemSou.value);
}

onMounted(() => {

  const observer = new IntersectionObserver((entryList) => {
    entries.value = entryList;

    if(entries.value){

      efeitos.handleIntersection(entries.value,fnAnimated);

    }

  })

    if(elementoQuemSou.value){
          //observe é um método de IntersectionObserver que começa a observar o elemento passado como argumento. monitorará as mudanças na visibilidade do elemento elementoQuemSou.value
            observer.observe(elementoQuemSou.value);

    }
    
});


</script>

<template>
    <div ref="elementoQuemSou">
      <p class="text-[#1dcd8d] text-7xl font-EBGaramond animate-fade-down md:text-6xl lg:text-8xl">Quem Sou Eu?</p>
    </div>
  </template>
  
  <style  scoped>

  </style>
  