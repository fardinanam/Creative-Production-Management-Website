const estimationNameFields = document.getElementsByClassName("estimation-name");
const estimationNameInput = document.getElementById("estimation-name");

const estimationDurationFields = document.getElementsByClassName("estimated-duration");
const estimationDurationInput = document.getElementById("estimated-duration");

// const estimationCostFields = document.getElementsByClassName("estimated-cost");
// const estimationCostInput = document.getElementById("estimated-cost");

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

// // change cost according to the input change of estimation cost
// estimationCostInput.addEventListener("input", () => {
//   for (let i = 0; i < estimationCostFields.length; i++) {
//     estimationCostFields[i].textContent = estimationCostInput.value;
//   }
// });

// add designer
function addDesigner() {
  console.log("hello");
  const addDesignerClone = addDesignerTemplate.content.cloneNode(true);
  addDesignerContainer.appendChild(addDesignerClone);

  const designerCount = addDesignerContainer.getElementsByClassName("designer").length;
  const designerCountField = document.getElementsByClassName("designer-count");

  for (let i = 0; i < designerCountField.length; i++) {
    designerCountField[i].textContent = designerCount;
    designerCountField[i].value = designerCount;
  }

  const designerTagFields = addDesignerContainer.getElementsByClassName("tag");
  const designerCategoryFields = addDesignerContainer.getElementsByClassName("category");
  const numberOfDesignersFields = addDesignerContainer.getElementsByClassName("number-of-designers");
  const estimationCostFields = addDesignerContainer.getElementsByClassName("designer-cost");
  for (let i = 0; i < designerCountField; i++) {
    designerTagFields[i].setAttribute('name', 'designer-tag-' + i);
    designerCategoryFields[i].setAttribute('name', 'designer-category-' + i);
    numberOfDesignersFields[i].setAttribute('name', 'number-of-designers-' + i);
    estimationCostFields[i].setAttribute('name', 'vendor-cost-' + i);
  }
}
// unique[0].setAttribute('name', 'hello');
// const unique = document.getElementsByClassName('unique');
// add vendor
function addVendor() {
  const addVendorClone = addVendorTemplate.content.cloneNode(true);
  addVendorContainer.appendChild(addVendorClone);

  const vendorCount = addVendorContainer.getElementsByClassName("vendor").length;
  const vendorCountField = document.getElementsByClassName("vendor-count");

  for (let i = 0; i < vendorCountField.length; i++) {
    vendorCountField[i].textContent = vendorCount;
    vendorCountField[i].value = vendorCount;
  }

  const vendorTagFields = addVendorContainer.getElementsByClassName("tag");
  const vendorServiceFields = addVendorContainer.getElementsByClassName("service");
  const numberOfVendorsFields = addVendorContainer.getElementsByClassName("number-of-vendors");
  const estimationCostFields = addVendorContainer.getElementsByClassName("vendor-cost");
  for (let i = 0; i < designerCountField; i++) {
    vendorTagFields[i].setAttribute('name', 'vendor-tag-' + i);
    vendorServiceFields[i].setAttribute('name', 'vendor-category-' + i);
    numberOfVendorsFields[i].setAttribute('name', 'number-of-vendors-' + i);
    estimationCostFields[i].setAttribute('name', 'vendor-cost-' + i);
  }
}

addDesignerButton.addEventListener("click", addDesigner);

addVendorButton.addEventListener("click", addVendor);


form.addEventListener('submit', function (event) {

	if (event.submitter.matches('#add-designer-button')) {
		event.preventDefault();
	}
  if (event.submitter.matches('#add-vendor-button')) {
		event.preventDefault();
	}

});