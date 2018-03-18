<?php require_once('config.php'); ?>
<?php
//Get all entries
$sql = "SELECT `id`, `info` FROM `customer`";
$result = $conn->query($sql);

if( $result->num_rows > 0 ){
    while($row = $result->fetch_assoc()) { //output data of each row
        $ress .= "\"user".$row["id"]."\":".$row["info"]. ",";
    }
}
echo '{'; echo substr($ress,0,-1); echo '}';
?>

<?php //echo '{
//"user1":{"name":"Homer","lastname":"Simpson","photo":"article1-1280x960.jpg","email":"homer@mail.us","phone1":"+380559507323","phone2":"+380570502329","city":"Springfield","street":"742 Evergreen Terrace","zcode":"22035","group":"friends"},
//"user2":{"name":"Agent","lastname":"Smith","photo":"article2-1280x960.jpg","email":"smith@gmail.us","phone1":"+380937508567","phone2":"+380893262888","city":"Los Angeles","street":"25 West Olympic","zcode":"90064","group":"evil"}
//}';
//?>
