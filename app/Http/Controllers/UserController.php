<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class UserController extends Controller
{

    //
    


    // GET all activeUsers
    public function activeUsers()
    {
        $users = User::all();
        return response()->json($users);
    }


    // POST logout
    public function logout()
    {
        Auth::logout();

        return redirect('/login');
    }
}
