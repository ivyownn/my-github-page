const container = document.getElementById("projects-container");
const githubUsername = "ivyownn";

async function fetchRepos() {
  try {
    const res = await fetch(
      `https://api.github.com/users/${githubUsername}/repos`
    );
    const repos = await res.json();

    repos.forEach((repo) => {
      const card = document.createElement("div");
      card.classList.add("project-card");

      card.innerHTML = `
        <h2>${repo.name}</h2>
        <p>${repo.description || "No description provided."}</p>
        <a href="${repo.html_url}" target="_blank">View Repository</a>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    container.innerHTML = "<p>Failed to load projects.</p>";
    console.error("GitHub API error:", error);
  }
}

fetchRepos();
