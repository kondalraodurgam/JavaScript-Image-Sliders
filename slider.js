var images = [
			"https://www.hdwallpapers.in/download/pink_flower_4k-3840x2160.jpg", 
			"https://images.floranext.com/instances/designsbyrosa_com/backgrounds/cache/1/1f79a3e1a8d3ebc64bc71cdddfde670a/2/6/26813730-2500-012f-48d5-40408616cc4b.jpg", 
			"http://www.flaberry.com/blog/wp-content/uploads/2016/06/1416-vivid-flowers.jpg"
		];

		var num = 0 ;
		function onNext() {
			var slider = document.getElementById("slider");
			num++;
			if (num >= images.length){
				num = 0;
			}
			slider.src = images[num];
		}
		function onPrev(){
			var slider = document.getElementById("slider");
			num --;
			if (num<0){
				num = images.length-1
			}
			slider.src = images[num];
		}