import { defineStore } from "pinia";

export const storeEfeitos = defineStore('efeitos', {
  state: () => ({

  }),
  getters: {

  },

  actions: {

    //carrega o elemento de baixo para cima
    animeFadesUp(element: HTMLElement | null) {
      // this.elementoTitulo = element;

      element?.classList.add('animate-fade-up');

    },

    //carrega o elemento de cima para baixo
    animeFadeDown(element: HTMLElement | null) {
      // this.elementoBody = element;
      element?.classList.add('animate-fade-down');
    },

    //carrega o elemento da esquerda para a direita
    animeFadeRight(element: HTMLElement | null) {
      element?.classList.add('animate-fade-right');
    },


    //Esta linha define uma constante handleIntersection que é uma função.
    //Esta função recebe um parâmetro entries, que é um array de objetos IntersectionObserverEntry.
    handleIntersection(entries: IntersectionObserverEntry[], animated: Function) {
      //intera sobre os objetos que aparecem na viewport
      entries.forEach(entry => {
        // A propriedade isIntersecting de entry é verificada.
        //Se for true, significa que o elemento associado a entry está atualmente visível na viewport.
        if (entry.isIntersecting) {
          //significa que, dentro da função animated, this se referirá ao objeto atual do store
          animated?.call(this);
        }
      });
    }

  },
})