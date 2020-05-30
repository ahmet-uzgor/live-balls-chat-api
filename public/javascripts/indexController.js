app.controller('indexController',['scope','indexFactory', ($scope, indexFactory)=>{

    $scope.init = ()=>{
        const username = prompt('Please enter a username');

        if(username){
            initSocket(username);
        }
    };
    function initSocket(username){
        indexFactory.connectSocket('http:localhost:3000',{
            reconnectionAttempts: 3
        }).then((socket)=>{
            console.log('Connection is completed')
        }).catch((err) =>{
            console.log(err);
        });
    }
}]);
// controller kısmında not defined hatası veriyor