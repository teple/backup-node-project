// import Promise from 'bluebird';

import L from '../../common/logger'
import { Person } from '../../models/Person';

// let id = 0;
// interface Example {
//   id: number,
//   name: string
// };

// const examples: Example[] = [
//     { id: id++, name: 'example 0' }, 
//     { id: id++, name: 'example 1' }
// ];

export class DbTestService {

  async all(): Promise<Person[]> {
    L.info('すべてのユーザー');

    try {
      const persons: Person[] = await Person.findAll();
      return persons;

    } catch (error) {
      console.error(error);
      throw Error('USERS FIND ERROR');
    }
  }

  async byId(id: number): Promise<Person> {
    L.info(`ユーザー ${id}`);
    
    try {
      const person: Person = await Person.findOne({
        where: {
          id: id
        }
      });
      return person;
      
    } catch (error) {
      console.error(error);
      throw Error('USER FIND ERROR');
    }
  }

  async create(personObj: Person): Promise<Person> {
    L.info(`ユーザー生成 ${personObj.lastName} ${personObj.lastName}`);
    
    try {
      personObj;
      const createdPerson = await Person.create(personObj)
      return createdPerson;
    } catch (error) {
      console.error(error);
      throw Error('USER CREATE ERROR');
    }
  }
}

export default new DbTestService();