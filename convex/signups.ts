import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// store a new signup
export const addSignup = mutation({
  args: { name: v.string(), email: v.string() },
  handler: async (ctx, { name, email }) => {
    await ctx.db.insert("signups", { name, email, createdAt: Date.now() });
  },
});

// list all signups, newest first
export const listSignups = query({
  args: {},
  handler: async (ctx) => ctx.db
    .query("signups")
    .order("desc")          // newest → oldest
    .collect(),
}); 