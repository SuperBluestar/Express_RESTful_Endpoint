import { Route } from './core/route';

// Controllers
import { ProductController } from '../controllers/product/product';

// Middlewares
import { HTTP_METHODS } from './core/methods';

export const PRODUCT_ROUTES:Array<any>  = [
    new Route({
        url: '/products',
        middlewares: [],
        method: HTTP_METHODS.GET,
        controller: ProductController.get
    }),
    new Route({
        url: '/products',
        middlewares: [],
        method: HTTP_METHODS.POST,
        controller: ProductController.create
    }),
    new Route({
        url: '/products/:id',
        middlewares: [],
        method: HTTP_METHODS.GET,
        controller: ProductController.getUser
    }),
    new Route({
        url: '/products',
        middlewares: [],
        method: HTTP_METHODS.UPDATE,
        controller: ProductController.update
    }),
    new Route({
        url: '/products/:id',
        middlewares: [],
        method: HTTP_METHODS.DELETE,
        controller: ProductController.delete
    }),
];