//js
window.onload=function(){
	var rem=document.getElementById("rem");
	var img=document.getElementById("img");
	var sbm=document.getElementById("sbm");
	var onOff=true;
	rem.onclick=function(){
		if (onOff) {
			img.style.display="block";
			onOff=false;
		}else{
			img.style.display="none";
			onOff=true;
		}
	}
	sbm.onclick=function(){
		window.location.href='my_hotel.html';
	}	
	
}