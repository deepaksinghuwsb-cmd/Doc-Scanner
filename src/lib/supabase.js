import {createClient} from '@supabase/supabase-js';
const url=import.meta.env.VITE_SUPABASE_URL,key=import.meta.env.VITE_SUPABASE_ANON_KEY;
export const supabase=url&&key&&!url.includes('your_supabase')&&!key.includes('your_supabase')?createClient(url,key):null;
