<template>
  <div id="app">
   <div class="container">
      <banner></banner>
      <name></name>
      <spinner :in-progress='isInProgress'></spinner>
      <result :name='name' :available='available' ></result>
      <div class="footer">Built with <a href="https://vuejs.org/">Vue.js</a> By <a href="https://twitter.com/Raathigeshan">@Raathigesh</a></div>
   </div>
  </div>
</template>

<script>
import 'flat-ui/bootstrap/css/bootstrap.css';
import 'flat-ui/css/flat-ui.css';
import Banner from './components/Banner';
import Spinner from './components/Spinner';
import Name from './components/Name';
import Result from './components/Result';
import Vue from 'vue';
import Resource from 'vue-resource';
Vue.use(Resource);

export default {
  components: {
    Banner,
    Spinner,
    Name,
    Result,
  },
  data() {
    return {
      name: '',
      isInProgress: false,
      available: false,
    };
  },
  events: {
    checkAvailability(name) {
      this.isInProgress = true;
      this.$http.get(`https://radiant-harbor-28050.herokuapp.com/check_name?name=${name}`).then((response) => {
        this.isInProgress = false;
        this.name = name;
        this.available = response.data.available;
      });
    },
  },
};
</script>

<style>
.footer {
  text-align: center;
}
</style>

