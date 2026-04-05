const navItems = document.querySelectorAll('.navItem');

navItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();

        const pageId = this.getAttribute('data-page');

        if (pageId === 'logout') {
            handleLogout();
            return;
        }

        navItems.forEach(nav => nav.classList.remove('active'));

        this.classList.add('active');

        const allPages = document.querySelectorAll('.page, .pageActive');
        allPages.forEach(page => {
            page.classList.remove('pageActive');
            page.classList.add('page');
        });

        const selectedPage = document.getElementById(pageId);
        if (selectedPage) {
            selectedPage.classList.remove('page');
            selectedPage.classList.add('pageActive');
        }
    });
});

// Notification
const notificationBtn = document.querySelector('.notificationBtn');

notificationBtn.addEventListener('click', function() {
    alert('You have no new notifications');
});

// Logout
function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
        alert('Logging out...');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const firstNavItem = document.querySelector('.nav-item');
    if (firstNavItem) {
        firstNavItem.click();
    }
});
