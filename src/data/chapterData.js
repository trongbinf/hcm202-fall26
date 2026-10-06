/**
 * DỮ LIỆU CẤU TRÚC BÀI HỌC CHƯƠNG 4 - HỌC PHẦN HCM202
 * Biên soạn từ Giáo trình Tư tưởng Hồ Chí Minh (Bộ GD&ĐT, NXB CTQG Sự thật)
 */

export const CHAPTER_INFO = {
  courseCode: 'HCM202',
  courseName: 'Tư tưởng Hồ Chí Minh',
  chapterNumber: 4,
  chapterTitle: 'Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam và Nhà nước của nhân dân, do nhân dân, vì nhân dân',
  source: 'Giáo trình Tư tưởng Hồ Chí Minh (Bộ GD&ĐT, NXB Chính trị quốc gia Sự thật, Hà Nội, 2021, tr. 123–168)',
  stats: {
    parts: 3,
    principles: 8,
    cadreRequirements: 9,
    quotesCount: 60,
  }
};

export const PART_I_DATA = {
  id: 'part-1',
  tag: 'PHẦN I',
  title: 'Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam',
  pageRange: 'Giáo trình tr. 124–141',
  highlightQuote: {
    text: "Trước hết phải có đảng cách mệnh, để trong thì vận động và tổ chức dân chúng, ngoài thì liên lạc với dân tộc bị áp bức và vô sản giai cấp mọi nơi. Đảng có vững, cách mệnh mới thành công, cũng như người cầm lái có vững thuyền mới chạy.",
    author: "Hồ Chí Minh",
    work: "Đường cách mệnh",
    year: "1927"
  },
  principles: [
    "Tập trung dân chủ",
    "Tập thể lãnh đạo, cá nhân phụ trách",
    "Tự phê bình và phê bình",
    "Kỷ luật nghiêm minh, tự giác",
    "Đoàn kết thống nhất trong Đảng",
    "Liên hệ mật thiết với nhân dân",
    "Đoàn kết quốc tế",
    "Lấy CN Mác – Lênin làm nền tảng tư tưởng"
  ],
  summary: 'Đảng như "người cầm lái": sự lãnh đạo của Đảng là tất yếu, xuất phát từ yêu cầu phát triển của dân tộc. Đảng ra đời từ sự kết hợp chủ nghĩa Mác – Lênin + phong trào công nhân + phong trào yêu nước. Đảng phải trong sạch, vững mạnh: là đạo đức, văn minh; tuân thủ 8 nguyên tắc hoạt động; xây dựng đội ngũ cán bộ vừa "hồng" vừa "chuyên".',
  sections: [
    {
      id: 'i-1',
      title: 'I.1. Tính tất yếu và vai trò lãnh đạo của Đảng Cộng sản Việt Nam',
      keyPoints: [
        {
          badge: 'LUẬN ĐIỂM 1',
          heading: 'Đảng – "người cầm lái" của con thuyền cách mạng',
          content: 'Trong tác phẩm "Đường cách mệnh" (1927), Hồ Chí Minh khẳng định: cách mạng trước hết phải có đảng cách mệnh. Đảng có vững thì cách mệnh mới thành công, cũng như người cầm lái có vững thuyền mới chạy. Đây là quan điểm nhất quán của Người trong suốt tiến trình cách mạng dân tộc dân chủ nhân dân và cách mạng xã hội chủ nghĩa.',
          quote: '“Trước hết phải có đảng cách mệnh, để trong thì vận động và tổ chức dân chúng, ngoài thì liên lạc với dân tộc bị áp bức và vô sản giai cấp mọi nơi. Đảng có vững, cách mệnh mới thành công, cũng như người cầm lái có vững thuyền mới chạy” (Đường cách mệnh, 1927, TT, t.2, tr.289)',
          image: 'https://hochiminh.vn/publish/thumbnail/3000001/480x720xfull/upload/3000001/20251024/8952355cfd4f9213404028053b86c9c4duong-cach-menh-400x610.jpg',
          imageCaption: 'Hình 1: Tác phẩm “Đường cách mệnh” (1927) của Chủ tịch Hồ Chí Minh'
        },
        {
          badge: 'LUẬN ĐIỂM 2',
          heading: 'Đảng kiểu mới: Trung thành và sáng tạo học thuyết Lênin',
          content: 'Đảng Cộng sản Việt Nam do Hồ Chí Minh sáng lập và rèn luyện, là một đảng chính trị tồn tại và phát triển theo quan điểm của V.I. Lênin về đảng kiểu mới của giai cấp vô sản, nhưng được vận dụng sáng tạo phù hợp tuyệt đối với điều kiện của một nước thuộc địa nửa phong kiến.',
        },
        {
          badge: 'LUẬN ĐIỂM 3',
          heading: 'Quy luật ra đời của Đảng: Điểm sáng tạo lớn của Hồ Chí Minh',
          content: 'Khác với quy luật ở các nước phương Tây (kết hợp 2 yếu tố: Chủ nghĩa Mác + Phong trào công nhân), tại Việt Nam, Hồ Chí Minh bổ sung thêm yếu tố thứ ba cực kỳ cốt lõi: Phong trào yêu nước.',
          comparisonTable: {
            title: 'Bảng so sánh Quy luật hình thành Đảng Cộng sản',
            cols: ['Tiêu chí', 'Học thuyết Mác – Lênin (Phương Tây)', 'Sáng tạo của Hồ Chí Minh (Việt Nam)'],
            rows: [
              ['Công thức ra đời', 'CN Mác – Lênin + Phong trào công nhân', 'CN Mác – Lênin + Phong trào công nhân + PHONG TRÀO YÊU NƯỚC'],
              ['Bối cảnh xã hội', 'Các nước tư bản phát triển, mâu thuẫn tư sản - vô sản là chủ yếu', 'Xã hội thuộc địa, mâu thuẫn toàn thể dân tộc với đế quốc xâm lược là mâu thuẫn cơ bản'],
              ['Ý nghĩa lịch sử', 'Tập hợp giai cấp công nhân công nghiệp', 'Đấu tranh giai cấp hòa quyện với giải phóng dân tộc, toàn dân tộc trao sứ mệnh cho Đảng']
            ]
          },
          image: 'https://file3.qdnd.vn/data/images/0/2025/01/06/upload_2058/33.jpg',
          imageCaption: 'Hình 2: Hội Việt Nam Cách mạng Thanh niên – tổ chức tiền thân chuẩn bị cho sự ra đời của Đảng'
        }
      ]
    },
    {
      id: 'i-2',
      title: 'I.2. Đảng phải trong sạch, vững mạnh',
      subSections: [
        {
          title: 'a) Đảng là đạo đức, là văn minh',
          desc: 'Tại lễ kỷ niệm 30 năm thành lập Đảng (1960), Hồ Chí Minh tổng kết: “Đảng ta là đạo đức, là văn minh”.',
          pillars: [
            {
              tag: 'ĐẢNG LÀ ĐẠO ĐỨC',
              details: [
                'Mục đích hoạt động duy nhất: Lãnh đạo đấu tranh giải phóng dân tộc, giải phóng xã hội, giải phóng con người; không có lợi ích nào khác ngoài lợi ích của Tổ quốc và nhân dân.',
                'Cương lĩnh, đường lối, chủ trương vì độc lập dân tộc và tự do, ấm no, hạnh phúc của nhân dân.',
                'Đội ngũ đảng viên suốt đời phấn đấu, hy sinh cho lý tưởng của Đảng; cần, kiệm, liêm, chính, chí công vô tư.'
              ]
            },
            {
              tag: 'ĐẢNG LÀ VĂN MINH',
              details: [
                'Là lực lượng tiêu biểu cho lương tri, trí tuệ và khí phách của dân tộc.',
                'Đảng hoạt động trong khuôn khổ Hiến pháp và pháp luật, không đứng trên pháp luật.',
                'Luôn giữ mối liên hệ mật thiết máu thịt với quần chúng nhân dân.'
              ]
            }
          ]
        },
        {
          title: 'b) 8 Nguyên tắc tổ chức và hoạt động của Đảng',
          principles: [
            { no: '01', name: 'Tập trung dân chủ', desc: 'Nguyên tắc tổ chức cơ bản nhất. Tập trung trên cơ sở dân chủ; dân chủ dưới sự chỉ đạo tập trung. Dân chủ mở rộng tối đa, thiểu số phục tùng đa số, cấp dưới phục tùng cấp trên.' },
            { no: '02', name: 'Tập thể lãnh đạo, cá nhân phụ trách', desc: 'Tập thể lãnh đạo để tránh độc đoán, chủ quan; cá nhân phụ trách để tránh ỷ lại, vô trách nhiệm. Tập thể lãnh đạo là dân chủ, cá nhân phụ trách là tập trung.' },
            { no: '03', name: 'Tự phê bình và phê bình', desc: 'Quy luật phát triển của Đảng, là "vũ khí sắc bén nhất" để sửa chữa khuyết điểm, phát huy ưu điểm, làm cho Đảng ngày càng trong sạch.' },
            { no: '04', name: 'Kỷ luật nghiêm minh, tự giác', desc: 'Kỷ luật sắt của Đảng được xây dựng trên nền tảng tính tự giác của mỗi đảng viên. Mọi đảng viên đều bình đẳng trước kỷ luật của Đảng.' },
            { no: '05', name: 'Đoàn kết thống nhất trong Đảng', desc: 'Đoàn kết là sinh mệnh của Đảng. Giữ gìn sự đoàn kết nhất trí như giữ gìn con ngươi của mắt mình. Đoàn kết dựa trên chủ nghĩa Mác – Lênin và đường lối của Đảng.' },
            { no: '06', name: 'Liên hệ mật thiết với nhân dân', desc: 'Đảng từ nhân dân mà ra, vì nhân dân mà phục vụ. Rời xa nhân dân là tự chặt đứt nguồn cội sức mạnh của chính mình.' },
            { no: '07', name: 'Đoàn kết quốc tế', desc: 'Kết hợp sức mạnh dân tộc với sức mạnh thời đại; đoàn kết phong trào cộng sản và các dân tộc bị áp bức trên thế giới.' },
            { no: '08', name: 'Lấy CN Mác – Lênin làm nền tảng tư tưởng', desc: 'Đảng phải lấy chủ nghĩa Mác – Lênin làm cốt, làm kim chỉ nam cho mọi hành động cách mạng.' }
          ]
        },
        {
          title: 'c) Xây dựng đội ngũ cán bộ, đảng viên',
          desc: 'Hồ Chí Minh khẳng định: "Cán bộ là cái gốc của mọi công việc", "Muôn việc thành công hoặc thất bại, đều do cán bộ tốt hoặc kém".',
          cadrePoints: [
            'Phải vừa có ĐỨC vừa có TÀI, trong đó ĐỨC là gốc (vừa "hồng" vừa "chuyên").',
            'Đạo đức cách mạng: Cần, kiệm, liêm, chính, chí công vô tư; kiên quyết quét sạch chủ nghĩa cá nhân.',
            '9 Yêu cầu trong công tác cán bộ: 1) Hiểu & đánh giá đúng cán bộ; 2) Huấn luyện thiết thực; 3) Đề bạt đúng; 4) Sử dụng đúng; 5) Kết hợp cán bộ cấp trên & địa phương; 6) Chống cục bộ địa phương; 7) Kết hợp cán bộ trẻ & cũ; 8) Phòng chống tiêu cực; 9) Thường xuyên kiểm tra giúp đỡ.'
          ]
        }
      ]
    }
  ]
};

