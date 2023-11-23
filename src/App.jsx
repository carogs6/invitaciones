import { useState } from 'react'
import logo from '../src/assets/olivares.png'
import './App.css'

function App() {
  const [showButtons, setShowButtons] = useState(true);
  const [restriccion, setRestriccion] = useState(false);
  // const confirm = "https://api.whatsapp.com/send?phone=+541166439347&text=Hola%20confimo%20mi%20asistencia";
  // const rest = ",%20mis%20restricciones%20alimencicias%20son:" + restriccion;
  const refuse = "https://api.whatsapp.com/send?phone=+541159326768&text=Hola,%20no%20voy%20a%20poder%20asistir%20al%20evento,%20saludos!";

  return (
    <div className='bg-glitter bg-center bg-cover bg-no-repeat min-h-screen  flex items-center justify-center flex-col text-zinc-300'>
      <div className='bg-zinc-600/60 rounded-lg mx-2 p-2 lex items-center justify-center flex-col'>
        <div className='pt-7 pb-3'>
        <h1 className=' flex justify-center text-center text-4xl font-bold'>Fiesta Grupo Penna</h1>
        <h2 className=' flex justify-center text-center text-3xl font-bold'>Despedida 2023</h2>
      </div>
      <div className=' flex justify-center items-center text-center flex-col py-10'>
        <p className='text-2xl font-medium'>Viernes</p>
        <p className='text-8xl'>15</p>
        <p className='text-2xl font-medium'>de Diciembre</p>
        <p className='text-xl font-medium'>21:00 a 04:00 AM</p>
        <img src={logo} className='w-32' alt="" />
        <a href="https://maps.app.goo.gl/H1EjvCxg8F3LuH9QA">Ver ubicacion</a>
      </div>

      {showButtons && <div className='flex flex-col items-center'>
        <button className="flex select-none items-center gap-3 rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={() => {setShowButtons(false)}}>Confirmar asistencia</button>
        <a href={refuse} className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">No asistire</a>
      </div>}
      {!showButtons && <div className='flex justify-center items-center flex-col'>
        <p>Tienes alguna restriccion alimenticia?</p>
        <div className="w-fit flex gap-2 rounded-xl bg-gray-200 p-1">
          <div className='p-2' onClick={() => {setRestriccion(true)}}>
              <input type="radio" name="option" id="no" value="no" className="peer hidden" checked/>
              <label htmlFor="no" className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">No</label>
          </div>
          <div className='p-2'>
              <input type="radio" name="option" id="si" value="si" className="peer hidden"  />
              <label htmlFor="si" className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">Si</label>
          </div>
          
        </div>
          <div className='p-2' onClick={() => {setShowButtons(true)}}>
              <input type="radio" name="option" id="cancel" value="cancel" className="peer hidden" />
              <label htmlFor="cancel" className="block cursor-pointer select-none rounded-xl py-3 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">Cancelar</label>
          </div>
      </div>
      }
      {restriccion && <div>

      </div> 

      }
      </div>
      
    </div>
  )
}

export default App
