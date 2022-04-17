const students = [
  { name: "john 0", score: 45 },
  { name: "john 1", score: 33 },
  { name: "john 2", score: 55 },
  { name: "john 3", score: 65 },
  { name: "john 4", score: 85 },
];
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);
document.getElementById('tableBody').appendChild(table);

let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "name";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "score";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
thead.appendChild(row_1);


let sumscore = 0;

function passedStudents(studentList) {
  const finalArr = [];
  for (let i = 0; i < studentList.length; i++) {
    if (studentList[i].score < 50) {
      const obj = {
        name: studentList[i].name,
        score: studentList[i].score + 10,
      };
      finalArr.push(obj);
      
     

   

} else {
      finalArr.push(studentList[i]);
    }
  }
  console.log(finalArr);
  for (let i = 0; i < finalArr.length; i++) {
    if (finalArr[i].score >= 50) {
      console.log(finalArr[i].name , finalArr[i].score,  " has passed");
      sumscore= sumscore+finalArr[i].score
      let row_2 = document.createElement('tr');
      let row_2_data_1 = document.createElement('td');
      row_2_data_1.innerHTML = studentList[i].name;
      let row_2_data_2 = document.createElement('td');
      row_2_data_2.innerHTML = studentList[i].score;
      row_2.appendChild(row_2_data_1);
      row_2.appendChild(row_2_data_2);
      tbody.appendChild(row_2);

    } else {
      console.log(finalArr[i].name, finalArr[i].score, " failed the test");
    }
  }
}
console.log(passedStudents(students))
console.log('Total Score of all the passed students is ' , sumscore)

