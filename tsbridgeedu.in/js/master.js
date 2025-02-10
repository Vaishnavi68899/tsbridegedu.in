const dropdownBtn = document.getElementById("nav__dpdn_btn");
const dropdownElmnts = document.getElementById("nav_dpdn_elmnts_active");

const cards = [{
        title: "Data Analytics",
        id: "data-analytics",
        description: "What's included in the program?",
        img: "/media/data-analytics.jpg",
        features: [
            "Data Collection and Cleaning",
            "Statistical Analysis",
            "Data Visualization",
            "Machine Learning Techniques",
        ],
    },
    {
        title: "Ethical Hacking",
        id: "ethical-hacking",
        description: "What's included in the program ?",
        img: "/media/ethical-hacking.jpg",
        features: [
            "Ethical Hacking Basics",
            "Network Security",
            "Penetration Testing",
            "Cybersecurity Fundamentals",
        ],
    },
    {
        title: "Full Stack Development",
        id: "full-stack-web-development",
        description: "What's included in the program ?",
        img: "/media/full-stack-web-development.jpg",
        features: [
            "Node.js Basics",
            "Express.js",
            "RESTful APIs",
            "MongoDB Integration",
            "React with Redux, Hooks, Routers",
        ],
    },
];

const nonTch = [{
        title: "Digital marketing with AI",
        id: "digital-marketing",
        description: "What's included in the programs?",
        img: "/media/digital-marketing.jpg",
        features: [
            "Search Engine Optimization (SEO)",
            "Social Media Marketing",
            "Content Strategy",
            "Digital Analytics",
        ],
    },

    {
        title: "Sex Education",
        id: "sex-education",
        description: "What's included in the program?",
        img: "/media/sex-education.jpg",
        features: [
            "Sexual Health Education",
            "Relationship Dynamics",
            "Consent Education",
            "Gender and Sexuality Studies",
        ],
    },
    {
        title: "Stock Market Analysis",
        id: "stock-market-analysis",
        description: "What's included in the program?",
        img: "/media/stock-market-analysis.jpg",
        features: [
            "Market Research Techniques",
            "Risk Assessment Strategies",
            "Technical Analysis Methods",
            "Investment Portfolio Management",
        ],
    },
];

