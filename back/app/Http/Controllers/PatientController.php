<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    public function store(Request $request)
    {      
        // Validate and handle form data
        Patient::create([
            'name' => $request->name,
            'gender' => $request->gender,
            'date_of_birth' => $request->dob,
            'email' => $request->email,
        ]);
        return response()->json(data: [
            'message' => 'Form received',
            'data' => $request->all()
        ]);
    }
}
