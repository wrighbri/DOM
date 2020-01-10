  togglePic = true

let init = function(){
    //.createElement() creates a new element to be added to the html file. This method accepts a parameter of the element'd name you wish to add.
    //To use this method, we need to first creat a variable that represent the element we wish to add.

    let btn = document.createElement(tagName:"BUTTON");  //This ONLY CREATES THE ELEMENT IT DOES NOT ADD TO THE PAGE

    //btn =<button></button>

    //btn.innerHWTML = "CLICK ME";
    //btn.onclick = togglePicture;

    //.appendChild() will add the parameter element to the executing element

    let content = document.creatElement("content");
    image.onclick = togglePicture;
    //content = <section></section>

    content.appendChild(btn);
};

let createTable = function(){

  let table = document.createElement("TABLE");
  let row1 = document.createElement("TR");
  let row2 = document.createElement("TR");
  let row3 = document.createElement("TR");
  let row4 = document.createElement("TR");
  let colHeading1 = document.createElement("TH");
  let colHeading2 = document.createElement("TH");
  colHeading2.innerText = "Mcdonalds";
  let colHeading3 = document.createElement("TH")
    colHeading3.innerText = "Taco Bell";
    let colHeading4 = document.createElement("TH")
    colHeading4.innerText = "Wendys";

  letrowHeading2 = document.createElement("TH");
    rowHeading2.innerText = "Sophomores";
    letrowHeading3 = document.createElement("TH");
    rowHeading3.innerText = "Juniors";
    letrowHeading4 = document.createElement("TH");
    rowHeading4.innerText = "Seniors";

    let data1 = document.createElement("TD");
    let data2 = document.createElement("TD");
    let data3 = document.createElement("TD");
    let data4 = document.createElement("TD");
    let data5 = document.createElement("TD");
    let data6 = document.createElement("TD");
    let data7 = document.createElement("TD");
    let data8 = document.createElement("TD");
    let data9 = document.createElement("TD");
    data1.innerText = "20";
    data2.innerText = "50";
    data3.innerText = "30";
    data4.innerText = "80";
    data5.innerText = "10";
    data6.innerText = "10";
    data7.innerText = "10";
    data8.innerText = "30";
    data9.innerText = "60";

    //CREATE NEW TABLE WITH APENDAGES

    row1.appendChild(colHeading1);
    row1.appendChild(colHeading2);
    row1.appendChild(colHeading3);
    row1.appendChild(colHeading4);
    row1.appendChild(colHeading2);
    row1.appendChild(data1);
    row1.appendChild(data2);
    row1.appendChild(data3);

    row1.appendChild(rowHeading3);
    row1.appendChild(data4);
    row1.appendChild(data5);
    row1.appendChild(data6);

    row1.appendChild(rowHeading4);
    row1.appendChild(data1);
    row1.appendChild(data1);
    row1.appendChild(data1);

    table.appendChild(row1);
    table.appendChild(row2);
    table.appendChild(row3);
    table.appendChild(row4);

    let content = document.getElementById("content");
    content.appendChild(table);

};

let togglePicture = funvtion(){...};

let togglePicture = function(){

  let image = document.createElement("IMG");

  if(togglePic === true) {
    image.src = "image1.jpg";
    togglepic = false;
  } else }
  image.src - "image2.jpg";
  togglePic = true;
}
  let imae = document.createElement("IMG");

  let content = document.getElementById("content");
  content.appendChild(image);


