<script setup lang="ts">
import {ref,onMounted} from 'vue';
import { storeEfeitos } from '~/store/efeitos';

const efeitos = storeEfeitos();
const eIsso = ref<HTMLElement | null>(null);
const entries = ref<IntersectionObserverEntry[] | null>(null);

function fnAnimated(){
    efeitos.animeFadeRight(eIsso.value);
}

onMounted(() => {
    const observer = new IntersectionObserver((entryList)=>{
        entries.value = entryList;

        if(entries.value){
            efeitos.handleIntersection(entries.value,fnAnimated);
        }
    })

    if(eIsso.value){
        observer.observe(eIsso.value);
    }
})
</script>

<template>
    <div ref="eIsso" class="flex items-center">
        <p class="text-[#ffffff] font-NunitoSans text-lg md:text-4xl">É isso</p>
    </div>
</template>

<style lang="scss" scoped>

</style>