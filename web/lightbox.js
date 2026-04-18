// Lightbox functionality for project pages
let currentImageIndex = 0;
let currentImages = [];

function openLightbox(galleryItem) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    
    // Get all gallery images
    const galleryItems = document.querySelectorAll('.gallery-item img');
    currentImages = Array.from(galleryItems);
    const clickedImg = galleryItem.querySelector('img');
    currentImageIndex = currentImages.indexOf(clickedImg);
    
    // Set lightbox content
    lightboxImage.src = clickedImg.src;
    lightboxImage.alt = clickedImg.alt;
    
    // Show lightbox
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Add click event to image for next slide
    lightboxImage.onclick = function() {
        nextImage();
    };
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function nextImage() {
    if (currentImageIndex < currentImages.length - 1) {
        currentImageIndex++;
    } else {
        currentImageIndex = 0; // Wrap to first image
    }
    updateLightboxImage();
}

function previousImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
    } else {
        currentImageIndex = currentImages.length - 1; // Wrap to last image
    }
    updateLightboxImage();
}

function updateLightboxImage() {
    const lightboxImage = document.getElementById('lightbox-image');
    
    const currentImg = currentImages[currentImageIndex];
    lightboxImage.src = currentImg.src;
    lightboxImage.alt = currentImg.alt;
    
    // Add click event to image for next slide
    lightboxImage.onclick = function() {
        nextImage();
    };
}

// Initialize event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Close lightbox on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        } else if (e.key === 'ArrowLeft') {
            previousImage();
        }
    });
    
    // Close lightbox on background click
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === this) {
                closeLightbox();
            }
        });
    }
});