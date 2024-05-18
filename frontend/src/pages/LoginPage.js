import React from 'react'

const LoginPage = () => {
  return (
    <div>
      <form>
        <input type="text" name="username" placeholder='Введите имя пользователя' />
        <input type="password" name="password" placeholder='Введите пароль' />
        <input type="submit"/>
      </form>
    </div>
  )
}

export default LoginPage
