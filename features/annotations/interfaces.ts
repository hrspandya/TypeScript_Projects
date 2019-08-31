interface Vehicle1 {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'Civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return 'some summary';
  }
};

const printVehicle = (vehicle: Vehicle1): void => {
  console.log(`name: ${vehicle.name}`);
  console.log(`year: ${vehicle.year}`);
  console.log(`broken: ${vehicle.broken}`);
  console.log(`summary: ${vehicle.summary()}`);
};

printVehicle(oldCivic);
