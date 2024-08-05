<script setup lang="ts">
import {ref,onMounted} from 'vue';
import { storeEfeitos } from '~/store/efeitos';

const efeitos = storeEfeitos();
const mnhaExp = ref<HTMLElement | null>(null);
const entries = ref<IntersectionObserverEntry[] | null>(null);

function fnAnimated(){
    efeitos.animeFadeDown(mnhaExp.value);
}

onMounted(() => {
    const observer = new IntersectionObserver((entryList)=>{
        entries.value = entryList;

        if(entries.value){
            efeitos.handleIntersection(entries.value,fnAnimated);
        }
    })

    if(mnhaExp.value){
        observer.observe(mnhaExp.value);
    }
})

</script>

<template>
    <div ref="mnhaExp" class="flex items-center p-4 justify-start md:justify-start">
        <p class="text-[#1dcd8d] text-4xl font-EBGaramond md:text-6xl">Minha Experiência</p>
    </div>
</template>

<style lang="scss" scoped>

</style>