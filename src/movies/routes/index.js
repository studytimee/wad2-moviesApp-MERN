import express from 'express';
import MoviesController from '../controllers';
import AccountsController from '../../accounts/controllers';

const createMoviesRouter = (dependencies) => {
    const router = express.Router();
    // load controllers with dependencies
    const moviesController = MoviesController(dependencies);
    const accountsController = AccountsController(dependencies);


    router.route('/*')
        .all(accountsController.verifyToken); //ADD THIS: require token for all routes

    router.route('/')
        .get(accountsController.verifyToken, moviesController.find);
        console.log("verify token and call getMovies");

    router.route('/')
        .get(moviesController.find);


    router.route('/:id')
        .get(moviesController.getMovie);


    router.route('/:id')
        .post(moviesController.updateAccount);

    router.route('/upcoming')
        .get(accountsController.verifyToken, moviesController.getUpcomingMovies);
        console.log("verify token and call upcoming");

    return router;
};
export default createMoviesRouter;