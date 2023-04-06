const dbConfig = require("../config/db.config.js")
const Sequelize = require("sequelize")

const connex = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
	host: dbConfig.HOST,
	dialect: dbConfig.dialect,
	port: dbConfig.PORT,
	operatorAliases: false,
})

const db = {}

db.Sequelize = Sequelize
db.connex = connex
db.products = require("./product.model.js")(connex, Sequelize)
db.categories = require("./category.model.js")(connex, Sequelize)

// Set up the associations between the Product and Category models
db.products.belongsTo(db.categories, {
	foreignKey: "category_id",
	as: "category",
})

db.categories.hasMany(db.products, {
	foreignKey: "category_id",
	as: "products",
})

module.exports = db
