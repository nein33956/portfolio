import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Target,
  ListChecks,
  Paperclip,
  Bot,
  Lightbulb,
  Wrench,
  ImageOff,
} from "lucide-react";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";
import { getIcon } from "../lib/icons";

export default function ProjectDetail() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  const p = projects[index];

  if (!p) {
    return (
      <section className="container-x pt-40 pb-20 text-center">
        <h1 className="font-display text-3xl font-extrabold text-ink">Không tìm thấy dự án</h1>
        <Link to="/du-an" className="btn-primary mt-6 inline-flex">
          <ArrowLeft className="h-4 w-4" /> Về trang Dự án
        </Link>
      </section>
    );
  }

  const Icon = getIcon(p.icon);
  const prev = projects[index - 1];
  const next = projects[index + 1];

  return (
    <>
      {/* Hero */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${p.gradient} pt-32 pb-16 text-white sm:pt-40`}>
        <div className="absolute inset-0 bg-grid-faint opacity-20" style={{ backgroundSize: "40px 40px" }} />
        <div className="absolute -bottom-24 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-[50%] bg-white/10 blur-2xl" />
        <div className="container-x relative">
          <div className="mb-6 flex items-center gap-2 text-sm text-white/80">
            <Link to="/" className="hover:text-white">Trang chủ</Link>
            <span>/</span>
            <Link to="/du-an" className="hover:text-white">Dự án</Link>
            <span>/</span>
            <span className="text-white">{p.task}</span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5 sm:flex-row sm:items-center"
          >
            <div className="grid h-20 w-20 flex-none place-items-center rounded-3xl bg-white/15 backdrop-blur">
              <Icon className="h-10 w-10" />
            </div>
            <div>
              <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                Dự án {String(p.id).padStart(2, "0")} · {p.task}
              </span>
              <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-5xl">
                {p.title}
              </h1>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16">
        <div className="container-x">
          <div className="mx-auto max-w-3xl space-y-6">
            {/* Mục tiêu */}
            <Reveal>
              <Block icon={Target} title="Mục tiêu của dự án" accent={p.gradient}>
                <p className="text-ink-soft">{p.objective}</p>
              </Block>
            </Reveal>

            {/* Quá trình */}
            <Reveal>
              <Block icon={ListChecks} title="Tóm tắt quá trình thực hiện" accent={p.gradient}>
                <ol className="space-y-3">
                  {p.steps.map((s, i) => (
                    <li key={i} className="flex gap-3">
                      <span className={`grid h-7 w-7 flex-none place-items-center rounded-full bg-gradient-to-br ${p.gradient} text-xs font-bold text-white`}>
                        {i + 1}
                      </span>
                      <span className="pt-0.5 text-ink-soft">{s}</span>
                    </li>
                  ))}
                </ol>
              </Block>
            </Reveal>

            {/* Công cụ */}
            <Reveal>
              <Block icon={Wrench} title="Công cụ đã sử dụng" accent={p.gradient}>
                <div className="flex flex-wrap gap-2">
                  {p.tools.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </Block>
            </Reveal>

            {/* Sản phẩm */}
            <Reveal>
              <Block icon={Paperclip} title="Sản phẩm đính kèm" accent={p.gradient}>
                <div className="rounded-2xl border-2 border-dashed border-brand-300 bg-brand-50/60 p-5">
                  <div className="flex items-center gap-3 text-brand-700">
                    <ImageOff className="h-5 w-5 flex-none" />
                    <p className="text-sm">
                      <b>Gợi ý:</b> {p.product}
                    </p>
                  </div>
                  <p className="mt-3 text-xs text-ink-muted">
                    Đặt ảnh vào <code className="rounded bg-white px-1.5 py-0.5 text-brand-700">public/img/</code> và file vào{" "}
                    <code className="rounded bg-white px-1.5 py-0.5 text-brand-700">public/files/</code>, rồi gửi tôi tên file để gắn link / hiển thị ảnh.
                  </p>
                </div>
                <a href="#" onClick={(e) => e.preventDefault()} className="btn-outline mt-4">
                  <Paperclip className="h-4 w-4" /> [Link sản phẩm — chưa gắn]
                </a>
              </Block>
            </Reveal>

            {/* Trích nguồn AI */}
            <Reveal>
              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex items-center gap-2.5 text-amber-700">
                  <Bot className="h-5 w-5" />
                  <h2 className="font-display text-lg font-bold">Trích nguồn & công cụ AI — Liêm chính học thuật</h2>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-amber-900">{p.aiNote}</p>
              </div>
            </Reveal>

            {/* Bài học */}
            <Reveal>
              <Block icon={Lightbulb} title="Bài học rút ra" accent={p.gradient}>
                <p className="text-ink-soft">{p.lesson}</p>
              </Block>
            </Reveal>
          </div>

          {/* Pager */}
          <div className="mx-auto mt-12 flex max-w-3xl items-center justify-between gap-4">
            {prev ? (
              <Link to={`/du-an/${prev.slug}`} className="btn-outline">
                <ArrowLeft className="h-4 w-4" /> {prev.task}
              </Link>
            ) : (
              <Link to="/du-an" className="btn-outline">
                <ArrowLeft className="h-4 w-4" /> Tất cả dự án
              </Link>
            )}
            {next ? (
              <Link to={`/du-an/${next.slug}`} className="btn-primary">
                {next.task} <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <Link to="/tong-ket" className="btn-primary">
                Tổng kết <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Block({
  icon: Icon,
  title,
  accent,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card-surface p-6 sm:p-7">
      <div className="mb-4 flex items-center gap-3">
        <span className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${accent} text-white`}>
          <Icon className="h-5 w-5" />
        </span>
        <h2 className="font-display text-lg font-bold text-ink">{title}</h2>
      </div>
      {children}
    </div>
  );
}
