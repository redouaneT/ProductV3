module.exports = (connex, Sequelize) => {
	const Product = require("./product.model")(connex, Sequelize)
	const Category = require("./category.model")(connex, Sequelize)

	Product.belongsTo(Category, { foreignKey: "category_id", as: "category" })
	Category.hasMany(Product, { foreignKey: "category_id", as: "products" })

	return {
		Product,
		Category,
	}
}
