const submitForm = document.getElementById('submitForm');
const username = document.getElementById('username');
const password = document.getElementById('password');
const loginForm = document.getElementById('login-form');

const fetchingUsers = () =>{
    fetch('https://64549c40a74f994b33445df3.mockapi.io/users', {
        method: 'GET',
        headers: {'content-type':'application/json'},
      }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
      }).then(tasks => {
          runLogin(tasks)
      }).catch(error => {
        // handle error
      })
      
}


const runLogin = (UserData)=>{
    for(let i=0; i<UserData.length; i++) {
        if(username.value === UserData[i].username && password.value === UserData[i].password) {
            alert(`Login Success, welcome ${username.value}`)
            return document.location = './tablepage.html'
        }else {
            alert('Invalid Login Details')
            return loginForm.reset()
        }
    }
}
submitForm.addEventListener('click', fetchingUsers )