<script setup lang="ts">
import {ref,onMounted} from 'vue';
import { storeEfeitos } from '~/store/efeitos';

const efeitos = storeEfeitos();
const seta = ref<HTMLElement | null>(null);
const entries = ref<IntersectionObserverEntry[] | null>(null);

function fnAnimated(){
    efeitos.animeFadeRight(seta.value);
}

onMounted(() => {
    const observer = new IntersectionObserver((entryList)=>{
        entries.value = entryList;

        if(entries.value){
            efeitos.handleIntersection(entries.value,fnAnimated);
        }
    })

    if(seta.value){
        observer.observe(seta.value);
    }
})

</script>

<template>
    <div ref="seta" class="flex items-center md:flex md:items-center">
         <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 20C20 30 20 40 30 50C40 60 50 60 50 60H80M80 60L65 45M80 60L65 75" stroke="white" stroke-width="4" />
        </svg>
    </div>
</template>

<style lang="scss" scoped>

</style>