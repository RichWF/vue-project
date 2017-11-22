<template>
	<div>
		<p>{{greeting}} World!</p>
		<world-temp message="this is other template!!"></world-temp>
	</div>
</template>

<script>

	import worldTemp from './World.vue'

	export default {
		data:function(){
			return {
				greeting:'Hello'
			}
		},
		components:{
			worldTemp
		}
	}
</script>

<style scoped>
	p{
		font-size: 2em;
		text-align: center;
	} 
</style>