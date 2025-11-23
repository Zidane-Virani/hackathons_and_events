import Explore_button from "@/components/ExploreButton"
import EventCard from "@/components/EventCard";
import { events } from "@/lib/constants";


const Page = () => {
  return (
    <section>
      <h1 className="text-center">
        Dev Events <br /> 
      </h1>
      <p className="text-center mt-5">
        Hackathons and Conferences, All in One Place
      </p>

      
      <Explore_button/>
      <h3>Featured Events</h3>
      <ul className="events">
        {events.map((event) => (
          <li key = {event.title}>
            <EventCard {...event} />
          </li>
          
        ))}
      </ul>
    </section>
  )
}

export default Page