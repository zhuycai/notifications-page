let markAsRead = document.querySelector('.mark-as-read');
let notifications = document.querySelectorAll('.notification-item');
let unreadCount = document.querySelector('.notification-unread-count');

document.addEventListener('DOMContentLoaded', function() {
    unreadCount.innerHTML = countUnread();
});

markAsRead.addEventListener('click', function() {
    notifications.forEach(ele => {
        if (!ele.classList.contains('read')) {
            ele.classList.add('read');
        }
    });

    unreadCount.innerHTML = '0';
});

notifications.forEach(ele => {
    ele.addEventListener('click', function() {
        this.classList.add('read');
        unreadCount.innerHTML = countUnread();
        ele.querySelector('.notification-msg')?.classList.toggle('appear');
    });
});

function countUnread() {
    let unreadNum = 0;
    notifications.forEach(ele => {
        if (!ele.classList.contains('read')) unreadNum++
    });

    return unreadNum;
}