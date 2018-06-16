#!/usr/bin/env bash
docker-compose -f docker-compose-build.yml up --build -d && \
docker system prune --volumes && \
mkdir services/adhoc-nginx/build && \
cp -r services/react/build/client services/adhoc-nginx/build && \
docker build -t trzl/portfolio:pyt-react.1 -f ./services/adhoc-nginx/Dockerfile.prod ./services/adhoc-nginx && \
docker push trzl/portfolio:pyt-react.1 && \
docker build -t trzl/portfolio:pyt-proxy.1 -f ./services/reverseproxy/Dockerfile ./services/reverseproxy && \
docker push trzl/portfolio:pyt-proxy.1 && \
docker-compose down && \
docker system prune --volumes && \
sudo rm -rf services/adhoc-nginx/build && \
sudo rm -rf services/react/build/client && \
echo "Build complete!"