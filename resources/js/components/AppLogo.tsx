import Logo from '../../../public/logo.svg'

export const AppLogo = () => {
   return <div className="flex items-center gap-1.5">
      <img src={Logo} alt="logo" className="size-8"/>
       <p className="font-bold text-xl">FutureTech</p>
   </div>
}
