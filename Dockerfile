# Stage 1: Build React/Vite frontend assets
FROM node:18 AS node-build

WORKDIR /app

COPY package*.json ./
COPY vite.config.js ./
COPY resources/ ./resources/
COPY public/ ./public/

RUN npm install && npm run build


# Stage 2: Laravel PHP backend
FROM php:8.2-fpm

# Install PHP dependencies
RUN apt-get update && apt-get install -y \
    zip unzip git curl libzip-dev libpng-dev libonig-dev libxml2-dev \
    && docker-php-ext-install pdo_mysql mbstring zip exif pcntl bcmath

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

# Copy application code
COPY . .

# Copy built frontend assets
COPY --from=node-build /app/public/build ./public/build

# Install Laravel dependencies
RUN composer install --no-dev --optimize-autoloader

# Set file permissions
RUN chown -R www-data:www-data /var/www \
    && chmod -R 755 /var/www/storage

EXPOSE 9000

CMD ["php-fpm"]