export const PART_II_DATA = {
  id: 'part-2',
  tag: 'PHẦN II',
  title: 'Tư tưởng Hồ Chí Minh về Nhà nước của nhân dân, do nhân dân, vì nhân dân',
  pageRange: 'Giáo trình tr. 142–164',
  summary: 'Nhà nước Việt Nam dân chủ mới có bản chất giai cấp công nhân, gắn bó mật thiết với tính nhân dân và tính dân tộc. Xây dựng Nhà nước dân chủ trên cả 3 phương diện: Của dân, Do dân, Vì dân. Nhà nước pháp quyền có hiệu lực pháp lý mạnh mẽ, thượng tôn pháp luật và pháp quyền nhân nghĩa. Kiểm soát quyền lực nhà nước, kiên quyết phòng chống "giặc nội xâm": đặc quyền, tham ô, lãng phí, quan liêu.',
  sections: [
    {
      id: 'ii-1',
      title: 'II.1. Nhà nước Dân chủ',
      pillars: [
        {
          title: 'Bản chất giai cấp công nhân',
          content: 'Nhà nước do Đảng Cộng sản Việt Nam lãnh đạo. Định hướng đưa đất nước đi lên chủ nghĩa xã hội. Bản chất giai cấp công nhân thống nhất chặt chẽ với tính nhân dân và tính dân tộc, đại diện cho khối đại đoàn kết toàn dân tộc.'
        },
        {
          title: 'Nhà nước CỦA nhân dân',
          content: 'Tất cả quyền lực trong nước là của toàn thể nhân dân. Dân là chủ, quyền làm chủ thuộc về nhân dân. Nhân dân thực hiện quyền lực thông qua Quốc hội và Hội đồng nhân dân do dân bầu ra (dân chủ gián tiếp) và thực thi dân chủ trực tiếp.'
        },
        {
          title: 'Nhà nước DO nhân dân',
          content: 'Do nhân dân bầu ra, nuôi dưỡng, ủng hộ và bảo vệ. Mọi chủ trương, chính sách đều phải do dân bàn bạc, đóng góp ý kiến. Cán bộ từ dân mà ra, chịu sự giám sát nghiêm ngặt của nhân dân.'
        },
        {
          title: 'Nhà nước VÌ nhân dân',
          content: 'Mọi chính sách, luật pháp đều nhằm mưu cầu hạnh phúc cho dân. Cán bộ là "công bộc", là "đầy tớ" trung thành của nhân dân, không được làm "quan cách mạng" đè đầu cưỡi cổ nhân dân.'
        }
      ]
    },
    {
      id: 'ii-2',
      title: 'II.2. Nhà nước Pháp quyền',
      pillars: [
        {
          title: 'Nhà nước hợp hiến, hợp pháp',
          content: 'Ngay sau Cách mạng Tháng Tám 1945, Hồ Chí Minh chủ trương tổ chức Tổng tuyển cử bầu Quốc hội (6/1/1946) và ban hành Hiến pháp 1946, đặt nền móng pháp lý vững chắc cho chính thể Việt Nam Dân chủ Cộng hòa.'
        },
        {
          title: 'Thượng tôn pháp luật',
          content: 'Pháp luật phải có hiệu lực thực tế tối cao. Tăng cường tuyên truyền, giáo dục pháp luật ("trăm điều phải có thần linh pháp quyền"). Cán bộ và người dân đều bình đẳng tuyệt đối trước pháp luật.'
        },
        {
          title: 'Pháp quyền nhân nghĩa',
          content: 'Pháp luật thể hiện đạo lý làm người, tôn trọng quyền con người, vì con người; nghiêm minh nhưng giàu tính nhân đạo, hướng thiện, giáo dục cải tạo người phạm lỗi.'
        }
      ]
    },
    {
      id: 'ii-3',
      title: 'II.3. Nhà nước trong sạch, vững mạnh',
      pillars: [
        {
          title: 'Kiểm soát quyền lực nhà nước',
          content: 'Quyền lực nhà nước dễ bị tha hóa nếu không được kiểm soát chặt chẽ. Cần kết hợp: Kiểm soát từ trên xuống (công tác kiểm tra của Đảng và Nhà nước) và Kiểm soát từ dưới lên (sự giám sát, phê bình của nhân dân).'
        },
        {
          title: 'Phòng, chống tiêu cực ("Bắt bệnh")',
          content: 'Hồ Chí Minh chỉ rõ các căn bệnh hủy hoại Nhà nước: 1) Đặc quyền, đặc lợi; 2) Tham ô, lãng phí, quan liêu (được coi là "giặc nội xâm", "bạn đồng minh của thực dân, phong kiến"); 3) Tư túng, chia rẽ, kiêu ngạo.',
          decreeNote: 'Ngày 26/1/1946, Hồ Chí Minh ký lệnh khép tội tham ô, trộm cắp công quỹ đến mức cao nhất là TỬ HÌNH. Ngày 27/11/1946, ký Sắc lệnh phạt tù khổ sai từ 5 đến 20 năm tội đưa và nhận hối lộ.'
        }
      ]
    }
  ]
};

