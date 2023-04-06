module.exports = (app) => {
	const category = require("../controllers/category.controller.js")
	const router = require("express").Router()

	router.get("/", category.myFindAll)

	router.post("/", category.myCreate)

	router.get("/:id", category.myFindOne)

	router.delete("/:id", category.myDestroy)

	router.put("/:id", category.myUpdate)

	app.use("/api/category", router)
}
