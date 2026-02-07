const accordionButton = document.querySelectorAll('.accordion-button');

for (let i = 0; i < accordionButton.length; i++) {
  accordionButton[i].onclick = () => {
      accordionButton[i].firstElementChild.classList.toggle('active');
      accordionButton[i].firstElementChild.nextElementSibling.classList.toggle('active');
      accordionButton[i].nextElementSibling.classList.toggle('active');
  };
}