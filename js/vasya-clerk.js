function tickets(peopleInLine){
  /*
    I hardcoded the money bills' values in the second part
    of the first if-statement because I felt that it was more explicit
    than TICKET_PRICE*2, TICKET_PRICE*4, etc. We only have three numbers
    to check for.
  */
  var currentChange = { '25': 0, '50': 0, '100': 0 };
  
  const TICKET_PRICE = 25;

  for (var i = 0; i < peopleInLine.length; ++i) {
    if (peopleInLine[i] === TICKET_PRICE) {
      currentChange[TICKET_PRICE] += 1;
    } else {
      if (peopleInLine[i] === 50) {
        if (currentChange['25'] > 0) {
          currentChange['50'] += 1;
          currentChange['25'] -= 1;
        } else {
          return 'NO';
        }
      } else if (peopleInLine[i] === 100) {
        if (currentChange['25'] > 0 && currentChange['50'] > 0) {
          currentChange['100'] += 1;
          currentChange['50'] -= 1;
          currentChange['25'] -= 1;
        } else if (currentChange['25'] >= 3) {
          currentChange['100'] += 1;
          currentChange['25'] -= 3;
        } else {
          return 'NO';
        }
      }
    }
  }

  return "YES";
}