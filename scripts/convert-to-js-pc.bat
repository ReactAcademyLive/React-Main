IF ! "[" "-d" "src-tsx" (
  sucrase ./src -d ./outDir --transforms typescript,jsx --disable-es-transforms --jsx-runtime preserve
  REM UNKNOWN: {"type":"Pipeline","commands":[{"type":"Command","name":{"text":"find","type":"Word"},"suffix":[{"text":"./outDir","type":"Word"},{"text":"-name","type":"Word"},{"text":"*.js","type":"Word"}]},{"type":"While","clause":{"type":"CompoundList","commands":[{"type":"Command","name":{"text":"read","type":"Word"},"suffix":[{"text":"x","type":"Word"}]}]},"do":{"type":"CompoundList","commands":[{"type":"Command","name":{"text":"mv","type":"Word"},"suffix":[{"text":"\"$x\"","expansion":[{"loc":{"start":1,"end":2},"parameter":"x","type":"ParameterExpansion"}],"type":"Word"},{"text":"\"${x%.js}.jsx\"","expansion":[{"loc":{"start":1,"end":8},"parameter":"x","type":"ParameterExpansion","op":"removeSmallestSuffixPattern","word":{"text":".js","type":"Word"}}],"type":"Word"}]}]}}]}
  FOR /F "tokens=*" %%G IN ('dir /b C:\docs\*.txt') DO echo %%G

 
  rsync "-av" "--exclude=*.ts" "--exclude=*.tsx" "./src/*" "%CD%\outDir"
  mv "src" "src-tsx"
  mv "outDir" "src"
  prettier "--write" "src"
  mv "vite.config.ts" "vite.config.js"
  sed "-i" "-e" "s\main.tsx\main.jsx\g" "index.html"
)