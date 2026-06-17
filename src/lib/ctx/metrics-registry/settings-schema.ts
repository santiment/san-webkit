import { z } from 'zod'

export const zodSettingsSchema = z.object({
  version: z.number(),
  type: z.literal('object'),
  required: z.array(z.string()),
  properties: z.record(
    z.string(),
    z.union([
      z.object({
        label: z.string(),
        type: z.enum(['integer', 'number']),
        placeholder: z.optional(z.string()),
        minimum: z.optional(z.number()),
        maximum: z.optional(z.number()),
        default: z.optional(z.number()),
      }),
      z.object({
        label: z.string(),
        enumType: z.enum([
          'allExchanges',
          'availableLabelFqns',
          'getLabelBasedMetricOwners',
          'getLabelBasedMetricLabels',
        ]),
        placeholder: z.optional(z.string()),
        default: z.optional(z.any()),
      }),
    ]),
  ),
})

export type TSettingsSchema = z.infer<typeof zodSettingsSchema>

export const zodGranularityRulesSchema = z
  .array(
    z.object({
      maxTimeRangeDays: z
        .number()
        .nullish()
        .transform((value) => value ?? Infinity),
      value: z.string(),
    }),
  )
  .min(1)
  .transform((val) => val.sort((a, b) => a.maxTimeRangeDays - b.maxTimeRangeDays))

export type TGranularityRulesSchema = z.infer<typeof zodGranularityRulesSchema>
