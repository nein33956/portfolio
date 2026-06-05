import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Stethoscope,
  Target,
  Rocket,
  User,
  Sparkles,
  FolderKanban,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import Aurora from "../components/Aurora";
import Reveal from "../components/Reveal";
import { projects, SITE } from "../data/projects";
import { getIcon } from "../lib/icons";

const stats = [
  { big: "06", lbl: "Dự án thành phần" },
  { big: "06", lbl: "Năng lực số cốt lõi" },
  { big: "100%", lbl: "Trích nguồn minh bạch" },
  { big: "A+", lbl: "Mục tiêu chất lượng" },
];

const goals = [
  {
    icon: User,
    title: "Thông tin cá nhân",
    body: (
      <>
        <b>Họ tên:</b> {SITE.fullName}
        <br />
        <b>Ngành:</b> {SITE.major}
        <br />
        <b>Trường:</b> {SITE.school}
        <br />
        <b>Sở thích:</b> {SITE.hobbies}
      </>
    ),
  },
  {
    icon: Target,
    title: "Mục tiêu học tập",
    body: "Nắm vững năng lực số nền tảng phục vụ học tập & nghiên cứu y khoa: quản lý tài liệu khoa học, tra cứu thông tin đáng tin cậy, sử dụng AI hiệu quả và có đạo đức.",
  },
  {
    icon: Rocket,
    title: "Định hướng phát triển",
    body: "Trở thành người làm y khoa biết tận dụng công nghệ số: ứng dụng AI hỗ trợ học tập/chẩn đoán, đảm bảo an toàn dữ liệu bệnh nhân và liêm chính học thuật.",
  },
];

