// www/ 웹앱을 안드로이드 앱용 폴더(android-web/)로 복사하고 Capacitor 런타임을 붙입니다.
import { cpSync, rmSync, readFileSync, writeFileSync, copyFileSync } from 'node:fs';

const out = 'android-web';
rmSync(out, { recursive: true, force: true });
cpSync('www', out, { recursive: true });
rmSync(`${out}/sw.js`, { force: true }); // 앱 안에서는 서비스 워커가 필요 없습니다
copyFileSync('node_modules/@capacitor/core/dist/capacitor.js', `${out}/capacitor.js`);

const html = readFileSync(`${out}/index.html`, 'utf8');
if (!html.includes('<script src="i18n.js"></script>')) throw new Error('index.html 구조가 바뀌었습니다');
writeFileSync(`${out}/index.html`,
  html.replace('<script src="i18n.js"></script>', '<script src="capacitor.js"></script>\n  <script src="i18n.js"></script>')
      .replace(/\s*<link rel="manifest"[^>]*>/, ''));
console.log('android-web 준비 완료');
