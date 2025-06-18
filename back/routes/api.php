<?php

// use App\Http\Controllers\Lapcontroller;
use App\Models\Appointment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PrescriptionController;
use App\Http\Controllers\LapController;
use App\Http\Controllers\BillController;
use App\Http\Controllers\blokController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/logout', [AuthController::class, 'logout']);
Route::post('/appointment', [AppointmentController::class, 'store']);
Route::get('/getAppointments', [AppointmentController::class, 'latest']);
Route::get('/getAppointmentDoctor', [AppointmentController::class, 'latest2']);
Route::post('/appointment/{id}/cancel', [AppointmentController::class, 'cancel']);
Route::post('/prescriptions', [PrescriptionController::class, 'store']);// for test 
Route::get('/getPrescriptions', [PrescriptionController::class, 'latest']);// for test 
Route::get('/getLabTests', [LapController::class, 'latest']);// for test 
// Route::get('/getPrescriptions', [AppointmentController::class, 'latest']);
// Route::get('/test-prescription', function () {
//     return DB::table('prescriptions')->limit(1)->get();
// });
Route::post('/appointments/{id}/completeDoctor', [BillController::class, 'completeAppointmentDoctor']);
Route::post('/appointments/{id}/completePharmacy', [BillController::class, 'completeAppointmentPharmacy']);
Route::post('/appointments/{id}/completeLapTest', [BillController::class, 'completeAppointmentLabTest']);
Route::get('/getBills', [BillController::class, 'latestBills']);// for test 

Route::post('/laps', [Lapcontroller::class, 'store']);// for test 
// Route::post('/getBills', function () {
//     return response()->json(['message' => 'pong']);
// });
// Route::get('/getBlock', function (Request $request) {
//     return response()->json([
//         'received' => $request->input('patientID')
//     ]);
// });
// blockchain api
// Route::get('/getBlock', function (Request $request) {
//     $response = Http::post('http://192.168.1.3:5000/get_data', [
//         'patientID' => $request->input('patientID')
//     ]);

//     return $response->json();
// });
Route::post('/getBlock', [blokController::class, 'getBlockchainData']);
// Route::post('/register', [blokController::class, 'createWallet']);
// Route::post('/login', [blokController::class, 'connectWallet']);
Route::post('/blockchain/reply', [blokController::class, 'submitReply']);