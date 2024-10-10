import axios from "axios";


interface FetchImagesParams {
  query: string;
  perPage?: number;
  page?: number;
}
export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  alt_description: string;
}

interface UnsplashResponse {
  results: Image[];
  total: number;
  total_pages: number;
}
export const fetchImages = async ({
  query,
  perPage = 9,
  page = 1,
}: FetchImagesParams): Promise<UnsplashResponse> => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query,
      per_page: perPage,
      page,
    },
    headers: {
      Authorization: "Client-ID 2OkJzAnsD0wp_4t3Qy_w5q6_LXRpgwyA-cf18aa4_LA",
    },
  });
  return response.data;
};