export const PART_III_DATA = {
  id: 'part-3',
  tag: 'PHẦN III',
  title: 'Vận dụng tư tưởng Hồ Chí Minh vào công tác xây dựng Đảng và Nhà nước',
  pageRange: 'Giáo trình tr. 165–168',
  summary: 'Vận dụng sáng tạo tư tưởng Hồ Chí Minh trong giai đoạn hiện nay: Kiên định mục tiêu độc lập dân tộc gắn liền với CNXH; tăng cường xây dựng, chỉnh đốn Đảng; đấu tranh phòng chống tham nhũng, lãng phí, tiêu cực; xây dựng Nhà nước pháp quyền XHCN kiến tạo phát triển, liêm chính, phục vụ nhân dân.',
  keyActions: [
    {
      domain: 'XÂY DỰNG ĐẢNG TRONG SẠCH, VỮNG MẠNH',
      items: [
        'Giữ vững và tăng cường bản chất giai cấp công nhân của Đảng; kiên định chủ nghĩa Mác – Lênin, tư tưởng Hồ Chí Minh.',
        'Thực hiện nghiêm túc các nguyên tắc tổ chức và sinh hoạt Đảng, nhất là nguyên tắc tập trung dân chủ, tự phê bình và phê bình.',
        'Đẩy mạnh học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh; kiên quyết ngăn chặn, đẩy lùi suy thoái tư tưởng chính trị, đạo đức, lối sống, "tự diễn biến", "tự chuyển hóa".',
        'Nâng cao năng lực lãnh đạo, năng lực cầm quyền và sức chiến đấu của Đảng; củng cố mối quan hệ máu thịt giữa Đảng với nhân dân.'
      ]
    },
    {
      domain: 'XÂY DỰNG NHÀ NƯỚC PHÁP QUYỀN XÃ HỘI CHỦ NGHĨA',
      items: [
        'Xây dựng Nhà nước của nhân dân, do nhân dân, vì nhân dân do Đảng Cộng sản lãnh đạo.',
        'Hoàn thiện hệ thống pháp luật đồng bộ, thống nhất, khả thi, công khai, minh bạch, lấy quyền và lợi ích hợp pháp của người dân làm trung tâm.',
        'Tiếp tục cải cách hành chính, xây dựng nền hành chính công vụ chuyên nghiệp, hiện đại, liêm chính, phục vụ.',
        'Tăng cường cơ chế kiểm soát quyền lực nhà nước; kiên quyết, kiên trì đấu tranh không khoan nhượng với tham nhũng, tiêu cực, lãng phí.'
      ]
    }
  ]
};

