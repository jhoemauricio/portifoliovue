<script setup lang="ts">
import ConteudoAcad from '~/components/experiencias/conteudos/ConteudoAcad.vue';
import ConteudoCert from '~/components/experiencias/conteudos/ConteudoCert.vue';
import ConteudoProf from '~/components/experiencias/conteudos/ConteudoProf.vue';
import Academica from '~/components/experiencias/titulosConteudos/Academica.vue';
import Certificacoes from '~/components/experiencias/titulosConteudos/Certificacoes.vue';
import MinhaExperiencia from '~/components/experiencias/titulosConteudos/MinhaExperiencia.vue';
import Profissional from '~/components/experiencias/titulosConteudos/Profissional.vue';
import BemVindo from '~/components/perfil/BemVindo.vue';
import BotaoNome from '~/components/perfil/BotaoNome.vue';
import FotoPerfil from '~/components/perfil/FotoPerfil.vue';
import Seta from '~/components/seta/Seta.vue';
import VamosLa from '~/components/perfil/VamosLa.vue';
import Foto2 from '~/components/sobre/Foto2.vue';
import QuemSouEu from '~/components/sobre/QuemSouEu.vue';
import SobreMim from '~/components/sobre/SobreMim.vue';
import MeusProj from '~/components/projetos/MeusProj.vue';
import OndeEncontrar from '~/components/contato/OndeEncontrar.vue';
import GitHub from '~/components/contato/GitHub.vue';
import Linkedin from '~/components/contato/Linkedin.vue';
import ImgProj from '~/components/projetos/ImgProj.vue';
import Eisso from '~/components/contato/Eisso.vue';


</script>

<template>

    <!--Perfil-->
<div class="flex flex-col lg:space-x-36 lg:flex-row lg:h-screen lg:items-center lg:justify-center bg-[#1a2529] w-full h-full">
        <div id="parte1" class="flex flex-col p-4 lg:p-8"> 
            <div class="flex w-full justify-center p-4 lg:w-[500px] 2xl:w-[600px] ">
                <BemVindo />
            </div>
            <div class="flex w-full justify-start p-2 lg:w-96 2xl:w-96">
                <BotaoNome />
            </div>
        </div>
        <div id="parte2" class="flex flex-col">
            <div class="flex w-full justify-center p-8">
                <FotoPerfil />
            </div>
            <div class="flex w-full justify-center">
                <Seta />
                <VamosLa />
            </div>
        </div>
</div>



<!--Sobre-->

<div class="flex flex-col 2xl:space-x-48 lg:space-x-32 lg:flex-row lg:h-screen lg:items-center lg:justify-center bg-white">
    <div class="flex flex-col lg:justify-center">
        <div class="flex p-4 lg:p-4 ">
            <QuemSouEu />
        </div>
        <div class="flex p-4 justify-center lg:w-96">
            <SobreMim />
        </div>
    </div>
    <div class="flex flex-col">
        <div class="flex p-4 justify-center">
            <Foto2 />
        </div>
       
    </div>
  
</div>


<!--Experiencia-->

<div class="flex flex-col 2xl:items-start bg-[#1a2529] h-full w-full md:h-full md:w-full">
    <div class="flex justify-start 2xl:ml-52 2xl:mt-28 lg:justify-start lg:ml-32 ">
        <MinhaExperiencia />
    </div>
    <div class="flex flex-row md:ml-14 2xl:ml-60 lg:ml-48">
        <Seta />
        <Profissional />
    </div>
    <div class="flex flex-col 2xl:ml-40 lg:ml-24">
        <ConteudoProf />
    </div>
    <div class="flex flex-row md:ml-14 2xl:ml-60 lg:ml-48">
        <Seta />
        <Academica />
    </div>
    <div class="flex flex-col 2xl:ml-40 lg:ml-24">
        <ConteudoAcad />
    </div>
    <div class="flex flex-row md:ml-14 2xl:ml-60 lg:ml-48">
        <Seta />
        <Certificacoes />
    </div>
    <div class="flex flex-col 2xl:ml-40 lg:ml-24">
        <ConteudoCert />
    </div>

</div>

<!--Projetos-->
<div class="bg-[#1a2529] p-4 h-full">
    <div class="flex mt-16 2xl:justify-start 2xl:ml-52 lg:ml-32">
        <MeusProj />
    </div>
    <div class="flex flex-col justify-center space-x-4 mt-8 lg:flex-row lg:mt-28">
        <ImgProj />
    </div>
</div>

<!--Onde encontrar-->
<div class="bg-[#1a2529] flex-col p-4 flex h-full w-full ">
    <div class="flex justify-start lg:ml-32 2xl:ml-52">
        <OndeEncontrar />
    </div>
    <div class="flex flex-col lg:ml-32 mt-44 2xl:ml-52">
        <div class=" justify-start ">
            <GitHub />
        </div>
        <div class=" justify-start ">
            <Linkedin />
        </div>
        <div class="flex justify-end md:justify-end mt-4">
            <Seta />
            <Eisso />
        </div>
    </div>
     
</div>

</template>

<style lang="scss" scoped>

</style>