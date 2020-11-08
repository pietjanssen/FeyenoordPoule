import Season from "./Season";

export default interface League {
    Id: string
    Name: string
    LeagueName: string
    LeagueType: string
    Logo?: string
    Season: Season
}