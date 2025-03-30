import { Recipe } from '../domain/recipe'
import { MarkdownRecipeParser } from './markdown-parser'

export class RecipeLoader {
  async loadRecipe(id: string): Promise<Recipe> {
    try {
      const response = await fetch(`/recipes/${id}.md`)
      if (!response.ok) {
        throw new Error(`Failed to load recipe: ${id}`)
      }
      const content = await response.text()
      return MarkdownRecipeParser.parse(content)
    } catch (error) {
      console.error('Error loading recipe:', error)
      throw error
    }
  }

  async loadAllRecipes(): Promise<Recipe[]> {
    try {
      const response = await fetch('/recipes/index.json')
      if (!response.ok) {
        throw new Error('Failed to load recipe index')
      }
      const recipeIds = await response.json()
      return Promise.all(recipeIds.map((id: string) => this.loadRecipe(id)))
    } catch (error) {
      console.error('Error loading recipes:', error)
      throw error
    }
  }
}
