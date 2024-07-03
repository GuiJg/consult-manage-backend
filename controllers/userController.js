const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

//busca todos os usuarios
const getUsers = asyncHandler(async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch{
        res.status(500);
        throw new Error("error.message");
    }
});

//busca um usuario por id
const getUserById = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user) {
            res.status(404);
            throw new Error('Não foi possivel encontrar nenhum usuario com o id: ${id}');
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500);
        throw new Error("error.message");
    }
});

//cria um novo usuario
const createUser = asyncHandler(async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500);
        throw new Error("error.message");
    }
})

//editar um usuario por id
const updateUser = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, req.body, { new: true });
        if (!user) {
            res.status(404);
            throw new Error('Não foi possivel encontrar nenhum usuario com o id: ${id}');
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500);
        throw new Error("error.message");
    }
});

//deletar um usuario por id
const deleteUser = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            res.status(404);
            throw new Error('Não foi possivel encontrar nenhum usuario com o id: ${id}');
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500);
        throw new Error("error.message");
    }
});

module.exports = { 
    getUsers,
    getUserById,    
    createUser,
    deleteUser,
    updateUser
 };