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
        { id: 36, dmcNumber: "814", nameKr: "다크 가넷", nameEn: "Garnet-DK", hex: "#7B001B", group: "Red", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 13, dmcNumber: "820", nameKr: "베리 다크 로얄 블루", nameEn: "Royal Blue-VY DK", hex: "#0F326D", group: "Blue", tone: "dark", recommendedSize: "40x50cm 이상", availableType: "원형/사각 공용" },
        { id: 30, dmcNumber: "823", nameKr: "다크 네이비 블루", nameEn: "Navy Blue-DK", hex: "#20283E", group: "Blue", tone: "dark", recommendedSize: "40x50cm 이상", availableType: "원형/사각 공용" },
        { id: 37, dmcNumber: "905", nameKr: "다크 패럿 그린", nameEn: "Parrot Green-DK", hex: "#366324", group: "Green", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 14, dmcNumber: "907", nameKr: "라이트 패럿 그린", nameEn: "Parrot Green-LT", hex: "#9CCF59", group: "Green", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
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
        { id: 55, dmcNumber: "900", nameKr: "다크 번트 오렌지", nameEn: "Burnt Orange-DK", hex: "#D63908", group: "Orange", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 56, dmcNumber: "902", nameKr: "베리 다크 가넷", nameEn: "Garnet-VY DK", hex: "#822238", group: "Red", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 57, dmcNumber: "904", nameKr: "베리 다크 패럿 그린", nameEn: "Parrot Green-VY DK", hex: "#476C32", group: "Green", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 58, dmcNumber: "906", nameKr: "미디엄 패럿 그린", nameEn: "Parrot Green-MD", hex: "#548E33", group: "Green", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 59, dmcNumber: "909", nameKr: "베리 다크 에메랄드 그린", nameEn: "Emerald Green-VY DK", hex: "#256D4D", group: "Green", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 60, dmcNumber: "910", nameKr: "다크 에메랄드 그린", nameEn: "Emerald Green-DK", hex: "#2B815C", group: "Green", tone: "dark", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 61, dmcNumber: "911", nameKr: "미디엄 에메랄드 그린", nameEn: "Emerald Green-MD", hex: "#1B9165", group: "Green", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 62, dmcNumber: "912", nameKr: "라이트 에메랄드 그린", nameEn: "Emerald Green-LT", hex: "#40A87F", group: "Green", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
        { id: 63, dmcNumber: "913", nameKr: "미디엄 나일 그린", nameEn: "Nile Green-MD", hex: "#69AF78", group: "Green", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
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
        { id: 103, dmcNumber: "564", nameKr: "베리 라이트 제이드", nameEn: "Jade-VY LT", hex: "#92C0A5", group: "Green", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" }
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
                { name: `펜도라<br><span style="font-size: 0.85em; color: #9ca3af;">PENDORA</span>`, url: "https://smartstore.naver.com/yun325" }
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
                    officialUrl: "https://www.temu.com/",
                    shops: [
                        { name: "TUOYU DP", desc: "테무 판매 3년 차! 캐릭터 도안 퀄리티가 가장 안정적인 상점. 비즈가 레진입니다.", url: "https://www.temu.com/", tag: "pattern" },
                        { name: "wowo art", desc: "흔하지 않은 감성 도안이 많아요. 도안이 이쁜게 많아요 추천합니다. 비즈가 레진입니다.", url: "https://www.temu.com/", tag: "pattern" },
                        { name: "cateared", desc: "트라브릭스 트레이가 있는 곳입니다. 장바구니에 담았다가 할인할 때 구매하세요!", url: "https://www.temu.com/", tag: "tool" },
                        { name: "AZQSD", desc: "가성비 끝판왕! 비즈 보관함 저렴하게 구매할 수 있습니다!", url: "https://www.temu.com/", tag: "tool" }
                    ]
                },
                {
                    id: "ali",
                    name: `알리익스프레스<br><span style="font-size: 0.85em; color: #9ca3af;">AliExpress</span>`,
                    officialUrl: "https://www.aliexpress.com/",
                    shops: []
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
