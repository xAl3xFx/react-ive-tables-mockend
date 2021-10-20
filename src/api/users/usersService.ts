import users from '../../data/users.json';

export interface IUserService{
    getAllUsers: (offset: number, limit: number, filters: Record<string, string | number>) => Partial<typeof users.data>;
}

const userService : IUserService = {
    getAllUsers: (offset : number, limit : number, filters : Record<string, string | number>) => {
        const result = users.data.slice(offset, limit);
        return result;
    }
};

export { userService }

