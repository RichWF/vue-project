<template>
	                <router-link class="weui-cell weui-cell_access js_item" :to="url" >
										<div class="weui-cell__bd">
											<p>{{text}}</p>
										</div>
										<div class="weui-cell__ft"></div>
					</router-link>
</template>


<script>
	export default {
		name:'link',
		props:['text',"url"]
	}
</script>