var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    userId: Number,
    courseId: Number,
    chapterId: Number,
    studentAns: Array,
    correctAns: String,
    exerciseId: Number,
    exerciseType: String,//有ratio /checkbox /text
    getScore: Boolean,//是否有答對
    execOrder: Number,//練習題內題號
    obj_description: String,//預留欄位
    execTotalCount: String,
    source: String,//紀錄api呼叫來源
    time: { type: Date, default: Date.now },
  });

var ExerciseRecord = mongoose.model('exercise_records', schema);

module.exports = ExerciseRecord;
