// Handle Sign Up
document.querySelector(".btn").addEventListener("click", function(event) {
    event.preventDefault();
    
    const usernameInput = document.querySelector("input[type='text']");
    const passwordInput = document.querySelector("input[type='password']");
    
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username && password) {
        alert("🎉 Successfully Registered! Welcome to DocMateX, " + username + "!");
        
        
        usernameInput.value = "";
        passwordInput.value = "";
    } else {
        alert("Please enter both username and password.");
    }
});


function scrollToSection(event, sectionId) {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const offsetPosition = section.offsetTop - navbarHeight;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

// Network Section Data
let doctors = [
    
        
    
];

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".connect-btn").forEach(function (connectBtn) {
        connectBtn.addEventListener("click", function () {
            connectBtn.style.background = "green";
            showNotification("You are successfully connected🎉");
        });
    });

    document.querySelectorAll(".message-btn").forEach(function (messageBtn) {
        messageBtn.addEventListener("click", function () {
            showNotification("This feature is coming soon, please wait...");
        });
    });

    function showNotification(message) {
        const notification = document.createElement("div");
        notification.textContent = message;
        notification.style.position = "fixed";
        notification.style.bottom = "20px";
        notification.style.right = "20px";
        notification.style.background = "linear-gradient(135deg, #6a11cb, #2575fc)";
        notification.style.color = "white";
        notification.style.padding = "15px 25px";
        notification.style.borderRadius = "8px";
        notification.style.boxShadow = "0px 4px 15px rgba(0,0,0,0.2)";
        notification.style.zIndex = "1000";
        notification.style.opacity = "0";
        notification.style.transform = "translateY(20px)";
        notification.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.opacity = "1";
            notification.style.transform = "translateY(0)";
        }, 100);

        setTimeout(() => {
            notification.style.opacity = "0";
            notification.style.transform = "translateY(20px)";
            setTimeout(() => {
                notification.remove();
            }, 500);
        }, 3000);
    }
});

// Function to Build Portfolio Section
function buildPortfolio() {
    const container = document.getElementById("portfolio-container");
    container.innerHTML = ""; 

    doctors.forEach((doctor) => {
        const card = document.createElement("div");
        card.classList.add("portfolio-card");

        card.innerHTML = `
            <h3>${doctor.name}</h3>
            <p><strong>${doctor.position}</strong></p>
            <p>Specialization: ${doctor.specialization}</p>
            <p>Hospital: ${doctor.hospital}</p>
            <p>Graduation Year: ${doctor.gradYear}</p>
            <p>About: ${doctor.about}</p>
        `;

        container.appendChild(card);
    });
}

// Handle Form Submission
document.getElementById("portfolio-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page refresh

    // Get input values
    const name = document.getElementById("name").value;
    const hospital = document.getElementById("hospital").value;
    const specialization = document.getElementById("specialization").value;
    const gradYear = document.getElementById("gradYear").value;
    const about = document.getElementById("about").value;

    // Create new doctor entry
    const newDoctor = {
        name,
        position: specialization,
        specialization,
        hospital,
        gradYear,
        about
    };

    // Add to array and rebuild portfolio
    doctors.push(newDoctor);
    buildPortfolio();

    // Clear form after submission
    document.getElementById("portfolio-form").reset();
});

// Load Portfolio on Page Load
document.addEventListener("DOMContentLoaded", buildPortfolio);


