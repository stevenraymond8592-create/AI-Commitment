
// Fix: Import React to resolve 'Cannot find namespace React' for React.ReactNode
import React from 'react';

export interface Commitment {
  id: number;
  title: string;
  subtitle: string;
  rationale: string;
  actionStep: string;
  example: string;
  revisionPlan: string;
  color: string;
  icon: React.ReactNode;
}

export type ToolType = 'error-analysis' | 'personalizer' | 'hint-bot';

export interface AIResponse {
  content: string;
  error?: string;
  metadata?: any;
}
