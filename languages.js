let addButton = document.getElementById("add_button");

const currentIndex = 0

addButton.addEventListener("click", function() {

  // Retrieves the 'list'
  let list = document.getElementById("languages_list");
  let textNode = document.getElementById("language").value;
  if (textNode != null) {
    let item = document.createElement("li");
    //Creates a textnode from the users input
    item.appendChild(document.createTextNode(textNode));
    //Adds the users textnode at the end of the list
    list.appendChild(item);
    // Creates a delete button
    let deleteButton = document.createElement("span");
    //add a click event to remove the current item
    deleteButton.addEventListener("click", function() {
      item.remove()
    })
    deleteButton.innerHTML = "-"
    item.appendChild(deleteButton)
  }
});