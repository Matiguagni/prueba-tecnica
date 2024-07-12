export interface Artwork {
  id: number;
  title: string;
  artist_title: string;
  image_id: string; //UUID
}

export interface ArtworksResponse {
  data: Artwork[];
  config: {
    iiif_url: string;
  };
}

export interface ArtworkDetail {
  data: {
    id: number;
    artist_display: string;
    title: string;
    artist_title: string;
    image_id: string;
    exhibition_history: string;
    credit_line: string;
    date_start: number;
    date_end: number;
    description: string;
    dimensions: string;
    place_of_origin: string;
    publication_history: string;
  };
  config: {
    iiif_url: string;
  };
}
