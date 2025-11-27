// Random data arrays
const randomUsernames = ['@emma_rose', '@sophia_belle', '@olivia_grace', '@ava_marie', '@isabella_joy', '@mia_luna', '@charlotte_sky', '@amelia_star', '@harper_love', '@evelyn_bloom', '@abigail_pearl', '@emily_rose', '@ella_mae', '@madison_faith', '@scarlett_hope', '@victoria_dawn', '@aria_moon', '@grace_lily', '@chloe_rain', '@camila_sun'];
const randomDescriptions = [
    'isnt it so cuteeee #funny #memes #viral',
    'POV: When you finally get it right ✨ #relatable #fyp #trending',
    'Can\'t stop watching this 😍 #satisfying #oddlysatisfying',
    'Trying this new trend! What do you think? 💕 #trend #dance #foryou',
    'Life hack that changed everything 🤯 #lifehack #tips #musttry',
    'When your favorite part comes on 🎵 #music #vibe #mood',
    'Story time! This actually happened... 📖 #storytime #real #tea',
    'Quick tutorial for everyone asking 💅 #tutorial #howto #beauty',
    'This made my day 🌸 #happy #blessed #goodvibes',
    'POV: You\'re living your best life 💫 #pov #aesthetic #dreamy',
    'Obsessed with this filter 🦋 #filter #beauty #glowup',
    'Get ready with me! 💄 #grwm #makeup #routine',
    'Outfit of the day 👗 #ootd #fashion #style',
    'This song hits different 🎶 #music #mood #feelings',
    'Manifesting good vibes only ✨ #manifest #positive #energy'
];
const randomMusic = ['Original Sound', 'Blow Your Mind', 'Dance Monkey', 'Savage Love', 'Levitating', 'Stay', 'Heat Waves', 'Good 4 U', 'Industry Baby', 'Peaches'];

// Video and profile picture lists
const videoFiles = [
    'videos/ssstik.io_1764268307275.mp4',
    'videos/ssstik.io_1764268566360.mp4',
    'videos/ssstik.io_1764268678592.mp4',
    'videos/ssstik.io_1764268738266.mp4',
    'videos/ssstik.io_1764268794487.mp4',
    'videos/ssstik.io_1764268840949.mp4',
    'videos/ssstik.io_1764268916359.mp4',
    'videos/ssstik.io_1764268971249.mp4',
    'videos/ssstik.io_1764269041685.mp4',
    'videos/ssstik.io_1764269270535.mp4',
    'videos/ssstik.io_1764269416111.mp4',
    'videos/ssstik.io_1764269474155.mp4',
    'videos/ssstik.io_1764269542232.mp4',
    'videos/ssstik.io_1764269609990.mp4',
    'videos/ssstik.io_@margeauintech_1764269845457.mp4'
];

const profileFiles = [
    'profile pictures/media.jpg',
    'profile pictures/media (1).jpg',
    'profile pictures/media (2).jpg',
    'profile pictures/media (3).jpg',
    'profile pictures/media (4).jpg',
    'profile pictures/media (5).jpg',
    'profile pictures/tiktok_video_2aiAR.jpeg',
    'profile pictures/tiktok_video_7JEaA.jpeg',
    'profile pictures/tiktok_video_8lZbl.jpeg',
    'profile pictures/tiktok_video_Cdyc7.jpeg',
    'profile pictures/tiktok_video_LjfC6.jpeg',
    'profile pictures/tiktok_video_VdOfu.jpeg',
    'profile pictures/tiktok_video_ftm9Z.jpeg',
    'profile pictures/tiktok_video_kHzUL.jpeg',
    'profile pictures/tiktok_video_otvwf.jpeg',
    'profile pictures/db32458f58ca5795684a76e33fe0ad5d~tplv-tiktokx-cropcenter_1080_1080.jpeg'
];

// Track current indices
let currentVideoIndex = 1; // Start at 1 since first video is already loaded in HTML
let currentProfileIndex = 2; // Start at 2 since first two profiles are in HTML
let currentDescriptionIndex = 0; // Track description index

// Earnings tracking
let totalEarnings = (Math.random() * 5 + 1).toFixed(2); // Random starting amount between $1-$6
let earningsElement = null;

// Initialize earnings display
function initEarnings() {
    earningsElement = document.querySelector('.earnings-amount');
    if (earningsElement) {
        earningsElement.textContent = `$${totalEarnings}`;
    }
}

