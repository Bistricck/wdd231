const courses = [
    { subject: 'CSE', number: 110, title: 'Introduction to Programming', credits: 2, certificate: 'Web and Computer Programming', description: '...', technology: ['Python'], completed: true },
    { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, certificate: 'Web and Computer Programming', description: '...', technology: ['HTML', 'CSS'], completed: true },
    { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, certificate: 'Web and Computer Programming', description: '...', technology: ['Python'], completed: true },
    { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, certificate: 'Web and Computer Programming', description: '...', technology: ['C#'], completed: true },
    { subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2, certificate: 'Web and Computer Programming', description: '...', technology: ['HTML', 'CSS', 'JavaScript'], completed: false },
    { subject: 'WDD', number: 231, title: 'Frontend Web Development I', credits: 2, certificate: 'Web and Computer Programming', description: '...', technology: ['HTML', 'CSS', 'JavaScript'], completed: false }
  ];
  
  const container = document.getElementById("courses-container");
  const creditDisplay = document.getElementById("total-credits");
  
  function renderCourses(filter) {
    let filtered = courses;
    if (filter !== "all") {
      filtered = courses.filter(course => course.subject === filter);
    }
  
    let html = '';
    let totalCredits = 0;
  
    filtered.forEach(course => {
      const completedClass = course.completed ? 'completed' : '';
      html += `
        <div class="course-card ${completedClass}">
          <h3>${course.subject} ${course.number}</h3>
          <p><strong>${course.title}</strong></p>
          <p>${course.description}</p>
          <p><strong>Credits:</strong> ${course.credits}</p>
          <p><strong>Tech:</strong> ${course.technology.join(', ')}</p>
        </div>
      `;
      totalCredits += course.credits;
    });
  
    container.innerHTML = html;
    creditDisplay.textContent = totalCredits;
  }
  
  document.querySelectorAll('.filter-buttons button').forEach(btn =>
    btn.addEventListener('click', () => renderCourses(btn.dataset.filter))
  );
  
  // Initial render
  renderCourses('all');
  