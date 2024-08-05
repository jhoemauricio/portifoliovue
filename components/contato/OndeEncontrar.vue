<script setup lang="ts">
import {ref,onMounted} from 'vue';
import { storeEfeitos } from '~/store/efeitos';

const efeitos = storeEfeitos();
const ondeEnc = ref<HTMLElement | null>(null);
const entries = ref<IntersectionObserverEntry[] | null>(null);

function fnAnimated(){
    efeitos.animeFadeDown(ondeEnc.value);
}

onMounted(() => {
    const observer = new IntersectionObserver((entryList)=>{
        entries.value = entryList;

        if(entries.value){
            efeitos.handleIntersection(entries.value,fnAnimated);
        }
    })

    if(ondeEnc.value){
        observer.observe(ondeEnc.value);
    }
})
</script>

<template>
    <div ref="ondeEnc" class="">
        <h3 class="text-[#1dcd8d] text-4xl font-EBGaramond md:text-6xl">Onde Me Encontrar</h3>
    </div>
</template>

<style lang="scss" scoped>

</style>