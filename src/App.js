import React from 'react';
import './App.css';

function App() {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
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
              <a href='#'>contact</a>
              <a href='#'>Who we are</a>
            </div>
          </div>


          <div className='form'>
          <h2>Sign up free</h2>
            <form onSubmit={onSubmit}>
              
              <div className='items-form'>
                <input placeholder='Seu Nome...' type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <input placeholder='Seu Email...' type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input placeholder='Sua Senha...' type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input placeholder='Confirme sua Senha...' type="password" name="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
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
