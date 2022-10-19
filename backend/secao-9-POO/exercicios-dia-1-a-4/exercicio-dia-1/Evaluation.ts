import Teacher from "./Teacher";

export default abstract class Evaluation {
private score: number;
private teacher: Teacher;

constructor(score: number, teacher: Teacher) {
    this.score = score;
    this.teacher = teacher;
    }

   getScore() {
    return this.score;
  }

  getTeacher() {
    return this.teacher;
  }

  setScore(score: number) {
    if( score < 0) {
      throw new Error("Nota inválida");
    }
    this.score = score;
  }

  setTeacher(teacher: Teacher) {
    this.teacher = teacher;
  }

};