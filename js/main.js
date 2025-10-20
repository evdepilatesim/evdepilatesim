// Ürün videolarını gösterme fonksiyonu
function showVideos(productType) {
    const productsSection = document.getElementById('products');
    const videosSection = document.getElementById('videos');
    const videoContainer = document.getElementById('video-container');
    
    // Önceki videoları temizle
    videoContainer.innerHTML = '';
    
    // Ürün tipine göre videoları ekle
    let videos = [];
    
    switch(productType) {
        case 'mat':
            videos = [
                { src: 'videos/mat1.mp4', title: 'Pilates Matı Kullanımı - Temel Pozlar' },
                { src: 'videos/mat2.mp4', title: 'Pilates Matı ile Karın Egzersizleri' }
            ];
            break;
        case 'band':
            videos = [
                { src: 'videos/band1.mp4', title: 'Direnç Bandı ile Üst Vücut Egzersizleri' },
                { src: 'videos/band2.mp4', title: 'Direnç Bandı ile Bacak Egzersizleri' }
            ];
            break;
        case 'ball':
            videos = [
                { src: 'videos/ball1.mp4', title: 'Pilates Topu ile Denge Egzersizleri' },
                { src: 'videos/ball2.mp4', title: 'Pilates Topu ile Karın Çalışması' }
            ];
            break;
        default:
            videos = [{ src: 'videos/default.mp4', title: 'Genel Pilates Egzersizi' }];
    }
    
    // Videoları ekle
    videos.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.className = 'video-item';
        videoElement.innerHTML = `
            <h3>${video.title}</h3>
            <video controls width="100%" height="auto">
                <source src="${video.src}" type="video/mp4">
                Tarayıcınız video etiketini desteklemiyor.
            </video>
        `;
        videoContainer.appendChild(videoElement);
    });
    
    // Ürünler section'ını gizle, videolar section'ını göster
    productsSection.style.display = 'none';
    videosSection.style.display = 'block';
}

// Videolar section'ını gizleme fonksiyonu
function hideVideos() {
    const productsSection = document.getElementById('products');
    const videosSection = document.getElementById('videos');
    
    // Videolar section'ını gizle, ürünleri göster
    videosSection.style.display = 'none';
    productsSection.style.display = 'block';
}

// Sayfa yüklendiğinde yapılacaklar
document.addEventListener('DOMContentLoaded', function() {
    console.log('Evde Pilatesim websitesi yüklendi!');
    
    // Demo amaçlı placeholder görselleri yükle
    loadPlaceholderImages();
});

// Placeholder görselleri yükleme fonksiyonu
function loadPlaceholderImages() {
    const productCards = document.querySelectorAll('.product-card img');
    
    // Placeholder servisi kullanarak demo görselleri yükle
    const placeholderUrls = [
        'https://via.placeholder.com/300x250/FFC0CB/000000?text=Pilates+Matı',
        'https://via.placeholder.com/300x250/87CEEB/000000?text=Direnç+Bandı',
        'https://via.placeholder.com/300x250/98FB98/000000?text=Pilates+Topu'
    ];
    
    productCards.forEach((img, index) => {
        if (index < placeholderUrls.length) {
            img.src = placeholderUrls[index];
        }
    });
}