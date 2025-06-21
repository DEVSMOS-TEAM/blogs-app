<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/about-us', function(){
    return Inertia::render('about-us');
});

Route::get('/resources', function(){
    return Inertia::render('resource');
});

Route::get('/test', function (){
    return Inertia::render('test');
});

Route::get('/news' , function() {
    return Inertia::render('news');
});

require __DIR__.'/auth.php';
