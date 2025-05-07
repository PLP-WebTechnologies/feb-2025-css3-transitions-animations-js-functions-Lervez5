// Loads the saved color when the page is loaded
window.onload = () => {
  const savedColor = localStorage.getItem('preferredColor');
  if (savedColor) {
    document.getElementById('title').style.color = savedColor;
    document.getElementById('colorPicker').value = savedColor;
  }
};

// Saves the color to localStorage
function savePreference() {
  const color = document.getElementById('colorPicker').value;
  localStorage.setItem('preferredColor', color);
  document.getElementById('title').style.color = color;
  alert("Color saved! Reload the page to see your saved colors.");
}

// Adds bounce animation to the title
function triggerAnimation() {
  const title = document.getElementById('title');
  title.classList.remove('bounce'); 
  void title.offsetWidth;           
  title.classList.add('bounce');
  
}

// 24788916
// 47113076