export const KEY_QUOTES = [
  {
    id: 'TD01',
    work: 'Đường cách mệnh (1927)',
    source: 'TT, t.2, tr.289 · GT tr. 124',
    topic: 'Vai trò lãnh đạo của Đảng',
    content: 'Trước hết phải có đảng cách mệnh, để trong thì vận động và tổ chức dân chúng, ngoài thì liên lạc với dân tộc bị áp bức và vô sản giai cấp mọi nơi. Đảng có vững, cách mệnh mới thành công, cũng như người cầm lái có vững thuyền mới chạy.'
  },
  {
    id: 'TD03',
    work: 'Báo cáo Chính trị tại Đại hội II (1951)',
    source: 'TT, t.7, tr.232 · GT tr. 126',
    topic: 'Bản chất của Đảng',
    content: 'Đảng Lao động Việt Nam là Đảng của giai cấp công nhân và nhân dân lao động, cho nên nó phải là Đảng của dân tộc Việt Nam.'
  },
  {
    id: 'TD04',
    work: 'Bài nói kỷ niệm 30 năm ngày thành lập Đảng (1960)',
    source: 'TT, t.12, tr.403 · GT tr. 126',
    topic: 'Đảng là đạo đức, là văn minh',
    content: 'Đảng ta là đạo đức, là văn minh, là thống nhất, độc lập, là hòa bình, ấm no. Đảng ta vĩ đại như biển rộng, như núi cao, ba mươi năm phấn đấu và thắng lợi biết bao nhiêu tình.'
  },
  {
    id: 'TD11',
    work: 'Sửa đổi lối làm việc (1947)',
    source: 'TT, t.5, tr.308 · GT tr. 131',
    topic: 'Tự phê bình và phê bình',
    content: 'Một Đảng mà giấu giếm khuyết điểm của mình là một Đảng hỏng. Một Đảng có gan thừa nhận khuyết điểm của mình, vạch rõ những cái đó, vì đâu mà có khuyết điểm đó, xét rõ hoàn cảnh sinh ra khuyết điểm đó, rồi tìm kiếm mọi cách để sửa chữa khuyết điểm đó. Như thế là một Đảng tiến bộ, mạnh dạn, chắc chắn, chân chính.'
  },
  {
    id: 'TD14',
    work: 'Di chúc (1969)',
    source: 'TT, t.15, tr.611 · GT tr. 133',
    topic: 'Đoàn kết trong Đảng',
    content: 'Đoàn kết là một truyền thống cực kỳ quý báu của Đảng và của dân ta. Các đồng chí từ Trung ương đến các chi bộ cần phải giữ gìn sự đoàn kết nhất trí của Đảng như giữ gìn con ngươi của mắt mình.'
  },
  {
    id: 'TD25',
    work: 'Sửa đổi lối làm việc (1947)',
    source: 'TT, t.5, tr.280 · GT tr. 136',
    topic: 'Vị trí của cán bộ',
    content: 'Cán bộ là cái gốc của mọi công việc. Muôn việc thành công hoặc thất bại, đều do cán bộ tốt hoặc kém.'
  },
  {
    id: 'TD36',
    work: 'Thư gửi các đồng chí Bắc Bộ (1947)',
    source: 'TT, t.5, tr.75 · GT tr. 143',
    topic: 'Bản chất Nhà nước của nhân dân',
    content: 'Nước ta là nước dân chủ, địa vị cao nhất là dân, vì dân là chủ. Trong bộ máy cách mạng, từ người quét nhà, nấu ăn cho đến Chủ tịch một nước đều là phân công làm đày tớ cho dân.'
  },
  {
    id: 'TD40',
    work: 'Thư gửi Ủy ban nhân dân các kỳ, tỉnh, huyện và làng (1945)',
    source: 'TT, t.4, tr.64–65 · GT tr. 147',
    topic: 'Nhà nước vì nhân dân',
    content: 'Chúng ta phải hiểu rằng, các cơ quan của Chính phủ từ toàn quốc cho đến các làng, đều là công bộc của dân, nghĩa là để gánh vác việc chung cho dân, chứ không phải để đè đầu dân như trong thời kỳ dưới quyền thống trị của Pháp, Nhật. Việc gì lợi cho dân, ta phải hết sức làm. Việc gì hại đến dân, ta phải hết sức tránh.'
  },
  {
    id: 'TD59',
    work: 'Thực hành tiết kiệm, chống tham ô, lãng phí, quan liêu (1952)',
    source: 'TT, t.7, tr.357 · GT tr. 159',
    topic: 'Chống giặc nội xâm',
    content: 'Tham ô, lãng phí và bệnh quan liêu là kẻ thù của nhân dân, của bộ đội và của Chính phủ... Nó là kẻ thù khá nguy hiểm, vì nó không mang gươm mang súng, mà nó nằm trong các tổ chức của ta, để làm hỏng công việc của ta. Tham ô, lãng phí và bệnh quan liêu là bạn đồng minh của thực dân và phong kiến... Nó làm hỏng tinh thần trong sạch và ý chí khắc khổ của cán bộ ta. Nó phá hoại đạo đức cách mạng của ta là cần, kiệm, liêm, chính.'
  }
];
