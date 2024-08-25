<?php
$conn = mysqli_connect("localhost", "root", "", "student");
if (!$conn) {
    die(json_encode(['status' => 'error', 'message' => 'Failed to establish connection: ' . mysqli_connect_error()]));
}
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $templateHtml = mysqli_real_escape_string($conn, $_POST['templateHtml']);
    $templateCss = mysqli_real_escape_string($conn, $_POST['templateCss']);
    $compiledHtml = mysqli_real_escape_string($conn, $_POST['compiledHtml']);
    $query = "INSERT INTO STRIPO (rawhtml, rawcss, compiledhtml) VALUES ('$templateHtml', '$templateCss', '$compiledHtml')";
    $result = mysqli_query($conn, $query);
    if ($result) {
        $response = ['status' => 'success', 'message' => 'Mail Template save to Database'];
    } else {
        $response = ['status' => 'error', 'message' => 'Failed to insert data: ' . mysqli_error($conn)];
    }
    echo json_encode($response);
    mysqli_close($conn);
    exit;
}
?>
