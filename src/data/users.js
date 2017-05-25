import { v4 } from 'uuid';
import { times } from 'lodash';
import Chance from 'chance'; // util for generate random User

const chance = new Chance();

const users = times(20).map(() => ({
    id: v4(),
    name: chance.name(),
    company: chance.word({ length: 6 }) ,
    phone: chance.phone({ formatted: false })
  })
);

export default users;
