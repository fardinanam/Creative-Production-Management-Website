const estimationNameFields = document.getElementsByClassName("estimation-name");
const estimationNameInput = document.getElementById("estimation-name");

const estimationDurationFields = document.getElementsByClassName("estimated-duration");
const estimationDurationInput = document.getElementById("estimated-duration");

const addDesignerContainer = document.querySelector("[add-designer-container]");
const addDesignerTemplate = document.querySelector("[add-designer-template]");
const addDesignerButton = document.getElementById("add-designer-button");

const addVendorContainer = document.querySelector("[add-vendor-container]");
const addVendorTemplate = document.querySelector("[add-vendor-template]");
const addVendorButton = document.getElementById("add-vendor-button");

// change title according to the input change of estimation name
estimationNameInput.addEventListener("input", () => {
  for (let i = 0; i < estimationNameFields.length; i++) {
    estimationNameFields[i].textContent = estimationNameInput.value;
  }
});

// change duration according to the input change of estimation duration
estimationDurationInput.addEventListener("input", () => {
  for (let i = 0; i < estimationDurationFields.length; i++) {
    estimationDurationFields[i].textContent = estimationDurationInput.value;
  }
});

// add designer
function addDesigner() {
  const addDesignerClone = addDesignerTemplate.content.cloneNode(true);
  addDesignerContainer.appendChild(addDesignerClone);

  const designerCount = addDesignerContainer.getElementsByClassName("designer").length;
  const designerCountField = document.getElementsByClassName("designer-count");

  for (let i = 0; i < designerCountField.length; i++) {
    designerCountField[i].textContent = designerCount;
  }
}

// add vendor
function addVendor() {
  const addVendorClone = addVendorTemplate.content.cloneNode(true);
  addVendorContainer.appendChild(addVendorClone);

  const vendorCount = addVendorContainer.getElementsByClassName("vendor").length;
  const vendorCountField = document.getElementsByClassName("vendor-count");

  for (let i = 0; i < vendorCountField.length; i++) {
    vendorCountField[i].textContent = vendorCount;
  }
}

addDesignerButton.addEventListener("click", addDesigner);

addVendorButton.addEventListener("click", addVendor);