-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июн 21 2024 г., 13:09
-- Версия сервера: 8.0.24
-- Версия PHP: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `photo159`
--

-- --------------------------------------------------------

--
-- Структура таблицы `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `margins`
--

CREATE TABLE `margins` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `margins`
--

INSERT INTO `margins` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Без полей', '2024-06-10 06:00:36', '2024-06-10 06:00:36'),
(2, 'С полями', '2024-06-10 06:00:56', '2024-06-10 06:07:34');

-- --------------------------------------------------------

--
-- Структура таблицы `materials`
--

CREATE TABLE `materials` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `material_type_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `sort_order` int NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `materials`
--

INSERT INTO `materials` (`id`, `name`, `material_type_id`, `created_at`, `updated_at`, `sort_order`) VALUES
(1, 'Глянцевая', 1, '2024-04-16 03:11:55', '2024-04-16 03:11:55', 1),
(2, 'Матовая', 1, '2024-04-16 23:21:10', '2024-04-16 23:21:10', 1),
(3, 'Пазл Картонный', 1, '2024-04-16 23:21:28', '2024-04-16 23:21:28', 1),
(4, 'Пазл Магнитный', 1, '2024-04-16 23:21:37', '2024-04-16 23:21:37', 1),
(5, 'Самоклеющаяся', 1, '2024-04-16 23:21:49', '2024-04-16 23:21:49', 1),
(6, 'Сатиновая (Премиум)', 1, '2024-04-16 23:22:00', '2024-04-16 23:22:00', 1),
(7, 'Текстура Кожа (Премиум)', 1, '2024-04-16 23:22:17', '2024-04-16 23:22:17', 1),
(8, 'Текстура Ткань (Премиум)', 1, '2024-04-16 23:22:39', '2024-04-16 23:22:39', 1),
(9, 'Шёлк (Премиум)', 1, '2024-04-16 23:22:48', '2024-04-16 23:22:48', 1),
(10, 'Брелок Акриловый', 2, '2024-04-26 03:56:55', '2024-04-26 03:56:55', 1),
(11, 'Значок Закатной', 2, '2024-04-26 03:57:07', '2024-04-26 03:57:07', 1),
(12, 'Магнит Акриловый', 2, '2024-04-26 03:57:20', '2024-04-26 03:57:20', 1),
(13, 'Магнит Закатной', 2, '2024-04-26 03:57:32', '2024-04-26 03:57:32', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `material_types`
--

CREATE TABLE `material_types` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `material_types`
--

INSERT INTO `material_types` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Основной', '2024-04-16 03:11:20', '2024-04-16 03:11:20'),
(2, 'Дополнительный', '2024-04-16 03:12:08', '2024-04-16 03:12:08');

-- --------------------------------------------------------

--
-- Структура таблицы `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2020_10_04_115514_create_moonshine_roles_table', 1),
(6, '2020_10_05_173148_create_moonshine_tables', 1),
(7, '2022_12_19_115549_create_moonshine_socialites_table', 1),
(8, '2024_03_27_110310_create_material_types_table', 1),
(9, '2024_03_27_113039_material_link_material_type', 1),
(10, '2024_03_27_114454_create_size_types_table', 1),
(11, '2024_03_27_114517_create_sizes_table', 1),
(12, '2024_03_29_032640_create_price_types_table', 1),
(13, '2024_03_29_032706_create_prices_table', 1),
(14, '2024_03_29_042708_create_orders_table', 1),
(15, '2024_03_29_045422_create_photos_table', 1),
(16, '9999_12_20_173629_create_notifications_table', 1),
(17, '2024_04_16_103613_add_sort_order_to_sizes_table', 2),
(18, '2024_04_16_104223_add_sort_order_to_materials_table', 2),
(19, '2024_06_10_104027_create_margins_table', 3);

-- --------------------------------------------------------

--
-- Структура таблицы `moonshine_socialites`
--

CREATE TABLE `moonshine_socialites` (
  `id` bigint UNSIGNED NOT NULL,
  `moonshine_user_id` bigint UNSIGNED NOT NULL,
  `driver` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `identity` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `moonshine_users`
--

CREATE TABLE `moonshine_users` (
  `id` bigint UNSIGNED NOT NULL,
  `moonshine_user_role_id` bigint UNSIGNED NOT NULL DEFAULT '1',
  `email` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `moonshine_users`
--

INSERT INTO `moonshine_users` (`id`, `moonshine_user_role_id`, `email`, `password`, `name`, `avatar`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 1, 'maxim.trz@gmail.com', '$2y$12$QIQmcIasw.AKGg.os66b2eU8rWDroAy1Ar9Lt797IqgOsIOY/2cma', 'Maksim', NULL, NULL, '2024-04-16 00:53:33', '2024-04-16 00:53:33');

-- --------------------------------------------------------

--
-- Структура таблицы `moonshine_user_roles`
--

CREATE TABLE `moonshine_user_roles` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `moonshine_user_roles`
--

INSERT INTO `moonshine_user_roles` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Admin', '2024-04-16 00:52:42', '2024-04-16 00:52:42');

-- --------------------------------------------------------

--
-- Структура таблицы `notifications`
--

CREATE TABLE `notifications` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notifiable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notifiable_id` bigint UNSIGNED NOT NULL,
  `data` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `read_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `orders`
--

CREATE TABLE `orders` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `surname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `delivery_type` int NOT NULL,
  `pay_type` int NOT NULL,
  `delivery_adress` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int NOT NULL,
  `wasOpened` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `photos`
--

CREATE TABLE `photos` (
  `id` bigint UNSIGNED NOT NULL,
  `order_id` bigint UNSIGNED NOT NULL,
  `file_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `size_id` bigint UNSIGNED NOT NULL,
  `material_id` bigint UNSIGNED NOT NULL,
  `amount` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `prices`
--

CREATE TABLE `prices` (
  `id` bigint UNSIGNED NOT NULL,
  `material_id` bigint UNSIGNED NOT NULL,
  `size_id` bigint UNSIGNED NOT NULL,
  `price` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `price_type_id` bigint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `prices`
--

INSERT INTO `prices` (`id`, `material_id`, `size_id`, `price`, `created_at`, `updated_at`, `price_type_id`) VALUES
(2, 1, 2, 13.00, '2024-04-16 23:31:09', '2024-04-16 23:31:09', 1),
(3, 1, 3, 13.00, '2024-04-16 23:31:38', '2024-04-16 23:31:38', 1),
(4, 1, 4, 10.00, '2024-04-16 23:31:56', '2024-04-16 23:31:56', 1),
(5, 1, 5, 22.00, '2024-04-16 23:32:09', '2024-04-16 23:32:09', 1),
(6, 1, 6, 37.00, '2024-04-16 23:32:25', '2024-04-16 23:32:25', 1),
(7, 1, 7, 82.00, '2024-04-16 23:32:46', '2024-04-16 23:32:46', 1),
(8, 1, 8, 200.00, '2024-04-16 23:33:07', '2024-04-16 23:33:07', 1),
(9, 1, 9, 350.00, '2024-04-16 23:33:49', '2024-04-16 23:33:49', 1),
(10, 1, 10, 600.00, '2024-04-16 23:34:07', '2024-04-16 23:34:07', 1),
(11, 2, 2, 13.00, '2024-04-16 23:36:29', '2024-04-16 23:36:29', 1),
(12, 2, 3, 13.00, '2024-04-16 23:36:50', '2024-04-16 23:36:50', 1),
(13, 2, 4, 15.00, '2024-04-16 23:37:30', '2024-06-10 05:13:37', 1),
(14, 2, 5, 22.00, '2024-04-16 23:37:48', '2024-04-16 23:37:48', 1),
(15, 2, 6, 37.00, '2024-04-16 23:38:07', '2024-04-16 23:38:07', 1),
(16, 2, 7, 82.00, '2024-04-16 23:38:29', '2024-04-16 23:38:29', 1),
(17, 2, 8, 200.00, '2024-04-16 23:38:48', '2024-04-16 23:38:48', 1),
(18, 2, 9, 350.00, '2024-04-16 23:39:05', '2024-04-16 23:39:05', 1),
(19, 2, 10, 600.00, '2024-04-16 23:39:25', '2024-04-16 23:39:25', 1),
(20, 3, 5, 250.00, '2024-04-16 23:44:16', '2024-04-16 23:44:16', 1),
(21, 3, 6, 350.00, '2024-04-16 23:44:33', '2024-04-16 23:44:33', 1),
(22, 3, 7, 450.00, '2024-04-16 23:44:55', '2024-04-16 23:44:55', 1),
(23, 4, 5, 350.00, '2024-04-16 23:57:02', '2024-04-16 23:57:02', 1),
(24, 4, 6, 450.00, '2024-04-16 23:57:25', '2024-04-16 23:57:50', 1),
(25, 4, 7, 550.00, '2024-04-16 23:58:14', '2024-04-16 23:58:14', 1),
(26, 5, 6, 35.00, '2024-04-16 23:59:41', '2024-04-16 23:59:41', 1),
(27, 5, 7, 85.00, '2024-04-17 00:00:26', '2024-04-17 00:00:26', 1),
(28, 6, 3, 15.00, '2024-04-17 00:00:52', '2024-04-17 00:00:52', 1),
(29, 6, 4, 12.00, '2024-04-17 00:02:47', '2024-04-17 00:02:47', 1),
(30, 7, 6, 45.00, '2024-04-17 00:03:43', '2024-04-17 00:03:43', 1),
(31, 8, 6, 45.00, '2024-04-17 00:04:00', '2024-04-17 00:04:00', 1),
(32, 9, 4, 12.00, '2024-04-17 00:05:19', '2024-04-17 00:05:19', 1),
(33, 10, 12, 70.00, '2024-04-26 04:02:05', '2024-04-26 04:02:05', 1),
(34, 10, 13, 70.00, '2024-04-26 04:02:29', '2024-04-26 04:02:29', 1),
(35, 11, 11, 80.00, '2024-04-26 04:02:46', '2024-04-26 04:02:46', 1),
(36, 11, 14, 80.00, '2024-04-26 04:03:05', '2024-04-26 04:03:05', 1),
(37, 12, 13, 70.00, '2024-04-26 04:03:24', '2024-04-26 04:03:24', 1),
(38, 13, 14, 70.00, '2024-04-26 04:03:43', '2024-04-26 04:03:43', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `price_types`
--

CREATE TABLE `price_types` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `price_types`
--

INSERT INTO `price_types` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Основная', '2024-04-16 06:02:35', '2024-04-16 06:02:35');

-- --------------------------------------------------------

--
-- Структура таблицы `sizes`
--

CREATE TABLE `sizes` (
  `id` bigint UNSIGNED NOT NULL,
  `width` int NOT NULL,
  `height` int NOT NULL,
  `comment` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `size_type_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `sort_order` int NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `sizes`
--

INSERT INTO `sizes` (`id`, `width`, `height`, `comment`, `size_type_id`, `created_at`, `updated_at`, `sort_order`) VALUES
(2, 10, 10, 'InstaFoto', 1, '2024-04-16 23:12:44', '2024-04-16 23:12:44', 1),
(3, 10, 12, 'Polaroid', 1, '2024-04-16 23:14:23', '2024-04-16 23:15:19', 1),
(4, 10, 15, 'A6', 1, '2024-04-16 23:15:45', '2024-04-16 23:15:45', 1),
(5, 15, 21, 'A5', 1, '2024-04-16 23:16:07', '2024-04-16 23:16:07', 1),
(6, 21, 30, 'A4', 1, '2024-04-16 23:16:41', '2024-04-16 23:16:41', 1),
(7, 30, 42, 'A3', 1, '2024-04-16 23:17:14', '2024-04-16 23:17:14', 1),
(8, 42, 60, 'A2', 1, '2024-04-16 23:17:55', '2024-04-16 23:17:55', 1),
(9, 60, 84, 'A1', 1, '2024-04-16 23:18:49', '2024-04-16 23:18:49', 1),
(10, 84, 120, 'A0', 1, '2024-04-16 23:19:18', '2024-04-16 23:19:18', 1),
(11, 38, 38, 'мм', 2, '2024-04-26 04:00:31', '2024-04-26 04:00:31', 1),
(12, 40, 40, 'мм', 2, '2024-04-26 04:00:47', '2024-04-26 04:00:47', 1),
(13, 40, 56, 'мм', 2, '2024-04-26 04:01:00', '2024-04-26 04:01:00', 1),
(14, 56, 56, 'мм', 2, '2024-04-26 04:01:14', '2024-04-26 04:01:14', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `size_types`
--

CREATE TABLE `size_types` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `size_types`
--

INSERT INTO `size_types` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Основной', '2024-04-16 01:20:45', '2024-04-16 01:20:45'),
(2, 'Дополнительный', '2024-04-16 01:21:02', '2024-04-16 01:21:02');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Индексы таблицы `margins`
--
ALTER TABLE `margins`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `materials`
--
ALTER TABLE `materials`
  ADD PRIMARY KEY (`id`),
  ADD KEY `materials_material_type_id_foreign` (`material_type_id`);

--
-- Индексы таблицы `material_types`
--
ALTER TABLE `material_types`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `moonshine_socialites`
--
ALTER TABLE `moonshine_socialites`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `moonshine_socialites_driver_identity_unique` (`driver`,`identity`);

--
-- Индексы таблицы `moonshine_users`
--
ALTER TABLE `moonshine_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `moonshine_users_email_unique` (`email`),
  ADD KEY `moonshine_users_moonshine_user_role_id_foreign` (`moonshine_user_role_id`);

--
-- Индексы таблицы `moonshine_user_roles`
--
ALTER TABLE `moonshine_user_roles`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notifications_notifiable_type_notifiable_id_index` (`notifiable_type`,`notifiable_id`);

--
-- Индексы таблицы `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Индексы таблицы `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Индексы таблицы `photos`
--
ALTER TABLE `photos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `photos_order_id_foreign` (`order_id`),
  ADD KEY `photos_size_id_foreign` (`size_id`),
  ADD KEY `photos_material_id_foreign` (`material_id`);

--
-- Индексы таблицы `prices`
--
ALTER TABLE `prices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `prices_price_type_id_foreign` (`price_type_id`),
  ADD KEY `prices_material_id_foreign` (`material_id`),
  ADD KEY `prices_size_id_foreign` (`size_id`);

--
-- Индексы таблицы `price_types`
--
ALTER TABLE `price_types`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sizes_size_type_id_foreign` (`size_type_id`);

--
-- Индексы таблицы `size_types`
--
ALTER TABLE `size_types`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `margins`
--
ALTER TABLE `margins`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `materials`
--
ALTER TABLE `materials`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT для таблицы `material_types`
--
ALTER TABLE `material_types`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT для таблицы `moonshine_socialites`
--
ALTER TABLE `moonshine_socialites`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `moonshine_users`
--
ALTER TABLE `moonshine_users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `moonshine_user_roles`
--
ALTER TABLE `moonshine_user_roles`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `photos`
--
ALTER TABLE `photos`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `prices`
--
ALTER TABLE `prices`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT для таблицы `price_types`
--
ALTER TABLE `price_types`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `sizes`
--
ALTER TABLE `sizes`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT для таблицы `size_types`
--
ALTER TABLE `size_types`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `materials`
--
ALTER TABLE `materials`
  ADD CONSTRAINT `materials_material_type_id_foreign` FOREIGN KEY (`material_type_id`) REFERENCES `material_types` (`id`) ON DELETE CASCADE;

--
-- Ограничения внешнего ключа таблицы `moonshine_users`
--
ALTER TABLE `moonshine_users`
  ADD CONSTRAINT `moonshine_users_moonshine_user_role_id_foreign` FOREIGN KEY (`moonshine_user_role_id`) REFERENCES `moonshine_user_roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `photos`
--
ALTER TABLE `photos`
  ADD CONSTRAINT `photos_material_id_foreign` FOREIGN KEY (`material_id`) REFERENCES `materials` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `photos_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `photos_size_id_foreign` FOREIGN KEY (`size_id`) REFERENCES `sizes` (`id`) ON DELETE CASCADE;

--
-- Ограничения внешнего ключа таблицы `prices`
--
ALTER TABLE `prices`
  ADD CONSTRAINT `prices_material_id_foreign` FOREIGN KEY (`material_id`) REFERENCES `materials` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `prices_price_type_id_foreign` FOREIGN KEY (`price_type_id`) REFERENCES `price_types` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `prices_size_id_foreign` FOREIGN KEY (`size_id`) REFERENCES `sizes` (`id`) ON DELETE CASCADE;

--
-- Ограничения внешнего ключа таблицы `sizes`
--
ALTER TABLE `sizes`
  ADD CONSTRAINT `sizes_size_type_id_foreign` FOREIGN KEY (`size_type_id`) REFERENCES `size_types` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
