const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 20,
    lan: 50
  },
  setAge(age: number): void {
    this.age = age;
  }
};

const { age }: { age: number } = profile;
const {
  coords: { lat, lan }
}: { coords: { lat: number; lan: number } } = profile;
