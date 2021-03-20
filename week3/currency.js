function changeCurrency(){
    var from=document.getElementById("from").value;
    var to=document.getElementById("to").value;
    fetch("http://data.fixer.io/api/latest?access_key=3418c21660a30919d9c37847aaaac9b8",{mode:'no-cors'})
    .then(response=>response.json())
    .then(result=>{
        var x=json.parse(result);
        var oneUnit=x.rates[to]/x.rates[from];
        var amount=document.getElementById("fromAmount").value;
        document.getElementById("toAmount").value=(oneUnit*amount).toFixed(2);

});
};