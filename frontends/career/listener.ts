export const finish = function () {
    this.Static.employments = document.querySelectorAll(".employment_item");

    const observer = new IntersectionObserver(entries => {

        entries.forEach(item => {
            item.target.classList.toggle("show", item.isIntersecting)
        })
        // console.log('=b1055d=', entries)
    })

    this.Static.employments.forEach(item => {

        observer.observe(item)
    })

    // this.Static.vacancy.forEach(item => {
    //     observer.observe(item)
    // })

    // observer.observe(this.Static.Ref.jdem)
    return
}