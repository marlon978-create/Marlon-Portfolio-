console.log("JS IS WORKING");
const filterButtons = document.querySelectorAll(".project-filters button");
const projects = document.querySelectorAll(".project");

filterButtons.forEach(button =>
{
    button.addEventListener("click", () => 
    {
        filterButtons.forEach(btn => 
        {
            btn.classList.remove("active");
        });
        button.classList.add("active");
        const filter = button.dataset.filter;
        projects.forEach(project => 
        {
            const category = project.dataset.category;
            if(filter === "all" || category === filter)
            {
                project.style.display = "flex";
            }
            else
            {
                project.style.display = "none";
            }
        });
    });
});
const searchInput = document.querySelector(".project-search");
searchInput.addEventListener("input", () => 
    {
        const searchTerm = searchInput.value.toLowerCase();
        projects.forEach (project => 
            {
                const projectText = project.textContent.toLowerCase();
                if(projectText.includes(searchTerm))
                {
                    project.style.display = "flex";
                }
                else
                {
                    project.style.display = "none";
                }
            });
    });