<?php require_once('config.php'); ?>

<?php
$user_key = (integer)$_GET['userkey'];

$new_info_customer = array();
$new_info_customer['name'] = $_GET['name'];
$new_info_customer['lastname'] = $_GET['lastname'];
$new_info_customer['photo'] = $_GET['photo'];
$new_info_customer['city'] = $_GET['city'];
$new_info_customer['email'] = $_GET['email'];
$new_info_customer['phone1'] = $_GET['phone1'];
$new_info_customer['phone2'] = $_GET['phone2'];
$new_info_customer['street'] = $_GET['street'];
$new_info_customer['zcode'] = $_GET['zcode'];
$new_info_customer['group'] = $_GET['group'];

$new_info_customer = json_encode($new_info_customer);


//$new_str1 = '{"name":"Agent-Fedua","lastname":"Smith-Fedua","photo":"article2-1280x960.jpg","email":"smith@gmail.us","phone1":"+380937508567","phone2":"+380893262888","city":"Los Angeles-999999","street":"25 West Olympic","zcode":"90064","group":"evil Not"}';
//$new_str2 = '{"name":"Agent","lastname":"Smith","photo":"article2-1280x960.jpg","email":"smith@gmail.us","phone1":"+380937508567","phone2":"+380893262888","city":"Los Angeles","street":"25 West Olympic","zcode":"90064","group":"evil"}';

$sql = "UPDATE `customer` SET info='$new_info_customer' WHERE id=$user_key";
$conn->query($sql);
?>
