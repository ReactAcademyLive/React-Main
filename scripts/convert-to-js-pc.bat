IF NOT EXIST src-tsx\NUL  (
  
  call sucrase ./src -d ./outDir --transforms typescript,jsx --disable-es-transforms --jsx-runtime preserve
  FOR /R .\outdir\ %%G IN (*.js) DO rename "%%G"  "%%~nG.jsx"
  robocopy .\src .\outdir\ /xf *.tsx *.ts /s 

  ren src src-tsx
  ren outDir src
  call prettier --write src
  ren vite.config.ts vite.config.js
  powershell -command "(Get-Content -Path index.html -raw -encoding utf8) -replace 'main.tsx', 'main.jsx' | Set-Content -Path index.html"
)