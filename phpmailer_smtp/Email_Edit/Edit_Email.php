<?php
$conn = mysqli_connect("localhost", "root", "", "student");
if (!$conn) {
    die(json_encode(['status' => 'error', 'message' => 'Failed to establish connection: ' . mysqli_connect_error()]));
}
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'] ?? '';
    if ($action === 'fetch') {
        $id = $_POST['id'] ?? '';
        if (isset($id)) {
            $id = mysqli_real_escape_string($conn, $id);
            $query = "SELECT rawhtml, rawcss FROM STRIPO WHERE id = '$id'";
            $result = mysqli_query($conn, $query);
            if ($result && mysqli_num_rows($result) > 0) {
                $data = mysqli_fetch_assoc($result);
                echo json_encode(['status' => 'success', 'data' => $data]);
            } else {
                echo json_encode(['status' => 'error', 'message' => 'No data found for the given ID']);
            }
        }
    } elseif ($action === 'update') {
        $id = $_POST['ID'] ?? '';
        $templateHtml = $_POST['templateHtml'] ?? '';
        $templateCss = $_POST['templateCss'] ?? '';
        $compiledHtml = $_POST['compiledHtml'] ?? '';
        if (isset($id)) {
            $id = mysqli_real_escape_string($conn, $id);
            $templateHtml = mysqli_real_escape_string($conn, $templateHtml);
            $templateCss = mysqli_real_escape_string($conn, $templateCss);
            $compiledHtml = mysqli_real_escape_string($conn, $compiledHtml);
            $query = "UPDATE STRIPO SET rawhtml = '$templateHtml', rawcss = '$templateCss', compiledhtml='$compiledHtml' WHERE id = '$id'";
            $result = mysqli_query($conn, $query);
            if ($result) {
                echo json_encode(['status' => 'success', 'message' => 'Template Update successfully']);
            } else {
                echo json_encode(['status' => 'error', 'message' => 'Failed to update record']);
            }
        }
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Invalid action']);
    }
    mysqli_close($conn);
}
?>