// Sample Job Data
let jobs = [
    {
        hospital: "CMC Vellore",
        logo: "cmc.jpg", 
        position: "Senior Surgeon",
        position: "Senior Surgeon",
        type: "job",
        experience: "5+ Years",
        requirements: "MD in Surgery, 5+ years of experience, excellent communication skills.",
        applyLink: "https://clin.cmcvellore.ac.in/cmcapp/listapplication.aspx"
    },
    {
        hospital: "AIIMS Delhi",
        logo: "aiims.jpg",
        position: "Medical Intern",
        type: "internship",
        experience: "Fresher",
        requirements: "Must be a final year medical student. Good analytical skills.",
        applyLink: "https://www.aiimsexams.ac.in/info/Recruitments_new.html"
    },
    {
        hospital: "AFMC Pune",
        logo: "afmc.jpg",
        position: "Cardiologist",
        position: "Resident Doctor",
        type: "Full Time Job",
        experience: "2+ Years",
        requirements: "MBBS with 2+ years of clinical experience.",
        applyLink: "https://afmc.nic.in/"
    },
    {
        hospital: "MAMC New Delhi",
        logo: "mamc.jpg",
        position: "Research Intern",
        type: "internship",
        experience: "1 year",
        requirements: "Passion for medical research. Strong documentation skills.",
        applyLink: "https://mamc.delhi.gov.in/mamc-recruitment"
    }
];

// Function to Display Jobs
function displayJobs(filter) {
    const container = document.getElementById("job-container");
    container.innerHTML = ""; // Clear previous listings

    jobs.forEach((job) => {
        if (filter === "all" || job.type === filter) {
            const card = document.createElement("div");
            card.classList.add("job-card");

            card.innerHTML = `
                <h3>${job.hospital}</h3>
                <img src="${job.logo}" alt="${job.hospital} Logo" class="job-logo">
                <p><strong>Position:</strong> ${job.position}</p>
                <p><strong>Type:</strong> ${job.type === "job" ? "Full-Time Job" : "Internship"}</p>
                <p><strong>Experience:</strong> ${job.experience}</p>
                <p><strong>Requirements:</strong> ${job.requirements}</p>
                <a href="${job.applyLink}" target="_blank" class="apply-btn">Apply Now</a>
            `;

            container.appendChild(card);
        }
    });
}

// Function to Filter Jobs
function filterJobs(type) {
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    document.querySelector(`button[onclick="filterJobs('${type}')"]`).classList.add("active");
    displayJobs(type);
}

// Load Jobs on Page Load
document.addEventListener("DOMContentLoaded", () => displayJobs("all"));

// Learning Section Data
const diseases = [
    {
        name: "Diabetes",
        image: "diabetes.jpg",
        description: "A chronic condition that affects the way the body processes blood sugar.",
        remedies: "Exercise, healthy diet, insulin therapy if needed.",
        doctorAdvice: "Monitor blood sugar regularly, avoid sugar-rich food.",
        prescription: "Metformin, insulin therapy, lifestyle changes.",
        learnMoreLink: "https://www.google.com/search?q=Diabetes+causes+and+treatment"
    },
    {
        name: "Hypertension",
        image: "hypertension.jpg",
        description: "A condition in which blood pressure is consistently too high.",
        remedies: "Reduce salt intake, exercise regularly, manage stress.",
        doctorAdvice: "Monitor BP, maintain a healthy diet, avoid alcohol.",
        prescription: "ACE inhibitors, beta-blockers, diuretics.",
        learnMoreLink: "https://www.google.com/search?q=Hypertension+causes+and+treatment"
    },
    {
        name: "Asthma",
        image: "asthma.jpg",
        description: "A condition in which airways narrow and swell, causing breathing difficulty.",
        remedies: "Use inhalers, avoid allergens, stay in clean environments.",
        doctorAdvice: "Always carry an inhaler, avoid smoke and dust.",
        prescription: "Bronchodilators, corticosteroids, antihistamines.",
        learnMoreLink: "https://www.google.com/search?q=Asthma+causes+and+treatment"
    },
    {
        name: "Arthritis",
        image: "arthritis.jpg",
        description: "Inflammation of one or more joints, causing pain and stiffness.",
        remedies: "Physical therapy, anti-inflammatory medications, joint replacement surgery.",
        doctorAdvice: "Maintain a healthy weight, exercise regularly, avoid repetitive movements.",
        prescription: "NSAIDs, corticosteroids, DMARDs.",
        learnMoreLink: "https://www.google.com/search?q=Arthritis+causes+and+treatment"
    },
    {
        name: "Migraine",
        image: "migraine.jpg",
        description: "A headache of varying intensity, often accompanied by nausea and sensitivity to light and sound.",
        remedies: "Rest in a quiet, dark room, over-the-counter pain relievers, prescription medications.",
        doctorAdvice: "Identify and avoid triggers, maintain a regular sleep schedule, manage stress.",
        prescription: "Triptans, anti-nausea medications, preventive medications.",
        learnMoreLink: "https://www.google.com/search?q=Migraine+causes+and+treatment"
    },
    {
        name: "Osteoporosis",
        image: "osteoporosis.jpg",
        description: "A condition in which bones become weak and brittle.",
        remedies: "Calcium and vitamin D supplements, weight-bearing exercises, medications.",
        doctorAdvice: "Ensure adequate calcium and vitamin D intake, avoid smoking and excessive alcohol consumption.",
        prescription: "Bisphosphonates, hormone-related therapy, bone-building medications.",
        learnMoreLink: "https://www.google.com/search?q=Osteoporosis+causes+and+treatment"
    }
];

