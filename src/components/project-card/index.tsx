import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type ProjectCardProps = {
  imageProps: ImageProps;
  title: string;
  description: string;
  skills: string[];
  codeLink: string;
  demoLink: string;
};

export default function ProjectCard({
  imageProps,
  title,
  description,
  skills,
  codeLink,
  demoLink,
}: ProjectCardProps) {
  return (
    <Card className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-colors">
      <CardHeader>
        <Image
          src={imageProps.src}
          alt={imageProps.alt}
          width={imageProps.width}
          height={imageProps.height}
          className="rounded-lg mb-4 self-center"
        />
        <CardTitle className="text-zinc-200">{title}</CardTitle>
        <CardDescription className="text-zinc-400">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
        <div className="flex space-x-2">
          <Button size="sm" variant="outline" asChild>
            <Link href={codeLink} target="_blank">
              <Github className="mr-2 h-4 w-4" />
              Código
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href={demoLink} target="_blank">
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
