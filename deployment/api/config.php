<?php
// Database configuration for InfinityFree hosting
// Replace these values with your actual database details from InfinityFree

// FOR INFINITYFREE HOSTING:
// Host format: sqlXXX.epizy.com (check your control panel)
// Database name format: epiz_XXXXX_portfolio_db
// Username format: epiz_XXXXX
$host = 'sql000.epizy.com';          // Replace with your SQL host from InfinityFree
$dbname = 'epiz_00000_portfolio_db'; // Replace with your database name
$username = 'epiz_00000';            // Replace with your database username  
$password = 'your_password_here';    // Replace with your database password

// FOR LOCAL TESTING (XAMPP/WAMP):
// Uncomment these lines if testing locally
// $host = 'localhost';
// $dbname = 'portfolio_db';
// $username = 'root';
// $password = '';

// Create connection
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    
    // Test connection (remove this after setup)
    // echo "Database connected successfully!";
    
} catch(PDOException $e) {
    // Log error (don't show to users in production)
    error_log("Database connection failed: " . $e->getMessage());
    
    // Show user-friendly error
    die("Sorry, the website is temporarily unavailable. Please try again later.");
}

// Set timezone
date_default_timezone_set('UTC');
?>
