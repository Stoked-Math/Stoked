// /courseGuide.js
(async function generateCourseGuide() {
  const container = document.querySelector(".course-guide");
  if (!container) return;

  // Get course folder name from URL (e.g., "algebra-skills")
  const pathParts = window.location.pathname.split("/");
  const courseFolder = pathParts[3] || "";
  console.log("pathParts:", pathParts);
  console.log("courseFolder0:", pathParts[1]);
  console.log("courseFolder1:", pathParts[2]);
  console.log("courseFolder2:", pathParts[3]);
  console.log("wholePath", `/${courseFolder}/courseData.js`);
  if (!courseFolder) return;

  // Dynamically load the correct courseData.js file
  try {
    await import(`/course-pages/${courseFolder}/courseData.js`);
  } catch (error) {
    console.error("Could not load courseData.js:", error);
    return;
  }

  if (typeof courseData === "undefined") return;

  function formatName(name) {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  }

  const currentPath = window.location.pathname.toLowerCase();

  const guideHTML = `
    <div class="course-box ${currentPath.includes(courseFolder) && currentPath.endsWith(`${courseFolder}.html`) ? "active" : ""}"
         style="background:${courseData.titleColor}"
         data-url="/course-pages/${courseFolder}/${courseFolder}.html">
      ${courseData.title}
    </div>
    ${courseData.units
      .map((unit) => {
        if (!unit.name) return "";
        const unitSlug = formatName(unit.name);
        const isUnitActive = currentPath.includes(unitSlug);
        const unitUrl = `/course-pages/${courseFolder}/${unitSlug}.html`;

        return `
          <div class="unit-box ${isUnitActive ? "active" : ""}"
               style="background:${unit.color}"
               data-url="${unitUrl}">
            ${unit.name}
          </div>
          ${unit.lessons
            .map((lesson, index) => {
              const lessonSlug = formatName(lesson);
              const lessonUrl = `/course-pages/${courseFolder}/${lessonSlug}.html`;
              const isLessonActive = currentPath.includes(lessonSlug);
              return `
                <div class="lesson-box ${index % 2 === 0 ? "even" : "odd"} ${isLessonActive ? "active" : ""}"
                     data-url="${lessonUrl}">
                  ${lesson}
                </div>`;
            })
            .join("")}
        `;
      })
      .join("")}
  `;

  container.innerHTML = guideHTML;

  // Navigation
  document
    .querySelectorAll(".lesson-box, .unit-box, .course-box")
    .forEach((box) => {
      box.addEventListener("click", () => {
        const url = box.dataset?.url;
        if (url) window.location.href = url;
      });
    });
})();
