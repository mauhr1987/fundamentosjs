class Toggable{
  constructor(el){
    //Inicializar el estado interno
    this.el = el
    this.el.innerHTML = 'Off'
    this.activated = false
    this.el.addEventListener('click', this.onClick.bind(this))
  }
  onClick(){
    //Cambiar estado interno
    this.activated = !this.activated
    //Llamar a toggleText
    this.toggleText()
  }
  toggleText(){
    //Cambiar texto
    this.el.innerHTML = this.activated ? 'On' : 'Off'
  }
}

const button = document.getElementById('boton')
const miBotton = new Toggable(button)