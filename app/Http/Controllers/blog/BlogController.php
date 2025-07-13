<?php

namespace App\Http\Controllers\blog;

use App\Http\Controllers\Controller;
use App\Models\BlogModel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function create(){
        return Inertia::render('blog/create-blog');
    }

    public function store(Request $request)
    {
        try{

            $blog = $request->validate([
                'title' => 'required|string|min:3|max:90',
                'content' => 'required|string|min:3|max:255',
                'feature_image_url' => 'nullable|file|mimes:jpeg,png,webp|max:2048',
                'category' => 'required|string|min:3|max:90',
                'publish_date' => 'required|date',
                'author' => 'required|string|min:3|max:90',
                'read_time' => 'required|string|min:3|max:90',
                'status' => 'required|string|min:3|max:90',
                'tags' => 'required|array',
            ]);

            BlogModel::create($blog);

            return redirect()->intended('/',[
                'message' => 'Post created successfully'
            ]);

        }catch (\Exception $e){
            return back()->withErrors([
                'message' => $e->getMessage()
            ]);
        }
    }
}
