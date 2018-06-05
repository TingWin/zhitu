var vmAjax = new Vue ({
		el: "#main",
		data: {
			list: [],
			subjectList: [],
			picList:[],
		},
		mounted: function(){
			this.getData();
		},
		methods: {
			getData: function(){
				var that = this;
				$.ajax({
					url: "http://api.zhituteam.com/api/index",
					type: "get",
					data: {},
					dataType: "json",
					success: function(res){
						that.list = res.data.teacher;
						that.subjectList = res.data.subjects;
						var newBannerList = [];
						for (var i = 0; i < 5; i++) {
							newBannerList = newBannerList.concat(res.data.banner);
						};
						that.picList = newBannerList;
					},
					error: function(res){
						console.log(res);
					},
				})
			},
		},
	});
//轮播图
	var mySwiper = new Swiper ('.swiper-container', {
		//Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。
		direction:'horizontal',
		autoplay:1000,
		//自动播放时间
		observer:true,
		//启动动态检查器(OB/观众/观看者)，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
		loop:true,
		//播放速度
		speed:1000,
		//如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
		//操作包括触碰，拖动，点击pagination等。
		autoplayDisableOnInteraction:false,
		// 如果需要分页器，即下面的小圆点
		pagination:".swiper-pagination",
		//此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
		paginationClickable:true,
	});

	


