<?php header("Content-type:text/html; charset=utf-8"); ?>
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

<body>

<div id="app">
    <div class='container-fluid'>

        <div id="section_book" class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center">
            <button type="button" id="btn_open_book" class="btn btn-success"
                    v-show="statusBtnOpenBook"
                    v-on:click="loadPhoneBook"
            > Open Phone Book
            </button>

            <div class="all-users-list" v-show="statusUsersList">
                <ul class="well all-users-list-ul" v-for="u_item, index in responseAllUsers">
                    <span> <strong>{{ index.slice(4) }}</strong> </span>
                    <li v-on:click="getCurrentUser(index)"> <strong>{{ index }} : {{ u_item.name }} {{ u_item.lastname }}</strong> </li>
                <!--<li>{{ u_item.email }}</li>-->
                    <li>+ {{ u_item.phone1 }}</li>
                    <li>+ {{ u_item.phone2 }}</li>
                <!--<li>{{ u_item.city }}</li>-->
                <!--<li>{{ u_item.street }}</li>-->
                <!--<li>{{ u_item.zcode }}</li>-->
                <!--<li>{{ u_item.group }}</li>-->
                    <img v-bind:src="pathToImageUser+u_item.photo" alt="">
                </ul>
            </div>

            <!--Component show and edit single User-->
            <edit-user v-show="statusCurrentUser"
                       v-bind:current_user_data="responseCurrentUser"
                       v-bind:current_user_key="idUser"
                       v-bind:path_to_image_user="pathToImageUser"
                       @on_new_user_data = "newUserSaveNewData"
                       @on_return_phone_book = "returnToPhoneBook"
            >
            </edit-user>
            <!--/Component show and edit single User-->

            <button type="button" id="btn_close_book" class="btn btn-success"
                    v-show="statusBtnCloseBook"
                    v-on:click="unloadPhoneBook"
            > Close Phone Book
            </button>




        </div> <!--/#section_book-->
    </div><!--/.container-fluid-->
</div>


</body>

<script src="assets/js/main.js"></script>  <!-- подключ.javaScript-файла -->
</html>
