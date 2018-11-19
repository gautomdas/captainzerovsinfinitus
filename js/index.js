
var canvas = document.querySelector("#scene"),
	ctx = canvas.getContext("2d"),
	particles = [],
	amount = 0,
	mouse = {x:0,y:0},
	radius = 1;
var bam;
var colors = ["#4deeea","#74ee15", "#ffe700","#f000ff", "#001eff"];

var copy = document.querySelector("#copy");

var ww = canvas.width = window.innerWidth;
var wh = canvas.height = window.innerHeight;

function Particle(x,y){
	this.x =  Math.random()*ww;
	this.y =  Math.random()*wh;
	this.dest = {
		x : x,
		y: y
	};
	this.r =  Math.random()*5 + 2;
	this.vx = (Math.random()-0.5)*20;
	this.vy = (Math.random()-0.5)*20;
	this.accX = 0;
	this.accY = 0;
	this.friction = Math.random()*0.05 + 0.94;

	this.color = colors[Math.floor(Math.random()*6)];
}

Particle.prototype.render = function() {


	this.accX = (this.dest.x - this.x)/1000;
	this.accY = (this.dest.y - this.y)/1000;
	this.vx += this.accX;
	this.vy += this.accY;
	this.vx *= this.friction;
	this.vy *= this.friction;

	this.x += this.vx;
	this.y +=  this.vy;

	ctx.fillStyle = this.color;
	ctx.beginPath();
	ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
	ctx.fill();

	var a = this.x - mouse.x;
	var b = this.y - mouse.y;

	var distance = Math.sqrt( a*a + b*b );
	if(distance<(radius*70)){
		this.accX = (this.x - mouse.x)/100;
		this.accY = (this.y - mouse.y)/100;
		this.vx += this.accX;
		this.vy += this.accY;
	}

}

Particle.prototype.render = function() {


	this.accX = (this.dest.x - this.x)/1000;
	this.accY = (this.dest.y - this.y)/1000;
	this.vx += this.accX;
	this.vy += this.accY;
	this.vx *= this.friction;
	this.vy *= this.friction;

	this.x += this.vx;
	this.y +=  this.vy;

	ctx.fillStyle = this.color;
	ctx.beginPath();
	ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
	ctx.fill();

	var a = this.x - mouse.x;
	var b = this.y - mouse.y;

	var distance = Math.sqrt( a*a + b*b );
	if(distance<(radius*70)){
		this.accX = (this.x - mouse.x)/100;
		this.accY = (this.y - mouse.y)/100;
		this.vx += this.accX;
		this.vy += this.accY;
	}

}
function onMouseMove(e){
	mouse.x = e.clientX;
	mouse.y = e.clientY;
}

function onTouchMove(e){
  if(e.touches.length > 0 ){
    mouse.x = e.touches[0].clientX;
    mouse.y = e.touches[0].clientY;
  }
}

function onTouchEnd(e){
mouse.x = -9999;
mouse.y = -9999;
}

function initScene(){
	ww = canvas.width = window.innerWidth;
	wh = canvas.height = window.innerHeight;

	ctx.clearRect(0, canvas.height/2, canvas.width, canvas.height);

	ctx.font = "bold "+(ww/2)+"px sans-serif";
	ctx.textAlign = "center";
	ctx.fillText(copy.value, ww/2, wh/1.4);

	var data  = ctx.getImageData(0, 0, ww, wh).data;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.globalCompositeOperation = "screen";

	particles = [];
	var splits = 80;
	for(var i=0;i<ww;i+=Math.round(ww/splits)){
		for(var j=0;j<wh;j+=Math.round(ww/splits)){
			if(data[ ((i + j*ww)*4) + 3] > 150){
				particles.push(new Particle(i,j));
			}
		}
	}
	amount = particles.length;

}

