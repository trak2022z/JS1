/**
* Name: Khang Zhie Phoong
* Date: April 20, 2019
* Section: CSE 154 AQ
* This is the javascript file that adds interactivity and functionality to the webpage for CP2.
*/

(function() {
  "use strict";

  const MAX_SUNS = 10;

  window.addEventListener("load", init);

  /**
  * Sets up initial event listeners for all buttons on the page.
  */
  function init() {
    let addBtn = document.getElementById("add-btn");
    let removeBtn = document.getElementById("remove-btn");
    let refreshBtn = document.getElementById("refresh-btn");
    let goBtn = document.getElementById("go-btn");
    let resetBtn = document.getElementById("reset-btn");

    addBtn.addEventListener("click", add);
    removeBtn.addEventListener("click", remove);
    refreshBtn.addEventListener("click", refresh);
    goBtn.addEventListener("click", go);
    resetBtn.addEventListener("click", reset);
  }

  let count = 0;

  /*
  * This adds a sun to the flexbox.
  */
  function add() {
    if (count < MAX_SUNS) {
      count++;
      let flexBox = document.getElementById("flex-box");
      let image = document.createElement("img");
      image.src = "img/sun-" + count + ".png";
      image.alt = "sun-" + count;
      image.id = "sun-" + count;
      image.classList.add("sun");
      flexBox.appendChild(image);
    } else {
      alert("You can only add a maximum of 10 suns!");
    }
  }

  /*
  * This removes a sun from the flexbox.
  */
  function remove() {
    if (count > 0) {
      let sun = document.getElementById("sun-" + count);
      sun.remove();
      count--;
    } else {
      alert("There are no suns to remove!");
    }
  }

  /*
  * This refreshes the page by emptying the flexbox and removing selected flexbox properties.
  */
  function refresh() {
    let flexBox = document.getElementById("flex-box");
    flexBox.innerHTML = "";
    reset();
    count = 0;
  }

  /*
  * This sets the selected fle-box properties.
  */
  function go() {
    let flexBox = document.getElementById("flex-box");
    flexBox.style.flexDirection = getFlexDirection();
    flexBox.style.flexWrap = getFlexWrap();
    flexBox.style.justifyContent = getJustifyContent();
    flexBox.style.alignItems = getAlignItems();
    flexBox.style.alignContent = getAlignContent();
  }

  /*
  * This resets the options to their default values, and removes flex-box styles.
  */
  function reset() {
    let flexBox = document.getElementById("flex-box");
    flexBox.style.flexDirection = "row";
    flexBox.style.flexWrap = "nowrap";
    flexBox.style.justifyContent = "flex-start";
    flexBox.style.alignItems = "stretch";
    flexBox.style.alignContent = "stretch";

    let flexDirection = document.getElementById("flex-direction");
    flexDirection.selectedIndex = 0;
    let flexWrap = document.getElementById("flex-wrap");
    flexWrap.selectedIndex = 0;
    let justifyContent = document.getElementById("justify-content");
    justifyContent.selectedIndex = 0;
    let alignItems = document.getElementById("align-items");
    alignItems.selectedIndex = 0;
    let alignContent = document.getElementById("align-content");
    alignContent.selectedIndex = 0;
  }

  /*
  * This gets the flex-direction property and returns the property.
  */
  function getFlexDirection() {
    let select = document.getElementById("flex-direction");
    let flexDirection = select.options[select.selectedIndex].value;
    return flexDirection;
  }

  /*
  * This gets the flex-wrap property and returns the property.
  */
  function getFlexWrap() {
    let select = document.getElementById("flex-wrap");
    let flexWrap = select.options[select.selectedIndex].value;
    return flexWrap;
  }

  /*
  * This gets the justify-content property and returns the property.
  */
  function getJustifyContent() {
    let select = document.getElementById("justify-content");
    let justifyContent = select.options[select.selectedIndex].value;
    return justifyContent;
  }

  /*
  * This gets the align-items property and returns the property.
  */
  function getAlignItems() {
    let select = document.getElementById("align-items");
    let alignItems = select.options[select.selectedIndex].value;
    return alignItems;
  }

  /*
  * This gets the align-content property and returns the property.
  */
  function getAlignContent() {
    let select = document.getElementById("align-content");
    let alignContent = select.options[select.selectedIndex].value;
    return alignContent;
  }
})();

