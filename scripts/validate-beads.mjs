/**
 * [Data.beads 검증 스크립트 - Lite 버전]
 * 실행: npm run validate
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("🔍 Data.beads 검증을 시작합니다...\n");

const dataPath = path.join(__dirname, '../js/data.js');
let rawData;
try {
    rawData = fs.readFileSync(dataPath, 'utf-8');
} catch (e) {
    console.error("❌ [FAIL] js/data.js 파일을 읽을 수 없습니다.");
    process.exit(1);
}

let Data;
try {
    const fn = new Function(`${rawData}\nreturn Data;`);
    Data = fn();
} catch (e) {
    console.error("❌ [FAIL] js/data.js 파싱 실패 (문법 오류 또는 따옴표 깨짐 등)");
    console.error(e.message);
    process.exit(1);
}

if (!Data || !Array.isArray(Data.beads)) {
    console.error("❌ [FAIL] Data.beads 배열을 찾을 수 없습니다.");
    process.exit(1);
}

const beads = Data.beads;
let hasError = false;

const logError = (item, msg) => {
    const idStr = item.id !== undefined ? item.id : 'N/A';
    const dmcStr = item.dmcNumber !== undefined ? item.dmcNumber : 'N/A';
    const nameStr = item.nameKr || item.nameEn || item.name || 'N/A';
    console.error(`❌ [FAIL] id: ${idStr} / dmc: ${dmcStr} / name: ${nameStr} -> ${msg}`);
    hasError = true;
};

// 1. dmcNumber 중복 검사
const dmcCounts = {};
beads.forEach(b => {
    if (b.dmcNumber) {
        const dmc = String(b.dmcNumber).trim();
        dmcCounts[dmc] = (dmcCounts[dmc] || 0) + 1;
    }
});
const duplicateDmcs = Object.entries(dmcCounts).filter(([_, count]) => count > 1);

if (duplicateDmcs.length > 0) {
    duplicateDmcs.forEach(([dmc, count]) => {
        console.error(`❌ [FAIL] dmcNumber: ${dmc} (${count}번 중복)`);
    });
    hasError = true;
}

// 2. 필수 필드 및 hex 검사
const hexRegex = /^#[0-9a-fA-F]{6}$/;

beads.forEach(b => {
    // dmcNumber 필수
    if (!b.dmcNumber || String(b.dmcNumber).trim() === '') {
        logError(b, "필수 필드 누락: dmcNumber");
    }
    // name 필수
    if (!b.nameKr && !b.nameEn && !b.name) {
        logError(b, "필수 필드 누락: 이름");
    }
    // hex 필수 & 포맷
    if (!b.hex && !b.rgb) {
        logError(b, "필수 필드 누락: 색상 코드");
    } else if (b.hex && !hexRegex.test(b.hex)) {
        logError(b, `잘못된 hex 색상 포맷: ${b.hex} (#RRGGBB 형식이어야 함)`);
    }
});

// 3. id 검사 (숫자, 중복: 실패 / 연속성: 경고)
const idSet = new Set();
let maxId = 0;

beads.forEach(b => {
    if (typeof b.id !== 'number') {
        logError(b, "id가 숫자가 아니거나 누락되었습니다.");
    } else {
        if (idSet.has(b.id)) {
            logError(b, `id ${b.id}가 중복되었습니다.`);
        }
        idSet.add(b.id);
        if (b.id > maxId) maxId = b.id;
    }
});

// 연속성 경고 (Warn)
if (idSet.size !== maxId) {
    const missingIds = [];
    for (let i = 1; i <= maxId; i++) {
        if (!idSet.has(i)) missingIds.push(i);
    }
    if (missingIds.length > 0) {
        console.warn(`⚠️ [WARN] id가 연속적이지 않습니다. 누락: ${missingIds.join(', ')}`);
    }
}

// 요약 출력
console.log(`\n📊 총 검사 항목 수: ${beads.length}개`);

if (hasError) {
    console.error("❌ [FAIL] 검증 실패. 위 오류를 수정 후 다시 실행해주세요 (exit 1).\n");
    process.exit(1);
} else {
    console.log("✅ [PASS] 데이터 검증을 통과했습니다. (exit 0)\n");
    process.exit(0);
}
