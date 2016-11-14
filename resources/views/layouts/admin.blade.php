<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>i晚黎后台</title>
  <link href="{{ elixir('admin/css/all.css') }}" rel="stylesheet">
  <script>
      window.Laravel = <?php echo json_encode([
          'csrfToken' => csrf_token(),
      ]); ?>
  </script>
</head>
<body>
  @yield('content')
  <script src="{{asset('admin/js/app.js')}}"></script>
  <script src="{{ elixir('admin/js/all.js') }}"></script>
</body>
</html>
