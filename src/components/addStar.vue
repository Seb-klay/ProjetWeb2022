<!--<template>
  <div>
    <slot></slot>
    <p>
      <input type="text"
      v-model="etoile" v-on:keyup.enter="findStar" />
      <button v-on:click="findStar()" v-bind:disabled="etoile == null">
        add
      </button>
    </p>
    <transition name="fade">
      <p v-if="etoile == null" class="red">Doit ajouter une étoile</p>
    </transition>
  </div>
</template>
<script>
export default {
    name: 'Input',
    props:
  data() {
    return {
      etoile: 0,
    };
  },
  methods: {
    findStar() {
      this.$emit("etoile", this.etoile);
      this.etoile = 0;
    },
  },
};
</script>

<style scoped>

</style>

//Continuer avec v-model et développer la recherche dynamique-->
