import { LoginForm } from "@/components/login-form"
import { ArrowLeft } from 'lucide-react';
import { AppLogo } from '@/components/AppLogo';

export default function LoginPage() {

  function back(){
      window.history.back()
  }

  return (
    <section>
        <div className="bg-muted p-10 absolute flex items-center justify-between w-screen">
            <div className="flex items-center gap-2 cursor-pointer" onClick={back}>
                <ArrowLeft/>
                <p>Back</p>
            </div>
            <div>
                <AppLogo/>
            </div>

        </div>
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-3xl">
                <LoginForm />
            </div>
        </div>
    </section>
  )
}
