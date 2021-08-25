window.onload = function(){
	document.getElementById("yhmk").focus();
}
var	yhm=[];
var	yhmm=[];
const zc = new Vue({
	el:"#zcjm",
	data:{
		zcname:"",
		zcpassword:"",
		twozc:"",
		// yhm:[],
		// yhmm:[]
	},
	methods:{
		zc:function(){
			i=0;
			if(this.zcname!=""&&this.zcpassword!=""&&this.zcpassword == this.twozc){
				while(i>=0){
					if (yhm[i]==undefined && yhmm[i]==undefined) {
						yhm[i]=this.zcname;
						yhmm[i]=this.zcpassword;
						console.log(yhm)
						console.log(yhmm)
						alert("注册成功！！");
						window.history.back(-1);
						window.close("zc.html")
						window.open("index.html")
						break;
					} else{
						alert("2123e12e")
						i=i+1;
					}
				}
			}else{
				alert("用户名或密码不能为空或两次输入密码不一致")
			}
		}
	}
})


const dl = new Vue({
	el:"#mmin",
	data:{
		usname:'',
		uspassword:'',
	},
	methods:{
		dl:function(){
			if (this.usname == "abc" && this.uspassword == "123") {
				console.log(this.usname);
				console.log(this.uspassword);
				console.log("登陆成功");
				window.open("入场特效.html");
				window.close("main.html");
			} else{
				console.log(this.usname);
				console.log(this.uspassword);
				console.log("用户名或密码错误");
				document.getElementById("tts").style.display="block"
				setInterval(function(){
					document.getElementById("tts").style.display="none"	
				},1000)
			}
		},
		mm:function(){
			document.getElementById("mmk").focus();
		}
	}
})

