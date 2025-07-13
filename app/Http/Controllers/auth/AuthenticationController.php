<?php

namespace App\Http\Controllers\auth;
use App\Http\Controllers\Controller;
use App\Models\UserModel;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Tymon\JWTAuth\Facades\JWTAuth;

# issue on date: 23 June 2025
# Description :
/*
 * A class that manage on an authentication process.
 * list of methods:
 *  - register()
 *  - login()
 *  - logout()
 *  - sendEmailLinkResetPassword()
 *
 * */

class AuthenticationController extends Controller
{
    public function create(){
        return Inertia::render('auth/sign-up');
    }
    public function store(Request $request)
    {
        try{
            $credentials = $request->validate([
                'first_name' => 'required|string|min:3|max:90',
                'last_name' => 'required|string|min:3|max:90',
                'username' => "required|string|min:3|max:255|unique:users,username",
                'email' => "required|email|unique:users,email",
                'password' => "required|string|min:8|confirmed",
                'bio' => 'string|max:255|nullable',
                'provider_image_url' => 'nullable|file|mimes:jpeg,png,webp|max:2048'
            ]);

            if($credentials['provider_image_url']){
                $file = $credentials['provider_image_url'];
                $filename = "Kumnit-@" . $credentials['username'] . "." . $file->getClientOriginalExtension();
                $path = $file->storeAs('profile', $filename, 'public');
                $credentials['provider_image_url'] = $path;
            }

            $user = UserModel::create([
                'first_name' => $credentials['first_name'],
                'last_name' => $credentials['last_name'],
                'username' => $credentials['username'],
                'email' => $credentials['email'],
                'oauth2' => [],
                'password_hash' => Hash::make($credentials['password']),
                "bio" => $credentials['bio'] ?? "",
                "provider_image_url" => $credentials['provider_image_url'] ?? ""
            ]);

            Auth::login($user, true);

            $request->session()->regenerate();
            $request->session()->put('token', JWTAuth::fromUser($user));
            $request->session()->flash('message', 'Account created successfully');

            return redirect()->intended('/');

        }catch (\Exception $e){
            return back()->withErrors([
                'error' => $e->getMessage()
            ]);
        }
    }
   public function login(Request $request)
   {
       try{
           $credentials = $request->validate([
               'email' => "required|email|exists:users,email",
               'password' => "required|string|min:8"
           ]);

           if(Auth::attempt($credentials))
           {
               $request->session()->regenerate();
               $request->session()->flash('message', 'Logged in successfully');
               return redirect()->intended('/');
           }

           return back();
       }catch (\Exception $e){
           return back()->withErrors([
               'error' => $e->getMessage()
           ]);
       }
   }

   public function logout(Request $request)
   {
       Auth::logout();
       $request->session()->invalidate();
       $request->session()->regenerateToken();
       return redirect('/');
   }


   public function forgotPassword(Request $request)
   {
      try{
          $credentials = $request->validate([
              'email' => "required|email|exists:users,email|or:username,exists:users,username",
              'username' => "required|string|exists:users,username|or:email,exists:users,email"
          ]);

          // send otp to gmail

          // verify otp

          // then reset passcode

          return back();

      }catch (\Exception $e){
          return back()->withErrors([
              'error' => $e->getMessage()
          ]);
      }
   }


   public function sendEmailResetLink(Request $request)
   {
       try{
           return back();
       }catch (\Exception $e){
           return back()->withErrors([
               'error' => $e->getMessage()
           ]);
       }
   }
}
