const express = require("express");
const router = express.Router();
const db = require("../../models")

//Retrieve all items api/products
//Gets from db
router.get("/", (req, res) =>{
  db.Item.findAll({})
  .then(products => {
    console.log("items tester");
    res.json(products);
  })
});

router.get("/:abb", (req, res) =>{
  db.Item.findAll({
    where:{
      category:req.params.abb
    }
  })
  .then(products => {
    console.log("item category tester");
    res.json(products);
  })
})

//Create a new product to the db
//Post to the db
router.post("/", (req, res) =>{
  console.log(req.body);
  const newProduct = new Product({
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
    tcgID: req.body.tcgID,
  })
  newProduct.save().then(product => res.json(product))
})


history=(input, working, res)=>{
  const quantSold = working.itemsSold.filter(x=>x.id===input.id);
  console.log("quantSold");
  console.log(quantSold);
  console.log(input);
  console.log(working.itemsSold.length);
  console.log(working)
  db.History.create({
    customerID:working.customer.id,
    customerName:working.customer.name,
    cardName:input.name,
    item_id:input.id,
    quantity:quantSold[0].quantity,
    price_each:input.price
  }).then((result)=>{
    counterForUpdate++;
    if(counterForUpdate ===targetForUpdate){
      counterForUpdate = 0;
      targetForUpdate=0;
      res.json(result);
    }
  })
}

let counterForUpdate = 0;
let targetForUpdate = 0;
//Final Sale procedures
//put and record sale
router.put("/", (req,res)=>{
  const working = req.body.pass;
  const arrFoo= working.itemsSold.map(element=>element.id)
  const itemsSoldArr = working.itemsOwned.filter(each=>{
    return arrFoo.indexOf(each.id)>=0;
  })
  targetForUpdate = working.itemsSold.length
  console.log(working)
  itemsSoldArr.forEach(element=>{
    console.log(element);
    db.Item.update({
      quantity:element.quantity
    },{where:{id:element.id}})
      .then(()=>history(element, working, res));
       
      })
  })

//Update an item
//router

//Delete a product
router.delete("/:id", (req, res) =>{
  console.log("deleting");
  console.log(req.params.id);
  db.Item.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(()=> res.json({sucess:true}))
    .catch(err => res.json(err))
})

module.exports = router;