export default function healthSort(arrayWarriors = []) {
  arrayWarriors.sort((prev, next) => next.health - prev.health);
  return arrayWarriors;
}

// const arrayOfWarriors = [
//   {name: 'мечник', health: 10},
//   {name: 'маг', health: 100},
//   {name: 'лучник', health: 80},
// ]

// healthSort(arrayOfWarriors);
