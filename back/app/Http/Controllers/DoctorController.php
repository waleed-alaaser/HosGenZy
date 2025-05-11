<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use Illuminate\Http\Request;

class DoctorController extends Controller
{
    public function store(Request $request)
    {      
        // Validate and handle form data
        Doctor::create([
            'name' => $request->name,
            'gender' => $request->gender,
            'date_of_birth' => $request->dob,
            'email' => $request->email
        ]);
        return response()->json(data: [
            'message' => 'Form received',
            'data' => $request->all()
        ]);
    }
}