const portfolioGoals = [
  "Thể hiện các kỹ năng số đã học qua 6 dự án thực hành cụ thể.",
  "Lưu trữ sản phẩm cá nhân có hệ thống, dễ truy cập & chia sẻ.",
  "Ghi lại quá trình tự học và sự tiến bộ về năng lực số.",
  "Phản ánh tư duy học thuật: minh bạch nguồn, dùng AI có trách nhiệm.",
];

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
        <Aurora />
        <div
          className="absolute inset-0 -z-10 bg-grid-faint"
          style={{ backgroundSize: "44px 44px", maskImage: "radial-gradient(70% 60% at 50% 30%, black, transparent)" }}
        />
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="chip">
                  <Sparkles className="h-3.5 w-3.5" /> Portfolio cá nhân · Môn Năng lực số
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="mt-6 font-display text-4xl font-extrabold leading-[1.1] text-ink sm:text-6xl"
              >
                Xin chào, tôi là <br />
                <span className="gradient-text">{SITE.fullName}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.12 }}
                className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted"
              >
                Sinh viên <b className="text-ink-soft">{SITE.major}</b>. Đây là hành
                trình rèn luyện <b className="text-brand-700">năng lực số</b> của tôi —
                từ quản lý dữ liệu, khai thác thông tin học thuật, đến ứng dụng AI một
                cách có trách nhiệm trong học tập và ngành y.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.19 }}
                className="mt-9 flex flex-wrap gap-3"
              >
                <Link to="/du-an" className="btn-primary">
                  Khám phá 6 dự án <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/tong-ket" className="btn-outline">
                  Tổng kết hành trình
                </Link>
              </motion.div>
            </div>

            {/* Avatar card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative mx-auto"
            >
              <div className="relative">
                <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-brand-300/40 to-indigo-300/40 blur-2xl" />
                <div className="card-surface relative w-80 overflow-hidden rounded-[2rem] p-1.5">
                  <div className="rounded-[1.6rem] bg-gradient-to-br from-brand-500 via-brand-600 to-indigo-700 p-5 text-center text-white">
                    {/* Ảnh chân dung (public/img/hi.jpg) — khung chữ nhật */}
                    <img
                      src="/img/hi.jpg"
                      alt="Hoàng Thanh Trà"
                      className="mx-auto aspect-[4/5] w-full rounded-2xl object-cover shadow-lg ring-4 ring-white/30"
                    />
                    <p className="mt-5 font-display text-xl font-bold">{SITE.fullName}</p>
                    <p className="text-sm text-white/80">{SITE.major}</p>
                    <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-white/70">
                      <Stethoscope className="h-3.5 w-3.5" /> Future Doctor · Digital Native
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.lbl} className="card-surface px-5 py-6 text-center">
                <div className="font-display text-3xl font-extrabold gradient-text">
                  {s.big}
                </div>
                <div className="mt-1 text-sm text-ink-muted">{s.lbl}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== GIỚI THIỆU BẢN THÂN ===== */}
      <section className="py-20">
        <div className="container-x">
          <Reveal>
            <SectionHead
              kicker="Về tôi"
              title="Giới thiệu bản thân"
              desc="Đôi nét về tôi, mục tiêu học tập và định hướng phát triển cá nhân."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {goals.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.1}>
                <div className="card-surface group h-full p-7 transition-all hover:-translate-y-1.5 hover:shadow-glow">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <g.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink">{g.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{g.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MỤC TIÊU PORTFOLIO ===== */}
      <section className="py-20">
        <div className="container-x">
          <div className="card-surface relative overflow-hidden p-8 sm:p-12">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-100/70 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="chip"><Target className="h-3.5 w-3.5" /> Mục tiêu Portfolio</span>
                <h2 className="mt-4 font-display text-3xl font-extrabold text-ink">
                  Tại sao tôi xây dựng <span className="gradient-text">Portfolio</span> này?
                </h2>
                <p className="mt-4 text-ink-muted">
                  Portfolio là nơi tôi tổng hợp, hệ thống hóa kết quả học tập và thể hiện
                  sự trưởng thành về năng lực số trong suốt môn học.
                </p>
              </div>
              <ul className="space-y-3">
                {portfolioGoals.map((g, i) => (
                  <Reveal key={i} delay={i * 0.08}>
                    <li className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand-500" />
                      <span className="text-sm text-ink-soft">{g}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PREVIEW DỰ ÁN ===== */}
      <section className="py-20">
        <div className="container-x">
          <Reveal>
            <SectionHead
              kicker="Dự án nổi bật"
              title="6 năng lực · 6 dự án"
              desc="Mỗi dự án tương ứng một năng lực số cốt lõi đã được rèn luyện và minh chứng."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => {
              const Icon = getIcon(p.icon);
              return (
                <Reveal key={p.id} delay={(i % 3) * 0.1}>
                  <Link
                    to={`/du-an/${p.slug}`}
                    className="card-surface group flex h-full flex-col p-6 transition-all hover:-translate-y-1.5 hover:shadow-glow"
                  >
                    <div className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${p.gradient} text-white shadow-soft`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="mt-4 text-xs font-bold uppercase tracking-wider text-brand-600">
                      {p.task}
                    </span>
                    <h3 className="mt-1 font-display text-lg font-bold text-ink">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{p.short}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 transition-transform group-hover:gap-2.5">
                      Xem chi tiết <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link to="/du-an" className="btn-primary">
              <FolderKanban className="h-4 w-4" /> Xem tất cả dự án
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA liêm chính ===== */}
      <section className="pb-8 pt-4">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ink via-slate-900 to-brand-950 p-10 text-center text-white sm:p-14">
              <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(500px 200px at 50% 0%, rgba(34,211,238,0.35), transparent)" }} />
              <ShieldCheck className="relative mx-auto h-12 w-12 text-brand-300" />
              <h2 className="relative mt-4 font-display text-2xl font-extrabold sm:text-3xl">
                Cam kết liêm chính học thuật
              </h2>
              <p className="relative mx-auto mt-3 max-w-2xl text-slate-300">
                Toàn bộ Portfolio được thực hiện trung thực. Mọi nội dung tham khảo và
                công cụ AI đều được ghi nguồn rõ ràng ở từng dự án.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function SectionHead({ kicker, title, desc }: { kicker: string; title: string; desc: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">{kicker}</span>
      <h2 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">{title}</h2>
      <p className="mt-3 text-ink-muted">{desc}</p>
    </div>
  );
}
