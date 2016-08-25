console.log('sourced');

var greetMe = function() {
  var dayOfWeek = document.getElementById('dayOfWeek').value;
  console.log('input value is = ', dayOfWeek);

  // // greet user w/ day specific greeting
  // if(dayOfWeek == 'Monday'){
  //   console.log(dayOfWeek + " is the worst day of the week");
  // }else if(dayOfWeek == 'Tuesday'){
  //   console.log("Taco " + dayOfWeek);
  // }else if(dayOfWeek == 'Wednesday'){
  //   console.log("Hump Day is "+ dayOfWeek);
  // }else{
  //   console.log("Happy " + dayOfWeek);
  // }

switch (dayOfWeek) {
  case 'Monday':
    // what to do in that case
    console.log(dayOfWeek + " is the worst day of the week");
    break;
  case 'Tuesday':
    console.log("Taco " + dayOfWeek);
    break;
  case 'Wednesday':
    console.log("Hump Day is "+ dayOfWeek);
    break;
  case 'Saturday':
    //-- fall through --
  case 'Sunday':
    console.log('Happy Weekend!');
    break;
  default:
    console.log('default');
}

console.log('outside of switch');
};
