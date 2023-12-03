CREATE DATABASE IF NOT EXISTS products_db;
USE products_db;

CREATE TABLE IF NOT EXISTS sellers (
    sellerId INT PRIMARY KEY,
    sellerName VARCHAR(100) NOT NULL,
    sellerLocation VARCHAR(255),
    sellerContact VARCHAR(20)
);

INSERT INTO sellers VALUES
(1, 'TechStore', 'City A', '+1234567890'),
(2, 'GadgetWorld', 'City B', '+9876543210'),
(3, 'HomeEssentials', 'City C', '+1122334455'),
(4, 'SportsGear', 'City D', '+4433221100'),
(5, 'MusicHub', 'City E', '+5544332211');

CREATE TABLE IF NOT EXISTS products (
    productId INT PRIMARY KEY,
    productName VARCHAR(255) NOT NULL,
    description TEXT,
    image_url VARCHAR(255),
    price DECIMAL(10, 2) NOT NULL,
    category VARCHAR(50) NOT NULL,
    subcategory VARCHAR(50),
    availableQuantity INT NOT NULL,
    rating DECIMAL(3, 2),
    reviews INT,
    sellerId INT,
    FOREIGN KEY (sellerId) REFERENCES sellers(sellerId)
);

INSERT INTO products VALUES
(1, 'Laptop', 'Powerful laptop with high performance.', 'https://example.com/laptop_image.jpg', 999.99, 'Electronics', 'Computers', 50, 4.5, 20, 1),
(2, 'Smartphone', 'Latest smartphone with advanced features.', 'https://example.com/phone_image.jpg', 499.99, 'Electronics', 'Mobile Phones', 100, 4.2, 15, 2),
(3, 'Coffee Maker', 'Automatic coffee maker for home use.', 'https://example.com/coffee_maker_image.jpg', 79.99, 'Appliances', 'Kitchen Appliances', 30, 4.0, 10, 3),
(4, 'Running Shoes', 'Comfortable running shoes for sports enthusiasts.', 'https://example.com/shoes_image.jpg', 89.99, 'Fashion', 'Footwear', 200, 4.8, 25, 4),
(5, 'Bluetooth Speaker', 'Portable speaker with wireless connectivity.', 'https://example.com/speaker_image.jpg', 49.99, 'Electronics', 'Audio', 80, 4.3, 18, 5);


commit;

select * from products;

