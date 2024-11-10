composer create-project --prefer-dist laravel/laravel laravelvue "11.*"
remove vite from package.json
npm install vue vue-loader vue-template-compiler
npm install laravel-mix

add script in package.json
"scripts": {
    "dev": "mix",
    "watch": "mix watch",
    "prod": "mix --production"
}

composer require laravel/ui
php artisan ui vue
php artisan ui vue --auth



replace code in resources/js/app.js
import { createApp } from 'vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import ExampleComponent from './components/ExampleComponent.vue';

const app = createApp({});

app.component('example-component', ExampleComponent);

app.mount('#app');


create webpack.mix.js file on root
add code
const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/assets/js')
   .vue() // Enables Vue support
   .sass('resources/sass/app.scss', 'public/assets/css');

npm install bootstrap@5.3.0
add resources/js/app.js
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Remove resources/sass/app.scss
// Bootstrap
@import 'bootstrap/scss/bootstrap';

app.blade.php
remove vite code and add 
<link rel="stylesheet" href="{{ asset('assets/css/app.css') }}">
<script src="{{ asset('assets/js/app.js') }}"></script>


delete post.config.js

routes setup and dashboard =>
1 . routes file = 
<?php

use Illuminate\Support\Facades\Route;

Route::get('/dashboard/{any?}', function () {
    return view('dashboard'); // Ensure 'dashboard.blade.php' exists
})->where('any', '.*');

Route::get('/', function () {
    return redirect('login');
});

Auth::routes();
register false

2. login controller changes => redirect to  dashboard page
3. create dashboard.blade.php file => 
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link href="{{ asset('assets/css/app.css') }}" rel="stylesheet">
</head>

<body>
    <div id="app">
        <example-component></example-component>
    </div>

    <script src="{{ asset('assets/js/app.js') }}"></script>
</body>

</html>

4. app.js file add 
const app = createApp({
    components: {
        ExampleComponent,
    }
});








Delete vite.config.js if it exists.
Delete node_modules/vite if it's present in your node_modules directory.
Remove the vite dependency from your package.json file.
npm uninstall vite


@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    {{ __('You are logged in!') }}
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
