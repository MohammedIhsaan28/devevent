import EventDetailsPage from "@/components/EventDetails";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import { Suspense } from "react";

export default async function EventPage({params}:{params:Promise<{slug:string}>}) {
    const slug = params.then((p)=> p.slug);
    return(
        <main> 
            <Suspense fallback={ <LoadingSkeleton/>}>
               <EventDetailsPage params={slug}/>
            </Suspense>
        </main>
    )
}
