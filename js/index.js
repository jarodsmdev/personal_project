$(document).ready(function(){

    $("#table_product").DataTable();

    $(".recomendar").on("click", function(){
    if ($(this).hasClass("fa-regular")){
        $(this).removeClass("fa-regular")
        $(this).addClass("fa-solid")
    }else{
        $(this).removeClass("fa-solid")
        $(this).addClass("fa-regular")
    }
})
});

