docker run -it -d --name xampp -v /home/toni/DWEC/dwc:/opt/lampp/htdocs/dwc -v dwc-bd:/opt/lampp/var/mysql -p 8080:80 -p 443:443 -p 3306:3306 dwc/xampp
