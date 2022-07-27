import { useLoaderData } from "@remix-run/react";
import { supabase } from "~/supabaseClient";

export async function loader() {
    let { data, error, status } = await supabase.from("profiles").select("id, displayName");
    return data;
}

export default function Index() {
    const users = useLoaderData();
    console.log(users);

    return (
        <div>
            <div className="text-3xl">Welcome to the Synthwave Stack</div>
        </div>
    );
}
