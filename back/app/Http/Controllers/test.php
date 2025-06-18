<?php

$url = 'http://192.168.1.3:5000/get_data';
$data = array(
    'patientID' => '6251b76c-7143-418d-bbc5-f73c3c0a9475'
);

// Initialize cURL session
$ch = curl_init($url);

// Set cURL options
curl_setopt($ch, CURLOPT_POST, true); // Set request to POST
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json')); // Set content type
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // Return response as string
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data)); // JSON encode the data

// Execute the request
$response = curl_exec($ch);

// Check for cURL errors
if (curl_errno($ch)) {
    echo 'cURL error: ' . curl_error($ch);
} else {
    // Print the response
    echo "Response from server: " . $response;
}

// Close cURL session
curl_close($ch);

// =========================================================================== //

$url = 'http://192.168.1.3:5000/createWallet';

$data = array(
    'name' => 'John Doe',
    'birthdate' => '1990-01-01',
    'email' => 'johndoe@example.com',
    'gender' => 'Male',
    'password' => 'StrongPass123',
    'confirm_password' => 'StrongPass123',
    'role' => 'patient'
);

// Initialize cURL session
$ch = curl_init($url);

// Set options
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

// Execute request
$response = curl_exec($ch);

// Check for errors
if (curl_errno($ch)) {
    echo 'cURL error: ' . curl_error($ch);
} else {
    echo "Response from server: " . $response;
}

// Close cURL session
curl_close($ch);
// =========================================================================== //

$url = 'http://192.168.1.3:5000/connectWallet';

$data = array(
    'email' => 'johndoe@example.com',
    'password' => 'StrongPass123'
);

// Initialize cURL
$ch = curl_init($url);

// Set cURL options
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

// Execute the request
$response = curl_exec($ch);

// Handle errors or output the response
if (curl_errno($ch)) {
    echo 'cURL error: ' . curl_error($ch);
} else {
    echo "Response from server: " . $response;
}

// Close cURL
curl_close($ch);

// =========================================================================== //

$url = 'http://192.168.1.3:5000/submitReply';

$data = array(
    'record_id' => 'cbd21b4d-b598-4dde-9822-45976597e5ae',
    'patient_id' => '6251b76c-7143-418d-bbc5-f73c3c0a9475',
    'doctor_id' => '6529908a-e13b-4194-bf9c-af9b0664b083',
    'reply_content' => 'The symptoms suggest a mild infection. Monitor and stay hydrated.'
);

// Initialize cURL
$ch = curl_init($url);

// Set cURL options
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

// Execute request
$response = curl_exec($ch);

// Check for errors
if (curl_errno($ch)) {
    echo 'cURL Error: ' . curl_error($ch);
} else {
    echo "Response from server: " . $response;
}

// Close cURL session
curl_close($ch);