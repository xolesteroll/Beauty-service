document.addEventListener('click', () => {

    const headerOnScroll = () => {
        const header = document.querySelector('header.header')

        window.addEventListener('scroll' , () => {
            const scrollHeight = window.scrollY

            if (scrollHeight > 25) {
                header.classList.add('scrolled')
            } else {
                header.classList.remove('scrolled')
            }

        })
    }

    const alignMainBanner = () => {
        const header = document.getElementById('header')
        const banner = document.getElementById('main')
        const headerHeight = parseInt(window.getComputedStyle(header).height)
        const headerPaddings = parseInt(window.getComputedStyle(header).paddingTop) + parseInt(window.getComputedStyle(header).paddingBottom)
        const offset = headerPaddings + headerHeight + 'px'

        banner.style.height = `calc(100vh - ${offset})`
        console.log(headerPaddings)
    }


    alignMainBanner()
    headerOnScroll()
})










document.addEventListener('click', () => {