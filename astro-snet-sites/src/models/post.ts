import type { ImgFile } from "./banner";

export interface post {
    titulo: string;
    extracto: string;
    contenido: [];
    imagen: ImgFile;
    slug: string;
}

export interface posts {
    docs: post[];    
}