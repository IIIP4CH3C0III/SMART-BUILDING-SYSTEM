#!/bin/bash

# Instalar mysqli extensão
docker-php-ext-install mysqli

# Executar o processo
exec "$@"
