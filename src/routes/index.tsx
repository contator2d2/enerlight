import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, useEffect } from "react";
import { ArrowRight, ArrowUpRight, Menu, X, Phone, Mail, Globe, MapPin, Play, Calendar, Factory, MapPinned, Lightbulb, Fuel, Building2, ShoppingCart, Store, Trophy, Landmark, Instagram, MessageCircle } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";


import heroFacility from "@/assets/hero-facility.jpg";
const enerlightLogo = { url: "/enerlight-logo.png" };
import concessionarias from "@/assets/concessionarias.jpg";
import varejoImg from "@/assets/varejo.jpg";
import industrialImg from "@/assets/industrial.jpg";
import postosImg from "@/assets/postos.jpg";
import publicaImg from "@/assets/publica.jpg";
import heatmapImg from "@/assets/heatmap.jpg";
import fabricaImg from "@/assets/fabrica.jpg";
import cidadeNoite from "@/assets/cidade-noite.jpg";

/*!
 * Enerlight — site institucional
 * design by Thiago Nicodemos - R2D2
 */
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Enerlight — Iluminação LED de alta performance para o Brasil" },
      { name: "description", content: "Enerlight: soluções em iluminação LED para concessionárias, varejo, indústria, postos de combustível e iluminação pública. Projetos luminotécnicos, eficiência energética e alta durabilidade." },
      { name: "keywords", content: "iluminação LED, luminárias industriais, iluminação pública, iluminação para postos, iluminação para varejo, projeto luminotécnico, eficiência energética, Enerlight" },
      { name: "author", content: "Thiago Nicodemos - R2D2" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "googlebot", content: "index, follow" },
      { name: "theme-color", content: "#0a0a0a" },
      { property: "og:title", content: "Enerlight — Iluminação LED de alta performance" },
      { property: "og:description", content: "Soluções LED para concessionárias, varejo, indústria, postos e iluminação pública." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://enerlight.lovable.app/" },
      { property: "og:site_name", content: "Enerlight" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:image", content: "https://enerlight.lovable.app/enerlight-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Enerlight — Iluminação LED de alta performance" },
      { name: "twitter:description", content: "Soluções LED para concessionárias, varejo, indústria, postos e iluminação pública." },
      { name: "twitter:image", content: "https://enerlight.lovable.app/enerlight-logo.png" },
    ],
    links: [
      { rel: "canonical", href: "https://enerlight.lovable.app/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Enerlight",
          url: "https://enerlight.lovable.app/",
          logo: "https://enerlight.lovable.app/enerlight-logo.png",
          description: "Fabricante brasileira de soluções em iluminação LED de alta performance.",
          contactPoint: {
            "@type": "ContactPoint",
            email: "sac@enerlight.com.br",
            contactType: "customer service",
            areaServed: "BR",
            availableLanguage: ["Portuguese"],
          },
          sameAs: [],
        }),
      },
    ],
  }),
  component: Index,
});

function ModuleNumber(_: { n: string }) {
  return null;
}

function YellowButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="group inline-flex items-center gap-6 bg-primary text-primary-foreground px-6 py-3 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-primary/90 transition">
      {children}
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
    </button>
  );
}

function SaibaMais() {
  return (
    <a href="#" className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-foreground border-b border-primary/40 pb-1 hover:text-primary transition">
      Saiba mais <ArrowRight className="w-3 h-3" />
    </a>
  );
}

