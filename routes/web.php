<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');


Route::get('/test', function (){
    return Inertia::render('test');
})->middleware('auth:api');

require __DIR__.'/auth.php';


