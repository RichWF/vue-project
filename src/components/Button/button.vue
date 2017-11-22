<template>
	<a href="javascript:;" :class=" 
	'weui-btn ' + ' weui-btn_'+type +
	(size=='mini'?' weui-btn_mini':'') +  (isloading?' weui-btn_loading':'') +
	(disabled?' weui-btn_disabled':'') ">
	<i :class=" (isloading?'weui-loading':'') "></i>
	<slot></slot>
</a>
</template>

<script type="text/javascript">
	export default{
		props:{
			type:{
				type:String,
             	default:"default" // default、primary、warn 
             },
             size:{
             	type:String,
             	default:"" // mini
             },
             isloading:{
             	type:Boolean,
             	default:false
             },
             disabled:{
             	type:Boolean,
             	default:false
             }
         }
     }
 </script>