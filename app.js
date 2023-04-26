const bioToolBoxes = document.querySelectorAll(".bio-tool-box");

bioToolBoxes.forEach(box => {
  const knowMoreLink = box.querySelector("a");

  box.addEventListener("click", () => {
    knowMoreLink.click();
  });

  box.addEventListener("mouseenter", () => {
    box.style.cursor = "pointer";
  });
});
