export const start = function () {
  console.log('=b30947=', 'start')
}

export const finish = function () {
  console.log('=b30947=', 'finish')
  this.Static.roadmapItems = document.querySelectorAll(".roadmapNew_row");

  console.log('=f849bd=', this.Static.roadmapItems)

  const observer = new IntersectionObserver(entries => {
    entries.forEach(item => {
      item.target.classList.toggle("in_view", item.isIntersecting)
    })
  })

  this.Static.roadmapItems.forEach(item => {
    observer.observe(item)
  })
}