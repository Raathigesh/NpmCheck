<template>
	<div class="row">
        <div class="col-xs-12">
          <div class="form-group">
            <input type="text" v-model="name"  v-on:keyup.13="notify" placeholder="Type a name and hit enter" class="form-control npm-name" />
          </div>
        </div> 
      </div>	
</template>

<script>
export default {
  data() {
    return {
      name: '',
    };
  },
  methods: {
    notify() {
      if (this.name.trim()) {
        this.$dispatch('checkAvailability', this.name);
        this.name = '';
      }
    },
  },
};
</script>

<style>
	.npm-name {
		font-size: 35px;
		height: 75px;
		border: 0px;
		border-radius: 0px;
		border-bottom: 1px solid;
		text-align: center;
	}
</style>