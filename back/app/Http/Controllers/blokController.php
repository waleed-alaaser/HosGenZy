<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class blokController extends Controller
{
    public function getBlockchainData(Request $request)
    {
        $response = Http::post(env('BLOCKCHAIN_API') . '/get_data', [
            'patientID' => '203bdb4a-1294-4a94-a75e-40a421fddcdd'
        ]);

        return $response->json();
    }
    // done
    public function createWallet(Request $request)
    {
        $response = Http::post(env('BLOCKCHAIN_API') . '/createWallet', [
            'name' => $request->name,
            'birthdate' => $request->dob,
            'email' => $request->email,
            'gender' => $request->gender,
            'password' => 'StrongPass123',
            'confirm_password' => 'StrongPass123',
            'role' => $request->role
        ]);

        // return $response->json();
        return response()->json(['role' => $request->role , 'name'=>$request->name]);
    }
    public function connectWallet(Request $request)
    {
        $response = Http::post(env('BLOCKCHAIN_API') . '/connectWallet', [
            'email' => $request->email,
            'password' => 'StrongPass123',
        ]);

        // return $response->json();
        return response()->json(['role' => 'patient' , 'name'=>$request->name]);

    }
    public function submitReply(Request $request)
    {
        $response = Http::post(env('BLOCKCHAIN_API') . '/submitReply', [
            'record_id' => $request->record_id,
            'patient_id' => $request->patient_id,
            'doctor_id' => $request->doctor_id,
            'reply_content' => $request->reply_content
        ]);

        return $response->json();
    }

}
