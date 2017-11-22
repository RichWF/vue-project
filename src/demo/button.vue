<template>
	<div class="page button js_show">
		<div class="page__hd">
			<h1 class="page__title">Button</h1>
			<p class="page__desc">按钮</p>
		</div>
		<div class="page__bd page__bd_spacing">
			<m-button type="primary">页面主操作 Normal</m-button>
			<m-button type="primary" :isloading="true">页面主操作 Loading</m-button>
			<m-button type="primary" :disabled="true">页面主操作 Disabled</m-button>

			<m-button type="default">页面次操作 Normal</m-button>
			<m-button type="default" :isloading="true">页面次操作 Loading</m-button>
			<m-button type="default" :disabled="true">页面次操作 Disabled</m-button>

			<m-button type="warn">警告类操作 Normal</m-button>
			<m-button type="warn" :isloading="true">警告类操作 Loading</m-button>
			<m-button type="warn" :disabled="true">警告类操作 Disabled</m-button>

			<div  class="button-sp-area">
				<m-button type="primary" size="mini">按钮</m-button>
				<m-button type="default" size="mini">按钮</m-button>
				<m-button type="warn" size="mini">按钮</m-button>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import Button from '../components/Button/button.vue'

    export default{
    	name:'button',
    	components:{
    		'm-button':Button
    	}
    }

</script>