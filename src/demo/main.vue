<template>
	<div class="page home js_show">
		<div class="page__hd">
			<h1 class="page__title">
				<img src="../assets/images/logo.png" alt="WeUI" height="21px">
			</h1>
			<p class="page__desc">WeUI 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。</p>
		</div>
		<div class="page__bd page__bd_spacing">
			<ul>
				<li :class="ShowFromList">
					<div class="weui-flex js_category">
						<p class="weui-flex__item">表单</p>
						<img src="../assets/images/icon_nav_form.png" alt="" @click="isShowFormlist=!isShowFormlist">
					</div>
					<div class="page__category js_categoryInner" data-height="225" style="">
						<div class="weui-cells page__category-content">
							<m-link text="Button" url="/button"></m-link>
							<m-link text="Input" url="/input"></m-link>  
							<m-link text="List" url="/list"></m-link>  
							<m-link text="Slider" url="/slider"></m-link>
							<m-link text="Uploader" url="/uploader"></m-link>
						</div>
					</div>
				</li>
				<li :class="ShowLayoutList">
					<div class="weui-flex js_category">
						<p class="weui-flex__item">基础组件</p>
						<img src="../assets/images/icon_nav_layout.png" alt="" @click="isShowLayoutlist=!isShowLayoutlist">
					</div>
					<div class="page__category js_categoryInner">
						<div class="weui-cells page__category-content">
							<m-link text="Article" url="/article"></m-link>
							<m-link text="Badge" url="/badge"></m-link>
							<m-link text="Flex" url="/flex"></m-link>
							<m-link text="Footer" url="/footer"></m-link>
							<m-link text="Gallery" url="/gallery"></m-link>
							<m-link text="Grid" url="/grid"></m-link>
							<m-link text="Icons" url="/icons"></m-link>
							<m-link text="Loadmore" url="/loadmore"></m-link>
							<m-link text="Panel" url="/panel"></m-link>
							<m-link text="Preview" url="/preview"></m-link>
							<m-link text="Progress" url="/progress"></m-link>
						</div>
					</div>
				</li>
				<li :class="ShowFeedbackList">
					<div class="weui-flex js_category">
						<p class="weui-flex__item">操作反馈</p>
						<img src="../assets/images/icon_nav_feedback.png" alt="" @click="isShowFeedbacklist=!isShowFeedbacklist">
					</div>
					<div class="page__category js_categoryInner">
						<div class="weui-cells page__category-content">
							<a class="weui-cell weui-cell_access js_item" href="javascript:;">
								<div class="weui-cell__bd">
									<p>Actionsheet</p>
								</div>
								<div class="weui-cell__ft"></div>
							</a>
							<a class="weui-cell weui-cell_access js_item" href="javascript:;">
								<div class="weui-cell__bd">
									<p>Dialog</p>
								</div>
								<div class="weui-cell__ft"></div>
							</a>
							<a class="weui-cell weui-cell_access js_item"  href="javascript:;">
								<div class="weui-cell__bd">
									<p>Msg</p>
								</div>
								<div class="weui-cell__ft"></div>
							</a>
							<a class="weui-cell weui-cell_access js_item" href="javascript:;">
								<div class="weui-cell__bd">
									<p>Picker</p>
								</div>
								<div class="weui-cell__ft"></div>
							</a>
							<a class="weui-cell weui-cell_access js_item"  href="javascript:;">
								<div class="weui-cell__bd">
									<p>Toast</p>
								</div>
								<div class="weui-cell__ft"></div>
							</a>
						</div>
					</div>
				</li>
				<li :class="ShowNavList">
					<div class="weui-flex js_category">
						<p class="weui-flex__item">导航相关</p>
						<img src="../assets/images/icon_nav_nav.png" alt="" @click="isShowNavlist=!isShowNavlist">
					</div>
					<div class="page__category js_categoryInner">
						<div class="weui-cells page__category-content">
							<m-link text="Navbar" url="/navbar"></m-link>
							<m-link text="Tabbar" url="/tabbar"></m-link>
						</div>
					</div>
				</li>
				<li :class="ShowSearchList">
					<div class="weui-flex js_category">
						<p class="weui-flex__item">搜索相关</p>
						<img src="../assets/images/icon_nav_search.png" alt="" @click="isShowSearchlist=!isShowSearchlist">
					</div>
					<div class="page__category js_categoryInner">
						<div class="weui-cells page__category-content">
							<m-link text="Search Bar" url="/searchbar"></m-link>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="page__ft">
			<a><img src="../assets/images/icon_footer.png"></a>
		</div>
	</div>
</template>

<script>
	import link from '../components/Link/Link.vue'

	export default {
		name: 'main',
		data:function(){
			return {
				isShowFormlist:false,
				isShowLayoutlist:false,
				isShowFeedbacklist:false,
				isShowNavlist:false,
				isShowSearchlist:false
			}
		},
		computed:{
			ShowFromList:function(){
				if (this.isShowFormlist) {
					return "js_show";
				}
				else{
					return "";
				}
			},
			ShowLayoutList:function(){
				if (this.isShowLayoutlist) {
					return "js_show";
				}
				else{
					return "";
				}
			},
			ShowFeedbackList:function(){
				if (this.isShowFeedbacklist) {
					return "js_show";
				}
				else{
					return "";
				}
			},
			ShowNavList:function(){
				if (this.isShowNavlist) {
					return "js_show";
				}
				else{
					return "";
				}
			},
			ShowSearchList:function(){
				if (this.isShowSearchlist) {
					return "js_show";
				}
				else{
					return "";
				}
			}
		},
		components:{
			'm-link':link
		}

	}
</script>