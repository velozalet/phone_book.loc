<?php require_once('config.php'); ?>
<?php
$id = $_GET["id"];
//Get entry
$sql = "SELECT `id`, `info` FROM `customer` WHERE `id` = $id";
$result = $conn->query($sql);

//if( $result->num_rows > 0 ){
//    while($row = $result->fetch_assoc()) { //output data of each row
//        $ress .= "\"user".$row["id"]."\":".$row["info"]. ",";
//    }
//}
//echo '{'; echo substr($ress,0,-1); echo '}';

if( $result->num_rows > 0 ){
    while($row = $result->fetch_assoc()) { //output data of each row
        $ress = $row["info"];
    }
}
echo $ress;
?>
