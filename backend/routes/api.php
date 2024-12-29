<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\PostController;// 追加
use App\Http\Controllers\Api\V1\CategoryController;// 追加
use App\Http\Controllers\Api\V1\TagController;// 追加
use App\Http\Controllers\Api\V1\CommentController;// 追加

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


// 追加するルート
Route::prefix('v1')->group(function () {
    Route::get('/posts', [PostController::class, 'index']);
    Route::post('/posts', [PostController::class, 'store']);
    Route::get('/posts/{post}', [PostController::class, 'show']);
    Route::put('/posts/{post}', [PostController::class, 'update']);
    Route::delete('/posts/{post}', [PostController::class, 'destroy']);
    Route::get('/posts/published', [PostController::class, 'published']);

    // Categories
    Route::apiResource('categories', CategoryController::class);

// Tags
    Route::apiResource('tags', TagController::class);

// Comments
    Route::get('posts/{post}/comments', [CommentController::class, 'index']);
    Route::post('posts/{post}/comments', [CommentController::class, 'store']);
    Route::middleware('auth:sanctum')->group(function () {
        Route::put('comments/{comment}', [CommentController::class, 'update']);
        Route::delete('comments/{comment}', [CommentController::class, 'destroy']);
        Route::post('comments/{comment}/approve', [CommentController::class, 'approve']);
        Route::post('comments/{comment}/spam', [CommentController::class, 'spam']);
    });

    // Auth routes (if not already added)
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
});
