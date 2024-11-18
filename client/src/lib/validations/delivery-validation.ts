import * as z from "zod";

const DeliveryDetails = z.object({
  fullname: z.string(),
  email: z.string(),
  phone_number: z.string(),
  address: z.string(),
  city: z.string(),
  country: z.string(),
  state: z.string(),
  zipcode: z.string().optional(),
});

export type DeliveryDetailsTS = z.infer<typeof DeliveryDetails>;
export { DeliveryDetails };
