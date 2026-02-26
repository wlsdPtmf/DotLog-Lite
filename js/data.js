const Data = {
    beads: [
        { id: 1, dmcNumber: "BLANC", nameKr: "화이트", nameEn: "White", hex: "#FFFFFF", group: "White", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 2, dmcNumber: "ECRU", nameKr: "에크루", nameEn: "Ecru", hex: "#F0EAD6", group: "Brown", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 17, dmcNumber: "150", nameKr: "더스티 로즈", nameEn: "Dusty Rose-UL VY DK", hex: "#AB0203", group: "Red", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 31, dmcNumber: "154", nameKr: "베리 다크 그레이프", nameEn: "Grape-VY DK", hex: "#2D1B2E", group: "Purple", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 18, dmcNumber: "208", nameKr: "베리 다크 라벤더", nameEn: "Lavender-VY DK", hex: "#83528A", group: "Purple", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 19, dmcNumber: "209", nameKr: "다크 라벤더", nameEn: "Lavender-DK", hex: "#BC8AC9", group: "Purple", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 20, dmcNumber: "210", nameKr: "미디엄 라벤더", nameEn: "Lavender-MD", hex: "#DABBDF", group: "Purple", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 21, dmcNumber: "307", nameKr: "레몬", nameEn: "Lemon", hex: "#FEF65B", group: "Yellow", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        {
            id: 3,
            dmcNumber: "310",
            nameKr: "블랙",
            nameEn: "Black",
            hex: "#000000",
            group: "Gray",
            tone: "dark",
            recommendedSize: "40x50cm 이상",
            availableType: "원형/사각 공용",
            content: {
                summary: "DMC 310(Black)은 보석십자수에서 가장 많이 사용되는 필수 색상입니다. 깊고 진한 검은색으로, 그림의 윤곽선이나 어두운 배경, 그림자 등을 표현할 때 없어서는 안 될 중요한 역할을 합니다.",
                bullets: [
                    "가장 기본적인 검은색으로 모든 색상과 잘 어울립니다.",
                    "배경 채움이나 머리카락, 눈동자 표현에 자주 쓰입니다.",
                    "단순한 검정이지만 레진, 아크릴 재질에 따라 광택의 느낌이 다를 수 있습니다."
                ],
                alternatives: ["3371 (Black Brown)", "939 (Navy Blue-VY DK)"],
                notes: "워낙 많이 쓰이는 색상이라 대용량으로 구비해두시는 것을 추천합니다."
            }
        },
        { id: 32, dmcNumber: "317", nameKr: "퓨터 그레이", nameEn: "Pewter Gray", hex: "#6E6F72", group: "Gray", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 22, dmcNumber: "318", nameKr: "라이트 스틸 그레이", nameEn: "Steel Gray-LT", hex: "#B8B8B8", group: "Gray", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 4, dmcNumber: "321", nameKr: "레드", nameEn: "Red", hex: "#C72B3B", group: "Red", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 23, dmcNumber: "413", nameKr: "다크 퓨터 그레이", nameEn: "Pewter Gray-DK", hex: "#565656", group: "Gray", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 24, dmcNumber: "414", nameKr: "다크 스틸 그레이", nameEn: "Steel Gray-DK", hex: "#8C8C8C", group: "Gray", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 25, dmcNumber: "415", nameKr: "펄 그레이", nameEn: "Pearl Gray", hex: "#D3D3D6", group: "Gray", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 33, dmcNumber: "434", nameKr: "라이트 브라운", nameEn: "Brown-LT", hex: "#9C5B36", group: "Brown", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 26, dmcNumber: "436", nameKr: "탄", nameEn: "Tan", hex: "#CF9F76", group: "Brown", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 5, dmcNumber: "444", nameKr: "다크 레몬", nameEn: "Lemon-DK", hex: "#FFD600", group: "Yellow", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 27, dmcNumber: "498", nameKr: "다크 레드", nameEn: "Red-DK", hex: "#A7132B", group: "Red", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 6, dmcNumber: "550", nameKr: "바이올렛", nameEn: "Violet-VY DK", hex: "#5D1964", group: "Purple", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 28, dmcNumber: "600", nameKr: "베리 다크 크랜베리", nameEn: "Cranberry-VY DK", hex: "#CD2F62", group: "Red", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 7, dmcNumber: "606", nameKr: "브라이트 오렌지", nameEn: "Bright Orange-Red", hex: "#FA3203", group: "Orange", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        {
            id: 8,
            dmcNumber: "666",
            nameKr: "크리스마스 레드",
            nameEn: "Christmas Red-BRT",
            hex: "#D90022",
            group: "Red",
            tone: "mid",
            recommendedSize: "30x40cm 이상",
            availableType: "원형/사각 공용",
            content: {
                summary: "DMC 666(Christmas Red)은 이름처럼 선명하고 강렬한 밝은 빨간색입니다. 크리스마스 장식이나 꽃, 강조하고 싶은 포인트 컬러로 완벽한 색상입니다.",
                bullets: [
                    "채도가 높고 눈에 확 띄는 정석적인 빨간색입니다.",
                    "장미, 산타클로스 옷, 크리스마스 장식 등에 주로 쓰입니다.",
                    "생동감 넘치는 작품을 만들 때 포인트로 활용하기 좋습니다."
                ],
                alternatives: ["321 (Red)", "349 (Dark Coral)"],
                notes: "너무 많이 사용하면 눈이 부실 수 있으니 포인트로 적절히 사용해 보세요."
            }
        },
        { id: 9, dmcNumber: "700", nameKr: "브라이트 그린", nameEn: "Christmas Green-BRT", hex: "#066A23", group: "Green", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 29, dmcNumber: "701", nameKr: "라이트 크리스마스 그린", nameEn: "Christmas Green-LT", hex: "#268C3F", group: "Green", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 10, dmcNumber: "725", nameKr: "토파즈", nameEn: "Topaz", hex: "#FFC846", group: "Yellow", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 11, dmcNumber: "740", nameKr: "탠저린", nameEn: "Tangerine", hex: "#FF8406", group: "Orange", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 34, dmcNumber: "741", nameKr: "미디엄 탠저린", nameEn: "Tangerine-MD", hex: "#FFA347", group: "Orange", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 12, dmcNumber: "796", nameKr: "로얄 블루", nameEn: "Royal Blue-DK", hex: "#114081", group: "Blue", tone: "dark", recommendedSize: "40x50cm 이상", availableType: "원형/사각 공용" },
        { id: 35, dmcNumber: "797", nameKr: "로얄 블루", nameEn: "Royal Blue", hex: "#15377D", group: "Blue", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 38, dmcNumber: "938", nameKr: "울트라 다크 커피 브라운", nameEn: "Coffee Brown-UL DK", hex: "#2C1810", group: "Brown", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 15, dmcNumber: "939", nameKr: "베리 다크 네이비", nameEn: "Navy Blue-VY DK", hex: "#121E36", group: "Blue", tone: "dark", recommendedSize: "40x50cm 이상", availableType: "원형/사각 공용" },
        { id: 39, dmcNumber: "963", nameKr: "울트라 베리 라이트 더스티 로즈", nameEn: "Dusty Rose-UL VY LT", hex: "#FFD9E1", group: "Red", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 40, dmcNumber: "970", nameKr: "라이트 펌킨", nameEn: "Pumpkin-LT", hex: "#F07E30", group: "Orange", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 41, dmcNumber: "995", nameKr: "일렉트릭 블루", nameEn: "Electric Blue", hex: "#0068B1", group: "Blue", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 42, dmcNumber: "3801", nameKr: "라이트 크리스마스 레드", nameEn: "Christmas Red-LT", hex: "#E12335", group: "Red", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 43, dmcNumber: "3865", nameKr: "윈터 화이트", nameEn: "Winter White", hex: "#F8F6F1", group: "White", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        {
            id: 16,
            dmcNumber: "5200",
            nameKr: "스노우 화이트",
            nameEn: "Snow White",
            hex: "#FFFFFF",
            group: "White",
            tone: "light",
            recommendedSize: "30x40cm 이상",
            availableType: "원형/사각 공용",
            content: {
                summary: "DMC 5200(Snow White)은 눈처럼 깨끗하고 쨍한 순백색입니다. 일반 화이트(White/Blanc)보다 더 밝고 차가운 느낌을 주어 하이라이트 표현이나 겨울 풍경에 적합합니다.",
                bullets: [
                    "가장 밝은 흰색으로 시원하고 깨끗한 느낌을 줍니다.",
                    "눈 결정, 구름, 웨딩드레스 등의 표현에 탁월합니다.",
                    "일반 화이트(Blanc)와 혼용하면 미세한 명암 차이를 줄 수 있습니다."
                ],
                alternatives: ["BLANC (White)", "3865 (Winter White)"],
                notes: "오염에 취약할 수 있으니 작업 시 깨끗한 손으로 만져주세요."
            }
        },
        { id: 44, dmcNumber: "702", nameKr: "켈리 그린", nameEn: "Kelly Green", hex: "#478F41", group: "Green", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 45, dmcNumber: "703", nameKr: "샤트뢰즈", nameEn: "Chartreuse", hex: "#75B048", group: "Green", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 46, dmcNumber: "704", nameKr: "브라이트 샤트뢰즈", nameEn: "Chartreuse-BRT", hex: "#9ACD5B", group: "Green", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 47, dmcNumber: "718", nameKr: "플럼", nameEn: "Plum", hex: "#9C2766", group: "Purple", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 48, dmcNumber: "720", nameKr: "다크 오렌지 스파이스", nameEn: "Orange Spice-DK", hex: "#E36427", group: "Orange", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 49, dmcNumber: "721", nameKr: "미디엄 오렌지 스파이스", nameEn: "Orange Spice-MD", hex: "#F28C4B", group: "Orange", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 50, dmcNumber: "722", nameKr: "라이트 오렌지 스파이스", nameEn: "Orange Spice-LT", hex: "#F5A969", group: "Orange", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 51, dmcNumber: "726", nameKr: "라이트 토파즈", nameEn: "Topaz-LT", hex: "#FCDA65", group: "Yellow", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 52, dmcNumber: "727", nameKr: "베리 라이트 토파즈", nameEn: "Topaz-VY LT", hex: "#FFE890", group: "Yellow", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 53, dmcNumber: "728", nameKr: "토파즈", nameEn: "Topaz", hex: "#E8B953", group: "Yellow", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 54, dmcNumber: "729", nameKr: "미디엄 올드 골드", nameEn: "Old Gold-MD", hex: "#C29048", group: "Yellow", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 64, dmcNumber: "301", nameKr: "미디엄 마호가니", nameEn: "Mahogany-MD", hex: "#B35A1F", group: "Brown", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 65, dmcNumber: "311", nameKr: "미디엄 네이비 블루", nameEn: "Navy Blue-MD", hex: "#1C538E", group: "Blue", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 66, dmcNumber: "312", nameKr: "베리 다크 베이비 블루", nameEn: "Baby Blue-VY DK", hex: "#1E476B", group: "Blue", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 67, dmcNumber: "315", nameKr: "베리 다크 앤틱 모브", nameEn: "Antique Mauve-VY DK", hex: "#865258", group: "Purple", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 68, dmcNumber: "319", nameKr: "베리 다크 피스타치오 그린", nameEn: "Pistachio Green-VY DK", hex: "#275533", group: "Green", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 69, dmcNumber: "322", nameKr: "다크 베이비 블루", nameEn: "Baby Blue-DK", hex: "#5D8CAE", group: "Blue", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 70, dmcNumber: "327", nameKr: "다크 바이올렛", nameEn: "Violet-DK", hex: "#6A3268", group: "Purple", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 71, dmcNumber: "333", nameKr: "베리 다크 블루 바이올렛", nameEn: "Blue Violet-VY DK", hex: "#5C4589", group: "Purple", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 72, dmcNumber: "336", nameKr: "네이비 블루", nameEn: "Navy Blue", hex: "#142851", group: "Blue", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 73, dmcNumber: "340", nameKr: "미디엄 블루 바이올렛", nameEn: "Blue Violet-MD", hex: "#9D91C4", group: "Purple", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 74, dmcNumber: "341", nameKr: "라이트 블루 바이올렛", nameEn: "Blue Violet-LT", hex: "#B7B0D8", group: "Purple", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 75, dmcNumber: "347", nameKr: "베리 다크 살몬", nameEn: "Salmon-VY DK", hex: "#BF2D2D", group: "Red", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 76, dmcNumber: "349", nameKr: "다크 코랄", nameEn: "Coral-DK", hex: "#D21E2C", group: "Red", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 77, dmcNumber: "350", nameKr: "미디엄 코랄", nameEn: "Coral-MD", hex: "#E04848", group: "Red", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 78, dmcNumber: "351", nameKr: "코랄", nameEn: "Coral", hex: "#E96A67", group: "Red", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 79, dmcNumber: "352", nameKr: "라이트 코랄", nameEn: "Coral-LT", hex: "#FD9C97", group: "Red", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 80, dmcNumber: "353", nameKr: "피치", nameEn: "Peach", hex: "#FDCFB8", group: "Orange", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 81, dmcNumber: "3371", nameKr: "블랙 브라운", nameEn: "Black Brown", hex: "#1E1108", group: "Brown", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 82, dmcNumber: "3705", nameKr: "다크 멜론", nameEn: "Melon-DK", hex: "#FF525C", group: "Red", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 83, dmcNumber: "3706", nameKr: "미디엄 멜론", nameEn: "Melon-MD", hex: "#FF787F", group: "Red", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 84, dmcNumber: "500", nameKr: "베리 다크 블루 그린", nameEn: "Blue Green-VY DK", hex: "#033027", group: "Green", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 85, dmcNumber: "501", nameKr: "다크 블루 그린", nameEn: "Blue Green-DK", hex: "#0D4C44", group: "Green", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 86, dmcNumber: "502", nameKr: "블루 그린", nameEn: "Blue Green", hex: "#2F796B", group: "Green", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 87, dmcNumber: "503", nameKr: "라이트 블루 그린", nameEn: "Blue Green-LT", hex: "#72B5A8", group: "Green", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 88, dmcNumber: "505", nameKr: "제이드 그린", nameEn: "Jade Green", hex: "#158E5F", group: "Green", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 89, dmcNumber: "517", nameKr: "다크 웨지우드", nameEn: "Wedgewood-DK", hex: "#196084", group: "Blue", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 90, dmcNumber: "518", nameKr: "라이트 웨지우드", nameEn: "Wedgewood-LT", hex: "#3080A6", group: "Blue", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 91, dmcNumber: "519", nameKr: "스카이 블루", nameEn: "Sky Blue", hex: "#6BB3D4", group: "Blue", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 92, dmcNumber: "520", nameKr: "다크 펀 그린", nameEn: "Fern Green-DK", hex: "#2C3823", group: "Green", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 93, dmcNumber: "522", nameKr: "펀 그린", nameEn: "Fern Green", hex: "#778866", group: "Green", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 94, dmcNumber: "523", nameKr: "라이트 펀 그린", nameEn: "Fern Green-LT", hex: "#92A183", group: "Green", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 95, dmcNumber: "524", nameKr: "베리 라이트 펀 그린", nameEn: "Fern Green-VY LT", hex: "#ABAF95", group: "Green", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 96, dmcNumber: "535", nameKr: "베리 라이트 애쉬 그레이", nameEn: "Ash Gray-VY LT", hex: "#484642", group: "Gray", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 97, dmcNumber: "543", nameKr: "울트라 베리 라이트 베이지 브라운", nameEn: "Beige Brown-UL VY LT", hex: "#E6D7C5", group: "Brown", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 98, dmcNumber: "552", nameKr: "미디엄 바이올렛", nameEn: "Violet-MD", hex: "#6E3574", group: "Purple", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 99, dmcNumber: "553", nameKr: "바이올렛", nameEn: "Violet", hex: "#844C89", group: "Purple", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 100, dmcNumber: "554", nameKr: "라이트 바이올렛", nameEn: "Violet-LT", hex: "#D6A6D1", group: "Purple", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 101, dmcNumber: "561", nameKr: "베리 다크 제이드", nameEn: "Jade-VY DK", hex: "#1C523A", group: "Green", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 102, dmcNumber: "562", nameKr: "미디엄 제이드", nameEn: "Jade-MD", hex: "#2D7D54", group: "Green", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 103, dmcNumber: "564", nameKr: "베리 라이트 제이드", nameEn: "Jade-VY LT", hex: "#92C0A5", group: "Green", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 104, dmcNumber: "155", nameKr: "다크 블루 바이올렛", nameEn: "Blue Violet-DK", hex: "#7B68EE", group: "Purple", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 105, dmcNumber: "156", nameKr: "미디엄 블루 바이올렛", nameEn: "Blue Violet-MD", hex: "#8470FF", group: "Purple", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 106, dmcNumber: "157", nameKr: "라이트 콘플라워 블루", nameEn: "Cornflower Blue-LT", hex: "#B0C4DE", group: "Blue", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 107, dmcNumber: "158", nameKr: "미디엄 콘플라워 블루", nameEn: "Cornflower Blue-MD", hex: "#6495ED", group: "Blue", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 108, dmcNumber: "159", nameKr: "라이트 그레이 블루", nameEn: "Gray Blue-LT", hex: "#BCAEB3", group: "Blue", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 109, dmcNumber: "160", nameKr: "미디엄 그레이 블루", nameEn: "Gray Blue-MD", hex: "#9B8C91", group: "Blue", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 110, dmcNumber: "161", nameKr: "그레이 블루", nameEn: "Gray Blue", hex: "#71686E", group: "Blue", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 111, dmcNumber: "162", nameKr: "울트라 베리 라이트 블루", nameEn: "Blue-UL VY LT", hex: "#D4DCE8", group: "Blue", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 112, dmcNumber: "163", nameKr: "미디엄 셀라돈 그린", nameEn: "Celadon Green-MD", hex: "#7E9B76", group: "Green", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 113, dmcNumber: "164", nameKr: "라이트 포레스트 그린", nameEn: "Forest Green-LT", hex: "#9AB58D", group: "Green", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 114, dmcNumber: "165", nameKr: "베리 라이트 모스 그린", nameEn: "Moss Green-VY LT", hex: "#D0DA8C", group: "Green", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 115, dmcNumber: "166", nameKr: "미디엄 라이트 모스 그린", nameEn: "Moss Green-MD LT", hex: "#BDCD59", group: "Green", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 116, dmcNumber: "167", nameKr: "베리 다크 옐로우 베이지", nameEn: "Yellow Beige-VY DK", hex: "#8D734B", group: "Brown", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 117, dmcNumber: "168", nameKr: "베리 라이트 퓨터", nameEn: "Pewter-VY LT", hex: "#B8B8B8", group: "Gray", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 118, dmcNumber: "169", nameKr: "라이트 퓨터", nameEn: "Pewter-LT", hex: "#8B8B8B", group: "Gray", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 119, dmcNumber: "211", nameKr: "라이트 라벤더", nameEn: "Lavender-LT", hex: "#E6CEE6", group: "Purple", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 120, dmcNumber: "221", nameKr: "베리 다크 쉘 핑크", nameEn: "Shell Pink-VY DK", hex: "#883D43", group: "Red", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 121, dmcNumber: "223", nameKr: "라이트 쉘 핑크", nameEn: "Shell Pink-LT", hex: "#CC7C80", group: "Red", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 122, dmcNumber: "224", nameKr: "베리 라이트 쉘 핑크", nameEn: "Shell Pink-VY LT", hex: "#E9B2B6", group: "Red", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 123, dmcNumber: "225", nameKr: "울트라 베리 라이트 쉘 핑크", nameEn: "Shell Pink-UL VY LT", hex: "#FFE1E4", group: "Red", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 124, dmcNumber: "300", nameKr: "베리 다크 마호가니", nameEn: "Mahogany-VY DK", hex: "#683011", group: "Brown", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 125, dmcNumber: "304", nameKr: "미디엄 레드", nameEn: "Red-MD", hex: "#B62234", group: "Red", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 126, dmcNumber: "309", nameKr: "다크 로즈", nameEn: "Rose-DK", hex: "#BA274A", group: "Red", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 127, dmcNumber: "316", nameKr: "미디엄 앤틱 모브", nameEn: "Antique Mauve-MD", hex: "#A87884", group: "Purple", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 128, dmcNumber: "320", nameKr: "미디엄 피스타치오 그린", nameEn: "Pistachio Green-MD", hex: "#6C8B6E", group: "Green", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 129, dmcNumber: "326", nameKr: "베리 다크 로즈", nameEn: "Rose-VY DK", hex: "#99213D", group: "Red", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 130, dmcNumber: "334", nameKr: "미디엄 베이비 블루", nameEn: "Baby Blue-MD", hex: "#739FC1", group: "Blue", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 131, dmcNumber: "335", nameKr: "로즈", nameEn: "Rose", hex: "#EE547A", group: "Red", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 132, dmcNumber: "355", nameKr: "다크 러스트", nameEn: "Rust-DK", hex: "#944633", group: "Brown", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 133, dmcNumber: "356", nameKr: "미디엄 러스트", nameEn: "Rust-MD", hex: "#C0614C", group: "Brown", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 134, dmcNumber: "367", nameKr: "다크 피스타치오 그린", nameEn: "Pistachio Green-DK", hex: "#4F6B55", group: "Green", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 135, dmcNumber: "368", nameKr: "라이트 피스타치오 그린", nameEn: "Pistachio Green-LT", hex: "#A0BC9E", group: "Green", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 136, dmcNumber: "369", nameKr: "베리 라이트 피스타치오 그린", nameEn: "Pistachio Green-VY LT", hex: "#C9DEC4", group: "Green", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 137, dmcNumber: "370", nameKr: "미디엄 머스타드", nameEn: "Mustard-MD", hex: "#AC8F62", group: "Yellow", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 138, dmcNumber: "371", nameKr: "머스타드", nameEn: "Mustard", hex: "#94805A", group: "Yellow", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 139, dmcNumber: "372", nameKr: "라이트 머스타드", nameEn: "Mustard-LT", hex: "#BBAF88", group: "Yellow", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 140, dmcNumber: "400", nameKr: "다크 마호가니", nameEn: "Mahogany-DK", hex: "#85401A", group: "Brown", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 141, dmcNumber: "402", nameKr: "베리 라이트 마호가니", nameEn: "Mahogany-VY LT", hex: "#EAA87E", group: "Brown", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 142, dmcNumber: "407", nameKr: "다크 디저트 샌드", nameEn: "Desert Sand-DK", hex: "#AB705B", group: "Brown", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 143, dmcNumber: "420", nameKr: "다크 헤이즐넛 브라운", nameEn: "Hazelnut Brown-DK", hex: "#8C5D36", group: "Brown", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 144, dmcNumber: "151", nameKr: "베리 라이트 더스티 로즈", nameEn: "Dusty Rose-VY LT", hex: "#F0CECE", group: "Red", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 145, dmcNumber: "152", nameKr: "미디엄 라이트 쉘 핑크", nameEn: "Shell Pink-MD LT", hex: "#E2A6A6", group: "Red", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 146, dmcNumber: "153", nameKr: "베리 라이트 바이올렛", nameEn: "Violet-VY LT", hex: "#E0CCD8", group: "Purple", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 147, dmcNumber: "422", nameKr: "라이트 헤이즐넛 브라운", nameEn: "Hazelnut Brown-LT", hex: "#C69F7B", group: "Brown", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 148, dmcNumber: "433", nameKr: "미디엄 브라운", nameEn: "Brown-MD", hex: "#7A4323", group: "Brown", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 149, dmcNumber: "435", nameKr: "베리 라이트 브라운", nameEn: "Brown-VY LT", hex: "#B87544", group: "Brown", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 150, dmcNumber: "437", nameKr: "라이트 탄", nameEn: "Tan-LT", hex: "#E8B78D", group: "Brown", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 151, dmcNumber: "445", nameKr: "라이트 레몬", nameEn: "Lemon-LT", hex: "#FFFF99", group: "Yellow", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 152, dmcNumber: "451", nameKr: "다크 쉘 그레이", nameEn: "Shell Gray-DK", hex: "#8D7C7A", group: "Gray", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 153, dmcNumber: "452", nameKr: "미디엄 쉘 그레이", nameEn: "Shell Gray-MD", hex: "#A89A98", group: "Gray", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 154, dmcNumber: "453", nameKr: "라이트 쉘 그레이", nameEn: "Shell Gray-LT", hex: "#C7BEBC", group: "Gray", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 155, dmcNumber: "469", nameKr: "아보카도 그린", nameEn: "Avocado Green", hex: "#5C6A3C", group: "Green", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 156, dmcNumber: "470", nameKr: "라이트 아보카도 그린", nameEn: "Avocado Green-LT", hex: "#748849", group: "Green", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 157, dmcNumber: "471", nameKr: "베리 라이트 아보카도 그린", nameEn: "Avocado Green-VY LT", hex: "#95A869", group: "Green", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 158, dmcNumber: "472", nameKr: "울트라 라이트 아보카도 그린", nameEn: "Avocado Green-UL LT", hex: "#D8E498", group: "Green", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 159, dmcNumber: "580", nameKr: "다크 모스 그린", nameEn: "Moss Green-DK", hex: "#4C6B28", group: "Green", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 160, dmcNumber: "581", nameKr: "모스 그린", nameEn: "Moss Green", hex: "#728F3F", group: "Green", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 161, dmcNumber: "597", nameKr: "터콰이즈", nameEn: "Turquoise", hex: "#4B8B9B", group: "Blue", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 162, dmcNumber: "598", nameKr: "라이트 터콰이즈", nameEn: "Turquoise-LT", hex: "#90C0C8", group: "Blue", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 163, dmcNumber: "601", nameKr: "다크 크랜베리", nameEn: "Cranberry-DK", hex: "#D03568", group: "Red", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 164, dmcNumber: "602", nameKr: "미디엄 크랜베리", nameEn: "Cranberry-MD", hex: "#DE497D", group: "Red", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 165, dmcNumber: "603", nameKr: "크랜베리", nameEn: "Cranberry", hex: "#EE6A9B", group: "Red", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 166, dmcNumber: "604", nameKr: "라이트 크랜베리", nameEn: "Cranberry-LT", hex: "#F59BBF", group: "Red", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 167, dmcNumber: "605", nameKr: "베리 라이트 크랜베리", nameEn: "Cranberry-VY LT", hex: "#FFC2D9", group: "Red", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 168, dmcNumber: "608", nameKr: "브라이트 오렌지", nameEn: "Bright Orange", hex: "#FD4F1A", group: "Orange", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 169, dmcNumber: "610", nameKr: "다크 드랩 브라운", nameEn: "Drab Brown-DK", hex: "#765C45", group: "Brown", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 170, dmcNumber: "611", nameKr: "드랩 브라운", nameEn: "Drab Brown", hex: "#907357", group: "Brown", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 171, dmcNumber: "612", nameKr: "라이트 드랩 브라운", nameEn: "Drab Brown-LT", hex: "#A88D70", group: "Brown", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 172, dmcNumber: "613", nameKr: "베리 라이트 드랩 브라운", nameEn: "Drab Brown-VY LT", hex: "#C7B29A", group: "Brown", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 173, dmcNumber: "632", nameKr: "울트라 베리 다크 디저트 샌드", nameEn: "Desert Sand-UL VY DK", hex: "#824536", group: "Brown", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 174, dmcNumber: "640", nameKr: "베리 다크 베이지 그레이", nameEn: "Beige Gray-VY DK", hex: "#837666", group: "Gray", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 175, dmcNumber: "642", nameKr: "다크 베이지 그레이", nameEn: "Beige Gray-DK", hex: "#A39785", group: "Gray", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 176, dmcNumber: "644", nameKr: "미디엄 베이지 그레이", nameEn: "Beige Gray-MD", hex: "#D1C9BB", group: "Gray", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 177, dmcNumber: "645", nameKr: "베리 다크 비버 그레이", nameEn: "Beaver Gray-VY DK", hex: "#6E6864", group: "Gray", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 178, dmcNumber: "646", nameKr: "다크 비버 그레이", nameEn: "Beaver Gray-DK", hex: "#857D78", group: "Gray", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 179, dmcNumber: "647", nameKr: "미디엄 비버 그레이", nameEn: "Beaver Gray-MD", hex: "#B0A9A3", group: "Gray", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 180, dmcNumber: "648", nameKr: "라이트 비버 그레이", nameEn: "Beaver Gray-LT", hex: "#C6BFB9", group: "Gray", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 181, dmcNumber: "676", nameKr: "라이트 올드 골드", nameEn: "Old Gold-LT", hex: "#E4BA73", group: "Yellow", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 182, dmcNumber: "677", nameKr: "베리 라이트 올드 골드", nameEn: "Old Gold-VY LT", hex: "#F3DEAC", group: "Yellow", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 183, dmcNumber: "680", nameKr: "다크 올드 골드", nameEn: "Old Gold-DK", hex: "#B88A3D", group: "Yellow", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 184, dmcNumber: "699", nameKr: "미디엄 그린", nameEn: "Green-MD", hex: "#0B7A38", group: "Green", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 185, dmcNumber: "712", nameKr: "크림", nameEn: "Cream", hex: "#FBF3E4", group: "White", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 186, dmcNumber: "730", nameKr: "베리 다크 올리브 그린", nameEn: "Olive Green-VY DK", hex: "#685E31", group: "Green", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 187, dmcNumber: "732", nameKr: "올리브 그린", nameEn: "Olive Green", hex: "#746937", group: "Green", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 188, dmcNumber: "733", nameKr: "미디엄 올리브 그린", nameEn: "Olive Green-MD", hex: "#8B8045", group: "Green", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 189, dmcNumber: "734", nameKr: "라이트 올리브 그린", nameEn: "Olive Green-LT", hex: "#B8AD72", group: "Green", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 190, dmcNumber: "738", nameKr: "베리 라이트 탄", nameEn: "Tan-VY LT", hex: "#E9C9A6", group: "Brown", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 191, dmcNumber: "739", nameKr: "울트라 베리 라이트 탄", nameEn: "Tan-UL VY LT", hex: "#F5E4D1", group: "Brown", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 192, dmcNumber: "742", nameKr: "라이트 탠저린", nameEn: "Tangerine-LT", hex: "#FFB547", group: "Orange", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 193, dmcNumber: "743", nameKr: "미디엄 옐로우", nameEn: "Yellow-MD", hex: "#FCD66F", group: "Yellow", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 194, dmcNumber: "744", nameKr: "페일 옐로우", nameEn: "Yellow-Pale", hex: "#FFE692", group: "Yellow", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 195, dmcNumber: "745", nameKr: "라이트 페일 옐로우", nameEn: "Yellow-LT Pale", hex: "#FFF0B8", group: "Yellow", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 196, dmcNumber: "746", nameKr: "오프 화이트", nameEn: "Off White", hex: "#FCF8E9", group: "White", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 197, dmcNumber: "747", nameKr: "베리 라이트 스카이 블루", nameEn: "Sky Blue-VY LT", hex: "#E1F0F4", group: "Blue", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 198, dmcNumber: "754", nameKr: "라이트 피치", nameEn: "Peach-LT", hex: "#F6C8B5", group: "Orange", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 199, dmcNumber: "758", nameKr: "베리 라이트 테라 코타", nameEn: "Terra Cotta-VY LT", hex: "#EEAA95", group: "Brown", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 200, dmcNumber: "760", nameKr: "살몬", nameEn: "Salmon", hex: "#F59CA2", group: "Red", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 201, dmcNumber: "761", nameKr: "라이트 살몬", nameEn: "Salmon-LT", hex: "#FFC5C9", group: "Red", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 202, dmcNumber: "762", nameKr: "베리 라이트 펄 그레이", nameEn: "Pearl Gray-VY LT", hex: "#ECECEC", group: "Gray", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 203, dmcNumber: "772", nameKr: "베리 라이트 옐로우 그린", nameEn: "Yellow Green-VY LT", hex: "#DDE7C1", group: "Green", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 204, dmcNumber: "775", nameKr: "베리 라이트 베이비 블루", nameEn: "Baby Blue-VY LT", hex: "#D6E4EE", group: "Blue", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 205, dmcNumber: "777", nameKr: "베리 다크 라즈베리", nameEn: "Raspberry-VY DK", hex: "#911D36", group: "Red", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 206, dmcNumber: "778", nameKr: "베리 라이트 앤틱 모브", nameEn: "Antique Mauve-VY LT", hex: "#DFAAB4", group: "Purple", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 207, dmcNumber: "779", nameKr: "다크 코코아", nameEn: "Cocoa-DK", hex: "#634743", group: "Brown", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 208, dmcNumber: "780", nameKr: "울트라 베리 다크 토파즈", nameEn: "Topaz-UL VY DK", hex: "#8A511B", group: "Brown", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 209, dmcNumber: "781", nameKr: "베리 다크 토파즈", nameEn: "Topaz-VY DK", hex: "#A36323", group: "Brown", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 210, dmcNumber: "782", nameKr: "다크 토파즈", nameEn: "Topaz-DK", hex: "#BB772E", group: "Brown", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 211, dmcNumber: "783", nameKr: "미디엄 토파즈", nameEn: "Topaz-MD", hex: "#D69038", group: "Brown", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 212, dmcNumber: "791", nameKr: "베리 다크 콘플라워 블루", nameEn: "Cornflower Blue-VY DK", hex: "#353265", group: "Blue", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 213, dmcNumber: "792", nameKr: "다크 콘플라워 블루", nameEn: "Cornflower Blue-DK", hex: "#525791", group: "Blue", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 214, dmcNumber: "793", nameKr: "미디엄 콘플라워 블루", nameEn: "Cornflower Blue-MD", hex: "#7281AE", group: "Blue", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 215, dmcNumber: "794", nameKr: "라이트 콘플라워 블루", nameEn: "Cornflower Blue-LT", hex: "#9DAAD2", group: "Blue", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 216, dmcNumber: "798", nameKr: "다크 델프트 블루", nameEn: "Delft Blue-DK", hex: "#3E5C8D", group: "Blue", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 217, dmcNumber: "799", nameKr: "미디엄 델프트 블루", nameEn: "Delft Blue-MD", hex: "#6384B7", group: "Blue", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 218, dmcNumber: "800", nameKr: "페일 델프트 블루", nameEn: "Delft Blue-Pale", hex: "#C0D2E9", group: "Blue", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 219, dmcNumber: "801", nameKr: "다크 커피 브라운", nameEn: "Coffee Brown-DK", hex: "#5D3723", group: "Brown", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 220, dmcNumber: "803", nameKr: "울트라 베리 다크 베이비 블루", nameEn: "Baby Blue-UL VY DK", hex: "#223E63", group: "Blue", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 221, dmcNumber: "806", nameKr: "다크 피콕 블루", nameEn: "Peacock Blue-DK", hex: "#337691", group: "Blue", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 222, dmcNumber: "807", nameKr: "피콕 블루", nameEn: "Peacock Blue", hex: "#4895AE", group: "Blue", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 223, dmcNumber: "809", nameKr: "델프트 블루", nameEn: "Delft Blue", hex: "#8DA7D0", group: "Blue", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 260, dmcNumber: "813", nameKr: "라이트 블루", nameEn: "Blue-LT", hex: "#92B1CD", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 261, dmcNumber: "814", nameKr: "다크 가넷", nameEn: "Garnet-DK", hex: "#781024", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 262, dmcNumber: "815", nameKr: "미디엄 가넷", nameEn: "Garnet-MD", hex: "#871328", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 263, dmcNumber: "816", nameKr: "가넷", nameEn: "Garnet", hex: "#9E1731", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 264, dmcNumber: "817", nameKr: "베리 다크 코랄 레드", nameEn: "Coral Red-VY DK", hex: "#B21B32", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 265, dmcNumber: "818", nameKr: "베이비 핑크", nameEn: "Baby Pink", hex: "#FFDFD9", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 266, dmcNumber: "819", nameKr: "라이트 베이비 핑크", nameEn: "Baby Pink-LT", hex: "#FFF3F1", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 267, dmcNumber: "820", nameKr: "베리 다크 로얄 블루", nameEn: "Royal Blue-VY DK", hex: "#1A285A", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 268, dmcNumber: "822", nameKr: "라이트 베이지 그레이", nameEn: "Beige Gray-LT", hex: "#EAE3D4", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 269, dmcNumber: "823", nameKr: "다크 네이비 블루", nameEn: "Navy Blue-DK", hex: "#101B34", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 270, dmcNumber: "824", nameKr: "베리 다크 블루", nameEn: "Blue-VY DK", hex: "#29567E", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 271, dmcNumber: "825", nameKr: "다크 블루", nameEn: "Blue-DK", hex: "#3B719E", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 272, dmcNumber: "826", nameKr: "미디엄 블루", nameEn: "Blue-MD", hex: "#5C8BB4", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 273, dmcNumber: "827", nameKr: "베리 라이트 블루", nameEn: "Blue-VY LT", hex: "#BDD1E5", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 274, dmcNumber: "828", nameKr: "울트라 베리 라이트 블루", nameEn: "Blue-UL VY LT", hex: "#CDE0F1", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 275, dmcNumber: "829", nameKr: "베리 다크 골든 올리브", nameEn: "Golden Olive-VY DK", hex: "#755627", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 276, dmcNumber: "830", nameKr: "다크 골든 올리브", nameEn: "Golden Olive-DK", hex: "#8A6B37", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 277, dmcNumber: "831", nameKr: "미디엄 골든 올리브", nameEn: "Golden Olive-MD", hex: "#A8884E", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 278, dmcNumber: "832", nameKr: "골든 올리브", nameEn: "Golden Olive", hex: "#C2A05F", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 279, dmcNumber: "833", nameKr: "라이트 골든 올리브", nameEn: "Golden Olive-LT", hex: "#D6B876", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 280, dmcNumber: "834", nameKr: "베리 라이트 골든 올리브", nameEn: "Golden Olive-VY LT", hex: "#E5CE97", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 281, dmcNumber: "838", nameKr: "베리 다크 베이지 브라운", nameEn: "Beige Brown-VY DK", hex: "#4A3628", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 282, dmcNumber: "839", nameKr: "다크 베이지 브라운", nameEn: "Beige Brown-DK", hex: "#5B4434", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 283, dmcNumber: "840", nameKr: "미디엄 베이지 브라운", nameEn: "Beige Brown-MD", hex: "#7D5D46", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 284, dmcNumber: "841", nameKr: "라이트 베이지 브라운", nameEn: "Beige Brown-LT", hex: "#A88A75", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 285, dmcNumber: "842", nameKr: "베리 라이트 베이지 브라운", nameEn: "Beige Brown-VY LT", hex: "#D3C2B4", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 286, dmcNumber: "869", nameKr: "베리 다크 헤이즐넛 브라운", nameEn: "Hazelnut Brown-VY DK", hex: "#63432B", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 287, dmcNumber: "890", nameKr: "울트라 다크 피스타치오 그린", nameEn: "Pistachio Green-UL DK", hex: "#1D4525", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 288, dmcNumber: "891", nameKr: "다크 카네이션", nameEn: "Carnation-DK", hex: "#F34753", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 289, dmcNumber: "892", nameKr: "미디엄 카네이션", nameEn: "Carnation-MD", hex: "#F86E78", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 290, dmcNumber: "893", nameKr: "라이트 카네이션", nameEn: "Carnation-LT", hex: "#FC8B95", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 291, dmcNumber: "894", nameKr: "베리 라이트 카네이션", nameEn: "Carnation-VY LT", hex: "#FFB0B7", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 292, dmcNumber: "895", nameKr: "베리 다크 헌터 그린", nameEn: "Hunter Green-VY DK", hex: "#1A4222", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 293, dmcNumber: "898", nameKr: "베리 다크 커피 브라운", nameEn: "Coffee Brown-VY DK", hex: "#422817", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 294, dmcNumber: "899", nameKr: "미디엄 로즈", nameEn: "Rose-MD", hex: "#F27891", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 295, dmcNumber: "900", nameKr: "다크 번트 오렌지", nameEn: "Burnt Orange-DK", hex: "#D94B1B", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 296, dmcNumber: "902", nameKr: "베리 다크 가넷", nameEn: "Garnet-VY DK", hex: "#630D1C", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 297, dmcNumber: "904", nameKr: "베리 다크 패럿 그린", nameEn: "Parrot Green-VY DK", hex: "#366826", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 298, dmcNumber: "905", nameKr: "다크 패럿 그린", nameEn: "Parrot Green-DK", hex: "#488536", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 299, dmcNumber: "906", nameKr: "미디엄 패럿 그린", nameEn: "Parrot Green-MD", hex: "#62A84B", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 300, dmcNumber: "907", nameKr: "라이트 패럿 그린", nameEn: "Parrot Green-LT", hex: "#8AC470", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 301, dmcNumber: "909", nameKr: "베리 다크 에메랄드 그린", nameEn: "Emerald Green-VY DK", hex: "#006E44", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 302, dmcNumber: "910", nameKr: "다크 에메랄드 그린", nameEn: "Emerald Green-DK", hex: "#008252", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 303, dmcNumber: "911", nameKr: "미디엄 에메랄드 그린", nameEn: "Emerald Green-MD", hex: "#009B63", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 304, dmcNumber: "912", nameKr: "라이트 에메랄드 그린", nameEn: "Emerald Green-LT", hex: "#1EAC77", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 305, dmcNumber: "913", nameKr: "미디엄 나일 그린", nameEn: "Nile Green-MD", hex: "#4BB882", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 306, dmcNumber: "915", nameKr: "다크 플럼", nameEn: "Plum-DK", hex: "#820043", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 307, dmcNumber: "917", nameKr: "미디엄 플럼", nameEn: "Plum-MD", hex: "#A80059", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 308, dmcNumber: "918", nameKr: "다크 레드 카퍼", nameEn: "Red Copper-DK", hex: "#8F2C14", group: "", tone: "", recommendedSize: "", availableType: "" },
        { id: 309, dmcNumber: "919", nameKr: "레드 카퍼", nameEn: "Red Copper", hex: "#A63518", group: "", tone: "", recommendedSize: "", availableType: "" }
    ],
    patterns: [],
    guides: [
        {
            title: "1. 보석십자수 완벽 준비물 (기본 도구 & 추천템)",
            content: `
                <p>보석십자수를 더 편하고 즐겁게 즐기기 위해 필요한 도구들을 소개합니다.</p>
                <ul>
                    <li><strong>기본 제공 도구:</strong> 기본 트레이, 고체 풀, 핀셋, 펜 등은 도안을 구매하면 보통 함께 들어있습니다.</li>
                    <li><strong>건강을 위한 필수 추천템:</strong> 장시간 집중해야 하므로 목과 허리, 눈 건강을 지켜주는 <strong>'라이트 패드'</strong>와 <strong>'독서대'</strong>는 꼭 구매하시는 것을 추천합니다.</li>
                    <li><strong>작업 효율을 높여주는 꿀템들:</strong>
                        <ul style="margin-top: 5px; margin-bottom: 5px;">
                            <li>- <strong>퍼티(Putty):</strong> 기본 고체 풀보다 접착력과 유지력이 훨씬 뛰어납니다.</li>
                            <li>- <strong>건조기 시트 & 향기 부스터:</strong> 비즈의 정전기가 심할 때, 건조기 시트를 작게 잘라 넣거나 향기 부스터를 몇 알 넣어주면 정전기도 잡고 향기도 좋아집니다.</li>
                            <li>- <strong>릴리스 페이퍼(이형지) & 종이 호일:</strong> 캔버스의 기본 비닐을 떼어내고 종이를 덮어두면, 칼로 원하는 만큼만 잘라 쓰기 편하고 도안이 손상되지 않아 좋습니다.</li>
                        </ul>
                    </li>
                </ul>
            `
        },
        {
            title: "2. 내게 맞는 보관함 & 트레이 찾기",
            content: `
                <div class="guide-item-row">
                    <div class="guide-text">
                        <ul>
                            <li><strong>트레이 보관함:</strong> 비즈 보관함과 트레이가 하나로 합쳐진 형태입니다. 비즈를 따로 꺼내서 옮길 필요 없이 바로 사용할 수 있어 가장 적극적으로 추천하는 아이템입니다.</li>
                        </ul>
                    </div>
                    <div class="guide-img-container">
                        <img class="img-placeholder" src="/images/guide_tray.jpg" alt="트레이 보관함">
                    </div>
                </div>

                <div class="guide-item-row">
                    <div class="guide-text">
                        <ul>
                            <li><strong>비즈 보관함:</strong> 작은 통 여러 개에 비즈를 나누어 담는 보관함입니다. 통을 꺼내어 트레이에 덜어 써야 하는 번거로움은 있지만, 좁은 공간에 많은 비즈를 보관하기에 아주 좋습니다.</li>
                        </ul>
                    </div>
                    <div class="guide-img-container">
                        <img class="img-placeholder" src="/images/guide_box.jpg" alt="비즈 보관함">
                    </div>
                </div>

                <div class="guide-item-row">
                    <div class="guide-text">
                        <ul>
                            <li><strong>단품 트레이:</strong> 기본으로 제공되는 트레이는 작고 불편한 경우가 많습니다. 크고 단단하며 보관도 편한 전문 트레이를 따로 구매하시는 것을 추천합니다.</li>
                        </ul>
                    </div>
                    <div class="guide-img-container">
                        <img class="img-placeholder" src="/images/guide_single.jpg" alt="단품 트레이">
                    </div>
                </div>
            `
        },
        {
            title: "3. 비즈와 접착제, 어떤 걸 고를까?",
            content: `
                <p><strong>비즈 형태 (원형 vs 사각)</strong></p>
                <div class="guide-item-row">
                    <div class="guide-text">
                        <ul>
                            <li><strong>원형 비즈:</strong> 방향을 맞출 필요가 없어 붙이기 쉽고 작업 속도가 빠릅니다. (초보자 적극 추천)</li>
                        </ul>
                    </div>
                    <div class="guide-img-container">
                        <img class="img-placeholder" src="/images/guide_round.jpg" alt="원형 비즈">
                    </div>
                </div>

                <div class="guide-item-row">
                    <div class="guide-text">
                        <ul>
                            <li><strong>사각 비즈:</strong> 빈틈없이 꽉 차고 딱 들어맞을 때의 소리가 훌륭합니다. 하지만 각도를 정밀하게 맞춰야 해서 조금 어렵습니다. (중급자 이상 추천)</li>
                        </ul>
                    </div>
                    <div class="guide-img-container">
                        <img class="img-placeholder" src="/images/guide_square.jpg" alt="사각 비즈">
                    </div>
                </div>

                <p style="margin-top: 30px;"><strong>비즈 재질 (레진 vs 아크릴)</strong></p>
                <ul>
                    <li><strong>레진 (고급형):</strong> 색이 선명하고 광택이 뛰어나며 비즈 모양이 일정합니다.</li>
                    <li><strong>아크릴 (보급형):</strong> 가성비는 좋으나 레진에 비해 광택이 덜하고 모양이 불규칙할 수 있습니다.</li>
                    <li style="margin-top: 8px;">💡 <strong>강력 추천:</strong> 레진과 아크릴 중 고민이시라면, 완성작의 퀄리티를 위해 '레진' 비즈를 추천합니다! 도안 구매 시 상세 페이지에서 꼭 '레진 비즈'인지 확인해 보세요.</li>
                </ul>

                <p style="margin-top: 30px;"><strong>접착제 (고체 풀 vs 퍼티)</strong></p>
                <ul>
                    <li><strong>고체 풀:</strong> 기본 제공품이라 따로 살 필요가 없으며, AB비즈(오로라 비즈)나 특수 비즈를 붙일 때 유용합니다.</li>
                    <li><strong>퍼티:</strong> 클레이 같은 쫀득한 질감으로 접착력과 유지력이 압도적으로 좋습니다. 처음엔 다이소의 '조각 접착제'나 알리, 테무 등에서 저렴한 퍼티로 입문해 보시는 것을 추천합니다.</li>
                </ul>
            `
        },
        {
            title: "4. 정성껏 완성한 작품, 보관하는 방법",
            content: `
                <ul>
                    <li><strong>클리어 파일 (A3 사이즈 추천):</strong> 30x40cm 사이즈 도안을 하시는 분들께 가장 추천합니다. 마치 앨범처럼 한 장씩 넘겨보며 완성작을 감상하는 재미가 쏠쏠합니다.</li>
                    <li><strong>지관통:</strong> 도안을 돌돌 말아 원통에 보관합니다. 구김은 없지만, 작품이 많아지면 부피를 많이 차지하고 가격대도 있어 크게 추천하지는 않습니다.</li>
                    <li><strong>지퍼백 & 비닐 포장:</strong> 아주 큰 대형 도안이거나 완성작이 너무 많아 공간 차지가 부담스러울 때 추천합니다. 사이즈에 맞는 긴 지퍼백을 활용해 보세요.</li>
                </ul>
            `
        }
    ],
    faqs: [
        {
            q: "헉, 열심히 붙이고 있는데 특정 색상 비즈가 모자라요! 어떡하죠?",
            a: "당황하지 마세요! 우선 구매하신 쇼핑몰이나 판매처에 연락하면 누락된 비즈를 AS(추가 배송) 해주는 곳이 많습니다. 만약 AS가 어렵거나 당장 완성하고 싶어 근질근질하시다면, 가지고 계신 남은 비즈 중 가장 비슷한 색상으로 슬쩍 대체해 보세요. 전체적으로 완성하고 나면 생각보다 티가 거의 나지 않는답니다!"
        },
        {
            q: "비즈에 정전기가 너무 심해서 비즈 정리 할 때 너무 힘들어요!",
            a: "비즈가 톡톡 튀어 다니면 정말 화가 나죠! 😡 이럴 땐 <strong>건조기 시트</strong>를 가위로 작게 잘라서 비즈 통이나 지퍼백 안에 쏙 넣어보세요. 정전기가 마법처럼 싹 사라집니다. 세탁할 때 쓰는 콩 모양의 향기 부스터를 몇 알 넣어두는 것도 훌륭한 방법입니다. (+ 건조기 시트와 향기 부스터 말고 입김 불어넣고 흔들기, 면봉이나 휴지 뭉치에 알코올이나 물 묻히기 등의 방법도 있지만, 건조기 시트와 향기 부스터가 훨씬 더 효과가 좋습니다.)"
        },
        {
            q: "완성하고 남은 잉여 비즈들은 버려야 하나요?",
            a: "버리지 마세요! 예쁜 투명 유리병이나 다 쓴 잼통에 남은 비즈들을 층층이 부어 모아두면, 그 자체로 아주 예쁜 인테리어 소품이 됩니다. 게다가 나중에 다른 도안을 하다가 비즈가 모자랄 때 요긴하게 꺼내 쓸 수 있는 소중한 비즈가 되기도 한답니다."
        },
        {
            q: "도안을 너무 오래 열어뒀더니 접착력이 떨어져서 비즈가 안 붙어요!",
            a: "캔버스의 보호 필름을 한 번에 다 뜯어두면 먼지가 붙거나 접착력이 날아갈 수 있어요. 이럴 땐 시중에서 판매하는 <strong>도안 전용 접착제</strong>를 붓으로 살짝 발라주면 다시 끈적해집니다. 만약 당장 접착제가 없다면, 아주 얇은 양면테이프를 작게 잘라 심폐소생술을 하는 것도 꿀팁입니다!"
        },
        {
            q: "앗, 엉뚱한 색깔을 잘못 붙였어요. 캔버스 안 상하게 떼어내는 방법이 있나요?",
            a: "손톱으로 억지로 긁어내려다간 도안의 접착제까지 같이 떨어져 나갈 수 있습니다! 이럴 땐 도구 세트에 들어있는 <strong>핀셋</strong>을 사용하세요. 잘못 붙인 비즈의 양옆을 핀셋으로 살짝 잡고 위로 '톡!' 하고 비틀어 올리듯 빼주시면 캔버스 손상 없이 깔끔하게 떼어낼 수 있습니다."
        },
        {
            q: "기껏 완성했는데 나중에 비즈가 후드득 떨어질까 봐 걱정돼요.",
            a: "다 붙인 직후에 두꺼운 전공서적이나 무거운 책을 올려두고 하루 정도 꾹 눌러주시면 비즈가 도안에 찰착 밀착됩니다. 액자에 넣지 않고 보관하실 예정이라면, <strong>유광 바니시</strong>나 <strong>보석십자수 전용 코팅제</strong>를 겉면에 얇게 펴 발라주세요. 비즈가 절대 떨어지지 않고 반짝이는 광택도 훨씬 오래갑니다!"
        }
    ],
    shops: [
        {
            category: "국내 전문 브랜드 및 상점",
            type: "simple",
            items: [
                { name: "킹드몬드", url: "https://kingdemond.com/" },
                { name: "퀸즈아뜰리에", url: "https://queensatelier.com/" },
                { name: "별밤공방", url: "https://starrynight89.com/" },
                { name: `펜도라<br><span style="font-size: 0.85em; color: #9ca3af;">PENDORA</span>`, url: "https://smartstore.naver.com/yun325" },
                { name: "타오네 보석십자수", url: "https://smartstore.naver.com/dodomart0805" }
            ]
        },
        {
            category: "해외 프리미엄 브랜드",
            type: "simple",
            items: [
                { name: `다이아몬드 아트 클럽<br><span style="font-size: 0.85em; color: #9ca3af;">Diamond Art Club (DAC)</span>`, url: "https://www.diamondartclub.com/" },
                { name: `오랄로아<br><span style="font-size: 0.85em; color: #9ca3af;">Oraloa</span>`, url: "https://www.oraloa.com/" },
                { name: `드리머<br><span style="font-size: 0.85em; color: #9ca3af;">Dreamer Designs</span>`, url: "https://dreamerdesigns.com/" },
                { name: `아트닷<br><span style="font-size: 0.85em; color: #9ca3af;">ARTDOT</span>`, url: "https://www.artdot.com/" }
            ]
        },
        {
            category: "가성비 직구 (오픈마켓)",
            type: "expandable",
            items: [
                {
                    id: "temu",
                    name: `테무<br><span style="font-size: 0.85em; color: #9ca3af;">Temu</span>`,
                    officialUrl: "https://temu.to/k/qx5jdsu2rum",
                    shops: [
                        { name: "TUOYU DP", desc: "테무 판매 3년 차! 캐릭터 도안 퀄리티가 가장 안정적인 상점. 비즈가 레진입니다.", url: "https://temu.to/k/gr1zp4ygq4l", tag: "pattern" },
                        { name: "wowo art", desc: "흔하지 않은 감성 도안이 많아요. 도안이 이쁜게 많아요 추천합니다. 비즈가 레진입니다.", url: "https://temu.to/k/g7q7wse344r", tag: "pattern" },
                        { name: "cateared", desc: "트라브릭스 트레이가 있는 곳입니다. 장바구니에 담았다가 할인할 때 구매하세요!", url: "https://temu.to/k/gui0bfbgoc0", tag: "tool" },
                        { name: "AZQSD", desc: "가성비 끝판왕! 비즈 보관함 저렴하게 구매할 수 있습니다!", url: "https://temu.to/k/g27yvmgs539", tag: "tool" }
                    ]
                },
                {
                    id: "ali",
                    name: `알리익스프레스<br><span style="font-size: 0.85em; color: #9ca3af;">AliExpress</span>`,
                    officialUrl: "https://s.click.aliexpress.com/e/_c4rrp2Ef",
                    shops: [
                        { name: "포에버영 (ForeverYoung)", desc: "도안, 트라이, 보관함, 비즈, 퍼티 등 없는게 없습니다!", url: "https://s.click.aliexpress.com/e/_c3PhxkSX", tag: "tool" },
                        { name: "wowo art", desc: "테무에도 있는 wowo! 하지만 알리가 도안이 더 다양하고 많습니다.", url: "https://s.click.aliexpress.com/e/_c3PNFNGX", tag: "pattern" },
                        { name: "Shine AB DP Store", desc: "제작 도안이 인기가 많습니다 비즈 퀄리티가 좋아요.", url: "https://s.click.aliexpress.com/e/_c40yWRAL", tag: "pattern" },
                        { name: "CSOUY Official Store", desc: "랜덤 크리스탈 비즈가 인기가 많습니다.", url: "https://s.click.aliexpress.com/e/_c3ZWGBof", tag: "tool" },
                        { name: "EmmLiAn Art Store", desc: "크리스탈 비즈와 FD비즈가 이쁩니다.", url: "https://s.click.aliexpress.com/e/_c3mBtuef", tag: "tool" },
                        { name: "Ever Moment", desc: "제작 도안이 인기가 많습니다.", url: "https://s.click.aliexpress.com/e/_c3zsB6HV", tag: "pattern" },
                        { name: "Ornasist Art Store", desc: "크리스탈 비즈와 FD비즈가 이쁩니다.", url: "https://s.click.aliexpress.com/e/_c30nnt35", tag: "tool" },
                        { name: "WYZDP Official Store", desc: "크리스탈 비즈와 FD비즈가 이쁩니다.", url: "https://s.click.aliexpress.com/e/_c3DlqDT9", tag: "tool" }
                    ]
                },
                {
                    id: "coupang",
                    name: `쿠팡<br><span style="font-size: 0.85em; color: #9ca3af;">Coupang</span>`,
                    officialUrl: "https://www.coupang.com/",
                    shops: []
                }
            ]
        }
    ]

};
