<script setup lang="ts">
import {ref,onMounted} from 'vue';
import { storeEfeitos } from '~/store/efeitos';

const efeitos = storeEfeitos();
const meuProj = ref<HTMLElement | null>(null);
const entries = ref<IntersectionObserverEntry[] | null>(null);

function fnAnimated(){
    efeitos.animeFadeDown(meuProj.value);
}

onMounted(() => {
    const observer = new IntersectionObserver((entryList)=>{
        entries.value = entryList;

        if(entries.value){
            efeitos.handleIntersection(entries.value,fnAnimated);
        }
    })

    if(meuProj.value){
        observer.observe(meuProj.value);
    }
})

</script>

<template>
    <div ref="meuProj">
        <h3 class="text-[#1dcd8d] text-4xl font-EBGaramond md:text-6xl">Meus projetos</h3>
    </div>
</template>

<style lang="scss" scoped>

</style>