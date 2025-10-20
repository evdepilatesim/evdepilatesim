// Ürün videolarını gösterme fonksiyonu
function showProductVideos(productType) {
    // Sayfada modal veya yeni bir bölüm oluşturarak videoları gösterebiliriz
    alert(`"${getProductName(productType)}" ürünü için videolar gösterilecek. Gerçek uygulamada burada ilgili ürün videoları listelenecektir.`);
    
    // Alternatif olarak konsola bilgi yazdırabiliriz
    console.log(`"${getProductName(productType)}" videosu gösteriliyor...`);
}

// Ürün adını döndüren yardımcı fonksiyon
function getProductName(productType) {
    switch(productType) {
        case 'mat':
            return 'Pilates Matı';
        case 'band':
            return 'Direnç Bandı';
        case 'ball':
            return 'Pilates Topu';
        default:
            return 'Ürün';
    }
}

// İletişim formu gönderimi
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Form verilerini al
    const formData = new FormData(this);
    
    // Basit doğrulama
    let isValid = true;
    const requiredFields = this.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.style.borderColor = '#e91e63';
        } else {
            field.style.borderColor = '#e1e5eb';
        }
    });
    
    if (isValid) {
        // Form gönderimi simülasyonu
        alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
        this.reset();
    } else {
        alert('Lütfen gerekli alanları doldurun.');
    }
});

// Smooth scroll için bağlantıları dinle
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll efekti
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        header.style.background = 'rgba(102, 126, 234, 0.95)';
    } else {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    }
});

// Sayfa yüklendiğinde yapılacaklar
document.addEventListener('DOMContentLoaded', function() {
    console.log('Evde Pilatesim websitesi yüklendi!');
    
    // Animasyonları başlat
    initAnimations();
    
    // Mobil menü için event listener (ileride eklenebilir)
    initMobileMenu();
});

// Animasyonları başlat
function initAnimations() {
    // Ürün kartları için gözlemci oluştur
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Animasyon uygulanacak elementleri seç
    const animatedElements = document.querySelectorAll('.product-card, .feature-item, .video-card, .testimonial-card');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Mobil menü fonksiyonu (ileride geliştirilebilir)
function initMobileMenu() {
    // Mobil menü için gerekli kodlar buraya eklenebilir
    console.log('Mobil menü sistemi başlatıldı');
}

// Bülten formu gönderimi
document.querySelector('.newsletter button')?.addEventListener('click', function() {
    const emailInput = document.querySelector('.newsletter input');
    const email = emailInput.value.trim();
    
    if (email && isValidEmail(email)) {
        alert('Bülten aboneliğiniz başarıyla oluşturuldu!');
        emailInput.value = '';
    } else {
        alert('Lütfen geçerli bir e-posta adresi girin.');
    }
});

// E-posta doğrulama fonksiyonu
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Video kartları için tıklama olayı
document.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('click', function() {
        const productName = this.querySelector('h3').textContent;
        alert(`"${productName}" videosu için detaylar gösterilecek. Gerçek uygulamada burada ilgili video oynatıcı açılacaktır.`);
    });
});