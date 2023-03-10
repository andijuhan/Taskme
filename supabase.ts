export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      projects: {
        Row: {
          dateAdded: string
          deadlinedate: string | null
          description: string | null
          id: number
          title: string | null
        }
        Insert: {
          dateAdded?: string
          deadlinedate?: string | null
          description?: string | null
          id?: number
          title?: string | null
        }
        Update: {
          dateAdded?: string
          deadlinedate?: string | null
          description?: string | null
          id?: number
          title?: string | null
        }
      }
      task: {
        Row: {
          created_at: string | null
          id: number
          title: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          title?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          title?: string | null
        }
      }
      taskItems: {
        Row: {
          created_at: string | null
          id: number
          taskId: number | null
          title: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          taskId?: number | null
          title?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          taskId?: number | null
          title?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
