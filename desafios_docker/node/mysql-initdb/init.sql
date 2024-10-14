-- init.sql
CREATE TABLE IF NOT EXISTS pessoas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL
);

INSERT INTO pessoas (nome) VALUES ('Maria'), ('Carlos');
