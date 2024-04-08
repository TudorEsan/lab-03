"use strict";
function evaluateStudentOverallScore(testScores, attendanceRate, participatedInGroupProject) {
    var overallScore = 0; // Base score
    var averageScore = 0;
    // Calculate average test score
    for (var i = 0; i < testScores.length; i++) {
        // 1st decision point: for loop itself
        if (testScores[i] < 50) {
            // 2nd decision point: early exit if a test score is below passing
            console.log("Failed due to a score below 50.");
            return "Fail";
        }
        averageScore += testScores[i];
    }
    averageScore /= testScores.length;
    if (averageScore > 75) {
        // 3rd decision point
        overallScore += 2;
    }
    if (attendanceRate > 90) {
        // 4th decision point
        overallScore += 1;
    }
    if (participatedInGroupProject) {
        // 5th decision point
        overallScore += 2;
    }
    if (overallScore >= 5) {
        return "Pass with Distinction";
    }
    else {
        return "Pass";
    }
}
var result = evaluateStudentOverallScore([90, 85, 92], 95, true);
console.log(result);
