document.addEventListener('DOMContentLoaded', () => {
    const buttons = {
        alert: document.getElementById('alertBtn'),
        payFine: document.getElementById('payFineBtn'),
        locateYards: document.getElementById('locateYardsBtn'),
        contactPolice: document.getElementById('contactPoliceBtn')
    };

    // Alert Button Functionality
    buttons.alert.addEventListener('click', () => {
        alert('Emergency Alert System activated! Please provide details.');
    });

    // Pay Fine Button Functionality
    buttons.payFine.addEventListener('click', () => {
        alert('Redirecting to Fine Payment Portal');
        // In a real application, this would redirect to a payment gateway
    });

    // Locate Towing Yards Button Functionality
    buttons.locateYards.addEventListener('click', () => {
        alert('Opening Towing Yards Locator');
        // In a real application, this would open a map or list of yards
    });

    // Contact Police Button Functionality
    buttons.contactPolice.addEventListener('click', () => {
        alert('Emergency Police Contact Initiated');
        // In a real application, this might trigger an emergency call or contact form
    });
});