// Sample data - replace with your actual data
const contentData = [
    { type: "image", category: "category1", url: "/photos/wallpaperflare.com_wallpaper (1).jpg" },
    { type: "image", category: "category2", url: "/photos/wallpaperflare.com_wallpaper1.jpg" },
    { type: "image", category: "category1", url: "/photos/wallpaperflare.com_wallpaper (2).jpg" },
    { type: "image", category: "category2", url: "/photos/wallpaperflare.com_wallpaper2.jpg"},
    { type: "image", category: "category1", url: "/photos/wallpaperflare.com_wallpaper (3).jpg" },
    { type: "image", category: "category2", url: "/photos/wallpaperflare.com_wallpaper3.jpg" },
    { type: "image", category: "category1", url: "/photos/wallpaperflare.com_wallpaper (4).jpg" },
    { type: "image", category: "category2", url: "/photos/wallpaperflare.com_wallpaper4.jpg" },
    { type: "image", category: "category1", url: "/photos/wallpaperflare.com_wallpaper.jpg" },
    { type: "image", category: "category2", url: "/photos/wallpaperflare.com_wallpaper5.jpg" },






    // Add more data as needed
];

// Function to render content based on filters
function renderContent(filterText, filterCategory) {
    const contentContainer = document.querySelector('.content');
    contentContainer.innerHTML = '';

    contentData.forEach(item => {
        if ((item.category === filterCategory || filterCategory === '') &&
            (item.type.includes(filterText) || filterText === '')) {
            const contentItem = document.createElement(item.type === 'image' ? 'img' : 'video');
            contentItem.src = item.url;
            contentItem.alt = item.category;
            contentContainer.appendChild(contentItem);
        }
    });
}

// Function to filter content based on user input
function filterContent() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const categoryFilter = document.getElementById('categorySelect').value.toLowerCase();
    renderContent(searchText, categoryFilter);
}

// Initial render
renderContent('', '');
