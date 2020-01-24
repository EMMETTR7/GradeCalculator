

function currentGrade(){
    var hwGrades= document.getElementById("hwgrades").value;
    var hwArray=stringToArray(hwGrades);
    var hwGrade=average(hwArray);
    colorOfRow("homeworkrow" , hwGrade);

    var cwGrades= document.getElementById("cwgrades").value;
    var cwArray=stringToArray(cwGrades);
    var cwGrade=average(cwArray);
    colorOfRow("classworkrow" , cwGrade);

    var testGrades= document.getElementById("testgrades").value;
    var testArray=stringToArray(testGrades);
    var testGrade=average(testArray);
    colorOfRow("testsrow" , testGrade);

    var participationGrades= document.getElementById("pgrades").value;
    var participationArray=stringToArray(participationGrades);
    var participationGrade=average(participationArray);
    colorOfRow("participationrow" , participationGrade);

    var projectGrades= document.getElementById("projectgrades").value;
    var projectArray=stringToArray(projectGrades);
    var projectGrade=average(projectArray);
    colorOfRow("projectrow" , projectGrade);

    var hwWeight=(document.getElementById("hwweight").value)/100;
    var cwWeight=(document.getElementById("cwweight").value)/100;
    var testWeight=(document.getElementById("testweight").value)/100;
    var pWeight=(document.getElementById("pweight").value)/100;
    var projectWeight=(document.getElementById("projectweight").value)/100;
    var finalWeight = document.getElementById("finalweight").value;

    var homework = hwGrade * hwWeight;
    console.log(homework);
    var classwork = cwGrade * cwWeight;
    console.log(classwork);
    var tests = testGrade * testWeight;
    console.log(tests);
    var participation = participationGrade * pWeight;
    console.log(participation);
    var projects = projectGrade * projectWeight;
    console.log(projects);


    var sumOfWeight=hwWeight+cwWeight+testWeight+pWeight+projectWeight+(finalWeight/100);

    var currentGrade = (homework+classwork+tests+participation+projects)/(100-finalWeight)*100;
    console.log(currentGrade);
    var dGrade = document.getElementById("desiredgrade").value;

    if (sumOfWeight !=1 || isNaN(sumOfWeight) || isNaN(currentGrade) ||isNaN(dGrade)){
        document.getElementById("currentgrade").innerHTML = "Sorry you have either entered an incorrect weight/grade value or your weight is not a number"
    } else {
        document.getElementById("currentgrade").innerHTML = "Your current grade is " + currentGrade + "%";
        return currentGrade;
    }


}

function finalGradeNeeded(){
    var finalWeight = document.getElementById("finalweight").value;
    var desiredGrade = document.getElementById("desiredgrade").value;
    var cgrade = currentGrade();
    var finalGradeNeeded = ((desiredGrade-((cgrade/100)*(100-finalWeight)))/finalWeight)*100;

    if (isNaN(cgrade) || isNaN(desiredGrade)) {
        document.getElementById("finalgrade").innerHTML = "Your current grade or desired grade is not an acceptable value";
    } else {
        document.getElementById("finalgrade").innerHTML = "You need a " + finalGradeNeeded + "% to get " + desiredGrade + "% in the class.";
    }
}



function stringToArray(string){
    var x=string.split(",");
    for (var i=0;i<x.length;i++){
        x[i]=parseInt(x[i]);
    }
    console.log(x);
    return x;
}


function average(arr){
    var sum=0;
    for(var i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    var averages=sum/arr.length;
    console.log(averages);
    return averages;
}

function colorOfRow(row, grade){
    if(grade>=90){
        document.getElementById(row).style.backgroundColor = "green";
    }
    if(grade>=80 && grade<90){
        document.getElementById(row).style.backgroundColor = "yellow";
    }
    if(grade>=70 && grade<80){
        document.getElementById(row).style.backgroundColor = "darkorange";
    }
    if(grade<70){
        document.getElementById(row).style.backgroundColor = "red";
    }
}