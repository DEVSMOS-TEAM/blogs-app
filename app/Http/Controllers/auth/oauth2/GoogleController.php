<?php

namespace App\Http\Controllers\auth\oauth2;

use App\Http\Controllers\Controller;
use App\Http\Controllers\OAuth2Controller;
use App\Models\UserModel;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Laravel\Socialite\Facades\Socialite;
use Tymon\JWTAuth\Facades\JWTAuth;

class GoogleController extends Controller implements OAuth2Controller
{
    public function redirectToProvider()
    {
        return Socialite::driver('google')->redirect();
    }

    public function handleProviderCallback()
    {
        try {
            $googleUser = Socialite::driver('google')->user();

            $userModel = UserModel::OAuth2Insert($googleUser, 'google');
            $token = JWTAuth::fromUser($userModel);

            Auth::login($userModel, true);
            session()->regenerate();
            session()->put('token', $token);
            session()->flash('message', 'Logged in successfully');

            return redirect()->intended('/');

        } catch (\Exception $e) {
            return response()->json([
                "message" => "Unable to login using Google. Please try again.",
                "error" => $e->getMessage()
            ], 500);
        }
    }

    public function logout()
    {
        Auth::logout();
        session()->invalidate();
        session()->regenerateToken();
        return redirect('/');
    }
}
