// IMPORTANT: Replace this demo number with the workshop's real WhatsApp number.
const WHATSAPP_NUMBER = "919876543210"; // country code + number, digits only

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => navMenu.classList.remove("open"));
});

document.querySelectorAll("[data-service]").forEach(link => {
  link.addEventListener("click", () => {
    const service = link.dataset.service;
    const select = document.getElementById("serviceChoice");
    const matchingOption = [...select.options].find(option => option.text === service);
    if (matchingOption) select.value = service;
  });
});

document.getElementById("bookingForm").addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const vehicle = document.getElementById("vehicleType").value;
  const service = document.getElementById("serviceChoice").value;
  const details = document.getElementById("details").value.trim();
  const message = document.getElementById("formMessage");

  if (!/^[0-9+\-\s]{10,15}$/.test(phone)) {
    message.textContent = "Please enter a valid contact number.";
    return;
  }

  const text = `Hello AutoCare Garage, I would like to enquire about a service.%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AVehicle: ${encodeURIComponent(vehicle)}%0AService: ${encodeURIComponent(service)}%0ADetails: ${encodeURIComponent(details || "Not provided")}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener");
  message.textContent = "WhatsApp is opening with your enquiry. Please press Send there.";
});

document.getElementById("whatsappFloat").addEventListener("click", event => {
  event.preventDefault();
  const text = encodeURIComponent("Hello, I would like to enquire about your car/bike service.");
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener");
});

document.getElementById("year").textContent = new Date().getFullYear();
