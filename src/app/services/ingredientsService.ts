import { supabase } from "./supabase"

export async function findAll() {
  const {data} =  await supabase.from("Ingredients").select().order("name").returns<IngredientResponse[]>()

    return data ?? []
}

