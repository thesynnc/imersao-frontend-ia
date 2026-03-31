// Updated functions for referencing stock images and including user-uploaded images.

const stockImagesBasePath = '/assets/stock-images/';

// Function to get image URL for stock photos
function getStockImageUrl(imageName) {
    return `${stockImagesBasePath}${imageName}`;
}

// Function to handle user-uploaded images
function getUserUploadedImageUrl(userImageName) {
    return `/uploads/${userImageName}`;
}

// Example usage of the functions:
const sampleStockImage = getStockImageUrl('example.jpg');
const sampleUserImage = getUserUploadedImageUrl('user-upload.jpg');

// Here you can implement further logic to integrate these image URLs in your app.
