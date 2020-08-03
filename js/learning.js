class Learning {
    constructor(arrJp, arrVn) {
        this.japanese = arrJp;
        this.vietnamese = arrVn;
        this.countI = 0;
        this.countJ = 0;
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

    clearAns() {
        document.getElementById("answer1").innerHTML ='';
        document.getElementById("answer2").innerHTML ='';
        document.getElementById("answer3").innerHTML ='';
        document.getElementById("answer4").innerHTML ='';
        document.getElementById("answer5").innerHTML ='';
        document.getElementById("btnStart").innerHTML = '';
    }

    display0() {
        this.setCountI(this.countI + 1);
        this.setCountJ(0);
        this.display1(arrJp, arrVn);
        this.clearAns();
        document.getElementById("step").innerHTML = 'Learning';
        document.getElementById("title").innerHTML = `Bảng chữ hàng ${arrJp[this.countI]}`;
    }

    display1(arrJp, arrVn) {
        document.getElementById("step").innerHTML = 'Learning';
        document.getElementById("title").innerHTML = `Bảng chữ hàng ${arrJp[this.countI]}`;
        document.getElementById("btnStart").innerHTML = '';
        let i = this.getCountI();
        let j = this.getCountJ();
        document.getElementById("display1").innerHTML = arrJp[i][j];
        document.getElementById("display2").innerHTML = arrVn[i][j];
        if (this.countJ < arrJp[i].length - 1) {
            document.getElementById("btnNext").innerHTML = '<br><button type="button" onclick="learning.display1(arrJp, arrVn)">Next</button>';
            this.setCountJ(this.countJ + 1);
            j++;
        } else {
            document.getElementById("btnNext").innerHTML = '<br><button type="button" onclick="testing.display0(arrJp, arrVn)">Test</button>';
            j++;
        }
    }
}