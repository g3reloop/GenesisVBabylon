import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types (to be updated based on your Supabase schema)
export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          updated_at?: string;
        };
      };
      analytics: {
        Row: {
          id: string;
          page: string;
          visits: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          page: string;
          visits?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          page?: string;
          visits?: number;
          updated_at?: string;
        };
      };
      music_plays: {
        Row: {
          id: string;
          song_name: string;
          user_id?: string;
          played_at: string;
        };
        Insert: {
          id?: string;
          song_name: string;
          user_id?: string;
          played_at?: string;
        };
        Update: {
          id?: string;
          song_name?: string;
          user_id?: string;
          played_at?: string;
        };
      };
    };
  };
}

// Analytics functions
export const trackPageView = async (page: string) => {
  try {
    const { data, error } = await supabase
      .from('analytics')
      .upsert(
        { page, visits: 1 },
        { 
          onConflict: 'page',
          ignoreDuplicates: false 
        }
      )
      .select();
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error tracking page view:', error);
  }
};

// Music analytics
export const trackMusicPlay = async (songName: string, userId?: string) => {
  try {
    const { data, error } = await supabase
      .from('music_plays')
      .insert({
        song_name: songName,
        user_id: userId,
        played_at: new Date().toISOString()
      })
      .select();
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error tracking music play:', error);
  }
};

// User management
export const createUser = async (email: string) => {
  try {
    const { data, error } = await supabase
      .from('users')
      .insert({ email })
      .select();
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error creating user:', error);
  }
};

export const getUser = async (email: string) => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error getting user:', error);
  }
};


