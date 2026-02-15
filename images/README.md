# Hero Section Image Setup

## 이미지 파일 추가 방법

1. 첨부하신 고양이 보석십자수 이미지를 다음 경로에 저장해 주세요:
   ```
   c:\Users\yeye2\Desktop\dotlog-lite\images\hero-cat-beadwork.jpg
   ```

2. 이미지 파일명: `hero-cat-beadwork.jpg`

3. 권장 이미지 사이즈:
   - 가로: 800-1000px
   - 세로: 600-800px
   - 비율: 4:3 또는 16:9

## 변경 사항 요약

### HTML 구조 (js/app.js)
- Hero 섹션을 2개의 div로 분리
  - `.hero-content`: 텍스트 영역 (왼쪽)
  - `.hero-image`: 이미지 영역 (오른쪽)

### CSS 스타일 (css/style.css)

#### PC 버전 (기본)
- Flexbox 가로 배치 (`flex-direction: row`)
- 텍스트 왼쪽 정렬
- 이미지 오른쪽 배치
- 40px gap으로 여백 확보
- 이미지에 border-radius와 그림자 효과

#### 모바일 버전 (768px 이하)
- Flexbox 세로 배치 (`flex-direction: column-reverse`)
- 이미지가 위, 텍스트가 아래로 배치
- 텍스트 중앙 정렬
- 30px gap으로 여백 조정

## 테스트 방법

이미지를 추가한 후 브라우저에서 확인:
1. PC 화면: 텍스트(왼쪽) + 이미지(오른쪽) 2단 레이아웃
2. 모바일 화면: 이미지(위) + 텍스트(아래) 세로 배치
