declare namespace Film {
  declare type Item = {
    id: string;
    title: string;
    banner: string;
    description: string;
    director: string;
    producer: string;
  };

  declare type List = {
    docs: Item[];
    total: number;
    limit: number;
    page: string;
    pages: number;
  };
}
