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
              Trải nghiệm, kiến thức và những điều tâm đắc sau khi hoàn thành 6 dự án năng lực số.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-12">
        <div className="container-x">
          <div className="mx-auto max-w-3xl space-y-6">
            <Reveal>
              <Card icon={Sprout} title="Trải nghiệm & cảm nhận cá nhân">
                <p className="rounded-2xl border-2 border-dashed border-brand-300 bg-brand-50/60 p-4 text-sm text-brand-800">
                  <b>[ĐIỀN]</b> — Chia sẻ cảm nhận về quá trình thực hiện Portfolio: điều gì
                  thú vị, điều gì khó, bạn đã tiến bộ ra sao về năng lực số.
                </p>
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
                <p className="rounded-2xl border-2 border-dashed border-brand-300 bg-brand-50/60 p-4 text-sm text-brand-800">
                  <b>[ĐIỀN]</b> — Điểm bạn tâm đắc nhất và (các) thách thức đã vượt qua khi
                  xây dựng Portfolio này.
                </p>
              </Card>
            </Reveal>

            <Reveal>
              <Card icon={BarChart3} title="Tự đánh giá bản thân">
                <p className="rounded-2xl border-2 border-dashed border-brand-300 bg-brand-50/60 p-4 text-sm text-brand-800">
                  <b>[ĐIỀN]</b> — Tự đánh giá mức độ đạt được theo từng năng lực số (tốt / khá /
                  cần cải thiện) và định hướng rèn luyện tiếp theo.
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
