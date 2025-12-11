import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  donations: defineTable({
    clerkUserId: v.string(),
    amountCents: v.number(),
    currency: v.string(),
    status: v.string(),
    stripeSessionId: v.string(),
    stripePaymentIntentId: v.string(),
    createdAt: v.number(),
  })
    .index("by_user", ["clerkUserId"])
    .index("by_session", ["stripeSessionId"]),
});
