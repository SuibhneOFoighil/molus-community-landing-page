import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  signups: defineTable({
    name: v.string(),
    email: v.string(),
    createdAt: v.number(),   // Date.now()
  }),
}); 