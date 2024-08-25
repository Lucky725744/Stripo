<?php
include('smtp/PHPMailerAutoload.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $getEmailContent = $_POST['compiledHtml'];
    $result = smtp_mailer('receivermailid','Subject', $getEmailContent);
    echo $result;
    exit;
}

function smtp_mailer($to, $subject, $msg) {
    $mail = new PHPMailer(); 
    $mail->IsSMTP(); 
    $mail->SMTPAuth = true; 
    $mail->SMTPSecure = 'tls'; 
    $mail->Host = "smtp.gmail.com";
    $mail->Port = 587; 
    $mail->IsHTML(true);
    $mail->CharSet = 'UTF-8';
    //$mail->SMTPDebug = 2; 
    $mail->Username = "sender mail id";
    $mail->Password = "Enter you mail password";
    $mail->SetFrom("sender mail id");
    $mail->Subject = $subject;
    $mail->Body = $msg;
    $mail->AddAddress($to);
    $mail->SMTPOptions = array('ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => false
    ));
    if(!$mail->Send()){
        return $mail->ErrorInfo;
    } else {
        return 'Sent';
    }
}
?>
