const router = require('express').Router();
// destructure method names out of imported object
const {
    getAllPizza,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
} = require('../../controllers/pizza-controller');

// set up get and post routes at /api/pizzas
router
    .route('/')
    .get(getAllPizza)
    .post(createPizza);

// set up get one, put, and delete routes at /api/pizzas/:id
router
    .route('/:id')
    .get(getPizzaById)
    .put(updatePizza)
    .delete(deletePizza);


module.exports = router;