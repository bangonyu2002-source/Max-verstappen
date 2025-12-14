// src/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cbbuadleqklcikdvbmva.supabase.co'; 
const supabaseKey = 'sb_publishable_CGqZe_UpVDtRRAD9t0qbNw_QrT5r8hv'; 

export const supabase = createClient(supabaseUrl, supabaseKey);