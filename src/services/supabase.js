import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://jshsdlzzijjtmsxyuhac.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzaHNkbHp6aWpqdG1zeHl1aGFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUwODQ2MDMsImV4cCI6MjA0MDY2MDYwM30.bnLBQIq0R___ZobZwOdBhdL84zUJZLBiH1jGRZeOEaI";
// const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