const SEGMENTS = [
  { key: "concessionarias", title: "Concessionárias", titleGrid: "Concessio-\nnárias", desc: "Projetos luminotécnicos para experiências que valorizam veículos e marcas.", img: concessionarias },
  { key: "varejo", title: "Varejo e Franquias", titleGrid: "Varejo\ne Franquias", desc: "Luz que valoriza produtos e melhora a experiência de compra.", img: varejoImg },
  { key: "industrial", title: "Industrial e Logística", titleGrid: "Industrial\ne Logística", desc: "Projetado para produtividade contínua.", img: industrialImg },
  { key: "postos", title: "Postos de Combustível", titleGrid: "Postos de\nCombustível", desc: "Soluções completas para segurança, eficiência e percepção de valor.", img: postosImg },
  { key: "publica", title: "Iluminação Pública", titleGrid: "Iluminação\nPública", desc: "Mais segurança, economia e qualidade de vida para cidades.", img: publicaImg },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function ShuffledSegments() {
  // Ordem determinística no SSR; embaralha após hidratação para evitar mismatch.
  const [order, setOrder] = useState<typeof SEGMENTS>(SEGMENTS);
  useEffect(() => { setOrder(shuffle(SEGMENTS)); }, []);
  const [featured, ...rest] = order;

  return (
    <>
      {/* Mobile: grid unificado com todos os 5 itens iguais */}
      <section className="lg:hidden grid grid-cols-1 md:grid-cols-2">
        {order.map((c, i) => (
          <div key={c.key} className="relative group h-[400px] overflow-hidden">
            <img src={c.img} alt={c.title} loading="lazy" width={800} height={700} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/10" />
            <div className="relative h-full flex flex-col justify-between p-6">
              <ModuleNumber n={String(i + 2).padStart(2, "0")} />
              <div className="space-y-4">
                <h3 className="text-xl font-black uppercase leading-tight whitespace-pre-line">{c.titleGrid}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-[240px]">{c.desc}</p>
                <SaibaMais />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Desktop: banner destaque + grid de 4 */}
      <section className="relative hidden lg:block">
        <div className="grid grid-cols-[380px_1fr]">
          <div className="px-12 py-24 flex flex-col justify-center gap-6 bg-background">
            <ModuleNumber n="02" />
            <h2 className="text-4xl font-black uppercase leading-tight">{featured.title}</h2>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">{featured.desc}</p>
            <div className="pt-2"><SaibaMais /></div>
          </div>
          <div className="relative h-[560px]">
            <img key={featured.key} src={featured.img} alt={featured.title} loading="lazy" width={1600} height={700} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
      <section className="hidden lg:grid grid-cols-4">
        {rest.map((c, i) => (
          <div key={c.key} className="relative group h-[440px] overflow-hidden">
            <img src={c.img} alt={c.title} loading="lazy" width={800} height={700} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/10" />
            <div className="relative h-full flex flex-col justify-between p-8">
              <ModuleNumber n={String(i + 3).padStart(2, "0")} />
              <div className="space-y-4">
                <h3 className="text-2xl font-black uppercase leading-tight whitespace-pre-line">{c.titleGrid}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-[240px]">{c.desc}</p>
                <SaibaMais />
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

function QuemSomos() {
  const [visible, setVisible] = useState(false);
  const containerRef = (node: HTMLElement | null) => {
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    obs.observe(node);
  };

  const stats = [
    { icon: Calendar, big: "+15", label: "ANOS", desc: "de experiência no mercado de iluminação" },
    { icon: Factory, big: "+1.000", label: "PROJETOS", desc: "entregues em todo o território nacional" },
    { icon: MapPinned, big: "ATUAÇÃO", label: "NACIONAL", desc: "presença em todos os estados" },
    { icon: Lightbulb, big: "TECNOLOGIA", label: "LED", desc: "soluções eficientes, duráveis e sustentáveis" },
  ];

  const cls = (from: "left" | "up") => {
    const hidden = from === "left" ? "opacity-0 -translate-x-8" : "opacity-0 translate-y-8";
    const shown = "opacity-100 translate-x-0 translate-y-0";
    return `transition-all duration-700 ease-out ${visible ? shown : hidden}`;
  };
  const delay = (ms: number) => ({ transitionDelay: visible ? `${ms}ms` : "0ms" });

  return (
    <section ref={containerRef as never} className="py-20 lg:py-28 px-6 lg:px-12">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16">
        <div className="space-y-6">
          <div className={cls("left")} style={delay(0)}><ModuleNumber n="07" /></div>
          <p className={`text-[0.7rem] tracking-[0.25em] uppercase text-muted-foreground ${cls("left")}`} style={delay(80)}>Quem somos</p>
          <h2 className={`text-4xl lg:text-5xl font-black uppercase leading-[1] ${cls("left")}`} style={delay(160)}>
            Especialistas<br />em Soluções<br />de <span className="text-primary">Iluminação</span>
          </h2>
          <p className={`text-sm text-muted-foreground max-w-md leading-relaxed ${cls("left")}`} style={delay(260)}>
            Unimos tecnologia, engenharia e atendimento consultivo para entregar alta performance,
            eficiência e confiabilidade em cada projeto.
          </p>
          <div className={`pt-4 ${cls("left")}`} style={delay(360)}>
            <YellowButton>Conhecer a Enerlight</YellowButton>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 lg:pt-4">
          {stats.map((s, i) => (
            <div
              key={i}
              style={delay(200 + i * 140)}
              className={`flex flex-col items-center text-center gap-3 ${cls("up")}`}
            >
              <div className="w-12 h-12 flex items-center justify-center text-primary">
                <s.icon className="w-9 h-9" strokeWidth={1.2} />
              </div>
              <div className="text-2xl lg:text-[1.75rem] font-black uppercase leading-tight">{s.big}</div>
              <div className="text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground -mt-2">{s.label}</div>
              <p className="text-[0.7rem] text-muted-foreground/80 leading-relaxed max-w-[140px]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const HERO_SLIDES = [
  {
    img: heroFacility,
    kicker: "Iluminação industrial",
    title: ["Iluminamos", "o que move", "o "],
    highlight: "Brasil",
    desc: "Soluções em iluminação para operações que não podem parar.",
  },
  {
    img: fabricaImg,
    kicker: "Tecnologia LED",
    title: ["Alta performance", "para ambientes", "de "],
    highlight: "produção",
    desc: "Projetos luminotécnicos desenvolvidos para produtividade contínua.",
  },
  {
    img: cidadeNoite,
    kicker: "Iluminação pública",
    title: ["Cidades mais", "seguras e", "mais "],
    highlight: "eficientes",
    desc: "Mais economia, segurança e qualidade de vida para as pessoas.",
  },
];

function HeroSlider() {
  const [idx, setIdx] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const total = HERO_SLIDES.length;

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % total), 6000);
    return () => clearInterval(t);
  }, [total]);

  const current = HERO_SLIDES[idx];

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-4 lg:py-6 flex items-center justify-between gap-4">
          <div className="flex items-center shrink-0 min-w-0">
            <img src={enerlightLogo.url} alt="Enerlight" width={180} height={48} className="h-8 sm:h-10 lg:h-12 w-auto" />
          </div>
          <nav className="hidden lg:flex items-center gap-8 text-[0.7rem] tracking-[0.2em] uppercase font-medium">
            {["Soluções","Projetos","Produtos","Homologações","Universidade","Empresa","Contato"].map(i => (
              <a key={i} href="#" className="hover:text-primary transition">{i}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3 shrink-0">
            <button className="hidden md:inline-flex items-center gap-3 bg-primary text-primary-foreground px-5 py-3 text-[0.7rem] font-semibold tracking-[0.2em] uppercase hover:bg-primary/90 transition">
              Solicitar Projeto <ArrowRight className="w-3 h-3" />
            </button>
            <button
              className="lg:hidden text-foreground p-2 -mr-2"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              onClick={() => setMenuOpen(v => !v)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur border-t border-border animate-fade-in">
            <nav className="px-6 py-6 flex flex-col gap-4 text-xs tracking-[0.2em] uppercase font-medium">
              {["Soluções","Projetos","Produtos","Homologações","Universidade","Empresa","Contato"].map(i => (
                <a key={i} href="#" className="py-1 hover:text-primary transition" onClick={() => setMenuOpen(false)}>{i}</a>
              ))}
              <button className="mt-2 inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-5 py-3 text-[0.7rem] font-semibold tracking-[0.2em] uppercase">
                Solicitar Projeto <ArrowRight className="w-3 h-3" />
              </button>
            </nav>
          </div>
        )}
      </header>

      <section className="relative min-h-[100svh] flex items-start lg:items-center pt-20 sm:pt-24 pb-16 overflow-hidden">
        {HERO_SLIDES.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === idx ? "opacity-100" : "opacity-0"}`}
            aria-hidden={i !== idx}
          >
            <img
              src={s.img}
              alt=""
              className={`w-full h-full object-cover transition-transform ease-out ${i === idx ? "scale-110 duration-[8000ms]" : "scale-100 duration-1000"}`}
              width={1600}
              height={900}
            />
            {/* Mobile: gradient de cima (escuro) para baixo (transparente) */}
            <div className="absolute inset-0 lg:hidden bg-gradient-to-b from-background via-background/70 to-transparent" />
            {/* Desktop: gradient horizontal */}
            <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-background via-background/85 to-background/30" />
            <div className="absolute inset-0 hidden lg:block bg-gradient-to-t from-background via-transparent to-background/50" />
          </div>
        ))}

        <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 w-full grid grid-cols-[auto_1fr] gap-4 sm:gap-8">
          <div className="flex flex-col items-center gap-3 pt-4">
            <span className="text-xs text-primary tracking-[0.3em] font-medium">01</span>
            <div className="w-px h-16 sm:h-24 lg:h-32 bg-gradient-to-b from-primary to-transparent" />
            <div className="flex flex-col gap-3 pt-2">
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Ir para slide ${i + 1}`}
                  className="group relative flex items-center justify-center h-4 w-4"
                >
                  <span
                    className={`block rounded-full transition-all duration-500 ${
                      i === idx ? "w-3 h-3 bg-primary" : "w-1.5 h-1.5 bg-muted-foreground/40 group-hover:bg-muted-foreground"
                    }`}
                  />
                  {i === idx && (
                    <span className="absolute inset-0 rounded-full border border-primary/50 animate-ping" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div key={idx} className="max-w-2xl animate-fade-in">
            <span className="inline-block text-[0.65rem] sm:text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4 sm:mb-6">
              {current.kicker}
            </span>
            <h1 className="text-6xl sm:text-7xl md:text-6xl lg:text-7xl font-black leading-[0.9] uppercase">
              {current.title[0]}<br />
              {current.title[1]}<br />
              {current.title[2]}<span className="text-primary">{current.highlight}</span>
            </h1>
            <p className="mt-6 sm:mt-8 text-sm md:text-base text-muted-foreground max-w-md leading-relaxed">
              {current.desc}
            </p>
            <div className="mt-8 sm:mt-10">
              <YellowButton>Conhecer a Enerlight</YellowButton>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}





function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* 01 — HERO + NAV */}
      <HeroSlider />


      {/* 02-06 — SEGMENTOS (ordem embaralhada a cada carregamento) */}
      <Reveal><ShuffledSegments /></Reveal>
      

      {/* 07 — QUEM SOMOS */}
      <QuemSomos />


      {/* 08 — PROJETOS PERSONALIZADOS */}
      <Reveal>
      <section className="px-6 lg:px-12 pb-20">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 items-center">
          <div className="space-y-6">
            <ModuleNumber n="08" />
            <h2 className="text-3xl lg:text-4xl font-black uppercase leading-tight">
              Projetos<br />Personalizados
            </h2>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Desenvolvemos projetos luminotécnicos com simulações precisas para garantir o melhor
              resultado para cada ambiente.
            </p>
            <div className="pt-2"><YellowButton>Saiba mais</YellowButton></div>
          </div>
          <div className="relative">
            <img src={heatmapImg} alt="Simulação luminotécnica" loading="lazy" width={1400} height={700} className="w-full h-auto object-contain" />
          </div>
        </div>
      </section>
      </Reveal>

      {/* 09 — MARCAS */}
      <Reveal>
      <section className="border-y border-border py-14 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex items-center gap-4 shrink-0">
            <ModuleNumber n="09" />
            <span className="text-[0.7rem] tracking-[0.25em] uppercase text-muted-foreground">Marcas que confiam</span>
          </div>
          <div className="flex-1 grid grid-cols-3 md:grid-cols-6 gap-6 lg:gap-10 items-center">
            {["SHELL","raízen","JBS","SAM'S CLUB","PETROBRAS","ASSAÍ"].map(b => (
              <div key={b} className="text-center text-muted-foreground/70 font-bold text-sm tracking-wider hover:text-foreground transition">
                {b}
              </div>
            ))}
          </div>
          <button className="hidden lg:inline-flex w-10 h-10 items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition shrink-0">
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
      </Reveal>

      {/* 10 — NOSSA FÁBRICA */}
      <Reveal>
      <section className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr]">
          <div className="px-6 lg:px-12 py-14 lg:py-24 flex flex-col justify-center gap-6">
            <ModuleNumber n="10" />
            <p className="text-[0.7rem] tracking-[0.25em] uppercase text-muted-foreground">Nossa fábrica</p>
            <h2 className="text-3xl lg:text-4xl font-black uppercase leading-tight">
              Desenvolvido<br />no Brasil para<br /><span className="text-primary">Aplicações reais.</span>
            </h2>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Estrutura própria, tecnologia de ponta e rigorosos testes de qualidade para entregar
              o melhor em cada detalhe.
            </p>
            <div className="pt-2"><YellowButton>Conhecer a fábrica</YellowButton></div>
          </div>
          <div className="relative h-[400px] lg:h-[560px] group cursor-pointer">
            <img src={fabricaImg} alt="Fábrica Enerlight" loading="lazy" width={1400} height={700} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-background/40 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border-2 border-primary/70 flex items-center justify-center group-hover:scale-110 transition bg-background/20 backdrop-blur">
                <Play className="w-8 h-8 text-primary fill-primary ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>
      </Reveal>

      {/* 11 — LINHAS DE SOLUÇÕES */}
      <Reveal>
      <section className="py-16 px-6 lg:px-12 border-t border-border">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <ModuleNumber n="11" />
            <span className="text-[0.7rem] tracking-[0.25em] uppercase text-muted-foreground">Nossas linhas de soluções</span>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 lg:gap-2">
            {[
              { icon: Lightbulb, label: "Pública" },
              { icon: Fuel, label: "Postos" },
              { icon: Factory, label: "Industrial" },
              { icon: ShoppingCart, label: "Varejo" },
              { icon: Building2, label: "Comercial" },
              { icon: Trophy, label: "Esportiva" },
              { icon: Landmark, label: "Fachadas" },
            ].map((s, i, arr) => (
              <div key={s.label} className={`flex flex-col items-center gap-4 py-6 ${i < arr.length - 1 ? "lg:border-r lg:border-border" : ""}`}>
                <s.icon className="w-10 h-10 text-primary" strokeWidth={1.3} />
                <span className="text-[0.7rem] tracking-[0.25em] uppercase text-muted-foreground font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      </Reveal>

      {/* CTA FINAL */}
      <Reveal>
      <section className="relative py-24 px-6 lg:px-12">
        <div className="absolute inset-0">
          <img src={cidadeNoite} alt="Cidade iluminada" loading="lazy" width={1800} height={512} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.05]">
            A luz certa <span className="text-primary">transforma</span><br />
            <span className="text-primary">ambientes. resultados. pessoas.</span>
          </h2>
          <div className="flex justify-center">
            <YellowButton>Solicitar projeto</YellowButton>
          </div>
        </div>
      </section>
      </Reveal>


      {/* FOOTER */}
      <footer className="px-6 lg:px-12 py-10 border-t border-border">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[220px_1fr_auto] gap-8 items-start text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start">
            <img src={enerlightLogo.url} alt="Enerlight" width={180} height={48} className="h-10 w-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs text-muted-foreground">
            <div className="flex items-start justify-center lg:justify-start gap-3"><Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>17 99779-7102</span></div>
            <div className="flex items-start justify-center lg:justify-start gap-3"><Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>sac@enerlight.com.br</span></div>
            <div className="flex items-start justify-center lg:justify-start gap-3"><Globe className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>www.enerlight.com.br</span></div>
            <div className="flex items-start justify-center lg:justify-start gap-3"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>Av. Joaquim Gomes Camacho, 185<br />São José do Rio Preto - SP</span></div>
          </div>
          <div className="flex flex-col gap-3 items-center lg:items-end">
            <span className="text-[0.65rem] tracking-[0.25em] uppercase text-muted-foreground/70">Redes sociais</span>
            <div className="flex items-center justify-center gap-3">
              <a
                href="https://wa.me/5517997797102"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/enerlight"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        {/* design by Thiago Nicodemos - R2D2 */}
      </footer>
    </div>
  );
}
