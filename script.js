document.addEventListener("DOMContentLoaded", () => {
  const dayButtons = document.querySelectorAll(".day-btn");
  const scheduleDays = document.querySelectorAll(".schedule-day");

  dayButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const day = button.getAttribute("data-day");

      dayButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      scheduleDays.forEach((content) => {
        content.classList.remove("active");
        if (content.id === `day-${day}`) {
          content.classList.add("active");
        }
      });
    });
  });

  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.backgroundColor = "rgba(255, 255, 255, 0.98)";
    } else {
      header.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
    }
  });

  // Intersection Observer for fade-in effect on scroll
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll(
    ".gallery-item, .info-card, .schedule-item",
  );
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s ease-out";
    observer.observe(el);
  });
});
