import { Model } from "objection";

export default class Branch extends Model {
  branch_id: number | undefined;
  branch: string | undefined;
  static get tableName() {
    return "branch";
  }
}
