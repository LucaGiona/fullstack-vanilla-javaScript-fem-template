//Controller.init()
/**
 * @typedef {import("./viewBase.js").default}View
 */
export default class Controller{
 /** @type {View} */
 #view
 /** @params { { view:View}} deps */
 constructor ( {view}){
  this.#view = view
 }

 static init(deps){
  const controller = new Controller(deps)
  controller.#init()
  return controller
 }

 #isValid(data){
   return data.name && data.age && data.email

 }

 #onSubmit({ name, age, email}){
  if(!this.#isValid({name, age, email})){
   this.#view.notify({msg: "Please fill out all the fields!!"})
   return
  }
   this.#view.addRow({ name, age, email })
 }

 #init(){
  this.#view.configureFormSubmit(this.#onSubmit.bind(this))
  this.#view.configureFormClear()

  const initialData = [
   { name: "Luca Giona", age: 50, email: "test@data.com"},
   { name: "Luca Maria", age: 23, email: "test@data.eu"},
   { name: "Luca Annastasia as", age: 10, email: "test@data.de"},
  ]
  this.#view.render(initialData)
 }
}