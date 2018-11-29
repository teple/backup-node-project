import express from 'express';
import controller from './controller';

export default express.Router()
    .post('/', controller.createPerson)
    .get('/', controller.allPerson)
    .get('/:id', controller.findPerson);
    // .put('/:id', controller.updatePerson)
    // .delete('/:id', controller.deletePerson);