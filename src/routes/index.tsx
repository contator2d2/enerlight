import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, useEffect } from "react";
import { ArrowRight, ArrowUpRight, Menu, Phone, Mail, Globe, MapPin, Play, Calendar, Factory, MapPinned, Lightbulb, Fuel, Building2, ShoppingCart, Store, Trophy, Landmark } from "lucide-react";

import heroFacility from "@/assets/hero-facility.jpg";
import concessionarias from "@/assets/concessionarias.jpg";
import varejoImg from "@/assets/varejo.jpg";
import industrialImg from "@/assets/industrial.jpg";
import postosImg from "@/assets/postos.jpg";
import publicaImg from "@/assets/publica.jpg";
import heatmapImg from "@/assets/heatmap.jpg";
import fabricaImg from "@/assets/fabrica.jpg";
import cidadeNoite from "@/assets/cidade-noite.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function ModuleNumber({ n }: { n: string }) {
  return <span className="text-xs text-primary tracking-[0.3em] font-medium">{n}</span>;
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
      <section className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr]">
          <div className="px-6 lg:px-12 py-14 lg:py-24 flex flex-col justify-center gap-6 bg-background">
            <ModuleNumber n="02" />
            <h2 className="text-3xl lg:text-4xl font-black uppercase leading-tight">{featured.title}</h2>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">{featured.desc}</p>
            <div className="pt-2"><SaibaMais /></div>
          </div>
          <div className="relative h-[380px] lg:h-[560px]">
            <img key={featured.key} src={featured.img} alt={featured.title} loading="lazy" width={1600} height={700} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {rest.map((c, i) => (
          <div key={c.key} className="relative group h-[400px] lg:h-[440px] overflow-hidden">
            <img src={c.img} alt={c.title} loading="lazy" width={800} height={700} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/10" />
            <div className="relative h-full flex flex-col justify-between p-6 lg:p-8">
              <ModuleNumber n={String(i + 3).padStart(2, "0")} />
              <div className="space-y-4">
                <h3 className="text-xl lg:text-2xl font-black uppercase leading-tight whitespace-pre-line">{c.titleGrid}</h3>
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

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-6 flex items-center justify-between gap-6">
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                <span className="text-primary">e</span>nerlight
              </span>
              <span className="text-[0.55rem] tracking-[0.25em] text-muted-foreground uppercase">Soluções em iluminação</span>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-8 text-[0.7rem] tracking-[0.2em] uppercase font-medium">
            {["Soluções","Projetos","Produtos","Homologações","Universidade","Empresa","Contato"].map(i => (
              <a key={i} href="#" className="hover:text-primary transition">{i}</a>
            ))}
          </nav>
          <div className="flex items-center gap-4 shrink-0">
            <button className="hidden md:inline-flex items-center gap-3 bg-primary text-primary-foreground px-5 py-3 text-[0.7rem] font-semibold tracking-[0.2em] uppercase hover:bg-primary/90 transition">
              Solicitar Projeto <ArrowRight className="w-3 h-3" />
            </button>
            <button className="text-foreground"><Menu className="w-6 h-6" /></button>
          </div>
        </div>
      </header>

      {/* 01 — HERO */}
      <section className="relative min-h-screen flex items-center pt-28 pb-16">
        <div className="absolute inset-0">
          <img src={heroFacility} alt="Fábrica Enerlight iluminada à noite" className="w-full h-full object-cover" width={1600} height={900} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>
        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12 w-full grid grid-cols-[auto_1fr] gap-8">
          <div className="hidden lg:flex flex-col items-center gap-3 pt-4">
            <span className="text-xs text-primary tracking-[0.3em] font-medium">01</span>
            <div className="w-px h-32 bg-gradient-to-b from-primary to-transparent" />
            <div className="flex flex-col gap-2">
              {[0,1,2,3].map(i => <span key={i} className="w-1 h-1 rounded-full bg-muted-foreground/40" />)}
            </div>
          </div>
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] uppercase">
              Iluminamos<br />
              o que move<br />
              o <span className="text-primary">Brasil</span>
            </h1>
            <p className="mt-8 text-sm md:text-base text-muted-foreground max-w-md leading-relaxed">
              Soluções em iluminação para<br />operações que não podem parar.
            </p>
            <div className="mt-10">
              <YellowButton>Conhecer a Enerlight</YellowButton>
            </div>
          </div>
        </div>
      </section>

      {/* 02-06 — SEGMENTOS (ordem embaralhada a cada carregamento) */}
      <ShuffledSegments />
      

      {/* 07 — QUEM SOMOS */}
      <QuemSomos />


      {/* 08 — PROJETOS PERSONALIZADOS */}
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

      {/* 09 — MARCAS */}
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

      {/* 10 — NOSSA FÁBRICA */}
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

      {/* 11 — LINHAS DE SOLUÇÕES */}
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

      {/* CTA FINAL */}
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

      {/* FOOTER */}
      <footer className="px-6 lg:px-12 py-10 border-t border-border">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 items-start">
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              <span className="text-primary">e</span>nerlight
            </span>
            <span className="text-[0.55rem] tracking-[0.25em] text-muted-foreground uppercase">Soluções em iluminação</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs text-muted-foreground">
            <div className="flex items-start gap-3"><Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>17 99779-7102</span></div>
            <div className="flex items-start gap-3"><Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>gecom02@enerlight.com.br</span></div>
            <div className="flex items-start gap-3"><Globe className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>www.enerlight.com.br</span></div>
            <div className="flex items-start gap-3"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>Av. Joaquim Gomes Camacho, 185<br />São José do Rio Preto - SP</span></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
