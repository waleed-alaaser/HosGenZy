<?php

namespace App\Http\Controllers;

use App\Models\Lab_test;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class Lapcontroller extends Controller
{
    public function store(Request $request)
    {
        // $request->validate([
        //     'doctor_id' => 'required|exists:doctors,id',
        //     'patient_id' => 'required|exists:patients,id',
        //     'text' => 'required|string'
        // ]);

        DB::table('lab_tests')->insert([
            'doctor_id' => $request->doctor_id,
            'patient_id' => $request->patient_id,
            'test_results' => $request->text,
            'test_cost'=>100,
            'test_date'=>now(),
            
        ]);

        return response()->json(['message' => 'lap test saved successfully']);
    }
    public function latest()
    {
        $prescriptions = Lab_test::with(['doctor:id,name', 'patient:id,name'])
            ->latest()
            ->take(10)
            ->get();

        return response()->json($prescriptions);
    }
}
