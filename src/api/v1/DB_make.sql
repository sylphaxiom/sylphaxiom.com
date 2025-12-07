CREATE TABLE `web_form` (
    `id` int NOT NULL AUTO_INCREMENT COMMENT 'PK',
    `target` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'intake' COMMENT 'one of (who_group)',
    `name` varchar(64) NOT NULL,
    `email` varchar(128) NOT NULL,
    `subject` varchar(255) NOT NULL,
    `message` text NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 4 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = 'Temporary table until full DB is required.'