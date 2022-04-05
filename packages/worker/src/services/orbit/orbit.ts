import axios from 'axios';

  export interface Attributes {
    activities_count: number;
    activities_score: number;
    avatar_url: string;
    bio: string;
    birthday: string;
    company: string;
    title: string;
    created_at: Date;
    deleted_at?: any;
    first_activity_occurred_at: Date;
    last_activity_occurred_at: Date;
    location: string;
    name: string;
    pronouns: string;
    reach?: number;
    shipping_address: string;
    slug: string;
    source: string;
    tag_list: any[];
    tags: any[];
    teammate: boolean;
    tshirt: string;
    updated_at: Date;
    merged_at?: Date;
    url: string;
    orbit_url: string;
    created: boolean;
    id: string;
    orbit_level?: number;
    love: string;
    twitter: string;
    github: string;
    discourse?: any;
    email: string;
    devto?: any;
    linkedin?: any;
    discord: string;
    github_followers?: number;
    twitter_followers?: number;
    topics: string[];
    languages: string[];
  }

  export interface Datum2 {
    id: string;
    type: string;
  }

  export interface Identities {
    data: Datum2[];
  }

  export interface Relationships {
    identities: Identities;
  }

  export interface Datum {
    id: string;
    type: string;
    attributes: Attributes;
    relationships: Relationships;
  }

  export interface Attributes2 {
    uid: string;
    email: string;
    username: string;
    name: string;
    source: string;
    source_host: string;
  }

  export interface Included {
    id: string;
    type: string;
    attributes: Attributes2;
  }

  export interface Links {
    first: string;
    prev?: any;
    next: string;
  }

  export interface OrbitInterface {
    data: Datum[];
    included: Included[];
    links: Links;
  }

const orbit = axios.create({
  baseURL: 'https://app.orbit.love/api/v1/notifire',
  headers: {
    Authorization: `Bearer ${process.env.ORBIT}`
  }
})
export class Orbit {
  static async getMembersList(link = '/members?items=100&page=1&activity_type=fork%3Acreated'): Promise<OrbitInterface> {
    return (await orbit.get(link)).data;
  }

  static async getAllMemberList(next?: string): Promise<Datum[]> {
    const load = await Orbit.getMembersList(next);
    return [
      ...load.data,
      ...load?.links?.next && load?.data?.length ? (await Orbit.getAllMemberList(load?.links?.next)) : []
    ]
  }
}
