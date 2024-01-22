
if  ! [ -d src-tsx ]; then
  sucrase ./src -d ./outDir --transforms typescript,jsx --disable-es-transforms --jsx-runtime preserve
  find ./outDir -name "*.js"  | while read x;  do mv "$x" "${x%.js}.jsx"; done


  rsync -av --exclude='*.ts' --exclude='*.tsx' ./src/*  ./outDir
  mv src src-tsx
  mv outDir src

  # prettier --write src

  mv vite.config.ts vite.config.js 
  sed -i -e s/main.tsx/main.jsx/g index.html
fi;