ALTER TABLE dependentes
    ADD COLUMN IF NOT EXISTS nome_usuario VARCHAR(255) NOT NULL,
    ADD COLUMN IF NOT EXISTS senha_hashed VARCHAR(255) NOT NULL;