const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function(){
    output.textContent = salary.value;
});
class EmployeePayrollData {
    constructor(...params){
    this.name = params[0];
    this.profileImage = params[1];
    this.gender = params[2];
    this.department = params[3];
    this.salary = params[4];
    this.startDate = params[5];
    this.notes = params[6];
}
    get name(){
        return this._name;
    }

    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
         if(nameRegex.test(name))
         this._name = name;
         else
         throw "**** Name is Incorrect****";
    }
    get profileImage(){
        return this._profileImage;
    }

    set profileImage(profileImage){
        this._profileImage = profileImage;
         }

    get gender(){
        return this._gender;
    }
    set gender(gender){
        let genderRegex = RegExp('^[female|male]+$');
        if(genderRegex.test(gender))
        this._gender = gender;
        else
        throw "**** Gender is Incorrect****";
    }

    get department(){
        return this._department;
    }

    set department(department){
        this._department = department;
    }
    get salary(){
        return this._salary;
    }
    set salary(salary){
        let salaryRegex = RegExp('^[1-9][0-9]*$');
        if(salaryRegex.test(salary))
        this._salary = salary;
        else
        throw "**** Salary is Incorrect****";
    }
    get startDate(){
        return this._startDate;
    }
    set startDate(startDate){
        this._startDate = startDate;
    }
    get notes(){
        return this._notes;
    }
    set notes(notes){
        this._notes = notes;
    }
    
    toString(){
        const option = {year: 'numeric', month: 'long', day: 'numeric'};
        const employeeDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-us", option);
        return "Name =" + this.name + ", Profile Image = " + this.profileImage + ", Gender = " + this.gender + ", Department = " + this.department + ", Salary = " + this.salary + ", Start Date = " + employeeDate + ", Notes = " + this.notes;
    }
}

    function  save() {
        let employeeName = document.querySelector('#name').value;
        let profileList = document.querySelectorAll('input[name="profile"]');
        let emploeeProfileImage;
        for(let image of profileList){
            if(image.checked){
                emploeeProfileImage = image.value;
                break;
            }
        }

        let genderList = document.querySelectorAll('input[name="gender"]');
        let employeeGender;
        for(let gender of genderList){
            if(gender.checked){
                employeeGender = gender.value;
                break;
            }
        }
        let department = document.querySelectorAll('.checkbox:checked');
        let employeeDepartment = new Array();
        for(let department of departmentList){
            if(department.checked){
                employeeDepartment.push(department.value);
            }
        }

        let employeeSalary = document.querySelector('#salary').value;

        let day = document.querySelector('#day').value;
        let month = document.querySelector('#month').value;
        let year = document.querySelector('#year').value;
        let employeeStartDate = new Date(year, month, day);

        let employeeNotes = document.querySelector('#notes').value;

        try{
            let EmployeePayrollData = new EmployeePayrollData(employeeName, emploeeProfileImage,employeeGender, employeeDepartment, employeeSalary, employeeStartDate, employeeNotes);
            console.log(EmployeePayrollData.toString());
        } catch (e){
            console.error(e)
        }
        }