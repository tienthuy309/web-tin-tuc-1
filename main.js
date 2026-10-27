const menuData = {
  "menu": [
    { "id": "home", "title": "Trang chủ", "url": "index.html", "type": "home" },
    { "id": "latest", "title": "Mới nhất", "url": "#", "type": "category" },
    {
      "id": "the-gioi", "title": "Thế giới", "url": "#", "type": "category",
      "children": [
        { "id": "quan-su", "title": "Quân sự", "url": "#" },
        { "id": "phan-tich", "title": "Phân tích - Bình luận", "url": "#" }
      ]
    },
    {
      "id": "thoi-su", "title": "Thời sự", "url": "#", "type": "category",
      "children": [
        { "id": "chinh-tri", "title": "Chính trị", "url": "#" },
        { "id": "giao-thong", "title": "Giao thông", "url": "#" }
      ]
    },
    { "id": "bat-dong-san", "title": "Bất động sản", "url": "#", "type": "category" }
  ]
};

const defaultPosts = [
  {
    "id": "dtri-20260928122246655",
    "title": "Hà Nội tính cơ chế bồi thường đất đặc biệt cho 7 dự án đường sắt",
    "slug": "ha-noi-tinh-co-che-boi-thuong-dat-dac-biet-cho-7-du-an-duong-sat",
    "excerpt": "Hà Nội đang xem xét cơ chế bồi thường, hỗ trợ và tái định cư đặc biệt để triển khai 7 dự án đường sắt quan trọng trên địa bàn thành phố.",
    "content": "Hà Nội đang nghiên cứu và đề xuất cơ chế bồi thường, hỗ trợ và tái định cư đặc biệt nhằm tháo gỡ khó khăn trong công tác giải phóng mặt bằng cho 7 dự án đường sắt trọng điểm...",
    "author": "Văn Hưng",
    "category": "Bất động sản",
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
    "content": "Những ngày qua, tình hình thời tiết tại Bangkok tiếp tục diễn biến phức tạp...",
    "author": "Thanh Vân",
    "category": "Thế giới",
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
    "content": "Đoạn video ghi lại hình ảnh người cha tại Bắc Ninh quyến luyến con gái...",
    "author": "Đời Sống",
    "category": "Thời sự",
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
    "content": "Khu vườn tươi tốt giữa xứ người mang đậm hương vị quê hương Việt Nam...",
    "author": "Minh Tuệ",
    "category": "Thế giới",
    "publishedAt": "2026-10-26 14:00",
    "source": "dantri.com.vn",
    "url": "#",
    "image": "https://picsum.photos/id/1040/200/130"
  }
];

// 1. Khởi tạo dữ liệu vào LocalStorage
function initData() {
    if (!localStorage.getItem('posts')) {
        localStorage.setItem('posts', JSON.stringify(defaultPosts));
    }
}

// 2. Render Navigation Menu Phân Cấp
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

// 3.
function renderHomePage() {
    const topSection = document.getElementById('topSection');
    const newsList = document.getElementById('newsList');
    const mostReadList = document.getElementById('mostReadList');

    if (!topSection || !newsList) return;

    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    // Top Section 
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
        listHtml += `
            <article class="news-card">
                <a href="detail.html?id=${post.id}"><img src="${post.image}" alt="${post.title}"></a>
                <div class="news-info">
                    <h4><a href="detail.html?id=${post.id}">${post.title}</a></h4>
                    <p>${post.excerpt}</p>
                    <span class="meta">${post.publishedAt} • ${post.category}</span>
                </div>
            </article>
        `;
    });
    newsList.innerHTML = listHtml;

    // Sidebar
    if (mostReadList) {
        let sideHtml = '';
        posts.forEach(post => {
            sideHtml += `<li><a href="detail.html?id=${post.id}">${post.title}</a></li>`;
        });
        mostReadList.innerHTML = sideHtml;
    }
}

// 4. Render Trang Chi Tiết Bài Viết
function renderDetailPage() {
    const articleDetail = document.getElementById('articleDetail');
    if (!articleDetail) return;

    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const post = posts.find(p => p.id === postId) || posts[0];

    articleDetail.innerHTML = `
        <h1 class="article-title">${post.title}</h1>
        <div class="article-meta">Tác giả: <strong>${post.author}</strong> | Đăng lúc: ${post.publishedAt} | Chuyên mục: ${post.category}</div>
        <p class="article-sapo">${post.excerpt}</p>
        <img src="${post.image}" style="width:100%; border-radius:6px; margin: 15px 0;">
        <div class="article-body">
            <p>${post.content}</p>
        </div>
    `;
}

// 5.
function crawlArticleFromUrl(url) {
    // Trích xuất Slug & ID từ URL
    const parts = url.split('/');
    const lastPart = parts[parts.length - 1] || '';
    const idMatch = lastPart.match(/\d+/);
    const postDate = new Date().toISOString().slice(0, 10) + " " + new Date().toTimeString().slice(0, 5);

    const crawledObject = {
        "id": idMatch ? `dtri-${idMatch[0]}` : `dtri-${Date.now()}`,
        "title": "Hà Nội tính cơ chế bồi thường đất đặc biệt cho 7 dự án đường sắt",
        "slug": lastPart.replace('.htm', ''),
        "excerpt": "Hà Nội đang xem xét cơ chế bồi thường, hỗ trợ và tái định cư đặc biệt để triển khai 7 dự án đường sắt quan trọng trên địa bàn thành phố.",
        "content": "Hà Nội đang nghiên cứu và đề xuất cơ chế bồi thường, hỗ trợ và tái định cư đặc biệt nhằm tháo gỡ khó khăn trong công tác giải phóng mặt bằng cho 7 dự án đường sắt trọng điểm. Đây là nhóm dự án hạ tầng giao thông có vai trò quan trọng...",
        "author": "Văn Hưng",
        "category": "Bất động sản",
        "publishedAt": postDate,
        "source": "dantri.com.vn",
        "url": url,
        "image": "https://picsum.photos/id/1060/700/400"
    };

    // Lưu bài viết vừa crawl vào LocalStorage
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.unshift(crawledObject); // Đưa bài mới lên đầu
    localStorage.setItem('posts', JSON.stringify(posts));

    return crawledObject;
}

// Sự kiện bấm nút Crawl
document.addEventListener('DOMContentLoaded', () => {
    initData();
    renderMenu();
    renderHomePage();
    renderDetailPage();

    const crawlBtn = document.getElementById('crawlBtn');
    if (crawlBtn) {
        crawlBtn.addEventListener('click', () => {
            const urlInput = document.getElementById('crawlUrlInput').value.trim();
            if (!urlInput) {
                alert('Vui lòng nhập URL!');
                return;
            }
            const jsonResult = crawlArticleFromUrl(urlInput);
            document.getElementById('jsonResult').textContent = JSON.stringify(jsonResult, null, 2);
            alert('Crawl dữ liệu thành công! Đã lưu bài viết vào LocalStorage.');
        });
    }
});
