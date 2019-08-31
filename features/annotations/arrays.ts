const carMakers: string[] = ['toyota', 'honda'];

const dates = [new Date(), new Date()];

const carsByMake: string[][] = [['f150'], ['corolla']];

// help with inference when extracting values

const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(1);

// help with map
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (string | Date)[] = [new Date(), '2030-10-10'];
importantDates.push(new Date());
