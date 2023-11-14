// function handleSectionAnimations () {
//   const scrollTop = document.scrollingElement.scrollTop;
//   if (scrollTop > 50) {
//     document.querySelector("html").className = "dark";
//   } else {
//     document.querySelector("html").className = "";
//   }
// }

// document.addEventListener("scroll", handleSectionAnimations);
// document.addEventListener('resize', handleSectionAnimations);


// handleSectionAnimations();

// window.addEventListener('close', () => {
//   document.removeEventListener('scroll', handleSectionAnimations)
//   document.removeEventListener('resize', handleSectionAnimations)
// })

let myDiv = document.getElementById("shadow");
//Detect touch device
function isTouchDevice() {
  try {
    //We try to create TouchEvent. It would fail for desktops and throw error
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}
const move = (e) => {
  let x = 0;
  let y = 0;
  console.log(e)
  try {
    x = !isTouchDevice() ? e.x : e.touches[0].pageX;
    y = !isTouchDevice() ? e.y : e.touches[0].pageY;
  } catch (e) {}
  myDiv.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(58, 89, 205, 0.15), transparent 80%)`
};

document.addEventListener("mousemove", move);

window.addEventListener('close', () => {
  document.removeEventListener('mousemove', move)
})