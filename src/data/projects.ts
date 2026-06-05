export type Submission = {
  fileName: string;
  submittedAt: string; // thời gian nộp
  status: string; // trạng thái (vd: Đã nộp · Đang chờ chấm)
  fileUrl: string; // link tải/xem file bài làm (CDN)
};

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
  tools: string[];
  lmsUrl: string; // link trang bài trên LMS (cần đăng nhập) — để "" nếu chưa có
  submission: Submission | null; // thông tin bài đã nộp — null nếu chưa có
  requirementImg?: string; // (tuỳ chọn) ảnh chụp yêu cầu đề bài
  proofImg?: string; // (tuỳ chọn) ảnh chụp minh chứng đã nộp
  aiNote: string;
  lesson: string;
};

export const SITE = {
  fullName: "Hoàng Thanh Trà",
  major: "Ngành Y Khoa",
  school: "ĐH Y Dược - Đại học Quốc gia Hà Nội",
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
    short: "Thao tác cơ bản với tệp tin và thư mục một cách thành thạo.",
    icon: "HardDrive",
    gradient: "from-cyan-400 to-blue-600",
    objective:
      "Rèn luyện kỹ năng tạo, đổi tên, sao chép, di chuyển, xóa tệp tin và thư mục một cách thành thạo trên hệ điều hành Windows (có thể điều chỉnh cho macOS/Linux).",
    steps: [
      "Mở File Explorer (phím tắt Windows + E).",
      "Truy cập ổ đĩa/thư mục: This PC → ổ D: (hoặc thư mục Documents).",
      "Tạo thư mục mới đặt tên: ThucHanh_HoangThanhTra.",
      "Vào thư mục vừa tạo.",
      "Tạo tệp văn bản GhiChu.txt (New → Text Document).",
      "Đổi tên tệp thành GhiChuQuanTrong.txt (Rename).",
      "Tạo thư mục con TaiLieu bên trong.",
      "Sao chép GhiChuQuanTrong.txt (Copy) rồi dán (Paste) vào thư mục TaiLieu.",
      "Di chuyển: tạo DiChuyen.txt rồi Cut & Paste vào thư mục TaiLieu.",
      "Xóa tệp GhiChuQuanTrong.txt trong TaiLieu → chuyển vào Thùng rác.",
      "Xóa vĩnh viễn DiChuyen.txt bằng Shift + Delete.",
      "Khôi phục GhiChuQuanTrong.txt từ Thùng rác (Restore).",
    ],
    tools: ["Windows", "File Explorer"],
    lmsUrl:
      "https://lms.vnu.edu.vn/learn/lop-hoc/chi-tiet/09600b64-537c-43d3-a190-5f54527d21ec",
    submission: {
      fileName: "hoang-thanh-tra.docx",
      submittedAt: "09/03/2026 · 11:48",
      status: "Đã nộp · Đang chờ chấm",
      fileUrl:
        "https://cdnlms.vnu.edu.vn/dhqg.file.api/uploads/lms/document/22100161/20260309/tmpkrvxdi_hoang-thanh-tra.docx",
    },
    proofImg: "/img/bai1-minhchung.jpg",
    aiNote:
      "Bài tập thực hành thao tác trực tiếp trên hệ điều hành Windows, không sử dụng công cụ AI. Toàn bộ ảnh minh hoạ trong bài nộp do chính tôi chụp màn hình trong quá trình thực hiện.",
    lesson:
      "Thành thạo các thao tác quản lý tệp/thư mục là nền tảng để tổ chức tài liệu học tập y khoa một cách khoa học, tránh thất lạc dữ liệu và làm việc hiệu quả hơn.",
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
    tools: ["PubMed", "Google Scholar"],
    lmsUrl: "",
    submission: null,
    aiNote:
      "[Liệt kê các nguồn đã trích dẫn theo đúng định dạng; ghi rõ nếu dùng AI hỗ trợ.]",
    lesson:
      "[Vì sao đánh giá độ tin cậy của nguồn lại đặc biệt quan trọng với người làm Y?]",
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
    tools: ["ChatGPT", "Gemini", "Claude"],
    lmsUrl: "",
    submission: null,
    aiNote:
      "[Ghi rõ công cụ AI đã dùng — ChatGPT/Gemini/Claude, phiên bản, ngày sử dụng.]",
    lesson: "[Kỹ năng viết prompt hỗ trợ học tập & tra cứu y khoa của bạn ra sao?]",
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
    tools: ["Google Workspace", "Trello", "Zoom / Meet"],
    lmsUrl: "",
    submission: null,
    aiNote:
      "[Ghi nhận đóng góp của các thành viên; nêu công cụ/nguồn đã dùng.]",
    lesson:
      "[Kỹ năng hợp tác số hỗ trợ làm việc nhóm trong môi trường y tế thế nào?]",
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
    tools: ["Canva AI", "Leonardo.ai", "CapCut"],
    lmsUrl: "",
    submission: null,
    aiNote:
      "[Ghi rõ công cụ AI, prompt chính, và nguồn hình ảnh/nhạc nếu có.]",
    lesson: "[Nội dung số giúp truyền thông sức khoẻ hiệu quả ra sao?]",
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
    tools: ["Nguyên tắc đạo đức số", "Trích dẫn học thuật"],
    lmsUrl: "",
    submission: null,
    aiNote:
      "Toàn bộ Portfolio được thực hiện trung thực; mọi nội dung tham khảo & công cụ AI đều được ghi nguồn rõ ràng.",
    lesson:
      "[Vì sao đạo đức số & bảo mật dữ liệu bệnh nhân cực kỳ quan trọng trong ngành Y?]",
  },
];
