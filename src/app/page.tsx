import ProjectCard from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Server,
  Globe,
  Twitter,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DeveloperLanding() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-sm border-b border-slate-800 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="#" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold">zesanches.dev</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link
              href="#about"
              className="hover:text-blue-400 transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="#skills"
              className="hover:text-blue-400 transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="hover:text-blue-400 transition-colors"
            >
              Projetos
            </Link>
            <Link
              href="#education"
              className="hover:text-blue-400 transition-colors"
            >
              Formação
            </Link>
            <Link
              href="#contact"
              className="hover:text-blue-400 transition-colors"
            >
              Contato
            </Link>
          </nav>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/professional-developer-avatar.jpeg"
              alt="Developer Avatar"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-6 border-4 border-blue-500"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Olá, sou
            <br />
            José Manoel Sanches Malassise
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Desenvolvedor Front-end. Especializado em desenvolvimento web
            moderno com mais de 4 anos de experiência criando soluções
            inovadoras, escaláveis e performáticas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="https://github.com/zesanches" target="_blank">
                <ExternalLink className="mr-2 h-5 w-5" />
                Ver Projetos
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600"
              asChild
            >
              <Link href="mailto:josemanoelmalassise@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Entre em Contato
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Sobre Mim</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center justify-center">
            <div>
              <p className="text-lg text-slate-300 mb-6">
                Comecei na programação quando estava no ensino médio, onde
                participei do projeto de robótica que tínhamos no colégio, onde
                competi e aprendi a programar em Java (Android Studio) e a
                utilizar física e mecânica em conjunto. Finalizando essa etapa
                sendo campeão estadual e finalista nacional na FTC (First Tech
                Challenge).
              </p>
              <p className="text-lg text-slate-300 mb-6">
                Após o período do Ensino Médio participei da competição Inova
                SENAI no qual fui finalista desenvolvendo um projeto de
                Marketplace para jogos, contas e itens de jogos chamado
                Tradetool, nesse período comecei o desenvolvimento web e conheci
                tecnologias como HTML, CSS, Javascript e React.
              </p>
              <p className="text-lg text-slate-300 mb-6">
                Após finalizada a competição Inova SENAI, comecei a estudar
                programação web e desenvolvimento de aplicativos mobile.
                Entrando assim no curso de Análise e Desenvolvimento de Sistemas
                e no primeiro mês já consegui meu primeiro estágio. Finalizei o
                curso realizando diversos projetos práticos realizados e
                entregues e desde então sigo na área sempre buscando
                aprimoramento dos meus conhecimentos.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-600"
                  asChild
                >
                  <Link href="https://github.com/zesanches" target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-600"
                  asChild
                >
                  <Link
                    href="https://www.linkedin.com/in/jos%C3%A9-malassise-353380227/"
                    target="_blank"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-600"
                  asChild
                >
                  <Link href="https://x.com/zesanchesdev" target="_blank">
                    <Twitter className="mr-2 h-4 w-4" />
                    Twitter
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/developer-working.jpg"
                alt="Developer at work"
                width={400}
                height={400}
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl text-zinc-100 font-bold text-center mb-12">
            Principais Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Globe className="h-6 w-6 text-blue-500" />
                  <CardTitle className="text-zinc-200">Frontend</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">HTML</Badge>
                  <Badge variant="secondary">CSS</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Material-UI</Badge>
                  <Badge variant="secondary">Redux</Badge>
                  <Badge variant="secondary">Better Auth</Badge>
                  <Badge variant="secondary">Next Auth</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Server className="h-6 w-6 text-green-500" />
                  <CardTitle className="text-zinc-200">Backend</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Nest.js</Badge>
                  <Badge variant="secondary">Adonis.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Prisma</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">MySQL</Badge>
                  <Badge variant="secondary">REST APIs</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Wrench className="h-6 w-6 text-purple-500" />
                  <CardTitle className="text-zinc-200">Ferramentas</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">Vercel</Badge>
                  <Badge variant="secondary">Figma</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">Vite</Badge>
                  <Badge variant="secondary">Stripe</Badge>
                  <Badge variant="secondary">Polar</Badge>
                  <Badge variant="secondary">Supabase</Badge>
                  <Badge variant="secondary">Neon</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Projetos em Destaque
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              imageProps={{
                src: "/resume-snap.png",
                alt: "Resume Snap Project",
                width: 500,
                height: 200,
              }}
              title="Resume Snap"
              description="Plataforma de criação de currículos e conversão para PDF com Next.js, Prisma e Stripe."
              skills={[
                "Next.js",
                "Tailwind CSS",
                "Prisma",
                "Stripe",
                "PostgreSQL",
                "Neon",
                "Better Auth",
              ]}
              codeLink="https://github.com/zesanches/resume-snap"
              demoLink="https://resume-snap-app.vercel.app/"
            />

            <ProjectCard
              imageProps={{
                src: "/react-chatbot_image.png",
                alt: "React Chatbot Project (Imagem gerada por IA)",
                width: 500,
                height: 200,
              }}
              title="React Chatbot (Imagem gerada por IA)"
              description="Um componente que será exportado em forma de biblioteca para a comunidade usar. Será um chatbot que poderá compreender o contexto do site em que está sendo aplicado e assim podendo atender dúvidas de clientes e usuários."
              skills={[
                "React",
                "TypeScript",
                "API Prompt",
                "OpenAI",
                "LLMs Context",
              ]}
              codeLink="https://github.com/zesanches/react-chatbot"
              demoLink="https://react-chatbot-app.vercel.app/"
            />

            <ProjectCard
              imageProps={{
                src: "/ad-copy-helper.png",
                alt: "Ad Copy Helper (WIP)",
                width: 500,
                height: 200,
              }}
              title="Ad Copy Helper (WIP)"
              description="Plataforma que utiliza Inteligência Artificial para gerar textos de anúncios otimizados para diferentes plataformas de mídia, como Facebook Ads, Instagram Ads, Google Ads, entre outros. A plataforma também oferece recursos de análise de dados e insights para ajudar os usuários a tomar decisões mais informadas."
              skills={[
                "Next.js",
                "Tailwind CSS",
                "Prisma",
                "Stripe",
                "PostgreSQL",
                "Neon",
                "Better Auth",
                "OpenAI",
              ]}
              codeLink="https://github.com/zesanches/adcopy-helper"
              demoLink="https://adcopy-helper.vercel.app/"
            />
          </div>
        </div>
      </section>

      <section id="education" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Formação & Cursos
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Formação Acadêmica
              </h3>
              <Card className="bg-slate-800 border-slate-700 mb-4">
                <CardHeader>
                  <CardTitle className="text-zinc-100">
                    Análise e Desenvolvimento de Sistemas
                  </CardTitle>
                  <CardDescription className="text-zinc-300">
                    Universidade Positivo • 2022 - 2024
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-200">
                    Formação sólida em estruturas de dados, lógica de
                    programação, desenvolvimento de sistemas. Diversos projetos
                    práticos desenvolvidos previamente à conclusão do curso,
                    incluindo aplicativo para gerenciamento de salas de cinema e
                    venda de ingressos e um sistema de gerenciamento de alunos
                    para um colégio.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Cursos & Certificações
              </h3>
              <div className="space-y-4">
                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-lg text-zinc-100">
                      Fundamentos do Next.js
                    </CardTitle>
                    <CardDescription>Rocketseat • 2025</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-lg text-zinc-100">
                      React Completo
                    </CardTitle>
                    <CardDescription>Origamid • 2024</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-lg text-zinc-100">
                      Fundamento do React Native
                    </CardTitle>
                    <CardDescription>Rocketseat • 2025</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Vamos Trabalhar Juntos?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e projetos interessantes.
            Entre em contato e vamos conversar!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="mailto:josemanoelmalassise@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                josemanoelmalassise@gmail.com
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600"
              asChild
            >
              <Link
                href="https://www.linkedin.com/in/jos%C3%A9-malassise-353380227/"
                target="_blank"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600"
              asChild
            >
              <Link href="https://github.com/zesanches" target="_blank">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="container mx-auto text-center text-slate-400">
          <p>&copy; 2025 zesanches.dev. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
