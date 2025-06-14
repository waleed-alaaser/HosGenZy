<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Doctor;
use App\Models\Patient;
use App\Models\Admin;

class LoginController extends Controller
{
    public function check(Request $request)
    {      
        // Validate and handle form data
        // response("waleed");
        
        // create token
       // $token = $user->createToken('auth_token')->plainTextToken;
        return response()->json(data: [
          //  'access_token' => $token,
            'name'=>"eeddd"
            
        ]);
    }
}
