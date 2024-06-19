// This is the javascript file for the purchase orders

// U94741303

// Function to load data from CSV file and display it
async function loadAndDisplayData() {
    // Handle errors
    try {
        // Load CSV data using D3
        const data = await d3.dsv(",", "data/purchase_orders.csv");

        // Add list items to ul element
        const ul = d3.select("#purchase-orders-list");

        // Create and append list items for each purchase order
        ul.selectAll("li")
            .data(data)
            .enter()
            .append("li")
            .text(d => `${d.customerName} - ${d.orderId}: ${d.purchaseAmount}`);

    } catch (error) {
        console.error("Error loading data:", error);
    }
}
// Implement data loading with DOM
document.addEventListener("DOMContentLoaded", loadAndDisplayData);