function initScene2(){
	ww = canvas.width = window.innerWidth;
	wh = canvas.height = window.innerHeight;

	ctx.clearRect(0, canvas.height/2, canvas.width, canvas.height);

	ctx.font = "bold "+(ww/1.25)+"px sans-serif";
	ctx.textAlign = "center";
	ctx.fillText(copy.value, ww/2, wh);

	var data  = ctx.getImageData(0, 0, ww, wh).data;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.globalCompositeOperation = "screen";

	particles = [];
	var splits = 80;
	for(var i=0;i<ww;i+=Math.round(ww/splits)){
		for(var j=0;j<wh;j+=Math.round(ww/splits)){
			if(data[ ((i + j*ww)*4) + 3] > 150){
				particles.push(new Particle(i,j));
			}
		}
	}
	amount = particles.length;

}


function initScene3(){
	ww = canvas.width = window.innerWidth;
	wh = canvas.height = window.innerHeight;

	ctx.clearRect(0, canvas.height/2, canvas.width, canvas.height);

	ctx.font = "bold "+(ww/1.8)+"px sans-serif";
	ctx.textAlign = "center";
	ctx.fillText(copy.value, ww/2, wh/1.25);

	var data  = ctx.getImageData(0, 0, ww, wh).data;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.globalCompositeOperation = "screen";

	particles = [];
	var splits = 200;
	for(var i=0;i<ww;i+=Math.round(ww/splits)){
		for(var j=0;j<wh;j+=Math.round(ww/splits)){
			if(data[ ((i + j*ww)*4) + 3] > 150){
				particles.push(new Particle(i,j));
			}
		}
	}
	amount = particles.length;
	bam = true;
	console.log("Set True")
}

function initScene4(){
	ww = canvas.width = window.innerWidth;
	wh = canvas.height = window.innerHeight;

	ctx.clearRect(0, canvas.height/2, canvas.width, canvas.height);

	ctx.font = "bold "+(ww/5)+"px sans-serif";
	ctx.textAlign = "center";
	ctx.fillText(copy.value, ww/2, wh/2);

	var data  = ctx.getImageData(0, 0, ww, wh).data;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.globalCompositeOperation = "screen";

	particles = [];
	var splits = 160;
	for(var i=0;i<ww;i+=Math.round(ww/splits)){
		for(var j=0;j<wh;j+=Math.round(ww/splits)){
			if(data[ ((i + j*ww)*4) + 3] > 150){
				particles.push(new Particle(i,j));
			}
		}
	}
	bam = false;
	amount = particles.length;

}

function onMouseClick(){
	radius++;
	if(radius ===5){
		radius = 0;
	}
}

function render(a) {
	requestAnimationFrame(render);
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	for (var i = 0; i < amount; i++) {
		particles[i].render();
	}
	if (bam){
		console.log("Bam");
		setTimeout(function(){
			ctx.fillStyle = "white";
			ctx.fillRect(0, 0, canvas.width, canvas.height);
		}, 500);
		setTimeout(function(){
			ctx.fillStyle = "white";
			ctx.fillRect(0, 0, canvas.width, canvas.height);
		}, 600);
		setTimeout(function(){
			ctx.fillStyle = "white";
			ctx.fillRect(0, 0, canvas.width, canvas.height);
		}, 700);
		setTimeout(function(){
			ctx.fillStyle = "white";
			ctx.fillRect(0, 0, canvas.width, canvas.height);
		}, 800);
		setTimeout(function(){
			ctx.fillStyle = "white";
			ctx.fillRect(0, 0, canvas.width, canvas.height);
		}, 900);
		setTimeout(function(){
			ctx.fillStyle = "white";
			ctx.fillRect(0, 0, canvas.width, canvas.height);
		}, 1000);
		setTimeout(function(){
			ctx.fillStyle = "white";
			ctx.fillRect(0, 0, canvas.width, canvas.height);
		}, 1100);
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		bam = false;
	}
};
ww = canvas.width = window.innerWidth;
wh = canvas.height = window.innerHeight;

copy.addEventListener("keyup", initScene);
window.addEventListener("resize", initScene);
window.addEventListener("touchmove", onTouchMove);
window.addEventListener("click", onMouseClick);
window.addEventListener("touchend", onTouchEnd);
initScene4();
requestAnimationFrame(render);
