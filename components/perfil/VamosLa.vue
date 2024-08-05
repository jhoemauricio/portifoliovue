<script setup lang="ts">
import {ref,onMounted} from 'vue';
import { storeEfeitos } from '~/store/efeitos';

const efeitos = storeEfeitos();
const vamsLa = ref<HTMLElement | null>(null);
const entries = ref<IntersectionObserverEntry[] | null>(null);

function fnAnimated(){
    efeitos.animeFadeRight(vamsLa.value);
}

onMounted(() => {
    const observer = new IntersectionObserver((entryList)=>{
        entries.value = entryList;

        if(entries.value){
            efeitos.handleIntersection(entries.value,fnAnimated);
        }
    })

    if(vamsLa.value){
        observer.observe(vamsLa.value);
    }
})

</script>

<template>
    
    <div ref="vamsLa" class="flex items-center md:flex md:items-center">
        <p class="text-[#ffffff] font-NunitoSans text-lg md:text-2xl lg:text-3xl">E vamos lá...</p>
    </div>
</template>

<style lang="scss" scoped>

</style>