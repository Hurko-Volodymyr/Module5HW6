import { makeAutoObservable } from "mobx";
import * as userApi from "../../../api/modules/users";
import { IUserCreate } from "../../../interfaces/WebUsersOperations/userCreate";

class CreateUserStore{
    user: IUserCreate = {id: '', name: '', job: '', createdAt:''};

    constructor() {
        makeAutoObservable(this);
    }

    changeName = (value: string) => {
        this.user.name = value;
    }

    changeJob = (value: string) => {
        this.user.job = value;
    }

    create = async () => {
        try {
            const result = await userApi.createUser(this.user);
            this.user = result;
        } catch (e) {
            if (e instanceof Error) {
                console.error(e.message)
            }
        }
    }

}

export default CreateUserStore;