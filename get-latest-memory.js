import { createClient } from 'https://esm.sh/@supabase/supabase-js'

const supabaseUrl = 'https://mfoiyruematmlkphxvii.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mb2l5cnVlbWF0bWxrcGh4dmlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxNzEyMTgsImV4cCI6MjA2MTc0NzIxOH0.ho-DpN7naxQeo60l-1vSSUzMUxFUiUSE9fAVvigijAI'

const supabase = createClient(supabaseUrl, supabaseKey)

export async function getLatestMemory() {
  const { data, error } = await supabase
    .from('memory')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(1)

  if (error) {
    console.error('Gagal ambil memory:', error.message)
    return null
  }

  return data[0]
}
