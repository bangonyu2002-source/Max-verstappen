// src/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cbbuadleqklcikdvbmva.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNiYnVhZGxlcWtsY2lrZHZibXZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU3MDk4MjgsImV4cCI6MjA4MTI4NTgyOH0.936Quv2A4IUc-F_gWygk0Z1nm4DBygL3m8FSXLCD--Q'; 

export const supabase = createClient(supabaseUrl, supabaseKey);