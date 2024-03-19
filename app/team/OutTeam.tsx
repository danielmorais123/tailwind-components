export default function OutTeam() {
  const team = [
    {
      url: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      name: "Michael Foster",
      job: "Co-Founder / CTO",
    },
    {
      url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      name: "Dries Vincent",
      job: "Business Relations",
    },
    {
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      name: "Lindsay Walton",
      job: "Front-end Developer",
    },
    {
      url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      name: "Courtney Henry",
      job: "Designer",
    },
    {
      url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      name: "Tom Cook",
      job: "Director of Product",
    },
    {
      url: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      name: "Whitney Francis",
      job: "Copywriter",
    },
    {
      url: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      name: "Leonard Krasner",
      job: "Senior Designer",
    },
    {
      url: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      name: "Floyd Miles",
      job: "Principal Designer",
    },
    {
      url: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      name: "Emily Selman",
      job: "VP, User Experience",
    },
    {
      url: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      name: "Kristin Watson",
      job: "VP, Human Resources",
    },
    {
      url: "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      name: "Emma Dorsey",
      job: "Senior Developer",
    },
    {
      url: "https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      name: "Alicia Bell",
      job: "Junior Copywriter",
    },
    {
      url: "https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      name: "Jenny Wilson",
      job: "Studio Artist",
    },
    {
      url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      name: "Anna Roberts",
      job: "Partner, Creative",
    },
    {
      url: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      name: "Benjamin Russel",
      job: "Director, Print Operations",
    },
  ];
  return (
    <div className=" flex flex-col">
      <div className=" w-[95%] lg:w-[80%] mx-auto flex flex-col gap-8">
        {" "}
        <div className="flex flex-col gap-8 px-3 max-w-2xl">
          <p className="font-bold text-4xl">Our Team</p>
          <p className="text-lg text-normal">
            We're a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 gap-y-10 place-items-center">
          {team.map((team, idx) => (
            <div key={idx} className="flex flex-col items-center gap-4">
              <img src={team.url} className="w-24 h-24 rounded-full" alt="" />
              <div className="flex flex-col gap-1 items-center">
                <p>{team.name}</p>
                <p className="text-normal text-sm">{team.job}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
