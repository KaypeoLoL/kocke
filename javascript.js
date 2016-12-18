
function randomNumber(){
  var rand1 = Math.floor((Math.random()*6)+1);
  var rand2 = Math.floor((Math.random()*6)+1);


    var broj1 = document.getElementById('broj1').innerHTML=rand1;
    var broj2 = document.getElementById('broj2').innerHTML=rand2;

      var jednako = (broj1 + broj2);

    document.getElementById('jednako').innerHTML=jednako;



};
