import { defineStore } from "pinia";

interface InterfaceProjetos {
    nome: string,
    imgProj: string,
    link: string
}

export const meusProjetos = defineStore('projetos', {
    state: () => ({

     arrayProjetos: [] as InterfaceProjetos[] ,

    }),
    getters:{
        lista(state){
            return state.arrayProjetos;
        }

    },
    actions: {
   
        async fetchDados(){
            try{
           
                const data = await $fetch<InterfaceProjetos[]>('/projetosJson.json');

                if(data){
                    // this.projetos = data;
                   this.arrayProjetos = data;
                }
            }catch(error){
                console.log(error);
            }
        }
    },
  })