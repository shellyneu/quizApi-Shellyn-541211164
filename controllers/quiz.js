const db = require("../models");
const quiz = require("../models/quiz");
const Quiz = db.quizzes;

// CREATE : menambahkan data kedalam tabel quiz
exports.create = async (req, res) => {
  try {
    const data = await Quiz.create(req.body);
    res.json({
      message: "quiz created successfully.",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null,
    });
  }
};

// READ : Menampilkan suatu data sesuai model db
exports.getAll = async (req, res) => {
  try {
    const quizzes = await Quiz.findAll();
    res.json({
      message: "quiz retrieved successfully.",
      data: quizzes,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null,
    });
  }
};

// mengambil data sesuai id tertentu
exports.findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true }); //ByPk = berdasar primary key
    res.json({
      message: "quiz retrieved successfully with id=${id}",
      data: quiz,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occurred while retrieving",
      data: null,
    });
  }
};

// mengubah data
exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true });
    await quiz.update(req.body, {
      where: { id },
    });
    res.json({
      message: "quiz updated successfully.",
      data: quiz,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null,
    });
  }
};

// hapus data
exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true });
    quiz.destroy();
    res.json({
      message: "quiz deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occured while retrieving",
      data: null,
    });
  }
};

exports.getByCategoryId = async (req, res) => {
  const id = req.params.id;
  try {
    const quizzes = await Quiz.findAll({
      where: {
        categoryId: id,
      },
    });
    res.json({
      message: `quiz retrieved successfully with categoryId=${id}`,
      data: quizzes,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occured while retrieving",
      data: null,
    });
  }
};

exports.getByLevelId = async (req, res) => {
  const id = req.params.id;
  try {
    const quizzes = await Quiz.findAll({
      where: {
        LevelId: id,
      },
    });
    res.json({
      message: "quiz retrieved successfully with level",
      data: quizzes,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Some error occured while retrieving",
      data: null,
    });
  }
};
