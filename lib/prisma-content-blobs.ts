import { Inter_Tight } from "next/font/google";

export interface UniverseContentBlob {
    description: string;
    imageId?: string;
}

export interface PersonaContentBlob {
    // Core identity and description
    description: string;
    imageId?: string;
    appearance?: string;
    costumes?: string[];

    // Background and affiliations
    faction?: string;
    backstory?: string;
    secrets?: string[];

    // Relationships
    relationships?: Map<string, string>;

    // Personality and psychology
    traits?: string[];
    values?: string[];
    motivations?: string[];
    goals?: string[];
    strengths?: string[];
    weaknesses?: string[];
    fears?: string[];

    // Habits and mannerisms
    habits?: string[];
    mannerisms?: string[];
    speechExamples?: Map<string, string[]>;

    // Skills
    skills?: Map<string, string>;
    abilities?: Map<string, string>;
}

export interface TimelineContentBlob {
    description: string;
    events?: Map<string, {
        description: string;
        date: string;
        location: string;
        participants: string[];
    }>;
}

export interface SessionContentBlob {
    description: string;
}

export interface HistoryContentBlob {
    history: JSON;
}

export interface ConceptContentBlob {
    concepts: Map<string, string>;
}

export interface ActorContentBlob {
    // Core identity and description
    description: string;
    imageId?: string;
    appearance?: string;
    costumes?: string[];

    // Background and affiliations
    faction?: string;
    backstory?: string;
    secrets?: string[];

    // Relationships
    relationships?: Map<string, string>;

    // Personality and psychology
    traits?: string[];
    values?: string[];
    motivations?: string[];
    goals?: string[];
    strengths?: string[];
    weaknesses?: string[];
    fears?: string[];

    // Habits and mannerisms
    habits?: string[];
    mannerisms?: string[];
    speechExamples?: Map<string, string[]>;

    // Skills
    skills?: Map<string, string>;
    abilities?: Map<string, string>;
}