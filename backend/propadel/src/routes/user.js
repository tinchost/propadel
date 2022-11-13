
const express = require("express");
const  userSchema = require('../models/user'); // 2
const router = express.Router();



////////////////////Create USERS///////////////////////////////////////////
//create user -  ruta/endpoint
router.post('/users',(req,res) => {
   const user= userSchema(req.body);
user
   .save() //guardamos en la base
   .then((data) => res.json(data))
   .catch((error) => res.json({message: error }));
});

////////////////////get all users///////////////////////////////////////////

router.get('/users',(req,res) => {
userSchema
   .find() //guardamos en la base
   .then((data) => res.json(data))
   .catch((error) => res.json({message: error }));
});

////////////////////get a user by id///////////////////////////////////////////

router.get('/users/:id',(req,res) => {
   const {id}=req.params;

   userSchema
      .findById(id) //guardamos en la base
      .then((data) => res.json(data))
      .catch((error) => res.json({message: error }));
   });


/////////////////////////////update a user///////////////////////////////////////////////

router.put('/users/:id',(req,res) => {   //PUT
   const {id}=req.params;
   const { name,age,email } = req.body;

   userSchema
      .updateOne({ _id: id }, { $set: {name,age,email} }) //updateone //$set para actualizar
      .then((data) => res.json(data))
      .catch((error) => res.json({message: error }));
   });

///////////////////////////delete a user/////////////////////////////////////////////////

router.delete('/users/:id',(req,res) => {  
   const {id}=req.params;
   userSchema
      .remove({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({message: error }));
   });
   
////////////////////////////////////////////////////////////////////////////
module.exports = router;