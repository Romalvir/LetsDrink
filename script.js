//bring in all the cup elements
const smallCups = document.querySelectorAll(".cup-small")
const listers = document.getElementById("liters")
const percentage = document.getElementById("percentage")
const remained = document.getElementById("remained")

//when the application loads you want to call the function
updateBigCup()

//loop through all the cups
//parameters are cup and the index which we call idx.

smallCups.forEach((cup,idx) =>{
	//console.log(idx)
	//add an event listener, when clicked run function and parameter will be IDX
	cup.addEventListener("click", () => highlightCups(idx))
})

function highlightCups(idx) {
	//console.log(idx)
	//goal is when clicked we want to add the full class
	//we call in and index 2 aka idx2 and we check to see if its less than idx and add
	//the fill class

	if(smallCups[idx].classList.contains("full") && !smallCups[idx].nextElementSibling.classList.contains("full")){
				idx--
		}

	smallCups.forEach((cup, idx2) => {
			if(idx2 <= idx){
				cup.classList.add("full")
			} else{
				cup.classList.remove("full")
			}
		})

	updateBigCup()
}



function updateBigCup() {
	//get the number of full glasses and put it in an constant
	const fullCups = document.querySelectorAll(".cup-small.full").length
	//lets all get the total cups
	const totalCups = smallCups.length

	if(fullCups === 0){
		percentage.style.visibility = "hidden"
		percentage.style.hidden = 0
	} else {
		percentage.style.visibility = "visible"
		percentage.style.hidden = `${fullCups / totalCups * 330}px`
	}
	
}