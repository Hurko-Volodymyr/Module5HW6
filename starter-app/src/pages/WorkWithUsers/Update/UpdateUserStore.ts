import { makeAutoObservable } from "mobx";
import * as userApi from "../../../api/modules/users";
import { IUserUpdate } from "../../../interfaces/WebUsersOperations/userUpdate";

class UpdateUserStore{
    user: IUserUpdate = {id: '', name: '', job: '', updatedAt:''};

    constructor() {
        makeAutoObservable(this);
    }

    changeName = (value: string) => {
        this.user.name = value;
    }

    changeJob = (value: string) => {
        this.user.job = value;
    }

    update = async () => {
        try {
            const result = await userApi.updateUser(this.user);
            this.user = result;
        } catch (e) {
            if (e instanceof Error) {
                console.error(e.message)
            }
        }
    }

}

export default UpdateUserStore;