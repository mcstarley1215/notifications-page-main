const notifDot = document.querySelectorAll('.js-new-notif-dot');
const notifCount = document.querySelector('.js-notif-count');
const markAllRead = document.querySelector('.js-mark-all');
const unreadNotif = document.querySelectorAll('.js-unread-notif');

let totalNotif = 0;

document.querySelectorAll('.js-new-notif')
  .forEach((newNotif) => {
    totalNotif ++;
    notifCount.innerHTML = totalNotif;
    newNotif.addEventListener('click', () => {
      newNotif.classList.remove('new-notifications-container');
      newNotif.classList.add('notifications-container');
      if (totalNotif <= 0) {
        return totalNotif;
      } else {
        totalNotif --;
        notifCount.innerHTML = totalNotif;
      }
    });
    markAllRead.addEventListener ('click', () => {
      newNotif.classList.remove('new-notifications-container');
      newNotif.classList.add('notifications-container');
      notifCount.innerHTML = 0;
    });
  });

