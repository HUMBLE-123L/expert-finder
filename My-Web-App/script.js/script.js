function navigate(section) {
  const sections = ['home', 'post', 'login', 'signup'];
  sections.forEach(id => {
    document.getElementById(id + 'Section').classList.remove('active');
  });
  document.getElementById(section + 'Section').classList.add('active');
}

// Dark Mode
document.getElementById('toggleDark')?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Expert Search
document.getElementById('searchForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const expert = document.getElementById('expertType').value.trim();
  const location = document.getElementById('location').value.trim();
  const output = document.getElementById('searchResults');
  output.innerHTML = `<h3>Results for "${expert}" in "${location}":</h3>
    <ul>
      <li>👷 ${expert} - John Doe (📍 ${location})</li>
      <li>👷 ${expert} - Jane Smith (📍 ${location})</li>
    </ul>`;
});

// Post Job
document.getElementById('postJobForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('jobTitle').value.trim();
  const desc = document.getElementById('jobDescription').value.trim();
  const loc = document.getElementById('jobLocation').value.trim();
  const contact = document.getElementById('contactInfo').value.trim();
  const posted = document.getElementById('postedJobs');

  const jobHTML = `<div class="job">
    <h4>${title}</h4>
    <p>${desc}</p>
    <p><strong>Location:</strong> ${loc}</p>
    <p><strong>Contact:</strong> ${contact}</p>
    <hr>
  </div>`;

  posted.innerHTML = jobHTML + posted.innerHTML;
  document.getElementById('postJobForm').reset();
});

// Login & Signup (mock handlers)
document.getElementById('loginForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Logged in (demo only)");
});

document.getElementById('signupForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Signed up (demo only)");
});


function navigate(section) {
  const sections= ['home','post','login','signup','dashboard'];
  sections.forEach(id => {
    document.getElementById(id + 'Section')?.classList.remove('active');
  });
  document.getElementById(section + 'Section')?.classList.add('active');

  revealOnScroll();
}