import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    user_id: v.string(),
    email: v.string(),
    first_name: v.string(),
    last_name: v.optional(v.string()),
    image_url: v.optional(v.string()),
  }),
});
