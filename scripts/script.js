const markerContainer = document.getElementById("markerContainer");
const cardStack = document.getElementById("cardStack");
const vehicleButtons = document.querySelectorAll(".vehicle-selector button");

const carouselImages = document.querySelector(".carousel-images");
const carouselSlides = document.querySelectorAll(".carousel-images img");
const leftArrow = document.querySelector(".carousel-arrow.left");
const rightArrow = document.querySelector(".carousel-arrow.right");

const vehicleImages = {
  jeep: "images/jeep.png",
  truck: "images/truck.png",
  car: "images/car.png",
  motorcycle: "images/motorcycle.png",
  cybertruck: "images/cybertruck.png",
};

const vehicleData = {
  // your entire vehicleData object remains unchanged...
  jeep: [
    {
      title:
        "XKmax LED Headlight Kit for Jeep | RGBW Chasing Halo & App Control | For Wrangler & Gladiator",
      price: "$755.99",
      img: "images/jeepv1.jpg",
      pos: ["30%", "13%"],
    },
    {
      title:
        "XKmax RGBW LED Rock Light Kit with Color Chasing | App-controlled",
      price: "$287.99",
      img: "images/jeepv2.jpg",
      pos: ["82%", "26%"],
    },
    {
      title:
        "XKmax RGB + Amber Fender Vent LED Light for Jeep | App control | For Wrangler & Gladiator",
      price: "$287.99",
      img: "images/jeepv3.jpg",
      pos: ["35%", "55%"],
    },
    {
      title:
        "XKmax Atomix Body Panel LED Light Strip for Jeep | RGB Color Chasing & App | XKGLOW",
      price: "$191.99",
      img: "images/jeepv4.jpg",
      pos: ["60%", "63%"],
    },
    {
      title:
        "5th Wheel Light with Sequential Turn / Brake / Reverse for Jeep & Bronco",
      price: "$179.99",
      img: "images/jeepv5.jpg",
      pos: ["37%", "76%"],
    },
    {
      title:
        "XKmax RGBW LED Whip Lights w/ COB LED strip & app control | For ATV, UTV & Truck",
      price: "$299.99",
      img: "images/jeepv6.jpg",
      pos: ["25%", "90%"],
    },
    {
      title: "2pc LED Truck Bed Light Kit",
      price: "$167.99",
      img: "images/jeepv7.jpg",
      pos: ["51%", "89%"],
    },
  ],
  truck: [
    {
      title:
        "XKmax LED Wheel Ring Lights with RGBW Color Chasing | App-controlled",
      price: "$551.99",
      img: "images/truckv1.jpg",
      pos: ["60%", "18%"],
    },
    {
      title:
        "XKmax RGB LED Grill Light Bar w/ DRL & App Control | For Truck, Car, & UTVs | XKGLOW",
      price: "$179.99",
      img: "images/truckv2.jpg",
      pos: ["25%", "23%"],
    },
    {
      title:
        "XKmax Dual-Mode LED Light Bar w/ RGBW Chasing DRL Strip For Trucks, Jeeps, & UTVs | XKGLOW",
      price: "$191.99",
      img: "images/truckv3.jpg",
      pos: ["12%", "42%"],
    },
    {
      title:
        "XKmax RGBW LED Rock Light Kit with Color Chasing | App-controlled",
      price: "$287.99",
      img: "images/truckv4.jpg",
      pos: ["67%", "63%"],
    },
    {
      title: "2pc LED Truck Bed Light Kit",
      price: "$167.99",
      img: "images/truckv5.jpg",
      pos: ["29%", "73%"],
    },
    {
      title: "48/60inch Truck Tailgate LED Light Bar w/ Sequential Turn Signal",
      price: "$155.99",
      img: "images/truckv6.jpg",
      pos: ["40%", "84%"],
    },
  ],
  car: [
    {
      title:
        "XKmax LED Underglow Light Kit with RGBW Color Chasing | App-controlled",
      price: "$179.99",
      img: "images/carv1.jpg",
      pos: ["67%", "13%"],
    },
    {
      title:
        "2 in1 LED Bulb with Multi-color Devil Eye | XKchrome Smartphone App",
      price: "$214.49",
      img: "images/carv2.jpg",
      pos: ["43%", "30%"],
    },
    {
      title: "LED Dome Light Bulb Kit | XKchrome Smartphone App Controlled",
      price: "$42.89",
      img: "images/carv3.jpg",
      pos: ["14%", "48%"],
    },
    {
      title:
        "XKmax RGB Fiber Optic LED Interior Ambient Light Kit for Car & Truck | Color Chasing | App-controlled",
      price: "$191.99",
      img: "images/carv4.jpg",
      pos: ["28%", "62%"],
    },
    {
      title:
        "XKmax LED Wheel Ring Lights with RGBW Color Chasing | App-controlled",
      price: "$551.99",
      img: "images/carv5.jpg",
      pos: ["48%", "80%"],
    },
  ],
  motorcycle: [
    {
      title: "7'' LED Headlight for Motorcycle | XKchrome Smartphone App",
      price: "$362.99",
      img: "images/motorcyclev1.jpg",
      pos: ["28%", "21%"],
    },
    {
      title:
        "Front MotoTurnz Pro Series LED Turn Signal Inserts for Harley Davidson Motorcycle",
      price: "$179.99",
      img: "images/motorcyclev2.jpg",
      pos: ["45%", "30%"],
    },
    {
      title:
        "XKmax LED Motorcycle Underglow Light Kit w/ RGBW Color Chasing | App-controlled",
      price: "$233.99",
      img: "images/motorcyclev3.jpg",
      pos: ["59%", "49%"],
    },
    {
      title:
        "Rear MotoTurnz Pro Series LED Turn Signal Inserts for Harley Davidson Motorcycle",
      price: "$179.99",
      img: "images/motorcyclev4.jpg",
      pos: ["56%", "78%"],
    },
    {
      title: "Motorcycle LED License Plate Frame w/ White LED",
      price: "$47.99",
      img: "images/motorcyclev5.jpg",
      pos: ["69%", "88%"],
    },
  ],
  cybertruck: [
    {
      title:
        "XKmax LED Underglow Light Kit with RGBW Chasing Lights for Tesla Cybertruck | App-controlled",
      price: "$1299.99",
      img: "images/cybertruckv1.jpg",
      pos: ["80%", "10%"],
    },
    {
      title:
        "XKcommand Switch Panel for Cybertruck | Off-road Light Controller | App-controlled",
      price: "$527.99",
      img: "images/cybertruckv2.jpg",
      pos: ["45%", "16%"],
    },
    {
      title:
        "XKmax Roof LED Off-road Light Bar for Tesla Cybertruck RGBW Chasing DRL & App Control",
      price: "$1199.99",
      img: "images/cybertruckv3.jpg",
      pos: ["12%", "34%"],
    },
    {
      title:
        "XKmax Atomix Profile LED Strip Light Kit for Tesla Cybertruck | RGB Chasing & App",
      price: "$635.99",
      img: "images/cybertruckv4.jpg",
      pos: ["70%", "63%"],
    },
    {
      title:
        "XKmax Roof LED Off-road Light Bar for Tesla Cybertruck RGBW Chasing DRL & App Control",
      price: "$1199.99",
      img: "images/cybertruckv5.jpg",
      pos: ["23%", "84%"],
    },
  ],
};

