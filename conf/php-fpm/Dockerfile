FROM php:8.0.3-fpm-buster
RUN pecl install xdebug \
&& docker-php-ext-enable xdebug
COPY xdebug.ini /usr/local/etc/php/conf.d/xdebug.ini