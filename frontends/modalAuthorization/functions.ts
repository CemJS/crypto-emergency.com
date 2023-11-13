export const show = function ($el: HTMLElement) {
  setTimeout(() => {
    $el.classList.add('activeModal');
    this.Variable.$el.body.style.overflow = 'hidden';
  }, 100);
}

export const close = function () {
  this.Ref.modalWindow.classList.remove('activeModal');
  setTimeout(() => {
    this.clearData();
    this.Variable.$el.body.style.overflow = 'auto';
  }, 500)
}


export const checkForm = async function () {
  if (this.Static.form.login.valid && this.Static.form.pass.valid) {
    this.Static.form.isValid = true

    let data = {
      action: "authorization",
      login: this.Static.form.login.value,
      password: this.Static.form.pass.value
    }

    let answer = await this.Services.functions.sendApi(`/api/events/Authorization?uuid=${this.Variable.myInfo.uuid}`, data)

    // if (answer.error) {
    //   this.Static.form.error = "Неправильно введён логин или пароль"
    //   this.Static.form.isValid = false
    //   this.init()
    //   return
    // }
    console.log('=b4490c=', answer)

    this.fn("close")
    return
  } else {
    this.Static.form.isValid = false
  }

  this.init()
  return
}