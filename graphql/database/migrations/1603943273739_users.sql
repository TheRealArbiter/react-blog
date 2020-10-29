CREATE TABLE IF NOT EXISTS {}.users(
    id INT(12) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    role_id INT(12) NOT NULL,
    email VARCHAR(30) NOT NULL,
    image VARCHAR(200) NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    INDEX uemail (email),
    CONSTRAINT fk_urole FOREIGN KEY(role_id),
    REFERENCES roles(id),
    ON DELETE CASCADE CASCADE
)