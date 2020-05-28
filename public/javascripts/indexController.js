app.controller('indexController',['scope','indexFactory', ($scope, indexFactory)=>{
    indexFactory.connectSocket('http:localhost:3000',{
        reconnectionAttempts: 3
    }).then((socket)=>{
        console.log('Connection is completed')
    }).catch((err) =>{
        console.log(err);
    });
}]);
// controller kısmında not defined hatası veriyor