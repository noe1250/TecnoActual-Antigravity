<?php
// Configuración
$to = "ventas@tecnoactual.com"; // Tu correo de ventas
$subject = "Nuevo mensaje de contacto desde el sitio web";

// Headers para CORS y JSON
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Verificar método
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Método no permitido"]);
    exit;
}

// Obtener datos del cuerpo de la solicitud
$input = json_decode(file_get_contents("php://input"), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Datos inválidos"]);
    exit;
}

// Sanitizar entradas
$nombre = filter_var($input['nombre'] ?? '', FILTER_SANITIZE_STRING);
$empresa = filter_var($input['empresa'] ?? '', FILTER_SANITIZE_STRING);
$email = filter_var($input['email'] ?? '', FILTER_SANITIZE_EMAIL);
$telefono = filter_var($input['telefono'] ?? '', FILTER_SANITIZE_STRING);
$software = filter_var($input['software'] ?? '', FILTER_SANITIZE_STRING);
$mensaje = filter_var($input['mensaje'] ?? '', FILTER_SANITIZE_STRING);

// Validar campos requeridos
if (empty($nombre) || empty($email) || empty($mensaje)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Faltan campos obligatorios"]);
    exit;
}

// Construir el cuerpo del correo
$email_content = "Has recibido un nuevo mensaje de contacto:\n\n";
$email_content .= "Nombre: $nombre\n";
$email_content .= "Empresa: $empresa\n";
$email_content .= "Email: $email\n";
$email_content .= "Teléfono: $telefono\n";
$email_content .= "Software de interés: $software\n";
$email_content .= "Mensaje:\n$mensaje\n";

// Headers del correo
$headers = "From: noreply@tecnoactual.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Enviar correo
if (mail($to, $subject, $email_content, $headers)) {
    http_response_code(200);
    echo json_encode(["status" => "success", "message" => "Mensaje enviado correctamente"]);
} else {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Error al enviar el correo"]);
}
?>
