// Datos de los proyectos
const projects = [
   // Puedes añadir hasta 16 proyectos aquí siguiendo el mismo formato
];

// Función para cargar proyectos en la web
function loadProjects() {
  const projectList = document.getElementById('projectList');
  projects.forEach(proj => {
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project';

    let mediaElement;
    if (proj.type === 'video') {
      mediaElement = document.createElement('video');
      mediaElement.src = proj.src;
      mediaElement.autoplay = true;
      mediaElement.muted = true;
      mediaElement.loop = true;
      mediaElement.playsInline = true;
    } else {
      mediaElement = document.createElement('img');
      mediaElement.src = proj.src;
      mediaElement.alt = proj.title;
    }

    projectDiv.appendChild(mediaElement);

    const infoDiv = document.createElement('div');
    infoDiv.className = 'project-info';

    const title = document.createElement('h3');
    title.textContent = proj.title;
    infoDiv.appendChild(title);

    const desc = document.createElement('p');
    desc.textContent = proj.description;
    infoDiv.appendChild(desc);

    projectDiv.appendChild(infoDiv);
    projectList.appendChild(projectDiv);
  });
}

// Carga proyectos al cargar la página
window.onload = loadProjects;
