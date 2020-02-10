var loading = true;

while (loading){
	var pageState = document.readyState;
	
	if(pageState == "complete"){
		loading = false;
		document.querySelector(".loading-screen").classList.add("u-display-none");
	}

}
