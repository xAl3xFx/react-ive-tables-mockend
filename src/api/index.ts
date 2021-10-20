import {Express, Router} from 'express'
import { usersRouter } from "./users/usersRouter";

const api : {connect : (path : string, app : Express) => void} = {
    connect : (path : string, app : Express) => {
        const router = Router();

        router.use('/users', usersRouter, (_ : any, res : any) => {
            respond(res);
        });

        app.use(path, router);
    }
};
const respond = (res : any) => {
    if(!res.locals.data){
        res.status(404).send();
    }else{
        res.setHeader('Content-Type', 'application/json');
        res.send(res.locals.data);
    }
};

export { api }