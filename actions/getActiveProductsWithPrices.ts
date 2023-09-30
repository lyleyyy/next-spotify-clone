import { ProductWithPrice } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getActiveProductsWithPrices = async (): Promise<ProductWithPrice[]> => {
  const supabase = createServerComponentClient({
    // headers: headers,
    cookies: cookies,
  });

  const { data, error } = await supabase
    .from("products")
    .select("*, prices(*)")
    .eq("active", true)
    .order("metadata->index")
    .order("unit_amount", { foreignTable: "prices" });

  if (error) {
    console.log(error.message);
  }

  return (data as any) || [];
};

export default getActiveProductsWithPrices;
