import SignUpForm from '@/components/sign-up-form';
import { AppLogo } from '@/components/AppLogo';
export default function SignUpPage() {
    return <section>
        <div className="bg-muted p-10 absolute flex items-center justify-between w-screen">
            <AppLogo/>
        </div>
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-3xl">
                <SignUpForm />
            </div>
        </div>
    </section>
}
