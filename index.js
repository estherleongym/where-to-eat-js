function addRestaurantListener(){
		startBtn = document.getElementById('start-random-button');
  
  // Replace 'functionName' with the name of the function that you have written
		startBtn.addEventListener("click", startRandomizing);
}


function startRandomizing(){

getBtn = document.getElementById('get-restaurant-button');

interval = setInterval(function(){ 
	
	choiceArray = ['Nasi Ayam Kunyit', 'Ayam Penyet', 'Teh Tarik Place', 'Subway','Rakuzen', 'Onde-Onde', 'Boat Noodles', 'Chicken Rice Shop', 'Nando\'s'];
		displayChoice = document.getElementById('restaurant');
			arrayLength = choiceArray.length;
  			rand = getRandomInt(0, arrayLength);
  				displayChoice.innerHTML = choiceArray[rand];
 
 console.log(rand);}, 100)

 getBtn.addEventListener("click", function(){

    		clearInterval(interval);
    		displayChoice.innerHTML;
    		console.log(rand);

  		})
				

}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


document.addEventListener('DOMContentLoaded', addRestaurantListener);