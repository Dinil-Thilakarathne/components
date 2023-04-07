const tabs = document.querySelectorAll(".nav-tabs");
const highlight = document.querySelector(".highlight")
const firstTab = tabs[0];

//calc posiiton of the first tab
var left = firstTab.offsetLeft;
var width = firstTab.offsetWidth;

//set the default location of highlighter
highlight.style.left = `${left}px`
highlight.style.width = `${width}px`


//appile for other tabs
tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Get the index of the selected tab
      const index = this.dataset.index;
      
      // Calculate the position of the highlight element
      const left = this.offsetLeft;
      const width = this.offsetWidth;
      
      // Update the position of the highlight element
      highlight.style.left = `${left}px`;
      highlight.style.width = `${width}px`;
      
      // Add active class to the selected tab
      tabs.forEach(tab => tab.classList.remove('active'));
      this.classList.add('active');
    });
  });