<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/profile/@{username}',[UserController::class, 'show']);
