<script setup lang="ts">
import {ref,onMounted} from 'vue';
import { storeEfeitos } from '~/store/efeitos';

const efeitos = storeEfeitos();
const linke = ref<HTMLElement | null>(null);
const entries = ref<IntersectionObserverEntry[] | null>(null);

function fnAnimated(){
    efeitos.animeFadeRight(linke.value);
}

onMounted(() => {
    const observer = new IntersectionObserver((entryList)=>{
        entries.value = entryList;

        if(entries.value){
            efeitos.handleIntersection(entries.value,fnAnimated);
        }
    })

    if(linke.value){
        observer.observe(linke.value);
    }
})

</script>

<template>
    <div class="flex items-center">
        <div ref="linke" class="">
            <p class="text-[#1dcd8d] text-2xl font-EBGaramond md:text-2xl font-bold">Linkedin</p>
            <NuxtLink to="https://www.linkedin.com/in/jhoseph-mauricio-735611126/"><p class="font-NunitoSans text-lg text-[#ffff] md:text-2xl">https://www.linkedin.com/in/jhoseph-mauricio-735611126/</p></NuxtLink>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>