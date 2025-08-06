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

      {/* Hero Section */}
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
            Olá, eu sou um
            <br />
            Desenvolvedor Full Stack
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Especializado em desenvolvimento web moderno com mais de 3 anos de
            experiência criando soluções inovadoras e escaláveis
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

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Sobre Mim</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center justify-center">
            <div>
              <p className="text-lg text-slate-300 mb-6">
                Sou um desenvolvedor apaixonado por tecnologia e inovação, com
                foco em criar experiências digitais excepcionais. Minha jornada
                começou há mais de 3 anos e desde então venho me especializando
                em tecnologias modernas de desenvolvimento web.
              </p>
              <p className="text-lg text-slate-300 mb-6">
                Tenho experiência sólida em desenvolvimento front-end e
                back-end, sempre buscando as melhores práticas e padrões de
                código. Adoro trabalhar em equipe e contribuir para projetos que
                fazem a diferença.
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

      {/* Skills Section */}
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
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Material-UI</Badge>
                  <Badge variant="secondary">Redux</Badge>
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
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Prisma</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
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
                  <Badge variant="secondary">Vite</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
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
              description="Plataforma de criação de currículos e conversão para PDF com Next.js, Prisma e Stripe"
              skills={[
                "Next.js",
                "Tailwind CSS",
                "Prisma",
                "Stripe",
                "PostgreSQL",
              ]}
              codeLink="https://github.com/zesanches/resume-snap"
              demoLink="https://resume-snap-app.vercel.app/"
            />

            <Card className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-colors">
              <CardHeader>
                <Image
                  src="/task-management-app.png"
                  alt="Task Manager Project"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <CardTitle>Task Manager</CardTitle>
                <CardDescription>
                  Aplicativo de gerenciamento de tarefas com Redux e Material-UI
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Redux</Badge>
                  <Badge variant="outline">Material-UI</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Github className="mr-2 h-4 w-4" />
                    Código
                  </Button>
                  <Button size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-colors">
              <CardHeader>
                <Image
                  src="/social-media-dashboard-analytics.png"
                  alt="Analytics Dashboard"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <CardTitle>Analytics Dashboard</CardTitle>
                <CardDescription>
                  Dashboard de analytics com gráficos interativos e real-time
                  data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Chart.js</Badge>
                  <Badge variant="outline">WebSocket</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Github className="mr-2 h-4 w-4" />
                    Código
                  </Button>
                  <Button size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
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
                  <CardTitle>Bacharelado em Ciência da Computação</CardTitle>
                  <CardDescription>
                    Universidade Federal • 2020 - 2024
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Formação sólida em algoritmos, estruturas de dados,
                    engenharia de software e desenvolvimento de sistemas.
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
                    <CardTitle className="text-lg">
                      Next.js Complete Course
                    </CardTitle>
                    <CardDescription>Vercel • 2023</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Advanced TypeScript
                    </CardTitle>
                    <CardDescription>TypeScript Academy • 2023</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Redux Toolkit Mastery
                    </CardTitle>
                    <CardDescription>Redux University • 2022</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Database Design with Prisma
                    </CardTitle>
                    <CardDescription>Prisma Academy • 2022</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Vamos Trabalhar Juntos?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e projetos interessantes.
            Entre em contato e vamos conversar!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Mail className="mr-2 h-5 w-5" />
              contato@developer.com
            </Button>
            <Button size="lg" variant="outline" className="border-slate-600">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button size="lg" variant="outline" className="border-slate-600">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="container mx-auto text-center text-slate-400">
          <p>&copy; 2025 DevPortfolio. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
