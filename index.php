<?php
header("Content-type:text/html; charset=utf-8"); // передаем заголовок с нужной кодировкой
//include_once dirname(__FILE__)."example_vue_js.js"; //include my cusom javaScrip file
$foo_test = 'test 1 string from PHP++';
$foo_test2 = 'test 2 string from PHP';
$foo_test_arr = array('a'=>'test value - 1', 'b'=>'test value - 2', 'c'=>'test value - 3');
?>

<!DOCTYPE html>
<html>
<head>
<title> Vue.js: Phone Book </title>
<meta http-equiv="content-type">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link href="assets/css/bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen"> <!--Bootstrap-->
<link href="assets/css/style.css" rel="stylesheet" type="text/css" media="screen">

<script src="assets/js/vue2/vue.js"></script>  <!--Vue.js 2-->
<script src="https://unpkg.com/axios/dist/axios.min.js"></script> <!--Axios-->

</head>

<body><?php define('__ROOT__', dirname(dirname(__FILE__))); ?>

<div id="app">
    <div class='container-fluid my_cont_fluid'>
        <input type="text" name="input_mane1" v-bind:value="message" v-on:input="message = $event.target.value"> <!-- `v-model` - связывает input(любые элменты формы) и состояние приложения(данные какие-то) -->
        <h2 v-show="true">Hello. world!</h2>
        <span v-cloak>Hello, {{ message }}</span>
        <!-- ================================================== --> <hr/>

        <button type="button" class="btn btn-success"  v-on:click="loadPhoneBook">Open Phone Book</button>

    </div><!--/.container-fluid-->
</div>
</body>

<script src="assets/js/main.js"></script>  <!-- подключ.javaScript-файла -->
</html>
