import Evaluation from "./Evaluation";
import Teacher from "./Teacher";

export default class Exam extends Evaluation {
  constructor(score: number, teacher: Teacher) {
    super(score, teacher);
  }

  
}