<?php
/**
 * Returns the list of cars.
 */

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
require 'connect.php';  
$cars = [];
$sql = "SELECT id, model, price FROM cars";
if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $cars[$cr]['id']    = $row['id'];
    $cars[$cr]['model'] = $row['model'];
    $cars[$cr]['price'] = $row['price'];
    $cr++;
  }
  http_response_code(200);  
  echo json_encode(['data'=>$cars]);
}
else
{
  http_response_code(404);
}
