<?php

namespace App\Http\Controllers;

use App\Models\Prescripttion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class prescriptionController extends Controller
{
    public function store(Request $request)
    {
        // $request->validate([
        //     'doctor_id' => 'required|exists:doctors,id',
        //     'patient_id' => 'required|exists:patients,id',
        //     'text' => 'required|string'
        // ]);

        DB::table('prescripttions')->insert([
            'doctor_id' => $request->doctor_id,
            'patient_id' => $request->patient_id,
            'pharmacist_id' => 1,
            'medications' => $request->text,
            'date'=>now()
            
        ]);

        return response()->json(['message' => 'Prescription saved successfully']);
    }
    public function latest()
    {
        $prescriptions = Prescripttion::with(['doctor:id,name', 'patient:id,name'])
            ->latest()
            ->take(15)
            ->get();

        return response()->json($prescriptions);
    }

}
