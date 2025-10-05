<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');

require_once 'config.php';

function getVisitorIP() {
    $ipKeys = ['HTTP_CF_CONNECTING_IP', 'HTTP_CLIENT_IP', 'HTTP_X_FORWARDED_FOR', 'HTTP_X_FORWARDED', 'HTTP_FORWARDED_FOR', 'HTTP_FORWARDED', 'REMOTE_ADDR'];
    
    foreach ($ipKeys as $key) {
        if (array_key_exists($key, $_SERVER) === true) {
            foreach (explode(',', $_SERVER[$key]) as $ip) {
                $ip = trim($ip);
                if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE) !== false) {
                    return $ip;
                }
            }
        }
    }
    return $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
}

function trackVisitor($pdo) {
    $visitorIP = getVisitorIP();
    $userAgent = $_SERVER['HTTP_USER_AGENT'] ?? '';
    $pageUrl = $_POST['page_url'] ?? $_SERVER['HTTP_REFERER'] ?? '';
    $referrer = $_POST['referrer'] ?? '';
    
    // Track page view
    $stmt = $pdo->prepare("INSERT INTO page_views (visitor_ip, user_agent, page_url, referrer) VALUES (?, ?, ?, ?)");
    $stmt->execute([$visitorIP, $userAgent, $pageUrl, $referrer]);
    
    // Update total page views
    $stmt = $pdo->prepare("UPDATE visitor_stats SET stat_value = stat_value + 1 WHERE stat_name = 'total_page_views'");
    $stmt->execute();
    
    // Update today's page views
    $stmt = $pdo->prepare("UPDATE visitor_stats SET stat_value = stat_value + 1 WHERE stat_name = 'today_page_views'");
    $stmt->execute();
    
    // Check if this is a unique visitor (first visit today)
    $today = date('Y-m-d');
    $stmt = $pdo->prepare("SELECT id, visit_count FROM unique_visitors WHERE visitor_ip = ? AND user_agent = ?");
    $stmt->execute([$visitorIP, $userAgent]);
    $existingVisitor = $stmt->fetch();
    
    if ($existingVisitor) {
        // Update existing visitor
        $stmt = $pdo->prepare("UPDATE unique_visitors SET visit_count = visit_count + 1, last_visit = CURRENT_TIMESTAMP WHERE id = ?");
        $stmt->execute([$existingVisitor['id']]);
        
        // Check if this is their first visit today
        $stmt = $pdo->prepare("SELECT id FROM unique_visitors WHERE visitor_ip = ? AND user_agent = ? AND DATE(last_visit) = ?");
        $stmt->execute([$visitorIP, $userAgent, $today]);
        
        if (!$stmt->fetch()) {
            // First visit today, increment today's visitors
            $stmt = $pdo->prepare("UPDATE visitor_stats SET stat_value = stat_value + 1 WHERE stat_name = 'today_visitors'");
            $stmt->execute();
        }
    } else {
        // New visitor
        $stmt = $pdo->prepare("INSERT INTO unique_visitors (visitor_ip, user_agent) VALUES (?, ?)");
        $stmt->execute([$visitorIP, $userAgent]);
        
        // Update total visitors
        $stmt = $pdo->prepare("UPDATE visitor_stats SET stat_value = stat_value + 1 WHERE stat_name = 'total_visitors'");
        $stmt->execute();
        
        // Update today's visitors
        $stmt = $pdo->prepare("UPDATE visitor_stats SET stat_value = stat_value + 1 WHERE stat_name = 'today_visitors'");
        $stmt->execute();
    }
}

function getStats($pdo) {
    $stmt = $pdo->prepare("SELECT stat_name, stat_value FROM visitor_stats");
    $stmt->execute();
    $stats = $stmt->fetchAll(PDO::FETCH_KEY_PAIR);
    
    // Reset today's counters if it's a new day
    $lastUpdate = $pdo->query("SELECT last_updated FROM visitor_stats WHERE stat_name = 'today_visitors'")->fetchColumn();
    if ($lastUpdate && date('Y-m-d', strtotime($lastUpdate)) < date('Y-m-d')) {
        $pdo->prepare("UPDATE visitor_stats SET stat_value = 0 WHERE stat_name IN ('today_visitors', 'today_page_views')")->execute();
        $stats['today_visitors'] = 0;
        $stats['today_page_views'] = 0;
    }
    
    return $stats;
}

try {
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Track the visit
        trackVisitor($pdo);
    }
    
    // Return current stats
    $stats = getStats($pdo);
    
    echo json_encode([
        'success' => true,
        'data' => [
            'total_visitors' => (int)($stats['total_visitors'] ?? 0),
            'total_page_views' => (int)($stats['total_page_views'] ?? 0),
            'today_visitors' => (int)($stats['today_visitors'] ?? 0),
            'today_page_views' => (int)($stats['today_page_views'] ?? 0),
            'timestamp' => time()
        ]
    ]);
    
} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'error' => 'Server error occurred'
    ]);
}
?>
