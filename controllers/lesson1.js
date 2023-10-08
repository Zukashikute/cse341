const jaredRoute = (req, res) => {
   // #swagger.description = 'Home route'
   res.send("Jared Balajadia")
}

const iraRoute = (req, res) => {
   // #swagger.description = 'Other extra route from Lesson 1'
   res.send("Ira Balajadia")
}

module.exports = { jaredRoute, iraRoute }; 