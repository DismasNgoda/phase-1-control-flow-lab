function scuberGreetingForFeet(a){
  // Write your code here!
  let ride;
  if(a <= 400){
    ride = "This one is on me!";
  }
  else if(a < 2500){
    ride = "I will gladly take your thirty bucks.";
  }
  else {
    return "No can do.";
  }
  return ride;
}
scuberGreetingForFeet(2501);


function ternaryCheckCity(city){
  // Write your code here!
    return city ==="NYC" ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default: 
      return 'Bye.'
  }
}