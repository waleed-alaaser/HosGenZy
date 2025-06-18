<?php

namespace App\Http\Controllers;
use App\Models\Bill;
use App\Models\Appointment;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Patient;

class Billcontroller extends Controller
{
    public function completeAppointmentDoctor($id)
    {
        // Check if the appointment exists
        // $patient = Appointment::find($id);
        // if (!$patient) {
        //     return response()->json(['error' => 'Appointment not found'], 404);
        // }

        // Check if a bill already exists
        $existing = Bill::where('patient_id', $id)->first();
        if ($existing) {
            $bill = Bill::find($existing->id);
            $bill->doctor_fee = 100; // 2 = Cancelled
            $bill->save();
            return response()->json(['message' => 'Bill already exists', 'bill_id' => $existing->id]);
        }
        // $appointment = Appointment::with(['doctor:id,name', 'patient:id,name'])->find($appointment->id);
        // Create new bill
        //'doctor_fee','test_charges','medication_charges', 'total_amount', 'payment_status'
        $bill = Bill::create([
            // 'appointment_id' => 3,
            'doctor_id' => 1,
            'patient_id' => $id,
            'doctor_fee' => 100, // Optional: calculate later
            'test_charges'=>0,
            'medication_charges'=>0,
            'total_amount'=>0,
            'payment_status' => 'pending', // or 0
        ]);

        return response()->json([
            'message' => 'Bill created successfully',
            // 'bill' => $bill
        ]);
    }
    public function completeAppointmentPharmacy($id)
    {
        // Check if the appointment exists
        // $appointment = Appointment::find($id);
        // if (!$appointment) {
        //     return response()->json(['error' => 'Appointment not found'], 404);
        // }

        // Check if a bill already exists
        $existing = Bill::where('patient_id', $id)->first();
        if ($existing) {
            $bill = Bill::find($existing->id);
            $bill->medication_charges = 50; // 2 = Cancelled
            $bill->save();
            return response()->json(['message' => 'Bill already exists', 'bill_id' => $existing->id]);
        }
        // $appointment = Appointment::with(['doctor:id,name', 'patient:id,name'])->find($appointment->id);
        // Create new bill
        //'doctor_fee','test_charges','medication_charges', 'total_amount', 'payment_status'
        $bill = Bill::create([
            // 'appointment_id' => 3,
            'doctor_id' => 1,
            'patient_id' => $id,
            'doctor_fee' => 0, // Optional: calculate later
            'test_charges'=>0,
            'medication_charges'=>50,
            'total_amount'=>0,
            'payment_status' => 'pending', // or 0
        ]);

        return response()->json([
            'message' => 'Bill created successfully',
            // 'bill' => $bill
        ]);
    }
    public function completeAppointmentLabTest($id)
    {
        // Check if the appointment exists
        // $appointment = Appointment::find($id);
        // if (!$appointment) {
        //     return response()->json(['error' => 'Appointment not found'], 404);
        // }

        // Check if a bill already exists
        $existing = Bill::where('patient_id', $id)->first();
        if ($existing) {
            $bill = Bill::find($existing->id);
            $bill->test_charges = 75; // 2 = Cancelled
            $bill->save();
            return response()->json(['message' => 'Bill already exists', 'bill_id' => $existing->id]);
        }
        // $appointment = Appointment::with(['doctor:id,name', 'patient:id,name'])->find($appointment->id);
        // Create new bill
        //'doctor_fee','test_charges','medication_charges', 'total_amount', 'payment_status'
        $bill = Bill::create([
            // 'appointment_id' => 3,
            'doctor_id' => 1,
            'patient_id' => $id,
            'doctor_fee' => 0, // Optional: calculate later
            'test_charges'=>75,
            'medication_charges'=>0,
            'total_amount'=>0,
            'payment_status' => 'pending', // or 0
        ]);

        return response()->json([
            'message' => 'Bill created successfully',
            // 'bill' => $bill
        ]);
    }
    public function latestBills()
    {
        $bill = DB::table('bills')
            ->orderBy('created_at', 'desc')
            ->limit(5)
            ->get();

        // $patientName = Patient::where('id', $bill->patient_id)->value('name');
        return response()->json($bill);
        // return response()->json(['ms'=>22]);
    }
}
