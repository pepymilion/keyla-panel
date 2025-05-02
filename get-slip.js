import { createClient } from './supabase.js';

const supabaseUrl = 'https://mfoiyruematmlkphxvii.supabase.co';
const supabaseKey = 'eyJhbGciOi...'; // samain kaya yang kamu pakai

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

  return data; // <== WAJIB ADA INI!
}
