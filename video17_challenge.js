//assigning grade and calculate the percentage

const assignGrade= function(mypercent) {
    if(mypercent<=100 && mypercent>=90){
        return 'A'
    }
    else if(mypercent<90 && mypercent>=80){
        return 'B'
    }
    else if(mypercent<80 && mypercent>=70){
        return 'C'
    }
}


let currentMarks=100;
let totalMarks=100;

const getMyGrade = function(currentMarks, totalMarks) {
    let mypercent=(currentMarks/totalMarks)*100;
    var obtainpercent=assignGrade(mypercent);
    console.log(obtainpercent)
}


getMyGrade(currentMarks, totalMarks)