// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue);
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */

class tovarPush {
    constructor(name, value, cost, category, firm, img){
        this.name=name;
        this.value=value;
        this.cost=cost;
        this.onCart=0;
        this.category=category;
        this.firm=firm;
        this.img=img;
    }
};

var form = new Vue({
	el: '#app',
	data:{
		tovar: [],
        lang: [],
        search: '',
        ifind: 0,
        L: 0,
		costSum: 0,
		onShop: [],
        pass: '',
        admin: false
	},
    methods:{
        share: function () {
            /*var dt = JSON.stringify({"tovars": this.tovar});
            var request = axios.post('http://localhost:3000/tovars', {dt}).then(function (response) {
                console.log(response);
            })
                .catch(function (error) {
                    console.log(error);
                });*/
        },
        filter: function (cont) {
            var container = document.getElementsByClassName('tCont');
            this.tovar.forEach(function (tov, i) {
                    if(tov.category!=cont&&tov.firm!=cont) container[i].style.display='none'
                    else container[i].style.display='block';
            });
        },
        showAll: function () {
            var container = document.getElementsByClassName('tCont');
            this.tovar.forEach((c, i) => container[i].style.display='block');
        }
    },
	updated: function(){
        var container = document.getElementsByClassName('tCont');
        this.tovar.forEach(function (tov, i) {
            if(!tov.name.toLowerCase().indexOf(this.search.toLowerCase()) + 1) console.log("block")
            else console.log('none');
        });

        //===========Общая цена===================================
		this.costSum = this.tovar.reduce((a, b) => {
				return Number(a) + Number(b.cost) * Number(b.onCart);
		}, 0);
		//========================================================

    },
    created : function(){
        this.$http
            .get("http://localhost:3000/tovars")
            .then(function(response) {
                form.tovar = response.data;
            });
        this.$http
            .get("http://localhost:3000/languages")
            .then(function(response) {
                form.lang = response.data;
            });
	}
});


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
