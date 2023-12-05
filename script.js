const jobData = [
  {
    img: "images/comp.png",
    title: "Web Developer",
    company: "Tech Co.",
    location: "Remote",
    posted: "2 days ago",
  },
  {
    img: "images/comp.png",
    title: "Web Developer",
    company: "Tech Co.",
    location: "Remote",
    posted: "2 days ago",
  },
  {
    img: "images/comp.png",
    title: "Web Developer",
    company: "Tech Co.",
    location: "Remote",
    posted: "2 days ago",
  },
  {
    img: "images/comp.png",
    title: "UX Designer",
    company: "Design Studio",
    location: "San Francisco",
    posted: "3 days ago",
  },
  {
    img: "images/comp.png",
    title: "UX Designer",
    company: "Design Studio",
    location: "San Francisco",
    posted: "3 days ago",
  },
  {
    img: "images/comp.png",
    title: "UX Designer",
    company: "Design Studio",
    location: "San Francisco",
    posted: "3 days ago",
  },
  {
    img: "images/comp.png",
    title: "Software Engineer",
    company: "Design Studio",
    location: "San Francisco",
    posted: "3 days ago",
  },
  {
    img: "images/comp.png",
    title: "Software Engineer",
    company: "Design Studio",
    location: "San Francisco",
    posted: "3 days ago",
  },
  {
    img: "images/comp.png",
    title: "Software Engineer",
    company: "Design Studio",
    location: "San Francisco",
    posted: "3 days ago",
  },
];

// Render job listings when the page is loaded
window.addEventListener("load", renderJobListings);

const itemsPerPage = 6; // Number of items per page
const jobListingsContainer = document.getElementById("jobListings");
const paginationContainer = document.getElementById("pagination");

function renderJobListings(pageNumber) {
  // Clears existing job listings and pagination
  jobListingsContainer.innerHTML = "";
  paginationContainer.innerHTML = "";

  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedJobData = jobData.slice(startIndex, endIndex);

  paginatedJobData.forEach((job) => {
    const jobCard = document.createElement("div");
    jobCard.classList.add("w-full", "sm:w-1/2", "md:w-1/3", "p-4");

    jobCard.innerHTML = `
      <div class="bg-white p-6 rounded-lg shadow-md flex flex-col">
        <div class="flex items-center mb-4">
          <img src="${
            job.img || "default-image.jpg"
          }" alt="Company Logo" class="mb-2 rounded-md h-1/5 w-1/5">
          <div class="ml-4">
            <h2 class="text-xl font-bold mb-2">${job.company}</h2>
          </div>
        </div>
        <div>
        <h5 class="text-xl mb-2">${job.title}</h5>
          <p class="text-gray-700 mb-2">${job.location}</p>
          <p class="text-gray-500"><small>Posted ${job.posted}</small></p>
        </div>
        <button class="bg-blue-400 text-white px-4 py-2 rounded-md mt-4 self-end transition duration-300 ease-in-out transform hover:scale-105">Apply Now</button>
      </div>
    `;

    jobListingsContainer.appendChild(jobCard);
  });

  // Render pagination buttons
  const totalPages = Math.ceil(jobData.length / itemsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.innerText = i;
    pageButton.classList.add(
      "mx-2",
      "px-3",
      "py-1",
      "bg-gray-300",
      "rounded",
      "cursor-pointer"
    );
    pageButton.addEventListener("click", () => renderJobListings(i));
    paginationContainer.appendChild(pageButton);
  }
}

// Renders job listings on page load
window.addEventListener("load", () => renderJobListings(1));
