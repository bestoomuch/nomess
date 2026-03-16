# Dockerfile
FROM nginx:alpine

# Копируем собранные файлы в папку nginx
COPY dist /usr/share/nginx/html

# Копируем конфиг nginx (создадим дальше)
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]