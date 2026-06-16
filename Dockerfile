#stage 1
FROM node:latest as node
RUN npm i -g @angular/cli

WORKDIR app
COPY . .
RUN npm install
#RUN npm run build --prod
RUN npm run production
#RUN ng build --configuration walid


#stage 2
FROM nginx:alpine
COPY  --from=node /app/dist/complet-project /usr/share/nginx/html
COPY  default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
#stage 3
#FROM tomcat:alpine
#COPY --from=node /app/dist/complet-project  /usr/local/tomcat/webapps/angular
#EXPOSE 8080
#CMD ["/usr/local/tomcat/bin/catalina.sh", "run"]

#stage 4

#FROM httpd:latest
#COPY --from=node /app/dist/complet-project /usr/local/apache2/htdocs
#EXPOSE 80




