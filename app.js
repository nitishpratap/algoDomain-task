const express = require('express');
const res = require('express/lib/response');
const app = express();
require('./Database/connection');
const { json, type } = require('express/lib/response');
const product = require('./Models/productSchema');

const PORT = 8000 || process.env.PORT;
app.use(express.json());


//for seller

//adding a product

app.post('/addaproduct:id', async (req, res) => {
    try {
        const seller = req.params.id.split(':')[1];
        // console.log(seller)
        // req.body.sellerId = seller;
        const result = new product(req.body);
        result.sellerId = seller;
        const resul = await result.save();
        res.status(201);
        res.send(resul);

    } catch (e) {
        res.status(400);
        res.send(e);
        console.log(e)
    }
})


//adding multiple products

app.post('/addMultipleproduct:id', async (req, res) => {
    try {
        const seller = req.params.id.split(':')[1];

        const productArr = req.body;

        for (let i = 0; i < productArr.length; i++) {
            prod = new product(productArr[i]);
            prod.sellerId = seller;
            const addedProduct = await prod.save();
        }
        res.status(201);
        res.send(productArr);
        console.log(productArr)

    } catch (e) {
        res.status(400);
        res.send(e);
        console.log(e);
    }
})


app.get('/productByName:productName', async (req, res) => {
    try {
        let n = req.params.productName.split(':')[1]
        // console.log(n)
        const result = await product.find({ name: n });
        res.status(200);
        res.send(result);
    } catch (e) {
        res.status(400);
        res.send(e);
        console.log(e);
    }

})

//finding product by category
app.get('/productByCategory:productCategory', async (req, res) => {
    try {
        let c = req.params.productCategory.split(':')[1]
        console.log(c)
        const result = await product.find({ category: c });
        res.status(200);
        res.send(result);
    } catch (e) {
        res.status(400);
        res.send(e);
        console.log(e);
    }

})


//finding product by type
app.get('/productByType:productType', async (req, res) => {
    try {
        let t = req.params.productType.split(':')[1]
        console.log(t)
        const result = await product.find({ProductType: t });
        res.status(200);
        res.send(result);
    } catch (e) {
        res.status(400);
        res.send(e);
        console.log(e);
    }

})


//finding product by price range

app.get('/productByRange:min:max', async (req, res) => {
    try {
        let r = req.params

        // console.log(b);
        // console.log(r.max)
        const minMAx = r.max;
        minMaxArr = minMAx.split(":")
        const min = minMaxArr[0];
        const max = minMaxArr[1];
        const result = await product.find({price:{$gte:min,$lte:max}})
        res.status(200);
        res.send(result);
    } catch (e) {
        res.status(400);
        res.send(e);
        console.log(e);
    }

})




//view products added by a seller
app.get('/getProduct:sellerId', async(req,res)=>{
    try{
    let sId = req.params.sellerId.split(':')[1];
    const result = await product.find({sellerId:sId});
    res.status(200);
    res.send(result);
    console.log(result)
    }catch(e){
        res.send(e);
    }
})



//update product by seller
app.put('/update:sellerId:id',async(req,res)=>{
    try{
    const temp = req.params
    const t = temp.id
    const tepmArr  = t.split(':')
    const sId = tepmArr[0];
    const proId = tepmArr[1];
    console.log(proId)
    console.log(sId)
    
    const result = await product.updateOne({_id:proId,sellerId:sId},{$set:req.body});
    res.send(result);
    console.log(result)

    }
    catch(e){
        res.send(e);
        res.status(400);
    }

})


//delete a product by seller
app.delete('/delete:sellerId:id', async(req,res)=>{
    try{
        const temp = req.params;
        const t = temp.id;
        const tempArr = t.split(':')
        const sId = tempArr[0];
        const pId = tempArr[1];
        // console.log(pId)

        const result =  await product.deleteOne({_id:pId,sellerId:sId});
        res.send(result);
        res.status(200);
        console.log(result)
    }
    catch(e){
        res.send(e);
        res.status(400)
    }
}) 


app.listen(PORT, () => {
    console.log(`connection is established at ${PORT}`);
})
