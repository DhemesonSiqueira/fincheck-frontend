import { Outlet } from 'react-router-dom';
import illustration from '../../assets/illustration.png';
import { Logo } from '../components/Logo';

export function AuthLayout() {
  return (
    <div className="flex h-screen max-w-screen-2xl m-auto">
      <div className="
        w-full flex items-center justify-center flex-col gap-16
        lg:w-1/2
      ">
        <Logo className='h-6 text-gray-500'/>

        <div className='w-full max-w-[504px] px-8'>
          <Outlet />
        </div>
      </div>

      <div className="
        w-1/2 h-screen justify-center items-center p-8 hidden
        lg:flex
      ">
        <div className='h-full max-h-[960px] relative'>
          <img src={illustration} className="h-full object-cover rounded-[32px] select-none"/>

          <div className='bg-white w-full bottom-0 p-10 px-10 py-12 absolute rounded-b-[32px]'>
            <Logo className="text-teal-900 h-8" />
            <p className='text-gray-700 font-medium text-xl mt-6'>
                Gerencie suas finanças pessoais de uma forma simples com o fincheck, e o melhor, totalmente de graça!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
