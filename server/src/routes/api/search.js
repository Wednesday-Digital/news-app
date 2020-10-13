const router = require("express").Router();
const searchController = require("../../controllers/searchController");

// Matches with "/api/books"
router.route("/")
  .get(searchController.search)

module.exports = router;