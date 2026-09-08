import { supabase } from '@/lib/supabase'

export type Pet = {
  id?: string
  tutor_id?: string
  nome: string
  especie?: string
  raca?: string
  data_nascimento?: string
  foto_url?: string
  video_url?: string
  observacoes?: string
}

// CREATE
export async function criarPet(pet: Pet) {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Usuário não autenticado')

  const { data, error } = await supabase
    .from('pets')
    .insert({ ...pet, tutor_id: user.id })
    .select()
    .single()

  if (error) throw error
  return data
}

// READ - lista os pets do tutor logado
export async function listarMeusPets() {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Usuário não autenticado')

  const { data, error } = await supabase
    .from('pets')
    .select('*')
    .eq('tutor_id', user.id)

  if (error) throw error
  return data
}

// READ - um pet específico
export async function getPet(id: string) {
  const { data, error } = await supabase
    .from('pets')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}

// UPDATE
export async function atualizarPet(id: string, campos: Partial<Pet>) {
  const { data, error } = await supabase
    .from('pets')
    .update(campos)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

// DELETE
export async function deletarPet(id: string) {
  const { error } = await supabase.from('pets').delete().eq('id', id)
  if (error) throw error
}