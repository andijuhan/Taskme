export type Json =
   | string
   | number
   | boolean
   | null
   | { [key: string]: Json }
   | Json[];

export interface Database {
   public: {
      Tables: {
         projects: {
            Row: {
               id: number;
               title: string;
            };
            Insert: {
               id?: number;
               title: string;
            };
            Update: {
               id?: number;
               title?: string;
            };
         };
         taskBoard: {
            Row: {
               created_at: string;
               id: number;
               index: number;
               projectId: number;
               title: string;
            };
            Insert: {
               created_at?: string;
               id?: number;
               index: number;
               projectId: number;
               title: string;
            };
            Update: {
               created_at?: string;
               id?: number;
               index?: number;
               projectId?: number;
               title?: string;
            };
         };
         taskItems: {
            Row: {
               created_at: string;
               id: number;
               index: number;
               projectId: number | null;
               taskBoardId: number;
               title: string;
            };
            Insert: {
               created_at?: string;
               id?: number;
               index?: number;
               projectId?: number | null;
               taskBoardId: number;
               title: string;
            };
            Update: {
               created_at?: string;
               id?: number;
               index?: number;
               projectId?: number | null;
               taskBoardId?: number;
               title?: string;
            };
         };
      };
      Views: {
         [_ in never]: never;
      };
      Functions: {
         [_ in never]: never;
      };
      Enums: {
         [_ in never]: never;
      };
      CompositeTypes: {
         [_ in never]: never;
      };
   };
}
