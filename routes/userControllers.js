const express = require("express");
const router = express.Router();
const findById = require("../services/userServices");
const helloMiddleware = (req, res, next) => {
    console.log("hello")
}


router.use(helloMiddleware)
router.get("/users", (req, res) => {
    res.send ("Users are here")
})

router.post("/users", (req, res) => {
    console.log(req.body)
    res.send("created user")
})
router.get("/users/:userid", (req, res) => {

    res.send(findById(req.params.userid))
})
module.exports = router;