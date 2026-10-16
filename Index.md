1.i Age, the age of the candidate
ii. Score, the score of the candidate
iii. hasLaptop, the candidate has laptop
iv. hasInternet, the candidate has internet
v. completedApplication, the candidate has completed the application

part 1: Plain English 
An applicant can only get the Rootwork Tech scholarship if they meet all five requiremennts:

They are at least 18 years old.
They scored at least 60.
They completed their application.
They have access to their own laptop.
They have internet access.
If even one of these is missing, the applicant is "Not eligible", no matter how good the other details are.

If the applicant meet all five requirements, and also scored 85 or higher, they are a "Priority candidate".

If they meet all five requirements but scored below 85, they are "Eligible".

Anyone else is "Not eligible".

Part 2 : Pseudocode
START
SET age, score, hasLaptop, hasInternet, completeApplication 

IF age is at least 18
   AND completedApplication is true
   AND hasLaptop is true
   AND hasInternet is true
   THEN
    IF score is 60; print "Eligible";
    If score is 85 or above; print "priority candidate"
  ELSE
       PRINT "Not Eligible"
ELSE
    PRINT "Not eligible"

END
Part 4: Test cases
Younger than 18: age = 17, score = 90, hasLaptop = true, hasInternet = true, completedApplication = true. Not eligible.

Score below 60: age = 21, score = 55, hasLaptop = true, hasInternet = true, completedApplication = true. Not eligible

No internet: age = 21, score = 78, hasLaptop = true, hasInternet = false, completedApplication = true. Not eligible

Incomplete application: age = 21, score = 78, hasLaptop = true, hasInternet = true, completedApplication = false. Not eligible

No laptop: age = 21, score = 78, hasLaptop = false, hasInternet = true, completedApplication = true.Expected result : Not eligible, Actual result : Not eligible.

Exactly 18: age = 18, score = 78, hasLaptop = true, hasInternet = true, completedApplication = true.Expected result : Eligible, Actual result : Eligible

Exactly 60: age = 21, score = 60, hasLaptop = true, hasInternet = true, completedApplication = true. Expected result :Eligible, Actual result : Eligible

Priority candidate: age = 21, score = 90, hasLaptop = true, hasInternet = true, completetedApplication = true. Expected result : Priority candidate, Actual result : priority candidate

Part 5
what each variables represents -age:how old the applicant is -score: the applicant test's score -hasLaptop: true if the applicant has a laptop -hasInternet: true if the applicant has internet access -completedApplication: true if the application is complete

What each condition does -The first if checks that all requirements are mets and the score is 85 or higher. It prints "priority candidate" -The else if checks the same requirements with a score of 60 or higher. it prints "Eligible" -The else catches everyone else and prints "Not eligible"

Logical operators used I useed && (AND) to joins the conditions, and >= to compare numbers.

Why the order matters The priority check comes first. a score of 90 also passes the eligible check, so if eligible came first, priority candidate would print "Eligible" and never get their own result.

Why a high score can still fail Every requirement must be met. someone with a score of 95 but no laptop is Not eligible.

Difference between && and || && is true only if all conditions are true. || is true if at least one condition is true. I used && because applicants must meet all requirements.

No mistake encountered 
