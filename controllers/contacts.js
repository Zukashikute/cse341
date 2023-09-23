const { ObjectId } = require('mongodb');
const mongodb = require('../db/connect');

const getAll = async (req, res, next) => {
   try {
      const result = await mongodb.getDb().db('webservices').collection('contacts').find();
      result.toArray().then((lists) => {
         res.setHeader('Content-Type', 'application/json');
         res.status(200).json(lists); // we just need the first one (the only one)
      });
      console.log(result);
   } catch {
      console.log("Error on getting all contacts", err)
   }

};

const getSingle = async (req, res, next) => {
   const userId = new ObjectId(req.params.id)
   const result = await mongodb
      .getDb()
      .db('webservices')
      .collection('contacts')
      .find({ _id: userId });
   result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
   });
};

module.exports = { getAll, getSingle };