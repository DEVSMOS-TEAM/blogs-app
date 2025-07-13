<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BlogModel extends Model
{
    protected $connection = "mongod";
    protected $collection = "blog";
    protected $fillable = [
        'title', 'content', 'feature_image_url', 'category', 'status'
    ];
}
