import HomeTeam from "./HomeTeam";
import AwayTeam from "./AwayTeam";
import League from "./League";

export default interface Match {
    Id: string
    HomeTeam: HomeTeam
    AwayTeam: AwayTeam
    Score: string
    League: League
    Date: string
    TicketsAvailable: boolean
    ShowTicketsButton: boolean
    Result: string
    Hashtag?: string
    MatchcenterLink?: string
    TicketshopLink?: string
    TicketInformationLink?: string
}