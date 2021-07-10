document.querySelectorAll(".nav__link").forEach(
    function (element) {
      element.addEventListener("click", function (element) {
        element.preventDefault();
        const sectionId = this.getAttribute("href");
        document.querySelector(sectionId).scrollIntoView({
          behavior: "smooth"
        });
      });
    });