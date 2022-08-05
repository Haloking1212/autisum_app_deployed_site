class AnswerNum {
    constructor() {
        this.numAnswer = 0;
    }

    get numAnswer() {
        return this.numAnswer;
    }

    incrementAnswer() {
        console.log(this.numAnswer);
        return this.numAnswer += 1;
    }
}

export default AnswerNum;