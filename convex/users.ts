import { internalMutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createUser = internalMutation({
  args: {
    user_id: v.string(),
    email: v.string(),
    first_name: v.string(),
    last_name: v.optional(v.string()),
    image_url: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("users", { ...args });
  },
});

export const deleteUser = internalMutation({
  args: {
    user_id: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("user_id"), args.user_id))
      .unique();

    if (!user) throw new Error("Server Error");

    await ctx.db.delete(user._id);
  },
});

export const getCurrentUser = query({
  handler: async (ctx) => {
    const userData = await ctx.auth.getUserIdentity();

    if (userData === null) throw new Error("Unauthorized");

    return await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), userData.email))
      .unique();
  },
});
