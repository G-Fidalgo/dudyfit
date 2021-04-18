import * as data from './mocks/customers.json';

const trainerAssingment = (x: any) => {
  let result: any[] = [];
  const customersSorted: any = data.customers
    .sort(function (a: any, b: any) {
      return a.preferences.coachReputation - b.preferences.coachReputation;
    })
    .reverse();

  const trainersSorted = x
    .sort(function (a: any, b: any) {
      return a.reputation - b.reputation;
    })
    .reverse();
  let counter: number = 0;
  for (let trainer of trainersSorted) {
    result.push({
      ...trainer,
      customers: customersSorted.slice(counter, parseInt(trainer.customersLimit) + counter),
    });
    counter = counter + parseInt(trainer.customersLimit);
  }
  return result;
};
export default trainerAssingment;
