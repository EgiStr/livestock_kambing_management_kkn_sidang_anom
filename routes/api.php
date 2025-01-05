<?php

use App\Http\Controllers\Api\ApiFarmController;
use App\Http\Controllers\Api\ApiUserController;
use App\Http\Controllers\IotSensorController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::apiResource('farms', ApiFarmController::class);
Route::apiResource('users', ApiUserController::class);
Route::post('/iot-sensors', [IotSensorController::class, 'store']);
