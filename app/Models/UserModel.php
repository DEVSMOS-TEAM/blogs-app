<?php

namespace App\Models;

use Illuminate\Support\Facades\Hash;
use MongoDB\Laravel\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class UserModel extends Authenticatable implements JWTSubject
{
    protected $connection = 'mongodb';
    protected $collection = 'user';

    protected $fillable =
        [
            'username',
            'email',
            'oauth2',
            'password_hash',
            "bio",
            "provider_image_url"
        ];

    public static function OAuth2Insert($data, String $provider) : UserModel{
        return UserModel::updateOrCreate(
            ['email' => $data->getEmail()],
            [
                'username' => $data->getName(),
                'oauth2' => [
                    'provider' => $provider,
                    'provider_id' => $data->getId(),
                    'access_token' => $data->token,
                ],
                'provider_image_url' => $data->getAvatar(),
                'password_hash' => Hash::make(str()->random(16)),
                'bio' => "no bio",
            ]);
    }

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }
}