const vehicleKeys = Object.keys(vehicleImages);
let currentSlide = 0;

// Update main image view by fade
function updateCarouselPosition(vehicle) {
  // Start fade-out
  carouselImages.classList.add("fade");

  // Wait for fade-out
  setTimeout(() => {
    // Move the image
    carouselImages.style.transform = `translateX(-${currentSlide * 100}%)`;

    // 👇 Render markers/cards before fade-in starts
    renderVehicle(vehicle);

    // Start fade-in
    carouselImages.classList.remove("fade");
  }, 200); // ~fade-out duration
}

// Change selected vehicle programmatically
function switchVehicle(vehicle) {
  vehicleButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.vehicle === vehicle);
  });

  // Let updateCarouselPosition handle rendering
  updateCarouselPosition(vehicle);
}

// Render parts and markers
function renderVehicle(vehicle) {
  markerContainer.innerHTML = "";
  cardStack.innerHTML = "";

  const parts = vehicleData[vehicle];
  parts.forEach((part, index) => {
    const marker = document.createElement("div");
    marker.className = "marker";
    marker.textContent = index + 1;
    marker.style.top = part.pos[0];
    marker.style.left = part.pos[1];
    marker.dataset.index = index;
    markerContainer.appendChild(marker);

    const card = document.createElement("div");
    card.className = "card";
    card.dataset.index = index;
    card.innerHTML = `
      <img src="${part.img}" alt="${part.title}" />
      <div class="card-body">
        <h4>${part.title}</h4>
        <p>${part.price}</p>
      </div>
    `;
    cardStack.appendChild(card);

    marker.addEventListener("click", () => {
      document
        .querySelectorAll(".marker, .card")
        .forEach((el) => el.classList.remove("active"));
      marker.classList.add("active");
      card.classList.add("active");
      card.scrollIntoView({ behavior: "smooth", inline: "center" });
    });

    card.addEventListener("mouseenter", () => {
      document
        .querySelectorAll(".marker, .card")
        .forEach((el) => el.classList.remove("active"));
      marker.classList.add("active");
      card.classList.add("active");
    });

    card.addEventListener("click", () => {
      window.location.href = "#";
    });
  });
}

// Button click handlers
vehicleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const vehicle = button.dataset.vehicle;
    currentSlide = vehicleKeys.indexOf(vehicle);
    switchVehicle(vehicle);
  });
});

// Arrow navigation
leftArrow.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + vehicleKeys.length) % vehicleKeys.length;
  switchVehicle(vehicleKeys[currentSlide]);
});

rightArrow.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % vehicleKeys.length;
  switchVehicle(vehicleKeys[currentSlide]);
});

// Init
switchVehicle("jeep");

// Drag-to-scroll on card carousel
let isDown = false,
  startX,
  scrollLeft;

cardStack.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - cardStack.offsetLeft;
  scrollLeft = cardStack.scrollLeft;
  cardStack.classList.add("active");
});
cardStack.addEventListener("mouseleave", () => (isDown = false));
cardStack.addEventListener("mouseup", () => (isDown = false));
cardStack.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - cardStack.offsetLeft;
  const walk = (x - startX) * 2;
  cardStack.scrollLeft = scrollLeft - walk;
});

// Deselect on outside click
document.addEventListener("click", (e) => {
  const isMarker = e.target.closest(".marker");
  const isCard = e.target.closest(".card");
  if (!isMarker && !isCard) {
    document
      .querySelectorAll(".marker, .card")
      .forEach((el) => el.classList.remove("active"));
  }
});
