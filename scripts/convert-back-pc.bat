IF EXIST src-tsx\NUL  (
  rd /s /q src
  ren src-tsx src
  ren vite.config.js vite.config.ts
  powershell -command "(Get-Content -Path index.html -raw -encoding utf8) -replace 'main.jsx', 'main.tsx' | Set-Content -Path index.html"

)