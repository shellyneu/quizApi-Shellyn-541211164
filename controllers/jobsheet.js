const { where } = require("sequelize");
const db = require("../models");
const quiz = require("../models/quiz");
const Quiz = db.quizzes;

exports.submitOne = async (req, res) => {
  //data dari inputan
  const jobsheet = {
    quizId: req.body.quizId,
    answer: req.body.answer,
  };

  try {
    var quiz = await Quiz.findOne({
      where: {
        id: req.body.quizId,
      },
    });
    if (req.body.answer == quiz.key) {
      res.status(200).json({
        message: `benar`,
      });
    } else {
      res.status(200).json({
        message: `Jawaban benar adalah ${quiz.key}`,
      });
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

exports.submitMany = async (req, res) => {
  // Data dari inputan
  const jobsheet = {
    quizId: req.body.quizId,
    answer: req.body.answer,
  };

  try {
    let benar = 0;
    let totalSoal = jobsheet.quizId.length;

    for (let i = 0; i < totalSoal; i++) {
      const quiz = await Quiz.findOne({
        limit: 1,
        where: {
          id: jobsheet.quizId[i],
        },
        order: [["id", "DESC"]],
      });

      console.log(quiz);

      // Check if quiz is null before accessing its properties
      if (quiz && quiz.key == jobsheet.answer[i]) {
        benar = benar + 1;
      }
    }

    res.status(200).json({
      message: `Benar ${benar} dari ${totalSoal} soal`,
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
