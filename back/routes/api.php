<?php

use App\Models\Appointment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\AuthController;

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
// Route::post('/patient', [PatientController::class, 'store']);
// Route::post('/doctor', [DoctorController::class, 'store']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/logout', [AuthController::class, 'logout']);
Route::post('/appointment', [AppointmentController::class, 'store']);
Route::get('/getAppointments', [AppointmentController::class, 'latest']);
// Route::get('/login', [LoginController::class, 'check']);
// Route::post('/login', [LoginController::class, 'check']);
// for test 
Route::post('/ping', function () {
    return response()->json(['message' => 'pong']);
});
