RED="\033[0;31m"
NC="\033[0m"

npm run build
cd build
echo "${RED}\nNow load: http://localhost:3000/${NC}"
node backend.js