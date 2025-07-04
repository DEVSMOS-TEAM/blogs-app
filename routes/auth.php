<?php

use App\Http\Controllers\auth\oauth2\GitHubController;
use App\Http\Controllers\auth\oauth2\GoogleController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('auth')->group(function () {

    Route::get("/login", function(){
        return Inertia::render('auth/login');
    })->name('login');

    Route::prefix('google')->group(function () {
        Route::get('/redirect', [GoogleController::class, 'redirectToProvider']);
        Route::get('/callback', [GoogleController::class, 'handleProviderCallback']);
        Route::get('/logout', [GoogleController::class, 'logout']);
    });

    Route::prefix('github')->group(function () {
        Route::get('/redirect', [GitHubController::class, 'redirectToProvider']);
        Route::get('/callback', [GitHubController::class, 'handleProviderCallback']);
        Route::get('/logout', [GoogleController::class, 'logout']);
    });
})->middleware('guest');
