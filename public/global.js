function handleSectionAnimations () {
  const scrollTop = document.scrollingElement.scrollTop;
  if (scrollTop > 50) {
    document.querySelector("html").className = "dark";
  } else {
    document.querySelector("html").className = "";
  }
}

document.addEventListener("scroll", handleSectionAnimations);
document.addEventListener('resize', handleSectionAnimations);


handleSectionAnimations();

window.addEventListener('close', () => {
  document.removeEventListener('scroll', handleSectionAnimations)
  document.removeEventListener('resize', handleSectionAnimations)
})