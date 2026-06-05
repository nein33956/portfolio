export type Project = {
  id: number;
  slug: string;
  task: string; // "Nhiệm vụ 1"
  title: string;
  short: string; // mô tả ngắn trên card
  icon: string; // key icon (map trong component)
  gradient: string; // tailwind gradient classes
  objective: string;
  steps: string[];
  product: string; // gợi ý sản phẩm đính kèm
  productType: "file" | "image" | "video" | "link";
  productUrl: string; // ★ Dán LINK LMS của bài tập vào đây (để "" nếu chưa có)
  aiNote: string;
  lesson: string;
  tools: string[];
};

export const SITE = {
  fullName: "Hoàng Thanh Trà",
  major: "Ngành Y Dược",
  school: "Đại học Y Dược",
  year: "2026",
  email: "[email@cua.ban]",
  hobbies: "Messi, đọc sách, đá bóng",
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "bai-1-quan-ly-tep-thu-muc",
    task: "Nhiệm vụ 1",
    title: "Máy tính & thiết bị ngoại vi",
    short: "Thao tác với thiết bị và quản lý tệp / thư mục một cách khoa học.",
    icon: "HardDrive",
    gradient: "from-cyan-400 to-blue-600",
    objective:
      "Nắm vững cách sử dụng máy tính & thiết bị ngoại vi; tổ chức, quản lý tệp và thư mục khoa học để lưu trữ tài liệu học tập ngành Y hiệu quả.",
    steps: [
      "[Bước 1] — Ví dụ: thiết kế cây thư mục theo môn học / học kỳ.",
      "[Bước 2] — Đặt tên tệp theo quy tắc nhất quán (ngày_chủđề_phiênbản).",
      "[Bước 3] — Sao lưu dữ liệu & kết nối thiết bị ngoại vi (USB, máy in).",
    ],
    product: "[Ảnh chụp cây thư mục đã tổ chức + file PDF mô tả]",
    productType: "image",
    productUrl: "", // ← dán link LMS Bài 1
    aiNote:
      "[Ghi rõ nếu có dùng AI/nguồn tham khảo; hoặc: không sử dụng AI cho bài này.]",
    lesson:
      "[Bạn học được gì? Kỹ năng quản lý dữ liệu giúp ích gì cho việc học/nghiên cứu y khoa?]",
    tools: ["File Explorer", "OneDrive / Google Drive"],
  },
  {
    id: 2,
    slug: "bai-2-tim-kiem-danh-gia-thong-tin",
    task: "Nhiệm vụ 2",
    title: "Khai thác dữ liệu & thông tin",
    short: "Tìm kiếm và đánh giá thông tin học thuật đáng tin cậy.",
    icon: "Search",
    gradient: "from-emerald-400 to-teal-600",
    objective:
      "Biết tìm kiếm thông tin học thuật trên nguồn uy tín (PubMed, Google Scholar, thư viện số) và đánh giá độ tin cậy theo tiêu chí khoa học.",
    steps: [
      "[Chủ đề tra cứu] — Ví dụ: tác dụng phụ của một nhóm thuốc.",
      "[Từ khoá & toán tử] — Sử dụng AND/OR, dấu ngoặc kép, lọc theo năm.",
      "[Đánh giá nguồn] — Tác giả, tạp chí, ngày xuất bản, số trích dẫn.",
    ],
    product: "[Bảng đánh giá nguồn (PDF) + ảnh kết quả tìm kiếm]",
    productType: "file",
    productUrl: "", // ← dán link LMS Bài 2
    aiNote:
      "[Liệt kê các nguồn đã trích dẫn theo đúng định dạng; ghi rõ nếu dùng AI hỗ trợ.]",
    lesson:
      "[Vì sao đánh giá độ tin cậy của nguồn lại đặc biệt quan trọng với người làm Y?]",
    tools: ["PubMed", "Google Scholar"],
  },
  {
    id: 3,
    slug: "bai-3-viet-prompt-hieu-qua",
    task: "Nhiệm vụ 3",
    title: "Tổng quan về trí tuệ nhân tạo",
    short: "Viết Prompt hiệu quả — so sánh kết quả trước & sau khi tối ưu.",
    icon: "Sparkles",
    gradient: "from-violet-400 to-fuchsia-600",
    objective:
      "Hiểu nguyên tắc viết prompt hiệu quả cho công cụ AI; so sánh chất lượng câu trả lời giữa prompt sơ sài và prompt được tối ưu.",
    steps: [
      "[Prompt v1] — Dán prompt ban đầu & kết quả AI (chưa tốt).",
      "[Prompt v2] — Dán prompt cải tiến (vai trò, ngữ cảnh, định dạng) & kết quả tốt hơn.",
      "[Nhận xét] — Phân tích nguyên tắc giúp prompt v2 vượt trội.",
    ],
    product: "[File so sánh prompt trước/sau (PDF)]",
    productType: "file",
    productUrl: "", // ← dán link LMS Bài 3
    aiNote:
      "[Ghi rõ công cụ AI đã dùng — ChatGPT/Gemini/Claude, phiên bản, ngày sử dụng.]",
    lesson: "[Kỹ năng viết prompt hỗ trợ học tập & tra cứu y khoa của bạn ra sao?]",
    tools: ["ChatGPT", "Gemini", "Claude"],
  },
  {
    id: 4,
    slug: "bai-4-hop-tac-truc-tuyen",
    task: "Nhiệm vụ 4",
    title: "Giao tiếp & hợp tác số",
    short: "Hợp tác trực tuyến: làm việc nhóm, chia sẻ tài liệu thời gian thực.",
    icon: "Users",
    gradient: "from-orange-400 to-rose-600",
    objective:
      "Sử dụng thành thạo công cụ làm việc nhóm trực tuyến (Google Docs/Drive, Meet, Trello) để giao tiếp và hợp tác hiệu quả.",
    steps: [
      "[Công cụ] — Ví dụ: Google Docs, Meet, Trello.",
      "[Nhiệm vụ nhóm] — Mô tả công việc nhóm đã thực hiện.",
      "[Vai trò của tôi] — Đóng góp cụ thể của bạn.",
    ],
    product: "[Link tài liệu cộng tác (đặt quyền xem) + ảnh lịch sử chỉnh sửa]",
    productType: "link",
    productUrl: "", // ← dán link LMS Bài 4
    aiNote:
      "[Ghi nhận đóng góp của các thành viên; nêu công cụ/nguồn đã dùng.]",
    lesson:
      "[Kỹ năng hợp tác số hỗ trợ làm việc nhóm trong môi trường y tế thế nào?]",
    tools: ["Google Workspace", "Trello", "Zoom / Meet"],
  },
  {
    id: 5,
    slug: "bai-5-sang-tao-noi-dung-so",
    task: "Nhiệm vụ 5",
    title: "Sáng tạo nội dung số với AI",
    short: "Tạo hình ảnh / video bằng công cụ AI — sản phẩm sáng tạo cá nhân.",
    icon: "Wand2",
    gradient: "from-pink-400 to-purple-600",
    objective:
      "Ứng dụng công cụ AI để sáng tạo nội dung số (hình ảnh, video, infographic) phục vụ học tập hoặc truyền thông sức khoẻ.",
    steps: [
      "[Loại nội dung] — Hình ảnh / video / infographic.",
      "[Công cụ AI] — Ví dụ: Canva AI, Leonardo, CapCut.",
      "[Chủ đề] — Ví dụ: poster tuyên truyền rửa tay đúng cách.",
    ],
    product: "[Ảnh/Video sản phẩm — gắn ảnh hoặc dán link YouTube/Drive]",
    productType: "video",
    productUrl: "", // ← dán link LMS Bài 5
    aiNote:
      "[Ghi rõ công cụ AI, prompt chính, và nguồn hình ảnh/nhạc nếu có.]",
    lesson: "[Nội dung số giúp truyền thông sức khoẻ hiệu quả ra sao?]",
    tools: ["Canva AI", "Leonardo.ai", "CapCut"],
  },
  {
    id: 6,
    slug: "bai-6-ai-co-trach-nhiem",
    task: "Nhiệm vụ 6",
    title: "An toàn & liêm chính học thuật",
    short: "Sử dụng AI có trách nhiệm, đạo đức số & liêm chính học thuật.",
    icon: "ShieldCheck",
    gradient: "from-teal-400 to-cyan-700",
    objective:
      "Hiểu và thực hành an toàn thông tin, đạo đức số và liêm chính học thuật; sử dụng AI có trách nhiệm — đặc biệt với dữ liệu sức khoẻ.",
    steps: [
      "[Tình huống phân tích] — Mô tả tình huống/chủ đề.",
      "[Nguyên tắc đạo đức số] — Bảo mật dữ liệu, minh bạch nguồn.",
      "[Phòng tránh đạo văn] — Cách trích dẫn & dùng AI đúng mực.",
    ],
    product: "[Bài phân tích / cam kết liêm chính (PDF)]",
    productType: "file",
    productUrl: "", // ← dán link LMS Bài 6
    aiNote:
      "Toàn bộ Portfolio được thực hiện trung thực; mọi nội dung tham khảo & công cụ AI đều được ghi nguồn rõ ràng.",
    lesson:
      "[Vì sao đạo đức số & bảo mật dữ liệu bệnh nhân cực kỳ quan trọng trong ngành Y?]",
    tools: ["Nguyên tắc đạo đức số", "Trích dẫn học thuật"],
  },
];
