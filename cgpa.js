let counter = 1;
  
function addSemester() {
  let addNew = document.createElement("form");
  addNew.classList.add("add_new", `key-${counter}`);
  const course_name = `
  <form class="add_new key-${counter}">
    <input type="number" placeholder="Semester-num" class="semester key-${counter}" required>
        <input type="number" placeholder="Credit Unit" class="credit-units key-${counter}" required>
        <input type="number" placeholder="GPA Units" class="GPA-units key-${counter}" required>
    </select>  
  </form>
  `;
  addNew.innerHTML = course_name;
  document.getElementById("semesters").appendChild(addNew);
  counter++;
}

function removeSemester() {
  let mainForm = document.querySelector("form.add_new");
  mainForm.remove();
}

  
   function calcCgpa() {
    const list_of_credits = []
          const list_of_gpa = []
          const sum_gpis = []

          let total_gpi = 0
          let total_credits = 0
          let max_cgpa = 0

          const CGPAPARAGRAPH = document.getElementById("cgpa-calc");
          const all_credits = document.querySelectorAll('input.credit-units');
          const ALLGPA = document.querySelectorAll('input.GPA-units');


          all_credits.forEach((e) => {
            let Value = parseInt(e.value); 
           
       
            total_credits += Value;
            list_of_credits.push(Value);
            console.log(Value + "value:")
          });

          ALLGPA.forEach((e) => {
         console.log('im hereeeeeeeeeeee')
            let value = parseFloat(e.value);
            console.log(value + 'gpa')
             value = value.toFixed(2)
            list_of_gpa.push(value)

          });



          for (let i = 0; i < list_of_gpa.length; i++) {
            let gpa = list_of_gpa[i]
            let creduts = list_of_credits[i]
            let gpi_a = creduts * gpa
            sum_gpis.push(gpi_a)
            total_gpi += gpi_a
          }
          console.log(ALLGPA + all_credits + '   f' + list_of_credits + '   p' + list_of_gpa )

          max_cgpa = total_credits * 10

          const cgpa = (total_gpi / max_cgpa)  *10
          console.log(cgpa +"u   "+max_cgpa)
    if (cgpa >= 0){
      CGPAPARAGRAPH.textContent = "Your CGPA is " + cgpa.toFixed(2);   
    } else {
      CGPAPARAGRAPH.textContent = "Please enter your correct grade and credit units";    
    }
    
  }
  