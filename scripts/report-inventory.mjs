/**
 * [인벤토리 비교 리포트 스크립트]
 * 실행: npm run report
 *
 * Data.beads (사이트 탑재 데이터) vs DMC_MASTER (마스터 DB)를 비교하여
 * 누락/중복/미탑재 현황을 출력합니다.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("📊 DotLog Lite — 인벤토리 비교 리포트\n");
console.log("=".repeat(60));

// ─── 1. data.js 읽기 / 파싱 ─────────────────────────────────
const dataPath = path.join(__dirname, '../js/data.js');
let rawData;
try {
    rawData = fs.readFileSync(dataPath, 'utf-8');
} catch (e) {
    console.error("❌ js/data.js 파일을 읽을 수 없습니다.");
    process.exit(1);
}

let Data;
try {
    const fn = new Function(`${rawData}\nreturn Data;`);
    Data = fn();
} catch (e) {
    console.error("❌ js/data.js 파싱 실패:", e.message);
    process.exit(1);
}

if (!Data || !Array.isArray(Data.beads)) {
    console.error("❌ Data.beads 배열을 찾을 수 없습니다.");
    process.exit(1);
}

// ─── 2. dmc_master.js 읽기 / 파싱 ──────────────────────────
// ESM export 파일이므로 텍스트로 읽어서 정규식으로 dmcNumber 추출
const masterPath = path.join(__dirname, '../js/dmc_master.js');
let rawMaster;
try {
    rawMaster = fs.readFileSync(masterPath, 'utf-8');
} catch (e) {
    console.error("❌ js/dmc_master.js 파일을 읽을 수 없습니다.");
    process.exit(1);
}

// DMC_ALIAS_MAP 파싱 (예: "5200": "B5200")
const aliasMap = {};
const aliasMatches = rawMaster.matchAll(/"(\d+)":\s*"([^"]+)"/g);
for (const m of aliasMatches) {
    aliasMap[m[1]] = m[2]; // e.g. "5200" → "B5200"
}

// dmcNumber: "XXX" 패턴 추출
const masterNumbers = new Set();
const masterMatches = rawMaster.matchAll(/dmcNumber:\s*["']([^"']+)["']/g);
for (const match of masterMatches) {
    masterNumbers.add(match[1]);
}

if (masterNumbers.size === 0) {
    console.error("❌ DMC_MASTER에서 dmcNumber를 추출하지 못했습니다.");
    process.exit(1);
}

// ─── 3. Data.beads 분석 ─────────────────────────────────────
const beads = Data.beads;
const beadsDmcCount = {};
beads.forEach(b => {
    if (b.dmcNumber) {
        // alias 정규화: "5200" → "B5200" 등
        let dmc = String(b.dmcNumber).trim();
        if (aliasMap[dmc]) dmc = aliasMap[dmc];
        beadsDmcCount[dmc] = (beadsDmcCount[dmc] || 0) + 1;
    }
});
const beadsNumbers = new Set(Object.keys(beadsDmcCount));

// 중복 검출 (정규화 후 기준)
const beadsDuplicates = Object.entries(beadsDmcCount).filter(([, c]) => c > 1);

// ─── 4. 비교 ────────────────────────────────────────────────
// beads에 있지만 마스터에 없는 코드
const onlyInBeads = [...beadsNumbers].filter(n => !masterNumbers.has(n)).sort();

// 마스터에 있지만 beads에 없는 코드
const onlyInMaster = [...masterNumbers].filter(n => !beadsNumbers.has(n)).sort();

// ─── 5. 출력 ────────────────────────────────────────────────

// 기본 통계
console.log(`\n① Data.beads 총 항목 수    : ${beads.length}개`);
console.log(`② DMC_MASTER 총 항목 수   : ${masterNumbers.size}개 (고유 dmcNumber 기준)`);

// 마스터 미포함
console.log(`\n${"─".repeat(60)}`);
console.log(`③ Data.beads에는 있지만 DMC_MASTER에 없는 코드: ${onlyInBeads.length}개`);
if (onlyInBeads.length === 0) {
    console.log("   ✅ 없음 (모두 마스터에 포함됨)");
} else {
    console.log(`   ⚠️  ${onlyInBeads.join(", ")}`);
}

// 미탑재
console.log(`\n${"─".repeat(60)}`);
console.log(`④ DMC_MASTER에는 있지만 Data.beads에 없는 코드: ${onlyInMaster.length}개 (아직 미탑재)`);
if (onlyInMaster.length === 0) {
    console.log("   ✅ 없음 (마스터 전체 탑재 완료)");
} else {
    // 보기 좋게 줄 나눠 출력
    const chunks = [];
    for (let i = 0; i < onlyInMaster.length; i += 10) {
        chunks.push(onlyInMaster.slice(i, i + 10).join(", "));
    }
    chunks.forEach(chunk => console.log(`   📋 ${chunk}`));
}

// 중복 검출
console.log(`\n${"─".repeat(60)}`);
console.log(`⑤ Data.beads 중복 dmcNumber: ${beadsDuplicates.length}건`);
if (beadsDuplicates.length === 0) {
    console.log("   ✅ 중복 없음");
} else {
    beadsDuplicates.forEach(([dmc, count]) => {
        console.log(`   ❌ ${dmc} (${count}회 중복)`);
    });
}

console.log(`\n${"=".repeat(60)}`);
console.log("리포트 완료.\n");
