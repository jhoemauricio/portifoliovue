<script setup lang="ts">
import {ref, onMounted} from 'vue';
import { storeEfeitos } from '~/store/efeitos';

const efeitos = storeEfeitos();
const foto = ref<HTMLElement | null>(null);
const entries = ref<IntersectionObserverEntry[] | null>(null);

function fnAnimated(){
    efeitos.animeFadeRight(foto.value);
}

onMounted(() => {

    const observer = new IntersectionObserver((entryList) => {
        entries.value = entryList;

        if(entries.value){
            efeitos.handleIntersection(entries.value,fnAnimated);
        }
    })

    if(foto.value){
        observer.observe(foto.value);

    }
})
</script>

<template>
    <div  class="flex">
        <div ref="foto" class="overflow-hidden rounded-[50%] w-48 h-[320px] lg:w-56 lg:h-[320px] 2xl:h-[420px] 2xl:w-72">
            <img src="/public/imgProj/p1.png" class="w-full h-full object-cover">
        </div>
    </div>
   
</template>

<style  scoped>


</style>