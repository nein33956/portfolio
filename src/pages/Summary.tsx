import { Link } from "react-router-dom";
import { Sprout, Brain, Star, BarChart3, ArrowLeft } from "lucide-react";
import Aurora from "../components/Aurora";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";
import { getIcon } from "../lib/icons";

export default function Summary() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-14 sm:pt-40">
        <Aurora />
        <div className="container-x">
          <Reveal>
            <span className="chip"><Star className="h-3.5 w-3.5" /> Trang Tổng kết</span>
            <h1 className="mt-5 font-display text-4xl font-extrabold text-ink sm:text-5xl">
              Tổng kết <span className="gradient-text">hành trình</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-ink-muted">
              Trải nghiệm, kiến thức và những điều tâm đắc sau khi hoàn thành 6 dự án AI và công nghệ số.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-12">
        <div className="container-x">
          <div className="mx-auto max-w-3xl space-y-6">
            <Reveal>
              <Card icon={Sprout} title="Trải nghiệm & cảm nhận cá nhân">
                <div className="space-y-3 text-sm leading-relaxed text-ink-soft">
                  <p>
                    Quá trình thực hiện Portfolio là một hành trình thật sự thú vị đối với
                    tôi. Khi mới bắt đầu, tôi khá lúng túng vì nghĩ "AI và công nghệ số" chỉ đơn
                    giản là biết dùng máy tính. Nhưng càng đi qua từng bài, tôi càng nhận ra
                    đây là cả một <b>tư duy làm việc trong môi trường số</b> — từ cách tổ
                    chức dữ liệu, tìm và thẩm định thông tin, đến việc cộng tác và sử dụng AI.
                  </p>
                  <p>
                    Điều khiến tôi hứng thú nhất là được khám phá sức mạnh của AI khi biết
                    cách "ra lệnh" đúng, và tự tay tạo ra những sản phẩm số của riêng mình.
                    Khó khăn lớn nhất là rèn thói quen <b>kiểm chứng nguồn</b> và trình bày
                    kết quả một cách khoa học, minh bạch.
                  </p>
                  <p>
                    Nhìn lại, tôi thấy mình đã tiến bộ rõ rệt: từ chỗ dùng công cụ một cách
                    cảm tính, nay tôi tự tin hơn nhiều khi khai thác thông tin học thuật và
                    ứng dụng công nghệ vào việc học ngành Y Khoa.
                  </p>
                </div>
              </Card>
            </Reveal>

            <Reveal>
              <Card icon={Brain} title="Kiến thức & kỹ năng quan trọng nhất">
                <div className="relative space-y-4 border-l-2 border-brand-100 pl-6">
                  {projects.map((p) => {
                    const Icon = getIcon(p.icon);
                    return (
                      <div key={p.id} className="relative">
                        <span className={`absolute -left-[31px] grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br ${p.gradient} text-white ring-4 ring-white`}>
                          <Icon className="h-3 w-3" />
                        </span>
                        <p className="text-sm text-ink-soft">
                          <b className="text-ink">{p.title}</b> — {p.short}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </Reveal>

            <Reveal>
              <Card icon={Star} title="Điểm tâm đắc & thách thức gặp phải">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4">
                    <p className="mb-2 text-sm font-bold text-emerald-700">💚 Điều tôi tâm đắc</p>
                    <ul className="list-disc space-y-1.5 pl-4 text-sm text-ink-soft">
                      <li>Tự xây dựng được một <b>sản phẩm số hoàn chỉnh</b> — chính là website Portfolio này.</li>
                      <li>Biết viết prompt hiệu quả, biến AI thành "trợ lý học tập" thực sự.</li>
                      <li>Hiểu sâu hơn về liêm chính học thuật và đạo đức số.</li>
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-4">
                    <p className="mb-2 text-sm font-bold text-amber-700">🔥 Thách thức đã vượt qua</p>
                    <ul className="list-disc space-y-1.5 pl-4 text-sm text-ink-soft">
                      <li>Phân biệt nguồn tin đáng tin cậy giữa "biển" thông tin trên mạng.</li>
                      <li>Cân bằng giữa tận dụng AI và giữ tính trung thực, tự chủ trong học tập.</li>
                      <li>Sắp xếp thời gian để hoàn thiện đầy đủ cả 6 nhiệm vụ.</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </Reveal>

            <Reveal>
              <Card icon={BarChart3} title="Tự đánh giá bản thân">
                <div className="space-y-2.5">
                  {[
                    { name: "Quản lý tệp & thư mục", level: "Tốt" },
                    { name: "Tìm kiếm & đánh giá thông tin", level: "Khá" },
                    { name: "Viết prompt & ứng dụng AI", level: "Tốt" },
                    { name: "Hợp tác trực tuyến", level: "Tốt" },
                    { name: "Sáng tạo nội dung số", level: "Khá" },
                    { name: "An toàn & liêm chính học thuật", level: "Tốt" },
                  ].map((s) => (
                    <div
                      key={s.name}
                      className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/60 px-4 py-2.5"
                    >
                      <span className="text-sm font-medium text-ink-soft">{s.name}</span>
                      <span
                        className={`rounded-full px-3 py-0.5 text-xs font-bold ${
                          s.level === "Tốt"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {s.level}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  <b className="text-ink">Định hướng tiếp theo:</b> tôi sẽ tiếp tục rèn luyện kỹ
                  năng đánh giá nguồn và sáng tạo nội dung số, đồng thời ứng dụng AI và công nghệ số vào
                  việc học Y Khoa — tra cứu tài liệu, phác đồ điều trị và hỗ trợ nghiên cứu khoa học
                  một cách hiệu quả, có trách nhiệm.
                </p>
              </Card>
            </Reveal>

            <div className="pt-4 text-center">
              <Link to="/du-an" className="btn-primary">
                <ArrowLeft className="h-4 w-4" /> Xem lại 6 dự án
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Card({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card-surface p-6 sm:p-7">
      <div className="mb-4 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600">
          <Icon className="h-5 w-5" />
        </span>
        <h2 className="font-display text-lg font-bold text-ink">{title}</h2>
      </div>
      {children}
    </div>
  );
}
