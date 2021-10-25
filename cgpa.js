
let counter = 1;
  
function addSemester() {
  let addNew = document.createElement("form");
  addNew.classList.add("add_new", `key-${counter}`);
  const course_name = `
  <form class="add_new key-${counter}">
    <input type="number" placeholder="Semester-num" class="semester key-${counter}" required>
        <input type="number" placeholder="Credit Unit" class="credit-units key-${counter}" required>
        <input type="number" placeholder="GPA Units" class="GPA key-${counter}" required>
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

  /**
   * @description calculates cgpa
   */
   function calcCgpa() {
    const CGPAPARAGRAPH = document.getElementById("cgpa-calc");
    const GPAUNIT = document.querySelectorAll("select.GPA");
    const UNIT = document.querySelectorAll("input.credit-units");
  
    const courseReport = {};
  
    const listOfGrades = [];
    const listOfUnits = [];
   
  
     
    const cgpa =UNIT[1];
    if (cgpa >= 0){
      CGPAPARAGRAPH.textContent = "Your CGPA is " + cgpa.toFixed(2);   
    } else {
      CGPAPARAGRAPH.textContent = "Please enter your correct grade and credit units";    
    }
    
  }
  
  
  