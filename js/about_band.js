function createSlideshow(slideshowId) {
    let currentImageIndex = 0;
    const slideshow = document.getElementById(slideshowId);
    const images = slideshow.querySelectorAll('.slideshow-image');
  
    function showNextImage() {
      images[currentImageIndex].style.display = 'none';
      currentImageIndex = (currentImageIndex + 1) % images.length;
      images[currentImageIndex].style.display = 'block';
    }
  
    setInterval(showNextImage, 5000); 
  
  }
  
  createSlideshow('slideshow1');
  createSlideshow('slideshow2');
  createSlideshow('slideshow3');
  