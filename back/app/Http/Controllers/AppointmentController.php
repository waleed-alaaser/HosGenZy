<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    public function store(Request $request)
    {      
        // Validate and handle form data
        Appointment::create([
            'patient_id' => $request->p_id,
            'doctor_id' => $request->d_id,
            
        ]);
        return response()->json(data: [
            'message' => 'Form received',
            'data' => $request->all()
        ]);
    }
}
