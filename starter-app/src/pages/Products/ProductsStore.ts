import { makeAutoObservable, runInAction } from "mobx";
import { IProduct } from "../../interfaces/products";
import * as productApi from '../../api/modules/products';

class ProductsStore {
    products: IProduct[] = []
    currentPage = 1;
    totalPages = 0;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
        runInAction(this.prefetchData)
    };

    async changePage(page: number) {
        this.currentPage = page;
        await this.prefetchData()
    };

    prefetchData = async () => {
        try {
            this.isLoading = true;
            const result = await productApi.getByPage(this.currentPage);
            this.products = result.data;
            this.totalPages = result.total_pages
        }
        catch (e) {
            if (e instanceof Error) {
                console.error(e.message);
            };
        };
        this.isLoading = false;
    };
};

export default ProductsStore;