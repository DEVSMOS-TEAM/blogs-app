<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/csrf', function () {
    return csrf_token();
});
Route::get('/', function () {
    return Inertia::render('welcome');
})->name('welcome');

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
require __DIR__.'/profile/profile.php';
