<?php
$conn = mysqli_connect("localhost", "root", "", "student");
if (!$conn) {
    die("Failed to establish connection: " . mysqli_connect_error());
}
//DELETING THE TEMPLATE STRAT
if (isset($_POST['Delete'])) {
    $id=mysqli_real_escape_string($conn,$_POST['id']);

    $Deletetemplate = "DELETE FROM STRIPO WHERE id='$id'";
    if (mysqli_query($conn, $Deletetemplate)) {
       echo "<script> alert('Template delete sucessfully');</Script>";
        header("Refresh:0");
        //exit();
    } else {
        die("Failed to save template data: " . mysqli_error($conn));
    }  
}
//DELETING THE TEMPLATE END
$query = "SELECT * FROM STRIPO";

    $result = mysqli_query($conn, $query);
        echo "<table border='1'>
        <tr class='common'>
            <th class='common'>Template Content</th>
            <th class='common'>EDIT</th>
        </tr>";

while ($row = mysqli_fetch_assoc($result)) {
    //print_r($row);
    $compiledhtml = $row['compiledhtml'];
    echo "<tr class='common'>
            <td class='common'>
                <div style='max-height: 80px; overflow: hidden;'>
                    $compiledhtml
                </div>
            </td>
            <td><span class='button-container'>
                  <a href='http://localhost/phpmailer_smtp/Email_Edit/Edit_Email.html?id={$row['id']}' class='button-link' target='_blank'>Edit_Template</a>
              </span></td>
              <td>
              <form method='POST'>
              <input type='hidden' name='id' value='{$row['id']}'>
              <input type='submit' name='Delete' value='Delete'>
              </form>
              </td>
          </tr>";
}
echo "</table>";


mysqli_close($conn);
?>
<style>
    table {
    border-collapse: collapse;
    width: 100%;
}

.common {
    border: 1px solid #ddd;
    padding: 8px;
    /* width: 80px;
    height: 80px; 
    text-align: center; 
    vertical-align: middle; 
    overflow: hidden; 
    box-sizing: border-box; */
}

/* styles.css */

.button-container {
    background: #071F4F;
    width: auto;
    display: inline-block;
    border: 0 solid #2CB543;
    border-radius: 5px;
}
.button-link {
  text-decoration: none;
    color: #FFFFFF;
    display: inline-block;
    border-radius: 5px;
    border: 10px solid #071F4F;
}
      /*button style END*/
    </style>
