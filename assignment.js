/*************************************************
    Assignment 01 - kilometerToMeter
 *************************************************/
function kilometerToMeter(kilometer) {
  if (kilometer < 0 || typeof kilometer !== "number") {
    return "Please provide valid input";
  }

  return kilometer * 1000;
}
kilometerToMeter(23);

/*************************************************
    Assignment 02 - budgetCalculator
 *************************************************/
function budgetCalculator(watch, phone, laptop) {
  if (
    watch < 0 ||
    typeof watch !== "number" ||
    phone < 0 ||
    typeof phone !== "number" ||
    laptop < 0 ||
    typeof laptop !== "number"
  ) {
    return "Please provide valid input";
  }

  let prices = {
    watch: 50,
    phone: 100,
    laptop: 500,
  };
  let total = watch * prices.watch + phone * prices.watch + laptop * prices.laptop;

  return total;
}
budgetCalculator(5, 3, 2);

/*************************************************
    Assignment 03 - hotelCost
 *************************************************/
function hotelCost(days) {
  let cost = 0;
  if (days < 0 || typeof days !== "number") {
    return "Please provide valid input";
  }

  if (days <= 10) {
    cost = days * 100;
  } else if (days >= 11 && days <= 20) {
    cost += (days - 10) * 80;
    cost += 10 * 100;
  } else {
    cost += (days - 20) * 50;
    cost += 10 * 100;
    cost += 10 * 80;
  }

  return cost;
}
hotelCost(11);

/*************************************************
    Assignment 04 - megaFriend
 *************************************************/
function megaFriend(arrayOfFriends) {
  if (typeof arrayOfFriends !== "object" || arrayOfFriends.length === 0) {
    return "Please provide valid input";
  }

  let friend = arrayOfFriends[0];
  for (let i = 0; i < arrayOfFriends.length; i++) {
    if (arrayOfFriends[i].length > friend.length) {
      friend = arrayOfFriends[i];
    }
  }

  return friend;
}

let myFriends = [
  "tushar",
  "shohan",
  "imroz",
  "tamannana",
  "bindu",
  "Sadiya Afroz",
];

megaFriend(myFriends);
