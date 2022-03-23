let products;
let user;
//Validation Login
fetch('/session/current').then(result=>result.json()).then(json=>{
   user=json;
   console.log(user)
   if (!user._id||user._id==='undefined') {
     return location.href='/login'
  }else{
    return console.log('holis')
   }
})

//Logout
function logout(){
  fetch('/session/logout')
  return location.href='/login'
}


