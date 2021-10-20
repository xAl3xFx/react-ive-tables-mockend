import { Router } from 'express'
import { userService } from "./usersService";

const usersRouter = Router();

usersRouter.post('/:offset/:limit', async (req : any, res : any, next : any) => {
   try{
       const { offset, limit } = req.params;
       const { filters } = req.body;

       const result = userService.getAllUsers(offset, limit, filters);
        res.locals.data = {
            rows: result,
            count: result.length
        }
        next();

   } catch (error: any) {
       console.error(error);
   }
});

export { usersRouter }