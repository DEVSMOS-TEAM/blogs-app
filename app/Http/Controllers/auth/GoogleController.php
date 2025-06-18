<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use App\Http\Controllers\OAuth2Controller;
use App\Models\UserModel;
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

            return response()->json([
                "message" => "Logged in successfully",
                "token" => $token,
            ]);

        } catch (\Exception $e) {
            return response()->json([
                "message" => "Unable to login using Google. Please try again.",
                "error" => $e->getMessage()
            ], 500);
        }
    }

    public function logout()
    {
        // TODO: Implement logout() method.
    }
}
