window.onload= function(){

  //Pet health variables
  var food=localStorage.getItem('foodTrack');
  var water=localStorage.getItem('foodTrack');
  var lift=localStorage.getItem('foodTrack');

  //calls fuctions to check health variables
  checkFood();
  checkWater();
  checkLift();
  checkHealth();

  //health variable-checking functions
  function checkFood(){
    if (food==undefined)
    {
      localStorage.setItem('foodTrack', 50);
      food=localStorage.getItem('foodTrack');
    }
    else{
      food = localStorage.getItem('foodTrack');

    }
  }

  function checkWater(){
    if (water==undefined)
    {
      localStorage.setItem('waterTrack', 50);
      water=localStorage.getItem('waterTrack');
    }
    else{
      water=localStorage.getItem('waterTrack');
    }
  }
  function checkLift(){
    if (lift==undefined)
    {
      localStorage.setItem('liftTrack', 50);
      lift=localStorage.getItem('liftTrack');
    }
    else{
      lift=localStorage.getItem('liftTrack');
    }
  }

  //runs status-changing functions for pet when certain events happen
  document.getElementById('foodButton').onclick = eating;
  document.getElementById('waterButton').onclick = drinking;
  document.getElementById('exerciseButton').onclick = lifting;
  document.getElementById('resetButton').onclick = reset;


  //game logic
  function eating(){
    checkFood();
      food=Number(food)+15;
      lift=Number(lift)-10;
    console.log(food , water , lift);
    checkHealth();

  }

  function drinking(){
    checkWater();
    water=Number(water)+15;
    lift=Number(lift)-10;
    console.log(food, water , lift);
    checkHealth();
  }

  function lifting(){
    checkLift();
    lift=Number(lift)+15;
    food=Number(food)-10;
    water=Number(water)-10;
    console.log(food, water, lift);
    checkHealth();
  }

  function reset(){
    food=Number(50);
    water=Number(50);
    lift=Number(50);
    console.log(food, water, lift);
    checkHealth();
  }

  function checkHealth(){
    localStorage.setItem('liftTrack', lift);
    localStorage.setItem('foodTrack', food);
    localStorage.setItem('waterTrack', water);
    document.getElementById('foodStat').innerHTML=(food);
    document.getElementById('waterStat').innerHTML=(water);
    document.getElementById('liftStat').innerHTML=(lift);

    //visual pet status
    if(food >=50 && water >=50 && lift >=50){
      document.getElementById('petDiv').innerHTML=("<img src='images/rowleyboi.jpeg'>");
    }
    else if(food <=40 || water <=40 || lift <=40){
      document.getElementById('petDiv').innerHTML=("<img src='images/f-1.png'>");
      if(food <=20 || water <=20 || lift <=20){
        document.getElementById('petDiv').innerHTML=("<img src='images/big-f.png'>");
        if(food <= 0 || water <= 0 || lift <= 0){
          console.log('RIP TO THE HOMIE');
          document.getElementById('petDiv').innerHTML=("<img src='images/press-f2.png'>");
        }
      }
    }
  }

}
