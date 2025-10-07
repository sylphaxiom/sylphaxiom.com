<?php
require_once "/home2/xikihgmy/includes/bucket.php";
$headers = apache_request_headers();
$dropError = <<<HTML
        <html>
            <div style="display:flex; flex-direction: column; padding-horizontal:auto; align-items:center;">
                <div class="tenor-gif-embed" data-postid="9628120" data-share-method="host" data-aspect-ratio="1.55" data-width="25%"><a href="https://tenor.com/view/jurassic-park-ah-you-didnt-say-the-magic-word-say-please-gif-9628120">Jurassic Park Ah GIF</a>from <a href="https://tenor.com/search/jurassic+park-gifs">Jurassic Park GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
                <h1>Oops! Looks like you F****d that right up!</h1>
                <h2>Your request header was missing some stuff!</h2>
            </div>
        </html>
    HTML;
$rainHead = $headers['Rain'];
if (!isset($rainHead)) {
    http_response_code(401);
    echo $dropError." - Rain is not present - ".var_dump($rainHead);
    exit(1);
}
if (!Bucket::rainDance($rainHead)) {
    http_response_code(401);
    echo $dropError."Rain is incorrect";
    exit(1);
}

// connect to the DB
$conn = Bucket::dbConn("web","sylphaxiom");

header("Content-Type: application/json");

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);

switch($method) {
    case 'GET':
        // GET info like SELECT statements or queries go here

        break;
    
    case 'POST':
        /* Set vars from input stream */
        $name = $input['name'];
        $subject = $name . " - " . $input['subject'];
        $who = $input['who'];
        $email = $input['email'];
        $message = $input['message'];
		$from = array('From' => 'webmaster@sylphaxiom.com');
		
		$sent = mail($email,$subject,$message,$from);
		
		if(!$sent) {
			$error = error_get_last()['message'];
		}

        /* Prepare, bind, and execute statement */
        try {
            $stmt = $conn->prepare('INSERT INTO web_form(name, subject, target, email, message) VALUES(?, ?, ?, ?, ?)');
            $stmt->bind_param("sssss", $name, $subject, $who, $email, $message);
            $stmt->execute();
            $retID = $conn->insert_id;
        } catch (mysqli_sql_exception $e) {
            http_response_code(404);
            echo json_encode(['result'=>'failure', 'message'=>"An unknown error has occurred: $e"]);
            break;
        }
        if(!$sent) {
            echo json_encode(["result"=>"failure", "message"=>"There was an issue sending the email: ".$error, "id"=>$retID]);
        } else {
            echo json_encode(["result"=>"success", "message"=>"Email sent successfully", "id"=>$retID]);
        }
        break;

    case 'PUT':
        // PUT info like UPDATE statements.
        break;
        
    case 'DELETE':
        // DELETE info like DROP and removal requests
        break;

    default:
        // Throw an error probably
}
?>