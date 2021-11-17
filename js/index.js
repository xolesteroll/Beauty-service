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

    headerOnScroll()
})










document.addEventListener('click', () => {