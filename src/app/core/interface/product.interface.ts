export interface IProduct{
  key?: string;
  title: string;
  shortTiltle: string;
  slug: string;
  icon:string;
  icon2:string;
  image: string | null;
  gif:string;
  coverage: string | null;
  interest:string | null;
  description: string | null;
  publish: boolean;
  created_at: string;
  updated_at: string;
}
