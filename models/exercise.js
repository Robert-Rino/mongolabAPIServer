'use strict';
let mongoose = require('mongoose');

let schema = new mongoose.Schema({
courseId:{ type:Number, required:true },
chapterId:{ type:Number, required:true },
userId:{ type:Number, required:true },
exerciseId:{ type: Number, required: true },
exerciseType:{ type:String, required: true },
studentAns:{ type:Array, required:true },
correctAns:{ type:Object, require: true },
execTotalCount:{ type:String, required:true },
exerciseOrder:{ type:String, required:true },
getScore:{ type:Boolean, required:true },
deviceSource:{ type:String, required:false },
time:{ type: Number, required: true }, });
let exerciseRecord = mongoose.model('exerciseRecord', schema);

module.exports = exerciseRecord;
