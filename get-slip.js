import { createClient } from './supabase.js';

const supabaseUrl = 'https://mfoiyruematmlkphxvii.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mb2l5cnVlbWF0bWxrcGh4dmlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxNzEyMTgsImV4cCI6MjA2MTc0NzIxOH0.ho-DpN7naxQeo60l-1vSSUzMUxFUiUSE9fAVvigijAI';

const supabase = createClient(supabaseUrl, supabaseKey);

export async function getAllSlip() {
  const { data, error } = await supabase
    .from('slip')
    .select('*')
    .order('tanggal', { ascending: false });

  if (error) {
    console.error('Gagal ambil data slip:', error.message);
    return [];
  }

  return data;
}
