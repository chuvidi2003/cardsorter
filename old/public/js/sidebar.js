$(document).ready(function() {
 var path = window.location.pathname;
 var page = path.split("/").pop();
 
	if (page == "" | page == "/"  | page == "demo"){
		$("treeview").removeClass("active");
		$("#index").addClass("active");
	}else if (page == "category" ){
		$("treeview").removeClass("active");
		$("#category").addClass("active");
		//alert($("#category").html());
	}else if (page == "training" ){
		$("treeview").removeClass("active");
		$("#training").addClass("active");
	}else if (page == "tasks" ){
		$("treeview").removeClass("active");
		$("#tasks").addClass("active");
	}
});