// Drag-to-reveal swipe functionality
let touchStartY = 0;
let currentY = 0;
let isDragging = false;
let isTransitioning = false;
let hasMoved = false;

function initSwipe() {
    const container = document.querySelector('.video-container');
    
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    // Load initial next video
    loadNextVideo();
}

function handleTouchStart(e) {
    if (isTransitioning) return;
    touchStartY = e.touches[0].clientY;
    isDragging = true;
    hasMoved = false;
}

function handleTouchMove(e) {
    if (!isDragging || isTransitioning) return;
    
    e.preventDefault();
    currentY = e.touches[0].clientY;
    const diff = currentY - touchStartY;
    
    // Mark that user has moved their finger
    if (Math.abs(diff) > 5) {
        hasMoved = true;
    }
    
    const currentSlide = document.getElementById('current-slide');
    const nextSlide = document.getElementById('next-slide');
    
    // Only allow upward swipe (negative diff)
    if (diff < 0) {
        const translateValue = diff;
        currentSlide.style.transition = 'none';
        nextSlide.style.transition = 'none';
        currentSlide.style.transform = `translateY(${translateValue}px)`;
        nextSlide.style.transform = `translateY(calc(100% + ${translateValue}px))`;
    }
}

function handleTouchEnd(e) {
    if (!isDragging || isTransitioning) return;
    isDragging = false;
    
    // If user just tapped (didn't move), don't do anything
    if (!hasMoved) {
        return;
    }
    
    const diff = touchStartY - currentY;
    const threshold = window.innerHeight * 0.2; // 20% of screen height
    
    if (diff > threshold) {
        // Complete the swipe
        completeSwipe();
    } else {
        // Cancel the swipe
        cancelSwipe();
    }
}

function completeSwipe() {
    isTransitioning = true;
    
    const currentSlide = document.getElementById('current-slide');
    const nextSlide = document.getElementById('next-slide');
    
    currentSlide.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    nextSlide.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    
    currentSlide.style.transform = 'translateY(-100%)';
    nextSlide.style.transform = 'translateY(0)';
    
    // Pause current video
    const currentVideo = currentSlide.querySelector('.video-player');
    currentVideo.pause();
    
    // Play next video
    const nextVideo = nextSlide.querySelector('.video-player');
    nextVideo.play().catch(e => console.log('Auto-play prevented:', e));
    
    // Add earnings
    if (typeof addEarnings === 'function') {
        addEarnings();
    }
    
    setTimeout(() => {
        // Swap IDs
        currentSlide.id = 'next-slide';
        nextSlide.id = 'current-slide';
        
        // Reset old current (now next) to bottom
        currentSlide.style.transition = 'none';
        currentSlide.style.transform = 'translateY(100%)';
        
        // Load new content for next video
        loadNextVideo();
        
        isTransitioning = false;
    }, 300);
}

function cancelSwipe() {
    const currentSlide = document.getElementById('current-slide');
    const nextSlide = document.getElementById('next-slide');
    
    currentSlide.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    nextSlide.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    
    currentSlide.style.transform = 'translateY(0)';
    nextSlide.style.transform = 'translateY(100%)';
}

function loadNextVideo() {
    const nextSlide = document.getElementById('next-slide');
    const content = getNextContent();
    
    // Update content
    nextSlide.querySelector('.username').textContent = content.username;
    nextSlide.querySelector('.description p').textContent = content.description;
    nextSlide.querySelector('.music-info span').textContent = `Contains: ${content.music}`;
    
    const actionCounts = nextSlide.querySelectorAll('.action-count');
    actionCounts[0].textContent = content.likes;
    actionCounts[1].textContent = content.comments;
    actionCounts[2].textContent = content.saves;
    actionCounts[3].textContent = content.shares;
    
    nextSlide.querySelector('.profile-pic img').src = content.profile1;
    nextSlide.querySelector('.music-profile').src = content.profile2;
    
    const videoSource = nextSlide.querySelector('.video-player source');
    videoSource.src = content.video;
    nextSlide.querySelector('.video-player').load();
}

// Initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSwipe);
} else {
    initSwipe();
}
