import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meertup",
    image:
      "https://vtv1.mediacdn.vn/thumb_w/600/2018/4/14/58d919eaf2d0331b008b4bbd-750-562-15236798033729910265.jpg",
    address: "Some address 5, 1234 Some City",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meertup",
    image:
      "https://vtv1.mediacdn.vn/thumb_w/600/2018/4/14/58d919eaf2d0331b008b4bbd-750-562-15236798033729910265.jpg",
    address: "Some address 110, 1234 Some City",
    description: "This is a second meetup",
  },
  {
    id: "m3",
    title: "A Third Meertup",
    image:
      "https://vtv1.mediacdn.vn/thumb_w/600/2018/4/14/58d919eaf2d0331b008b4bbd-750-562-15236798033729910265.jpg",
    address: "Some address 54, 1234 Some City",
    description: "This is a third meetup",
  },
];

function HomePage() {
  const [loadedMeetups, setLoadMeetups] = useState([]);

  useEffect(() => {
    // send a http request and fetch data
    setLoadMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={loadedMeetups} />;
}

export default HomePage;
