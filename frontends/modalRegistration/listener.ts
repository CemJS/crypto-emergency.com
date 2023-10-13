export const finish = function (data, name, t) {
  setTimeout(() => {
    this.Ref.modalWindow.classList.add('activeModal');
    this.Static.body.style.overflow = 'hidden';
  }, 100)


  return
}