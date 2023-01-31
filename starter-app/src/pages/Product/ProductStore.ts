import {
    makeAutoObservable,
} from "mobx";
import {IProduct} from "../../interfaces/products";
import * as productApi from "../../api/modules/products";


class ProductStore {
    products: IProduct = {id: "1", name:"", year:"", color:"",pantone_value:""};
    id: string | undefined = "";
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    setId = async (id: string | undefined ) => {
        this.id = id;
        await this.prefetchData();
    }

    setProduct = (product: IProduct) => {
        this.products = product;
    }

    setIsLoading = (flag: boolean) => {
        this.isLoading = flag;
    }

    prefetchData = async () => {
        if (this.id) {
            try {
                this.setIsLoading(true);
                const res = await productApi.getById(this.id)
                this.setProduct(res.data);
            } catch (e) {
                if (e instanceof Error) {
                    console.error(e.message)
                }
            }
            this.setIsLoading(false);
        }
    };
}

export default ProductStore;