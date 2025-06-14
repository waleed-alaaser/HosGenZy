<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use App\Models\Patient;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    public function store(Request $request)
    {      
        // Validate and handle form data
        $exist_in_doctors = DB::table('doctors')->where('email', $request->email)->exists();
        $exist_in_patients = DB::table('patients')->where('email', $request->email)->exists();
        if($exist_in_doctors || $exist_in_patients){
            return response()->json(data: [
                'name' => $request->name,
                'role' => 'email_exist'
            ]);
        }
        Patient::create([
            'name' => $request->name,
            'gender' => $request->gender,
            'date_of_birth' => $request->dob,
            'email' => $request->email
        ]);
        return response()->json(data: [
            'name' => $request->name,
            'role' => $request->role
        ]);
    }
}
