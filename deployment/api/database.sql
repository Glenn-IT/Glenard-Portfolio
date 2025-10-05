CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

-- Table to store visitor statistics
CREATE TABLE IF NOT EXISTS visitor_stats (
    id INT AUTO_INCREMENT PRIMARY KEY,
    stat_name VARCHAR(50) NOT NULL UNIQUE,
    stat_value INT DEFAULT 0,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table to track unique visitors
CREATE TABLE IF NOT EXISTS unique_visitors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    visitor_ip VARCHAR(45) NOT NULL,
    user_agent VARCHAR(500),
    first_visit TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_visit TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    visit_count INT DEFAULT 1,
    UNIQUE KEY unique_visitor (visitor_ip, user_agent)
);

-- Table to track all page views
CREATE TABLE IF NOT EXISTS page_views (
    id INT AUTO_INCREMENT PRIMARY KEY,
    visitor_ip VARCHAR(45),
    user_agent VARCHAR(500),
    page_url VARCHAR(255),
    visit_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    referrer VARCHAR(255)
);

-- Initialize stats table with default values
INSERT INTO visitor_stats (stat_name, stat_value) VALUES 
('total_visitors', 0),
('total_page_views', 0),
('today_visitors', 0),
('today_page_views', 0)
ON DUPLICATE KEY UPDATE stat_name = stat_name;
