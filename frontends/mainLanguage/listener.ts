const listener = {

  "finish": function (data, name, t) {
      setTimeout(() => {
          this.Static.body.style.overflow = 'hidden';
      }, 100)
  }
}

export { listener }