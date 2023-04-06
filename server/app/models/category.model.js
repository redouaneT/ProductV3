module.exports = (connex, Sequelize) => {
	const Category = connex.define("category", {
		name: {
			type: Sequelize.STRING,
		},
	})

	return Category
}
