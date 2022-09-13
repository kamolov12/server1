//localStorage.setItem("hrllo","world")
//const nom= localStorage.getItem('hrllo')
//console.log(nom);

//localStorage.removeItem('hrllo')
//

//const input = document.querySelector('input')
//input.addEventListener('input',()=>{
//   localStorage.setItem('good', input.value)
//})
////if//(localStorage.getItem('good')){
//  //input.value = localStorage.getItem('good')
////}
//const video1 = document.querySelector('video')
//video1.addEventListener('pause',()=>{
//   const {currentTime,duration}=video1
//   console.log(currentTime,duration);
//   localStorage.setItem('hi',video1.currentTime)
//})
//if(localStorage.getItem('hi')){
  video1.currentTime = localStorage.getItem('hi')-5
// }
//

const nom2 = {
      name:'Indira',
      age:'16',
}
//   localStorage.setItem('door', JSON.stringify(nom2))
//   console.log(JSON.parse(localStorage.getItem('door')));
const music = document.querySelector ('audio')
music.addEventListener('pause',()=>{
   const{currentTime,duration}=music
   console.log(currentTime,duration);
   localStorage.setItem('privet',currentTime)
})
if(localStorage.getItem('privet')){
   const nom2 = localStorage.getItem('privet')
   if(nom2-3>0){
      music.currentTime=nom2=-3
   }else{
      music.currentTime
   }
}