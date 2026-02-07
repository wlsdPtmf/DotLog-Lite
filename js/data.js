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
        { id: 3, dmcNumber: "310", nameKr: "블랙", nameEn: "Black", hex: "#000000", group: "Gray", tone: "dark", recommendedSize: "40x50cm 이상", availableType: "원형/사각 공용" },
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
        { id: 8, dmcNumber: "666", nameKr: "크리스마스 레드", nameEn: "Christmas Red-BRT", hex: "#D90022", group: "Red", tone: "mid", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
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
        { id: 16, dmcNumber: "5200", nameKr: "스노우 화이트", nameEn: "Snow White", hex: "#FFFFFF", group: "White", tone: "light", recommendedSize: "30x40cm 이상", availableType: "원형/사각 공용" },
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
            title: "1단계: 준비 (Preparation) - 비즈와 도구",
            content: `
                <p><strong>도구 챙기기:</strong> 펜, 고체 풀, 트레이, 핀셋을 준비하세요. <em>퍼티(Putty)</em>를 사용하면 왁스보다 오래 갑니다.</p>
                <p><strong>비즈 타입 비교:</strong></p>
                <ul>
                    <li><strong>원형(Round):</strong> 붙이기 쉽고 작업 속도가 빠르며, 반짝임이 화려합니다. (초보 추천)</li>
                    <li><strong>사각(Square):</strong> 빈틈없이 꽉 차는 완성도와 딱딱 맞는 손맛이 일품입니다. (중급 이상)</li>
                </ul>
                <p><strong>비즈 재질 비교:</strong></p>
                <ul>
                    <li><strong>레진(Resin):</strong> 색상이 선명하고 광택이 오래가며 모양이 일정합니다. (고급형)</li>
                    <li><strong>아크릴(Acrylic):</strong> 가성비가 좋지만 레진에 비해 광택이 덜할 수 있습니다. (보급형)</li>
                </ul>
            `
        },
        {
            title: "2단계: 실전 (Practice) - 핵심 노하우",
            content: `
                <p><strong>고체 풀 vs 퍼티:</strong> 기본 핑크색 풀은 찌꺼기가 남을 수 있지만, <strong>보석십자수 전용 퍼티</strong>는 끈적임이 덜하고 유지력이 훨씬 깁니다.</p>
                <p><strong>비즈 집기:</strong> 트레이를 좌우로 살살 흔들어 비즈 골을 맞춘 뒤 가볍게 찍어주세요.</p>
                <p><strong>붙이기:</strong> 사각 비즈는 각을 맞춰서, 원형 비즈는 중앙에 맞춰서 <em>'톡'</em> 소리나게 붙여주세요.</p>
            `
        },
        {
            title: "3단계: 마무리 (Finish) - 보관법",
            content: `
                <p><strong>눌러주기:</strong> 작업 후 두꺼운 책이나 밀대로 꾹꾹 눌러주면 비즈가 들뜨지 않고 단단히 고정됩니다.</p>
                <p><strong>보관:</strong> 액자에 넣거나, 돌돌 말 때는 비즈가 바깥쪽을 향하게 말아야 구겨지지 않습니다.</p>
            `
        }
    ],
    faqs: [
        {
            q: "비즈가 모자라면 어떡하나요?",
            a: "표준 DMC 번호를 확인하여 개별 구매하시거나 커뮤니티에 나눔을 요청해 보세요. 또한, 도안을 구매한 판매자에게 연락하여 부족한 비즈를 AS 받을 수 있는지 확인해보는 것도 좋은 방법입니다!"
        },
        {
            q: "접착력이 떨어졌어요.",
            a: "물티슈로 살짝 닦아내거나 전용 접착제를 덧발라 해결할 수 있습니다."
        },
        {
            q: "비즈 정전기 때문에 봉투에 달라붙어요.",
            a: "건조기 시트(섬유유연제 시트) 조각을 같이 넣거나, 잠시 냉동실에 넣어두면 정전기가 사라집니다."
        },
        {
            q: "도안 기호가 너무 비슷해서 헷갈려요.",
            a: "라이트패드를 사용해 바닥에서 빛을 비추거나, 미리 형광펜으로 헷갈리는 기호를 표시해두면 좋습니다."
        },
        {
            q: "사각 비즈가 자꾸 튀어 올라와요. (팝핑 현상)",
            a: "비즈 간격이 너무 좁아서 생기는 현상입니다. 작업 중간중간 두꺼운 책으로 꾹 눌러 자리를 잡아주세요."
        }
    ],
    shops: [
        {
            category: "국내 전문 브랜드 및 상점",
            type: "simple",
            items: [
                { name: "킹드몬드", url: "https://kingdemond.com/" },
                { name: "퀸즈아뜰리에", url: "https://queensatelier.com/" },
                { name: "별밤공방", url: "https://starrynight89.com/" }
            ]
        },
        {
            category: "해외 프리미엄 브랜드",
            type: "simple",
            items: [
                { name: `다이아몬드 아트 클럽<br><span style="font-size: 0.85em; color: #9ca3af;">Diamond Art Club (DAC)</span>`, url: "https://www.diamondartclub.com/" },
                { name: `오랄로아<br><span style="font-size: 0.85em; color: #9ca3af;">Oraloa</span>`, url: "https://www.oraloa.com/" },
                { name: `드리머<br><span style="font-size: 0.85em; color: #9ca3af;">Dreamer Designs</span>`, url: "https://dreamerdesigns.com/" }
            ]
        },
        {
            category: "가성비 직구 (오픈마켓)",
            type: "expandable",
            items: [
                {
                    id: "temu",
                    name: "테무 (Temu)",
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
                    name: "알리익스프레스 (AliExpress)",
                    officialUrl: "https://www.aliexpress.com/",
                    shops: []
                }
            ]
        }
    ]

};