function displayLearning() {
    const learningContainer = document.getElementById("learning-container");
    learningContainer.innerHTML = "";

    diseases.forEach(disease => {
        const card = document.createElement("div");
        card.classList.add("disease-card");

        card.innerHTML = `
            <img src="${disease.image}" alt="${disease.name}" class="disease-image">
            <h3>${disease.name}</h3>
            <p><strong>Description:</strong> ${disease.description}</p>
            <p><strong>Remedies:</strong> ${disease.remedies}</p>
            <p><strong>Doctor's Advice:</strong> ${disease.doctorAdvice}</p>
            <p><strong>Prescription:</strong> ${disease.prescription}</p>
            <a href="${disease.learnMoreLink}" target="_blank" class="learn-more-btn">Learn More</a>
        `;

        learningContainer.appendChild(card);
    });
}

// Initialize learning section
displayLearning();


// Hospitals Data
const hospitals = [
    { name: "AIIMS Delhi", location: "New Delhi, India", opportunity: "Hiring", link: "https://aiims.edu" },
    { name: "Apollo Hospitals", location: "Chennai, India", opportunity: "Internship", link: "https://apollohospitals.com" },
    { name: "Fortis Healthcare", location: "Mumbai, India", opportunity: "Hiring", link: "https://fortishealthcare.com" },
    { name: "Medanta Hospital", location: "Gurgaon, India", opportunity: "Internship", link: "https://medanta.org" },
    { name: "Max Healthcare", location: "Bangalore, India", opportunity: "Hiring", link: "https://maxhealthcare.in" },
    { name: "Tata Memorial Hospital", location: "Mumbai, India", opportunity: "Internship", link: "https://tmc.gov.in" },
    { name: "Kokilaben Hospital", location: "Mumbai, India", opportunity: "Hiring", link: "https://kokilabenhospital.com" },
    { name: "Manipal Hospitals", location: "Bangalore, India", opportunity: "Internship", link: "https://manipalhospitals.com" }
];

// Function to Display Hospitals
function displayHospitals() {
    const container = document.getElementById("hospital-container");
    container.innerHTML = ""; // Clear previous content

    hospitals.forEach((hospital) => {
        const card = document.createElement("div");
        card.classList.add("hospital-card");

        card.innerHTML = `
            <span class="opportunity">${hospital.opportunity}</span>
            <h3>${hospital.name}</h3>
            <p><strong>Location:</strong> ${hospital.location}</p>
            <a href="${hospital.link}" target="_blank" class="view-btn">View Opportunity</a>
        `;

        container.appendChild(card);
    });
}

// Load Hospitals on Page Load
document.addEventListener("DOMContentLoaded", displayHospitals);


// Smooth Scroll for Join Button
document.querySelector(".join-btn").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("signup").scrollIntoView({ behavior: "smooth" });
});


