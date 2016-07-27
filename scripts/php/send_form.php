<?php
if (($_POST[sender_name] == "") ||
    ($_POST[sender_email] == "") ||
    ($_POST[message] == "")) {
      header("Location: #myModal");
      ?>
        <script type="text/javascript" src="scripts/js/contact_alert.js"></script>
      <?php
      exit;
}
$msg = "Email send from complxalgorithm.github.io\n";
$msg .= "Sender\'s Name:  $_POST[sender_name]\n";
$msg .= "Sender\'s Email:    $_POST[sender_email]\n";
$msg .= "Message:          $_POST[message]\n";
$to = "scsandman6496@gmail.com";
$subject = "Contact Form Submission";
$mailheaders = "From: My Web Site <$_POST[send_email]>\n";
$mailheaders .= "Reply-To: $_POST[sender_email]\n";
mail($to, $subject, $msg, $mailheaders);
?>
  <script type="text/javascript" src="scripts/js/confirmed.js"></script>
<?php
?>
