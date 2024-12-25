//-----------------------------first person ------------------------
const people = [
  {
    name: "Rahul",
    age: 30,
    city: "Pune",
    education: ["computer science"],
    ownsACar: true,
    employed: true,
    hobbies: [
      { type: "playing chess", category: "game" },
      { type: "gardening", category: "" }
    ],
    pets: [
      {
        name: "Max",
        age: 4,
        type: "dog",
        species: "golden retriever",
        isFullyVaccinated: true,
        isVaccinated: true,
        favouriteActivity: ["playing fetch"]
      }
    ]
  },
  // -----------------------------second person------------------
  {
    name: "Ananya",
    age: 30,
    city: "Bangalore",
    education: ["computer science", "graphic design"],
    ownsACar: false,
    employed: false,
    hobbies: [
      { type: "cooking", category: "Italian recipes" }
    ],
    pets: [
      {
        name: "Kiwi",
        age: 5,
        type: "parrot",
        species: "",
        isFullyVaccinated: false,
        isVaccinated: true,
        favouriteActivity: ["mimic her voice"]
      }
    ]
  },
  // -----------------------------third person------------------
  {
    name: "Ramesh",
    age: 45,
    city: "Jaipur",
    education: [""],
    ownsACar: false,
    employed: true,
    hobbies: [
      { type: "gardening", category: "rose" },
      { type: "reading", category: "historical fiction" },
    ],
    pets: [
      {
        name: "Bella",
        age: 3,
        type: "cat",
        species: "percian",
        isFullyVaccinated: true,
        isVaccinated: true,
        favouriteActivity: ["lounging in the sun"]
      },
      {
        name: "Leo",
        age: 3,
        type: "cat",
        species: "percian",
        isFullyVaccinated: true,
        isVaccinated: true,
        favouriteActivity: ["lounging in the sun"]
      }
    ]
  },
  // -----------------------------fourth person------------------
  {
    name: "kavya",
    age: 28,
    city: "Chennai",
    education: [""],
    ownsACar: false,
    employed: false,
    hobbies: [
      { type: "reading", category: "fantasy novel" },
      { type: "binge-watching shows", category: "sci-fi" }
    ],
    pets: [
      {
        name: "snowy",
        age: 2,
        type: "rabbit",
        species: "",
        isFullyVaccinated: false,
        isVaccinated: true,
        favouriteActivity: ["hopping around her backyard", "nibbling on carrots"]
      }
    ]
  }
];

// ****************************************************************************
// 1. How many individuals are currently employed? => 2

const getEmployedCount = function () {
  return people.filter(({ employed }) => employed).length;
};

// *****************************************************************************
// 2. How many people own a car? => 1

const numberOfCarOwners = function () {
  return people.filter(({ ownsACar }) => ownsACar).length;
};

// all pets details
const pets = people.flatMap(({ pets }) => pets);

// *****************************************************************************
// 3. How many pets are fully vaccinated? => 3

const vaccinatedPets = function (vaccinatedPetsCount, { isFullyVaccinated }) {
  return isFullyVaccinated ? vaccinatedPetsCount + 1 : vaccinatedPetsCount;
};

const numberOfVaccinatedPets = function () {
  return pets.reduce(vaccinatedPets, 0);
};

//*****************************************************************************
// 4. What are the names of all the pets, and what type of animal is each? 

const namesAndTypesOfPets = function () {
  return pets.map(({ name, type }) => ({ name, type }));
};

//*****************************************************************************
// 5. Which cities do the individuals live in? => ["pune", "Bangalore", "Jaipur", "Chennai"]

const cities = function () {
  return people.map(({ name, city }) => ({ name, city }));
};

// all hobbies
const allHobbies = people.flatMap(({ hobbies }) => hobbies);

//*****************************************************************************
// 6. How many hobbies are shared across the group? What are they? 

const uniqueHobbies = function (uniqueList, { type }) {
  if (!uniqueList.includes(type)) {
    uniqueList.push(type);
  }

  return uniqueList;
};

