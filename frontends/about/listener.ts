export const start = function () { }

export const finish = function () {
  //animation for roadmap
  this.Static.roadmapItems = document.querySelectorAll(".roadmapNew_row");

  const observerRoadmap = new IntersectionObserver(entries => {
    entries.forEach(item => {
      item.target.classList.toggle("in_view", item.isIntersecting)
    })
  })

  this.Static.roadmapItems.forEach(item => {
    observerRoadmap.observe(item)
  })
  //animation for roadmap

  //clone for running line parners
  this.Static.root = document.documentElement;
  this.Static.marqueeElementsDisplayed = getComputedStyle(this.Static.root).getPropertyValue("--marquee_elements_displayed")

  this.Static.root.style.setProperty("--marquee_elements", this.Ref.marqueeContentStart.children.length)
  this.Static.root.style.setProperty("--marquee_elements", this.Ref.marqueeContentEnd.children.length)

  for (let i = 0; i < this.Static.marqueeElementsDisplayed; i++) {
    this.Ref.marqueeContentStart.appendChild(this.Ref.marqueeContentStart.children[i].cloneNode(true));
    this.Ref.marqueeContentEnd.appendChild(this.Ref.marqueeContentEnd.children[i].cloneNode(true));
  }
  //clone for running line parners


  //animation for appps
  // this.Static.appsItems = document.querySelectorAll(".developments_item");

  // const observerApps = new IntersectionObserver(entries => {
  //   entries.forEach(item => {
  //     item.target.classList.toggle("developments_item_rotate", item.isIntersecting)
  //   })
  // })

  // this.Static.appsItems.forEach(item => {
  //   setTimeout(() => {
  //     observerApps.observe(item)
  //   }, 1500)
  // })
  //animation for appps

  // gallery cryptoBreakfast
  if (!this.Static.callGallery) {
    this.fn("test", this.Ref.galleryCryptoBreakfast, this.Ref.galleryDots, {
      margin: 10
    })
  }




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

}