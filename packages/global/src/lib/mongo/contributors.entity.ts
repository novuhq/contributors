import mongoose from "mongoose";
import {Attributes} from "../../../../worker/src/services/orbit/orbit";

interface AddedAttributes {
  last_sync: Date;
  totalPulls: number;
  pulls: any;
  totalLast3MonthsPulls: number;
  last3MonthsPulls: any;
}

export const Contributors = mongoose.model<Attributes & AddedAttributes>('contributors', new mongoose.Schema({
  activities_count: Number,
  activities_score: Number,
  last_sync: Date,
  avatar_url: String,
  bio: String,
  birthday: String,
  company: String,
  title: String,
  created_at: Date,
  deleted_at: Date,
  first_activity_occurred_at: Date,
  last_activity_occurred_at: Date,
  location: String,
  name: String,
  pronouns: String,
  reach: Number,
  shipping_address: String,
  slug: String,
  source: String,
  teammate: Boolean,
  tshirt: String,
  updated_at: Date,
  merged_at: Date,
  url: String,
  orbit_url: String,
  created: Boolean,
  id: String,
  orbit_level: Number,
  love: String,
  twitter: String,
  github: {type: String, index: true, unique: true},
  email: String,
  devto: String,
  linkedin: String,
  discord: String,
  github_followers: Number,
  twitter_followers: Number,
  topics: [String],
  languages: [String],
  pulls: [Object],
  last3MonthsPulls: [Object],
  totalPulls: {type: Number, index: true, unique: true},
  totalLast3MonthsPulls: {type: Number, index: true, unique: true}
}));
