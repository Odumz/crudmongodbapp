// constants
const express = require('express');
const crudController = require('./controllers');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the my crud application with mongo db. This is the profile service',
  });
});


/**
 * /api/v1/profiles:
 *  get:
 *    summary: Route for getting all records
 *    responses:
 *      '200':
 *        description: OK
 */
 router.get('/profiles', crudController.getAll);


/**
 * /api/v1/create:
 *  post:
 *    summary: Route for creating a record
 *    responses:
 *      '200':
 *        description: OK
 */
router.post('/create', crudController.add);


/**
 * /api/v1/edit/${id}:
 *  put:
 *    summary: Route for editing a record
 *    responses:
 *      '200':
 *        description: OK
 */
 router.put('/edit/$id', crudController.edit);


/**
 * /api/v1/delete:
 *  delet:
 *    summary: Route for deleting a record
 *    responses:
 *      '200':
 *        description: OK
 */
router.delete('/delete', crudController.delete);

module.exports = router;