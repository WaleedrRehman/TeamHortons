function loadSkeleton() {
    console.log($('#headerPlaceholder').load('/text/header.html'))
    console.log($('#footerPlaceholder').load('/text/footer.html'))
}
loadSkeleton();