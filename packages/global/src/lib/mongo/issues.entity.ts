import mongoose from "mongoose";
import {Attributes} from "../../../../worker/src/services/orbit/orbit";

interface AddedAttributes {
  toUpdate: boolean;
  issues: any;
}

export const Issues = mongoose.model<Attributes & AddedAttributes>('issues', new mongoose.Schema({
  toUpdate: {type: Boolean, default: false},
  issues: {type: Object},
}));
