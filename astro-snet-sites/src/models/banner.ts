export interface Banner {
	id: string;
	titulo: string;
	subtitulo: string;
	imagen: ImgFile;
	url: string;
	filesize: number;
	width: number;
	height: number;
  
}

export interface ImgFile {
	width: number;
	height: number;
	mimeType: string;
	filesize: number;
	filename: string;
	url: string;
    alt: string;
    sizes: BannerImgSize;
}

export interface BannerImgSize {
	thumbnail: ImgFile;
	card: ImgFile;
	banner: ImgFile;
	tablet: ImgFile;
}