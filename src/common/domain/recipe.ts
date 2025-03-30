export interface Recipe {
  id: string
  name: string
  description: string
  difficulty: 'easy' | 'medium' | 'hard'
  settings: BrewingSettings
  steps: ExtractionStep[]
  metadata: RecipeMetadata
}

export interface BrewingSettings {
  dripper: string
  coffeeWeight: string
  waterAmount: string
  waterTemp: string
  grinder: string
}

export interface ExtractionStep {
  time: string
  water: string
  total: string
  description: string
}

export interface RecipeMetadata {
  createdAt: Date
  updatedAt: Date
  createdBy: string
  isPublished: boolean
}
