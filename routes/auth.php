<?php

use App\Http\Controllers\auth\GoogleController;
use App\Http\Controllers\auth\GitHubController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('auth')->group(function () {

    ROute::get("/login", function(){
        return Inertia::render('login');
    })->name('login');

    Route::prefix('google')->group(function () {
        Route::get('/redirect', [GoogleController::class, 'redirectToProvider']);
        Route::get('/callback', [GoogleController::class, 'handleProviderCallback']);
    });

    Route::prefix('github')->group(function () {
        Route::get('/redirect', [GitHubController::class, 'redirectToProvider']);
        Route::get('/callback', [GitHubController::class, 'handleProviderCallback']);
    });
})->middleware('guest');
