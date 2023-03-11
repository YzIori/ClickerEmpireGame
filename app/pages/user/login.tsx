import { useState } from 'react'

const Login = (): JSX.Element => {
  const [loginUser, setLoginUser] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e: { target: { name: any; value: any } }): void => {
    setLoginUser({
      ...loginUser,
      [e.target.name]: e.target.value
    })
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    try {
      e.preventDefault()
      const response = await fetch('http://localhost:3000/api/user/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginUser)
      })
      const jsonData = await response.json()
      localStorage.setItem('token', jsonData.token)
      alert(jsonData.message)
    } catch (err) {
      alert('ログイン失敗')
    }
  }

  return (
    <div className="form-control">
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="input input-bordered"
          value={loginUser.email}
          onChange={handleChange}
          type="text"
          name="email"
          placeholder="メールアドレス"
          required
        />
        <input
          value={loginUser.password}
          onChange={handleChange}
          type="text"
          name="password"
          placeholder="パスワード"
          required
        />
        <button>ログイン</button>
      </form>
    </div>
  )
}

export default Login
