const { ObjectId } = require('mongodb');
const mongodb = require('../db/connect');

const getAll = async (req, res, next) => {
   try {
      const result = await mongodb.getDb().db().collection('contacts').find();
      result.toArray().then((lists) => {
         res.setHeader('Content-Type', 'application/json');
         res.status(200).json(lists);
      });
   } catch {
      console.log("Error on getting all contacts", err)
   }

};

const getSingle = async (req, res, next) => {
   const userId = new ObjectId(req.params.id)
   try {
      const result = await mongodb
         .getDb()
         .db()
         .collection('contacts')
         .find({ _id: userId });
      result.toArray().then((lists) => {
         res.setHeader('Content-Type', 'application/json');
         res.status(200).json(lists[0]);
      });
   }
   catch (err) {
      console.log("Error on getting a single contact", err)
   }
};

module.exports = { getAll, getSingle };