import { Recipe, BrewingSettings, ExtractionStep, RecipeMetadata } from '../domain/recipe'

export class MarkdownRecipeParser {
  static parse(content: string): Recipe {
    // frontmatter 파싱
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
    if (!frontmatterMatch) {
      throw new Error('Invalid markdown format: missing frontmatter')
    }

    const [, frontmatter, markdown] = frontmatterMatch
    const metadata = this.parseFrontmatter(frontmatter)

    // 설정과 단계 파싱
    const { settings, steps } = this.parseContent(markdown)

    return {
      ...metadata,
      settings,
      steps,
    }
  }

  private static parseFrontmatter(
    frontmatter: string,
  ): Partial<Recipe> & { metadata: RecipeMetadata } {
    const lines = frontmatter.split('\n')
    const data: any = {}

    lines.forEach((line) => {
      const [key, value] = line.split(':').map((s) => s.trim())
      if (key && value) {
        if (key === 'createdAt' || key === 'updatedAt') {
          data[key] = new Date(value)
        } else if (key === 'isPublished') {
          data[key] = value === 'true'
        } else {
          data[key] = value
        }
      }
    })

    return {
      id: data.id,
      name: data.name,
      description: data.description,
      difficulty: data.difficulty,
      metadata: {
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        createdBy: data.createdBy,
        isPublished: data.isPublished,
      },
      settings: {} as BrewingSettings,
      steps: [],
    }
  }

  private static parseContent(content: string): {
    settings: BrewingSettings
    steps: ExtractionStep[]
  } {
    const sections = content.split('##')
    const settings: BrewingSettings = {
      dripper: '',
      coffeeWeight: '',
      waterAmount: '',
      waterTemp: '',
      grinder: '',
    }
    const steps: ExtractionStep[] = []

    sections.forEach((section) => {
      const lines = section
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean)
      if (lines[0] === '설정') {
        this.parseSettings(lines.slice(1), settings)
      } else if (lines[0] === '추출 단계') {
        this.parseSteps(lines.slice(1), steps)
      }
    })

    return { settings, steps }
  }

  private static parseSettings(lines: string[], settings: BrewingSettings): void {
    lines.forEach((line) => {
      const [key, value] = line.split(':').map((s) => s.trim())
      if (key && value) {
        switch (key) {
          case '드리퍼':
            settings.dripper = value
            break
          case '커피 무게':
            settings.coffeeWeight = value
            break
          case '물의 량':
            settings.waterAmount = value
            break
          case '물의 온도':
            settings.waterTemp = value
            break
          case '그라인더':
            settings.grinder = value
            break
        }
      }
    })
  }

  private static parseSteps(lines: string[], steps: ExtractionStep[]): void {
    let currentStep: Partial<ExtractionStep> = {}
    let stepNumber = 1

    lines.forEach((line) => {
      if (line.startsWith(`${stepNumber}.`)) {
        if (Object.keys(currentStep).length > 0) {
          steps.push(currentStep as ExtractionStep)
        }
        currentStep = { description: line.replace(`${stepNumber}.`, '').trim() }
        stepNumber++
      } else if (line.startsWith('-')) {
        const [key, value] = line
          .replace('-', '')
          .split(':')
          .map((s) => s.trim())
        if (key && value) {
          switch (key) {
            case '시간':
              currentStep.time = value
              break
            case '물':
              currentStep.water = value
              break
            case '총량':
              currentStep.total = value
              break
          }
        }
      }
    })

    if (Object.keys(currentStep).length > 0) {
      steps.push(currentStep as ExtractionStep)
    }
  }
}
