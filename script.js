
const top = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i <= top.length; i++) {
    console.log(i)
}

const capitals = 
[
  "Sacramento, California",
  "Juneau, Alaska",
  "Montgomery, Alabama",
  "Phoenix, Arizona",
  "Little Rock, Arkansas",
  "Denver, Colorado",
  "Hartford, Connecticut",
  "Tallahassee, Florida",
  "Dover, Delaware",
  "Atlanta, Georgia",
  "Boise, Idaho",
  "Frankfort, Kentucky",
  "Indianapolis, Indiana",
  "Charleston, West Virginia",
  "Honolulu, Hawaii",
  "Topeka, Kansas",
  "Baton Rouge, Louisiana",
  "Augusta, Maine",
  "Des Moines, Iowa",
  "Annapolis, Maryland",
  "Boston, Massachusetts",
  "Harrisburg, Pennsylvania",
  "Concord, New Hampshire",
  "Saint Paul, Minnesota",
  "Jackson, Mississippi",
  "Jefferson City, Missouri",
  "Helena, Montana",
  "Lincoln, Nebraska",
  "Providence, Rhode Island",
  "Trenton, New Jersey",
  "Montpelier, Vermont",
  "Santa Fe, New Mexico",
  "Cheyenne, Wyoming",
  "Salt Lake City, Utah",
  "Madison, Wisconsin",
  "Carson City, Nevada",
  "Nashville, Tennessee",
  "Raleigh, North Carolina",
  "Bismarck, North Dakota",
  "Columbus, Ohio",
  "Salem, Oregon",
  "Albany, New York",
  "Lansing, Michigan",
  "Columbia, South Carolina",
  "Pierre, South Dakota",
  "Olympia, Washington",
  "Austin, Texas",
  "Richmond, Virginia",
  "Springfield, Illinois",
  "Oklahoma City, Oklahoma",
]

const sortByState = capitals.slice().sort((a, b) => {
  const stateA = a.split(", ")[1];
  const stateB = b.split(", ")[1];
  return stateA.localeCompare(stateB)
})

console.log(sortByState)