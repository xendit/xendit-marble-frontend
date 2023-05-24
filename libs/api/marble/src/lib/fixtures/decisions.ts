import { faker } from '@faker-js/faker';

import {
  type Decision,
  type getDecision,
  type listDecisions,
} from '../generated/marble-api';

const fakeDecisions: Decision[] = Array.from({
  length: Number(faker.number.int(100)),
}).map(() => ({
  id: faker.string.uuid(),
  created_at: faker.date.recent().toISOString(),
  trigger_object: {
    type: faker.helpers.arrayElement(['transaction', 'user', undefined]),
  },
  trigger_object_type: faker.word.noun(),
  outcome: faker.helpers.arrayElement([
    'approve',
    'review',
    'reject',
    'null',
    'unknown',
  ]),
  scenario: {
    id: faker.string.uuid(),
    name: faker.word.noun(),
    description: faker.lorem.sentence(),
    version: Number(faker.number.int(10)),
  },
  rules: Array.from({ length: Number(faker.number.int(500)) }).map(() => ({
    name: faker.word.noun(),
    description: faker.lorem.sentence(),
    score_modifier: Number(faker.number.int(100)),
    result: Math.random() < 0.5,
  })),
  score: Number(faker.number.int(100)),
}));

export const listDecisionsFake: typeof listDecisions = () =>
  Promise.resolve(fakeDecisions);

export const getDecisionFake: typeof getDecision = (decisionId) => {
  const decision = fakeDecisions.find(({ id }) => decisionId === id);
  if (decision) return Promise.resolve(decision);
  return Promise.reject('NotFound');
};