// Add earnings on video change
function addEarnings() {
    const earned = (Math.random() * 4 + 1).toFixed(2); // Random $1-$5
    totalEarnings = (parseFloat(totalEarnings) + parseFloat(earned)).toFixed(2);
    
    if (earningsElement) {
        earningsElement.textContent = `$${totalEarnings}`;
        
        // Add subtle pulse animation
        const banner = document.querySelector('.earnings-banner');
        banner.style.transform = 'translateX(-50%) scale(1.05)';
        setTimeout(() => {
            banner.style.transform = 'translateX(-50%) scale(1)';
        }, 150);
    }
    
    // Create floating dollar animations
    createFloatingDollars(earned);
}

// Create floating dollar animations
function createFloatingDollars(amount) {
    const count = Math.floor(Math.random() * 2) + 3; // 3-4 dollars
    const banner = document.querySelector('.earnings-banner');
    const bannerRect = banner.getBoundingClientRect();
    
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const dollar = document.createElement('div');
            dollar.className = 'dollar-float';
            dollar.textContent = '$';
            
            // Random position from anywhere along the top of the banner
            const randomX = (Math.random() - 0.5) * 60; // -30 to 30
            const startX = bannerRect.left + (Math.random() * bannerRect.width); // Random across entire width
            const startY = bannerRect.top - 5; // Pop out from top
            
            dollar.style.left = `${startX}px`;
            dollar.style.top = `${startY}px`;
            dollar.style.setProperty('--x-offset', `${randomX}px`);
            
            document.body.appendChild(dollar);
            
            // Remove after animation
            setTimeout(() => {
                dollar.remove();
            }, 1800);
        }, i * 150); // Slower stagger
    }
}

// Initialize earnings when page loads
document.addEventListener('DOMContentLoaded', initEarnings);
if (document.readyState !== 'loading') {
    initEarnings();
}

// Format numbers like TikTok (1.2K, 3.4M, etc.)
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// Get next content linearly (not random)
function getNextContent() {
    const username = randomUsernames[Math.floor(Math.random() * randomUsernames.length)];
    
    // Get next description linearly
    const description = randomDescriptions[currentDescriptionIndex];
    currentDescriptionIndex = (currentDescriptionIndex + 1) % randomDescriptions.length;
    
    const likes = Math.floor(Math.random() * 900000) + 100;
    const comments = Math.floor(Math.random() * 50000) + 100;
    const saves = Math.floor(Math.random() * 20000) + 100;
    const shares = Math.floor(Math.random() * 10000) + 100;
    const music = randomMusic[Math.floor(Math.random() * randomMusic.length)];
    
    // Get next video linearly
    const video = videoFiles[currentVideoIndex];
    currentVideoIndex = (currentVideoIndex + 1) % videoFiles.length;
    
    // Get next profile pictures linearly
    const profile1 = profileFiles[currentProfileIndex];
    currentProfileIndex = (currentProfileIndex + 1) % profileFiles.length;
    const profile2 = profileFiles[currentProfileIndex];
    currentProfileIndex = (currentProfileIndex + 1) % profileFiles.length;
    
    return {
        username,
        description,
        likes: formatNumber(likes),
        comments: formatNumber(comments),
        saves: formatNumber(saves),
        shares: formatNumber(shares),
        music,
        video,
        profile1,
        profile2
    };
}

// Generate random content (for backwards compatibility)
function generateRandomContent() {
    return getNextContent();
}

// PWA Install Prompt - REMOVED
// let deferredPrompt;

// window.addEventListener('beforeinstallprompt', (e) => {
//     e.preventDefault();
//     deferredPrompt = e;
//     
//     // Show install button or banner
//     showInstallButton();
// });

