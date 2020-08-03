class CheckResult {
    constructor() {
        this.questionIdx = '';
        this.answerIdx = '';
        this.testing = '';
    }

    getQuestionIdx () {
        return this.questionIdx;
    }
    setQuestionIdx (questrionIdx) {
        this.questionIdx = questrionIdx;
    }

    getAnswerIdx () {
        return this.answerIdx;
    }
    setAnswerIdx (answerIdx) {
        this.answerIdx = answerIdx;
    }

    toConnectTesting (testing) {
        this.testing = testing;
    }

    checkWinJp (i,j) {
        this.setQuestionIdx(this.testing.getQuestionJp(i,j));
        this.setAnswerIdx(this.testing.getAnswerJp(i,j));
    }
}
