// JavaScript for dynamic content

// Set the current year dynamically in the footer
const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;

// Set the last modified date dynamically in the footer
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Updated: ${lastModified}`;

// Course List Array
const courses = [
    { code: "WDD 130", name: "Web Fundamentals", credits: 3, completed: true },
    { code: "WDD 131", name: "JavaScript", credits: 3, completed: true },
    { code: "WDD 231", name: "Web Frontend Development", credits: 3, completed: false },
    { code: "CSE 110", name: "Programming Building Blocks", credits: 3, completed: true },
    { code: "CSE 210", name: "Programming with Classes", credits: 3, completed: false },
    { code: "CSE 340", name: "Web Backend Development", credits: 3, completed: false }
];

// Function to render courses dynamically
function renderCourses(filter = "all") {
    const courseList = document.getElementById("course-list");
    courseList.innerHTML = ""; // Clear existing courses

    let filteredCourses = courses;
    if (filter === "wdd") {
        filteredCourses = courses.filter(course => course.code.startsWith("WDD"));
    } else if (filter === "cse") {
        filteredCourses = courses.filter(course => course.code.startsWith("CSE"));
    }

    let totalCredits = 0;
    filteredCourses.forEach(course => {
        const courseDiv = document.createElement("div");
        courseDiv.className = course.completed ? "course completed" : "course";
        courseDiv.innerHTML = `
            <h3>${course.code}</h3>
            <p>${course.name}</p>
            <p>Credits: ${course.credits}</p>
        `;
        courseList.appendChild(courseDiv);
        totalCredits += course.credits;
    });

    document.getElementById("total-credits").textContent = totalCredits;
}

// Event listeners for course filter buttons
document.getElementById("all-courses").addEventListener("click", () => renderCourses("all"));
document.getElementById("wdd-courses").addEventListener("click", () => renderCourses("wdd"));
document.getElementById("cse-courses").addEventListener("click", () => renderCourses("cse"));

// Initial render of all courses
renderCourses();