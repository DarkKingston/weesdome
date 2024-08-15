<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
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

Route::get('/', [\App\Http\Controllers\IndexController::class, 'index'])->name('index');
Route::get('/news', [\App\Http\Controllers\IndexController::class, 'news'])->name('news');
Route::get('/news/{id}', [\App\Http\Controllers\IndexController::class, 'newsItem'])->name('newsItem');
Route::get('/object/{id}', [\App\Http\Controllers\IndexController::class, 'object'])->name('object');
Route::get('/catalog/{id}', [\App\Http\Controllers\IndexController::class, 'catalog'])->name('catalog');
Route::get('/favorite', [\App\Http\Controllers\IndexController::class, 'favorite'])->name('favorite');
