const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const { getUsers, getUserById, createUser, deleteUser, updateUser } = require("../controllers/userController");

// Visualizar os usuarios 
router.get("/", getUsers);

// Visualizar um usuario por id
router.get("/:id", getUserById);

// Criar um novo usuario
router.post("/", createUser);

// Editar um usuario por id
router.put("/:id", updateUser);

// Deletar um usuario por id
router.delete("/:id", deleteUser)

module.exports = router