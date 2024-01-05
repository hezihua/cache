# 使用Nginx作为基础镜像
FROM nginx:latest

# 设置工作目录
# WORKDIR /usr/share/nginx/html

# 复制前端文件到容器
# COPY ./docs/ .

# 如果需要，您可以添加Nginx配置文件
# COPY nginx.conf /etc/nginx/nginx.conf

# 暴露80端口（Nginx默认端口）
EXPOSE 80

# 容器启动时运行的命令
CMD ["nginx", "-g", "daemon off;"]
