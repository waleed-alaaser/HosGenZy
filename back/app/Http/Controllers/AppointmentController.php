<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AppointmentController extends Controller
{
    public function store(Request $request)
    {      
        // Validate and handle form data
        $authHeader = $request->header('Authorization');
        $token = str_replace('Bearer ', '', $authHeader);
        $auth = DB::table('auth_tokens')->where('token',  $token)->first();
        $id = DB::table('patients')->where('email', $auth->email)->first();
        Appointment::create([
            'patient_id' => $id->id,
            'doctor_id' => 1,
            'department'=>$request->department,
            'date_time'=>$request->time,
            'booking_date'=>$request->date,
            'discription'=>$request->dis,
            'status'=>'pending'
        ]);
        return response()->json(data: [
            'message' => 'Form received',
            'token'=>$id->id,
            'data' => $request->all()
        ]);
    }
    // public function latest()
    // {
    //     $patients = Appointment::latest()->take(5)->get();
    //     return response()->json($patients);
    // }
    public function latest()
{
    $appointments = Appointment::with('patient:id,name,email') // eager load patient
        ->latest()
        ->take(15)
        ->get();

    return response()->json($appointments);
}
}