document.addEventListener("DOMContentLoaded", () => {
    if (
        window.location.pathname === "/" ||
        window.location.pathname === "/index.html" ||
        window.location.pathname === "/courses.html"
    ) {
        const exploreProgCards = document.getElementById("exploreProgCards"); // Card container

        cards.forEach((card, index) => {
            // Card Mapping
            const exploreProgCard = document.createElement("div");
            exploreProgCard.className =
                "explore_prog_card backdrop-blur-md bg-[#fff]/100  items-center modal-open transition-all duration-300 ease-out";
            exploreProgCard.setAttribute("data-modal", `modal-${index + 1}`);

            exploreProgCard.id = card ? .id;

            const img = document.createElement("img");
            img.className = "w-full h-32 object-contain";
            img.src = card.img;
            img.alt = "";

            const title = document.createElement("h3");
            title.className = "text-[#0c2e7a] font-bold mt-6 text-xl";
            title.textContent = card.title;

            const description = document.createElement("button");
            description.className =
                "text-[#fff] py-2 px-3 ts_crs_btn  font-medium rounded-md text-sm";
            description.textContent = "See Program->";

            exploreProgCard.appendChild(img);
            exploreProgCard.appendChild(title);
            exploreProgCard.appendChild(description);

            const modal = document.createElement("div");
            modal.className =
                "modal shadow-md shadow-black/90 ring-1 hidden transition-all duration-300 ease-out";
            modal.id = `modal-${index + 1}`;

            const modalHeading = document.createElement("div");
            modalHeading.className = "modal-heading";

            const modalTitle = document.createElement("h1");
            modalTitle.id = `modal-title-${index + 1}`;
            modalTitle.textContent = card.title;

            const modalClose = document.createElement("i");
            modalClose.className = "fa-solid fa-xmark cursor-pointer modal-close";

            const hr = document.createElement("hr");

            const modalContent = document.createElement("div");
            modalContent.className = "modal-content";

            const modalDescription = document.createElement("h1");
            modalDescription.id = `modal-description-${index + 1}`;
            modalDescription.textContent = card.description;

            const ul = document.createElement("ul");

            card.features.forEach((feature, i) => {
                const li = document.createElement("li");
                li.id = `modal-feature${i + 1}-${index + 1}`;
                li.textContent = feature;
                ul.appendChild(li);
            });

            modalContent.appendChild(modalDescription);
            modalContent.appendChild(ul);

            const button = document.createElement("button");
            const a = document.createElement("a");
            a.href = `/course-page.html?course=${card.id}`;
            a.className = "underline-none";
            a.textContent = "See Details ";
            const i = document.createElement("i");
            i.className = "fa-solid fa-arrow-up-right-from-square";
            a.appendChild(i);
            button.appendChild(a);

            modal.appendChild(modalHeading);
            modalHeading.appendChild(modalTitle);
            modalHeading.appendChild(modalClose);
            modal.appendChild(hr);
            modal.appendChild(modalContent);
            modal.appendChild(button);

            exploreProgCards.appendChild(exploreProgCard);

            document.body.appendChild(modal);

            exploreProgCard.addEventListener("click", () => {
                // Show the modal

                modal.classList.add("show");

                const viewportHeight = window.innerHeight;
                const modalHeight = modal.clientHeight;
                const cardRect = exploreProgCard.getBoundingClientRect();
                let modalTop = cardRect.top + window.pageYOffset + cardRect.height + 10;

                if (modalTop + modalHeight > viewportHeight) {
                    modalTop = viewportHeight - modalHeight - 10;
                }

                modal.style.top = `${Math.max(window.pageYOffset, modalTop)}px`;
            });

            modalClose.addEventListener("click", () => {
                modal.classList.remove("show");
            });
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    if (
        window.location.pathname === "/" ||
        window.location.pathname === "/index.html" ||
        window.location.pathname === "/courses.html"
    ) {
        const nonTchCards = document.getElementById("nonTchCrds");

        nonTch.forEach((card, index) => {
            // Card Mapping
            const exploreProgCard = document.createElement("div");
            exploreProgCard.className =
                "explore_prog_card backdrop-blur-md bg-[#fff]/100  items-center modal-open transition-all duration-300 ease-out";
            exploreProgCard.setAttribute("data-modal", `modal-${index + 1}`);

            exploreProgCard.id = card.id;

            const img = document.createElement("img");
            img.className = "w-full h-32 object-contain";
            img.src = card.img;
            img.alt = "";

            const title = document.createElement("h3");
            title.className = "text-[#0c2e7a] font-bold mt-6 text-xl";
            title.textContent = card.title;

            const description = document.createElement("button");
            description.className =
                "text-[#fff] py-2 px-3 ts_crs_btn  font-medium rounded-md text-sm";
            description.textContent = "See Program->";

            exploreProgCard.appendChild(img);
            exploreProgCard.appendChild(title);
            exploreProgCard.appendChild(description);

            const modal = document.createElement("div");
            modal.className =
                "modal shadow-md shadow-black/90 ring-1 hidden transition-all duration-300 ease-out";
            modal.id = `modal-${index + 1}`;

            const modalHeading = document.createElement("div");
            modalHeading.className = "modal-heading";

            const modalTitle = document.createElement("h1");
            modalTitle.id = `modal-title-${index + 1}`;
            modalTitle.textContent = card.title;

            const modalClose = document.createElement("i");
            modalClose.className = "fa-solid fa-xmark cursor-pointer modal-close";

            const hr = document.createElement("hr");

            const modalContent = document.createElement("div");
            modalContent.className = "modal-content";

            const modalDescription = document.createElement("h1");
            modalDescription.id = `modal-description-${index + 1}`;
            modalDescription.textContent = card.description;

            const ul = document.createElement("ul");

            card.features.forEach((feature, i) => {
                const li = document.createElement("li");
                li.id = `modal-feature${i + 1}-${index + 1}`;
                li.textContent = feature;
                ul.appendChild(li);
            });

            modalContent.appendChild(modalDescription);
            modalContent.appendChild(ul);

            const button = document.createElement("button");
            const a = document.createElement("a");
            a.href = `/course-page.html?course=${card.id}`;
            a.className = "underline-none";
            a.textContent = "See Details ";
            const i = document.createElement("i");
            i.className = "fa-solid fa-arrow-up-right-from-square";
            a.appendChild(i);
            button.appendChild(a);

            modal.appendChild(modalHeading);
            modalHeading.appendChild(modalTitle);
            modalHeading.appendChild(modalClose);
            modal.appendChild(hr);
            modal.appendChild(modalContent);
            modal.appendChild(button);

            nonTchCards.appendChild(exploreProgCard);
            document.body.appendChild(modal);

            exploreProgCard.addEventListener("click", () => {
                // Show the modal

                modal.classList.add("show");

                const viewportHeight = window.innerHeight;
                const modalHeight = modal.clientHeight;
                const cardRect = exploreProgCard.getBoundingClientRect();
                let modalTop = cardRect.top + window.pageYOffset + cardRect.height + 10;

                if (modalTop + modalHeight > viewportHeight) {
                    modalTop = viewportHeight - modalHeight - 10;
                }

                modal.style.top = `${Math.max(window.pageYOffset, modalTop)}px`;
            });

            modalClose.addEventListener("click", () => {
                modal.classList.remove("show");
            });
        });
    }
});

const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");
const q3 = document.getElementById("q3");
const q4 = document.getElementById("q4");
const q6 = document.getElementById("q6");
const q7 = document.getElementById("q7");
const mq1 = document.getElementById("mq1");
const mq2 = document.getElementById("mq2");
const mq3 = document.getElementById("mq3");
const mq4 = document.getElementById("mq4");
const mq6 = document.getElementById("mq6");
const mq7 = document.getElementById("mq7");

const feedbackForm = document.querySelector(".feedback-form");
const answerForm = document.querySelector(".answer-form");

const faqQuestions = document.querySelectorAll(".faq-question");
const answerFaq = document.getElementById("answer-faq");
const mobileFaq = document.getElementById("m-answer-faq");
const mobileAnswerForm = document.querySelector(".mobile-answer-form");
const mobileFeedbackForm = document.querySelector(".mobile-feedback-form");

if (
    window.location.pathname === "/" ||
    window.location.pathname === "/index.html"
) {
    q1.addEventListener("click", () => {
        answerFaq.innerHTML = `TS Bridge Edu is a multifaceted platform offering skill-based courses, tailored internships, job recommendations, and live free training. Engage in community-building activities, hackathons, networking events, seminars, and workshops for holistic growth. Join our vibrant WhatsApp Community to access these enriching opportunities and connect with like-minded individuals.`;
        if (!feedbackForm.classList.contains("hidden")) {
            feedbackForm.classList.add("hidden");
        }
        if (feedbackForm.classList.contains("hidden")) {
            answerForm.classList.remove("hidden");
        }
    });

    mq1.addEventListener("click", () => {
        mobileFaq.innerHTML = `TS Bridge Edu is a multifaceted platform offering skill-based courses, tailored internships, job recommendations, and live free training. Engage in community-building activities, hackathons, networking events, seminars, and workshops for holistic growth. Join our vibrant WhatsApp Community to access these enriching opportunities and connect with like-minded individuals.`;
        if (!mobileFeedbackForm.classList.contains("hidden")) {
            mobileFeedbackForm.classList.add("hidden");
        }

        if (mobileFeedbackForm.classList.contains("hidden")) {
            mobileAnswerForm.classList.remove("hidden");
        }
    });

    q2.addEventListener("click", () => {
        answerFaq.innerHTML = `Our services are designed for graduate students, recent graduates, educators, and professionals seeking to enhance their skills, advance their careers, or stay updated with the latest trends in education technology. Hence each and everyone one can get it .`;
        if (!feedbackForm.classList.contains("hidden")) {
            feedbackForm.classList.add("hidden");
        }

        if (feedbackForm.classList.contains("hidden")) {
            answerForm.classList.remove("hidden");
        }
    });

    mq2.addEventListener("click", () => {
        mobileFaq.innerHTML = `Our services are designed for graduate students, recent graduates, educators, and professionals seeking to enhance their skills, advance their careers, or stay updated with the latest trends in education technology.
    `;

        if (!mobileFeedbackForm.classList.contains("hidden")) {
            mobileFeedbackForm.classList.add("hidden");
        }

        if (mobileFeedbackForm.classList.contains("hidden")) {
            mobileAnswerForm.classList.remove("hidden");
        }
    });

    q3.addEventListener("click", () => {
        answerFaq.innerHTML = `It's simple. Join our WhatsApp Community. Fill the internship form as per your skills and interest. Have a screening session. Congrats!`;
        if (!feedbackForm.classList.contains("hidden")) {
            feedbackForm.classList.add("hidden");
        }

        if (feedbackForm.classList.contains("hidden")) {
            answerForm.classList.remove("hidden");
        }
    });

    mq3.addEventListener("click", () => {
        mobileFaq.innerHTML = `It's simple. Join our WhatsApp Community. Fill the internship form as per your skills and interest. Have a screening session. Congrats!`;
        if (!mobileFeedbackForm.classList.contains("hidden")) {
            mobileFeedbackForm.classList.add("hidden");
        }

        if (mobileFeedbackForm.classList.contains("hidden")) {
            mobileAnswerForm.classList.remove("hidden");
        }
    });

    q4.addEventListener("click", () => {
        answerFaq.innerHTML = `We offer a variety of courses covering subjects such as coding, data analytics, digital marketing, educational technology, and more. Our courses are designed to provide practical skills and knowledge that are directly applicable in the professional world.

    `;
        if (!feedbackForm.classList.contains("hidden")) {
            feedbackForm.classList.add("hidden");
        }

        if (feedbackForm.classList.contains("hidden")) {
            answerForm.classList.remove("hidden");
        }
    });

    mq4.addEventListener("click", () => {
        mobileFaq.innerHTML = `We offer a variety of courses covering subjects such as coding, data analytics, digital marketing, educational technology, and more. Our courses are designed to provide practical skills and knowledge that are directly applicable in the professional world.

    `;

        if (!mobileFeedbackForm.classList.contains("hidden")) {
            mobileFeedbackForm.classList.add("hidden");
        }

        if (mobileFeedbackForm.classList.contains("hidden")) {
            mobileAnswerForm.classList.remove("hidden");
        }
    });

    q6.addEventListener("click", () => {
        answerFaq.innerHTML = `Our job recommendation service uses advanced algorithms to match your profile with job opportunities that fit your skills, experience, and career goals. Simply create a profile, and you’ll start receiving tailored job recommendations.


    `;
        if (!feedbackForm.classList.contains("hidden")) {
            feedbackForm.classList.add("hidden");
        }

        if (feedbackForm.classList.contains("hidden")) {
            answerForm.classList.remove("hidden");
        }
    });
    mq6.addEventListener("click", () => {
        answerFaq.innerHTML = `Our job recommendation service uses advanced algorithms to match your profile with job opportunities that fit your skills, experience, and career goals. Simply create a profile, and you’ll start receiving tailored job recommendations.


    `;
        if (!feedbackForm.classList.contains("hidden")) {
            feedbackForm.classList.add("hidden");
        }

        if (feedbackForm.classList.contains("hidden")) {
            answerForm.classList.remove("hidden");
        }
    });
    q7.addEventListener("click", () => {
        answerFaq.innerHTML = `To start building your portfolio, log in to your TS Bridge Edu account and navigate to the portfolio section. Follow the step-by-step guide to add and organize your work.
    Include a variety of work that highlights your skills and achievements, such as projects, research papers, presentations, creative works, certifications, and any other relevant materials.


    `;
        if (!feedbackForm.classList.contains("hidden")) {
            feedbackForm.classList.add("hidden");
        }

        if (feedbackForm.classList.contains("hidden")) {
            answerForm.classList.remove("hidden");
        }
    });
    mq7.addEventListener("click", () => {
        answerFaq.innerHTML = `To start building your portfolio, log in to your TS Bridge Edu account and navigate to the portfolio section. Follow the step-by-step guide to add and organize your work.
    Include a variety of work that highlights your skills and achievements, such as projects, research papers, presentations, creative works, certifications, and any other relevant materials.


    `;
        if (!feedbackForm.classList.contains("hidden")) {
            feedbackForm.classList.add("hidden");
        }

        if (feedbackForm.classList.contains("hidden")) {
            answerForm.classList.remove("hidden");
        }
    });

    document.getElementById("q5").addEventListener("click", function() {
        feedbackForm.classList.toggle("hidden");
        if (!feedbackForm.classList.contains("hidden")) {
            answerForm.classList.toggle("hidden");
        }
    });

    document.getElementById("mq5").addEventListener("click", function() {
        mobileFeedbackForm.classList.toggle("hidden");
        if (!mobileFeedbackForm.classList.contains("hidden")) {
            mobileAnswerForm.classList.toggle("hidden");
        }
    });

    faqQuestions.forEach((question) => {
        question.addEventListener("click", () => {
            faqQuestions.forEach((q) => q.classList.remove("active"));
            question.classList.add("active");
        });
    });
}

dropdownBtn.addEventListener("click", () => {
    dropdownElmnts.classList.toggle("active");
});

var crsr = document.querySelectorAll(".diamond_img");

function moveImagesTowardsCursor() {
    window.addEventListener("mousemove", function(event) {
        crsr.forEach(function(elem) {
            var rect = elem.getBoundingClientRect();
            var centerX = rect.left + rect.width / 2;
            var centerY = rect.top + rect.height / 2;
            var distanceX = event.clientX - centerX;
            var distanceY = event.clientY - centerY;

            var moveX = distanceX * 0.05;
            var moveY = distanceY * 0.05;

            elem.style.transform = "translate(" + moveX + "px, " + moveY + "px)";
        });
    });
}

const openModal = document.querySelectorAll(".modal-open");

openModal.forEach(function(card) {
    card.onclick = function() {
        // var modal = card.getAttribute("data-modal");
        var modalId = card.getAttribute("data-modal");
        var modal = document.getElementById(modalId);
        modal.classList.add("show");

        document.getElementById(modal).style.display = "block";
    };
});

const closeBtn = document.querySelectorAll(".modal-close");

closeBtn.forEach(function(btn) {
    btn.onclick = function() {
        var modal = btn.closest(".modal");
        modal.classList.remove("show"); // Remove show class to hide the modal
    };
});

moveImagesTowardsCursor();

window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    const footer = document.querySelector("footer");

    const sectionTs = document.getElementById("sectionTs");

    const sectionTop = sectionTs ? .getBoundingClientRect().top;

    if (sectionTop <= navbar ? .offsetHeight) {
        navbar.classList.add("nav_bg_changed");
        navbar.classList.remove("navbar__main");
    } else {
        navbar ? .classList ? .remove("nav_bg_changed");
        navbar ? .classList ? .add("navbar__main");
    }

    const footerTop = footer.getBoundingClientRect().top;

    if (navbar) {
        if (footerTop <= navbar ? .offsetHeight) {
            navbar.style.position = "";
        } else {
            navbar.style.position = "sticky";
        }
    }
});


if (
    window.location.pathname === "/" ||
    window.location.pathname === "/index.html"
) {
    var counterTriggered = false;

    window.addEventListener("scroll", () => {
        var statsSection = document.getElementById("stats_sctn");
        var position = statsSection.getBoundingClientRect().top;
        var screenHeight = window.innerHeight;

        if (position < screenHeight && !counterTriggered) {
            startCounter();
            counterTriggered = true;
        }
    });

    const startCounter = () => {
        var counters = document.querySelectorAll('[id^="stats_cntr_"]');
        var targets = [50, 1000, 50, 100]; // Specify the target values here
        var speed = 200; // Speed of counting in milliseconds

        counters.forEach(function(counter, index) {
            var target = targets[index];
            var count = 0;
            var interval = target / speed;

            var updateCount = function() {
                count += interval;
                counter.innerText = Math.floor(count);
                if (count < target) {
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target + "+";
                }
            };

            updateCount();
        });
    };
}

if (!window.location.pathname === "/about" ||
    "/" ||
    "/courses" ||
    "/about.html" ||
    "/courses.html" ||
    "/index.html"
) {
    window.location.href === "404.html";
}

const projectsData = [{
        title: "Design a logo and brand identity for a new coffee shop",
        skills: ["Graphic Design", "Illustrator", "Canva", "Logo Design"],
        img: "/media/courses-1.png",
    },
    {
        title: "Create a responsive website for a local bakery",
        skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        img: "/media/courses-2.png",
    },
    {
        title: "Develop a mobile app for tracking fitness activities",
        skills: [
            "Mobile App Development",
            "UI/UX Design",
            "Firebase",
            "React Native",
        ],
        img: "/media/courses-3.png",
    },
    {
        title: "Design promotional materials for a charity event",
        skills: ["Graphic Design", "Photoshop", "InDesign", "Print Design"],
        img: "/media/courses-4.png",
    },
    {
        title: "Build an e-commerce platform for handmade crafts",
        skills: [
            "Web Development",
            "Shopify",
            "WooCommerce",
            "Payment Integration",
        ],
        img: "/media/courses-5.png",
    },
    {
        title: "Create a social media marketing campaign for a new product launch",
        skills: [
            "Digital Marketing",
            "Social Media Management",
            "Content Creation",
            "Analytics",
        ],
        img: "/media/courses-6.png",
    },
    {
        title: "Design an infographic for a research report",
        skills: [
            "Graphic Design",
            "Data Visualization",
            "Illustrator",
            "Information Design",
        ],
        img: "/media/courses-7.png",
    },
    {
        title: "Develop a chatbot for customer support",
        skills: [
            "Chatbot Development",
            "Natural Language Processing",
            "API Integration",
            "Python",
        ],
        img: "/media/courses-8.png",
    },
    {
        title: "Produce a video tutorial series for beginner programmers",
        skills: [
            "Video Production",
            "Scriptwriting",
            "Screen Recording",
            "Video Editing",
        ],
        img: "/media/courses-9.png",
    },
    {
        title: "Design a user interface for a car rental app",
        skills: ["UI/UX Design", "Prototyping", "Figma", "User Research"],
        img: "/media/courses-10.png",
    },
    {
        title: "Create a podcast series on mindfulness and meditation",
        skills: [
            "Audio Production",
            "Scripting",
            "Voice Recording",
            "Podcast Hosting",
        ],
        img: "/media/courses-11.png",
    },
    {
        title: "Develop a gamified language learning app",
        skills: ["Game Development", "Language Learning", "Unity", "Gamification"],
        img: "/media/courses-12.png",
    },
    {
        title: "Design a set of icons for a productivity app",
        skills: ["Icon Design", "Illustrator", "Visual Design", "Iconography"],
        img: "/media/courses-13.png",
    },
    {
        title: "Build a portfolio website for a freelance photographer",
        skills: [
            "Web Development",
            "WordPress",
            "Responsive Design",
            "Portfolio Showcase",
        ],
        img: "/media/courses-14.png",
    },
];



document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname === '/courses' || window.location.pathname === '/courses.html') {
        function generateProjectCards() {
            const container = document.getElementById("projectContainer");

            projectsData.forEach((project) => {
                const card = document.createElement("div");
                card.classList.add("project_box", "courses");

                const img = document.createElement("img");
                img.className = "w-full h-32 object-contain ";
                img.src = project.img;
                img.alt = "course-ts-bridge";

                const titleElement = document.createElement("h3");
                titleElement.textContent = project.title;

                const skillsElement = document.createElement("div");
                skillsElement.classList.add("courses_skills");
                project.skills.forEach((skill) => {
                    const skillButton = document.createElement("button");
                    skillButton.className =
                        "bg-gradient-to-r from-violet-600 to-indigo-600 text-white";
                    skillButton.textContent = skill;
                    skillsElement.appendChild(skillButton);
                });

                const skillsHeading = document.createElement("p");
                skillsHeading.className = "text-sm font-semibold ";
                skillsHeading.textContent = "Skills you'll be learning :";

                const button = document.createElement("button");
                button.className = "button-with-anchor";
                const anchor = document.createElement("a");
                anchor.href = "https://forms.gle/wqSSiMgVUvZd9gKg7";
                anchor.textContent = "View Details";
                button.appendChild(anchor);

                card.appendChild(img);
                card.appendChild(titleElement);
                card.appendChild(skillsHeading);
                card.appendChild(skillsElement);
                card.appendChild(button);

                container.appendChild(card);
            });
        }

        generateProjectCards();
    }
});


let menu = document.querySelector('#menu-bar');
let navItems = document.querySelector('.side-nav');
let closeMenu = document.querySelector('#close-btn')
menu.addEventListener("click", () => navItems.classList.toggle('open'));
closeMenu.addEventListener("click", () => menu.click());