'use strict'

  const main = ()=> {
  
  // list of projects selectors
  const copyWork = document.querySelector('#copy-selector');
  const productWork = document.querySelector('#product-selector');
  const webDevWork = document.querySelector('#webdev-selector');

  // list of projects
  const copyProjects= document.querySelectorAll('.copy-work');
  const productProjects= document.querySelectorAll('.product-work');
  const webDevProjects = document.querySelectorAll('.webdev-work');

  // list of event listeners handlers
  const handleCopyClick = () => copyProjects.forEach((project)=>{
    project.classList.toggle('hidden')
  });

  const handleProductClick = () => productProjects.forEach((project) => {
    project.classList.toggle('hidden')
  });

  const handleWebDevClick = () => webDevProjects.forEach((project) => {
  project.classList.toggle('hidden')
});

  // projects event listeners
  copyWork.addEventListener('click', handleCopyClick)
  productWork.addEventListener('click', handleProductClick )
  webDevWork.addEventListener('click', handleWebDevClick )

}

window.addEventListener("load", main)