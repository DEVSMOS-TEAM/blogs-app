import Logo from '../../../public/logo.svg'
import { Inertia } from '@inertiajs/inertia';

export const AppLogo = () => {

    function fallbackClick(){
        Inertia.visit('/')
    }

   return <div className="flex items-center gap-1.5 cursor-pointer" onClick={fallbackClick}>
      <img src={Logo} alt="logo" className="size-8"/>
       <p className="font-bold text-xl">Kumnet Khnhom</p>
   </div>
}
