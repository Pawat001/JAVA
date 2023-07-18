const finalParticipants = ["Taylor", "Donald", "Natasha", "Boby"];

const announcements = finalParticipants.map((member) => {
    return member + ' joined the contest.';
});
console.log(announcements);