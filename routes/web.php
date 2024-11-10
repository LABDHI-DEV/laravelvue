<?php

use Illuminate\Support\Facades\Route;

Route::get(uri: '/dashboard/{any?}', function () {
    return view('dashboard'); // Ensure 'dashboard.blade.php' exists
})->where('any', '.*');

Route::get('/', function () {
    return redirect('login');
});

Auth::routes();
