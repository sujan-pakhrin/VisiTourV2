
const db = require('./configDb/database')
const cors = require('cors')
const express = require("express");

const app = express();
app.use(express.json());
app.use(cors());
   
app.post("/api/signin1", (req, res) => {
  const email = req.body.UserEmail;
  const password = req.body.UserPassword;

  db.query("SELECT * FROM user WHERE UserEmail=? AND UserPassword=?",
  [email,password], 
  (err, result) => {
    if (err) {
      console.log(err)
    }
    else if (result.length>0) {
        res.sendStatus(result);
    }else{
        res.send({message: "Wrong email/Password!"})
    }
    res.send(result)
  });
});

employee-3 (s.n., employee_name, employee_dob, employee_contact, , employee_salary, employee_hire_date, employee_termination_date, employee_position, department_id*)
department-3 (department_id, department_name)
email-3 (email_id, employee_email, s.n*)
address-3 (address_id, country, district, city)
address_employee-2 (address_id*, s.n*)
Voters-3 (voter_id, voter_name, voter_age, voter_citizenship_no, voter_address)
Voting-3 (voting_year, voting_month, voter_id* voting_location, candidate_id*,  candidate_department_id*)
Candidate-3 (candidate_id, candidate_name, candidate_party)


Employee {EmployeeId (p.k.), Employee_name, DOB, Contact,departmentid(fk)}
EmployeeRole {RoleId (p.k.), RoleName, jobid(f.k)}
EmployeeJob {JobId(p.k.), jobTitle}
Department {Depid(p.k.), DepName}
EmployeeEmail {EmailId(pk), Email, EmployeeId(f.k.)}
EmployeeAddress {AddressId(pk), Address, EmployeeId(f.k.)}
EmployeeHistory {EmployeeHistoryId(p.k.), EmployeeId(f.k.), Depid(f.k.), JobId(f.k.), StartDate, EndDate,status}
Voter {VoterId(p.k.), VoterName}
Candidate {CandidateId(p.k.), CandidateName, CandidateDepId(f.k.)}
Vote {VotingYear, VotingMonth, VoterId(f.k.), CandidateId(f.k.)}
Candidate_Department {candidate DepartmentID(pk), Candidate Department name}


