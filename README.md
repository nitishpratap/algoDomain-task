# algoDomain-task
This repository have solution of my task.

Step to use this APIs ->
1-> install dependencies like Express, mongoose ,nodemon using the commond 
npm i express
npm i mongoose
npm i nodemon

After installation of all dependencies run command nodemon app.js in command prompt.
make sure to run your project at PORT 8000.

open Postman.
create a new collection in Postman.
now use following commond for maniputation with REST API.

**For Adding products** 

localhost:8000/addaproduct:1234 

**For adding multiple products**

localhost:8000/addMultipleproduct:510

**Finding product by name**

localhost:8000/productByName:Dell Latitude 5420

**Finding product by category**

localhost:8000/productByCategory:Electronics

**Finding product by type**

localhost:8000/productByType:Laptop

**Finding product with a price range**

localhost:8000/productByRange:200:1000

**Finding product by seller with his particular id **

localhost:8000/getProduct:4564566

**Updating a product by seller**

localhost:8000/update:1234:625f6afcd7664b957b122ec3


**deleting a product by seller**

localhost:8000/delete:510:625e5db19800c705fe38fb70

**I have uploaded database in .JSOn with name product.json**

Thanks.

