<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
        error_reporting(0);
        
                    $nome = $_POST['nome'];
                    $email = $_POST['email'];
                    $mensagem = $_POST['mensagem'];
                    $ERROR = NULL;

                    require 'vendor/autoload.php';

                    $from = new SendGrid\Email("$nome", "$email");
                    $subject = "MENSAGEM DE CONTATO";
                    $to = new SendGrid\Email(null, "carloslopesjunyor@gmail.com");
                    $content = new SendGrid\Content("text/html", "<br>$mensagem<br><br><br>Nome: $nome<br>Email: $email");
                    $mail = new SendGrid\Mail($from, $subject, $to, $content);

                    //Necessário inserir a chave
                    $apiKey = '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';
                    $sg = new \SendGrid($apiKey);

                    $response = $sg->client->mail()->send()->post($mail);
                    if($response){
                        $ERROR = "Mensagem enviada com sucesso";
                    }
                ?>
    </body>
</html>
