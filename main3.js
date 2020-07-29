const todos = [
  {
    id: 1,
    text:'Take out trash',
    isCompleted: true
  },

  {
    id: 2,
    text:'Meeting with boss',
    isCompleted: true
  },

  {
    id: 3,
    text:'Dentist appt',
    isCompleted: false
  },
]

//console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// for loop

for ( let i = 0; i <10; i++){
		console.log(`For loop number: ${i}`);
}

// while loop

let i = 0;
while (i < 10) {
	console.log(`While loop numer: ${i}`);
	i++;
}

