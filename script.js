// calc function  
function tinyOffer() {    
    let clients_input = document.getElementById('clients_input').value;
    let product_cost  = document.getElementById('product_cost').value;

    let Year_Ammount;
    let Clients_Output;
    let Avarage_Sale;
    let Additional_Revenue;
    let Total_Amount;

    Year_Ammount       = (clients_input * product_cost);
    Clients_Output     = clients_input * 1;
    Avarage_Sale       = product_cost * 1;
    Additional_Revenue = Year_Ammount * 4;
    Total_Amount       = product_cost * 5;

    document.getElementById("year_amount").innerHTML        = "$" + Year_Ammount.toLocaleString("en-US");
    document.getElementById("clients_output").innerHTML     =       Clients_Output.toLocaleString("en-US");
    document.getElementById("avarage_sale").innerHTML       = "$" + Avarage_Sale.toLocaleString("en-US");
    document.getElementById("additional_revenue").innerHTML = "$" + Additional_Revenue.toLocaleString("en-US");
    document.getElementById("total_amount").innerHTML       = "$" + Total_Amount.toLocaleString("en-US");
}

// commas to thousands
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}