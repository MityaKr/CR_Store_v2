<template>
  <div id="app">
    <img id=img :src=tovar.img></img>
    <div id="titleDiv">
      <p id="title">{{ tovar.name }}</p>
      <p id=title>{{ tovar.cost }} $</p>
    </div>
    <div id=dopDiv>
      <p id=dop>{{ tovar.category }}</p>
      <p id=dop>©{{ tovar.firm }}</p>
    </div>
    <div id="dopDiv">
      <div><input v-model.number=tovar.onCart :max=tovar.value min=0 type="number" style="width: 40px;"><span>/{{ tovar.value }}</span></div>
      <button :disabled="tovar.onCart>=tovar.value" class="btn btn-success"  @click="buy(tovar)"><i class="material-icons">add_shopping_cart</i></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: ['tovar', 'cart'],
  methods:{
          buy: function(tovar){
              tovar.onCart++;
          }
  }
}
</script>

<style>

</style>
