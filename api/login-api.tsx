'use server'

export async function checkEmailApi(username : string) {
  
  if((username === 'admin@gmail.com' || username === '0812345678')){
    return {
      success : true
    }
  }else{
    return{
      success : false
    }
  }
}

export async function loginApi(username : string, password : string) {
  if((username === 'admin@gmail.com' || username === '0812345678') && password === 'admin123'){

    return {
      username : 'Sirojjuddin',
      success : true
    }
  }else {
    return {
      success : false
    }
  }
}