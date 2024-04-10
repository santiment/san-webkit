export declare const PLAN_BUTTON_CLICKED = "PLAN_BUTTON_CLICKED";
export declare function onPlanChangeSuccess(customer$: SAN.CustomerStore, planName: string): void;
export declare function onPlanChangeError(error: any): Promise<never>;
export declare function checkIsUpgrade(plan: SAN.Plan, subscription?: SAN.Subscription | null): boolean | undefined;
