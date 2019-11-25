
var dropdowns = document.getElementsByClassName('dropdown');
for(var i = 0; i< dropdowns.length;i++){
	createDrop(dropdowns[i]); 	
}

function createDrop(dropdowns) {
	var btn = dropdowns.childNodes[1];
	var menu = dropdowns.childNodes[3];
	btn.addEventListener('click',function (event) {
		event.preventDefault();
		if(menu.style.display == 'none' || menu.style.display == '' ){
			menu.style.display = 'block';

		}else{
			menu.style.display = 'none';
		}
	});
	btn.addEventListener('blur',function (event) {
		menu.style.display = 'none';
	});
}
