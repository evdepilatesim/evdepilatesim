// Ekranları değiştirme fonksiyonu
function showProductsScreen() {
    document.getElementById('products').style.display = 'block';
    document.getElementById('videos').style.display = 'none';
    
    // URL hash'ini temizle
    window.location.hash = '';
}

function showVideosScreen() {
    document.getElementById('products').style.display = 'none';
    document.getElementById('videos').style.display = 'block';
}

// Ürün videolarını gösterme fonksiyonu
function showProductVideos(productType) {
    const videoTitle = document.getElementById('video-title');
    const videoContainer = document.getElementById('video-container');
    
    // Önceki videoları temizle
    videoContainer.innerHTML = '';
    
    // Ürün tipine göre başlık ve videoları ayarla
    let title = '';
    let videos = [];
    
    switch(productType) {
        case 'mat':
            title = 'Pilates Matı Videoları';
            videos = [
                { 
                    src: 'videos/mat1.mp4', 
                    title: 'Pilates Matı Kullanımı - Temel Pozlar'
                },
                { 
                    src: 'videos/mat2.mp4', 
                    title: 'Pilates Matı ile Karın Egzersizleri'
                }
            ];
            break;
        case 'band':
            title = 'Direnç Bandı Videoları';
            videos = [
                { 
                    src: 'videos/band1.mp4', 
                    title: 'Direnç Bandı ile Üst Vücut Egzersizleri'
                },
                { 
                    src: 'videos/band2.mp4', 
                    title: 'Direnç Bandı ile Bacak Egzersizleri'
                }
            ];
            break;
        case 'ball':
            title = 'Pilates Topu Videoları';
            videos = [
                { 
                    src: 'videos/ball1.mp4', 
                    title: 'Pilates Topu ile Denge Egzersizleri'
                },
                { 
                    src: 'videos/ball2.mp4', 
                    title: 'Pilates Topu ile Karın Çalışması'
                }
            ];
            break;
        default:
            title = 'Ürün Videoları';
            videos = [{ 
                src: 'videos/default.mp4', 
                title: 'Genel Ürün Tanıtımı'
            }];
    }
    
    // Başlığı güncelle
    videoTitle.textContent = title;
    
    // Videoları ekle
    const videoGrid = document.createElement('div');
    videoGrid.className = 'video-container';
    
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
        videoGrid.appendChild(videoElement);
    });
    
    videoContainer.appendChild(videoGrid);
    
    // Ekranları değiştir
    showVideosScreen();
    
    // Sayfanın en üstüne scroll yap
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Tüm videoları gösterme fonksiyonu
function showAllVideos() {
    const videoTitle = document.getElementById('video-title');
    const videoContainer = document.getElementById('video-container');
    
    // Önceki videoları temizle
    videoContainer.innerHTML = '';
    
    // Başlığı güncelle
    videoTitle.textContent = 'Tüm Ürün Videoları';
    
    // Tüm videoları ekle
    const allVideos = [
        { 
            src: 'videos/mat1.mp4', 
            title: 'Pilates Matı - Temel Pozlar',
            category: 'Pilates Matı'
        },
        { 
            src: 'videos/mat2.mp4', 
            title: 'Pilates Matı - Karın Egzersizleri',
            category: 'Pilates Matı'
        },
        { 
            src: 'videos/band1.mp4', 
            title: 'Direnç Bandı - Üst Vücut',
            category: 'Direnç Bandı'
        },
        { 
            src: 'videos/band2.mp4', 
            title: 'Direnç Bandı - Bacak Egzersizleri',
            category: 'Direnç Bandı'
        },
        { 
            src: 'videos/ball1.mp4', 
            title: 'Pilates Topu - Denge Egzersizleri',
            category: 'Pilates Topu'
        },
        { 
            src: 'videos/ball2.mp4', 
            title: 'Pilates Topu - Karın Çalışması',
            category: 'Pilates Topu'
        }
    ];
    
    // Videoları kategorilere göre grupla
    const videoGrid = document.createElement('div');
    videoGrid.className = 'video-container';
    
    allVideos.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.className = 'video-item';
        videoElement.innerHTML = `
            <h3>${video.title}</h3>
            <p><strong>Kategori:</strong> ${video.category}</p>
            <video controls width="100%" height="auto">
                <source src="${video.src}" type="video/mp4">
                Tarayıcınız video etiketini desteklemiyor.
            </video>
        `;
        videoGrid.appendChild(videoElement);
    });
    
    videoContainer.appendChild(videoGrid);
    
    // Ekranları değiştir
    showVideosScreen();
    
    // Sayfanın en üstüne scroll yap
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Sayfa yüklendiğinde yapılacaklar
document.addEventListener('DOMContentLoaded', function() {
    console.log('Evde Pilatesim websitesi yüklendi!');
    
    // Hash değişikliklerini dinle
    window.addEventListener('hashchange', function() {
        if (window.location.hash === '#products' || window.location.hash === '') {
            showProductsScreen();
        }
    });
    
    // Sayfa yüklendiğinde doğru ekranı göster
    if (window.location.hash === '#videos') {
        showVideosScreen();
    }
});