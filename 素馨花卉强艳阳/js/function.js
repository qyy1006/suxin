
//1.
//参数1：盒子
//参数2：图片
//参数3：遮罩
//参数4：文字盒子
function scale(main_t_l_1,img1,main_t_l1,main_c1){
	main_t_l_1.onmouseover=function(){
		img1.style.transform="scale(1.1,1.1)";
		main_t_l1.style.opacity=1;
		main_c1.style.opacity=1;
	}
	main_t_l_1.onmouseout=function(){
		img1.style.transform="scale(1,1)";
		main_t_l1.style.opacity=0;
		main_c1.style.opacity=0.6;
	}
}

//2.顶部
function top_Head(backcolor,backfontcolor,box,h3,h31,h32,h33){
	window.onscroll=function(){
		let res= document.body.scrollTop||document.documentElement.scrollTop;
		// console.log(res);
		//顶部
		if(res>100){
			backcolor.style.backgroundColor="rgba(255,255,255,255)";
			backcolor.style.borderBottom="solid 1px #bbb";
			for(let i=1;i<backfontcolor.length;i++){
				backfontcolor[i].style.color="#000";
			}
		}
		if(res<100){
			backcolor.style.backgroundColor="rgba(0,0,0,0.1)";
			backcolor.style.borderBottom="none";
			for(let i=1;i<backfontcolor.length;i++){
				backfontcolor[i].style.color="#fff";
			}
		}
		//左右居中
		if(res<1120){
			for(let i=0;i<4;i++){
				box[i].style.transform="translateX(-600px)";
			}
			for(let i=4;i<8;i++){
				box[i].style.transform="translateX(600px)";
			}
		}
		if(res>1180){
			box[0].style.transform="translateX(0px)"
			box[4].style.transform="translateX(-0px)"
		}
		if(res>1290){
			box[1].style.transform="translateX(0px)"
			box[5].style.transform="translateX(-0px)"
		}
		if(res>1360){
			box[2].style.transform="translateX(0px)"
			box[6].style.transform="translateX(-0px)"
		}
		if(res>1420){
			box[3].style.transform="translateX(0px)"
			box[7].style.transform="translateX(-0px)"
		}

		//标题下滑/文字出现/段落上升
		if(res<200){
			for(let i=0;i<2;i++){
				h31[i].style.transform="translateY(-60px)"
				h31[i].style.opacity=0;
			}
			h3.style.transform="translateY(-60px)";
			h3.style.opacity=0;
			h32.style.opacity=0;
			h33.style.transform="translateY(100px)"
		}
		if(res>300){
			h31[0].style.transform="translateY(0)";
			h31[0].style.opacity=1;
			h32.style.opacity=1;
		}
		if(res>1045){
			h31[1].style.transform="translateY(0)";
			h31[1].style.opacity=1;
		}
		if(res>1735){
			h3.style.transform="translateY(0)";
			h3.style.opacity=1;
		}
		if(res>1760){
			h33.style.transform="translateY(0)";
			
		}
	}
	

}

//3.banner左右轮播
// 参数1:轮播盒子元素
// 参数2：轮播点集合
// 参数3：轮播图片集合
// 参数4：左按钮
// 参数5：右按钮
// 参数6：图片盒子宽度
//canshu :轮播文字
// 参数7：时间
// 参数8：轮播点样式
function bannerLeftRight(banner,dots,imgs,leftBtn,rightBtn,widths,banner_bottom,time,active){
	let t;
	let now = 0;
	let next = 0;
	let flag = true;

	dots[0].classList.add("active");
	// animate(imgs[0],{left:0});
	imgs[0].style.left = 0;
	banner_bottom[0].style.opacity=1;
	banner_bottom[0].style.top=0;
	for(let i=0;i<dots.length;i++){
		dots[i].onmouseover = function(){
			for(let j=0;j<imgs.length;j++){
				dots[j].classList.remove("active");
				imgs[j].style.left = -widths+"px";
				banner_bottom[j].style.opacity=0;
				banner_bottom[j].style.top="100px";
			}
			dots[i].classList.add("active");
			imgs[i].style.left = 0;
			banner_bottom[i].style.opacity=1;
			banner_bottom[i].style.top=0;
		}
	}

	// 自动轮播
	t = setInterval(move,time);
	function move(){
		next++;
		if(next == imgs.length){
			next = 0;      //循环时为0；
			flag = true;
			// return;
		}
		imgs[now].style.left = 0;
		imgs[next].style.left = widths + "px";
		animate(imgs[now],{left:-widths},function(){
			for(let j=0;j<dots.length;j++){
				dots[j].classList.remove("active");
				banner_bottom[j].style.opacity=0;
				banner_bottom[j].style.top="100px";
				flag = true;
			}
		});
		animate(imgs[next],{left:0},function(){
			dots[next].classList.add("active");
			banner_bottom[next].style.opacity=1;
			banner_bottom[next].style.top=0;
			flag = true;
		});
		now = next;
	}

	banner.onmouseover = function(){
		clearInterval(t);
	}
	banner.onmouseout = function(){
		t = setInterval(move,time);
	}

	function moveL(){
		next--;
		if(next == -1){
			next = imgs.length-1;              //为0时截止，要循环时为length-1；
			flag = true;
			// return;
		}
		imgs[now].style.left = 0;
		imgs[next].style.left = -widths + "px";
		animate(imgs[now],{left:widths},function(){
			for(let j=0;j<dots.length;j++){
				dots[j].classList.remove("active");
				banner_bottom[j].style.opacity=0;
				banner_bottom[j].style.top="100px";
				flag = true;
			}
		});
		animate(imgs[next],{left:0},function(){
			dots[next].classList.add("active");
			banner_bottom[next].style.opacity=1;
			banner_bottom[next].style.top=0;
			flag = true;
		});
		now = next;
	}
	rightBtn.onclick = function(){
		if(!flag){
			return;
		}
		flag = false;
		move();
	}
	leftBtn.onclick = function(){
		if(!flag){
			return;
		}
		flag = false;
		moveL();
	}
	window.onblur = function(){
		clearInterval(t);
	}
	window.onfocus = function(){
		t = setInterval(move, time);
	}
}

//4.花艺轮播
// 参数1：轮播部分
// 参数2：左按钮
// 参数3：右按钮
// 参数4：轮播盒子宽度
// 参数5：时间
// 参数6：轮播点样式




