function animateAvatarOnScroll() {
    var offsetTop = 72;
    var hideClass = "hidenAvatar";
    var avatarInHeader = document.querySelector("header .avatar");
    var avatarInHelloSection = document.querySelector("section#hello .avatar");

    window.addEventListener("scroll", function () {
        if (document.body.scrollTop >= offsetTop) {
            avatarInHelloSection.classList.add(hideClass);
            avatarInHeader.classList.remove(hideClass);
        } else {
            avatarInHeader.classList.add(hideClass);
            avatarInHelloSection.classList.remove(hideClass);
        }
    });
}

function initScrollIndicator() {
    window.addEventListener("scroll", function () {
        var bodyTop = document.body.getBoundingClientRect().top;
        var sections = Array.from(document.querySelectorAll('section')).reverse();
        for (var section of sections) {
            var link = document.querySelector('aside a[href*=' + section.id + ']')
            link.classList.remove('active')
        }
        for (var section of sections) {
            var sectionTop = section.getBoundingClientRect().top;
            var relativeSectionTop = sectionTop - bodyTop - 49;
            if (document.body.scrollTop > relativeSectionTop || (section.id === 'hello' && document.body.scrollTop < 0)) {
                var link = document.querySelector('aside a[href*=' + section.id + ']')
                link.classList.add('active')
                break;
            }
        }
    });

}

function updateMailLink() {
    var subject = document.getElementById('subject');
    var message = document.getElementById('message');
    var mailto = 'mailto:to.madcrank@gmail.com?subject=' +
        encodeURIComponent(subject.value) +
        '&body=' +
        encodeURIComponent(message.value);
    var mailLink = document.getElementById('mailLink');
    mailLink.setAttribute('href', mailto);
}

animateAvatarOnScroll();
initScrollIndicator();
