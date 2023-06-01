const formPages = document.querySelectorAll(".page");
const steps = document.querySelectorAll(".step");
const progressBar = document.querySelector(".progress-bar");
const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");

let currentStep = 1;

const handleNextBtn = () => {
  currentStep++;

  if (currentStep > steps.length) {
    currentStep = steps.length;
  }

  handleProgressBar();
};

const handlePrevBtn = () => {
  currentStep--;

  if (currentStep < 1) {
    currentStep = 1;
  }

  handleProgressBar();
};

const handleProgressBar = () => {
  steps.forEach((step, index) => {
    if (index < currentStep) {
      step.classList.add("active-step");
    } else {
      step.classList.remove("active-step");
    }
  });

  const activeSteps = document.querySelectorAll(".active-step");
  progressBar.style.width =
    ((activeSteps.length - 1) / (steps.length - 1)) * 100 + "%";

  disabledHandler();
  handleFormPage();
};

const disabledHandler = () => {
  if (currentStep !== 1) {
    prevBtn.removeAttribute("disabled");
  } else {
    prevBtn.setAttribute("disabled", true);
  }

  if (currentStep !== 5) {
    nextBtn.removeAttribute("disabled");
  } else {
    nextBtn.setAttribute("disabled", true);
  }
};

const handleFormPage = () => {
  formPages.forEach((act) => {
    if (currentStep == act.dataset.number) {
      console.log(act);
      act.classList.add("active-page");
    } else {
      act.classList.remove("active-page");
    }
  });
};

nextBtn.addEventListener("click", handleNextBtn);
prevBtn.addEventListener("click", handlePrevBtn);