const hobbies = function () {
  return allHobbies.reduce(uniqueHobbies, []);
};

//*****************************************************************************
// 7. How many pets belong to people who are currently unemployed?
const getPetNames = (({ pets }) => pets.map(({ name }) => name));

const petsWithUnemployed = function () {
  const unemployedPeople = people.filter(({ employed }) => !employed);

  return unemployedPeople.flatMap(getPetNames).length;
};

//*****************************************************************************
// 8. What is the average age of the individuals mentioned in the passage?

const average = function (numbers) {
  const sumOfNumbers = numbers.reduce((x, y) => x + y, 0);

  return sumOfNumbers / numbers.length;
};

const averageAge = function () {
  const ages = people.map(({ age }) => age);

  return average(ages);
};

//*****************************************************************************
// 9. How many individuals have studied computer science, and how many of them have pets?

const studiedComputerScienceHavingPets = function () {
  const studiedCS = people.filter(({ education }) => education.includes("computer science"));
  const havePets = studiedCS.filter(({ pets }) => pets.length !== 0);

  return { CSDudes: studiedCS.length, havingPets: havePets.length };
};

//*****************************************************************************
// 10. How many individuals own more than one pet?

const havingMoreThanOnePet = function () {
  return people.filter(({ pets }) => pets.length > 1).length;
};

//*****************************************************************************
// 11. Which pets are associated with specific favorite activities?

const petsFavouriteActivity = function () {
  return pets.map(({ name, favouriteActivity }) => ({ name, favouriteActivity }));
};

//*****************************************************************************
// 12. What are the names of all animals that belong to people who live in Bangalore or Chennai? => ["Kiwi", "Snowy"]

const isPersonFromAskedCity = ({ city }) => city === "Bangalore" || city === "Chennai";

const nameOfAnimal = function () {
  const peopleList = people.filter(isPersonFromAskedCity);

  return peopleList.flatMap(getPetNames);
};

//*****************************************************************************
// 13. How many vaccinated pets belong to people who do not own a car?

const isVaccinated = (({ pets }) => pets.filter(({ isVaccinated }) => isVaccinated));

const peopleDontOwnCarHavingPets = function () {
  const peopleDontOwnCar = people.filter(({ ownsACar }) => !ownsACar);

  return peopleDontOwnCar.flatMap(isVaccinated).length;
};

//*****************************************************************************
// 14. What is the most common type of pet among the group?


//*****************************************************************************
// 15. How many individuals have more than two hobbies?

const peopleWithMoreThanTwoHobbies = function () {
  return people.filter(({ hobbies }) => hobbies.length > 2).length;
};

//*****************************************************************************
// 16. How many individuals share at least one hobby with Ramesh?

const peopleSharingHobbiesWithRamesh = function () {
  const person = people.find(({ name }) => name === "Ramesh");
  const rameshHobbies = person.hobbies.flatMap(({ type }) => type);

  return allHobbies.filter(({ type }) => rameshHobbies.includes(type)).length - rameshHobbies.length;
};

//*****************************************************************************
// 17. Which pet is the youngest, and what is its name?

const minimumAge = function (nameAndAge, { name, age }) {
  if (age < nameAndAge[1]) {
    return [name, age];
  };

  return nameAndAge;
};

const youngestPet = function () {
  return pets.reduce(minimumAge, ["", Infinity]);
};

//*****************************************************************************
// 18. What types of books are mentioned as interests, and who reads them?


//*****************************************************************************
// 19. How many individuals live in cities starting with the letter "B"?

const peopleLivingInCityStartingB = function () {
  return people.filter(({ city }) => city.charAt(0) === "B").length;
};

//*****************************************************************************
// 20. Which individuals do not own any pets?

const peopleDontOwnPet = function () {
  return people.filter(({ pets }) => pets.length === 0).map(({ name }) => name);
};
