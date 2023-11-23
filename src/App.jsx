import { useState } from 'react'
import logo from '../src/assets/olivares.png'
import './App.css'

function App() {
  const [showButtons, setShowButtons] = useState(true);
  const [confirm, setConfirm] = useState("");
  const noRest = "https://api.whatsapp.com/send?phone=+541166439347&text=Hola,%20Confirmo%20mi%20asistencia%20a%20la%20fiesta%20de%20Despedida!!%20Saludos";
  const rest = "https://api.whatsapp.com/send?phone=+54116643-9347&text=Hola%20confimo%20mi%20asistencia,%20mis%20restricciones%20alimencicias%20son:" ;
  const refuse = "https://api.whatsapp.com/send?phone=+54116643-9347&text=Hola,%20no%20voy%20a%20poder%20asistir%20al%20evento,%20saludos!";

  return (
    <div className='bg-fondo1 bg-center bg-cover bg-no-repeat min-h-screen  flex items-center justify-center flex-col text-zinc-300'>
      <div className='bg-neutral-800/60 md:w-4/5 rounded-lg m-6 px-3 pb-6 flex items-center justify-center flex-col'>
        <div className='pt-7 pb-3'>
        <h1 className=' flex justify-center text-center text-5xl font-cormorantGaramond'>Fiesta Grupo Penna</h1>
        <h2 className=' flex justify-center text-center text-5xl font-cormorantGaramond font-bold'>Despedida 2023</h2>
      </div>
      <div className=' flex justify-center items-center text-center flex-col py-10'>
        <p className='text-3xl  font-cormorantGaramond'>Viernes</p>
        <p className='text-9xl font-dancingScript'>15</p>
        <p className='text-3xl font-cormorantGaramond'>de Diciembre</p>
        <p className='text-3xl font-cormorantGaramond'>21:00 a 04:00 AM</p>
        <div className='pt-4'>
          <img src={logo} className='w-40' alt="" />
          <a className='text-xl font-normal underline' href="https://maps.app.goo.gl/H1EjvCxg8F3LuH9QA">Ver ubicación</a>
        </div>
      </div>

      {showButtons && <div className='flex flex-col items-center'>
        <button className="flex select-none items-center gap-3 rounded-lg bg-gradient-to-tr from-orange-600 to-orange-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={() => {setShowButtons(false)}}>Asistiré</button>
        <a href={refuse} className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-orange-500 transition-all hover:bg-orange-500/10 active:bg-orange-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">No asistire</a>
      </div>}
      {!showButtons && <div className='flex justify-center items-center flex-col'>
        <p className='text-xl flex text-center justify-items-center pb-2'>Tenés alguna restriccion alimenticia?</p>
        <div className="w-fit flex gap-2 rounded-xlp-1">
          <div className='p-2' onClick={() => {setConfirm(noRest)}}>
              <input type="radio" name="option" id="no" value="no" className="peer hidden" checked/>
              <label htmlFor="no" className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-orange-500 peer-checked:font-bold peer-checked:text-white">No</label>
          </div>
          <div className='p-2' onClick={() => {setConfirm(rest)}}>
              <input type="radio" name="option" id="si" value="si" className="peer hidden"  />
              <label htmlFor="si" className="block cursor-pointer select-none rounded-xl p-2 text-center font-bold peer-checked:bg-orange-500 peer-checked:font-bold peer-checked:text-white">Si</label>
          </div>
          
        </div>
          <a className="flex select-none items-center gap-3 rounded-lg bg-gradient-to-tr from-orange-800 to-orange-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" href={confirm.length > 0 ? confirm : noRest}>Confirmar asistencia
          </a>
          <div className='p-2' onClick={() => {setShowButtons(true)}}>
              <input type="radio" name="option" id="cancel" value="cancel" className="peer hidden" />
              <label htmlFor="cancel" className="block cursor-pointer select-none rounded-xl py-3 text-center font-bold peer-checked:bg-orange-500 peer-checked:font-bold peer-checked:text-white">Cancelar</label>
          </div>
      </div>
      }

      </div>
      
    </div>
  )
}

export default App
