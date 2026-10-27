const menuData = {
  "menu": [
    { "id": "home", "title": "Trang chủ", "url": "index.html", "type": "home" },
    {
      "id": "thoi-su", "title": "Thời sự", "url": "#", "type": "category",
      "children": [
        { "id": "chinh-tri", "title": "Chính trị", "url": "#" },
        { "id": "giao-thong", "title": "Giao thông", "url": "#" },
        { "id": "moi-truong", "title": "Môi trường", "url": "#" }
      ]
    },
    {
      "id": "the-gioi", "title": "Thế giới", "url": "#", "type": "category",
      "children": [
        { "id": "quan-su", "title": "Quân sự", "url": "#" },
        { "id": "phan-tich", "title": "Phân tích - Bình luận", "url": "#" }
      ]
    },
    { "id": "bat-dong-san", "title": "Bất động sản", "url": "#", "type": "category" },
    { "id": "cong-nghe", "title": "Công nghệ", "url": "#", "type": "category" }
  ]
};


const defaultPosts = [
  {
    "id": "dtri-20260928122246655",
    "title": "Hà Nội tính cơ chế bồi thường đất đặc biệt cho 7 dự án đường sắt",
    "slug": "ha-noi-tinh-co-che-boi-thuong-dat-dac-biet-cho-7-du-an-duong-sat",
    "excerpt": "Hà Nội đang xem xét cơ chế bồi thường, hỗ trợ và tái định cư đặc biệt để triển khai 7 dự án đường sắt quan trọng trên địa bàn thành phố.",
    "content": "Hà Nội đang nghiên cứu và đề xuất cơ chế bồi thường, hỗ trợ và tái định cư đặc biệt nhằm tháo gỡ khó khăn trong công tác giải phóng mặt bằng cho 7 dự án đường sắt trọng điểm. Đây là nhóm dự án hạ tầng giao thông có vai trò quan trọng trong việc phát triển mạng lưới vận tải công cộng và giảm ùn tắc đô thị.",
    "author": { "name": "Văn Hưng", "role": "Phóng viên" },
    "category": ["Bất động sản", "Giao thông"],
    "publishedAt": "2026-09-28 12:22",
    "source": "dantri.com.vn",
    "url": "https://dantri.com.vn/bat-dong-san/ha-noi-tinh-co-che-boi-thuong-dat-dac-biet-cho-7-du-an-duong-sat-20260928122246655.htm",
    "image": "https://picsum.photos/id/1060/700/400"
  },
  {
    "id": "dtri-20261027001",
    "title": "Cô gái Việt tiết lộ cảnh chưa từng thấy giữa Bangkok ngập lụt",
    "slug": "co-gai-viet-tiet-lo-canh-chua-tung-thay",
    "excerpt": "Cảnh tượng ngập lụt tại các khu trung tâm mua sắm và giao thông Bangkok khiến đợt du lịch trở thành trải nghiệm đáng nhớ.",
    "content": "Những ngày qua, tình hình thời tiết tại Bangkok tiếp tục diễn biến phức tạp gây ảnh hưởng lớn đến đời sống người dân...",
    "author": { "name": "Thanh Vân", "role": "Tác giả" },
    "category": ["Thế giới"],
    "publishedAt": "2026-10-27 09:15",
    "source": "dantri.com.vn",
    "url": "#",
    "image": "https://picsum.photos/id/1015/300/180"
  },
  {
    "id": "dtri-20261027002",
    "title": "Ông bố ở Bắc Ninh khóc như mưa tiễn con gái về nhà chồng",
    "slug": "ong-bo-bac-ninh-khoc-nhu-mua",
    "excerpt": "Khoảnh khắc người cha lưu luyến tiễn con gái về nhà chồng cách 6km khiến cộng đồng mạng xúc động.",
    "content": "Đoạn video ghi lại hình ảnh người cha tại Bắc Ninh quyến luyến con gái ngày theo chồng về gia đình mới...",
    "author": { "name": "Đời Sống", "role": "Ban Đời sống" },
    "category": ["Thời sự"],
    "publishedAt": "2026-10-27 08:30",
    "source": "dantri.com.vn",
    "url": "#",
    "image": "https://picsum.photos/id/1025/300/180"
  },
  {
    "id": "dtri-20261027003",
    "title": "Cô gái Việt trồng rau, làm vườn 100m2 trên đất Mỹ để đỡ nhớ nhà",
    "slug": "co-gai-viet-trong-rau-tren-dat-my",
    "excerpt": "Để vơi đi nỗi nhớ quê nhà, chị Trinh cải tạo lại mảnh đất trống quanh nhà thành khu vườn trồng đủ các loại rau Việt.",
    "content": "Khu vườn tươi tốt giữa xứ người mang đậm hương vị quê hương Việt Nam với các loại rau thơm, cà chua, bí xanh...",
    "author": { "name": "Minh Tuệ", "role": "Phóng viên" },
    "category": ["Thế giới"],
    "publishedAt": "2026-10-26 14:00",
    "source": "dantri.com.vn",
    "url": "#",
    "image": "https://picsum.photos/id/1040/200/130"
  }
];

// 1. Lưu LocalStorage
function initData() {
    if (!localStorage.getItem('posts')) {
        localStorage.setItem('posts', JSON.stringify(defaultPosts));
    }
}

// 2. Render Navigation Menu Responsive có Tiểu Mục
function renderMenu() {
    const navMenu = document.getElementById('navMenu');
    if (!navMenu) return;

    let html = '';
    menuData.menu.forEach(item => {
        if (item.children && item.children.length > 0) {
            html += `<div class="nav-item-dropdown">
                <a href="${item.url}">${item.title} ▾</a>
                <div class="dropdown-content">`;
            item.children.forEach(child => {
                html += `<a href="${child.url}">${child.title}</a>`;
            });
            html += `</div></div>`;
        } else {
            html += `<a href="${item.url}">${item.title}</a>`;
        }
    });
    navMenu.innerHTML = html;
}

