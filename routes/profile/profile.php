<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/profile/{username}', function(string $username){
    return Inertia::render('profile/profile-page', [
        'username' => $username,
    ]);
});
