// Product array
const products = [
    { id: "prod001", name: "Ultra HD Smart TV" },
    { id: "prod002", name: "Wireless Bluetooth Headphones" },
    { id: "prod003", name: "Smartphone Pro Max" },
    { id: "prod004", name: "Laptop EliteBook" },
    { id: "prod005", name: "Smart Watch Series 5" },
    { id: "prod006", name: "Noise Cancelling Earbuds" },
    { id: "prod007", name: "4K Action Camera" },
    { id: "prod008", name: "Gaming Console X" }
];

// Populate product select options
document.addEventListener('DOMContentLoaded', function() {
    const productSelect = document.getElementById('productName');
    
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
    
});