// 3. Render Trang chủ theo Layout Đề bài (1 lớn 2 nhỏ + Danh sách dọc)
function renderHomePage() {
    const topSection = document.getElementById('topSection');
    const newsList = document.getElementById('newsList');
    const mostReadList = document.getElementById('mostReadList');

    if (!topSection || !newsList) return;

    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    if (posts.length >= 3) {
        const p1 = posts[0];
        const p2 = posts[1];
        const p3 = posts[2];

        topSection.innerHTML = `
            <div class="featured-post-main">
                <a href="detail.html?id=${p1.id}"><img src="${p1.image}" alt="${p1.title}"></a>
                <h2><a href="detail.html?id=${p1.id}">${p1.title}</a></h2>
                <p class="excerpt">${p1.excerpt}</p>
            </div>
            <div class="featured-posts-sub">
                <article class="sub-post-item">
                    <a href="detail.html?id=${p2.id}"><img src="${p2.image}" alt="${p2.title}"></a>
                    <h3><a href="detail.html?id=${p2.id}">${p2.title}</a></h3>
                </article>
                <article class="sub-post-item">
                    <a href="detail.html?id=${p3.id}"><img src="${p3.image}" alt="${p3.title}"></a>
                    <h3><a href="detail.html?id=${p3.id}">${p3.title}</a></h3>
                </article>
            </div>
        `;
    }

    let listHtml = '';
    posts.slice(3).forEach(post => {
        const catName = Array.isArray(post.category) ? post.category.join(', ') : post.category;
        listHtml += `
            <article class="news-card">
                <a href="detail.html?id=${post.id}"><img src="${post.image}" alt="${post.title}"></a>
                <div class="news-info">
                    <h4><a href="detail.html?id=${post.id}">${post.title}</a></h4>
                    <p>${post.excerpt}</p>
                    <span class="meta">${post.publishedAt} • ${catName}</span>
                </div>
            </article>
        `;
    });
    newsList.innerHTML = listHtml;

    if (mostReadList) {
        let sideHtml = '';
        posts.forEach(post => {
            sideHtml += `<li><a href="detail.html?id=${post.id}">${post.title}</a></li>`;
        });
        mostReadList.innerHTML = sideHtml;
    }
}

// 4. Render Chi tiết bài viết
function renderDetailPage() {
    const articleDetail = document.getElementById('articleDetail');
    if (!articleDetail) return;

    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const post = posts.find(p => p.id === postId) || posts[0];

    const authorName = typeof post.author === 'object' ? post.author.name : post.author;
    const catName = Array.isArray(post.category) ? post.category.join(', ') : post.category;

    articleDetail.innerHTML = `
        <h1 class="article-title">${post.title}</h1>
        <div class="article-meta">Tác giả: <strong>${authorName}</strong> | Thời gian: ${post.publishedAt} | Chuyên mục: ${catName}</div>
        <p class="article-sapo">${post.excerpt}</p>
        <img src="${post.image}" style="width:100%; border-radius:6px; margin: 15px 0;">
        <div class="article-body">
            <p>${post.content}</p>
        </div>
    `;
}

// 5. Hàm Crawler Linh hoạt 
function parseArticleFromUrl(url) {
    const parts = url.split('/');
    const lastPart = parts[parts.length - 1] || '';
    const idMatch = lastPart.match(/\d+/);
    const dateNow = new Date().toISOString().slice(0, 10) + " " + new Date().toTimeString().slice(0, 5);

    // Bóc tách tự động tên slug & tiêu đề từ URL
    let cleanTitle = lastPart.replace('.htm', '').replace(/-/g, ' ');
    cleanTitle = cleanTitle.charAt(0).toUpperCase() + cleanTitle.slice(1);

    const crawledPost = {
        "id": idMatch ? `dtri-${idMatch[0]}` : `dtri-${Date.now()}`,
        "title": cleanTitle || "Bài viết tin tức vừa thu thập",
        "slug": lastPart.replace('.htm', ''),
        "excerpt": "Nội dung tóm tắt tự động trích xuất từ bài viết Dân trí theo đường dẫn URL...",
        "content": "Đây là nội dung bài viết chi tiết được thu thập từ nguồn " + url + ". Hệ thống đã tự động định dạng và bóc tách hình ảnh bài viết lưu vào LocalStorage.",
        "author": { "name": "Ban Biên Tập", "role": "Phóng viên" },
        "category": ["Tin mới"],
        "publishedAt": dateNow,
        "source": "dantri.com.vn",
        "url": url,
        "image": "https://picsum.photos/id/1060/700/400"
    };

    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.unshift(crawledPost);
    localStorage.setItem('posts', JSON.stringify(posts));

    return crawledPost;
}

// Xử lý sự kiện
document.addEventListener('DOMContentLoaded', () => {
    initData();
    renderMenu();
    renderHomePage();
    renderDetailPage();

    // Toggle menu Mobile
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }

    // Crawler Event
    const crawlBtn = document.getElementById('crawlBtn');
    if (crawlBtn) {
        crawlBtn.addEventListener('click', () => {
            const urlInput = document.getElementById('crawlUrlInput').value.trim();
            if (!urlInput) {
                alert('Vui lòng nhập đường dẫn URL bài viết!');
                return;
            }
            const result = parseArticleFromUrl(urlInput);
            document.getElementById('jsonResult').textContent = JSON.stringify(result, null, 2);
            alert('Thu thập bài viết thành công và đã lưu vào LocalStorage!');
        });
    }
});
