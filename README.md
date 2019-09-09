# Food Delivery server

Project on Node.js (Express.js) using MongoDB

## Requirements
- Node.js
- Express.js
- Webpack
- NPM
## Installation
```bash
git clone https://github.com/OlegGap/food-delivery-server-goit
```
```bash
cd ./food-delivery-server-goit
```
```bash
npm install
```
###### Open http://localhost:3001 in browser

## Development and Deployment
```bash
npm start #Start development
```
```bash
npm run debug #Start development with debugger
```
## Opportunities

You can use the following routers:

```bash
/users #POST request #register a new user
```
###### Body:
```bash
 {
  "firstName": String,
  "lastName": String,
  "telephone": String,
  "nickName": String,
  "location": String,
  "password": String,
  "email": String,
  "favoriteProducts": [String],
  "viewedProducts": [String],
  "orders": {
      "user": String,
      "products": [String],
      "deliveryType": String,
      "deliveryAdress": String
      }
  }
```


```bash
/users/:id #PUT request #update information about user
```
---
```bash
/products #POST request #craeate a new product
```
###### Body:
```bash
 {		
        "sku": Number,
        "name": String,
        "description": String,
        "price": Number,
        "currency": "UAN",
        "creatorId": Number
        "categories": [String],
        "likes": Number
}
```


```bash
/products/:id #GET request #get product
```
```bash
/products/:id #PUT request #update information about product
```
---
```bash
/orders #POST request #craeate a new order
```
###### Body:
```bash
 {
  "creator": <userId>,
  "productsList": [
    { 
      product: <productId>,
      type: "M" || "XL" || "XXL",
      itemsCount: <number> 
    }
  ],
  "deliveryType": "delivery" || "office",
  "deliveryAdress": <some address>,
  "sumToPay": Number (пример: "600"),
  "status": "inProgress" || "declined" || "finished" || "failed"
 }
```

```bash
/orders/:id #GET request #get order
```
