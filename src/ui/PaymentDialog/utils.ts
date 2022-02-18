export function mapPlans(plans: SAN.Plan[], plansFilter: (plan: SAN.Plan) => boolean) {
  const PlanBillings = {} as { [key: string]: SAN.Plan[] }

  plans.forEach((plan) => {
    if (!plansFilter(plan)) return

    const planBillings = PlanBillings[plan.name]
    if (planBillings) planBillings.push(plan)
    else PlanBillings[plan.name] = [plan]
  })

  return (Object.values(PlanBillings) as any).flat()
}
