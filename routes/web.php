<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');


Route::get('/test', function (){
    return Inertia::render('test');
});

Route::get('/news' , function() {
    return Inertia::render('news');
});

require __DIR__.'/auth.php';
