const Schedule = require("../models/scheduleModel");
const asyncHandler = require("express-async-handler");

// buscar todas as consultas 
const getSchedules = asyncHandler(async (req, res) => {
    try {
        const schedules = await Schedule.find({});
        res.status(200).json(schedules);
    } catch{
        res.status(500);
        throw new Error("error.message");
    }
}); 

// buscar consulta por id
const getScheduleById = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const schedule = await Schedule.findById(id);
        if (!schedule) {
            res.status(404);
            throw new Error('Não foi possivel encontrar nenhuma consulta com o id: ${id}');
        }
        res.status(200).json(schedule);
    } catch (error) {
        res.status(500);
        throw new Error("error.message");
    }
});

// criar uma nova consulta
const createSchedule = asyncHandler(async (req, res) => {
    try {
        const schedule = await Schedule.create(req.body);
        res.status(200).json(schedule);
    } catch (error) {
        res.status(500);
        throw new Error("error.message");
    }
})

// editar uma consulta por id
const updateSchedule = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const schedule = await Schedule.findByIdAndUpdate(id, req.body, { new: true });
        if (!schedule) {
            res.status(404);
            throw new Error('Não foi possivel encontrar nenhuma consulta com o id: ${id}');
        }
        res.status(200).json(schedule);
    } catch (error) {
        res.status(500);
        throw new Error("error.message");
    }
});

// deletar uma consulta por id
const deleteSchedule = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const schedule = await Schedule.findByIdAndDelete(id);
        if (!schedule) {
            res.status(404);
            throw new Error('Não foi possivel encontrar nenhuma consulta com o id: ${id}');
        }
        res.status(200).json(schedule);
    } catch (error) {
        res.status(500);
        throw new Error("error.message");
    }
});

module.exports = { 
    getSchedules, 
    getScheduleById, 
    createSchedule, 
    updateSchedule, 
    deleteSchedule 
}