export function yearInTheFooter() {
  const prevYearContainer = document.querySelector('#prev-year');
  const currYearContainer = document.querySelector('#curr-year');
  const y = new Date().getFullYear();

  prevYearContainer.textContent = y - 1;
  currYearContainer.textContent = y;

}