import React from 'react';
import './App.css';

function App() {

  const [firstName, setFirstName] = React.useState('')
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const  [confirmPassword , setConfirmPassword] = React.useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstName,
      email,
      password,
      confirmPassword
    }
    console.log(data);
  }

  return (
    <div className="App">
        <div className='main'>
          <div className='center'>
          <div className='menu'>
            <div className='logo'>
              <h1>Landing Page</h1>
            </div>
            <div className='item-menu'>
              <a href='#'>Login</a>
              <a href='#'>Contact</a>
              <a href='#'>who we are</a>
            </div>
          </div>


          <div className='form'>
          <h2>Sign up for free!</h2>
            <form onSubmit={onSubmit}>
              <div className='items-form'>
                <input placeholder='Seu Nome...' type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <input placeholder='Seu Email...' type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input placeholder='Sua Senha...' type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input placeholder='Confime sua Senha...' type="Password" name="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <input type="submit" />
              </div>
            </form>
          </div>
         </div>
      </div>

        <div className='conteudo'>
          <div className='center'>
            <div className='conteudo-single'>
              <h3 className='h3-two'>Titulo da Chamada</h3>
              <p>Titulo da ChamadaTitulo da ChamadaTitulo da ChamadaTitulo da Chamada
              </p>
            </div>
            <div className='conteudo-single'>
              <h3 className='h3-two'>Titulo da Chamada</h3>
              <p>Titulo da ChamadaTitulo da ChamadaTitulo da ChamadaTitulo da Chamada
              </p>
            </div>
            <div className='conteudo-single'>
              <h3 className='h3-two'>Titulo da Chamada</h3>
              <p>Titulo da ChamadaTitulo da ChamadaTitulo da ChamadaTitulo da Chamada
            </p>
            </div>
            <div className='conteudo-single'>
              <h3 className='h3-two'>Titulo da Chamada</h3>
              <p>Titulo da ChamadaTitulo da ChamadaTitulo da ChamadaTitulo da Chamada
            </p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;