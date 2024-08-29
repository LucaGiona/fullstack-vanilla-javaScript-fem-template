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

 #init(){
  const initialData = [
   { name: "Luca Giona", age: 50, email: "test@data.com"},
   { name: "Luca Maria", age: 23, email: "test@data.eu"},
   { name: "Luca Annastasia as", age: 10, email: "test@data.de"},
  ]
  this.#view.render(initialData)
 }
}