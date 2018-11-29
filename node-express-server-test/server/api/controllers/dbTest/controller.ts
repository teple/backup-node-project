import DbTestService from '../../services/dbTest.service';
import { Request, Response } from 'express';
import { Person } from '../../../models/Person';

export class Controller {
  async allPerson(req: Request, res: Response): Promise<void> {
    // DbTestService.all().then(r => res.json(r));
    try {
      const persons: Person[] = await DbTestService.all();
      res.status(200).json(persons);
      
    } catch (error) {
      console.error(error);
      res.status(500).end();
    }

  }

  async findPerson(req: Request, res: Response): Promise<void> {
    // DbTestService.byId(req.params.id).then(r => {
    //   if (r) res.json(r);
    //   else res.status(404).end();
    // });
    try {
      const persons: Person = await DbTestService.byId(req.params.id);
      res.status(200).json(persons);
      
    } catch (error) {
      console.error(error);
      res.status(500).end();
    }

  }

  async createPerson(req: Request, res: Response): Promise<void> {
    try {
      const createdPerson: Person = await DbTestService.create(req.body);
      res.status(201)
      // .location(`/api/v1/persons/${createdPerson.id}`)
      .json(createdPerson);
      
    } catch (error) {
      console.error(error);
      res.status(500).end();
    }
    
    // DbTestService.create(req.body.name).then(r =>
    //   res,
    //     .status(201)
    //     .location(`/api/v1/dbTest/${r.id}`)
    //     .json(r),
    // );
  }

  // updatePerson(req: Request, res: Response): void {
  //   DbTestService.create(req.body.name).then(r =>
  //     res
  //       .status(201)
  //       .location(`/api/v1/dbTest/${r.id}`)
  //       .json(r),
  //   );
  // }

  // deletePerson(req: Request, res: Response): void {
  //   DbTestService.create(req.body.name).then(r =>
  //     res
  //       .status(201)
  //       .location(`/api/v1/dbTest/${r.id}`)
  //       .json(r),
  //   );
  // }
}
export default new Controller();
