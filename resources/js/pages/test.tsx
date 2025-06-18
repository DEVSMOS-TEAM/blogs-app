import { RootLayout } from '@/layouts/RootLayout';
import { Inertia } from '@inertiajs/inertia';
import { Button } from '@/components/ui/button';
 const Test = () => {

     const handleGoogleLogin = () =>{
         Inertia.visit('/auth/google/redirect');
     }


     const handleGithubLogin = () =>{
         Inertia.visit('/auth/github/redirect');
     }
  return <RootLayout>
   <div data-aos="fade-up">
       <p >Hello</p>
       <div className="flex flex-col gap-5 w-50 font-bold">
           <Button onClick={handleGoogleLogin}>Login with Google</Button>
           <Button onClick={handleGithubLogin}>Login with Github</Button>
       </div>
   </div>
  </RootLayout>
}

export default Test;
