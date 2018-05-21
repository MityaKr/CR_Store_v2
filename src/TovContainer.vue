<template>
    <b-card-group class="tovContainer">
      <b-card :header="'©'+tovar.firm"
              header-tag="header"
              :footer="tovar.cost+'$'"
              footer-tag="footer">
        <p class="card-text">{{ tovar.name }}</p>
        <p class="card-text"><img :src=tovar.img></p>
        <div class="btnNval">
          <h5>{{ tovar.onCart }}/{{ tovar.value }}</h5>
          <b-button v-if="!cart" @click="buy(tovar)" :disabled="tovar.onCart>=tovar.value" variant="primary">
            <i class="material-icons">add_shopping_cart</i>
          </b-button>

          <button v-if="cart" class="btn btn-success" @click="tovar.onCart++" :disabled="tovar.onCart>=tovar.value">+</button>
          <button v-if="cart" class="btn btn-danger" @click="tovar.onCart--" :disabled="tovar.onCart<=0">-</button>

        </div>
      </b-card>
    </b-card-group>
</template>

<script>
export default {
  name: 'TovContainer',
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
