import { supabase } from './supabase.js'

export async function getLatestMemory() {
  const { data, error } = await supabase
    .from('memory')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(1)

  if (error) {
    console.error('Gagal mengambil data memory:', error)
    return null
  }

  return data[0]
}
