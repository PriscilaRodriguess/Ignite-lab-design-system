import { Envelope, Lock } from 'phosphor-react';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';
import { Heading } from './components/Heading';
import { Text } from './components/text';
import { TextInput } from './components/Textinput';
import { Logo } from './logo';

import './styles/global.css';

export function App() {
  return (
   <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
     <header className='flex flex-col items-center'>
     <Logo />

<Heading size='lg' className='mt-4'>
  Ignite Lab
</Heading>

<text className='text-gr-400 mt-1'>Faça login agora e comece a usar!</text>
     </header>

     <form className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-10'>
      <label htmlFor='email' className='flex flex-col gap-3'>
        <text className='font-semibold'>Endererço de e-mail</text>
        <TextInput.Root>
          <TextInput.Icon>
            <Envelope />
          </TextInput.Icon>

          <TextInput.Input type="email" id='email' placeholder='Digite seu e-mail'/>
        </TextInput.Root>
      </label>
      
      <label htmlFor='passoword' className='flex flex-col gap-3'>
        <text className='font-semibold'>Sua senha</text>
        <TextInput.Root>
          <TextInput.Icon>
            <Lock />
          </TextInput.Icon>

          <TextInput.Input type="password" id='passoword' placeholder='********'/>
        </TextInput.Root>
      </label>

      <label htmlFor='remember' className='flex intems-center gap-2'>
        <Checkbox id='remember'/>
        <text className='text-gray-200'>Lembrar de mim por 30 dias</text>
      </label>

      <Button type='submit' className='mt-4'>Entrar na platarforma</Button>

      <footer className="flex flex-col items-center gap-4 mt-8" >
        <text>
        <a href='' className='text-gray-400 underline hover:text-gray-200'>Esqueceu a sua senha?</a>
        </text>
        <text>
        <a href='' className='text-gray-400 underline hover:text-gray-200'>Não possui conta? Crie uma agora!</a>
      </text>
      </footer>

     </form>
   </div>
  )
}
