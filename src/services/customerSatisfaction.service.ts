import trainerAssingment from './trainerAssingment.service';

const customerSatisfaction = (trainerAssignments: any[]) => {
  let result: any[] = [];
  let list: any = trainerAssingment(trainerAssignments);

  list.map((trainerAssignment: any) => {
    trainerAssignment.customers.map((customer: any) => {
      if (customer.preferences.coachReputation / 2 <= trainerAssignment.reputation) {
        result.push({
          ...customer,
          satisfaction: 'Muy satisfecho',
          trainer: trainerAssignment,
        });
      } else {
        result.push({
          ...customer,
          satisfaction: 'Poco satisfecho',
          trainer: trainerAssignment,
        });
      }
    });
  });

  return result;
};

export default customerSatisfaction;
