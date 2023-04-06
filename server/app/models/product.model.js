module.exports = (connex, Sequelize) => {
	const Product = connex.define("product", {
		name: {
			type: Sequelize.STRING,
		},
		img_url: {
			type: Sequelize.STRING,
		},
		price: {
			type: Sequelize.REAL,
		},
		description: {
			type: Sequelize.TEXT,
		},
		category_id: {
			type: Sequelize.INTEGER,
		},
	})

	return Product
}
