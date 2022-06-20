function MeetupDetails() {
  return (
    <>
      <img
        src="https://vtv1.mediacdn.vn/thumb_w/600/2018/4/14/58d919eaf2d0331b008b4bbd-750-562-15236798033729910265.jpg"
        alt="A First Meetup"
      />
      <h1>A First Meetup</h1>
      <address>Some address 5, 1234 Some City</address>
      <p>This is a first meetup</p>
    </>
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(content) {
  // feth data for a single meetup

  const meetupId = content.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://vtv1.mediacdn.vn/thumb_w/600/2018/4/14/58d919eaf2d0331b008b4bbd-750-562-15236798033729910265.jpg",
        id: meetupId,
        title: "First Meetup",
        address: "Some address 5, 1234 Some City",
        description: "This is a first meetup",
      },
    },
  };
}

export default MeetupDetails;
