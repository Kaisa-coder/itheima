import $ from 'jquery'
import './css/index.css'
import './css/index.less'
$(function(){
  $('li:odd').css('backgroundColor','red')
  $('li:even').css('backgroundColor','blue')

})
class Person{
  static info='person info'
}
console.log(Person.info);