<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::middleware('web')->group(function () {
    Route::get('/sanctum/csrf-cookie', function () {
        return response()->json(['csrf_cookie' => 'set']);
    });
    // Route::post('/login', [AuthController::class, 'login']);
    Route::post('/login', function () {
        return response()->json(['message' => 'pong']);
    });
    Route::post('/logout', [AuthController::class, 'logout']);
});