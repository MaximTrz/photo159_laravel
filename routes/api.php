<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\PhotoController;

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
//
//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::get('prices', [\App\Http\Controllers\Prices::class, 'index']);

Route::get('faq', [\App\Http\Controllers\FaqController::class, 'index'] );

Route::get('services', [\App\Http\Controllers\ServiceController::class, 'index']);

Route::get('contacts', [\App\Http\Controllers\ContactController::class, 'index']);

Route::post('photo', [PhotoController::class, 'store']);
