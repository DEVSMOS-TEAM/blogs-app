<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Request;

interface OAuth2Controller
{
  public function redirectToProvider();
  public function handleProviderCallback();
  public function logout();
}
