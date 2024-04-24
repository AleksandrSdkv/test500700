const details = document.querySelectorAll("details");

for (let i = 0; i < details.length; i++) {
  details[i].addEventListener("toggle", accordion);
  details[i].addEventListener("toggle", handleArrowsToggle);
}
function accordion(event) {
  if (!event.target.open) return;
  for (let i = 0; i < details.length; i++) {
    if (
      details[i].tagName != "DETAILS" ||
      !details[i].hasAttribute("open") ||
      event.target == details[i]
    ) {
      continue;
    }

    details[i].removeAttribute("open");
  }
}
function handleArrowsToggle(event) {
  const arrow = event.target.parentNode.querySelector(
    ".information__box-arrow"
  );
  arrow.classList.toggle("information__box-arrow-down");
}
