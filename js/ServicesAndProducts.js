
// SETTING UP SERVICES

// let xhr = new XMLHttpRequest();

// let file = "/json/service.json";
let file = [
  {
    "serviceName": "Network Design & Implementation",
    "serviceType": "IT Service",
    "serviceImage": "../images/network_service.jpg",
    "serviceDetails": "network.html"
  },
  {
    "serviceName": "Cloud Computing Solutions",
    "serviceType": "IT Service",
    "serviceImage": "../images/cloud_service.jpg",
    "serviceDetails": "cloud.html"
  },

  {
    "serviceName": "Data center Solutions",
    "serviceType": "IT Service",
    "serviceImage": "../images/data_service.jpg",
    "serviceDetails": "data.html"
  },
  {
    "serviceName": "EPC Projects",
    "serviceType": "Electrical Services",
    "serviceImage": "../images/ecp_service.jpg",
    "serviceDetails": "ecp.html"
  },

  {
    "serviceName": "CCTV Camera Installation",
    "serviceType": "Electrical Services",
    "serviceImage": "../images/camera_service.png",
    "serviceDetails": "camera.html"
  },
  {
    "serviceName": "Solar System Installation",
    "serviceType": "Electrical Services",
    "serviceImage": "../images/solar_service.jpg",
    "serviceDetails": "solar.html"
  }
]
  ;
// xhr.open("GET", file, true);
// xhr.send();

// xhr.onreadystatechange = function () {
const fetchServices = function () {

  // if (xhr.readyState === 4 && xhr.status === 200) {
  let data = file;
  // let data = JSON.parse(xhr.responseText);
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

};
fetchServices()
// // SETTING UP PRODUCTS
// let xhrTwo = new XMLHttpRequest();

// let fileTwo = "/json/product.json";
let fileTwo = [
  {
    "productName": "CCTV Camera",
    "productDesc": "Eyes everywhere, security everywhere",
    "productImage": "../images/camera_product.jpg",
    "productDetails": "CCTVCameraProduct.html"
  },
  {
    "productName": "Solar Panel",
    "productDesc": "Harnessing the power of the sun, for a sustainable future",
    "productImage": "../images/solar_product.jpg",
    "productDetails": "SolarPanelProduct.html"
  },
  {
    "productName": "Inverter",
    "productDesc": "Unlocking the power of energy efficiency",
    "productImage": "../images/inverter_product.png",
    "productDetails": "InverterProduct.html"
  },
  {
    "productName": "Breaker",
    "productDesc": "Ensure electrical safety, save life save property",
    "productImage": "../images/breaker_product.jpg",
    "productDetails": "circuitBreakerProduct.html"
  }
];
// xhrTwo.open("GET", fileTwo, true);
// xhrTwo.send();

const FetchProducts = function () {
  // if (xhrTwo.readyState === 4 && xhrTwo.status === 200) {
  // let data = JSON.parse(xhrTwo.responseText);
  let data = fileTwo;
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
  // }
};

FetchProducts()