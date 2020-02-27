@extends('layouts.app')

@section('content')
<div class="container">
    <div class="jumbotron" id="jumbotron_index">
      <div class="text-center">
        <h1>Laravel Vue Crud</h1>
        <p>Latihan Laravel Vue MWahyudin</p>
      </div>
     
      <router-view></router-view>
      </div>
</div>
@endsection
