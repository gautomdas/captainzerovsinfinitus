function Infinitus(){
	window.alert("The Youth Love Infinitus");
  document.getElementById("copy").value = '∞';
  initScene2();
}

function Captain(){
	window.alert("The Youth Love Captain Zero");
  document.getElementById("copy").value = '0';
  initScene();
}

function Battle(){
	window.alert("A battle has brewed!");
  var myArray = ['0', '∞'];
  var fina = myArray[Math.floor(Math.random() * myArray.length)];
  document.getElementById("copy").value = fina;
  initScene3();
}
