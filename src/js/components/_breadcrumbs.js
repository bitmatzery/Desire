let page = document.location.pathname;

function breadcrumbsLink() {
    switch (page) {
        case "/about.html": document.querySelector(".breadcrumbs__link--js").textContent = "About" ; break;
        case "/gallery.html": document.querySelector(".breadcrumbs__link--js").textContent = "Gallery" ; break;
        case "/blog.html": document.querySelector(".breadcrumbs__link--js").textContent = "Blog" ; break;
        case "/blog-one.html": document.querySelector(".breadcrumbs__link--js").textContent = "Article" ; break;
        case "/contacts.html": document.querySelector(".breadcrumbs__link--js").textContent = "Contacts" ; break;
    }
}

breadcrumbsLink();
console.log('On breadcrumbs');