
// SETTING UP SERVICES

let xhr = new XMLHttpRequest();

const file = require("../json/service.json");
xhr.open("GET", file, true);
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let data = JSON.parse(xhr.responseText);
    let services = data;
    const myDiv = document.querySelector("#services");
    services.forEach((service) => {
      const list = document.createElement("li");

      const Cartdiv = document.createElement("div");
      Cartdiv.setAttribute("class", "project-card");

      const figure = document.createElement("figure");
      figure.setAttribute("class", "card-banner img-holder");
      figure.setAttribute("style", "--width: 416; --height: 429");

      const CartContent = document.createElement("div");
      CartContent.setAttribute("class", "card-content");

      const CartImage = document.createElement("img");
      CartImage.setAttribute("src", service.serviceImage);
      CartImage.setAttribute("width", "416");
      CartImage.setAttribute("height", "429");
      CartImage.setAttribute("loading", "lazy");
      CartImage.setAttribute("class", "img-cover");

      const serviceHeading = document.createElement("h3");
      serviceHeading.setAttribute("class", "h3");

      const serviceType = document.createElement("a");
      serviceType.setAttribute("class", "class-tag");
      serviceType.textContent = service.serviceType;

      const serviceName = document.createElement("a");
      serviceName.setAttribute("href", service.serviceDetails);
      serviceName.setAttribute("class", "card-title");
      serviceName.textContent = service.serviceName;

      serviceHeading.appendChild(serviceName);
      CartContent.appendChild(serviceHeading);
      CartContent.appendChild(serviceType);
      figure.appendChild(CartImage);
      Cartdiv.appendChild(figure);
      Cartdiv.appendChild(CartContent);

      list.appendChild(Cartdiv);
      myDiv.appendChild(list);
    });
  }
};

// // SETTING UP PRODUCTS
let xhrTwo = new XMLHttpRequest();

const fileTwo = require("../json/product.json");
xhrTwo.open("GET", fileTwo, true);
xhrTwo.send();

xhrTwo.onreadystatechange = function () {
  if (xhrTwo.readyState === 4 && xhrTwo.status === 200) {
    let data = JSON.parse(xhrTwo.responseText);
    let products = data;
    const myDivtwo = document.querySelector("#product-list");
    products.forEach((product) => {
      const list = document.createElement("li");
      const article = document.createElement("article");
      article.setAttribute("class", "product-item");

      const anchor = document.createElement("a");
      anchor.setAttribute("href", product.productDetails);
      anchor.setAttribute("class", "card-link");

      const div = document.createElement("div");
      div.setAttribute("class", "product-image-container");

      const image = document.createElement("img");
      image.setAttribute("class", "project-image");
      image.setAttribute("src", product.productImage);

      const divInfo = document.createElement("div");
      divInfo.setAttribute("class", "product-info");

      const productName = document.createElement("h2");
      productName.textContent = product.productName;

      const description = document.createElement("p");
      description.textContent = product.productDesc;

      divInfo.appendChild(productName);
      divInfo.appendChild(description);

      div.appendChild(image);
      anchor.appendChild(div);
      anchor.appendChild(divInfo);
      article.appendChild(anchor);
      list.appendChild(article);
      myDivtwo.appendChild(list);
    });
  }
};

