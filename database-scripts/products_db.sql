CREATE DATABASE IF NOT EXISTS products_db;
USE products_db;

drop table if exists sellers;
CREATE TABLE sellers (
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

drop table if exists product;

CREATE TABLE product(
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    description TEXT,
    image_url VARCHAR(255),
    price DECIMAL(10, 2) NOT NULL,
    category VARCHAR(50) NOT NULL,
    subcategory VARCHAR(50),
    available_quantity INT NOT NULL,
    rating DECIMAL(3, 2),
    reviews INT,
    seller_id INT,
    FOREIGN KEY (seller_id) REFERENCES sellers(sellerId)
);

INSERT INTO product VALUES
(1, 'Laptop', 'Powerful laptop with high performance.', 'https://images.unsplash.com/photo-1602080858428-57174f9431cf?q=80&w=2751&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 999.99, 'Electronics', 'Computers', 50, 4.5, 20, 1),
(2, 'Smartphone', 'Latest smartphone with advanced features.', 'https://images.unsplash.com/photo-1664478711535-fd3cc5d1a99a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 499.99, 'Electronics', 'Mobile Phones', 100, 4.2, 15, 2),
(3, 'Coffee Maker', 'Automatic coffee maker for home use.', 'https://images.unsplash.com/photo-1593369196682-6d8ec9ff3ae0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 79.99, 'Appliances', 'Kitchen Appliances', 30, 4.0, 10, 3),
(4, 'Running Shoes', 'Comfortable running shoes for sports enthusiasts.', 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 89.99, 'Fashion', 'Footwear', 200, 4.8, 25, 4),
(5, 'Bluetooth Speaker', 'Portable speaker with wireless connectivity.', 'https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 49.99, 'Electronics', 'Audio', 80, 4.3, 18, 5);


commit;

select * from product;

