FROM php:7.1.8-apache

MAINTAINER Karthik Yoganathan

COPY . /src/app
COPY .docker/vhost.conf /etc/apache2/sites-available/000-default.conf

RUN chown -R www-data:www-data /src/app \
    && a2enmod rewrite
