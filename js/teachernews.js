var vmAjax = new Vue ({
	el: "#main",
	data: {
		list: {
			subject: [0],
			grade: [0],
			type: [0],
			extend_tag: [0],
			teacher_case: [],
			teacher_experience: [0],
		},
	},
	mounted: function(){
		this.getData();
	},
	methods: {
		getData: function(){
			var that = this;
			$.ajax({
				url: "http://api.zhituteam.com/api/teacher/info",
				type: "get",
				data: {
					id:window.location.search.split("=")[1],
				},
				dataType: "json",
				success: function(res){
					that.list = res.data.teacher;
				},
				error: function(res){
					console.log(res);
				},
			})
		}
	},
})