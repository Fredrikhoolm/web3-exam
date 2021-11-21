namespace MmaAthletesApi.Interfaces
{
    public interface IMmaAthlete
    {
        string Id {get; set;}
        string Name {get; set;}
        string Image {get; set;}
        string Age {get; set;}
        string Nationality {get; set;}
        string Record {get; set;}
        string Style {get; set;}
        string Division {get; set;}
        string Nickname {get; set;}
    }
}