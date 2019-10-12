function animateAvatarOnScroll() {
    var offsetTop = 72;
    var hideClass = "hidenAvatar";
    var avatarInHeader = document.querySelector("header .avatar");
    var avatarInHelloSection = document.querySelector("section#hello .avatar");

    window.addEventListener("scroll", function() {
        if (document.body.scrollTop > offsetTop) {
            avatarInHelloSection.classList.add(hideClass);
            avatarInHeader.classList.remove(hideClass);
        } else {
            avatarInHeader.classList.add(hideClass);
            avatarInHelloSection.classList.remove(hideClass);
        }
    });
}

function initScrollIndicator()
{
    window.addEventListener("scroll", function() {
        var bodyTop = document.body.getBoundingClientRect().top;
        var sections = Array.from(document.querySelectorAll('section')).reverse();
        for(var section of  sections)
        {
            var link = document.querySelector('aside a[href*='+section.id+']')
                link.classList.remove('active')
        }
        for(var section of  sections)
        {
            var sectionTop = section.getBoundingClientRect().top;
            var relativeSectionTop = sectionTop - bodyTop;
            if(document.body.scrollTop > relativeSectionTop)
            {
                var link = document.querySelector('aside a[href*='+section.id+']')
                link.classList.add('active')
                break;
            }
        }
    });
    
}

animateAvatarOnScroll();
initScrollIndicator();
