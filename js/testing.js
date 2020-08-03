class Testing {
    constructor() {
        this.learning = '';
        this.question = '';
        this.answer1 = '';
        this.answer2 = '';
        this.answer3 = '';
        this.answer4 = '';
        this.answer5 = '';
        this.countI = 0;
        this.countJ = 0;
        this.randomQuestion = [];
        this.randomAnswer = [];
        this.countWin = 0;
    }

    getCountI() {
        return this.countI;
    }

    setCountI(countI) {
        this.countI = countI;
    }

    getCountJ() {
        return this.countJ;
    }

    setCountJ(countJ) {
        this.countJ = countJ;
    }

    getRandomQuestion() {
        return this.randomQuestion;
    }

    setRandomQuestion(randomQuestion) {
        this.randomQuestion = randomQuestion;
    }

    getRandomAnswer() {
        return this.randomAnswer;
    }

    setRandomAnswer(randomAnswer) {
        this.randomAnswer = randomAnswer;
    }

    getCountWin() {
        return this.countWin;
    }

    setCountWin(countWin) {
        this.countWin = countWin;
    }

    toConnect(learning) {
        this.learning = learning;
    }

    clearAns() {
        document.getElementById("answer1").innerHTML ='';
        document.getElementById("answer2").innerHTML ='';
        document.getElementById("answer3").innerHTML ='';
        document.getElementById("answer4").innerHTML ='';
        document.getElementById("answer5").innerHTML ='';
        document.getElementById("btnStart").innerHTML = '';
    }

    getRandom(min, max) {
        let arr = [];
        let i = 0;
        while (i <= max) {
            let newNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            if (arr.indexOf(newNumber) === -1) {
                arr.push(newNumber);
                i++;
            }
        }
        return arr;
    }

    getQuestionJp(i, j) {
        document.getElementById("display1").innerHTML = `<h3>${arrJp[i][j]}</h3>`;
        return document.getElementById("display1").innerHTML;
    }

    getQuestionVn(i, j) {
        document.getElementById("display1").innerHTML = `<h3>${arrVn[i][j]}</h3>`;
        return document.getElementById("display1").innerHTML;
    }

    getAnswerJp(i) {
        document.getElementById("answer1").innerHTML = `<input type="radio" name="jp" id=${i}${this.randomAnswer[0]}><label>${arrJp[i][this.randomAnswer[0]]}</label>`;
        document.getElementById("answer2").innerHTML = `<input type="radio" name="jp" id=${i}${this.randomAnswer[1]}><label>${arrJp[i][this.randomAnswer[1]]}</label>`;
        document.getElementById("answer3").innerHTML = `<input type="radio" name="jp" id=${i}${this.randomAnswer[2]}><label>${arrJp[i][this.randomAnswer[2]]}</label>`;
        document.getElementById("answer4").innerHTML = `<input type="radio" name="jp" id=${i}${this.randomAnswer[3]}><label>${arrJp[i][this.randomAnswer[3]]}</label>`;
        document.getElementById("answer5").innerHTML = `<input type="radio" name="jp" id=${i}${this.randomAnswer[4]}><label>${arrJp[i][this.randomAnswer[4]]}</label>`;
        return document.getElementById("answer1").innerHTML;
        document.getElementById("answer2").innerHTML;
        document.getElementById("answer3").innerHTML;
        document.getElementById("answer4").innerHTML;
        document.getElementById("answer5").innerHTML;
    }

    getAnswerVn(i) {
        document.getElementById("answer1").innerHTML = `<input type="radio" name="vn" id=${i}${this.randomAnswer[0]}><label>${arrVn[i][this.randomAnswer[0]]}</label>`;
        document.getElementById("answer2").innerHTML = `<input type="radio" name="vn" id=${i}${this.randomAnswer[1]}><label>${arrVn[i][this.randomAnswer[1]]}</label>`;
        document.getElementById("answer3").innerHTML = `<input type="radio" name="vn" id=${i}${this.randomAnswer[2]}><label>${arrVn[i][this.randomAnswer[2]]}</label>`;
        document.getElementById("answer4").innerHTML = `<input type="radio" name="vn" id=${i}${this.randomAnswer[3]}><label>${arrVn[i][this.randomAnswer[3]]}</label>`;
        document.getElementById("answer5").innerHTML = `<input type="radio" name="vn" id=${i}${this.randomAnswer[4]}><label>${arrVn[i][this.randomAnswer[4]]}</label>`;
        return document.getElementById("answer1").innerHTML;
        document.getElementById("answer2").innerHTML;
        document.getElementById("answer3").innerHTML;
        document.getElementById("answer4").innerHTML;
        document.getElementById("answer5").innerHTML;
    }

    display0(arrJp, arrVn) {
        this.setCountI(learning.getCountI());
        this.setCountJ(0);
        this.setRandomQuestion(this.getRandom(0, 4));
        this.display1(arrJp, arrVn);
    }

    display1(arrJp, arrVn) {
        document.getElementById("step").innerHTML = 'Testing';
        let i = this.getCountI();
        let j = this.randomQuestion[this.countJ];
        document.getElementById("display2").innerHTML = '';
        this.setRandomAnswer(this.getRandom(0, 4));
        if (this.countJ < 4) {
            if (j % 2 == 0) {
                this.getQuestionJp(i, j);
                this.getAnswerVn(i);
            } else {
                this.getQuestionVn(i, j);
                this.getAnswerJp(i);
            }
            document.getElementById("btnNext").innerHTML = '<br><button type="button" onclick="testing.checkResult()">Next</button>';
            this.setCountJ(this.countJ + 1);
        } else if (this.countJ == 4) {
            this.getQuestionJp(i, j);
            this.getAnswerVn(i);
            this.setCountJ(this.countJ + 1);
            document.getElementById("btnNext").innerHTML = '<br><button type="button" onclick="testing.displayResult()">Result</button>';

        }
    }

    checkWin() {
        let strQues = document.getElementById("display1").innerHTML.slice(4, 5);

        let idxAns = '';

        let arrAns1 = document.getElementById("answer1").innerHTML.slice(34, 36);
        let arrAns2 = document.getElementById("answer2").innerHTML.slice(34, 36);
        let arrAns3 = document.getElementById("answer3").innerHTML.slice(34, 36);
        let arrAns4 = document.getElementById("answer4").innerHTML.slice(34, 36);
        let arrAns5 = document.getElementById("answer5").innerHTML.slice(34, 36);

        if (document.getElementById(`${arrAns1}`).checked) {
            idxAns = arrAns1;
        } else if (document.getElementById(`${arrAns2}`).checked) {
            idxAns = arrAns2;
        } else if (document.getElementById(`${arrAns3}`).checked) {
            idxAns = arrAns3;
        } else if (document.getElementById(`${arrAns4}`).checked) {
            idxAns = arrAns4;
        } else if (document.getElementById(`${arrAns5}`).checked) {
            idxAns = arrAns5;
        } else {
            alert("Please select one!!");
        }

        let arrIdxAns = idxAns.split('');
        if (arrJp[arrIdxAns[0]][arrIdxAns[1]] == strQues || arrVn[arrIdxAns[0]][arrIdxAns[1]] == strQues) {
            this.setCountWin(this.countWin + 1);
        }
    }

    checkResult() {
        this.checkWin();
        this.display1(arrJp, arrVn);
    }

    displayResult() {
        this.checkWin();
        document.getElementById("display1").innerHTML = this.getCountWin();
        this.clearAns();
        document.getElementById("step").innerHTML = 'Result';
        if (this.countI < arrJp.length - 1) {
            document.getElementById("btnNext").innerHTML = '<br><button type="button" onclick="learning.display0()">Next Lession</button>';
        } else {
            document.getElementById("btnNext").innerHTML = '<br><button type="button" onclick="testing.finish()">Finish</button>';
        }
        this.setCountWin(0);
    }

    finish() {
        document.getElementById("display1").innerHTML = "To be continute..";
        document.getElementById("display2").innerHTML = "Please wait to module 2";
        this.clearAns();
        document.getElementById("btnNext").innerHTML = '';
    }
}