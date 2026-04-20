// Vehicle Fleet Data
const vehicleFleet = [
    { name: 'Car A', price: 100 },
    { name: 'Car B', price: 150 },
    { name: 'Car C', price: 200 },
    { name: 'Car D', price: 120 },
    { name: 'Car E', price: 180 },
    { name: 'Car F', price: 90 },
    { name: 'Car G', price: 250 },
    { name: 'Car H', price: 300 },
    { name: 'Car I', price: 220 },
];

// Function to Initialize Fleet Display
function initFleet() {
    const fleetContainer = document.getElementById('fleet');
    vehicleFleet.forEach(vehicle => {
        const vehicleDiv = document.createElement('div');
        vehicleDiv.innerHTML = `<h3>${vehicle.name}</h3><p>Price: $${vehicle.price}/day</p>`;
        fleetContainer.appendChild(vehicleDiv);
    });
}

// Function to Populate Vehicle Dropdown
function populateVehicleSelect() {
    const vehicleSelect = document.getElementById('vehicle-select');
    vehicleFleet.forEach(vehicle => {
        const option = document.createElement('option');
        option.value = vehicle.name;
        option.text = vehicle.name;
        vehicleSelect.add(option);
    });
}

// Function to Calculate Rental Cost
function calculateCost(days) {
    const selectedVehicle = vehicleFleet.find(vehicle => vehicle.name === document.getElementById('vehicle-select').value);
    return selectedVehicle ? selectedVehicle.price * days : 0;
}

// Booking Form Submission Handler
document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const days = parseInt(document.getElementById('rental-days').value);
    const totalCost = calculateCost(days);
    alert(`Total Cost: $${totalCost}`);
});

// Contact Form Submission Handler
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us!');
});

// Smooth Scroll for Navigation Links
const scrollToBooking = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        scrollToBooking(this.getAttribute('href').substring(1));
    });
});

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
mobileMenuToggle.addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.toggle('show');
});

// Event Listeners for Date and Vehicle Changes
document.getElementById('rental-days').addEventListener('change', () => {
    const days = parseInt(document.getElementById('rental-days').value);
    const totalCost = calculateCost(days);
    document.getElementById('total-cost').innerText = `Total Cost: $${totalCost}`;
});

// Initialize on Load
window.onload = function() {
    initFleet();
    populateVehicleSelect();
};
