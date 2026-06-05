import { Link } from "react-router-dom";
import { ArrowRight, FolderKanban } from "lucide-react";
import Aurora from "../components/Aurora";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";
import { getIcon } from "../lib/icons";

export default function Projects() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden pt-32 pb-14 sm:pt-40">
        <Aurora />
        <div className="container-x">
          <Reveal>
            <span className="chip"><FolderKanban className="h-3.5 w-3.5" /> Trang Dự án</span>
            <h1 className="mt-5 font-display text-4xl font-extrabold text-ink sm:text-5xl">
              Tập hợp <span className="gradient-text">6 dự án</span> đã hoàn thành
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-ink-muted">
              Mỗi dự án trình bày đầy đủ: mục tiêu, tóm tắt quá trình thực hiện, sản phẩm
              đính kèm và phần trích nguồn AI minh bạch. Nhấn vào thẻ để xem chi tiết.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-12">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => {
              const Icon = getIcon(p.icon);
              return (
                <Reveal key={p.id} delay={(i % 3) * 0.1}>
                  <Link
                    to={`/du-an/${p.slug}`}
                    className="card-surface group relative flex h-full flex-col overflow-hidden p-6 transition-all hover:-translate-y-1.5 hover:shadow-glow"
                  >
                    <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${p.gradient} opacity-10 blur-2xl transition-opacity group-hover:opacity-25`} />
                    <div className="flex items-center justify-between">
                      <div className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${p.gradient} text-white shadow-soft`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="font-display text-4xl font-extrabold text-slate-100">
                        {String(p.id).padStart(2, "0")}
                      </span>
                    </div>
                    <span className="mt-4 text-xs font-bold uppercase tracking-wider text-brand-600">
                      {p.task}
                    </span>
                    <h3 className="mt-1 font-display text-lg font-bold text-ink">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{p.short}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tools.slice(0, 2).map((t) => (
                        <span key={t} className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-ink-soft">
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 transition-all group-hover:gap-2.5">
                      Xem chi tiết <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
