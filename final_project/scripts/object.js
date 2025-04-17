const student = {
    firstName: "Shared",
    lastName: "Ordaz",
    school: "BYU Pathway",
    class: "WDD131"
  };

  let footer = document.querySelector('footer');
  let b = document.createElement('b');

  b.style.color = 'white';

  b.textContent = `Student: ${student.firstName} ${student.lastName} - Assigment of ${student.class} at ${student.school}`;

  footer.append(b);