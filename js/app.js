const container = document.getElementById('projects-container');

function renderProjects() {
    container.innerHTML = projects.map(project => `
        <div class="project-card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tags">
                ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
            </div>
            <a href="${project.link}" target="_blank">View Project</a>
        </div>
    `).join('');
}

renderProjects();