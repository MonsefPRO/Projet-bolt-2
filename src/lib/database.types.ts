export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      devis: {
        Row: {
          id: string
          nom: string
          prenom: string
          email: string
          telephone: string
          code_postal: string
          ville: string
          service: string
          surface: string | null
          message: string | null
          statut: string
          created_at: string | null
        }
        Insert: {
          id?: string
          nom: string
          prenom: string
          email: string
          telephone: string
          code_postal: string
          ville: string
          service: string
          surface?: string | null
          message?: string | null
          statut?: string
          created_at?: string | null
        }
        Update: {
          id?: string
          nom?: string
          prenom?: string
          email?: string
          telephone?: string
          code_postal?: string
          ville?: string
          service?: string
          surface?: string | null
          message?: string | null
          statut?: string
          created_at?: string | null
        }
      }
      blog_articles: {
        Row: {
          id: string
          titre: string
          slug: string
          contenu: string
          image_url: string | null
          auteur: string
          categorie: string
          publie: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          titre: string
          slug: string
          contenu: string
          image_url?: string | null
          auteur?: string
          categorie: string
          publie?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          titre?: string
          slug?: string
          contenu?: string
          image_url?: string | null
          auteur?: string
          categorie?: string
          publie?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      realisations: {
        Row: {
          id: string
          titre: string
          description: string
          service: string
          localisation: string
          date_realisation: string
          images: Json
          visible: boolean | null
          created_at: string | null
        }
        Insert: {
          id?: string
          titre: string
          description: string
          service: string
          localisation: string
          date_realisation: string
          images?: Json
          visible?: boolean | null
          created_at?: string | null
        }
        Update: {
          id?: string
          titre?: string
          description?: string
          service?: string
          localisation?: string
          date_realisation?: string
          images?: Json
          visible?: boolean | null
          created_at?: string | null
        }
      }
      contacts: {
        Row: {
          id: string
          nom: string
          email: string
          telephone: string | null
          sujet: string
          message: string
          lu: boolean | null
          created_at: string | null
        }
        Insert: {
          id?: string
          nom: string
          email: string
          telephone?: string | null
          sujet: string
          message: string
          lu?: boolean | null
          created_at?: string | null
        }
        Update: {
          id?: string
          nom?: string
          email?: string
          telephone?: string | null
          sujet?: string
          message?: string
          lu?: boolean | null
          created_at?: string | null
        }
      }
      newsletter: {
        Row: {
          id: string
          email: string
          actif: boolean | null
          created_at: string | null
        }
        Insert: {
          id?: string
          email: string
          actif?: boolean | null
          created_at?: string | null
        }
        Update: {
          id?: string
          email?: string
          actif?: boolean | null
          created_at?: string | null
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
  }
}
