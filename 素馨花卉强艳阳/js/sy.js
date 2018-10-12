
window.onload=function(){

	

	//2.顶部/居中/下滑
	
	let backcolor=document.querySelector(".head_top");
	let backfontcolor=document.querySelectorAll(".head_t_c_r a");

	let box=document.querySelectorAll(".m_L_t");

	let h3=document.querySelector(".main_three_m_t");
	let h31=document.querySelectorAll(".main_one_m_t");
	let h32=document.querySelector(".main_one_m>p");
	let h33=document.querySelector(".main_three_c");

	top_Head(backcolor,backfontcolor,box,h3,h31,h32,h33);
	
	//3.banner
	let banner = document.querySelector(".banner");
	let dots = document.querySelectorAll(".h_b_b ul li");
	let imgs = document.querySelectorAll(".banner_c>li>img");
	let leftBtn = document.querySelector(".banner_left");
	let rightBtn = document.querySelector(".banner_right");
	let banner_bottom = document.querySelectorAll(".head_bottom>div>p");
	// let widths = parseInt(getComputedStyle(banner,null).width);
	bannerLeftRight(banner,dots,imgs,leftBtn,rightBtn,1519,banner_bottom,40000,"active");

	//1.花艺
	// let banner1 = document.querySelector(".main_one_m_b");
	// let imgs1 = document.querySelectorAll(".main_one_m_b_c>ul>li");
	// let leftBtn1 = document.querySelector(".main_one_m_b_left");
	// let rightBtn1 = document.querySelector(".main_one_m_b_right");
	// bannerLeftRight1(banner1,imgs1,leftBtn1,rightBtn1,346,2000);


	//4.
// 	let banner1=document.querySelector(".main_one_m_b");
// 	let imgs1 = document.querySelectorAll(".main_one_m_b_c>div>ul");
// 	let leftbotton=document.querySelector(".main_one_m_b_left");
// 	let rightbotton=document.querySelector(".main_one_m_b_right");
// 	let t;
// 	let now=1;
// 	let num=0;
// 	let a=0;
// 	let b=1;
// 	let c=0;
// // console.log(imgs1)
// 	// 自动轮播
// 	t = setInterval(move,2500);

// 	function move(){
// 		num++;
// 		if(num==6){
// 			num=0; 
// 			imgs1[a].style.left = "1730px";
// 		}
// 		animate(imgs1[a],{left:(-346*now)});
// 		animate(imgs1[b],{left:(1730+(-346*now))});
		
// 		now++;
// 		if(now==7){
// 			now=1;
// 			c=a;
// 			a=b;
// 			b=c;
// 		}
// 	}

// 	function moveL(){
// 		num--;
// 		if(num==-1){
// 			num=5; 
// 			imgs1[b].style.left = "-1730px";
// 		}
// 		animate(imgs1[b],{left:(-1730+(346*now))});
// 		animate(imgs1[a],{left:(346*now)});
// 		now++;
// 		if(now==7){
// 			now=1;
// 			c=a;
// 			a=b;
// 			b=c;
// 		}
// 	}
// 	rightbotton.onclick = function(){
// 		move();
// 	}
// 	leftbotton.onclick = function(){
// 		moveL();
// 	}
// 	banner1.onmouseover = function(){
// 		clearInterval(t);
// 	}
// 	banner1.onmouseout = function(){
// 		t = setInterval(move,2000);
// 	}
// 	window.onblur = function(){
// 		clearInterval(t);
// 	}
// 	window.onfocus = function(){
// 		t = setInterval(move, 2000);
// 	}
}



