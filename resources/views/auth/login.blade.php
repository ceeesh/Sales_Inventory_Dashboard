<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=Nunito" rel="stylesheet">

    <!-- Scripts -->
    @viteReactRefresh
    @vite(['resources/sass/app.scss', 'resources/js/app.js'])
</head>

<body>
    <div class="container-fluid  m-0 p-0 vh-100">
        <div class="d-flex container-fluid m-0 p-0 h-100">

            <div class=" w-50">
                <div id="carouselExampleAutoplaying" class="carousel slide w-100" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active bg-dark">
                            <img src={{asset('images/img1.jpg')}} class="d-block w-100 vh-100 object-fit-cover"
                                alt="..." style="filter: opacity(60%);">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Inventory Dashboard</h5>
                                <p>Products</p>
                            </div>
                        </div>
                        <div class="carousel-item bg-danger">
                            <img src={{asset('images/img2.jpg')}} class="d-block w-100 vh-100 object-fit-cover"
                                alt="..." style="filter: opacity(70%);">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Inventory Dashboard</h5>
                                <p>Sales</p>
                            </div>
                        </div>
                        <div class="carousel-item bg-dark">
                            <img src={{asset('images/img3.jpg')}} class="d-block w-100 vh-100 object-fit-cover"
                                alt="..." style="filter: opacity(20%)">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Inventory Dashboard</h5>
                                <p>Stocks</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div class="w-50 d-flex justify-content-center align-items-center">
                <div class=" w-75 h-50 ">
                    <div>
                        <h1>Login</h1>
                        <p>Welcome back,</p>
                        <p>Please sign in to your account.</p>
                        <p>No account? <a href="/register">Sign up now</a></p>
                    </div>

                    <div>
                        <form method="POST" action="{{ route('login') }}" class=""">
                            @csrf
                            <div class=" border-top border-bottom pt-2 pb-2 mb-2">
                            <div class="d-flex gap-2">
                                <div class="w-100">
                                    <label for="email"> {{ __('Email') }}</label>

                                    <div class="">
                                        <input id="email" type="email"
                                            class="form-control @error('email') is-invalid @enderror " name="email"
                                            value="{{ old('email') }}" required autocomplete="email" autofocus>

                                        @error('email')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="w-100">
                                    <label for="password">{{ __('Password')}}</label>

                                    <div class="">
                                        <input id="password" type="password"
                                            class="form-control @error('password') is-invalid @enderror" name="password"
                                            required autocomplete="current-password">

                                        @error('password')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                </div>
                            </div>

                            <div class="mt-2">
                                <div class="">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="remember" id="remember" {{
                                            old('remember') ? 'checked' : '' }}>

                                        <label class="form-check-label" for="remember">
                                            {{ __('Remember Me') }}
                                        </label>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div class="d-flex justify-content-end">
                        <div class="">
                            @if (Route::has('password.request'))
                            <a class="btn btn-link" href="{{ route('password.request') }}">
                                {{ __('Forgot Your Password?') }}
                            </a>
                            @endif
                            <button type="submit" class="btn btn-primary">
                                {{ __('Login') }}
                            </button>


                        </div>
                    </div>

                    </form>

                </div>
            </div>
        </div>

        {{-- <div class="app-container app-theme-white body-tabs-shadow">
            <div class="app-container">
                <div class="h-100">
                    <div class="h-100 no-gutters row">
                        <div class="d-none d-lg-block col-lg-4">
                            <div class="slider-light">
                                <div class="slick-slider">
                                    <div>
                                        <div class="position-relative h-100 d-flex justify-content-center align-items-center bg-plum-plate"
                                            tabindex="-1">
                                            <div class="slide-img-bg"
                                                style="background-image: url('assets/images/originals/city.jpg');">
                                            </div>
                                            <div class="slider-content">
                                                <h3>Perfect Balance</h3>
                                                <p>ArchitectUI is like a dream. Some think it's too good to be true!
                                                    Extensive
                                                    collection of unified React Boostrap Components and Elements.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="position-relative h-100 d-flex justify-content-center align-items-center bg-premium-dark"
                                            tabindex="-1">
                                            <div class="slide-img-bg"
                                                style="background-image: url('assets/images/originals/citynights.jpg');">
                                            </div>
                                            <div class="slider-content">
                                                <h3>Scalable, Modular, Consistent</h3>
                                                <p>Easily exclude the components you don't require. Lightweight,
                                                    consistent
                                                    Bootstrap based styles across all elements and components
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="position-relative h-100 d-flex justify-content-center align-items-center bg-sunny-morning"
                                            tabindex="-1">
                                            <div class="slide-img-bg"
                                                style="background-image: url('assets/images/originals/citydark.jpg');">
                                            </div>
                                            <div class="slider-content">
                                                <h3>Complex, but lightweight</h3>
                                                <p>We've included a lot of components that cover almost all use
                                                    cases
                                                    for any type of application.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="h-100 d-flex bg-white justify-content-center align-items-center col-md-12 col-lg-8">
                            <div class="mx-auto app-login-box col-sm-12 col-md-10 col-lg-9">
                                <div class="app-logo"></div>
                                <h4 class="mb-0">
                                    <span class="d-block">Welcome back,</span>
                                    <span>Please sign in to your account.</span>
                                </h4>
                                <h6 class="mt-3">No account? <a href="javascript:void(0);" class="text-primary">Sign
                                        up
                                        now</a></h6>
                                <div class="divider row"></div>
                                <div>
                                    <form class>
                                        <div class="form-row">
                                            <div class="col-md-6">
                                                <div class="position-relative form-group">
                                                    <label for="exampleEmail" class>Email</label>
                                                    <input name="email" id="exampleEmail" placeholder="Email here..."
                                                        type="email" class="form-control">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="position-relative form-group">
                                                    <label for="examplePassword" class>Password</label>
                                                    <input name="password" id="examplePassword"
                                                        placeholder="Password here..." type="password"
                                                        class="form-control">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="position-relative form-check">
                                            <input name="check" id="exampleCheck" type="checkbox"
                                                class="form-check-input">
                                            <label for="exampleCheck" class="form-check-label">Keep me logged
                                                in</label>
                                        </div>
                                        <div class="divider row"></div>
                                        <div class="d-flex align-items-center">
                                            <div class="ml-auto">
                                                <a href="javascript:void(0);" class="btn-lg btn btn-link">Recover
                                                    Password</a>
                                                <button class="btn btn-primary btn-lg">Login to Dashboard</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        --}}



        {{-- <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ __('Login') }}</div>

                    <div class="card-body">
                        <form method="POST" action="{{ route('login') }}">
                            @csrf

                            <div class="row mb-3">
                                <label for="email" class="col-md-4 col-form-label text-md-end">{{ __('Email
                                    Address')
                                    }}</label>

                                <div class="col-md-6">
                                    <input id="email" type="email"
                                        class="form-control @error('email') is-invalid @enderror" name="email"
                                        value="{{ old('email') }}" required autocomplete="email" autofocus>

                                    @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="password" class="col-md-4 col-form-label text-md-end">{{ __('Password')
                                    }}</label>

                                <div class="col-md-6">
                                    <input id="password" type="password"
                                        class="form-control @error('password') is-invalid @enderror" name="password"
                                        required autocomplete="current-password">

                                    @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="row mb-3">
                                <div class="col-md-6 offset-md-4">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="remember" id="remember" {{
                                            old('remember') ? 'checked' : '' }}>

                                        <label class="form-check-label" for="remember">
                                            {{ __('Remember Me') }}
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        {{ __('Login') }}
                                    </button>

                                    @if (Route::has('password.request'))
                                    <a class="btn btn-link" href="{{ route('password.request') }}">
                                        {{ __('Forgot Your Password?') }}
                                    </a>
                                    @endif
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> --}}
    </div>
</body>