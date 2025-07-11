<?php

namespace App\Http\Controllers;

use App\Models\UserModel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function show(String $username){

        $user = UserModel::where('username', $username);

        if($user->count() == 0){
            redirect()->abort('404', 'User not found');
        }

        return Inertia::render('profile/profile-page', [
            'username' => $user->first()
        ]);
    }
}
