const salary = document.getElementById('#salary');
const output = document.getElementById('#salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function(){
    output.textContent = salary.value;
});
