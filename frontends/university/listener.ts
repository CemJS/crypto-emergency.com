const listener = {

  "clickAny": function (e) {
    if (!this.Ref.categoryButton.contains(e.target) && this.Ref.costButton.contains(e.target) && this.Static.categoryStatus == 'open') {
      this.Static.categoryStatus = 'close'
      this.Ref.category.classList.remove("visible")
      this.Ref.categoryArrow.classList.remove("rotate")
    } else if (!this.Ref.categoryButton.contains(e.target) && !this.Ref.costButton.contains(e.target) && this.Static.categoryStatus == 'open') {
      this.Static.categoryStatus = 'close'
      this.Ref.category.classList.remove("visible")
      this.Ref.categoryArrow.classList.remove("rotate")
    }

    if (!this.Ref.costButton.contains(e.target) && this.Ref.categoryButton.contains(e.target) && this.Static.costStatus == 'open') {
      this.Static.costStatus = 'close'
      this.Ref.cost.classList.remove("visible")
      this.Ref.costArrow.classList.remove("rotate")
    } else if (!this.Ref.costButton.contains(e.target) && !this.Ref.categoryButton.contains(e.target) && this.Static.costStatus == 'open') {
      this.Static.costStatus = 'close'
      this.Ref.cost.classList.remove("visible")
      this.Ref.costArrow.classList.remove("rotate")
    }
  }
}

export { listener }