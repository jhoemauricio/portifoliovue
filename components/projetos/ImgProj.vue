<script setup lang="ts">
import {ref, onMounted} from 'vue';
import { meusProjetos } from '~/store/storeProjetos';

const currentPosition = ref(0);

const projetos = meusProjetos();
projetos.fetchDados();



</script>

<template>
    <div v-for="proj in projetos.lista"  class="flex flex-col items-center justify-center">
        <div >
         
            <NuxtLink :to="proj.link"><img  :src="proj.imgProj" class="object-cover w-40 h-40 rounded-full animate-fade-right md:w-32 md:h-32"/></NuxtLink>
        </div>
        <div class="flex items-center justify-center ">
            <Seta />
            <p class="text-[#ffffff] font-NunitoSans text-lg ml-2">{{ proj.nome }}</p>
        </div>
    </div>





















 


</template>

<style scoped>

</style>