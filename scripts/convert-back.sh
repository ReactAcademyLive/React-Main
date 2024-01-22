
if [ -d src-tsx ]; then
  rm -rf src
  mv src-tsx src
  sed -i -e s/main.jsx/main.tsx/g index.html
  mv vite.config.js vite.config.ts 
fi;


