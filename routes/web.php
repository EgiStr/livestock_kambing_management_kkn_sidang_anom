<?php

use App\Http\Controllers\FarmController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/tentang', function () {
    return Inertia::render('Tentang');
});

Route::get('/peternakan', [FarmController::class, 'index'])->name('Peternakan');
Route::get('/detailternak/{farm}', [FarmController::class, 'show'])->name('DetailTernak');

Route::get('/profil', function () {
    return Inertia::render('Profil');
});
Route::get('/detailprofil', function () {
    return Inertia::render('DetailProfil');
});
