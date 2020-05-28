app.controller('indexController',['scope', ($scope)=>{
    console.log('Controller');
    const socket = io.connect("http://localhost:3000");
    return ;
}]);
// controller kısmında not defined hatası veriyor