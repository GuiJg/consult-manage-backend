const express = require("express");
const router = express.Router();
const Schedule = require("../models/scheduleModel");
const { getSchedules, getScheduleById, createSchedule, deleteSchedule, updateSchedule } = require("../controllers/scheduleController");

// Visualizar todas as consultas 
router.get("/", getSchedules);

// Visualizar uma consulta por id
router.get("/:id", getScheduleById);

// Criar uma nova consulta
router.post("/", createSchedule);

// Editar uma consulta por id
router.put("/:id", updateSchedule);

// Deletar uma consulta por id
router.delete("/:id", deleteSchedule)

module.exports = router 