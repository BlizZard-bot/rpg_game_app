<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\GmHomeController;
use App\Http\Controllers\CharacterSheetsController;
use App\Http\Controllers\WlecomeController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CostumerSupportController;
use App\Models\User;

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

Route::get('/', [WlecomeController::class, 'index']);

Auth::routes();

Route::get('/home', [HomeController::class, 'index'])->name('home');
Route::get('/gmhome', [GmHomeController::class, 'index'])->name('gmhome');
Route::get('/admin', [AdminController::class, 'index'])->name('admin');


//Json game data routs
Route::post('character/create', [CharacterSheetsController::class, 'characterCreate']);
Route::post('character/update/{id}', [CharacterSheetsController::class, 'updateCharacter']);
Route::get('character/game-characters/{game}', [CharacterSheetsController::class, 'gameCharacters']);
Route::post('character/delete/{id}', [CharacterSheetsController::class, 'deleteGameCharacter']);

//Json costumers routs
Route::get('support/questions', [CostumerSupportController::class, 'getUsersQuestions']);
Route::post('support/question', [CostumerSupportController::class, 'makeQuestion']);
Route::post('support/question/{question_id}', [CostumerSupportController::class, 'deleteQuestion']);

//Admin routs
Route::get('admin/all-users', [AdminController::class, 'getAllUser']);
Route::post('admin/update', [AdminController::class, 'updateUser']);
Route::post('admin/delete/{id}', [AdminController::class, 'deleteUser']);
Route::post('admin/update-character', [AdminController::class, 'updateCharacter']);
Route::get('admin/questions', [AdminController::class, 'getAllQuestion']);
Route::get('admin/unanswered-questions', [AdminController::class, 'getAllUnasweredQuestion']);
Route::post('admin/answer/{id}', [AdminController::class, 'answerQuestion']);
Route::post('admin/delete-question/{question_id}', [AdminController::class, 'deleteQuestion']);