import {server} from "../index";

class RequestsProducts {
    getProducts() {
        return server.get('/')
    }
}

export default new RequestsProducts()
