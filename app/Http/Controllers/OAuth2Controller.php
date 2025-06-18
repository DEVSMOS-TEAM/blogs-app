<?php

namespace App\Http\Controllers;
interface OAuth2Controller
{
  public function redirectToProvider();
  public function handleProviderCallback();
  public function logout();
}
