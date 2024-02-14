<?php

use App\Http\Controllers\Controller;
use App\Http\Controllers\InventoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\SaleController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Models\Inventory;
use App\Models\Project;

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

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::group(['middleware' => 'auth'], function () {
    
    Route::get('/', function () {
        return view('welcome');
    });

    Route::get('/active_users', [UserController::class, 'activeUsers']);

    Route::get('/projects', [ProjectController::class, 'index']);

    Route::get('/in_progress_projects', [ProjectController::class, 'inProgressProjects']);

    Route::get('/completed_projects', [ProjectController::class, 'completedProjects']);

    Route::get('/products', [ProductController::class, 'index']);

    Route::get('/inventories', [InventoryController::class, 'index']);

    Route::get('/sales', [SaleController::class, 'index']);
    // Route::put('/listings/{listing}', [ListingController::class, 'update'])->middleware('auth');

    Route::put('/sales/{sale_id}', [SaleController::class, 'update']);

    Route::delete('/sales/{sale_id}', [SaleController::class, 'destroy']);

    Route::post('/new_sales', [SaleController::class, 'store']);

    Route::post('/new_product', [ProductController::class, 'store']);

    Route::put('/product/{product_id}', [ProductController::class, 'update']);

    Route::delete('/product/{product_id}', [ProductController::class, 'destroy']);

    Route::post('/logout', [UserController::class, 'logout']);
});
