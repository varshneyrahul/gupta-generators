// GUPTA GENERATORS - CENTRAL ADMIN CONFIGURATION
// Update these values to change information across the entire website instantly

const BusinessConfig = {
    name: "Gupta Generators",
    tagline: "Premium Diesel Generator Rental & Repair Services (40 KVA to 1500 KVA)",
    phone: "+919810132569",
    phoneDisplay: "+91 98101 32569",
    whatsapp: "919810132569",
    email: "Guptageneratorgzb@gmail.com",
    address: "C 33 Patel Nagar II, Meerut Road, Ghaziabad, U.P., India",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.582315758117!2d77.4418!3d28.6723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bb1234567f%3A0x123456789abcdef!2sPatel+Nagar%2C+Ghaziabad%2C+Uttar+Pradesh!5e0!3m2!1sen!2sin!4v1717180000000!5m2!1sen!2sin",
    socialLinks: {
        facebook: "https://facebook.com/guptagenerators",
        instagram: "https://instagram.com/guptagenerators",
        linkedin: "https://linkedin.com/company/guptagenerators"
    }
};

// Auto-inject config items to DOM on load
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-config='name']").forEach(el => el.textContent = BusinessConfig.name);
    document.querySelectorAll("[data-config='phone-link']").forEach(el => el.href = `tel:${BusinessConfig.phone}`);
    document.querySelectorAll("[data-config='phone-text']").forEach(el => el.textContent = BusinessConfig.phoneDisplay);
    document.querySelectorAll("[data-config='email-link']").forEach(el => el.href = `mailto:${BusinessConfig.email}`);
    document.querySelectorAll("[data-config='email-text']").forEach(el => el.textContent = BusinessConfig.email);
    document.querySelectorAll("[data-config='address-text']").forEach(el => el.textContent = BusinessConfig.address);
    
    const waBtn = document.querySelectorAll("[data-config='whatsapp-link']");
    waBtn.forEach(el => {
        el.href = `https://wa.me/${BusinessConfig.whatsapp}?text=Hello%20Gupta%20Generators%2C%20I%20am%20interested%20in%20your%20DG%20Set%20services.`;
    });
});