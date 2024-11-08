const popOutButton = document.querySelector(".pink")

popOutButton.addEventListener("click", popOutNow)

function popOutNow(e){
    e.preventDefault();

    document.querySelector(".bg-popContainer").style.display = "flex"
}

const cancelPop = document.getElementById("close")

cancelPop.addEventListener("click", CancelPopOut)

function CancelPopOut(e){
    e.preventDefault(e)
     document.querySelector(".bg-popContainer").style.display = "none"
}