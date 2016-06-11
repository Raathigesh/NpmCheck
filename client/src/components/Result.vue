<template>
	<div v-if="name !== ''" class="row">
		<div class="col-xs-12">
			<div class="tile results">
        <img v-if="available" src="../assets/available.png" alt="Infinity-Loop" class="tile-image">
        <img v-else src="../assets/taken.png" alt="Infinity-Loop" class="tile-image">
        <h3 v-if="available" class="tile-title">{{ name }} is available</h3>
        <h3 v-else="available" class="tile-title">{{ name }} is not available</h3>
			</div>
		</div> 
	</div>	
</template>

<script>
export default {
  props: ['name', 'available'],
};
</script>

<style>
  .results {
    background-color: inherit;
  }

  .results img {
    margin-top: 0px;
  }
</style>