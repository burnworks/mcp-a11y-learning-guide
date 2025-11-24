export type PriorityLevel = "must-read" | "recommended" | "optional";
export type TechniquePriority = "high" | "medium" | "low";
export type WCAGLevel = "A" | "AA" | "AAA";
export type TechniqueType = "html" | "css" | "aria" | "script" | "general" | "server";

export interface Criterion {
  id: string;
  level: WCAGLevel;
  title: string;
  wcag_url: string;
  understanding_url: string;
  wcag_url_ja?: string;
  understanding_url_ja?: string;
  priority: PriorityLevel;
  description: string;
}

export interface Technique {
  id: string;
  title: string;
  url: string;
  url_ja?: string;
  type: TechniqueType;
  priority: TechniquePriority;
  applies_to?: string[];
}

export interface Failure {
  id: string;
  title: string;
  url: string;
  url_ja?: string;
  priority: TechniquePriority;
  applies_to?: string[];
}

export interface TopicMapping {
  topic: string;
  keywords: string[];
  references: {
    criteria: Criterion[];
    techniques: Technique[];
    failures: Failure[];
  };
  learning_path: string;
  related_topics?: string[];
}
