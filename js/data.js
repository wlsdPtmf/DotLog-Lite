const Data = {
    beads: [
        { id: 1, dmcNumber: "BLANC", nameKr: "화이트", nameEn: "White", hex: "#FFFFFF", group: "White", tone: "light" },
        { id: 2, dmcNumber: "ECRU", nameKr: "에크루", nameEn: "Ecru", hex: "#F0EAD6", group: "Brown", tone: "light" },
        { id: 3, dmcNumber: "310", nameKr: "블랙", nameEn: "Black", hex: "#000000", group: "Gray", tone: "dark" },
        { id: 4, dmcNumber: "321", nameKr: "레드", nameEn: "Red", hex: "#C72B3B", group: "Red", tone: "mid" },
        { id: 5, dmcNumber: "444", nameKr: "다크 레몬", nameEn: "Lemon-DK", hex: "#FFD600", group: "Yellow", tone: "mid" },
        { id: 6, dmcNumber: "550", nameKr: "바이올렛", nameEn: "Violet-VY DK", hex: "#5D1964", group: "Purple", tone: "dark" },
        { id: 7, dmcNumber: "606", nameKr: "브라이트 오렌지", nameEn: "Bright Orange-Red", hex: "#FA3203", group: "Orange", tone: "mid" },
        { id: 8, dmcNumber: "666", nameKr: "크리스마스 레드", nameEn: "Christmas Red-BRT", hex: "#D90022", group: "Red", tone: "mid" },
        { id: 9, dmcNumber: "700", nameKr: "브라이트 그린", nameEn: "Christmas Green-BRT", hex: "#066A23", group: "Green", tone: "dark" },
        { id: 10, dmcNumber: "725", nameKr: "토파즈", nameEn: "Topaz", hex: "#FFC846", group: "Yellow", tone: "mid" },
        { id: 11, dmcNumber: "740", nameKr: "탠저린", nameEn: "Tangerine", hex: "#FF8406", group: "Orange", tone: "mid" },
        { id: 12, dmcNumber: "796", nameKr: "로얄 블루", nameEn: "Royal Blue-DK", hex: "#114081", group: "Blue", tone: "dark" },
        { id: 13, dmcNumber: "820", nameKr: "베리 다크 로얄 블루", nameEn: "Royal Blue-VY DK", hex: "#0F326D", group: "Blue", tone: "dark" },
        { id: 14, dmcNumber: "907", nameKr: "라이트 패럿 그린", nameEn: "Parrot Green-LT", hex: "#9CCF59", group: "Green", tone: "light" },
        { id: 15, dmcNumber: "939", nameKr: "베리 다크 네이비", nameEn: "Navy Blue-VY DK", hex: "#121E36", group: "Blue", tone: "dark" },
        { id: 16, dmcNumber: "5200", nameKr: "스노우 화이트", nameEn: "Snow White", hex: "#FFFFFF", group: "White", tone: "light" },
        { id: 17, dmcNumber: "150", nameKr: "더스티 로즈", nameEn: "Dusty Rose-UL VY DK", hex: "#AB0203", group: "Red", tone: "dark" },
        { id: 18, dmcNumber: "208", nameKr: "베리 다크 라벤더", nameEn: "Lavender-VY DK", hex: "#83528A", group: "Purple", tone: "dark" },
        { id: 19, dmcNumber: "209", nameKr: "다크 라벤더", nameEn: "Lavender-DK", hex: "#BC8AC9", group: "Purple", tone: "mid" },
        { id: 20, dmcNumber: "210", nameKr: "미디엄 라벤더", nameEn: "Lavender-MD", hex: "#DABBDF", group: "Purple", tone: "light" },
        { id: 21, dmcNumber: "307", nameKr: "레몬", nameEn: "Lemon", hex: "#FEF65B", group: "Yellow", tone: "light" },
        { id: 22, dmcNumber: "318", nameKr: "라이트 스틸 그레이", nameEn: "Steel Gray-LT", hex: "#B8B8B8", group: "Gray", tone: "light" },
        { id: 23, dmcNumber: "413", nameKr: "다크 퓨터 그레이", nameEn: "Pewter Gray-DK", hex: "#565656", group: "Gray", tone: "dark" },
        { id: 24, dmcNumber: "414", nameKr: "다크 스틸 그레이", nameEn: "Steel Gray-DK", hex: "#8C8C8C", group: "Gray", tone: "mid" },
        { id: 25, dmcNumber: "415", nameKr: "펄 그레이", nameEn: "Pearl Gray", hex: "#D3D3D6", group: "Gray", tone: "light" },
        { id: 26, dmcNumber: "436", nameKr: "탄", nameEn: "Tan", hex: "#CF9F76", group: "Brown", tone: "light" },
        { id: 27, dmcNumber: "498", nameKr: "다크 레드", nameEn: "Red-DK", hex: "#A7132B", group: "Red", tone: "dark" },
        { id: 28, dmcNumber: "600", nameKr: "베리 다크 크랜베리", nameEn: "Cranberry-VY DK", hex: "#CD2F62", group: "Red", tone: "mid" },
        { id: 29, dmcNumber: "701", nameKr: "라이트 크리스마스 그린", nameEn: "Christmas Green-LT", hex: "#268C3F", group: "Green", tone: "mid" },
        { id: 30, dmcNumber: "823", nameKr: "다크 네이비 블루", nameEn: "Navy Blue-DK", hex: "#20283E", group: "Blue", tone: "dark" }
    ],
    patterns: [
        {
            id: 1,
            name: "미니 별이 빛나는 밤",
            brand: "DIY ART",
            size: "30x40cm",
            difficulty: "중급",
            description: "고흐의 명작을 작은 사이즈로 즐겨보세요. 파란색 계열의 비즈가 많이 사용됩니다.",
            requiredBeads: [
                { code: "310", count: 200 },
                { code: "939", count: 150 },
                { code: "797", count: 120 },
                { code: "444", count: 50 },
                { code: "3865", count: 80 }
            ]
        },
        {
            id: 2,
            name: "봄날의 고양이",
            brand: "K-Stitch",
            size: "20x20cm",
            difficulty: "초급",
            description: "초보자가 시작하기 좋은 귀여운 고양이 도안입니다. 밝은 파스텔 톤 색상이 주를 이룹니다.",
            requiredBeads: [
                { code: "5200", count: 300 },
                { code: "210", count: 50 },
                { code: "211", count: 100 },
                { code: "741", count: 20 }
            ]
        },
        {
            id: 3,
            name: "해바라기 필드",
            brand: "Sunny Day",
            size: "40x50cm",
            difficulty: "고급",
            description: "거실에 걸어두면 복이 들어온다는 해바라기 도안입니다. 노란색 그라데이션이 포인트입니다.",
            requiredBeads: [
                { code: "444", count: 500 },
                { code: "725", count: 400 },
                { code: "740", count: 350 },
                { code: "741", count: 200 },
                { code: "700", count: 150 }
            ]
        }
    ],
    guides: [
        {
            title: "1. 비즈 코드란?",
            content: `
                <p>보석십자수의 비즈는 대부분 <strong>DMC 색상 코드</strong>를 따릅니다.</p>
                <p>도안에 적힌 번호(예: 310)는 비즈 봉지에 적힌 번호와 일치해야 합니다.</p>
                <p>같은 검은색이라도 310번과 939번은 미묘하게 다르니 꼭 번호를 확인하세요!</p>
            `
        },
        {
            title: "2. 필수 도구 준비",
            content: `
                <ul>
                    <li><strong>펜 & 고체 풀:</strong> 비즈를 집을 때 사용합니다.</li>
                    <li><strong>트레이:</strong> 비즈를 흔들어 줄을 세울 때 씁니다.</li>
                    <li><strong>핀셋:</strong> 잘못 붙인 비즈를 수정할 때 유용합니다.</li>
                </ul>
            `
        },
        {
            title: "3. 비즈가 헷갈릴 때",
            content: `
                <p>비슷한 색상(예: 939 남색과 310 검정)은 자연광 아래에서 확인하면 구분이 쉽습니다.</p>
                <p>작업 중에 섞이지 않도록 한 번에 한 색상만 트레이에 부어 사용하세요.</p>
            `
        }
    ]
};
