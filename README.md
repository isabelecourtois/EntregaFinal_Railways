# E-COMMERCE API

This API contains a set of endpoints that allow developers to interact with and consume data related to e-commerce. It provides access to product information, orders, users, and shopping carts.

## ENDPOINTS  


-----------------------

### Users

-----------------------

**POST** /api/usuario/login

*	Endpoint: `/usuario/login`
*	Method: `POST`
*	Controller: `login`
*	Configured in: ` usuario.js `

> Example:
{
  "email": "hola@gmail.com",
  "password": "123"
}

**POST** /api/usuario/register

*	Endpoint: `/usuario/register`
*	Method: `POST`
*	Controller: `register`
*	Configured in: ` usuario.js `

> Example:  
{  
   "email": " hola@gmail.com  
   "nombre": "Juan Perez",  
   "direccion": "El mundo",  
   "edad": 108,  
   "telefono": "123456",  
   "foto": "www.foto.com",  
   "password": "123"  
  }

**GET** /api/usuario

*	Endpoint: `/usuario/`
*	Method: `GET`
*	Controller: `getUsers`
*	Configured in: `usuario.js`


-----------------------

### Products

-----------------------

**GET** /api/productos

*	Endpoint: `/productos`
*	Method: `GET`
*	Controller: `getProducts` 
*	Configured in: ` productos.js `

**GET** /api/productos/:id

*	Endpoint: `/productos/:id` with param: `id`
*	Method: `GET`
*	Controller: `getProductById`
*	Configured in: ` productos.js `

**POST** /api/productos

*	Endpoint: `/productos` 
*	Method: `POST`
*	Controller: `postProduct`
*	Configured in: ` productos.js `

> Example:  
{  
   "nombre":"Cámara",  
   "descripcion":"Cámara Kodak ",  
   "codigo":"abc123",  
   "foto":"www.camara.com",  
   "precio":123,  
   "stock":12  
}

**DELETE** /api/productos/:id

*	Endpoint: `/productos/:id` with param: `id`
*	Method: `DELETE`
*	Controller: `deleteProduct`
*	Configured in: ` productos.js `

**PUT** /api/productos/:id

*	Endpoint: `/productos/:id` with param: `id`
*	Method: `PUT`
*	Controller: `updateProduct`
*	Configured in: `productos.js`

> You should send an object with only the attributes that you want to change in the body:

{
  "precio":"456",
  "stock":34
}



-----------------------

### Carts

-----------------------

**GET** /api/carrito/:id/productos

*	Endpoint: `/carrito/:id/productos` with param:`id`
*	Method: `GET`
*	Controller: `getProductsInCart`
*	Configured in: `carrito.js` and `producto.js`

**POST** /api/carrito/:id/productos/:id_producto

*	Endpoint: `/carrito/:id/productos/:id_producto` with two params: `id_producto` and `id`
*	Method: `POST`
*	Controller: `postProductInCart`
*	Configured in: `carrito.js` and `producto.js`

**DELETE** /api/carrito/:id/productos/:id_producto

*	Endpoint: `/carrito/:id/productos/:id_producto` with two params: `id_producto` and `id`
*	Method: `DELETE`
*	Controller: `deleteProductInCart`
*	Configured: `carrito.js` and `producto.js`

**POST** /api/carrito

*	Endpoint: `/carrito/`
*	Method: `POST`
*	Controller: `postCart`
*	Configured: `carrito.js`

**DELETE** /api/carrito/:id

*	Endpoint: `/carrito/:id` with param: `id`
*	Method: `DELETE`
*	Controller: `deleteCart`
*	Configured in: `carrito.js`

-----------------------

### Orders

-----------------------

**POST** /api/pedido/: id_usr

*	Endpoint: `/pedido/`
*	Method: `POST`
*	Controller: `carrito`
*	Configured: `orden.js`
