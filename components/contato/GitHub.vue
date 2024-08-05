<script setup lang="ts">
import {ref,onMounted} from 'vue';
import { storeEfeitos } from '~/store/efeitos';

const efeitos = storeEfeitos();
const git = ref<HTMLElement | null>(null);
const entries = ref<IntersectionObserverEntry[] | null>(null);

function fnAnimated(){
    efeitos.animeFadeRight(git.value);
}

onMounted(() => {
    const observer = new IntersectionObserver((entryList)=>{
        entries.value = entryList;

        if(entries.value){
            efeitos.handleIntersection(entries.value,fnAnimated);
        }
    })

    if(git.value){
        observer.observe(git.value);
    }
})

</script>

<template>
    <div class="flex items-center">
       <div ref="git">
            <p class="text-[#1dcd8d] text-2xl font-EBGaramond md:text-2xl font-bold">GitHub</p>
            <NuxtLink to="https://github.com/jhoemauricio"><p class="font-NunitoSans text-lg text-[#ffff] md:text-2xl">https://github.com/jhoemauricio</p></NuxtLink>
       </div> 
   </div>
</template>

<style lang="scss" scoped>

</style>