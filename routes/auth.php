<?php

use App\Http\Controllers\auth\AuthenticationController;
use App\Http\Controllers\auth\oauth2\GitHubController;
use App\Http\Controllers\auth\oauth2\GoogleController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('auth')->group(function () {

    Route::get("/login", function(){
        return Inertia::render('auth/login');
    })->name('login');

    Route::get("/register", [AuthenticationController::class, 'create'])->name('register.create');
    Route::post('/register', [AuthenticationController::class, 'store'])->name('register.store');;
    Route::get('/logout', [AuthenticationController::class, 'logout'])->name('logout');

    Route::prefix('google')->group(function () {
        Route::get('/redirect', [GoogleController::class, 'redirectToProvider']);
        Route::get('/callback', [GoogleController::class, 'handleProviderCallback']);
    });

    Route::prefix('github')->group(function () {
        Route::get('/redirect', [GitHubController::class, 'redirectToProvider']);
        Route::get('/callback', [GitHubController::class, 'handleProviderCallback']);
    });
})->middleware('guest');
