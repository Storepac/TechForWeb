<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $tel = trim($_POST["tel"]);
    $subject = trim($_POST["subject"]);
    $message = trim($_POST["message"]);

    if (empty($name) || empty($email) || empty($tel) || empty($subject) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Por favor, preencha todos os campos e forneça um endereço de e-mail válido.";
        exit;
    }

    $recipient = "mktandisu@gmail.com";
    $subject = "Nova mensagem de $name sobre $subject";

    $email_content = "Nome: $name\n";
    $email_content = "Email: $email\n";
    $email_content = "Telefone: $tel\n\n";
    $email_content = "Mensagem:\n$message\n";

    $email_headers = "From: $name <$email>";

    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo "Obrigado! Sua mensagem foi enviada.";
    } else {
        http_response_code(500);
        echo "Ops! Algo deu errado e não foi possível enviar sua mensagem.";
    }
} else {
    http_response_code(403);
    echo "Houve um problema com seu envio, por favor, tente novamente.";
}
?>
