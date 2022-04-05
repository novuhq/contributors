import {gql} from "apollo-server";

export const contributorsGql = gql`
  type Contributors {
    activities_count: Int
    activities_score: Int
    last_sync: String
    avatar_url: String
    bio: String
    birthday: String
    company: String
    title: String
    created_at: String
    deleted_at: String
    first_activity_occurred_at: String
    last_activity_occurred_at: String
    location: String
    name: String
    pronouns: String
    reach: Int
    shipping_address: String
    slug: String
    source: String
    teammate: Boolean
    tshirt: String
    updated_at: String
    merged_at: String
    url: String
    orbit_url: String
    created: Boolean
    id: String
    orbit_level: Int
    love: String
    twitter: String
    github: String
    email: String
    devto: String
    linkedin: String
    discord: String
    github_followers: Int
    twitter_followers: Int
    topics: [String]
    languages: [String]
    pulls: [String]
  }
`
