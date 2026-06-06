import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Target,
  Bot,
  Lightbulb,
  Wrench,
  CheckCircle2,
  FileText,
  Download,
  ClipboardList,
  Eye,
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
              <Block icon={Target} title="Mục tiêu của bài" accent={p.gradient}>
                <p className="text-ink-soft">{p.objective}</p>
              </Block>
            </Reveal>

            {/* Yêu cầu / các bước */}
            <Reveal>
              <Block icon={ClipboardList} title="Nội dung & các bước thực hiện theo yêu cầu" accent={p.gradient}>
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
                {p.requirementImg && (
                  <img
                    src={p.requirementImg}
                    alt="Ảnh yêu cầu đề bài"
                    className="mt-5 w-full rounded-2xl border border-slate-200"
                  />
                )}
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

            {/* Minh chứng đã nộp */}
            <Reveal>
              <Block icon={CheckCircle2} title="Minh chứng đã nộp bài" accent={p.gradient}>
                {p.submission ? (
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                        <CheckCircle2 className="h-3.5 w-3.5" /> {p.submission.status}
                      </span>
                      <span className="text-sm text-ink-muted">
                        Thời gian nộp: <b className="text-ink-soft">{p.submission.submittedAt}</b>
                      </span>
                    </div>

                    {/* Ảnh minh chứng đã nộp */}
                    {p.proofImg && (
                      <figure>
                        <img
                          src={p.proofImg}
                          alt="Ảnh minh chứng đã nộp bài"
                          className="w-full rounded-2xl border border-slate-200 shadow-soft"
                          onError={(e) => {
                            const fig = e.currentTarget.closest("figure");
                            if (fig) (fig as HTMLElement).style.display = "none";
                          }}
                        />
                        <figcaption className="mt-2 text-center text-xs text-ink-muted">
                          Ảnh chụp màn hình xác nhận đã nộp bài trên LMS
                        </figcaption>
                      </figure>
                    )}

                    {/* Tệp bài làm */}
                    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-blue-100 text-blue-600">
                        <FileText className="h-6 w-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-semibold text-ink">{p.submission.fileName}</p>
                        <p className="text-xs text-ink-muted">Tệp bài làm đã nộp trên hệ thống LMS</p>
                      </div>
                    </div>

                    {/* 2 nút: Xem & Tải */}
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={
                          p.submission.fileUrl.toLowerCase().endsWith(".pdf")
                            ? p.submission.fileUrl
                            : `https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(
                                p.submission.fileUrl
                              )}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        <Eye className="h-4 w-4" /> Xem bài làm
                      </a>
                      <a href={p.submission.fileUrl} download className="btn-outline">
                        <Download className="h-4 w-4" />{" "}
                        Tải về ({p.submission.fileUrl.toLowerCase().endsWith(".pdf") ? ".pdf" : ".docx"})
                      </a>
                    </div>

                    {/* Chi tiết nộp bài */}
                    <div className="grid gap-x-6 gap-y-2.5 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 text-sm sm:grid-cols-2">
                      <Detail label="Nền tảng" value="LMS VNU · lms.vnu.edu.vn" />
                      <Detail label="Học phần" value="AI và Công nghệ số ứng dụng" />
                      <Detail label="Định dạng nộp" value="Tệp Word (.docx)" />
                      <Detail label="Số lần nộp" value="Lần 1" />
                    </div>
                  </div>
                ) : (
                  <div className="rounded-2xl border-2 border-dashed border-brand-300 bg-brand-50/60 p-5 text-sm text-brand-800">
                    Chưa cập nhật minh chứng cho bài này.
                  </div>
                )}
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

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-2 last:border-0 sm:border-0 sm:pb-0">
      <span className="text-ink-muted">{label}</span>
      <span className="text-right font-semibold text-ink-soft">{value}</span>
    </div>
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
