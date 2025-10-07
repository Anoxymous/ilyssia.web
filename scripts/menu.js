
function toggleMenu() {
  const menu = document.getElementById("menu-links");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
	const icon = document.getElementById("menu-icon");
  icon.innerHTML = ( menu.style.display === "flex") ? "×" : "≡";
}

function updateActiveLink() {
	
  const links = document.querySelectorAll(".menu-links a");
  const sections = Array.from(links).map(link => document.querySelector(link.getAttribute("href")));
	
	let index = sections.findIndex(section => {
		const rect = section.getBoundingClientRect();
		return rect.top <= 100 && rect.bottom >= 100;
	});

	if (index !== -1) {
		links.forEach(link => link.classList.remove("active"));
		links[index].classList.add("active");
	}
}

document.addEventListener("DOMContentLoaded", () => {
  const menuContainer = document.getElementById("main-menu");

  // Create icon and links container
  const icon = document.createElement("div");
  icon.id = "menu-icon";
  icon.className = "menu-icon";
  icon.innerHTML = "≡";
  icon.onclick = () => toggleMenu();

  const links = document.createElement("div");
  links.id = "menu-links";
  links.className = "menu-links";

  // Find all sections with class 'section' and an id
  const sections = document.querySelectorAll("section.section[id]");
  sections.forEach(section => {
		
    const id = section.id;
    var label = id
      .replace(/-/g, " ")
      .replace(/\b\w/g, c => c.toUpperCase()); // Capitalize each word

		if(section.hasAttribute("data"))
		{
			label = section.getAttribute("data")
		}
    const link = document.createElement("a");
    link.href = "#" + id;
    link.textContent = label;
    links.appendChild(link);
  });

  // Append to menu
  menuContainer.appendChild(icon);
  menuContainer.appendChild(links);

  // Optional: smooth scroll behavior
  links.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
//        links.style.display = "none";
//        icon.classList.remove("active"); // ?
      }
    });
  });
	
	const right_scroll_panel = document.getElementById("right-panel");
	const cont_scroll_panel = document.getElementById("container-panel");

	right_scroll_panel.addEventListener("scroll", updateActiveLink);
	cont_scroll_panel.addEventListener("scroll", updateActiveLink);
  updateActiveLink(); // Initial check
});