// function showInstallButton() {
//     const installBtn = document.createElement('button');
//     installBtn.textContent = '📱 Install App';
//     installBtn.style.cssText = `
//         position: fixed;
//         bottom: 100px;
//         right: 20px;
//         background: #ff4458;
//         color: white;
//         border: none;
//         padding: 12px 20px;
//         border-radius: 20px;
//         font-weight: 600;
//         cursor: pointer;
//         z-index: 1000;
//         box-shadow: 0 4px 12px rgba(255, 68, 88, 0.3);
//         transition: transform 0.2s;
//     `;
//     
//     installBtn.addEventListener('click', async () => {
//         if (deferredPrompt) {
//             deferredPrompt.prompt();
//             const { outcome } = await deferredPrompt.userChoice;
//             console.log(`User response to the install prompt: ${outcome}`);
//             deferredPrompt = null;
//             installBtn.remove();
//         }
//     });
//     
//     installBtn.addEventListener('mouseenter', () => {
//         installBtn.style.transform = 'scale(1.05)';
//     });
//     
//     installBtn.addEventListener('mouseleave', () => {
//         installBtn.style.transform = 'scale(1)';
//     });
//     
//     document.body.appendChild(installBtn);
//     
//     // Auto-hide after 10 seconds
//     setTimeout(() => {
//         if (installBtn.parentNode) {
//             installBtn.remove();
//         }
//     }, 10000);
// }

// Check if app is already installed
// window.addEventListener('appinstalled', () => {
//     console.log('PWA was installed');
//     // Hide install button if shown
//     const installBtn = document.querySelector('button[textContent*="Install"]');
//     if (installBtn) installBtn.remove();
// });

// Swipe functionality removed - now in swipe.js

// Video controls
const videos = document.querySelectorAll('.video-player');

// Play/pause on video click
videos.forEach(video => {
    video.addEventListener('click', () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});

// Like button interaction
document.querySelector('.action-item:nth-child(2) .action-icon').addEventListener('click', function() {
    this.style.filter = this.style.filter.includes('sepia') ? 
        'brightness(0) invert(1)' : 
        'brightness(0) saturate(100%) invert(16%) sepia(95%) saturate(4948%) hue-rotate(353deg) brightness(96%) contrast(119%)';
    
    // Animate the heart
    this.style.transform = 'scale(1.2)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 200);
});

// Comment button interaction
document.querySelector('.action-item:nth-child(3) .action-icon').addEventListener('click', function() {
    alert('Comments feature coming soon!');
});

// Save button interaction
document.querySelector('.action-item:nth-child(4) .action-icon').addEventListener('click', function() {
    this.style.filter = this.style.filter.includes('sepia') ? 
        'brightness(0) invert(1)' : 
        'brightness(0) saturate(100%) invert(16%) sepia(95%) saturate(4948%) hue-rotate(353deg) brightness(96%) contrast(119%)';
});

// Share button interaction
document.querySelector('.action-item:nth-child(5) .action-icon').addEventListener('click', function() {
    if (navigator.share) {
        navigator.share({
            title: 'Check out this TikTok video!',
            text: 'Amazing video on TikTok Clone',
            url: window.location.href
        });
    } else {
        alert('Share link copied to clipboard!');
    }
});

// Navigation tab switching
document.querySelectorAll('.nav-tabs span').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.nav-tabs span').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        // Generate new content when switching tabs
        updateContent();
    });
});

// Bottom navigation
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});

// Swipe up/down for next/previous video (basic implementation)
let startY = 0;
let endY = 0;

video.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
});

video.addEventListener('touchend', (e) => {
    endY = e.changedTouches[0].clientY;
    const diff = startY - endY;
    
    if (Math.abs(diff) > 50) { // Minimum swipe distance
        if (diff > 0) {
            // Swipe up - next video
            updateContent();
            video.currentTime = 0;
        } else {
            // Swipe down - previous video
            updateContent();
            video.currentTime = 0;
        }
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
        updateContent();
        video.currentTime = 0;
    } else if (e.key === 'ArrowDown') {
        updateContent();
        video.currentTime = 0;
    } else if (e.key === ' ') {
        e.preventDefault();
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }
});

// Update time display - REMOVED
// function updateTime() {
//     const now = new Date();
//     const hours = now.getHours().toString().padStart(2, '0');
//     const minutes = now.getMinutes().toString().padStart(2, '0');
//     document.querySelector('.time').textContent = `${hours}:${minutes}`;
// }

// Initialize
// updateTime();
updateContent();
// setInterval(updateTime, 60000); // Update time every minute
// setInterval(updateTime, 1000); // Update time every second for real-time

// Auto-play video when page loads
video.play().catch(e => {
    console.log('Auto-play prevented:', e);
});

// Handle visibility change to pause/play video
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        video.pause();
    } else {
        video.play().catch(e => console.log('Auto-play prevented:', e));
    }
});
