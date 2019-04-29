<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['phone'];
$message = $_POST['website'];
$message = $_POST['message'];


$email_from = 'mnykolay@gmail.com';

$email_subject = "New Form Submission";

$email_body = "User Name: $name.\n".
                    "User Email: $visitor_email.\n".
                        "User Phone: $visitor_phone.\n".
                            "User Wesbite: $visitor_website.\n".
                                "User Message: $message.\n";


$to = "mnykolay@gmail.com";

$headers = "From: $email_from \r\n";

$headers .= "Reply To: $visitor_email \r\n";

mail($to,email_subject,$email_body,$headers);

header("Location: contact.html");

?>